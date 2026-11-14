# Finding: The galaxy baryon census cannot see the cap. Hot gas in cluster cores reaches 6.39 without a light rule, and is above it at face value but systematics-limited

## Origin
Queue topic `is-the-baryon-census-a-convention-free-kill-of-the-cap-family.md` (maintainer 2026-11-14). The claim under
test came from a simulated-visitor persona (visitor log 2026-11-14, Pass 3). It said the bounded-boost family
B ≤ Ω_m/Ω_b "dies on lensing and the baryon census whatever the rotation-curve convention", citing McGaugh, Schombert,
de Blok & Zagursky 2010. PREREG `9cc9733` (`scripts/baryon_census_cap_family_PREREG.md`). It was not blind to my memory
of group gas fractions.

## Summary
"The baryon census" is two different measurements, and the persona's argument needs only one of them to hold.
- **The galaxy leg is extrapolated.** McGaugh+2010 take the outermost rotation velocity, hold it flat out to R₅₀₀ (an
  NFW factor f_V = 1.1), and divide by ΛCDM's M₅₀₀ ∝ V³. My positive control builds a universe that obeys a 6.39 cap
  exactly, with no halo, and runs it through the same formula. It returns detected fractions f_d = 0.12–0.50, which
  cover the observed spiral range (0.10–0.38). That leg carries nothing about the cap beyond V_c and M_b, the BTFR
  inputs that TEST-09 already uses.
- **The hydrostatic leg is a direct measurement.** X-ray gas in hydrostatic balance follows the potential that moves
  matter, inside the radius where emission is detected. No light rule enters. Under spherical symmetry
  B(r) = g_obs/g_bar = M_tot(<r)/M_b(<r) = 1/f_b(<r).
  - Massive clusters at R₅₀₀ sit **on** the cap: X-COP gives B = 6.41 ± 0.29.
  - Groups give B ≈ 6.4–10.5 at R₅₀₀. Half of that range depends on which stellar census you add.
  - Cluster cores at R₂₅₀₀ give B = 7.0–11.2 (five X-COP clusters, Eckert+2022) and 7.8 (42 relaxed clusters, Allen+2008).
    These are above 6.39 at face value in every dataset. The ensemble is limited by its calibration systematic (1.4σ).
    One cluster (A644, B = 11.2 ± 0.5) stays above the cap after a combined stress test.
- **Verdict.** The persona's citation is the wrong instrument. Its conclusion is partly right, by a different route:
  matter dynamics, not lensing, reaches the most permissive cap. It does not yet give a registered 3σ kill (the
  R₂₅₀₀ reading is post-hoc, below).

## Research Notes

### 1. The galaxy leg of McGaugh+2010 (read, PDF text verified with pdftotext)
- Sec. II.1: "This outermost circular velocity, V_c, we take to be representative of the gravitating mass."
  Then "rotation curves are approximately flat, so we expect V_c = f_V V₅₀₀ with f_V ≈ 1. If we [associate V_c with the
  peak of] NFW halos, then 1.0 ≤ f_V ≤ 1.3", and "f_V = 1.1, which we adopt".
- M_Δ = (Δ/2)^(−1/2) V_Δ³/(G H₀). At Δ = 500 and H₀ = 72 this gives M₅₀₀ = 204552·V₅₀₀³. The figure caption's
  1.5×10⁵·V_c³ is the same constant divided by f_V³ = 1.331. I checked this; the fetch agent had flagged it as a
  discrepancy, and it is not one.
- Cluster points come from Giodini+2009 (COSMOS, scaling-relation masses), not from per-system hydrostatics. Groups are
  not a separate class.
- The paper says the R₅₀₀ choice "is inevitably somewhat arbitrary". It never claims the galaxy result holds inside the
  observed radius. For galaxies, R₅₀₀ is 2.4–6× the last measured radius (control below).

**Positive control** (`scripts/baryon_census_cap_positive_control.py`, output alongside):
- Exponential stars plus gas discs, log M_b 7.5–11.5. The boost is simple-μ MOND capped at 6.39, with no halo.
- V_c is read at R_last = 4, 6 or 10 R_d, then put through McGaugh's formula.
- Census f_d = 0.120–0.503, rising with mass as the observed values do.
- The model's own f_d at its own R₅₀₀ is 0.87–0.91. That is just below 1/(6.39·0.17) = 0.92 because a thin disc's field
  exceeds the spherical enclosed-mass field by 1–6% at those radii.
