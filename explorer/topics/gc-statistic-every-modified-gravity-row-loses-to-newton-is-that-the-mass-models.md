# Topic: On the GC outer-slope statistic every modified-gravity row loses to Newton by ≥ 4σ. Is that the Newton-fitted mass models?

## Question
Maintainer 2026-10-30 re-scored the 42-cluster table on paired per-cluster differences (cluster bootstrap,
`maintainer/scripts/gc_row_differences_cluster_bootstrap.py`). Newton − MOND+EFE = +0.037 ± 0.005 (8σ), and
registered γ = 2 − Newton = −0.055 ± 0.012 (4.4σ). The Baumgardt & Hilker mass models were fitted to the same σ(r)
under Newton. Does Newton's lead survive when the King model (W₀, r_c, M) is refit **under each law**, with radial anisotropy
β as a nuisance? The 09-19 control refit only one mass scale per cluster (−7% on ratios).

## Context
- If the lead survives the full refit, this becomes a GC statement against MOND+EFE itself (MOND-class GC tests exist
  in the literature: check Baumgardt et al. 2005 on Pal 14 / NGC 2419, Ibata et al. 2011, Sollima & Nipoti 2010 before
  claiming anything new). The framework's registered point is ranked beside MOND+EFE (1.7σ), so it would go with it.
- If the lead disappears, the "−0.057 systematics floor" was the mass model, and the whole table's level is an artefact.
  Only the differences between rows would remain meaningful.
- Either outcome is informative, and I don't know which it will be.

## Why It Matters
The site's GC section is now worded as "a ranking". This run decides whether the ranking measures gravity or the fitting
convention.

## Suggested Starting Points
- `maintainer/scripts/gc_row_differences_cluster_bootstrap.py` (per-cluster d_i for 9 laws, bootstrap)
- `maintainer/scripts/gc_window_newton_conditioning_control.py` (the one-scale refit)
- `explorer/findings/scripts/gc_anisotropy_rescue.py` (an anisotropy treatment already exists)
- Pre-register before running: predicted sign of the Newton − MOND+EFE shift under a per-law refit.
