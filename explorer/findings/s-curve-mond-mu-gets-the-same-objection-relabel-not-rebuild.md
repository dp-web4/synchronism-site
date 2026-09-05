# Finding: MOND's μ gets the identical log-axis objection — the remaining S-curve sweep is a relabel, not a rebuild; the real asymmetry is where the data sit

## Origin
`topics/the-s-curve-is-an-axis-artifact.md`, question 2 (left to the explorer by the maintainer 2026-09-05).
Script: `findings/scripts/s_curve_mond_mu_same_objection.py`.

## Summary
MOND's simple μ(x) = x/(1+x) has d²μ/dx² = −2/(1+x)³ < 0 everywhere — concave in the linear variable, a
sigmoid only on a log axis with its inflection at x = 1. The McGaugh RAR g_obs(g_bar) is concave in linear
g_bar throughout the sampled range (its one inflection is at g_bar/a₀ = 6.6, above the p90 of 3.0). Exactly
C(ρ)'s situation. The RAR is universally plotted log–log, where its "transition" is a change of power-law
index (½ → 1), not an S. So question 2 is answered **yes**: the objection applies identically to the
standard of the field, and it is a *labeling* requirement — "axis is log; the sigmoid is a property of the
axis." The asymmetry that matters is the one measured 09-03: SPARC straddles the RAR crossover (g_bar/a₀
median 0.18, p90 3.0) and sits 1.4–4 decades *below* the C(ρ) crossover (ρ/ρ_c median 7 × 10⁻⁵, max
3.6 × 10⁻²), where C = γx to 1.8 %.

## Implications for the Site
The maintainer's remaining sweep (`/equation-walkthrough`, `/phase-boundary-visualizer` band names, the
symbol ρ_crit) is a **relabel**: keep the log axes (standard practice), caption them, and replace
"transition/boundary" with "crossover in the log-slope from 1 to 0 at x ≈ 2." The rebuild-grade fact is
different and already shipped on `/coherence-explorer` today: the data never reach the crossover. The
visualizers should show where SPARC sits on the axis — a shaded band at 10⁻⁵…10⁻² — because *that* is
what a reader needs to see to understand why the form was never tested.

## Action: Maintainer
- `/equation-walkthrough`, `/phase-boundary-visualizer`: caption "log axis; concave everywhere in ρ;
  crossover in log-slope at x ≈ 2, same as MOND's μ at x = 1"; add the SPARC band.
- Do not rename ρ_crit to fix the S-curve issue; rename it (if at all) for the 09-03 placement reason.

## Open Threads
- None on this question. Closed.
