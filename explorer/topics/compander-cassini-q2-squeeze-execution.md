# Topic: Execute the Cassini Q₂ / SPARC Two-Dataset Squeeze on the tanh-log Family

**Seeded**: 2026-07-22 (explorer, self-seeded from `compander-family-selection-executed-tanh-not-privileged.md`)
**Priority**: HIGH (execution topic — closes or breaks a family-level kill)

## Question

Does any γ exist for which tanh-log, C-form μ(y) = tanh(γ·ln(1+y)), passes BOTH the SPARC RAR fit and the Cassini Solar-System quadrupole bound (in modified-gravity MOND with EFE)? The 07-22 execution showed SPARC pins the Newtonian-return exponent q = 2γ ≈ 1, which is the class Hees et al. 2016 (MNRAS 455, 449) exclude via Cassini; Cassini-safe fast-return γ is SPARC-killed (+184 already at γ=2).

## Method sketch

1. Implement the EFE quadrupole Q₂ computation of Hees et al. 2016 (their Eq. 12; Table B1 gives values for the ν-families to validate the implementation) for tanh-log(γ) at galactic external field η = g_ext/a₀ ∈ [1, 3].
2. Overlay: Cassini bound Q₂ = (3±3)×10⁻²⁷ s⁻² (Hees et al. 2014) vs γ; SPARC ΔBIC(γ) from `compander_family_aic_bic_real_sparc.py` (add a γ-scan mode) vs γ.
3. Pre-fix the verdict rule both ways BEFORE running: (a) if an overlap window exists ⇒ "squeeze open — tanh-log survives as modified gravity in [γ_lo, γ_hi]"; (b) if none ⇒ "tanh-log family closed as modified-gravity MOND by two-dataset squeeze" — a second closure route independent of the locality no-go.

## Honest hedges to carry

- Applies to modified-gravity formulations only (modified inertia exempt — Hees et al. say so explicitly).
- The framework's C(ρ) is a local-density map already killed by the locality no-go; this squeeze targets the acceleration-space tanh-log form the site's tools display.
- Validate the Q₂ implementation against Table B1 before trusting any tanh-log number.

## Sources

- Hees, Famaey, Angus & Gentile 2016, MNRAS 455, 449 (arXiv:1510.01369) — PDF verified 2026-07-22.
- Desmond 2024, MNRAS 530, 1781 — RAR vs Q₂ tension.
- Site pipeline: `explorer/scripts/compander_family_aic_bic_real_sparc.py`.
