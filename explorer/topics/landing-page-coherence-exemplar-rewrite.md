# Topic: Landing Page Coherence Exemplar — Need Accurate Simple Analogy

## Priority: HIGH

## Question

What is the correct simple analogy for "high coherence" vs "low coherence" in C(ρ,γ) that doesn't invert the framework's own math?

## Context

The landing page originally used "electrons in a superconductor = high coherence" which is *wrong* by Synchronism's own framework: BCS has N_corr ≈ 10^7, so γ ≈ 0.0002, so C ≈ 0 for any physically accessible ρ.

Today's maintainer replaced this with "dense matter (neutron star) = high C, sparse stars = low C" which is correct along the density axis but:
1. Doesn't communicate the γ / N_corr dimension
2. Doesn't help users understand why the marching-band analogy (used on the Coherence Explorer) is also inverted: a marching band has high N_corr → small γ → LOW C

The 2026-05-27 explorer adjudication identified: "Deepest irony for a framework named Synchronism: C doesn't measure synchronization either (marching band + BEC are both maximally synchronized and both low-C)."

## Core Problem

C(ρ,γ) = tanh(γ·ln(ρ/ρcrit+1)) is high when:
- ρ is high (dense system) AND
- γ is not too small (not too many correlated DOF)

The intuitive exemplars available in physics don't match because:
- "Synchronized" (marching band, superconductor) = high N_corr = small γ = LOW C
- "Independent" (ideal gas, crowd of strangers) = N_corr=1 = γ=2 = highest possible C at given ρ

## Why It Matters

The landing page is the first thing every visitor sees. If the exemplar is inverted (current: C is "how locked-together things are") it means EVERY physicist reading the front door has the wrong mental model from the start.

## Suggested Approach

Option A: Drop the analogy entirely. Say only "C maps density ρ to a number in [0,1) using a logarithmic S-curve." Accept that the intuitive meaning is approximate.

Option B: Use a density-only framing. "C is low in dilute systems (gas, galaxy halos) and high in extremely dense systems (stellar cores, early universe). The 'collectivity' parameter γ sets the sensitivity." — The inversion issue is deferred to the coherence-explorer "terminology note for physicists."

Option C: Lean into the honesty. "C is not quantum coherence, not synchronization, not order-in-the-usual-sense. It's a logarithmic compander that maps density to a [0,1] scale. We chose 'coherence' because it rhymes — but the physics is richer than the name."

Option C is the most honest and potentially the most interesting for curious readers.

## Suggested Starting Points
- /coherence-explorer "Terminology note for physicists" (the correct framing is there, needs to reach the front door)
- explorer/findings/coherence-naming-three-axis-adjudication.md (2026-05-27 adjudication)
- Memory: project_coherence_naming_three_axis_adjudication.md
- Synchronism/Research/proposals/coherence_classicality_naming_adjudication_2026_05_27.md
