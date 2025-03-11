import Image from "next/image";
export default function TeamPage() {
  const teamMembers = [
    {
      name: "Max Mustermann",
      position: "CEO & Founder",
      image: "/team/max.jpg",
      bio: "Experte für Business-Strategie und Innovation.",
      linkedin: "https://linkedin.com/in/maxmustermann",
    },
    {
      name: "Erika Mustermann",
      position: "CTO",
      image: "/team/erika.jpg",
      bio: "Technologie-Enthusiastin mit Fokus auf KI und Webentwicklung.",
      linkedin: "https://linkedin.com/in/erikamusterfrau",
    },
  ];

  return (
    <div className="container mx-auto px-6 py-12">
    <h1 className="text-4xl font-bold text-center mb-8">Unser Team</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
    {teamMembers.map((member, index) => (
      <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
      <Image
      src={member.image}
      alt={member.name}
      width={128}
      height={128}
      className="w-32 h-32 mx-auto rounded-full mb-4"
      />
      <h2 className="text-2xl font-bold">{member.name}</h2>
      <p className="text-gray-600">{member.position}</p>
      <p className="mt-2 text-gray-500">{member.bio}</p>
      <a href={member.linkedin} target="_blank" className="mt-4 inline-block text-blue-500 hover:underline">
      LinkedIn-Profil
      </a>
      </div>
    ))}
    </div>
    </div>
  );
}
