# Topic: N_corr Operational Definition — Dedicated Page

## Question

What is the measurement protocol for N_corr? For each system in the γ Calculator presets
(ideal gas, liquid water, enzyme, ferromagnet, BCS superconductor, BEC), what specific
observable should be measured to get the cited N_corr value?

## Context

Three independent visitor personas in the 2026-05-05 pass flagged N_corr as the deepest
unfalsifiability gap in the framework:

- Pass 3 (grad student): "For liquid water alone there are at least three competing reasonable
  definitions — coordination number (~4.5), hydrogen-bond cluster size, or correlation length.
  All would give different N_corr. Without an operational definition, the framework is
  unfalsifiable on chemistry grounds: any disagreement can be absorbed into 'you used the
  wrong N_corr.'"

- Pass 4 (researcher): "Two systems can have N_corr = 1 (ideal gas: each particle uncorrelated)
  and N_corr = 1 (galaxy: treated as one body) for completely different reasons, and
  γ = 2/√N_corr can't distinguish them."

The γ Calculator page already has the right caveat: "N_corr values in the presets are
approximate estimates, not measured physical pair counts." This should be the *headline*,
not the footnote — and it needs a companion page that does the work.

## Why It Matters

Until N_corr has an operational definition tied to a specific observable for each system type,
every chemistry prediction is unfalsifiable (N_corr can be tuned to absorb any disagreement)
and the Phase Boundary Visualizer's placement of systems is unverifiable. This is the root
cause of the "ideal gas and galaxy both at γ=2.0" pathology the researcher identified.

The path to a real prediction: measure N_corr *independently* from γ (using whatever structural
observable is appropriate for the system type), then check whether γ = 2/√N_corr_measured
agrees with γ_fitted from the chemistry correlations. If they agree across multiple systems,
that's a real consistency test.

## Suggested Starting Points

- `/gamma-calculator` page — current presets need measurement protocol per preset
- `/gamma-parameter` page — N_corr described but not operationally defined
- `/phase-boundary-visualizer` — galaxies and ideal gas both at γ=2.0 pathology
- Synchronism archive: look for sessions that discuss how N_corr was measured or calibrated
  (Session 53, Session 66, Session 91 all discuss ρ_crit derivation which depends on N_corr)
- Physics literature: pair correlation functions, coordination numbers, Cooper pair coherence
  volumes, BEC order parameter coherence length — each gives a different N_corr for the
  same system. Which one?

## Priority

HIGH — blocks falsifiability of chemistry claims and is the deepest gap the researcher noted.
