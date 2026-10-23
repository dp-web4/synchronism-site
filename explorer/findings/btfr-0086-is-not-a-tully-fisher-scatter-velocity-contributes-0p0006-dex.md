# Finding: σ_int = 0.086 dex is not a Tully–Fisher scatter. Velocity contributes 0.0006 dex of it

## Origin
Topic `btfr-0086-dex-axis-convention.md` (maintainer 2026-10-23). The topic asked: "is 0.086 in log M_b or log V?"
The answer is log M_b. Answering it exposed a bigger problem: the number does not depend on V.
PREREG `b134d0f` (`findings/scripts/btfr_0086_identity_control_PREREG.md`).
Script and output: `findings/scripts/btfr_0086_identity_control.py`, `…_output.txt`. The script reuses Session 610's
own loader and estimator verbatim, by exec of source lines 1–278.

## Summary
Session 610's σ_int = 0.086 ± 0.003 dex is the residual of **log M_b regressed on five predictors**: log V, the
i-band TFR residual, Δ_SPS, g−i, and f_gas. Three of those are built from M_b's own ingredients: L, the two
stellar-mass estimates, and M_gas/M_b. The control is to shuffle V across galaxies, or drop V entirely. Either way
σ_int = 0.0870, against 0.0864 for the real model. **Velocity contributes 0.0006 dex.**

It is worse than "mostly algebra". It is **exactly** algebra:
- Durbala's Taylor stellar masses are the Taylor+2011 colour formula, to catalogue rounding:
  log M*_T = −0.662 + 1.000 log L_i + 0.700 (g−i), rms 0.0037 dex, R² = 1.0000, N = 14,435.
- So S610's target log M_b,Mendel = log(M*_T·10^(−Δ_SPS) + M_gas), with M_gas = f_gas/(1−f_gas)·M*_T.
  That is a closed-form function of four of S610's five predictors.
- Reconstructed with no fit: rms **0.0037 dex** on the 677.

**The 0.086 dex is the linearisation error of an exact identity.** OLS fits a linear model to log of a sum. Its value
is set by choosing a linear functional form. A nonlinear fit would give "σ_int" ≈ 0 and, by S610's logic, "MOND
consistent, CDM rejected". Neither is a fact about galaxies. So both of these verdicts compare a photometric-estimator residual
with a dynamical prediction:
- "MOND rejected at 32σ" (S610);
- "CDM-consistent at z = +0.5" (S610), and today's "suspended".

Neither comparison has content.

Two further results:
- **The site's Desmond 2017 comparison mixes units.** The paper's table is in log V_f: SPARC 0.029, abundance
  matching 0.064, abundance matching with zero galaxy–halo scatter 0.061. The site quotes "~0.25 dex" (log M_b)
  beside "0.061" as if both were in log M_b. That makes the prediction look as if it falls 4× when it falls 5%. The
  paper says the opposite of the site's reading: the scatter "cannot be appreciably lowered by tightening the
  galaxy–halo connection".
- **The like-for-like number exists on the same 677 galaxies.** The plain inverse BTFR (log V at fixed M_b, noise
  modelled) gives σ_int = **0.073 ± 0.002 dex in log V**. That is above abundance matching's 0.064 and 2.5× SPARC's
  0.029. On ALFALFA W50 this sample is not tighter than the ΛCDM prediction. It cannot discriminate in either
  direction, because W50 and SPS systematics dominate.

## Research Notes

### Pre-registered predictions vs result
| | Prediction | Result | Verdict |
|---|---|---|---|
| P1 | shuffled-V 5-var σ_int ≤ 0.12 (refuted if ≥ 0.20) | median 0.0870, 95% band 0.0867–0.0870 (200 perms) | **held, far beyond the threshold** |
| P2 | reproduce 0.086 ± 0.003 and 0.270 | 0.0864 ± 0.0027; 0.2695 ± 0.0076 | held |
| P3 | colour-only (log V, g−i) σ_int ≥ 0.20 | 0.2689 (g−i adds nothing) | held |
| P4 | shuffled R² ≥ 0.80 | LOO R² 0.957 (real 0.958) | held |

I expected "mostly algebra" (P1 allowed up to 0.12). I did not expect the velocity's share to be zero to 3 decimal
places.

### Why it happens
`tfr_resid = logL − fit(logV)`. With log V also in the model, {log V, TFR residual} spans exactly {log V, log L}. The
same fit, written in the equivalent basis:

| basis | coef V | coef 2nd | Δ_SPS | g−i | f_gas |
|---|---|---|---|---|---|
| S610 form [V, TFR-res, …] | **+3.349** | +0.902 | −0.449 | +0.629 | +1.036 |
| same span [V, log L, …] | **+0.173** | +0.902 | … | … | … |

The "+3.35 BTFR slope" in the S610 form is the TFR slope carried through log L's 0.902. The physical content is
log M_b ≈ 0.9 log L + colour/SPS/gas terms + 0.17 log V. The regression found that once L is known, V is nearly
redundant for predicting the *mass estimate*, which is built from L. A Tully–Fisher scatter must keep the mass
estimate off the right-hand side, or fix its M/L from external information. This model fits it in-sample to the
same quantity.

The "M/L wall" table in S610 (0.276 → 0.145 → … → 0.086) reads as BTFR variance progressively explained by
M/L. Its first step (+TFR residual, 0.276 → 0.145) is mostly L predicting a mass made of L.

### The exact identity (`scripts/taylor_mstar_is_photometry_check.py`, run after the PREREG and not pre-registered)
- **Taylor masses.** OLS of log M*_T on (log L_i, g−i) over 14,435 galaxies: intercept −0.662, slopes **1.000** and
  **0.700**, rms 0.0037. That is Taylor+2011's eq. 8 (log M* = −0.68 + 0.70(g−i) − 0.4M_i). The small intercept
  offset is the M_☉,i convention.
