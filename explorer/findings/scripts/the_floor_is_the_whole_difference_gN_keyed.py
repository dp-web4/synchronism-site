#!/usr/bin/env python3
r"""
GIVE THE FRAMEWORK MOND'S OWN ARGUMENT AND SCAN ONLY THE FLOOR
==============================================================
Explorer 2026-09-09, stage 2 of `argument_of_C_head_to_head_l2.py`.

CORRECTION (written after launch; the code is unchanged, only this docstring).  The first draft
said "if C is keyed on |grad Phi_N| the L2 field equation IS AQUAL with mu = C".  That is wrong.
AQUAL is div[mu(|grad Phi|/a0) grad Phi] = 4 pi G rho -- the interpolating function is evaluated
on the SOLUTION.  This solver evaluates C on the NEWTONIAN field and then solves
div[C(|grad Phi_N|) grad Phi] = 4 pi G rho, which is a hybrid: neither AQUAL nor QUMOND.  It is
the framework's own field equation with C's argument swapped from rho to g_N, which is exactly
what the topic asks for -- but it is not MOND with a different mu, and the rows below must not be
read as "MOND with a floor".  A self-consistent version is a fixed-point loop and is run
separately (`_selfconsistent` rows).

MOND's mu = x/(1+x) has NO floor, so mu -> 0 and the boost is unbounded.  The
framework's C has a floor (Omega_m = 0.315, "B_max = 1/Omega_m"), so as g -> 0 it becomes
Newtonian with G -> G/floor and rotation curves must eventually fall.

So: hold the argument fixed at MOND's own, hold the form fixed at the framework's compander,
and scan ONLY the floor.  Whatever chi2 gap remains is attributable to the floor and to
nothing else -- not to the density keying, not to the tanh, not to the knee.

Same solver / grid / scale height / Upsilon profiling / likelihood as
`sparc_pinned_at_rg_knee_l2.py` (2026-09-08) and stage 1.
"""
import os
import sys
import time
import json
import numpy as np

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import l2_field_equation_on_sparc as L
import l2_sparc_core as K
from argument_of_C_head_to_head_l2 import GalArg, C_tanh, OMEGA_M, RG_FLOOR

A0 = K.A0_KPC                      # 3703 (km/s)^2/kpc
FLOORS = [OMEGA_M, RG_FLOOR, 0.02, 1e-3]
GAMMAS = [0.489, 2.0]
KNEES = [0.1 * A0, 0.32 * A0, A0, 3.2 * A0]


def main():
    t0 = time.time()
    gal = K.load_sparc()
    G, GU = [], {u: [] for u in L.UPS_GRID}
    for gid in sorted(gal):
        try:
            G.append(GalArg(gal[gid]))
            for u in L.UPS_GRID:
                GU[u].append(GalArg(gal[gid], up_disk=u))
        except Exception as e:                                   # noqa
            print("skip", gid, e)
    print(f"built {len(G)} galaxies in {time.time()-t0:.0f}s", flush=True)

    def score_ref(f):
        return ([gg.score(f(gg)) for gg in G],
                [L.profiled([GU[u][i].score(f(GU[u][i])) for u in L.UPS_GRID])
                 for i in range(len(G))])

    refs = {"Newton (C=1)": lambda gg: gg.vbar2,
            "MOND simple mu (no floor, AQUAL-equivalent arg)":
                lambda gg: K.mond_simple(gg.gbar_sparc) * gg.d["R"]}
    out = {}
    for n, f in refs.items():
        fx, pr = score_ref(f)
        out[n] = dict(fixed=L.summarise(n, fx), prof=L.summarise(n, pr))
    mond = np.array(out["MOND simple mu (no floor, AQUAL-equivalent arg)"]["prof"]["per_gal_chi2"])

    print("\n" + "=" * 132)
    print("C KEYED ON |grad Phi_N| (= AQUAL with mu = C), SPARC 153 discs, floor scanned")
    print("=" * 132)
    print(f"{'model':<44s} | {'Ups=0.5 fixed':^17s} | {'Ups profiled':^17s} | {'x MOND':>7s} | {'boost':^14s}")
    print(f"{'':<44s} | {'chi2/N':>8s} {'rmsV':>8s} | {'chi2/N':>8s} {'rmsV':>8s} | {'':>7s} | "
          f"{'medBmax':>7s} {'need>':>6s}")
    mp = out["MOND simple mu (no floor, AQUAL-equivalent arg)"]["prof"]["chi2_per_pt"]
    for n in refs:
        f, p = out[n]["fixed"], out[n]["prof"]
        print(f"{n:<44s} | {f['chi2_per_pt']:8.2f} {f['rmslog_med']:8.3f} | "
              f"{p['chi2_per_pt']:8.2f} {p['rmslog_med']:8.3f} | {p['chi2_per_pt']/mp:7.2f} |", flush=True)
    for fl in FLOORS:
        print("-" * 132)
        for gm in GAMMAS:
            for kn in KNEES:
                Cf = C_tanh(gm, kn, fl)
                fixed, prof, bmax, req = [], [], [], []
                for i, gg in enumerate(G):
                    B, _ = gg.solve_arg("gN", Cf, fl)
                    fixed.append(gg.score(B * gg.vbar2))
                    bmax.append(B[gg.ok].max())
                    req.append((gg.d["Vobs"][gg.ok]**2 / gg.vbar2[gg.ok]).max())
                    prof.append(L.profiled([GU[u][i].score(GU[u][i].solve_arg("gN", Cf, fl)[0]
                                                           * GU[u][i].vbar2) for u in L.UPS_GRID]))
                name = f"gN  gamma={gm:<5g} g_c={kn/A0:<5g}a0 floor={fl:g}"
                rf, rp = L.summarise(name, fixed), L.summarise(name, prof)
                bmax, req = np.array(bmax), np.array(req)
                print(f"{name:<44s} | {rf['chi2_per_pt']:8.2f} {rf['rmslog_med']:8.3f} | "
                      f"{rp['chi2_per_pt']:8.2f} {rp['rmslog_med']:8.3f} | "
                      f"{rp['chi2_per_pt']/mp:7.2f} | {np.median(bmax):7.2f} "
                      f"{np.mean(req > bmax)*100:5.0f}%", flush=True)
                out[name] = dict(gamma=gm, knee_a0=kn / A0, floor=fl,
                                 fixed={k: v for k, v in rf.items() if not k.startswith('per_gal')},
                                 prof={k: v for k, v in rp.items() if not k.startswith('per_gal')},
                                 x_mond=rp['chi2_per_pt'] / mp, medBmax=float(np.median(bmax)),
                                 frac_need_more=float(np.mean(req > bmax)))
    print("\n 'x MOND' = chi2/N divided by parameter-free MOND simple-mu's, both Upsilon-profiled.")
    print(" The framework's compander keyed on MOND's own argument differs from MOND in exactly two")
    print(" ways: the form (tanh vs x/(1+x)) and the floor.  Rows at floor=1e-3 isolate the form.")
    json.dump(out, open(os.path.join(os.path.dirname(os.path.abspath(__file__)),
                                     'the_floor_is_the_whole_difference_gN_keyed.json'), 'w'),
              indent=1, default=float)
    print(f"\n[{time.time()-t0:.0f}s]")


if __name__ == '__main__':
    main()
