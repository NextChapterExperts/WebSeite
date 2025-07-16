"use client";

export default function CurriculumPeter() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Hero-Bereich */}
      <header className="bg-gray-900 text-white py-16 text-center px-4">
        <h1 className="text-4xl font-bold mb-4">Mein SAP-Curriculum – Peter Alexander</h1>
        <p className="max-w-3xl mx-auto text-lg">
          16 Jahre SAP-Erfahrung mit:
        </p>
        <p>SAP BTP | Integration | AI</p>
      </header>

      <main className="max-w-4xl mx-auto py-12 px-6 space-y-12">

        {/* SAP BTP */}
        <section>
          <h2 className="text-3xl font-bold mb-4">SAP BTP – Expertise & Erfahrung</h2>
          <p className="mb-4 text-gray-700">
            Über 10 Jahre Erfahrung in der SAP Business Technology Platform (SAP BTP). Ich unterstütze Unternehmen mit praxisorientierten Trainings, Coaching-Programmen und Prototyping-Lösungen.
          </p>
         <p className="text-gray-800 mb-2">Meine Arbeit zeichnete sich durch praxisorientierte, skalierbare Lösungen und nachhaltigen Know-how-Transfer aus. Dazu gehörten unter anderem:</p>
        <ul className="list-disc ml-6 text-gray-800 space-y-2">
         <li>Konzeption und Durchführung offizieller SAP-Trainings inklusive Zertifizierungen.</li>
  <li>Entwicklung und Umsetzung individueller Coaching-Programme für Großunternehmen.</li>
  <li>Entwicklung von Anwendungen mit dem SAP Cloud Application Programming Model (CAP) und erfolgreiche Umsetzung komplexer Integrationsszenarien.</li>
  <li>Beratung und Aufbau von Integrationsarchitekturen nach dem Integration Solution Advisory Methodology (ISA-M)-Framework.</li>
  <li>Erstellung von SAP Business Technology Platform (SAP BTP)-Architekturentwürfen und Konzepten entlang ISA-M, Application Extension Methodology (AEM) und Domain Application Architecture Methodology (DAAM).</li>
  <li>Entwicklung von Mikroservices mit dem SAP Cloud Application Programming Model (CAP) und Java.</li>
  <li>Entwicklung von User-Interfaces im Rahmen der Side-by-Side-Erweiterungsstrategie.</li>
  <li>Konzeption und Umsetzung von DevOps-Ansätzen für SAP-BTP-Projekte.</li>
  <li>Unterstützung von SAP BTP-Projekten als Trainer, Coach und Architekturberater.</li>
        </ul>

        </section>

        {/* Integration */}
        <section>
          <h2 className="text-3xl font-bold mb-4">Integration Services – Expertise & Erfahrung</h2>
          <p className="mb-4 text-gray-700">
            Langjährige Praxis in SAP PI/PO, der SAP Integration Suite und der Entwicklung robuster Integrationsarchitekturen.
          </p>
          <p className="text-gray-800 mb-2">Ich kombinierte Technologie-Expertise mit methodischer Beratungskompetenz. Meine Arbeitsschwerpunkte umfassten:</p>
          <ul className="list-disc ml-6 text-gray-800 space-y-2">
            <li>Konzeption und Durchführung offizieller SAP Integration Suite-Trainings inklusive Zertifizierungen.</li>
  <li>Konzeption und Durchführung offizieller SAP PI/PO-Trainings inklusive Zertifizierungen.</li>
  <li>Entwicklung und Umsetzung von Migrationskonzepten von PI/PO zur Integration Suite.</li>
  <li>Entwicklung praxisorientierter Coachings für zahlreiche DAX-Unternehmen, inklusive maßgeschneiderter Trainingsunterlagen zur SAP Integration Suite.</li>
  <li>Beratung und Aufbau von Integrationsarchitekturen nach dem Integration Solution Advisory Methodology (ISA-M)-Framework.</li>
  <li>Aufbau von CI/CD-Pipelines für Integration Suite-Artefakte mit der SAP Business Technology Platform (SAP BTP), CLI und Services.</li>

          </ul>

        </section>

        {/* AI Services */}
        <section>
          <h2 className="text-3xl font-bold mb-4">AI Services – Expertise & Erfahrung</h2>
          <p className="mb-4 text-gray-700">
            Moderne KI-Technologien gezielt und praxisnah einsetzen. Ich vermittle LLM-Grundlagen, unterstütze beim Aufbau lokaler Architekturen (inkl. RAG) und entwickle individuelle Agenten-Workflows.
          </p>
          <p className="text-gray-800 mb-2">Meine Erfahrungen außerhalb des SAP-Kontexts umfassen:</p>
          <ul className="list-disc ml-6 text-gray-800 space-y-2">
             <li>Konzeption und Vermittlung praxisgerechter Einsatzszenarien für Large Language Models (LLMs).</li>
  <li>Aufbau lokaler LLM-Architekturen mit Retrieval-Augmented Generation (RAG) auf eigenen Servern oder in der deutschen Cloud (IONOS).</li>
  <li>Integration unterschiedlich großer und quantisierter Modelle in bestehende Architekturen.</li>
  <li>Entwicklung von Agenten-Workflows mit Tools wie Camel, N8N, CrewAI und anderen.</li>
  <li>Praxisorientiertes Prototyping entlang individueller Use Cases.</li>
          </ul>
        </section>

      
      </main>
    </div>
  );
}
