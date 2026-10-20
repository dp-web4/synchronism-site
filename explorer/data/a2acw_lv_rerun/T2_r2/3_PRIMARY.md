# Round 3: Primary (Defender)

## Concessions

1. **Re-description, partly.** The exponent comes from Laplace plus conservation, so the exponent test alone is a sanity check. I drop "saturation explains 1/r²" and claim only that saturation explains the *amplitude and sign* of the coupling (below).
2. **Open system.** A far-field gradient requires net throughput Q, which means a pump and a sink. I narrow the claim from "closed stable entity" to "driven, saturation-pinned structure." Whether that is acceptable for matter remains an open cost.
3. **Sign was not derived.** For a passive tracer under Fick's law, ∂ₜp = ∇·(D∇p), there is no drift, and following the flux is repulsive. Attraction needs an additional rule.
4. **Kepler orbits are out of scope.** The dynamics are first-order, so there is no closed orbit and no T² ∝ a³. I withdraw any orbital claim. The equivalence principle and Q ≡ M identification are also not defended.

## The sign candidate

Let the hop rate depend on the **departure cell's** resistance, so walkers use the Itô-type rule ∂ₜp = ∇²(D p). The effective drift is then v = −∇D = −D′(I)∇I. Since D = D₀/R(I) falls as I rises (D′ < 0), v points up the Intent gradient, toward the core. The rule is physically motivated: a probe leaves a cell at a rate set by that cell's saturation. It is still a **chosen convention** and not a derivation. A Fick-type rule gives zero drift, so the rule must be justified independently. This is the weakest point of my position.

This also answers "saturation does no work." The drift is ∝ D′(I)∇I: the 1/r² exponent comes from Laplace, but the **existence and strength** of the force come from saturation. If R is constant, the force must vanish.

## Round 3 simulation test (one)

**Inputs**
- A 3D cubic lattice (L ≥ 128) with conservative diffusive transfer.
- D(I) = D₀(1 − I/I_max)^α, with α ∈ {1, 2}, deliberately varied to test form-insensitivity.
- A core pinned at I = 0.95·I_max, a far absorbing shell at I_b, and a Dirichlet relaxation to steady state.
- A tracer ensemble of N ≥ 10⁵ independent walkers with hop rate set by the departure cell (Itô rule), released at radii r ∈ [4, 40] core radii.

**Outputs**
- Measured Q (shell flux).
- Mean radial drift ⟨v_r⟩(r) from the walkers.
- Fitted exponent n of |v_r| ∝ r^(−n) in the far field.
- Two-core superposition residual.
- Control run with D′ = 0 (D = const), same Q.

**Pass criteria**
- ⟨v_r⟩ < 0 (toward the core) at every r tested.
- n = 2.0 ± 0.1 for both α values.
- The amplitude ratio of drift to Q is stable across α, within the predicted ratio |D′(I_far)|/D₀.
- Drift scales linearly with Q (3 values of Q).
- In the control run (D′ = 0), drift is consistent with zero within statistical error.
- Two-core superposition residual below 5% beyond 3d.

## What counts as failure

- Drift is outward, or zero, for the Itô rule with physically reasonable R(I).
- The control run shows nonzero drift, which means the effect is a numerical artifact.
- n deviates from 2 beyond 0.1 once the core radius is resolved.
- Drift is not linear in Q, or composite cores are non-additive, which means Q cannot be mass.
- The only way to obtain attraction is to tune the hop rule per case. Then "attraction" is an input, and the sector is **Failed** as a derivation.

## Scope after narrowing

What I defend: a driven, saturation-pinned source produces a 1/r far-field profile, and under a departure-cell hop rule an overdamped attractive drift ∝ Q/r² whose strength depends on D′(I). What I do not defend: orbits, inertia, the equivalence principle, G, and the EM and nuclear sectors. If a second-order extension (persistent velocity state) is wanted, it must be a separate, explicit axiom, and the Kepler test applies only after it is added.

## Questions (max 2)

1. Will you accept the departure-cell hop rule as a legitimate reading of "transfer resistance," or do you want it derived from a microscopic conservative update, such as a lattice gas with exclusion, where saturation arises from site exclusion?
2. If the test passes, is the correct next gate a lattice-gas model in which inertia emerges (for example, persistent biased random walks), or do you require Kepler dynamics before calling this a derivation candidate?

## Status: **Narrowed**

The gravity-like static sector is a testable conditional claim. The sign rests on an undefended hop rule. Dynamics, mass identification, and unification are unsupported. A passing run of the test above, plus a microscopic derivation of the hop rule, would move it toward **Would settle** for the static sector only.