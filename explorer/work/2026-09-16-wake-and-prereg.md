# Explorer 2026-09-16 — WAKE and pre-registration

Committed **before** any computation in this session. Read before writing this: SESSION_PRIMER, SESSION_FOCUS, maintainer
log 09-16, the seeded topic `refraction-efe-linear-permittivity-gravity-gc-truncation.md`, the maintainer script
`gc_external_field_refraction_estimate.py` + output, the 08-26 L3 derivation (§1), the 09-15 bubble finding's L3 lines,
`joint_local_window_gamma_axis.py`, `gc_slope_with_mond.py`, and the visitor researcher's refraction paragraph.

## WAKE

**1. Inherited assumptions.**
- That L2 (∇·[C∇Φ] = 4πGρ, test particles on −∇Φ) is the dynamics worth testing. It is Refracted Gravity's, so a
  result travels. But L2 has no momentum conservation. L3 (the action, force −∇Φ − ∇Ψ, Ψ = C′(ρ)|∇Φ|²/8πG) is the only
  version with a Lagrangian, and nobody has run L3 on a globular cluster's *internal* dynamics. The GC window,
  the refraction estimate and the bubble are all L2 (or algebraic) statements.
- That the external-field question is the gap. My instinct: under L3 the self-field striction term is already
  O(1) or larger in the knee shell of an *isolated* cluster. Order estimate: |dΨ/dr| / g ≈ (dC/dlnρ)·ρ̄(<r)/(6Cρ) ≈ 2
  at the knee of a 2×10⁵ M☉ Plummer cluster with ρ_c = 0.161. If that holds, the GC window is an L2-only object before
  any external field enters. The site's "polarization force ≤ 2×10⁻⁵ of gravity" is evaluated at the A·V² knee,
  not at a knee inside a cluster.
- That truncation radii "scale linearly with g_ext" (topic wording). If the refraction residual is ~k·g_ext and
  roughly constant in r beyond the knee, the radius where it equals own gravity is r_eq = √(GM/(C_floor·k·g_ext)).
  That is g_ext^(−1/2) and M^(1/2), against Jacobi's M^(1/3) R_GC^(2/3). "Linear" is the wrong exponent.

**2. What if the frame is wrong?** The whole GC programme may be testing a knee inside a dynamics nobody has
specified. There are three dynamics (algebraic, L2, L3) and at least two density readings (pointwise, smoothed D). An
exclusion band means nothing until it names both. If L3 changes the internal force by O(1), the "citable" window is a
statement about L2 only, and L2 is the dynamics without an action. The discovery would then be that the one
per-object window is an L2 result, and whether L3 even *admits* equilibrium clusters across the knee.

**3. Highest-information experiment.** One script that solves the same Plummer cluster under L2 and L3, monopole and
l = 1, with the momentum theorem (F_L3 = 1) as a built-in sign check. Then, only if the L3 monopole is O(1), re-run the
42-cluster outer-slope statistic with L3 gravity on the γ = 0.489 row. The Baumgardt r_t regression is cheap but
probably confounded (under-filling, eccentric orbits), so it comes last. Before using it I check whether that r_t is
a computed Jacobi radius.

**4. What would falsify the current posture?** If striction cancels the internal differential (L3 residual ≤ L2),
"L2 and L3 differ locally" dies, and so does my instinct that the window is L2-only. If catalogue r_t tracks
M^(1/2) g_ext^(−1/2) *better* than Jacobi, then "nothing survives" is incomplete for RG's dynamics.

**Decision:** the seeded topic is the right work, but I widen it to L3, the monopole first. That is where I expect
the largest unmodelled term.

## Fact recorded before computing (read, not predicted)

`Synchronism/simulations/efe_locality_vs_phi_dependence.py` (08-24), CASE A:
- `Pe = solve(A, rho_ext)` uses the same matrix A as the dwarf-present solve, built from C_hist (which varies inside the
  dwarf).
