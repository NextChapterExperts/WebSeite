---
title: "When the LLM Drowns in Data Chaos – RAG, GraphRAG and Context Engineering"
date: "June 7, 2026"
excerpt: "Blog 02 showed how an AI agent becomes reliable through clear data structures and validation loops: it understands in a structured way what is required. But even a correctly configured agent gives wrong answers if it…"
cover: "/blog/optimistic-real-pessimism-llm-drowns-in-data-chaos/blog-03-hero-rag-graphrag.png"
series: optimistic-real-pessimism
seriesOrder: 3
---

## Starting Point: The Problem with Enterprise Data

Blog 02 showed how an AI agent becomes reliable through clear data structures and validation loops: it understands in a structured way what is required. But even a correctly configured agent gives wrong answers if it draws from the wrong documents.

This post addresses the question: How do we ensure that an AI agent finds the **right information** — and not just what sounds similar?

## The Problem: Too Many Documents, Too Little Judgment

Many teams take the same approach: load all corporate documents into a search database, extract the most similar text passages for each query, and provide them to the model as context. In demos, this works impressively.

In reality, it fails for three reasons:

**Conflicting Documents:** A company has warranty terms from 2023 and 2025 in the system — both valid for different customers. The model receives both and mixes them. The result is half right — and therefore wrong.

**Critical Details Get Lost in the Middle:** The longer the context, the less attention the model pays to what's in the middle. A critical exception — "only after approval by the regional manager" — is simply overlooked.

**Similarity Is Not the Same as Relevance:** A full-text search finds what sounds semantically similar. It doesn't know whether the found document actually applies to *this* customer with *this* contract status. The model answers as if it does — and misses the mark.

The result: The system delivers what the similarity search ranks highest — regardless of whether it's correct for this specific case.

## The Solution: The Right Documents, Not the Most Similar Ones

The answer isn't a better search — it's a smarter pre-selection. Instead of passing all hits to the model, you ensure that only what actually applies gets through:

- Outdated or non-applicable documents for this customer are filtered out **before** the model even sees them
- The remaining hits are ranked by actual relevance, not similarity
- A relationship network between entities — customer, contract, product, rule — makes explicit what is connected

```
[Customer: Markus Meier] ──► [Company: Meier IT-Services]
                              │
                         (Gold Status)
                              ▼
[Document: SLA 2026] ◄── [Category: Gold Customer]
```

This approach is called **GraphRAG**: The system traverses the relationship network — customer → company → contract → applicable rule — and passes to the model only what logically applies. Not guessing, but looking up.

## Practice: Smart Hub Warranty Case Markus Meier

Blog 02 structured the complaint email from **Markus Meier** (Smart Hub 9942-X, order DE-2026-8831). Meier IT-Services is a Gold customer. The agent knows *what* is required — now it needs the *correct warranty terms*.

Three documents exist in the system:

- **Document A (2023):** 14-day return, buyer covers shipping costs
- **Document B (2025, Gold Contract):** 30 days, express replacement before return shipment
- **Document C (2026, internal memo):** Smart Hub 9942-X may only be replaced after approval by the regional manager — due to a chip shortage

**Without targeted pre-selection**, the search favors the longest document (A). The model combines 14 and 30 days, doesn't know the memo — and gives the customer incorrect, non-compliant information.

**With targeted pre-selection and relationship network:**

1. Document A is filtered out — doesn't apply to Gold customers
2. The relationship network directly links item 9942-X with memo C
3. Document C moves to the top position
4. The model answers correctly: express replacement — but only after approval by the DACH regional manager. This task is automatically created.

## Context: Who Is Responsible for This in Companies

In larger companies, someone is responsible for ensuring that AI agents receive the right information — and don't simply have access to all data. This role is often called an Enterprise Semantic Engineer in modern AI projects: they build the relationship network between business objects — customers, contracts, products, rules — and define which information is relevant for which context. Without this role, even the best language model is reduced to guessing.

## Conclusion

The model is not the problem. The context is the problem. Anyone who wants to make an AI system production-ready must ensure that the model receives the right information — not the most similar, but the logically applicable ones.

The prompt is just the beginning. **The context determines what the model is allowed to know.**
