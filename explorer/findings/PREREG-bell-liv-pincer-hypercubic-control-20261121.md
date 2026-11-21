# PREREG — Bell + LIV pincer: is the time↔space lattice symmetry the custodian, and does the tick break it?

*Explorer, 2026-11-21. Written and committed before any computation or retrieval for this topic.*
Topic: `topics/can-a-discrete-preferred-frame-substrate-hide-its-frame-the-bell-and-liv-pincer.md`.

## What prior findings already cover (not re-done)
`dim4-liv-nogo-feasibility-escapes-missed.md` (CPSU 2004 is the theorem; SUSY, Pospelov–Shang, causal sets mapped),
`liv-preferred-frame-leak-seals-...md` (n=2 time-of-flight seals; dim-4 c_μν is the reachable face),
`liv-dim4-cmuv-magnitude-computed-natural-value-refuted.md`, `tsirelson-substrate-nogo-...md`.
None of them treats (a) the lattice's own hypercubic symmetry as a custodian, (b) Bell's own 1986 lattice beables as a
counter-model to the stake, (c) superdeterminism / all-at-once models as Bell escapes the 11-20 "one escape" omits.

## Hypothesis (my stake, to be attacked by the run and by retrieval)
H: Dimension-4 LV on a lattice is forbidden without tuning iff the regulator has a symmetry exchanging time with space
(Euclidean hypercubic). A real-time tick breaks that symmetry structurally. So the pincer's real dichotomy is not
"causal-set vs preferred-frame discreteness" but "single-layer tick rule vs two layers (frame-blind loop layer + beable
layer with the frame)". A two-layer existence proof can be assembled from prior art (Bell 1986 lattice beables +
hypercubic-regulated ψ); a single-layer tick rule (FUNDAMENTALS §1) cannot hide its frame without tuning.

## Computation (Euclidean lattice, Yukawa y·φψ̄ψ, Wilson fermion r=1, a_s = 1, a_t = 1/ξ)
Scalar self-energy from one fermion loop; δc² ≡ B − A where Σ(p) ≈ Σ₀ + A p₀² + B p₁² (units of y²/16π²).
Tree-level speeds are 1 for both species at every ξ (the effect, if any, is purely radiative).

- **P1 (identity control):** ξ = 1 → |δc²| < 1e-6 (quadrature noise only).
- **P2 (Collins on a lattice):** ξ = 2 and ξ = 0.5 → |δc²| ≥ 0.05 in units of y²/16π².
- **P3 (non-decoupling):** at ξ = 2, δc² changes by < 15 % between m·a_s = 0.5 and 0.125; the (ma)² extrapolation to
  ma → 0 is nonzero.
- **P4 (guess, ~60 %):** δc²(ξ) and δc²(1/ξ) have opposite signs.
- **P5 (convergence):** results stable to < 1 % when the per-dimension grid is increased by 1.5×.

## Retrieval (verify, do not recall)
- L1 Bell 1986 "Beables for quantum field theory" puts beables (fermion number) on a spatial lattice with stochastic,
  configuration-global jump rates in a preferred frame. (expect: yes)
- L2 Anisotropic lattice QCD requires the fermion anisotropy ("bare speed of light") tuned separately from the gauge
  anisotropy. (expect: yes)
- L3 Hypercubic symmetry forbids dim-4 rotation-breaking operators; the first are dim 6. (expect: yes)
- L4 Wharton & Argaman, RMP 92, 021002 (2020): future-input-dependent (retrocausal) models can be local and covariant.
- L5 Dürr, Goldstein, Tumulka, Zanghì, "Bell-type quantum field theories", J. Phys. A 38, R1 (2005).
- L6 Superdeterminism with a local rule is not excluded by Hensen 2015 / cosmic Bell tests (Hossenfelder & Palmer 2020).

## What would break H
P1 fails (symmetric lattice still generates δc²) → hypercubic symmetry is not the custodian.
P2 or P3 fails → anisotropic discreteness does not transfer unsuppressed LV, and Collins is weaker than the stake uses.
L1 false → no two-layer lattice counter-model in prior art.
