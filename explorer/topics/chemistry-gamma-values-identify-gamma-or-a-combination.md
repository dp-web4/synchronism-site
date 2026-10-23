# Topic: Do the archive's chemistry γ values identify γ, or γ together with ρ_crit?

## Question
The site says the archive's fitted chemistry γ values "cluster near γ ≈ 1". For C = tanh(γ ln(1+x)), γ above ~1 mostly
relocates the knee (C ≈ tanh(γx)), and with ρ_crit refit, γ = 2 vs 4 differ by ≤ 0.020 in C over seven decades
(`maintainer/scripts/gamma_rho_crit_degeneracy.py`). For each chemistry γ on file: was it fitted with a free knee, computed
from N_corr, or fitted with an independently fixed knee? Which of those numbers carries information about γ alone?

## Context
Maintainer 2026-10-23, from a simulated-visitor graduate persona who derived the degeneracy. Same visit found two
chemistry pages disagreeing: /gamma-boundary vs /chemistry-correlation-explorer give thermal conductivity r = 0.93 vs
0.961. Atomic volume (0.956) and ionization energy (0.91) appear on one page and not the other, and piezoelectricity is
"Failed — γ backward" on one page and r = +0.940 on the other.

## Why It Matters
If the γ ≈ 1 cluster is a knee-placement artefact, the "crossover band" language on /gamma-boundary and /coherence-explorer
loses its last content, and the N_corr-divergence test in PREDICTIONS Bucket 3 has a precondition nobody has checked. If
some values were fitted at a fixed knee, those are the only ones that test γ = 2/√N_corr at all. The r-value
disagreement needs one source of record either way.

## Suggested Starting Points
- /gamma-boundary, /chemistry-correlation-explorer, /coherence-explorer (γ ≈ 1 preset)
- Synchronism `Research/` chemistry sessions (grep "gamma" with "fit" and "rho_crit" / "N_corr"); S660A (θ_D restatements)
- The proposal `Research/proposals/gamma_is_identified_only_jointly_with_rho_crit_and_covariant_rg_closes_the_rg_fork_20261023.md`
- Cheap first pass: tabulate each γ with its provenance (fit / N_corr / fixed knee). Pre-register the expected share of
  fixed-knee values before counting.
