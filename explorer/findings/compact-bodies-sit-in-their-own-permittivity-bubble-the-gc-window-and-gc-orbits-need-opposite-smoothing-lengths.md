# Finding: Compact bodies sit in their own permittivity bubble. Under L2, the globular-cluster window and globular-cluster orbits need opposite smoothing lengths.

## Origin
- Topic `smoothing-length-window-for-density-keyed-laws.md` (maintainer 2026-09-15), run together with
  `mrh-smoothed-density-repair-untested-or-refuted.md`, as that topic suggested.
- WAKE and pre-registration: `work/2026-09-15-wake-and-prereg.md`, committed **`ab620af` before any computation**.
- Scripts in `findings/scripts/` (all with `_output.txt`):

  | Script | Status |
  |---|---|
  | `gc_slope_smoothed_density.py` | C1, pre-registered |
  | `oort_window_smoothed_with_sun.py` | C2, pre-registered, plus one labelled post-hoc block |
  | `compact_tracer_bubble_factor.py` | C3, pre-registered |
  | `disc_boost_vs_smoothing_length.py` | C4, pre-registered, plus labelled post-hoc metrics |
  | `bubble_posthoc_published_rg_sets_and_sgr.py` | post-hoc |
  | `bubble_gc_tolerance_readout.py` | post-hoc |

## Summary
**What the topic asked, answered.**
- **Globular clusters' internal dynamics give no upper bound on D.** Smoothing only blinds the test: every excluded
  knee turns marginal by D = 30 pc.
- **The Oort window does not move** for D from 3 to 300 pc. It moves only at D ≈ 1 pc, with the Sun in the ball.
- **RG never fixed D.** Cesare+2022 add only that D must be "sufficiently smaller than the size of a galaxy".

**What the topic did not ask.**
- Under L2, the equation the site's solver and Refracted Gravity use, every compact body sits in a high-C region made by
  its own mass. It feels **F = 3ε_out/(ε_in+2ε_out)** of the field a diffuse tracer feels at the same place, the
  dielectric-sphere factor.
- Validated to 10⁻⁵ against the closed form.
- Adding the action's striction force gives exactly F_L3 = 1.0000, a Bekenstein–Milgrom-type composite-body theorem for
  the density class. So the bubble is where L2's known third-law violation shows up for *tracers*.

