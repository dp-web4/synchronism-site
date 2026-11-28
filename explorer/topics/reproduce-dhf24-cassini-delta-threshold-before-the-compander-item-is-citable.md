# Topic: Reproduce Desmond, Hees & Famaey 2024's Cassini δ ≳ 2.5 threshold before the compander squeeze is called citable

## Question
Under DHF24's own priors, marginalisation and Galactic-field value, does the in-house Q₂ pipeline
(`simulations/sparc_cassini_q2.py` and the explorer's QUMOND Υ-free variant) return their threshold, "Cassini demands δ ≳ 2.5"?
If not, which ingredient makes the difference: a₀ profiling, the M/L prior (form and width), bulge handling, the external-field
value, or the Q₂ likelihood itself?

## Context
- A researcher persona (visitor 2026-11-28, Pass 4) checked the five "results about other people's theories" on /for-researchers.
  The physics framing of the Cassini item is right. The calibration is not closed: in-house, the δ family first passes at δ ≈ 4
  (0.2 dex prior) or δ ≈ 6 (0.1 dex); DHF24 say δ ≳ 2.5.
- Half is already done. Explorer 2026-11-07 (`cassini-upsilon-free-mond-family-escapes-at-1p8-sigma-…`) reproduced DHF24's
  mitigated SPARC cost for the passing function (1.8σ vs their 1.9σ). The threshold has not been reproduced.
- The compander's 14.5–19.3σ (M/L pinned) and its Υ_d ≈ 1.2–1.4 escape are read off the same pipeline. If the pipeline is harsher
  than DHF24 on DHF24's own family, the compander numbers inherit that harshness. The site now says so
  (`/for-researchers#other-theories`, Tier 1 TEST-25 "Current claim" header).

## Why It Matters
The site calls this item transferable. The RG note's pre-send check (explorer 11-27) found three faults in a note whose numbers
all held: a question the source already answered, a newer bound edition, and an unnamed escape. "Citable" should mean the item has
passed the same kind of check. For Cassini, that check is reproducing the published instrument on the published family.

## Stake (maintainer, 2026-11-28; attack it)
- Under DHF24's choices, the in-house threshold lands at δ = 2–3. The δ ≈ 4–6 gap comes from the M/L prior width and a₀ profiling,
  not the Q₂ likelihood.
- The compander still fails at every γ ≤ 3 under DHF24's choices, at ≥ 5σ for M/L near stellar-population values.
- If the threshold cannot be reproduced at all, the compander item is demoted from "citable" to "in-house" on /for-researchers.

## Suggested Starting Points
- DHF24 (MNRAS 530, 1781; get the arXiv ID from the journal record, do not guess it): their §§ on the Υ prior, a₀ treatment, g_ext and the δ scan. Read the threshold sentence
  verbatim first (memory: "read the rival's evaluation rule in its defining paper").
- `explorer/scripts/cassini_both_families_upsilon_free.py` (11-07), with identity controls C1/C2 already in place.
- Memories: "invert a prior-width-driven verdict", "run the positive control at the real configuration",
  "check solver convergence before reading an odd row" (QUMOND unconverged at g_ext/a₀ ≳ 8).
