#!/usr/bin/env python3
r"""
LEFT-EDGE CONVERGENCE CHECK for epsilon0_free_the_ceiling_rescue.py.

In the main grid every row with eps0 <= 0.12 bottoms out on the LEFT edge
(rho_c = 1e-7) and is still falling.  That caveat cuts AGAINST this session's
conclusion: if those rows keep falling, a low eps0 (Pass 4's rescue value 0.073,
ceiling 13.7) might beat the interior minimum at eps0 = 0.22.

The framework form C = eps0 + (1-eps0) tanh(0.489 ln(1+rho/rho_c)) tends to
C -> 1 (Newton) as rho_c -> 0, so each row MUST turn around and rise to Newton's
chi2/N.  The question is only how deep it dips first.

Extend rho_c down to 1e-14 for the three rows that matter and find the turnover.
"""
import os
import sys
import time
import numpy as np

HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)
import l2_sparc_core as K                      # noqa: E402
import l2_field_equation_on_sparc as D         # noqa: E402

t0 = time.time()
gals = K.load_sparc()
G = [D.Gal(d) for d in gals.values()]
NN = np.array([int(g.ok.sum()) for g in G])
print(f"built {len(G)} galaxies in {time.time()-t0:.0f}s;  N points = {NN.sum()}", flush=True)

newt = sum(g.score(g.vbar2)[0] for g in G) / NN.sum()
mond = sum(g.score(K.mond_simple(g.gbar_sparc) * g.d["R"])[0] for g in G) / NN.sum()
print(f"reference [Upsilon = 0.5 FIXED]:  Newton {newt:.2f}   MOND simple mu {mond:.2f}")
print("main-grid interior minimum was eps0 = 0.220, rho_c = 3.5e-06 -> chi2/N = 126.5\n")

RHOC = np.logspace(-14, -6, 9)
print("   eps0 \\ rho_c " + " ".join(f"{r:9.1g}" for r in RHOC) + "      row min")
for e0 in (0.050, 0.073, 0.089, 0.120):
    row = []
    for rc in RHOC:
        Cf = K.C_framework(0.489, rc, e0)
        c = sum(g.score(g.solve(Cf, e0)[0] * g.vbar2)[0] for g in G)
        row.append(c / NN.sum())
    j = int(np.argmin(row))
    flag = "  <-STILL AT EDGE" if j == 0 else ""
    print(f"   {e0:<6.3f}      " + " ".join(f"{v:9.1f}" for v in row) +
          f"   {row[j]:8.1f} @ {RHOC[j]:.1g}{flag}", flush=True)

print(f"\ntotal {time.time()-t0:.0f}s")