**The consequence.**
- The GC leg of the published joint window needs D ≲ 10 pc.
- At D ≲ 10 pc, the same L2 law makes a typical halo GC feel **0.63–0.64** of the field acceleration (framework window
  edges) or **0.34** (RG's E0 parameters).
- Milky Way halo-GC kinematics and disc red-giant kinematics give the same M(<21 kpc) to 1.00 (−0.17). That puts these
  at **~2.1σ and ~3.9σ**, with estimator systematics unmodelled.
- **Under L2, the joint window can have the GC leg or normal GC orbits, not both.**

**Not a refutation.** Count stays 6. The tolerance is post-hoc and semi-binding, and no archive document commits to L2
plus a D.

## Research Notes

### 1. C1: smoothing blinds the globular-cluster test (topic Ask 1)
Same 42 clusters, statistic and thresholds as `joint_local_window_gamma_axis.py`. The only change is that ρ in the law
becomes ρ_D, the exact top-hat ball average of the modified-Hubble model. Newtonian mismatch −0.057; MOND+EFE −0.093.

- **Positive control:** 7/7 D = 0 cells reproduce 09-08 to ±0.002.
- **Rule (does a window-edge knee become EXCL at some D > 0?): NOT FIRED.**

| γ | ρ_c (M☉/pc³) | D=0 | 0.3 | 1 | 3 | 10 | 30 pc |
|---|---|---|---|---|---|---|---|
| 0.489 | 0.0039 | −0.074o | −0.074o | −0.074o | −0.074o | −0.074o | −0.070o |
| 0.489 | 0.0079 | −0.087o | −0.087o | −0.087o | −0.087o | −0.086o | −0.080o |
| 0.489 | 0.1238 | −0.197E | −0.197E | −0.197E | −0.197E | −0.191E | −0.148m |
| 0.489 | 1.225 | −0.278E | −0.278E | −0.278E | −0.279E | −0.263E | −0.164m |
| 2 | 0.078 | −0.085o | −0.086o | −0.086o | −0.086o | −0.085o | −0.081o |
| 2 | 12.12 | −0.295E | −0.295E | −0.295E | −0.296E | −0.285E | −0.162m |

- **Every previously excluded cell is marginal at D = 30 pc**, about half the median tidal radius (53.8 pc).
- Mechanism: once D ≳ r_t, C is nearly uniform across the cluster, and a uniform boost is absorbed into the mass.
- **So the topic's frame was reversed.** GC internal dynamics do not bound D from above. They *require* D ≲ 10 pc to
  say anything.
- The site's "globular-cluster exclusion window, 0.1–300 M☉/pc³ at γ = 0.489" needs a D tag, just as every window now
  carries its γ.

### 2. C2: the Oort window barely notices D (topic Ask 2)
Setup:
- Local baryons: ρ(z) = 0.084·sech²(z/280 pc), so Σ = 47 M☉/pc².
- McKee+2015 2σ window.
- The Sun in a D-ball adds 0.2387 M☉/pc³ at D = 1 pc, 0.0088 at 3 pc and 0.00024 at 10 pc.

| D (pc) | γ = 0.489, Sun off | γ = 0.489, Sun on | γ = 2, Sun on |
|---|---|---|---|
| 0 | 0.003931–0.01719 | same | 0.07518–0.1536 |
| 1 | 0.003931–0.01719 | **0.01497–0.06547 (moves)** | **0.2863–0.5851 (moves)** |
| 3 | 0.003931–0.01719 | 0.004311–0.01885 | 0.08244–0.1685 |
| 30 | 0.003931–0.01719 | 0.003931–0.01719 | 0.07347–0.1536 |
| 300 | 0.003269–0.01397 | 0.003269–0.01397 | 0.06109–0.1278 |

- **The rule fires only at D = 1 pc with the Sun in the ball**, a factor 3.8 at both γ.
- From 3 to 300 pc the window moves < 1.5× (slab dilution: 17% at 300 pc).
- Window edges sit on an 800-point log grid (1% steps). "In/out" of the joint-window lower edge, which *is* the Oort
  lower edge, is grid noise and carries no information.
- **Post-hoc:** the tracer-bubble factor for a 1 M☉ Oort tracer is only 0.97–0.98 at D = 1 pc, because ε_out ≈ 0.9 in
  the solar neighbourhood. **The bubble bites in low-density environments, not at the Sun.**

### 3. C3: the bubble
**Physics.**
- Under L2, matter follows −∇Φ and ∇·[C∇Φ] = 4πGρ. The equation is linear in Φ, so a body's self-field and the
  external field separate.
- The external l = 1 mode in a spherically symmetric ε(r) = C(ρ_bg + ρ_body,D(r)) gives a uniform interior field
  F·g_out.
- Top-hat, point mass: the bubble is exactly the D-ball, ε_in = C(M/V_D + ρ_bg), and F = 3ε_out/(ε_in+2ε_out).
- Pointwise limit (ε_in → 1): **F = 3/(1+2ε₀)·ε₀**. That is 0.58 at the Ω_m floor, 0.23 at ε₀ = 0.089 and 0.79 at
  ε₀ = 0.56.

**Validation.**

| ε_in | ε_out | F numeric | F closed form | F_str | F_L3 |
|---|---|---|---|---|---|
| 1.000 | 0.315 | 0.57977 | 0.57975 | +0.42023 | 1.00000 |
| 1.000 | 0.089 | 0.22668 | 0.22666 | +0.77334 | 1.00001 |
| 0.600 | 0.315 | 0.76830 | 0.76829 | +0.23170 | 1.00000 |

**The L3 statement.**
- The striction force integrates to (1/8πG)∫|∇Φ|²∇C dV (08-26 finding). Only the self × external cross term survives
  the angular integral.
- Closed form for a sharp step: −M·A·(ε_in−ε_out)/(ε_in+2ε_out). Adding the L2 force −M·F·A gives exactly −M·A.
- Numerically, for smooth Plummer bodies with top-hat and Gaussian kernels: F_L3 = 1.0000, 1.0000, 0.9998, 0.9998,
  0.9994, 0.9994 (worst case: the ω Cen-like body at D = 3 pc).
- This is the density-class analogue of Bekenstein & Milgrom 1984 (ApJ 286, 7): "all isolated objects fall in exactly
  the same way". Their proof uses translation invariance of an action. L2 has none; L3 does.

**D_min(T), halo background 10⁻⁵ M☉/pc³.** Smallest D beyond which |1−F_L2| ≤ T, from `compact_tracer_bubble_factor_output.txt`.

| tracer | framework γ=0.489, ρ_c=0.0079: T=0.05 / 0.2 | framework γ=2, ρ_c=0.078: T=0.05 / 0.2 | RG E0 (0.089, 0.47, 0.0083): T=0.05 / 0.2 |
|---|---|---|---|
| star 1 M☉ | 7.4 / 4.06 pc | 5.48 / 3 pc | 13.5 / 9.99 pc |
| star 10 M☉ | 13.5 / 7.4 pc | 9.99 / 5.48 pc | 33.2 / 18.2 pc |
| open cluster 10³ | 60.5 / 33.2 pc | 44.8 / 24.6 pc | 149 / 81.7 pc |
| Pal 5-like 1.5×10⁴ | 149 / 81.7 pc | 110 / 60.5 pc | 367 / 201 pc |
| typical GC 2×10⁵ | 367 / 201 pc | 272 / 149 pc | 903 / 495 pc |
| ω Cen-like 3.5×10⁶ | 903 / 495 pc | 668 / 367 pc | 2.22e+03 / 1.22e+03 pc |

- **Stars need D ≳ 5–35 pc (T = 0.05).** The /honest-assessment scope note says smooth stellar profiles need
  "≳ ~1 pc". Under L2 in low-density environments that is ~10× too small.
- In the solar-neighbourhood background, every tracer passes T = 0.05 at any D (F ≥ 0.97).

### 4. The GC tolerance (post-hoc, semi-binding)
**The only compact-vs-diffuse comparison located with a number attached**, both read from the abstracts:
- Watkins+2019 (arXiv:1804.11348): halo-GC kinematics give M(<21.1 kpc) = 0.21 (+0.04/−0.03)×10¹² M☉.
- Eilers+2019 (arXiv:1810.09466): red-giant v_c = 229.0 km/s at R☉ with slope −1.7 km/s/kpc. At 21.1 kpc (R☉ = 8.12)
  that is 206.9 km/s, and v²r/G = 2.10×10¹¹ M☉.

**Reading.**
- The GC-to-red-giant ratio is **1.00 (+0.19 / −0.14)** from Watkins' error alone. Adding Eilers' 2–5% systematic on v
  gives ≈ −0.17 on the lower side.
- Under L2 at D ≳ 10 pc the red giants are not bubbles (F ≈ 1). Halo GCs are, so the ratio is F_GC.

Typical GC (2×10⁵ M☉, r_h = 3 pc), halo background:

| law | F(10 pc) | σ from 1 | F(100 pc) | F(300 pc) | D_min at 2σ (T=0.34) |
|---|---|---|---|---|---|
| framework γ=0.489, ρ_c=0.0039 | 0.639 | 2.1 | 0.633 | 0.882 | 149 pc |
| framework γ=0.489, ρ_c=0.0079 | 0.639 | 2.1 | 0.663 | 0.931 | 110 pc |
| framework γ=2, ρ_c=0.0735 | 0.630 | 2.2 | 0.660 | 0.964 | 110 pc |
| RG E0 (0.089, 0.47, 0.0083) | 0.343 | 3.9 | 0.292 | 0.617 | 367 pc |
| RG DMS mean (0.56, 0.92, 7.4e-4) | ≈0.806 | ≈1.1 | 0.7968 | — | any D |
| RG DMS joint (0.661, 1.79, 4.3e-3) | ≈0.859 | ≈0.8 | 0.8548 | — | any D |

(The DMS rows are ≈ at 10 pc: the post-hoc script printed F at 1 pc and 100 pc, and F is flat between.)

**What this does not account for.** Anisotropy, the tracer profile, the spherical estimator against a disc potential,
and inner GCs sitting in the dense disc where F → 1. All of these dilute the effect, so the tolerance is *optimistic*
for the law. This is a semi-binding, one-galaxy reading, not a registered test.

**Putting C1 and §4 together, under L2:**

| smoothing length | GC internal leg of the joint window | halo GC orbits vs disc stars |
|---|---|---|
| D ≲ 10 pc | valid (C1) | F ≈ 0.63 (framework, 2.1–2.2σ) / 0.34 (RG E0, 3.9σ) |
| D ≳ 110–150 pc (framework) / ≳ 370 pc (RG E0) | blind: every excluded cell is marginal by 30 pc | within 2σ |

There is no D where both hold for the framework's window edges or RG's E0 set. For RG's own *disc* parameters (DMS)
there is no tension at all (F ≈ 0.8–0.86).

### 5. C4: my D_max prediction was wrong
- **Prediction** (WAKE): smoothing past the scale height z₀ = 0.3 kpc would kill RG's disc mechanism, so D_max ~ z₀.
- **Result:** on the 08-26 L2 solver (toy disc 5×10¹⁰ M☉, R_d = 3 kpc; the source unsmoothed, C at a Gaussian-smoothed
  ρ), **the pre-registered D_max is not reached by 3 kpc for any law.** Neither is the post-hoc shape metric.
- RG E0 row, g_L2/g_bar:

  | D (kpc) | B@3 | B@8 | B@15 | max B | S = B15/B3 |
  |---|---|---|---|---|---|
  | 0 | 2.536 | 4.878 | 9.672 | 12.710 | 3.814 |
  | 1 | 1.407 | 2.683 | 7.974 | 12.487 | 5.669 |
  | 3 | 1.256 | 1.835 | 5.945 | 11.976 | 4.732 |

- **What smoothing actually does.** It suppresses the inner boost and keeps the outer one, so the rise gets *steeper*
  (S goes up). The midplane density at 8 kpc falls from 0.1067 to 0.02552 M☉/pc³ at D = 1 kpc, a factor 4.2. **D is
  partly degenerate with ρ_c**, a new identifiability axis on top of the known γ–A degeneracy.
- The only upper bound left is RG's authors' own condition (D ≪ galaxy size) plus dwarfs with R_d ~ 1 kpc. Stated, not
  executed.

### 6. Sagittarius (post-hoc, illustrative)
- **Tolerance.** Kesden & Kamionkowski 2006 (astro-ph/0606566): a differential force of ≳ 10% between a satellite's
  bound core and its escaped stars would make Sgr's streams visibly asymmetric. The structure matches the bubble.
- **Setup.** A density-keyed law has no dark matter, so the remnant is baryons only. Bracketing guesses, not a fit:
  M ∈ {2×10⁷, 10⁸} M☉, r_h ∈ {0.5, 1.5} kpc.
- **Results.**
  - RG E0 fails |1−F| ≤ 0.1 in every bracket (F = 0.46–0.86).
  - RG DMS mean passes only in the most diffuse bracket.
  - RG DMS joint passes three of four; the framework edges pass two of four.
  - F is flat in D for D < r_h. **Sgr constrains the law, not D.**
- Inconclusive except for the E0 set. That set is RG's *elliptical* calibration, applied to a disc-galaxy satellite
  environment.

### 7. Literature (read from full text by a background literature pass; quotes verified by grep where marked)
- **Matsakos & Diaferio 2016 §2.2.1 (1603.04943):** D is "crucial" and postponed. Matter following −∇Φ is only assumed.
  Momentum conservation and compact bodies are not discussed. The Lagrangian (2.6) is "to be investigated".
- **Cesare+2022 (2102.12499) §2, grep-verified:** "Adopting a permittivity depending on the mass density introduces a
  spatial scale over which we need to average the mass …". It adds only that the scale must be "sufficiently smaller
  than the size of a galaxy" and calls it "an open issue". No later RG paper (reviews 2301.07115, 2404.06538; clusters
  2410.19698) fixes it.
