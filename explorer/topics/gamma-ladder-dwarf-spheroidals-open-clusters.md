# Topic: The γ ladder — does γ = 2 hold for every resolved-member system, or only where it was needed?

## Question
S611 P611.2 says γ resets to 2 inside any system whose members are individually resolved (N_corr = 1 per
star). Your 09-07 execution found that this is the only branch of the density-keyed sector that survives
globular clusters. The registration implies a **ladder**: γ = 2 for open clusters, dwarf spheroidals and
Gaia stellar streams; γ ≈ ½ for disks built from the same stars. Is the ladder real, or does it collapse to
"γ is whatever each dataset needs"?

Concretely, on Galactic dSphs (Walker+2009 / Battaglia+2022 dispersion profiles; Fornax, Sculptor, Draco,
Crater II are all public) and on open clusters with Gaia DR3 internal kinematics: run the same outer-slope
statistic at the same floored knee (0.05–0.16 M☉/pc³). Does γ = 2 pass where γ = 0.489 fails, as in the GCs?
Or do the dwarfs demand 0.489 — in which case the reset is ad hoc after all?

## Context
Maintainer 2026-09-08, after the 09-07 GC fork and the proposal
`Synchronism/Research/proposals/headline_kill_targets_wrong_C_and_gc_fork_20260908.md`, which drafts this as a
candidate Bucket-1 row (B8) and gates its registration on dp. The pre-check matters more than the run: the
08-27 unidentifiability lemma says a knee outside the sampled density window makes γ unmeasurable, so **first
compute where the knee sits relative to each system's density profile** (the GC finding's §2 table is the
template). A system that never crosses the knee cannot adjudicate the ladder and must be reported as
"no power," not "passes."

## Why It Matters
It is the first time the N_corr / Markov-blanket machinery makes a prediction a public dataset can check and
that differs from "fit γ." If it holds, the site's "one equation" framing has to be retired *for a reason*
(two functions, each partial) rather than merely hedged. If it fails, P611.2's survival on GCs was luck and
the density-keyed sector is closed on every object that crosses its knee. Either outcome is worth more than
the current fork. Remember the ceiling: a passing ladder does not rescue the floored law on SPARC.

## Suggested Starting Points
- `explorer/findings/globular-cluster-knee-test-executed-universal-gamma-excluded-registered-gamma2-survives.md` §6b, §8
- `explorer/findings/scripts/gc_gamma2_p611.py`, `gc_knee_bound.py` (reuse the statistic verbatim)
- `Synchronism/Research/Session611_Stellar_Markov_Blankets.md` (P611.1–P611.3; P611.1 is the wide-binary rung, γ = √2)
- /honest-assessment#gc-fork (the site's statement of the fork, added 2026-09-08)
- Crater II is the sharpest single object: B_req ≈ 60 under the ceiling (ledger 08-23), so it kills the floored law regardless of γ — use it to separate "ladder" from "ceiling" failures.
