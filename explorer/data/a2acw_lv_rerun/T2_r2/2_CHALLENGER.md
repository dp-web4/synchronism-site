# Round 2: Challenger

I'm taking two of the pressure prompts: (A) re-description or derivation, and (B) the single known result required. I also flag hidden premises.

## A. Re-description or derivation?

So far it is a re-description. Your Round 1 test is "steady source plus Laplace gives Q/r in 3D, 1/r in 2D, with linear superposition." That is true of electrostatics, steady heat flow, and Newtonian potentials, and any Laplace solver will pass it. Your own concession says saturation matters only near the core, so the exponent test checks the Laplacian and not saturation. That undercuts the section's headline claim that saturation is the unifying principle. A mechanism that does no work in the far field cannot be what distinguishes gravity from EM there.

**Hidden premise 1: a sink and a source are required.** The whitepaper says stability means "inflow = outflow." In a steady state with zero net flux, ∇·(D∇I) = 0 with no source gives a uniform I (or one fixed purely by boundary conditions). There is then no M-dependent far-field gradient. You get Q/r only by adding a net throughput Q, which means a continuous pump and a sink at the boundary. That makes the pattern an open dissipative system and not a closed stable entity. The sink also fixes the "baseline," so the baseline is an input and not an emergent property.

**Hidden premise 2: sign.** In your model, flux is J = −D∇I, so Intent flows outward from the high-I core. A probe whose transfer is biased "down the gradient" drifts away from the core, which is repulsion. The whitepaper claims transfer toward the core meets less resistance, but R(I) → ∞ near saturation, so resistance is highest toward the core. Your model and the whitepaper's statement conflict, and I see no derivation of attraction.

## B. The one result that must be reproduced

I want a bound Kepler orbit with T² ∝ a³ and mass-independent acceleration. The 1/r² exponent alone is insufficient, since Coulomb, light intensity, and heat flux share it. You conceded the dynamics are first-order, so v ∝ −∇Φ ∝ 1/r². That gives monotonic infall in time ∝ r³ and no closed orbits at all. An orbit needs inertia, and nothing in the framework supplies it. The equivalence principle is also unaddressed. A first-order drift with no inertia has no reason to be independent of probe composition.

**Scope risk 1: Q is not M.** If "mass" is throughput, then a static mass is a permanent dissipator. You need Q to be additive for composites and to equal the inertial and gravitational mass. Otherwise "M" is relabeled.

**Scope risk 2: unification.** The whitepaper's EM mechanism is *oscillating* saturation, with non-resonant patterns seeing a time-averaged field of about 0. Static Coulomb forces between non-oscillating charges would then vanish, and an oscillating source radiates as 1/r, not 1/r². The table lists EM as "1/r², medium strength" without a derivation, and the "medium strength" cannot come from a single constant structure. I'm not asking you to defend this sector now, but the unification claim rides on it.

## Answers to your Round 1 questions

1. The exponent, dimension, and superposition test is necessary but not sufficient. Treat it as a sanity check only.
2. Yes, in the sense that a pinned source plus sink is not a closed stable entity. Either justify the pump as part of the pattern or drop the "stable closed pattern" language.

## Questions (max 2)

1. Show the sign of B in your simulation or analytically. For a probe in your D(I) = D₀/R(I) lattice, does it drift toward the core or away? If away, which whitepaper statement do you drop?
2. Specify the minimal second-order structure that gives inertia, and show it yields a closed bound orbit with T² ∝ a³ and acceleration independent of the probe's own Q. If you can't, concede that the claim is limited to a static 1/r² profile.

## Status: **Narrowed**

What survives is a conditional statement: a driven steady-state diffusion with a sink yields Q/r profiles. Attraction, orbital dynamics, mass identification, and the cross-field unification are all unsupported. A sign-correct attractive drift plus Kepler-class dynamics would settle the gravity sector.