# Finding: With Υ free, MOND's δ-family escapes Cassini at a 1.8σ SPARC cost and near-SPS Υ. The compander's only escape needs Υ_d ≈ 1.2 (×2.4) and costs 2.9σ. "Inherited from MOND" describes δ = 1 only.

## Origin
Topic `cassini-both-families-upsilon-free-per-galaxy.md`, dispatched by the maintainer 11-07. PREREG commit `10d0bdf`, written before
running.

## Summary
I freed Υ_d (and Υ_b) per galaxy under a lognormal prior (0.5/0.7, w = 0.1 dex) and profiled a₀ jointly, then ran Cassini Q₂ on the
same QUMOND instrument. Under that prior, MOND's δ = 6 passes all three external-field values on the no-bulge sample (z = +1.48 / +0.48 / +0.18).
The compander's best is +10.03σ (γ = 3). The prior width is not a detail: at w = 0.2 dex, the compander reaches +7.1σ and MOND
δ = 4 passes too. So I inverted the question. What population mass-to-light scale does each family need in order to pass?
- **MOND δ = 6:** Υ_d ≈ 0.54. Its SPARC cost against δ = 1 (both re-profiled) is +128 point-level, **1.8σ at galaxy level**. This
  matches Desmond, Hees & Famaey 2024's 1.9σ, and is the first in-house reproduction of their mitigated number.
- **Compander γ = 3:** Υ_d ≈ 1.22, which is 2.4× the stellar-population value. At that scale 36 % of galaxies are over-maximal
  by more than 20 % (6 % at s = 1). The SPARC cost against γ = 0.489 (re-profiled) is +480 point-level, 2.9σ at galaxy level.
- **Compander γ = 2:** needs Υ_d ≈ 1.40.
- **γ ≤ 1 and MOND δ = 1:** no s ≤ 3 passes.

## Research Notes

### Registered run (`scripts/cassini_both_families_upsilon_free.py`, output `_output.txt`)
- Identity controls: C1 a₀ 1.12752e−10 (ref 1.12751e−10), PASS. C2 no-bulge δ = 6 pinned z@2.32 +3.02, PASS.
- Every quoted row converges: a₀ ×1.001 and order 192/768 move z by ≤ 0.02.

z at g_ext 2.00 / 2.32 / 2.48 ×10⁻¹⁰, no-bulge, a₀ profiled:

| family | pinned Υ | Υ free (w 0.1) | free a₀ |
|---|---|---|---|
| MOND δ=1 | +15.47 +18.26 +19.59 | +14.46 +16.88 +18.03 | 9.1381e-11 |
| MOND δ=4 | +7.74 +6.10 +5.29 | +3.85 +2.50 +1.94 | 1.2466e-10 |
| MOND δ=6 | +5.08 +3.02 +2.23 | +1.48 +0.48 +0.18 | 1.2534e-10 |
| tanh γ=0.489 | +14.77 +17.53 +18.86 | +13.92 +16.40 +17.60 | 4.4051e-11 |
| tanh γ=1 | +14.49 +16.36 +17.18 | +12.74 +14.13 +14.72 | 1.0440e-10 |
| tanh γ=2 | +13.49 +14.44 +14.75 | +10.98 +11.36 +11.41 | 2.2445e-10 |
| tanh γ=3 | +12.91 +13.44 +13.52 | +10.08 +10.03 +9.88 | 3.4499e-10 |

All galaxies, Υ free: MOND δ = 6 gives +2.50 / +1.14 / +0.69. This is a near-pass even with bulges in, because 2.50 exceeds 1.96 only at
g_ext = 2.00.

**Predictions: 2 of 5 held.**
- **P1 FAILED.** Υ-free a₀ at δ = 1 is 9.66e−11, −14 %. The Υ–a₀ degeneracy is larger than I guessed.
- **P2 FAILED.** δ = 6 passes. I predicted it would only approach.
- **P3 HELD**, at w = 0.1 only and by 0.03σ (min +10.03). It **fails** at w = 0.2 (+7.09) and at σ = 0.10 (+8.48). Do not cite P3
  as a robust result.
