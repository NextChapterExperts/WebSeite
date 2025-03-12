import { promises as fs } from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm"; // ✅ Fügt Listen & Tabellen-Unterstützung hinzu
import rehypeRaw from "rehype-raw"; // ✅ Erlaubt HTML im Markdown

module.exports = {
    plugins: [require("@tailwindcss/typography")],
  };

type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
    const postsDirectory = path.join(process.cwd(), "src", "content", "blog");
    const filenames = await fs.readdir(postsDirectory);

    return filenames.map((filename) => ({
        slug: filename.replace(/\.md$/, ""),
    }));
}

export default async function BlogPost({ params }: Props) {
    const { slug } = await params;

    const postsDirectory = path.join(process.cwd(), "src", "content", "blog");
    const fullPath = path.join(postsDirectory, `${slug}.md`);

    const fileContents = await fs.readFile(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    return (
        <main className="p-8">
        <Link href="/blog" className="text-blue-600 hover:underline inline-block mb-4">
        &larr; Zurück
        </Link>
        <h1 className="text-4xl font-bold mb-4">
        {String(data?.title || slug)}
        </h1>
        <article className="prose max-w-none">
                    <ReactMarkdown
                        remarkPlugins={[remarkGfm]} // ✅ Aktiviert Tabellen
                        rehypePlugins={[rehypeRaw]}
                        components={{
                            h1: ({ children }) => <h1 className="text-4xl font-bold mt-6">{children}</h1>,
                            h2: ({ children }) => <h2 className="text-3xl font-bold mt-4">{children}</h2>,
                            p: ({ children }) => <p className="mt-2 text-gray-800">{children}</p>,
                            table: ({ children }) => (
                                <table className="table-auto border-collapse border border-gray-300 w-full mt-4">
                                    {children}
                                </table>
                            ),
                            thead: ({ children }) => <thead className="bg-gray-200">{children}</thead>,
                            tr: ({ children }) => <tr className="border-b">{children}</tr>,
                            th: ({ children }) => (
                                <th className="border px-4 py-2 text-left bg-gray-100 font-semibold">{children}</th>
                            ),
                            td: ({ children }) => <td className="border px-4 py-2">{children}</td>,
                        }}
                    >
                        {content}
                    </ReactMarkdown>
                </article>
        </main>
    );
}
