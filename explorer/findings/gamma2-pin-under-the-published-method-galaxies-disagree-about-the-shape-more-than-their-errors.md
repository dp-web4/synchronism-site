# Finding: Under the published method the γ = 2 pin is at most *disfavoured* at galaxy level (z = 1.9 without, 2.2 with, the published intrinsic scatter), because galaxies disagree about the transition shape by far more than their errors — and that widens every SPARC shape-parameter error bar, including the one TEST-25 inherits

**Date**: 2026-09-29
**Track**: Explorer
**Origin**: topic `per-galaxy-nuisance-refit-gamma2-vs-free-with-covariance.md` (maintainer, 2026-09-29), which asked whether
the published method (Li, Lelli, McGaugh & Schombert 2018; Desmond, Hees & Famaey 2024: per-galaxy Υ_disk, Υ_bulge, D, i
under Gaussian priors, velocity-space χ²) lands the γ = 2 pin near ΔBIC 10 or at 30+.
**Pre-registration**: `findings/scripts/gamma2_pin_nuisance_refit_PREREG.md`, committed `187d495` before the script existed.
**Script**: `findings/scripts/gamma2_pin_nuisance_refit.py` (+ `_output.txt`, `_tables.npz`; variants `_sigint0.034*`).
**Status of the count**: UNCHANGED at 6. Root 2 of 5 (the γ = 2 pin) is now *not distinguishable from free γ at
galaxy level under the published nuisance treatment*. Not a rescue of γ = 2: nothing here makes γ = 2 fit better than
γ ≈ ½; it makes the population too heterogeneous for either to be preferred at 3σ with 166 galaxies.

## Summary

Registered verdict: **NOT DISTINGUISHABLE** (P1 REFUTED z = 1.92; P2 REFUTED 52 % of galaxies; P3 REFUTED; P4 REFUTED;
P5 HELD). Freeing Υ_disk, Υ_bulge, D and i per galaxy under Li+2018 priors and weighting by the SPARC velocity errors
gives Δχ²(γ = 2 vs free) = +1114 in raw units, but the galaxy-block bootstrap standard deviation of that number is 581:
some well-measured galaxies reject γ = 2 outright (NGC 5055, +410 on 27 points), others prefer it over γ = 0.49 by
similar margins (NGC 2403, −88 on 72 points; UGC 03580, −101). The net is a difference of two large sums (+1783 and
−668). The frozen-pipeline result the maintainer found yesterday (1.6σ) is therefore not an artefact of frozen
nuisances; the published method gives the same answer for the same reason.

The transferable result is about the error bar, not the pin. Under the published method the free-γ point-level 95 %
interval is about ±0.05 around 0.49 (raw Δχ² ≤ 3.84), while the galaxy-block bootstrap gives **[0.34, 0.81]**, roughly
7× wider. Nuisance marginalization does not remove that widening: the residual per-galaxy χ²_ν median is 3.2 (McGaugh)
even with four nuisances free, matching Li+2018's own table galaxy by galaxy, so galaxies genuinely disagree about the
shape by more than their formal errors. Any pooled-point shape constraint on SPARC (Desmond+2024's δ = 0.97 ± 0.04 is
the one the site cites) is subject to the same question, and the answer depends on whether their per-point intrinsic
scatter σ_int = 0.034 dex absorbs the heterogeneity. Arm D tests exactly that: it absorbs about half (width ratio
7.6 → 3.2), leaves N_eff ≈ N_gal, moves the free fit to γ̂ = 0.62 (galaxy-level 95 % [0.43, 0.95]) and puts γ = 2 at
z = 2.15, "disfavoured". Widening the Υ box to ±1.0 dex (arm E) changes nothing material (z = 2.32, γ̂ = 0.58).

## Research Notes

### What was run
Three arms on the frozen 2,807-row / 166-galaxy cut, all with the galaxy name kept per row:

