# Finding: Ciocan's a₀(z) refit as E(z)ⁿ with the level free. The slope is anchor-free; the paper's two estimators straddle n = 1 (bins 0.71 ± 0.13, global line 1.15) and disagree with each other at 3σ; RC100 (0.0 ± 0.5) decides nothing; and every site σ on this row divided by a 95% CI

## Origin
Topic `a0z-ciocan-per-bin-exponent-vs-rc100.md` (maintainer 2026-10-10). Pre-registered before the figure was read:
`work/2026-10-10-ciocan-a0z/PREREG.md`, commit `9527643`. Script `scripts/a0z_ciocan_bins_Ezn.py` with
`_output.txt`. Paper: Ciocan et al. 2026, MUSE-DARK III, A&A 709, L16, arXiv:2604.22613v1, read from the arXiv HTML
downloaded to /tmp (the fetch summariser declined to quote sections verbatim; the local copy was grepped instead).

## Summary
The site's a₀(z) row tests a *ratio* prediction (branch A: a₀(z)/a₀(0) = E(z)) by comparing *levels* at z ≈ 1, which
is exactly where the anchor dominates. The ratio prediction's own statistic is the slope n in a₀ ∝ E(z)ⁿ with the
level free, and that statistic is anchor-free: adding the SPARC anchor moves n by +0.05 and its error by 4%
(P4 refuted). On that statistic Ciocan's four quantile bins give **n = 0.71 ± 0.13** (jackknife 0.09), excluding
n = 0 at 5σ and n = 1 at 2.1σ; the paper's global linear fit, projected over the same 0.33–1.44 range, gives
**n = 1.15 ± 0.02**; its MOND-track refit gives 0.99 and its per-galaxy regression 1.04. The paper's two headline
estimators disagree on the slope at 3σ (bins: a₁ = 0.98 ± 0.19; global: 1.59 ± 0.05), and the global line misses the
two outer bins by 2.2–2.3σ each (χ² = 12.2 for 4 points, no free parameters). The framework's n = 1 sits between
them. "Faster than H(z)" is carried by the extrapolated intercept a₀(0) = 1.0, below the data range. RC100's
n = 0.0 ± 0.5 is 1.4σ from the bins and 2.3σ from the global line, so the site's sentence "the two surveys disagree
with each other by more than either disagrees with any model" is not supported: RC100 is uninformative, not
discordant. Mayer et al. 2023's ΛCDM factor ≈ 3 over z = 0–2 is n = 0.99, so the ΛCDM degeneracy alone makes the row
non-discriminating; the anchor argument is not needed and, for the slope, is wrong.

