# Finding: Refracted Gravity as published has a smoothing length D. Where its galaxy fits apply (D ≳ 2 pc), LLR excludes every calibration except DMS joint at D ≳ 30 pc, and dSphs exclude that one. The window that passes local tests is sub-parsec, where the published fits were never computed

## Origin
Topic `density-keyed-laws-against-kz-of-z-and-pointwise-rg-against-llr.md` (maintainer 2026-11-20), Q2. Q1 (the framework's
own laws against K_z(z)) is not done; see Open Threads.
- PREREG `4167dd5` (`explorer/scripts/rg_smoothing_length_window_PREREG.md`) was committed before the script existed.
- Script: `explorer/scripts/rg_smoothing_length_window.py`. Output: `..._output.txt`.
- Sources read from source today:
  - Matsakos & Diaferio 2016 (arXiv:1603.04943, `paper.tex`);
  - Cesare's 2024 review (arXiv:2404.06538, grepped).
- McKee, Parravano & Hollenbach 2015 (arXiv:1509.05334 HTML, Tables 1–3) via a web-fetch agent.

## Summary
- **The topic's question tests a reading RG's authors rule out.**
  - M&D 2016 §2.2: "by introducing the permittivity ε as a function of density ρ, we unavoidably introduce a smoothing
    length D over which we average the density field … we simply speculate that the scale of D is expected to be … tens of
    astronomical units or larger".
  - The 2024 review never mentions D.
  - So "pointwise RG" (D → 0) is not RG as published. The 09-15 Earth–Saturn exclusion and the topic's literal LLR question
    both test that disclaimed reading.
  - For the record, the pointwise answer is still a kill. Over the ordinary solar-wind range (n = 3–10 cm⁻³), ε at the Moon
    moves by 7×10⁻⁶ (DMS joint) to 6×10⁻² (E0). The magnetotail lobes sit below every ρ_c. LLR is sensitive to ~10⁻¹¹, so
    the margin is ≳ 10⁵.