- In the capped universe, then, the census reports an apparent 50–88% baryon deficit that does not exist.

### 2. Hydrostatic baryon fractions → B (`scripts/baryon_census_hydrostatic_B_table.py`)
Cap 6.39 means f_b(<r) ≥ 0.1565. The quotes come from fetch agents reading arXiv HTML; items marked [summary] are
model-extracted and should be checked against the PDF before citing.

| system | radius | f_b | B | z vs 6.39 | note |
|---|---|---|---|---|---|
| X-COP 13 clusters (Eckert+2019), median | R₅₀₀ | 0.156 | 6.41 ± 0.29 | +0.1 | HSE; ×0.94 HSE bias gives 6.82 (+1.0) [summary] |
| X-COP | R₂₀₀ | 0.164 | 6.10 | −0.9 | |
| Gonzalez+13, M₅₀₀ > 2×10¹⁴ mean [summary] | R₅₀₀ | 0.136 | 7.35 ± 0.27 | +3.6 | T_X–M masses; disagrees with X-COP at the same mass by ~3σ |
| Gonzalez+13 A2955 / AS0296 [summary] | R₅₀₀ | 0.097 / 0.095 | 10.3 / 10.5 | +3.4 / +2.9 | the two lowest of the sample (a maximum, not a bound) |
| Sun+09 groups, 1–3 keV, Lin-type stars | R₅₀₀ | 0.097–0.106 | 9.5–10.3 | +2.2–2.5 | fit, no coefficient errors; 15% assumed; 12/23 at r₅₀₀ extrapolated |
| Sun+09 groups, Gonzalez-type stars (incl. ICL) | R₅₀₀ | 0.117–0.157 | 6.4–8.5 | 0.0–1.7 | the stellar census alone moves B by up to 1.6× at 1 keV |
| Lovisari+15 20 groups, either stellar type | R₅₀₀ | 0.096–0.130 | 7.7–10.5 | +1.1–2.6 | f_gas from Table 2 by agent arithmetic |
| **Eckert+22 A644** | **R₂₅₀₀** | 0.089 ± 0.005 | **11.2 ± 0.5** | **+9.3** | gas + BCG + satellites, ICL excluded |
| **Eckert+22 A1795** | R₂₅₀₀ | 0.113 | 8.85 ± 0.48 | +5.2 | |
| **Eckert+22 A2319** | R₂₅₀₀ | 0.112 | 8.93 ± 0.56 | +4.5 | |
| Eckert+22 A2029 / A2142 | R₂₅₀₀ | 0.139 / 0.143 | 7.19 / 6.99 | +1.7 / +1.5 | |
| Allen+08, 42 relaxed kT > 5 keV | R₂₅₀₀ | 0.128 | 7.81 | +4.0 stat; **+1.4** with 12.5% abs. calibration | f_gas 0.1104 ± 0.0016, s = f*/f_gas = 0.16 ± 0.05 |

**Stress test at R₂₅₀₀.** I stack the three escapes against the result at once: h = 0.674 (f_gas × 1.058), masses 10%
too high (f_gas × 1.11), and stars doubled.
- A644 → B 8.7, still above.
- A1795 and A2319 → 6.8, still above, barely.
- A2029 and A2142 → 5.4, below.
- Allen's ensemble → 5.8, below.
- Hydrostatic bias was **not** used as an allowance. Non-thermal pressure makes the true mass larger, so B goes up.

**Where the core excess comes from.** Gas is less concentrated than the total mass. Eckert+22 Sect. 5.4: "We observe an
overall depletion of baryons in the 0.2−0.5R500 range", and f_bar rises outward in all five clusters. A cap at exactly
the cosmic ratio is therefore breached in cluster cores by the ordinary radial structure that also makes the outskirts
cosmic. Even ΛCDM's simulated depletion factor at R₂₅₀₀ (Allen's b₀ = 0.83 ± 0.04, from simulations) implies B > 6.39
there.

### 3. Prediction scorecard
| # | prediction | result |
|---|---|---|
| P1 | galaxy leg extrapolates V_c to R₅₀₀ | **held** (read; not blind) |
| P2 | capped mock gives census f_d < 0.5 | **held in 26/27 rows** (max 0.503, the 10-R_d row of the most massive disc). Sub-claim "model f_d ≥ 0.92" failed at 0.87–0.91 for a geometric reason (disc vs sphere) |
| P3 | groups B ≈ 9–12 at R₅₀₀ | **half held**: 9.5–10.5 with Lin-type stars, 6.4–8.5 with Gonzalez-type |
| P4 | massive clusters B(R₅₀₀) 6.5–8, not a 3σ kill | **held** for X-COP (6.41, +0.1σ; at the edge of the range). Gonzalez's mean 7.35 is +3.6σ statistically but disagrees with X-COP at the same mass |
| P5 | group exceedance clears 3σ after the escapes | **failed**: the stellar census choice alone takes groups to the cap |

