import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Imprint" });
  return { title: `${t("pageTitle")} – Next Chapter Experts` };
}

export default async function ImpressumPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Imprint" });

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <header className="bg-gradient-to-r from-indigo-950 via-slate-900 to-teal-950 text-white py-16 text-center">
        <h1 className="text-4xl font-bold">{t("pageTitle")}</h1>
        <p className="mt-4 text-lg">{t("heroLead")}</p>
      </header>

      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="bg-white p-8 rounded-lg shadow-lg space-y-6">
          <div>
            <h2 className="text-2xl font-semibold mb-4">{t("tmGTitle")}</h2>
            <p className="whitespace-pre-line">{t("addressLines")}</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mt-6 mb-2">{t("contactTitle")}</h2>
            <p className="whitespace-pre-line">{t("contactLines")}</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mt-6 mb-2">{t("vatTitle")}</h2>
            <p>{t("vatBody")}</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mt-6 mb-2">{t("networkTitle")}</h2>
            <p>{t("networkBody")}</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mt-6 mb-2">{t("contentTitle")}</h2>
            <p>{t("contentBody")}</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mt-6 mb-2">{t("linksTitle")}</h2>
            <p>{t("linksBody")}</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mt-6 mb-2">{t("copyrightTitle")}</h2>
            <p>{t("copyrightBody")}</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mt-6 mb-2">{t("disputeTitle")}</h2>
            <p className="whitespace-pre-line">{t("disputeBody")}</p>
            <a
              href="https://ec.europa.eu/consumers/odr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-600 hover:underline text-sm"
            >
              ec.europa.eu/consumers/odr ↗
            </a>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mt-6 mb-2">{t("mstvTitle")}</h2>
            <p className="whitespace-pre-line">{t("mstvBody")}</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mt-6 mb-2">{t("aiActTitle")}</h2>
            <p>{t("aiActBody")}</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mt-6 mb-2">{t("privacyLinkTitle")}</h2>
            <p>{t("privacyLinkBody")}</p>
            <Link
              href="/datenschutz"
              className="mt-2 inline-block text-teal-600 hover:underline font-medium"
            >
              {t("privacyLinkLabel")} →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