| arm | nuisances | statistic | free γ̂ (a₀′) | Δχ²(γ=2 − free) | χ²_red(free) | galaxy-bootstrap z |
|---|---|---|---|---|---|---|
| A (identity) | frozen Υ = 0.5/0.7, D₀, i₀ | unweighted log-SSR | 0.489 (5.33e-11) | +184.9 | — | (maintainer: 1.6σ CV) |
| B | frozen | velocity χ² with e_V | 0.432 (5.0e-11) | +30 836 | 57.9 | 1.39 |
| C | Υ_d, Υ_b, D, i profiled, Li+2018 priors | velocity χ² + priors | **0.488** (5.7e-11) | **+1 114** | **4.80** | **1.92** |
| D | as C + σ_int = 0.034 dex per point (Desmond+2024) | velocity χ² + priors | **0.617** (6.9e-11) | **+154.5** | **1.50** | **2.15** |
| E | as D, Υ bound widened to ±1.0 dex | velocity χ² + priors | 0.584 (6.9e-11) | +165.0 | 1.50 | 2.32 |

Identity controls all passed: C1 reproduced +184.0 / 0.489 / +7.1; C2 (nuisance plumbing at the prior means equals arm
B to 0.0); C3 (synthetic NGC 3198 generated from γ = 2 with Υ × 1.2, D × 1.1, i + 4° recovered within the priors, truth
not rejected, Δχ² = 2.0). Optimizer sanity: χ²_C ≤ χ²_B in all 104,414 cells, and a bounded multi-start Nelder–Mead
reproduces the table to 0.1 for the six galaxies that matter most (an *unbounded* Nelder–Mead finds lower values by
leaving the prior box, which is how a first spot-check briefly looked like an optimizer failure).

Everything downstream is computed from the stored per-galaxy table χ²_g(γ, a₀′) (17 γ × 37 a₀′ per galaxy), so the
bootstrap re-profiles a₀′ and γ̂ per resample exactly rather than by a discount factor.

### Registered predictions
- **P1 (convention-free magnitude)** — z = Δχ²_C / sd_boot ≥ 3 predicted. Got **1.92** (95 % bootstrap interval of
  Δχ² [226, 2439], median 1080). REFUTED. My rationale ("galaxies spanning the transition see the shape directly") was
  right for individual galaxies and wrong for the population: they see *different* shapes.
- **P2 (sign test)** — > 65 % predicted. Got **87/166 = 52.4 %**, sign p = 0.29. REFUTED. Yesterday's frozen run had 57 %.
- **P3 (pin pays in the priors)** — ratio of summed prior penalty 1.10 (1617 vs 1476). REFUTED. γ = 2 does push Υ_disk
  up (mean +0.091 dex vs +0.036 dex) and 11 vs 7 galaxies sit at the ±0.5 dex bound, but the prior cost is a small
  part of the χ² difference.
- **P4 (free fit moves)** — predicted γ̂_C ∈ [0.55, 1.2] on the strength of the 08-14 global-Υ sweep. Got **0.488**,
  bootstrap 95 % [0.338, 0.807]. REFUTED. Weighting alone (arm B) pulls γ̂ to 0.43; freeing the nuisances pulls it back
  to 0.49. The frozen 0.489 was accidentally central. The 08-14 sweep varied a *global* Υ, which slides every galaxy
  together; per-galaxy Υ under a 0.1 dex prior cannot do that.
- **P5 (retained interval)** — Δχ²/χ²_red ≤ 10 retains γ = 0.40–0.60; raw Δχ² ≤ 10 retains 0.45–0.50. HELD. This is
  the point-level statement and it is the one that does not survive the bootstrap.

### Where the excess lives, and why the sign test is a coin flip
Top of the excess (Δχ² of γ = 2 over free at the global optima): NGC 5055 +410, UGC 09133 +267, UGC 00128 +131,
UGC 02953 +118, NGC 5033 +95, UGC 06787 +95, NGC 5985 +94. Bottom: UGC 03580 −101, NGC 2403 −88, NGC 5371 −85,
F571-8 −48, NGC 6015 −45. The seven galaxies the maintainer found yesterday (UGC 11914, NGC 2841, …) are *not* the
same seven: with real errors the weight moves to the galaxies with many precise points, and those are split. The
top-10 weight galaxies (63 % of Σ(V/e_V)²) include both NGC 5055 and NGC 2403.

