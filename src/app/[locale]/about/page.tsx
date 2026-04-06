import { getTranslations } from "next-intl/server";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "About" });
  return { title: `${t("pageTitle")} – Next Chapter Experts` };
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "About" });

  return (
    <div className="container mx-auto py-16 text-center">
      <h1 className="text-4xl font-bold mb-6">{t("pageTitle")}</h1>
      <p className="text-lg">{t("pageLead")}</p>
    </div>
  );
}
