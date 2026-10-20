# Round 2 (CHALLENGER)

I take two lenses: **re-description vs. derivation**, and **the single result that must reproduce**. Hidden premises come along with them.

## 1. Your n-independence argument undercuts T3

You say the far-field result is independent of n because s→0 and R→R₀. That is fine for T1 and T2, which are plain Laplace physics. T3 is the only step that is not, and it needs a bias, which means it needs a coupling that depends on R(I).

- In nonlinear diffusion, ∂I/∂t = ∇·(D(I)∇I) with D = 1/R. A bump drifts at a rate ∝ D′(I)·∇I.
- D′ ∝ n·s^(n−1)/R₀ → 0 as s→0.
- So the drift toward the core vanishes in exactly the limit where you claim universality. At r ≫ R_c the bias is suppressed by an extra power of s ∝ 1/r.
- That would give a ∝ 1/r³ or steeper, not 1/r². The inverse-square result would then come from the field and not from the force law.

**Premise to expose:** you equate "force ∝ −∇Φ" with "drift ∝ −∇Φ." Your own mechanism gives drift ∝ D′(Φ)·∇Φ. Plain diffusion also sends a bump *away* from the core, which is the tension you flagged, and nothing in your setup resolves it.

## 2. Overdamped dynamics: velocity, not acceleration

Transfer-bias dynamics is first-order. Flux sets velocity, so v ∝ bias, and you cannot define a_P = d²⟨x⟩/dt² as a force response unless P has inertia.

- Nothing in the lattice model supplies inertia.
- Without it there are no orbits. Closed Keplerian orbits need second-order dynamics, and Kepler's third law (T² ∝ a³) is the standard quantitative test.
- A "stable" test pattern also cannot be a low-amplitude bump. Such a bump diffuses away. A pattern that persists must itself be near saturation, so s≪1 fails for the test body. Your superposition regime and your persistence regime are mutually exclusive.

## 3. The one result it must reproduce

**Newtonian two-body dynamics with unclamped cores.** I want all of these from one simulation:

1. Acceleration of P independent of P's Intent content (the equivalence principle).
2. Acceleration of the core toward P ∝ m_P, so momentum is conserved (Newton's third law).
3. A bound, closed orbit with T² ∝ a³.

Your Dirichlet-clamped core fixes the source in place, so it has no reaction and cannot test point 2. It is a static-potential toy, not a two-body theory. The Round-1 definition M ∝ R_c·ΔI_c (a flux capacity) is also not the same quantity as P's inertial content, so you need an argument for why gravitational and inertial "mass" coincide.

Light deflection at twice the Newtonian value (1.75″ at the solar limb) is the next hurdle. The whitepaper's "path of minimal transfer resistance" produces only the Newtonian half, unless time-dilation and spatial gradients are tied together by a single R(I). That is more than Round 1 supplies.

## 4. Scope risk

Gravity, EM and nuclear forces each add a bespoke patch: resonance matching, phase, "locking." None carries a coupling constant derived from R(I). Without that derivation the unification is a table of adjectives. For now, treat this as gravity-only. Your Round-1 concession on EM and nuclear stands.

## Questions (max 2)

1. **Drift scaling.** Simulate a bump of fixed total Intent in a steady clamped-core profile and report the measured drift velocity v(r) for s_c = 0.5, 0.9. Does v fall as 1/r², 1/r³, or something else? What supplies inertia, if anything?
2. **Reaction and equivalence.** Remove the Dirichlet clamp, let both bodies be free and conservative, and report (a) core recoil vs. m_P and (b) a_P vs. m_P. If neither is measurable, state which Round-1 target you retract.

## Status

**Narrowed.** T1 and T2 are trivial and survive. T3, the only non-tautological claim, currently looks like **Failed** on the far-field scaling argument above. **Would settle:** a lattice run showing m-independent a_P, momentum-conserving recoil, and a closed orbit with T² ∝ a³, with no tuned parameters beyond R(I).