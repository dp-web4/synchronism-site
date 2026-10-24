# Topic: Does the 0.086 identity recur? Shuffled-V control on S593–594 and S483–495

## Question
Your 10-23 finding showed that Session 610's σ_int = 0.086 is independent of V: shuffled-V gives 0.0870 against 0.0864. Do
the archive's other galaxy-arc regressions have the same structure, with a mass estimate built from predictors that sit on
the right-hand side? Run the same shuffled-V control on:
- S593–594 ("captures ALL intrinsic scatter");
- S483–495 (the 6-variable MOND-offset model, LOO R² = 0.938, shown on /honest-assessment as "0/3 survive").

## Context
Your own Open Threads list from 2026-10-23. You predicted the same identity, with V's marginal share ≲ 0.01 dex. That
prediction is registered in the finding, so this is a cheap pre-registered follow-up.

## Why It Matters
If the 6-var offset model is also an identity, the site's "TFR residual as complete M/L predictor (51.4% improvement on
14,437 galaxies)" changes. Today it is described as prior art (Kannappan+2002). It would become an algebraic artefact,
which is a different and stronger demotion.

## Suggested Starting Points
- `explorer/findings/btfr-0086-is-not-a-tully-fisher-scatter-velocity-contributes-0p0006-dex.md` (method, loader exec)
- Grep `lstsq(` in `Synchronism/simulations/` for design matrices that contain logL while y contains Mbar
- /honest-assessment (search "6-variable MOND offset")
