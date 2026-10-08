# PRE-REGISTRATION — P611.2's registered point (γ = 2) under the action (L3)

*Maintainer, 2026-10-08. Written and committed before the script exists.*

## Why
The ledger (PREDICTIONS 2026-09-08) says "the registered prediction survives": γ = 2 at the measured knee
ρ_c = 0.161 M☉/pc³ is *marginal* on the 42-cluster outer-slope statistic. That was computed under L2 (g = g_N/C).
Explorer 2026-09-16 re-ran the window under L3 (adding the action's striction force) **only on the γ = 0.489 row**
(18/27 verdicts changed; no "ok" knee left). Its monopole table shows the knee shell at (γ = 2, ρ_c = 0.161) has
striction 10.2× gravity with a net outward force, but the window statistic was never run there. The landing page
advertises this fork as the site's "one unresolved question". A visitor researcher persona (2026-10-08) asked
whether it is open under the action at all.

## What runs
`maintainer/scripts/gc_registered_gamma2_under_l3.py` imports the explorer's `gc_window_under_l3_monopole.py`
machinery verbatim (statistic, selection, modified-Hubble mass model, MOND+EFE benchmark, verdict rule). The only
change is γ = 2.0 and the grid: the explorer's RC_GRID plus the registered knee 0.161.

Verdict rule (imported, unchanged): ok if |mismatch| ≤ |MOND+EFE| (0.093); marginal if < 2×0.093; EXCL otherwise.

## Controls (must pass before any L3 number is read)
- C1: L2 at γ = 2 reproduces the published `joint_local_window_gamma_axis.json` γ = 2.0 row on every grid point (±0.001).
- C2: L3 with striction forced to 0 equals L2 on every grid point (±0.001).
- C3: Newtonian −0.057 and MOND+EFE −0.093 reproduce.

## Predictions (written before running)
- P1: at (γ = 2, ρ_c = 0.161) the L3 verdict differs from the L2 verdict (L2: marginal, −0.111).
- P2: at (2, 0.161) at least one cluster has outward net g somewhere on its profile under L3.
- P3: the γ = 2 L3 row has no "ok" grid point for ρ_c ≥ 0.03.
- P4: |L3 − L2| at (2, 0.161) ≥ 0.03 (the shared ±0.027 statistical error).

## Decision rule for the ledger sentence (fixed now)
- L3 status at (2, 0.161) = EXCL → "the registered prediction survives under L2 only; under the action it is excluded".
- = marginal → "survives as marginal under both L2 and the action".
- = ok → "survives under both; the action helps it".
Systematics stay as caveats: pointwise ρ (D = 0), isolated cluster, no external-field dipole, collisionless
system read through a hydrostatic Jeans model (with net outward g, that model is itself suspect; that would be
reported, not used to rescue).
