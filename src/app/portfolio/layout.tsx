import { pageMetadata } from "@/app/metadata";

export const metadata = pageMetadata.portfolio;

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
