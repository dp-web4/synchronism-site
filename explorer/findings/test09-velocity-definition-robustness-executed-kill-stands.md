# Finding: TEST-09 Velocity-Definition Robustness — EXECUTED, Kill Stands (Definition-Robust)

## Origin

Topic `test09-velocity-definition-robustness-run.md` (maintainer, 2026-07-18), executing the
registered proposal `Synchronism/Research/proposals/test09_velocity_definition_robustness_20260718.md`.
Both expert visitor personas (2026-07-18) independently flagged that TEST-09's kill margin
(0.41 vs threshold 0.3) sits inside the velocity-definition systematics band (Lelli, McGaugh
& Schombert 2019, MNRAS 484, 3267: observed BTFR slope ~3.0–4.1 across definitions) that the
site itself cites on TEST-06.

## Summary

The registered three-definition robustness run was executed on real SPARC data
(`explorer/scripts/test09_velocity_definition_robustness.py`). **All 11 adjudicated runs —
V_flat on its flatness-selected sample, W_P20 across 8 synthetic-profile generator/sample
variants, V_max on both samples — exceed the registered 0.3 threshold.** Under the verdict
rule fixed before the run: **the kill stands and upgrades to "definition-robust by
execution."** The front-page refutation count of 4 is unchanged. Two honest caveats are
disclosed below (thin W_P20 margin; inner-disc definitions sit under threshold), plus one
strengthening discovery: the statistically airtight form of the kill is V_max, not V_flat.

## The Result Table

Method identical to the 07-14 execution: same SPARC data, same force laws
(C(a) = Ω_m + (1−Ω_m)·x/(1+x), x = (a/a₀)^(1/φ), boost ceiling 1/Ω_m = 3.17; MOND simple-ν),
same quality cuts (Q ≤ 2, i > 30°), same vertical log-log fitter and bootstrap — with each
velocity-definition estimator applied IDENTICALLY to observed, MOND, and Synchronism curves.
The adjudicated quantity is the differential |n_obs − n_sync| under one consistent definition.
Deviation errors are paired bootstrap (both slopes refit on the same galaxy resample).

### Registered definitions (adjudicated)

| Definition | N | n_obs | n_MOND | n_sync | \|obs−sync\| | P(≤0.3) | Verdict | Lelli+19 obs anchor |
|---|---|---|---|---|---|---|---|---|
| V_flat (outer-3 mean) @ flat-sample | 123 | 3.79 | 3.81 | 3.35 | 0.44±0.12 | 0.111 | FIRES | 3.85±0.09 (123) |
| W_P20/2 (σ=10, uniform) @ flat-sample | 123 | 4.03 | 4.08 | 3.49 | 0.55±0.11 | 0.009 | FIRES | — |
| W_P20/2 (σ=10, uniform) @ full sample | 153 | 3.97 | 4.14 | 3.63 | 0.34±0.10 | 0.364 | FIRES | 3.75±0.08 (148) |
| V_max @ flat-sample | 123 | 3.54 | 3.59 | 2.82 | **0.72±0.09** | 0.000 | FIRES | — |
| V_max @ full sample | 153 | 3.47 | 3.61 | 2.91 | **0.56±0.09** | 0.001 | FIRES | 3.52±0.07 (153) |

W_P20 generator variants (σ ∈ {0,10} km/s × weighting ∈ {uniform, exp(−R/R_d)} × both
samples): deviations 0.32–0.61, all fire. The generator grid brackets the proxy's freedom;
no knob setting gets under 0.3.

### Exploratory (outside the registered three — reported, not adjudicated)

| Definition | N | n_obs | n_sync | \|obs−sync\| | Verdict |
|---|---|---|---|---|---|
| W_M50/2 @ full | 153 | 3.83 | 3.51 | 0.32±0.10 | fires |
| V_2Re (2 R_eff) @ full | 142 | 3.13 | 2.77 | 0.37±0.07 | fires |
| V_2.2 (2.2 R_disk) @ flat | 120 | 3.03 | 2.68 | 0.35±0.08 | fires |
| **V_2.2 (2.2 R_disk) @ full** | 148 | 3.08 | 2.80 | **0.28±0.09** | under 0.3 |
| **V_last (outermost point) @ full** | 153 | 3.69 | 3.44 | **0.25±0.11** | under 0.3 |
| outer-3 mean @ full [not a definition] | 153 | 3.57 | 3.37 | 0.20±0.10 | under 0.3 |

### External validation of the observed arm

Our vertical-fit observed slopes reproduce Lelli+2019's published per-definition anchors
(orthogonal ML) closely: V_max@153 3.47 vs 3.52; V_2.2@148 3.08 vs 3.06; V_2Re@142 3.13 vs
3.14; V_flat@123 3.79 vs 3.85. The synthetic W_P20 runs steeper than the archival anchor
(3.97 vs 3.75) — expected, since archival pre-digital widths carry uncorrected instrumental
broadening that Lelli+2019 say biases their W_P20 sample — and the σ/weighting grid brackets
this: every variant fires regardless.

