"use client";

export default function CurriculumPeter() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Hero-Bereich */}
      <header className="bg-gray-900 text-white py-16 text-center px-4">
        <h1 className="text-4xl font-bold mb-4">Mein SAP Curriculum – Peter Alexander</h1>
        <p className="max-w-3xl mx-auto text-lg">
          16 Jahre SAP-Erfahrung. Freelancer und Betreiber von NextChapterExperts.
        </p>
        <p>SAP BTP | Integration | AI</p>
      </header>

      <main className="max-w-4xl mx-auto py-12 px-6 space-y-12">

        {/* SAP BTP */}
        <section>
          <h2 className="text-3xl font-bold mb-4">SAP BTP – Expertise & Erfahrung</h2>
          <p className="mb-4 text-gray-700">
            Über 10 Jahre Erfahrung in der SAP Business Technology Platform. Ich unterstütze Unternehmen mit praxisorientierten Trainings, Coaching-Programmen und Prototyping-Lösungen.
          </p>
         <p className="text-gray-800 mb-2">Ich habe unter anderem:</p>
        <ul className="list-disc ml-6 text-gray-800 space-y-2">
          <li>offizielle SAP-Trainings inklusive Zertifizierungen konzipiert und durchgeführt</li>
          <li>individuelle Coaching-Programme für Großunternehmen entwickelt und umgesetzt</li>
          <li>Anwendungen mit dem SAP Cloud Application Programming Model (CAP) entwickelt und komplexe Integrationsszenarien erfolgreich umgesetzt</li>
          <li>Integrationsarchitekturen nach dem Integration Solution Advisory Methodology (ISA-M)-Framework beraten und aufgebaut</li>
          <li>SAP Business Technology Platform (SAP BTP)-Architekturentwürfe und Konzepte entlang der Integration Solution Advisory Methodology (ISA-M), Application Extension Methodology (AEM) und Domain Application Architecture Methodology (DAAM) erstellt</li>
          <li>Mikroservices mit dem SAP Cloud Application Programming Model (CAP) und Java entwickelt</li>
          <li>User-Interfaces im Rahmen der Side-by-Side-Erweiterungsstrategie entwickelt</li>
          <li>DevOps-Konzepte für SAP BTP-Projekte konzipiert und umgesetzt</li>
          <li>SAP-BTP-Projekte als Trainer, Coach und Architekturberater unterstützt</li>
        </ul>

        </section>

        {/* Integration */}
        <section>
          <h2 className="text-3xl font-bold mb-4">Integration Services – Expertise & Erfahrung</h2>
          <p className="mb-4 text-gray-700">
            Langjährige Praxis in SAP PI/PO, der SAP Integration Suite und der Entwicklung robuster Integrationsarchitekturen.
          </p>
          <p className="text-gray-800 mb-2">Ich habe unter anderem:</p>
          <ul className="list-disc ml-6 text-gray-800 space-y-2">
            <li>offizielle SAP Integration Suite Trainings inklusive Zertifizierungen konzipiert und durchgeführt</li>
            <li>offizielle SAP PI/PO Trainings inklusive Zertifizierungen konzipiert und durchgeführt</li>
            <li>Migrationskonzepte von PI/PO nach Integration Suite konzepiert und umgesetzt. </li>
            <li>praxisorientierte Coachings für zahlreiche DAX-Unternehmen entwickelt, inklusive maßgeschneiderter Trainingsunterlagen zur SAP Integration Suite</li>
            <li>Integrationsarchitekturen nach dem Integration Solution Advisory Methodology (ISA-M)-Framework beraten und aufgebaut</li>
            <li>CI/CD-Pipelines für Integration Suite-Artefakte mit der SAP Business Technology Platform (SAP BTP) CLI und Services aufgebaut</li>
            <li>Migrationen von SAP Process Integration / Process Orchestration (PI/PO) zur SAP Integration Suite erfolgreich begleitet</li>
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
            <li>Konzeption und Vermittlung von LLM-Einsatzszenarien</li>
            <li>Aufbau lokaler LLM-Architekturen mit RAG auf eigenen Servern oder in der deutschen Cloud (IONOS)</li>
            <li>Integration unterschiedlich großer und quantisierter Modelle</li>
            <li>Entwicklung von Agenten-Workflows mit Tools wie N8N, CrewAI und weiteren</li>
            <li>praxisorientiertes Prototyping entlang individueller Use Cases</li>
          </ul>
        </section>

      
      </main>
    </div>
  );
}
