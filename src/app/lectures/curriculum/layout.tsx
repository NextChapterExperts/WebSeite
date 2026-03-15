import { pageMetadata } from "@/app/metadata";

export const metadata = pageMetadata.lecturesCurriculum;

export default function CurriculumLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
