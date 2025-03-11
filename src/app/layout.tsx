import "./globals.css";
import { Inter } from "next/font/google";
import Nav from "./nav"; // Importiere die Nav-Komponente
import Link from "next/link";
import { pageMetadata } from "./metadata"; // Importiere die Metadaten

const inter = Inter({ subsets: ["latin"] });

export const metadata = pageMetadata.home; // ✅ Richtig: Direkt exportieren!

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className={inter.className}>
      <body className="min-h-screen flex flex-col">
        <header className="bg-gray-900 text-gray-100 px-4 py-4 shadow-md">
          <div className="max-w-6xTextdatei.txtl mx-auto flex items-center justify-between">
            <div className="text-2xl font-bold">Next Chapter Experts</div>
            <Nav /> {/* Nutze die Nav-Komponente */}
          </div>
        </header>
        <main className="flex-1">{children}</main>


        <footer className="bg-gray-200 text-gray-700 px-4 py-6 text-center mt-8">
        <div className="max-w-4xl mx-auto">
        <p>
        <Link href="/contact" className="underline hover:text-blue-600">
        Kontakt
        </Link>{" "}
        |{" "}
        <Link href="/impressum" className="underline hover:text-blue-600">
        Impressum
        </Link>{" "}
        |{" "}
        <Link href="/datenschutz" className="underline hover:text-blue-600">
        Datenschutz
        </Link>
        </p>
        <p className="mt-2 text-sm">
        © {new Date().getFullYear()} Next Chapter Experts. Alle Rechte vorbehalten.
        </p>
        </div>
        </footer>



      </body>
    </html>
  );
}
