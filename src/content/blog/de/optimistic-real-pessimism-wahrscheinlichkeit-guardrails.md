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

Bei Systemen, die auf Großen Sprachmodellen (LLMs) basieren, bricht diese Welt zusammen. KI-Automatisierung ist von Natur aus **probabilistisch** (stochastisch). Ein LLM berechnet Vektor-Wahrscheinlichkeiten. Es weiß nicht, was „wahr“ oder „falsch“ ist; es berechnet nur, welches Token als nächstes mit der höchsten Wahrscheinlichkeit auf die vorherigen folgt.

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

### Die 4 Phasen der Absicherungs-Pipeline im Detail

#### Phase 1: Die Strukturierung (Agent 1)

Der Prozess startet mit dem unstrukturierten Chaos der echten Welt – zum Beispiel einer ungefilterten Kunden-E-Mail. Agent 1 (ein schnelles, lokales Modell, das wir über _vLLM_ oder _Ollama_ auf unserem eigenen Blech betreiben) hat nur eine einzige Aufgabe: Er ignoriert die Tonalität und extrahiert die reinen Fakten in einen strikt definierten Datencontainer (JSON).

#### Phase 2: Die logische Qualitätsprüfung (Agent 2)

Um die „Betriebsblindheit“ der KI zu durchbrechen, schalten wir einen zweiten Agenten dazwischen. Dieser erhält _ausschließlich_ das JSON-Ergebnis von Agent 1. Seine Aufgabe ist die **Rückübersetzung**. Er formuliert aus den nackten JSON-Daten eine glasklare, präzise Zusammenfassung im Stile von: _„Kunde will Artikel X stornieren, da defekt. Fordert Erstattung auf IBAN Y.“_ Erkennt Agent 2 einen logischen Widerspruch (z. B. eine unvollständige IBAN oder ein unmögliches Bestelldatum), stoppt er den Prozess sofort.

#### Phase 3: Der mathematische Türsteher (Der deterministische Code)

Bevor irgendein KI-Ergebnis ein produktives System berührt oder einem Menschen gezeigt wird, greift die klassische Software-Logik. Mithilfe von Frameworks wie **Pydantic** oder **Instructor** zwingen wir das System zu einer mathematischen Typ-Prüfung.

Stimmt das Datumsformat? Sind alle Pflichtfelder belegt? Ist die Kundennummer rein numerisch? Wenn das JSON-Schema valide ist, geht es weiter. Wenn nicht, triggert das System einen internen, kontrollierten Loop: Es wirft das JSON zurück zu Agent 1 mit der harten Fehlermeldung: _„Feld 'Kundennummer' fehlt. Korrigiere den Output.“_ Der Agent korrigiert sich selbst – innerhalb sicherer Grenzen, ohne das Token-Budget zu sprengen.

#### Phase 4: Das Human-in-the-Loop-Prinzip

Der größte Fehler im KI-Hype ist der Glaube an die „Zero-Maintenance-Autonomie“. Bei uns gilt: **Die KI bereitet vor, der Mensch entscheidet.**

Der menschliche Mitarbeiter sieht in seinem Dashboard (z. B. direkt in der Nextcloud oder einer schlanken TUI) eine perfekte Übersicht:

1. Den chaotischen Originaltext des Kunden.
2. Die saubere, logische Rückübersetzung von Agent 2.
3. Das validierte JSON-Datenpaket für das ERP-System.

Der Mitarbeiter muss keine Daten mehr abtippen oder Systeme durchsuchen. Er prüft die Logik mit einem Blick und klickt auf **„Freigeben“**. Erst in diesem Moment wird die API des ERP-Systems gefüttert.

---

## Das Fazit für die Praxis

Wer KI-Automatisierung ernsthaft betreibt, baut keine magischen Blackboxes. Wir bauen kaskadierende Kontrollsysteme. Durch den Einsatz von strukturierten JSON-Outputs, automatisierten Validierungsschleifen und dem gezielten Einsatz von lokalen, spezialisierten Modellen machen wir das probabilistische Rauschen der KI kontrollierbar. Wir zwingen die Statistik, sich wie Logik zu benehmen.

Der Prompt ist erst der Anfang. Bauen wir es richtig.
