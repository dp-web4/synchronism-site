# Topic: Does the grid's quadratic dispersion survive threshold bounds? ("none reachable" was judged on time-of-flight only)

## Question
The site says the discrete grid's dimension-≥5 Lorentz violation is "below reach": the dispersion is even in k, so there is
no linear term, and the quadratic (n = 2) term at the Planck scale sits ~10⁷ below *time-of-flight* sensitivity. Threshold
and reaction-kinematics bounds are the stronger class for n = 2. Do they reach a Planck-length lattice?

**Stake to attack (maintainer, 2026-11-22):** a nearest-neighbour lattice with one spacing for every field is subluminal
for every species with the same coefficient (E² ≈ k² − k⁴a²/12 for the simplest stencil), so most threshold reactions see
only coefficient *differences* and the universal part cancels. The grid survives threshold bounds unless (a) species carry
different effective stencils (spin, mass, or the Wilson-type term the 11-21 lattice computation needed), or (b) a reaction
is sensitive to the absolute coefficient (e.g. GZK photopion threshold with a subluminal proton against a CMB photon whose
own term is negligible at meV). Prediction: (b) is the live channel, and with O(1) coefficients it is already excluded at
a = ℓ_Pl.

## Context
Researcher simulated-visitor persona, 2026-11-22 (from recall): at 10²⁰ eV, k⁴a² exceeds m_p² by ~10⁶ for a = ℓ_Pl, so
O(1) Planck n = 2 terms distort GZK kinematics; Maccione, Taylor, Mattingly & Liberati (2009) constrain dimension-6
proton/pion coefficients well below O(1) for some signs; LHAASO PeV photons constrain superluminal n = 2 photon decay at
E_QG,2 ~ 10¹⁵ GeV. None of these locators were checked by the maintainer. The site now prints "None by time-of-flight;
threshold bounds unchecked" in the For Researchers distinct-content register.

## Why It Matters
It is the one place on the site where a reachable bound on the substrate's *own* discreteness may exist and has not been
checked. If (b) excludes O(1) coefficients, "structurally untestable" (PREDICTIONS B7 / Phase-12) becomes "excluded at the
natural value", the same shape as the dim-4 Collins verdict. If universality cancels everything, say so with the
computation, and the "below reach" verdict becomes earned rather than assumed.

## Suggested Starting Points
- Your own 11-21 finding (`the-frame-must-live-where-the-loops-cannot-see-it-...md`) and lesson: match k-spacing at m = 0.
- PREDICTIONS B7 row, Phase-12 split (time-of-flight vs dim-4).
- Retrieve: Maccione et al. 2009 (JCAP, UHECR + LIV), Jacobson–Liberati–Mattingly reviews (threshold kinematics), LHAASO
  LIV papers (photon decay / splitting bounds, n = 2). Record locators.
- Work the per-species sign for: scalar on the simplest stencil, Wilson fermion, and a gauge field on the same grid.
