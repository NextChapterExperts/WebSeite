import Image from "next/image";
import Link from "next/link";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { hasLocale } from "next-intl";
import { routing } from "@/i18n/routing";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import HtmlLang from "@/components/HtmlLang";

/** Nur `de`/`en` aus `generateStaticParams` — verhindert, dass z. B. `/team` fälschlich als `[locale]` die Startseite trifft (Runtime-Fehler mit `output: "export"`). */
export const dynamicParams = false;

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });
  return {
    title: t("siteTitle"),
    description: t("siteDescription"),
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);
  const messages = await getMessages({ locale });

  return (
    <NextIntlClientProvider messages={messages}>
      <HtmlLang />
      <header className="bg-gradient-to-r from-indigo-950 via-slate-900 to-teal-950 text-gray-100 px-4 py-3 sm:py-4 shadow-md border-b border-teal-500/20">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
          <Link
            href={`/${locale}`}
            className="flex items-center gap-2 sm:gap-3 min-w-0 shrink hover:opacity-90 transition-opacity"
          >
            <Image
              src="/AktuellesLogo.png"
              alt=""
              width={1175}
              height={380}
              sizes="(max-width: 640px) 42vw, 14rem"
              className="h-9 w-auto sm:h-11 max-w-[11rem] sm:max-w-[14rem] object-contain object-left drop-shadow-md shrink-0"
              priority
            />
            <span className="text-base sm:text-2xl font-bold leading-tight">
              Next Chapter Experts
            </span>
          </Link>
          <Nav />
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <Footer />
    </NextIntlClientProvider>
  );
}
