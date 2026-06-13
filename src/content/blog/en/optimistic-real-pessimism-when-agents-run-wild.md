---
title: "When Agents Run Wild – State, Memory and Cost Kill-Switches"
date: "June 8, 2026"
excerpt: "Blog 03 demonstrated how an AI agent finds the right information: Through targeted pre-selection and a network of relationships between business objects, the model receives exactly what applies to a specific customer…"
cover: "/blog/optimistic-real-pessimism-when-agents-run-wild/Bild-Blog-04.png"
series: optimistic-real-pessimism
seriesOrder: 4
---

Blog 03 demonstrated how an AI agent finds the right information: Through targeted pre-selection and a network of relationships between business objects, the model receives exactly what applies to a specific customer and case. The next step is the actual execution — and this is precisely where a new class of problems arises.

## The Problem: When an Agent Can't Stop

Autonomous AI agents operate in a cycle: they formulate a plan, execute an action, observe the result, and decide what to do next. This works well as long as each action leads to progress.

> _„Correct information and a validated schema are prerequisites — not a guarantee for error-free execution."_

The problem arises when an action repeatedly fails and the agent misinterprets the failure. Without clear termination conditions, it attempts the same action again and again — because it cannot distinguish whether an error is temporary or caused by a business rule.

## The Example: The Markus Meier Warranty Case

Blog 03 fully prepared the case: **Markus Meier** (Meier IT-Services, Gold Customer) has claimed three defective Smart Hubs (9942-X, Order DE-2026-8831). The agent knows the correct answer: express replacement according to the Gold contract — but only after approval from the regional manager, because an internal memo reports a chip shortage for this item.

The agent is now supposed to create the replacement delivery in the ERP system. However, it fails — in two typical ways:

**Case 1 — Repetition Loop:** The agent attempts to create the delivery order. The ERP system rejects the process because the regional manager's approval is still pending. The agent interprets this as a temporary error and tries again. Then again. In two minutes, it submits forty identical requests. The ERP system remains blocked, the customer receives no update, and the regional manager is not notified.

**Case 2 — Incorrect Order:** The agent books the return shipment before the replacement delivery is approved. Every subsequent step fails because the prerequisites are missing. The process goes in circles.

In both cases, no visible system error occurs — the agent is working, but producing no value.

## The Solution: Four Control Mechanisms

For an agent to operate safely in execution, it needs four complementary mechanisms:

**State Memory:** The agent logs every attempt with its result. After the second failure, it knows that it has already tried twice — and that the same error persists.

**Attempt Limit:** A clear upper limit defines how often the same step may be repeated. After three failed attempts, the agent stops and waits for an external signal.

**Cost Limit:** Independent of the attempt limit, there is a maximum budget per operation. If a processing step consumes more resources than intended, the process is halted.

**Logging:** Every step is recorded with its decision, action, and result — fully traceable for internal audit purposes.

## Practice: With and Without Control

**Without Control:** The agent submits forty requests to the ERP system in two minutes. Costs increase. All requests are rejected. The customer receives no feedback. The regional manager does not know that their approval is needed.

**With Control:** The agent submits the first request — it is rejected. It logs the result and tries a second time to rule out temporary errors. The second request is also rejected. The agent recognizes that a business rule is in effect, stops the process, and creates a task for the regional manager: *„Replacement delivery for order DE-2026-8831 requires your approval — item 9942-X, chip shortage."*

The process is orderly concluded. Human intervention occurs precisely where a business decision is required.

## Classification: Autonomy and Responsibility

The described mechanisms are not a technical detail — they are the prerequisite for a company to even grant execution rights to an AI agent. Without an attempt limit, cost control, and an escalation path, an autonomous agent is an uncontrolled risk, regardless of how well it understands the context.

Blog 05 will address the next question: While the agent performs all these steps — what data leaves the company?

## Conclusion

Autonomy without oversight is not progress. An AI agent that doesn't know when to stop causes more effort than it saves. State memory, attempt limit, cost control, and logging are the four mechanisms that make an executing agent manageable.

The prompt is just the beginning. **Control mechanisms make the difference between demonstration and production operation.**
