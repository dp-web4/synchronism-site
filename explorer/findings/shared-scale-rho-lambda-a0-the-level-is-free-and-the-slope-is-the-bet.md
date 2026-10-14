# Finding: The shared scale between ρ_Λ and a₀ — the level is free; the slope is the only bet, and it is the construction's, not the equation's

## Origin
Topics `shared-scale-between-rho-lambda-and-a0.md` (maintainer 2026-10-14) and `a0-from-rho-lambda-with-a-derived-constant.md`
(2026-10-07; the same question). PREREG `814517a` (P1–P5) was committed before any number below. Script and output:
`findings/scripts/shared_scale_rho_lambda_a0.py`, `..._output.txt`.

## Summary
The framework fixes no relation between its cosmological knee (ρ_crit = ρ_Λ/2) and its galactic scale (a₀′). Every a₀
formula in the archive is keyed on H₀, and none takes the dark-energy knee or C as input (P1 held). The *level* of any
link cannot carry evidence. A 43-member grammar of "natural" prefactors on cH₀ puts ≥ 1 formula within ±10% of 89% of
targets across k ∈ [0.1, 0.3]. With Ω-powers added (1,978 members) the coverage is 100%, and 55 formulas hit the
identified a₀ = 1.08×10⁻¹⁰ (P2, P3 held). The archive's own five "derivations" sit inside that cloud. The literal
one-equation reading (same function, same knee, galaxies keyed on density) puts the MOND-transition density 10⁵·²–10⁷·⁶
above the knee, so galaxies are Newtonian there (C ≥ 0.99999; P4 held). What a shared scale *can* bet on is the a₀(z)
**slope**. A link through the constant DE knee forces n = 0 in a₀ ∝ E(z)ⁿ (P5 held). Other constructions that hit a₀
equally well at z = 0 give n = −1, +1 or +1.74. Ciocan's bins (n = 0.71 ± 0.13) put every route except n = +1 at ≥ 5σ
(that one at 2.2σ). So "one equation" is x/(x+2) used twice, and the one cross-sector bet a shared knee would make
(constant a₀) is already disfavoured, conditional on Ciocan's systematics.

## Research Notes

### 1. What the archive links (P1, held)
The grep over `Synchronism/Research` found these a₀ routes: cH₀/2π (S88, S91, S94, S385), cH₀/6 (Milgrom, quoted in S94
and S217), cH₀Ω_m^φ with φ the golden ratio (S217, S385), cH₀Ω_m^{3/2} (S217), "Hubble surface gravity" GM_H/R_H² (S385).
The last is a uniform sphere of *matter*, k = Ω_m/2. Add the site's a₀ box, cH₀/2: the same sphere at the total critical
density. c²√(Λ/3) appears in S217 and S385 and was rejected as "too large" (5.4×10⁻¹⁰). No route takes ρ_crit,DE or the
function C as an input. S385's "C(a₀) = (1+Ω_m)/2" is an *output* of the floored C_a, not an input to a₀. Three
H₀ values appear across these tellings (67.4, 70, 73), and the "94% agreement" in S385 uses 73. H₀ choice is a further fork.

### 2. The level carries no evidence (P2, P3, held)
| target (a₀, H₀) | k = a₀/cH₀ | G_small hits (43 members) | G_full hits (1,978) |
|---|---|---|---|
| 1.08, 67.4 (identified a₀′/γ) | 0.165 | 2: 1/2π, 1/6 | 55 |
| 1.08, 73.0 | 0.152 | 2: 1/2π, 1/6 | 50 |
| 1.20, 67.4 (McGaugh) | 0.183 | 2: 1/6, (8π)^−½ | 61 |
| 1.20, 73.0 | 0.169 | 2: 1/2π, 1/6 | 57 |

Coverage at ±10% over k ∈ [0.1, 0.3]: G_small 0.888, G_full 1.000. A random target in that window draws ~1.6 G_small hits
in expectation. So the probability of a ≥ 10% "coincidence" by chance is ~0.9, before the Ω-powers that S217 actually used.
±10% is the size of the a₀ (1.08 vs 1.20) plus H₀ (67 vs 73) systematics, so no tighter tolerance is honest today.

**Disclosure.** While planning, before the PREREG, I worked out that the Hubble-sphere gravity of a uniform sphere at
the DE knee is (4π/3)Gρ_crit·c/H₀ = Ω_Λ·cH₀/4 = 1.12×10⁻¹⁰, which is +3.8% from the identified a₀. That is the one
construction that *does* use the framework's DE knee, and it lands as well as cH₀/2π. It is also one of the 55. I did not
register it as a prediction, and this paragraph is the reason it carries no weight.

