"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

const teamMembers = [
  {
    name: "Peter Alexander",
    image: "/team/3S3A4467.jpg",
    linkedin: "https://www.linkedin.com/in/peter-alexander-27bb701a",
  },
];

const partners = [
  { name: "Clouddna", url: "https://clouddna.at", teaserKey: "clouddna" as const },
  { name: "Kangoolutions", url: "https://kangoolutions.com", teaserKey: "kangoolutions" as const },
  { name: "Whitepaper", url: "https://whitepaper-id.com", teaserKey: "whitepaper" as const },
  { name: "operayo.de", url: "https://operayo.de", teaserKey: "operayo" as const },
  { name: "pbd-experts", url: "https://pbd-experts.com", teaserKey: "pbd" as const },
];

export default function TeamPage() {
  const t = useTranslations("Team");

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <header className="bg-gradient-to-r from-indigo-950 via-slate-900 to-teal-950 text-white py-16 text-center">
        <h1 className="text-4xl font-bold">{t("pageTitle")}</h1>
        <p className="mt-4 text-lg max-w-2xl mx-auto">{t("pageLead")}</p>
      </header>

      <section className="max-w-4xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">{t("cvSection")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {teamMembers.map((member) => (
            <motion.div
              key={member.name}
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
              className="bg-white p-8 rounded-lg shadow-lg text-center"
            >
              <Image
                src={member.image}
                alt={member.name}
                width={200}
                height={250}
                className="mx-auto rounded-lg mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-600 text-sm mt-1">{t("titleLine1")}</p>
              <p className="text-gray-600 text-sm">{t("titleLine2")}</p>
              <div className="mt-4 flex flex-wrap justify-center gap-4">
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-600 hover:underline font-medium"
                >
                  {t("linkedin")}
                </a>
                <Link href="/lectures/curriculum" className="text-teal-600 hover:underline font-medium">
                  {t("cvLink")}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-12 border-t border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">{t("partnersTitle")}</h2>
        <p className="text-gray-600 mb-8">{t("partnersLead")}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {partners.map((partner) => (
            <motion.a
              key={partner.name}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2, boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1)" }}
              transition={{ duration: 0.2 }}
              className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow border border-gray-100 flex flex-col justify-center min-h-[100px]"
            >
              <span className="text-lg font-semibold text-gray-900">{partner.name}</span>
              <span className="mt-2 text-sm text-gray-500 block">
                {t(`partnerTeaser_${partner.teaserKey}`)}
              </span>
            </motion.a>
          ))}
        </div>
      </section>
    </div>
  );
}
