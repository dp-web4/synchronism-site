# Topic: Density-keyed gravity is not EFE-free. It refracts the external field, and in globular clusters that may set the truncation radius.

**Priority: HIGH** (it sits under one of the five "citable" results on /for-researchers)
**Seeded:** maintainer 2026-09-16

## Question

Under the field equation ∇·[C(ρ)∇Φ] = 4πGρ (L2, which the site's solver and Refracted Gravity use), the law is linear
in Φ, so an external field superposes. It is **not** absent. Inside a body whose C varies (anywhere its density
crosses the knee), the superposed field is non-uniform, and stars feel a **differential external acceleration linear
in g_ext**. The site says "a density-keyed law has no external field to appeal to" and "EFE = 0 exactly". Those hold
only for the algebraic reading (g = g_N/C) or for a body with uniform C.

**How large is this term inside real Galactic globular clusters, and what does it do to (a) the outer-dispersion-slope
window (ρ_c ∈ 0.1–300 M☉/pc³ excluded at γ = 0.489), and (b) cluster truncation radii?**

## Context

- Visitor researcher persona 2026-09-16 estimated it by the dielectric-sphere analogy: interior ≈ 0.58 g_ext, graded
  shell ~0.4 g_ext, which is comparable to a 2×10⁵ M☉ cluster's own gravity at 20 pc.
- Maintainer order-of-magnitude check, same day: `maintainer/scripts/gc_external_field_refraction_estimate.py`
  (+ `_output.txt`). This is **not** a pre-registered test. I wrote the expectation first: residual 0.2–0.5 g_ext, and
  comparable to own gravity somewhere in the outer-slope range.
  - Setup: Plummer, M = 2×10⁵ M☉, a = 3 pc; floored tanh-log with floor 0.315; g_ext = 1.57×10⁻¹⁰ m/s² (R_GC = 10 kpc).
    The ODE was solved exactly for the l = 1 mode, with f = r·u.
  - Beyond the knee, the non-uniform part of the external field is **0.29–0.37 g_ext** at every tested (γ, ρ_c).
  - Its ratio to the cluster's own gravity is **0.25–0.67 at 20–30 pc** and **>1 by ~35–40 pc**. At that R_GC the
    Newtonian Jacobi radius is ~80 pc.
  - The expectation holds. **Caveats:**
    - The term is dipolar, so it cancels at first order in any angle-averaged dispersion profile.
    - Its signature is anisotropy and truncation, not the slope, and none of that was computed.
    - One cluster mass and one R_GC only.
    - The "cluster acceleration" reference is ambiguous under L2, which has no momentum conservation. The core value and
      the mass-weighted mean are both reported, and they give the same picture.
- Explorer 2026-09-15 computed the **net** force (the bubble factor F = 3ε_out/(ε_in+2ε_out)). This topic is the
  **internal, differential** part of the same field, which that finding did not compute.
- Maintainer topic `efe-null-as-a-class-test-for-linear-permittivity-gravity.md` (09-11) assumed "the internal solution
  is independent of any external field" for the whole class. Superposition does not imply that when ∇ε ≠ 0 inside the
  body. Re-read that topic's premise in this light.
- `Synchronism/simulations/efe_locality_vs_phi_dependence.py` (2026-08-24) reports EFE = 5.6×10⁻¹³ for a Φ-independent C.
  **Check what it subtracted.** If it removed the refracted external solution, the zero is superposition restated, not an
  absence of relative internal acceleration.

## Why It Matters

- The GC window is on /for-researchers as a citable form. If the refraction term moves it, the citation is wrong in
  either direction.
- **A possible new, framework-independent observable for the whole ε(ρ) class, RG included:**
  - GC truncation radii that scale **linearly with g_ext** (refraction), instead of Jacobi's (M/M_gal)^{1/3}·R_GC;
  - with a predicted **dipolar outer-halo asymmetry** aligned with the Galactic field.
  - Baumgardt's catalogue and Gaia tidal-tail data exist. That would be a real test of L2 dynamics, not of a knee.
- Under L3 (with the striction force) the net bubble cancels exactly. **Does the differential part cancel too?** If not,
  L2 and L3 differ in a measurable, local way.

## Suggested Starting Points

- **Guard: pre-register before computing.** State the expected sign and size of the change in the outer-slope
  statistic, and the truncation-radius scaling.
- **Step 1.** Reproduce the maintainer estimate. Then add the l = 1 refracted field to the isotropic Jeans model the
  09-07 GC run used (`explorer/findings/scripts/` — the GC slope scripts):
  - (i) project along random sightlines and recompute the outer slope;
  - (ii) find the radius where the differential term equals own gravity, per cluster, using each cluster's R_GC and a
    Galactic model.
  - Correlate (ii) with catalogue tidal/King radii **against the Jacobi prediction**. That correlation is a test.
- **Step 2.** L3: add the striction force (08-26 finding; `l2_vs_l3_and_the_missing_striction_force.py`) and ask whether
  the differential term survives.
- **Control:** at uniform C (knee far below or far above the cluster) the residual must vanish identically. The estimate
  script already shows this for the core.
- **Prior art to check:** dielectric/magnetostatic inclusion fields in graded spheres (textbook, l = 1 mode);
  Bekenstein–Milgrom 1984 on composite bodies; any Refracted Gravity paper on GCs or satellites.
