# PRE-REGISTRATION — Can the DE sector carry the dark matter too? (baryons-only ρ_m)

*Written 2026-09-22 by the maintainer track, before `de_sector_without_cdm.py` exists. Committed on its own.*

## Why

Two archive statements cannot both hold as written:

- `Research/Session100_Modified_Friedmann.md` Part 2 calibrates the dark-energy sector `H² = 8πGρ_m/(3C(ρ_m))` with
  **C₀ = Ω_m = 0.3**. That Ω_m is the Planck value and includes ≈0.27 of **cold dark matter**.
- `Research/Session241_Cosmological_Constant.md` §4 and Part 7 ("Coherence Explains Both Dark Sectors"; "Missing
  mass: DM particles → Coherence boost"; "No Dark Matter Particles") and `Session277` P277.1 say there are **no dark
  matter particles**.

A visitor researcher persona (2026-09-22) noticed this: the cosmology sector uses the CDM that the galaxy sector says
doesn't exist. A primary-layer grep (Research/, explorations/, manuscripts/) found no document that runs the sector
with ρ_m = ρ_b. So the no-CDM reading of the DE sector is **untested, not refuted**. This run tests it.

## The model (read from Session 100, not re-derived)

`C(x) = tanh(γ·ln(1+x))`, unfloored (Session 100 uses the density-keyed C_ρ with no floor; this is the C_ρ of the
three-C's note, not C_a). Flat, no radiation in H. `ρ_dark ≡ ρ_b(1−C)/C` must now be dark matter **and** dark energy.

- **Variant A (explicit, as Session 100 writes it):** x = ρ_b/ρ_crit = x₀·a⁻³.
- **Variant B (implicit):** x = ρ_tot/ρ_crit with ρ_tot·C(x) = ρ_b. Included because "which density is the argument"
  has been a live fork before.

Calibration: C₀ = Ω_b = 0.0493 (Planck 2018: ω_b = 0.02237, h = 0.6736). In each variant this fixes x₀ given γ, so
the family has **one free parameter, γ**, scanned over 10⁻⁴ … 3 (log grid).

## Observables (standard values, not fitted here)

1. **Recombination dark-to-baryon ratio** R_rec = (1−C)/C at z* = 1090, against ΛCDM's ω_c/ω_b = 0.1200/0.02237 = 5.36.
   (At z* the Λ contribution is ~10⁻⁹ of matter, so ΛCDM's non-baryonic share there is all CDM.)
2. **Acceleration today**: q₀ = ½ − (3/2)·s₀ with s₀ = d ln C/d ln x at a = 1 (Variant A; Variant B computed numerically
   from H(a)). Observed q₀ ≈ −0.53 (ΛCDM at Ω_m = 0.315).
3. **H(z)/H_ΛCDM** over 0 ≤ z ≤ 1090 at the γ that comes closest on 1 and 2 together.

## Predictions (registered before any number is computed)

- **P1.** In both variants, **no γ** gives both |R_rec/5.36 − 1| < 0.10 **and** q₀ < 0. Expected: empty.
- **P2.** Relax to a factor 2 (R_rec ∈ [2.68, 10.7]) and q₀ < 0: still empty in both variants.
- **P3.** Among γ with q₀ < 0, the largest R_rec is below 2 in Variant A. (Hand estimate: q₀ < 0 needs γ ≳ 0.016, which
  gives C_rec ≳ 0.37, so R_rec ≲ 1.7.)
- **P4 (identity control, must pass before anything else is read).** With ρ_m = ρ_b + ρ_c (CDM), γ = ½ and
  C₀ = Ω_m = 0.315, H(z) equals ΛCDM to < 10⁻¹⁰ relative at every sampled z.
- **P5.** At the γ closest on 1 and 2, max |H/H_ΛCDM − 1| over 0 ≤ z ≤ 1090 exceeds 30 %.

## Decision rule

- If P1 holds in both variants: **the algebraic DE sector cannot also be the dark matter.** The "no DM particles"
  statements (S241 §4, S277 P277.1) are then inconsistent with the sector's own calibration: the framework needs CDM in
  cosmology, or a different DE sector. This is a data-free inconsistency on standard numbers, **not a new refutation of
  a registered prediction**, and it does not change the count (6) or Bucket 0 (= 0).
- If some γ passes P1: report it, and name the next test that would bite. That is the fluid sound speed, the Sandvik+2004
  P(k) argument. It is not run here.
- Whatever happens, the scope is **algebraic, homogeneous background only**. No perturbations, no CMB peaks, no fluid
  reading.

## What would make me wrong about the frame

If a primary document already commits the cosmology sector to including CDM (or to ρ_m = ρ_b), this is bookkeeping,
not a gap. The grep I ran covered "baryon-only / baryons only / without dark matter / no dark matter / CDM / Ω_b" in
Research/, explorations/, manuscripts/. It found the S241/S277 no-particles claims and no statement about which ρ_m the
DE sector uses.
