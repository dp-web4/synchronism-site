# Finding: The 1.00 vs 1.56 wide-binary split is not about deprojection. It is a separation-error setting in the code, and the live question moves to contamination

**Date:** 2026-11-08 · **PREREG:** `704cd42`, addendum `68abd6b`
**Status:** computed independently of both groups' codes, but by one AI session, not outside review. Nothing here moves Bucket 0 or the count.

## Origin
Topic `wide-binary-deprojection-mock-injection-before-dr4.md`. Gaia DR4 is on 2 December 2026.

## Summary
- **Which estimator recovers the truth?** With the physical separation error, both do, within about 3–8%, and they are nearly the same model. In the exact-s limit, free a with an Öpik prior *is* the geometric model. The broken power-law prior moves γ **up** by about 4%, not down.
- **What produces γ = 1.00?** `run_gamma_analysis.py` (repo HEAD `4333e9f`) sets σ_s = max(5% s, σ_d) with σ_d an absolute line-of-sight distance error. σ_s/s is then 1.88 at the median (0.23–17.9; > 1 in 24/36), against a physical 0.09% and the paper's stated "about 0.1%". This confirms Chae, Park & Yoon's allegation at line level and by an independent calculation.
- **Positive control at the real configuration.** That setting returns about **0.65 × γ_true**: injected 1.0 → 0.63, 1.6 → 1.06, 68% coverage about 7%. S&T's injection test ran at 5%, not at the real-data setting, so it could not see this.
- **This does not establish the boost.** Newton alone loses to a uniform boost by ΔlnL = 25, but contaminants can replace the boost. γ depends on the allowed contaminant fraction f: 1.46–1.78 at f ≤ 0.05–0.10, and 1.00–1.24 with f free (fitted f 0.26–0.50). **The crux is now the contaminant fraction of the 36 systems, including the tail systems #3, #4 and #6.**
- **One thing I could not reproduce.** Chae+'s consolidated Γ = 0.102. My per-system values match their table (rms 0.045), but my product gives 0.131–0.139. Unresolved.

## Research Notes

### 1. The lemma: why "deprojection" has no content
For isotropic orbits with uniform phase and priors p(a), p(e), Delaunay variables give

f(r, v | μ) = p(a) p(e) / [(2π)³ μ^{3/2} a^{1/2} e], with 1/a = 2/r − v²/μ, μ = γGM.

- A thermal e cancels, so f depends only on (r, v², μ). L(γ) reduces to low-dimensional integrals.
- With s exact: ∫d ln a δ(s − a g(θ)) = 1/s whatever the angles. So Öpik free-a and the deprojection are the same posterior. Chae+'s "fully equivalent" is exact for Öpik.
- Their "logically impossible" overreaches slightly for a non-Öpik prior: BPL is a different prior. But it moves γ up by 4%. At small a, a fixed v needs larger γ, so no a prior of this sign can make Newton.

Numeric status of the lemma:

| Check (brute force over orbital elements, S&T inputs, 2–4×10⁶ draws per system) | γ |
|---|---|
| Geometric, consistent frame | 1.508–1.517 |
| Free a, Öpik, wide range, σ_s = 5% | 1.534 |
| Free a, Öpik, wide range, σ_s = 1% | 1.671 (effective-sample limited: distorted width) |

The registered |Δγ| < 1% is **not verified numerically**. Seed-to-seed scatter in this brute force is about ±0.05 (base at 5%: 1.637 vs 1.555). The algebra is exact; the numeric check is merely consistent at 5%.

### 2. Checks on the instrument
| Control | Mine | Target |
|---|---|---|
| v_3D, all 36, Table 3 (v4) | ratio 1.000, worst 0.3% | Chae+ v4 |
| Reduction vs direct MC with e kept (α = 1) | 1.915 vs 1.915; 1.705 vs 1.702 | identical |
| S&T geometric (S&T inputs) | 1.544 [1.353, 1.753] | 1.557 [1.375, 1.767] |
| S&T baseline as coded | 0.925 [0.748, 1.144]; brute 0.918, 0.953 | 0.998 [0.809, 1.240] |
| S&T 5% injection, means | 0.921 / 1.483 | 0.932 / 1.509 |
| Chae+ reply's rerun of S&T at 5%, 1% | 1.592, 1.631; brute 1.637, 1.555 at 5% | 1.73, 1.71 |
| Chae+ per-system Γ medians (v4) | median diff −0.001, rms 0.045 | Table 2 |
| **Chae+ consolidated Γ** | **0.139 (v4), 0.131 (S&T/v1 inputs)** | **0.102: FAILS** |

