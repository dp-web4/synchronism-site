# Finding: The GC paired differences cancel the data. "8σ" and "10.6σ" are model separations; on data-facing scores the Newton/MOND+EFE fork flips sign with the mass model, and the EFE-free corner is ~3σ, not 10.6σ

## Origin
Topic `gc-statistic-every-modified-gravity-row-loses-to-newton-is-that-the-mass-models.md` (maintainer 2026-10-30).
Pre-registered at site `012ca7c` (`findings/scripts/gc_per_law_refit_PREREG.md`) before the script existed.
Scripts: `gc_per_law_refit.py` (registered) and `gc_per_law_refit_posthoc.py` (post-hoc, labelled). Outputs are the matching `_output.txt` files.

## Summary
The per-cluster statistic is d_i = s_obs,i − s_model,i (outer log-slope of σ_los). A paired difference between two laws is
d_A − d_B = s_model,B − s_model,A. **The observation cancels exactly.** Shuffling the observed slopes across clusters
reproduces every paired difference and its bootstrap s.d. to the last printed digit. So the 2026-10-30 numbers measure
how far apart the models are, cluster by cluster: "Newton − MOND+EFE = +0.037 ± 0.005 (8σ)", "γ = 2 vs Newton 4.4σ", and
"the EFE-free corner is 10.6σ worse than MOND+EFE". They do not measure which law the data prefer. Data-facing scores
(level vs zero, and χ² with a per-law refit) give the following.
1. The table's "systematics floor" (−0.057) is the catalogue tidal radius. r_t is Webb+2013 eq. 8, a computed
   Newtonian quantity. Replacing it with Harris photometric King r_t (median 0.4×) moves Newton's level from −0.083 to
   +0.015 ± 0.031 on the same 28 clusters.
2. **Newton vs MOND+EFE has no stable sign.** Catalogue inputs: MOND+EFE better, Δχ² −503 ± 186 (2.7σ). Photometric r_t:
   Newton better, +914 ± 389 (2.3σ). Per-law refit with r_t, β and M free and a 0.25 dex prior on photometric r_t: Newton
   better, Δχ² +8.7 ± 4.7 (1.8σ), or 2.0σ with β ≤ 0.
3. **The registered γ = 2 point is indistinguishable from Newton** in every arm (0.3–1.2σ). That is expected: GC densities
   sit far above ρ_crit = 0.161, so C ≈ 1.
4. **The EFE-free corner** (simple μ with no EFE, and the compander at γ = 0.9 with no EFE) is disfavoured against Newton
   at **≈ 3σ in every arm**: Δχ² +54 ± 19 (2.9σ) in the refit, +93 ± 32 (2.9σ) with β ≤ 0, and level z = −3.2 to −3.5 under
   photometric r_t. Its level miss of 8σ under catalogue inputs is mostly the Webb r_t. The corner is still disfavoured,
   but at ~3σ, conditional on the mass model, not 10.6σ.

Registered rule verdict: **"mixed"** (arm B d-difference +8.4σ; arm C Δχ² 1.8σ). That rule is defective, and I wrote it.
Its arm-B leg is the data-free difference, so it could only ever pass. Unlike most defects this one ran in the
permissive direction: it made "the lead measures gravity" easier to reach than the data justify.

## Research Notes

### The algebra (should have been the first line of the PREREG)
d_i = s_obs,i − s_mod,i(law). The weights w_i = 1/err(s_obs,i)² do not depend on the law. So
Σw(d_A − d_B)/Σw = Σw(s_mod,B − s_mod,A)/Σw, with no s_obs. The cluster bootstrap of this quantity measures how
**consistently** law B flattens the outer profile relative to law A across clusters. Consistent model behaviour gives a
tiny s.d. (0.005) and so a large "σ". The direction "A is worse" can only be read through the levels: if every law
misses on the steep side, the flatter law is worse. The levels carry the mass-model uncertainty that the paired
difference was introduced to remove. The memory `check-whether-the-statistic-cancels-the-effect` (third form, written
the same day) recommends exactly this paired-difference scoring. That recommendation needs a qualifier: **pair losses,
not residuals.** A paired difference of a quantity linear in the observation cancels the observation.

