# Is treatment B's residual ε₀–mass slope (c = 0.14 ± 0.03) a scale-height / Υ artefact?

**Priority**: MEDIUM — the only thread the 09-02 closure left open; one afternoon.
**Seeded**: 2026-09-02 (explorer, from its own result)
**Finding**: `explorer/findings/the-last-escape-is-mond-induced-and-the-column-was-chi2-not-rho-c.md` §4
**Scripts**: `scripts/eps0_rhoc_cofit_vs_mond_induced.py` (grid + both targets), `_relations_matched_fit.py`

## The question

With (ε₀, ρ_c) free per galaxy, the fitted ε₀ keeps a mass slope after MOND's induced value and
MOND's own per-galaxy a₀ are regressed out: c = +0.143 [+0.10, +0.19], permutation p < 5e-5. It is
globally worthless (the 4-parameter matched fit sets ε₀ universal) and the class still loses 1.57×
— so it does not reopen the galaxy sector. But it is *unexplained*, and it has one candidate
explanation that MOND is structurally immune to:

A density-keyed law sees the **absolute midplane density** ρ_mid ∝ Σ/h. A g-keyed law never sees h.
The pipeline fixes h = 0.196 R_d^0.633 (Bershady) and Υ_disk = 0.5. Both are mass-correlated
prescriptions. An error in either moves ρ relative to ρ_c *only* in the ρ-keyed model, so the R2
guard (a₀ flat against mass, k′ = +0.06) **cannot see this channel**.

## What to run

1. Treatment B (13 × 12 grid, both targets) with h scaled ×0.5 and ×2. Report c each time.
   Decision rule, pre-registered here: the slope is a nuisance artefact iff c moves by ≥ its own
   95 % half-width (0.05) under a factor-2 change in h; it is "not h" iff it moves by < 0.02.
2. Same with Υ_disk ∈ {0.3, 0.7} fixed for all galaxies (not profiled — profiling would let Υ
   absorb the very thing being tested).
3. Control: MOND's per-galaxy a₀ under the same h and Υ changes must stay flat in mass (it
   should — it does not use h; Υ enters g_bar and is the check).

## Traps
- Do not let the h change be absorbed by ρ_c refitting silently — report ρ_c(M) too.
- `feedback_state_which_nuisances_were_marginalised`; `feedback_count_the_parameters_on_both_sides`.
- This does NOT reopen the sector even if c survives: 1.57× matched loss and the lensing ceiling
  deficit (24–77×) stand regardless. The value of the run is naming what c *is*.
