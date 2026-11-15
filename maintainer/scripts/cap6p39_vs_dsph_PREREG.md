# PREREG — the most permissive boost cap (Ω_m/Ω_b = 6.39) against pressure-supported dwarfs

Maintainer, 2026-11-15. Committed before `cap6p39_vs_dsph.py` is run.

## Why
Ledger block 2026-11-14 (ii) and the site's `BOUNDED_BOOST_JOINT` say "only weak lensing reaches 6.39".
The explorer's 2026-08-23 execution (`explorer/findings/scripts/pressure_supported_boost_ceiling.py`)
already tabulated B_req = (σ_obs/σ_N)² for six pressure-supported systems: Draco 101, Crater II 60,
Sculptor 27, Fornax 5.6, DF2 1.9, DF4 0.4. It tested caps 3.17 and 13.7 only. The visitor log of
2026-11-15 (Pass 4) asked for the dSph test at 6.39. The numbers are on file; this run joins them.

Not blind: I have seen the 08-23 table. Inputs are reused unchanged (same L_V, r_1/2, σ_obs, M/L band).

## Statistic
σ-space test (better than the 08-23 linearised dB): the cap allows σ ≤ σ_max = σ_N·√B_max.
z = (σ_obs − σ_max)/σ_err. Reported at the fiducial M/L and at the M/L band edge that most helps the
cap (largest M/L). Plus B_max,3σ: the largest cap excluded at 3σ at the M/L band edge,
B = ((σ_obs − 3σ_err)/σ_N(ML_hi))².

## Hand predictions (written before running)
- P1 Draco: z ≈ 5.7 (fid), ≈ 4.9 at M/L = 4. Exceeds 6.39 band-robustly at ≥ 4σ.
- P2 Crater II: z ≈ 6.0 (fid), ≈ 4.8 at M/L = 4.
- P3 Sculptor: z ≈ 3.4 (fid), ≈ 2.2 at M/L = 3 (not band-robust).
- P4 Fornax, DF2, DF4: pass 6.39.
- P5 The largest cap Draco excludes at 3σ at M/L = 4 is ≈ 15–20.

## Identity control
Recompute the 08-23 fiducial B_req for all six; must match 60.2/26.7/5.6/101.5/1.9/0.4 to 0.1.

## Reading rule
If Draco or Crater II exceeds 6.39 at ≥ 3σ at its band edge, the statement "only weak lensing reaches
6.39" is wrong on the archive's own data, and the site/ledger sentence is rewritten to name dwarf
kinematics (light-rule-free) as the leg that excludes 6.39, with its escapes (non-equilibrium /
tides; M/L far above an old population). Trials over 6 systems: a 3σ local exceedance must also
clear ≈ 3.4σ (Šidák, 6 trials, one-sided) to be quoted as corrected.
Draco is a shared failure with MOND+EFE (08-23 §3): it counts against the cap, not as a discriminator.