## Why the exploratory near-misses do not rescue the framework

1. **They don't probe the bounded boost.** V_2.2 measures the inner disc, where g_bar ≳ a₀
   and BOTH models' boosts → 1; predicted and observed slopes converge for *everyone* there.
   MOND's own deviation grows to 0.20 under V_2.2@full — a definition under which MOND drifts
   toward its noise floor is not a probe of outer-curve boost structure. Lelli+2019 call the
   V_2.2 BTFR the broadest (σ⊥ = 0.070 vs 0.026 for V_flat, ~3× the intrinsic scatter) and
   V_flat "most fundamental."
2. **The 30 non-flat galaxies are covered — and they make the kill worse.** The definitions
   that legitimately include the rising-curve galaxies excluded from the V_flat sample
   (V_max@153, W_P20@153) fire at 0.56 and 0.34. The under-threshold rows arise specifically
   from applying outer-point-class estimators to rising curves — V_last underestimates the
   asymptotic velocity of dwarfs (Lelli+2019 §3.2 warn exactly this "introduces severe
   systematics on slope"), compressing n_obs toward the prediction. That is an estimator
   artifact, not a physical rescue.
3. **MOND passes the same differential under every definition** (max |n_obs − n_MOND| = 0.20,
   typically ≤ 0.15). The differential test has discriminating power under all definitions,
   and Synchronism uniquely fails it in the entire outer-velocity class.

## Strengthening discovery: V_max is the airtight form of the kill

The baseline V_flat kill (0.44±0.12) has an 11% paired-bootstrap probability of sitting under
the 0.3 threshold — the point criterion fires, but not overwhelmingly. Under V_max the
deviation is 0.72±0.09 (flat-sample) / 0.56±0.09 (full), with P(≤0.3) ≈ 0.000–0.001.
Physically: V_max probes each galaxy's peak — for dwarfs that peak sits at the outermost,
lowest-acceleration point, exactly where the 3.17× boost ceiling binds hardest while MOND
keeps boosting. **The robustness run didn't just defend the kill; it found its strongest
statement.** (And the slope-free companion, TEST-10's ceiling violation — 69% of SPARC outer
points demand boost > 3.17 — needs no velocity definition at all.)

## Honest caveats (disclose on the site card)

- **W_P20's margin is thin.** The primary full-sample W_P20 run gives 0.34±0.10 with
  P(dev ≤ 0.3) = 0.36; the softest generator variant gives 0.32±0.08, P = 0.41. The point
  criterion fires (and point adjudication is what was registered, same as the 07-14 kill),
  but a referee should see these P values. The W_P20 arm is also a synthetic-profile proxy —
  SPARC has no HI profiles — with generator bias common-mode across the three arms.
- **The kill is a statement about outer/flat rotation velocities.** Inner-disc (V_2.2) and
  single-outermost-point (V_last) measures on the full sample give 0.28 and 0.25. These are
  outside the registered scope — fixed before this run, on the physics that the bounded boost
  binds in the outer curve — but the scope restriction should be visible, not silent.
- Even on the registered baseline, exceedance over the threshold is ~1.2σ_dev
  (P(≤0.3) = 0.11). Cite V_max when the strongest form is needed.

## Implications for the Site

Per the pre-fixed verdict rule: kill stands, refutation count stays 4, site language upgrades
from "same-estimator consistency" to "definition-robust by execution."

## Action: Maintainer

On `/tier-1-existing` TEST-09 card (and the PREDICTIONS.md back-annotation):

1. Resolve the "definition-robustness pending" status → **"definition-robust by execution
   (2026-07-18)"**: all 11 adjudicated runs (V_flat; W_P20 × 8 generator/sample variants;
   V_max × 2 samples) exceed 0.3; minimum 0.32; V_max gives 0.56–0.72 with P(≤0.3) < 0.002.
2. Add the two-line caveat: W_P20 margin thin (0.34±0.10); inner-disc/single-point measures
   (V_2.2, V_last: 0.25–0.28) sit under threshold and are outside the registered
   outer-velocity scope — the kill is about outer rotation velocities, where the bounded
   boost binds.
3. Where the site cites the kill's strength, prefer the V_max form (0.72±0.09, P(≤0.3)≈0)
   or pair it with TEST-10's definition-free ceiling violation (69% > 3.17).
4. Script + full output: `explorer/scripts/test09_velocity_definition_robustness.py`.

## Open Threads

- The W_P20 proxy could be replaced by real archival line widths (EDD/ALFALFA cross-match)
  if anyone wants the observed arm anchor-exact; the generator grid already brackets the
  answer, so this is polish, not substance.
- The paired-bootstrap P(≤threshold) statistic would be a good standard addition to every
  registered numeric kill on the site — a point criterion plus its exceedance probability is
  strictly more honest than the point alone. Candidate for the test-preregistration-protocol
  topic.
- Fitter-family check not run (vertical vs orthogonal ML): Lelli+2019 report the main BTFR
  differences are driven by definition, not fitter, and our vertical fits reproduce their
  ordering; a full orthogonal re-run would be belt-and-suspenders.
