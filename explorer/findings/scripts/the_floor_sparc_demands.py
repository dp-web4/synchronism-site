#!/usr/bin/env python3
r"""
WHAT FLOOR DOES SPARC DEMAND?  (data only -- no model, no solver, no fit)
=========================================================================
Explorer 2026-09-09.  In the framework's field equation div(C grad Phi) = 4 pi G rho with
C >= f, the boost is 1/C, so the largest boost available anywhere is 1/f.  A disc whose
observed curve requires B_req = Vobs^2/Vbar^2 > 1/f at ANY radius cannot be fitted at that
floor, whatever C is a function of and wherever its knee sits.

So the required floor is readable straight off the catalogue.  Same sample and same Upsilon
conventions as the solver runs (Q<=2, i>30, Upsilon_disk in {0.3,0.5,0.7}, Upsilon_bul = 1.4x).

Comparators: the archive's enumerated ceiling candidates.  1/Omega_m = 3.17 is the site's;
Omega_m/Omega_b = 6.39 is the most permissive one the 2026-07-30 proposal could name;
Refracted Gravity's fitted eps_0 = 0.089 gives 11.2.
"""
import os
import sys
import numpy as np

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import l2_sparc_core as K

_LOCAL = os.path.expanduser('~/ai-workspace/Synchronism/simulations/sparc_real_data')
if not os.path.exists(K.LOAD.TAB1) and os.path.exists(_LOCAL):
    K.LOAD.BASE = _LOCAL
    K.LOAD.MRT = os.path.join(_LOCAL, 'MassModels_Lelli2016c.mrt')
    K.LOAD.TAB1 = os.path.join(_LOCAL, 'SPARC_Lelli2016c.mrt')

CEIL = {"1/Omega_m (site)": 3.175, "Omega_m/Omega_b (most permissive in archive)": 6.39,
        "1/eps_0 (Refracted Gravity, Cesare+2020)": 1 / 0.089}


def main():
    gal = K.load_sparc()
    print(f"SPARC Q<=2, i>30: {len(gal)} discs\n")
    print(f"{'Ups_disk':>9s} | {'median':>7s} {'p75':>7s} {'p90':>7s} {'max':>8s} | "
          + " | ".join(f"% > {v:.2f}" for v in CEIL.values()))
    rows = {}
    for up in (0.3, 0.5, 0.7, 1.0):
        req = []
        for gid, d in sorted(gal.items()):
            _v, v2 = K.vbar_sparc(d, up_disk=up, up_bul=1.4 * up)
            m = (v2 > 0) & (d["Vobs"] > 0)
            if m.sum() < 3:
                continue
            req.append((d["Vobs"][m]**2 / v2[m]).max())
        req = np.array(req)
        rows[up] = req
        pct = "  |  ".join(f"{np.mean(req > c)*100:9.0f}%" for c in CEIL.values())
        print(f"{up:9.1f} | {np.median(req):7.2f} {np.percentile(req,75):7.2f} "
              f"{np.percentile(req,90):7.2f} {req.max():8.1f} |  {pct}")

    print("\nThe floor a given fraction of the sample admits  (f <= 1 / B_req,max):")
    print(f"{'Ups_disk':>9s} | " + " | ".join(f"{q:>3.0f}% of discs" for q in (50, 75, 90, 100)))
    for up, req in rows.items():
        f = [1.0 / np.percentile(req, q) for q in (50, 75, 90, 100)]
        print(f"{up:9.1f} | " + " | ".join(f"{x:13.4f}" for x in f))
    print("\nRead: at the SPARC-standard Upsilon_disk = 0.5, fitting 90% of the sample requires a")
    print("coherence floor at or below the value in the '90%' column -- against Omega_m = 0.315.")
    print("This is arithmetic on the catalogue.  It does not depend on C's argument, its knee, its")
    print("functional form, or gamma; only on the field equation's g = g_N / C with C >= floor.")


if __name__ == '__main__':
    main()