- **RG as published is a one-parameter family in D.** The right question is which D survives. Local tests bound D from
  both sides (Q·ln, the review's Eq. 10 verbatim; the other two readings are in the output):

| D | Solar system | Wide binaries (s ≤ 30 kAU) | LLR Ġ/G | Published galaxy fits apply? |
|---|---|---|---|---|
| ≲ 10 AU (Gaussian) / 70 AU (top-hat) | **fail** (planets D ≈ 0.3–0.9; Pioneer Δg ~ 10⁻⁵ m s⁻²) | — | — | no |
| 10 AU – 0.025 pc | pass | boost 3/(1+2ε_ISM) at s > s_onset (1.5–34 kAU): DMS 1.05–1.38, E0 1.7–2.5 | pass (Sun-dominated ρ_s) | no |
| 0.027 – 0.3/0.5 pc | pass | Newtonian (binary inside one kernel) | DMS pass to 0.34 / 0.47 pc; E0 excluded beyond 0.05–0.09 pc | no (Swiss cheese) |
| 0.5 – 10 pc | pass | Newtonian | **excluded, all 9 calibration × reading cells**, 30× to 10⁷× | yes from ≈ 2 pc |
| ≥ 30 pc | pass | Newtonian | E0 10³×, DMS mean 1.2–9×, **DMS joint 0.25–6×** (depends on ρ_s,⊙) | yes |

- **K_z at 1.1 kpc (D ≥ 30 pc).** McKee's Σ_b,1.1 = 43.8 ± 3.4 against Bovy & Rix's 68 ± 4:
  - E0 over-predicts (+3.3 to +5.0σ);
  - DMS mean is Newtonian at 1.1 kpc (−3.5 to −4.3σ);
  - **DMS joint matches (−0.4 to −1.4σ).** At ρ_b(1.1 kpc) ≈ 0.002 its ε ≈ 0.7 supplies the local "dark" column with no
    dark matter.
- **The citable sentence.** At D ≳ 2 pc, where RG's published fits apply, LLR excludes all three published calibrations
  under all three readings. The one exception is DMS joint (Q·ln) at D ≳ 30 pc, which passes LLR only if the smoothed solar
  density is ≳ 0.06 M☉ pc⁻³ and passes K_z. That calibration fails the dSph leg already on file (all 15 dwarfs ≥ 3σ, both
  readings).
- **What survives is sub-parsec.**
  - The window that passes the solar system, wide binaries and LLR is D ≈ 0.03–0.3 pc for the DMS calibrations under the
    Banik reading of wide binaries. Under the Chae reading it is D ≈ 10 AU–0.025 pc.
  - In this window ε follows the ISM phase structure. Stars sit in ε ≈ 1 bubbles inside an ISM sea. So the smooth-density
    galaxy fits do not compute this theory. The verdict there is **untested**, not "survives".
- **M&D's own local-experiment sentence is refuted at their calibrations.** They wrote "since ε = 1 there, local
  experiments would be in full agreement with standard gravity". But the tanh never reaches 1, and LLR reads the slope
  d ln ε/d ln ρ, not the level.

## Research Notes

### 1. Where D enters and why the algebraic LLR reading *is* RG at D ≳ 1 pc
For D ≳ 1 pc, every kernel centred inside the solar system has the same content to (r/D)² ≲ 10⁻⁷. So ε is uniform across
the solar system. With ε uniform, ∇·(ε∇Φ) = 4πGρ gives Φ = Φ_N/ε exactly, and G_eff = G/ε(ρ_s).
- The amplitude cancels against laboratory G. The rate Ġ/G = −(d ln ε/d ln ρ_s)(d ln ρ_s/dt) does not.
- The site's "pc-smoothed algebraic G·f(ρ_s) at RG's knee values; RG as published is not tested" is therefore too
  conservative. At D = 1–10 pc the algebraic reading *is* RG as published, with M&D's own D left free.
- Rates come from 11-18:
  - D ≥ 1 pc: the measured Gaia DR3 medians, with the Sun's kernel term included;
  - D < 1 pc: the 11-18 near-star hand list plus the LIC-edge gas term (edge at the Sun, the worst case; at 0.1 pc the
    gas term drops 7× at D = 0.05);
  - D ≥ 30 pc: the 09-23 smooth-disc rate, 2–4.5×10⁻⁹ yr⁻¹.
- The bound is |Ġ/G| ≤ 2.23×10⁻¹³ yr⁻¹ (Hofmann & Müller 2018 at 2σ, via Belgacem et al.).

LLR ratio to the bound under Q·ln (≥ 1 = excluded):

| D (pc) | 0.1 | 0.3 | 0.5 | 1 | 3 | 10 | ≥ 30 (ρ_s 0.043 / 0.084) |
|---|---|---|---|---|---|---|---|
| DMS mean | 5×10⁻⁶ | 0.07 | 130 | 7.8×10³ | 2.3×10³ | 62 | 4–9 / 1.2–2.7 |
| DMS joint | 4×10⁻⁹ | 4×10⁻⁵ | 1.1 | 940 | 1.0×10³ | 30 | 2.8–6.2 / 0.25–0.57 |
| E0 mean | 1.5 | 950 | 5×10⁵ | 7×10⁶ | 10⁶ | 2.5×10⁴ | 1.3–3×10³ / 0.8–1.7×10³ |

The Q·log10 and /Q readings are excluded across 0.5–300 pc for every calibration, by 40× to 10⁷×.

### 2. Solar system (lower edge of D)
ρ_s(r) = M☉W(r) + wind. The rules were planets |ε(r)/ε(1 AU) − 1| ≤ 10⁻⁸ and Pioneer Δg ≤ 8.7×10⁻¹⁰ m s⁻² (the whole
anomaly, which is thermal).
- **Top-hat kernel:** D_min = 70 AU in every cell. That is Pioneer's distance, and M&D's "tens of AU or larger".
- **Gaussian kernel:** 9–10 AU in 7 of 9 cells. The two gentle readings need more: DMS joint /Q 750 AU, E0 Q·log10
  2×10⁴ AU. The Gaussian tail turns into a gradient across 30 AU, and those readings have a shallow slope that never
  flattens.

### 3. Wide binaries: a different signature from MOND
For a binary with s ≫ D, each star sits in its own ε ≈ 1 bubble inside the ISM medium. The companion's bubble is a
dielectric sphere in the primary's field, so the boost is 3/(1+2ε_s). The bare 1/ε_s is the upper variant.
- At Local Bubble densities (n_H 0.005–0.05), the boost is 1.05–1.38 (DMS mean), 1.16–1.29 (DMS joint) and 1.7–2.5 (E0).
- **The signature differs from MOND in two ways.** The onset is set by s ≈ s_onset(D), the separation where the primary's
  kernel density falls to the ISM: 1.5 kAU at D = 0.001 pc, 12.5 kAU at 0.01 pc. And RG is linear, so there is no EFE.
  The amplitude tracks the ISM density, not g_N/a₀.
- E0 fails both readings of the contested DR3 data.
- The DMS calibrations with D ≈ 10 AU–5,000 AU are the only RG cell that predicts a Chae-sized boost while passing the solar
  system and LLR. They predict a step in s, not a ramp in g_N. That is a DR4 discriminator.
- **Caveat.** The l = 1 refraction of the Galactic field around each star's bubble (the dSph finding's
  "(Δε/ε)(g_ext/g_int)") was not modelled. At s ~ 10 kAU, g_ext/g_int ~ 2.

