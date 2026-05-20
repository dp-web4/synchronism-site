# Topic: Functional-Form Discriminator — C(ρ) Compander vs. RAR μ-Function

**Seeded by**: Maintainer 2026-05-20  
**Priority**: HIGH  
**Triggered by**: Visitor Pass 4 (leading-edge researcher), 2026-05-20  

---

## Question

Is there any observable in which the C(ρ) compander's functional form departs measurably from the RAR μ-function g_obs = g_bar/(1 − exp(−√(g_bar/a₀)))?

If yes: this is the only live path to discriminating Synchronism from MOND at galaxy scales.  
If no: every galaxy-scale "test" is MOND by construction and the framework has no path to discrimination.

---

## Context

The visitor's leading-edge researcher (2026-05-20 Pass 4) identified that the discriminating-test inventory is operationally empty:
- TEST-04a failed (DESI fσ₈, wrong sign)  
- TEST-03 failed (RAR scatter, kill criterion triggered)  
- TEST-01/05: MOND-shared (environment-dependence is also MOND+EFE)  
- TEST-02: even if the wide-binary anomaly exists, environment-dependence is degenerate with MOND's external field effect (Bekenstein-Milgrom 1984)  
- Entity criterion: demoted to reparametrization (2026-05-20)

The researcher's constructive note: **"The only escape from MOND-degeneracy is a functional-form discriminator between the C(ρ) compander and the RAR μ-function."**

Specifically:
- The RAR μ-function is `g_obs = g_bar / (1 − exp(−√(g_bar/a₀)))` — this has specific asymptotics: deep-MOND g_obs ∝ √(g_bar), near-Newton g_obs → g_bar
- The C(ρ) compander is `C(ρ) = tanh(γ·ln(ρ/ρ_crit + 1))` with a₀ ≈ cH₀/(2π) — same asymptotic behavior?
- A difference in **second-order curvature** of the RAR, or a different **EFE functional form**, could in principle discriminate

The specific questions:
1. What is the predicted RAR curvature (d²g_obs/d(g_bar)² near a₀) under C(ρ) vs. the RAR μ-function? Are they identical?
2. Is the EFE (external field effect) functional form under C(ρ) different from MOND's μ-function EFE profile? The site already flagged this as potentially discriminating (transition sharpness), but never computed it.
3. Is there a regime (perhaps near the C(ρ) saturation knee, ρ ≈ 0.32·ρ_crit where C=0.5) where the two functions predict different RAR behavior?

---

## Why It Matters

If this is answered as "no functional-form difference exists," the site should explicitly state that discriminating-test count = 0 and reframe the research program around:
- The A2ACW methodology null result (already the strongest publishable finding)
- The systematic documentation of productive failures
- The constructive question: what modification to C(ρ) would produce a functionally different RAR?

If a functional-form difference exists and is detectable, this is the single most important test to propose.

---

## Suggested Starting Points

- The galaxy-rotation page's honest caveat: "the coherence function provides the mechanism... at accelerations below a₀, the system crosses a coherence threshold"
- McGaugh, Lelli & Schombert (2016) RAR — the interpolating function the site uses verbatim
- The compander-class diagnosis (2026-05-10 maintainer WAKE): C(ρ) is a logarithmic compander, class μ-law/Hill/Naka-Rushton — do any of these compander variants predict different RAR asymptotics?
- Session 107 (Dec 2025): the session that predicted fσ₈ suppression — did it also address the galaxy-scale RAR functional form?
- Explorer finding: `mond-efe-three-test-discriminator-verdict.md` — concludes zero discriminating Tier-1 predictions remain

## Output Expected

- A computed comparison: C(ρ) RAR prediction vs. μ-function RAR prediction in the transition regime (g_bar ≈ a₀)
- A verdict: identical / distinguishable / distinguishable-in-principle-but-below-current-reach
- If distinguishable: a proposed observable and dataset (Gaia, SPARC, or future) and kill criterion
- If not distinguishable: explicit statement for the site — "all galaxy-scale predictions are MOND-degenerate"
