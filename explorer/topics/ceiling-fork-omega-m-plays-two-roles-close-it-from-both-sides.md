# Topic: Ω_m plays two roles in the boost-ceiling fork. Can the fork be closed from both sides, or is there an escape?

## Question
Is there any assignment of the galaxy-sector floor C_floor (equivalently the ceiling B_max = 1/C_floor) that (a) does not fire TEST-09 and TEST-10 on SPARC and (b) is consistent with a cosmology sector the framework can actually run? Or does every branch of the 2026-09-18 ceiling sweep lose on one of the two data sets?

## Context
A graduate-physics persona (2026-10-27) reconstructed from the site alone what the ledger recorded on 2026-09-22: the galaxy ceiling 1/Ω_m is the cosmology sector's C₀ = Ω_m (a calibration identity, 09-11), and that Ω_m contains ≈ 0.27 of cold dark matter, while the galaxy sector's stated job is to replace that dark matter. The three ceilings swept on 09-18 therefore presuppose different frameworks:

| Ceiling | Presupposes | TEST-09 |
|---|---|---|
| 1/Ω_m = 3.17 | the framework as written (C floored at cosmic C₀, CDM present) | fires |
| (Ω_m−Ω_b)/Ω_b = 5.39 | the boost supplies exactly the CDM share | lands on threshold |
| Ω_m/Ω_b = 6.39 | a galaxy sector that replaces CDM (no CDM anywhere) | does not fire |

The 09-22 execution (`maintainer/scripts/de_sector_without_cdm.py`) found that with C₀ = Ω_b no γ gives both acceleration and the recombination dark/baryon ratio. So the non-firing branch belongs to a variant whose cosmology fails. The site now prints this presupposition column beside the sweep. What has not been done: a joint statement with the escapes enumerated.

## Why It Matters
If the fork closes from both sides, the "convention-dependent" qualifier on TEST-09/TEST-10 is weaker than the site says and the counting-rule question changes shape (a rule that discards convention-dependent kills would be discarding a kill whose alternative convention is itself excluded). If there is an escape (a cosmology with partial CDM, a floor that differs between sectors by a stated mechanism, a redshift-dependent floor), it should be named so the qualifier is honest in the other direction. Either answer is a sentence for the project lead's ruling.

## Pre-register before running
- Enumerate the escapes first: (i) partial CDM (Ω_cdm free, floor = Ω_b + Ω_cdm, ceiling = 1/floor): find the Ω_cdm range where TEST-09 does not fire and the DE sector still accelerates with the right recombination ratio; (ii) sector-dependent floors with a named reason (e.g. the galaxy floor is C at the disc's own mean density, not the cosmic mean); (iii) a floor that evolves with z.
- Prediction: (i) has no overlap (TEST-09 needs B_max ≳ 5.4, i.e. floor ≲ 0.185, i.e. Ω_cdm ≲ 0.14 at Ω_b = 0.049; the DE sector at C₀ = 0.185 should fail the recombination ratio by > 2×, by interpolation between the 09-22 endpoints). (ii) is a new postulate, not an escape within the written framework. (iii) is Cardassian-with-evolving-floor, prior art to check before running.
- Use the 09-18 and 09-22 scripts unchanged; add only the Ω_cdm loop. Identity controls: reproduce n = 3.35 at 3.175 and the 09-22 endpoints before reading anything new.

## Suggested Starting Points
- /honest-assessment (the TEST-09 convention box, now with the presupposition sentence) and /parameter-derivations (the sweep)
- `maintainer/scripts/which_C_carries_the_floor.py` (09-18 sweep) and `maintainer/scripts/de_sector_without_cdm.py` (09-22)
- Synchronism `PREDICTIONS.md` blocks 2026-09-11 (floor as calibration identity), 09-18, 09-22, 10-13, 10-16, 10-18 (counting rules)
- Synchronism `Research/proposals/de_sector_cannot_carry_the_dark_matter_cosmology_needs_cdm_20260922.md`
