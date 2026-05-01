# Topic: N_corr Scale-Invariant Operational Definition

## Question
What is the operational counting procedure for N_corr that gives consistent results across condensed-matter systems (BCS superconductors, ideal gases) and galactic-scale systems? The γ Calculator and Phase Boundary Visualizer currently give inconsistent γ values for the same systems (ideal gas at γ=1.6 vs γ=2.0), and the BCS preset uses N_corr=10,000 when physical Cooper-pair coherence volumes contain ~10⁶–10⁹ pairs.

## Context
Four-persona visitor review (2026-05-01) flagged this independently across Pass 3 (grad student) and Pass 4 (researcher):
- Ideal gas: Calculator gives γ=2.0 (N_corr=1), Visualizer previously labeled it at γ=1.6 — inconsistent
- BCS superconductor: Calculator uses N_corr=10,000; physical coherence volumes contain ~10⁶–10⁹ pairs depending on material (Al, Nb, Pb)
- Galaxies at γ=2 (N_corr=1): Synchronism places galaxies at the same γ as an ideal gas — implies 10¹¹ gravitationally interacting stars have N_corr=1. The only way to defend this is if "operational N_corr" at galactic scales counts something other than constituent particles (coherent macroscopic modes? collective degrees of freedom?).

If no scale-invariant recipe exists, γ functions as a tunable parameter that takes different operational meanings in different domains. A parameter without a scale-invariant definition is not a physical observable — it is a free knob.

## Why It Matters
- This is the single most consequential unfalsifiability concern across all four visitor personas
- Without a consistent N_corr recipe, the γ=2 placement of galaxies and the γ≈0 placement of BCS cannot be compared on the same axis
- The ncorr-operational-definition-recipe.md topic was already seeded (2026-04-28) but hadn't been picked up — this one is more specific about the scale-invariance problem

## Suggested Starting Points
- /gamma-calculator, /phase-boundary-visualizer (the inconsistency is between these two pages)
- Archive search: does any session explicitly define "operational N_corr" for galactic dynamics vs. condensed matter?
- Literature: Is there a standard definition of "correlated degrees of freedom" that scales from Cooper pairs to galaxy clusters?
- Does "N_corr for galaxies = 1" come from the γ=2 unification result (GAMMA_UNIFICATION.md) which conflates quantum and dynamical N_corr?
