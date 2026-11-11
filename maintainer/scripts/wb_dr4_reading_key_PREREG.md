# Gaia DR4 wide binaries: reading key for the acceleration-keyed compander, written before DR4

**Date:** 2026-11-06 (site maintainer). Gaia DR4 is planned for December 2026; no DR4 wide-binary analysis exists yet.
**Status:** a dated mapping, committed before the data. **Not** a registered test of the framework: adopting it into
PREDICTIONS.md gates on the project lead. It cannot move Bucket 0 or the count (reasons below).

## Why this exists
A simulated-visitor researcher persona (2026-11-06) called the DR4 γ window "the only near-term ex-ante statement left" and
asked for it to be registered before December. The window it referred to was the 2026-10-06 quasi-1D bracket
(`wb_boost_vs_gamma_efe_bracket.py`). Two things came out of trying to register it:

1. **The bracket was too wide to register.** It gives a range [ν_e(1+L_e), ν_e] 0.25–0.5 wide at each γ, wider than the spacing
   between γ values. Its "a Newtonian null fails every γ ≲ 3" read the upper edge. On the bracket's own ranges a null sits inside
   it for γ ≳ 1.
2. **No γ passes Cassini.** The "Cassini-passing γ ≈ 1.5–2" that the squeeze relied on came from the preparatory scan in
   `sparc_cassini_q2.py`, which holds a₀ = 1.03×10⁻¹⁰ fixed. With a₀ re-profiled from SPARC at each γ
   (`Research/preregistrations/sparc_cassini_tanhlog/sparc_profile.json`), Cassini fails at **14.5–19.3σ for every γ from
   0.3 to 3** (`cassini_q2_at_sparc_profiled_a0_high_gamma.py`; identity control +17.96σ at γ = 0.489). So the SPARC × Cassini
   intersection is empty whatever DR4 shows.

## The mapping (quasi-linear QUMOND, `wb_qumond_monopole_boost_vs_gamma.py`)
In the external-field-dominated limit, a point mass has Φ = −(GMν_e/r)[1 + (L_e/2) sin²θ]. Its orientation-averaged radial
boost is **B = ν_e(1 + L_e/3)**. Controls:
- The closed form solves the linearized equation to 7×10⁻⁶.
- The run reproduces the 10-06 bracket's ν_e and L_e.
- At γ ≈ ½ it gives 1.38–1.53, which is MOND's published solar-neighbourhood range.

The band below is the Galactic field g_e = 1.6–2.2×10⁻¹⁰ m/s². The asymptotic value applies where s ≳ 10–20 kau.

| DR4 boost in g (Chae's γ_g or equivalent G_eff/G) | compander γ it maps to |
|---|---|
| 1.50 | 0.39–0.51 |
| 1.40 | 0.47–0.64 |
| 1.30 | 0.59–0.85 |
| 1.20 | 0.80–1.28 |
| 1.15 | 0.99–1.73 |
| 1.10 | 1.33–2.72 |
| 1.06 | 1.88–5.3 |
| 1.00 (null) | none; B > 1 for every γ, but γ = 3 predicts only 1.03–1.09, so a null excludes the γ whose B exceeds 1 + 2σ_DR4 |

## Reading rule (fixed now)
- Take every published DR4 wide-binary analysis that reports a G_eff/G-type boost with an error (Chae-type γ_g; Banik-type
  α_grav converted to a boost at the sample's median acceleration). If they disagree, report each reading separately. Do not
  choose between them.
- Added 2026-11-09, before any DR4 analysis exists (explorer 2026-11-08): for each analysis, check the error setting used against
  the one stated, and whether any injection test ran at the real-data configuration. How a boost would be measured in-house is in
  `wb_dr4_analysis_plan_PREREG.md` (draft, not adopted).
- For each one, the 2σ boost interval maps through the table to a γ interval. That interval is a statement about which member
  of an already-closed family the data resemble. It is not a survival window: no γ in 0.3–3 passes Cassini with SPARC's a₀.
- What would change this key: a Cassini Q₂ re-measurement that loosens the bound by more than ~8×, or an a₀ profile that
  drops below SPARC's by a factor ~3 at γ ≥ 2. The fixed-a₀ pass at γ = 2 needed a₀/γ = 0.52×10⁻¹⁰, against SPARC's
  1.48×10⁻¹⁰.

## What it cannot do
- It cannot move Bucket 0, because every outcome lands on a MOND-class member that Cassini already excludes.
- It cannot change the count, because TEST-02 is not one of the 6.
- It cannot rescue the density branch. That branch is identically null in the same-instant ratio and is excluded by SPARC
  (+2843) and by lunar laser ranging.
- The live question DR4 does decide is MOND's, the Banik vs Chae dispute.

## Addendum 2026-11-11 (before any DR4 analysis exists): the algebraic "EFE-free corner" row
A researcher simulated-visitor persona pointed out that the table above covers the QUMOND boost only, while the site says
the algebraic corner (γ ≈ 0.87–0.95) "can still be killed by DR4". The corner has two readings, and they predict different
things (`efe_free_corner_which_acceleration.py`, PREREG `3d53a42`, output on file):

| reading of the argument of C | boost in g at wide-binary accelerations | status before DR4 |
|---|---|---|
| (I) internal relative acceleration of the pair | rises as the internal acceleration falls: 1.48 at g_N = 1.0×10⁻¹⁰ m/s², 2.69 at 0.2×10⁻¹⁰ (γ = 0.90); no levelling off | needs a rule for which bodies form the system; none is written |
| (T) each star's total acceleration | orientation-averaged 1.17–1.30 for γ = 0.87–0.95 and g_e = 1.6–2.2×10⁻¹⁰, flat in internal acceleration (same expression as the QUMOND rows above) | excluded by the planets: Saturn's perihelion would turn by about −85,000 mas/cy against −0.32 ± 0.47 |

Reading rule for the corner, fixed now:
- A boost that keeps rising below g_N ≈ 10⁻¹⁰ m/s², reaching 2 or more by 0.3×10⁻¹⁰, is what reading (I) predicts. A boost
  that is flat at 1.2–1.5 across the low-acceleration bins, or absent, kills reading (I).
- Reading (T) is not tested by DR4; it is already excluded.
- Neither outcome can move Bucket 0: reading (I) with a rising boost is isolated MOND without an external field effect,
  not a prediction of this framework alone.
