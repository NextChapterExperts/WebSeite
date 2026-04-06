import { promises as fs } from "fs";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import { Link } from "@/i18n/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { getAllBlogSlugs, resolveBlogPostFile } from "@/lib/blogContent";

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
      <h1 className="text-4xl font-bold mb-4">{String(data?.title || slug)}</h1>
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
    </main>
  );
}
