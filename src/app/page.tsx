"use client";




import { motion } from "framer-motion";
import Image from "next/image";

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
      <div className="w-1/2 h-screen flex flex-col justify-center px-6 md:px-12 bg-gray-900 text-gray-100">
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
          <motion.a
            variants={itemVariant}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            whileTap={{ scale: 0.95 }}
            href="/contact"
            className="inline-block bg-gray-100 text-gray-900 py-3 px-6 rounded-lg font-bold shadow-md mb-8"
          >
            Jetzt Kontakt aufnehmen
          </motion.a>

          {/* Zwei Boxen mit flexibler Anordnung */}
          <div className="flex flex-col md:flex-row md:space-x-6">
            {/* Box 1 - Leistungen */}
            <motion.div
              variants={itemVariant}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              className="p-4 bg-gray-100 text-gray-900 rounded-lg shadow-md mb-6 md:mb-0 w-full md:w-1/2"
            >
              <h3 className="text-xl font-bold mb-2">Wie ich Sie unterstützen kann</h3>
              <p className="text-sm mb-4">Coaching, Prototyping & Wissensaufbau für SAP BTP, Integration & AI</p>

              <a
                href="/portfolio"

                className="inline-block bg-gray-900 text-gray-100 py-2 px-4 rounded-md"
              >
                Mehr erfahren
              </a>
            </motion.div>

            {/* Box 2 - Über mich & Netzwerk */}
            <motion.div
              variants={itemVariant}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              className="p-4 bg-gray-100 text-gray-900 rounded-lg shadow-md w-full md:w-1/2"
            >
              <h3 className="text-xl font-bold mb-2">Über mich & Netzwerk</h3>
              <p className="text-sm mb-4">Direkt mit mir starten. Bei Spezialthemen greife ich auf mein Expertennetzwerk zurück.</p>

              <a
                href="/team"

                className="inline-block bg-gray-900 text-gray-100 py-2 px-4 rounded-md"
              >
                Mehr erfahren
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
