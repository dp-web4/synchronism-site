# PREREG — MOND δ-family Cassini Q₂ at SPARC-profiled a₀ (explorer 2026-11-06)

Written and committed **before** computing.

## Question
The 2026-09-17 maintainer run (`maintainer/scripts/cassini_q2_mond_interpolating_functions_output.txt`) shows δ = 4
"passing" Cassini (z = +0.91 to +2.40) — but at a₀ **fixed** to 1.20e-10 or 1.128e-10 (McGaugh's δ = 1 value). That is the
same structure as the compander's retired "passes at γ ≳ 1.5–2" (a₀ held fixed; maintainer 11-06). Was the δ = 4 pass a
partner-scale artefact too?

## Physics prior (why the answer may differ from the compander)
The δ-family ν_δ(y) = [1 − exp(−y^(δ/2))]^(−1/δ) has the deep-MOND limit ν → y^(−1/2) for **every** δ. The deep regime
pins a₀ through the BTFR regardless of δ. The compander's deep asymptote depends on γ (only a₀′/γ is identified), which
is why its profiled a₀ moved 18× from γ 0.3 to 3. So MOND's a₀ should move much less with δ — but it is not pinned: SPARC
points mostly sit in the transition, and a sharper transition gives less boost at y ~ 1, which the fit can offset with a
larger a₀. Larger a₀ raises Q₂ (fixed-a₀ table: 1.128 → 1.20e-10 raised z by 0.6–0.9 at δ = 4).

## Instrument
- SPARC: the frozen `sparc_profile.json` likelihood: MassModels_Lelli2016c.mrt, eVobs/Vobs ≤ 0.10, Υ_d 0.5, Υ_b 0.7,
  unweighted SSR of log10 residuals, a₀ bounded 10^[−11, −9]. BIC = N ln(SSR/N) + k ln N.
- Cassini: `Synchronism/simulations/sparc_cassini_q2.py` `qumond_q` / `q2_si`, orders 128/512, log_v_bound 14;
  z = (Q₂ − 1.6e−27)/1.8e−27; g_ext ∈ {2.00, 2.32, 2.48}e−10.
- δ grid: 1, 1.5, 2, 2.5, 3, 3.5, 4, 5, 6.

## Controls
- C1 (SPARC identity): δ = 1 profiled gives a₀ = 1.1275e−10 and SSR = 57.9649 (sparc_profile.json reference_mcgaugh),
  N = 2807.
- C2 (Cassini identity): δ = 4 at a₀ = 1.128e−10, g_ext 2.32e−10 reproduces z = +1.32 from the 09-17 table.

## Predictions
- P1: profiled a₀(δ) stays within [1.0, 1.6]e−10 over δ 1–6 (deep-regime pin), i.e. < 1.6× range vs the compander's 18×.
- P2: a₀_prof increases monotonically with δ.
- P3: at δ = 4 with profiled a₀, z > 1.96 at g_ext = 2.32e−10 (the 09-17 pass does not survive). Confidence ~55%; this is
  the outcome-unknown bet.
- P4: SPARC cost ΔBIC(δ = 4, k = 1) vs McGaugh δ = 1 (k = 1) is > +100 at point level.
- P5: a galaxy-block bootstrap (1000 resamples) of that ΔBIC keeps it > 0 in ≥ 97.5% of resamples (i.e. the cost is
  real at galaxy level, not a point-count artefact).

## Reported regardless
The smallest δ on the grid with |z| < 1.96 at all three g_ext under profiled a₀, and its point-level and galaxy-bootstrap
ΔBIC. If no δ ≤ 6 passes, say so.

## Not tested
AQUAL (the Cassini instrument is QUMOND). Υ free per galaxy. Nothing here moves the count; MOND's IFs are not the
framework's claim — but the site states which MOND members "pass", so this is a statement about the comparator.