The registered kill reading (groups at R₅₀₀ at 3σ, inside detected emission) is **not met**. The R₂₅₀₀ reading is
post-hoc, chosen after I saw Eckert+22 Table 4.

## Implications for the Site
- The joint sentence `BOUNDED_BOOST_JOINT` says "what reaches 6.39 is weak lensing, and only if light follows the
  boosted potential". That is now incomplete. **Hot gas reaches 6.39 with no light rule at all**: it sits on the cap at
  R₅₀₀ and is above it in cluster cores at face value. The status of 6.39 moves from "conditional on a light rule" to
  "exceeded at face value by matter dynamics in cluster cores, within the calibration systematic for the ensemble".
  That is stronger than before, and it is still not a registered kill.
- The persona's suggested fix ("cite McGaugh+2010 as the convention-independent kill") should **not** be adopted. The
  positive control shows that a cap-obeying universe reproduces McGaugh's galaxy deficit.
- A scope point the site has not stated: the cap B ≤ Ω_m/Ω_b is a claim about every bound system, and its cleanest
  matter-dynamics test is at cluster scale, not galaxy scale. "At the galaxy scale" in the joint sentence is a choice of
  probe, not a limit of the claim.
- This is distinct from MOND's cluster problem, though related. MOND fails clusters through its function (Ettori+2019:
  it underestimates HSE masses by 40% at R₁₀₀₀). The cap fails through its bound, whatever the function. The cap needs
  only +9% to +76% undetected baryons inside R₂₅₀₀ to escape, against MOND's roughly ×2.

## Action: Maintainer
1. Extend `BOUNDED_BOOST_JOINT` (`src/lib/ledger.ts`) with one sentence, roughly:
   "Hot gas in galaxy clusters reaches the 6.39 cap without any light rule: X-ray hydrostatic masses put massive clusters
   at the cap at R₅₀₀ (B = 6.4, X-COP) and above it in their cores (B = 7–11 at R₂₅₀₀ in five X-COP clusters, Eckert+2022;
   7.8 in 42 relaxed clusters, Allen+2008). That is above 6.39 at face value, but within the ~12% calibration systematic
   for the ensemble (1.4σ); one cluster (A644) stays above it under every systematic combined. The R₂₅₀₀ reading was
   chosen after seeing the data (explorer 2026-11-14)."
2. Do **not** cite McGaugh+2010 as a kill of the cap. If it is cited, add: "its galaxy points extrapolate the outer
   rotation speed to R₅₀₀ with a dark-halo factor; a universe obeying the cap reproduces them".
3. Lint candidate: "baryon census" must not co-occur with "convention-free" or "convention-independent" on one surface.
4. Before rendering, re-read Eckert+2022 Table 4 and Allen+2008 Sect. 3.1 in PDF form. The agent read arXiv HTML; the
   R₂₅₀₀ numbers are verbatim table transcriptions, but [summary]-grade rows are not.

## Open Threads
- **Register the core test before DR-anything.** A clean, pre-registered version would take all X-COP clusters with
  stellar profiles, or the CHEX-MATE sample, at a fixed 0.3 R₅₀₀. Each needs its own systematic budget, a trials
  correction over clusters, and the dynamical state checked (I did not check whether A644 is relaxed; a disturbed
  cluster can bias HSE either way).
- **The cap's radial shape problem.** If B(r) in clusters peaks at 0.2–0.5 R₅₀₀ and falls to ~6 at R₂₀₀, no
  single-variable boost B(g_bar) can fit it: g_bar falls monotonically outward while B rises then falls. This overlaps
  `cluster-rar-vs-every-acceleration-keyed-c.md`. Eckert+22's own fit needs two acceleration scales and a sign-changing
  slope (α₂ = −1.2).
- **Does H₀ enter the cap?** f_gas ∝ h^(−1.5), so B ∝ h^1.5 at fixed data, while Ω_m/Ω_b is CMB-fixed. A framework that
  ties a₀ to cH₀/2π and also caps at Ω_m/Ω_b has its cluster verdict move by 5.8% between H₀ = 70 and 67.4.
