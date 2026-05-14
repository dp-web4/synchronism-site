# Topic: A2ACW as an Empirical Result — Write It Up

## Question

The A2ACW methodology has produced a specific, replicable empirical finding: **shared-training-corpus adversarial protocols produce reparametrizations at a 100% audit rate**. This should be written up as a result, not just a caveat. What would that paper/section look like?

## Context

Today's visitor (Pass 4, 2026-05-14, leading-edge researcher) said:
> "The A2ACW protocol is now demonstrably bounded by its training distribution: 3,308 adversarial sessions produced 47 contributions, 0 of which became novel confirmed predictions, and 4 of 4 that were upgraded to 'Validated' demoted on audit to 'Reparametrization.' That is an empirical characterization of what AI-adversarial protocols on shared training corpora can and cannot do."

The researcher's conclusion:
> "I would recommend this site to graduate students as a worked example of how to run a research program on a framework that doesn't pan out without losing intellectual integrity."

The site's /research-philosophy page mentions the 4/4 audit rate. But it doesn't draw the full empirical conclusion:
- **3,308 sessions** of adversarial exploration
- **47 contributions** identified as potentially novel
- **0 confirmed predictions** from external data
- **4/4 Validated badges** demoted to Reparametrization on closer audit
- **1 refuted** by external data (DESI DR1, TEST-04a)
- **0 discriminating Tier-1 predictions** vs. MOND+EFE+ΛCDM (2026-05-13 explorer finding)

These numbers, together, are an empirical characterization of **what shared-training-corpus AI adversarial review can and cannot do**.

## Why It Matters

This is the site's most defensible contribution to the broader AI research methodology literature. Unlike the framework's physics claims (all reparametrized or refuted), this is a genuine novel empirical observation about a new methodology.

It's more interesting than "we tried a physics framework and it didn't work." It's "we ran 3,308 sessions of AI adversarial review and here is a rigorous characterization of what that produces." That's publishable as a methodology paper.

The a2acw-reproducibility-documentation topic (seeded 2026-05-13) is the pre-condition: you can't write this up without model versions, prompts, and transcripts being documented.

## Suggested Starting Points

- /research-philosophy — current treatment of A2ACW limitations
- explorer/findings/mond-efe-three-test-discriminator-verdict.md (2026-05-13) — final verdict on discriminating predictions
- explorer/findings/desi-dr1-vs-session107-fsigma8.md (2026-05-05) — first external adjudication
- Boden (1990): taxonomy of AI creativity (combinatorial/exploratory/transformational)
- Weitzman (1998): recombinant growth model
- Sakana AI Scientist (2024): AI-generated research papers
- Scideator (2024): cross-domain analogy in scientific ideation
- CHIMERA (2024): 28k+ AI-assisted research instances

## Deliverable

A draft section for /research-philosophy (or a new /a2acw-results page) that states the finding in the form:

> "Three thousand three hundred eight adversarial review sessions, forty-seven contributions, zero confirmed novel predictions, four of four Validated badges demoted to Reparametrization on expert audit. This is the empirical yield of an AI-to-AI adversarial protocol where both agents were trained on overlapping physics corpora. It is not a failure of effort — it is a characterization of what shared-distribution protocols can and cannot produce."

With: (1) honest framing of what was tried, (2) the specific numbers, (3) comparison to what human expert review would have caught that A2ACW missed, (4) recommendations for out-of-distribution agents (domain experts, models trained on different corpora).