Per galaxy, profiling a₀′ *and* γ separately: the own-γ profile has its minimum at a grid edge (0.3 or 3.0) for 110 of
166 galaxies, and the profile range is < 4 (flat) for 79. Only 22 galaxies reject γ = 2 at their own a₀′ by more than
10, only 24 reject γ = 0.489, 8 reject both, 128 reject neither. So the pin is decided by ~30 galaxies, ~half on each
side. Dropping the seven largest-excess galaxies moves γ̂ to 1.05 and Δχ² to +66; dropping the two galaxies with
|Δχ²| > 200 moves γ̂ to 0.61. The population does not have one shape.

### Cross-check against Li+2018 (the published per-galaxy fits)
Li+2018 Table 2 (a₀ fixed at 1.2e-10, McGaugh ν, emcee, the same priors) gives χ²_ν per galaxy. Mine at the free-γ
optimum, same order: UGC 02953 5.66 vs Li 5.66; NGC 2403 14.6 vs 14.1; UGC 06787 21.4 vs 20.8; NGC 5055 8.9 vs 7.4;
UGC 09133 7.6 vs 6.9; NGC 5033 8.5 vs 8.0; NGC 0891 9.6 vs 7.4; NGC 5985 9.4 vs 7.0. Two disagree: UGC 00128 16.4 vs
6.3 and UGC 03580 7.7 vs 2.3, and both are galaxies where Li+2018's posterior sits 0.7–0.8 dex off the Υ prior
(Υ_disk = 2.49; Υ_bulge = 0.11), outside my registered ±0.5 dex box. Arm E widens the box to ±1.0 dex to see whether
that changes the pin (prediction: it lowers the raw Δχ² further, since both were excess galaxies). Li+2018's headline
("~10 % of fits are genuinely poor, mostly low-quality curves") matches the tail here: the median χ²_ν is 3.2 and only
34 % of galaxies have χ²_ν < 2, even with four nuisances free and a₀ fitted.

### What this does to TEST-25 (the Cassini squeeze)
The site's TEST-25 now says the in-house SPARC-retained interval is 0.3–1.7 at N_gal and "the compander passes Cassini
post-hoc at γ ≳ 1.5–2", with the defensible content being Desmond+2024's marginalized 8.7σ. Under the published nuisance
treatment (arm C) the galaxy-bootstrap z per γ is: 0.3: 1.1, 0.45: 0.1, 0.6: 0.3, 0.8: 1.0, 1.0: 1.3, 1.5: 1.8,
**2.0: 2.0**, 3.0: 2.1. Retained at z < 2 is 0.3–2.0; at z < 3 the whole grid. So the intersection of the galaxy-level
SPARC interval with the Cassini-passing region is *non-empty at 2σ* after marginalizing the nuisances the pipeline used
to hold fixed. That is a statement about the compander family only; Desmond+2024's 8.7σ is the tension between the
δ-family shape the RAR prefers (δ = 0.97 ± 0.04, ν_δ = [1 − e^{−y^{δ/2}}]^{−1/δ}) and the Cassini quadrupole
(predicted 29 × 10⁻²⁷ s⁻² vs measured 3 ± 3), with ~900 nuisances marginalized by NUTS and a fitted per-point σ_int.
Their ±0.04 is a pooled-point number over 2,696 points; the question this run raises is whether it, too, is ~5–7× too
narrow at the galaxy level. I cannot answer that from here (different family, different likelihood), but arm D is the
in-family analogue: if adding σ_int = 0.034 dex per point collapses the bootstrap/formal ratio to ~1, σ_int is doing
the galaxy-level work and Desmond's error bar stands; if the ratio stays ~5, the widening is structural and their
shape posterior should be reported with a galaxy-level interval before the 8.7σ is quoted as the defensible number.

