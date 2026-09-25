# PREREG — B4 heterogeneous compatibility: which scalar of C[i][j] sets p_crit?

Explorer, 2026-09-25. Committed **before** `b4_heterogeneous_compatibility.py` is written or run.
Topic: `topics/b4-heterogeneous-compatibility-vs-lambda-max-prior-art.md`.

## What has been looked at already (disclosure)

- The Phase-2 source code (`Synchronism/simulations/compatibility_synthon_experiment.py`) and the stored Exp A
  mean-C table (`results/compatibility_uniform_20260308_1931.json`). No heterogeneous run has been made.
- Code reading gave a **mechanism hypothesis** (H-thr) before any new run. Agents score edges by thresholding beliefs at 0.5,
  and an unobserved edge sits at exactly 0.5. Any coupling event, however small its weight 0.3·C_ij, pushes the merged
  belief to the same side of 0.5 as the partner's. So for unobserved-type edges the thresholded metrics (Jaccard, F1)
  count *events*, not weight. Part of p_crit should therefore be compatibility-independent, which is the affine
  intercept the maintainer found. The stored table fits this post hoc: at p ≤ 0.02 the five uniform curves overlap within
  ~0.05. That is why H-thr is registered as a hypothesis and not claimed as a result.
- Derivation check (the topic asks for it). The update x_i ← x_i + 0.3·C_ij·(x_j − x_i) is **consensus (Laplacian)
  dynamics**. No incoherent state loses stability, so the Restrepo–Ott–Hunt λ_max onset criterion, which is for
  Kuramoto-type instability, has no derivation here. For consensus, the natural spectral scalar is the algebraic
  connectivity λ₂(L) (Olfati-Saber & Murray 2004). λ_max is kept as a candidate anyway, because the topic registered it.
- Power check (graph scalars only, no simulation). At N = 6, λ_max(C) is always between the mean degree 5⟨C⟩ and at most
  **1.34×** it (the star is the best case). **Mean vs λ_max cannot be separated at the topic's ≥ 2× bar at N = 6.** This is
  declared now: no verdict between M1/M4 and M2/M5 will be claimed unless the star alone decides it by more than its CI.
  Fiedler λ₂ separates from ⟨C⟩ by up to 10× (block2_b0.1), and support density d does too (ring vs U0.4: same ⟨C⟩,
  same λ_max, d = 0.4 vs 1).

## Design

- Simulator unchanged (imported from the Synchronism repo). N = 6 agents, specialist observation, 12 nodes, 30 edges,
  4 types, η = 0.15, 8 obs/round, 80 rounds, self-weight 0.7.
- **Agent labels are permuted at random for each rep** so a structure is not tied to the fixed type assignment. All
  candidate scalars are permutation-invariant.
- Structures (C off-diagonal; diagonal irrelevant):
  - Calibration: uniform c ∈ {0.2, 0.4, 0.6, 0.8, 1.0}.
  - Test (10): block2 (3+3, within 1, between 0.1); block2 (between 0.3); block3 (2+2+2, between 0.1); ring (c = 1);
    ring (c = 0.5); path (c = 1); star (c = 1); core–periphery (core pair 1, core–periphery 0.5, periphery–periphery 0);
    log-normal (fixed draw, seed 3, median 0.3, σ = 1, symmetrised, clipped to [0, 1]); Erdős–Rényi (q = 0.4, weight 1,
    fixed connected draw, seed 5).
- p grid: 0, 0.001, 0.002, 0.005, 0.01, 0.02, 0.035, 0.05, 0.075, 0.1, 0.15, 0.2, 0.3, 0.4, 0.7, 1.0. 40 reps each.
- **Primary p_crit = p_mid**: where the rep-mean C(p) crosses (C(0) + C(1))/2, by linear interpolation in log p between
  grid points. Bootstrap over reps (1000) for the CI. It has a baseline and a ceiling. The original 2-parameter Hill
  (0 → 1, no baseline) does not, and the source's k ≈ 0.47 is the tell.
- Secondary: the original 2-parameter Hill p_half, same code as `compatibility_synthon_analysis.fit_models`, for continuity.

## Models (each calibrated on the 5 uniform structures only by least squares in log p_mid, then predicting the 10 test structures with no refit)

| id | model | params |
|---|---|---|
| M1 | K/⟨C⟩ (B4 as stated) | 1 |
| M2 | K/λ_max(C) | 1 |
| M3 | K/λ₂(L) | 1 |
| M4 | a + b/⟨C⟩ (affine, the maintainer's reading) | 2 |
| M5 | a + b/λ_max | 2 |
| M6 | a + b/λ₂ | 2 |
| M7 | a/d + b/⟨C⟩, d = fraction of nonzero off-diagonal C (H-thr) | 2 (same calibration as M4, since d = 1 on uniform) |

Score: out-of-structure RMS of log10(pred/obs) over the 10 test structures.

## Predictions (registered)

- **P1 (control).** The original Hill p_half at U1.0 reproduces the source's 0.0185 within [0.013, 0.025]. On uniform,
  p_mid is affine in 1/c with intercept a > 0 and a/(a+b) > 0.5 at c = 1.
- **P2.** B4 as stated (M1) is refuted out of structure: RMS(M1) > 0.15 dex, and M1 is not the winner.
- **P3.** Same ⟨C⟩, different support: p_mid(ring) / p_mid(U0.4) ≥ 1.5.
- **P4.** H-thr beats the affine mean: RMS(M7) < RMS(M4).
- **P5.** Fiedler loses: min(RMS(M3), RMS(M6)) > min over the others. Reason: in the block structures each block mostly
  covers all 4 types, so blocks converge to the *truth* without crossing the cut. Consensus speed is the wrong quantity
  when agreement comes through a shared world.

## Verdict rule for the B4 ledger row

- B4 **survives in weak form** (the mean is the right scalar, affine) if M4 or M1 has the lowest RMS and it is < 0.10 dex.
- B4 is **refuted** if the winner is from another family (λ₂, or d via M7) with RMS < 0.8× that of the best mean-based
  model.
- **Undecided** otherwise, including a mean-vs-λ_max tie, which is expected from the power check.
- In any case: if no model gets under 0.15 dex, the finding is "no single scalar of C sets p_crit at this horizon".

---

## Addendum A (2026-09-25, after the main run, before the knock-out run): the mechanism knock-out

Main run result at the time of writing: M7 won (RMS 0.072 vs M1 0.111). The secondary estimator (the original Hill p_half)
favours M6 narrowly, and C(p = 1) tracks λ₂ (post hoc). H-thr is a claim about a *mechanism*, so it has to be knocked out
directly. Set every agent's initial belief to the calibrated edge prior π = 30/(12·11·4) = 0.0568 (log-odds −2.81), not
0.5. Then one weak coupling event can no longer carry an unobserved edge across 0.5 (0.0568 + 0.3·c·0.84 < 0.5 for all
c ≤ 1), so compatibility weight has to matter again. Same grid, reps, seeds, structures, estimator and models.
Script flag `--prior calibrated`.

- **A1.** The uniform intercept share a/(a+b) at c = 1 falls below 0.5 (it was 0.71).
- **A2.** The M7 advantage mostly disappears: RMS(M7) / min(RMS(M1), RMS(M4)) > 0.8 (it was 0.65).
- **A3 (direction only).** At p = 0.02, the spread of mean C across the five uniform c values exceeds the 0.5-prior
  spread.

If A1–A2 fail, the support effect is not the threshold artefact, and H-thr's *mechanism* is refuted even though its
*predictor* won.
