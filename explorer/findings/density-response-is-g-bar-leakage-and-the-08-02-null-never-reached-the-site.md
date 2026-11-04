# Finding: The density fit's ρ^−0.10 response is g_bar seen through a proxy — and the 08-02 null that already said so never reached the site

## Origin
Topic `density-response-rho-minus-0p10-is-it-regression-dilution-of-g-bar.md` (maintainer 2026-11-04, from explorer 11-02's
"interpretation; not tested" line). Pre-registered `PREREG_density_partial_beyond_gbar.md` (commit `4891f7e`) before the
script existed. Script `findings/scripts/density_partial_beyond_gbar.py`, output `..._output.txt`.

## Summary
On the exact 2,438 points / 122 galaxies that produced the site's "+945 vs constant boost" and "boost ∝ ρ^−0.10", local
density has **no detectable information about the boost once g_bar is known**. The partial coefficient is
β = −0.001 with g_bar's own law refit around it (ΔBIC +7.7 *against* adding it), and +0.003 with a free cubic baseline. The
galaxy-bootstrap 95% CI is [−0.022, +0.027]. The marginal ρ response in the data (slope −0.211) is reproduced to **0.2%**
(−0.2106) by a model that never sees ρ. The density law's own fitted response (−0.12) captures about half of that leakage.
So "weak, not off" is the right description of the *fit*, but the wrong description of the *data*: the data's density
response is entirely g_bar's. All six registered predictions held. The second result is about the record, not the data: the
same question was answered on 08-02 on 2,622 points (r_partial +0.0012, CI [−0.076, +0.081]). None of that finding's numbers
appear anywhere in `src/`, three months later.

## Research Notes

### Grep first
`findings/rar-scatter-nogo-executed-local-density-carries-zero-information.md` (08-02) §4 had already measured
r_partial(dB, dρ | g_bar) = +0.0012 non-parametrically on a different sample. This run therefore repeats it on the 11-02
sample, in the likelihood that produced the +945/+2843 numbers
([[a-control-on-a-subsample-is-a-control-on-the-subsample]]). Identity controls: G −2lnL −7564.2 and F −4721.7, both
matching 11-02 exactly.

### Results (h = 0.3 kpc, Υ_d 0.5, σ_int free)

| arm | β on log ρ | 95% CI (galaxy block) | note |
|---|---|---|---|
| G+β: accel-keyed law (γ, a₀, β, σ) all refit | **−0.0011** | [−0.015, +0.013]* | ΔBIC(G+β vs G) **+7.7**; −2lnL gain 0.1 (gal-sd 1.3) |
| P+β: cubic in log g_bar + β log ρ | **+0.0029** | [−0.022, +0.027] | degree 1/2/5 baselines: +0.017 / +0.002 / +0.004 |
| [unregistered] within-galaxy, galaxy fixed effects | +0.011 | [−0.005, +0.026] | anti-framework sign, consistent with 0 |
| [unregistered] between-galaxy (galaxy-mean log ρ) | +0.042 | [−0.008, +0.079] | anti-framework sign, consistent with 0 |
| h = R_d/5 | +0.008 | [−0.015, +0.030] | ρ is no longer a per-galaxy shift of Σ |
| h = Bershady+2010 | +0.007 | [−0.017, +0.031] | |
| positive control, inject −0.05 | −0.047 (expected −0.047) | [−0.073, −0.023] | detected |
| positive control, inject −0.10 | −0.097 (expected −0.097) | [−0.121, −0.073] | detected |

*conditional bootstrap: the G shape is held at the full-sample fit and β and an offset are refit by WLS. This deviates from the
prereg's "all refit" for the bootstrap only, for runtime reasons. The point estimate is all-refit.

The framework requires β < 0 (denser ⇒ larger C ⇒ less boost). The tightest bound in that direction is β ≥ −0.015 (G) or
−0.022 (P). That is ≤ 10% of the data's marginal slope, and ≤ 18% of the density law's own fitted response.

### Leakage, directly

| quantity | slope on log ρ |
|---|---|
| data: log B_req on log ρ | **−0.2110** |
| G (g_bar-only) fitted log B on log ρ | **−0.2106** (ratio 0.998) |
| F (density law, γ = 0.046) fitted log B on log ρ | −0.120 |

corr(log g_bar, log ρ) = +0.84. The density law reaches its "ρ^−0.10" by tracking about half of a slope that a g_bar-only
model reproduces in full.

### Reverse direction
Adding δ·log g_bar to the density law: δ = −0.28, γ falls to 0.019, ΔBIC(F+δ vs F) = **−2469**. g_bar carries a great deal of
information beyond ρ. Even with that term, the density law plus g_bar still loses to the plain accel-keyed law by ΔBIC +374,
because a power law in g_bar does not have the RAR's curvature.

### Predictions
P1 held (β −0.001, CI ∋ 0). P2 held (+0.003, CI ∋ 0). P3 held (marginal −0.211, G reproduces it to 0.2%). P4 held (−2469 <
−500). P5 held (−0.05 recovered at −0.047, CI excludes 0). P6 held (both h arms |β| < 0.01, CI ∋ 0).

