# PREREG: which acceleration is the argument of C in the "EFE-free corner", and which potential does light follow?

**Date**: 2026-11-11, maintainer. Written before `efe_free_corner_which_acceleration.py` exists.
**Origin**: visitor log 2026-11-11, researcher persona: "An algebraic law g = g_N/C(g/a₀′) needs to say which
acceleration goes in. If it is the star's total acceleration, a solar-neighbourhood binary sits at ~1.8 a₀ from the
Galaxy and the boost is suppressed ... 'EFE = 0' requires keying on the internal relative acceleration, which is not a
quantity a local law can know." Second question from the same pass: do light and gravitational waves follow the
effective potential?

**Not blind.** I did the hand estimate before writing this (differential acceleration ≈ 5×10⁻¹¹ m/s², Saturn
perihelion ≈ 9×10⁴ mas/cy). The script is a numerical check of that estimate, with an identity control.

## Object
The corner as the site runs it (`EFE_FREE_CORNER_STATUS`): g_N = g·tanh(γ ln(1 + g/a₀′)), a₀′ = γ·a_M,
a_M = 1.1×10⁻¹⁰ m/s², γ ∈ {0.87, 0.90, 0.95}.

Two readings of "g":
- **(I) internal**: g is the relative acceleration inside a chosen system. This is what every site run used.
- **(T) total**: g is each body's total acceleration, g_N the total Newtonian field at the body. This is the only
  reading a local algebraic law can evaluate without being told which bodies form "the system".

## What is computed
1. Under (T), Sun vs Saturn. The Sun's Galactic acceleration is boosted by ν_e = 1/C(g_gal); Saturn's total
   Newtonian field is ≈ 6.5×10⁻⁵ m/s², where ν = 1 to ~10⁻⁹. So Saturn feels a uniform acceleration
   (ν_e − 1)·g_N,gal relative to the Sun, fixed in direction (Galactic centre: ecliptic longitude 266.8°; Saturn's
   perihelion longitude 92.4°, so the force lies within ~6° of the apsidal line). Integrate the planar orbit
   numerically, measure the secular perihelion rate, compare with EPM2011's −0.32 ± 0.47 mas/cy (the number the
   2026-10-16 direct-tail run already used). g_gal ∈ {1.6, 1.9, 2.2}×10⁻¹⁰.
2. Under (T), the orientation-averaged wide-binary boost ν_e(1 + L_e/3), L_e = d ln ν/d ln g_N.
3. Lensing, on the eight KiDS-1000 bins transcribed by the explorer (2026-10-04; table in the 2026-11-10 finding):
   for the framework's own cap 1/Ω_m = 3.175, z per bin under (a) light follows the boosted potential, (b) light
   follows the baryons only (predicted B_obs = f), at f = 5 and f = 10.

## Controls
- C1: zero perturbation gives |perihelion rate| < 0.01 mas/cy over the integration.
- C2: the numerical rate agrees with the secular formula (3/2)·A·√(1−e²)/(n·a·e) to 5 % when the force is along the
  apsidal line.
- C3: at γ = ½ the (T) wide-binary boost reproduces the 2026-11-06 QUMOND row (1.38–1.53 for g_e 1.6–2.2×10⁻¹⁰)
  to 0.02, since ν_e(1 + L_e/3) is the same expression.
- C4: the 6.389-cap z values in the explorer's table (+4.1 at ×5, −5.3 at ×10 on the 1.3×10⁻¹³ bin) reproduce to 0.2.

## Predictions
- P1: (ν_e − 1)·g_N,gal = 3–7×10⁻¹¹ m/s² across the grid.
- P2: Saturn's perihelion rate under (T) is 10⁴–10⁶ mas/cy in magnitude at the real geometry, ≥ 10⁴σ from EPM2011.
- P3: fewer than 1 in 10³ in-plane force directions bring the rate inside 3σ.
- P4: the (T) wide-binary boost at γ = 0.87–0.95 is 1.15–1.35, against 1.49–2.70 under (I).
- P5: cap 3.175 with light on the boosted potential: ≥ 3σ excluded in at least one reliable bin at ×10 and in at
  least three at ×5.
- P6: light on baryons only: ≥ 5σ excluded in at least three reliable bins at ×10.

## Reading rule, fixed now
- If P2 holds at ≥ 100σ for every grid point: reading (T) is excluded by the planets, and the corner exists only on
  reading (I), which needs a rule for which bodies form the system. Status sentence becomes "not a defined model
  until that rule is written; the one reading a local law can evaluate is excluded".
- If the rate is < 3σ anywhere on the grid: (T) is alive there, and the corner has two live readings with different
  wide-binary predictions. Say so.
- Between: report the numbers; no status change.
- This is not a count change under any outcome: no archive document asserts (T). Bucket 0 = 0 unchanged.

## What this does not do
No ephemeris fit (the uniform force would be partly absorbed in fitted elements; the margin has to carry that). No
inclination of Saturn's orbit to the Galactic direction beyond the in-plane projection (cos 5.5° = 0.995). The lensing
bins are the explorer's transcription, not re-read today.
