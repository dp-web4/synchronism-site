# PREREG — Cassini Q₂ for MOND's own interpolating functions (maintainer 2026-09-17)

Written and committed **before** computing.

## Question
The site books TEST-25 (Cassini/SPARC squeeze) as "inherited from MOND", but three pages disagree about why:
- /galaxy-plotter calls McGaugh's RAR ν = 1/(1 − e^(−√y)) "Cassini-safe".
- /galaxy-rotation argues via the Newtonian-return tail at Saturn (e^−707).
- /honest-assessment says MOND "picks a different μ and survives".

A graduate-student visitor persona (2026-09-17) points out that Cassini constrains the external-field-induced
quadrupole Q₂. Q₂ is set near the Sun's MOND radius, ~7000 AU, where g ~ a₀, so it depends on the interpolating
function (IF) in the transition, not on its tail at Saturn. The δ = 1 member of the δ-family
ν_δ(y) = [1 − exp(−y^(δ/2))]^(−1/δ) is McGaugh's RAR ν. Desmond, Hees & Famaey 2024 (the site's citation) put that
family in 8.7σ tension. The question: **what does TEST-25's own instrument give for MOND's IFs?**

## Instrument
`Synchronism/simulations/sparc_cassini_q2.py` is the TEST-25 instrument. Its benchmark mode reproduces Desmond+2024's
q for `nu_rar` to 0.76%. I use `qumond_q` and `q2_si`, and the same Cassini interval (current: mean 1.6e−27,
σ 1.8e−27 s⁻²; z = (Q₂ − 1.6e−27)/1.8e−27). Default orders are 128 angular and 512 radial, with log_v_bound 14.

## Grid
- IFs:
  - McGaugh RAR ν (δ = 1)
  - n-family simple (n = 1) and standard (n = 2)
  - δ-family δ ∈ {1, 1.5, 2, 2.5, 3, 4}
  - the compander at γ = 0.489 (control; must reproduce TEST-25's +17.95σ at a₀ = 5.33265e−11)
- a₀ ∈ {1.20e−10 (McGaugh+2016 g†), 1.128e−10 (TEST-25's reference McGaugh a₀)} for the MOND IFs.
- g_ext ∈ {2.00, 2.32, 2.48} × 10⁻¹⁰ m/s² (TEST-25's registered values).

## Controls
- C1: the compander γ = 0.489 at a₀ = 5.33265e−11 and g_ext = 2.32e−10 gives z = +17.95 ± 0.05.
- C2: δ = 1 equals `nu_rar` to machine precision on a grid.

## Predictions (made before computing)
- P1: McGaugh RAR ν (δ = 1) **fails** the current Cassini interval at every (a₀, g_ext), at |z| ≳ 5.
  If it passes (z inside ±1.96), the "Cassini-safe" statement stands and the visitor is wrong.
- P2: Simple n = 1 fails more strongly than δ = 1.
- P3: Some δ in the family passes, near δ ≳ 2.5 as Desmond+ report.
- P4 (consequence for booking): if P1 holds, TEST-25 excludes the IF MOND actually uses on the RAR. The Cassini root
  is then shared with QUMOND at RAR-preferred IFs. HA's asymmetry sentence must be withdrawn or reduced to "MOND can
  pick δ ≳ 2.5 at a SPARC cost not computed here".

## Not tested
- The SPARC cost of δ ≳ 2.5 is not tested; that needs the frozen SPARC likelihood.
- AQUAL is not tested.
- Nothing here moves a bucket. The count stays 6.
