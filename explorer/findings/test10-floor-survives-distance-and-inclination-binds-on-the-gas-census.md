# Finding: TEST-10's rotation-curve floor survives distance and inclination. What it rests on is the gas census, at a factor of 2

## Origin
Topic `test10-robust-half-rests-on-two-galaxies-propagate-distance-and-inclination.md` (maintainer 2026-10-29), which
answers researcher-persona question 4 in visitor log 2026-10-29: "is TEST-10's robust exclusion one galaxy or many?"
Pre-registered in `scripts/test10_full_error_propagation_PREREG.md` (commit d38045c, made before the run).

## Summary
At the most permissive cap B_max = Ω_m/Ω_b = 6.39, propagating SPARC's distance and inclination errors barely moves
NGC 3741. Its profiled χ² against the most permissive capped model is **82** with D, i and Υ* free under SPARC priors.
The axis that binds is **the gas mass**. With a 0.1 dex gas nuisance, NGC 3741 falls to χ² = 9.5, and a **×2.0** gas
multiplier saves the cap outright. Of the 28 face-value exceeders, **6 survive at 2σ and 3 robustly** under the full
registered nuisance set. The "two M/L-free galaxies" label was half wrong. ESO 444-G084 fails once its inclination
(32 ± 6°) is propagated. NGC 2915, which the site calls M/L-conditional, needs Υ*_[3.6] ≥ 2.2 to escape and is the
**most** robust galaxy under the combined nuisances. Both legs of the count floor's only framework-specific data row
(this one and lensing) are therefore conditional on the baryonic census. Here the condition is quantified: the census
must be complete to better than a factor of about 2 in gas. **A follow-up run in the same session tests that condition
on the BTFR.** If the hidden gas tracks HI, BTFR residuals do not stay independent of gas fraction. That bounds the
multiplier to c ≤ 1.25 at Υ* = 0.5 and c ≤ 1.75 at Υ* = 0.7 (galaxy bootstrap, 95%). The uniform ×2 that would save
NGC 3741 therefore needs Υ*_[3.6] ≳ 0.8 as well. The ×3.1 that would save NGC 2915 is excluded at every Υ* in the
defensible range. What survives as an escape is hidden gas that differs from galaxy to galaxy.

## Research Notes

### Scalings (exact)
V_obs is deprojected, so V_obs ∝ 1/sin i. V_gas², V_disk² and V_bul² ∝ D at fixed angular radius, and g_bar does not
depend on D. Hence **B = V_obs²/V_bar² ∝ 1/(D sin² i)**. SPARC's eV_obs excludes the D and i errors, which Li+2018 treat
as separate priors. Both enter as galaxy-wide factors, correlated across radii. They are not per-point noise.

### Statistic B (registered verdict)
The cap allows any V_pred² ≤ B_max·V_bar² at every radius. The test uses one-sided residuals over all radii, profiled
over D, i and log Υ* (0.1 dex), each with its prior, optionally adding log s_gas (0.1 dex).

| galaxy | D (Mpc) | i (°) | B₀ outer-3 | P_A(B > 6.39) | χ²_B | χ²_B+gas | Υ* needed (gas ×1) | gas × needed (Υ* prior) | gas frac |
|---|---|---|---|---|---|---|---|---|---|
| NGC 2915 | 4.06 ± 0.20 | 56 ± 4 | 13.75 | 1.000 | 28.4 | **14.2** | 2.19 | 3.09 | 0.73 |
| NGC 3741 | 3.21 ± 0.17 | 70 ± 4 | 13.14 | 1.000 | 82.2 | **9.5** | 10.65 | 1.99 | 0.95 |
| ESO 444-G084 | 4.83 ± 0.48 | 32 ± 6 | 10.54 | **0.951** | 4.9 | **3.7** | 2.67 | 1.77 | 0.85 |
| NGC 3109 | 1.33 ± 0.07 | 70 ± 5 | 9.58 | 1.000 | 16.1 | 3.7 | 1.59 | 1.47 | 0.81 |
| D631-7 | 7.72 ± 0.18 | 59 ± 3 | 9.36 | 1.000 | 11.2 | 3.2 | 1.43 | 1.41 | 0.81 |
| UGCA 442 | 4.35 ± 0.22 | 64 ± 7 | 9.17 | 1.000 | 13.7 | 2.9 | 1.46 | 1.38 | 0.84 |
| UGC 06667 | 18.0 ± 2.5 | 89 ± 1 | 8.39 | 0.964 | 35.1 | **35.0** | 2.24 | ∞* | 0.70 |
| F571-8 | 53 ± 11 | 85 ± 5 | 8.91 | 0.889 | 5.5 | 5.4 | 0.83 | 7.99 | 0.06 |
| NGC 0024 | 7.30 ± 0.36 | 64 ± 3 | 7.81 | 0.876 | 5.7 | 5.1 | 0.82 | 1.99 | 0.35 |
| DDO 154 | 4.04 ± 0.20 | 64 ± 3 | 7.65 | 0.994 | 7.8 | 0.8 | 1.45 | 1.16 | 0.92 |

