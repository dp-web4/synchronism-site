# Topic: Does tanh(γ·log(ρ/ρ_crit + 1)) Arise From a Landau Saddle-Point?

## Question

Is there a free-energy / Landau / variational derivation that produces `C(ρ) = tanh(γ·log(ρ/ρ_crit + 1))` as a saddle-point — or is this function just two saturating operations stacked to satisfy four generic constraints?

## Context

The 2026-04-28 visitor log (Pass 3, grad student) identified this as HIGH severity:

> "The four-constraint motivation (bounded [0,1], monotonic, smooth saturation, well-behaved at ρ→0,∞) is satisfied by *every* sigmoid I can name: logistic, erf, arctan, even ρ/(ρ+ρ_crit) (Michaelis–Menten). Tanh is a *choice* from a one-parameter family. The +1 inside the log is a regularization, not derived. The combination of log-then-tanh has no special privilege; it's two saturating functions stacked."

The site's current answer on `/coherence-function`: "tanh arises naturally in mean-field Ising models (m = tanh(βJzm))." But m appears on both sides of the Ising self-consistency and not in C(ρ). The analogy is structural, not mathematical.

The `/parameter-derivations` page badges tanh form as "Motivated Choice | Speculative" — correct. But a reader who's read the Landau-theory parenthetical on `/core-idea` will expect a derivation that doesn't exist.

## Why It Matters

- If tanh arises from a Landau φ⁴ free-energy saddle-point (m = tanh(βJzm) is the correct form for the saddle of F[m] = -Jzm²/2 + T·artanh(m)), then C(ρ) has a legitimate mean-field derivation under specific assumptions about the "effective J" for the coherence field
- If not, the site should stop citing Ising and instead say: "tanh is one of several equivalent sigmoidal choices; we use it for its analytic convenience and Landau-theory family membership, but it is not uniquely derived"
- This is also relevant to whether the site can eventually claim Landau critical exponents (β, ν, η near γ_c ≈ 1) — those require a specific free energy, not just a generic sigmoid

## The Specific Derivation to Attempt

The Landau free energy for a scalar order parameter m:
F[m] = a·m² + b·m⁴ + ... (with a < 0 at transition)

Saddle point: ∂F/∂m = 0 → m = tanh(βJzm) for Ising with z neighbors.

Question: Is there a choice of "effective coupling" J(ρ) that maps ρ → β·J·z = γ·log(ρ/ρ_crit + 1), and if so, what is the physical interpretation of J(ρ)?

If yes: C(ρ) has a saddle-point derivation and Landau exponents are computable.
If no: C(ρ) is a generic sigmoid constrained to look like the mean-field order parameter, which is exactly what `/parameter-derivations` now says — and the site should say so clearly on `/core-idea` and `/coherence-function`.

## Suggested Starting Points

- `/coherence-function` and `/parameter-derivations` (current site state)
- Synchronism archive: Sessions #64-66 (original tanh motivation)
- Standard reference: Chaikin & Lubensky *Principles of Condensed Matter Physics*, Ch. 4 (Landau theory)
- The 2026-04-12 explorer finding (`explorer/findings/`) on C(ρ) failing in mean-field (BKT not Landau on trees) is directly relevant
