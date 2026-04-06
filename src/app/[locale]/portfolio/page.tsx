"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function PortfolioPage() {
  const t = useTranslations("Portfolio");

  const sapBtpServices = [
    { title: t("btp1Title"), description: t("btp1Desc") },
    { title: t("btp2Title"), description: t("btp2Desc") },
    { title: t("btp3Title"), description: t("btp3Desc") },
  ];

  const integrationServices = [
    { title: t("int1Title"), description: t("int1Desc") },
    { title: t("int2Title"), description: t("int2Desc") },
    { title: t("int3Title"), description: t("int3Desc") },
  ];

  const aiServices = [
    { title: t("ai1Title"), description: t("ai1Desc") },
    { title: t("ai2Title"), description: t("ai2Desc") },
    { title: t("ai3Title"), description: t("ai3Desc") },
  ];

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <header className="bg-gradient-to-r from-indigo-950 via-slate-900 to-teal-950 text-white py-16 text-center">
        <h1 className="text-4xl font-bold">{t("pageTitle")}</h1>
        <p className="mt-4 text-lg">{t("pageLead")}</p>
      </header>

      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-center mb-6">{t("sectionBtp")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {sapBtpServices.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
              className="p-6 bg-white shadow-lg rounded-lg"
            >
              <h3 className="text-xl font-bold">{service.title}</h3>
              <p className="mt-2 text-sm">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-center mb-6">{t("sectionIntegration")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {integrationServices.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
              className="p-6 bg-white shadow-lg rounded-lg"
            >
              <h3 className="text-xl font-bold">{service.title}</h3>
              <p className="mt-2 text-sm">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-center mb-6">{t("sectionAi")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {aiServices.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
              className="p-6 bg-white shadow-lg rounded-lg"
            >
              <h3 className="text-xl font-bold">{service.title}</h3>
              <p className="mt-2 text-sm">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
