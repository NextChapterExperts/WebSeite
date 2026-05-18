import { promises as fs } from "fs";
import matter from "gray-matter";
import { getTranslations } from "next-intl/server";
import BlogList, { type BlogPost } from "./BlogList";
import {
  getAllBlogSlugs,
  parseBlogDateForSort,
  resolveBlogPostFile,
  SAP_BUSINESS_AI_SERIES_ID,
} from "@/lib/blogContent";

type Props = { params: Promise<{ locale: string }> };

type PostWithMeta = BlogPost & {
  series?: string;
  seriesOrder?: number;
  sortTime: number;
};

function toBlogListPost(p: PostWithMeta): BlogPost {
  return {
    slug: p.slug,
    title: p.title,
    date: p.date,
    excerpt: p.excerpt,
    cover: p.cover,
    isFallback: p.isFallback,
    sourceLocale: p.sourceLocale,
  };
}

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Blog" });
  return {
    title: `${t("pageTitle")} – Next Chapter Experts`,
    description: t("pageLead"),
  };
}

export default async function BlogIndexPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Blog" });

  const slugs = await getAllBlogSlugs();

  const posts = await Promise.all(
    slugs.map(async (slug) => {
      const resolved = await resolveBlogPostFile(slug, locale);
      if (!resolved) return null;
      const fileContents = await fs.readFile(resolved.filePath, "utf8");
      const { data } = matter(fileContents);
      const dateStr = String(data.date ?? "");
      const series = data.series != null ? String(data.series) : undefined;
      const rawOrder = data.seriesOrder != null ? Number(data.seriesOrder) : undefined;

      return {
        slug,
        title: String(data.title ?? ""),
        date: dateStr,
        excerpt: data.excerpt != null ? String(data.excerpt) : "",
        cover: data.cover != null ? String(data.cover) : "",
        isFallback: resolved.isFallback,
        sourceLocale: resolved.sourceLocale,
        series,
        seriesOrder: Number.isFinite(rawOrder) ? rawOrder : undefined,
        sortTime: parseBlogDateForSort(dateStr),
      } satisfies PostWithMeta;
    })
  );

  const validPosts = posts.filter((p) => p != null);

  const seriesTotals = new Map<string, number>();
  for (const p of validPosts) {
    if (p.series != null && p.seriesOrder != null) {
      seriesTotals.set(p.series, (seriesTotals.get(p.series) ?? 0) + 1);
    }
  }

  const sapAiSorted = validPosts
    .filter((p) => p.series === SAP_BUSINESS_AI_SERIES_ID)
    .sort((a, b) => (a.seriesOrder ?? 999) - (b.seriesOrder ?? 999));

  const sapSeriesTotal = sapAiSorted.length;

  const sapAiPosts: BlogPost[] = sapAiSorted.map((p) => ({
    ...toBlogListPost(p),
    seriesPart:
      p.seriesOrder != null ? { part: p.seriesOrder, total: sapSeriesTotal } : undefined,
  }));

  const otherPosts: BlogPost[] = validPosts
    .filter((p) => p.series !== SAP_BUSINESS_AI_SERIES_ID)
    .sort((a, b) => b.sortTime - a.sortTime)
    .map((p) => ({
      ...toBlogListPost(p),
      seriesPart:
        p.series != null && p.seriesOrder != null
          ? { part: p.seriesOrder, total: seriesTotals.get(p.series) ?? 0 }
          : undefined,
    }));

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <header className="bg-gradient-to-r from-indigo-950 via-slate-900 to-teal-950 text-white py-16 text-center">
        <h1 className="text-4xl font-bold">{t("pageTitle")}</h1>
        <p className="mt-4 text-lg">{t("pageLead")}</p>
      </header>

      <section className="max-w-6xl mx-auto px-6 py-12">
        {sapAiPosts.length > 0 ? (
          <section className="mb-14" aria-labelledby="blog-series-sap-ai-heading">
            <h2 id="blog-series-sap-ai-heading" className="text-2xl font-bold text-gray-900">
              {t("indexSeriesSapAiTitle")}
            </h2>
            <p className="mt-2 max-w-3xl text-gray-600">{t("indexSeriesSapAiLead")}</p>
            <div className="mt-8">
              <BlogList posts={sapAiPosts} />
            </div>
          </section>
        ) : null}

        {otherPosts.length > 0 ? (
          <section aria-labelledby={sapAiPosts.length > 0 ? "blog-other-posts-heading" : undefined}>
            {sapAiPosts.length > 0 ? (
              <h2 id="blog-other-posts-heading" className="mb-8 text-2xl font-bold text-gray-900">
                {t("indexOtherPostsTitle")}
              </h2>
            ) : null}
            <BlogList posts={otherPosts} />
          </section>
        ) : null}
      </section>
    </div>
  );
}
