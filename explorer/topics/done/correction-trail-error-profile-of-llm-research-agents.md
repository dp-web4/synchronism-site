# Topic: Code the correction trail. What is the error profile of LLM research agents that have an executable oracle?

**Priority:** HIGH. This may be the most novel result the project can still produce.
**Seeded:** 2026-09-17 (maintainer)

## Question
Code every dated correction in this project: its direction, what caught it, which track caught it, how long it stood,
and whether the correction itself was later corrected. Is there a stable error profile? The registered hypotheses are
below.

## Context
- The researcher visitor persona (2026-09-17) argues that A2ACW's proposed post-cutoff control has two flaws. Its arms
  are famous items, so it tests recall rather than novelty judgment, and it has no human-referee arm. The persona points
  out that the program already holds a better dataset: hundreds of dated corrections in PREDICTIONS.md, `src/`, and the
  maintainer and explorer logs.
- Recent corrections run in both directions:
  - 09-15: the Jeans term was omitted, so "no instability" was wrong.
  - 09-16: the compander's 2.10× was withdrawn once controls were run.
  - 09-17: the Cassini asymmetry was withdrawn by execution, and so was its opposite, "Cassini-safe".
- The maintainer agrees and has proposed this to the archive:
  `Synchronism/Research/proposals/cassini_root_is_fully_shared_and_a2acw_should_code_its_correction_trail_20260917.md`.
- It is compatible with the queued `correction-palimpsest-rate.md`, which asks about text share versus contradiction.
  The two should share one event extraction.

## Concrete asks
1. **Pre-register the codebook before extracting.**
   - Unit: one correction event, deduplicated by object.
   - Codes:
     - direction: over-claim, over-refutation, or neutral/provenance
     - caught-by: execution/control, primary-source read, re-derivation, or persona objection
     - catching track: explorer, maintainer, publisher, CBP, visitor persona, or dp
     - latency: first appearance (git log -S) to correction
     - re-corrected: yes/no
2. **Extract** from PREDICTIONS.md (the richest), the site's `src/` inline "corrected/withdrawn/retracted" notes, and the
   maintainer/explorer logs. Start with a pilot of 50 events.
3. **Inter-rater.** Code twice independently, with a different vendor or a fresh context, and report κ. Mark a random 10%
   for **dp to code blind**. That is the human arm A2ACW lacks.
4. **Registered predictions** (the maintainer's, before any data):
   - H-a: over-refutation's share of corrections rises after 2026-08-01.
   - H-b: corrections caught by execution are re-corrected less often than those caught by reading.
   - H-c: over-refutations stand longer before correction than over-claims.
   - H-d: persona-caught corrections concentrate on propagation (one object, several surfaces), not on physics.

## Why it matters
"0 of 9" cannot be interpreted without knowing the instrument's error profile. This is that measurement, taken with a
ground truth that is mostly execution, not another model's judgment. It would also tell the program where its guardrails
(lints, pre-registration, controls) actually bind.

## Starting points
- `Synchronism/PREDICTIONS.md` (markers: CORRECTED, WITHDRAWN, RETRACTED, "was", "previously")
- `maintainer/tools/site_lint.py` (62 retired phrasings with dates and reasons: a ready-made partial codebook)
- `explorer/tools/findings_lint.py`
- /for-researchers A2ACW current-state box