- **Mendel masses.** Mendel M* is a real SED fit: log L_i and g−i give rms 0.149, R² 0.969. But Mendel enters S610
  only through Δ_SPS = log M*_T − log M*_M, which S610 puts on the right-hand side. That hands the regression
  Mendel's mass, given L and g−i.
- **Reconstruction.** log M_b,M rebuilt from (L, g−i, Δ_SPS, f_gas) with the two Taylor coefficients: rms 0.0037 on
  the optimal 677. Velocity is not needed and not used.
- **This voids S592's circularity test.** S592 asked whether the gain came from "L derived from M*" and answered
  "only 8.8% circular", because i-band L was "independent of stellar mass". But i-band L *is* the input to the Taylor
  M* used in Mbar_T and f_gas. S592 replaced one copy of the identity with another. Its "8.8%" measures the
  difference between two parametrisations of the same identity.

### The axis question the topic asked
- 0.086 and 0.270 are in **log M_b** (y = log M_bar,Mendel; forward OLS).
- Forward OLS slope dlogM/dlogV = 3.02. That is attenuated: W50 noise sits in x, and the inverse slope gives 4.61.
  At these slopes the topic's ~4× axis factor is real.
- Inverse plain BTFR: rms 0.074 dex in log V; σ_int 0.073 ± 0.002 (0.072 at 80–150 km/s, 0.076 at 150–400).
  The noise model is S610's (W50 kinematic; distance and HI projected by the inverse slope). It omits inclination
  error and SPS-mass error. 0.073 is therefore an **upper bound** on physical scatter.

### What is and is not overturned
- **Overturned:** "σ_int = 0.086 dex BTFR intrinsic scatter" as a description. Also anything compared against it:
  - CDM's internal 0.085 and Desmond's 0.25;
  - MOND's zero;
  - the tier-1 "σ_int remains at 0.086 with larger sample";
  - S610's BIG-SPARC forecast ("4σ rejection if MOND"), which inherits the estimator.
- **Not overturned:** the July finding that the site had inverted S610's verdict, and its prior-art finding. Kannappan
  et al. 2002 also showed TF residuals carry M/L. Both stand. The 07-03 sweep stopped at "model-dependent noise
  budget". The issue is upstream of the noise budget.
- **Not this framework's ledger.** As the site already says, this is CDM vs MOND. Bucket 0 and the count are unchanged.
  The cost is to the site's credibility: a "definitive", 0.95-readiness publication-roadmap item on four pages has no
  velocity in it.

### The broader pattern (rabbit hole, not executed)
The same construction (log L as a regressor, M_b built from L as the target) is in the S593–594 "TFR residual
captures ALL intrinsic scatter" claim. It may also be in S483–495's 6-var offset model, where log L has t = −36. That
claim's "corrected scatter < noise ⇒ complete" may be the same identity. A shuffled-V control is a one-line check for
every regression in the ALFALFA arc that puts L on the right of a mass built from L.

## Implications for the Site
The CDM-discrimination thread has been re-badged four times (below CDM → consistent → suspended). Each time the
question was which benchmark. The measured quantity was never the scatter of a velocity relation. "Suspended pending
a like-for-like comparison" is the wrong state. The like-for-like comparison is computable on the same data, and it is
0.073 dex (log V) against 0.064. On this sample the comparison is underpowered by systematics and is not a CDM
consistency check.

## Action: Maintainer
- **P1 /cdm-discrimination:**
  - Retitle the headline from "Measured intrinsic scatter σ_int = 0.086" to what it is: the residual of an in-sample
    photometric mass model, independent of V (shuffled-V control 0.0870 vs 0.0864).
  - Replace "suspended" with "the statistic is not a BTFR scatter". Give the plain-BTFR numbers on the same 677: 0.270
    dex in log M_b (forward) and σ_int 0.073 dex in log V (inverse, an upper bound) vs Desmond's 0.064 (abundance
    matching) and 0.029 (SPARC), all in log V.
  - Fix the units mix: "with zero abundance-matching scatter the mean falls to 0.061" is in log V (≈ 0.24 dex in M_b).
    The paper: "cannot be appreciably lowered by tightening the galaxy–halo connection". Line 69, "Desmond's 0.061 shows
    the prediction depends strongly on the assumed galaxy–halo scatter", is inverted. Delete it.
- **P1** propagate the same fix to /galaxy-rotation (bullet l.163 and tile l.202), /honest-assessment (l.728, l.1873
  "BTFR intrinsic scatter"), /rar-scatter l.70, /cosmology-predictions l.142, /prediction-tracker,
  /publication-roadmap (readiness 0.95), /tier-1-existing l.181.
- **Lint rules:**
  - "0.086" requires "not a BTFR scatter" or "independent of V" on the same surface;
  - "0.061" near "Desmond" requires "log V".
- **Back-annotate** Session610_CDM_Synthesis.md: the shuffled-V control, the basis-change coefficients and the
  0.073 inverse number. The M/L-wall table's first row is the identity.

## Open Threads
- Run the shuffled-V control on S593–594 ("captures ALL intrinsic scatter") and S483–495 (6-var offsets).
  Prediction: the same identity, with V's marginal share ≲ 0.01 dex.
- A like-for-like abundance-matching number on W50 widths. Desmond's mocks use V_f, and W50 ≠ V_f, especially at
  low mass. Needs a mock, not a lookup.
- Is there any regression in the archive's galaxy arc that keeps the mass estimate off the right-hand side? A
  one-afternoon grep of `lstsq(` calls whose design matrix contains `logL` while y contains `Mbar`.
