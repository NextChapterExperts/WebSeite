"use client";

export default function CurriculumPeter() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Hero-Bereich */}
      <header className="bg-gray-900 text-white py-16 text-center px-4">
        <h1 className="text-4xl font-bold mb-4">Curriculum – Peter Alexander</h1>
        <p className="max-w-3xl mx-auto text-lg">
        16 Jahre SAP Erfahrung. Ab Juli 2025 als Freelancer und Betreiber von NextChapterExperts. SAP BTP | Integration | AI
        </p>
      </header>

      <main className="max-w-4xl mx-auto py-12 px-6 space-y-12">

        {/* SAP BTP */}
        <section>
          <h2 className="text-3xl font-bold mb-4">SAP BTP – Expertise & Erfahrung</h2>
          <p className="mb-4 text-gray-700">
            Über 10 Jahre Erfahrung in SAP Business Technology Platform. Entwicklung von Trainings, Coaching-Programmen und Prototypen für große Unternehmen.
          </p>
          <ul className="list-disc ml-6 text-gray-800 space-y-2">
            <li>Offizielle SAP-Trainings inkl. Zertifizierungen entwickelt und durchgeführt</li>
            <li>Maßgeschneiderte Coaching-Programme für Großunternehmen</li>
            <li>Erfahrung in CAP-Anwendungen und komplexen Integrationsszenarien</li>
            <li>Technische Umsetzung von ISA-M, AEM, DAAM</li>
            <li>Trainer, Coach und Architekturberater für SAP BTP-Projekte</li>
          </ul>
        </section>

        {/* Integration */}
        <section>
          <h2 className="text-3xl font-bold mb-4">Integration Services – Expertise & Erfahrung</h2>
          <p className="mb-4 text-gray-700">
            Langjährige Erfahrung in SAP PI/PO, Integration Suite und Integrationsarchitekturen. Fokus auf ISA-M, AEM und DAAM sowie Migrationen und DevOps-Prozesse.
          </p>
          <ul className="list-disc ml-6 text-gray-800 space-y-2">
            <li>Über 5 Jahre SAP PI/PO-Training und Migrationsberatung</li>
            <li>Entwicklung praxisnaher Trainingsunterlagen und Schulung von Teams</li>
            <li>Beratung für ISA-M, AEM und DAAM Methoden</li>
            <li>Aufbau von CI/CD-Pipelines für Integration Suite Artefakte</li>
            <li>Begleitung von Migrationen PI/PO zur Integration Suite</li>
          </ul>
        </section>

        {/* AI Services */}
        <section>
          <h2 className="text-3xl font-bold mb-4">AI Services – Expertise & Erfahrung</h2>
          <p className="mb-4 text-gray-700">
            Moderne KI-Technologien praxisnah einsetzen. Vermittlung von LLM-Grundlagen, Aufbau lokaler Architekturen (inkl. RAG) und Entwicklung von Agenten-Workflows.
          </p>
          <ul className="list-disc ml-6 text-gray-800 space-y-2">
            <li>Vermittlung von LLM-Konzepten und praktischen Einsatzmöglichkeiten</li>
            <li>Aufbau lokaler LLM-Architekturen mit RAG auf eigenem Server oder in deutscher Cloud (IONOS)</li>
            <li>Integration verschiedener Modelle (Large, quantisiert)</li>
            <li>Entwicklung von Agenten-Workflows mit Tools wie N8N, CrewAI und anderen</li>
            <li>Hands-on Prototyping entlang individueller Use-Cases</li>
          </ul>
        </section>

        {/* Abschluss */}
        <section className="text-center">
          <p className="mt-8 text-lg font-semibold">
            Ab 1. Juli 2025 als Freelancer und Betreiber des NextChapterExperts Netzwerks verfügbar.
            Ich freue mich auf spannende neue Projekte und Kooperationen!
          </p>
        </section>
      </main>
    </div>
  );
}
