# Finding: Crater II does not kill the EFE-free corner; every dwarf spheroidal is γ-blind for it, Υ and the estimator carry the verdict, and Antlia 2 is Crater II's mirror image

**Date**: 2026-11-10 · **Track**: explorer · **Origin**: `topics/crater-ii-and-dsph-efe-test-for-the-efe-free-corner.md` (maintainer 2026-11-10, from a researcher persona: "an EFE-free corner has a free, existing-data kill sitting in the literature and the site is waiting for December instead").
**PREREG**: `scripts/efe_free_corner_dsph_PREREG.md` (commit `9fd9639`, before the script and before the fetched papers were read; Crater II's 2.7 ± 0.3 was already known to me from the 08-23 finding and is declared there). **Script**: `scripts/efe_free_corner_dsph.py` (+ `_output.txt`).
**Sources read today** (verbatim via arXiv HTML and pdftotext on the saved PDFs): McGaugh 2016 ApJL 832 L8; Caldwell et al. 2017 ApJ 839, 20; Fu, Simon & Alarcón Jara 2019 ApJ 883, 11; Ji et al. 2021 ApJ 921, 32 (S5); McGaugh & Milgrom 2013b ApJ 775, 139; McGaugh & Wolf 2010 ApJ 722, 248; via a literature-search agent (abstracts and ar5iv full text grepped): Collins et al. 2015 ApJL 799, L13; Collins et al. 2020 MNRAS 491, 3496; Collins et al. 2021 MNRAS 505, 5686; Charles et al. 2023 MNRAS 521, 3527; Pickett et al. 2025 (arXiv:2505.04475); Banik & Zhao 2022 §3.3; Chae et al. 2020 §1.
**Refutation count: unchanged.** The corner was "alive, disfavoured, not novel" (ledger `EFE_FREE_CORNER_STATUS`, 2026-11-09) and stays so. Nothing here can select it (PREREG P8).

---

## Summary

1. **The dwarfs cannot see γ.** At Crater II the corner's law g_N = g·tanh(γ ln(1+g/a₀′)) with a₀′/γ = 1.1×10⁻¹⁰ sits at g_N/a_M = 1×10⁻⁴; the finite-x factor on g is 1.0028 and the predicted σ at γ = 0.87 / 0.90 / 0.95 is 3.9031 / 3.9029 / 3.9027 km/s. Every pressure-supported dwarf in the EFE regime is a test of one number, a_M, and of the absence of an external field. It is isolated deep-MOND with a₀ → 1.1×10⁻¹⁰ (σ lower than McGaugh's by (1.1/1.2)^¼ = 0.979). The persona's "free kill" is therefore the literature's own isolated-vs-EFE test, inherited.
2. **Crater II disfavours the corner; it does not kill it under the criterion fixed in advance.** Corner σ = 3.28 / 3.90 / 4.64 km/s at Υ_V = 1 / 2 / 4. Against the S5 2021 value 2.34 (+0.42/−0.30; 141 stars, gradient-subtracted): +2.2σ / +3.7σ / +5.5σ random-only; **+1.2σ / +1.8σ / +2.3σ once a 20 % estimator systematic (anisotropy, light-vs-mass weighting, the 4/81 prefactor; McGaugh 2016 §IV.1 names the same three) is added in quadrature**. The PREREG kill (≥ 3σ at Υ_V = 1 with the systematic) does not fire for any of the four published measurements (+0.7 to +1.2σ). The number that travels: the corner passes Crater II at 2σ for Υ_V ≤ 0.9–1.6 random-only, and for Υ_V ≤ 2.75–4 with the systematic. McGaugh adopts 2 (+2/−1); the Kroupa mean for these populations is 1.3 (McGaugh & Wolf 2010); Ji et al. adopt 2.2.
3. **Antlia 2 is the mirror.** Same regime (≈130 kpc, g_int ≪ g_ext), 4.7× the stellar mass, 2.8× the radius. McGaugh's EFE estimator gives 2.8 (+1.3/−0.8) km/s (Ji et al. 2021 §7.4, who write "Ant2's velocity dispersion of 6.0 ± 0.4 km/s is thus in conflict with the EFE prediction"). The corner (isolated) gives 5.76 km/s at Υ = 2: **−0.6σ** against 5.98 (+0.37/−0.36). Where Crater II favours the external field, Antlia 2 favours its absence, by a larger margin. Both are tidally disturbed (Ant2: clear velocity gradient, ">90 % of its stars" lost; Cra2: "almost certain to be stripped", Fu et al. 2019; tentative gradient, Ji et al.). Tides inflate σ, which hurts the isolated reading at Antlia 2 and helps nothing at Crater II (PREREG P4: for the corner, a tidally inflated σ_obs is an upper bound, so the over-prediction can only be worse).
4. **The EFE-regime population, scored as registered** (one measurement per dwarf, largest N, 20 % systematic): on the 2013 M31 numbers, six rows give χ² = 6.2/6 and a +1.75σ signed lean against the corner at Υ = 2 (+0.43σ at Υ = 1). **On the re-measured numbers (2015–2023, §4a) the lean is gone: χ² = 6.6/6, signed −0.24σ, the corner above the data in 2/6.** PREREG P6 (rows below σ_iso on average) held on 2013 data and is **refuted on current data**. Meanwhile MOND's deep-EFE estimator sits below the data in 6/6 rows (And XIX −3.4σ, And XXI −3.8σ, Antlia 2 −8.8σ random-only; over-stated where g_int/g_ext ≈ 0.2, but the direction is uniform).
5. **What the literature actually shows is a split that has moved against the EFE since 2013, and nobody has booked it.** McGaugh & Milgrom 2013b's own conclusion is "tentative evidence for this dichotomy"; one of their two "EFE detected" pairs (And XVII / XXVIII) dissolved with Collins et al. 2015's re-measurement; And XIX and XXI now sit 3–4σ (random-only) above the deep-EFE values and on the isolated line. Every post-2013 "MOND agrees" sentence (Collins 2021, Pickett 2025, Banik & Zhao 2022, Chae 2020) either compares to the EFE value with the Υ band stretched to touch the data or re-cites 2013. Crater II (2016–2021) is the EFE's best case; Antlia 2 (2021) is its worst, from the same survey and estimator. The site should not import the persona's "Crater II is why MOND practitioners believe the EFE is real" without the rest of the column.

