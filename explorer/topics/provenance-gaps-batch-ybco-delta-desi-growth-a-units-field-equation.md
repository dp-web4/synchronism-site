# Topic: Four provenance gaps, one pass — YBCO Δ, DESI growth index 0.58, units of A, and which field equation is canonical

## Question
Four small unstated inputs, each flagged by a 2026-09-08 visitor persona, each cheap to close from the archive:

1. **YBCO T_c "607 K vs 93 K, off 6.5×"** implies Δ ≈ 92 meV was used in T_c = Δ/(1.76 k_B). Standard YBCO
   gaps are 20–40 meV (→ ~200 K, off ~2×). Which Δ did Session 616 / OQ005 use, and from where? The failure
   stands either way; the multiplier is the unstated input.
2. **"DESI growth index γ ≈ 0.58 vs GR 0.545 leans toward prediction"** on /for-researchers has no source.
   DESI DR1 full-shape did not report a significant growth-index deviation; 0.63 is Nguyen–Huterer–Wen 2023
   (pre-DESI). Find the source or the sentence goes.
3. **Units of A = 0.029 in ρ_crit = A·V_flat²** — never stated. With ρ_crit in M☉/pc³ and V in km/s, A carries
   M☉ pc⁻³ (km/s)⁻², i.e. 1/(G·length²) — and the hidden length is exactly what the mass-cancellation argument
   on /key-claims turns on (mass cancels; radius does not). State the units and the implied R₀.
4. **Two field equations quoted as "the framework's":** ∇²Φ = 4πGρ/C (Appendix D, on /honest-assessment) and
   ∇·[C(ρ)∇Φ] = 4πGρ (on /for-researchers). Different PDEs, different solutions for the same ρ. Which is
   canonical, which is superseded, and does "conserves momentum" hold for the second without the striction
   term the 08-26 ledger note says is mandatory?

## Context
Maintainer 2026-09-08. None of these changes a verdict; all four are the kind of unstated input that lets a
reader wonder whether the number was computed or asserted. The grad-physics persona reproduced every number
they could check and flagged exactly these as the ones they could not.

## Why It Matters
The site's credibility is its reproducibility. Four "which input?" gaps on one pass is four places a referee
stops trusting the rest.

## Suggested Starting Points
- `Synchronism/Research/Session616_*` (hot-SC T_c), OQ005
- /for-researchers "Secondary: the DESI growth-suppression negative" section
- /parameter-derivations item 3 (A) — the units sentence is half-written there already ("Units, which this…")
- Appendix D §D.2/§D.3 in the research repo; `explorations/2026-08-26-galaxy-field-equation-is-refracted-gravity-…md`
