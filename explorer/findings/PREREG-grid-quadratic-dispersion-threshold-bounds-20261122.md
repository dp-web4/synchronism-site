# PREREG — Does the grid's quadratic dispersion survive threshold bounds?

*Explorer, 2026-11-22. Written and committed before any computation, and before reading the literature retrieval
(a web subagent was launched for locators at the same time; its report has not been read when this is committed).*
Topic: `topics/does-the-grids-quadratic-dispersion-survive-threshold-bounds.md`.

## What prior work covers (not re-done)
PREDICTIONS B7 Phase-12 (n = 2 time-of-flight "~10⁷ below reach"; archive verified the 1D continuous-time stencil
ω² = k² − a²k⁴/12); explorer 11-21 (dim-4 δc² on anisotropic lattices; Wilson fermion; match k-spacing at m = 0).
Nobody has (a) worked the threshold kinematics for the grid, (b) asked which time discretisation FUNDAMENTALS commits to
and what sign it gives, or (c) checked the committed tick/spacing ratio against stability.

## The maintainer's stake, and my counter-stake
Maintainer: a nearest-neighbour grid is subluminal for every species with the same coefficient, so most threshold
reactions see only coefficient differences; (b) the GZK absolute-coefficient channel is live and excludes O(1) at a = ℓ_Pl.

Counter-stake (mine): the "universal part cancels" mechanism is wrong for n = 2. Only n = 0 (a universal speed shift)
cancels. For n = 2 the per-particle energy correction is ∝ η p³, which is convex, so splitting momentum among products
changes the total; any reaction whose final momentum fractions x_i are not (1, 0, …) feels η(1 − Σ x_i³). Separately, the
sign is not fixed by "nearest-neighbour": it depends on the time discretisation, and FUNDAMENTALS (tick = t_Pl,
spacing = ℓ_Pl, simultaneous neighbour update) fixes the Courant number at λ = cτ/a = 1, which a 3D face-neighbour
(7-point) leapfrog cannot run stably.

## Computations and predictions
Units: c = 1, E² = p² + m² + η a² p⁴ (η is per-direction, k̂-dependent on a cubic grid).

- **C0 (identity control):** 1D leapfrog at λ = 1 has ω = k exactly; |η| < 1e-8 numerically.
- **P1 (low-k coefficients, exact dispersions, no expansion; within 1 %):**
  - S1 scalar, 7-point Laplacian, continuous time: η ∈ [−1/12 (axis), −1/36 (body diagonal)].
  - S2 scalar leapfrog λ = 1: η ∈ [0 (axis), +1/18 (diagonal)] (superluminal off-axis).
  - S3 scalar leapfrog λ = 1/√3: η ∈ [−1/18 (axis), 0 (diagonal)].
  - F Wilson fermion r = 1, continuous time, m → 0: η ∈ [−1/12 (axis), +5/36 (diagonal)] (mixed sign by direction).
- **P2 (stability):** 3D 7-point leapfrog at λ = 1 is unstable for a fraction of the Brillouin zone in [0.5, 0.8]
  (modes with Σ sin²(k_i a/2) > 1). Any explicit face-neighbour rule has an octahedral domain of dependence, so isotropic
  propagation at one cell per tick is impossible; the isotropic maximum is a/(√3 τ).
- **P3 (universality does not cancel):** for a universal η, exact numerical solution of energy–momentum conservation with
  the exact lattice dispersion reproduces the analytic thresholds to < 1 %: γ → e⁺e⁻ needs (3/4)η a²k⁴ ≥ 4 m_e²;
  vacuum Cherenkov p → pγ needs 3 η a² p⁴ ≥ m_p² (η > 0); GZK photopion shift ∝ η(1 − x_p³ − x_π³) ≈ 0.34 η.
- **P4 (elementary reading, compositeness S = 1, guess 65 %):** the universal-subluminal reading (|η| ≥ 1/36) at
  a = ℓ_Pl is excluded by at least one published threshold bound by ≥ 1 order of magnitude.
- **P5 (composite reading, guess 50 %):** a hadron's effective coefficient is η·S with S = Σ x_i³ over its constituents
  (S ∈ [1/N², 1] for N constituents). There is a threshold S* below which no hadronic bound bites, and S* ∈ [1e-3, 1e-1].
- **P6 (guess 50 %):** with mixed UHECR composition, the photon sector constrains the grid at least as strongly as the
  hadronic GZK channel (the maintainer's ranking puts GZK first).

## What would break the counter-stake
P3 fails (universal η gives no threshold shift) → the maintainer's cancellation mechanism stands.
P1 S2/S3 signs differ from predicted → my discretisation-dependence argument is wrong.
P2 fraction outside [0.5, 0.8] → the range was a guess; the instability itself fails only if the fraction is 0.
