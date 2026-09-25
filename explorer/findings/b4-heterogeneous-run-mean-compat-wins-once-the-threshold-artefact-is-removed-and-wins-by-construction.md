# Finding: B4 run heterogeneous. The support term that beat 1/⟨C⟩ is a 0.5-prior threshold artefact; with it removed, 1/⟨C⟩ holds to 0.06 dex, and it holds by construction

## Origin
Topic `b4-heterogeneous-compatibility-vs-lambda-max-prior-art.md` (maintainer 2026-09-25): "B4 is the only registered bet
with a winning branch; run it as a three-way test."

Pre-registered: `76f15e8` (7 models, H-thr mechanism, verdict rule), written before the script existed. Addendum A `e6c4666`
(the mechanism knock-out) was committed after the main run and before the knock-out run.
Script: `explorer/scripts/b4_heterogeneous_compatibility.py` (+ `_output.txt`, `_calprior_output.txt`,
`_robustness.py` + `_robustness_output.txt`, summaries, raw JSON). The simulator is imported unchanged from
`Synchronism/simulations/compatibility_synthon_experiment.py`. There were 19,200 runs, 40 reps per point, with agent
labels permuted per rep.

## Summary
Across 10 heterogeneous compatibility structures (blocks, ring, path, star, core–periphery, log-normal, Erdős–Rényi), the
**location** of the coherence crossover is set by the **mean** compatibility. It is not set by the algebraic connectivity
λ₂, which is off by 0.4 dex out of structure, and λ_max is worse than the mean on the star. The **ceiling** tracks λ₂
(Spearman 0.96, post hoc).

In the simulator as written, a third ingredient, the support density d (the fraction of pairs that can couple at all), wins
the registered comparison. The **registered verdict is "B4 refuted as stated"**. The pre-registered knock-out then showed
that the support effect and the maintainer's 82 % affine intercept both come from one line: an unobserved edge sits at
exactly 0.5, so any coupling event, however weak, flips it across the threshold. With a calibrated prior, 1/⟨C⟩ predicts all 10
structures to **0.062 dex** (about 15 %).

The catch: the simulator defines compatibility as a multiplier on the averaging weight. So p and C_ij enter the
first-order dynamics only as the product p·C_ij, and 1/⟨C⟩ is what mean-field gives *by construction*. The surviving form
of B4 is a mean-field identity of its own update rule. It is a reparametrization, and it cannot move Bucket 0. The one
registered bet with a "winning branch" wins only where it cannot count.

## Research Notes

### 1. Derivation check: λ_max has no derivation here; λ₂ does, and it loses
The update x_i ← x_i + 0.3·C_ij·(x_j − x_i), fired with probability p per ordered pair per round, is consensus (Laplacian)
dynamics. No incoherent state goes unstable, so the Restrepo–Ott–Hunt λ_max onset criterion (Kuramoto-type) does not
apply. The consensus scalar is λ₂(L) (Olfati-Saber & Murray 2004). The topic's prior-art candidate was the wrong spectral
quantity, but λ₂ is prior art too, so the fork stays three-way.

Power check (before any run): at N = 6, λ_max lies between the mean degree 5⟨C⟩ and at most 1.34× it (the star is the
extreme). Mean vs λ_max cannot meet the topic's ≥ 2× separation bar at N = 6. This was declared in the PREREG.

### 2. The main run (simulator as written, 0.5 prior)

The primary estimator is p_mid, where the rep-mean C(p) crosses halfway between C(0) and C(1). Every model was
calibrated on the 5 uniform structures only.

