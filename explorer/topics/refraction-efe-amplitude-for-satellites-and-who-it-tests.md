# Topic: How big is the refraction EFE for a satellite, and is Refracted Gravity the only theory it can test?

**Priority: MEDIUM**
**Seeded:** maintainer 2026-10-21

## Question

Under L2, ∇·[C(ρ)∇Φ] = 4πGρ refracts an external field wherever ∇C ≠ 0. That is a linear EFE, different in form
from MOND's. For a dwarf satellite at fixed g_ext, how large is the refraction-induced change in internal σ (or v_c)
relative to MOND's EFE? Compute it (a) for this framework's floored and unfloored C_ρ, and (b) for Refracted Gravity's
published calibrations. Then: **does any existing satellite data set (Crater II, the Andromeda dwarfs of McGaugh & Milgrom
2013, DF2/DF4) already bound it?**

## Context

- Visitor researcher persona 2026-10-21: the site called this "the one genuinely distinct external-field prediction",
  untested, missing from the Test Catalog, and wrongly described as run via TEST-05. The persona guessed the amplitude
  might be negligible "because C ~ 10⁻³ in discs". **That guess is wrong for the unfloored form.** Below the knee,
  C ≈ γρ/ρ_c, so ∇ln C = ∇ln ρ, which is O(1/h) however small C is. It is negligible only for the floored form (C ≈ Ω_m).
  So the amplitude is an actual calculation, not something that follows from the size of C.
- The maintainer (proposal 2026-10-21) argues that for *this framework* the result cannot move Bucket 0: the
  density-keyed branch is already excluded (SPARC +2843 at galaxy level; LLR 68/74). **But Refracted Gravity is not
  excluded** (GC window under every Eq. 4.1 reading, maintainer 10-14). Its fits have the knee inside discs. If RG predicts a
  refraction EFE of measurable size, this is the one place where the site's machinery tests a live external theory.
- The estimate on file: 0.3–0.37 g_ext beyond the knee in a halo GC (`maintainer/scripts/gc_external_field_refraction_estimate.py`, 09-16).

## Why It Matters

If the RG amplitude is measurable and existing dwarfs bound it, that is a result about a published theory, and it holds
even though this framework has failed. If it is unmeasurably small for every class member, the site can close the item and
say so. Either result is better than the current "distinct, untested".

## Guards

1. **Read first:** `explorer/topics/efe-null-as-a-class-test-for-linear-permittivity-gravity.md` (09-11). Its premise,
   "linear in Φ ⇒ no EFE", was corrected on 09-16 (refraction). Do not inherit it.
   Also read `explorer/findings/mond-efe-three-test-discriminator-verdict.md`.
2. **Baseline gate** (PREDICTIONS 08-05): only compare to data where the signal exceeds the model's own baseline error at
   the same radii. Compute that ratio for each RG parameter set before comparing anything.
3. **Both force laws.** State L2 vs L3. Under L3 the residuals are 1–30 g_ext and there is a quadratic term (09-17).
4. **RG's Eq. 4.1 has two in-repo readings** (/Q vs Q·log, base unstated; maintainer 10-14). Run both, or name which.
5. Pre-register the amplitude prediction before computing, with a per-branch null (what each outcome would mean).
6. Contacting the RG authors gates on the project lead.

## Suggested Starting Points

- /mond-unification (the refraction box), /test-catalog#unregistered-distinct
- `Synchronism/PREDICTIONS.md` blocks 2026-09-16 (ii), 2026-09-17 (iii), 2026-08-21 (tidal identity)
- Matsakos & Diaferio 2016 (arXiv:1603.04943); Cesare+2022 elliptical calibration (0.089, 0.47, 0.0083)
- McGaugh 2016 (Crater II); McGaugh & Milgrom 2013 (Andromeda dwarfs)
