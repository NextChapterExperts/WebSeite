export default function ImpressumPage() {
    return (
        <div className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">Impressum</h1>

        <div className="bg-white p-8 rounded-lg shadow-lg max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Angaben gemäß § 5 TMG und estnischem Recht</h2>
        <p>**Next Chapter Experts OÜ**<br />Musterstraße 123<br />10115 Tallinn, Estland</p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">Kontakt</h2>
        <p>Telefon: +372 123 4567<br />E-Mail: info@nextchapterexperts.com</p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">Vertretungsberechtigter</h2>
        <p>Max Mustermann (Geschäftsführer / juhatuse liige)</p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">Handelsregister</h2>
        <p>Registriert in Estland beim **Äriregister (Estonian Business Register)**<br />Registernummer: **12345678**</p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">Umsatzsteuer-ID</h2>
        <p>**KMKR (Estnische VAT-Nummer): EE123456789**</p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">Berufsrechtliche Angaben</h2>
        <p>
        Die Next Chapter Experts OÜ unterliegt den estnischen Gewerbe- und Steuerbestimmungen. Weitere Informationen sind auf der Webseite des
        <a href="https://www.emta.ee/eng" target="_blank" className="text-blue-600 underline">Estonian Tax and Customs Board (EMTA)</a> verfügbar.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">Haftung für Inhalte</h2>
        <p>
        Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität
        der Inhalte können wir jedoch keine Gewähr übernehmen.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">Haftung für Links</h2>
        <p>
        Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben.
        Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.
        Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">Urheberrecht</h2>
        <p>
        Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem estnischen und deutschen Urheberrecht.
        Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung bedarf der schriftlichen Zustimmung.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">Streitbeilegung</h2>
        <p>
        Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
        <a href="https://ec.europa.eu/consumers/odr" target="_blank" className="text-blue-600 underline">https://ec.europa.eu/consumers/odr</a>.
        Wir sind nicht verpflichtet und nicht bereit, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
        </p>
        </div>
        </div>
    );
}
