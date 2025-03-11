import { promises as fs } from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
const isStaticExport = process.env.NEXT_PUBLIC_STATIC_EXPORT === "true";

export default async function BlogIndexPage() {
    const postsDirectory = path.join(process.cwd(), "src","content", "blog");
    const filenames = await fs.readdir(postsDirectory);

    const posts = await Promise.all(
        filenames.map(async (filename) => {
            const fullPath = path.join(postsDirectory, filename);
            const fileContents = await fs.readFile(fullPath, "utf8");
            const { data } = matter(fileContents);

            return {
                slug: filename.replace(/\.md$/, ""),
                      title: data.title,
                      date: data.date,
            };
        })
    );


return (
    <div className="container mx-auto px-6 py-12">
    <h1 className="text-4xl font-bold mb-8 text-center">Blog</h1>
    <div className="max-w-3xl mx-auto space-y-6">
    {posts.map((post) => (
        <div key={post.slug} className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold">
        <Link href={`/blog/${post.slug}${isStaticExport ? ".html" : ""}`} className="text-blue-600 hover:underline">
        {post.title} - {post.date}
        </Link>
        </h2>
        <Link href={`/blog/${post.slug}${isStaticExport ? ".html" : ""}`} className="text-blue-600 hover:underline mt-2 inline-block">
        Weiterlesen →
        </Link>
        </div>
    ))}
    </div>
    </div>
);
}
