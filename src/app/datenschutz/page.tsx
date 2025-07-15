// src/app/datenschutz/page.tsx
export default function DatenschutzPage() {
    return (
        <div className="min-h-screen bg-gray-100 text-gray-900">
            {/* Hero-Bereich */}
            <header className="bg-gray-900 text-white py-16 text-center">
                <h1 className="text-4xl font-bold">Datenschutzerklärung</h1>
                <p className="mt-4 text-lg">
                    Datenschutz hat für mich als freiberuflicher SAP Consultant höchste Priorität.
                </p>
            </header>

            <section className="max-w-6xl mx-auto px-6 py-12">
                <div className="bg-white p-8 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-semibold mb-4">Verantwortlicher</h2>
                    <p>
                        Peter Alexander<br />
                        Freiberuflicher SAP Consultant<br />
                        Madonnenbergweg 17<br />
                        69198 Schriesheim, Deutschland<br />
                        E-Mail: kontakt@nextchapterexperts.com
                    </p>

                    <h2 className="text-2xl font-semibold mt-6 mb-2">Zweck der Datenverarbeitung</h2>
                    <p>
                        Ihre personenbezogenen Daten werden ausschließlich zur Erfüllung meiner Beratungsleistungen, 
                        der Kommunikation sowie im Rahmen des Expertennetzwerks „Next Chapter Experts“ verarbeitet. 
                        Eine Weitergabe an Dritte erfolgt nur, wenn dies zur Vertragserfüllung erforderlich ist 
                        oder Sie ausdrücklich eingewilligt haben.
                    </p>

                    <h2 className="text-2xl font-semibold mt-6 mb-2">Rechtsgrundlagen</h2>
                    <p>
                        Die Verarbeitung Ihrer Daten erfolgt auf Basis der DSGVO, insbesondere auf Grundlage von Art. 6 Abs. 1 lit. b (Vertragserfüllung) 
                        und Art. 6 Abs. 1 lit. f (berechtigtes Interesse an der Bereitstellung einer funktionalen Webseite und Kommunikation).
                    </p>

                    <h2 className="text-2xl font-semibold mt-6 mb-2">Kontaktformular</h2>
                    <p>
                        Wenn Sie mir über das Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Formular inklusive der von Ihnen dort angegebenen Kontaktdaten 
                        zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei mir gespeichert. 
                        Diese Daten gebe ich nicht ohne Ihre Einwilligung weiter.
                    </p>

                    <h2 className="text-2xl font-semibold mt-6 mb-2">E-Mail-Kontakt</h2>
                    <p>
                        Wenn Sie mir per E-Mail Anfragen zukommen lassen, werden Ihre Angaben inklusive der von Ihnen angegebenen Kontaktdaten 
                        zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei mir gespeichert. 
                        Diese Daten gebe ich nicht ohne Ihre Einwilligung weiter.
                    </p>

                    <h2 className="text-2xl font-semibold mt-6 mb-2">Server-Log-Dateien</h2>
                    <p>
                        Beim Besuch dieser Website werden automatisch Informationen in sogenannten Server-Log-Dateien gespeichert, die Ihr Browser automatisch übermittelt. 
                        Dies sind z. B. Browsertyp, Browserversion, Betriebssystem, Referrer-URL, Hostname des zugreifenden Rechners, Uhrzeit der Serveranfrage und IP-Adresse. 
                        Diese Daten sind nicht bestimmten Personen zuordenbar und werden nicht mit anderen Datenquellen zusammengeführt.
                    </p>

                    <h2 className="text-2xl font-semibold mt-6 mb-2">Auftragsverarbeiter</h2>
                    <p>
                        Ich nutze Hosting-Dienstleistungen der Firma IONOS SE (Elgendorfer Str. 57, 56410 Montabaur, Deutschland) zur Bereitstellung und zum Betrieb dieser Website. 
                        Es wurde ein Vertrag zur Auftragsverarbeitung gemäß Art. 28 DSGVO abgeschlossen.
                    </p>

                    <h2 className="text-2xl font-semibold mt-6 mb-2">Ihre Rechte</h2>
                    <p>
                        Sie haben jederzeit das Recht auf Auskunft, Berichtigung, Löschung oder Einschränkung der Verarbeitung Ihrer Daten sowie ein Widerspruchsrecht 
                        gegen die Verarbeitung und ein Recht auf Datenübertragbarkeit. Wenden Sie sich hierzu gerne direkt an mich unter kontakt@nextchapterexperts.com.
                    </p>

                    <h2 className="text-2xl font-semibold mt-6 mb-2">Datensicherheit</h2>
                    <p>
                        Ich setze technische und organisatorische Sicherheitsmaßnahmen ein, um Ihre Daten gegen Verlust, Manipulation und unberechtigten Zugriff zu schützen.
                    </p>

                    <h2 className="text-2xl font-semibold mt-6 mb-2">Externe Links</h2>
                    <p>
                        Diese Webseite enthält Links zu externen Websites Dritter, auf deren Inhalte ich keinen Einfluss habe. 
                        Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
                    </p>

                    <h2 className="text-2xl font-semibold mt-6 mb-2">Änderung dieser Datenschutzerklärung</h2>
                    <p>
                        Ich behalte mir vor, diese Datenschutzerklärung bei Bedarf anzupassen, um sie an aktuelle rechtliche Anforderungen oder Änderungen meiner Leistungen anzugleichen.
                    </p>
                </div>
            </section>
        </div>
    );
}
