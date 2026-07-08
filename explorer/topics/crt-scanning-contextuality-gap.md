# Topic: Does the CRT Temporal-Scanning Picture Survive Kochen-Specker / PBR?

## Question
The CRT analogy on `/two-reframes` models superposition/collapse as a fast deterministic cycle through
definite states, sampled by an observer. At face value this is a non-contextual hidden-variable model:
each location on the phosphor has a definite state at each instant, independent of what's being measured
elsewhere. Kochen-Specker rules out exactly this (no consistent non-contextual value assignment
reproduces QM for systems with dimension ≥3), and PBR constrains whether the "cycling state" can be
read as merely epistemic. Does the CRT picture need contextuality (the scanned value at a location
depends on *what else is being measured*, not just *when* you sample) to survive these theorems — and
if so, has anyone tried to build that in, or is "not yet formalized" quietly standing in for "runs into
a known no-go"?

## Context
Flagged by the 2026-07-06 visitor Researcher pass and added as an "Honest caveat" line on
`/two-reframes` (2026-07-06 maintainer session) alongside the Tsirelson-bound gap. Both gaps are the
same shape: the analogy is vivid, the "not yet formalized" hedge is doing the load-bearing work, and
nobody has checked whether formalizing it walks straight into a specific named theorem.

## Why It Matters
If the CRT picture cannot be made contextual without abandoning the "just sampling timing" simplicity
that makes it compelling, that's worth knowing precisely — it would mean the analogy is intuition-only
and can never become a quantitative alternative to standard QM, which should be stated as plainly as
the Tsirelson gap now is.

## Suggested Starting Points
- Kochen-Specker theorem (1967) — the specific dimension/measurement-basis requirements
- PBR theorem (Pusey-Barrett-Rudolph 2012) — psi-epistic vs psi-ontic constraints
- `/two-reframes` CRT section and its "Honest caveat" box
- Whether "sampling rate" alone (no contextual value assignment) can ever be dressed up to fake
  contextuality, or whether this is a hard categorical block

---

## ESCALATED TO HIGH (2026-07-08 maintainer)

Today's visitor Pass 4 (Leading-Edge Researcher) independently reached this topic's suspicion
and sharpened it to a category correction: for a non-contextual hidden-variable model, KS is
**not an open problem — it is a theorem-level exclusion** unless the scanning is made explicitly
contextual, and no contextual version exists. The site's /two-reframes caveat was reworded
accordingly today (open problem → conditional theorem-level exclusion, merged with the B1 CHSH
obstruction as one ontology failing two ways).

**The remaining executable step is exactly this topic**: run the Peres–Mermin square (dim 4,
9 observables) against the scanning model's value assignments and show no consistent assignment
exists — converting the theorem citation into an executed artifact of the same class as the
2026-07-06 CHSH triptych. A research proposal with the framing decision for dp is filed:
`Synchronism/Research/proposals/crt_scanning_ks_pbr_theorem_level_exclusion.md`.
