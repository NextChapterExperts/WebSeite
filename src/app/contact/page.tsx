"use client";
import { useState } from "react";

export default function ContactPage() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [success, setSuccess] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                setSuccess(true);
            } else {
                alert("Fehler beim Senden der Nachricht.");
            }
        } catch (error) {
            console.error("Fehler:", error);
            alert("Fehler beim Senden.");
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 text-gray-900">
            <header className="bg-gray-900 text-white py-16 text-center">
                <h1 className="text-4xl font-bold">Kontakt</h1>
                <p className="mt-4 text-lg">Treten Sie mit mir in Kontakt – Ich freue mich auf Ihre Nachricht!</p>
            </header>

            <section className="max-w-4xl mx-auto px-6 py-12">
                <div className="bg-white p-8 rounded-lg shadow-lg">
                    {success ? (
                        <p className="text-green-600 font-bold text-center">Danke für Ihre Nachricht! Ich melde mich bald bei Ihnen.</p>
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
                            <button type="submit" className="w-full bg-gray-900 text-white py-2 rounded-lg hover:bg-gray-700">
                                Nachricht senden
                            </button>
                        </form>
                    )}
                </div>
            </section>
        </div>
    );
}
