# Finding: Flipping the γ–N_corr Sign Breaks Every Fit That Ever Used γ < 2 — and BCS Fails on Both Signs Because the Axis Is Wrong

**Date**: 2026-07-03
**Origin**: `topics/gamma-direction-bullet-bite.md` (MEDIUM, seeded 2026-07-03 from visitor Pass 3 unanswered question #3: "If the framework bit the bullet and said γ increases with correlation, would anything else break? Nobody has run that.")

## Summary

Ran the counterfactual γ = 2·√N_corr through all four domains. Result: outcome (a) **and** (c) from the topic's payoff list, simultaneously. The flipped sign is not merely awkward — it is **structurally unreachable** for every fitted γ < 2 in the program, because N_corr ≥ 1 (it is a count) forces γ ≥ 2 under the flipped formula. And the BCS rung fails under *both* signs for a reason prior to the sign: the BCS transition is sharp in **temperature** at essentially constant density, so no γ on a density axis can represent it. The audit upgrades from "sign inverted" to "**the transition-sharpness claim sits on the wrong axis, and the current sign survives only because it leaves γ < 2 reachable for the fits**" — i.e., γ is a fit dial, not physics.

## The Reachability Argument (the sharpest single point)

N_corr is a count of correlated degrees of freedom: N_corr ≥ 1 by definition.

- Current formula γ = 2/√N_corr ⇒ range γ ∈ (0, 2]
- Flipped formula γ = 2·√N_corr ⇒ range γ ∈ [2, ∞)

Every empirically preferred γ in the program's history is **below 2**: SPARC free-fit γ ≈ 0.49 (the MOND-coincident value; γ = 2 rejected at ΔBIC = +184), the γ ≈ 1 "boundary regime" catalog (water/enzymes/neural, the 89%-boundary-consistent set), chemistry Method-2's back-read γ ≈ 1 (N_corr ≈ 4). Under the flipped sign, **all of these values cease to exist in the model's image**. The flip doesn't degrade the fits — it makes them expressible only with N_corr < 1, a fractional count of correlated units:

| Domain | Fitted/asserted γ | N_corr under current (γ=2/√N) | N_corr under flipped (γ=2√N) |
|---|---|---|---|
| SPARC galaxies (free fit) | 0.49 | ≈ 17 (contradicts N_corr=1 premise) | ≈ 0.06 (impossible: count < 1) |
| Boundary catalog (water/enzymes/neural) | ≈ 1 | 4 | 0.25 (impossible) |
| Ideal gas / galaxy assertion | 2 | 1 | 1 (unchanged — degenerate point) |
| BCS | 6×10⁻⁴ (from N=10⁷) | 10⁷ asserted | γ = 2√10⁷ ≈ 6.3×10³ |

So: **the current sign is load-bearing for the fits** (outcome a). The program's data contact happens exclusively in γ < 2 territory, which only the current sign can reach. That is not evidence the current sign is physical — it is evidence that the formula's job is to make small γ available, i.e., γ absorbs whatever the data wants (consistent with the never-anchored N_corr ladder).

## BCS Fails on Both Signs — the Wrong-Axis Upgrade

Under the flipped sign, BCS gets γ ≈ 6.3×10³: C(ρ) becomes a step function in log-density. But the BCS/BEC transition that is "among the sharpest in nature" is sharp **in temperature at approximately fixed density** — the electron density of a superconductor does not change through T_c. On the framework's axis (density), the BCS system doesn't traverse the transition at all:

- Current sign: BCS sits on a near-flat C(ρ) (γ ≈ 6×10⁻⁴) — flattest transition, physically backwards (the documented inversion).
- Flipped sign: BCS sits on a step function it never crosses — and since metallic densities are far above any galaxy-calibrated ρ_crit, C ≈ 1: the most quantum-coherent system known would be scored maximally *classical*, sharpening the known terminology inversion (C ≈ classicality) into outright contradiction.

Neither sign produces the observed sharp transition, because **no function of ρ alone can represent sharpness in T**. Pass 3's question has a determinate answer: biting the bullet doesn't fix the inversion; it exposes that the inversion was a symptom. The correct closure statement is the topic's outcome (c): *the transition-sharpness claim is on the wrong axis for the flagship sharp-transition systems.* This parallels the C(ρ) locality no-go (wrong variable: local ρ vs non-local g_bar) — the framework's variable choices fail before its functional-form choices do.

## Chemistry Check (outcome as predicted)

Method-2's N_corr ≈ 4 → flipped γ = 4 instead of 1. The null-class verdict is unchanged: the polynomial null in Z matches the correlations regardless of γ (the null is γ-agnostic by construction). No information either way — as the topic predicted.

## Implications for the Site

The γ Calculator, Equation Anatomy, and Phase Boundary Visualizer all carry the sign-inversion caveat ("1/√N is a width, not a rate"). This finding adds the stronger, shorter sentence the caveat is missing: **the sign cannot be repaired — flipping it makes every fitted γ in the program unreachable (N_corr ≥ 1 ⇒ γ ≥ 2), and BCS/BEC fail under both signs because their sharp transition is in temperature, not density.** One sentence, closes the "why not just flip it?" question a physics reader will ask next (Pass 3 already did).

## Action: Maintainer

- **P2 — /gamma-calculator, /equation-walkthrough, /phase-boundary-visualizer**: append the one-sentence closure above to the existing sign-inversion caveats, with the reachability table available behind a details toggle if wanted. This converts an open-looking wound ("sign is wrong, unexplained") into a completed audit ("both signs checked; the axis is the problem").
- **P3 — /scale-navigator**: the wrong-axis point applies to any rung whose real transition is in temperature (BCS, BEC, plasma): the sharpness column is not merely unanchored, it is not a function of the plotted variable for those rungs.

## Open Threads

- Is there *any* system whose sharp transition is genuinely in density at ~fixed temperature (cold-atom BEC at fixed T crossing critical density comes closest)? If yes, that single system is the only legitimate anchor for a γ(N_corr) direction test — a cleaner question than the current cross-domain catalog. (Even there, the transition is in phase-space density ρλ³, not mass density — the axis problem persists in milder form.)
- Provenance note: γ ≈ 0.49 (SPARC free fit), N_corr = 10⁷ (BCS assertion), N_corr ≈ 4 (chemistry Method-2), γ ≈ 1 boundary catalog — all taken from the program's own audited values (2026-06 audit trail); none is independently anchored, which is itself the point.
