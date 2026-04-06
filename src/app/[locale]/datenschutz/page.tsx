import { getTranslations } from "next-intl/server";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Privacy" });
  return { title: `${t("pageTitle")} – Next Chapter Experts` };
}

export default async function DatenschutzPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Privacy" });

  const blocks = [
    { h2: "controllerTitle", body: "controllerBody", pre: true },
    { h2: "purposeTitle", body: "purposeBody", pre: false },
    { h2: "legalTitle", body: "legalBody", pre: false },
    { h2: "formTitle", body: "formBody", pre: false },
    { h2: "emailTitle", body: "emailBody", pre: false },
    { h2: "logsTitle", body: "logsBody", pre: false },
    { h2: "processorTitle", body: "processorBody", pre: false },
    { h2: "rightsTitle", body: "rightsBody", pre: false },
    { h2: "securityTitle", body: "securityBody", pre: false },
    { h2: "extLinksTitle", body: "extLinksBody", pre: false },
    { h2: "changesTitle", body: "changesBody", pre: false },
  ] as const;

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <header className="bg-gradient-to-r from-indigo-950 via-slate-900 to-teal-950 text-white py-16 text-center">
        <h1 className="text-4xl font-bold">{t("pageTitle")}</h1>
        <p className="mt-4 text-lg">{t("heroLead")}</p>
      </header>

      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="bg-white p-8 rounded-lg shadow-lg space-y-6">
          {blocks.map((b) => (
            <div key={b.h2}>
              <h2 className="text-2xl font-semibold mb-2">{t(b.h2)}</h2>
              <p className={b.pre ? "whitespace-pre-line" : ""}>{t(b.body)}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