| model | RMS out of structure (dex) |
|---|---|
| M1 K/⟨C⟩ (B4 as stated) | 0.111 |
| M2 K/λ_max | 0.139 |
| M3 K/λ₂ | 0.394 |
| M4 a + b/⟨C⟩ (the maintainer's affine reading) | 0.174 |
| M5 a + b/λ_max | 0.192 |
| M6 a + b/λ₂ | 0.200 |
| **M7 a/d + b/⟨C⟩ (H-thr; 0 extra parameters)** | **0.072** |

Bootstrap over reps: M7 won 500 of 500 resamples, and M7/best-mean ratio is 0.67 [0.56, 0.78].

| registered | result |
|---|---|
| P1 control: Hill p_half at U1.0 in [0.013, 0.025]; uniform intercept share > 0.5 | **held** (0.0175; 0.71) |
| P2 M1 RMS > 0.15 and M1 not the winner | **failed** (not the winner, but 0.111 < 0.15; 1/⟨C⟩ is better than I expected) |
| P3 ring / U0.4 ≥ 1.5 (same ⟨C⟩ and λ_max, support 0.4 vs 1) | **held** (1.69) |
| P4 RMS(M7) < RMS(M4) | **held** (0.072 < 0.174) |
| P5 Fiedler loses | **held** (0.200 vs 0.072) |
| Verdict rule | winner M7 at 0.65× the best mean model → **B4 refuted as stated** |

A surprise: the maintainer's affine correction (M4) predicts heterogeneous structures *worse* than the uncorrected B4
(0.174 vs 0.111). The intercept describes the uniform data correctly, but it is attached to the wrong variable (see §3).

Secondary estimator (the source's 2-parameter Hill p_half, post hoc): M6 0.129, M7 0.144, M1 0.215. The
estimators disagree because the source's Hill runs from 0 to 1 with no baseline. The real curves run from C(0) ≈ 0.20 to
C(1) ≈ 0.76–0.89, so p_half mixes location with ceiling, and the ceiling tracks λ₂ (Spearman 0.96: path 0.76,
block3 0.81, uniform ≥ 0.4 0.87–0.89). Hill exponents are 0.28–0.48 on all 15 structures. A Hill exponent below 1 is not
a switch: **"p_crit" is the midpoint of a smooth crossover, not a critical point**, and B4's "genuine law of phase
transitions" wording has nothing to attach to.

### 3. The knock-out (Addendum A): the support effect is the threshold artefact
Every agent was started at the calibrated edge prior π = 30/528 = 0.057 instead of 0.5. A single weak event then cannot
carry an unobserved edge across 0.5, so the weight has to matter.

| registered | result |
|---|---|
| A1 uniform intercept share < 0.5 | **held** (0.71 → 0.32 by the linear fit; 0.12 by the log-LSQ M4 fit) |
| A2 M7 advantage mostly gone: M7 / best-mean > 0.8 | **held** (0.65 → 0.93) |
| A3 C spread across c at p = 0.02 increases (direction only) | held, but only trivially (0.032 → 0.038; at p = 0.02 the calibrated curves have barely left baseline) |

Under the calibrated prior: M1 0.062, M7 0.058, M4 0.073, M2 0.105, λ₂ models 0.42–0.44. The uniform log-log slope of p_mid
against c goes from −0.52 to **−0.92** (B4 says −1). ring/U0.4 drops from 1.69 to 1.11. On the star, λ_max misses by
−0.23/−0.24 dex in both arms, against an obs 95 % CI of about ±0.03 dex (main) and ±0.08 dex (calibrated), while M1 misses by −0.11/−0.10. So the one structure that
can separate mean from λ_max at N = 6 favours the mean, beyond its CI in both arms. This is weak evidence, as registered:
one structure, and a 1.34× maximum lever.

The calibrated prior is not free: the ceiling falls to C(1) ≈ 0.44–0.58 within 80 rounds, and the source's Hill estimator
hits its p_half = 1 bound on 9 of 15 structures, another sign that it fails.

### 4. Why the surviving law cannot count
The expected first-order drift of agent i per round is Σ_j p·0.3·C_ij·(x_j − x_i). Coupling probability and compatibility
enter **only** through their product, so any location statistic of the linearised dynamics scales as 1/(the scale of C).
What is left once linearised is *which linear functional of C*, and the answer is the mean (the in-degree, i.e. intake from
a shared world), not the Laplacian gap. Agents mostly converge because they converge on the same *truth*, not by
propagating agreement. That is why blocks that each cover all four edge types barely need the cut. It is a reasonable
network-science fact, but it belongs to this averaging model, not to Synchronism, and the proportionality was written into
the update rule when "compatibility" was defined as a weight. The departures from 1/⟨C⟩ (the intercept, the support
effect) are all nonlinear artefacts of the 0.5 threshold.

So the three branches resolve as follows:
- **1/⟨C⟩**: holds to about 15 % once the artefact is removed, but by construction → `reparametrization`.
- **λ_max (Restrepo–Ott–Hunt)**: no derivation for averaging dynamics; worse than the mean on the one structure that can tell.
- **Affine**: an accurate description of the 0.5-prior uniform data, with the intercept attached to the wrong variable
  (event reach, not compatibility).

### 5. What this says about the registry
The maintainer's 09-25 audit found that B4 is the only runnable bet with a winning branch. After running it, **its winning
branch is a definitional identity of the simulator**. This matches the program-wide pattern (the tracks were
reparametrizations, S616), now reached from the applied axis. It strengthens the maintainer's suggested site sentence:
"no registered test can move Bucket 0". What would make B4 non-trivial is a prediction where compatibility does *not*
enter as a weight multiplier, for example compatibility as a *filter* on which beliefs transfer (the source's own
"Next Experiment 2/4"). Then 1/⟨C⟩ would be a result, not an input.

## Implications for the Site
- `/coupling-experiment` (lines ~531–571) still says **"p_crit ∝ 1/⟨compatibility⟩ … CONFIRMED"** in green and presents
  **"p_crit ≈ 0.0185/⟨compatibility⟩"** as "The Compatibility Formula". That formula predicts 0.0925 at C = 0.2, and
  0.0320 was observed (2.9× off). The maintainer corrected PREDICTIONS.md on 09-25, but the correction did not reach this page.
- `/test-catalog:393` "B4 compatibility scaling (untested in the heterogeneous case)" is now run.
- The Phase-2 badge ("homogeneous case fits (r = 0.994)") should say *monotone*, not a fitted law.

## Action: Maintainer
- **P1** `/coupling-experiment`: change the "CONFIRMED" row to "monotone in the homogeneous case; the heterogeneous run
  (explorer 2026-09-25) shows 1/⟨C⟩ holds to ~15 % only once a 0.5-prior threshold artefact is removed, and holds by
  construction (compatibility is a weight multiplier)". Badge: `reparametrization`. Replace "The Compatibility Formula"
  card with that sentence, or remove it. Add a site_lint rule for `0.0185 / &lang;compatibility` and "CONFIRMED" beside
  `compatib`.
- **P1** PREDICTIONS.md B4 row: executed; registered verdict **refuted as stated** (support density wins, 0.072 vs 0.111
  dex). Knock-out: the refuting term is the threshold artefact. The surviving 1/⟨C⟩ is a mean-field identity of the update
  rule, so it is a **reparametrization** and not a Bucket-0 candidate. Also retract the affine intercept as a
  compatibility property; it is event reach.
- **P2** `/test-catalog:393`: replace "untested in the heterogeneous case" with the result.
- **P2** The Phase-2 "Block structure … suppress the phase transition" card: the Hill-k differences it reads are
  estimator artefacts (no baseline); the ceiling effect is real and tracks λ₂.
- **→ dp** The maintainer's scoping question (does an applied-axis result move Bucket 0?) is moot for B4. Its win branch is
  definitional. The site sentence "no registered test can move Bucket 0" is now supported from both the physics and the
  applied side.

## Open Threads
- **Compatibility as a filter, not a weight.** Agent i accepts only the belief *types* that j's compatibility unlocks.
  Then p and C no longer enter as a product, and 1/⟨C⟩ becomes a falsifiable prediction. This is the only version of B4
  that can make a claim.
- **The ceiling law.** C(1) against log λ₂ (r = 0.92, post hoc) needs registering. It is probably standard, as the
  consensus-with-sources ceiling, so check the prior art first.
- **Replacement resilience (Exp D, ratio 1.106).** The same 0.5-prior artefact is a candidate cause: a fresh agent at
  0.5 adopts neighbours' thresholds after single events. Cheap to test with the same knock-out.
- N = 12 would give λ_max vs mean a 1.8× lever on the star, still under 2×. The question is probably not worth the runs,
  because λ_max has no derivation for this dynamics.
