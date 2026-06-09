---
title: "Wenn das LLM im Datenmüll ertrinkt"
date: "June 7, 2026"
excerpt: "Blog 02 hat gezeigt, wie ein KI-Agent durch klare Datenstrukturen und Validierungsschleifen zuverlässig wird: er versteht strukturiert, was gefordert wird. Aber selbst ein korrekt konfigurierter Agent liefert falsche…"
cover: "/blog/optimistic-real-pessimism-llm-drowns-in-data-chaos/blog-03-hero-rag-graphrag.png"
series: optimistic-real-pessimism
seriesOrder: 3
---

## Ausgangslage: Das Problem mit Unternehmensdaten

Blog 02 hat gezeigt, wie ein KI-Agent durch klare Datenstrukturen und Validierungsschleifen zuverlässig wird: er versteht strukturiert, was gefordert wird. Aber selbst ein korrekt konfigurierter Agent liefert falsche Antworten, wenn er aus den falschen Dokumenten schöpft.

Dieser Beitrag beschäftigt sich mit der Frage: Wie stellen wir sicher, dass ein KI-Agent die **richtigen Informationen** findet — und nicht nur die ähnlich klingenden?

## Das Problem: Zu viele Dokumente, zu wenig Urteilsvermögen

Viele Teams greifen zum selben Ansatz: Alle Unternehmensdokumente in eine Suchdatenbank laden, bei jeder Anfrage die ähnlichsten Textabschnitte heraussuchen und dem Modell als Kontext mitgeben. In der Vorführung funktioniert das beeindruckend.

In der Realität scheitert es aus drei Gründen:

**Widersprüchliche Dokumente:** Ein Unternehmen hat Garantiebedingungen aus 2023 und 2025 im System — beide gültig für unterschiedliche Kunden. Das Modell bekommt beide und mischt sie. Das Ergebnis ist halb richtig — und damit falsch.

**Wichtiges verschwindet in der Mitte:** Je länger der Kontext, desto weniger beachtet das Modell, was in der Mitte steht. Eine kritische Ausnahme — „nur nach Genehmigung des Regionalleiters" — wird schlicht übersehen.

**Ähnlichkeit ist nicht dasselbe wie Relevanz:** Eine Volltextsuche findet, was semantisch ähnlich klingt. Sie weiß nicht, ob das gefundene Dokument für *diesen* Kunden mit *diesem* Vertragsstatus überhaupt gilt. Das Modell antwortet so, als ob es gilt — und liegt daneben.

Das Ergebnis: Das System liefert das, was die Ähnlichkeitssuche oben platziert — unabhängig davon, ob es für diesen konkreten Fall korrekt ist.

## Die Lösung: Die richtigen Dokumente, nicht die ähnlichsten

Die Antwort ist keine bessere Suche — es ist eine klügere Vorauswahl. Statt alle Treffer dem Modell zu übergeben, stellt man sicher, dass nur das ankommt, was tatsächlich zutrifft:

- Veraltete oder für diesen Kunden nicht geltende Dokumente werden herausgefiltert, **bevor** das Modell sie überhaupt sieht
- Die verbleibenden Treffer werden nach echter Relevanz geordnet, nicht nach Ähnlichkeit
- Ein Beziehungsnetz zwischen Entitäten — Kunde, Vertrag, Produkt, Regel — macht explizit, was zusammenhängt

```
[Kunde: Markus Meier] ──► [Firma: Meier IT-Services]
                              │
                         (Gold-Status)
                              ▼
[Dokument: SLA 2026] ◄── [Kategorie: Gold-Kunde]
```

Dieser Ansatz heißt **GraphRAG**: Das System traversiert das Beziehungsnetz — Kunde → Firma → Vertrag → geltende Regel — und übergibt dem Modell nur das, was logisch korrekt zutrifft. Nicht raten, sondern nachschlagen.

## Praxis: Smart-Hub-Garantiefall Markus Meier

Blog 02 hat die Beschwerde-E-Mail von **Markus Meier** (Smart-Hub 9942-X, Bestellung DE-2026-8831) strukturiert aufbereitet. Meier IT-Services ist Gold-Kunde. Der Agent weiß *was* gefordert wird — jetzt braucht er die *richtigen Garantiebedingungen*.

Im System liegen drei Dokumente:

- **Dokument A (2023):** 14 Tage Rückgabe, Versandkosten trägt der Käufer
- **Dokument B (2025, Gold-Vertrag):** 30 Tage, Express-Austausch vor Rücksendung
- **Dokument C (2026, internes Memo):** Smart-Hub 9942-X darf nur nach Freigabe des Regionalleiters ausgetauscht werden — wegen eines Chip-Engpasses

**Ohne gezielte Vorauswahl** bevorzugt die Suche das längste Dokument (A). Das Modell kombiniert 14 und 30 Tage, kennt das Memo nicht — und gibt dem Kunden eine falsche, compliance-widrige Auskunft.

**Mit gezielter Vorauswahl und Beziehungsnetz:**

1. Dokument A fällt heraus — gilt nicht für Gold-Kunden
2. Das Beziehungsnetz verbindet Artikel 9942-X direkt mit Memo C
3. Dokument C rückt an die erste Stelle
4. Das Modell antwortet korrekt: Express-Austausch — aber erst nach Freigabe des Regionalleiters DACH. Diese Aufgabe wird automatisch angelegt.


## Einordnung: Wer in Unternehmen dafür zuständig ist

In größeren Unternehmen trägt jemand die Verantwortung dafür, dass KI-Agenten die richtigen Informationen bekommen — und nicht einfach auf alle Daten zugreifen dürfen. Diese Rolle nennt sich in modernen KI-Projekten häufig Enterprise Semantic Engineer: Sie baut das Beziehungsnetz zwischen Geschäftsobjekten — Kunden, Verträge, Produkte, Regeln — und definiert, welche Informationen für welchen Kontext relevant sind. Ohne diese Rolle bleibt auch das beste Sprachmodell ein Rätselrater.

## Fazit

Das Modell ist nicht das Problem. Der Kontext ist das Problem. Wer ein KI-System produktionstauglich machen will, muss sicherstellen, dass das Modell die richtigen Informationen bekommt — nicht die ähnlichsten, sondern die logisch zutreffenden.

Der Prompt ist erst der Anfang. **Der Kontext entscheidet, was das Modell wissen darf.**
