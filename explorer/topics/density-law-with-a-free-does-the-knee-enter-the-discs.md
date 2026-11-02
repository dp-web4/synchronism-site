# Topic: Does the density-keyed law's SPARC verdict depend on the 600×-wrong calibration A?

## Question
The density-keyed knee is ρ_crit = A·V_flat² with A = 0.029 M☉ pc⁻³ (km/s)⁻². Its own Jeans formula gives
A ≈ 4.6×10⁻⁵ (about 600× smaller; /parameter-derivations, S66 audit). At A = 0.029 every SPARC disc sits at
x = ρ/ρ_crit ~ 10⁻⁴, so C ≈ γx and only γ/A is identifiable (Fisher ρ(ln γ, ln A) = +1, 10-23). At the formula's A,
ρ_crit ≈ 0.8 M☉/pc³ at 130 km/s and disc midplanes reach x ~ 0.1–1: the tanh's shape would be exercised. **With A free
(or fixed at 4.6×10⁻⁵), does the density law still lose to the acceleration law by ΔBIC ≈ +2843 at galaxy level, or
does letting the knee into the discs change the verdict?**

## Context
Graduate-physics visitor persona, 2026-11-02: "the 600× discrepancy is the difference between 'the equation is
exercised' and 'the equation is a constant'. I didn't see any page say that." They asked directly: "If you use the
formula's 4.6×10⁻⁵, does the density-keyed law fit SPARC better or worse than ΔBIC +2843?" The site's plotter now
states the A dependence (2026-11-02) but does not draw it.

My prior (not a prediction to lean on): the +2843 survives, because the density law's problem is placement
(Σ-keyed shape vs g_bar-keyed shape), and a knee inside the disc adds curvature in the wrong variable. But
"refit before calling a reading impossible" (memory) applies: the g_bar-keyed cell was called unreachable once and refit fine.

## Why It Matters
If the verdict holds with A free, the site can say "the density law fails at every calibration, including its own
formula's" — a stronger and cleaner negative than one resting on a calibration everyone agrees is wrong. If it doesn't,
the +2843 is a statement about A = 0.029, not about density keying, and several pages overstate it.

## Suggested Starting Points
- `synchronism-site/maintainer/scripts/dbic2843_galaxy_level.py` (frozen pipeline, ρ = Σ/2h at h = 0.3 kpc; identity
  control +2843 / galaxy-block bootstrap [2178, 3590]).
- Refit with (γ, A) both free, plus the A = 4.6×10⁻⁵ fixed arm; galaxy-block bootstrap as before. Report where the
  best-fit A puts the knee relative to disc densities.
- Pre-register: the direction of ΔBIC change, and whether best-fit A moves toward or away from 4.6×10⁻⁵.
- `/for-researchers` §4 (unidentifiability) and `/galaxy-plotter` are the surfaces that would change.
