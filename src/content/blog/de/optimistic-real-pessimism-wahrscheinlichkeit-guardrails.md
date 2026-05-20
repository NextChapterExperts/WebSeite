---
title: "Wahrscheinlichkeit statt Befehl – Guardrails für probabilistischen Code"
date: "17. Juni 2026"
excerpt: "Software war bisher vorhersehbar: Wenn X, dann Y. KI ist anders: Wenn X, dann wahrscheinlich Y. Wer KI wie ein altes RPA-System behandelt, braucht Leitplanken – so bauen wir sie."
cover: ""
series: optimistic-real-pessimism
seriesOrder: 2
---

## Das Problem: Wenn Code anfängt zu raten

Klassische IT-Systeme und traditionelles RPA (Robotic Process Automation) folgen einem unerbittlichen Gesetz: **Determinismus**. Wenn Eingabe $X$ reinkommt, folgt darauf exakt die Aktion $Y$. Wenn eine Postleitzahl fünfstellig sein muss, fängt ein klassisches Skript alles ab, was vierstellig ist. Es gibt kein Dazwischen, keine Nuancen, kein Raten.

Bei Systemen, die auf Großen Sprachmodellen (LLMs) basieren, bricht diese Welt zusammen. KI-Automatisierung ist von Natur aus **probabilistisch** (stochastisch). Ein LLM berechnet Vektor-Wahrscheinlichkeiten. Es weiß nicht, was „wahr“ oder „falsch“ ist; es berechnet nur, welches Wort mit der höchsten Wahrscheinlichkeit auf die vorherigen folgt.

> _„Klassischer Code gehorcht. KI rät – extrem gut, aber sie rät.“_

Wer versucht, ein LLM wie ein altes RPA-System zu programmieren, wird im Chaos enden. Ein Workflow, der bei 90 von 100 E-Mails perfekt funktioniert, bricht bei der 91. E-Mail zusammen, weil ein Kunde Ironie benutzt oder einen Tippfehler einbaut. Unsere Aufgabe als KI-Architekten ist es daher, eine **harte, unerbittliche Schale um diesen weichen, probabilistischen Kern** zu bauen.

---

## Die Lösung: Das Translation-Verification-Alignment-Muster

Um absolute Zuverlässigkeit im Unternehmen zu garantieren, vertrauen wir der KI nicht blind. Wir bauen eine Pipeline, die auf gegenseitiger Kontrolle, mathematischer Validierung und menschlicher Letztentscheidung basiert:

```
[Unstrukturierter Input: Wütende Kunden-E-Mail]
         │
         ▼
┌─────────────────────────────────────────┐
│       Agent 1: Der Übersetzer           │ ──► Presst Freitext in hartes JSON
└─────────────────────────────────────────┘
         │
         ▼
┌─────────────────────────────────────────┐
│       Agent 2: Der Auditor              │ ──► Macht die Rückübersetzung
└─────────────────────────────────────────┘     & sucht logische Brüche
         │
         ▼
┌─────────────────────────────────────────┐
│     Automatisierter Code-Check          │ ──► Mathematische Schema-Validierung
└─────────────────────────────────────────┘     (Pydantic / Instructor)
         │
         ▼
┌─────────────────────────────────────────┐
│     Mensch (Human-in-the-Loop)          │ ──► Ein-Klick-Freigabe im Dashboard
└─────────────────────────────────────────┘
         │
         ▼
[Sichere API-Ausführung im ERP-System]
```

---

## Die Pipeline in der Praxis: Ein konkreter Durchlauf

Schauen wir uns an, wie dieses Kontrollsystem eine typische, unstrukturierte Service-E-Mail zerlegt, absichert und verarbeitet.

### Der unstrukturierte Input (Die Kunden-E-Mail)

Ein Kunde schreibt aufgebracht an den Support:

> _„Hallo Support-Team, ich habe vor zwei Wochen (glaube es war der 04. Mai) drei Stück von euren Smart-Hubs (Art-Nr: 9942-X) für unser Büro bestellt. Gestern kam das Paket an, aber zwei davon sind total zerkratzt und das dritte Gehäuse ist komplett gesprungen. So können wir das nicht nutzen! Bitte schickt uns so schnell wie möglich Ersatz für die kaputten Geräte an unsere Firmenadresse. Die Bestellnummer müsste die DE-2026-8831 sein. Gruß, Markus Meier, Meier IT-Services.“_

### Phase 1: Die Strukturierung (Agent 1)

Agent 1 analysiert den Freitext und extrahiert die harten Daten. Er darf _ausschließlich_ in dem vorgegebenen JSON-Schema antworten:

