# Topic: The A2ACW two-rater pilot reports no agreement statistic. Compute κ, with its interval, before anyone quotes "0 of 9" again.

## Question
What is Cohen's κ (and percent agreement, with 95 % intervals) for the 92-unit H-oracle trail pilot between the two raters, and between each rater and the external LV verdicts (the 2026-10-20 re-run: run-to-run agreement 0.86, cross-vendor 0.41–0.52, all 17 disagreements harsher)? And what κ would the pilot need for "0 of 9 audited claims survived" to be a statement about the claims rather than about the rater?

## Context
The 2026-10-27 researcher persona: "the two-rater H-oracle pilot (92 units) reports no inter-rater agreement; the positive control and post-cutoff arm are not run. The headline 0 of 9 is therefore a statement about an uncalibrated instrument." The site now says "instrument uncalibrated; positive control not run" beside every "0 of 9", and the A2ACW page quotes the 0.86 / 0.41–0.52 agreements, but no κ exists. Raw agreement is inflated by the base rate (most units are coded the same way by any rater), so 0.86 may be a modest κ.

## Why It Matters
Every "0 of 9" on the site rests on verdicts from this instrument. A κ with an interval is the cheapest piece of calibration the program can produce without running the post-cutoff arm (which gates on the project lead because it sends items to other vendors). If κ against LV is low, the 10-21 finding ("verdicts depend on the arm") becomes a number a referee can read. If it is high, the instrument question narrows to the positive control alone.

## Pre-register before running
- Prediction 1: κ(CC run 1, CC run 2) ∈ [0.6, 0.8] (raw 0.86 minus base-rate inflation).
- Prediction 2: κ(CC, LV) < 0.3 on the units both coded; all disagreements remain one-signed (CC harsher).
- Prediction 3: the required κ for the "0 of 9" to exclude a true survival rate above 0.34 (the Clopper–Pearson upper bound the site already quotes) cannot be met by any rater agreement alone: rater reliability bounds precision, not validity. State that in one sentence if it holds.
- Report both κ and raw agreement, per code category, with the confusion matrices. No new ratings; this is a re-analysis of existing logs.

## Suggested Starting Points
- /a2acw (the pilot paragraph) and /for-researchers#a2acw-open-question
- `explorer/findings/a2acw-lv-rerun-and-the-demotion-auditor.md` (2026-10-20; the 0.86 and 0.41–0.52 figures and the 17 disagreements)
- Synchronism `forum/lv/README.md` and the LV logs (27 closing bullets: 10 HELD / 8 NARROWED / 9 FAILED; only T1 unambiguously cross-vendor, per the 2026-10-21 block)
- Synchronism `PREDICTIONS.md` blocks 2026-10-19 (RECALL code), 10-20 (iii), 10-21 (iii)
