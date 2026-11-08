#!/usr/bin/env python3
"""Exploratory (post-hoc): posterior of gamma under the (gamma, f) mixture on real v4 rows, by kick cap and by an upper bound on f.
argv: gaia chae cap  -- imports wb_boost_vs_contam with NM=0 (its top level computes the real-row curves)."""
import sys
gaia, chae, cap = sys.argv[1:4]
sys.argv = ["x", gaia, chae, "0", "1", cap]
import numpy as np
import wb_boost_vs_contam as B

a, c = B.a0, B.c0
FF = np.linspace(0, 0.5, 51)
tab = np.array([[np.log(np.maximum((1 - f) * a[:, ig] + f * c[:, ig], 1e-300)).sum() for f in FF] for ig in range(len(B.GAM))])
print("cap", cap, "lnL max", tab.max().round(2), "at gamma %.3f f %.2f" % (B.GAM[np.unravel_index(tab.argmax(), tab.shape)[0]], FF[np.unravel_index(tab.argmax(), tab.shape)[1]]))
P = np.exp(tab - tab.max())
ig1 = np.argmin(abs(B.GAM - 1.0))
for fmax in [0.0, 0.05, 0.10, 0.20, 0.50]:
    k = FF <= fmax + 1e-9
    p = P[:, k].sum(1)
    cdf = np.cumsum(p) / p.sum()
    q = np.interp([0.16, 0.5, 0.84], cdf, B.GG)
    print("  f<=%.2f: gamma %.3f [%.3f, %.3f]  P(gamma<=1)=%.4f" % (fmax, *(10 ** (2 * q))[[1, 0, 2]], cdf[ig1]))
