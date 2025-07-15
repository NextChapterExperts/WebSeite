"use client";

import Image from "next/image";
import KontaktBild from "/public/3S3A4810.jpg";

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-gray-100 text-gray-900">
            {/* Hero */}
            <header className="bg-gray-900 text-white py-16 text-center">
                <h1 className="text-4xl font-bold">Kontakt</h1>
                <p className="mt-4 text-lg">
                    Treten Sie mit mir in Kontakt – ich freue mich auf Ihre Nachricht!
                </p>
            </header>

            <section className="max-w-4xl mx-auto px-6 py-12">
                <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center gap-8">
                    <div className="w-full md:w-1/2">
                        <Image
                            src={KontaktBild}
                            alt="Peter Alexander"
                            className="rounded-lg object-cover"
                            width={600}
                            height={800}
                            priority
                        />
                    </div>
                    <div className="w-full md:w-1/2 flex flex-col items-start space-y-4">
                        <h2 className="text-2xl font-semibold">Peter Alexander</h2>
                        <p className="text-gray-700">
                            Freiberuflicher SAP Consultant und Gründer von Next Chapter Experts.
                            Kontaktieren Sie mich gerne direkt per E-Mail. Ich antworte Ihnen schnell und persönlich.
                        </p>
                        <a
                            href={`mailto:kontakt@nextchapterexperts.com?subject=Kontaktanfrage%20über%20Webseite&body=Sehr%20geehrter%20Herr%20Alexander,%0D%0A%0D%0AIch%20möchte%20mich%20gern%20bei%20Ihnen%20melden...`}
                            className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
                        >
                            Jetzt E-Mail schreiben
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
