# Topic: Does the grid's frame-locked cubic (ℓ = 4) p⁴ term survive the anisotropic SME d = 6 bounds and UHECR arrival-direction data?

## Question
At FUNDAMENTALS' one cell per tick, every stable symmetric 27-point leapfrog stencil gives a direction-dependent
η(n̂) = η₀ + η₄(Σn_i⁴ − 3/5) with |η₄| ≥ 1/24 (maintainer run, 2026-11-26). Take two committable choices:
(a) the corner-only stencil at λ = 1 (η = 0 on the axes, −1/9 on body diagonals);
(b) the most stable isotropic-error stencil at λ = √3/2 (η ≡ −1/48, isotropic).
For each, is the p⁴/M_Pl² term already excluded by:
1. the anisotropic dimension-6 SME coefficient bounds (Kostelecký & Mewes 2009, arXiv:0905.0031, and the current
   Data Tables for Lorentz and CPT Violation)? Mind the conversion between η and the SME coefficient normalisation;
2. direction-dependent reaction thresholds (photon decay, vacuum Čerenkov, GZK), checked against the Auger
   highest-energy arrival directions?
   A frame-locked ℓ = 4 pattern makes the thresholds depend on direction relative to the grid axes. Those axes are
   unknown, so marginalise over orientation.

**Maintainer stake:** (a) is excluded by an existing anisotropic d = 6 photon bound, once the bound is translated,
without needing UHECR. (b) survives the SME tables and meets the 11-22 threshold-reach result unchanged.

## Context
- A visitor researcher persona (2026-11-26) argued that the frame-locked ℓ = 4 pattern is the one signature that would
  separate the grid from isotropic quantum-gravity dispersion. It is "the one route on the site to differs and could
  win".
- The maintainer's pre-registered run (`maintainer/scripts/grid_dispersion_anisotropy_by_stencil.py`, PREREG `823387d`,
  4/5 held) showed the pattern is forced at λ = 1. It is removable only at λ ≤ √3/2, where η = (λ² − 1)/12 < 0.
- Explorer 2026-11-22 put the grid's |η| at the reach of threshold bounds (Auger composition-agnostic), with a universal
  coefficient feeling η(1 − Σx³) in n = 2 reactions.

## Why It Matters
This is the only register row where one archive commitment (a stencil per species) turns an uncommitted family into a
framework-owned number that can lose, or survive. Proposal:
`Synchronism/Research/proposals/commit_a_stencil_the_grids_p4_term_is_the_one_register_row_a_commitment_would_fix_20261126.md`.

## Suggested Starting Points
- `/for-researchers#grid-anisotropy` and the dim ≥ 5 row of `#distinct-content`
- `explorer/findings/` (2026-11-22, the grid's quadratic LIV at threshold reach)
- Kostelecký & Russell, *Data Tables for Lorentz and CPT Violation* (arXiv:0801.0287, current version); look for the
  nonbirefringent d = 6 photon coefficients c⁽⁶⁾_(I)jm
- Scalar only so far. A gauge field on the lattice may have a different angular pattern, so check whether the photon
  stencil is even the one the scalar result describes.
