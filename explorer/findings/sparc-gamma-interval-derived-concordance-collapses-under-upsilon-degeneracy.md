# Finding: γ_SPARC finally gets its error bar — 0.49 ± 0.11 (stat), with an ϒ-systematic band [0.27, 0.96] — and the celebrated cross-sector concordance collapses from "0.1σ pass" to a property of the mass-to-light convention

**Date**: 2026-08-14
**Track**: Explorer
**Origin**: self-directed — the declared open thread of the 2026-08-12 finding
(`gamma-family-direct-fit-desi-dr2-substituted-is-lcdm-covariant-excluded.md`):
"the SPARC-side σ(γ) has never been quoted on the site — the galaxy 0.489 needs an
interval before the concordance can be priced properly."
**Script**: `scripts/sparc_gamma_interval_frozen_likelihood.py`
(+ output `.txt`, `.json`, bootstrap distribution `.npy`)
**Status of the count**: UNCHANGED at 6. Nothing here is a registered-test kill; it is
the missing uncertainty analysis for a number the site already quotes.

## Summary

The site's galaxy-sector γ = 0.489 — one leg of the "first executed cross-sector
consistency test, PASS at 0.1σ" (γ_cosmo = 0.487 ± 0.02) — has never carried an
uncertainty. Deriving it on the frozen SPARC likelihood (the exact objective that
produced 0.489) gives a three-rung ladder, each rung worse than the last:

1. **Naive** (2807 points treated as independent): σ = 0.029. Even this
   indefensible floor makes the offset from γ = 1/2 — the point where the family is
   *exactly* MOND simple-μ and *exactly* ΛCDM — a 0.36σ statement.
2. **Galaxy-level statistics** (three concordant estimators: jackknife 0.103,
   galaxy bootstrap 0.113, √(N/N_gal) scaling 0.121): **σ ≈ 0.11**.
   P(γ̂* ≥ 1/2) = 0.49 — the SPARC data is *exactly indifferent* about which side of
   the double-standard-model point the galaxy sector sits on. Dropping a single
   galaxy (UGC11914, UGC03580, or NGC5985) moves γ̂ by ±0.03–0.04 — each ~3× the
   entire quoted offset |0.489 − 0.5| = 0.011.
3. **Mass-to-light systematic**: refitting the whole chain at global
   ϒ_disk ∈ {0.4, 0.5, 0.55, 0.6} (the literature's own uncertainty band for 3.6 µm
   population synthesis) sweeps **γ̂ across [0.27, 0.96] at essentially constant rms**
   (0.1433–0.1458 dex). The likelihood's own mild preference is ϒ_disk = 0.55, where
   γ̂ = 0.68 — it fits *better* than the ϒ = 0.5 convention that produced 0.489
   (Δχ²_naive = −14.7). The half-width of this band (±0.35) is 3× the statistical σ
   and 32× the quoted offset from 1/2, and **does not shrink with sample size**.

## The three verdicts

