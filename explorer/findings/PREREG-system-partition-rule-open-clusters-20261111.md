# PREREG: can any written "which bodies form the system" rule keep the internal reading of the algebraic law alive?

**Date**: 2026-11-11 (explorer). **Topic**: `system-partition-rule-can-any-written-rule-spare-the-planets-and-boost-a-binary.md`.
**Written before**: the script (`scripts/system_partition_rules.py`), any literature retrieval today, and any
open-cluster number being looked up. **Not blind**: the hand estimates below came first and are declared.

## Law under test
g_N = g·tanh(γ ln(1 + g/a₀′)), γ = 0.87–0.95, a₀′/γ = 1.1×10⁻¹⁰ m/s² (ledger `EFE_FREE_CORNER_STATUS`), with g read as
the **internal** acceleration of a system and no dependence on the field the system sits in.

## What I know before reading (recall, unverified)
- Milgrom 1983 (ApJ 270, 365) introduced the external field effect citing open clusters in the solar
  neighbourhood: internal accelerations ≪ a₀, no mass discrepancy.
- Hyades: M ≈ 400–450 M☉, half-mass radius ≈ 4–6 pc, tidal radius ≈ 9–10 pc, σ_1D ≈ 0.3 km/s (Gaia era; some papers
  say 0.4–0.8 and "super-virial"). Pleiades: M ≈ 700–800 M☉, σ ≈ 0.4–0.5. Praesepe: M ≈ 500–600 M☉.
- Galactic field at the Sun ≈ 1.6–2.2×10⁻¹⁰ m/s².

## Hand estimates (before the script)
- Hyades Newtonian g at r_h ≈ 5 pc: G·(M/2)/r² ≈ 1–2×10⁻¹² m/s² ≈ 0.01–0.02 a₀. Deep regime.
- Isolated deep estimator σ⁴ = (4/81) G M a_M: Hyades (435 M☉) 0.75 km/s; Pleiades (800 M☉) 0.87 km/s. Newtonian
  virial values ≈ 0.2–0.3 km/s. So the internal reading over-predicts by a factor 2–3 in σ, 5–10 in dynamical mass.
- Baryonic Newtonian tidal filling r_h/r_J: Hyades ≈ 0.5; Draco ≈ 0.4. Same.
- Mean density contrast inside the separation of a 10 kAU, 2 M☉ binary over the field (0.1 M☉/pc³): ≈ 4×10⁴;
  Hyades core ≈ 20, Pleiades core ≈ 120.

## Systems (the topic's five, plus two classes it omitted)
S1 Sun–Saturn; S2 Earth–Moon; S3 wide binary 2 M☉ at 5, 10, 20 kAU at the Sun; S4 Crater II, Antlia 2;
S5 a halo globular cluster (Pal 14 and NGC 2419 as the diffuse cases); **S6 nearby open clusters (Hyades, Pleiades,
Praesepe; more if retrieved with errors)**; **S7 classical Milky Way dwarf spheroidals (Draco, Fornax, Sculptor,
Carina) and one ultra-faint (Segue 1)**. S6 must come out near Newtonian; S7 must come out boosted by ≳ 10 in
dynamical mass, because the framework has no dark matter to hold them otherwise.

## Candidate rules (fixed here; each is a membership test: "is this set of bodies a system?")
- R1 Jacobi / hierarchical pairs: each bound pair in a hierarchy uses its own relative acceleration.
- R1′ pairwise sum: every pair of bodies attracts by the two-body law; forces add.
- R2 Hill / tidal: a system is what lies inside its own tidal radius in the host field.
- R3 binding energy: a system is a set with negative internal energy.
- R4 density contrast: a system is a region whose mean density exceeds c*·(ambient density).
- R5 relaxation: the boost acts on collisionless mean fields only; collisional systems (t_relax < age) are Newtonian.
- R6 (added by me) field-ratio: a system is a set whose internal Newtonian field exceeds k·(external field).

## Predictions
- P1. S6 is in the deep regime under a Plummer integration (g_N(r_h)/a_M < 0.1 for all three clusters).
- P2. The internal reading over-predicts σ_1D for the Hyades and Pleiades by ≥ 1.8× the measured value.
- P3. R2, R3 classify S3, S6 and S7 identically (all "system"), so they inherit P2 and fail on S6.
- P4. R1 is silent on N-body systems; its extension R1′ over-predicts the Galaxy's field by ~√N (≥ 10⁴).
- P5. R4 separates the 10 kAU binary from the open clusters for some c* in ~10²–10⁴, but the same c* then rules
  out S7 (dwarf spheroidals have contrast ≲ open clusters'), so R4 fails on S7 (Newtonian, far too cold).
- P6. R5 is bistable: evaluated with the boosted σ the Hyades are collisionless (boost consistent), evaluated with
  the Newtonian σ they are collisional. With Newtonian baryonic inputs Segue 1 comes out collisional (fails S7).
  A two-body system has no relaxation time, so R5 is silent or Newtonian on S3.
- P7. R6 is the only rule that passes S1–S7, for k in a window bounded below by S6 (g_int/g_ext ≈ 0.01) and above
  by S7 (g_int/g_ext ≈ 0.1–1), and it is an external field effect by another name. Under R6 the wide-binary boost
  at 10–20 kAU (g_int/g_ext ≈ 0.1–0.6) is whatever k says: not determined between 1.0 and 2.7.
- P8. Retrieval confirms the 1983 open-cluster motivation in Milgrom's own words (paper or a later review by him).

## Kill criterion for the internal reading as "no EFE under any rule that admits bound clusters" (fixed now)
For at least two of the three clusters: z = (σ_pred − σ_obs)/√(σ_obs,err² + (0.2 σ_pred)²) ≥ 3, with M taken at the
**lowest** published counted mass, the same 20 % estimator systematic as 11-10, and σ_obs the **largest** published
Gaia-era value with its error. If a cluster's published σ exceeds 0.8× the prediction, the kill does not fire on it.

## What would count against me
P1 fails (clusters not deep); published σ are ≥ 0.6 km/s with small errors; Milgrom's text does not mention open
clusters; or some R2–R5 threshold separates S6 from S7 without reference to the external field.

## Controls
C1 Crater II isolated σ reproduces 11-10's 3.90 km/s at Υ = 2 (same function). C2 the binary boosts reproduce the
ledger's 1.48 at 1.0×10⁻¹⁰ and 2.69 at 0.2×10⁻¹⁰. C3 a Newtonian Plummer Jeans integration returns the analytic
σ_los²(0) = (3π/64)·GM/a to 1 %. C4 Jeans in the deep limit returns (4/81)GMa_M mass-weighted to 5 %.
