"use client";

export default function CurriculumPeter() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Hero-Bereich */}
      <header className="bg-gray-900 text-white py-16 text-center px-4">
        <h1 className="text-4xl font-bold mb-4">Mein SAP Curriculum – Peter Alexander</h1>
        <p className="max-w-3xl mx-auto text-lg">
        16 Jahre SAP Erfahrung. Freelancer und Betreiber von NextChapterExperts.</p>
        <p>SAP BTP | Integration | AI
        </p>
      </header>

      <main className="max-w-4xl mx-auto py-12 px-6 space-y-12">

        {/* SAP BTP */}
        <section>
          <h2 className="text-3xl font-bold mb-4">SAP BTP – Expertise & Erfahrung</h2>
          <p className="mb-4 text-gray-700">
            Über 10 Jahre Erfahrung in SAP Business Technology Platform. Entwicklung von Trainings, Coaching-Programmen und Prototypen für große Unternehmen.
          </p>
          <p className="text-gray-800 mb-2">
  Ich habe unter anderem:
</p>
<ul className="list-disc ml-6 text-gray-800 space-y-2">
  <li>offizielle SAP-Trainings inkl. Zertifizierungen entwickelt und durchgeführt</li>
  <li>maßgeschneiderte Coaching-Programme für Großunternehmen erstellt und gehalten</li>
  <li>Erfahrung in CAP-Anwendungen und komplexen Integrationsszenarien gesammelt</li>
  <li>Beratung zu ISA-M durchgeführt und Integrationsarchitekturen auf Basis des ISA-M-Frameworks aufgebaut</li>
  <li>die technische Umsetzung von ISA-M, AEM und DAAM begleitet</li>
  <li>als Trainer, Coach und Architekturberater für SAP BTP-Projekte gearbeitet</li>
</ul>


        </section>

        {/* Integration */}
        <section>
          <h2 className="text-3xl font-bold mb-4">Integration Services – Expertise & Erfahrung</h2>
          <p className="mb-4 text-gray-700">
            Langjährige Erfahrung in SAP PI/PO, Integration Suite und Integrationsarchitekturen.
          </p>
          <p className="text-gray-800 mb-2">
  Ich habe unter anderem:
</p>
<ul className="list-disc ml-6 text-gray-800 space-y-2">
  <li>über 5 Jahre SAP-PI/PO-Trainings und Migrationsberatung durchgeführt</li>
  <li>praxisnahe Coachings für zahlreiche DAX-Unternehmen entwickelt und gehalten, inklusive Erstellung passender Trainingsunterlagen zur SAP Integration Suite</li>
  <li>Beratung zu ISA-M geleistet und Integrationsarchitekturen auf Basis des ISA-M-Frameworks aufgebaut</li>
  <li>CI/CD-Pipelines für Integration Suite-Artefakte mit Services und der SAP BTP CLI aufgebaut</li>
  <li>Migrationen von PI/PO zur Integration Suite begleitet</li>
</ul>

        </section>

        {/* AI Services */}
        <section>
          <h2 className="text-3xl font-bold mb-4">AI Services – Expertise & Erfahrung</h2>
          <p className="mb-4 text-gray-700">
            Moderne KI-Technologien praxisnah einsetzen. Vermittlung von LLM-Grundlagen, Aufbau lokaler Architekturen (inkl. RAG) und Entwicklung von Agenten-Workflows.
          </p>
          <p className="text-gray-800 mb-2">
  Meine außer-SAP-Erfahrungen sind:
</p>
<ul className="list-disc ml-6 text-gray-800 space-y-2">
  <li>Vermittlung von LLM-Konzepten und praxisnahen Einsatzszenarien</li>
  <li>Aufbau lokaler LLM-Architekturen mit RAG auf eigenen Servern oder in der deutschen Cloud (IONOS)</li>
  <li>Integration unterschiedlicher Modelle (große und quantisierte Varianten)</li>
  <li>Entwicklung von Agenten-Workflows mit Tools wie N8N, CrewAI und weiteren</li>
  <li>praktisches Prototyping entlang individueller Use-Cases</li>
</ul>


        </section>

        {/* Abschluss */}
        <section className="text-center">
          <p className="mt-8 text-lg font-semibold">
            Freelancer und Betreiber des NextChapterExperts Netzwerks.
            Ich freue mich auf spannende neue Projekte und Kooperationen!
          </p>
        </section>
      </main>
    </div>
  );
}
