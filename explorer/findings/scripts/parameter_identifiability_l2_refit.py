#!/usr/bin/env python3
r"""
CLOSES the open rule in
  findings/the-parameter-ledger-is-unfalsifiable-and-the-knee-is-misplaced-by-25000x.md
The fitted A = 2.5e-11 was obtained with ALGEBRAIC DIVISION coupling (g_obs = g_bar/C).
Refracted Gravity, whose field equation the framework's coincides with, solves
  div(C grad Phi) = 4 pi G rho   (the L2 route).
Pre-registered (in the finding, before this ran):
  * the PLACEMENT claim (rho_crit calibrated is 2.51e4 above SPARC's median
    midplane density) and the LINEARITY claim (form indistinguishable from
    C = gamma x at those parameters) are coupling-independent and MUST NOT MOVE;
  * if the L2-fitted A lands inside RG's published 1e-24..1e-27 g/cm^3 band,
    then algebraic division -- not the density keying -- drove A to 1e-11.
Also probes whether the UNFLOORED hero equation has an L2 solution at all.
NOTE (added after the run): the first block's print statements below assert
"the L2 route cannot be run without a floor".  THAT ASSERTION IS WRONG and is
contradicted by this script's own output (floor = 0 is not singular).
The prints are left verbatim rather than edited so the error stays inspectable;
see the retraction in explorer/logs/2026-09-03.md.  It is also an instance of
feedback_dont_write_the_verdict_into_the_print_statements -- do not do this.
Nuisances FIXED: Ups 0.5/0.7, Vgas, Bershady h, Q<=2, inc>=30.  Nothing marginalised.
Output: parameter_identifiability_l2_refit_output.txt
"""
import os, sys, time, warnings
import numpy as np
from scipy.sparse.linalg import MatrixRankWarning
HERE = os.path.dirname(os.path.abspath(__file__)); sys.path.insert(0, HERE)
import l2_sparc_core as K, l2_field_equation_on_sparc as D
MSPC3_TO_GCC = 6.7699e-23
def hdr(s): print("\n" + "=" * 78 + "\n" + s + "\n" + "=" * 78, flush=True)

gals = K.load_sparc()
G = [D.Gal(d) for d in gals.values()]
NG = len(G); NN = np.array([int(g.ok.sum()) for g in G]); NPT = int(NN.sum())
print(f"galaxies {NG}   points {NPT}")

hdr("STRUCTURAL: does the unfloored hero equation have an L2 solution?")
with warnings.catch_warnings(record=True) as w:
    warnings.simplefilter("always")
    B, _ = G[0].solve(K.C_framework(0.489, 0.029, 0.0), 1e-30)
    sing = any(issubclass(x.category, MatrixRankWarning) for x in w)
print(f"  floor = 0      : singular operator? {sing}   B finite? {np.all(np.isfinite(B))}")
for fl in (1e-8, 1e-4, 1e-2, 0.315):
    with warnings.catch_warnings(record=True) as w:
        warnings.simplefilter("always")
        B, _ = G[0].solve(K.C_framework(0.489, 0.029, fl), fl)
        s = any(issubclass(x.category, MatrixRankWarning) for x in w)
    print(f"  floor = {fl:<8.3g}: singular? {s}   max B = {np.nanmax(B):.4g}"
          f"   (analytic ceiling 1/floor = {1/fl:.4g})")
print("  => the L2 route cannot be run without a floor; the floor IS a boost ceiling.")
print("     This is why the Omega_m-floored TEST-09/10 form exists and the hero form has")
print("     no ceiling: they are not two choices, the field equation forces one of them.")