**V1 — The concordance is unpriceable as stated, and convention-dependent at its
core.** Re-priced with both error bars: |0.487 − 0.489| = 0.002 against combined
σ = 0.115 → **0.02σ** — 51× short of the power needed to separate the two fits at
even 1σ. Worse than mere lack of power: the galaxy central value is an artifact of
the ϒ_disk = 0.5 convention. At the likelihood's own preferred ϒ = 0.55 the
"concordance" reads 0.68 vs 0.487 — a 1.7σ_boot *tension* — with *lower* χ². The
0.1σ agreement celebrated on 08-12 is a property of the mass-to-light convention,
not of the universe. The 08-12 deflationary reading ("the test had no power to
fail") was itself an *under*-deflation: the test also had no stable observable on
the galaxy side.

**V2 — "0.489" carries three significant digits of noise.** The honest galaxy-sector
statement is γ_SPARC = 0.5 ± 0.1 (stat) with a factor-of-2 systematic anchor
uncertainty. Every appearance of "0.489" on the site (as a preference over 0.5, as
the "MOND return exponent q = 0.98", as the concordance leg) is quoting
sub-single-galaxy noise. This is the marginalisation guardrail's first
**over-affirmation** catch — five prior instances were over-refutations; the same
unpropagated-nuisance mechanism here manufactured a *pass*.

**V3 — The σ_γ ≈ 0.004 target is permanently unreachable on this observable.**
Statistics alone would need ~166 × (0.113/0.004)² ≈ 130,000 SPARC-quality galaxies
(SKA-era conceivable). But the ϒ systematic doesn't average down: holding the
γ-anchor to ±0.004 requires knowing the global ϒ_disk to ±0.0007 — ~70× beyond
current stellar population synthesis. TEST-12-class discrimination (γ = 1/2 vs the
free fit) is closed a priori on rotation-curve data: not "needs more data" but
"no amount of this data".

**One correction cuts toward the framework.** The memory-flagged "profiled a₀ =
5.33×10⁻¹¹, factor 1.96 below the derived cH₀/2π" tension dissolves inside the same
degeneracy: at ϒ_disk = 0.6 the profiled a₀ is 1.043×10⁻¹⁰ — exactly the derived
value (with γ̂ = 0.96 and indistinguishable rms). The a₀ discrepancy was never a
tension; it was the ϒ convention wearing a different symbol. The γ–a₀–ϒ triple runs
along one flat valley: *the galaxy sector's fitted shape parameter is unidentified
at the factor-2 level, and everything downstream of "SPARC prefers γ = 0.489"
inherits that.*

## Method (estimator declaration, per the robustness rule)

- **Likelihood**: the frozen artifact exactly — unweighted Σ(log₁₀ g_obs −
  log₁₀ g_model)², 2807 rows (ERROR_CUT 10%, ϒ_disk = 0.5/ϒ_bulge = 0.7 baseline),
  a₀ profiled per fit, model g_bar = g_obs·tanh(γ ln(1+g_obs/a₀)) inverted
  numerically. Reproduces the site's 0.489 to the grid's precision
  (continuous minimum 0.4892) and rms 0.1437 dex.
- **Primary estimator**: nonparametric bootstrap resampling the 166 galaxies with
  replacement (B = 400, seed 20260814, γ bounds [0.15, 1.60] — 34/400 replicas
  exceeded the initially narrower bounds; widening raised σ from 0.092 to 0.113,
  68% interval unchanged).
- **Named alternatives**: leave-one-galaxy-out jackknife (0.103); √(N/N_gal)
  inflation of the naive width (0.121). All three within 20% of each other.
- **Nuisances**: a₀ PROFILED. ϒ_disk/ϒ_bulge, distances, inclinations FIXED
  (frozen artifact's choice) — the ϒ sweep prices the first of these; per-galaxy
  ϒ scatter is partially absorbed by the galaxy bootstrap; distance/inclination
  scatter is not separately propagated (it is inside the empirical galaxy-to-galaxy
  spread the bootstrap resamples).

## Honest bounds of this execution

- ϒ_bulge tied to 1.4×ϒ_disk (preserving the frozen 0.5/0.7 ratio); independent
  bulge variation untested (bulge terms are subdominant in most selected rows).
- Global ϒ shifts only; the full hierarchical treatment (per-galaxy ϒ, distance,
  inclination as nuisance parameters with priors — the Li et al. 2018 RAR
  methodology) is the natural next rung and would plausibly widen the band further.
- Acceleration-keyed throughout: this is the site's substituted g_bar model (the
  standing banner caveat), not the masthead ρ-equation. The interval derived here
  attaches to the number the site actually quotes.
- The frozen objective has no per-point errors; the bootstrap inherits whatever
  heteroscedasticity the objective ignores.

## Implications for the Site

1. **The γ-concordance content queued for publication (08-12 maintainer item 4) must
   absorb this before it ships.** Publishing "0.487 vs 0.489, 0.1σ" with only the
   cosmology-side error bar would inscribe exactly the class of statistical façade
   the site has spent six weeks retracting. The publishable statement is:
   *both sectors are consistent with γ = 1/2 — cosmology at ±0.02, galaxies at
   ±0.11 (stat) with a [0.27, 0.96] anchor band — and the two fits cannot
   disagree with each other at any achievable precision.*
2. `/honest-assessment` "converges to γ ≈ 0.489, identical to MOND" and every other
   three-decimal appearance of 0.489 needs the interval (±0.11) or a rounding to
   "≈ 0.5".
3. The "q = 2γ ≈ 0.98 ⇒ simple-μ" identification (07-22 arc) is a statement about
   the ϒ = 0.5 slice only; under the ϒ band, q spans [0.5, 1.9] — the return
   exponent is likewise unidentified.
4. The a₀ profiled-vs-derived "factor 1.96" (quoted in the site's a₀ discussion)
   should be reclassified from "tension" to "ϒ-degenerate; unconstraining".

## Action: Maintainer

1. `/dark-energy` (or wherever the 08-12 γ-concordance lands): publish the
   concordance ONLY with both intervals and the convention-dependence sentence
   (V1 above). The sharpest honest line: "the galaxy-side γ has a factor-2
   systematic anchor uncertainty; the concordance test cannot fail at any
   achievable precision, and its central values move with the mass-to-light
   convention."
2. `/honest-assessment` + `/coherence-function` + `/mond-unification`: attach
   "± 0.11 (stat); [0.27, 0.96] under the ϒ band" at every appearance of 0.489,
   or round to 0.5.
3. The a₀ factor-2 discussion: add the ϒ-degeneracy dissolution (this softens a
   standing criticism — cuts toward the framework; cite this script).
4. TEST-12 (if/when registered): the registration must state the a-priori closure
   (V3) — on rotation curves the discriminating precision is unreachable in
   principle, not just currently.

## Open Threads

- Hierarchical refit (per-galaxy ϒ with 0.1 dex lognormal prior, à la Li et al.
  2018): does the marginalised γ interval stay ~0.1, or blow past it? This is the
  defensible next rung and would make the interval citable externally.
- The DESI-side fit fixed its own nuisances (massless neutrinos, compressed CMB);
  a joint (γ, ϒ)-honest concordance would need both sides re-run — only worth it
  if the hierarchical galaxy fit surprises.
- The ϒ = 0.55 preference (Δχ²_naive = −14.7) is itself galaxy-scaled ~0.9σ — not
  evidence for higher ϒ, but worth noting that McGaugh's RAR-scatter-minimising
  ϒ ≈ 0.5 and this likelihood's preference disagree at sub-σ level.
- Does the [0.27, 0.96] γ band interact with the sectors that *consume* γ
  (chemistry γ-assignment fork, consciousness C≈0.5 claims)? Anything downstream
  that "requires γ ≈ 0.5 from galaxies" now has factor-2 slack on its input.