```json
{
  "customer_name": "Markus Meier",
  "company": "Meier IT-Services",
  "order_id": "DE-2026-8831",
  "order_date": "2026-05-04",
  "action_required": "REPLACEMENT",
  "items": [
    {
      "article_number": "9942-X",
      "quantity_damaged": 3,
      "damage_type": "2x scratched, 1x broken housing"
    }
  ]
}
```

### Phase 2: Die logische Qualitätsprüfung (Agent 2)

Um die „Betriebsblindheit“ der KI zu durchbrechen, schalten wir einen zweiten Agenten dazwischen. Dieser erhält _ausschließlich_ das JSON-Ergebnis von Agent 1 (nicht den Originaltext!). Seine Aufgabe ist die **Rückübersetzung** in menschliche Logik:

> **Rückübersetzung von Agent 2:**
>
> _„Kunde Markus Meier (Meier IT-Services) meldet einen Schaden zur Bestellung DE-2026-8831 vom 04.05.2026. Es wird ein kostenfreier Ersatz für insgesamt 3 beschädigte Geräte des Typs 9942-X gefordert. Schadensbild: 2x zerkratzt, 1x Gehäusebruch.“_
>
> **Logik-Check:** _Bestelldatum liegt in der Vergangenheit (plausibel). Anzahl der beschädigten Geräte (3) matcht mit den Detailbeschreibungen (2+1=3)._
>
> 👉 **Status: Logisch konsistent.**

### Phase 3: Der mathematische Türsteher (Der deterministische Code)

Bevor irgendein KI-Ergebnis ein produktives System berührt, greift die klassische Software-Logik. Mithilfe von Frameworks wie **Pydantic** zwingen wir das System zu einer mathematischen Typ-Prüfung. Stimmt das Datumsformat? Sind alle Pflichtfelder belegt? Wenn das JSON-Schema valide ist, geht es weiter. Wenn nicht, wird das JSON sofort blockiert und intern korrigiert.

### Phase 4: Das Human-in-the-Loop-Prinzip

Der größte Fehler im KI-Hype ist der Glaube an die „Zero-Maintenance-Autonomie“. Bei uns gilt: **Die KI bereitet vor, der Mensch entscheidet.** Der Mitarbeiter sieht im Dashboard den chaotischen Originaltext, die saubere KI-Synthese und klickt mit nur einem Klick auf Freigabe, um das validierte JSON an die ERP-Schnittstelle zu übergeben.

---

## Wer baut die Leitplanken? Rollenverteilung im Autonomous Enterprise

In einem modernen Ökosystem – wie der SAP BTP oder zukünftigen autonomen SAP-Architekturen – wird dieses JSON-Schema zum zentralen Vertrag zwischen KI und Core-System. Doch wer trägt die Verantwortung für dieses Regelwerk?

Zwei neu entstehende Schlüsselrollen teilen sich diese Aufgabe:

- **[Der Intent Architect](/de/blog/sap-business-ai-plattform-deep-dive-intent-architect-teil-1) (Hauptverantwortlich):** Er ist die Evolution des klassischen Solution Architects. Wo er früher starre iDocs oder APIs gemappt hat, gestaltet er heute im Joule Studio 2.0 die logischen Frameworks und „Absichten“ (Intents). Er definiert das JSON-Schema im Code und legt fest, welche harten Kriterien ein Agent erfüllen muss, um geschäftskritische Prozesse anzustoßen.

- **[Der Enterprise Semantic Engineer](/de/blog/sap-business-ai-plattform-deep-dive-enterprise-semantic-engineer-teil-3) (Zulieferer):** Er pflegt das digitale Gedächtnis des Unternehmens – den SAP Knowledge Graph. Er liefert das semantische Baumaterial für das Schema. Er sorgt dafür, dass die Beschreibungen im JSON exakt zu den realen Datenstrukturen und Business-Objekten im ERP-System passen.

Flankiert wird das Ganze vom **AI Governance & Compliance Officer**, der das Schema auf Datenschutz (DSGVO) überwacht, während der **AI Agent Supervisor** als „Fluglotse“ im Dashboard sitzt und eingreift, falls die Validierung des Schemas bei einem unvorhergesehenen Sonderfall fehlschlägt.

---

## Das Fazit für die Praxis

Wer KI-Automatisierung ernsthaft betreibt, baut keine magischen Blackboxes. Wir bauen kaskadierende Kontrollsysteme. Das JSON-Schema ist die universelle Schnittstelle, die es unberechenbaren KI-Agenten erlaubt, fehlerfrei mit dem unerbittlich starren Kern eines ERP-Systems zu kommunizieren. Wir zwingen die Statistik, sich wie Logik zu benehmen.

Der Prompt ist erst der Anfang. Bauen wir es richtig.