### 3. The literal one-knee reading is Newtonian in galaxies (P4, held)
Mean enclosed density at the deep-MOND transition, r_t = V²/a₀, against ρ_Λ/2 = 4.3×10⁻⁸ M☉ pc⁻³:
x = 1.6×10⁵ (V = 300 km/s) to 4.4×10⁷ (V = 20). 1/C − 1 ≤ 1.3×10⁻⁵. The ratio is (a₀/cH₀) × (Hubble radius / r_t),
which is why it cannot close. A shared knee requires a *map* between density and acceleration, and every map needs a
length (R_H, the de Sitter radius, r_t). The length is where the freedom enters.

### 4. The slope is the content, and the construction chooses it (P5 held; the table is a post-PREREG derivation)
The DE knee is a constant parameter for every γ. If it evolved, ρ_DE = 2ρ_crit at γ = ½ would no longer be Λ, and the
sector's one success (γ_cosmo ≈ 0.487 ≈ Λ) would be lost. So any link through the knee alone gives n = 0. But the
constructions that match at z = 0 differ in which length evolves:

| construction (all within ~10% at z = 0, except where noted) | n in a₀ ∝ E(z)ⁿ | vs Ciocan bins 0.71 ± 0.13 | vs RC100 0.0 ± 0.5 |
|---|---|---|---|
| c√(Gρ_knee); Milgrom c²√(Λ/3)/2π (−20% level) | 0 | −5.5σ | 0.0σ |
| Hubble-sphere g at the DE knee, (4π/3)Gρ_knee·c/H(z) | −1 | −13.2σ | −2.0σ |
| cH(z)/2π (S88, S385 P1; branch A); site box cH/2 (level +203%) | +1 | +2.2σ | +2.0σ |
| Hubble-sphere g of matter (S385) | +1.74 | +7.9σ | +3.5σ |
| c√(Gρ_m(z)) (level not matched) | +1.37 | +5.1σ | +2.7σ |

Prior art: the two-way split (a₀ ∝ H ⇒ evolving; a₀ ∝ √Λ ⇒ constant) is Milgrom's own (arXiv:0802.1526; review
arXiv:2001.09729). New here is only that the archive's own routes span n = −1 to +1.74 while all claiming the same z = 0
number, and that the framework's one distinctive route (through its DE knee) is the n = 0 or n = −1 member.
Caveats: (a) Ciocan's estimators disagree (bins 0.71, global line 1.15). Against 1.15, n = 0 is worse and n = 1.74 is still far.
(b) Ciocan's 0.2 dex molecular-gas systematic grows with z through the gas fraction, so it can move the slope, not only
the level. The −5.5σ on n = 0 is conditional on that systematic being z-flat. (c) RC100 cannot separate any routes except
the n = 1.74 one.

## Implications for the Site
- The enthusiast's "what live bet could I root for?" now has a definite answer. The equation itself makes no cross-sector bet. A
  shared knee would predict a non-evolving a₀, and the one survey with power disfavours that (conditionally). The H(z)
  route that survives best is Milgrom's, and the equation does not supply it.
- "a₀ ≈ cH₀/2π is a coincidence" can now carry a number: about 9 in 10 targets in the plausible window are matched to ±10%
  by one of 43 simple prefactors. That turns "numerology" from a label into a measurement.
- "One equation" should be stated as "one algebraic identity, x/(x+2), used in two sectors with two independently fitted scales."

## Action: Maintainer
1. **/parameter-derivations a₀ card** (the "13%-off coincidence" sentence): add "a 43-member grammar of simple prefactors
   on cH₀ matches 89% of targets in k ∈ [0.1, 0.3] to ±10%; the archive used five such routes (cH₀/2π, /6, /2, Ω_m^φ,
   Ω_m^{3/2}) and three H₀ values." Link this finding.
2. **/dark-energy or /mond-unification**: one sentence. "The framework fixes no relation between the DE knee (ρ_Λ/2) and
   a₀′. A link through the knee would force a constant a₀ (n = 0), which Ciocan's bins disfavour at ~5σ, conditional on
   a z-flat gas systematic. Different z = 0 matches imply n from −1 to +1.7, so the slope, not the level, is the test."
3. **Landing "what is still live" sentence** (deferred in the 10-14 maintainer log on this topic): the answer is "no
   cross-sector bet is made by the equation; the a₀(z) slope is the one place a shared scale would bet, and it is MOND's
   question (Milgrom 2008), not this framework's."
4. Lint REQUIRE: any page that quotes "Ω_Λ cH₀/4" or "Hubble surface gravity" as a match must carry "1 of 55".

## Open Threads
- An acceleration-keyed cosmology: what acceleration does the homogeneous background have? It is untested, and the wrong type of
  calculation without a supplied length. S385's C(a₀) = (1+Ω_m)/2 hints at a cosmic C_a ≈ 0.66, i.e. G_eff ≈ 1.5G on
  Hubble scales, which would be a modified Friedmann equation with its own constraint.
- The look-elsewhere grammar is reusable. Run it on Σ₀ = a₀/2πG and on the archive's other "agreement to N%" claims.
- Ciocan's z-dependent gas systematic: does a published f_mol(z) prescription move n by more than 0.13?
