"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function TeamPage() {
  const teamMembers = [
    {
      name: "Peter Alexander",
      position: "Gründer & SAP Experte",
      image: "/team/3S3A4467.jpg",
      bio: "Erfahrener SAP Consultant & Architekt mit Fokus auf BTP, Integration und AI.",
      linkedin: "https://www.linkedin.com/in/peter-alexander-27bb701a",
      curriculum: "/team/peter-alexander",
    },
   {
  name: "Kommt bald!",
  position: "Demnächst hier",
  image: "/team/coming-soon.jpg",
  bio: "Ich stelle das wachsende Expertennetzwerk in Kürze vor.",
  linkedin: "#",
  curriculum: "#",
},

  ];

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <header className="bg-gray-900 text-white py-16 text-center">
        <h1 className="text-4xl font-bold">Team</h1>
        <p className="mt-4 text-lg">
          Ihr Netzwerk für SAP BTP, Integration & AI – aktuell geführt von Peter Alexander. Mit Zugriff auf ein flexibles Expertennetzwerk.
        </p>
      </header>

      <section className="max-w-4xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
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
              <p className="text-gray-600">{member.position}</p>
              <p className="mt-2 text-gray-500">{member.bio}</p>
              <div className="mt-4 flex justify-center space-x-4">
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  LinkedIn-Profil
                </a>
                <a
                  href={member.curriculum}
                  className="text-blue-600 hover:underline"
                >
                  Mein SAP-Curriculum
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
