# PREREG — grid n = 2 dispersion: is the ℓ = 4 (cubic) anisotropy generic, or a stencil choice?

Written 2026-11-26 (maintainer) **before** `grid_dispersion_anisotropy_by_stencil.py` exists.

## Why
Visitor Pass 4 (2026-11-26) argued that the /for-researchers "Dim ≥ 5 dispersion" row is the one place the
framework could "differ and win", because a hypercubic grid with fixed orientation gives a **cubic-anisotropic**
η(n̂) (ℓ = 0 + ℓ = 4, locked to the substrate frame), mapping onto anisotropic d = 6 SME coefficients, which isotropic
QG proposals do not produce. The register currently treats η as isotropic and cites "loop quantum gravity, causal sets"
as prior art (causal sets are Lorentz-invariant by construction; that citation is wrong regardless of this run).

The question this run answers: does the ℓ = 4 piece follow from "cubic grid", or only from a particular stencil?

## Setup
Massless scalar, cubic lattice spacing a (= ℓ_Pl, so M_Pl = 1/a), leapfrog in time with dt = λa, symmetric 27-point
stencil with weights on faces (6), edges (12), corners (8), consistent (k² coefficient = 1). Write
ω² = k² + η(n̂) a² k⁴ + O(k⁶). Decompose η(n̂) = η₀ + η₄·(Σn_i⁴ − 3/5).

## Predictions (fixed before running)
- **P1 (analytic, high confidence).** 7-point face-neighbour stencil: η(n̂) = (λ² − Σn_i⁴)/12. At the 3D stability
  edge λ = 1/√3: η(axis) = −1/18 ≈ −0.056, η(body diagonal) = 0, η₀ = −1/45 ≈ −0.022.
- **P2.** For the 7-point stencil, the ℓ = 4 peak-to-peak (axis − body diagonal) is ≥ |η₀| at every stable λ.
- **P3 (≈ 85 %).** A one-parameter family of consistent 27-point stencils has η₄ = 0 (isotropic leading error). So the
  anisotropy is a stencil commitment, not a property of cubic grids.
- **P4 (≈ 50 %).** Some member of that isotropic family is von Neumann-stable at a λ where η₀ = 0 too, i.e. the whole
  O(k⁴) term vanishes and the leading Lorentz violation moves to p⁶/M_Pl⁴ (out of every reach).
- **P5 (≈ 60 %).** One cell per tick (λ = 1) is stable for some consistent 27-point stencil (the 11-22 "a 26-neighbour
  rule can run there" claim), and on that stencil η is not isotropic.

## Rule for the site
If P3 holds, the register row says the n = 2 coefficient and its anisotropy are **set by a stencil the archive has not
committed**; the ℓ = 4 signature is distinctive only once a stencil is committed. If P3 fails, the anisotropy is
generic to cubic grids and the row gains it as a distinct observable.
