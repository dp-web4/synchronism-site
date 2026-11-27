# Finding: The RG/LLR note's numbers hold. Its question 2 is already answered in the authors' papers. The 2021 LLR bound closes its one exception, and a sharp-edged kernel is the escape the note did not name

## Origin
Topic `verify-the-refracted-gravity-llr-note-before-it-goes-out.md` (maintainer 2026-11-27). The task was a pre-send check
of the project's first outside contact.
- PREREG `378f2f2` was committed before the script existed.
- Script: `scripts/rg_note_presend_check.py`, with its output saved beside it.
- The full check and a send-ready v2 of the note are appended to
  `Synchronism/Research/proposals/draft_note_to_refracted_gravity_authors_llr_bounds_the_smoothing_length_20261127.md`.

## Summary
- **Every number survived.**
  - The source script re-runs identically.
  - Two cells recomputed by hand agree to within 3 %.
  - The ε form (Q·ln) and all nine calibration values match the authors' LaTeX sources verbatim.
  - Hofmann & Müller 2018 is quoted correctly.
- **The text was not ready to send, for three reasons.**
  1. Question 2 asked the authors which of three ε forms is theirs. Their papers already say: Q·ln.
  2. A 9.2× tighter bound exists (Biskupek et al. 2021). Under it, the note's one conditional exception closes: DMS joint at
     D ≥ 30 pc goes to 2.3–5.2×.
  3. Kernel shape is the escape the authors would raise first. With a top-hat kernel, stars inside the kernel contribute a
     constant, and two cells move.
     - At D = 1 pc, DMS joint passes the 2018 bound (0.03–0.9×), because the Sun's own term dominates ρ_s.
     - At D = 10 pc, both DMS calibrations straddle the 2018 bound.
- **The maintainer's stake holds only for smooth kernels.** The stake was "every D = 1–10 pc cell ≥ 10×".
  - Under a Gaussian kernel the smallest cell is 30×, so it holds.
  - The second half of the stake also holds: a kernel that holds a fixed number of stars makes the bound stronger, not
    weaker (4×10³ to 5×10⁷×).

## Research Notes

### Sources read (from source, not recall)
- **arXiv e-print tarballs.**
  - Cesare et al. 2020 (2003.07377): `Manuscript_Cesareetal_R.tex` l.148, `\tanh[\ln(\rho/\rho_c)^Q]`.
  - Cesare 2024 review (2404.06538): l.287, the same form, plus "the larger its value, the steeper the transition". That
    rules out the /Q form, since under /Q a larger Q gives a gentler transition. The calibrations are at l.402 (DMS mean,
    DMS unique) and l.588 (E0).
  - M&D 2016 (1603.04943): l.1009 writes `\log`; the smoothing passage is at l.253–260.
- **Time-averaging.** Grepping all three sources for averaging finds only M&D's spatial D. No RG paper time-averages ρ.
- **LLR bounds.**
  - Hofmann & Müller 2018: (7.1 ± 7.6)×10⁻¹⁴ yr⁻¹, from the catalogue record and quoted by Belgacem et al. (1812.11181).
  - Biskupek, Müller & Torre 2021 (arXiv:2012.12032 abstract, grepped): (−5.0 ± 9.6)×10⁻¹⁵ yr⁻¹. The 2σ worse-side edge is
    2.42×10⁻¹⁴.
  - The 2021 value was first seen secondhand in a 2025 review (2509.05910 l.788) and then confirmed at the primary.

### Results (Q·ln)
- **A. Gaussian kernel.**
  - Identity control: under the 2018 bound the script reprints the note's table exactly.
  - Under the 2021 bound, every D ≥ 0.5 pc is excluded for every calibration. The smallest margin is DMS joint at
    ≥ 30 pc / ρ_s 0.084, at 2.3×. The next is DMS joint at 0.5 pc, at 9.8×.
- **B. Top-hat kernel, gas rate only.**
  - The gas rate is the 11-18 measured rate times a top-hat/Gaussian edge-response factor of 0.5–1.9.
  - ρ_s carries the top-hat Sun term, 0.24/D³.
  - D = 2–5 pc is excluded under both bounds.
  - D = 1 pc: DMS joint is 0.03–0.9× (2018) and 0.3–8.5× (2021).
  - D = 10 pc: DMS mean is 0.08–2.7× and DMS joint 0.04–1.3× (2018); under 2021 they are 0.7–25× and 0.35–12×.
  - The chance of a star crossing the kernel edge during the 48 yr LLR span is 0.1–0.3 % at 1 pc, 1–2 % at 3 pc and
    8–23 % at 10 pc.
  - Each crossing is a step Δ ln G of 10⁻⁷ to 10⁻³, which LLR would see.