## 1. The object and the estimator

Corner: `EFE_FREE_CORNER_STATUS` (ledger) and `maintainer/scripts/efe_free_corner_boost_across_the_chae_bin.py`: g_N = g·tanh(γ ln(1+g/a₀′)), a₀′ = γ·a_M, a_M = 1.1×10⁻¹⁰ m/s², read algebraically with no external field. Deep limit g² = g_N·a_M.

Isolated deep estimator (McGaugh 2016 eq. 1; McGaugh & Milgrom 2013b): σ_los⁴ = (4/81) G M a. It is the MOND virial relation for the mass-weighted 3D dispersion with isotropy assumed. McGaugh 2016 §IV.1: "We assume spherical symmetry, isotropic orbits, and dynamical equilibrium. Deviations from these ideals could affect the predicted velocity dispersion." The 20 % systematic in the PREREG stands for those three words.

Controls: C1 identity, Crater II at a₀ = 1.2×10⁻¹⁰, Υ = 2: 3.983 km/s (08-23: 3.98; McGaugh: "≈ 4"). The McGaugh & Milgrom table reproduces at Υ = 2 to ≤ 0.1 km/s on all nine rows (And XXIII 6.30 vs 6.4 is the largest). C2 γ-blind: three γ rows within 0.01 %. C3: McGaugh's EFE 2.1 (+0.9/−0.6) and isolated ≈ 4 as fetched.

## 2. Crater II, four measurements

| measurement | σ_obs (km/s) | N | corner Υ=1 | Υ=2 | Υ=4 | Υ for 2σ pass (rand. / +20 % sys) |
|---|---|---|---|---|---|---|
| Caldwell+2017 | 2.7 ± 0.3 | 62 | +1.9 (+0.8) | +4.0 (+1.4) | +6.5 (+2.0) | ≤ 1.02 / ≤ 4 |
| Fu+2019 | 2.7 (+0.5/−0.4) | 37 | +1.2 (+0.7) | +2.4 (+1.3) | +3.9 (+1.8) | ≤ 1.61 / ≤ 4 |
| Ji+2021 S5, gradient-subtracted | 2.34 (+0.42/−0.30) | 141 | +2.2 (+1.2) | +3.7 (+1.8) | +5.5 (+2.3) | ≤ 0.88 / ≤ 2.75 |
| Ji+2021 S5, no gradient | 2.43 (+0.54/−0.35) | 141 | +1.6 (+1.0) | +2.7 (+1.6) | +4.1 (+2.1) | ≤ 1.30 / ≤ 3.66 |

