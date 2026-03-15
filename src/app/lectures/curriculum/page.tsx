"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const CV_PDF_PATH = "/sources/PeterAlexande_CV.pdf";

export default function CurriculumPage() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <header className="bg-gradient-to-r from-indigo-950 via-slate-900 to-teal-950 text-white py-10 text-center px-4">
        <h1 className="text-3xl font-bold">Peter Alexander</h1>
        <p className="mt-2 text-lg">Industry Lecturer – Enterprise Software & Cloud Architecture</p>
        <p className="text-lg">Former SAP Principal Education Consultant | Enterprise Architect</p>
        <p className="mt-2 text-gray-300 text-sm">Curriculum Vitae (English)</p>
        <div className="mt-4 flex flex-wrap justify-center gap-4">
          <Link
            href="/lectures"
            className="text-sm text-gray-300 underline hover:text-white"
          >
            ← Back to Lectures
          </Link>
          <a
            href={CV_PDF_PATH}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-300 underline hover:text-white"
          >
            Open PDF in new tab
          </a>
          <a
            href={CV_PDF_PATH}
            download="PeterAlexander_CV.pdf"
            className="text-sm text-gray-300 underline hover:text-white"
          >
            Download PDF
          </a>
        </div>
      </header>

      <motion.main
        className="max-w-4xl mx-auto py-8 px-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <iframe
            src={`${CV_PDF_PATH}#view=FitH`}
            title="Curriculum Vitae – Peter Alexander (English)"
            className="w-full min-h-[80vh] border-0"
            style={{ minHeight: "calc(100vh - 12rem)" }}
          />
        </div>
        <p className="mt-4 text-center text-gray-600 text-sm">
          <Link href="/lectures" className="text-gray-900 font-semibold underline hover:no-underline">
            Back to Lectures
          </Link>
          {" · "}
          <Link href="/team/peter-alexander" className="text-gray-900 font-semibold underline hover:no-underline">
            SAP Curriculum (German)
          </Link>
        </p>
      </motion.main>
    </div>
  );
}
