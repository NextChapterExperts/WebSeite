"use client";

import { motion } from "framer-motion";

const sapBtpServices = [
  {
    title: "SAP BTP Training",
    description:
      "Lernen Sie die Grundlagen und erweiterten Konzepte der SAP Business Technology Platform (BTP) mit praxisnahen Beispielen.",
    link: "/training",
  },
  {
    title: "SAP BTP Coaching",
    description:
      "Wir vermitteln Ihnen das Wissen, um Ihre SAP BTP-Projekte erfolgreich umzusetzen – maßgeschneidert auf Ihre Anforderungen.",
    link: "/coaching",
  },
  {
    title: "Prototyping",
    description:
      "Wir helfen Ihnen, Prototypen für SAP BTP-Lösungen zu entwickeln und diese erfolgreich in Ihre IT-Landschaft zu integrieren.",
    link: "/prototyping",
  },
];

const integrationServices = [
  {
    title: "Integrationsarchitekturen",
    description:
      "Erwerben Sie praxisnahes Wissen zur Gestaltung von Integrationsstrategien mit ISA-M.",
    link: "/integrationsarchitekturen",
  },
  {
    title: "DevOps für Integration Suite Artefacts",
    description:
      "Lernen Sie, wie CI/CD-Pipelines die Automatisierung in der SAP Integration Suite verbessern.",
    link: "/devops-integration",
  },
  {
    title: "Migration PI/PO zur Integration Suite",
    description:
      "Verstehen Sie die Best Practices für eine erfolgreiche Migration auf die SAP Integration Suite.",
    link: "/migration-pipo",
  },
];

const aiServices = [
  {
    title: "Grundlagen zu LLM",
    description: "Verstehen der Konzepte zu LLM und deren Anwendung.",
    link: "/llm-basics",
  },
  {
    title: "Lokales LLM",
    description: "Lernen Sie, wie Sie Ihr eigenes LLM lokal aufsetzen und betreiben.",
    link: "/local-llm",
  },
  {
    title: "Prototyping",
    description: " Praxisnahes Lernen – Erstellen Sie eigene KI-Prototypen",
    link: "/ai-business",
  },
];

export default function Leistungen() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Hero-Bereich */}
      <header className="bg-gray-900 text-white py-16 text-center">
        <h1 className="text-4xl font-bold">Wissen, das wirkt</h1>
        <p className="mt-4 text-lg">
          Lernen Sie von Experten: Wissenstransfer & Prototyping für SAP BTP, Integration & AI – individuell, praxisnah und flexibel einsetzbar.
        </p>
      </header>

      {/* SAP BTP Services */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-center mb-6">SAP BTP Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {sapBtpServices.map((service, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white shadow-lg rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <h3 className="text-xl font-bold">{service.title}</h3>
              <p className="mt-2 text-sm">{service.description}</p>

              {/*
              <a
                href={service.link}
                className="inline-block mt-4 bg-gray-900 text-white px-4 py-2 rounded-lg"
              >
                Mehr erfahren
              </a>
              */}

            </motion.div>
          ))}
        </div>
      </section>

      {/* Integration Services */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-center mb-6">Integration Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {integrationServices.map((service, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white shadow-lg rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <h3 className="text-xl font-bold">{service.title}</h3>
              <p className="mt-2 text-sm">{service.description}</p>

              {/*
              <a
                href={service.link}
                className="inline-block mt-4 bg-gray-900 text-white px-4 py-2 rounded-lg"
              >
                Mehr erfahren
              </a>
              */}
            </motion.div>
          ))}
        </div>
      </section>

      {/* AI Services */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-center mb-6">AI Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {aiServices.map((service, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white shadow-lg rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <h3 className="text-xl font-bold">{service.title}</h3>
              <p className="mt-2 text-sm">{service.description}</p>

              {/*
              <a
                href={service.link}
                className="inline-block mt-4 bg-gray-900 text-white px-4 py-2 rounded-lg"
              >
                Mehr erfahren
              </a>
      
              */}
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
