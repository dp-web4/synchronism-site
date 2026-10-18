# Finding: Does the offset-vs-e_env regression have power against Chae+2020's EFE at N = 141?

## Origin
Topic `environment-pipeline-rekeyed-on-external-acceleration.md`, 2026-10-18 maintainer update ("the first
deliverable is a power number; register the power before reading any new slope").

## PRE-REGISTRATION (written and committed before the script was run)

**Estimators.**
- E1 (registered TEST-08 estimator): per-galaxy mean log residual from the pooled McGaugh RAR fit, all retained
  points (Q ≤ 2, i ≥ 30°, eV/V < 0.1, ≥ 3 points), regressed on log10 e_env (Chae+2020 Table 2, erratum v2).
- E2 (low-acceleration estimator, step-0 open thread): the same residual averaged only over points with
  g_bar < g†/10, galaxies with ≥ 3 such points.

**Signal model (MOND+EFE, per galaxy).** Predicted residual shift Δ_i = mean over that galaxy's retained points of
log10[ν_e(z)/ν_0(z)], z = g_bar/g†, Chae+2020 Eq. 3–4, with e = e_env drawn from its asymmetric Table-2 posterior
(attenuation from e_env error included). The pooled g† is refit on the EFE-shifted mock so the mean EFE is absorbed
as it is in the real fit. Amplitude variants: A1 e = e_env (primary); A2 e = e_env + 0.011 (Chae's ⟨e − e_env⟩);
A3 e = 1.5 e_env.

**Noise model.** Observed per-galaxy offsets minus their own fitted slope (empirical residuals; bootstrap-resampled),
so non-EFE scatter (M/L, distance, inclination) is whatever the data contain.

**Power.** Fraction of 5000 mocks whose OLS slope on log10 e_env is < 0 at one-sided p < 0.05 (EFE sign fixed in
advance).

**Predictions (both directions stated):**
- P1. Predicted E1 slope under A1 is small: |β_pred| between 0.005 and 0.05 dex per dex.
- P2. E1 power under A1 is < 0.5 (the regression is not decisive at N = 141).
- P3. E2 power exceeds E1 power under A1.
- P4. The observed E1 slope lies within 2σ of β_pred (no tension with Chae+2020).
- P5. The observed E1 slope lies within 2σ of zero (no detection).
- P6. Controlling for log D does not flip the sign of the observed E1 slope.

**Verdict rule.** Power ≥ 0.8 and observed slope > 2σ from β_pred (wrong side) → "in tension with Chae+2020 under
this estimator". Power < 0.5 → "uninformative at N = 141; the r = −0.11 is not a result in either direction".
0.5–0.8 → report as weak and state both distances.

**Scope.** Neither outcome moves Bucket 0. Both readings of C_g are nested in MOND, and this tests the MOND+EFE
amplitude on the site's own estimator.

---

## Summary

**The direct regression has no power at N = 141. The density null has none at all.** Against Chae+2020's own
MOND+EFE amplitude (e = e_env, applied pointwise through their Eq. 3–4 and passed through TEST-08's pooled refit),
the registered TEST-08 estimator detects the predicted slope 18% of the time (E1). The low-acceleration estimator
detects it 26% of the time (E2). The registered density regression detects it **5.7% of the time, against a 5%
false-positive rate**: it cannot tell MOND+EFE from no EFE. The observed slope (−0.105 ± 0.078 dex/dex) sits
0.6σ from the MOND+EFE prediction (−0.058) and 1.35σ from zero. Both hypotheses fit. **This was already known:
the 2026-08-07 explorer finding ran a matched-filter version and reported "no power, 1.35σ separation".** That
verdict never reached /cdm-discrimination or the 10-18 topic update, which both say "not computed". What is new
today: (i) a confound-free estimator, (ii) the density regression's power, and (iii) a sample-size forecast that
partly corrects the 08-07 "not a bigger field sample" conclusion. At SPARC's noise and e_env spread, 80% power
needs ~1,500 galaxies (E1) or ~600 low-acceleration galaxies (E2). That is BIG-SPARC scale, if e_env gets computed
for it.

## Result

Script `explorer/scripts/efe_offset_eenv_power.py`; output `..._output.txt`; JSON `explorer/data/efe_offset_eenv_power.json`. The ⟨log g_bar⟩ control is `explorer/scripts/efe_offset_eenv_x0_control.py` (`_output.txt`).

**Instrument checks (passed before reading slopes).** TEST-08 offsets reproduce to 2×10⁻⁷ dex. The pooled
g† = 1.161×10⁻¹⁰ (TEST-08's own fit). Chae Table 2 gives 148 rows with asymmetric e_env errors, erratum values
confirmed (NGC5055 e_env = 0.040). With no signal, the rejection rate is 0.049 (nominal 0.05).

| | E1 (all points, N = 141) | E2 (g_bar < g†/10, N = 95) |
|---|---|---|
| observed slope on log₁₀ e_env | **−0.105 ± 0.078** (r = −0.11) | **−0.094 ± 0.106** (r = −0.09) |
| same, controlling log D | −0.094 ± 0.080 | — |
| same, controlling ⟨log g_bar⟩ | −0.106 ± 0.078 | — |
| per-galaxy noise σ | 0.125 dex | 0.136 dex |
| predicted slope, A1 e = e_env | −0.058 | −0.104 |
| predicted slope, A2 e = e_env + 0.011 | −0.054 | −0.100 |
| predicted slope, A3 e = 1.5 e_env | −0.084 | −0.150 |
| **power, A1 / A2 / A3** (one-sided 5%) | **0.18 / 0.17 / 0.27** | **0.26 / 0.23 / 0.40** |
| observed − predicted (A1) | −0.60σ | +0.09σ |
| observed vs 0 | −1.35σ | −0.89σ |
| N for 80% power (A1, same noise, same e_env spread) | **≈ 1,530** | **≈ 615** |

Secondary (added after the PREREG run, labelled as such): the registered density regression (distance-corrected
log(1+N_cyl)) has predicted slope −0.0014 under A1 and power **0.057** against MOND+EFE. The observed slope is
+0.003 ± 0.023.

**Verdict under the pre-declared rule:** power < 0.5 → *uninformative at N = 141.* r = −0.11 is not a result in
either direction. It is not in tension with Chae+2020, and it is not a detection.

## PREREG scorecard (5 of 6 held)

| | prediction | outcome |
|---|---|---|
| P1 | \|β_pred\| in 0.005–0.05 | **refuted**: 0.058 (larger than guessed; my hand estimate under-weighted the outer points) |
| P2 | E1 power < 0.5 | held (0.18) |
| P3 | E2 power > E1 power | held (0.26 vs 0.18) |
| P4 | observed within 2σ of β_pred | held (−0.60σ) |
| P5 | observed within 2σ of zero | held (−1.35σ) |
| P6 | log D control keeps the sign | held (−0.094) |

## Research Notes

### The re-derivation, and how it happened
`efe-sign-is-not-convention-dependent-the-blocker-is-a-category-error.md` (2026-08-07, §4–5) asked the same
question with a matched filter Δ_pred(e_env, ⟨x₀⟩). It found β_E = +2.12 ± 0.74 against a permutation null of
+1.35 and a separation of 1.35σ, and concluded "no power". I found it only *after* the run, by grepping "power" in
the EFE findings. The 10-18 maintainer update cited the 07-24 step-0 finding (which has the r = −0.11) but not the
08-07 one (which has the power). /cdm-discrimination's 10-18 sentence ("whether that direct null has power … has
not been computed") is therefore wrong on the record. This is the second instance in three sessions of a queued
item re-proposing an executed result (10-16: the locality no-go).

### What today adds that 08-07 did not have
1. **A null at zero.** The 08-07 filter carried 71.5% of its variance in the galaxy's own mean acceleration, so
   its EFE = 0 null sat at +1.35, not 0, and needed a permutation to locate it. A plain slope on log e_env has no
   such problem: r(log e_env, ⟨log g_bar⟩) = +0.02, and adding ⟨x₀⟩ moves the slope by 0.001. The identity
   control returns 0.049. The two estimators agree on the conclusion. Separations are 0.75σ (slope, signal/SE) and
   1.35σ (matched filter, which uses more of the signal shape).
2. **Pointwise Chae ν_e with the pooled refit.** 08-07 used the deep-MOND algebraic approximation at ⟨x₀⟩. The
   refit matters: it absorbs the mean EFE, so only the spread in e_env survives. That is the point of
   [[check-whether-the-statistic-cancels-the-effect]] applied to a slope. The slope survives, but the level does not.
3. **The density regression's power is ≈ α.** The persona's question ("does r² = 0.0001 have power against MOND's
   0.09 dex?") now has a number: 0.057 vs 0.05. The density tracer shares 19% of variance with e_env, but the
   predicted slope on it (−0.0014) is 17× smaller than its own SE (0.023).
4. **N, not only dynamic range.** 08-07 said "the deficit is not N, it is dynamic range" and checked only
   N = 175. That holds within SPARC. Scaling the signal-to-SE ratio by √N gives about 4σ for E1 at N ≈ 4,000 at
   SPARC's noise. (E1 is 0.75σ at 141; E2 is 0.98σ at 95, and two thirds of galaxies have ≥ 3 low-acceleration
   points.) Environment selection (08-07's route: group/satellite samples at e ≈ 0.1–0.3) and sample size are two
   separate routes. BIG-SPARC opens the second. Caveats: per-galaxy noise in BIG-SPARC will be higher than in SPARC
   (less uniform photometry and HI quality), and e_env needs a Desmond-type field model out to BIG-SPARC's
   distances. Both make 1,500 a lower bound.

### What a powered result would and would not mean
- A powered detection at MOND amplitude would exclude the internal-only algebraic C_g reading. The field-equation
  (L2) reading inherits MOND's EFE. It would not be MOND-specific: Paranjape & Sheth 2022 get an EFE-like
  correlation in ΛCDM through halo concentration. Their sign discriminator (downward deviators sit in larger
  fields under MOND) is what such a test should register.
- A powered null would put L2 C_g under the same pressure as MOND+EFE.
- Neither outcome moves Bucket 0. Both readings are nested in MOND, and EFE = 0 is also GR/ΛCDM (08-07 §6).

## Implications for the Site
- /cdm-discrimination line ~160 ("has not been computed … queued for the explorer") is outdated. The power was
  computed on 08-07 and is recomputed here. Both say there is no power.
- Any sentence that reads the TEST-08 density null as weighing on MOND's EFE should say it has power ≈ α
  (0.057 vs 0.05) against it.

## Action: Maintainer
1. **/cdm-discrimination** (the 10-18 "Does that null constrain MOND's EFE?" item). Replace the last three
   sentences with: "It does not. Against Chae et al.'s own predicted EFE, the density regression has 5.7% power
   (5% would be chance), and the direct regression on e_env has 18% (26% using low-acceleration points only). The
   observed slope sits 0.6σ from the MOND+EFE prediction and 1.35σ from zero, so both fit. 80% power needs
   ~1,500 galaxies at SPARC's noise (BIG-SPARC scale), or a sample selected for strong external fields. First
   computed 2026-08-07, recomputed 2026-10-18." Badge: `untested` stays correct (no power ≠ refuted).
2. **Propagation check.** Before seeding an EFE topic, grep `explorer/findings/*efe*` for "power". The 08-07 file
   name starts "efe-sign-…", which hides its power result. Consider renaming that title's second clause in the
   SESSION_MAP or index.
3. **BIG-SPARC trigger topic** (`a0z-and-bigsparc-trigger-preregistration.md`). Add this row: "offset vs log
   e_env slope; MOND+EFE A1 predicts −0.058 dex/dex (E1) / −0.104 (E2); powered at N ≳ 1,500 / 600; requires e_env
   for BIG-SPARC". Register the P&S sign discriminator alongside it.

## Open Threads
- Can e_env be computed for BIG-SPARC? Desmond's 2M++/BORG field reaches ~200 h⁻¹ Mpc. BIG-SPARC's distance
  distribution decides the usable N.
- E2's noise might drop if the per-galaxy residual is weighted by point error rather than averaged flat. That is a
  cheap rerun, but the PREREG did not name it.
- The 08-07 matched filter extracts more separation (1.35σ vs 0.75σ) but needs a permutation null. A matched filter
  orthogonalised against ⟨x₀⟩ might keep both properties.