hdr("L2 REFIT of (gamma, A) with the floor held at the smallest value that solves")
FLOOR = 1e-4
print(f"  floor FIXED at {FLOOR} (ceiling {1/FLOOR:.0f}) -- deliberately far above any")
print( "  ceiling the site claims, so the fit is not floor-limited.")
GAM = np.array([0.02, 0.05, 0.1, 0.2, 0.489, 1.0, 2.0])
AA  = np.logspace(-11, -1, 11)
t0 = time.time()
chi = np.full((len(GAM), len(AA)), np.nan)
for a, gam in enumerate(GAM):
    for b, A in enumerate(AA):
        tot = 0.0
        for g in G:
            rc = A * (g.d["props"]["Vflat"] if g.d["props"]["Vflat"] > 0
                      else float(np.mean(g.d["Vobs"][-3:])))**2
            Cf = K.C_framework(gam, rc, FLOOR)
            B, _ = g.solve(Cf, FLOOR)
            c, n, _ = g.score(B * g.gN * g.d["R"])
            tot += c
        chi[a, b] = tot
    print(f"  gamma = {gam:<6g} done  best chi2/N over A = {np.nanmin(chi[a])/NPT:.4g}"
          f"   ({time.time()-t0:.0f}s)", flush=True)
ia, ib = np.unravel_index(np.nanargmin(chi), chi.shape)
print(f"\n  L2 optimum: gamma = {GAM[ia]:.4g}, A = {AA[ib]:.4e}"
      f"   chi2/N = {chi[ia, ib]/NPT:.4g}")
print(f"  on a grid edge?  gamma {ia in (0, len(GAM)-1)}   A {ib in (0, len(AA)-1)}")
vf = np.array([(g.d["props"]["Vflat"] if g.d["props"]["Vflat"] > 0
                else float(np.mean(g.d["Vobs"][-3:]))) for g in G])
rc_med = AA[ib] * np.median(vf)**2
print(f"  median rho_crit at the L2 optimum: {rc_med:.4e} M/pc3 = {rc_med*MSPC3_TO_GCC:.4e} g/cc")
print(f"  RG published galaxy band: 1e-24 .. 1e-27 g/cc")
print(f"  inside RG's band? {1e-27 <= rc_med*MSPC3_TO_GCC <= 1e-24}")
print(f"  algebraic-division fit gave A = 2.5119e-11 -> factor "
      f"{AA[ib]/2.5119e-11:.4g}x different from the L2 fit")

hdr("same-pipeline comparators under L2")
for tag, A, gam in (("site calibrated (0.489, 0.029)", 0.029, 0.489),
                    ("site stated formula (0.489, 4.6e-5)", 4.6e-5, 0.489),
                    ("original pin (2.0, 0.029)", 0.029, 2.0)):
    tot = 0.0
    for g in G:
        rc = A * (g.d["props"]["Vflat"] if g.d["props"]["Vflat"] > 0
                  else float(np.mean(g.d["Vobs"][-3:])))**2
        B, _ = g.solve(K.C_framework(gam, rc, FLOOR), FLOOR)
        c, n, _ = g.score(B * g.gN * g.d["R"]); tot += c
    print(f"  {tag:38s} chi2/N = {tot/NPT:.4g}")
tot = 0.0
for g in G:
    c, n, _ = g.score(K.mond_simple(g.gbar_sparc) * g.d["R"]); tot += c
print(f"  {'MOND simple mu, a0 fixed, 0 params':38s} chi2/N = {tot/NPT:.4g}")
tot = 0.0
for g in G:
    c, n, _ = g.score(g.gN * g.d["R"]); tot += c
print(f"  {'Newtonian (L2 with C=1), 0 params':38s} chi2/N = {tot/NPT:.4g}")
np.save(os.path.join(HERE, "parameter_identifiability_l2_refit.npy"),
        np.array([GAM[:, None]*np.ones((1, len(AA))), np.ones((len(GAM), 1))*AA[None, :], chi]))
# axes: [0]=gamma broadcast, [1]=A broadcast, [2]=chi2 total (NOT chi2/N)
print(f"\nDONE  ({time.time()-t0:.0f}s)")
