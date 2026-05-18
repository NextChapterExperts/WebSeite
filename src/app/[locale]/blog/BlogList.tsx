"use client";

import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import type { FC } from "react";

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  cover: string;
  isFallback?: boolean;
  sourceLocale?: string;
  /** Nur Serien-Artikel: „Teil X von Y“ auf der Karte */
  seriesPart?: { part: number; total: number };
}

interface BlogListProps {
  posts: BlogPost[];
}

const BlogList: FC<BlogListProps> = ({ posts }) => {
  const t = useTranslations("Blog");

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {posts.map((post) => (
        <motion.div
          key={post.slug}
          whileHover={{ y: -2 }}
          transition={{ duration: 0.2 }}
          className="p-6 bg-white shadow-lg rounded-lg flex flex-col"
        >
          {post.cover ? (
            <Link href={`/blog/${post.slug}`} className="block -mx-6 -mt-6 mb-4 overflow-hidden rounded-t-lg">
              <Image
                src={post.cover}
                alt={post.title}
                width={800}
                height={450}
                className="w-full h-44 object-cover"
              />
            </Link>
          ) : null}
          {post.seriesPart ? (
            <p className="mb-2">
              <span className="inline-flex rounded-full bg-teal-100 px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wide text-teal-900">
                {t("seriesPartBadge", { part: post.seriesPart.part, total: post.seriesPart.total })}
              </span>
            </p>
          ) : null}
          <h2>
            <Link href={`/blog/${post.slug}`} className="text-xl font-bold hover:text-teal-700">
              {post.title}
            </Link>
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            {post.date}
            {post.isFallback && post.sourceLocale ? (
              <span className="ml-2 text-amber-800 font-medium" title={t("articleFallback", { lang: post.sourceLocale.toUpperCase() })}>
                ({post.sourceLocale.toUpperCase()})
              </span>
            ) : null}
          </p>
          {post.excerpt ? <p className="mt-3 text-sm text-gray-700 leading-relaxed flex-1">{post.excerpt}</p> : null}
          <Link
            href={`/blog/${post.slug}`}
            className="inline-block mt-4 bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-400 transition-colors w-fit"
          >
            {t("readMore")}
          </Link>
        </motion.div>
      ))}
    </div>
  );
};

export default BlogList;
