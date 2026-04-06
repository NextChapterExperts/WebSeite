"use client";

import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { useLocale } from "next-intl";
import { useState } from "react";

export default function Nav() {
  const t = useTranslations("Nav");
  const pathname = usePathname();
  const locale = useLocale();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((o) => !o);

  return (
    <>
      <button
        type="button"
        className="md:hidden focus:outline-none"
        onClick={toggleMenu}
        aria-label={t("openMenu")}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {isMenuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          )}
        </svg>
      </button>
      <nav
        className={`${
          isMenuOpen ? "block" : "hidden"
        } md:block absolute md:static top-16 left-0 w-full md:w-auto bg-slate-900 md:bg-transparent z-10`}
      >
        <ul className="flex flex-col md:flex-row md:items-center md:space-x-4 p-4 md:p-0">
          <li>
            <Link href="/" className="block py-2 md:py-0 hover:underline" onClick={() => setIsMenuOpen(false)}>
              {t("home")}
            </Link>
          </li>
          <li>
            <Link href="/portfolio" className="block py-2 md:py-0 hover:underline" onClick={() => setIsMenuOpen(false)}>
              {t("portfolio")}
            </Link>
          </li>
          <li>
            <Link href="/team" className="block py-2 md:py-0 hover:underline" onClick={() => setIsMenuOpen(false)}>
              {t("about")}
            </Link>
          </li>
          <li>
            <Link href="/lectures" className="block py-2 md:py-0 hover:underline" onClick={() => setIsMenuOpen(false)}>
              {t("lectures")}
            </Link>
          </li>
          <li>
            <Link href="/blog" className="block py-2 md:py-0 hover:underline" onClick={() => setIsMenuOpen(false)}>
              {t("blog")}
            </Link>
          </li>
          <li>
            <Link href="/contact" className="block py-2 md:py-0 hover:underline" onClick={() => setIsMenuOpen(false)}>
              {t("contact")}
            </Link>
          </li>
          <li>
            <Link href="/impressum" className="block py-2 md:py-0 hover:underline" onClick={() => setIsMenuOpen(false)}>
              {t("imprint")}
            </Link>
          </li>
          <li className="md:ml-2 flex gap-2 border-t border-slate-700 md:border-0 mt-2 md:mt-0 pt-2 md:pt-0">
            <Link
              href={pathname || "/"}
              locale="de"
              className={`py-2 md:py-0 px-2 rounded ${locale === "de" ? "bg-teal-600 text-white" : "hover:underline"}`}
              onClick={() => setIsMenuOpen(false)}
            >
              {t("langDe")}
            </Link>
            <Link
              href={pathname || "/"}
              locale="en"
              className={`py-2 md:py-0 px-2 rounded ${locale === "en" ? "bg-teal-600 text-white" : "hover:underline"}`}
              onClick={() => setIsMenuOpen(false)}
            >
              {t("langEn")}
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
