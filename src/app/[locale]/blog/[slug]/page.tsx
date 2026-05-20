import { promises as fs } from "fs";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import { Link } from "@/i18n/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { getAllBlogSlugs, getBlogSeriesNavigation, resolveBlogPostFile, countPostsInBlogSeries, getFeaturedBlogSeriesConfig } from "@/lib/blogContent";
import type { BlogSeriesNavigation } from "@/lib/blogContent";

type Props = {
  params: Promise<{ slug: string; locale: string }>;
};

export async function generateStaticParams() {
  const slugs = await getAllBlogSlugs();
  return routing.locales.flatMap((locale) => slugs.map((slug) => ({ locale, slug })));
}

export async function generateMetadata({ params }: Props) {
  const { slug, locale } = await params;
  setRequestLocale(locale);
  const resolved = await resolveBlogPostFile(slug, locale);
  if (!resolved) {
    return { title: "Blog" };
  }
  const raw = await fs.readFile(resolved.filePath, "utf8");
  const { data } = matter(raw);
  const title = String(data?.title ?? slug);
  return {
    title: `${title} – Next Chapter Experts`,
    description: data?.excerpt != null ? String(data.excerpt) : undefined,
  };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type MdProps = Record<string, any>;

function BlogSeriesNavigationBar({
  nav,
  overview,
  ariaLabel,
  prevLabel,
  nextLabel,
  firstLabel,
  lastLabel,
}: {
  nav: BlogSeriesNavigation;
  overview: string;
  ariaLabel: string;
  prevLabel: string;
  nextLabel: string;
  firstLabel: string;
  lastLabel: string;
}) {
  const linkClass =
    "block rounded-lg border border-gray-200 bg-white p-3 text-sm shadow-sm transition-colors hover:border-teal-500 hover:bg-teal-50/80";

  return (
    <nav aria-label={ariaLabel} className="not-prose my-6 rounded-xl border border-teal-100 bg-teal-50/60 p-4">
      <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-teal-900">{overview}</p>
      <div className="grid gap-3 sm:grid-cols-2">
        <div className="min-h-[3.25rem]">
          {nav.prev ? (
            <Link href={`/blog/${nav.prev.slug}`} className={linkClass}>
              <span className="font-medium text-teal-800">{prevLabel}</span>
              <span className="mt-1 block font-semibold leading-snug text-gray-900">{nav.prev.title}</span>
            </Link>
          ) : (
            <p className="rounded-lg border border-dashed border-gray-200 bg-white/80 px-3 py-2 text-sm text-gray-500">{firstLabel}</p>
          )}
        </div>
        <div className="min-h-[3.25rem]">
          {nav.next ? (
            <Link href={`/blog/${nav.next.slug}`} className={`${linkClass} sm:text-right`}>
              <span className="font-medium text-teal-800">{nextLabel}</span>
              <span className="mt-1 block font-semibold leading-snug text-gray-900">{nav.next.title}</span>
            </Link>
          ) : (
            <p className="rounded-lg border border-dashed border-gray-200 bg-white/80 px-3 py-2 text-sm text-gray-500 sm:text-right">{lastLabel}</p>
          )}
        </div>
      </div>
    </nav>
  );
}

export default async function BlogPost({ params }: Props) {
  const { slug, locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "Blog" });

  const resolved = await resolveBlogPostFile(slug, locale);
  if (!resolved) {
    notFound();
  }

  const fileContents = await fs.readFile(resolved.filePath, "utf8");
  const { data, content } = matter(fileContents);

  const seriesId = data.series != null ? String(data.series) : null;
  const seriesConfig = seriesId != null ? getFeaturedBlogSeriesConfig(seriesId) : undefined;
  const seriesNav =
    seriesId != null ? await getBlogSeriesNavigation(slug, locale, seriesId) : null;
  const disclaimerKind = seriesConfig?.disclaimer;

  const excerptText = data.excerpt != null ? String(data.excerpt).trim() : "";
  const dateText = String(data.date ?? "").trim();
  const rawSeriesOrder = data.seriesOrder != null ? Number(data.seriesOrder) : NaN;
  const seriesTotal =
    seriesId != null && Number.isFinite(rawSeriesOrder)
      ? await countPostsInBlogSeries(seriesId, locale)
      : 0;
  const showSeriesBadge =
    Boolean(seriesId) && Number.isFinite(rawSeriesOrder) && seriesTotal > 0;

  const seriesNavLabels = {
    overview: seriesConfig != null ? t(seriesConfig.overviewKey) : t("seriesOverviewSapAi"),
    ariaLabel: t("seriesNavAria"),
    prevLabel: t("seriesPrev"),
    nextLabel: t("seriesNext"),
    firstLabel: t("seriesFirst"),
    lastLabel: t("seriesLast"),
  };

  const disclaimerHeadingKey =
    disclaimerKind === "realPessimism"
      ? "realPessimismDisclaimerHeading"
      : disclaimerKind === "sapBusinessAi"
        ? "sapBusinessAiDisclaimerHeading"
        : null;
  const disclaimerBodyKey =
    disclaimerKind === "realPessimism"
      ? "realPessimismDisclaimerBody"
      : disclaimerKind === "sapBusinessAi"
        ? "sapBusinessAiDisclaimerBody"
        : null;
  const disclaimerFooterKey =
    disclaimerKind === "realPessimism"
      ? "realPessimismDisclaimerFooter"
      : disclaimerKind === "sapBusinessAi"
        ? "sapBusinessAiDisclaimerFooter"
        : null;

  return (
    <main className="p-8 max-w-4xl mx-auto">
      <Link href="/blog" className="text-teal-600 hover:underline inline-block mb-4">
        &larr; {t("backToBlog")}
      </Link>
      {resolved.isFallback ? (
        <p className="mb-4 rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-950">
          {t("articleFallback", { lang: resolved.sourceLocale.toUpperCase() })}
        </p>
      ) : null}
      <h1 className="text-4xl font-bold mb-4 tracking-tight text-gray-950">{String(data?.title || slug)}</h1>
      <div className="not-prose mb-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-600">
        {dateText ? (
          <span>
            <span className="sr-only">{t("articleDateLabel")}: </span>
            {dateText}
          </span>
        ) : null}
        {showSeriesBadge ? (
          <span className="inline-flex items-center rounded-full bg-teal-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-teal-900">
            {t("seriesPartBadge", { part: rawSeriesOrder, total: seriesTotal })}
          </span>
        ) : null}
      </div>
      {excerptText ? (
        <p className="not-prose mb-8 border-l-4 border-teal-500 pl-5 text-lg leading-relaxed text-gray-700 sm:text-xl">
          {excerptText}
        </p>
      ) : null}
      {disclaimerHeadingKey && disclaimerBodyKey ? (
        <aside className="not-prose mb-8 rounded-xl border border-gray-200 bg-gray-50 p-5 text-sm leading-relaxed text-gray-800 shadow-sm">
          <p className="font-semibold text-gray-900">{t(disclaimerHeadingKey)}</p>
          <p className="mt-3 italic">{t(disclaimerBodyKey)}</p>
        </aside>
      ) : null}
      {seriesNav ? <BlogSeriesNavigationBar nav={seriesNav} {...seriesNavLabels} /> : null}
      <article className="prose max-w-none">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw]}
          components={{
            h1: (props: MdProps) => <h1 className="text-4xl font-bold mt-6">{props.children}</h1>,
            h2: (props: MdProps) => <h2 className="text-3xl font-bold mt-8 mb-2">{props.children}</h2>,
            h3: (props: MdProps) => <h3 className="text-2xl font-bold mt-6">{props.children}</h3>,
            h4: (props: MdProps) => <h4 className="text-xl font-bold mt-4">{props.children}</h4>,
            h5: (props: MdProps) => <h5 className="text-lg font-bold mt-4">{props.children}</h5>,
            p: (props: MdProps) => <p className="mt-2 text-gray-800 leading-relaxed">{props.children}</p>,
            ul: (props: MdProps) => (
              <ul className="list-disc pl-6 my-4 space-y-1 text-gray-800">{props.children}</ul>
            ),
            ol: (props: MdProps) => (
              <ol className="list-decimal pl-6 my-4 space-y-1 text-gray-800">{props.children}</ol>
            ),
            li: (props: MdProps) => <li className="leading-relaxed">{props.children}</li>,
            blockquote: (props: MdProps) => (
              <blockquote className="border-l-4 border-teal-600 pl-4 my-6 text-gray-800 italic">
                {props.children}
              </blockquote>
            ),
            hr: () => <hr className="my-8 border-gray-200" />,
            a: (props: MdProps) => {
              const href = props.href;
              const external = typeof href === "string" && /^https?:\/\//.test(href);
              return (
                <a
                  href={href}
                  className="text-teal-700 underline hover:no-underline font-medium"
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                >
                  {props.children}
                </a>
              );
            },
            table: (props: MdProps) => (
              <table className="table-auto border-collapse border border-gray-300 w-full mt-4">{props.children}</table>
            ),
            thead: (props: MdProps) => <thead className="bg-gray-200">{props.children}</thead>,
            tbody: (props: MdProps) => <tbody>{props.children}</tbody>,
            tr: (props: MdProps) => <tr className="border-b">{props.children}</tr>,
            th: (props: MdProps) => (
              <th className="border px-4 py-2 text-left bg-gray-100 font-semibold">{props.children}</th>
            ),
            td: (props: MdProps) => <td className="border px-4 py-2">{props.children}</td>,
            img: (props: MdProps) => {
              const url = typeof props.src === "string" ? props.src : undefined;
              if (!url) return null;
              return (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={url}
                  alt={typeof props.alt === "string" ? props.alt : ""}
                  title={typeof props.title === "string" ? props.title : undefined}
                  className="my-6 w-full max-w-4xl rounded-lg border border-gray-200 shadow-sm"
                />
              );
            },
            strong: (props: MdProps) => (
              <strong className="font-semibold text-gray-900">{props.children}</strong>
            ),
            em: (props: MdProps) => <em>{props.children}</em>,
          }}
        >
          {content}
        </ReactMarkdown>
      </article>
      {seriesNav ? <BlogSeriesNavigationBar nav={seriesNav} {...seriesNavLabels} /> : null}
      {disclaimerFooterKey ? (
        <p className="not-prose mt-8 border-t border-gray-200 pt-6 text-sm italic leading-relaxed text-gray-600">
          {t(disclaimerFooterKey)}
        </p>
      ) : null}
    </main>
  );
}