Separately, every σ the site prints against Ciocan's numbers (12σ, 9.4σ, 9.8σ, "1.0σ from 1.04") divides by a
**95% confidence interval** as if it were 1σ. The paper says so at Eq. 2 and Eq. 4. The measurement-only figures
are about 2× larger (the paper's own is 19σ); the anchor-carried ones barely move.

Count stays 6. Bucket 0 stays 0. No verdict changes; the row's *reason* changes.

## Research Notes

### 1. What the paper publishes, verbatim
- Eq. 2: a₀|z~1 = 2.38 (+0.12/−0.10) ×10⁻¹⁰ m/s², "with the errors denoting the 95% confidence intervals (CI) from
  our MCMC fits. This value is significantly higher, by ∼19σ, than the canonical value of a₀|z=0 = 1.2 ± 0.26".
- Eq. 3–4: a₀(z) = a₀(0) + a₁·z, "treating both a₀(0) and a₁ as free parameters", a₀(0) = 1.0 ± 0.04,
  a₁ = 1.59 ± 0.10, "with the errors denoting the 95% CI". The corner plot (Fig. 10) prints 1σ: a₀ = 1.00 ± 0.02,
  a₁ = 1.59 ± 0.05, with a visible a₀–a₁ anticorrelation the text calls not significant (it changes nothing below).
- Sect. 3.2: four quantile bins, "rising from ∼1.99 … in the lowest z-bin to 2.71 … in the highest". The per-bin
  values are in Fig. 3 only. No table. No per-galaxy a₀ table; the DARK data-release page lists the UDF sample but
  the only link resolves to the lensing-cluster catalogues (Richard+2021). A galaxy bootstrap is not possible from
  what is public.
- Appendix F: the global fit "is not a regression through the a₀ values obtained from the binned analysis … higher-z
  measurements typically carry less statistical weight, and small offsets between the global relation and the
  binned estimates are therefore expected."
- Sect. 4: "our measured a₀(z) is faster than that of H(z) (Milgrom)"; "Mayer find that a₀ grows by a factor of ∼3
  from z = 0 to 2, slightly less than the factor of ∼4 increase inferred here over the same z range".
- Appendix E (MOND-track refit): a₀(0) = 1.03 ± 0.05, a₁ = 1.20 ± 0.10 (Eq. 14); per-galaxy linear regression
  a₁ = 1.42 (+0.94/−0.89), a₀(0) = 1.11 (+0.39/−0.51). Individual MOND fits give a₀ from 1.3×10⁻¹¹ to 9.6×10⁻¹⁰,
  median 2.27.
- Masses: M⋆ is "dynamically inferred in our 3D forward modelling", not fixed by SED priors; gas from a constant-Σ_HI
  parametric model. So the RC100 mass-mixing artefact (SED masses with dynamical f_DM) does not apply in the same
  form; the level here is a kinematic quantity throughout. The level comparison still inherits whatever the
  DC14-vs-MOND modelling does (2.38 DM-track vs 2.19 MOND-track).

### 2. Figure 3, pixel-extracted
Axis calibration from the tick marks (x: 0, 0.5, 1.0, 1.5 at px 156, 425, 693, 961; y: 3.0, 2.5, 2.0, 1.5 at px
107, 212, 317, 422) was validated against the drawn global line: at z = 0.5, 1.0, 1.3 the purple line reads 1.795,
2.595, 3.067 against Eq. 4's 1.795, 2.590, 3.067. The black dots sit at the bin midpoints, not medians.

| bin | z range (blue bar) | z (dot) | a₀ (dot) | grey half-width | N (≈79/4) |
|---|---|---|---|---|---|
| 1 | 0.334–0.669 | 0.503 | 1.990 | 0.086 | ~20 |
| 2 | 0.671–0.978 | 0.825 | 2.200 | 0.105 | ~20 |
| 3 | 0.980–1.110 | 1.047 | 2.571 | 0.112 | ~20 |
| 4 | 1.112–1.437 | 1.276 | 2.710 | 0.136 | ~20 |

The caption says "uncertainties shown as grey error bars" without a level. The full-sample 95% half-width is 0.11,
so a quarter-sample 95% half-width would be ≈0.22; the drawn bars (0.09–0.14) are consistent with 1σ, and that is
the primary reading. The 95% reading is run as a sensitivity: it halves σ_n and changes no sign.

### 3. Registered results
| estimator | convention | n | σ_n | χ²_min/dof | n = 0 | n = 1 |
|---|---|---|---|---|---|---|
| bins, bars = 1σ | M (no anchor) | **+0.71** | 0.135 (jackknife 0.087) | 0.99/2 | 5.3σ | −2.1σ |
| bins, bars = 1σ | A (SPARC 1.2 ± 0.26 at z = 0) | +0.77 | 0.129 | 2.69/3 | 6.0σ | −1.8σ |
| bins, bars = 95% | M | +0.71 | 0.067 | 3.96/2 | 10.6σ | −4.2σ |
| global line 1.0 + 1.59z, over 0.33–1.44 | level free | **+1.15** | 0.02 (MC on corner 1σ, corr 0 or −0.5) | — | — | +7σ formal |
| MOND-track line 1.03 + 1.20z | level free | +0.99 | — | — | — | — |
| per-galaxy regression 1.11 + 1.42z | level free | +1.04 | (a₁ ± 0.9 → σ_n ≈ 0.6) | — | — | — |
| Mayer+2023 ΛCDM, factor 3 over 0–2 | — | +0.99 | — | — | — | — |
| paper's "factor ∼4" (line to z = 2) | — | +1.29 | — | — | — | — |
| RC100 (explorer 10-06, post-hoc) | level free | 0.0 | 0.5 (galaxy boot 95% [−1, +1]) | — | — | — |

Level-free n = 1 on the bins gives k = 1.395 (SPARC 1.2) with residuals +1.65, −0.47, +0.03, −1.59σ: the outer
bins pull in opposite directions from branch A, which is what n = 0.71 means. Level-free n = 0 gives residuals
−4.0, −1.3, +2.1, +2.8σ: constant a₀ is dead on these bins at any level.

The bins fitted with the paper's own linear form give a₁ = 0.98 ± 0.19, a₀(0) = 1.48, against the global
1.59 ± 0.05: 3.0σ apart. The global line scored against the four bins with no free parameter has residuals
+2.21, −1.06, −0.84, −2.34σ, χ² = 12.2/4 (p ≈ 0.016). "Small offsets" is the paper's phrase; the numbers say the
global line is too steep for its own bins.

### 4. Scored predictions
| | prediction | outcome |
|---|---|---|
| P1 | binned n (M) in [0.4, 0.9] | **held** (0.71) |
| P2 | global-line n in [1.0, 1.3] | **held** (1.15) |
| P3 | estimators differ by > σ_n(binned) | **held** (0.43 vs 0.135; 3.2σ) |
| P4 | anchor pulls n up ≥ 0.2 and cuts σ_n ≥ 30% | **refuted** (+0.05, −4%). The slope does not see the anchor. |
| P5 | bins compatible with RC100 < 2σ; global not (≥ 2σ) | **held** (1.4σ; 2.3σ) |
| P6 | Eq. 2's error is 95% CI; site's 12σ understates ~2× | **held** (1σ ≈ 0.056 → 21σ; paper prints 19σ) |

5 held, 1 refuted. The refutation is the useful one: the anchor dependence the site has treated as the row's
limiting systematic since 2026-08-04 is a property of the level comparison, not of the prediction.

Decision rule (registered): binned n excludes 1 at ≥ 2σ → third clause. Honest reading: 2.1σ formal on four bins
read from a figure, 3.3σ on the jackknife, 4.2σ if the bars are 95%; and the same paper's global estimator sits on
the other side of n = 1 by a larger margin. The rule fired, and the paper's internal disagreement is larger than the
margin by which it fired. The row's status is "estimator-dominated", not "anchor-dominated".

### 5. What "faster than H(z)" means
In the paper's convention, a₀(z)/a₀(0) = 1 + 1.59z = 2.59 at z = 1 against E(1) = 1.79. That ratio is taken to the
fitted intercept at z = 0, outside the data (z ≥ 0.33). Within the data the same line is k·E(z)^1.15 with k = 1.31,
15% steeper than H(z), not 45%. The site quotes the sentence three times. It is true of the line and its intercept;
it is not true of the bins (n = 0.71, slower than H(z)); and it is not true of the paper's MOND-track refit (0.99).

### 6. Prior art, found after registration (owned)
- Milgrom's own a₀ ∝ cH(z) suggestion (cited by Ciocan as "Milgrom1") is the n = 1 branch; the framework's branch A
  is that, with the 2π. Already on the site.
- Mayer et al. 2023 eq. (13) is branch A written inside ΛCDM; already on the site. The new fact is that their
  factor ≈ 3 over z = 0–2 is n = 0.99 in the same units, so the slope comparison is where the ΛCDM degeneracy is
  exact, not approximate.
- Del Popolo & Chan 2024 (RC100, flat-to-falling) is in the 10-06 finding.

### 7. Register entries (for `table-transcribed-numbers-register.md`)
Two verbatim reads done today, format: source · table/eq · row · value as printed · CI level · read date · pages.
- DESI 2024 V (arXiv:2411.12021v2) · Table 10 ("Results from Full-Modelling fits assuming a ΛCDM models with
  informative Gaussian priors on ω_b and n_s") · row "All" · σ₈ = 0.841 ± 0.034 · (Ω_m 0.296 ± 0.010, H₀ 68.63 ± 0.79,
  ln10¹⁰A_s 3.117 ± 0.097, n_s 0.994 ± 0.028, χ² 352/(442−14)) · **matches the site on 7 pages** · 2026-10-10.
  The maintainer's "unchecked since May" item is closed.
- Ciocan 2026 (arXiv:2604.22613v1) · Eq. 2 · a₀|z~1 = 2.38 (+0.12/−0.10) · **95% CI** · Eq. 4 · a₀(0) = 1.0 ± 0.04,
  a₁ = 1.59 ± 0.10 · **95% CI** · Fig. 10 · 1.00 ± 0.02, 1.59 ± 0.05 · 1σ · Fig. 3 bins as in §2 (pixel read, no
  CI level printed) · site: /mond-unification, /parameter-derivations, /honest-assessment · **fails on CI level**
  on every σ quoted against these numbers; the values themselves are correct. Note the site prints the intercept
  as both "1.00 ± 0.02" (table) and "1.00 ± 0.04" (prose) without saying one is 1σ and the other 95%.

## Implications for the Site
- The row's reason is wrong even though its verdict is right. "Anchor-dominated" describes a level comparison. The
  prediction is a ratio; its statistic is the slope; the slope is anchor-free and estimator-dominated.
- The sentence added today, "the two surveys disagree with each other by more than either disagrees with any
  model", should go. RC100 is 1.4σ from Ciocan's bins. It is uninformative at σ_n ≈ 0.5.
- The "signal/systematic ≈ 1.15 → untestable with foreseeable data" sentence on /parameter-derivations is also a
  level statement. On the slope, the limiting systematic is the paper's own estimator spread (0.71 vs 1.15), which
  is a methods question (point-weighted global likelihood vs equal-population bins) that per-galaxy data would
  settle. That is testable, and the authors hold the data.
- Every σ against Ciocan on three pages treats a 95% CI as 1σ.

## Action: Maintainer
- /mond-unification (the 2026-10-10 like-for-like block) and /parameter-derivations (anchor table + the Λ-face
  paragraph): relabel the σ's. Measurement-only: 2.38 vs 1.20 is ~21σ (paper: 19σ); vs 2.15 is ~4σ. Anchor-carried:
  4.4σ and 0.5σ (unchanged). The table rows "+9.4σ low" / "+9.8σ low" become ~19σ / ~18σ, or better, drop the
  level table's σ column in favour of the slope row below.
- Add one slope row, level-free, with the table in §3 (bins 0.71 ± 0.13; global 1.15; MOND-track 0.99;
  per-galaxy 1.04 ± 0.6; RC100 0.0 ± 0.5; Mayer ΛCDM 0.99; branch A = 1; constant a₀ = 0). State: constant a₀ is
  excluded by Ciocan's bins at any level (5σ); n = 1 is between the paper's two estimators; ΛCDM+baryons sits at
  n ≈ 1 too, so nothing here selects the framework. Replace "anchor-dominated" with "estimator-dominated; the
  anchor does not enter the slope".
- Remove "the two surveys disagree with each other by more than either disagrees with any model"; replace with
  "RC100's slope error (±0.5) is too wide to test either".
- Label the intercept once: 1.00 ± 0.02 (1σ) = 1.00 ± 0.04 (95%).
- Lint: add rules for "12σ" next to "2.38", "9.4σ", "9.8σ", and "surveys disagree".
- The DESI Table 10 item on the maintainer's next-session list is closed (verbatim match).

## Open Threads
- Why is the global line 3σ steeper than its own bins? Candidates: (i) low-z galaxies contribute more resolved points
  and lower a_bar, and the MNR's Gaussian prior on true log a_bar (μ_gauss, w_gauss fitted globally) is then not the
  per-bin prior; (ii) intrinsic scatter is fitted once globally (0.16 dex) but rises 0.13 → 0.19 across bins, which
  reweights the high-z end; (iii) a linear-in-z form through points whose a_bar distribution shifts with z. Only the
  authors' per-point data can separate these. Worth an email, not a session.
- The paper's individual MOND fits span 1.3×10⁻¹¹ to 9.6×10⁻¹⁰ in a₀ (a factor 74) with median 2.27. Any slope from
  79 galaxies with that spread has a galaxy-level error far above the bin formal errors (RC100's identity control
  showed 2.5× on a cleaner sample). The 0.13 here is a floor, not an estimate.
- Does the bin-3 narrowness (0.98–1.11, the z ≈ 1.0–1.1 overdensity in Fig. 4) make bins 3 and 4 share an
  environment? If the a₀ rise is partly environmental, equal-population binning in a field with structure along z
  is not the same as binning in z.
- Register topic: two entries done, the rest (SPARC counts, RAR scatter, KiDS bins, Baumgardt, Desmond 8.7σ, Ishak
  μ₀, Mayer factor 3) remain. The CI-level column should be added to the register's schema; it is the failure mode
  here and it is invisible to a value-only check.
