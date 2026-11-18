# PREREG — the LLR bound on density-keyed G with a measured gradient, not an e-fold (2026-11-18)

Committed before `llr_bound_measured_gradient.py` exists and before any Gaia query returns rows.
Topic: `explorer/topics/is-the-llr-density-keyed-g-bound-prior-art.md` (third bullet), plus the scope check (second bullet).

## What the site says now (`/for-researchers#gdot-llr`, read 2026-11-18)
- d ln ρ_s/dt is taken as v⊙/ℓ ("a density e-fold over ℓ = 1–10 pc"), i.e. 2×10⁻⁵ to 2×10⁻⁶ yr⁻¹.
- Bound |d ln G_eff/d ln ρ_s| ≲ 1×10⁻⁸ to 1×10⁻⁷ at 2σ (|Ġ/G| < 2.2×10⁻¹³ yr⁻¹, Hofmann & Müller 2018).
- Assumption (b): "the gradient scale of ρ_s is ~ℓ, which holds when the discrete stellar neighbourhood is inside ρ_s".

## Hand estimate before any code
- With a Gaussian kernel only the heliocentric **radial** velocity of each mass enters:
  dρ_s/dt = Σ mᵢ W(rᵢ) (−rᵢ v_r,ᵢ / ℓ²).
- At ℓ = 10 pc there are ~10³ stars in the kernel, so the stellar rate is a √N-suppressed random sum, not v/ℓ. The 09-23
  script's own Poisson column gives 3×10⁻⁸ yr⁻¹ at ℓ = 10 pc, 70× below the site's 2×10⁻⁶. Its smooth (disc) term is 5×10⁻⁹.
- Gas: the Sun sits inside the Local Interstellar Cloud (LIC), near its edge (published: leaves within ~2000 yr). A planar
  edge of contrast Δρ at distance ≪ ℓ gives dρ_s/dt ≈ Δρ v⊥ /(√(2π) ℓ). With Δρ ≈ 0.009 M⊙/pc³ (n ≈ 0.27 cm⁻³), v⊥ ≈ 20
  km/s: ≈ 5×10⁻⁷ yr⁻¹ at 1 pc, ≈ 9×10⁻⁸ yr⁻¹ at 10 pc (relative to ρ_s). Not in the 09-23 script (its "bubble" reading
  removes all gas below 100 pc).

## Method (fixed now)
1. Gaia DR3 (ESA TAP), parallax > 1000/(3ℓ_max) mas with ℓ_max = 10 pc (so r < 30 pc), parallax_over_error > 10.
   Mass from absolute G (piecewise main-sequence relation stated in the script; white dwarfs, identified by M_G > 10 and
   BP−RP < 1.5, get 0.6 M⊙; objects with M_G > 16 get 0.05 M⊙). Unresolved multiplicity ignored (stated limit).
2. Bright stars missing from Gaia (G < 3 or no parallax) within 30 pc are added by hand from the 09-23 list and SIMBAD-level
   values (name, d, mass, v_r) printed in the script.
3. Stars without a Gaia RV get v_r drawn from N(0, 35 km/s); 1000 draws; report median and 16–84 % of |dln ρ_s/dt|.
4. ℓ ∈ {1, 2, 3, 5, 10} pc. ρ_s = disc smooth density (0.043 stars + gas reading) + the Sun's own kernel weight (constant).
   Relative rate = (dρ_s/dt)/ρ_s.
5. Gas: LIC edge term with Δρ ∈ [0.3, 1]×0.009 M⊙/pc³ and v⊥ ∈ [10, 26] km/s; bracket only (cloud geometry not modelled).
6. Bound: 2.2×10⁻¹³ / max(stellar median, gas lower bracket), per ℓ.

## Predictions (scored after the run)
- **P1** ℓ = 1 pc: stellar rate within 1×10⁻⁵–3×10⁻⁵ yr⁻¹ (α Cen dominates); bound ≈ 1×10⁻⁸. Site's ℓ = 1 pc number stands.
- **P2** ℓ = 3 pc: stellar median within 2×10⁻⁷–2×10⁻⁶ yr⁻¹.
- **P3** ℓ = 10 pc: stellar median within 1×10⁻⁸–1×10⁻⁷ yr⁻¹, i.e. ≥ 20× below the site's v⊙/ℓ = 2×10⁻⁶.
- **P4** Gas edge term exceeds the stellar median at ℓ = 10 pc and does not at ℓ = 1 pc.
- **P5** Measured bound at ℓ = 10 pc lies in 1×10⁻⁶–1×10⁻⁵ (2σ): the site's "1×10⁻⁷" end is too strong by 10–100×, and
  assumption (b) is false for ℓ ≳ 3 pc.
- **P6 (scope, analytic)** Chameleon/symmetron models escape by construction: Earth, Moon and Sun must be screened, and the
  requirement comes from LLR's own equivalence-principle test (Khoury & Weltman 2004). Field-mediated (unscreened, light)
  scalars respond to the Newtonian potential, so their d ln G/d ln ρ_s ~ β²·Φ_s/c² ≲ 10⁻¹⁰ and the bound is vacuous for them.
  The bound bites only on **algebraic** keying, where ρ_s enters against a non-gravitational density scale.
- **P7 (prior art)** The kinematic step (spatial gradient × observer velocity → laboratory drift) is published for α
  (Berengut & Flambaum 2010–12); ambient-density-keyed couplings are published (Olive & Pospelov 2008); no source found
  applies the LLR Ġ/G bound to a G keyed on parsec-smoothed ambient density. ~70 % that this is what the search returns.

## What would change the site
- P3/P5 holding: the ℓ = 10 pc end of the printed bound and assumption (b) are wrong as written.
- P7 failing (someone published it): credit in the register, as for the four earlier identities.
