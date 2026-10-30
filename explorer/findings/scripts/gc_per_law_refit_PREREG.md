# PREREG — GC outer-slope statistic: does Newton's lead survive when the mass model is refit under each law?

Explorer 2026-10-30. Written and committed **before** `gc_per_law_refit.py` exists.
Topic: `explorer/topics/gc-statistic-every-modified-gravity-row-loses-to-newton-is-that-the-mass-models.md`.

## What is already known (read before registering)
- The statistic is d_i = (observed outer log-slope of σ_los) − (model outer log-slope), outer window r > r_max/3, weighted
  by 1/err². Under Newton, σ ∝ √M, so **Newton's d_i is independent of M**. Its −0.057 level is set only by the
  shape inputs r_c, r_t (ModHubble profile) and isotropy. "Refit the mass under Newton" cannot move it, so the
  09-19 one-scale control could only move the non-Newton rows.
- The catalogue r_t is Webb+2013 eq. 8: a computed **Newtonian tidal radius**, not photometry (memory:
  catalogue-columns-can-be-model-derived). The outer σ slope of a truncated profile is most sensitive to r_t. So the
  convention most likely to condition the table on Newton is r_t, not M.
- Harris 2010 King fits give a photometric r_t that does not depend on the law. For the 42-cluster sample, the median
  r_t(Harris)/r_t(Baumgardt) is about 0.4. 14/42 are core-collapsed in Harris; their c = 2.5 is nominal, not a fit.

## Arms
- **A (identity):** reproduce the maintainer's per-cluster d_i (Newton −0.0565, MOND+EFE −0.0933, dens γ=2 −0.1111 on
  N = 42). Then restrict to the **28 non-core-collapsed** clusters. All B/C comparisons use these 28 (a control on a
  subsample is a control on the subsample).
- **B (photometric truncation, no free shape):** r_c and r_t from Harris (arcmin → pc at Baumgardt R_sun). Where
  r_t(H) < 1.05 r_max(data), set r_t = 1.05 r_max (count printed). Fix M at the Baumgardt mass, plus a second variant
  with M refit per law on the outer-window σ level (grid ×0.25–4). Isotropic.
- **C (per-law refit with priors):** r_c fixed (Baumgardt). Free r_t on a log grid 0.3–3 × r_t(H), floored at
  1.05 r_max. Free β ∈ {−0.3, 0, +0.3} (constant). Free M on a grid ×0.25–4. The fit uses the outer-window σ points
  (χ² with symmetric errors) plus a Gaussian prior on log10(r_t/r_t(H)) with σ = 0.25 dex. β has a flat prior.
  Outputs per law: total χ² (data + prior), d_i at the best fit, and best-fit log(r_t/r_t(H)).
- Laws: Newton; MOND simple μ + EFE (g_ext = V²/R_GC, V = 233); density-keyed γ = 2 (floored, ρ_crit = 0.161, the
  registered point). Cluster bootstrap, B = 4000, seed 1, as in the maintainer script.

## Predictions (before running)
- **P1 (sign, arm B fixed-M):** Newton − MOND+EFE stays **positive**, and the bootstrap gives ≥ 3σ. ~55%.
  Reason: smaller photometric r_t steepens both laws, but MOND's outer boost is still there.
- **P2 (level, arm B):** every law's |d| level moves toward zero relative to arm A on the same 28 clusters (smaller r_t
  → steeper model). ~75%.
- **P3 (arm C, d statistic):** with r_t and β free, Newton − MOND+EFE on d collapses to **< 2σ**. ~70%. If so, d is
  close to tautological under a per-law refit, and the information moves to the prior cost.
- **P4 (arm C, prior cost):** MOND+EFE's best-fit r_t sits **lower** relative to Harris than Newton's does (it needs
  more truncation to steepen), with a median offset ≥ 0.1 dex. ~60%.
- **P5 (arm C, Δχ²_total):** Newton − MOND+EFE total χ² is negative (Newton better), but at < 2σ under the cluster
  bootstrap. ~55%.

## Decision rule (fixed now)
- **"The lead measures gravity"** if Newton − MOND+EFE is ≥ 3σ on **both** arm B (fixed-M d) **and** arm C
  (Δχ²_total, i.e. data plus photometric prior).
- **"The lead was the mass-model convention"** if arm B (fixed-M d) is < 2σ, because arm B takes no Newtonian input
  except M, and M does not enter Newton's d.
- Anything else is **"mixed"**. Report which arm carries it.
- The γ = 2 − MOND+EFE ranking (1.7σ in arm A) is re-scored in every arm and reported. No threshold is set for it.
