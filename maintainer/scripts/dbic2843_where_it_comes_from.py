#!/usr/bin/env python3
"""Where does the +2843 (density-keyed C_rho vs acceleration-keyed C_g, SPARC) come from?

Asked by a graduate-physics persona (visitor log 2026-11-19): with one global h, rho = Sigma/2h is a surface-density key,
and in a thin disc g_bar ~ 2 pi G Sigma locally, so a Sigma-keyed compander should track the acceleration-keyed one in the
inner disc. Is the loss in the outskirts / gas-dominated dwarfs? Post-hoc decomposition, not pre-registered. Prediction
written before running (maintainer 2026-11-19): more than half of the +2843 comes from the outer half of each curve
(radial rank > 0.5) and from g_bar < 1e-11 m/s^2.

Same data, cut and fits as dbic2843_galaxy_level.py (imported). Per-point contribution = -2lnL(C_rho) - (-2lnL(C_g)),
which sums to the +2843. Radial position = rank of the point within its galaxy by g_bar descending (rotmod radius order is
not carried by the loader; g_bar falls outward in all but the innermost points of discs, so this is a proxy).
Also reports the sample cut: the loader keeps galaxies with a SPARC Table 1 V_flat > 0.
"""
import os
import sys
import numpy as np

HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)
import dbic2843_galaxy_level as D  # noqa: E402

rB, rA = D.full_fits()
mB, mA = D.model_logs(rB.x, rA.x, D.GB, D.RHO)
cA = D.per_point_m2lnL(mA, D.GL, D.EL, rA.x[2])
cB = D.per_point_m2lnL(mB, D.GL, D.EL, rB.x[2])
d = cA - cB
print(f"rows {D.N}, galaxies {D.NGAL}; total Delta(-2lnL) = {d.sum():.1f} (identity: +2843)")
print(f"C_g gamma {np.exp(rB.x[0]):.3f}; C_rho gamma {np.exp(rA.x[0]):.3f}, rho_c {np.exp(rA.x[1]):.2e} (code units)")

# within-galaxy rank by g_bar descending
rank = np.empty(D.N)
for ix in D.IDX:
    order = np.argsort(-D.GB[ix])
    r = np.empty(len(ix)); r[order] = (np.arange(len(ix)) + 0.5) / len(ix)
    rank[ix] = r
for lo, hi in ((0, 0.25), (0.25, 0.5), (0.5, 0.75), (0.75, 1.0)):
    m = (rank > lo) & (rank <= hi)
    print(f"radial-rank quarter ({lo:.2f},{hi:.2f}]: n={m.sum():5d}  sum {d[m].sum():8.1f}  ({100*d[m].sum()/d.sum():5.1f}%)  per point {d[m].mean():.2f}")
lg = np.log10(D.GB)
for lo, hi in ((-13, -11.5), (-11.5, -11), (-11, -10.5), (-10.5, -10), (-10, -8)):
    m = (lg > lo) & (lg <= hi)
    print(f"log g_bar ({lo},{hi}]: n={m.sum():5d}  sum {d[m].sum():8.1f}  ({100*d[m].sum()/d.sum():5.1f}%)  per point {d[m].mean() if m.any() else 0:.2f}")
# residual sign of the density law by g_bar: does it under- or over-predict?
res = D.GL - mA
for lo, hi in ((-13, -11), (-11, -10), (-10, -8)):
    m = (lg > lo) & (lg <= hi)
    print(f"mean residual log g_obs - model, C_rho, log g_bar ({lo},{hi}]: {res[m].mean():+.3f} dex; C_g {(D.GL - mB)[m].mean():+.3f}")
# galaxies: how concentrated
pg = np.array([d[ix].sum() for ix in D.IDX])
o = np.argsort(-pg)
print(f"top 10 galaxies carry {100*pg[o[:10]].sum()/d.sum():.1f}%; top 30 {100*pg[o[:30]].sum()/d.sum():.1f}%; galaxies with C_rho worse: {(pg>0).sum()}/{D.NGAL}")
print("top 10:", ", ".join(f"{D.GAL[i]} {pg[i]:.0f}" for i in o[:10]))
