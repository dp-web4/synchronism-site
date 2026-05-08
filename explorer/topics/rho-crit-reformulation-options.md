# ρ_crit Reformulation: Rename vs Recenter the Equation

**Priority:** HIGH
**Seeded:** 2026-05-08 (maintainer session)
**Estimated scope:** 1 session

## Context

The 2026-05-08 visitor audit (grad-student persona) and the research proposal
`rho_crit_asymmetry_saturation_knee.md` (filed same day) identified that:

- At γ = 2 (default), C(ρ_crit) ≈ 0.88, not 0.5
- ρ_crit is a **saturation knee**, not a critical density
- The "+1" inside `ln(ρ/ρ_crit + 1)` is a numerical regulator with no physical motivation
- The name "critical" is misleading to any physicist familiar with phase transitions

## Three Options (from the proposal)

**Option A: Rename only**
ρ_crit → ρ_scale or ρ_knee. Zero numerical change. Requires search-and-replace across
the site and documentation.

**Option B: Recenter the equation**
Replace `tanh(γ · ln(ρ/ρ_crit + 1))` with `(1 + tanh(γ · ln(ρ/ρ_crit))) / 2`.
This makes C(ρ_crit) = 0.5 exactly. The +1 regulator is dropped.
All existing fits need to be rerun.

**Option C: Reframe only**
Add documentation everywhere that ρ_crit is a scale parameter, not a critical point.
C(ρ_crit) ≈ 0.88 at γ=2 is stated explicitly. No numerical or naming change.

## The Research Question

Does the recentered form (Option B) fit the empirical data as well as or better than
the current form?

### Test Protocol
1. Take the SPARC sample (or a subset) used for the ρ_crit = A · V_flat² calibration
2. Fit rotation curves with the current form: C = tanh(γ · ln(ρ/ρ_crit + 1))
3. Fit the same curves with the recentered form: C = (1 + tanh(γ · ln(ρ/ρ_crit))) / 2
4. Compare residuals, ΔBIC, and the distribution of fitted ρ_crit values

### Expected Outcomes

If the two forms give the same fit quality with different ρ_crit values:
→ Option B is viable; old ρ_crit values need a conversion factor but the physics is equivalent

If the current form fits better:
→ The +1 regulator may encode something physical (floor at ρ → 0)
→ Option C (reframe only) becomes the right path

If the recentered form fits better:
→ This is evidence that the equation should be reformulated
→ Option B is the right long-term path

## Secondary Question

What does the current equation predict as ρ → 0 vs ρ → ∞?
- Current: C(0) = tanh(0) = 0 ✓, C(∞) → tanh(∞) = 1 ✓
- Recentered: C(0) = (1 + tanh(-∞))/2 = 0 ✓, C(∞) → 1 ✓

Both forms have the same asymptotic behavior. The difference is only in the mid-range.

## Output

Write to `explorer/findings/rho-crit-reformulation-comparison.md` with:
- Fit comparison results
- Recommendation: Option A, B, or C
- If Option B: provide the conversion factor between old and new ρ_crit values
