import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
    const { name, email, message } = await req.json();

    const host = process.env.SMTP_HOST;
    const port = parseInt(process.env.SMTP_PORT ?? "587", 10);
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const to   = process.env.CONTACT_EMAIL ?? "peter.alexander@nextchapterexperts.de";

    if (!host || !user || !pass) {
        console.error("SMTP nicht konfiguriert (SMTP_HOST / SMTP_USER / SMTP_PASS fehlen)");
        return NextResponse.json({ success: false, error: "Mail nicht konfiguriert" }, { status: 500 });
    }

    try {
        const transporter = nodemailer.createTransport({
            host,
            port,
            secure: port === 465,
            auth: { user, pass },
        });

        await transporter.sendMail({
            from: `"Kontaktformular nextchapterexperts.com" <${user}>`,
            to,
            replyTo: email,
            subject: `Kontaktanfrage von ${name}`,
            text: `Von: ${name} (${email})\n\n${message}`,
            html: `<p><strong>Von:</strong> ${name} (<a href="mailto:${email}">${email}</a>)</p><p>${message}</p>`,
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Fehler beim Senden der Kontakt-Mail:", error);
        return NextResponse.json({ success: false }, { status: 500 });
    }
}
