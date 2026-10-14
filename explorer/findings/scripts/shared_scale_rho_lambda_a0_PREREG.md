# PREREG — shared scale between ρ_Λ and a₀′ (explorer 2026-10-14)

Written before any number below is computed. Script: `shared_scale_rho_lambda_a0.py` (not yet written).

## Inventory already done (before the PREREG, by grep only, no values computed)
The archive offers at least five a₀ "derivations": cH₀/2π (S88, S91, S94, S385), cH₀/6 (Milgrom, quoted in S94 and S217),
cH₀Ω_m^φ and cH₀Ω_m^{3/2} (S217), "surface gravity of the Hubble volume" (S385), and cH₀/2 (the site's a₀ box, 09-19). All are
keyed on H₀. None found so far uses the dark-energy knee ρ_crit = ρ_Λ/2 or the function C.

## Grammar (fixed now)
a = cH₀ · k · Ω^p, with
- k ∈ {m^e : m ∈ {1, 2, 3, 4, 6, 8, π, 2π, 4π, 8π, 4π/3, 3/(8π)}, e ∈ {+1, −1, +½, −½}}, deduplicated;
- G_small: no Ω factor (p = 0);
- G_full: Ω ∈ {Ω_m, Ω_Λ, Ω_b}, p ∈ {±¼, ±⅓, ±½, ±⅔, ±1, ±3/2, ±2, φ}, plus p = 0.
c√(Gρ_Λ), c²√Λ and c√(Gρ_c) are all members (√(3/(8π)) × Ω_Λ^½, and so on), as are the archive's own five.
Targets: a₀ ∈ {1.08 (a₀′/γ, identified), 1.20 (McGaugh)} ×10⁻¹⁰ m s⁻²; H₀ ∈ {67.4, 73.0}; Ω_m = 0.315, Ω_b = 0.049, Ω_Λ = 0.685.
"Hit" = within ±10% (the size of the a₀ and H₀ systematics together).

## Predictions
- **P1 (archive).** A full grep of Synchronism/Research for a₀ formulas finds none whose input is the DE-sector knee ρ_crit
  (or ρ_Λ) together with C. Every a₀ formula is H₀-keyed. Refuted by any formula taking ρ_crit,DE or C(x) at γ = ½ as input.
- **P2 (base rate, G_small).** Over k ∈ [0.1, 0.3] (log-uniform; this brackets every archive candidate), the fraction of
  targets with ≥ 1 G_small hit at ±10% is ≥ 0.5. At the identified target (1.08, H₀ 67.4), G_small gives ≥ 2 hits.
- **P3 (base rate, G_full).** The same coverage under G_full is ≥ 0.95, and ≥ 20 distinct G_full formulas hit the identified target.
- **P4 (literal one-knee reading).** Keying galaxies on density with the cosmological knee ρ_crit = ρ_Λ/2 puts the mean
  enclosed baryonic density at the MOND transition radius above the knee by ≥ 10⁴ for every V_flat in 20–300 km/s (deep-MOND
  r_t = V²/a₀). So C ≥ 0.9998 and galaxies are Newtonian at the transition. Refuted if any V in range gives a ratio < 10⁴.
- **P5 (slope).** The DE-sector knee is a constant parameter for every γ (not only γ = ½). So a₀ tied to it gives n = 0 in
  a₀ ∝ E(z)ⁿ, and the archive's own route cH(z)/2π gives n = 1. This is a derivation claim checked against the
  `/dark-energy` equations and Session 385 P1. It is refuted if the DE knee evolves in any archive reading.
  Data verdicts are read from the 10-10 finding, not recomputed (Ciocan bins n = 0.71 ± 0.13; RC100 0.0 ± 0.5).
