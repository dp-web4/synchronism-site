# PREREG — Does LLR (and the planets) close density-keyed L3? (explorer 2026-10-19)

Topic: `explorer/topics/does-llr-close-density-keyed-l3.md`. Written and committed before the script exists and before
any LLR perigee / EP number is fetched.

## Reading (tagged: γ, ℓ, L3)
Kernel-smoothed L3. Action density `−C(ρ_s)|∇Φ|²/8πG − ρΦ`, with `ρ_s = K_ℓ ∗ ρ` (Gaussian, width ℓ, baryons only).
- Vary Φ: `∇·[C(ρ_s)∇Φ] = 4πGρ` — **identical to L2**.
- Vary ρ: `δρ_s(x)/δρ(y) = K(x−y)`, so the force per unit mass is `g = −∇Φ − ∇Ψ_s` with
  **`Ψ_s = K_ℓ ∗ [C′(ρ_s)|∇Φ|²] / 8πG`**. The kernel lands on Ψ. The topic's sketch (C′ times the *local* |∇Φ|² at
  Earth) is not what the action gives.

## First-order drift (written before computing)
1. **Ġ/G.** The field equation is the same, so for ℓ ≫ 30 AU, Φ = Φ_N/C(t) and Ġ/G = −Ċ/C exactly as in 09-23
   (PREREG `80b8c9c`). Striction is an additional force; it cannot change G_eff. Its time-variation enters the
   Earth–Moon orbit as δa/g_moon ~ k d³/GM_E ~ 4×10⁻¹² static, ×(dlnρ_s/dt ~ 10⁻⁵/yr) → ~10⁻¹⁷/yr. No cancellation.
2. **The dominant striction term is the Sun's self-energy.** |∇Φ|² is concentrated inside ~R☉, so
   `Ψ_s(x) ≈ C′(ρ_s,☉) E☉ K(x − x☉)/C²`, with E☉ = |U☉| ≈ 1.5 GM☉²/R☉ (n = 3 polytrope), E☉/M☉ ≈ 2.86×10¹¹ m²/s².
   With C′ = sC/ρ_s (s ≡ dlnC/dlnρ), the planet-minus-Sun acceleration is repulsive and harmonic for r ≪ ℓ:
   **`a = +k r`, `k = s f☉ (E☉/M☉) / (C ℓ²)`**, f☉ = M☉K(0)/ρ_s. It is a positive-Λ-like term, universal per unit mass.
   - ℓ = 1 pc: f☉ ≈ 0.43, k ≈ 1.3×10⁻²² s/C s⁻². Saturn ω̇ = 1.5k√(1−e²)/n ≈ 1.9×10⁴ (s/C) mas/cy. That excludes
     s/C ≳ 10⁻⁴; Ġ excludes s ≳ 10⁻⁷. So at pc smoothing striction is the weaker root.
   - ℓ = 10 pc: f☉ ≈ 8×10⁻⁴, k ∝ ℓ⁻⁵ → Saturn ≈ 0.3 (s/C) mas/cy. Never binds.
   - Small ℓ (Sun-saturated, f☉ → 1): k ∝ s/ℓ², s ∝ x^{−2γ} ∝ ℓ^{6γ} → k ∝ ℓ^{6γ−2}. For γ = 0.489 this is roughly
     flat in ℓ, ~10⁻¹⁴·s at 30 AU. With s ~ 10⁻¹² there, it is marginal. **This is the one place L2 and L3 can
     differ observably: the 09-23 small-ℓ survival hole.**
3. **Earth-centred striction on the Moon:** f_E/f☉ ~ 3×10⁻⁶ and (E/M)_E/(E/M)☉ ~ 10⁻⁴, so it is ~10⁻⁹ of the Sun
   term. **Nordtvedt-type (compactness-dependent) piece:** the body's own self-energy −E_b/C(ρ_s(x_b)) gives
   Δa_EM/(k r) ~ [(E/M)_E − (E/M)_M]/(E/M)☉ ~ 1.4×10⁻⁴.
4. **Neighbour white dwarfs** (E/M ~ 10¹³) add a tidal striction at the Sun: Sirius B at ℓ = 1–3 pc gives ~10–50× the
   Sun's own term. Reported as a cross-check, not counted (orientation-dependent, could partially cancel).

## Criteria
- Ġ: the 09-23 rule unchanged (|Ġ/G| < 10⁻¹² /yr, smooth term = 0 when the brackets straddle zero, named stars for
  ℓ ≤ 2 pc, Poisson rms beyond).
- Striction: Sun-only term. Exact Gaussian radial force, Gauss-equation secular precession (10-15 `precession()`).
  Excluded if any EPM2011 planet (Pitjeva & Pitjev 2013 Table 4, values as in the 10-15 script) is off by > 3σ.
- Laws: the 09-23 set of 74 (grid 64, TEST-02 windows 8, RG 2). ℓ grid: 30, 100, 300, 1000 AU; 0.01, 0.03, 0.1,
  0.3, 1, 2, 3, 5, 10 pc.
- L3 verdict at ℓ = Ġ ∪ striction (L3 can only add constraints to L2 here, because the field equation is shared).

## Predictions
- **P1.** Under L3 the ℓ = 1 pc exclusion is still 68/74, and the survivors are the same 6.
- **P2.** At ℓ = 1 pc the striction alone excludes ≥ 40/74, and every one of them is also Ġ-excluded. At ℓ = 10 pc the
  striction alone excludes 0/74.
- **P3.** In the small-ℓ hole (30 AU ≤ ℓ ≤ 0.3 pc), striction closes the hole for every γ = 0.489 grid law (no ℓ on the
  grid passes both), and not for every γ = 2 law (≥ 1 γ = 2 law keeps a passing ℓ < 1 pc).
- **P4.** Wherever the Sun term passes the planets, the Earth-centred term and the Nordtvedt-type piece are ≥ 10³ below
  the LLR sensitivity to an anomalous Earth–Moon acceleration (to be fetched after this commit).
- **P5.** Sirius B's tidal striction at the Sun exceeds the Sun's own k by > 3× at ℓ = 1 and 3 pc.

## Outcome that would change the site sentence
If P1 holds, the third door ("density-keyed L3 with in-disc knees") is closed at ℓ ∈ [1, 10] pc by the same Ġ bound,
with no L3 dependence. If P3 holds, L3 also removes the small-ℓ hole that L2 leaves for unsaturated laws.
