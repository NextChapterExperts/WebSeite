---
title: "When the LLM Drowns in Data Chaos – RAG, GraphRAG and Context Engineering"
date: "June 7, 2026"
excerpt: "Blog 02 demonstrated how an AI agent becomes reliable through clear data structures and validation loops: it understands in a structured way what is required. But even a correctly configured agent will return incorrect…"
cover: "/blog/optimistic-real-pessimism-llm-drowns-in-data-chaos/blog-03-hero-rag-graphrag.png"
series: optimistic-real-pessimism
seriesOrder: 3
---

## Starting Point: The Problem with Enterprise Data

Blog 02 demonstrated how an AI agent becomes reliable through clear data structures and validation loops: it understands in a structured way what is required. But even a correctly configured agent will return incorrect answers if it draws from the wrong documents.

This post addresses the question: How do we ensure that an AI agent finds the **right information** — and not just similar-sounding content?

## The Problem: Too Many Documents, Too Little Judgment

Many teams adopt the same approach: load all corporate documents into a search database, retrieve the most similar text passages for each query, and provide them to the model as context. In demonstrations, this works impressively.

In reality, it fails for three reasons:

**Contradictory Documents:** A company has warranty terms from 2023 and 2025 in its system — both valid for different customers. The model receives both and mixes them. The result is half-right — and therefore wrong.

**Critical Information Gets Lost in the Middle:** The longer the context, the less attention the model pays to what’s in the middle. A critical exception — “only after approval by the regional manager” — is simply overlooked.

**Similarity Is Not the Same as Relevance:** A full-text search finds what sounds semantically similar. It doesn’t know whether the retrieved document actually applies to *this* customer with *this* contract status. The model answers as if it does — and misses the mark.

The result: The system returns whatever the similarity search ranks highest — regardless of whether it is correct for this specific case.

## The Solution: The Right Documents, Not the Most Similar Ones

The answer isn’t a better search — it’s smarter pre-selection. Instead of passing all hits to the model, you ensure that only what actually applies gets through:

- Outdated or inapplicable documents are filtered out **before** the model ever sees them
- The remaining hits are ranked by actual relevance, not similarity
- A relationship network between entities — customer, contract, product, rule — makes it explicit what connects to what

```
[Customer: Markus Meier] ──► [Company: Meier IT-Services]
                              │
                         (Gold Status)
                              ▼
[Document: SLA 2026] ◄── [Category: Gold Customer]
```

This approach is called **GraphRAG**: The system traverses the relationship network — customer → company → contract → applicable rule — and passes only what logically applies to the model. Not guessing, but looking up.

## Practice: The Smart-Hub Warranty Case of Markus Meier

Blog 02 structured the complaint email from **Markus Meier** (Smart-Hub 9942-X, order DE-2026-8831). Meier IT-Services is a Gold customer. The agent knows *what* is being requested — now it needs the *correct warranty terms*.

Three documents exist in the system:

- **Document A (2023):** 14-day return window, buyer covers shipping costs
- **Document B (2025, Gold Contract):** 30 days, express exchange before return shipment
- **Document C (2026, Internal Memo):** Smart-Hub 9942-X can only be exchanged after regional manager approval — due to a chip shortage

**Without targeted pre-selection**, the search favors the longest document (A). The model combines 14 and 30 days, is unaware of the memo — and provides the customer with incorrect, non-compliant information.

**With targeted pre-selection and a relationship network:**

1. Document A is filtered out — it does not apply to Gold customers
2. The relationship network directly links item 9942-X to Memo C
3. Document C moves to the top position
4. The model answers correctly: Express exchange — but only after approval from the DACH regional manager. This task is automatically created.

## Organizational Context: Who Is Responsible for This in Enterprises

In larger organizations, someone holds responsibility for ensuring that AI agents receive the right information — and do not simply have unrestricted access to all data. In modern AI projects, this role is often referred to as an Enterprise Semantic Engineer. They build the relationship network between business objects — customers, contracts, products, rules — and define which information is relevant for which context. Without this role, even the best language model remains a guesser.

## Conclusion

The model is not the problem. The context is. Anyone looking to make an AI system production-ready must ensure that the model receives the right information — not the most similar, but the logically applicable ones.

The prompt is only the beginning. **Context decides what the model is allowed to know.**
