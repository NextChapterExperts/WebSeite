import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
    const { name, email, message } = await req.json();

    // Transporter mit SMTP-Daten erstellen
    const transporter = nodemailer.createTransport({
        host: "smtp.example.com", // Hier SMTP-Server eintragen (z. B. smtp.gmail.com)
    port: 587,
    secure: false, // true für Port 465, false für 587
    auth: {
        user: "dein-email@example.com", // Deine E-Mail-Adresse
        pass: "dein-passwort", // Dein Passwort oder App-Passwort (bei Gmail)
    },
    });

    try {
        await transporter.sendMail({
            from: `"NextChapterExperts" <dein-email@example.com>`,
            to: "info@nextchapterexperts.com", // Empfängeradresse
            subject: `Neue Nachricht von ${name}`,
            text: `Von: ${name} (${email})\n\n${message}`,
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        return NextResponse.json({ success: false, error: error });
    }
}
