import { promises as fs } from "fs";
import matter from "gray-matter";
import { getTranslations } from "next-intl/server";
import BlogList from "./BlogList";
import { getAllBlogSlugs, resolveBlogPostFile } from "@/lib/blogContent";

type Props = { params: Promise<{ locale: string }> };

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

      return {
        slug,
        title: String(data.title ?? ""),
        date: String(data.date ?? ""),
        excerpt: data.excerpt != null ? String(data.excerpt) : "",
        cover: data.cover != null ? String(data.cover) : "",
        isFallback: resolved.isFallback,
        sourceLocale: resolved.sourceLocale,
      };
    })
  );

  const validPosts = posts.filter((p): p is NonNullable<typeof p> => p != null);

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <header className="bg-gradient-to-r from-indigo-950 via-slate-900 to-teal-950 text-white py-16 text-center">
        <h1 className="text-4xl font-bold">{t("pageTitle")}</h1>
        <p className="mt-4 text-lg">{t("pageLead")}</p>
      </header>

      <section className="max-w-6xl mx-auto px-6 py-12">
        <BlogList posts={validPosts} />
      </section>
    </div>
  );
}
