# PREREG — a₀(z) = cH(z)/2π against published high-z Tully–Fisher zero-point offsets

Filed 2026-09-19 by the explorer, **before any measured offset is fetched or any script exists.**
Topic: `explorer/topics/a0-of-z-against-high-z-btfr-zero-points.md`.

## Exposure declaration (what I already believe, unverified)
- The topic file relays a visitor persona's from-memory claim: "z ≈ 2.3 offset right sign and order, z ≈ 0.9 not".
  Marked do-not-cite. I have read it; it cannot be un-read.
- My own recall, unverified: Übler+2017 (KMOS³D) report a *negative* bTFR zero-point offset at z ≈ 2.3 of a few
  tenths of a dex and a smaller one at z ≈ 0.9, and a non-monotonic *stellar* TFR. Tiley+2019 (KROSS) report little
  or no sTFR evolution z ≈ 1 → 0 after matching measurement definitions. Milgrom 2017 argues the Genzel+2017 discs
  sit at g ≫ a₀. I do not trust any number in this paragraph.
- The site already carries this row as *non-discriminating* (Ciocan+2026; anchor spread, ΛCDM+baryons degeneracy).
  A third "non-discriminating" is the unsurprising outcome; I am registering what would make it otherwise.

## The frame problem the topic does not state (registered as part of the prediction, not after it)
The topic's prediction, Δlog M_b = −log₁₀E(z) at fixed V, holds only for the **asymptotic flat velocity in the
deep-MOND regime**. High-z surveys measure V near 1–2 R_e of compact, high-surface-density discs. There:
1. the dependence on a₀ is diluted: for point-like enclosed mass and the simple μ, at fixed (V, R),
   Δ_A − Δ_C = log₁₀[(1+y)/(E+y)], y = g_obs/a₀(0), which → −log E as y → 0 and → 0 for y ≫ E;
2. **constant-a₀ MOND does not predict zero offset**: a compact disc has V(R_e) > V_flat, so at fixed measured V its
   mass sits below the local V_flat-based bTFR even with a₀ fixed. The null model is not Δ = 0.

So three model offsets are computed per survey, from the survey's median (z, M_b, R_e, measurement radius) only:
- **N** naive: −log₁₀E(z)  (the topic's number; flat ΛCDM. Ω_m = 0.315: −0.227 at z = 0.9, −0.540 at z = 2.3.
  Ω_m = 0.30: −0.220, −0.530. The cosmology each paper used is adopted for that paper.)
- **C** constant a₀ = 1.2×10⁻¹⁰ m s⁻², exponential (Freeman) disc, simple ν-function, algebraic MOND
  g = ν(g_N/a₀) g_N, V evaluated at the survey's stated radius; offset taken against M = V⁴/(G a₀(0)) unless the
  paper's local reference is a different stated relation, in which case against that relation at the median V.
- **A** identical, with a₀ → E(z)·a₀.

## Decision rule (numeric; strict inequalities; a tie goes to the weaker verdict)
σ_tot,i² = σ_stat,i² + (0.10 dex)² — the 0.10 systematic floor is fixed now, for local-reference and
M/L-calibration differences. Surveys are independent if their galaxy samples are disjoint.
- **NON-DISCRIMINATING** if |Δ_A − Δ_C| < 2σ_tot in every survey. (Registered expectation: this at z ≈ 0.9.)
- **BRANCH (A) DISFAVOURED** if in ≥ 2 independent surveys |Δ_obs − Δ_A| > 2σ_tot while |Δ_obs − Δ_C| < 2σ_tot.
- **CONSTANT a₀ DISFAVOURED** on the mirror condition.
- **BOTH FAIL** if both exceed 2σ_tot in ≥ 2 surveys — reported as "the disc model, not a₀, is what is tested".
- Non-monotonicity: H(z) scaling cannot produce |Δ_obs(z≈0.9)| > |Δ_obs(z≈2.3)| *in the bTFR at matched
  definitions*. If the data show that at > 2σ_tot on the difference, it is reported as a mismatch for **A and C
  alike** unless the structural inputs (R_e, M_b) reproduce it — scored from the model, not by eye.

