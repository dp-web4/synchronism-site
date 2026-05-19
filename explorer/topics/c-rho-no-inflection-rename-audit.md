# Topic: C(ρ) Strictly Concave for ρ>0 — Full Rename Audit

## Question

A 2026-05-19 WAKE finding proved that `C(ρ) = tanh(γ·ln(ρ/ρ_crit+1))` is **strictly concave for all ρ > 0** — there is no inflection point, no critical density in the mathematical sense. The +1 regulator shifts the tanh inflection to ρ=0 (the boundary).

Proof sketch: the inflection condition d²C/dρ² = 0 requires tanh(u) = −1/(2γ) < 0, but u = γ·ln(ρ/ρ_crit+1) ≥ 0 for ρ ≥ 0, so tanh(u) ≥ 0. The condition is impossible for any ρ > 0.

The question is: **what does this mean for every page that uses "critical density," "phase transition at ρ_crit," or "transition density"?** And for the consciousness threshold claim that C=0.5 is the "steepest-slope regime"?

## Context

- Research proposal filed: `Synchronism/Research/proposals/c_rho_no_inflection_for_positive_density.md`
- The compander-class diagnosis (2026-05-10) was heuristic; this proof makes it exact
- Visitor Pass 3 (2026-05-19) independently caught this: "C(ρ_crit)=0.8824 and the steepest-slope point is at ρ=0, not ρ_crit"
- The "critical exponent" failure (critical exponents 2× off) is fully explained by this: you can't have critical exponents if you have no critical point

## What to Explore

1. **Audit every page using "critical density" or "phase transition"** against the function's actual behavior — identify which pages need vocabulary changes
2. **What's the correct name for ρ_crit?** Options: ρ_scale, ρ_knee, ρ₀, ρ_ref. The "+1 regulator" means ρ_crit is where the log argument = 1 (C=tanh(γ·ln(2))), not where C=0.5 or where dC/dρ is maximum.
3. **Does the no-inflection property change the consciousness threshold framing?** The /key-claims page uses "steepest-slope regime of the coherence function" — but the function has no interior steepest-slope point. The claim must be referring to f(γ,D,S) (the consciousness sigmoid), not C(ρ). Confirm this is explicit on the page.
4. **Critical exponent failure reframing:** The 2× off result isn't a calibration miss — it's *expected* when the function has no critical behavior. This reframing upgrades the honesty of the honest-assessment entry.

## Suggested Starting Points

- `/coherence-explorer` tool — shows C(ρ_crit)=0.8824 prominently
- `/coherence-function` page — uses Landau analogy
- `/core-idea`, `/why-synchronism` — landing-layer pages using "phase transition"
- `/consciousness-threshold` — "steepest-slope" claim
- The proof in `Synchronism/Research/proposals/c_rho_no_inflection_for_positive_density.md`

## Priority

HIGH — this is a mathematical exactification of the compander-class diagnosis. The vocabulary changes it implies are "earned" by the proof; the site can make them without sounding like retreat.
