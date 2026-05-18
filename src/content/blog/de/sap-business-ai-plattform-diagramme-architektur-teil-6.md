---
title: "Deep Dive Teil 6: Architektur in Bildern – Schichtenmodell und Praxisablauf"
date: "5. Juni 2026"
excerpt: "Zwei Diagramme zur SAP Business AI Platform: Engagement- bis Infrastruktur-Schicht und der zeitliche Ablauf von Design-Time über Run-Time bis Exception Handling."
cover: "/blog/images/dia1.png"
series: sap-business-ai
seriesOrder: 7
---

Die folgenden Abbildungen fassen zusammen, wie die Rollen aus dieser Blogserie – vom Intent Architect über Governance und Supervisor bis zu Semantik, Admins und Entwicklern – in einem durchgängigen Bild zusammenspielen. **Diagramm 1** zeigt das Schichtenmodell; **Diagramm 2** verdichtet dasselbe Gedankengerüst in einen konkreten zeitlichen Prozess.

---

## Diagramm 1: Das Schichtenmodell

![Schichtenmodell: Engagement, Governance & Execution Layer](/blog/images/dia1.png)

### Detaillierte Erklärung zu Diagramm 1: Das Schichtenmodell (Engagement, Governance & Execution Layer)

Dieses Strukturdiagramm zeigt die hierarchische Verteilung der Kompetenzen im _Autonomous Enterprise_. Es verdeutlicht, dass die Business AI Platform kein einzelnes Tool ist, sondern ein fein abgestimmtes Ökosystem, bei dem jede Rolle eine spezifische Ebene absichert:

- **Die Interaktions-Schicht (Engagement Layer):** Ganz oben steht der Business-User. Er kommuniziert über **Joule** via Freitext (Natural Language). Die Verbindung zwischen der menschlichen Absicht und der KI-Logik stellt der **Intent Architect** her. Er programmiert nicht mehr, wie die Daten fließen, sondern definiert im _Joule Studio 2.0_ das „Ziel-Muster“ (_Intent_), das die KI erreichen soll.

- **Die Ausführungs- & Governance-Schicht:** Dies ist das eigentliche Triebwerk der Autonomie. Hier agieren die **KI-Agenten** selbstständig. Sie sind jedoch von zwei menschlichen Instanzen umgeben:
  - Der **AI Governance & Compliance Officer** baut die rechtlichen und datenschutzkonformen Leitplanken (_Guardrails_) um sie herum.
  - Der **AI Agent Supervisor** überwacht das System als operativer Fluglotse über Dashboards und greift ein, wenn die KI eine Ausnahme (_Exception_) wirft.

- **Die semantische Daten-Schicht:** Unter den Agenten liegt das digitale Gedächtnis des Unternehmens – der **SAP Knowledge Graph**. Der **Enterprise Semantic Engineer** pflegt dieses Netz, damit die KI-Agenten die betriebswirtschaftlichen Zusammenhänge im Unternehmen fehlerfrei interpretieren können.

- **Die Infrastruktur-Schicht:** Der **BTP- & Integration-Suite-Administrator** stellt sicher, dass die Plattform (z. B. der _SAP AI Core_ und das API-Management) performant, sicher und via Cloud SDK skalierbar läuft.

- **Der transaktionale ERP-Kern (Clean Core):** Ganz unten liegt das unbestechliche Fundament – SAP S/4HANA. Hier sorgen **ABAP- und BTP-Entwickler** mithilfe von KI-gestütztem Engineering dafür, dass saubere _RAP-Objekte_ und _CAP-Services_ als standardisierte Werkzeuge bereitstehen, die die KI-Agenten im Kern ansteuern dürfen.

---

## Diagramm 2: Das Ablaufdiagramm

![Ablaufdiagramm: Praxisbeispiel von Design-Time bis Exception Handling](/blog/images/dia2.png)

### Detaillierte Erklärung zu Diagramm 2: Das Ablaufdiagramm (Das Praxisbeispiel im Fluss)

Dieses Ablaufdiagramm bricht die theoretische Architektur auf einen konkreten, zeitlichen Prozess in der Praxis herunter. Es zeigt chronologisch, wie eine Management-Entscheidung absolut rechtssicher und vollautomatisiert im System umgesetzt wird:

1. **Die Vorbereitung (Design-Time):** Die Geschäftsführung erlässt eine strategische Vorgabe (z. B. die Priorisierung von Halbleitern über europäische Lieferrouten). Bevor ein System aktiv wird, arbeiten die Tech-Rollen Hand in Hand:
   - Der **Intent Architect** definiert das strategische Ziel im Joule Studio.
   - Der **Semantic Engineer** verknüpft die relevanten Material- und Lieferanten-Knoten im Knowledge Graph.
   - Der **Governance Officer** setzt ein hartes Limit im System (z. B. maximale autonome Budgetfreigabe von 5.000 €).
   - Die **Entwickler und Admins** bereiten die APIs und Kernobjekte vor.

2. **Die Live-Ausführung (Run-Time):** Ein Anwender triggert den Prozess über einen Prompt. Der KI-Agent startet sein logisches Denken (_Reasoning_) und wählt autonom die passenden Werkzeuge. Nun teilt sich der Pfad basierend auf den hinterlegten Regeln:
   - **Pfad A (Standardfall):** Liegen die Kosten für die Routenänderung unter 5.000 €, bucht der Agent den Beleg vollautomatisch im S/4HANA-Kern um. Der Prozess läuft in Sekundenschnelle und ohne menschliches Zutun ab.
   - **Pfad B (Ausnahmefall / Notbremse):** Übersteigen die Kosten das Limit oder ändern sich unvorhergesehen die AGBs des Lieferanten, greifen die _Legal Guardrails_. Die Autonomie des Agenten wird sofort blockiert und der Prozess eingefroren.

3. **Menschliche Entscheidung (Exception Handling):** Der Fall wird als Alert an das Dashboard des **AI Agent Supervisors** geleitet. Dieser analysiert das Risiko unternehmerisch, übersteuert die Systemblockade manuell und gibt den Beleg mit seiner **digitalen Signatur** rechtssicher frei. Der Audit-Trail für Wirtschaftsprüfer bleibt lückenlos geschlossen.
