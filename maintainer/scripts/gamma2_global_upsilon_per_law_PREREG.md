# PREREG: the γ = 2 pin when each law gets its own global Υ_disk

**Date:** 2026-11-09 (site maintainer). Committed before the script exists.

## Why
A simulated-visitor graduate persona (2026-11-09) reports, from a coarse fit on a Zenodo copy of the SPARC table:
- +184 and +10.9 both hold Υ_disk = 0.5 for both laws. With one global Υ per law (γ = 2 best at 0.60, RAR at 0.55) they get about +47 at point level and about +2.8 under N → N_gal.
- At pinned γ = ½ the scale a₀ moves 1.44 → 1.10 → 0.875 across Υ = 0.4 / 0.5 / 0.6, so closing cH₀/2π needs H₀ ≈ 93 / 71 / 57. The site's "a₀′/γ stays at 1.07–1.09" holds only with γ floating 0.27 → 0.97.

The 2026-10-04 ledger block says "the scale is identified; the degeneracy is Υ ↔ γ". If the persona is right, "identified" is conditional on γ being free, and the reading the site calls surviving (γ ≈ ½) has a ±20 % scale.

The registered B2 text says "marginalized BIC fit". So frozen Υ is not the registered statistic. The per-galaxy nuisance run (explorer, 09-29) gave z ≈ 1.9–2.3σ, but the site's headlines print the frozen-Υ numbers.

## Pipeline
Frozen 2026-07-22 pipeline, as in `gamma2_pin_galaxy_level.py`: same data file (`MassModels_Lelli2016c.mrt`), err cut 0.10, log-space SSR, a₀ profiled.
- Υ_bul = 1.4 Υ_disk, which reproduces the frozen 0.5 / 0.7.
- Rows are fixed: those with V_bar² > 0 at every Υ in the grid. Report the row count. If that differs from 2,807, also report the identity on the original rows.
- Υ_disk grid 0.30–0.90, step 0.01. a₀ on a fine log grid, with galaxy-level SSR tables so the bootstrap can refit Υ and a₀ per law in every resample.
- ΔBIC = N ln(RSS₂/RSS_McG). Both laws spend one a₀ and one Υ, so Δk = 0 and the comparator is unchanged from the +184.

## Identity control (stop if it fails)
C1. At Υ = 0.5 for both laws on the original rows: +184.0, rms 0.1485 / 0.1437, a₀′ = 2.967×10⁻¹⁰, a₀ McG = 1.128×10⁻¹⁰.
C2. Free γ at Υ = 0.5: γ̂ = 0.489 within the grid step.

## Predictions (written before running)
P1. Each law's best global Υ: γ = 2 in 0.57–0.63, McGaugh in 0.52–0.58.
P2. Point-level ΔBIC with own Υ per law: +35 to +60.
P3. N → N_gal form: +1.5 to +4.
P4. Galaxy-block bootstrap with Υ and a₀ refit per law per resample: median +30 to +80, and the 95 % lower edge ≤ 0, i.e. the sign of the preference is not secure at galaxy level.
P5. Pinned γ = ½: a₀ (μ_simple, Milgrom-equivalent a₀′/γ) at Υ = 0.4 / 0.5 / 0.6 is 1.44 / 1.10 / 0.875 ×10⁻¹⁰ within ±3 %, and H₀ needed for cH₀/2π is 93 / 71 / 57 within ±3.
P6. Free γ: a₀′/γ stays within 1.04–1.10 across Υ = 0.4–0.7 while γ̂ runs ~0.27 → ~2.1.

## Reading rule (fixed now)
- **R1.** If P4's lower edge ≤ 0 and the N_gal form < 6 (BIC's "positive" threshold): "γ = 2 refuted at +184 / +10.9" is a frozen-Υ statement. The site must print the own-Υ row beside every headline. Recommend to the project lead that row #3 be read as "disfavoured, not refuted" under a Υ-free rule. **The count does not change in this session.** The range already carries −1 for this row.
- **R2.** If P4's lower edge > 10 and the N_gal form ≥ 10: the persona's reading is refuted and the +184 headline stands; record the run.
- **R3.** Otherwise: convention-dependent, as already on file. Print the number and do not change wording beyond the comparator.
- **H₀ closure.** If P5 holds, the site's "H₀ ≈ 69–70.5" and "a₀′/γ stays at 1.07–1.09" must state that γ floats, and print the pinned row beside them.

## Not covered
- Per-galaxy Υ, D and i (explorer 09-29 covers those).
- Any change to what γ = 2 vs McGaugh means: every γ is a MOND μ, so this compares μ-functions and does not test a rival to MOND.
- Solar-system consequences of Υ = 0.6 are not computed here.