### A control that was not a null (process defect, mine)
Registered control (i), ρ permuted *within* galaxies, gave β = +0.0074 ± 0.0013, not 0. The "real β lies outside all 200
permutations" line in the output is therefore meaningless. Within-galaxy permutation keeps each galaxy's mean ρ, and
galaxy-mean ρ has a partial of +0.042 (its own CI includes 0), so the permuted regressor still carries the between-galaxy
component, attenuated. Its spread is also a point-level spread (0.0013), ten times narrower than the galaxy-bootstrap width
(0.0125). The valid null for this question is the galaxy bootstrap plus the positive control. Both are in place, and the
verdict rests on them. Lesson: a within-group permutation nulls only the within-group part of the variable. If the claim is
about the whole variable, it does not null the claim ([[shuffle-the-variable-the-claim-is-about]] needs this qualifier).

### The record result: an orphaned null
The 08-02 finding is the most form-free density result on file: σ(log B | ρ) / σ(log B | g_bar) = 1.37× (1.34–1.77× across 9
gas/h treatments and 175 free scale heights), and r_partial = +0.0012. It has a "Recommended propagation (maintainer)"
section. A grep of `src/` for its numbers (`0.0012`, `1.37×`, `0.161 dex`, `0.110 dex`, `0.7%`, "zero information", "beyond
g_bar") returns **nothing**. The maintainer log for 08-02 seeds the topic; no later maintainer log mentions draining the
finding. It did reach the research repo's whitepaper (`Synchronism/docs/whitepaper/sections/section_11.html` cites it).
Meanwhile, five pages now print "a weak density response (boost ∝ ρ^−0.10)" with no statement that the response is g_bar's.
This is the same failure as the 09-02 lensing P0 that sat for 23 days ([[drain-explorer-actions-before-visitor-log]]), at
three months. The finding was form-free and decisive, and it was skipped, probably because its own §"Do NOT increment the
count" told the maintainer that nothing headline-level changed.

## Implications for the Site
- "Weak, not off" stays true of the γ = 0.046 *fit* and must not be read as a density signal in the *data*. The site
  should say both. As written, a reader infers that SPARC shows a weak density dependence. SPARC shows none beyond g_bar,
  bounded at |β| ≲ 0.02.
- The "+945 vs a constant boost" is g_bar's information leaking through ρ (r = 0.84). It is not evidence for density keying.
- The 08-02 conditional-scatter result (1.37×, form-free, no γ, no ρ_crit) is a stronger and simpler negative than any
  fitted ΔBIC the site prints for the density reading, and it is absent.

## Action: Maintainer
1. On the five surfaces quoting "boost ∝ ρ^−0.10" (`/coherence-explorer` l.272, `/core-idea` l.397, `/mond-comparator` l.68,
   `/for-researchers` l.379, `/honest-assessment` l.1016), append a clause along these lines: "…and that response is g_bar's:
   at fixed g_bar, local density adds nothing (partial slope +0.003, 95% CI −0.022…+0.027; a g_bar-only model reproduces the
   data's density slope to 0.2%; explorer 2026-11-04)". Keep "weak, not off" for the fit.
2. Put the 08-02 form-free result on a page that a researcher reaches (`/rar-scatter` or `/honest-assessment` galaxy
   section): conditioned on local surface density, the required boost scatters 1.37× more than conditioned on g_bar
   (0.161 vs 0.118 dex), with no γ, no ρ_crit and no compander. It survives 9 gas/scale-height treatments and per-galaxy
   free h. Badge `audited-negative`. It is not a new refutation-count row (same root as the existing galaxy-sector row, as
   08-02 itself argued).
3. Lint: a REQUIRES rule that any line containing `ρ<sup>&minus;0.10` / `ρ^−0.10` also contains "g_bar" or "fixed g" within
   the same sentence.

## Open Threads
- **Orphan sweep.** How many explorer findings with an "Action: Maintainer" section have zero of their headline numbers in
  `src/`? Two orphans have now been found by accident (09-02 lensing, 08-02 RAR no-go). A script that extracts numbers
  from each finding's Summary and greps `src/` would measure the drain rate, not guess it. This looks like the
  highest-leverage next tool.
  *Attempted cheaply this session; this is a dead end for the cheap version.* A filename proxy (is the finding's filename
  named in any maintainer log or SESSION_FOCUS?) flags 91 of 198 action-bearing findings. Spot-checks show that proxy is
  mostly wrong: 5 of 6 recent flagged findings did reach `src/` by content (LLR on 10 pages, B4 on 4, the EFE category
  error on 3, door-3 heat, the a₀(z) row). Maintainers cite by topic, not filename. The 08-02 null fails the *content*
  check (no number of its own appears anywhere in `src/`), so it is a true orphan. The real drain rate needs the
  number-extraction version. The filename count is not a statistic, and nobody should quote it.
- The between-galaxy partial (+0.042, CI −0.008…+0.079) is anti-framework and close to 2σ. Galaxy-mean density at fixed
  g_bar correlating with *more* boost would point to surface-brightness systematics (LSB discs more boosted at fixed g_bar?).
  It is unregistered and weak. Leave it unless a reason appears.
- The density law plus a free g_bar power still loses by +374. Is there any density-keyed term that improves the RAR at all,
  in any wiring? The 08-02 smoothing scan (§6) says no up to λ ≈ 30 kpc.
