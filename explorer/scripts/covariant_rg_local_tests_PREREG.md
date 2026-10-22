# PREREG — Covariant Refracted Gravity (CRG) against LLR, Cassini, and its own weak field

Written 2026-10-22, before running `covariant_rg_local_tests.py`.

## Honest timing note
I read Sanna, Matsakos & Diaferio (arXiv:2109.11217, source v4, A&A 2023) before writing this file. The analytic
identities behind P1 and P4 were derived *while reading*, so for those two this file records the analytic claims; it does
not pre-date them. The numerical checks (P2, P3, P5) and every quantitative threshold are registered here before any
code was run.

## The reading I run
- I take the paper's CRG as published: W(φ) = −1, V(φ) = −Ξφ (their Eqs. 6–7), Jordan frame, matter minimally coupled.
- I use their exact trace-combined scalar equation (Eq. 9), □φ − 2Ξφ = 8πG T. I verified this by hand from their Eqs. 7–8.
- I use their flat, baryon-only FLRW system (Eqs. 47–49).
- I import their parameters and do not re-fit them: Ω₀ = 0.31, Ω_Ξ0 = 0.65, H₀ = 67.7.
- I use LLR from Hofmann & Müller 2018, Ġ/G = (7.1 ± 7.6)×10⁻¹⁴ yr⁻¹.
- I use Cassini, γ−1 = (2.1 ± 2.3)×10⁻⁵.

## Predictions
- **P1 (analytic, LLR).** Today ζ₀ ≡ φ̇/(Hφ) = −3 ± √(3(1+Ω₀−2Ω_Ξ0)) for every admissible (Ω₀, Ω_Ξ0). Their bound is
  0 < Ω_Ξ0 ≤ (1+Ω₀)/2. It follows that |ζ₀| ≥ 1.0 at Ω₀ = 0.31, so |Ġ/G| ≥ 7×10⁻¹¹ yr⁻¹. That is ≥ 900σ from LLR at
  every admissible point, and ~2,700σ at the paper's best fit (ζ₀ = −3).
  - **Refuted if** any admissible point with Ω₀ ∈ [0.25, 0.35] gives |Ġ/G| < 5×10⁻¹³ yr⁻¹.
- **P2 (numerical, weak field).** The static scalar equation ∇²φ − 2Ξφ = −8πGρ, solved for a Milky-Way-mass Hernquist
  sphere (M = 10¹¹ M☉, a = 3 kpc), gives a fractional variation |Δφ/φ| < 10⁻⁵ between r = 0.1 and 100 kpc.
  - So CRG cannot produce RG's ε(ρ) step, which needs Δε/ε = O(1).
  - **Refuted if** |Δφ/φ| > 10⁻² anywhere on 0.1–100 kpc.
- **P3 (numerical, the paper's far-field relation).** Integrating their implicit relation (Eq. 27) for the same source,
  with ρ_bg equal to the cosmic baryon density, gives |Δ ln φ| < 10⁻⁵ over 0.1–100 kpc.
  - The rotation curve from ∇·(φ∇Φ) = 8πGρ then matches Newtonian with a rescaled G to within 10⁻⁵ (v_flat absent).
  - **Refuted if** v(100 kpc)/v_Newton(100 kpc) − 1 > 1 %.
- **P4 (analytic, Cassini).** CRG is ω = −1 Brans–Dicke, and its scalar is lighter than 1/AU by ~14 orders. The scalar
  equation is exactly linear in φ, so there is no chameleon thin shell. Hence γ_PPN = (1+ω)/(2+ω) = 0, and Cassini
  excludes it at ~4×10⁴σ. The paper's Einstein-frame "screening" claim (its Sect. 3.3) does not survive the exact
  Jordan-frame linearity.
  - **Refuted if** a numerical solve with a Sun-like source in a cosmic background shows δφ ∝ M failing by > 1 %
    between M = 10⁻⁶ M☉ and 1 M☉ (that is, any nonlinearity).
- **P5 (numerical, the topic's own question).** The Sun's galactic orbit drives Ġ/G = −φ̇/φ through local φ. Its
  amplitude, from the vertical and epicyclic potential change with δφ ≈ −2δΦ/c², is < 10⁻¹⁴ yr⁻¹. That is below LLR, so
  the 09-24 density-keyed mechanism does not carry over.
  - **Refuted if** > 10⁻¹³ yr⁻¹.

## Not registered (sketch only)
- Ω₀ = 2Ω_b/φ₀ uses the same 2/φ factor as the Cavendish G (ω = −1 gives G_cav = 2G/φ). The "baryon amplification" may
  therefore be a renormalization of G, which would require Ω_b ≈ 0.3 against η-based ≈ 0.05.
- The scalar range ~ H₀⁻¹ makes "locally measured G" partially Yukawa-suppressed on Hubble scales, so this is not clean.
- Flagged as an open thread only.
