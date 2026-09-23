# PREREG — Density-keyed C(ρ) read as an ambient G_eff: does the Sun's motion through the Galaxy give a Ġ/G that lunar laser ranging already excludes?

Written 2026-09-23 (explorer), BEFORE the script exists and BEFORE fetching the LLR/ephemeris number.

## Why this test
TEST-02's density-keyed branch predicts γ_g ≡ 1 because the boost 1/C(ρ_ambient) is common to everything in one
volume. The corollary nobody has used: a common factor that is constant in *space* is not constant in *time* if the
volume moves. The Sun moves relative to the Galaxy's density field (U,V,W peculiar motion; ~20 km/s) and relative to
individual nearby stars. So G_eff(t) = G / C(ρ_s(x_⊙(t))) and Ġ/G = −(∂ln C/∂ln ρ_s)·(d ln ρ_s/dt).
Static-amplitude probes (wide binaries) need 10⁻³ precision; the time derivative is probed at ~10⁻¹³ yr⁻¹.

## Readings (tag every number)
- Force law: L2, ∇·[C∇Φ] = 4πGρ. For ℓ ≫ 30 AU, C is uniform over the Solar System, so Φ = Φ_N/C(t) quasi-statically
  and G_eff = G/C(t). Uniform C(t) has ∇C = 0 across the system, so an L3 striction term (∝ ∇C) adds nothing; the same
  G/C(t) holds under L3. Stated as assumption, not derived for L3 generally.
- C responds instantaneously to ρ_s (no stated relaxation time in any archive document). A relaxation time τ is the
  named escape; the script reports the τ needed.
- ρ_s = Gaussian-kernel-smoothed baryonic density, kernel width ℓ, centred on the Earth–Moon system. Includes the Sun
  (constant), smooth Galactic disc (moves), and discrete nearby stars (move). No dark matter (framework reading).
- ℓ grid: 30 AU … 300 pc (log). Lower edge from the 09-15 interplanetary result (ℓ ≳ outermost ranged orbit).

## C families (grid reused from maintainer/scripts/density_keyed_law_vs_interplanetary_medium.py)
- Framework floored: C = f + (1−f) tanh(γ ln(1+ρ/ρ_c)), f ∈ {0.089, 0.315}, γ ∈ {0.489, 2.0}, ρ_c ∈ logspace(3.2e−4,
  0.161, 12) ∪ {0.0039, 0.0079, 0.0735, 0.078} — PLUS the TEST-02 "Newtonian-null" windows (γ=0.489: ρ_c ∈
  [3.8e−5, 3.2e−4]; γ=2: [0.016, 0.030]) because those are the readings the TEST-02 card quotes.
- Refracted Gravity Eq. 4.1: ε = ε₀ + (1−ε₀)/2 [tanh(Q ln(ρ/ρ_c)) + 1]; elliptical (0.089, 0.47, 0.0083) and DiskMass
  disc (0.56, 0.92, 7.4e−4).

## Inputs (fixed now, from memory of standard values; any later correction is logged, not silently swapped)
- Solar peculiar motion (Schönrich+2010): U = 11.1 (toward GC), V = 12.24, W = 7.25 km/s. Sun at z = +20.8 pc.
- Disc: radial scale length R_d = 2.6 kpc (bracket 2.0–3.5). Local baryonic ρ₀ = 0.084 M☉/pc³ (McKee+2015), vertical
  profile: gas (0.041, sech² z0 = 2·h, h ∈ [75,150] pc) + stars (0.043, h ∈ [250,350] pc). The radial and vertical
  terms have OPPOSITE signs (moving inward raises ρ; moving up lowers it), so the smooth term is reported as a range
  including its minimum |value| over the brackets. If the brackets allow exact cancellation, the smooth term alone
  decides nothing and the verdict rests on the discrete term.
- Discrete stars: a hand list of the nearest massive systems (α Cen AB+C, Barnard's, Sirius AB, Wolf 359, Lalande
  21185, Luyten 726-8, Ross 154, ε Eri, Procyon AB, 61 Cyg AB) with distance, mass, radial velocity; plus a Poisson
  rms estimate (n★ ≈ 0.1 pc⁻³ incl. M dwarfs, σ_v ≈ 40 km/s) for ℓ where the list is incomplete.

## Bound and decision rule
- Bound: |Ġ/G| < 1×10⁻¹² yr⁻¹ — deliberately ~10× LOOSER than the best LLR/ephemeris numbers as I recall them
  (~10⁻¹³ to 10⁻¹⁴). The exact published value is fetched AFTER this file is committed and reported alongside.
- Per (C-law, ℓ) point: EXCLUDED if the discrete-star term OR the minimum-|smooth| term exceeds the bound. (Taking the
  minimum over the smooth brackets and not adding the terms is the conservative choice.)
- Headline statistic: for each C-law, ℓ_max(law) = largest ℓ on the grid that passes. Compare with the smallest ℓ the
  galaxy/GC fits need (smooth stellar profiles: ℓ ≳ 1 pc, stated in the 09-15 note; GC window: ℓ ≲ 10 pc).

## Predictions (made before running)
P1. At ℓ = 1 pc, every framework point with local C < 0.999 is EXCLUDED, by ≥ 10².
P2. The discrete-star term (α Cen dominated) exceeds the smooth Galactic term at ℓ ≤ 3 pc.
P3. The TEST-02 "Newtonian-null" windows are EXCLUDED at ℓ ≥ 1 pc: a 0.05–0.4 % static deviation implies ≳ 10⁻¹¹ yr⁻¹.
P4. The survivors at ℓ ≥ 1 pc are only laws saturated at the local density (γ = 2 with low ρ_c) — i.e. laws that are
    Newtonian in the solar neighbourhood to ≲ 10⁻⁴.
P5. For every law there is a small-ℓ survival region (Sun-dominated ρ_s ≫ knee), but its upper edge is < 1 pc for most
    of the framework grid, so it does not overlap the ℓ ≳ 1 pc galaxy-fit requirement.

## Not claimed
Not a refutation of the acceleration-keyed C_a (TEST-09/10's function): Solar-System g ≫ a₀ saturates C_a, and the
Galactic external field changes on 10⁸-yr timescales. This is a constraint on the density-keyed readings only (TEST-02
ρ-branch, GC window, RG). Count stays at 6 regardless of outcome; it is a scope/consistency result unless dp registers it.
