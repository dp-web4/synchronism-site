#!/usr/bin/env python3
r"""
The L2 refit (parameter_identifiability_l2_refit.py) found that with the floor
held at 1e-4 the density-keyed compander cannot beat NEWTON anywhere on a grid
spanning gamma in [0.02, 2] and A in [1e-11, 1e-1]:  best chi2/N = 732.3 at BOTH
grid edges, vs Newtonian 649.3 and MOND 52.21 in the same pipeline.  The 08-30
run, same solver and galaxies but with the floor near 0.22, reached chi2/N ~ 126.
That cross-session comparison suggests the FLOOR carries the fit -- but a
cross-session inference is not a measurement.  Scan the floor here, same script,
same galaxies, at three (gamma, A) settings.

No verdict is written into the prints below (feedback_dont_write_the_verdict_
into_the_print_statements -- violated earlier today in the l2_refit script).
Nuisances FIXED: Ups 0.5/0.7, Vgas, Bershady h, Q<=2, inc>=30.
Output: parameter_identifiability_floor_dominance_output.txt
"""
import os, sys, time
import numpy as np
HERE = os.path.dirname(os.path.abspath(__file__)); sys.path.insert(0, HERE)
import l2_sparc_core as K, l2_field_equation_on_sparc as D

gals = K.load_sparc(); G = [D.Gal(d) for d in gals.values()]
NPT = int(sum(int(g.ok.sum()) for g in G))
print(f"galaxies {len(G)}  points {NPT}")
def vflat(g):
    v = g.d["props"]["Vflat"]
    return v if v > 0 else float(np.mean(g.d["Vobs"][-3:]))
def score(gam, A, fl):
    tot = 0.0
    for g in G:
        B, _ = g.solve(K.C_framework(gam, A*vflat(g)**2, fl), fl)
        c, _, _ = g.score(B * g.gN * g.d["R"]); tot += c
    return tot / NPT

tot = 0.0
for g in G:
    c, _, _ = g.score(K.mond_simple(g.gbar_sparc) * g.d["R"]); tot += c
mond = tot/NPT
tot = 0.0
for g in G:
    c, _, _ = g.score(g.gN * g.d["R"]); tot += c
newt = tot/NPT
print(f"\nreference, same pipeline:  MOND simple mu (0 params) {mond:.4g}   "
      f"Newtonian C=1 (0 params) {newt:.4g}\n")

FLOORS = [1e-4, 1e-3, 1e-2, 0.05, 0.12, 0.22, 0.315, 0.50, 0.661, 0.90]
SETS = [("site calibrated  gamma=0.489, A=0.029", 0.489, 0.029),
        ("l2 grid edge     gamma=2.0,   A=1e-11", 2.0, 1e-11),
        ("alg-div optimum  gamma=0.05,  A=2.51e-11", 0.0501, 2.5119e-11)]
t0 = time.time()
print(f"{'floor':>7} | " + " | ".join(f"{n.split()[0]+' '+n.split()[1]:>26}" for n, _, _ in SETS))
res = {}
for fl in FLOORS:
    vals = [score(gam, A, fl) for _, gam, A in SETS]
    res[fl] = vals
    print(f"{fl:>7.4g} | " + " | ".join(f"{v:>26.5g}" for v in vals) + f"   ({time.time()-t0:.0f}s)",
          flush=True)
print("\nfor each parameter set: best floor, chi2/N there, and the spread over floors")
for i, (n, gam, A) in enumerate(SETS):
    v = np.array([res[f][i] for f in FLOORS]); j = int(np.argmin(v))
    print(f"  {n:42s} best floor {FLOORS[j]:.4g}  chi2/N {v[j]:.5g}"
          f"   max/min over floors {v.max()/v.min():.4g}x"
          f"   edge? {j in (0, len(FLOORS)-1)}")
print("\nspread attributable to (gamma, A) at each floor, for comparison:")
for fl in FLOORS:
    v = np.array(res[fl])
    print(f"  floor {fl:>7.4g}: chi2/N across the three (gamma,A) sets "
          f"min {v.min():.5g} max {v.max():.5g}  ratio {v.max()/v.min():.4g}x")
np.save(os.path.join(HERE, "parameter_identifiability_floor_dominance.npy"),
        np.array([[res[f][i] for f in FLOORS] for i in range(len(SETS))]))
# rows = SETS in the order printed above; cols = FLOORS in the order printed above; values = chi2/N
print(f"\nDONE ({time.time()-t0:.0f}s)")
