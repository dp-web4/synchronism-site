# PREREG: Is the Synchronism substrate in 't Hooft's CAI class? A permutation test (2026-11-25)

Written and committed **before** running `explorer/tools/substrate_cai_permutation_test.py`.

## Why this test
't Hooft's Cellular Automaton Interpretation (CAI, arXiv:1405.1548) gets quantum mechanics from a deterministic
automaton whose evolution is a **permutation** of ontological states. Written in that basis, the evolution operator is a
permutation matrix and so is unitary. The emergent Hamiltonian's frequencies are set by the **cycle periods** of the
permutation (a cycle of period T carries ω = 2πk/T). A many-to-one (contracting) map is not a permutation. If its only
recurrent states are fixed points, the CAI construction gives H_eff = 0, with no quantum dynamics at all.

The topic's stake (maintainer, 11-25) is that no difference from CAI changes a prediction. This test asks whether each
Synchronism dynamics on file meets CAI's precondition at all.

## Arms and predictions

**E1: the stated rule** (FUNDAMENTALS §1/§3: conservative first-order transfer gated by R(I) ≥ 0; Stage-1 Arm A).
- P1a: Σ I² is non-increasing at every step in every run (float version, explicit synchronous update inside the
  stability bound). Expected: 100 % of runs across n ∈ {1, 2, 4, 8}, 1D and 2D. Analytic reason: with conservative
  downhill flux and R_e ≥ 0, dΣI²/dt = −2 Σ_e D R_e (ΔI_e)² ≤ 0.
- P1b: an integer-valued version (whole units of Intent; per-edge flux = floor(κ·R·ΔI), limited so no cell goes
  negative), enumerated exhaustively on small rings (L = 5–7, I ∈ {0..I_max}). **All recurrent states are fixed points
  (period 1); no cycle of period ≥ 2 exists.** Non-injective: > 50 % of states have no preimage (Garden-of-Eden).
  Hence CAI's H_eff = 0 on every sector.
- Risk I can name: the synchronous integer update could overshoot and create period-2 checkerboards. If any period ≥ 2
  cycle appears inside the flux limit, P1b fails.

**E2: the measurement primitive** (kuramoto-lattice-suite 02/05: φ ← φ + r·sin(θ − φ)).
- P2: with φ discretized into M = 4096 bins on the circle and r = 0.2, after 50 lock steps the image of all M initial
  phases occupies ≤ 2 bins, so log₂M ≈ 12 bits of pre-measurement phase are erased per measurement. The primitive is a
  contraction, not a permutation.

**E3: the working substrate** (Stage-1 Arm D, focusing-saturating Klein-Gordon lattice; the substrate the archive
converged on), made **bit-reversible** with integer leapfrog (x_{t+1} = 2x_t − x_{t−1} + round(dt²·F(x_t)·M)/M on a grid
of 1/M; the Levesque–Verlet construction). Such a map is invertible by construction, so it is a permutation on its
(finite, bounded) reachable set.
- P3a: forward 8000 steps, then backward 8000, returns the initial integer state **bit-exactly** at every M tested.
- P3b: a breather passes the archive's own Stage-1 classifier (localized, oscillating, survives the kick) at M ≥ 2¹⁰
  per unit amplitude, with a pass fraction within 0.15 of the float run on the same ICs. It degrades at M ≤ 2³ (pass
  fraction drops by ≥ 0.3 or the width grows). Uncertain: coarse rounding acts like noise and might still let
  breathers survive. If they survive at M = 2³, P3b's low-M half fails.
- P3c (side check): the Stage-1 report's "Arm D energy drift ~0.23" comes from an `energy()` that omits the nonlinear
  on-site potential. With the true Hamiltonian (adding −∫γu³/(1+(u/u_s)²)du), the max relative drift is < 0.01
  outside the kick.

## What each outcome means for the CAI question
- P1 and P2 held: the stated rule and the measurement primitive are both **outside** CAI's class. CAI gives no quantum
  dynamics for them, so there is a structural difference, and it runs against the framework.
- P3 held: the working substrate **is inside** CAI's class (a finite permutation automaton with particle-like
  recurrent patterns). On that branch the maintainer's stake ("no prediction-changing difference") stands, unless the
  archive's Phase-1.6 reading (ψ ontic in 3D, envelope = particle) is kept. That reading is checked separately,
  analytically, against matter-wave interferometry in the finding.
- P3b failing at high M (breathers die under exact reversibility) would mean the working substrate's particles depend on
  float round-off, i.e. on numerical dissipation. That would be a significant negative for the CA challenge itself.