- **C. Kernel that holds the N nearest stars (sharp edge).** Here d ln ρ_s/dt = 3|ṙ_N|/r_N. For N = 3–13 the ratio is
  4×10³ to 5×10⁷× under the 2018 bound. The kernel edge rides on a star moving at 26–110 km/s.
- **D. Sub-parsec window (Gaussian, 2021 bound).** D ≲ 0.31 pc (DMS mean), ≲ 0.43 pc (DMS joint), ≲ 0.06 pc (E0). Under
  2018 the edges were 0.34, 0.48 and 0.09 pc.

### Scorecard (PREREG `378f2f2`)
- **P1 failed.** Under a top-hat kernel, D = 1–3 pc was predicted to stay excluded by gas. But DMS joint at D = 1 passes
  (0.03–0.9×), because I did not anticipate the top-hat Sun term dominating ρ_s. The D = 10 parts were partial: DMS joint
  0.04–1.3 straddles "< 1", and DMS mean 0.08–2.7 against the predicted 0.3–3.
- **P2 held, with the low end marginal.** Crossings at 10 pc were 0.086–0.25 against the predicted 0.1–0.5. At 3 pc they
  were ≤ 0.023 against ≤ 0.05.
- **P3 partial.** DMS mean at top-hat 10 pc under 2021 is 0.73–25, not cleanly excluded. DMS joint is 0.35–12, which is not
  "within 3×".
- **P4 held** (≥ 4×10³).
- **P5 held** (2.3–5.2×).
- **P6 held.** DMS mean passes at 0.306 pc, barely. E0 is 14× at 0.1 pc.
- **P7 held** (minimum 30×).
- **Total: 4 held, 1 held marginal, 1 partial, 1 failed.**

## Implications for the Site
- The `/for-researchers` LLR/RG item should name the kernel. "Excluded at D = 0.5–10 pc" holds for a smooth kernel. For a
  sharp-edged kernel the 1 pc and 10 pc ends loosen, while 2–5 pc stays excluded.
- If the site adopts Biskupek 2021 as the LLR bound, the DMS-joint-at-≥ 30 pc exception disappears. Every place that
  prints "except DMS joint at D ≳ 30 pc" would then need the bound named beside it.
- The bound is also used in the density-keyed LLR items (09-24 and 11-18). Those Synchronism-side ratios scale up by 9.2×
  under the 2021 bound. Their verdicts are already exclusions, so the change is only in the margins.

## Action: Maintainer
- **Highest: route v2 of the note to dp in place of the 11-27 draft.** v2 is appended to the draft file under "Pre-send
  check". dp's choice is unchanged: send, edit or decline.
- `/for-researchers` RG/LLR text: add "(smooth kernel; a sharp-edged kernel loosens D ≈ 1 and ≈ 10 pc)". Also give the
  bound edition: name it HM 2018, or switch to Biskupek 2021 and drop the DMS-joint exception.
- Optional: one register line saying LLR Ġ/G now stands at (−5.0 ± 9.6)×10⁻¹⁵ yr⁻¹ (Biskupek 2021). Then grep the site for
  "2.2×10⁻¹³", "2.23e-13" and "7.6×10⁻¹⁴" and decide per item whether to update.

## Open Threads
- **The top-hat gas rate is the weakest number here.** It is the 11-18 LIC-edge model times a geometric factor, not a
  computed flux of the CLIC cloudlets across a 10 pc sphere. A real cloud map (Redfield & Linsky 2008) would settle the
  D ≈ 10 pc top-hat cell. That cell is the only place a DMS calibration could still pass at D ≳ 2 pc.
- **Is a sharp-edged kernel physical?** A discontinuous ε jump each time a star crosses the edge reads like an artefact,
  not a theory. That argument is for the authors to make, not for us to make on their behalf.
- **Strongest bound class.** The memory note says to name the strongest bound class before writing "survives". For RG with
  D ≲ 0.3 pc, which no local test excludes, BBN is not the right class (the smoothing is local). The candidate is the Gaia
  wide-binary step signature named in the source finding (§3).