- **P4 FAILED.** In σ units, Υ freedom moves the compander *as much or more* (γ = 3: 3.41 vs δ = 6: 2.53). The asymmetry is in
  level, not in sensitivity.
- **P5 HELD.** The δ = 6 cost is +163.8.

### Sensitivity (post-hoc; `_w0.2_output.txt`, `_sig0.10_output.txt`, `_w0.05_output.txt`)

| arm (no-bulge) | MOND δ=6 z@2.32 | tanh γ=3 z@2.32 |
|---|---|---|
| w 0.05 | +1.76 | +12.10 |
| w 0.1 (registered) | +0.48 | +10.03 |
| w 0.2 | -0.34 | +7.09 |
| σ 0.10, w 0.1 | -0.05 | +8.48 |

What this shows:
- Both z's track how far the prior lets the population Υ rise. At w = 0.2 the median Υ_d is 0.648 and the free a₀ falls to
  1.05e−10 (MOND δ = 6).
- In this instrument, the Cassini z is mostly a statement about the population mass-to-light zero point, through a₀. Compare memory
  `compare-a-prediction-to-the-identified-combination`: there, a₀′ moved 3.6× across Υ.

### The inversion: Υ needed to pass (post-hoc; `scripts/cassini_z_vs_population_upsilon_posthoc.py`)
One population scale s (Υ_d = 0.5 s, Υ_b = 0.7 s), a₀ profiled at each s.

| member | s_pass (no-bulge) | s_pass (all) | SPARC's own best s (no-bulge) |
|---|---|---|---|
| MOND δ=1 | none ≤ 3 (z +5.99 at s=3) | none | 1.2 |
| MOND δ=4 | 1.352 | 1.450 | 1.4 |
| MOND δ=6 | 1.089 | 1.216 | 1.6 |
| tanh γ=0.489 | none ≤ 3 (+7.27) | none | 1.0 |
| tanh γ=1 | none ≤ 3 (+3.89) | none | 1.2 |
| tanh γ=2 | 2.799 | 2.702 | 1.4 |
| tanh γ=3 | 2.438 | 2.394 | 1.4 |

The MOND sharp members pass *below* the s that SPARC itself prefers for them. The compander passes only far above its own SPARC
optimum. The "own best s" column uses the coarse s grid. At s_pass on a 0.05 grid
(`scripts/cassini_pass_overmaximal_posthoc.py`):
- γ = 3: ΔSSR vs own minimum is +14.19 (N ln ratio +507.6). 25.5 % of points have g_bar > g_obs. 35.8 % of galaxies are
  over-maximal by more than 20 %.
- γ = 2: +24.69 (+805.9), 29.9 %, and 41.8 %.
- MOND δ = 6 at s_pass: +2.57 (+101.2), 2.5 %, and 7.5 %.

Over-maximal discs matter because both families have ν ≥ 1. A model in which g_bar exceeds g_obs over a galaxy cannot fit it.

### Galaxy-block bootstrap of each family's passing-configuration cost
Script `scripts/cassini_pass_config_cost_galaxy_boot_posthoc.py`; 2000 resamples of the 134 no-bulge galaxies; both sides
re-profiled per resample.

| passing config vs family reference | point | boot sd | point/sd | frac>0 |
|---|---|---|---|---|
| MOND δ=6 @ s 1.089 vs δ=1 (s, a₀ profiled) | +128.3 | 72.7 | 1.8 | 0.980 |
| tanh γ=3 @ s 2.438 vs γ=0.489 (s, a₀ profiled) | +479.5 | 165.6 | 2.9 | 1.000 |

The compander's 2.9σ excludes the stellar-population price: s = 2.44 is +0.39 dex in the population zero point. SPS 3.6 μm
zero-point uncertainties are of order 0.1 dex. That figure is recall and is not located in a source this session, so I give no σ
from it. The over-maximal fraction above is the self-contained version of the same point.

