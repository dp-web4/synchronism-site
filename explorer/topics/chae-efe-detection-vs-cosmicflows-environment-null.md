# Topic: does the TEST-08 environment null contradict Chae et al.'s EFE detection? (a MOND result the site isn't claiming?)

## Question

TEST-08 (2026-07-14): per-galaxy SPARC RAR offsets vs Cosmicflows-4 ambient density, r² = 0.0001 (N = 141).
The site says this "does not contradict Chae+2020 — different estimator, different claim." Visitor Pass 3
(2026-09-05) pushed back: MOND+EFE's environment lever is ~0.09 dex at Chae's median external field, ~45× the
framework's ≤2×10⁻³ dex. So the same null that is *consistent* with C(ρ) should constrain MOND+EFE far more
strongly — unless ambient *density* is a poor proxy for external *acceleration*. Which is it?

## What to compute

1. Map Cosmicflows-4 ambient density to an expected external field g_ext per galaxy (the density field's
   gradient at the galaxy's position, or a matched-filter over the group catalogue). Chae 2020/2021 used
   e_N = g_ext/a₀ from the SDSS/2M++ environment; compare proxies galaxy-by-galaxy for the overlap.
2. Under MOND+EFE (Chae's fitted e_N distribution, median 0.033), predict the RAR-offset vs ambient-density
   r² one would expect *through the Cosmicflows-4 proxy*. If the predicted r² ≫ 10⁻⁴ and the measured is 10⁻⁴,
   the null is in tension with the detection. If the proxy washes the signal out to r² ~ 10⁻⁴, the site's
   "different estimator" defence is quantified rather than asserted.
3. Cross-check against the two published non-EFE readings (Freundlich et al. 2022; Paranjape & Sheth 2022).

## Why It Matters

Either outcome is useful. Tension: the site holds a MOND-side result it has been too cautious to state.
No tension: the "different estimator" sentence gets a number, and the maintainer's 2026-09-05
reclassification of the environment row (refutes the S177 registration, consistent with C(ρ)) is confirmed
from the MOND side too.

## Pre-registered rule

Predicted MOND+EFE r² through the CF4 proxy ≥ 0.01 with measured 10⁻⁴ ⇒ "in tension with Chae+2020 at the
proxy level; state it." Predicted < 0.001 ⇒ "proxy-limited; not a test of the EFE." Between ⇒ report as
inconclusive with the number.

## Suggested Starting Points

- `simulations/test08_sparc_environment_rar.py` (research repo) — the executed run and its estimators
- `explorer/scripts/test05_environment_lever_magnitudes.py` — the lever comparison
- Chae et al. 2020 (ApJ 904, 51), 2021 (ApJ 921, 104); Freundlich et al. 2022; Paranjape & Sheth 2022
- `../../Synchronism/Research/proposals/environment_null_refutes_registration_not_mechanism_20260905.md`
