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
