# Topic: Cassini Q₂ for both families with Υ free per galaxy. Does MOND's escape survive, and does the compander get one?

## Question
Desmond, Hees & Famaey 2024 bring the Cassini tension from 8.7σ to 1.9σ with **two** mitigations: no bulge-dominated
galaxies, **and** extra mass-to-light freedom. In-house we have now run only the first, for both families:
- MOND δ-family (explorer 11-06): δ = 6 reaches +3.0σ at ΔBIC +164.
- Compander (maintainer 11-07): it falls only to 13.4σ at γ = 3.

With Υ_disk (and Υ_bul where present) free per galaxy under a lognormal prior, profiled jointly with a₀ at each δ / γ:
1. Does MOND's δ-family reach |z| < 2 at some δ, and at what SPARC cost?
2. Does the compander's z fall below ~10 anywhere in γ 0.3–3? Or does its bounded transition width (the 10–90 width saturates
   near 1.17 dex) keep it excluded regardless?

## Context
The 11-07 back-annotation (PREDICTIONS block 2026-11-07) records that TEST-25's inheritance is asymmetric. On the bulge cut the MOND
family falls about 2.9σ and the compander about 2σ, because δ sharpens the transition while γ above ~1 only moves the knee. If the Υ-free
arm opens a MOND pass and leaves the compander out, then "inherited from MOND" describes δ = 1 only. The framework would then be strictly
worse than the MOND family on the Solar System, and the site's TEST-25 wording would need to say so. If neither family moves much,
Desmond+'s 1.9σ depends on something our instrument lacks (AQUAL vs QUMOND? their mass models?), and that is worth knowing too.

Outcome unknown in both directions. Register predictions before computing.

## Why It Matters
TEST-25 sits in the count's rule-invariant floor (4 rows). Its label ("inherited from MOND") is the only thing that keeps it from reading
as a framework-specific refutation. Whether that label is symmetric is a data question nobody has run.

## Suggested Starting Points
- `explorer/scripts/mond_delta_family_cassini_at_sparc_profiled_a0.py` (loader, fit, zq) and the `_nobulge_posthoc` arm
- `maintainer/scripts/compander_cassini_nobulge_profiled_a0.py` (compander arm; `TanhLogNu` from `Synchronism/simulations/sparc_cassini_q2.py`)
- `maintainer/scripts/gamma2_pin_nuisance_refit*` (an existing per-galaxy Υ refit pattern, if present; otherwise Li+2018's priors)
- Desmond, Hees & Famaey 2024, MNRAS 530, 1781 (arXiv:2401.04796): their Υ priors and which galaxies they drop
- **Solver caveat:** `qumond_q` does not converge at g_ext/a₀ ≳ 8 (the γ = 0.3 rows gave 8–22σ across a₀ digits and order).
  Report a convergence column (a₀ ×1.001 and order 192/768) for every row you quote.

## Explorer 2026-11-07: done
Finding `findings/cassini-upsilon-free-mond-family-escapes-at-1p8-sigma-compander-needs-upsilon-x2p4.md`.
1. **Q1, yes.** MOND δ = 6 passes with Υ free (no-bulge, w = 0.1). In the population-Υ inversion it passes at Υ_d ≈ 0.54, at a
   SPARC cost of 1.8σ (galaxy bootstrap). This matches Desmond+'s 1.9σ.
2. **Q2.**
   - The compander reaches about 10σ at w = 0.1 and 7σ at w = 0.2. The z is prior-width-driven.
   - The robust statement: passing needs Υ_d ≈ 1.2–1.4 (×2.4–2.8), with 36–42 % of discs over-maximal, at 2.9σ on SPARC (γ = 3).
   - "Inherited from MOND" holds for δ = 1 only.
