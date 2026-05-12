# Topic: Dark Matter Suppressor Class — Dead or Recoverable?

## Question

Both of the framework's dark-matter-domain predictions produced sign errors:

1. **Bullet Cluster**: Synchronism predicted structure suppression on the downstream side → data shows enhancement
2. **TEST-04a / DESI DR1 fσ₈**: Synchronism (Session 107) predicted fσ₈(z=0.51) ≈ 0.418, *below* ΛCDM → DESI DR1 measures ≈ 0.55 ± 0.06, *above* ΛCDM

Both failures attack the **suppressor-class mechanism**: the proposal that coherence effects at cosmic/cluster scales suppress gravitational clustering relative to ΛCDM. The question is whether this is:

**Branch 1 (Recoverable):** The C_galactic/C_cosmic ratio in Session 107 is inverted. If C_cosmic > C_galactic (coherence is actually higher at cosmic density), the prediction flips to an enhancer-class — consistent with DESI direction.

**Branch 2 (Dead):** C_galactic > C_cosmic numerically (galactic density gives higher coherence). The suppressor class is structurally correct but empirically ruled out. Framework currently has no dark-matter replacement mechanism.

## The Disambiguation

This requires computing, using the framework's own equations.ts:
```
C_galactic = C(ρ_halo, γ=2)    where ρ_halo ~ 10⁻²⁵ kg/m³
C_cosmic   = C(ρ_cosmic, γ=2)  where ρ_cosmic ~ 10⁻²⁶ kg/m³ (mean)
```

Since C is monotonically increasing in ρ, and ρ_halo > ρ_cosmic by ~10×, C_galactic > C_cosmic by construction. This would mean Branch 2 is correct: the suppressor class is not recoverable by a sign flip. The framework's prediction in Session 107 was C_cosmic suppressing large-scale growth *relative to* C_galactic — but if C_cosmic < C_galactic, coherence at cosmic scales is actually *lower*, which would not enhance clustering.

Wait — this needs more careful reading of Session 107's actual derivation chain. The growth rate modifier may be |dC/dρ|_cosmic vs. |dC/dρ|_galactic (the *slope* of the coherence function matters for growth rate), not just the absolute values. At the inflection of the sigmoid, the slope is steepest; if ρ_cosmic is near the inflection of C, the growth-rate modification is largest.

## Why It Matters

- The site's Honest Assessment says "mechanism-class failure — sign error" but doesn't commit to which diagnosis
- Expert readers cannot engage with a framework that doesn't state its current dark-matter position
- If Branch 2: the honest statement is "framework currently has no dark-matter replacement mechanism"
- If Branch 1 (if Session 107 derivation chain is found to have the ratio inverted): new prediction with correct sign becomes a testable forward claim

## Suggested Starting Points

- `equations.ts` in the site repo: implements C(ρ, γ, ρ_crit)
- `Synchronism/Research/` Session 107 markdown: contains the fσ₈ derivation chain
- `explorer/findings/desi-dr1-vs-session107-fsigma8.md`: the executed comparison
- Research proposal: `suppressor_class_dead_or_recoverable.md` (filed 2026-05-12)

## Deliverable

1. Read Session 107's fσ₈ derivation chain. Identify whether the mechanism is:
   - C_cosmic acting directly on ρ (in which case C_cosmic < C_galactic → suppressor is correct in direction)
   - C_cosmic/C_galactic ratio (in which case the question is whether the ratio is > 1 or < 1)
   - Or some other coupling
2. Compute numerically whether Branch 1 or Branch 2 is correct
3. Write a 1-page summary: "After DESI DR1, Synchronism's dark matter status is: [dead suppressor / recoverable by sign-flip / neither, because the mechanism was different]"
4. Seed a specific forward prediction if Branch 1 is confirmed
