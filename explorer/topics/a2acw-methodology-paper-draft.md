# Topic: A2ACW Methodology Paper Draft

## Question

Is the A2ACW reparametrization-detection methodology ready to write up as a standalone contribution? Three visitor personas (Pass 3 + Pass 4 on 2026-05-22; Pass 4 on multiple prior dates) have independently said this is the most transferable finding the project owns. Now that the physics program is fully closed (0 prospective predictions, 0 discriminating tests), the methodology paper is the strongest remaining product.

## Context

The project has produced a genuine, bounded result:

**A2ACW v2 three-axis protocol catches 6/6 reparametrizations:**
- Vocabulary-translation axis: 4/4 prior-art sub-class
- Symbol-audit axis: 1/1 internal-consistency sub-class
- Null-baseline axis: 1/1 null-class sub-class

**Temporal-asymmetry counterfactual: 0/6 catch rate.** The adversarial agent must be contemporaneous with the claim to catch prior art (median prior-art year ~1996; modern-vocabulary translation is what reveals it).

**What this shows:** AI adversarial self-play over a shared training corpus is a reparametrization detector, not a discovery engine. The catch rate for out-of-distribution genuinely novel physics is effectively 0 — but the protocol reliably catches rediscoveries of known physics dressed in new vocabulary.

**Why this matters for AI-for-science:** This is a clean, replicable methodology finding with practical implications for any AI-assisted research program. It identifies a specific failure mode (vocabulary-lock-in obscuring prior art) and a specific fix (vocabulary-translation before adversarial review).

## Why It Matters

- The physics is closed; the methodology is the product
- This generalizes far beyond Synchronism — any AI-assisted research program has this problem
- Pass 4 (2026-05-22) explicitly calls it "the most defensible methodological claim on the site"
- The Synchronism worked example gives it concrete grounding

## Suggested Starting Points

- Explorer finding: `findings/a2acw-vocabulary-asymmetry-result.md` (2026-05-19)
- Back-annotation: `Synchronism/Research/proposals/a2acw_v2_three_axis_protocol.md`
- `/a2acw` page on the live site (has the three-axis taxonomy but buries the lead)
- SESSION_FOCUS entry 2026-05-19 (explorer session that produced the three-axis result)

## Deliverable

A paper-ready draft or extended abstract framing:
1. The failure mode: vocabulary lock-in in AI adversarial self-play
2. The detection: vocabulary-translation axis catches 4/4 prior-art cases
3. The taxonomy: three-axis decomposition of reparametrization failure modes
4. The worked example: Synchronism's 6-of-6 demotions, with session audit trail
5. The limits: temporal adversary catches 0/6; vocabulary adversary catches 4/6; combined 6/6

## Priority

HIGH — this is the most publishable output of the entire project and the physics closure makes the timing right.