Control (post-hoc, `gc_per_law_refit_posthoc.py`): observed slopes permuted across clusters (seed 7):

| arm | MOND+EFE − Newton real | shuffled |
|---|---|---|
| A (catalogue) | −0.0429 ± 0.0053 | −0.0429 ± 0.0053 |
| B (Harris r_t) | −0.0402 ± 0.0048 | −0.0402 ± 0.0048 |
| C (refit) | −0.0083 ± 0.0094 | −0.0083 ± 0.0094 |

The same holds for every law in every arm.

### Registered arms (28 non-core-collapsed clusters; the 14 core-collapsed have a nominal Harris c = 2.5)
Identity reproduced (N = 42: Newton −0.0565, MOND+EFE −0.0933, γ=2 −0.1111). On the 28-cluster subsample, arm A gives
Newton −0.083, MOND+EFE −0.126, γ=2 −0.150, with differences 8.1σ / 1.7σ / 4.2σ, as on the full sample.

| | Newton level | MOND+EFE level | γ=2 level | Δχ² MOND+EFE − Newton | Δχ² γ=2 − Newton |
|---|---|---|---|---|---|
| A catalogue (Webb r_t) | −0.083 ± 0.024 | −0.126 ± 0.027 | −0.150 ± 0.032 | −503 ± 186 (MOND better 2.7σ) | −58 ± 49 |
| B Harris r_t, M fixed | +0.015 ± 0.031 | −0.025 ± 0.032 | −0.004 ± 0.029 | +914 ± 389 (Newton better 2.3σ) | +22 ± 26 |
| C refit (r_t, β, M; prior 0.25 dex) | +0.043 ± 0.026 | +0.035 ± 0.028 | +0.028 ± 0.027 | +8.7 ± 4.7 (1.8σ) | +0.8 ± 2.8 |
| C, β ∈ {−0.3, 0} (post-hoc) | +0.031 ± 0.029 | +0.007 ± 0.032 | +0.024 ± 0.029 | +16.7 ± 8.5 (2.0σ) | +1.6 ± 3.2 |

The χ² values in arms A and B (1300–3800 summed) are dominated by σ-level mismatch of the fixed catalogue mass models, so
only arm C's χ² (272–301 summed) is a fit. Arm B with M refit per law changes nothing material (MOND wants −0.08 dex in
M).

| EFE-free rows | A level z | B level z | C Δχ² vs Newton | C (β ≤ 0) Δχ² vs Newton |
|---|---|---|---|---|
| simple μ, EFE off | −8.6 | −3.5 | +71 ± 23 (3.1σ) | +111 ± 36 (3.1σ) |
| compander γ = 0.9, EFE off | −8.0 | −3.2 | +54 ± 19 (2.9σ) | +93 ± 32 (2.9σ) |

### Predictions scored
- P1 (arm B d-difference positive and ≥ 3σ): **confirmed, vacuously.** The statistic is data-free.
- P2 (levels move toward zero under photometric r_t): **confirmed.** All three levels move by +0.10 to +0.15, and
  Newton's crosses zero.
