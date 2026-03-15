"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const TITLE_LINE_1 = "Industry Lecturer – Enterprise Software & Cloud Architecture";
const TITLE_LINE_2 = "Former SAP Principal Education Consultant | Enterprise Architect";

const teamMembers = [
  {
    name: "Peter Alexander",
    image: "/team/3S3A4467.jpg",
    linkedin: "https://www.linkedin.com/in/peter-alexander-27bb701a",
    curriculum: "/lectures/curriculum",
  },
];

const partners = [
  { name: "Clouddna", url: "https://clouddna.at", teaser: "SAP-Beratung und Cloud-Lösungen aus Österreich." },
  { name: "Kangoolutions", url: "https://kangoolutions.com", teaser: "Lösungen und Beratung für Ihr Projekt." },
  { name: "Whitepaper", url: "https://whitepaper-id.com", teaser: "Strategie, Prozesse und digitale Identität." },
  { name: "operayo.de", url: "https://operayo.de", teaser: "Beratung und operative Unterstützung." },
  { name: "pbd-experts", url: "https://pbd-experts.com", teaser: "Expertise für Projekt und Business Development." },
];

export default function TeamPage() {

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <header className="bg-gradient-to-r from-indigo-950 via-slate-900 to-teal-950 text-white py-16 text-center">
        <h1 className="text-4xl font-bold">Über mich</h1>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          Ihr Ansprechpartner für SAP BTP, Integration & AI – und Partner, mit denen ich bei Bedarf zusammenarbeite.
        </p>
      </header>

      <section className="max-w-4xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Curriculum Vitae</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              className="bg-white p-8 rounded-lg shadow-lg text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Image
                src={member.image}
                alt={member.name}
                width={200}
                height={250}
                className="mx-auto rounded-lg mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-600 text-sm mt-1">{TITLE_LINE_1}</p>
              <p className="text-gray-600 text-sm">{TITLE_LINE_2}</p>
              <div className="mt-4 flex flex-wrap justify-center gap-4">
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-600 hover:underline font-medium"
                >
                  LinkedIn
                </a>
                <a
                  href={member.curriculum}
                  className="text-teal-600 hover:underline font-medium"
                >
                  Curriculum Vitae
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-12 border-t border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Partner</h2>
        <p className="text-gray-600 mb-8">
          Mit diesen Partnern arbeite ich zusammen – für maßgeschneiderte Lösungen und erweitertes Know-how.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {partners.map((partner, index) => (
            <motion.a
              key={partner.name}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow border border-gray-100 flex flex-col justify-center min-h-[100px]"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 + index * 0.08 }}
            >
              <span className="text-lg font-semibold text-gray-900">{partner.name}</span>
              {partner.teaser && (
                <span className="mt-2 text-sm text-gray-500 block">{partner.teaser}</span>
              )}
            </motion.a>
          ))}
        </div>
      </section>
    </div>
  );
}
