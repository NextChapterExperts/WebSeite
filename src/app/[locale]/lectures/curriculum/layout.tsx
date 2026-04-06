import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Curriculum" });
  const tTeam = await getTranslations({ locale, namespace: "Team" });
  return {
    title: `${t("cvLabel")} – Peter Alexander – Next Chapter Experts`,
    description: `${tTeam("titleLine1")} – ${t("cvLabel")}`,
  };
}

export default function CurriculumLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
