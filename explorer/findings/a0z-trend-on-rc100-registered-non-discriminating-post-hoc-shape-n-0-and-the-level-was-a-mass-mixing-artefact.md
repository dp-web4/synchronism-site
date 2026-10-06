# Finding: The a₀(z) trend on RC100. Registered verdict NON-DISCRIMINATING. Post-hoc, the shape wants no evolution (n = 0.0, branch A at the ~2σ edge of a galaxy bootstrap). The "k > 1 everywhere" residual was a mass-mixing artefact.

## Origin
Topics `a0-of-z-trend-ratio-on-rc100-level-free.md` and the RC100 leg of `a0z-and-bigsparc-trigger-preregistration.md`.
This executes the one stopping-table row with data in hand (explorer 10-04: "RC100, unrun, data in hand").

**Pre-registered:** `explorer/work/2026-10-06-rc100-a0z/PREREG.md`, commit `8b4b355`. The registration was made before any
Table 3 value was read. Exposure was declared: the caption, Appendix C, Table 4, and the 09-19 subset numbers.
**Data:** RC100 Table 3 (Nestor Shachar+2023, arXiv:2209.12199) is a raster image in the arXiv PDF. I transcribed it by
eye to `work/2026-10-06-rc100-a0z/rc100_table3.csv` (100 rows). Every row was re-read against a second, 220-dpi page
render. The rows were also checked for internal consistency: V_c²(1−f_DM)R_e/(GM_bar) against B/T has rms 0.12. The
three outliers (#46, #67, #83) were re-read and are correct as printed. All three have high σ0.
**Scripts** (each with `_output.txt`):
- `scripts/a0z_rc100_trend_ratio.py` (registered, plus identity controls and a labelled post-hoc σ0 check)
- `scripts/a0z_rc100_posthoc_allz_shape.py` (**post-hoc**)
- `scripts/a0z_rc100_vs_ciocan_posthoc.py` (**post-hoc**)

## Summary
On the registered statistic, ρ = k(z ≥ 1.5)/k(z < 1.5) with the level free, RC100 gives **ρ = 1.11** (simple ν; RAR ν
1.15). Branch A predicts **1.74** and constant a₀ predicts 1. The galaxy-bootstrap σ_stat is 0.36 in ln ρ. **The
verdict is NON-DISCRIMINATING in all six registered variants** (two ν × three floors). This is the nearC ∧ nearA cell
of an exhaustive rule, so it fired as a clause, not by default. Pulls: +0.2σ from C, −0.9σ from A (primary); −1.2σ from
A with no systematic floor.

Two unregistered results are worth more than the verdict:
1. **The level is k ≈ 1.0 at both redshifts** (0.97 at median z = 0.91, 1.07 at z = 2.18). The 09-19 levels of 3.8
   (Price MCMC) and 1.6 (Genzel LSQ) came from combining SED-plus-scaling-relation baryon masses with dynamically fitted
   f_DM. RC100 reports M_bar and f_DM from the same decomposition (averaged over three methods). On that, Milgrom's a₀
   fits at z ≈ 0.9 and at z ≈ 2.2. The 09-19 open thread "why does every handle want more mass than either a₀
   supplies?" has a post-hoc answer: the mass and the f_DM came from different places.
2. **Post-hoc full-z shape.** Fit a₀ ∝ E(z)ⁿ with the level free. Best n = 0.0 (RAR: 0.1). The formal Δχ² = 1
   interval is ±0.2, which would put branch A (n = 1) at 5σ. The galaxy bootstrap gives a 95% interval of about
   [−1.0, +1.0], with P(n ≥ 1) = 0.04–0.05. Branch A sits at the edge of the galaxy-level 95% interval. That is
   ~2σ, post-hoc, and not a kill.

Count stays 6. Bucket 0 stays 0. The a₀(z) row is executed and still undecided, and its power limit is now measured.

## Research Notes

### 1. What Table 3 actually is
Appendix B: *"we average the best-fit values [of three fitting methods] with their combined uncertainties."* So the
topic's "one method throughout" is wrong in a helpful direction: each galaxy is a three-method average. Table 4 says
methods agree on f_DM(R_e) to 0.56–0.77 combined σ per galaxy.

M_bar is a fit parameter with a Gaussian prior centred on M⋆ (SED) + M_gas, where M_gas comes from the Tacconi+2020
scaling relation in (z, M⋆). **That z-dependent scaling relation enters M_bar through the prior.** The memory concern
the topic raised ("gas scaling relations re-entering through the ratio") applies and is not modelled here. It is the
second suspect after σ0 for any future discriminating result.

Bins: z < 1.5 has N = 44 (0.61–1.48, median 0.91); z ≥ 1.5 has N = 56 (1.50–2.52, median 2.18). ρ_A = ⟨E⟩_hi/⟨E⟩_lo =
1.737.

### 2. Registered result
| ν | k_lo [Δχ²=1] | k_hi | χ²/N lo, hi (χ² from output ÷ N, my arithmetic) | ρ_obs | σ_stat (boot) | verdict at σ_sys = 0.33 / 0.47 / 0 |
|---|---|---|---|---|---|---|
| simple | 0.97 [0.87, 1.09] | 1.07 [0.97, 1.19] | 2.27, 1.30 | 1.109 | 0.364 | ND / ND / ND |
| RAR | 1.11 [1.00, 1.21] | 1.27 [1.17, 1.39] | 2.20, 1.26 | 1.149 | 0.339 | ND / ND / ND |

**Identity controls** (synthetic f_DM generated through the same mass MC and the table's own errors, 40 realizations):
- Truth C: recovered ln ρ = −0.000 ± 0.134.
- Truth A: recovered +0.507 ± 0.141 against a true +0.552, so the pipeline is ~8% biased low and that is small.
- Mean bootstrap σ_stat on synthetic data is 0.14–0.15.

On the real data, the same bootstrap gives **0.36**. That 2.5× excess is the real data's scatter beyond its quoted
errors (χ²/N = 2.3 in the low-z bin). If the quoted f_DM errors were complete, RC100 would put A at 3.9σ.

### 3. Scored predictions
| | prediction | outcome |
|---|---|---|
| P1 | Table 3 per-galaxy and runnable | **held** |
| P2 | k_lo > 1.5 | **refuted**: 0.97. The "everyone wants more mass" residual I carried in from 09-19 does not exist on a self-consistent decomposition. |
| P3 | primary verdict NON-DISCRIMINATING | **held**, as a firing of the nearC ∧ nearA cell, in 6 of 6 variants |
| P4 | 1 < ρ_obs < ρ_A | **held** (1.11) |
| P5 | σ_stat < 0.33 (floor-limited, not sample-limited) | **refuted**: 0.36 / 0.34. The sample limits the test as much as the floor does. |

3 held, 2 refuted. Registration defects: none found in the rule. My exposure was the 09-19 subset levels, and those
turned out to be the wrong prior for the level. That did not touch the ratio.

### 4. Power, measured rather than asserted
σ_stat scales as ~0.36·√(100/N). With σ_sys = 0, excluding A at 2σ when the truth is C needs σ < 0.276, so **N ≈ 170**.
Making the nearC ∧ nearA band vanish, so that every outcome discriminates, needs σ < 0.138, so **N ≈ 680**. With the
registered σ_sys = 0.33 (from 09-19's Price-vs-Genzel spread), **no sample size discriminates**. The PREREG said so in
advance.

Whether that floor is real is now the sharpest open question. 09-19's 0.47 was one draw of a method difference, on the
same galaxies, with ratio errors of ~0.3 each. It is consistent with being mostly statistical. RC100's three-method
average and its Table 4 agreement suggest a smaller floor. Per-method RC100 tables, if released, would measure it
directly.

### 5. Post-hoc: the registered σ0 caveat
- Median σ0 is 30 km/s at low z and 54 km/s at high z. Per-galaxy best ln k correlates with σ0 (Spearman +0.20,
  p = 0.045), and with z not significantly (−0.14).
- Restricting both bins to matched σ0 gives ρ = 0.95 (σ0 30–70, N = 21/35) and 0.52 (40–80, N = 14/41).
- The confound I registered as able to *fake* A pushes the other way here: matching on σ0 lowers ρ. It moves ρ by
  ~0.6 in ln on small subsets, which is as large as the lever.

### 6. Post-hoc: full-z shape and the formal-vs-galaxy width
| ν | Δχ²(A − C), level free | galaxy-boot 16–84% | P(A better) | n_best (a₀ ∝ Eⁿ) | formal ±1 | boot 2.5–97.5% | P(n ≥ 1) |
|---|---|---|---|---|---|---|---|
| simple | +14.5 | [−0.7, +31.0] | 0.17 | 0.0 | [−0.2, 0.2] | [−1.0, +1.0] | 0.039 |
| RAR | +13.9 | [−2.9, +32.3] | 0.21 | +0.1 | [−0.1, 0.3] | [−0.9, +1.1] | 0.048 |

The formal interval is ~2.75× narrower than the galaxy bootstrap even here, with **one point per galaxy**, so this is
not an N_eff effect. It is the excess scatter that the identity control isolates. Read at the formal width, A would
look "excluded at 5σ". That is the sentence not to write.

### 7. Prior art, found after registration (owned)
- **Del Popolo & Chan 2024** (arXiv:2405.01841, Phys. Dark Univ.) used RC100 Table 3 for a₀(z) already. They took 17
  galaxies with g < a₀ at R_e and a₀ = V_c⁴/(G·M_B), with the total M_bar in place of the mass within R_e. They found a
  weak *anti*-correlation (r = −0.12) and called it "reference only". Same data, cruder estimator, the same qualitative
  non-growth. My registration did not cite it; the topic did not either. Their "combined correlation" leans on SPARC at
  z < 0.032, where cosmic a₀ evolution is < 2%, so that half reads distance systematics, not evolution.
- **Ciocan+2026** (MUSE-DARK III, arXiv:2604.22613, already in the ledger) report a₀(z) = 1.0 + 1.59z (×10⁻¹⁰) on
  0.33 < z < 1.44. Extrapolated to RC100's bins, their line predicts ρ = 1.66, close to A's 1.74. RC100's 1.11 sits
  −1.4σ (stat) from it.
- In the overlapping range (RC100 z < 1.44, split at 0.91, N = 18/24), RC100 is useless: ln ρ = −0.55 ± 0.56. The line
  also predicts a₀ ≈ 2.45 at z ≈ 0.9, where RC100's self-consistent decomposition gives 1.0–1.7. That is a level, and
  levels have been method-dominated in every handle so far.
- Three datasets, three readings: Ciocan grows, Del Popolo flat-to-falling, RC100 here flat. That is now one handle
  with its sign reported by two independent estimators on RC100.

## Implications for the Site
- The a₀(z) row's support improves. "Non-discriminating" now has a registered execution on the cleanest available
  sample (100 discs, three-method average, one decomposition). The measured reason is σ_stat 0.36 from excess scatter,
  plus an unmeasured method floor.
- **Do not** write "RC100 disfavours a₀ ∝ H(z) at 5σ" (formal width) or "at 2σ" as a registered result. The ~2σ edge
  is post-hoc.
- "Constant Milgrom a₀ fits the RC100 phantom fraction at z ≈ 0.9 and 2.2 (k = 0.97, 1.07)" is a true statement. It is
  a positive for the *parent* (MOND), not for the framework. The site should not count it either way.
- The stopping table: the RC100 row moves from "unrun, data in hand" to "executed 2026-10-06: NON-DISCRIMINATING
  (registered); post-hoc shape n = 0.0, A at the 95% edge". It remains a can-only-lose row. A larger sample
  (N ≳ 170) with a measured method floor would decide it.

## Action: Maintainer
- **P2** `/parameter-derivations` a₀(z) block and the stopping/forward-data table on `/for-researchers`: add the RC100
  execution in one line, with the registered verdict first and the post-hoc shape marked post-hoc. Cite Del Popolo &
  Chan 2024 as prior use of the same table.
- **P2** site_lint: a REQUIRES rule so that "n = 0.0" or "RC100" adjacent to "a₀(z)" carries "post-hoc" within ±3
  lines. Retire any "5σ" near RC100.
- **P3** Where the site mentions Ciocan+2026's rising a₀, add: "RC100 (z 0.6–2.5) shows no rise in the level-free
  ratio (1.11 ± 0.36 in ln vs 1.74 predicted); different methods, different signs."

## Open Threads
- **Measure the method floor on the ratio.** Ask the RC100 team (or check the ApJ machine-readable tables) for
  per-method (A/B/C) values. If the per-method ρ spread is ≪ 0.33, the registered floor was too large, and N ≈ 170
  decides the row.
- **Undo the gas prior.** M_bar's prior uses Tacconi+2020 M_gas(z, M⋆). Refit with M_gas from a z-independent
  f_gas(M⋆) and see how far ρ moves. I need log M⋆ from Table 3 (column 6, not transcribed).
- **Why χ²/N = 2.3 at low z but 1.3 at high z?** The low-z bin carries the excess scatter, and its quoted f_DM errors
  are the ones that look too small. A z-dependent error model is itself a z-dependent systematic in the ratio.
- **BIG-SPARC and DR4 preregistrations** (the other two trigger rows) remain unwritten; the topic stays in the queue.
