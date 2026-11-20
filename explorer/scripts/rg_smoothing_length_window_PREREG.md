# PREREG — Refracted Gravity's smoothing length D: which D survives the solar system, wide binaries, LLR Ġ/G and K_z(1.1 kpc)?

Committed 2026-11-20 before `rg_smoothing_length_window.py` exists.

## Why the topic's question is re-posed
The topic (`density-keyed-laws-against-kz-of-z-and-pointwise-rg-against-llr.md`, Q2) asks what *pointwise* RG predicts for LLR.
Matsakos & Diaferio 2016 (arXiv:1603.04943, §2.2, "Assumptions for the permittivity", read from source today) disclaim the
pointwise reading in the paper that defines the theory:
> "by introducing the permittivity ε as a function of density ρ, we unavoidably introduce a smoothing length D over which we
> average the density field … we simply speculate that the scale of D is expected to be of astronomical interest, for
> example tens of astronomical units or larger".

The same paper (§5) claims: "since ε = 1 there, local experiments would be in full agreement with standard gravity."
Cesare's 2024 review (arXiv:2404.06538, grepped from source) never mentions a smoothing length.
So "RG as published" is a one-parameter family in D. Pointwise (D → 0) is the reading the authors rule out. The 09-15
Earth–Saturn result and the topic's pointwise-LLR question both test that excluded reading. The citable question is: **for
which D, if any, does RG at its published calibrations pass local tests, and do its published galaxy fits apply at that D?**

## Model
- ε(ρ) = ε0 + (1−ε0)/2 [1 + tanh(S(ρ))], three in-repo readings:
  - Q·ln (the review's Eq. 10 verbatim, primary): S = Q ln(ρ/ρc);
  - Q·log10: S = Q log10(ρ/ρc);
  - /Q: S = log10(ρ/ρc)/Q.
- Calibrations (Cesare 2024 review table, as on file in the 10-xx dSph finding): (ε0, Q, log ρc [g cm⁻³]):
  - DMS mean (0.56, 0.92, −25.30);
  - DMS joint (0.661, 1.79, −24.54);
  - E0 mean (0.089, 0.47, −24.25).
- Kernel: Gaussian W = (2πD²)^−1.5 exp(−r²/2D²) (primary); top-hat ball radius D (secondary, solar system only).
- Spherical flux (exact for spherical ε): g(r) = GM/(ε(r) r²), with ε on the shell at r.

## Tests and pass rules (fixed now)
1. **Solar system.**
   - Planets: the smoothed density at heliocentric r is ρ_s(r) = M☉ W(r) + wind (n = 5 cm⁻³ at 1 AU, ∝ r⁻²).
   - Pass if |ε(r)/ε(1 AU) − 1| ≤ 1e-8 for r in [0.39, 30] AU.
   - Pioneer: pass if |GM☉/r² · (1/ε(r) − 1/ε(1 AU))| ≤ 8.7e-10 m s⁻² for r ∈ [20, 70] AU. The whole Pioneer anomaly is used as
     the bound (it is thermal), which is generous.
   - Output: D_min per calibration × reading × kernel.
2. **Wide binaries.**
   - For a binary with separation s ≫ D (s = 10 kAU), the companion sits in its own ε ≈ 1 bubble inside an ISM medium at ε_s.
   - Predicted boost = 3/(1 + 2ε_s) (dielectric sphere), with bare 1/ε_s as the upper variant.
   - ISM: Local Bubble n_H = 0.005–0.05 cm⁻³ (×1.4 for He), and the LIC at 0.2.
   - Two data readings, both contested: Banik+2024-like (pass if boost ≤ 1.1) and Chae-like (pass if 1.2 ≤ boost ≤ 1.6).
   - For s ≪ D both stars share one bubble, so the binary is Newtonian. The relevant D threshold is ≈ s/3, so D ≳ 0.05 pc puts
     all of s ≤ 30 kAU in the Newtonian regime.
3. **LLR Ġ/G.**
   - |Ġ/G| = |d ln ε/d ln ρ_s| · |d ln ρ_s/dt| at the Sun. ρ_s = Sun term + stars + gas.
   - The rate comes from the 11-18 measured Gaia medians for D ≥ 1 pc. For D < 1 pc it comes from the 11-18 near-star hand list
     (α Cen, Proxima, Barnard, Wolf 359, Lalande, Sirius …) with the Sun term.
   - The gas-edge term uses the 11-18 formula, with the LIC edge at the Sun (worst case) and also 0.1 pc away.
   - Pass if ≤ 2.23e-13 yr⁻¹ (Hofmann & Müller 2018, 2σ edge) using the *low* gas term. Also printed with the high term.
   - For D ≥ 30 pc, the floor rate is 4.5e-9 yr⁻¹ (09-23 smooth disc, upper end 5e-9).
4. **K_z at 1.1 kpc (D ≥ 30 pc only).**
   - Slab: Σ_inferred = Σ_b · ε(ρ_s,⊙)/ε(ρ_b(1.1 kpc)). Lab G absorbs the midplane ε.
   - Pass if within 2σ of Bovy & Rix 68 ± 4, adding the bracket half-width in quadrature.
   - Σ_b and ρ_b(1.1 kpc) are read from McKee+2015 (agent fetch). If unavailable, use a printed bracket.
5. **Galaxy-fit applicability (not a pass/fail on data).**
   - The published fits use smooth density models. That presupposes ≥ ~10 stars per kernel in the solar neighbourhood, so
     D ≳ 2 pc.
   - At D ≲ 1 pc the disc is a Swiss cheese: ε ≈ 1 bubbles around stars in an ISM sea. The published fits then do not compute
     this theory.

## Predictions (written before running)
- **P1.** Top-hat kernel: D_min ≈ 70 AU (Pioneer). Gaussian: D_min falls in 5–30 AU for every calibration and reading.
- **P2.** Wide binaries with D < s/3:
  - E0 predicts boost ≥ 2 at Local Bubble density, so it fails both data readings.
  - Both DMS calibrations predict 1.1–1.4, so they fail the Banik reading and pass the Chae reading.
- **P3.** LLR (Q·ln):
  - E0 is excluded at every D from 0.1 to 300 pc.
  - DMS joint passes at D ≤ 0.5 pc and at D ≥ 30 pc, and is excluded at 1–10 pc.
  - DMS mean passes at D ≤ 0.3 pc, is excluded at 1–10 pc, and is within 3× of the bound at D ≥ 30 pc.
- **P4.** K_z (D ≥ 30 pc): E0 over-predicts by > 5σ, DMS mean under-predicts by > 3σ (it is Newtonian at 1.1 kpc), DMS joint is
  within 2σ.
- **P5.** No published calibration passes {solar system, LLR, K_z} at a D where its galaxy fits apply (D ≳ 2 pc), except DMS
  joint at D ≥ 30 pc. That one is already excluded by the dSph leg (10-xx finding: all 15 dwarfs ≥ 3σ under both DMS
  calibrations).
- **P6.** The window 0.05 pc ≲ D ≲ 0.5 pc passes the solar system, wide binaries and LLR for both DMS calibrations. There the
  published galaxy fits do not apply, so the verdict is "untested", not "survives".

## Identity controls
- ε0 = 1 gives ε ≡ 1: every test returns zero signal.
- Q·ln with Q = 0 gives ε uniform ((1+ε0)/2): zero LLR rate, zero planet D, and Σ_inferred = Σ_b exactly.
