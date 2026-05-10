# Topic: ρ_crit — Where Is the Equation's Midpoint?

## Question

At γ=2, C(ρ_crit) ≈ 0.88, not 0.5. The function crosses C=0.5 at ρ/ρ_crit ≈ 0.37.
So ρ_crit is NOT the inflection point, half-saturation point, or "critical density" in
the phase-transition sense. What should it be called, and what does that change about
downstream pages that reference "the critical density threshold"?

## Context

Pass 3 (grad student, 2026-05-09) independently derived C(ρ_crit, γ=2) = 0.8824 using
the Coherence Explorer and asked: "what would make ρ_crit a prediction rather than a
calibration?" This is the third independent visitor to identify the ρ_crit naming problem.

The "+1" regulator in ln(ρ/ρ_crit + 1) is what causes the asymmetry:
- Without "+1": ln(ρ/ρ_crit) = 0 at ρ = ρ_crit, giving C = 0.5 (midpoint)
- With "+1": ln(1 + 1) = ln(2) ≈ 0.693, giving C = tanh(γ · 0.693) ≈ 0.88 at γ=2

So ρ_crit is the saturation knee — the system is already 88% saturated when ρ reaches ρ_crit.
The half-saturation occurs at ρ/ρ_crit ≈ e^(1/γ) - 1. For γ=2: ρ = (e^0.5 - 1)ρ_crit ≈ 0.65 ρ_crit.

Wait — actually let me recompute. C = 0.5 when tanh(γ · ln(ρ/ρ_crit + 1)) = 0.5,
i.e., γ · ln(x + 1) = arctanh(0.5) ≈ 0.549, where x = ρ/ρ_crit.
For γ=2: ln(x+1) = 0.275, so x+1 = e^0.275 ≈ 1.317, x ≈ 0.317.
So C=0.5 occurs at ρ ≈ 0.32 ρ_crit (well below ρ_crit), confirming the naming problem.

## Three Resolution Options (from proposal `rho_crit_asymmetry_saturation_knee.md`)

**Option A — Rename**: Keep the equation unchanged, rename ρ_crit to ρ_knee or ρ_scale.
Pro: minimal code change. Con: requires update across all pages and re-derivation of
all expressions that call it "critical density."

**Option B — Recenter**: Replace ln(ρ/ρ_crit + 1) with ln(ρ/ρ_0) where ρ_0 is defined
as the half-saturation density. Now ρ_0 IS the midpoint by construction. Refit all data.
Pro: honest naming. Con: requires SPARC refit; every downstream prediction shifts.

**Option C — Reframe**: Add a one-paragraph note everywhere ρ_crit appears: "ρ_crit marks
near-saturation (C≈0.88 at γ=2), not the midpoint. The half-saturation point is at
ρ ≈ 0.32 ρ_crit. This is a consequence of the +1 regulator."

## Why It Matters

The Coherence Explorer tool shows ρ/ρ_crit on its x-axis but has no marker for C=0.5.
Visitors naturally assume ρ_crit is the "transition point." Every page that refers to
"the critical density threshold" reinforces this misconception.

Pass 3 suggested: "Add a marker on the curve at C=0.5 and a numerical readout of
(ρ/ρ_crit)|_{C=0.5} so users can directly see that ρ_crit is far past the midpoint."
This is a UI fix that can accompany whatever terminology fix is chosen.

## Suggested Starting Points

- explorer/topics/rho-crit-reformulation-options.md — already seeded 2026-05-08
- Research/proposals/rho_crit_asymmetry_saturation_knee.md — filed 2026-05-08
- The Coherence Explorer (src/app/coherence-explorer/page.tsx) — needs C=0.5 marker
- All pages using "ρ_crit" or "critical density" — audit for naming drift
- SPARC data (sparc_rotmod_v1.csv or similar) — if Option B, refit needed

## Recommended first step

Compute C(ρ_crit) for all values of γ in the slider range (0.01 to 2.0) and plot how
the naming error varies. At γ=0.5, what is C(ρ_crit)? If C(ρ_crit) is close to 0.5
for low γ but far from 0.5 for high γ, the naming problem is γ-dependent, suggesting
the recentering (Option B) is γ-specific.
