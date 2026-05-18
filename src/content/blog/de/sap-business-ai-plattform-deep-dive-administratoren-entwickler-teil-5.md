---
title: "Deep Dive Teil 5: Administratoren & Entwickler – Das Fundament des autonomen SAP-Unternehmens"
date: "2. Juni 2026"
excerpt: "Fünfter Teil der Serie: Wie BTP-, Integration-, ABAP- und CAP-Rollen mit KI-Agenten mitwachsen – Infrastruktur, Clean Core und agentisches Engineering."
cover: ""
series: sap-business-ai
seriesOrder: 6
---

In den ersten vier Teilen dieser Serie haben wir über die vier neuen, KI-nativen Rollen gesprochen, die durch die SAP Business AI Platform entstehen:

1. **Der Intent Architect:** Der Gesetzgeber, der im _Joule Studio 2.0_ die strategischen Absichten und Grenzen definiert, in denen sich KI-Agenten bewegen.
2. **Der AI Agent Supervisor / Exception Manager:** Der operative Fluglotse, der die autonome Agenten-Flotte überwacht und komplexe Grenzfälle manuell löst.
3. **Der Enterprise Semantic Engineer:** Der Kontext-Architekt, der den _SAP Knowledge Graph_ pflegt, damit die KI geschäftliche Zusammenhänge versteht.
4. **Der AI Governance & Compliance Officer:** Der Risikomanager, der für Datensicherheit, DSGVO und die unbestechliche Einhaltung des EU AI Acts sorgt.

Bei so viel Fokus auf KI-native Profile stellt sich die Frage: Was bedeutet das für die klassischen SAP-Rollen? Die Antwort ist eindeutig positiv: **Administratoren und Entwickler gewinnen erheblich an Bedeutung, Einfluss und Gestaltungsmacht – und verändern ihre Arbeitsweise fundamental.**

Ein autonomer KI-Agent kann sich seine Werkzeuge (Tools) zwar im Rahmen seines _Reasonings_ selbstständig heraussuchen, aber **die Werkzeuge und die Infrastruktur selbst müssen immer noch von Menschen gebaut, bereitgestellt, gesichert und gewartet werden.** Ohne eine saubere Systemlandschaft, einen unbestechlichen ERP-Kern und performante APIs ist die beste Business-KI handlungsunfähig.

---

## Die Administratoren: Die Hüter der digitalen Startbahn

### 1. Der BTP & Platform Administrator (wird zum AI-Infrastructure Admin)

- **Bisheriger Fokus:** Einrichten von Subaccounts, Vergabe von Cloud-Credits (Entitlements), UAA/IAS-Konfiguration und Überwachung der BTP-Laufzeiten.
- **Die Transformation:** Neben den klassischen Aufgaben verwaltet er nun die Rechenleistung für KI-Modelle innerhalb des _SAP AI Core_. Er steuert die Verbindung zu externen LLM-Providern (Multi-LLM Connectivity), überwacht die Token-Verbräuche sowie die Performance der KI-Infrastruktur. Er stellt sicher, dass die Plattform skaliert, wenn hunderte Agenten gleichzeitig Prozesse orchestrieren.

### 2. Der Integration Suite Administrator (wird zum Gateway Guardian für Agenten)

- **Bisheriger Fokus:** Überwachung von Nachrichten-Queues (Message Processing), Zertifikatsmanagement und Bereitstellung von Cloud-Integration-Tenants.
- **Die Transformation:** Da KI-Agenten über Systemgrenzen hinweg agieren, überwacht er die Datenströme im _SAP API Management_. Er stellt sicher, dass die KI-Plattform stabil mit Non-SAP-Systemen (Salesforce, Azure etc.) kommuniziert, skaliert die Nachrichten-Infrastruktur bei Lastspitzen und sichert die API-Endpunkte gegen unbefugte Zugriffe ab.

---

## Die Entwickler: Die Produzenten der KI-Werkzeuge

### 1. Der BTP Developer (CAP / Node.js / Java) – Vom UI- zum Capability-Provider

- **Bisheriger Fokus:** Erstellung von Fiori-Benutzeroberflächen (UIs), OData-Services und Erweiterungen (Extensions) auf der BTP.
- **Die Transformation:** Da Anwender künftig primär über _Joule_ (Natural Language) mit dem System interagieren, tritt der klassische Masken-Bau schrittweise in den Hintergrund. Seine Hauptaufgabe verschiebt sich hin zum Bau von **Kernkompetenzen (Capabilities) für die KI**. Er schreibt hochspezialisierte Microservices (z. B. über SAP Cloud Application Programming Model – CAP), die dem KI-Agenten als „Werkzeug“ zur Verfügung gestellt werden.
- _Beispiel:_ Er programmiert den komplexen, firmenspezifischen Algorithmus zur CO₂-Berechnung. Der KI-Agent weiß, wann er dieses Tool aufrufen muss – aber der BTP-Developer hat es gebaut.

### 2. Der ABAP Developer (wird zum Clean Core Guardian)

