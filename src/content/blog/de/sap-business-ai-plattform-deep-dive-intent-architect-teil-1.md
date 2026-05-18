---
title: "Deep Dive Teil 1: Der Intent Architect – Der Gesetzgeber der autonomen KI-Agenten"
date: "21. Mai 2026"
excerpt: "Erster Deep Dive zur SAP Business AI Platform: Was ein Intent Architect im Joule Studio wirklich tut – von deterministischem Tool Provisioning bis zu rechtssicheren Leitplanken."
cover: ""
series: sap-business-ai
seriesOrder: 2
---

Die Einführung der _SAP Business AI Platform_ und des _Joule Studio 2.0_ verändert die Spielregeln der Systemarchitektur grundlegend. Wir bewegen uns weg von der klassischen, starren Programmierung hin zu einem **deklarativen Ansatz**. Das bedeutet: Wir sagen dem System nicht mehr _wie_ es etwas Schritt für Schritt tun soll, sondern _was_ das gewünschte Geschäftsergebnis ist.

Den Rest – das Suchen der passenden Daten, das Auswählen der richtigen Werkzeuge und das logische Denken (_Reasoning_) – erledigt der KI-Agent **vollkommen selbstständig**.

Wenn die KI so viel Autonomie besitzt, warum brauchen wir dann überhaupt noch einen Architekten? Die Antwort ist einfach: Weil KI-Systeme erst durch menschliche Expertise mit Compliance-Wissen, rechtlichen Grenzen und Unternehmensstrategie ausgestattet werden. Hier kommt der **Intent Architect (Ziel- und Prompt-Designer)** ins Spiel. Er ist nicht mehr der Mikromanager, der jeden Prozessschritt vorgibt, sondern der **Gesetzgeber**, der das Spielfeld absteckt.

---

## Der direkte Vergleich: Gestern vs. Heute vs. Morgen

| **Dimension** | **Der klassische Solution Architect (Gestern/Heute)** | **Der neue Intent Architect (Morgen)** |
| --- | --- | --- |
| **Primärer Fokus** | **Infrastruktur & Datenfluss:** Wie verbinden wir System X mit SAP S/4HANA? Welche Schnittstelle wird benötigt? | **Semantik & Leitplanken:** Wie versteht Joule die Absicht des Business? Welche Verhaltensgrenzen haben die Agenten? |
| **Prozess-Ausführung** | **Imperativ:** Starre „Wenn-Dann“-Logiken, iDocs und fest verdrahtete Prozessketten. Der Mensch gibt jeden Klick vor. | **Autonom & Deklarativ:** Der Agent wählt seinen Lösungsweg und seine Tools (APIs) situativ und dynamisch selbst aus. |
| **Rolle des Menschen** | Er baut die Brücken (Schnittstellen) _zwischen_ den Systemen. | Er baut die Box (Vorgaben & Guardrails), _innerhalb_ derer der Agent agieren darf. |

---

## Was muss ein Intent Architect konkret wissen? (Hard Skills)

Der Intent Architect geht weit über klassisches Prompt Engineering hinaus. Er benötigt ein tiefes SAP-Prozessfundament, gekoppelt mit KI-Governance:

### 1. Deterministisches Prompt Engineering & Tool Provisioning

Er muss LLMs innerhalb des _SAP AI Core_ so instruieren, dass sie **reproduzierbare, deterministische Ergebnisse** liefern. Seine Hauptaufgabe im _Joule Studio 2.0_ ist das _Tool Provisioning_: Er definiert exakt, welche „Werkzeugkiste“ (z. B. welche OData-APIs) dem Agenten für einen bestimmten Intent zur Verfügung steht. Der Agent sucht sich daraus selbst das passende Werkzeug – aber er sieht nur das, was der Architekt freigibt.

### 2. SAP Business Data Cloud (BDC) & Semantische Datenmodelle

Damit der Agent logische Schlüsse ziehen kann, benötigt er Kontext. Der Architekt muss den **SAP Knowledge Graph** verstehen und pflegen. Er sorgt dafür, dass die KI weiß, wie Business-Objekte (z. B. _SalesOrder_, _Product_, _Supplier_) zusammenhängen.

### 3. Integrations-Landschaften & API-Sicherheit

Da Unternehmenslandschaften heterogen bleiben, steuert der Intent Architect, wie Agenten über die _SAP Integration Suite_ mit Drittsystemen (z. B. Salesforce oder Non-SAP-Datenbanken) interagieren. Er setzt die Sicherheits- und Zugriffsmuster auf API-Ebene fest.

---

## Das Praxisbeispiel: Autonomie innerhalb harter Leitplanken

> **Szenario:** Die Geschäftsführung erlässt die Vorgabe: _„Wegen Lieferkettenproblemen in Asien müssen wir alle offenen Bestellungen für Halbleiter priorisieren, die über europäische Hubs umgeleitet werden können.“_

### Was der KI-Agent selbstständig tut:

Der Anwender gibt den Befehl ein. Der Agent startet sein _Reasoning_ und entscheidet dynamisch:

- Ich rufe die Materialstamm-API auf, um „Halbleiter“ zu identifizieren.
- Ich prüfe offene Bestellungen via S/4HANA-API.
- Ich suche über den Knowledge Graph nach alternativen Routen über Europa.
- Ich berechne die neuen Liefertermine.

_Keiner dieser Einzelschritte wurde ihm vom Architekten vorprogrammiert._ Der Agent sucht sich seine Skills und Werkzeuge völlig autark.

### Was der Intent Architect im Hintergrund abgesichert hat:

Damit dieser Prozess geordnet und rechtsicher abläuft, hat der Intent Architect im _Joule Studio 2.0_ die **Sandbox** definiert:

- **Die Werkzeug-Grenze:** Er hat festgelegt: _Der Agent darf für diesen Intent Frachtraten-APIs lesen und Liefertermine ändern. Die Stammdaten-API für Preise oder Bankverbindungen ist für diesen Agenten gesperrt._ (Verhindert unautorisierte Finanztransaktionen).
- **Die rechtliche Notbremse (Vier-Augen-Prinzip):** Er hat eine harte Compliance-Regel im System hinterlegt: _Der Agent darf Routenänderungen bis zu einem Mehrpreis von 5.000 € eigenständig buchen. Alles darüber hinaus stoppt die Autonomie und übergibt den Fall als Exception an einen menschlichen Supervisor._
- **Rechtssichere Willenserklärung:** Da ein Agent keine eigene Rechtspersönlichkeit besitzt, sorgt der Architekt dafür, dass jede autonome Buchung im SAP-System mit einem eindeutigen Zeitstempel und der ID der zugrundeliegenden Freigabe protokolliert wird. Damit ist die Aktion rechtlich als eine vom Unternehmen autorisierte Willenserklärung (§ 164 BGB) revisionssicher dokumentiert.

---

## Fazit für Unternehmen

Der Intent Architect ist der **Chef-Übersetzer der Unternehmenslogik**. Er vertraut der Autonomie der KI-Agenten, kontrolliert sie aber durch unbestechliche, im System hinterlegte Leitplanken. Er sorgt dafür, dass strategische Entscheidungen des Managements fehlerfrei, in Echtzeit und absolut rechtssicher auf die Straße gebracht werden.

Für bestehende SAP Solution Architects ist diese Rolle die logische Evolution: Ihr Prozesswissen bleibt das Fundament – die Steuerung über semantische Intents ist die neue Sprache.
