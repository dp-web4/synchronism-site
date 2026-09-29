# PREREG — Does the γ = 2 pin survive without an N_eff convention? (maintainer 2026-09-29)

Written and committed BEFORE `gamma2_pin_galaxy_level.py` exists. The committed copy is authoritative.

## Why
Visitor graduate-physics persona 2026-09-28 (Pass 3, high): the site scores the γ = 2 kill (ΔBIC = +184 vs McGaugh ν on 2,807 SPARC RAR points) under two different effective-N conventions. /galaxy-rotation divides by ~5.6× (N_eff ≈ 500, "ΔBIC ≈ 33, still decisive"); /core-idea divides the +2843 density-vs-acceleration number by ~20× (N_eff ≈ 140). Applied to the +184, the 20× convention gives ≈ 9, below the site's own ΔBIC > 10 rule. PREDICTIONS.md (2026-09-24 block iii) says "the +184 and +2843 verdicts survive any of the three conventions". At 20× the +184 does not (184/20 = 9.2; the two models have equal parameter counts so no penalty helps). One of the five refutation roots therefore depends on an N_eff that nobody has estimated from data.

The fix is not to pick a factor. It is to use the galaxy as the replication unit, which needs no N_eff.

## Data and pipeline (frozen)
- `Synchronism/simulations/sparc_real_data/MassModels_Lelli2016c.mrt`, the 2026-07-22 row cut (e_Vobs/Vobs ≤ 0.10, Υ_disk = 0.5, Υ_bulge = 0.7, V_bar² > 0), reproduced from `Synchronism/simulations/sparc_tanhlog_profile.py`, but with the galaxy name kept per row.
- Models: implicit tanh-log compander g_bar = g_obs·tanh(γ ln(1 + g_obs/a₀′)) at γ = 2 (pinned) and γ free; McGaugh ν as the reference. a₀′ profiled (1-D bounded minimisation in log a₀ over [−11, −9]) in every arm, on the training set for CV.
- Statistic: log-space SSR, Σ[log10 g_obs − log10 g_pred]², the frozen artifact's choice.

## Identity controls (must reproduce before any new number is read)
- C1: γ = 2 vs McGaugh on all points: ΔBIC = N·ln(SSR_2/SSR_McG) = +184 ± 2.
- C2: free-γ optimum γ̂ = 0.489 ± 0.005, ΔBIC vs McGaugh = +7.1 ± 0.5 (with the ln N penalty).
If either fails the run stops and the script is wrong, not the site.

## Registered predictions (verdict rules fixed now)
- P1 (sign test). Per-galaxy paired difference Δ_i = SSR_i(γ=2, global â₀) − SSR_i(γ̂, global â₀). Prediction: γ = 2 is worse in more than 65 % of galaxies, one-sided sign-test p < 0.001. Rule: HELD if both; REFUTED if the fraction < 55 % or p > 0.01.
- P2 (galaxy-level 10-fold CV, the 2026-08-20 method). Fold by galaxy, seed 20260929, 10 folds. Held-out per-point log-likelihood (Gaussian in log10 g, σ from the training residual) for M_pin (γ = 2, a₀ fit on train) vs M_free (γ, a₀ fit on train). Paired over galaxies: mean held-out ΔlnL per point and its galaxy-level standard error. Prediction: M_free beats M_pin by more than 3σ. Rule: HELD if > 3σ; REFUTED if < 2σ.
- P3 (the convention itself). ΔBIC(γ=2 vs McGaugh) recomputed with N replaced by the galaxy count N_gal in the cut: prediction 7–12 (i.e. the 20× convention lands at or below the ΔBIC > 10 threshold). Rule: HELD if in [5, 15]. This is the point of the test: under the most conservative convention the number is marginal, which is why the paired statistics, not the ΔBIC, should carry the verdict.
- P4 (galaxy-block bootstrap of the full-N Δχ²). Resample galaxies with replacement 2,000 times; recompute N·ln(SSR_2/SSR_McG) with a₀ re-profiled per resample. Prediction: 95 % interval lower bound > 50 (the kill is not a few-galaxy artefact). Rule: HELD if lower bound > 30; REFUTED if the interval includes 10.
- P5 (where the signal lives). The fraction of the total Δ = Σ Δ_i carried by galaxies whose median g_bar/a₀ is below 1 (the transition and deep regime) exceeds 70 %. Rule: HELD if > 60 %.

## Verdict rule for the site
The γ = 2 pin stays "refuted, convention-free" iff P1 and P2 both HELD. If either is REFUTED, /galaxy-rotation, /core-idea, /dark-matter-failure and the footer's "5 roots" must say the pin's refutation is N_eff-dependent, and the ledger's 2026-09-24 sentence "survives any of the three conventions" must be withdrawn either way (P3 tests it directly).

## Not done here (say so on the site)
Per-galaxy nuisance refits (Υ, distance, inclination) under each law with covariance, which is the visitor's preferred fix. This run holds Υ fixed exactly as the frozen artifact did.
