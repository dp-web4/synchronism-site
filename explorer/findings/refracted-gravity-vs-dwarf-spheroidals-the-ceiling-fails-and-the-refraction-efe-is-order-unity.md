# Finding: Refracted Gravity vs dwarf spheroidals. The 1/ε₀ ceiling fails, and the refraction EFE is order unity and odd

## Origin
Topic `refraction-efe-amplitude-for-satellites-and-who-it-tests.md` (maintainer 2026-10-21). WAKE redirected the topic.
The amplitude question matters only if RG's *self*-gravity survives dwarfs, and nobody had checked that. So I ran the
ceiling first, then the amplitude.

- PREREG `71c6253` (`scripts/rg_spherical_ceiling_dsph_PREREG.md`).
- Scripts:
  - `scripts/rg_spherical_ceiling_dsph.py` (+`_output.txt`);
  - `scripts/rg_dsph_eps0_max_and_refraction_efe.py` (+`_output.txt`).
- RG parameters come from Cesare's 2024 review (arXiv 2404.06538), whose table I fetched this session:
  - DMS mean (0.56, 0.92, −25.30);
  - DMS joint (0.661 ± 0.007, 1.79, −24.54);
  - E0 mean (0.089 +0.038/−0.035, 0.47, −24.25);
  - clusters fixed a priori, ε₀ = 0.045 / 0.065.
- The permittivity is run under both in-repo readings: tanh(Q ln x), which is the review's Eq. 10 verbatim, and
  tanh(log₁₀x / Q).

## Summary
RG is a linear Poisson equation with ε(ρ) ∈ [ε₀, 1]. In spherical symmetry, Gauss's law gives g = g_N/ε(r) *exactly*.
So no spherical system can be boosted by more than 1/ε₀. Where ε is uniform, φ = φ_N/ε₀ exactly, whatever the shape. RG's
review explains why dwarfs are dark by saying flatter systems get more focusing, but focusing needs ε gradients that a
fully sub-knee dwarf does not have.

**The fit.** Mass follows light, isotropic Jeans, the observed global σ, and Υ_V from 1 to 3:
- **Disc calibrations.** Under both DMS calibrations, all 15 dwarfs (10 classical, 5 UFD) sit above the RG prediction
  by ≥ 3σ under every Υ_V and both readings, and by ≥ 4σ for every dwarf except Segue 1. Leo I alone is off by 9–15σ.
- **Elliptical calibration (E0).** 13–15 of 15 fail at > 2σ in the default cases. At the most generous corner (/Q reading,
  Υ_V = 3, ε₀ at −1σ = 0.054), 10 of 15 still fail.
- **Required ε₀.** Under the verbatim reading at Υ_V = 3, the largest universal ε₀ each classical dSph tolerates runs
  from 0.002 (Ursa Minor) to 0.20 (Fornax). Six of ten need ε₀ < 0.035.

**The amplitude.** The topic's question has a sharper answer than either "zero" or "∝ ∇ln C":
- The refraction EFE is an l = 1 (lopsided) response. Its amplitude relative to self-gravity is
  ≈ (Δε/ε across the dwarf) × (g_ext/g_int).
- The second factor runs from about 10³ (Crater II) to about 3×10³ (Antlia II, UMa II), and is 10²–10³ in the UFDs.
  So even a 7% ε gradient is order unity.
- Under E0, the refraction stress at R_h exceeds the dwarf's own gravity in 10 of 15 systems; under DMS mean, in 8.
- Being odd in g_ext, it cannot change σ at first order. What it does is lopside the dwarf toward or away from the host,
  and where it exceeds self-gravity, it breaks equilibrium.

Net verdict:
- **The disc-calibrated RG is excluded by dwarfs that are in equilibrium under RG itself.** For Leo I, Fornax, Sculptor
  and Leo II, the refraction ratio is ≤ 0.03.
- **The elliptical-calibrated RG faces a fork.** The clean equilibrium subset gives 2–4σ tension. The rest of the dwarfs
  are, by RG's own field equation, not in equilibrium. That makes the theory make a distinct, unrun prediction: a
  **dipolar (m = 1) asymmetry of low-density satellites aligned with the host direction.** Newtonian tides are quadrupolar
  (even) and do not do this.

## Research Notes

### 1. The ceiling is exact, not approximate
∇·(ε∇φ) = 4πGρ in spherical symmetry gives ε(r) φ′(r) = GM(<r)/r². With ε ≥ ε₀, g ≤ g_N/ε₀ at every radius. Ambient
gas only *raises* ε, so ignoring it is generous to RG. The MW hot halo is ~10⁻⁶–10⁻⁵ M☉/pc³ (recall-level), below every
knee. The ceiling is 1.8 (DMS mean), 1.5 (DMS joint), 11.2 (E0), and 22 (cluster A1991).

Below the knee, flattening buys nothing. In the ε-profile table (output §3), Crater II, Antlia II, UMa II and Sextans have
ε at the centre within 1–7% of ε₀ under E0. For them, φ ≈ φ_N/ε₀ whatever their ellipticity. The review's line about
"the different DM quantity of GCs and dwarf galaxies, … flatter" cannot apply to these systems.

