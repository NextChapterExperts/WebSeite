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

For systems built on large language models (LLMs), this world collapses. AI automation is inherently **probabilistic** (stochastic). An LLM calculates vector probabilities. It does not know what is "true" or "false"; it only calculates which token is most likely to follow the previous ones.

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

### The 4 phases of the safeguard pipeline in detail

#### Phase 1: Structuring (Agent 1)

The process starts with the unstructured chaos of the real world — for example, an unfiltered customer email. Agent 1 (a fast, local model running on our own hardware via _vLLM_ or _Ollama_) has one single task: ignore the tone and extract the pure facts into a strictly defined data container (JSON).

#### Phase 2: Logical quality check (Agent 2)

To break through the AI's "operational blindness", we insert a second agent. It receives _exclusively_ the JSON result from Agent 1. Its task is **back-translation**. It formulates a crystal-clear, precise summary from the bare JSON data, along the lines of: _"Customer wants to cancel item X due to defect. Requests refund to IBAN Y."_ If Agent 2 detects a logical contradiction (e.g. an incomplete IBAN or an impossible order date), it stops the process immediately.

#### Phase 3: The mathematical gatekeeper (Deterministic code)

Before any AI result touches a productive system or is shown to a human, classic software logic kicks in. Using frameworks like **Pydantic** or **Instructor**, we force the system into a mathematical type check.

Is the date format correct? Are all mandatory fields populated? Is the customer number purely numeric? If the JSON schema is valid, the process continues. If not, the system triggers an internal, controlled loop: it throws the JSON back to Agent 1 with a hard error message: _"Field 'customer_number' missing. Correct the output."_ The agent corrects itself — within safe boundaries, without blowing the token budget.

#### Phase 4: The human-in-the-loop principle

The biggest mistake in the AI hype is belief in "zero-maintenance autonomy". Our rule: **The AI prepares, the human decides.**

The human employee sees a perfect overview in their dashboard (e.g. directly in Nextcloud or a lean TUI):

1. The customer's chaotic original text.
2. Agent 2's clean, logical back-translation.
3. The validated JSON data package for the ERP system.

The employee no longer needs to retype data or search through systems. They check the logic at a glance and click **"Approve"**. Only at that moment is the ERP system's API fed.

---

## Conclusion for practice

Anyone running AI automation seriously does not build magical black boxes. We build cascading control systems. Through structured JSON outputs, automated validation loops, and the targeted use of local, specialised models, we make the probabilistic noise of AI controllable. We force statistics to behave like logic.

The prompt is only the beginning. Let's build it right.