Mocks are drawn from orbital elements, not from the reduction.

Two errors of mine were caught and fixed before any reading:
- The velocity kernel truncated its tails (#3 reached the likelihood floor). It is now importance-sampled.
- Chae's v_r is RV_A − RV_B, the opposite of what I had assumed.

### 3. Decomposition on the real rows (median γ)
| Step | S&T inputs (v1 era) | Chae v4 inputs |
|---|---|---|
| Geometric, coded kernel | 1.544 | 1.318 |
| + BPL and a-range, exact s | 1.610 | 1.376 |
| σ_s = 1% | 1.631 | 1.395 |
| σ_s = 5% | 1.592 | 1.366 |
| σ_s = 10% | 1.535 | 1.332 |
| σ_s = 20% | 1.326 | 1.185 |
| σ_s = 50% | 0.901 | 0.828 |
| **σ_s as coded** | **0.925** | **0.849** |
| As coded, Öpik with range | 1.037 | 0.955 |
| As coded, Öpik without range | 0.418 | 0.350 |

- The fall happens between 10% and 50%. The whole baseline-to-geometric gap is σ_s; at physical σ_s the baseline sits slightly *above* geometric.
- At as-coded σ_s the a prior controls the answer (0.42 to 1.04), which is what "statistically assigned by the prior" means. At exact s the same prior change moves γ by 4%. Physically, a model s far below s_obs shrinks r, so the same v needs less γ.
- pm_jitter barely matters (0.925 → 0.896 up to 0.10 mas/yr).

**A second, independent inflation.** S&T marginalize a free per-system v_sys ~ N(0, 30 km/s), although the data include each system's measured motion. Multiplied by the small factors (1/d_B − 1/d_A) and the direction difference, it adds noise of median about 60 m/s (max 251 m/s) to each proper-motion component, against a table error near 9 m/s.
- Real-row effect at exact s: 1.78 → 1.54 (S&T inputs), 1.71 → 1.32 (v4).
- It biases the geometric arm low on mocks too (γ_true 1.6 → 1.42).

**Input differences to record.**
- The S&T CSV holds Chae's v1-era data: APOGEE v_r without the GR+CB correction later tabulated in v4. System #3's η is 1.16 there and 1.67 in v4.
- Four blank mass pairs (#55, #57, #59, #60) default to 1.0 + 1.0 M☉ (#59: 2.0 vs 2.18).
- `pm_err` is about √2 small relative to the per-component quadrature sum (I did not separately test this one).

### 4. Mock recovery (300 catalogs per arm; Chae v4 template; median recovered γ, 68% coverage in brackets)
| γ_true | Chae kernel | Öpik, no z | BPL, no z | Robust (t5, 40 m/s, no v_sys) | S&T geom | S&T base 5% | **S&T base as coded** |
|---|---|---|---|---|---|---|---|
| 1.0 | 0.975 (.72) | 0.980 (.75) | 1.031 (.66) | 0.984 (.67) | 0.886 (.53) | 0.923 (.66) | **0.629 (.06)** |
| 1.2 | 1.178 (.70) | 1.176 (.70) | 1.240 (.63) | 1.176 (.66) | 1.081 (.55) | 1.131 (.69) | **0.789 (.06)** |
| 1.4 | 1.373 (.72) | 1.363 (.68) | 1.438 (.62) | 1.369 (.67) | 1.265 (.58) | 1.320 (.66) | **0.935 (.12)** |
| 1.6 | 1.547 (.65) | 1.548 (.67) | 1.629 (.68) | 1.531 (.65) | 1.423 (.52) | 1.486 (.62) | **1.059 (.07)** |

- Implicit-a/geometric does not manufacture a boost: it reads 2–4% **low**. On BPL-truth mocks it reads about 7% low (0.923; 1.497).
- **Read through its own calibration, S&T's as-coded 1.00 maps to γ_true ≈ 1.4–1.5** (S&T inputs: 0.925–0.998); v4 inputs give about 1.3. Scatter is about ±0.25. Rough Gaussian distance from the Newtonian mocks (mean 0.639, σ 0.103): 2–3.5σ. This uses a v4 template for S&T-input numbers, so it is an estimate. As coded, the result is not evidence for Newton.
- S&T's repo also holds five γ_true = 1.6 runs at 5% (1.72, 1.75, 1.18, 1.21, 1.68). The paper's Appendix C reports only γ_true = 1 and describes noise "set to those of the corresponding real system"; `run_injection.py` line 95 uses 5%.

### 5. A frame mismatch that answers the reply's "unclear" (P10)
Chae+ Fig. 6 reruns S&T's geometric model: 1.60 as coded, 1.45 at 5%, 1.42 at 1%, and calls the residual "unclear". A geometric model should not care about σ_s. In the code, R = Rz(Ω)Rx(i)Rz(ω) rotates into ICRS, while line 255's deprojection takes i and φ against the line of sight. They agree only at the celestial pole.
- r_proj_model/r_obs over prior draws runs 0.34–2.92 (5–95%), so the r_proj term becomes a real constraint as σ_s shrinks.
- Brute emulation, their frame: 1.44–1.47, 1.31–1.32, 1.26–1.28. Consistent frame: identical at every σ_s (1.51–1.52).
- The drop matches (−0.16 to −0.21 vs −0.18). The level is about 0.13–0.16 below Chae's rerun, and below the registered 1.40–1.50. Mechanism supported, level not reproduced. Also consistent with their footnote that a 0.1% error "did not converge".

### 6. Boost or contaminants? (P11; registered kick model, then labelled exploration)
Model: each system's |v| comes either from an orbit at γ or from an orbit plus an isotropic kick, log-uniform from 100 m/s to a cap. Chae v4 inputs. Not z-using.

| Model (cap 2000 m/s, registered) | lnL | γ | f |
|---|---|---|---|
| Newton only | −789.87 | 1 | 0 |
| Uniform boost | −764.98 | 1.905 | 0 |
| Newton + contaminants | −763.08 | 1 | 0.30 |
| Both | −762.87 | 1.096 | 0.26 |

- Uniform-boost mocks never reproduce the improvement from adding contaminants (2.11 observed; 0/300 reach it, 95th percentile 0.00). They also favour uniform over Newton + c by a median of 10.1 (observed −1.9; 0/300).
- The overall lnL of the uniform fit is unremarkable (p = 0.46), so a plain goodness-of-fit does not reject it. The tail statistics do at p ≈ 0.03–0.04: max η 1.67, and three systems with η > 1.26 (√1.6, the bound-orbit limit at Chae's γ). That threshold was chosen after seeing the data.
- Newton + 30% kicks to 2 km/s is **also wrong**: median max η 2.94 vs the real 1.67.
- **Exploratory, post-hoc caps:** truth (γ = 1, f = 0.15, cap 1000 m/s) and (1.2, 0.10) reproduce the mixture statistics and max η (p 0.24–0.5). (1.6, 0.05, cap 500) does not (0.01–0.02 on those statistics). n(η > 1.26) is low for almost every truth (≤ 0.055): those three systems are hard for everything.

Posterior of γ, with f bounded (exploratory; flat in Γ and f):
| Allowed f | cap 500 | cap 1000 | cap 2000 | P(γ ≤ 1), range |
|---|---|---|---|---|
| 0 | 1.88 | 1.88 | 1.88 | 0 |
| ≤ 0.05 | 1.78 | 1.70 | 1.74 | 0.0004–0.012 |
| ≤ 0.10 | 1.68 | 1.46 | 1.54 | 0.003–0.065 |
| ≤ 0.20 | 1.50 | 1.18 | 1.24 | 0.02–0.19 |
| ≤ 0.50 | 1.24 | 1.00 | 1.08 | 0.12–0.50 |

Chae+ cite an expected fraction ≲ 0.1, and 0.03 ± 0.03 for the quality sample. If that bound holds for these 36, a boost survives at about 1.5–1.8 on this instrument. A bound of 0.2 removes most of it. Fitted f (0.26–0.50) sits above their bound and pushes on a grid edge at cap 500. Boufourou 2026's joint fit on 81,088 2D pairs gives a parallel answer, γ = 1.05 [1.04, 1.07] with f_trip = 0.15. Different sample and method; not an independent confirmation of the fraction here.

**A caution on the tail.** The three highest-η systems (#3, #4, #6) are APOGEE rows whose η rose between v1 and v4 (1.16 → 1.67, 1.17 → 1.34, 1.26 → 1.33). #3 carries a GR+CB correction of 0.291 ± 0.090 km/s on v_r 0.386. Follow-up RVs on those systems would do more than any further modelling.

### 7. Chae's consolidated number
Chae's code on Zenodo (`MCMCwb3D_general.py`) has the same model I integrate, and Chae 2025's Eq. 30 is a literal product. Yet:
- Mine: all 36 Γ = 0.139 ± 0.025 (v4); drop #3 and #59: 0.101.
- Paper: 0.102 (+0.028/−0.021); drop both: 0.042.

The difference (1.4–2.3σ) goes in the direction of the paper being conservative. My estimator's mocks read low, not high, so this is not explained by bias on my side as far as I can test. I have no access to their per-system PDFs or the consolidation script (not in that Zenodo record). Their statement that the anomaly falls to 1.8σ without two systems cannot be reproduced here (mine stays near 3.8σ). **Either implementation could be wrong. Asserting neither.** An aside: Table 2's #53 Γ = 0.314 looks stale against Table 3's η = 0.637 (mine 0.092; S&T CSV η 0.93).

### 8. Predictions scorecard
| | Prediction | Result |
|---|---|---|
| P1 | Lemma, numeric |Δγ| < 1% | Algebra exact; numeric **not verified** at 1% (MC-limited; +2–3% at 5%) |
| P2 | BPL moves γ up 0–10% | **Held** (+4.3%, +4.4%) |
| P3 | Three identities | S&T geom, base **held**; Chae consolidated **failed** (1.81–1.88 vs 1.60 ± 0.08); per-system held |
| P4 | σ_s ≥ 70% of the gap; 5%/1% within 0.15 of geom | **Held** (> 100%; +0.05, +0.09) |
| P5 | As coded: 1.6 → < 1.35, 1 → ≤ 1.05 | **Held** (1.059; 0.629) |
| P6 | Calibration, |bias| ≤ 5% on BPL truth | **Failed narrowly**: −2 to −3.6% exceeds 2 s.e.; one coverage 0.75; BPL truth −7%. Sign is low |
| P7 | 100 m/s noise or 10% companions give ≥ 1.3 | Noise **failed** (1.04; 200 m/s gives 1.26). Companions **held** (2.12) |
| P8 | t5/40 kernel gives 1.35–1.55 | **Mixed**: with v_sys 1.544 and 1.318; without v_sys 1.783 and 1.705. v_sys was the bigger lever and I had not separated it |
| P9 | Newton count ≤ 1.5, P(≥6) < 1%; γ=1.6 count 4–8 | Newton **held** (0.52; 0/300); γ = 1.6 **failed** (3.49; P(≥6) 0.14) |
| P10 | Frame: ≈1.6 → 1.40–1.50; consistent flat | Flat and drop **held**; level **failed** (1.44–1.47 → 1.26–1.32) |
| P11 | Boot GoF p < 0.05; mixture +2; Newton+c within 2 | GoF on lnL **failed** (0.46; tail stats pass, post-hoc); mixture **held** (+2.11); within 2 **held** (−1.90) |

### 9. Reply claims, as tested
| Claim (Chae, Park & Yoon) | Status here |
|---|---|
| S&T code has σ_s = max(5%, σ_d) | **Confirmed** at lines 105–106 and "median 188%" |
| This is why they got Newton | **Supported**, three ways |
| Free a cannot matter | **True for Öpik**; BPL +4% |
| Newton is ruled out by the sample | **Not established**: conditional on contaminant fraction |
| "tweaking/distorting", tempted to distort | **No evidence of motive**. This reads as a defect: the same 5% floor appears from the first release, and the paper states the intended value |
| 200–250 m/s jitter brings consistency with Newton | Not reproduced at my level: 250 m/s gives 1.33–1.36, P(γ<1) ≈ 0.013 |

For Cassini: Desmond, Hees & Famaey 2024's abstract says the Solar System quadrupole "implies, to high precision, no deviation from Newtonian gravity in nearby wide binaries", for modified-Poisson MOND. A real 3D-sample boost therefore pressures the two in tension. Modified inertia is outside that scope.

## Implications for the Site
- `/wide-binaries` says "the disagreement sits in that one modelling step", and lists S&T among third parties leaning Newtonian. Both need changing. My own 2026-06-12 finding ("the entire 4.9σ anomaly lives in one modeling choice", "prior over 3D geometry") was a reading of an abstract that this run refutes.
- The site's "Chae-side boost" branch is not thereby strengthened as gravity. The status stays hung, with the crux restated.
- Nothing changes for the framework: per the DR4 key, every branch lands on an already-closed family.

## Action: Maintainer
1. **`/wide-binaries`, before 2 December.** Replace the "one modelling step" sentence (`src/app/wide-binaries/page.tsx:199–200` and intro at 192) and the status box (222–224). Proposed wording: *"Saad & Ting's γ = 1.00 used a separation error of about 190% of s in its public code (the paper states about 0.1%). An in-house mock test finds that setting returns about 0.65 × the true γ, and that free-a and geometric models agree at the physical error. So the deprojection step is not the crux. Whether the 36 systems show a boost now turns on their contaminant fraction: γ ≈ 1.5–1.8 at f ≤ 0.1, about 1.0–1.2 with f free. Chae+'s consolidated value was not reproduced (0.139 vs 0.102). One AI session's calculation; not externally reviewed."* Mark item (2) of the adjudication list done.
2. **Attribution care.** Say "public code at `4333e9f`", and do not repeat "fatal" or any motive wording.
3. **Reading key** (`maintainer/scripts/wb_dr4_reading_key_PREREG.md`). Add before adoption: for each DR4 analysis, check the error setting used against the stated one, and whether injection ran at the real configuration. Its "report separately" rule stands.
4. **→ Project lead.** Should S&T and Chae+ be told? It is outward-facing, so it needs the lead's decision. Useful content: the frame mismatch, the v_sys term, the injection configuration, and a request for per-system PDFs and the consolidation script.

## Open Threads
- Chae's consolidated Γ: needs their PDFs. It is the one number here that could be my error.
- A proper contaminant model: real hidden-companion orbits passing the sample's RUWE, speckle and multi-epoch RV cuts, instead of a log-uniform kick. This decides between the rows of the f table.
- Run the mixture on v1 inputs, and with z. How much of the tail is the GR+CB correction?
- Actual PyMC rerun of S&T with physical σ_s and fixed frame. Chae+ report non-convergence at 0.1%; a reparameterisation (a from s) would fix it, and that *is* the geometric model.

## Artifacts
`explorer/scripts/`: `wb_estimators.py`, `wb_real_rows.py` (`wb_real_rows_st_output.txt`, `wb_real_rows_v4_output.txt`), `wb_real_extras.py` (`wb_real_extras_st_output.txt`, `wb_real_extras_v4_output.txt`), `wb_mock_injection.py` (`wb_mock_injection_output.txt`), `wb_st_brute.py` (`wb_st_brute_output.txt`, `wb_st_brute_lemma_output.txt`; seed replicate at the end of `wb_exploratory_caps_output.txt`, where the label "lemma" is wrong: an argument slip ran the main set), `wb_boost_vs_contam.py` (`wb_boost_vs_contam_output.txt`, `wb_exploratory_caps_output.txt`), `wb_mixture_profile.py` (`wb_mixture_profile_output.txt`), `wb_chae_diag.py` (`wb_chae_diag_output.txt`), `wb_conflate_table_check.py` (`wb_conflate_table_check_output.txt`), `wb_chae_v4_tables.json` (machine-extracted from arXiv:2601.21728v4). External inputs: `github.com/seratsaad/wb3d-gamma` at `4333e9f` (`data/*.csv`); Zenodo 17113129.
