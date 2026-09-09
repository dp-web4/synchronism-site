#!/usr/bin/env python3
r"""
DOES EVALUATING C ON THE NEWTONIAN FIELD MATTER?  (self-consistency check)
==========================================================================
Explorer 2026-09-09.  `the_floor_is_the_whole_difference_gN_keyed.py` evaluates C on
|grad Phi_N| and solves once.  True AQUAL evaluates the interpolating function on the
solution.  This iterates C <- C(|grad Phi_k|) to a fixed point on the best cells and
reports how much the one-shot answer moves, so the main table can be read correctly.

Scope note: this is a RATIO check, not a headline fit, so it runs on a fixed 40-disc subsample at
Upsilon_disk = 0.5 rather than the full 153 with Upsilon profiling.  The first version profiled
Upsilon over the full sample and was projected at 3+ hours for a number that only has to answer
"does the one-shot approximation move the answer, and by how much".

Control: the same fixed point with MOND's own mu = x/(1+x) and no floor should land near
parameter-free MOND's chi2/N = 21.25.  If it does not, the solver -- not the framework --
is what the gN rows are measuring.
"""
import os
import sys
import time
import numpy as np

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import l2_field_equation_on_sparc as L
import l2_sparc_core as K
from argument_of_C_head_to_head_l2 import GalArg, C_tanh, OMEGA_M, RG_FLOOR

A0 = K.A0_KPC
NITER = 12
NSUB = 40                          # every Nth disc of the sorted sample


def solve_selfconsistent(gg, mufun, Cmin, niter=NITER):
    """Iterate C <- mufun(|grad Phi_k|) from the Newtonian field.  Returns B, and the
    max relative change of C on the last step (the convergence diagnostic)."""
    g = gg.g
    X = gg.gN2d.copy()
    C = mufun(X)
    dlast = np.nan
    for _ in range(niter):
        Phi = K.solve_poisson_fast(g, C, gg.Mc, Cmin, gg.Mtot)
        gR = np.gradient(Phi, g.Rc, axis=0, edge_order=2)
        gZ = np.gradient(Phi, g.zc, axis=1, edge_order=2)
        Cn = mufun(np.hypot(gR, gZ))
        Cn = 0.5 * (C + Cn)                                   # damped, the map is contractive but stiff
        dlast = float(np.max(np.abs(Cn - C) / np.maximum(C, 1e-12)))
        C = Cn
        if dlast < 1e-4:
            break
    Phi = K.solve_poisson_fast(g, C, gg.Mc, Cmin, gg.Mtot)
    gL2_R = np.interp(gg.d["R"], g.Rc, K.midplane_gR(g, Phi))
    B = np.where(gg.ok, gL2_R / np.where(gg.ok, gg.gN, 1.0), 1.0)
    return B, dlast


def mond_mu_floor(floor):
    """mu = x/(1+x) with an optional floor, x = |grad Phi| / a0."""
    return lambda X: np.maximum(X / A0 / (1.0 + X / A0), floor)


def main():
    t0 = time.time()
    gal = K.load_sparc()
    gids = sorted(gal)[::max(1, len(gal) // NSUB)]
    G = []
    for gid in gids:
        try:
            G.append(GalArg(gal[gid]))
        except Exception as e:                                   # noqa
            print("skip", gid, e)
    print(f"built {len(G)}-disc subsample in {time.time()-t0:.0f}s (Upsilon_disk = 0.5 fixed)",
          flush=True)
    mond = L.summarise("m", [gg.score(K.mond_simple(gg.gbar_sparc) * gg.d["R"])
                             for gg in G])["chi2_per_pt"]
    print(f"reference on this subsample: parameter-free MOND simple mu chi2/N = {mond:.2f}\n")
    print(f"{'model':<52s} | {'one-shot':>9s} | {'self-consistent':>15s} | {'x MOND':>7s} | {'maxdC':>8s}")

    cases = [("MOND mu = x/(1+x), floor 1e-6  [CONTROL]", mond_mu_floor(1e-6), 1e-6),
             ("MOND mu = x/(1+x), floor = Omega_m",       mond_mu_floor(OMEGA_M), OMEGA_M),
             ("MOND mu = x/(1+x), floor = 0.089",         mond_mu_floor(RG_FLOOR), RG_FLOOR),
             ("compander gamma=0.489 g_c=a0 floor=Omega_m", C_tanh(0.489, A0, OMEGA_M), OMEGA_M),
             ("compander gamma=0.489 g_c=a0 floor=0.089",   C_tanh(0.489, A0, RG_FLOOR), RG_FLOOR),
             ("compander gamma=0.489 g_c=a0 floor=1e-3",    C_tanh(0.489, A0, 1e-3), 1e-3),
             ("compander gamma=2     g_c=a0 floor=1e-3",    C_tanh(2.0, A0, 1e-3), 1e-3)]

    for name, mu, cmin in cases:
        one, sc, dd = [], [], []
        for gg in G:
            one.append(gg.score(gg.solve_arg("gN", mu, cmin)[0] * gg.vbar2))
            B, d = solve_selfconsistent(gg, mu, cmin)
            sc.append(gg.score(B * gg.vbar2))
            dd.append(d)
        a = L.summarise(name, one)["chi2_per_pt"]
        b = L.summarise(name, sc)["chi2_per_pt"]
        print(f"{name:<52s} | {a:9.2f} | {b:15.2f} | {b/mond:7.2f} | {np.nanmax(dd):8.1e}", flush=True)
    print("\n 'one-shot' = C evaluated on the Newtonian field (what the main tables do).")
    print(" 'self-consistent' = C iterated to a fixed point on |grad Phi| (AQUAL-style).")
    print(f" CONTROL row: unfloored MOND mu self-consistently should land near {mond:.2f}.")
    print(" 'maxdC' = largest remaining relative change of C on the final iteration (convergence).")
    print(f"\n[{time.time()-t0:.0f}s]")


if __name__ == '__main__':
    main()
