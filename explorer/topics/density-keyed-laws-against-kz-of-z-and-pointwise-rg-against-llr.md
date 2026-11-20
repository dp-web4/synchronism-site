# Topic: Density-keyed laws against the vertical K_z(z) profile, and pointwise Refracted Gravity against lunar laser ranging

**Priority: MEDIUM** (both are the "right statistic" for exclusions the site already quotes; one is a citable claim about
someone else's theory)
**Seeded:** maintainer 2026-11-20

## Question
1. **K_z(z).** Under the 1–10 pc smoothing the wide-binary and LLR items need, laboratory G is measured at the solar
   ρ_s, so a density-keyed boost's *amplitude* cancels from any midplane Oort analysis. What the data see is the boost's
   change with height. Run a proper vertical Jeans analysis, not a slab: predicted K_z(z) at several heights (0.3–1.5 kpc)
   for each density-keyed law, against published K_z(z) or Σ(<z) profiles. Which laws survive?
2. **Pointwise RG and LLR.** Refracted Gravity's ε(ρ) is read pointwise and sits inside the divergence,
   ∇·[ε∇Φ] = 4πGρ. Read pointwise at the Earth–Moon system it keys on the interplanetary medium (~0.1 M☉/pc³ at 1 AU,
   ∝ r⁻², varying by factors of several with solar activity). What does that predict for the Earth–Moon dynamics LLR
   measures (Ġ/G, or an anomalous radial term), at RG's published calibrations, under each in-repo reading of Eq. 4.1
   (/Q, Q·ln, Q·log₁₀)?

## Context
- Researcher simulated-visitor persona, 2026-11-20 (HIGH ×2). The site said the 2.7–10.5 boost at the Sun is
  "Oort-excluded" and that LLR kills "both RG calibrations (the pointwise, non-covariant reading)". Both were mis-scoped.
- Maintainer slab estimate (`maintainer/scripts/oort_vertical_gradient_density_keyed.py`, predictions committed
  before running, 3/4 held): at the archive knee 0.028·V^0.5, unfloored, Σ_dyn(1.1 kpc) ≈ 890–1860 against Bovy & Rix's
  68 ± 4 (≈ 10σ). The affine Ω_m floor at γ = 2 passes (69–81); at γ = 0.489 it falls 2–3σ short; the one-global-knee
  +2843 fit passes (61–67). The slab ignores the radial term, uses one datum, and the gas column is recalled.
- The site now prints the LLR item as "a pc-smoothed algebraic G·f(ρ_s) at RG's knee values; RG as published is not
  tested". The pointwise check on file is 2026-09-15's Earth-vs-Saturn GM test (RG passes only for Q ≲ 3.7×10⁻⁷ at a loose
  10⁻⁶), which is a different observable.

## Why It Matters
- (1) decides whether "Oort-excluded" can be quoted for any density-keyed form beyond the unfloored archive knee. The
  floored γ = 0.489 under-prediction is a sign, not a significance, until the profile is fitted.
- (2) is a test of Matsakos & Diaferio's theory as published. If it excludes RG it is a citable result about other
  people's theory; if not, the site should say RG survives LLR pointwise.

## Suggested Starting Points
- The maintainer script above (shape grid, identity control: midplane density recovered exactly for every law).
- Bovy & Rix 2013 (ApJ 779, 115): Σ(1.1 kpc) = 68 ± 4, stars 38 ± 4 (abstract). McKee, Parravano & Hollenbach 2015 (ApJ
  814, 13): baryonic column 47.1 ± 3.4, all-matter midplane 0.097 ± 0.013, DM 0.013 (abstract). Read the gas column and
  the scale-height tables in the papers rather than recalling them.
- `maintainer/scripts/density_keyed_law_vs_interplanetary_medium.py` (09-15) for the solar-wind density model and the
  three Eq. 4.1 readings (`maintainer/scripts/gc_rg_permittivity_form_check.py`).
- Hofmann & Müller 2018 for what LLR constrains besides Ġ/G.

## Guards
- Register predictions and the pass/fail rule before running. Start with an identity control: C = const must reproduce
  Newton (no DM) exactly.
- For (2), do not use the pc-smoothed rate formula. The pointwise field is set by the local medium, which is not the
  stellar neighbourhood.

## Explorer addendum 2026-11-20 — Q2 done (re-posed), Q1 still open
- Q2 is answered in `findings/rg-as-published-has-a-smoothing-length-where-its-galaxy-fits-apply-llr-excludes-it-the-surviving-window-is-sub-parsec.md`
  (PREREG `4167dd5`). RG as published smooths ρ over a free length D (M&D 2016 §2.2, "tens of AU or larger"), so the
  "pointwise" reading is disclaimed by its authors. The pointwise answer is still a ≳10⁵ kill, but the citable result is the
  D map: at D ≳ 2 pc, where the fits apply, LLR excludes every calibration except DMS joint at ≳ 30 pc, which dSphs exclude.
  Local tests pass only at D ≈ 0.03–0.3 pc, where the fits were never computed.
- **For Q1** (left queued), the inputs are read from McKee+2015 Tables 1–3 rather than recalled:
  - Σ_b,1.1 = 43.8 ± 3.4 (not the 47.1 total);
  - ρ_b0 = 0.084;
  - gas n̄_H(z): H₂ 0.15 e^−(z/105)², CNM 0.80 e^−(z/127)², WNM1 0.13 e^−(z/318)², WNM2 0.077 e^−z/403, HII 0.0154 e^−z/1590;
  - stars 0.043 with thin h ≈ 300–400 and thick β = 0.1, h₂ 0.9–1 kpc;
  - ρ_b(1.1 kpc) ≈ 0.0014–0.003 M☉ pc⁻³.
