# PREREG — the EFE-free corner against the pressure-supported dwarfs (Crater II first)

Explorer 2026-11-10. Written before any script is run and before the fetched papers are read
(three fetches are in flight; this file is committed first). Topic:
`topics/crater-ii-and-dsph-efe-test-for-the-efe-free-corner.md`.

## Object under test
The EFE-free corner as defined in `src/lib/ledger.ts` `EFE_FREE_CORNER_STATUS` and
`maintainer/scripts/efe_free_corner_boost_across_the_chae_bin.py`:
algebraic, isolated reading  g_N = g · tanh(γ ln(1 + g/a₀′)),  a₀′ = γ · a_M,  a_M = 1.1×10⁻¹⁰ m/s²,
γ ∈ {0.87, 0.90, 0.95}. No external field by construction.

## What is already on file (not blind)
- 2026-08-23 finding executed Crater II against the boost CEILING (B_req = 60; 4.7σ at 13.7).
  That is a different object (the floored family). It noted "EFE = 0 is the framework's most
  favourable case" for the ceiling. It did not evaluate the unfloored corner.
- I already know Crater II's σ_obs = 2.7 ± 0.3 km/s (Caldwell+2017) from that file, L_V = 1.6e5,
  r_1/2(3D) = 1.42 kpc. So the Crater II comparison is NOT blind on the outcome. The M31-dwarf and
  S5 re-measurement numbers I do not remember to better than a factor ~1.5; those are semi-blind.

## Predictions (numbers computed by hand before the script; the script must reproduce them)
P1 (γ-blind). At Crater II, g_int ≈ σ²/r ≈ 2×10⁻¹³ m/s² ≈ 2×10⁻³ a₀′. tanh(γ ln(1+x)) = γx(1 + O(x)),
    so the corner's σ prediction differs across γ = 0.87–0.95 by < 0.5 %. The test is a test of
    a_M and of isolation only; γ cannot be constrained by any dSph.
P2 (corner σ for Crater II). σ_los⁴ = (4/81) G M a_M (isotropic, isolated, deep). With M = Υ_V L_V:
    Υ_V = 2 → 3.90 km/s; Υ_V = 1 → 3.28; Υ_V = 4 → 4.64; Υ_V = 0.5 → 2.76.
    Relative to Milgrom's a₀ = 1.2e-10 the corner is lower by (1.1/1.2)^¼ = 0.979.
P3 (verdict shape). Against 2.7 ± 0.3 (random-only): 4.0σ at Υ = 2, 1.9σ at Υ = 1.
    The corner passes at 2σ only for Υ_V ≤ 1.0. An old (≥10 Gyr), metal-poor ([Fe/H] ≈ −2)
    population has Υ_V ≈ 1.5–2.5 (Kroupa/Chabrier). So: EXCLUDED at ≳ 3σ at stellar-population Υ,
    NOT excluded if Υ_V ≤ 1 is allowed. I predict the published isolated-MOND number (McGaugh 2016)
    is ≈ 4 km/s at Υ = 2 and that my 3.98 (a₀ = 1.2e-10) reproduces it to 10 %.
P4 (tides go the wrong way for the corner). If Crater II is tidally heated, σ_obs is an UPPER bound
    on the equilibrium σ, which makes the isolated over-prediction worse. Tides were the ceiling's
    only escape on 08-23; they are not an escape here. The corner's escapes are: Υ_V ≤ 1, L_V
    over-estimated by > 2×, radial anisotropy lowering σ_los by ≳ 20 %, or σ_obs biased low.
P5 (anisotropy systematic). Allowing ±20 % on the 4/81 prefactor (anisotropy, profile, light vs
    mass weighting) the Υ = 2 tension falls from 4.0σ to about 1.5σ. So Crater II alone is NOT a
    ≥3σ kill once the prefactor systematic is carried. I expect the honest statement to be
    "disfavoured at 1.5–4σ depending on Υ and anisotropy", i.e. the same strength as the GC
    disfavouring already on the status line, not a new kill.
P6 (population). The Andromeda sample (McGaugh & Milgrom 2013b) contains several dwarfs with
    g_ext > g_int where σ_iso and σ_EFE differ by ≥ 30 %. I predict the observed σ in those
    rows fall below σ_iso on average (the sign of the EFE), but with per-row errors large enough
    that the EFE-free corner is disfavoured by that sample at ≤ 3σ combined, not killed.
    (Semi-blind: I do not remember the table.)
P7 (the re-measurement). The S5 2021 Crater II σ is LOWER than 2.7 (I recall ≈ 2.3). If so the
    Υ = 2 tension rises above 4σ random-only. Semi-blind.
P8 (what cannot happen). No dSph can SELECT the corner over MOND-with-EFE or over ΛCDM: every
    outcome either disfavours the corner or is shared with isolated MOND. Bucket 0 unchanged.

## Kill criterion (fixed now)
The corner is "killed on existing data" only if, at Υ_V = 1.0 (the lowest stellar-population
value) and with a ±20 % prefactor systematic added in quadrature, the isolated prediction exceeds
σ_obs by ≥ 3σ for Crater II, OR the EFE-regime M31 rows give a combined ≥ 3σ excess of σ_iso over
σ_obs with the same systematics. Otherwise the result is "disfavoured by N σ", with N printed per
Υ. Scored before anything is written to the finding.

## Controls
C1 identity: at a_M = 1.2e-10, Υ = 2, the script must give 3.98 km/s (08-23 value).
C2 γ-blind: three γ rows within 0.5 %.
C3 published: McGaugh 2016's isolated and EFE numbers, as fetched, vs my isolated number.
