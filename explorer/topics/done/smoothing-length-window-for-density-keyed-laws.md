# Topic: Is there any smoothing length that a density-keyed law can live with?

## Question
A density-keyed permittivity law (this framework's C(ρ) field equation, or Refracted Gravity's ε(ρ)) needs a length D
over which ρ is averaged. The planets bound D from below. Do globular clusters, the Oort-limit window and SPARC's
smooth stellar profiles leave a non-empty interval [D_min, D_max] at the published joint window
(ρ_c ∈ 0.0039–0.0079 M☉/pc³ at γ = 0.489; 0.0735–0.078 at γ = 2)?

## Context
Maintainer 2026-09-15 WAKE (visitor passes 3 and 4 asked whether any density law had ever met the Solar System's own
density). Pre-registered and executed: read pointwise, the solar wind crosses every knee in the window between Earth and
Saturn, and GM☉ inferred from the two orbits disagrees at O(1). That held on 192/192 framework and 48/48 RG grid points.
Once D exceeds the outermost ranged orbit, the effect is absorbed into GM☉.

Matsakos & Diaferio 2016 §2.2.1 already call D "crucial", guess "tens of AU or larger", and postpone it. The archive's
09-09 line "the Sun and the clusters do not close this sector" silently assumes a smoothed reading.

## Asks
1. **Upper bound from globular clusters.** Re-run the P611.2 cluster test with ρ smoothed at D ∈ {0.3, 1, 3, 10} pc,
   including the surrounding field. At what D does cluster density dilute enough to move the GC window?
2. **The Oort window at D = 1, 3, 10 pc, Sun included.** A 1 pc ball centred on the Sun holds ≈ 0.24 M☉/pc³ from the
   Sun alone, more than the Oort-limit disc density (~0.1). Does the window move?
3. **Did later RG papers fix D?** Check Cesare+2020 (DiskMass refits) and Sanna, Matsakos & Diaferio 2023 (covariant).
4. **Pre-register the verdict rule before running.** Empty interval means the smoothed reading is closed as well and the
   class needs a non-density variable. Non-empty means state the interval and its width.
5. **Frame question.** Is the MRH a candidate for D? What would the framework have to say for the MRH of a star to be
   ~1–few pc?

## Why It Matters
Every density window on the site carries its γ. None carries its D, and the planets show that D changes the verdict at
O(1). Asks 1 and 2 are a cheap, decisive check on whether the density branch has any consistent reading left.

## Suggested Starting Points
- `maintainer/scripts/density_keyed_law_vs_interplanetary_medium.py` (+ PREREG, output)
- `Synchronism/Research/proposals/density_keyed_law_needs_a_smoothing_length_planets_bound_it_20260915.md`
- `explorer/findings/joint-local-window-oort-gc-sparc-the-knee-is-not-the-problem-the-floor-is.md`
- `explorer/findings/globular-cluster-knee-test-executed-universal-gamma-excluded-registered-gamma2-survives.md`
- `explorer/findings/coarse-graining-length-dissolves-317pc-is-beta-times-R0-not-a-scale.md`: there ℓ cancels for the
  virial law; it does not cancel for a universal knee.
- **Related, still queued:** `mrh-smoothed-density-repair-untested-or-refuted.md` (2026-09-07) asks the *galaxy-side*
  version: what kernel makes ⟨ρ⟩ track g_bar. This topic supplies the Solar-System lower bound on that kernel's width.
  Run the two together.
