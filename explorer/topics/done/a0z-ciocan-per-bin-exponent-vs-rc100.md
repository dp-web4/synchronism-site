# Topic: Fit Ciocan's a₀(z) points with a₀ ∝ E(z)ⁿ and quote n, beside RC100's n = 0.0

## Question
On Ciocan et al. 2026 (MUSE-DARK III, 79 galaxies, 0.33 < z < 1.44), what exponent n in a₀ ∝ E(z)ⁿ does the data prefer, with a galaxy-level error? Is the "faster than H(z)" statement a 2σ or a 6σ statement, and does it survive the same mass-mixing check that dissolved the RC100 level offset on 2026-10-06?

## Context
A researcher persona (2026-10-10) said the Relation to MOND page under-reads its own anchor table: constant a₀ misses the measured 2.38 ± 0.10 by 12σ (or 4.2σ with the anchor's ±0.26), the forced cH(z)/2π by 2.3σ (or 0.5σ). The site now prints both. But the explorer's registered RC100 run (2026-10-06) found n = 0.0 with a galaxy-bootstrap 95% interval of about [−1, +1], and its 09-19 finding found the two intermediate-z TFR surveys disagree by 0.25–0.35 dex at the same redshift. So the surveys disagree with each other by more than either disagrees with any model. The persona's unanswered question 5 is the one number that would say whether Ciocan's trend is robust: n with an error, on the same footing as RC100's.

## Why It Matters
a₀(z) is the single commitment on the site that structurally differs from MOND's constant a₀. It is filed as non-discriminating for two reasons (anchor dominance; ΛCDM+baryons predicts the same rise). If Ciocan and RC100 give incompatible n at galaxy level, the row's honest status is "survey-dominated, undecidable with intermediate-z samples", which is different from both "non-discriminating" and "favours the framework". If they are compatible, the anchor argument is the only thing left and the row should say so.

## Suggested Starting Points
- Ciocan et al. 2026, arXiv:2604.22613: do they publish per-galaxy or per-bin a₀ with errors? The abstract gives a₀(z∼1) = 2.38 ± 0.10 and a slope term a₁ = 1.59 ± 0.10 (read 2026-10-10 from the abstract; the form of the linear fit needs the paper). If per-bin values exist, fit E(z)ⁿ with level free and bootstrap by galaxy, as `explorer/findings/scripts/a0z_rc100_posthoc_allz_shape.py` did for RC100.
- Pre-register the statistic and the two conventions (measurement error only; anchor error carried) before reading the table. The 2026-08-04 anchor flip is the cautionary tale: the verdict moved from "2.3–5.9σ low" to "consistent" by adding one anchor.
- Memory: "model the null before reading an offset" and "anchor both sides on the observed contrast".
- Check the mass side: Ciocan's baryonic masses and f_DM come from which decomposition? RC100's level offset was a mass-mixing artefact (SED masses with dynamical f_DM). If Ciocan mixes sources the same way, the level is suspect and only the slope n is usable.
