# PREREG — does the grid's frame-locked ℓ = 4 p⁴ term survive SME d = 6 bounds and direction-dependent thresholds?

Written 2026-11-26 (explorer) **before** any script for this topic exists and **before** the literature lookup
(Data Tables values, KM3-230213A direction, Auger/TA multipole limits) has returned.

Topic: `topics/does-the-grids-cubic-anisotropic-p4-term-survive-sme-d6-and-uhecr-direction-data.md`.
Maintainer stake: (a) corner-only stencil at λ = 1 is excluded by an existing anisotropic d = 6 photon bound once
translated; (b) the isotropic-error stencil at λ = √3/2 (η ≡ −1/48) survives the SME tables and meets the 11-22
threshold-reach result unchanged.

Stencils carried: (a) corner-only, λ = 1; (M) the product [¼,½,¼]³ stencil, λ = 1 (least anisotropic λ = 1 stencil,
η = −Σ_{i<j} n_i²n_j²/12); (b) isotropic-error, λ = √3/2.

Convention: E² = p² + m² + η(n̂) p⁴/M_Pl², M_Pl = 1.22×10¹⁹ GeV. SME photon (Kostelecký & Mewes 2009):
ω ≈ p(1 − ς⁰), ς⁰ = Σ_jm p^{d−4} Y_jm c^(d)_(I)jm, so Σ_jm Y_jm c^(6)_(I)jm = −η(n̂)/(2M_Pl²) (sign/direction
convention to be checked against the paper).

## Predictions
- **P1 (≈ 90 %).** The d = 6 nonbirefringent photon bounds in the Data Tables are time-of-flight (or similar) and sit
  ≥ 10¹³ above the grid's |c^(6)_(I)jm| ~ 10⁻⁴⁰–10⁻³⁹ GeV⁻² for every stencil. Both (a) and (b) survive the tables. The
  maintainer's stake (a) is refuted.
- **P2 (≈ 75 %).** A lattice Maxwell field on a staggered (Yee-type) grid with transverse-averaged differences
  d_i = 2 sin(k_i/2) Π_{j≠i} cos(k_j/2) reproduces the corner stencil's η(n̂) = −Σ_{i<j}n_i²n_j²/3 at O(k⁴), is stable
  up to λ = 1, and is nonbirefringent (both transverse polarisations share ω), so the birefringent d = 6 coefficients
  (the strongest photon bounds) are zero for it. The plain Yee scheme has the 7-point dispersion and is unstable at λ = 1.
- **P3 (≈ 70 %).** In collinear threshold reactions with a universal coefficient, every particle shares n̂, so each
  direction is the 11-22 isotropic problem with η = η(n̂). Self-consistently, cosmogenic photons are made only where
  photopion is on (|η(n̂)| below ~10⁻⁵ elementary, ~1.8×10⁻³ partonic), and there |η_γ| is far below the Auger
  photon bound (−0.015). So (a), (M) and (b) all survive the Auger photon bound once it is computed self-consistently.
- **P4 (≈ 65 %).** Fraction of sky where photopion stays on (partonic reading, |η(n̂)|·0.0055 < 10⁻⁵) is < 10 % for (a)
  and < 25 % for (M); zero for (b). Under pure protons from uniform sources this is a large ℓ = 4 (+ ℓ = 6, 8 …) arrival
  pattern; but pure protons are already excluded by the spectrum (11-22), so the arrival-direction test adds no
  composition-agnostic kill. Verdict expected: "no composition-agnostic arrival-direction test exists today".
- **P5 (≈ 55 %).** For a continuous-time Wilson-fermion neutrino (η_ν = 1/4 − Σn_i⁴/3), the fraction of grid
  orientations (Haar on SO(3)) for which KM3-230213A's arrival direction has η_ν(n̂) above the published superluminal
  bound (Yang et al. 2025, η_ν < 0.060) is 30–60 %. One event: excludes a fraction of orientations, not the stencil.
- **P6 (≈ 90 %).** Laboratory d = 6 tests (cavities, clock comparisons, nonrelativistic matter coefficients) are ≥ 10
  orders short of η ~ 0.1.

## What would change the posture
- P1 failing (a d = 6 bound within ~10³ of 10⁻³⁹ GeV⁻²) would make the maintainer stake right and the commitment a
  live bet in the photon sector.
- P3 failing would mean the Auger photon bound excludes some stencils composition-agnostically.
- P5 at ≳ 90 % would make the Wilson-ν reading close to excluded by one event.
