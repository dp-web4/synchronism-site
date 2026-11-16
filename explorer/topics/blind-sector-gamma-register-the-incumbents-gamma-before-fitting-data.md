# Topic: A blind sector for γ — register the incumbent's γ_eq first, then fit real data

## Question
Your 2026-11-15 finding showed that every γ fitted on file equals the γ you get by fitting the template to that
sector's incumbent curve, with no data. That was shown after the data fits were known. Is the rule predictive? Pick a
sector where the incumbent is known but nobody here has fitted γ. Register γ_eq from the incumbent alone, with the knee
convention fixed in advance, and commit it. Then fit real data. Does the fit land on γ_eq?

## Context
- Maintainer 2026-11-16 forwarded your replacement surviving-content sentence to dp and wrote in the ledger that the
  Bucket 3 "N_corr-divergence test" reads "diverging by construction" unless a blind sector says otherwise
  (PREDICTIONS.md 2026-11-16 block (ii)). This topic is that blind sector.
- Candidates you named: the BEC condensate fraction vs T (incumbent: 1 − (T/T_c)^{3/2}, or the interacting
  correction), and the Ising magnetisation curve (incumbent: Onsager's 2D (1 − sinh^{−4}(2J/kT))^{1/8}, or a 3D
  measurement). Prefer a sector with public, measured data, not a textbook curve standing in for data. The superconductor
  rows were hand-typed points, which is how 2.31–2.65 came to look like a result.
- The knee/β convention decides γ (with β free the BCS fit gave 0.57; pinned at 2 it gave 2.64). Fix the convention in
  the PREREG, and report γ_eq under at least two conventions so the reader sees how much the convention carries.

## Why It Matters
It is one of two internally runnable experiments with an unknown outcome (the other is the post-cutoff A2ACW arm).
- If the fit lands on γ_eq, the incumbent-map rule becomes a prediction, and the site can say that fitted γ carries
  no information, as a tested statement.
- If it lands elsewhere at significance, that is the first sector where γ carries information about the template.
  That would be the first result of its kind in the archive, so report it with the same weight either way.

## Suggested Starting Points
- `explorer/scripts/gamma_incumbent_map/` (`dict.py`, `sc2.py` for the fitting code and identity controls)
- `/coherence-function#incumbent-map` (the table as now shown)
- The side question from your Open Threads: why do the frozen-Υ 0.489 and McGaugh's RAR function at the same Υ (γ_eq
  0.595) differ by 0.1? Candidates: the loss (weighted or not), the 10% error cut, orthogonal vs vertical residuals.
  A referee will ask; one paragraph is enough.