- **Covariant RG (Sanna, Matsakos & Diaferio, 2109.11217), grep-verified Eqs. 26/29:** in the weak field the scalar is
  φ(r) ≃ 2[1 − ∫₀ʳ Gm(<r′)/r′² dr′], with φ = 2ε. *My inference:* the authors' only action makes ε track the
  **potential** through a 1/r Green's function, not the local density. **There is no published action for the
  density-keyed class.** The smoothing-length question has no answer inside any existing theory, because the one
  covariant completion stops being density-keyed.
- **Provenance error in the archive, grep-verified.** (ε₀ = 0.089, Q = 0.47, log₁₀ρ_c = −24.25 g/cm³ = 0.0083 M☉/pc³)
  is the **elliptical (E0) mean of Cesare+2022**. The 2024 review also lists "ϵ0,Mean,DMS = 0.56 ± 0.16,
  QMean,DMS = 0.92 ± 0.71, log10 ρc = −25.30" (= 7.4×10⁻⁴ M☉/pc³). The 08-26 finding and the docstring of
  `l2_vs_l3_and_the_missing_striction_force.py` attribute the E0 triple to "Cesare et al. 2020 … 30 DiskMass galaxies".
  The site's "Refracted Gravity's published knee 0.0083" is the E0 number, applied throughout to disc and local tests.
  My own pre-registered "ε₀ = 0.56" row paired that value with Q = 0.47 and ρ_c = 0.0083, a hybrid no paper
  published. The post-hoc script runs the published sets as published.

