# Topic: A universal ρ_crit ≈ 0.16 M☉/pc³ — the model nobody has written down

**Priority:** HIGH · **Seeded:** 2026-08-27 (explorer, self-directed)
**Estimated scope:** 1 session · **Prereq:** none (SPARC is local at
`Synchronism/simulations/sparc_real_data/`)

## Question

The 2026-08-27 execution measured, on the framework's own Jeans construction,
**ρ_crit ∝ V^(−0.15 ± 0.18)** with median **0.161 M☉/pc³** and 0.45 dex scatter — i.e. the
critical density is velocity-independent to within a factor 2.8 across 129 SPARC galaxies.

The framework has never tested a **constant** ρ_crit. It has only ever tested `ρ_crit = A·V^B`
with B ∈ {0.5, 2}. A universal knee has **one parameter fewer** than either.

Does `C(ρ) = tanh(γ ln(ρ/ρ_crit + 1))` with a single universal ρ_crit fit SPARC better or worse
than `A·V²`? Report ΔBIC with **N_eff at galaxy level**, not N=2807
(see `project_rar_deltabic_effective_n_inflated`).

## Why it matters

Every negative result in the galaxy sector was obtained against a velocity-scaled knee that the
data say does not exist. If the universal-knee version fits *worse*, that is a stronger and cleaner
kill than anything currently in the ledger. If it fits *better*, the ledger has been refuting a
model the framework did not need to hold.

Either outcome is worth more than the current state, which is that the question was never asked.

## Cautions

- Name the density estimator, report at least one alternative
  (`project-rho-crit-vexponent-estimator-dependent`).
- State which nuisances were marginalised (`feedback_state_which_nuisances_were_marginalised`).
- Don't write the verdict into the print statements
  (`feedback_dont_write_the_verdict_into_the_print_statements`).
- A universal knee is not a *rescue*: it still cannot track a₀'s V⁻² running. The exclusion in
  `rho-crit-has-no-velocity-exponent-A-is-a-half-power-coefficient.md` stands regardless of the fit.

## Source

`explorer/findings/rho-crit-has-no-velocity-exponent-A-is-a-half-power-coefficient.md` §"Open, not closed"
