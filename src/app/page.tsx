"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const containerVariant = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariant = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Home() {
  return (
    <div className="min-h-screen flex">
      {/* Linke Spalte mit IMG */}
      <div className="w-1/2 h-screen">
        <Image
          src="/hero-min2.jpg"
          alt="Hero"
          width={1920}
          height={1080}
          className="w-full h-full object-cover object-top"
        />
      </div>
      {/* Rechte Spalte */}
      <div className="w-1/2 h-screen flex flex-col justify-center px-6 md:px-12 bg-gradient-to-br from-indigo-950 via-slate-900 to-teal-950 text-gray-100">
        <motion.div
          variants={containerVariant}
          initial="hidden"
          animate="show"
          className="w-full max-w-[600px] mx-auto"
        >
          <motion.h2 variants={itemVariant} className="text-4xl font-bold mb-4">
            SAP Coaching neu gedacht – persönlich, flexibel, vernetzt
          </motion.h2>
          <motion.p variants={itemVariant} className="text-lg mb-6">
          Ich begleite Sie als unabhängiger SAP Consultant mit Fokus auf Coaching & Prototyping – ergänzt durch mein Netzwerk
          </motion.p>
          <motion.div variants={itemVariant}>
            <Link
              href="/contact"
              className="inline-block bg-teal-400 text-slate-900 py-3 px-6 rounded-lg font-bold shadow-md mb-8 hover:bg-teal-300 hover:scale-105 active:scale-95 transition-all"
            >
              Jetzt Kontakt aufnehmen
            </Link>
          </motion.div>

          {/* Vier Kacheln: Portfolio, Team, Lectures, Blog */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              variants={itemVariant}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              className="p-4 bg-gray-100 text-gray-900 rounded-lg shadow-md w-full"
            >
              <h3 className="text-xl font-bold mb-2">Wie ich Sie unterstützen kann</h3>
              <p className="text-sm mb-4">Coaching, Prototyping & Wissensaufbau für SAP BTP, Integration & AI.</p>
              <Link
                href="/portfolio"
                className="inline-block bg-teal-500 text-white py-2 px-4 rounded-md hover:bg-teal-400 transition-colors"
              >
                Mehr erfahren
              </Link>
            </motion.div>

            <motion.div
              variants={itemVariant}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              className="p-4 bg-gray-100 text-gray-900 rounded-lg shadow-md w-full"
            >
              <h3 className="text-xl font-bold mb-2">Über mich</h3>
              <p className="text-sm mb-4">Ihr Ansprechpartner und Partner, mit denen ich bei Bedarf zusammenarbeite.</p>
              <Link
                href="/team"
                className="inline-block bg-teal-500 text-white py-2 px-4 rounded-md hover:bg-teal-400 transition-colors"
              >
                Mehr erfahren
              </Link>
            </motion.div>

            <motion.div
              variants={itemVariant}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              className="p-4 bg-gray-100 text-gray-900 rounded-lg shadow-md w-full"
            >
              <h3 className="text-xl font-bold mb-2">Lectures</h3>
              <p className="text-sm mb-4">Vorträge, Workshops und Schulungen zu SAP BTP, Integration und AI – praxisnah und aktuell.</p>
              <Link
                href="/lectures"
                className="inline-block bg-teal-500 text-white py-2 px-4 rounded-md hover:bg-teal-400 transition-colors"
              >
                Mehr erfahren
              </Link>
            </motion.div>

            <motion.div
              variants={itemVariant}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              className="p-4 bg-gray-100 text-gray-900 rounded-lg shadow-md w-full"
            >
              <h3 className="text-xl font-bold mb-2">Blog</h3>
              <p className="text-sm mb-4">Wissen, das wirkt: Artikel und News zu SAP BTP, Integration und AI.</p>
              <Link
                href="/blog"
                className="inline-block bg-teal-500 text-white py-2 px-4 rounded-md hover:bg-teal-400 transition-colors"
              >
                Mehr erfahren
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
