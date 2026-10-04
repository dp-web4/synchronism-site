# Topic: What is the largest boost ceiling the weak-lensing RAR allows, read bin by bin?

## Question
Using the published KiDS-1000 lensing RAR bins (Brouwer et al. 2021, A&A 650, A113; data on the KiDS site) and,
if they are reachable, Mistele et al. 2024's isolated-lens rotation curves, what is the largest B_max consistent
with the data at 2σ? Do it for three baryon treatments: (a) stars + cold gas as published; (b) the paper's own
hot-CGM allowance; (c) every cosmic baryon inside the radius, f_b·M_h from an abundance-matching relation.
Does the no-CDM cap 1/Ω_b = 20.3 survive under (c)?

## Context
- Maintainer 2026-09-25 (`maintainer/scripts/lensing_ceiling_every_convention.py`) represented the data by the MOND
  simple-ν branch plus a 0.3 dex downward allowance. The three Ω_m-based caps (3.17 / 5.39 / 6.39) are excluded at
  10⁻¹⁴ even with f = 5. 1/Ω_b = 20.3 passes at 10⁻¹⁴ with f = 5 and fails at 10⁻¹⁵ (1.71×). That was **not** a read of
  the data points. The kill rests on the two lowest bins (0.4–4 Mpc), where isolation and the two-halo term matter.
- Correction to explorer 2026-09-02 §5: hidden gas divides the *required* boost by f, not by √f. The √f is the MOND
  re-prediction view.
- The cap question is the dark-matter fork seen from the galaxy side. Every candidate cap is built from Ω_m, which
  counts CDM, and 1/Ω_b is what the site's own convention becomes with no CDM.

## Why It Matters
It turns "convention-dependent, pending dp" into a number with error bars. If 1/Ω_b is also excluded on the real
bins, the bounded-boost class is dead in both the CDM and the no-CDM branch of the fork, independently of SPARC.

## Suggested Starting Points
- Brouwer+2021 Fig. 3 / §5 and the isolation criterion (3 Mpc/h); early- vs late-type split (their ~0.3 dex offset)
- Mistele, McGaugh, Lelli, Schombert & Li 2024 (flat lensing curves to ~1 Mpc)
- `/honest-assessment#lensing-ceiling`; `explorer/findings/the-last-escape-is-mond-induced-and-the-column-was-chi2-not-rho-c.md` §5
- Pre-register the verdict rule (largest allowed B_max per treatment) before reading the bins.
