"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import KontaktBild from "/public/3S3A4810.jpg";

export default function ContactPage() {
  const t = useTranslations("Contact");
  const subject = encodeURIComponent(t("mailSubject"));
  const body = encodeURIComponent(t("mailBody"));
  const mailto = `mailto:peter.alexander@nextchapterexperts.de?subject=${subject}&body=${body}`;

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <header className="bg-gradient-to-r from-indigo-950 via-slate-900 to-teal-950 text-white py-16 text-center">
        <h1 className="text-4xl font-bold">{t("pageTitle")}</h1>
        <p className="mt-4 text-lg">{t("pageLead")}</p>
      </header>

      <section className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2">
            <Image
              src={KontaktBild}
              alt="Peter Alexander"
              className="rounded-lg object-cover"
              width={600}
              height={800}
              priority
            />
          </div>

          <div className="w-full md:w-1/2 flex flex-col items-start space-y-4">
            <h2 className="text-2xl font-semibold">Peter Alexander</h2>
            <p className="text-gray-600 font-medium">{t("titleLine1")}</p>
            <p className="text-gray-600">{t("titleLine2")}</p>
            <p className="text-gray-700 mt-3">{t("body")}</p>

            <a
              href={mailto}
              className="inline-block bg-teal-500 text-white px-6 py-3 rounded-lg hover:bg-teal-400 transition-colors text-center"
            >
              {t("emailButton")}
            </a>

            <p className="text-sm text-gray-500 mt-2">
              {t("emailFallback")}{" "}
              <span className="underline">peter.alexander@nextchapterexperts.de</span>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
