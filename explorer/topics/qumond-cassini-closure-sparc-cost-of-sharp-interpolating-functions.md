# Topic: Is Cassini + SPARC a QUMOND-class closure? The SPARC cost of the sharp interpolating functions that pass Cassini

**Priority:** HIGH. It decides whether TEST-25 is a transferable class null or just an inherited row.
**Seeded:** 2026-09-17 (maintainer)

## Question
TEST-25's own Q₂ instrument (`Synchronism/simulations/sparc_cassini_q2.py`) now shows that both interpolating-function
families have the same structure. The RAR-preferred members fail Cassini: McGaugh's RAR ν at +15.9 to +20.9σ,
Milgrom's simple ν at +15.3 to +20.1σ, and the compander at γ = 0.489 at +17.95σ. The sharp members pass: the δ-family
only at δ = 4 (3 of 6 grid points), and the compander at γ ≳ 1.5–2 (post-hoc, a₀-dependent). **What does SPARC charge
for the sharp members?** If every Cassini-passing member of either family costs ΔBIC ≫ 10 on the frozen SPARC
likelihood, then no scale-universal QUMOND interpolating function fits both, whether or not it is Synchronism's.

## Context
- Maintainer 2026-09-17, pre-registered at `43a66a3`. Output:
  `maintainer/scripts/cassini_q2_mond_interpolating_functions_output.txt`.
- A graduate-physics visitor persona showed that /galaxy-plotter's "McGaugh ν is Cassini-safe" confused the
  Newtonian-return tail at Saturn with the external-field quadrupole, which is set near 7000 AU. The site's HA claim that
  "MOND picks a different μ and survives" is withdrawn.
- Desmond, Hees & Famaey 2024 (MNRAS 530, 1781) report that the RAR prefers δ ≈ 1 and Cassini needs δ ≳ 2.5, at 8.7σ
  marginalized. On this unmarginalized instrument the threshold is δ ≈ 4. Why the two differ (marginalization, a₀,
  g_ext) is part of the question.

## Concrete asks (pre-register first)
1. Profile a₀ on the frozen SPARC likelihood (`Research/preregistrations/sparc_cassini_tanhlog/sparc_profile.json`
   pipeline) for δ ∈ {1, 2, 2.5, 3, 4, 6}. Report ΔBIC vs δ = 1 and Cassini z at the profiled a₀.
2. Do the same for the compander at γ ∈ {0.6, 1, 1.5, 2}. The γ = 2 point should reproduce +184.
3. Joint verdict per family: is there any member with SPARC ΔBIC ≤ 10 **and** Q₂ inside the Cassini 95% interval, at
   every registered g_ext?
4. Controls:
   - δ = 1 SPARC fit reproduces McGaugh's a₀.
   - The compander γ = 0.489 point reproduces TEST-25.
   - Instrument benchmark passes.

## Why it matters
If both families close, TEST-25 is a clean, benchmarked class result: no universal QUMOND interpolating function fits
both the RAR and Cassini. It is citable on the program's own instrument, and it becomes something the program found
rather than something it merely inherited. If δ ≈ 4 survives SPARC, MOND really does have an escape the compander lacks,
and the withdrawn asymmetry comes back on evidence.

## Starting points
- `Synchronism/Research/proposals/cassini_root_is_fully_shared_and_a2acw_should_code_its_correction_trail_20260917.md`
- /tier-1-existing#TEST-25, /honest-assessment (TEST-25 classification box), /galaxy-rotation (Solar System box)
- `explorer/scripts/compander_family_aic_bic_real_sparc.py` (the SPARC profile source)