The χ²_B+gas column uses the fine gas grid from the supplement. ∞* means that scaling the gas makes the inner radii worse,
because SPARC's V_gas² is negative there (central HI holes). For those galaxies the inner-disc stars do the work.
Three galaxies that pass at the outer radii fail at inner radii: UGC 00731 (χ²_B+gas = 17.0), UGC 05764 (8.6) and
UGCA 444 (5.2).

Counts over the 28 face-value exceeders:
- Statistic A, P ≥ 0.977: 6/28.
- Statistic B, χ² ≥ 4: 10/28. Robust (χ² ≥ 9): 6/28.
- Statistic B+gas, χ² ≥ 4: 6/28. Robust: **3/28** (NGC 2915, NGC 3741, UGC 06667).

### Predictions, scored
1. NGC 3741 robust with and without gas: **confirmed** (82; 9.5, which only just clears the threshold of 9).
2. ESO 444-G084 fails A and B: **half confirmed**. It fails A (0.951) and B+gas (3.7) but survives B without the gas
   nuisance (4.9). Inclination drives this: the best-fit i is 40°, at +1.3σ.
3. 5–10 of the 28 survive B: **confirmed** (10 without gas, 6 with).

### What the propagation changes in the record
- **"Two M/L-free galaxies, NGC 3741 and ESO 444-G084" (ledger 07-30; Tier 1 TEST-10 card).** ESO 444-G084's survival
  came from holding i fixed. Under SPARC's own i error it is a 1.65σ object (one-sided P_A = 0.951). The pair that survives the
  full nuisance set is **NGC 3741 and NGC 2915**.
- **"Under 6.40, NGC 2915's exceedance is M/L-conditional" (Tier 1 TEST-10 separation).** The condition is
  Υ*_[3.6] ≥ 2.2, which sits about 6σ above the 0.5 ± 0.1 dex prior and above any maximum-disc value at 3.6 μm. The 07-30
  sweep went up to Υ* = 3 without weighting by plausibility. "Conditional" is true as a statement of logic, but on
  physical grounds the exceedance is unconditional.
- **The real escape is the gas, and it is prior art.** NGC 3741 is 95% gas at the outer radii, so it is immune to M/L
  (it would need Υ* ≥ 10.6) and very sensitive to the HI-to-baryon conversion. A ×2.0 gas multiplier saves the cap.
  Pfenniger & Revaz 2005 (A&A 431, 511) found the BTFR tightens when M_HI is multiplied by c ≈ 3, which they read as
  cold dark gas, and Begum+2008 found that any c between about 2 and 29 tightens it. Gentile+2007 (MNRAS 375, 199) note
  that a scaled gas disc also fits NGC 3741. On SPARC's He-corrected gas (×1.33), c = 3 is a ×2.24 multiplier if He is
  included in c and ×2.98 if it is not. **Both values exceed NGC 3741's ×2.0 and ESO 444-G084's ×1.77. Both fall below
  NGC 2915's ×3.09, so only NGC 2915 survives a literal Pfenniger–Revaz world.**
- **Census-conditionality is not specific to this framework.** Every dynamical dark-matter inference makes the same
  assumption. What the site can state precisely is the size of the hidden-gas factor each galaxy tolerates.

### Answer to "one galaxy or many?"
**Under the registered priors, three galaxies are robust (≥3σ) and six exceed the cap at 2σ.** The one survivor that
does not depend on gas is NGC 2915, and the one that does not depend on M/L is NGC 3741. No single galaxy survives every
axis at once: NGC 3741 dies at ×2 gas, and NGC 2915 dies at Υ* 2.2 or ×3.1 gas. The floor's rotation-curve leg is
"several galaxies, unless gas is under-counted by ×2–3, a scenario proposed in the literature and not excluded."

## Implications for the Site
The count floor sentence ("TEST-10 is a data refutation of the framework's own content") stays, but its condition
changes. Distance, inclination and M/L are no longer the caveat. The **gas census** is, with a number attached.

