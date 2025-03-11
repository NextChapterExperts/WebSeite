"use client";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Formulardaten:", formData);
    setSuccess(true);
  };

  return (
    <div className="container mx-auto px-6 py-12">
    <h1 className="text-4xl font-bold text-center mb-8">Kontaktiere uns</h1>

    <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
    {success ? (
      <p className="text-green-600 font-bold text-center">Danke für deine Nachricht! Wir melden uns bald.</p>
    ) : (
      <form onSubmit={handleSubmit} className="space-y-4">
      <div>
      <label className="block text-gray-700 font-semibold">Name</label>
      <input
      type="text"
      name="name"
      value={formData.name}
      onChange={handleChange}
      required
      className="w-full border rounded-lg p-2 mt-1"
      />
      </div>
      <div>
      <label className="block text-gray-700 font-semibold">E-Mail</label>
      <input
      type="email"
      name="email"
      value={formData.email}
      onChange={handleChange}
      required
      className="w-full border rounded-lg p-2 mt-1"
      />
      </div>
      <div>
      <label className="block text-gray-700 font-semibold">Nachricht</label>
      <textarea
      name="message"
      value={formData.message}
      onChange={handleChange}
      required
      className="w-full border rounded-lg p-2 mt-1"
      rows={4}
      />
      </div>
      <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
      Nachricht senden
      </button>
      </form>
    )}
    </div>

    <div className="mt-12 text-center">
    <h2 className="text-2xl font-bold">Unsere Adresse</h2>
    <p>Beispielstraße 123, 10115 Berlin</p>
    <p>📞 +49 123 456 789</p>
    <p>✉️ info@nextchapterexperts.com</p>
    </div>
    </div>
  );
}
