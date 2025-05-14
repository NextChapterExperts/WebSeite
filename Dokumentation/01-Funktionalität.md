## Next.js Konfiguration:

    Nutzt das App Router Feature (src/app) mit dynamischen und statischen Seiten.

    Statische Generierung der Seiten (SSG), speziell für den Blog.

## Seiten:

    Startseite (src/app/page.tsx) – Einstiegspunkt, enthält generelle Informationen.

    Unterseiten (about, contact, datenschutz, guide, impressum, leistungen, team) – jeweils spezifische Themen.

    ### Blog:

        Übersicht (/blog) mit BlogList.tsx.

        Dynamische Einzel-Blogseiten mittels [slug].

## Markdown-Blogbeiträge:

    Inhalte der Blogbeiträge werden aus Markdown-Dateien (erster-blogpost.md, nextjs-tipps.md) generiert.

    Verwendet gray-matter, um Frontmatter (Metadaten) aus Markdown-Dateien zu extrahieren.

## API:

    API-Routen unter src/app/api, z.B. Kontaktformular (api/contact/route.ts) zur serverseitigen Verarbeitung von Nachrichten.