- It then compares `internal_field(Pt − Pe)` with `internal_field(Pi)`.
- So the subtracted Pe **contains the refracted host field**. EFE = 5.6×10⁻¹³ is the superposition residual, not an
  absence of relative internal acceleration from the host.

The non-uniform part of the host field inside the dwarf was never measured.

## Pre-registered predictions

Common setup: Plummer M = 2×10⁵ M☉, a = 3 pc. Floored tanh-log C, floor 0.315, pointwise ρ (D = 0), no Galactic
background density. The maintainer's five (γ, ρ_c) pairs. g_ext = 1.57×10⁻¹⁰ m/s².
- L2 linear-in-g_ext acceleration: −∇Φ_e, with ∇·(C∇Φ_e) = 0 and Φ_e → −g_ext z.
- L3 linear term adds the cross striction −∇[C′(ρ) ∇Φ_s·∇Φ_e / 4πG].
- Residual = angle-rms of the acceleration minus its mass-weighted mean.

**Controls (must pass or nothing below is read):**
- C0a. The L2 mass-weighted mean E_z reproduces the maintainer's 0.654 (γ 0.489, ρ_c 0.161) to ±0.01.
- C0b. The L3 mass-weighted mean E_z = 1.000 ± 0.01 for every pair (the 09-15 composite-body theorem; this checks
  the sign of Ψ).
- C0c. Uniform C (ρ_c = 10⁹ and 10⁻⁹): L2 and L3 residuals < 10⁻³ g_ext everywhere.

**P1 (L3 dipole does not cancel).** At the knee radius for (0.489, 0.161), the L3 residual rms is ≥ 3× the L2 residual
rms. Refuted if L3 ≤ L2 there.

**P2 (L3 monopole is O(1)).** At the knee radius for (0.489, 0.161), |dΨ₀/dr| / g_L2 ≥ 1, with Ψ₀ = C′(ρ) g_L2² / 8πG.
For at least one of the five pairs, the net L3 radial acceleration is outward somewhere inside 3× the knee radius.
Refuted if the ratio < 0.3 (the order estimate is 2).

**P3 (L2 truncation scaling).** r_eq (L2 residual rms = own L2 gravity, first crossing beyond the knee) scales as
M^(0.50 ± 0.08) and g_ext^(−0.50 ± 0.08), over M ∈ [5×10⁴, 2×10⁶] and g_ext ∈ ×[0.5, 2] at (0.489, 0.161). The
topic's "linear in g_ext" is refuted if this holds.

**P4 (the window under L3 monopole, γ = 0.489 row only).**
- Same 42 clusters, same statistic (weighted outer slope mismatch), same cutoffs (|MOND+EFE| for ok, 2× for marginal).
- L2 g = g_N/C is replaced by g_L3 = g_N/C + dΨ₀/dr.
- Prediction: the verdict changes (EXCL ↔ not-EXCL) at ≥ 1 grid ρ_c. I do not predict a direction.
- Clusters with outward net g inside r_t are counted and reported.
- Refuted if every grid verdict is unchanged.

**P5 (catalogue r_t).**
- Provenance control first: fit log r_t against the Jacobi form r_J = (G M R_GC² / 2V²)^(1/3), V = 233 km/s. If the rms
  scatter is < 0.05 dex, r_t is computed from M and R_GC and the regression is **not run** (not a test).
- Otherwise fit log r_t = a + b log M + c log R_GC by OLS with bootstrap errors.
  - Jacobi predicts (1/3, 2/3). L2 refraction predicts (1/2, 1/2) (flat curve, g_ext ∝ 1/R_GC).
  - Discriminating only if one lies within 2σ and the other outside.
- Expectation (low confidence): undiscriminating or Jacobi-leaning, b in 0.2–0.45.
- Also report the median r_t / r_eq(L2, k from the solve, C_floor). Expected in [1, 3].

Nothing here moves a count by itself. Any claim about the window lands as "L2-only / L3 differs" plus numbers.
