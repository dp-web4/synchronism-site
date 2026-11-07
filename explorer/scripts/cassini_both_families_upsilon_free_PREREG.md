# PREREG: Cassini Q₂ for both families with Υ free per galaxy (explorer 2026-11-07)

Written and committed **before** computing. Topic: `topics/cassini-both-families-upsilon-free-per-galaxy.md`.

## Instrument
- SPARC points: the same loader and cuts as `mond_delta_family_cassini_at_sparc_profiled_a0.py` (eV/V ≤ 0.10, and g_bar > 0 at
  Υ 0.5/0.7). The point set is held fixed, so changing Υ cannot change which points enter.
- g_bar,i(Υ_d, Υ_b) = (Vg|Vg| + Υ_d Vd|Vd| + Υ_b Vb|Vb|)/R.
- Objective: −2 ln L = Σ_points r²/σ² + Σ_gal [(log Υ_d − log 0.5)²/w² + (log Υ_b − log 0.7)²/w²], with
  r = log10 g_obs − log10[g_bar ν(g_bar/a₀)]. The Υ_b term applies only to galaxies with a bulge.
  - σ = 0.144 dex, fixed: the rms of the Υ-fixed δ = 1 fit (√(57.96/2807)).
  - w = 0.1 dex (Li+2018 RAR-fit priors).
- a₀ is profiled: outer 1-D bound minimisation; inner per-galaxy minimisation over (log Υ_d, log Υ_b).
- Families:
  - MOND δ ∈ {1, 2, 4, 6}, ν_δ(y) = (1 − e^{−y^{δ/2}})^{−1/δ}.
  - Compander γ ∈ {0.489, 1, 2, 3} (`TanhLogNu`).
- Arms: all galaxies, and no-bulge (the 32 galaxies with any Vbul > 0 dropped).
- Q₂: `qumond_q` at 128/512 → z at g_ext ∈ {2.00, 2.32, 2.48}e−10. Every quoted row carries a convergence check (a₀ ×1.001 and
  order 192/768 at g_ext = 2.32).
- Cost: Δ(−2 ln L) against δ = 1 (MOND) or γ = 0.489 (compander) in the same arm, at the same σ. It is point-level and σ-dependent, so
  it is not a galaxy-level significance (N_eff ≈ N_gal; see memory `point-count-dbic-needs-a-galaxy-block-bootstrap`).

## Identity controls
- C1: with w → 0 (Υ pinned at 0.5/0.7), the δ = 1 all-galaxy fit reproduces a₀ = 1.1275e−10.
- C2: under the same pinning, the no-bulge δ = 6 fit reproduces z@2.32 = +3.02 (±0.05).

## Predictions
- P1. MOND, Υ-free, all galaxies: profiled a₀ at δ = 1 lies within ±10 % of 1.128e−10.
- P2. MOND, Υ-free, no-bulge: **no** δ ≤ 6 passes (|z| < 1.96 at all three g_ext), but z@2.32 at δ = 6 is below the Υ-pinned
  +3.02. Expected direction: Υ freedom helps sharp transitions a little.
- P3. Compander, Υ-free, no-bulge: min z@2.32 over γ ∈ {0.489 … 3} stays > 10.
- P4. Asymmetry persists: |Δz| from Υ freedom (no-bulge arm, pinned → free) at δ = 6 exceeds |Δz| at γ = 3.
- P5. MOND no-bulge, Υ-free: the SPARC cost of δ = 6 against δ = 1 is > +50 in Δ(−2 ln L).

## What each outcome means
- **P2 fails because δ ≤ 6 passes.** "Inherited from MOND" holds only for δ = 1. The MOND family has a Solar-System escape with
  Desmond+'s mitigations reproduced in-house.
  - If P3 also holds, the compander has no such escape, and TEST-25's label must say the compander is strictly worse than the
    MOND family.
- **P3 fails.** Υ freedom rescues the compander too, and the 11-06 range change (3–8 → 4–8) is configuration-dependent.
- **Neither family moves by more than about 1σ.** Desmond+'s 1.9σ depends on something this instrument lacks: AQUAL vs QUMOND, the
  likelihood, or their mass models.
