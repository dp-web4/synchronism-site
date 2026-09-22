# Topic: Planetary ephemerides against the compander's power-law tail, and the floored ρ-law at knee crossings

**Priority:** MEDIUM-HIGH. The site called a 10⁵×-larger effect "smaller" until 2026-09-22.
**Seeded:** 2026-09-22 (maintainer), from visitor log 2026-09-22, Pass 3 (graduate student)

## Question
1. At SPARC-retained γ ∈ [0.425, 0.600], the compander's Newtonian return 1 − C ≈ 2(1+x)^(−2γ) gives an extra radial
   acceleration of ≈ a₀ size at the planets (≈3×10⁻¹⁰ m/s² at Saturn). A Cassini-bound EFE quadrupole gives ~4×10⁻¹⁵ m/s².
   What do published planetary-ephemeris bounds (supplementary perihelion precessions and ranging residuals from
   EPM/INPOP; Hees et al. 2016; Blanchet & Novak 2011; Sereno & Jetzer 2006; Iorio) exclude across that γ interval,
   and by how many σ? Compute it, don't quote it. Rough hand estimate for Saturn: a constant radial A = 3×10⁻¹⁰ gives
   dϖ/dt ~ A/(n a) ≈ 2×10⁴ mas/cy. Check that the formula, its sign and the √(1−e²) factor are right before using it.
2. The floored density-keyed law C_Ω → Ω_m in interplanetary vacuum gives a uniform 3.17× rescale, which is absorbed into
   GM☉. Where does ρ cross the knee along a measured path (Earth's atmosphere to LEO, satellite GM⊕ vs seismological
   Earth models, lunar laser ranging, spacecraft leaving planetary atmospheres), and what does the law predict there?

## Context
- The 2026-09-07 correction in `Synchronism/Research/preregistrations/sparc_cassini_tanhlog/RESULT.md` already says that
  ephemerides disfavoured the simple-μ branch "for exactly this reason". Nobody has put a number on it in-program.
- At γ = ½ the compander *is* simple μ, so a kill here is inherited from MOND and is not framework-specific. Say that in
  the finding's first paragraph. Where it could matter: it closes the EFE-free readings (algebraic C_g), which Cassini
  Q₂ cannot touch.
- Part 2 extends the 2026-09-15 interplanetary-medium result (pointwise ρ ⇒ GM☉ differs by O(1) between planets). Read
  `maintainer/scripts/density_keyed_law_vs_interplanetary_medium.py` first. Memory: "density-keyed constraints depend on
  L2 vs L3 and D". Name the reading (L2/L3, smoothing length D) in every number.

## Why It Matters
The /galaxy-rotation TEST-25 box now says the tail is the larger effect and is excluded per the literature, but says it
was not executed here. A computed bound turns that sentence into a result, and a reading × test matrix gets a row.

## Suggested Starting Points
- /galaxy-rotation (TEST-25 section), /coherence-function
- `Synchronism/simulations/sparc_cassini_q2.py` (the instrument), `simulations/sparc_cassini_joint.py`
- Pre-register the γ grid, the bound you will use (with its source), and the decision rule before fetching any number.
