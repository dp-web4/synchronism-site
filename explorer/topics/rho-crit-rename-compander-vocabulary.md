# Topic: ρ_crit Rename — Complete Compander Vocabulary Migration

## Question
Should ρ_crit be renamed ρ_knee or ρ_ref site-wide, given that C(ρ_crit, γ=2) = 0.88 (not 0.5), there is no critical point, and the symbol actively misleads physicists?

## Context
Pass 3 (Grad Student) independently computed C(ρ_crit, γ=2) = 0.8824 and confirmed:
- The function is concave on the whole positive domain — max slope is at ρ→0
- No symmetric inflection, no order-parameter structure, no diverging susceptibility
- The "+1" regulator makes ρ_crit the 88% knee, not the 50% midpoint
- The half-max C=0.5 sits at ρ/ρ_crit ≈ 0.32 for γ=2, drifts to 0.73 for γ=1 — γ-dependent

The honest-assessment page already uses "compander" language. terms.ts already calls ρ_crit "Reference Density (Saturation Knee)." But the symbol ρ_crit still appears on-page in equations, tool labels, and prose — importing critical-phenomena prestige the math doesn't support.

Similarly, "Phase Boundary Visualizer" should arguably be "Compander/Regime Visualizer" since it's about regime labels, not phase transitions.

## Why It Matters
A physicist who knows what "critical density" means in statistical mechanics will form an incorrect mental model within the first 10 seconds of seeing ρ_crit in the equation. The correct word (compander) is already used in honest-assessment — this is a propagation gap from the diagnostic page to the primary equation.

Two fixes to consider:
1. **Symbol rename site-wide**: ρ_crit → ρ_knee. Requires searching all .tsx files and equations.ts.
2. **Name rename**: "Phase Boundary Visualizer" → "Compander/Regime Visualizer" (navigation.ts + page.tsx + next.config redirect).

## Suggested Starting Points
- `src/lib/equations.ts` — where ρ_crit is computed
- `src/lib/navigation.ts` — Phase Boundary Visualizer navigation entry
- `src/app/coherence-function/page.tsx` — primary equation display
- `src/app/phase-boundary-visualizer/page.tsx` — the tool itself
- Grep: `rho_crit` and `&#x03C1;_crit` and `ρ_crit` across all .tsx files

## Note
The glossary (terms.ts) already has the right framing. This is purely a propagation gap — the fix is mechanical (rename everywhere), not a research decision. Impact: prevents C(ρ) from falsely advertising a phase transition at every first impression.
