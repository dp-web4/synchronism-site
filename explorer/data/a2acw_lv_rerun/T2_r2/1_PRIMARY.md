# Round 1: Primary (Defender)

## 1. Mechanism claim (falsifiable)

> In a 3D lattice with conservative, saturation-limited Intent transfer, a pinned high-saturation core that sustains a steady throughput Q against a baseline sink produces a far-field profile ΔI(r) ∝ Q/r. A probe pattern's net drift bias then scales as 1/r², with 1/r in a 2D lattice, and the profiles of multiple sources superpose in the low-saturation far field.

This is stronger than the whitepaper's wording, and I'm adopting that deliberately. The whitepaper says "Φ ∝ M/r from spherical spreading," which is an assertion. The defensible version needs a conservation law plus a steady state, and it makes a dimension-dependent prediction that can fail.

## 2. Operational variables

- **Intent concentration I(x,t):** a scalar per cell, with 0 ≤ I ≤ I_max. Total Intent is conserved by transfer except at declared sources and sinks.
- **Saturation s = I/I_max:** the dimensionless fill fraction.
- **Transfer rule:** the flux between neighbors is J = −D(I)∇I, with D(I) = D₀/R(I), where R is the resistance function. R(I) → ∞ as I → I_max, so D → 0. The whitepaper has not fixed R(I), so I treat it as a free function and require that results be insensitive to its form in the far field, where R ≈ R₀.
- **Core:** cells held at s ≈ 1 by a source term. Q is the measured steady-state outward flux through a shell (a measurable, not an assumed, quantity).
- **Baseline:** a far boundary or sink holds I = I_b.
- **Gradient Φ(r) = ⟨I⟩_shell(r) − I_b:** the shell average over radius r.
- **Transfer bias B:** for a probe pattern with its own internal Intent exchange, B = (outflow toward the core − outflow away) / (total outflow), measured over many stochastic transfer events. This is the "statistical asymmetry."
- **Observable:** the mean drift of the probe's centroid, ⟨Δx⟩ per tick, as a function of r.

## 3. Why the mechanism plausibly gives 1/r

In steady state, ∇·(D(I)∇I) = 0. Apply the Kirchhoff transform Ψ = ∫D dI. Ψ is harmonic, so Ψ ∝ Q/r in 3D. Where D ≈ D₀ (far field), ΔI ∝ Q/r follows directly. Saturation matters only near the core, where it sets the core radius and lets the core persist. So the 1/r comes from conservation plus a steady state, and saturation supplies the stable source.

## 4. Minimum known-physics match

1. **Exponent:** fit B(r) or |∇Φ| ∝ r^(−n) over at least one decade of r in the far field. Pass criterion: n = 2.0 ± 0.1 in 3D and n = 1.0 ± 0.1 in 2D.
2. **Superposition:** two cores at separation d give a far-field gradient equal to the vector sum of single-core gradients, with residual below 5% outside 3d.
3. **Test-body drift:** for a given probe, the drift scales linearly with Q.

## 5. Concessions up front

- **M is not stored Intent.** In this model the "mass" is the throughput Q (or the core's pinned boundary condition), not the total Intent in the pattern. I must show that Q correlates with something mass-like, or the claim fails.
- **Probe dynamics are first-order.** Bias gives a drift velocity ∝ −∇Φ, not an acceleration, which is Aristotelian rather than Newtonian. A second-order structure (probe momentum or inertia) is not in the whitepaper. I'll flag this as open and not claim it.
- **Equivalence principle** (probe-mass independence) is not yet derived.
- **G, R(I), and EM/nuclear sectors** are out of scope for this round. I'm defending only the gravity-like sector.

## Questions for the Challenger

1. Is the Round 1 pass/fail target (exponent plus dimension-dependence plus superposition) a sufficient minimum "known quantitative match," or do you want a harder one, such as orbital precession or a 1/r² law that holds without a continuous sink?
2. Does the "pinned source plus sink" requirement already disqualify the pattern as a closed stable entity, in your view?