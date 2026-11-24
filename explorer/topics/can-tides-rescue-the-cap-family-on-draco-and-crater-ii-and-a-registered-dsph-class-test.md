# Topic: Can tides rescue the cap family on Draco and Crater II? A registered dSph class test

## Question
The maintainer joined the explorer's 2026-08-23 dSph table at the most permissive cap, Ω_m/Ω_b = 6.39
(`maintainer/scripts/cap6p39_vs_dsph.py`, PREREG `c7d729c`). Draco and Crater II exceed it at 4.9σ each at M/L = 4.
The only escape is non-equilibrium, with the measured σ inflated by tides by ≥ 1.3×. Is that escape physically available
for either system? Can a pre-registered class test on a full dSph compilation replace a two-system argument?

## Context
- Visitor 2026-11-15 Pass 4 (`high`) asked why the light-rule-free dSph test had not been run at 6.39. It had been tabulated
  but never joined. The ledger said "only weak lensing reaches 6.39" (corrected in PREDICTIONS 2026-11-15 (i)).
- The inputs are six hand-entered rows (L_V, r_1/2, σ, M/L band) from the 08-23 session, not re-read against catalogues.

## Why It Matters
- If the tidal escape is closed, the bounded-boost family is excluded up to B_max ≈ 15 by matter dynamics alone. The
  proposal to dp is to retire the family as a class.
- If tides can inflate σ by 1.3×, the exclusion becomes a statement about non-equilibrium priors. Then the class needs
  isolated dwarfs.
- Notes on the escape:
  - In CDM, tidal stripping of Crater II is usually invoked to *lower* its σ (Fattahi+2018; Sanders+2018). If that holds,
    the escape runs the wrong way. Check this; do not assume it.
  - Draco is usually called the most equilibrium-safe classical dSph.

## Suggested Starting Points
- **Re-enter the six rows from the sources**, then run the identity control:
  - McConnachie 2012 (L_V, r_h) and Wolf+2010 (r_1/2);
  - Walker+2009 for σ (Draco, Sculptor, Fornax);
  - Caldwell+2017 for Crater II.
- **Extend to a full compilation** (classical plus the better-measured ultra-faints, with binary-corrected σ where available).
  - Use an M/L band per system and a trials correction.
  - Pre-register the reading: the largest cap excluded at 3σ, band edge, after trials.
- **Isolated dwarfs** (Cetus, Tucana; Leo T has gas, so add it to M_bar) are the non-equilibrium-safe subset.
- Tidal literature: Fattahi+2018 and Sanders+2018 on Crater II; Read+2018 or Errani+2022 on tidal tracks (σ vs r_h under
  stripping).
- Memory rules that apply: "a control on a subsample is a control on the subsample"; "weight a conditional by its prior"
  (an M/L of 8–12 for an old metal-poor population needs its own prior).

## Addendum (maintainer 2026-11-19): the estimator was 4/3 too strong
`explorer/findings/scripts/pressure_supported_boost_ceiling.py` labels its estimator "Wolf+2010: M_1/2 = 4σ²r_1/2/G" but feeds
the 3D half-light radius; Wolf's 4 goes with the projected R_e (3 with r_3D). Re-read in
`maintainer/scripts/cap6p39_vs_dsph_estimator.py`: under Wolf, Draco/Crater II exceed 6.39 at 4.5σ/4.2σ at M/L = 4 (cap family
excluded to ≈ 11, not 14.7), and the tidal inflation needed to escape is only 1.31× (Draco) / **1.15× (Crater II)**; under Walker+2009,
Crater II is out (2.9σ). Please (1) fix the coefficient in your script and re-run the 08-23 table, including the 1/Ω_b = 20.3 row;
(2) for Crater II, check published tidal-stripping models (it is a known tidally disturbed system; e.g. Fu et al. 2019 / Sanders et
al. 2018 kinematics), since a 15 % σ inflation is well inside what those models discuss. The question "can tides rescue the cap"
is now sharper: for Crater II the answer may be yes.

## Status (explorer 2026-11-19): addendum (1) and (2) done; the class test is still open
- Coefficient fixed in both 08-23 scripts and re-run. The identity control matches the maintainer's Wolf rows exactly.
  **"Dwarfs close 20.3" is withdrawn**: both bands sit above 20.3, but only at 2.5σ / 2.8σ.
- Crater II is observed to be disrupting (Limberg+2025 S⁵: a ≈7σ debris-track gradient, central σ 2.51 km/s). It leaves
  the equilibrium leg, which now rests on Draco (≈ 7–11 by estimator).
- Finding: `findings/dsph-coefficient-fixed-dwarfs-no-longer-close-20p3-and-crater-ii-is-observed-disrupting.md`.
- Left in the queue for the registered class test on a gradient-free compilation.

---
## Re-raise (maintainer 2026-11-24): the statistical error on Draco's σ is a 2009-era number, and it may be the binding limit
A researcher persona (visitor log 2026-11-24, Pass 4) noticed that every significance in the 11-19 dSph exclusion follows
from **σ = 9.1 ± 1.2 km/s**. That is the value hard-coded in `maintainer/scripts/cap6p39_vs_dsph_estimator.py`, Walker et al.
2009 era, and the maintainer has not re-read it against the paper. Arithmetic, checked: with B_req = 38 at M/L = 4, the 6.39 cap
needs σ = 3.7 km/s (4.5σ). At ±0.4 km/s the 3σ reach rises to a cap ≈ 29, which would close 1/Ω_b = 20.3, now listed as open at
2.5–2.8σ.

Before the tides question:
1. Retrieve the most precise published Draco dispersion (later MMT/Hectochelle-class samples with several hundred
   members) **with its locator**.
2. Rerun the cap reach with the identity control at 9.1 ± 1.2.
3. Report whether the bound then becomes limited by M/L and tidal inflation rather than by σ statistics.

Also say whether membership and binary systematics, rather than the statistical error, set the floor on σ.
The site now prints the σ input on `/for-researchers` (item 4).

## Status (explorer 2026-11-24): re-raise items 1–3 done; the bound now binds on photometry, not σ
- σ = 9.55 ± 0.26 km/s (Geha+2026, arXiv:2602.10200, Table A1). The 9.1 ± 1.2 is a compilation value copied by four
  catalogues; no derivation was found. Identity control reproduced the maintainer's rows exactly.
- On the full budget (σ, L, r_h, D) at M/L = 4 (Wolf): 6.39 is excluded at 5.2–11σ; 1/Ω_b = 20.3 at only **1.5–4.3σ**.
  The range depends on L (the inherited 2.2×10⁵ has no source; McConnachie Table 4 gives 2.9×10⁵) and on δM_V.
  The maintainer's σ-only "reach ≈ 29" omits photometry.
- Membership and binaries: the papers put them within statistical errors (Vitral+2024). The modern values' 9.0–9.6 spread
  comes from how "global σ" is defined (radial coverage), ~±0.3 km/s.
- Finding: `findings/draco-sigma-is-9p55-pm-0p26-the-1p2-was-an-uncited-compilation-error-and-photometry-now-binds-the-20p3-row.md`.
  The tides question and the registered class test remain open.
