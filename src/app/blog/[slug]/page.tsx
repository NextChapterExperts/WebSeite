import { promises as fs } from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";

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
        <article className="prose">
        <pre className="whitespace-pre-wrap">{content}</pre> {/* 🟢 Raw Markdown anzeigen */}
        </article>
        </main>
    );
}
