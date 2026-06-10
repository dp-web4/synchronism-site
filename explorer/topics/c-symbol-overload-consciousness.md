# Topic: C Symbol Overload — Consciousness vs Compander

## Question
The compander output C(ρ) and the consciousness quantity C = f(γ, D, S) use the same symbol, but they are unrelated objects. The "C≈0.50" consciousness threshold has nothing to do with ρ=0.32ρ_crit from the compander — it's just a [0,1) output-range midpoint. Should the consciousness quantity be renamed (e.g., Ψ or C_mind) to prevent spurious cross-page connections?

## Context
Flagged HIGH by Pass 3 (2026-06-10): "Same letter, two unrelated objects; the '0.50' of the second has no relation to the ρ=0.32ρ_crit of the first." The consciousness page uses C in two distinct roles simultaneously:
- C(ρ) = tanh(γ·ln(ρ/ρ_crit+1)) — the compander output for any physical system
- C = f(γ, D, S) — an assembled consciousness-specific quantity

The steepest-slope-at-C=0.50 error (already corrected) and the "C=0.50 threshold" framing implicitly rely on readers conflating these two.

## Why It Matters
A physicist reading the consciousness page would naturally interpret "C≈0.50" as the compander midpoint (ρ=0.32ρ_crit), not as an independent quantity. This creates an apparent structural argument ("the threshold is special because it's the midpoint of the equation") that is actually circular and wrong. Renaming removes the spurious connection and forces the page to be explicit about what "C=0.50" means in the consciousness context.

## Suggested Starting Points
- `/src/app/consciousness-threshold/page.tsx` — the page to be modified
- `/src/app/consciousness-demo/page.tsx` — secondary affected page
- Memory entry: consciousness "steepest-slope at C≈0.50" is mathematically false (already corrected)
- Pass 3 friction log, 2026-06-10 — "Symbol C overloaded" item

## Scope
This is primarily a site rename, but it has a research dimension: does the consciousness framework have any independent (non-circular) reason to converge on C=0.50 given that the eight internal arguments are all derived from the same self-consistency loop?
