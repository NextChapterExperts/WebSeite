---
title: "Probability Not Commands – Guardrails for Probabilistic Code"
date: "June 17, 2026"
excerpt: "Software used to be predictable: if X, then Y. AI is different: if X, then probably Y. Treating AI like legacy RPA demands guardrails — here's how we build them."
cover: ""
series: optimistic-real-pessimism
seriesOrder: 2
---

## The problem: When code starts guessing

Classic IT systems and traditional RPA (Robotic Process Automation) follow an unforgiving law: **determinism**. When input $X$ arrives, action $Y$ follows exactly. If a postal code must be five digits, a classic script rejects anything with four. There is no in-between, no nuance, no guessing.

For systems built on large language models (LLMs), this world collapses. AI automation is inherently **probabilistic** (stochastic). An LLM calculates vector probabilities. It does not know what is "true" or "false"; it only calculates which word is most likely to follow the previous ones.

> _"Classic code obeys. AI guesses — extremely well, but it guesses."_

Anyone who tries to program an LLM like legacy RPA will end in chaos. A workflow that works perfectly for 90 out of 100 emails breaks on the 91st because a customer uses irony or introduces a typo. Our task as AI architects is therefore to build a **hard, uncompromising shell around this soft, probabilistic core**.

---

## The solution: The translation-verification-alignment pattern

To guarantee absolute reliability in the enterprise, we do not trust the AI blindly. We build a pipeline based on mutual control, mathematical validation, and human final decision:

```
[Unstructured input: Angry customer email]
         │
         ▼
┌─────────────────────────────────────────┐
│       Agent 1: The translator           │ ──► Squeezes free text into hard JSON
└─────────────────────────────────────────┘
         │
         ▼
┌─────────────────────────────────────────┐
│       Agent 2: The auditor              │ ──► Performs back-translation
└─────────────────────────────────────────┘     & hunts for logical breaks
         │
         ▼
┌─────────────────────────────────────────┐
│     Automated code check                │ ──► Mathematical schema validation
└─────────────────────────────────────────┘     (Pydantic / Instructor)
         │
         ▼
┌─────────────────────────────────────────┐
│     Human (Human-in-the-Loop)           │ ──► One-click approval in dashboard
└─────────────────────────────────────────┘
         │
         ▼
[Secure API execution in the ERP system]
```

---

## The pipeline in practice: A concrete walkthrough

Let's see how this control system breaks down, safeguards, and processes a typical unstructured service email.

### The unstructured input (The customer email)

An upset customer writes to support:

> _"Hi support team, about two weeks ago (I think it was May 4th) I ordered three of your Smart Hubs (item no. 9942-X) for our office. The package arrived yesterday, but two of them are totally scratched and the third housing is completely cracked. We can't use them like this! Please send us replacements for the damaged units to our company address as soon as possible. The order number should be DE-2026-8831. Regards, Markus Meier, Meier IT Services."_

### Phase 1: Structuring (Agent 1)

Agent 1 analyses the free text and extracts the hard data. It may respond _exclusively_ within the predefined JSON schema:

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

### Phase 2: Logical quality check (Agent 2)

To break through the AI's "operational blindness", we insert a second agent. It receives _exclusively_ the JSON result from Agent 1 (not the original text!). Its task is **back-translation** into human logic:

> **Back-translation from Agent 2:**
>
> _"Customer Markus Meier (Meier IT Services) reports damage for order DE-2026-8831 dated 04/05/2026. A free replacement is requested for a total of 3 damaged units of type 9942-X. Damage: 2x scratched, 1x broken housing."_
>
> **Logic check:** _Order date is in the past (plausible). Number of damaged units (3) matches the detail descriptions (2+1=3)._
>
> 👉 **Status: Logically consistent.**

### Phase 3: The mathematical gatekeeper (Deterministic code)

Before any AI result touches a productive system, classic software logic kicks in. Using frameworks like **Pydantic**, we force the system into a mathematical type check. Is the date format correct? Are all mandatory fields populated? If the JSON schema is valid, the process continues. If not, the JSON is immediately blocked and corrected internally.

### Phase 4: The human-in-the-loop principle

The biggest mistake in the AI hype is belief in "zero-maintenance autonomy". Our rule: **The AI prepares, the human decides.** The employee sees the chaotic original text and the clean AI synthesis in the dashboard and approves with a single click to pass the validated JSON to the ERP interface.

---

## Who builds the guardrails? Role distribution in the autonomous enterprise

In a modern ecosystem — such as SAP BTP or future autonomous SAP architectures — this JSON schema becomes the central contract between AI and the core system. But who is responsible for this rulebook?

Two emerging key roles share this task:

- **[The Intent Architect](/en/blog/sap-business-ai-plattform-deep-dive-intent-architect-teil-1) (primary owner):** The evolution of the classic solution architect. Where they once mapped rigid iDocs or APIs, they now design logical frameworks and "intents" in Joule Studio 2.0. They define the JSON schema in code and set the hard criteria an agent must meet to trigger business-critical processes.

- **[The Enterprise Semantic Engineer](/en/blog/sap-business-ai-plattform-deep-dive-enterprise-semantic-engineer-teil-3) (supplier):** They maintain the company's digital memory — the SAP Knowledge Graph. They provide the semantic building blocks for the schema, ensuring that descriptions in the JSON match the real data structures and business objects in the ERP system exactly.

This is flanked by the **AI Governance & Compliance Officer**, who monitors the schema for data protection (GDPR), while the **AI Agent Supervisor** sits in the dashboard as an "air traffic controller" and steps in if schema validation fails on an unexpected edge case.

---

## Conclusion for practice

Anyone running AI automation seriously does not build magical black boxes. We build cascading control systems. The JSON schema is the universal interface that allows unpredictable AI agents to communicate flawlessly with the uncompromisingly rigid core of an ERP system. We force statistics to behave like logic.

The prompt is only the beginning. Let's build it right.
