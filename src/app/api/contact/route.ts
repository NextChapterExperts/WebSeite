import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
    const { name, email, message } = await req.json();

    try {
        // Ethereal SMTP (für Tests) oder deinen echten SMTP-Anbieter (z.B. Mailbox.org, Posteo, Ionos, ...)
        const transporter = nodemailer.createTransport({
            host: "smtp.ethereal.email",
            port: 587,
            auth: {
                user: "dein-ethereal-user@ethereal.email",
                pass: "dein-ethereal-passwort",
            },
        });

        const mailOptions = {
            from: `"Kontaktformular" <dein-ethereal-user@ethereal.email>`,
            to: "deine-zieladresse@domain.com",
            subject: `Neue Nachricht von ${name}`,
            text: `Von: ${name} (${email})\n\n${message}`,
            html: `<p><strong>Von:</strong> ${name} (${email})</p><p>${message}</p>`,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("❌ Fehler beim Senden:", error);
        return NextResponse.json({ success: false }, { status: 500 });
    }
}