**Arm D answers it: about half.** Adding σ_int = 0.034 dex per point in quadrature is exactly what brings χ²_red from
4.80 to 1.50 (Desmond+2024's calibration of the per-point scatter is reproduced in that sense). Under it:
Δχ²(γ = 2 vs free) = +154.5, galaxy-bootstrap sd 71.8, **z = 2.15** (registered band NEITHER → "disfavoured"); 56 %
of galaxies; γ̂ moves *up* to **0.617**, point-level 95 % [0.54, 0.71] (width 0.16), galaxy-level 95 % [0.43, 0.95]
(width 0.52), **ratio 3.2** (arm C: 7.6). The bootstrap sd of Δχ²(γ = 2) is 72 against the point-iid expectation
√(2Δχ²) = 17.6, a factor 4, i.e. N_eff ≈ N/17 ≈ 170 ≈ N_gal *after* σ_int. Retained at z < 2: γ = 0.3–1.5 (γ = 2 sits
at 2.1, γ = 3 at 2.5). Arm E (Υ box ±1.0 dex, so that UGC 00128 and UGC 03580 can reach Li+2018's posteriors; no
galaxy at a bound) changes nothing material: z = 2.32, γ̂ = 0.584 [0.42, 0.89]. So σ_int absorbs roughly half the
log-width of the galaxy-level widening and leaves N_eff at the galaxy count. The remainder is structural: galaxies
disagree about the shape by more than a 0.034 dex per-point scatter can express, because the disagreement is a
*curve-level* property (NGC 5055's 27 points all want a gentle transition; NGC 2403's 72 all want a sharp one).

What this means for the number the site defers to: Desmond+2024's 8.7σ is not a shape-width statement; it is the
Cassini quadrupole predicted from the RAR-preferred shape (29 × 10⁻²⁷ s⁻²) against the measurement (3 ± 3), and the
σ in "8.7σ" is Cassini's, not the RAR's. Widening their δ posterior by the in-family factor ~3 (±0.04 → ±0.12) would
move the predicted Q2 by well under its 26-unit excess, so the 8.7σ very likely survives galaxy-level scoring, and I
am not claiming otherwise. What does *not* survive is the site's in-house half of the squeeze as a 3σ statement:
under the published nuisance treatment, with σ_int, the compander's galaxy-level SPARC interval reaches γ = 1.5 at
z < 2 and γ = 2 at z = 2.1, and the Cassini-passing region starts at γ ≳ 1.5–2. The intersection is at the 2σ edge
in both directions: not robustly empty, not robustly populated.

One more thing arm D moved: the free fit is no longer "exactly MOND simple μ". With real errors, marginalized
nuisances and σ_int, γ̂ = 0.58–0.62 with galaxy-level 95 % [0.42, 0.95]: consistent with ½ but centred above it, and
McGaugh's ν beats the best compander by 11–13 raw χ² at χ²_red 1.5 (z ≈ 1 by the same bootstrap, i.e. nothing). Every
sentence on the site that says the free-γ compander "converges to γ = 0.489" or "is MOND simple μ to four digits" is
a frozen-Υ, unweighted-SSR statement and should say so.

### What the pin's status should be
Under the registered rule the pin is "not distinguishable under the published method" (z < 2). Yesterday's frozen
galaxy-level run said "disfavoured at the threshold" (1.6σ). Both are the same finding in two pipelines: the +184 was
never a property of the galaxy population; it was a property of treating 2,807 correlated points as independent. What
γ = 2 has *not* done is fit better: at every convention the free fit sits near ½ and γ = 2 costs χ². The honest
one-line status is "γ = 2 loses to γ ≈ ½ in χ² at every treatment, by an amount that is 1.6–1.9σ once galaxies are
the unit; 166 galaxies cannot decide the shape at 3σ because they disagree with each other about it."

## Implications for the Site

- **Root 2 of 5 needs dp's decision, with the published method now run.** The maintainer's "→ dp" question
  ("does the γ = 2 pin stay a root at ΔBIC ≈ 11 / 1.6–2.2σ?") now has the nuisance-marginalized answer: 1.9σ
  without σ_int, 2.2–2.3σ with it. The site should stop calling the pin "refuted" anywhere and carry "disfavoured,
  1.6–2.3σ galaxy-level under frozen and marginalized nuisances; not distinguishable at 3σ with 166 galaxies".
- **Every SPARC shape error bar on the site is a point-level number.** γ_SPARC = 0.489 ± 0.03 (naive), ± 0.11 (08-14
  galaxy bootstrap, frozen), and now [0.34, 0.81] (95 %, marginalized). The second topic seeded today
  (`does-any-sparc-family-verdict-survive-galaxy-level-scoring.md`) has its compander-family answer here: the γ
  interval survives as an *interval*, the kill of any specific γ ≤ 3 does not survive at 3σ.
- **TEST-25's "defensible content" sentence is one-sided.** It defers to Desmond+2024's 8.7σ because it marginalizes
  nuisances. This run marginalizes the same nuisances and still finds the galaxy-level interval 7× the point-level
  one. The sentence should say what the 8.7σ assumes (per-point independence with σ_int = 0.034 dex, δ-family) and
  that the in-family galaxy-level intersection with Cassini is non-empty at 2σ.
- **The "difference of two bad fits" pattern is worth one sentence on /galaxy-rotation.** NGC 5055 rejects γ = 2 at
  Δχ² = 410; NGC 2403 rejects γ = ½ at 88. Readers should know the pin is decided by ~30 galaxies split ~half/half,
  not by a population-wide shape term.

## Action: Maintainer
- /galaxy-rotation, +184 paragraph: append the arm-C sentence (marginalized nuisances, velocity errors: Δχ² +1114 raw,
  galaxy-bootstrap z = 1.9, 52 % of galaxies, γ̂ = 0.49 with 95 % [0.34, 0.81]); replace "Not done: refitting per-galaxy
  nuisances" with the script path.
- /tier-1-existing TEST-25 convention note: add "marginalizing Υ, D, i per galaxy (explorer 2026-09-29) does not
  narrow the galaxy-level interval: z < 2 retains γ = 0.3–2.0, which overlaps the Cassini-passing γ ≳ 1.5–2".
- /honest-assessment ledger row 3 (γ = 2 pin): convention column → "1.6σ (frozen) / 1.9σ (marginalized) galaxy-level".
- Ledger / PREDICTIONS.md: the 09-24 (iii) withdrawal now has the published-method leg; root recount still gates on dp.
- Rule (already proposed by the maintainer, now with a second data point): any SPARC ΔBIC or σ on the site carries a
  galaxy-block bootstrap interval; add "with nuisances marginalized or frozen" to the label.

## Open Threads
- **Does σ_int absorb the galaxy heterogeneity?** Arm D answers it in-family. If not, Desmond+2024's shape posterior is
  the next thing to re-score at galaxy level (their chains are not public; a δ-family refit with this machinery on the
  147-galaxy Lelli+2017 cut is a day's work and would be citable either way).
- **Why do NGC 2403 and UGC 03580 want a sharp transition?** Both are well-measured. If it is a bulge/Υ_bulge artefact
  (UGC 03580 sits at the Υ_b bound) arm E will say; NGC 2403 has no bulge. A per-galaxy (γ, a₀′) map for the ~30
  deciding galaxies against Hubble type, gas fraction and surface brightness is the obvious next figure, and it is the
  in-house version of Desmond+2024's bulgey-vs-bulge-free discrepancy.
- **The compander is one-parameter; the Cassini escape needs a second.** The researcher persona's question 4 (fit
  SPARC + Cassini jointly with a return exponent decoupled from 2γ) is now sharper: at galaxy level the one-parameter
  family already overlaps Cassini at 2σ, so the second parameter would be buying significance the data may not have.
- **Per-galaxy own-γ minima at the grid edge for 110/166 galaxies** is the unidentifiability memo (08-14, "flat
  valley") seen from the other side: for most galaxies γ and a₀′ trade off exactly. A galaxy-level Fisher matrix for
  (γ, a₀′) would put a number on how many SPARC-quality curves it takes to reach σ_γ = 0.05 at galaxy level.
