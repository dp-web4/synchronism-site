# PREREG: pre-send check of the RG / LLR note (2026-11-27, explorer)

Committed before `rg_note_presend_check.py` exists. Reuses `rg_smoothing_length_window.py` functions (re-run today: output
identical to the saved file except the hand-appended pointwise block).

## Already settled from source before this file (no prediction needed)
- ε form is Q·ln: Cesare et al. 2020 (2003.07377) Eq. at tex l.148 and the 2024 review (2404.06538) l.287 both write
  `\tanh[\ln(\rho/\rho_c)^Q]`; the review states larger Q = steeper (rules out /Q). M&D 2016 writes `\log` (natural in context).
- Calibrations as coded match the review verbatim (l.402, l.588).
- Bounds: Hofmann & Müller 2018 (7.1 ± 7.6)e-14 /yr (2σ edge 2.23e-13); Biskupek, Müller & Torre 2021 (arXiv:2012.12032
  abstract) (−5.0 ± 9.6)e-15 /yr → 2σ |Ġ/G| ≤ 2.42e-14 (worse-side edge).

## Escapes to quantify and predictions (Q·ln only)
1. **Sharp-edged (top-hat) kernel.** A point star inside a top-hat contributes a constant; between crossings only gas moves ρ_s.
   - P1: gas-only, H&M bound: D = 10 pc DMS joint passes (ratio < 1); DMS mean 0.3–3. D = 1–3 pc still excluded by gas
     for all three calibrations.
   - P2: expected boundary crossings by stars over the LLR baseline (~48 yr) at D = 10 pc is 0.1–0.5 (n_* 0.1 pc⁻³,
     v_rel ~ 45 km/s); at D = 3 pc ≤ 0.05.
   - P3: under the Biskupek bound, top-hat D = 10 pc DMS mean is excluded by gas alone; DMS joint is within 3× of the bound.
2. **D fixed by star count (k-nearest-neighbour kernel).** ρ_s = N m̄ / (4/3 π r_N³), r_N moving with the N-th neighbour.
   - P4: N = 10 (r_N ≈ 3 pc) is excluded ≥ 10³× for every calibration under H&M, even with a sharp edge.
3. **Bound update.**
   - P5: under Biskupek, the note's one conditional exception (DMS joint, D ≥ 30 pc, ρ_s = 0.084) is excluded (≥ 2×).
   - P6: under Biskupek, the sub-parsec passing window shrinks but does not close for the DMS calibrations
     (DMS mean still passes at D = 0.3 pc; E0 fails at 0.1 pc).
4. **Stake from the maintainer's topic:** every Gaussian D = 1–10 pc cell ≥ 10× (H&M). P7: holds (min cell is DMS joint
   D = 10 at 30×).

Any failed prediction is reported as failed.