- **Bisheriger Fokus:** Schreiben von Reports, Tabellen-Erweiterungen und User-Exits direkt im ERP-Kern.
- **Die Transformation:** SAP verfolgt konsequent das „Clean Core“-Prinzip. Der ABAP-Entwickler modifiziert nicht mehr den Kern, sondern baut moderne **RAP-Business-Objekte** (ABAP RESTful Application Programming Model) und stellt **CDS Views** (Core Data Services) bereit. Diese semantisch sauberen Objekte sind die direkte Futterquelle für den _SAP Knowledge Graph_ und die APIs der KI-Agenten. Er macht das S/4HANA-System überhaupt erst „KI-fähig“.

### 3. Der Integration Developer (wird zum Ecosystem Connect Architect)

- **Bisheriger Fokus:** Bau von klassischen Punkt-zu-Punkt-Schnittstellen (iDocs, RFC auf REST) in der Cloud Integration.
- **Die Transformation:** Er baut die digitalen Datenautobahnen, auf denen sich die Agenten bewegen. Er wechselt von starren Schnittstellenketten hin zu **Event-Driven Architectures** (z. B. über _SAP Advanced Event Mesh_). Er sorgt dafür, dass geschäftskritische Ereignisse (Events) in Echtzeit und im richtigen Format in der AI Foundation landen, damit die Agenten sofort autonom darauf reagieren können.

---

## Die Evolution der Werkzeuge: Entwicklung und Administration auf Steroiden

Der Wandel der klassischen Rollen wird durch eine fundamentale Veränderung der täglichen Arbeitsweise beschleunigt. Entwickler und Administratoren schreiben und konfigurieren nicht mehr alles händisch – sie nutzen den agentischen Ansatz selbst als hocheffizienten Turbo-Boost.

### 1. KI-gestützte Objekt-Generierung (ABAP & CAP)

Klassische Entwicklungsobjekte (wie RAP-Business-Objekte, CDS Views oder CAP-Datenmodelle) werden künftig stark automatisiert generiert. Der Entwickler beschreibt die benötigte Business-Logik und die Tabellenstrukturen in natürlicher Sprache. KI-Tools, die tief in die IDEs integriert sind, generieren das Code-Gerüst, erstellen die Service-Definitionen und schreiben automatisch die dazugehörigen Unit-Tests. Der Entwickler wandelt sich vom reinen Code-Tipper zum strategischen **Code-Reviewer**, der die Qualität, Performance und die Einhaltung der _Clean Core_-Richtlinien prüft.

### 2. No-Click Administration via Cloud SDK und CLI

Die manuelle Klickarbeit im SAP BTP Cockpit gehört der Vergangenheit an. Die Verwaltung, Provisionierung und Skalierung der BTP-Infrastruktur erfolgt zunehmend deklarativ über das **SAP BTP Command Line Interface (CLI)** und die **Cloud SDKs** – gesteuert durch KI. Ein Administrator steuert KI-Assistenzsysteme per Sprachbefehl an (z. B. _„Erstelle mir einen neuen produktiven Subaccount in AWS Frankfurt, aktiviere den SAP AI Core und die Integration Suite und verknüpfe unsere Identity Provider“_). Die KI übersetzt dies in fehlerfreie Skripte und rollt komplexe Landschaften als _Infrastructure as Code_ innerhalb von Minuten absolut rechtssicher und compliant aus.

---

## Das Zusammenspiel als Analogie: Der Bau eines autonomen Fahrzeugs

Um das Zusammenspiel der etablierten und der neuen Rollen zu verstehen, hilft das Bild eines autonomen Autos:

- Die **ABAP- & BTP-Entwickler** bauen den Motor, das Getriebe und die Mechanik (RAP-Objekte, CAP-Services, Kernlogik).
- Der **Integration Developer** baut die Straßen, Schilder und Ampeln (APIs, Event-Strukturen).
- Die **Administratoren** stellen sicher, dass die Straßen frei sind, der Treibstoff fließt und die Systeme stabil laufen (Infrastruktur, AI Core, API-Sicherheit).
- Der **Semantic Engineer** schreibt die digitale Landkarte (SAP Knowledge Graph).
- Der **Intent Architect** programmiert den Autopiloten und das Fahrziel (Intents im Joule Studio).
- Der **Governance Officer** setzt die Verkehrsregeln und Tempolimits fest (Guardrails).
- Der **Agent Supervisor** sitzt in der Zentrale als Fluglotse und greift nur bei einem unvorhergesehenen Stau ein.

---

## Fazit für Unternehmen

Die Digitalisierung und der Einzug der Business AI transformieren die bestehenden Entwickler- und Administratoren-Rollen: Sie befreien sie von zeitintensiver Routinearbeit wie dem Designen starrer Eingabemasken oder dem wiederkehrenden Nachprogrammieren von Datenbrücken. Sie werden zu den strategischen **Produzenten und Beschützern der Werkzeuge**, ohne die keine KI der Welt im ERP-System handlungsfähig wäre. Wer im Zeitalter des _Autonomous Enterprise_ gewinnen will, muss seine Tech-Teams jetzt auf RAP, CAP, Event-Mesh und AI-gestütztes Engineering vorbereiten.