### 4. K_z at 1.1 kpc (D ≥ 30 pc)
- **Inputs read, not recalled.**
  - McKee Table 3: Σ_b,1.1 = 43.8 ± 3.4. My first run used the 47.1 *total*. That was corrected to the |z| < 1.1 kpc value
    the PREREG names, and both runs are reported.
  - Eq. 46: midplane baryons 0.084 (stars 0.043 + gas 0.041).
  - McKee does not state ρ_b at 1.1 kpc. I built it from their Table 2 gas profiles: WNM2 0.077 e^(−z/403) + HII
    0.0154 e^(−z/1590), giving n_H 0.0127 cm⁻³, i.e. 4.5×10⁻⁴ M☉ pc⁻³. Stars add 0.043 × (thin + 10 % thick), which is
    1.4–2.4×10⁻³ depending on sech² vs exp and h₂ 0.9–1 kpc. Halo stars add ~1.5×10⁻⁴.
  - The bracket is 0.0014–0.003.
- **Slab.** K_z = 2πG Σ_b(<z)/ε(z). Lab G absorbs ε(midplane), so Σ_inferred = Σ_b ε_mid/ε(z).
- **Results.**
  - DMS joint: Q·ln −0.4 to −1.4σ; Q·log10 −1.1 to −2.1σ; /Q −2.7 to −3.1σ.
  - DMS mean: −2.8 to −4.3σ, every reading.
  - E0: Q·ln +3.3 to +5.0σ; /Q +7 to +8.6σ; Q·log10 +0.2 to +1.4σ (but LLR excludes it at 10³×).
- The first run, with the total column and a recalled bracket, gave the same ordering.
- The slab omits the radial term, which is small at the solar circle for a flat rotation curve.

### 5. Why the sub-parsec window is "untested", not "survives"
At D ≲ 0.5 pc a kernel holds ≪ 1 field star (n_* ≈ 0.1 pc⁻³). ε is then ≈ 1 in bubbles of radius ~3–5 D around stars and
ε(ISM phase) elsewhere.
- At D = 0.1 pc the bubbles fill ~4 % of the midplane volume.
- The disc's effective permittivity is set by the volume-filling warm and hot ISM, not by ⟨ρ⟩. ε is nonlinear in ρ, and ρ is
  clumpy on scales > D, so ε(⟨ρ⟩) ≠ ⟨ε(ρ)⟩.
- Every published RG fit (DMS discs, E0 ellipticals, clusters) evaluates ε on a smooth model density. That presupposes
  ≳ 10 stars per kernel, i.e. D ≳ 2 pc in the solar neighbourhood and more in outer discs.
- In the sub-parsec window RG is a theory of ISM phase structure that nobody has fitted.

### Scorecard (PREREG `4167dd5`)
- **P1 (D_min).** Top-hat 70 AU held. "Gaussian 5–30 AU for every cell" **failed**: 2 of 9 cells are at 750 AU and
  2×10⁴ AU.
- **P2 (wide binaries).** The verdicts held: E0 fails both readings; DMS fails Banik and passes Chae. The number "E0 ≥ 2" was
  wrong for Q·log10 (1.66–2.01) and at n = 0.05 (1.98).
- **P3 (LLR).** **Failed.**
  - DMS joint is excluded at D = 0.5 (1.1×) and at D ≥ 30 with ρ_s = 0.043 (2.8–6.2×).
  - DMS mean at ≥ 30 pc is 4–9×, not "within 3×".
  - "E0 excluded 0.1–300" and "DMS excluded 1–10" held.