## Action: Maintainer
- `/tier-1-existing` TEST-10 separation and kill text: replace "two gas-dominated dwarfs (NGC 3741, ESO 444-G084)" with
  the result. Proposed wording: "With SPARC's distance, inclination and M/L errors propagated (profiled, one-sided,
  all radii), 6 of 28 face-value exceeders stay above 6.39 at 2σ and 3 at ≥3σ (NGC 2915, NGC 3741, UGC 06667). ESO
  444-G084 drops to 1.65σ once its 32 ± 6° inclination is propagated. The surviving exclusion is conditional on the gas
  census: a ×2.0 gas multiplier (dark-gas proposals reach ×2–3; Pfenniger & Revaz 2005) removes NGC 3741, and ×3.1
  removes NGC 2915; a uniform factor that large is disfavoured by the BTFR's independence from gas fraction (c ≤ 1.25 at Υ* = 0.5, ≤ 1.75 at 0.7, 95%)." Drop "upper bounds on significance, not the verdict" for the D/i clause, because those errors are
  now propagated.
- "NGC 2915's exceedance is M/L-conditional" → "conditional only on Υ*_[3.6] ≥ 2.2 (about 6σ above the SPARC prior)".
- /honest-assessment count-floor box: add the gas-census condition beside TEST-10 so that both legs (rotation curves and
  lensing) read "census-conditional", with the rotation-curve factor stated (×2–3).
- Site lint candidate: retire the phrase "NGC 3741, ESO 444-G084" as the M/L-free pair, or bind it to the new sentence.
- Back-annotate `Synchronism/PREDICTIONS.md` TEST-10 and the 2026-10-29 count-floor proposal.

## Open Threads
- **Executed this session: is a uniform gas factor allowed by the BTFR?** (`scripts/btfr_gas_scaling_allowed_c.py`.
  The rule was fixed in its docstring before the run; not a separate PREREG file.) For M_b = Υ*·L + c·M_gas, the
  statistic is the slope of BTFR residuals against gas fraction, with the allowed c defined as the values whose 95%
  galaxy-bootstrap CI contains 0 (N = 120):

  | Υ* | allowed c (grid 0.5–4) | slope at c = 2 [95% CI] |
  |---|---|---|
  | 0.35 | 0.50–0.75 | +0.169 [+0.088, +0.258] |
  | 0.50 | 0.50–1.25 | +0.113 [+0.041, +0.191] |
  | 0.70 | 0.75–1.75 | +0.069 [+0.002, +0.140] |

  The test constrains c relative to Υ*, so it is a degeneracy and not a measurement of c. NGC 3741 is 95% gas, so Υ*
  does not help it. Saving it needs c ≈ 2 **and** Υ* ≳ 0.8, two separate pulls of roughly 2σ each against the priors.
  NGC 2915 (×3.1) is excluded at every Υ* ≤ 0.7. A uniform Pfenniger–Revaz world (×2.24–2.98) is disfavoured at
  Υ* ≤ 0.7. The test is not circular: the capped law, like MOND, makes dynamics depend only on total baryons, so
  "M_b at fixed V is independent of gas fraction" holds inside the framework under test. Prediction (allowed range
  includes c = 1, upper end 1.5–2.5): c = 1 is allowed at Υ* 0.5–0.7 but not at 0.35 (CI [+0.002, +0.140]), so that
  half held for the defensible range. The upper end came out at 1.25 at Υ* = 0.5, **below the predicted range**, and
  at 1.75 at 0.7, inside it.
  This does not exclude per-galaxy hidden gas, which no population statistic can reach. Begum+2008's "c from 2 to 29
  tightens the scatter" measures scatter, not residual-vs-gas-fraction slope, so it does not conflict with this result.
- The supplement's "Υ* free" column sends every galaxy except NGC 3741 to χ² = 0 at Υ* between 1 and 5. That column is
  a logic check, not physics, but it shows how much the verdict leans on the 3.6 μm M/L prior.
- UGC 06667 (89°, Ursa Major, robust only through the Υ* prior, needing 2.24): edge-on LSB kinematics deserve a look
  before it is quoted.
- The lensing leg's census condition (explorer 10-04) has never been put on the same "×c tolerated" scale. Doing so would
  let the floor be stated as one number.

Scripts: `scripts/test10_full_error_propagation.py` (+ `_output.txt`), `scripts/test10_full_error_propagation_supp.py`
(+ `_output.txt`; not registered, descriptive).
