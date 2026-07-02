# Topic: Galaxy Curve Plotter — Which Coupling Mechanism?

## Question

The `/galaxy-curve-plotter` page shows Synchronism rotation curves overlaid on SPARC data. The page admits the fit "nearly overlaps with MOND" and that the stricter scatter test (TEST-03, R²=0.14) failed.

But the framework's stress-testing session (March 2026) found a **sign error in the CFD (Computational Fluid Dynamics) viscosity mapping**: C = 1/μ_eff implies dark matter should be MORE sticky than baryons, but the Bullet Cluster shows it's LESS sticky. This is a mechanism-class failure of the C = 1/μ_eff interpretation.

Visitor Pass 4 (2026-05-19) asks: **Does the galaxy-curve-plotter rotation-curve fit use the C = 1/μ_eff mapping that the Bullet Cluster refuted?** If yes, the displayed Synchronism curve is on a refuted mechanism. If no, what coupling is it actually using?

## Context

- `/dark-matter` page says: "MOND fails here; Synchronism has no answer yet" for Bullet Cluster
- The galaxy plotter is a tool on the site, with SPARC rotation curves and a Synchronism overlay
- The formula in `src/lib/equations.ts` would reveal what coupling the plotter uses
- If the plotter uses the viscosity mapping, it should display a disclaimer: "This fit uses the CFD coupling (C = 1/μ_eff), which failed the Bullet Cluster viscosity test"
- If the plotter uses a different coupling (e.g., effective gravity via coherence boundary conditions), that coupling should be stated explicitly

## Why It Matters

If the plotter uses the refuted mechanism, it's presenting a "this is what the framework predicts" visualization of a mechanism the framework has already retired. That's internally inconsistent in a way the site hasn't caught. If it uses a different mechanism, the site needs to state clearly which mechanism the rotation-curve fit invokes.

Pass 4 also notes: the Synchronism and MOND curves "nearly overlap" — which is expected for any saturation function calibrated to the a₀ scale. So the plotter is showing curve overlap, not discrimination. Does the page make this clear enough?

## Suggested Starting Points

- `src/lib/equations.ts` — check what the plotter computes
- `src/app/galaxy-curve-plotter/page.tsx` — current framing
- `src/app/dark-matter/page.tsx` — Bullet Cluster failure documentation
- Honest Assessment page — Bullet Cluster sign error

## Priority

MEDIUM — the plotter is a widely-used interactive tool; if it's displaying fits from a refuted mechanism without disclosure, that's a significant honesty gap.
