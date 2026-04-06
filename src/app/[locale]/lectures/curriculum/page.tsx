"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

const CV_PDF_PATH = "/sources/PeterAlexande_CV.pdf";

export default function CurriculumPage() {
  const t = useTranslations("Curriculum");
  const tTeam = useTranslations("Team");

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <header className="bg-gradient-to-r from-indigo-950 via-slate-900 to-teal-950 text-white py-10 text-center px-4">
        <h1 className="text-3xl font-bold">Peter Alexander</h1>
        <p className="mt-2 text-lg">{tTeam("titleLine1")}</p>
        <p className="text-lg">{tTeam("titleLine2")}</p>
        <p className="mt-2 text-gray-300 text-sm">{t("cvLabel")}</p>
        <div className="mt-4 flex flex-wrap justify-center gap-4">
          <Link href="/lectures" className="text-sm text-gray-300 underline hover:text-white">
            ← {t("backLectures")}
          </Link>
          <a
            href={CV_PDF_PATH}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-300 underline hover:text-white"
          >
            {t("openPdf")}
          </a>
          <a
            href={CV_PDF_PATH}
            download="PeterAlexander_CV.pdf"
            className="text-sm text-gray-300 underline hover:text-white"
          >
            {t("downloadPdf")}
          </a>
        </div>
      </header>

      <main className="max-w-4xl mx-auto py-8 px-6">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <object
            data={`${CV_PDF_PATH}#view=FitH`}
            type="application/pdf"
            className="w-full min-h-[80vh] block"
            style={{ minHeight: "calc(100vh - 12rem)" }}
            aria-label="Curriculum Vitae – Peter Alexander"
          >
            <div className="p-10 text-center bg-gray-50 border border-gray-200 rounded-lg m-4">
              <p className="text-gray-800 font-medium">{t("pdfEmbedFallback")}</p>
              <p className="mt-2 text-sm text-gray-600">{t("pdfEmbedHint")}</p>
              <a
                href={CV_PDF_PATH}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-6 bg-teal-500 text-white py-3 px-6 rounded-md font-semibold hover:bg-teal-400 transition-colors"
              >
                {t("openPdf")}
              </a>
            </div>
          </object>
        </div>
        <p className="mt-4 text-center text-gray-600 text-sm">
          <Link href="/lectures" className="text-gray-900 font-semibold underline hover:no-underline">
            {t("backLecturesFooter")}
          </Link>
          {" · "}
          <Link href="/team/peter-alexander" className="text-gray-900 font-semibold underline hover:no-underline">
            {t("sapCurriculum")}
          </Link>
        </p>
      </main>
    </div>
  );
}
