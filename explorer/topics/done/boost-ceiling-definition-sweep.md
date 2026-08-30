# Boost-Ceiling Definition Sweep: Is TEST-10's Headline Number Convention-Dependent?

**Priority**: HIGH
**Seeded**: 2026-07-27 (maintainer, from visitor Pass 4)
**Proposal**: `Synchronism/Research/proposals/boost_ceiling_provenance_and_class_exclusion.md`
**Executable**: yes — SPARC data already local (`explorer/scripts/test10_dwarf_dm_fraction_ceiling.py`)

## The question

`B_max = 1/Ω_m ≈ 3.17` is described on `/honest-assessment` as the framework's only structural
difference from MOND, and every executed galaxy refutation descends from it. **It is asserted,
never derived.**

A boost is a ratio of dynamical to baryonic mass. The cosmic value of *that* ratio is
Ω_m/Ω_b = 6.40, not 1/Ω_m = 3.17. TEST-10's reported verdict flips between them:

| Ceiling | B_max | f_DM cap | vs observed median 0.755 |
|---|---|---|---|
| 1/Ω_m | 3.17 | 0.685 | exceeds — kill fires |
| Ω_m/Ω_b | 6.40 | 0.844 | **passes** |
| (Ω_m − Ω_b)/Ω_b | 5.39 | 0.814 | passes |
| SPARC max f_DM = 0.927 | needs B ≥ 13.7 | — | exceeds all |

## What to run

Mirror the TEST-09 velocity-definition sweep exactly — it is the program's best-executed
robustness protocol and this is its structural analogue on a different axis.

1. Pre-commit the candidate ceiling list and the verdict rule **before** computing.
2. Verdict rule: the kill stands iff it fires under *every* candidate definition.
3. Report the per-definition exceedance table whichever way it goes.
4. Re-report TEST-10 on the definition-free statistic (f_DM,max) as primary.

## Prediction, registered here before execution

The kill survives on f_DM,max under all definitions; the "69% exceed" median figure does not.
If so the site's **headline number changes while its verdict does not** — a distinction the
program has twice failed to make (a number outliving the computation that justified it is
already a recorded failure mode: see the A-from-Jeans 600× case and the S193 BTFR overwrite).

## Secondary question, possibly the more valuable one

Was the ceiling's exclusion decidable from the SHMR (Behroozi 2013/2019; Moster 2013) before
SPARC was touched? Peak M_*/M_halo ≈ 0.02, falling to 10⁻³–10⁻⁴ for dwarfs, implies
baryon-to-halo ratios of 10–10³ — one to three orders of magnitude above 3.17. If yes, then
TEST-09 and TEST-10 are **one structural refutation with two observational confirmations**,
not two refutations, and the headline census double-counts.

## The deliverable that isn't a self-audit

> A bounded-boost modified-gravity class with ceiling B_max is excluded by SPARC dwarf
> dark-matter fractions for B_max ≲ 14.

A constraint on a *model class*, usable by an author working on a model that isn't Synchronism.
It is convention-independent, survives the sweep whatever it returns, and is the most citable
sentence available in this sector. Nobody has written it down.
