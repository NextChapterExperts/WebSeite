"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

const topicKeys = [
  { title: "lecture1Title", desc: "lecture1Desc", format: "venueTraining" as const },
  { title: "lecture2Title", desc: "lecture2Desc", format: "venueWorkshop" as const },
  { title: "lecture3Title", desc: "lecture3Desc", format: "venueOnsite" as const },
];

export default function LecturesPage() {
  const t = useTranslations("Lectures");

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <header className="bg-gradient-to-r from-indigo-950 via-slate-900 to-teal-950 text-white py-16 text-center px-4">
        <h1 className="text-4xl font-bold">{t("pageTitle")}</h1>
        <p className="mt-4 text-lg max-w-2xl mx-auto">{t("pageLead")}</p>
      </header>

      <div className="max-w-6xl mx-auto px-6 py-12 space-y-16">
        <section>
          <h2 className="text-2xl font-bold mb-4 text-gray-900">{t("cvTitle")}</h2>
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <p className="text-gray-700 mb-4">{t("cvLead")}</p>
            <Link
              href="/lectures/curriculum"
              className="inline-block bg-teal-500 text-white py-2 px-4 rounded-md hover:bg-teal-400 transition-colors font-medium"
            >
              {t("viewCv")}
            </Link>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-2 text-gray-900">{t("currentTitle")}</h2>
          <p className="text-gray-600 text-sm mb-6 max-w-3xl">{t("currentLead")}</p>
          <div className="max-w-3xl">
            <motion.div
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
              className="p-8 bg-white shadow-lg rounded-xl border-l-4 border-teal-500 flex flex-col"
            >
              <span className="text-xs font-semibold uppercase tracking-wide text-teal-700 mb-2">
                {t("flagshipBadge")}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900">{t("course1Title")}</h3>
              <p className="mt-3 text-gray-700 leading-relaxed">{t("course1Desc")}</p>
              <p className="mt-4 text-sm text-gray-500">
                {t("course1Format")} · {t("course1Duration")}
              </p>
              <Link
                href="#btp-lernplattform"
                className="inline-block mt-6 bg-teal-500 text-white py-2.5 px-5 rounded-md hover:bg-teal-400 transition-colors w-fit font-medium"
              >
                {t("trainingCta")}
              </Link>
            </motion.div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-2 text-gray-900">{t("topicsTitle")}</h2>
          <p className="text-gray-600 text-sm mb-8 max-w-3xl">{t("topicsLead")}</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {topicKeys.map((key) => (
              <motion.div
                key={key.title}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                className="p-6 bg-white shadow-lg rounded-lg flex flex-col border border-gray-100"
              >
                <span className="text-xs font-medium text-teal-700 mb-2">{t(key.format)}</span>
                <h3 className="text-lg font-bold text-gray-900">{t(key.title)}</h3>
                <p className="mt-2 text-sm text-gray-600 flex-1 leading-relaxed">{t(key.desc)}</p>
                <p className="mt-4 text-xs text-gray-500 pt-3 border-t border-gray-100">{t("byArrangement")}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="btp-lernplattform">
          <div className="p-8 bg-gradient-to-br from-slate-900 to-teal-950 text-white rounded-xl shadow-xl border-2 border-teal-500/40">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="text-xs font-semibold uppercase tracking-wide text-gray-300">
                {t("platformBadge")}
              </span>
              <span className="px-2 py-0.5 bg-green-800/80 text-green-100 text-xs font-medium rounded">
                {t("dsgvo")}
              </span>
            </div>
            <h2 className="text-2xl font-bold">{t("platformTitle")}</h2>
            <p className="mt-3 text-gray-200 max-w-3xl">{t("platformText")}</p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-block bg-teal-400 text-slate-900 py-2 px-5 rounded-md font-semibold hover:bg-teal-300 transition-colors"
              >
                {t("requestAccess")}
              </Link>
              <Link
                href="/contact"
                className="inline-block border-2 border-teal-400 text-teal-300 py-2 px-5 rounded-md font-semibold hover:bg-teal-400 hover:text-slate-900 transition-colors"
              >
                {t("contact")}
              </Link>
            </div>
          </div>
        </section>

        <section>
          <p className="text-center text-gray-600">
            {t("customFormats")}{" "}
            <Link href="/contact" className="text-gray-900 font-semibold underline hover:no-underline">
              {t("contactLink")}
            </Link>
          </p>
        </section>
      </div>
    </div>
  );
}