z = (σ_corner − σ_obs)/err, the error taken on the side toward the prediction; parentheses: 20 % of σ_corner added in quadrature. Inputs: L_V = 1.6×10⁵ (M_V = −8.2), r_h = 1066 ± 84 pc, r_1/2 = 4r_h/3 (McGaugh 2016 §II–III; Ji et al. Table 1 gives the same r_h).

The literature's reading, verbatim (Ji et al. §7.4): McGaugh "predicted the EFE in Cra2 should cause it to have a very low velocity dispersion of 2.1 (+0.9/−0.6) km/s … This was confirmed by Cra2's very low velocity dispersion of 2.7 km/s from Caldwell et al. (2017) and Fu et al. (2019). Including the possible velocity gradient in Cra2, our results (2.35 (+0.4/−0.3) km/s) are even closer to this prediction."

What that confirmation rests on: the EFE band 1.5–3.0 (Υ 1–4) contains every measurement; the isolated band 3.3–4.6 (same Υ) sits 1–2 error bars above the S5 value with the estimator taken as exact. That is a real preference, and its strength is set by Υ and by the 20 %, not by the data error.

## 3. Antlia 2

Ji et al. 2021 Table 1: M_V = −9.86 ± 0.08 (L_V = 10^5.88), r_h = 2541 ± 175 pc, σ_v = 5.98 (+0.37/−0.36) with a 5.72 km/s/deg gradient fitted, 7.69 (+0.40/−0.37) without; 283 members; M_dyn/L = 100.

| reading | prediction (Υ = 2) | vs 5.98 (+0.37/−0.36) | vs 7.69 (no gradient) |
|---|---|---|---|
| MOND + EFE (McGaugh eq. 2, per Ji et al.) | 2.8 (+1.3/−0.8) | +2.4σ on the Υ band | +3.8σ |
| corner / isolated MOND (0.979×) | 5.76 (4.84 at Υ=1, 6.85 at Υ=4) | −0.6σ (−0.2 with sys) | −5.2σ (−1.6 with sys) |

The corner is consistent with the gradient-subtracted Antlia 2 at Υ = 2. The authors attribute the gradient to tides ("In the case of Ant2, the gradient is very likely due to tides"), and tides inflate σ, so the equilibrium σ is ≤ 6.0 and the corner's margin is an upper bound on its comfort. The point is symmetry, not rescue: the one survey that measured both feeble giants with one pipeline finds one on the EFE line and one on the isolated line.

## 4. The Andromeda EFE-regime dwarfs

McGaugh & Milgrom 2013b Table 1 (Υ = 2 predictions; σ_obs Collins et al. 2013), corner = 0.979 × σ_iso:

| dwarf | σ_iso | σ_efe | σ_obs 2013 (N) | corner z (Υ=2, +sys) | R_obs = σ_obs/corner | R_efe |
|---|---|---|---|---|---|---|
| And XVII | 4.5 | 2.5 | 2.9 (+2.2/−1.9) (8) | +0.6 | 0.65 | 0.56 |
| And XIX | 5.0 | 2.6 | 4.7 (+1.6/−1.4) (26) | +0.1 | 0.95 | 0.52 |
| And XXI | 5.2 | 3.7 | 4.5 (+1.2/−1.0) (32) | +0.4 | 0.88 | 0.71 |
| And XXV | 5.7 | 3.5 | 3.0 (+1.2/−1.1) (26) | +1.6 | 0.54 | 0.62 |

