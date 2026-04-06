"use client";

import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function CurriculumPeter() {
  const locale = useLocale();
  const tTeam = useTranslations("Team");
  const tPa = useTranslations("PeterAlexander");

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <header className="bg-gradient-to-r from-indigo-950 via-slate-900 to-teal-950 text-white py-16 text-center px-4">
        <h1 className="text-4xl font-bold mb-2">Peter Alexander</h1>
        <p className="text-lg font-medium">{tTeam("titleLine1")}</p>
        <p className="text-lg">{tTeam("titleLine2")}</p>
        <p className="max-w-3xl mx-auto text-gray-300 mt-4">{tPa("tagline")}</p>
      </header>

      <main className="max-w-4xl mx-auto py-12 px-6 space-y-12">
        {locale === "en" ? (
          <section className="text-gray-700 space-y-4">
            <p>{tPa("bodyEn")}</p>
            <Link href="/lectures/curriculum" className="text-teal-600 font-semibold underline hover:no-underline">
              Curriculum Vitae (PDF)
            </Link>
          </section>
        ) : (
          <>
            <section>
              <h2 className="text-3xl font-bold mb-4">SAP BTP – Expertise & Erfahrung</h2>
              <p className="mb-4 text-gray-700">
                Über 10 Jahre Erfahrung in der SAP Business Technology Platform (SAP BTP). Ich unterstütze Unternehmen mit
                praxisorientierten Trainings, Coaching-Programmen und Prototyping-Lösungen.
              </p>
              <p className="text-gray-800 mb-2">
                Meine Arbeit zeichnete sich durch praxisorientierte, skalierbare Lösungen und nachhaltigen Know-how-Transfer
                aus. Dazu gehörten unter anderem:
              </p>
              <ul className="list-disc ml-6 text-gray-800 space-y-2">
                <li>Konzeption und Durchführung offizieller SAP-Trainings inklusive Zertifizierungen.</li>
                <li>Entwicklung und Umsetzung individueller Coaching-Programme für Großunternehmen.</li>
                <li>
                  Entwicklung von Anwendungen mit dem SAP Cloud Application Programming Model (CAP) und erfolgreiche Umsetzung
                  komplexer Integrationsszenarien.
                </li>
                <li>Beratung und Aufbau von Integrationsarchitekturen nach dem ISA-M-Framework.</li>
                <li>
                  Erstellung von SAP BTP-Architekturentwürfen und Konzepten entlang ISA-M, AEM und DAAM.
                </li>
                <li>Entwicklung von Mikroservices mit CAP und Java.</li>
                <li>Entwicklung von User-Interfaces im Rahmen der Side-by-Side-Erweiterungsstrategie.</li>
                <li>Konzeption und Umsetzung von DevOps-Ansätzen für SAP-BTP-Projekte.</li>
                <li>Unterstützung von SAP BTP-Projekten als Trainer, Coach und Architekturberater.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">Integration Services – Expertise & Erfahrung</h2>
              <p className="mb-4 text-gray-700">
                Langjährige Praxis in SAP PI/PO, der SAP Integration Suite und der Entwicklung robuster Integrationsarchitekturen.
              </p>
              <p className="text-gray-800 mb-2">
                Ich kombinierte Technologie-Expertise mit methodischer Beratungskompetenz. Meine Arbeitsschwerpunkte umfassten:
              </p>
              <ul className="list-disc ml-6 text-gray-800 space-y-2">
                <li>Konzeption und Durchführung offizieller SAP Integration Suite-Trainings inklusive Zertifizierungen.</li>
                <li>Konzeption und Durchführung offizieller SAP PI/PO-Trainings inklusive Zertifizierungen.</li>
                <li>Entwicklung und Umsetzung von Migrationskonzepten von PI/PO zur Integration Suite.</li>
                <li>
                  Entwicklung praxisorientierter Coachings für zahlreiche DAX-Unternehmen, inklusive maßgeschneiderter
                  Trainingsunterlagen zur SAP Integration Suite.
                </li>
                <li>Beratung und Aufbau von Integrationsarchitekturen nach ISA-M.</li>
                <li>Aufbau von CI/CD-Pipelines für Integration Suite-Artefakte mit SAP BTP, CLI und Services.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">AI Services – Expertise & Erfahrung</h2>
              <p className="mb-4 text-gray-700">
                Moderne KI-Technologien gezielt und praxisnah einsetzen. Ich vermittle LLM-Grundlagen, unterstütze beim Aufbau
                lokaler Architekturen (inkl. RAG) und entwickle individuelle Agenten-Workflows.
              </p>
              <p className="text-gray-800 mb-2">Meine Erfahrungen außerhalb des SAP-Kontexts umfassen:</p>
              <ul className="list-disc ml-6 text-gray-800 space-y-2">
                <li>Konzeption und Vermittlung praxisgerechter Einsatzszenarien für Large Language Models (LLMs).</li>
                <li>
                  Aufbau lokaler LLM-Architekturen mit RAG auf eigenen Servern oder in der deutschen Cloud (IONOS).
                </li>
                <li>Integration unterschiedlich großer und quantisierter Modelle in bestehende Architekturen.</li>
                <li>Entwicklung von Agenten-Workflows mit Tools wie Camel, N8N, CrewAI und anderen.</li>
                <li>Praxisorientiertes Prototyping entlang individueller Use Cases.</li>
              </ul>
            </section>
          </>
        )}
      </main>
    </div>
  );
}
