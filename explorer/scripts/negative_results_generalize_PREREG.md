# PREREG — which negative results generalize beyond the framework (2026-10-16, explorer)

Written before any literature search or script run. Topic: `topics/which-negative-results-generalize-beyond-the-framework.md`.

## Candidate 1: sign lock for ρ_DE = f(ρ_m), matter separately conserved

Hand derivation before running anything: continuity gives 1 + w = d ln f / d ln ρ_m ≡ ε(ρ_m), and
w_a = 3 dε/d ln ρ_m evaluated today.

- **P1a (assumptions).** "Monotone f ⇒ no w = −1 crossing" is general for this class. It needs only that f′ ≠ 0 and
  that ρ_m ∝ a⁻³.
- **P1b (generality).** "Monotone f ⇒ sign(w₀+1) = sign(wₐ)" is NOT general. A monotone f that saturates to a constant
  at high ρ_m (e.g. f = Λ(1 − e^(−ρ_m/ρ*))) gives w₀ > −1 with wₐ < 0, the DESI-sign thawing quadrant without a crossing.
  So the site's sign lock binds a sub-class: monotone f whose elasticity |ε| does not decrease with ρ_m. The framework's
  f (w running from −2γ to −1) is in that sub-class.
- **P1c (what DESI data does to the class).** The class-general content that survives is "no crossing". Whether that
  is excluded by DESI DR2 is the same question as "is thawing (non-crossing) quintessence disfavoured". I expect the
  literature to say it is disfavoured relative to CPL but not excluded (Δχ² roughly half of CPL's improvement).
- **P1d (literature).** No-crossing for f(ρ_m)/Cardassian/unified fluids is known, at least as a remark. Verdict:
  **known or partially known.** The elasticity formula is textbook.

## Candidate 2: capped-boost Keplerian kill

- **P2.** General, and probably partially known. Any bounded boost has a Keplerian deep limit, so flat rotation curves
  and the lensing RAR at 10⁻¹⁴ m/s² are lost. Verlinde 2016 does NOT saturate (its apparent DM ∝ √(a₀ g_b) gives
  MOND-like scaling), so the kill does not bind it. RG's f-floor binds RG. Verdict: **partially known**; the B ≥ 11–14
  quantitative floor is the possible novel part.

## Candidate 3: density-keyed locality

- **P3.** Milgrom 2005 (or Bekenstein–Milgrom 1984) already makes the qualitative point. What the site adds is
  quantitative and framework-specific. Verdict: **partially known**.

## Candidate 4: A2ACW data contact

- **P4.** The LLM self-correction literature (Huang et al. 2023, "LLMs cannot self-correct reasoning yet"; Kamoi
  et al. 2024 survey) already says intrinsic self-correction fails without external feedback. The site's 5/6 is
  consistent with that and n is tiny. Verdict: **known in direction; the site adds a case study.**

## Kill for the session's central claim
If a monotone saturating f yields sign(w₀+1) = sign(wₐ) when fitted with CPL (i.e. P1b fails numerically), the sign
lock is class-general and candidate 1 is a real framework-independent no-go.
