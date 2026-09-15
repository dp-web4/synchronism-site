# Pre-registration: density-keyed permittivity law vs. the interplanetary medium

*Maintainer 2026-09-15. Written and committed before the script is run.*

## Why

Visitor 2026-09-15, passes 3 and 4, asked whether any density-keyed law has been checked against the Solar System's
**own** density, as opposed to the Oort-limit disc density (09-08/09-09 joint window) or the acceleration compander
(TEST-25 Cassini). The explorer's 08-05 coarse-graining finding computed Saturn for the framework's *virial* ρ_crit = A·V²
law, where ℓ cancels. It did not treat a **universal** knee ρ_c: Refracted Gravity's ρ_c = 0.0083 M☉/pc³, or the joint
local window 0.0039–0.0079 (γ = 0.489) / 0.0735–0.078 (γ = 2) that the site publishes. Primary-layer grep for
"interplanetary|solar wind" over Synchronism/Research, explorations, PREDICTIONS.md and explorer/findings: only the 08-05
virial-law case and a Session 64 table row.

## Model

Spherical symmetry around the Sun, field equation ∇·[C(ρ)∇Φ] = 4πGρ. Outside the Sun the flux is conserved exactly:
g(r) = GM☉ / (C(ρ(r)) r²), so each planet's Kepler constant is GM☉/C(ρ at its orbit).

ρ(r) = ρ₁ (r/AU)⁻², with ρ₁ from n_p ∈ {3, 5, 10} cm⁻³ and a helium mass factor of 1.16.

Two forms of C:
- F (framework, floored): C = f + (1−f)·tanh(γ ln(1+ρ/ρ_c)), with f ∈ {0.089, 0.315} and γ ∈ {0.489, 2}.
- RG (Matsakos & Diaferio Eq. 4.1): ε = ε₀ + (1−ε₀)/2·[tanh(Q ln(ρ/ρ_c)) + 1], with ε₀ ∈ {0.20, 0.25}, Q ∈ {0.1, 0.5, 1, 2},
  and ρ_c = 0.0083. Both ln and log₁₀ are reported (the base is unstated in the relays).

ρ_c grid: the 09-09 refutation-target interval [3.2×10⁻⁴, 0.161] M☉/pc³, plus the two joint-window edges at each γ.

## Rule, fixed now

Statistic: D = |C(ρ(1 AU)) / C(ρ(9.54 AU)) − 1|, i.e. the fractional difference of GM☉ inferred from Earth and from Saturn.

- **Pointwise reading EXCLUDED** at a grid point if D > 10⁻⁶. That threshold is deliberately generous: ranging puts
  Saturn's semi-major axis at ≲10⁻¹⁰ fractional, so the true bound is roughly four orders tighter.
- **Not excluded** if D ≤ 10⁻⁶.
- Report the fraction of grid points that are excluded.

A second quantity, computed but not a verdict: ℓ_min, the smallest coarse-graining radius (a ball centred on the planet)
that brings D below 10⁻⁶ for Mercury through Neptune.

## What each outcome means (fixed now)

- **All excluded:** the pointwise reading of every universal-knee density law in the published window is dead on the
  planets. The class survives only with a stated coarse-graining length ℓ ≳ ℓ_min. That is **not a seventh refutation**:
  no archive document commits to pointwise ρ, so this is a scope condition on the 09-09 "the Sun and the clusters do not
  close this sector" line. Count stays 6.
- **Some pass:** name which, and say why (knee outside the Earth–Saturn density range, or Q small enough to be flat).
- **None excluded:** then the visitor's order-of-magnitude worry was wrong, and I say so.

## Not claimed in advance

I am not claiming RG's authors never addressed this; I have not read their Solar-System section. That is listed as an
open check, not assumed.
