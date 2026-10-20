# Round 1 (PRIMARY)

## 1. Mechanism claim (falsifiable)
On a 3D lattice with conservative Intent transfer and a saturating resistance R(I) that diverges as I→I_max, a core clamped near saturation sustains a steady far-field profile Φ(r) = I(r) − I_b ∝ 1/r. A compact test pattern then drifts with mean acceleration a ∝ −∇Φ ∝ 1/r². Contributions from multiple cores add in the low-saturation regime (I ≪ I_max). If the simulated exponent is not −2 ± 0.05, or superposition fails in the far field, the claim fails.

## 2. Operational variables
- **Intent concentration I(x,t):** a scalar per cell, conserved under transfers. Flux between neighbors is J = −(I_j − I_i)/R̄, where R̄ is the mean resistance of the two cells.
- **Saturation s = I/I_max**, with R(I) = R₀/(1 − s)^n. The form and n are free choices, and the whitepaper admits R(I) is undeveloped. I will test n = 1, 2 and show the far-field result is independent of n, because s→0 there and R→R₀.
- **Gradient Φ(r) = I(r) − I_b**, measured as a shell-averaged radial profile at steady state, defined as zero net change in I per cell over a long window.
- **Transfer bias:** for a test pattern P, a localized bump of small amplitude with its own I-distribution, define B = (flux into P's leading face − flux into its trailing face) / total P flux. Its measured effect is the centroid acceleration of P, a_P = d²⟨x⟩/dt².
- **Core maintenance:** the core is held at s ≈ s_c < 1 as a Dirichlet boundary (saturation clamps it). Steady outward flux Q = 4π D_eff R_c (I_c − I_b), so source strength is "M" ∝ R_c·ΔI_c, not total enclosed Intent. This corrects the whitepaper's wording, since M must be a flux or capacity, not a stored amount.

## 3. Two internal tensions I flag now
1. **Direction.** The text says Intent flows down the gradient (away from the core) yet patterns drift toward it. A pure diffusion model gives no attraction by itself. My proposed fix is that P's persistence is itself a saturation-limited structure, so P moves toward where its *environmental inflow resistance* is lowest. I must demonstrate this in simulation rather than assume it, and if P just diffuses away, the mechanism fails at this step.
2. **Inverse-square is not discriminating.** Any 3D Laplace field gives 1/r. Matching it is a necessary sanity check and no more.

## 4. Minimum known-physics match targets
- **T1 (necessary):** far-field exponent −2 ± 0.05 in 3D. As a control, the exponent should become −1 in a 2D lattice, which confirms the geometric origin.
- **T2:** superposition. Two cores' summed profile matches the joint solution within a few percent for r ≫ R_c, with deviations growing as s→1. This predicts a specific nonlinear correction, which is a candidate distinguishing signature.
- **T3 (the actual test of "attraction"):** test-pattern acceleration is directed toward the core, with sign independent of P's composition, and scales as 1/r².
- **Not claimed yet:** G's value, the equivalence principle, EM sign flips, and nuclear ranges. Those are Round 2+ and I concede they are currently unsupported.

## 5. Status
**Narrowed.** I defend only a conditional claim: if T3's direction holds, T1 and T2 follow from standard potential theory. T3 is the crux, and I expect the Challenger to attack it.