"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const currentTrainings = [
  {
    title: "SAP BTP Solution Architect – Schulung",
    description:
      "Umfassende Schulung zum SAP BTP Solution Architect: Architekturkonzepte, ISA-M, Entwicklung und Betrieb von Lösungen auf der SAP Business Technology Platform.",
    format: "Online auf eigener Lernplattform oder als Live-Training",
    duration: "Nach Absprache",
    cta: "Zur Lernplattform",
    href: "#btp-lernplattform",
  },
];

const trainingPortfolio = [
  {
    title: "SAP BTP Solution Architect",
    description:
      "Offizielle Inhalte und Best Practices für die Rolle des Solution Architects auf SAP BTP – von Architekturentwürfen über Integration bis zu DevOps.",
    focus: "ISA-M, AEM, DAAM, CAP, Integration Suite",
  },
];

const containerVariant = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariant = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

export default function LecturesPage() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <header className="bg-gradient-to-r from-indigo-950 via-slate-900 to-teal-950 text-white py-16 text-center px-4">
        <h1 className="text-4xl font-bold">Lectures</h1>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          Vorträge, Workshops und Schulungen zu SAP BTP, Integration und AI – praxisnah und aktuell.
        </p>
      </header>

      <motion.div
        className="max-w-6xl mx-auto px-6 py-12 space-y-16"
        variants={containerVariant}
        initial="hidden"
        animate="show"
      >
        {/* Curriculum Vitae (akademisch) */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Curriculum Vitae</h2>
          <motion.div
            variants={itemVariant}
            className="p-6 bg-white shadow-lg rounded-lg"
          >
            <p className="text-gray-700 mb-4">
              Curriculum Vitae in English – full document (PDF) with education, experience, and certifications.
            </p>
            <Link
              href="/lectures/curriculum"
              className="inline-block bg-teal-500 text-white py-2 px-4 rounded-md hover:bg-teal-400 transition-colors font-medium"
              aria-label="Curriculum Vitae (English) anzeigen"
            >
              View CV (English)
            </Link>
          </motion.div>
        </section>

        {/* Aktuelle Trainings */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Aktuelle Trainings</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {currentTrainings.map((training, index) => (
              <motion.div
                key={index}
                variants={itemVariant}
                className="p-6 bg-white shadow-lg rounded-lg flex flex-col"
              >
                <h3 className="text-xl font-bold">{training.title}</h3>
                <p className="mt-2 text-sm text-gray-600 flex-1">{training.description}</p>
                <p className="mt-3 text-xs text-gray-500">
                  {training.format} · {training.duration}
                </p>
                <Link
                  href={training.href}
                  className="inline-block mt-4 bg-teal-500 text-white py-2 px-4 rounded-md hover:bg-teal-400 transition-colors w-fit"
                >
                  {training.cta}
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Trainingsportfolio */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Trainingsportfolio</h2>
          <p className="text-gray-600 mb-6 text-sm">
            Kurse, die ich halte – aktuell mit einem Schwerpunkt auf SAP BTP Solution Architect.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trainingPortfolio.map((course, index) => (
              <motion.div
                key={index}
                variants={itemVariant}
                className="p-6 bg-white shadow-lg rounded-lg"
              >
                <h3 className="text-xl font-bold">{course.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{course.description}</p>
                <p className="mt-3 text-xs text-gray-500 font-medium">{course.focus}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* SAP BTP Solution Architect – DSGVO-konforme Lernplattform */}
        <section id="btp-lernplattform">
          <motion.div
            variants={itemVariant}
            className="p-8 bg-gradient-to-br from-slate-900 to-teal-950 text-white rounded-xl shadow-xl border-2 border-teal-500/40"
          >
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="text-xs font-semibold uppercase tracking-wide text-gray-300">
                Eigene Lernplattform
              </span>
              <span className="px-2 py-0.5 bg-green-800/80 text-green-100 text-xs font-medium rounded">
                DSGVO-konform
              </span>
            </div>
            <h2 className="text-2xl font-bold">
              SAP BTP Solution Architect – Schulung auf eigener Lernplattform
            </h2>
            <p className="mt-3 text-gray-200 max-w-3xl">
              Die SAP BTP Solution Architect Schulung biete ich auf meiner eigenen, datenschutzkonformen Lernplattform an. 
              Alle Inhalte und Teilnehmerdaten werden DSGVO-konform verarbeitet – ideal für Unternehmen mit hohen Anforderungen an Datenschutz und Vertraulichkeit.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-block bg-teal-400 text-slate-900 py-2 px-5 rounded-md font-semibold hover:bg-teal-300 transition-colors"
                aria-label="Zugang zur Lernplattform anfragen"
              >
                Zugang anfragen
              </Link>
              <Link
                href="/contact"
                className="inline-block border-2 border-teal-400 text-teal-300 py-2 px-5 rounded-md font-semibold hover:bg-teal-400 hover:text-slate-900 transition-colors"
                aria-label="Kontakt aufnehmen"
              >
                Kontakt
              </Link>
            </div>
          </motion.div>
        </section>

        {/* Individuelle Formate */}
        <section>
          <motion.p variants={itemVariant} className="text-center text-gray-600">
            Individuelle Formate und Themen auf Anfrage.{" "}
            <Link
              href="/contact"
              className="text-gray-900 font-semibold underline hover:no-underline"
              aria-label="Kontakt aufnehmen"
            >
              Kontakt aufnehmen
            </Link>
          </motion.p>
        </section>
      </motion.div>
    </div>
  );
}
