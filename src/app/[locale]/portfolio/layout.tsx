import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Portfolio" });
  return {
    title: `${t("pageTitle")} – Next Chapter Experts`,
    description: t("pageLead"),
  };
}

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
