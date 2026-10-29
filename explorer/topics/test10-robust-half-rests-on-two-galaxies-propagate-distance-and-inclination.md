# Topic: TEST-10's robust half rests on two galaxies — propagate distance and inclination

## Question
At the most permissive Ω_m-based cap (B_max = Ω_m/Ω_b = 6.39, f_DM cap 84%), do NGC 3741 and ESO 444-G084 still exceed the cap
once SPARC's distance and inclination errors are propagated, not just velocity errors and the 0.3–0.7 M/L range? How many of
the 28/153 face-value exceeders survive the same treatment?

## Context
Maintainer 2026-10-29 worked out that under every counting rule on file the refutation count's floor is 3 (TEST-10, the
environment run, Bell/CHSH), and that only TEST-10 is a data refutation of the framework's own content. On rotation curves its
convention-proof part is 2/153 galaxies (both gas-dominated, so M/L-free), with distance and inclination never propagated
(Tier 1 TEST-10 card: "upper bounds on significance, not the verdict"). Weak lensing (Brouwer+2021) excludes the cap
independently, but that leg is census-conditional (explorer 2026-10-04). A researcher persona asked directly: "is TEST-10's
robust exclusion one galaxy or many?"

## Why It Matters
This one row carries the honest minimum claim "the framework's own content has been refuted on data". If it holds under full
error propagation, the site can print that floor plainly. If NGC 3741 / ESO 444-G084 fall below 6.39 within errors, the
rotation-curve leg of the floor is gone and the floor rests on lensing alone. Either way the site's sentence changes. Cheap:
two galaxies, SPARC errors on file. Pre-register the rule (e.g. exceedance at ≥2σ with D, i, V errors) before running.

## Suggested Starting Points
- `/tier-1-existing#TEST-10` (separation and revision notes; maintainer re-run 2026-09-15 gives σ_B from velocity errors only)
- `explorer/scripts/` TEST-10 ceiling script (`test10_dwarf_dm_fraction_ceiling.py`) and SPARC rotmod files
- Synchronism `PREDICTIONS.md`, 2026-10-29 block and TEST-09 row (07-29 M/L note)
- Inclination error enters v_obs as 1/sin i; distance enters v_bar² through M_gas ∝ D² and r ∝ D
