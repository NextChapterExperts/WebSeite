// src/app/impressum/page.tsx
export default function ImpressumPage() {
    return (
        <div className="min-h-screen bg-gray-100 text-gray-900">
            {/* Hero-Bereich */}
            <header className="bg-gray-900 text-white py-16 text-center">
                <h1 className="text-4xl font-bold">Impressum</h1>
                <p className="mt-4 text-lg">
                    Rechtliche Angaben & Hinweise zum Netzwerk Next Chapter Experts.
                </p>
            </header>

            <section className="max-w-6xl mx-auto px-6 py-12">
                <div className="bg-white p-8 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-semibold mb-4">Angaben gemäß § 5 TMG</h2>
                    <p>
                        Peter Alexander<br />
                        Freiberuflicher SAP Consultant<br />
                        Madonnenbergweg 17<br />
                        69198 Schriesheim, Deutschland
                    </p>

                    <h2 className="text-2xl font-semibold mt-6 mb-2">Kontakt</h2>
                    <p>
                        Telefon: +49 (0) 123 456789<br />
                        E-Mail: kontakt@nextchapterexperts.com
                    </p>

                    <h2 className="text-2xl font-semibold mt-6 mb-2">Umsatzsteuer-ID</h2>
                    <p>In Arbeit</p>

                    <h2 className="text-2xl font-semibold mt-6 mb-2">Hinweis zum Netzwerk „Next Chapter Experts“</h2>
                    <p>
                        „Next Chapter Experts“ ist ein Netzwerk unabhängiger Expertinnen und Experten. 
                        Es handelt sich um keinen rechtlichen Zusammenschluss, sondern um eine Expertenmarke, 
                        unter der Peter Alexander als freiberuflicher Berater seine Leistungen anbietet.
                    </p>

                    <h2 className="text-2xl font-semibold mt-6 mb-2">Haftung für Inhalte</h2>
                    <p>
                        Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, 
                        Vollständigkeit und Aktualität der Inhalte kann jedoch keine Gewähr übernommen werden.
                    </p>

                    <h2 className="text-2xl font-semibold mt-6 mb-2">Haftung für Links</h2>
                    <p>
                        Diese Website enthält Links zu externen Websites Dritter, auf deren Inhalte ich keinen Einfluss habe. 
                        Daher kann ich für diese fremden Inhalte auch keine Gewähr übernehmen.
                    </p>

                    <h2 className="text-2xl font-semibold mt-6 mb-2">Urheberrecht</h2>
                    <p>
                        Die durch mich erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. 
                        Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung bedürfen meiner schriftlichen Zustimmung.
                    </p>

                    <h2 className="text-2xl font-semibold mt-6 mb-2">Streitbeilegung</h2>
                    <p>
                        Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
                        <a href="https://ec.europa.eu/consumers/odr" target="_blank" className="text-blue-600 underline"> https://ec.europa.eu/consumers/odr</a>.
                        Ich bin nicht verpflichtet und nicht bereit, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
                    </p>
                </div>
            </section>
        </div>
    );
}
