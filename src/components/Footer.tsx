"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function Footer() {
  const t = useTranslations("Footer");
  const year = new Date().getFullYear();
  return (
    <footer className="bg-gray-200 text-gray-700 px-4 py-6 text-center mt-8">
      <div className="max-w-4xl mx-auto">
        <p>
          <Link href="/contact" className="underline hover:text-teal-600">
            {t("contact")}
          </Link>{" "}
          |{" "}
          <Link href="/impressum" className="underline hover:text-teal-600">
            {t("imprint")}
          </Link>{" "}
          |{" "}
          <Link href="/datenschutz" className="underline hover:text-teal-600">
            {t("privacy")}
          </Link>
        </p>
        <p className="mt-2 text-sm">{t("rights", { year })}</p>
      </div>
    </footer>
  );
}
