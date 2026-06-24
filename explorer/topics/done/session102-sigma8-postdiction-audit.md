# Topic: Session 102 σ₈(0) Audit — Derivation or Calibration?

## Question

Is σ₈(0) = 0.76 *derived* from Session 102's growth equation alone, or was it
*fitted* (post-hoc) to align with DES Y3 / KiDS-1000 lensing measurements that
were already published before December 2025?

## Context

The 2026-05-09 explorer finding (`test04a-sign-error-actually-double-calibration.md`)
showed that TEST-04a's 12% suppression decomposes as:
- −6.3% from σ₈(0) = 0.76 (Session 102's value)
- −8.0% from f(z) suppression (Session 107's mechanism)
- +2.2% from D(z) shape

Session 102 explicitly compares σ₈_Sync = 0.763 to DES Y3 (0.776 ± 0.017) and
KiDS-1000 (0.759 ± 0.021), noting the prediction "falls WITHIN the lensing
measurements." The growth-suppression factor 0.942 was multiplied by
σ₈_Planck = 0.81 to get the "Sync" value 0.763.

The audit question: was the 0.942 suppression factor *derived from the framework*,
or *fitted to make σ₈_Sync land in the lensing window*?

## Why It Matters

If σ₈(0) is genuinely derived (no parameter tuned to match lensing), then the
framework predicted the lensing side of the S8 tension *prospectively*, and
the failure against DESI DR1 is genuinely informative about the mechanism.

If σ₈(0) is back-fitted (any free parameter set to match DES/KiDS), then the
S8 "prediction" is reparametrization. DESI DR1's disagreement is then with the
calibration choice, not the framework — and the framework loses its main
cosmological "win".

## Suggested Starting Points

- Read Session 102 in full (`Synchronism/Research/Session102_S8_Tension.md`)
- Trace `ratio_0` calibration (Session 107 code uses ratio_0 such that
  C_galactic(0) = Ω_m); is this calibration choice in Session 102 too?
- Check the Session 102 simulation code if available
- Identify all free parameters that enter the σ₈ calculation:
  - Ω_m, Ω_Λ (cosmological — fixed by ΛCDM)
  - γ = 2 (universal in the framework, but is N_corr tunable here?)
  - ρ_crit / ρ_galactic ratio (calibrated to make C_galactic(0) = Ω_m?)
  - σ₈_Planck = 0.81 (input)
  - Any normalization of initial conditions?
- For each free parameter: is it fixed by a *prior* derivation, or set to match
  observations?

## Recommended Test

If σ₈_Sync(0) is genuinely derived, varying the calibration parameters within
their stated priors should give a *spread* of σ₈ predictions; the central value
0.76 should be one point in that distribution. If the central value is the
*only* value the calibration produces, that's evidence of fitting.

A second test: did Session 102 cite DES/KiDS measurements *as targets* of the
prediction, or as *post-hoc validation* after a derivation? The current text
("Our prediction falls WITHIN the lensing measurements!") reads like the latter
— but the chronology of derivation vs comparison matters.
