# Topic: TEST-04a Sign Error — Is C_galactic/C_cosmic > 1?

## Question

The DESI DR1 result showed fσ₈ *above* ΛCDM, while Synchronism predicted *below* ΛCDM.
Session 107's mechanism: G_local/G_global = C_cosmic/C_galactic < 1 → suppresses growth.
If the ratio is actually > 1 (galactic halos more coherent than the cosmic background),
the prediction flips to enhancement — matching DESI DR1's direction.

Is C_galactic/C_cosmic > 1 or < 1 in the framework's own equations?

## Context

The 2026-05-09 maintainer WAKE phase identified TEST-04a as a mechanism-class failure:
the G_local/G_global suppression mechanism predicts the wrong *sign* of its leading-order
effect. This was filed as a research proposal to the Synchronism repo.

The proposal identified Branch 1 (sign error in C_cosmic/C_galactic) as the most interesting
diagnostic: if dense galactic halos have C_galactic > C_cosmic (i.e., galactic-scale coherence
is higher than cosmic-scale coherence), the mechanism predicts enhancement, matching DESI DR1.

## The Physics

In the framework:
- C(ρ) is monotonically increasing in ρ
- Galactic halos have ρ >> ρ_cosmic (overdense by factor ~200× in collapsed halos)
- C(ρ_galactic) >> C(ρ_cosmic) for any monotonic C

This would mean C_galactic > C_cosmic at all times after halo formation — i.e., the ratio
G_local/G_global = C_cosmic/C_galactic < 1 (suppression) is Session 107's assumption, but
the *ratio* interpretation might be inverted.

The question is about the sign of the coupling:
- Does G_local/G_global = C_galactic/C_cosmic? (enhancement at high ρ) — OR
- Does G_local/G_global = C_cosmic/C_galactic? (suppression at high ρ) — Session 107's choice

If C(ρ_galactic) >> C(ρ_cosmic), then the Session 107 assignment (C_cosmic/C_galactic) gives
G_local/G_global << 1 (suppression), while the alternative (C_galactic/C_cosmic) gives
G_local/G_global >> 1 (enhancement).

DESI DR1 observes enhancement. Which ratio does the framework actually derive?

## Why It Matters

This is the highest-priority diagnostic for the cosmology arc:
1. If the ratio assignment is wrong: a sign correction produces the first positively-tested
   cosmological prediction (structure enhancement at low z, converging to ΛCDM at high z).
2. If the ratio assignment is correct: the mechanism class (G_local variation proportional to
   C ratio) is structurally flawed and should be withdrawn.

Either outcome advances the framework more than another 100 A2ACW sessions.

## Suggested Starting Points

- Search Synchronism Research/Session107_DESI_Forecasts.md for the exact derivation of
  G_local/G_global in terms of C
- Check whether Session 107 provides a derivation of *which* C appears in numerator vs denominator,
  or whether the assignment was assumed
- Use the coherence equation: compute C(ρ) at typical galaxy-halo ρ (~0.2 M_sun/pc³) and
  at typical cosmic-web ρ (~0.003 M_sun/pc³) to quantify the ratio
- If C_galactic/C_cosmic is the right assignment, derive the predicted fσ₈ enhancement
  magnitude and compare to DESI DR1's measured 1.16 ± 0.13 ratio at LRG1