Only And XXV leans toward the EFE value; And XIX and XXI sit on the isolated line (the paper's own words on And XIX: "the prediction for the isolated regime is somewhat higher, in even better agreement with the data"). The 2013 M31 sample does not discriminate at the per-object level: the error bars are 1–2 km/s on 3–5 km/s predictions.

### 4a. The re-measured rows (2015–2023) reverse the 2013 lean

Every EFE-regime M31 dwarf in the 2013 table has been re-observed, three of them with revised luminosities and radii. Verbatim numbers from the papers (search and extraction 2026-11-10; the And XXV arXiv v1 says 4.5 ± 1.0, the published MNRAS value is 3.7 (+1.2/−1.1), arXiv never updated):

| dwarf | newest σ_obs (N) | L_V, r_h used | corner Υ=1/2/4 | z (Υ=2, rand \| +sys) | deep-EFE estimator, rescaled | z_EFE (rand; at Υ=4) |
|---|---|---|---|---|---|---|
| And XIX | 7.8 (+1.7/−1.5) (81), Collins+2020 | 7.9×10⁵, 3065 pc | 4.89/5.82/6.92 | −1.3 \| −1.0 | 2.7 | −3.4 (−2.6) |
| And XXI | 6.1 (+1.0/−0.9) (77), Collins+2021 | 3.2×10⁵, 1005 pc | 3.90/4.64/5.53 | −1.6 \| −1.1 | 2.7 | −3.8 (−2.5) |
| And XXV | 3.7 (+1.2/−1.1) (49), Charles+2023 | 3.7×10⁵, 945 pc (3D) | 4.05/4.82/5.74 | +0.9 \| +0.7 | 2.6 | −1.0 (0.0) |
| And XVII | 6.5 (+3.3/−2.7) (16, contaminated), Collins+2015 | 2013 values | 3.72/4.43/5.28 | −0.8 \| −0.7 | 2.5 | −1.5 (−1.1) |
| Crater II | 2.34 (+0.42/−0.30) (141), Ji+2021 | as §2 | 3.28/3.90/4.64 | +3.7 \| +1.8 | 2.1 | −0.8 (0.0) |
| Antlia 2 | 5.98 (+0.37/−0.36) (283), Ji+2021 | as §3 | 4.84/5.76/6.85 | −0.6 \| −0.2 | 2.8 | −8.8 (−5.5) |
| **six rows** | | | **corner, Υ=2, +sys: χ² = 6.6/6, signed −0.24σ, above the data in 2/6** | | **deep-EFE: χ² = 107.7/6, signed −7.9σ, above the data in 0/6** | |

- **P6 is refuted on the current sample.** I predicted the EFE-regime rows would sit below σ_iso on average. On the 2013 numbers they did (5/6, +1.75σ). On the re-measured numbers they do not: the corner (isolated reading) fits the six at χ²/dof ≈ 1 with no signed lean, and the only row it over-predicts by more than 1σ is Crater II.
- **The deep-EFE row is over-stated and should be read as a direction, not a σ count.** It is McGaugh's eq. 2 (the g_int ≪ g_ext limit) rescaled by √(M/r) at fixed g_ex; for And XIX and XXI, g_int/g_ext ≈ 0.2, where that estimator under-predicts and a full solution would sit higher. Collins et al. 2021 call And XXI "within 1σ" of the EFE value — by adding the Υ = 4 upper range of the prediction (5.2) to the measurement's lower error (5.2), a touching point that is numerically the isolated prediction. Pickett et al. 2025 do the same for And XXIII (EFE 4.4 (+1.8/−1.3) vs 7.1 ± 1.0). No paper since 2013 has run the on/off comparison on the current numbers (search result; Banik & Zhao 2022 §3.3 and Chae et al. 2020 §1 re-cite the 2013 data; Chae adds "the possibility of tidal interactions and out-of-equilibrium dynamics complicates the interpretation").
- **The And XVII / And XXVIII pair, one of McGaugh & Milgrom's two "EFE detected" pairs, dissolved in 2015 and nobody booked it.** Their §2.4: And XVII (EFE, ≈ 2.5) vs And XXVIII (isolated, ≈ 4.5), "such a difference is shown by the new observations (≈ 3 … and ≈ 5)". Collins et al. 2015 re-measured And XVII at 6.5 (+3.3/−2.7) from 16 stars with a 3σ shift in systemic velocity; the Local Volume Database still carries the 2013 value. The pair is now the wrong way round, with an error bar wide enough to say little either way.
- **Tides are the EFE's escape in three of six rows, and the same escape ΛCDM uses for the low densities.** And XIX: "And XIX may not be in dynamical equilibrium" (Collins+2022 §1, summarising 2020); And XXI: "could indicate that it is not in dynamical equilibrium" (§6); Antlia 2: "the gradient is very likely due to tides". For the corner the tidal direction is the opposite: tides would *lower* the equilibrium σ below 7.8 / 6.1 / 6.0, toward the isolated values. So the honest statement is symmetric: on the EFE-regime dwarfs as currently measured, the no-EFE reading needs no tides on five of six and Υ ≤ 1 or an estimator systematic on Crater II; the EFE reading needs tides on three and fits Crater II and And XXV without them.

## 5. PREREG scoring

| | prediction | outcome |
|---|---|---|
| P1 γ-blind < 0.5 % | — | HELD (0.01 %) |
| P2 σ = 3.90 / 3.28 / 4.64 at Υ 2 / 1 / 4 | — | HELD exactly |
| P3 4.0σ at Υ=2, 1.9σ at Υ=1 vs Caldwell; McGaugh's "≈ 4" reproduced | — | HELD (4.0, 1.9; 3.98) |
| P4 tides are no escape for the corner | — | HELD by construction; Antlia 2 is the worked example |
| P5 with 20 % sys the Υ=2 tension ≈ 1.5σ; "disfavoured 1.5–4σ" | — | HELD (1.3–1.8σ with sys across the four measurements) |
| P6 M31 EFE rows below σ_iso on average; combined ≤ 3σ | — | HELD on the 2013 numbers (+1.75σ, 5/6); **REFUTED on the re-measured numbers** (−0.24σ, 2/6; §4a). The "≤ 3σ combined" half held both ways. |
| P7 S5 value lower than 2.7 | — | HELD (2.34) |
| P8 nothing can select the corner | — | HELD |
| Kill criterion | Crater II ≥ 3σ at Υ=1 with sys, or population ≥ 3σ | **NOT MET** (+1.2σ max; population +1.75σ) |

Blind status: Crater II's 2.7 was known; its 2.34 was not; Antlia 2's 6.0 was not (I recalled "5.7 ± 1.1", Torrealba 2019's value, before reading); the M31 table was not.

## Implications for the site

- **`EFE_FREE_CORNER_STATUS`** can carry one more sentence, which closes the persona's point without the persona's conclusion: "On the pressure-supported dwarfs it is isolated MOND with a₀ → 1.1×10⁻¹⁰ (γ-blind at the 10⁻⁴ level): Crater II (2.34 (+0.42/−0.30), S5 2021) sits 1.2–1.8σ below it once Υ_V = 1–2 and a 20 % estimator systematic are carried (up to 4σ at Υ = 2 with random errors only), while Antlia 2 (5.98 (+0.37/−0.36), same survey) sits on it and 2.4σ above MOND's external-field value; on the re-measured M31 external-field dwarfs (And XIX, XXI, XXV, XVII; 2015–2023) it fits at χ² = 6.6 for six rows with no signed lean, where MOND's deep-external-field estimator sits below the data in every row, three of them flagged non-equilibrium by their authors. The dwarfs do not kill it and cannot select it; Gaia DR4 remains the kill route."
- **Do not add "Crater II confirms the EFE" to /mond-unification** as a bare fact. The honest sentence is the dichotomy with both giants, and McGaugh & Milgrom's own "tentative".
- The persona's claim that Crater II is "not mentioned anywhere" is false (Tier 1 #2, "Crater II needs B = 60 against a ceiling of 3.17", from the 08-23 finding), but that mention is the ceiling, not the corner; the two are different objects and the site should say which one Crater II bears on (both, in opposite ways: it kills the floored family at 4.7σ regardless of EFE, and disfavours the unfloored corner at ~1.5σ).

## What would make this a kill

Υ_V pinned to ±25 % from a CMD fit of Crater II's population (the deep photometry exists), an anisotropy-marginalised Jeans model instead of the 4/81 scalar, and a tidal model that bounds the σ inflation from below. With Υ = 2 ± 0.5 and the estimator at ±10 %, the S5 value would be ≈ 3σ. That is a modelling paper, not a free lookup. The dSph channel is low-power for isolated-vs-EFE by construction: σ ∝ M^¼, so a factor 2 in Υ is 19 % in σ, and the EFE's own prediction spans a factor 1.7 across the same Υ band.

## Open threads
- A2's σ_v without gradient (7.69) vs with (5.98): which is the equilibrium value decides whether the corner is "consistent" or "+5σ random-only" there. A tidal N-body of Antlia 2 in the isolated law is the test; none exists.
- Ji et al. §7.4, the authors' own conclusion, verbatim: "The similar EFE predictions but very different velocity dispersions for Ant2 and Cra2 could pose a challenge for MOND. However, given the clear presence of tidal effects in Ant2 and possible velocity gradient in Cra2, it is important to explore the influence of tides before drawing further conclusions." That is the right status for the corner too: the pair is a tides question before it is an EFE question.
- McGaugh & Wolf 2010 §3.4 (ultra-faints "may therefore be fatal to MOND, provided that both their data and the assumptions" hold) is the same escape structure for the UFDs that the corner would inherit; the UFD σ are above the isolated line (Segue 1: isolated 0.9 km/s vs 3.7 ± 1.4), which is the opposite sign from Crater II and is the tidal-susceptibility correlation. The corner inherits MOND's UFD problem whole.
