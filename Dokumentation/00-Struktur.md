## Hauptordner

    eslint.config.mjs – Konfiguration für ESLint (Codequalität und Konsistenz).

    next.config.js – Konfiguration von Next.js.

    next-env.d.ts – Typendefinitionen für Next.js und TypeScript.

    package.json & package-lock.json – Enthält alle Abhängigkeiten (Dependencies) und Scripts für dein Projekt.

    postcss.config.mjs – Konfiguration für PostCSS.

    tsconfig.json – TypeScript-Konfigurationsdatei.

    README.md – Beschreibung des Projektes.

## Verzeichnisse:

    ### src – Enthält alle Quelldateien.

        #### app – Next.js App-Verzeichnis (app router).

            globals.css – Globale CSS-Regeln.

            layout.tsx – Haupt-Layout deiner Website.

            metadata.tsx – Enthält Metadaten für SEO und Seiteninformationen.

            page.tsx – Hauptseite (Startseite).

            favicon.ico – Icon deiner Website.

            nav.tsx – Navigationskomponente der Webseite.

            about, contact, datenschutz, guide, impressum, leistungen, team – Unterseiten mit je einer page.tsx.

            api/contact/route.ts – Backend-API für Kontaktformular.

            blog – Blog-Übersicht und Beiträge.

                BlogList.tsx – Komponente zur Anzeige der Blogposts.

                page.tsx – Blog-Übersichtsseite.

                [slug]/page.tsx – Dynamische Einzel-Blogseiten (Slug-abhängig).

        #### content/blog – Inhalte (Markdown-Dateien) der Blogbeiträge.

            Unterordner de/ und en/ (je Locale eine .md-Datei pro Slug), z. B. nextcloud-lernplattform.md.

    ### public – Öffentliche Assets wie Bilder (hero-min2.jpg) und Icons (file.svg, next.svg, window.svg).

    ### out – Der statisch exportierte Build der Website, enthält alle generierten HTML- und JS-Dateien.

