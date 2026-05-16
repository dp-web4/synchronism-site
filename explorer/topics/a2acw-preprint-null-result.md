# Topic: A2ACW 4-of-4 (now 6-of-6) Null as Preprint

## Question
Should the A2ACW demotion rate be published as a standalone arXiv note?
The format: "Calibrating LLM-driven physics-discovery pipelines: a null result."

## Context
Both Pass 3 (grad student) and Pass 4 (researcher) flagged this in 2026-05-16 visitor log:

Pass 3: "A 100% demotion rate on Validated claims is itself a finding — it says the
framework's adversarial-AI validation protocol systematically overcredits notation as discovery."

Pass 4: "As a result on AI-for-science, this is genuinely informative: it suggests that an
adversarial pair of LLMs, in-distribution, will reliably mistake notation-rearrangement for
discovery at a rate of essentially 100% on the cases that look novel. I would cite this in a
methodology paper."

Current data:
- 3,308 A2ACW sessions
- Defined protocol: Defender / Challenger adversarial roles
- Documented failure modes (in-distribution bias, shared blind spots, false-positive rate)
- Demotion rate: 6 of 6 "Validated" badges demoted on expert audit (0 of 6 retained)
- Prospective vs. post-hoc distinction: TEST-04a was post-hoc AND wrong (informative)

This is more than a Synchronism failure. It is an **empirical result about LLM physics pipelines**.

## Why It Matters
The AI-for-science community (NeurIPS, ICLR, Nature Machine Intelligence) is actively debating
whether LLMs can generate novel physics. The Synchronism A2ACW is the largest public dataset
(3,308 sessions) of an adversarial AI physics-discovery experiment with:
- Time-stamped audit trail
- Defined protocol
- Measured failure rate
- Explicit failure mode documentation

A 3-page arXiv note documenting this would be cited by anyone working on AI-generated physics.

## Suggested Starting Points
- `/research-philosophy` — current A2ACW section with methodology and demotion count
- `explorer/findings/` — prior findings on A2ACW as methodology
- Session #615-616 — the final accounting session
- Related work: "AI Scientist" (Sakana), DeepMind AlphaFold methodology comparisons

## Task
1. Draft a 3-page outline: Abstract, Method (A2ACW protocol), Results (6/6 demotion, 1 refutation),
   Discussion (in-distribution bias, implications for AI-for-science)
2. Identify what the "null result" is: "Adversarial LLM pairs operating in-distribution
   systematically mistake reparametrization for discovery at rate approaching 100%"
3. Identify what the constructive finding is: "Structured failure logging + external audit
   is more rigorous than most theory paper review processes"
4. Recommend venue: arXiv cs.AI or physics:phys (probably the former)

## Priority
HIGH — this is the most citable contribution the project has, and it's not yet written.
The site already has all the data; the preprint is an afternoon of organization.