### 2. Jeans results (verbatim reading, Υ_V = 1.5; pull = (obs − pred)/err)

| system | obs σ | Newton | DMS mean | E0 mean | E0 ε₀ −1σ |
|---|---|---|---|---|---|
| Fornax | 11.7 ± 0.9 | 4.22 | 4.75 (+7.7) | 9.57 (+2.4) | 11.01 (+0.8) |
| Leo I | 9.2 ± 0.4 | 3.73 | 3.92 (+13.2) | 6.40 (+7.0) | 7.07 (+5.3) |
| Sculptor | 9.2 ± 1.1 | 2.27 | 2.48 (+6.1) | 4.70 (+4.1) | 5.34 (+3.5) |
| Draco | 9.1 ± 1.2 | 0.91 | 1.07 (+6.7) | 2.28 (+5.7) | 2.67 (+5.4) |
| Crater II | 2.7 ± 0.3 | 0.31 | 0.41 (+7.6) | 1.03 (+5.6) | 1.31 (+4.6) |
| Antlia II | 5.7 ± 1.1 | 0.28 | 0.38 (+4.8) | 0.95 (+4.3) | 1.22 (+4.1) |
| Segue 1* | 3.7 ± 1.2 | 0.09 | 0.10 (+3.0) | 0.23 (+2.9) | 0.28 (+2.9) |

The full 15 systems × 2 readings × 3 Υ_V grid is in the output.
- Classical structural data come from McConnachie 2012, the same as `gamma_ladder_precheck_dsph_open_clusters.py`;
  Crater II from Caldwell+2017 and Antlia II from Torrealba+2019.
- **The UFD rows (\*) are recall-level** (no locator this session) and are used for order of magnitude only. UFD σ may also
  be inflated by binaries.
- The cluster A1991 calibration (Q = 2, ρ_c = 10⁻²⁴) *over*-predicts Fornax and Leo I by 4–14σ under the verbatim reading,
  and under-predicts Sextans and the UFDs. No single cluster-style parameter set threads the dwarfs either.

### 3. Max universal ε₀ (2σ, Υ_V = 3, E0's Q and ρ_c)

| | Fornax | Leo I | Sculptor | Leo II | Sextans | Carina | UMi | Draco | Crater II | Antlia II |
|---|---|---|---|---|---|---|---|---|---|---|
| Qln | 0.1955 | 0.0762 | 0.0440 | 0.0291 | 0.0177 | 0.0339 | 0.0020 | 0.0033 | 0.0411 | 0.0129 |
| /Q | 0.2483 | 0.1221 | 0.0865 | 0.0665 | 0.0277 | 0.0692 | 0.0128 | 0.0163 | 0.0431 | 0.0132 |

Every classical value is below the DMS joint 0.661 ± 0.007. RG's own review already reports a 14.8σ disc-vs-elliptical ε₀
tension. The dSphs extend the ladder further down: discs at ~0.6, ellipticals 0.089, clusters 0.045–0.065, dSphs ≲ 0.02–0.2.
**ε₀ tracks the system class.** The theory says it should be universal.

### 4. The refraction EFE, computed

**Method.** The external part satisfies ∇·(ε∇φ) = 0 with φ → −g_e z at infinity. With φ = −g_e u(r) cos θ, the radial
equation is (ε r² u′)′ = 2εu. A uniform medium gives u = r, so the interior field is uniform and does nothing internal. The
non-uniform part is |u′ − u/r|, in units of g_e.

**Solver checks** (`scripts/refraction_solver_check.py`):
- uniform ε gives D = 7×10⁻¹²;
- a step dielectric sphere (1 inside, 0.1 outside) gives an interior slope of 0.254, against the analytic 3ε_out/(ε_in + 2ε_out) = 0.250.

**Inputs.** g_e = (200 km/s)²/D_GC (recall-level flat MW). Results are at R_h, Υ_V = 1.5:

| system | g_e/g_N(R_h) | RG E0 ratio | RG DMS ratio | framework floored | framework UNfloored |
|---|---|---|---|---|---|
| Leo I | 0.8 | 0.025 | 0.0003 | 0.048 | 0.0003 |
| Fornax | 3.0 | 0.17 | 0.032 | 0.19 | 0.003 |
| Sculptor | 7.1 | 0.38 | 0.026 | 0.50 | 0.012 |
| Draco | 38.9 | 2.0 | 1.3 | 1.7 | 0.07 |
| Sextans | 224 | 2.1 | 4.7 | 0.76 | 0.15 |
| Crater II | 1064 | 1.3 | 0.44 | 0.38 | 0.19 |
| Antlia II | 3020 | 0.47 | 0.038 | 0.12 | 0.13 |
| Segue 1* | 1886 | 80 | 131 | 53 | 9.4 |

(ratio = D·g_e / g_int(R_h), where g_int already includes the 1/ε boost.)

