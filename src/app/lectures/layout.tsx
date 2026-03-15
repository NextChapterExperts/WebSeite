import { pageMetadata } from "@/app/metadata";

export const metadata = pageMetadata.lectures;

export default function LecturesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