### Comparison with Desmond, Hees & Famaey 2024 (arXiv:2401.04796, HTML v2, partly fetched)
- Their abstract: Υ freedom relieves the tension "somewhat", and removing bulge galaxies relieves it "more significantly (to 1.9σ)".
- Their nuisances are richer than ours: D, i, Υ_gas, σ_int, and Υ widths 0.125/0.175.
- Our in-house MOND escape (no-bulge, δ = 6, Υ near SPS) lands at 1.8σ on a galaxy-level SPARC cost. This agrees with their
  number, although the instrument and the statistic differ.
- Their footnote: AQUAL "if anything" increases the tension relative to QUMOND. Our QUMOND numbers are therefore the lenient side
  for both families.

## Implications for the Site
- **TEST-25's "inherited from MOND" label holds for McGaugh's simple function (δ = 1 / γ = ½) only.**
  - With the literature's mitigations reproduced in-house, the MOND family has a Cassini escape at near-SPS Υ that costs about 1.8σ on SPARC.
  - The compander has no escape short of doubling every disc's mass-to-light ratio. That makes 36 % of discs over-maximal and costs
    2.9σ on SPARC besides.
  - The framework is strictly worse than the MOND family on the Solar System. "Inherited" undersells the row.
- **The count does not move.** TEST-25 stays in the rule-invariant floor, and the reason is now stronger. The range 4–8 stands.
- **Every Cassini σ in the ledger (14.5–19.3σ, 13.4σ) is a pinned-Υ number.** Υ freedom at w = 0.1 lowers the compander's by 3–4σ.
  The verdict survives, but the σ values should carry "(Υ pinned at 0.5/0.7)". At w = 0.1 the Υ-free floor is about 10σ.

## Action: Maintainer
1. **`src/lib/ledger.ts`, BY-KIND sentence and row #5.** Replace "1 is inherited from MOND (#5 TEST-25: Cassini excludes McGaugh's own
   function too)" with a sentence carrying the asymmetry and its numbers, for example: "#5 TEST-25 shares its root with McGaugh's
   simple function. The MOND family escapes at a sharper transition (δ = 6, no bulges, Υ near stellar-population values, about
   1.8σ on SPARC). The compander's only route needs Υ_d ≈ 1.2, more than twice the stellar-population value, and costs 2.9σ." Add a
   lint REQUIRES rule that keeps "1.8σ" next to "inherited".
2. **Pinned-Υ labels.** Every surface quoting 14.5–19.3σ or 13.4σ should add "(Υ pinned 0.5/0.7; about 10σ with Υ free per galaxy,
   w = 0.1 dex)". Grep the bare numbers 14.5, 19.3 and 13.4.
3. **Do not quote** "the compander stays above 10σ with Υ free". It held by 0.03σ at one prior width and fails at w = 0.2. The robust
   statement is the Υ_d needed to pass (≈ 1.2–1.4).

## Open Threads
- **Population-centre hyperprior.** Desmond's prior 2 frees the Υ centres with a 25 % width. Our s-scan is its limit with zero
  scatter. A full hierarchical run (s free, per-galaxy scatter w) would put the two families on Desmond's exact footing.
- **D and i nuisances** (memory `marginalizing-nuisances-does-not-fix-n-eff`). Could distance freedom mimic the Υ zero-point shift
  without the over-maximal-disc cost? D scales g_bar and g_obs differently (g ∝ V²/R with R ∝ D), so it is not degenerate with Υ.
  Worth one run for the compander.
- **AQUAL.** Desmond says AQUAL raises the tension. If it raises MOND δ = 6 above 2σ, the escape closes for both families and
  "inherited" becomes symmetric again. That makes AQUAL the cheapest remaining test that could flip this finding's headline.
- **Stellar-population prior.** Locate a sourced SPS 3.6 μm zero-point uncertainty (McGaugh & Schombert 2014; Meidt+2014;
  Schombert+2019) and convert s = 2.44 into σ.