- **The topic's premise was half right.** The maintainer argued that small C does not mean small ∇ln C. That is true, but the
  controlling factor is g_ext/g_int, not ∇ln C. The *unfloored* framework, where ∇ln C = ∇ln ρ is largest, gives the
  *smallest* ratios, because its tiny C makes g_int enormous.
- **Compared with ordinary tides,** whose differential across R_h is ~2 R_h/D_GC × g_e (0.003–0.018), the refraction term D
  is 6–90× larger for Draco, Sextans and the UFDs. It is comparable for Crater II and Antlia II.
- **It is l = 1, so odd.** It shifts and lopsides; it does not stretch. A Newtonian tidal field is l = 2, which elongates
  symmetrically.

### 5. PREREG scoring (71c6253)
- **P1 HELD.** All 15 fail DMS at every Υ_V and in both readings.
- **P2 HELD.** E0 at Υ_V = 1.5 fails 10/10 classical dSphs. At Υ_V = 3 (Qln), 9/10 fail at > 2σ.
- **P3 HELD under Qln (5/5 UFDs need ε₀ < 1/112), 4/5 under /Q.** Boötes I gives ε₀ ≤ 0.0148, a ceiling of 68, which is
  6× and not 10× above 11.2.
- **P4 REFUTED.** I predicted the refraction EFE was "identically zero below the knee". It is zero only for *exactly*
  uniform ε. A 1–7% gradient times g_ext/g_int ~ 10³ is order unity.
- **P5 HELD.** The review lists "modelling the dynamics of some dSph galaxies" as future work. No RG dSph test was found
  (two searches plus the review text).

### 6. Escapes, stated
- **Non-equilibrium.** Under E0 the refraction stress exceeds self-gravity in most low-density dwarfs, so the Jeans pulls
  there are not a clean test. This is RG's best escape, and it is a prediction, not a dodge:
  - such dwarfs should be lopsided along the host direction;
  - the old "tidal remnant mimics high M/L" route (Kroupa 1997) would need to work through an l = 1 force.
- **Non-universal ε₀.** RG's review raises an "environmental effect" for the disc-vs-E0 tension. The calculation here gives
  that idea a concrete form: the environment enters only through refraction (l = 1, odd) and ambient density (which raises
  ε, giving *less* boost). Neither raises the self-gravity boost of a satellite. **An environment cannot lower a satellite's
  effective ε₀** in a linear ε(ρ) theory.
- **The covariant completion (CRG, 2109.11217)** was not checked for dwarfs. Its weak-field reduction was grep-verified in the
  `compact-bodies-sit-in-their-own-permittivity-bubble…` finding (Eqs. 26/29).

## Implications for the Site
- /test-catalog#unregistered-distinct and /mond-unification say the refraction EFE is the "one genuinely distinct
  external-field prediction". Two things change:
  1. **For RG (a live external theory) it is computable, order unity, and has a signature:** m = 1 lopsidedness aligned
     with the host direction. It is not "untested and probably negligible".
  2. **RG with its disc calibration is excluded by dwarf spheroidals that RG itself keeps in equilibrium.** Its elliptical
     calibration is in 2–4σ tension on that subset. This holds whatever happens to Synchronism. It is the site's machinery
     producing a result about someone else's published theory: a citable negative candidate.
- The site often writes "RG is live (GC window)". That needs scoping: **live at GC densities, not at dSph densities.**

## Action: Maintainer
- /mond-unification refraction box and /test-catalog#unregistered-distinct, replace "untested; may be negligible":
  > "For Refracted Gravity the refraction response is order unity for low-density satellites (Δε/ε × g_ext/g_int; explorer
  > 2026-10-21) and dipolar (m = 1, aligned with the host), unlike Newtonian tides (quadrupolar). Separately, RG's spherical
  > ceiling 1/ε₀ (exact by Gauss's law) is below the boost every classical dSph needs under RG's disc calibration (≥ 4σ,
  > including Leo I at 9–15σ, which RG keeps in equilibrium)."
- Wherever the site says RG "survives" or is "live", add the qualifier "(at GC densities; disc-calibrated RG fails dSphs;
  elliptical-calibrated RG 2–4σ on equilibrium dwarfs)".
- Candidate entry for the citable-negative-results index (topic `citable-negative-results-index-page.md`).
- Contacting the RG authors gates on the project lead (topic guard 6). This is the kind of result that would be worth sending.

## Open Threads
- **The m = 1 test.** Do MW satellites show dipolar light asymmetries aligned with the Galactic-centre direction, above
  what Newtonian tides and orbital-phase effects give? Draco, UMi, Sextans and the UFDs are the candidates. Run it on
  published 2D isophote or Gaia-member maps, after a PREREG.
- **Non-spherical below-knee check.** Solve the axisymmetric problem for UMi (e = 0.56) with E0 parameters, to bound
  focusing when the core is above the knee.
- **The M31 dwarfs (McGaugh & Milgrom 2013) under RG.** Same-σ pairs at different g_ext test the l = 1 claim differently,
  because RG has no first-order σ shift.
- **Verify the UFD rows** against Simon 2019's table (recall now). Verify g_e with a real MW potential.
- **CRG in the dwarf regime.**
