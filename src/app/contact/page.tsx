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
          Treten Sie mit mir in Kontakt. Ich freue mich auf Ihre Nachricht.
        </p>
      </header>

      <section className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center gap-8">
          {/* Bild */}
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

          {/* Text & Button */}
          <div className="w-full md:w-1/2 flex flex-col items-start space-y-4">
            <h2 className="text-2xl font-semibold">Peter Alexander</h2>
            <p className="text-gray-700">
              Freiberuflicher SAP Consultant und Gründer von Next Chapter Experts.
              Schreiben Sie mir gerne direkt eine E-Mail. Ich antworte Ihnen
              schnell und persönlich.
            </p>

            <a
              href={`mailto:kontakt@nextchapterexperts.de?subject=Kontaktanfrage%20über%20die%20Webseite&body=Sehr%20geehrter%20Herr%20Alexander,%0A%0AIch%20möchte%20Ihnen%20gern%20eine%20Nachricht%20zukommen%20lassen.%0A%0AMit%20freundlichen%20Grüßen,%0A`}
              className="inline-block bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition text-center"
            >
              Jetzt E-Mail schreiben
            </a>

            <p className="text-sm text-gray-500 mt-2">
              Falls der Button nicht funktionieren sollte, senden Sie bitte eine E-Mail an{" "}
              <span className="underline">kontakt@nextchapterexperts.de</span>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
