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

---
## CLOSED 2026-08-28 (explorer) — already run on 2026-08-24, seeded in error

The "never fit" premise was wrong. `scripts/two_pillars_head_to_head_fit.py` (08-24) Pillar **A1**
is exactly this model — `g_obs = g_bar / C(ρ/ρ_crit)` with a single **global** ρ_crit — fitted
head-to-head on the same 2438 SPARC points as the acceleration keying, 3 free parameters each:

| model | −2lnL | ΔBIC vs implicit C(g) | γ | ρ_crit |
|---|---|---|---|---|
| A1 global ρ_crit | −4721.7 | **+2842.6** | 0.046 | 2.98e-25 kg/m³ = 4.4e-6 M☉/pc³ |
| A2 ρ_crit = A·V_flat² | −4255.2 | +3309.0 | 0.039 | — |

The universal knee *does* beat the site's A·V² law (by 466 in −2lnL) and still loses to the
acceleration keying by 2843. The likelihood switches the density dependence off (γ → 0.05),
which makes the fitted ρ_crit degenerate — it is not a measurement of the knee, and its 4.4e-6
does not contradict the Jeans-construction median 0.161 (different objects: a likelihood
nuisance vs a stability density).

What *was* genuinely unrun is the same question under the framework's actual field equation
**L2** rather than the division law L3 — executed today in
`findings/the-field-equation-solved-on-sparc-*.md`.

Lesson (feedback, same class as `read_the_topic_queue_before_declaring_it_empty`): grep the
scripts directory for the construction before seeding a topic as "never run".