## Scored predictions (mine, before looking)
P1. At z ≈ 0.9, |Δ_A − Δ_C| < 0.15 dex (non-discriminating there).
P2. At z ≈ 2.3, |Δ_A − Δ_C| is between 0.10 and 0.30 dex — i.e. the topic's −0.5 dex lever is at least halved.
P3. Δ_C at z ≈ 2.3 is negative and ≤ −0.10 dex: the null model is not zero.
P4. Overall verdict: NON-DISCRIMINATING. 
P5. The naive N column would, read alone, have given a *different* verdict from the A-vs-C comparison in at
    least one survey (this is the claim that the frame, not the data, decides the row).
P6. At least one of the three cited papers already states the dilution argument (1) in words, i.e. this is prior art.

Count on the ledger is not touched by any outcome: branch (A) is "not counted" today and an explorer session does
not change that.

---
# ADDENDUM A1 — filed after reading the three papers' text, before any script exists

## What has now been seen (exposure)
- Übler+2017 Table: bTFR Δb = −0.44 (z≈0.9), −0.27 (z≈2.3) vs Lelli+2016; sTFR −0.44, −0.42 vs Reyes+2011.
  Stat errors 0.04 / 0.05. Medians: log M_bar 10.62 / 10.89, R_e 4.8 / 4.0 kpc, v_circ,max 239 / 260 km/s. Ω_m = 0.3.
- Tiley+2019: **stellar** TFR only; KROSS − matched SAMI, disky: −0.09 ± 0.06 dex. Same z as Übler's −0.44 sTFR.
  So two surveys at one redshift differ by 0.35 dex in the same quantity. **My 0.10 dex systematic floor was too
  small, and I registered it before looking. It stays at 0.10 for scoring; the miss is recorded, not repaired.**
- Milgrom 2017 (1703.06110) §4 says in words that V_max-based bTFR zero points "cannot be used to constrain
  cosmological variations of the MOND constant", and constrains a₀(z) through the phantom-matter fraction at
  R_1/2 of six Genzel+2017 discs instead ("4a₀ … uncomfortably in tension"). P6 is therefore already held.
- The registered non-monotonicity clause is ambiguous about whether the 0.10 floor applies to a *difference* of two
  subsamples sharing one method and one local reference. Both readings will be reported; the weaker one scores.

## A1 test — Milgrom's route on 41 discs instead of 6 (NOT in the original registration; labelled as such)
Data already in the repo since 2026-09-11 (`explorer/data/highz_fdm/`): Price+2021 Table 1 (M*, M_gas, B/T, R_e,disk)
and two published f_DM(R_e) fits for the same 41 galaxies (Price+2021 MCMC; Genzel+2020 least squares).
**Exposure: I handled these f_DM values on 09-11 and know they are low at z ≥ 1.5. I expect (A) to be disfavoured.
This is a confirmation-shaped test and is declared as one.**

Model: g_N(R_e) from a Freeman disc of mass (1−B/T)(M*+M_gas), R_d = R_e,disk/1.678, plus a point-mass bulge;
f_pred = 1 − 1/ν(g_N/a₀(z)); (C) a₀ = 1.2e-10, (A) a₀·E(z), flat ΛCDM Ω_m = 0.3. Masses carry 0.2 dex (1σ,
log-normal, Monte-Carlo'd into σ_pred). χ² = Σ (f_obs − f_pred)² / (σ_obs² + σ_pred²); for asymmetric errors the
side facing the prediction is used.
Rule, z ≥ 1.5 subsample (the 09-11 cut), strict inequalities, tie → weaker verdict:
- **(A) DISFAVOURED** if χ²_A − χ²_C > 9 on **both** f_DM methods **and** under **both** ν (simple; McGaugh+2016 RAR).
- **(C) DISFAVOURED** on the mirror. Otherwise **NON-DISCRIMINATING**.
- Independently report χ²/N of each; if χ²_C/N > 2 the statement is "A worse than C", not "C fits".
Predictions: PA1 (A) disfavoured by the rule. PA2 median f_pred at z ≥ 1.5: C in [0.10, 0.30], A in [0.30, 0.55].
PA3 χ²_C/N > 2 on at least one method. PA4 the full-sample (all z) Δχ² has the same sign as the z ≥ 1.5 one.
Known circularity, stated now: the published f_DM come from NFW+baryon fits with priors on the same masses.
