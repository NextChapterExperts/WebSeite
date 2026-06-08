---
title: "When the LLM Drowns in Data Chaos – RAG, GraphRAG and Context Engineering"
date: "June 7, 2026"
excerpt: "In Blog 02 haben wir die Beschwerde-E-Mail von **Markus Meier** (Smart-Hub 9942-X, Bestellung DE-2026-8831) in ein validiertes JSON-Schema gepresst. Der Agent weiß jetzt strukturiert, was gefordert wird. Das nächste…"
cover: "/blog/optimistic-real-pessimism-llm-drowns-in-data-chaos/blog-03-hero-rag-graphrag.png"
series: "optimistic-real-pessimism"
seriesOrder: 3
---

# Blog 03: Wenn das LLM im Datenmüll ertrinkt

In Blog 02 haben wir die Beschwerde-E-Mail von **Markus Meier** (Smart-Hub 9942-X, Bestellung DE-2026-8831) in ein validiertes JSON-Schema gepresst. Der Agent weiß jetzt strukturiert, was gefordert wird. Das nächste Problem: Aus welchen Dokumenten holt er sich die korrekten **Garantiebedingungen** — und findet er überhaupt die richtigen?

Wer Support-Bots oder Agenten baut, greift fast immer zu **RAG**. Das Versprechen: PDFs in die DB, Frage stellen, perfekte Antwort. In der Demo funktioniert das. In der Enterprise-Realität — **Chunk-and-Pray** — scheitert es.

Unternehmensdaten sind widersprüchlich, veraltet, unvollständig. Ohne Filter halluziniert das LLM oder verliert den Faden (**Lost-in-the-Middle**).

## Was ist RAG?

Metapher: **Open-Book-Klausur**. Das LLM darf ein „Buch“ (Ihre Wissensbasis) aufschlagen:

1. **Retrieval:** Suche relevanter Textstücke
2. **Augmentation:** Chunks + Frage an das LLM
3. **Generation:** Antwort aus echten Fakten

## Warum Vektordatenbanken?

SQL findet `LIKE '%beschädigt%'` — nicht „tiefe Kratzer im Gehäuse“. **Vektorsuche** findet semantische Nähe: Kratzer ≈ Defekt ≈ beschädigt.

## Die Grenze: blind für Strukturen

Vektorsuche weiß nicht:

- Gehört die Garantie zu **Markus Meier**?
- Ist das Dokument von 2023 durch 2026 **ersetzt**?
- Welche Regel gilt für **Gold-Kunden**?

Chunks verlieren die logische Klammer. Widersprüche → das LLM rät.

## GraphRAG: Vektoren + harte Beziehungen

```
[Kunde: Markus Meier] ──► [Firma: Meier IT-Services]
                              │
                         (Gold-Status)
                              ▼
[Dokument: SLA 2026] ◄── [Kategorie: Gold-Kunde]
```

**GraphRAG** kombiniert semantische Suche mit Graph-Traversierung: *Kunde X → Firma Y → SLA Z → Express-Austausch erlaubt*.

## Praxis: Smart-Hub-Garantiefall

Drei Dokumente im Speicher:

- **A (2023):** 14 Tage Rückgabe, Käufer trägt Kosten
- **B (2025, Gold-SLA):** 30 Tage, Express-Ersatz vor Retoure
- **C (2026, Memo):** Smart-Hub 9942-X nur nach Freigabe Regionalleiter

### Szenario 1 — Naives RAG

Vektorsuche bevorzugt langes Dokument A. LLM mischt 14 vs. 30 Tage. Kunde bekommt falsche Antwort; Ersatz ohne Freigabe — Compliance-Bruch.

### Szenario 2 — Context Engineering + Graph

1. Metadaten-Filter: `customer_segment == Gold`, `status == active` → A raus
2. Graph-Abfrage: Artikel 9942-X → Memo C
3. Re-Ranking: C an Position 1
4. Ergebnis: korrekte Kundenmail + Freigabe-Task für Regionalleiter

## AI-OS: L1 heute, GraphRAG als Nächstes

| Fähigkeit | AI-OS heute | Roadmap (§6.21) |
|-----------|-------------|-----------------|
| Vektorsuche L1 | Qdrant, Ingest, semantischer Cache | Metadata-Filter, Re-Ranker |
| Deterministische Recherche | Cache → Qdrant → SearXNG → LLM (fest codiert) | — |
| Knowledge Graph | **G0:** `kg_nodes`/`kg_edges`, Hooks bei Blog/Publish/Ingest | Graph-UI |
| GraphRAG in Pipeline | Speicher ✅, Laufzeit-Query ❌ | **P1** |
| SAP Knowledge Graph | Branchenvergleich (Joule, ERP-Objekte) | AI-OS Graph für Content/Recherche |

AI-OS ist **kein SAP Knowledge Graph** — aber dieselbe Idee: typisierte Entitäten (`BlogPublished`, `ResearchSession`, `part_of`, `derived_from`) statt isolierter Textfragmente. Der Knowledge Graph in AI-OS beantwortet: *Welcher Entwurf stammt aus welcher Recherche? Ist Compliance geprüft? Was ist published?*

**GraphRAG in der produktiven Recherche-Pipeline** — Graph traversieren, dann L1 — ist der wichtigste offene Baustein, damit Blog 3 und Produktstory übereinstimmen.

## Fazit

Ein LLM ist nur so klug wie sein Kontext. Advanced Context Engineering + Knowledge Graph (GraphRAG) zwingen Probabilistik in verlässliche Bahnen. AI-OS legt das Fundament; GraphRAG im Laufzeitpfad schließt die Lücke.