- **P4 (K_z).** Partial. DMS joint within 2σ (Q·ln) and DMS mean low > 3σ held. "E0 > 5σ" held only for /Q.
- **P5.** Held: no calibration passes at D ≳ 2 pc except DMS joint at ≥ 30 pc, conditional on ρ_s.
- **P6.** Held for Q·ln and Q·log10. The window is 0.027–0.34 pc (DMS mean) and 0.027–0.47 pc (DMS joint). /Q DMS joint
  narrows to 0.027–0.047 pc.
- **Total: 3 held (P2 verdicts, P5, P6), 1 partial (P4), 2 failed (P1, P3).**

## Implications for the Site
- The LLR item's current scope line ("RG as published is not tested") understates the result. RG as published leaves D
  free (M&D 2016 §2.2). At the D its own fits presuppose (≳ 2 pc), the algebraic pc-smoothed reading *is* RG, and LLR
  excludes all three calibrations except DMS joint at D ≳ 30 pc.
- "Pointwise" should not be attributed to RG anywhere. Its authors disclaim it.
- The 09-15 Earth–Saturn result should be scoped "D → 0 reading, disclaimed by M&D".
- A new item for `#other-theories`: RG's D is bounded on both sides, and its galaxy fits sit outside the surviving window.

## Action: Maintainer
- `/for-researchers` LLR item, which currently reads "a pc-smoothed algebraic G·f(ρ_s) at RG's knee values; RG as published is not tested". Replace with:
  > RG as published averages ρ over a smoothing length D it leaves free (Matsakos & Diaferio 2016 §2.2). For D ≳ 1 pc, ε is
  > uniform across the solar system and G_eff = G/ε(ρ_s) exactly, so this is RG itself. At D = 1–10 pc, LLR excludes all
  > three published calibrations under all three readings of Eq. 4.1 (30× to 10⁷×). At D ≳ 30 pc only DMS joint survives
  > LLR, and only if the smoothed solar density is ≳ 0.06 M☉ pc⁻³; it fails the dSph leg. Below ~0.5 pc the local tests
  > pass, but RG's galaxy fits were never computed there.
- Wherever "pointwise, non-covariant reading" is attributed to RG, replace it with "D → 0 reading, which Matsakos & Diaferio
  disclaim".
- Lines found today:
  - `src/app/for-researchers/page.tsx:365` reads "RG as published, with ε pointwise inside the divergence, is not tested by
    it".
  - `src/app/for-researchers/page.tsx:1112–1113` reads "Refracted Gravity as published is not tested by this item: its ε(ρ)
    is read pointwise …".
  - `src/app/test-catalog/page.tsx:475` says "including both of RG's …". It is consistent with the result, but its count
    should say three calibrations, not two.
  - These two pages attribute to RG a reading its authors disclaim.
- Optional: a wide-binary line saying RG with D ≈ 10–5,000 AU predicts an EFE-free step boost of 1.2–1.4 at s > s_onset. It
  is the only RG cell that passes the solar system and LLR while matching Chae's amplitude. DMS calibrations only.

## Open Threads
- **Topic Q1 is not done.** It asks for the framework's density-keyed laws against K_z(z) at 0.3–1.5 kpc. The McKee-derived
  inputs above (Σ_b,1.1 = 43.8, ρ_b0 = 0.084, gas profiles of Table 2, ρ_b(1.1 kpc) ≈ 0.0014–0.003) are what that run
  needs. The maintainer's slab used Bovy–Rix 68 ± 4 against a recalled gas column, and the topic stays queued for Q1.
- The l = 1 refraction of the Galactic field around stellar bubbles, for wide binaries in the Chae window.
- **DMS joint at D ≥ 30 pc** passes LLR and K_z, and its dSph failure is the only kill. Does the dSph verdict depend on D?
  It shouldn't at D ≥ 30 pc (smooth regime), but dSph central densities (~0.1 M☉ pc⁻³) and sizes (~300 pc) make D = 30–300
  pc a real smoothing of the dwarf itself. Re-running the 10-xx dSph script with a D-smoothed profile is a small job.
- Is "Swiss-cheese RG" (D ≲ 0.5 pc) even a coherent galactic theory? A one-page effective-medium estimate (Maxwell-Garnett
  with ISM phase filling factors) would say whether a disc's ε_eff lands anywhere near the published fits.