- P3 (arm C d-difference < 2σ): **confirmed** (0.9σ).
- P4 (MOND+EFE needs ≥ 0.1 dex more truncation): **refuted.** The median per-cluster r_t offset is 0.000. MOND+EFE used
  β = +0.3 (15/28 vs Newton's 13/28) and lower M instead.
- P5 (Δχ² negative, < 2σ): **confirmed** (Newton better by 1.8σ).

### What this does and doesn't touch
- It does **not** rescue the EFE-free corner. That corner is ~3σ worse than Newton in every data-facing arm. Combined with
  the ~1.2σ SPARC cost at galaxy level, it is disfavoured, not closed. It still sees only a₀′/γ (deep regime), so it
  remains MOND-no-EFE's exclusion, inherited.
- It **does** remove "every MG row is ≥ 4σ worse than Newton". γ = 2 is indistinguishable from Newton, and MOND+EFE vs
  Newton depends on the truncation radius, with the sign flipping between catalogue and photometric r_t.
- The 0.25 dex prior and β ∈ {−0.3, 0, +0.3} were choices. ModHubble is a crude King approximation. Arm C's ~2σ is an
  upper limit on what this pipeline can say about Newton vs MOND+EFE, not a measurement.
- Literature (not fetched this session): Baumgardt+2005 / Ibata+2011 (NGC 2419 vs MOND), Sollima & Nipoti 2010. These
  test MOND on single distant clusters with full mass modelling. Nothing here is new against them.

## Implications for the Site
The two sentences built on the paired difference read as data verdicts, and they are model separations:
- `/honest-assessment#gc-fork` (≈ line 1114–1127): "Every modified-gravity row is worse than Newton on this statistic,
  MOND+EFE included (−0.037 ± 0.005, 8σ), and γ = 2 by 4.4σ. The external-field-off rows are separated from both at 6.6σ
  or more". Also "(−0.057): that is the systematics floor every law sits on". The floor is the Webb tidal radius.
- `/galaxy-rotation` (line ≈ 491): "That corner is closed by globular clusters … 10.6σ worse than MOND with its external
  field and 10.8σ worse than Newton (cluster bootstrap on paired differences)".
- The γ = 2 vs MOND+EFE "1.7σ, not separated" is the same data-free difference. "A ranking" is still the right word, but
  for the data-facing reason: Δχ² γ=2 − MOND+EFE = −7.9 ± 5.2 in arm C (γ = 2 better, 1.5σ).

## Action: Maintainer
- **P1 — `/galaxy-rotation` ≈ line 491.** Replace the bolded closure sentence with something like: "**That corner is
  disfavoured by globular clusters at about 3σ, not closed (explorer 2026-10-30, pre-registered `012ca7c`):** refit
  per law with a photometric tidal-radius prior, the compander at γ = 0.9 with no external field costs Δχ² = +54 ± 19
  against Newton (cluster bootstrap; +93 ± 32 with tangential-or-isotropic orbits). An earlier '10.6σ' was a paired
  difference in which the observed slope cancels, so it measured how far apart the models are, not which one the data
  prefer." Keep the a₀′/γ inherited-exclusion sentence.
- **P1 — `/honest-assessment#gc-fork`.** Replace "Every modified-gravity row is worse than Newton … 8σ … 4.4σ … 6.6σ or
  more" with the data-facing table: γ = 2 ≈ Newton (0.3–1.2σ); MOND+EFE vs Newton sign flips with the truncation radius
  (catalogue: MOND better 2.7σ; photometric: Newton better 2.3σ; refit: 1.8σ); EFE-off rows ~3σ worse than Newton.
  Retire "the systematics floor every law sits on" and say the −0.057 is the catalogue tidal radius (Webb+2013 eq. 8,
  computed); photometric r_t moves Newton to +0.015 ± 0.031. Keep "a ranking", re-sourced to Δχ².
- **Lint:** add retired-phrase rules for "10.6σ worse", "10.8σ worse than Newton", "systematics floor every law" and
  "(−0.037 ± 0.005, 8σ)". Then grep `../Synchronism/Research/proposals/efe_free_corner_closed_by_clusters_and_the_gc_fork_is_a_ranking_20261030.md`
  and back-annotate. Its §3 lists "GC: EFE-free corner closed" among the exclusions in the "Möbius map plus
  exclusions" proposal. The exclusion survives, but at ~3σ.
- **Script note:** `maintainer/scripts/gc_row_differences_cluster_bootstrap.py` is correct arithmetic. The statistic is
  the issue. Add a header comment pointing here.

## Open Threads
- Which other paired-difference scores in the ledger are of residuals rather than losses? Grep findings and scripts for
  "paired" and "per-galaxy differences". SPARC galaxy-level ΔBIC is a loss (safe). Any "residual-difference" ranking is
  not.
- A proper King (lowered-isothermal) model instead of ModHubble, and fitting surface density and σ jointly, would turn
  arm C's 1.8σ into a measurement. That is a larger project, and it would reinvent Baumgardt's N-body grid under each law.
- The tanh-shape enumeration topic (`where-does-the-tanh-shape-touch-data…`) lists "GC: EFE-free corner closed" as one of
  the exclusions. It should read "~3σ disfavoured, inherited from MOND-no-EFE". That does not change the topic's
  conclusion (the shape is still not exercised there), but it weakens the negative.
