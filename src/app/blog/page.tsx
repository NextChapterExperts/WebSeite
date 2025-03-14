import { promises as fs } from "fs";
import path from "path";
import matter from "gray-matter";
import BlogList from "@/app/blog/BlogList";

//const isStaticExport = process.env.NEXT_PUBLIC_STATIC_EXPORT === "true";

export default async function BlogIndexPage() {
    const postsDirectory = path.join(process.cwd(), "src", "content", "blog");
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
        <div className="min-h-screen bg-gray-100 text-gray-900">
            {/* Hero-Bereich */}
            <header className="bg-gray-900 text-white py-16 text-center">
                <h1 className="text-4xl font-bold">Wissen das wirkt</h1>
                <p className="mt-4 text-lg">
                    Informieren Sie sich auf unserer Blog- und News-Plattform.
                </p>
            </header>

            <section className="max-w-6xl mx-auto px-6 py-12">
                <BlogList posts={posts} />
            </section>
        </div>
    );
}
