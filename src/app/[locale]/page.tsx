"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function Home() {
  const t = useTranslations("Home");

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="relative h-56 w-full shrink-0 sm:h-72 md:h-screen md:w-1/2">
        <Image
          src="/hero-min2.jpg"
          alt={t("heroAlt")}
          width={1920}
          height={1080}
          className="h-full w-full object-cover object-top"
          priority
        />
      </div>
      <div className="flex w-full flex-1 flex-col justify-start bg-gradient-to-br from-indigo-950 via-slate-900 to-teal-950 px-6 py-8 text-gray-100 md:w-1/2 md:min-h-screen md:justify-center md:px-12 md:py-12">
        <div className="mx-auto w-full max-w-[600px]">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">{t("heroTitle")}</h2>
          <p className="text-lg mb-6">{t("heroLead")}</p>
          <div className="mb-8">
            <Link
              href="/contact"
              className="inline-block bg-teal-400 text-slate-900 py-3 px-6 rounded-lg font-bold shadow-md hover:bg-teal-300 hover:scale-105 active:scale-95 transition-all"
            >
              {t("ctaContact")}
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              className="p-4 bg-gray-100 text-gray-900 rounded-lg shadow-md w-full"
            >
              <h3 className="text-xl font-bold mb-2">{t("cardPortfolioTitle")}</h3>
              <p className="text-sm mb-4">{t("cardPortfolioText")}</p>
              <Link
                href="/portfolio"
                className="inline-block bg-teal-500 text-white py-2 px-4 rounded-md hover:bg-teal-400 transition-colors"
              >
                {t("learnMore")}
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              className="p-4 bg-gray-100 text-gray-900 rounded-lg shadow-md w-full"
            >
              <h3 className="text-xl font-bold mb-2">{t("cardAboutTitle")}</h3>
              <p className="text-sm mb-4">{t("cardAboutText")}</p>
              <Link
                href="/team"
                className="inline-block bg-teal-500 text-white py-2 px-4 rounded-md hover:bg-teal-400 transition-colors"
              >
                {t("learnMore")}
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              className="p-4 bg-gray-100 text-gray-900 rounded-lg shadow-md w-full"
            >
              <h3 className="text-xl font-bold mb-2">{t("cardLecturesTitle")}</h3>
              <p className="text-sm mb-4">{t("cardLecturesText")}</p>
              <Link
                href="/lectures"
                className="inline-block bg-teal-500 text-white py-2 px-4 rounded-md hover:bg-teal-400 transition-colors"
              >
                {t("learnMore")}
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              className="p-4 bg-gray-100 text-gray-900 rounded-lg shadow-md w-full"
            >
              <h3 className="text-xl font-bold mb-2">{t("cardBlogTitle")}</h3>
              <p className="text-sm mb-4">{t("cardBlogText")}</p>
              <Link
                href="/blog"
                className="inline-block bg-teal-500 text-white py-2 px-4 rounded-md hover:bg-teal-400 transition-colors"
              >
                {t("learnMore")}
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
