"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FC } from 'react';

interface BlogPost {
    slug: string;  // Hier war das Problem!
    title: string;
    date: string;
}

interface BlogListProps {
    posts: BlogPost[];
}

const BlogList: FC<BlogListProps> = ({ posts }) => {
    return (
        <section className="max-w-6xl mx-auto px-6 py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {posts.map((post, index) => (
                    <motion.div
                        key={post.slug}
                        className="p-6 bg-white shadow-lg rounded-lg"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                    >
                        <h2 className="text-2xl font-bold">
                            <Link href={`/blog/${post.slug}`} className="text-blue-600 hover:underline">
                                {post.title} - {post.date}
                            </Link>
                        </h2>
                        <Link href={`/blog/${post.slug}`} className="text-blue-600 hover:underline mt-2 inline-block">
                            Weiterlesen →
                        </Link>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

export default BlogList;
