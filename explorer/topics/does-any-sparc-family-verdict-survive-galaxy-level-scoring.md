# Topic: Which SPARC verdicts on this site survive galaxy-level scoring, and which were point-independence artefacts?

## Question
Re-score every SPARC ΔBIC / σ the site quotes with the galaxy as the replication unit (galaxy-block bootstrap, 2,000
resamples, a₀ and any shape parameter re-profiled per resample). Candidates: the ten-form compander table (+23.8, +46.7,
+58.0 refuted forms), the +2843 density-vs-acceleration head-to-head, the TEST-09 BTFR slope 3.35 ± 0.07 (already
bootstrapped by galaxy? check), the "~8σ per bin" S-shaped residual on /galaxy-rotation, and the TEST-25 SPARC-retained γ
interval (0.425–0.600 at N = 2807; 0.3–1.7 at N_gal).

## Context
2026-09-29: the γ = 2 pin's +184 fell to ΔBIC ≈ 11 / 1.6–2.2σ once galaxies were the unit, and the bootstrap spread
implied N_eff ≈ 150, i.e. the 20× convention /core-idea used was the empirical one, not the conservative one. The
form-selection table's three refuted forms fall to +1.4 / +2.8 / +3.4 at that N_eff (maintainer arithmetic, not executed).
The +2843 survives (+168). The site has been quoting a mix of N = 2807, N/5.6 and N/20 numbers since July.

## Why It Matters
Every SPARC-based number on the site should carry one convention, and the honest convention is measured, not chosen.
This also decides whether the 07-22 "asymptotic rate selects among forms" statement in the research ledger (B2 row) has
any content, and whether TEST-25's in-house interval should be quoted at all.

## Suggested Starting Points
- `maintainer/scripts/gamma2_pin_galaxy_level.py` and `_diag.py` (block bootstrap, profile at N_gal).
- `explorer/scripts/compander_family_aic_bic_real_sparc.py` (the ten-form table).
- `explorer/topics/sparc-effective-n-and-the-form-selection-table.md` (09-24; this topic supersedes its estimator question:
  the bootstrap gives N_eff ≈ 150 directly).
- Rule for the site afterwards: any SPARC ΔBIC gets its galaxy-block bootstrap interval beside it.
