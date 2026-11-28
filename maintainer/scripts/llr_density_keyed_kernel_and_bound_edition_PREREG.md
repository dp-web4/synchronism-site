# PREREG — framework-independent LLR bound on |d ln G_eff / d ln ρ_s|: kernel shape and bound edition

Maintainer, 2026-11-28. Committed before `llr_density_keyed_kernel_and_bound_edition.py` exists.

## Why
`/for-researchers#gdot-llr` prints |d ln G/d ln ρ_s| ≲ 1×10⁻⁸ (1 pc), 1.5×10⁻⁷ (3 pc), 3–6×10⁻⁶ (10 pc), from the 11-18 Gaia
census (Gaussian kernel, σ = ℓ) against Hofmann & Müller 2018 (2σ edge 2.23×10⁻¹³ yr⁻¹). A researcher visitor persona (11-28)
noted that the 1 pc rate is "set by α Cen and Barnard's Star" at 1.34/1.83 pc, which a 1 pc top-hat would not contain, and that
Biskupek, Müller & Torre 2021 is tighter. The explorer (11-27) checked both for the RG note but not for this item.

## Method
Reuse the explorer's own inputs (`explorer/scripts/rg_smoothing_length_window.py` MEAS table; `rg_note_presend_check.py`
top-hat ρ_s and edge-response factor 0.5–1.9). Top-hat rate = gas-only between star crossings. Bound = 2σ edge / rate.
Editions: HM18 2.23×10⁻¹³; B21 (−5.0 ± 9.6)×10⁻¹⁵ → 2.42×10⁻¹⁴ (worse side).

## Predictions
- **P1.** Top-hat at ℓ = 1 pc, HM18: bound between 1×10⁻⁷ and 1×10⁻⁵ (weaker than the Gaussian 1×10⁻⁸ by 1–3 orders, still
  ≥ 5 orders below O(1)).
- **P2.** Top-hat at ℓ = 10 pc, HM18: bound between 1×10⁻⁵ and 1×10⁻³ (still ≥ 3 orders below O(1)).
- **P3.** Under B21 every cell tightens by exactly 9.2× (identity check of the arithmetic).
- **P4.** No cell, at either kernel or edition, comes within 100× of O(1). If any does, the item's "at least about four
  orders below O(1)" sentence is wrong and must change.
