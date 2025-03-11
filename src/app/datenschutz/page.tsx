export default function DatenschutzPage() {
    return (
        <div className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">Datenschutzerklärung</h1>

        <div className="bg-white p-8 rounded-lg shadow-lg max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">1. Datenschutz auf einen Blick</h2>
        <p>
        Diese Datenschutzerklärung informiert Sie über die Art, den Umfang und den Zweck der Verarbeitung personenbezogener Daten
        auf unserer Website <strong>nextchapterexperts.com</strong>.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">2. Verantwortlicher</h2>
        <p>Next Chapter Experts OÜ<br />Musterstraße 123, 10115 Tallinn, Estland<br />E-Mail: info@nextchapterexperts.com</p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">3. Erhebung und Speicherung personenbezogener Daten</h2>
        <p>Wir erheben personenbezogene Daten nur, wenn Sie uns diese aktiv mitteilen, z. B. durch das Ausfüllen des Kontaktformulars.</p>
        <ul className="list-disc pl-5">
        <li>Name und E-Mail-Adresse (bei Kontaktaufnahme über das Kontaktformular)</li>
        <li>Server-Logfiles (IP-Adresse anonymisiert, Browsertyp, Zugriffszeit)</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-2">4. Server-Log-Dateien</h2>
        <p>
        Der Hosting-Provider dieser Website erhebt und speichert automatisch Informationen in so genannten **Server-Log-Dateien**,
        die Ihr Browser automatisch an uns übermittelt. Dies sind:
        </p>
        <ul className="list-disc pl-5">
        <li>Browsertyp und Browserversion</li>
        <li>Verwendetes Betriebssystem</li>
        <li>Referrer URL</li>
        <li>Hostname des zugreifenden Rechners</li>
        <li>Uhrzeit der Serveranfrage</li>
        </ul>
        <p>Diese Daten sind **nicht bestimmten Personen zuordenbar** und dienen ausschließlich der Sicherheit und Stabilität der Website.</p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">5. Nutzung von Analyse- oder Tracking-Diensten</h2>
        <p>
        Unsere Website verwendet **keine** Tracking-Tools wie Google Analytics oder Facebook Pixel.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">6. Rechte der betroffenen Personen</h2>
        <p>Sie haben das Recht auf:</p>
        <ul className="list-disc pl-5">
        <li>Auskunft über Ihre gespeicherten Daten</li>
        <li>Löschung oder Berichtigung Ihrer Daten</li>
        <li>Widerruf Ihrer Einwilligung</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-2">7. Kontakt</h2>
        <p>
        Wenn Sie Fragen zum Datenschutz haben, kontaktieren Sie uns unter:
        <strong> info@nextchapterexperts.com</strong>.
        </p>
        </div>
        </div>
    );
}
