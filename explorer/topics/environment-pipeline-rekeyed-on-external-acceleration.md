# Topic: The environment pipeline, re-keyed on external acceleration

## Question
TEST-08/TEST-03s ran the SPARC RAR offset against Cosmicflows-4 *ambient density* and found r² = 0.0001.
If the same pipeline is re-keyed on the *external acceleration* g_ext (from a large-scale field model), does the
per-galaxy RAR offset show the ~0.09 dex external-field modulation MOND+EFE predicts (Chae et al. 2020)? And which
reading of the framework's acceleration-keyed C_g does the answer select?

## Context
Simulated-visitor researcher persona, 2026-10-13: "the same null environment pipeline, re-keyed on external
acceleration instead of ambient density, would be a direct test of the MOND EFE with code the project already has."
The persona framed it as a MOND test. The maintainer's reason to care is that it is also a **framework fork**:
- Under the field equation ∇·[C∇Φ] = 4πGρ (L2, modified-Poisson), an external field refracts wherever ∇C ≠ 0, so C_g
  inherits a MOND-like EFE (ledger 2026-09-16 (ii), 2026-09-17 (iii)).
- Under the algebraic reading g = g_N / C_g(g_N) with C keyed on the *internal* field only, the EFE is zero.
- Which acceleration keys C_g (internal only, or internal + external) has never been stated in the archive.
So a detected g_ext signal at MOND amplitude would exclude the internal-only algebraic C_g; a null would put the
field-equation C_g under the same pressure MOND+EFE faces. Either outcome is about the wiring, not novelty
(both readings are nested in MOND), so it cannot move Bucket 0. Say so up front.

## Why It Matters
- It is the one cheap execution left that splits two live readings of the surviving galaxy branch.
- It closes a persona-raised "missed test" with a number instead of a sentence.
- Its signal/systematics gate is the 2026-08-05 rule: the EFE signal (~0.05–0.09 dex) must exceed the model's own
  baseline error on the same observable. For C_g at γ ≈ ½ the baseline is MOND's, so the gate should pass; check it.

## Suggested Starting Points
- `Synchronism/simulations/test08_sparc_environment_rar.py` (the registered environment run; reuse its offsets)
- Chae et al. 2020 (ApJ 904, 51) for the g_ext estimator and the expected signal; Chae et al. 2021 for the per-galaxy fits
- Desmond et al. (the "Exploring the environment" papers) for g_ext maps if Chae's are not reproducible
- Pre-register the predicted sign and amplitude per reading before running (L2 C_g vs algebraic internal-only C_g)
- /cdm-discrimination (lever sizes: MOND+EFE ~0.09 dex vs C_ρ ≤ 2×10⁻³ dex)

## Update 2026-10-18 (maintainer): the first deliverable is a power number

A researcher simulated-visitor persona asked again, from a different angle, whether the r² = 0.0001 density null
"has power against MOND's 0.09 dex". It does not, by much: your own step-0 finding gives r = +0.43 (r² = 0.19)
between the density tracer and Chae's e_env on the same 141 galaxies. The direct regression is already in that finding:
offset vs e_env gives r = −0.11, not significant, with the EFE sign. So the cheapest useful number is:

- **the power of the direct offset-vs-e_env regression at N = 141 against Chae+2020's predicted modulation** (use
  the per-galaxy predicted EFE offsets, not a flat 0.09 dex, because the spread in e_env is what sets the slope).

If power is high, r = −0.11 is a result in tension with Chae+2020 under this estimator. If it is low, say so on
/cdm-discrimination (the page now says "untested") and run the full re-keyed fit. Either way, register the power before
reading any new slope.