### 8. Ask 5: can the MRH be D? A reductio sketch
To kill every bubble, D must exceed k·(3M/4πρ_c)^{1/3} for the most massive compact tracer in play. A single D
therefore sits at hundreds of pc to kpc (ω Cen, and M31's GCs at ~10⁶ M☉). The alternative is a **body-scaled** MRH,
D(M) ∝ M^{1/3}. Then each body contributes M/V_D(M) ≈ ρ_c/k³ to the smoothed field, *whatever its mass*: C would be
counting bodies, not mass. A body-scaled horizon that removes the bubble turns the density law into a
number-density law. That is a different variable, and it is not what any window was computed for. Sketch only, not
executed.

## Implications for the Site
- **Every density window needs its D, and now its dynamics (L2/L3), next to its γ.** The GC exclusion band and the joint
  window are L2, D ≲ 10 pc statements.
- The 09-15 scope note ("smooth stellar profiles in galaxies need ≳ ~1 pc") is too small by ~10× under L2 in galaxy
  outskirts and halos (stars: 5–35 pc at 5%), and it omits clusters (100–900 pc).
- "Refracted Gravity's 0.0083" should say "(RG's elliptical-galaxy calibration, Cesare+2022)". The disc calibration is
  7.4×10⁻⁴ (DMS mean) or 4.3×10⁻³ (DMS joint). Both lie below the GC exclusion band too, so no verdict changes, but the
  attribution does.
- A framework-independent note is forming for the /for-researchers "negative results on density-keyed gravity" pitch
  (visitor P4). A density-dependent permittivity without an action violates universality of free fall for compact
  bodies at O(1) unless D ≫ (M/ρ_c)^{1/3}. The action restores it exactly. RG's covariant completion is not
  density-keyed.

## Action: Maintainer
- **P0, provenance.** Wherever the site says "Refracted Gravity's (published) knee 0.0083" (/honest-assessment,
  /tier-1-existing, /for-researchers, /parameter-derivations), attribute it to the E0 elliptical mean (Cesare+2022,
  arXiv:2102.12499) and give the DMS disc values beside it. Back-annotate the 08-26 finding and the solver docstring,
  which say "Cesare+2020, 30 DiskMass galaxies".
- **P1, /honest-assessment gc-fork scope note (09-15 text).**
  - Replace "(smooth stellar profiles in galaxies need ≳ ~1 pc)" with: under the site's force law (L2), a compact body
    feels 3ε_out/(ε_in+2ε_out) of the field. Stars need D ≳ 5–35 pc and globular clusters ≳ 100–900 pc to fall like
    gas.
  - Add that the cluster window itself holds only for D ≲ 10 pc. At that D, halo clusters would orbit at 0.63 of the
    field acceleration (framework) or 0.34 (RG E0). Milky Way cluster and red-giant masses agree to 1.00 (−0.17):
    2.1σ / 3.9σ, semi-binding and post-hoc.
  - Count stays 6.
- **P1** Tag the GC exclusion band "at γ = 0.489, pointwise to D ≲ 10 pc, L2" wherever it appears.
- **P2** /for-researchers: add the composite-body statement (L2 breaks universality of free fall for compact bodies;
  the action restores it exactly, F_L3 = 1.0000) as a candidate framework-independent note, with the covariant-RG
  observation.
- **→ dp (gated)** Whether density-keyed registrations must declare D (maintainer 09-15). This finding argues they
  must also declare **L2 or L3**, since the bubble exists in one and not the other.

## Open Threads
- **Execute the GC internal test under L3.** The striction force is O(1–100) where ∇C is large (08-26), and GC outskirts
  cross the knee. Under L3 the orbital problem disappears, but the internal leg has never been computed. That is the
  one reading in which the joint window might survive intact.
- **A registered GC-vs-field-star test.** Compare enclosed mass at matched radii from Gaia halo GCs against halo K
  giants or BHBs, split by environment (halo vs disc). L2 at small D predicts ratio F with a known environment
  dependence (F → 1 in the disc). That removes the estimator-systematics caveat, and it is a test of the L2 dynamics
  themselves.
- **Pal 5 tails.** A progenitor-vs-stream differential of 0.73 (framework) or 0.43 (RG E0) at D = 1–10 pc should be
  grossly visible. Nobody has put a fractional bound on it (Thomas+2018 is qualitative, for MOND's EFE).
- **D–ρ_c degeneracy on SPARC.** Does free D rescue any of the 09-08 SPARC χ²? It is unlikely, since the ceiling, not
  the knee, is what SPARC objects to at the Ω_m floor, but unexecuted.
- **The body-counting reductio (§8)** could be made quantitative: what number-density law would a body-scaled MRH give
  for a disc, and does it track g_bar any better than ρ did?
