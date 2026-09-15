#!/usr/bin/env python3
r"""
C1 of explorer/work/2026-09-15-wake-and-prereg.md (committed ab620af before this ran).

The globular-cluster internal-slope test of joint_local_window_gamma_axis.py, statistic verbatim, with rho(r) in the law
replaced by rho_D(r): the exact spherical top-hat average of the cluster's modified-Hubble model over a ball of radius
D centred at r (background 0).  Division law g = g_N / C(rho_D), f = Omega_m.

Rule: GCs supply an upper bound on D iff some joint-window-edge knee is EXCL at some D > 0.
Positive control: D = 0 reproduces the 09-08 mismatch values to +/-0.002.
"""
import json, math, time
import numpy as np
from gc_knee_jeans_test import ModHubble
from gc_slope_with_mond import sigma_los_general, make_g_mond, g_newton, wslope
from joint_local_window_gamma_axis import load_gc, C

DS = [0.0, 0.3, 1.0, 3.0, 10.0, 30.0]
KNEES = {0.489: [0.0039, 0.0079, 0.1238, 0.4898, 1.225, 12.12],
         2.0: [0.0735, 0.078, 0.4898, 1.225, 12.12]}
EDGES = {0.489: (0.0039, 0.0079), 2.0: (0.0735, 0.078)}
REF_D0 = {(0.489, 0.1238): -0.197, (0.489, 0.4898): -0.259, (0.489, 1.225): -0.278, (0.489, 12.12): -0.227,
          (2.0, 0.4898): -0.172, (2.0, 1.225): -0.232, (2.0, 12.12): -0.295}   # from joint_local_window_gamma_axis_output.txt


def tophat_smoother(model, D):
    """Return a function r(array) -> rho_D(r) for the truncated modified-Hubble model."""
    s = np.geomspace(model.rc * 1e-4, model.r_t, 4000)
    w = 4 * math.pi * s ** 2 * np.array([model.rho(x) for x in s])
    V = 4 / 3 * math.pi * D ** 3
    def f(r):
        r = np.asarray(r)[:, None]
        frac = np.clip((D ** 2 - (r - s) ** 2) / (4 * np.maximum(r, 1e-12) * s), 0.0, 1.0)
        frac = np.where(s + r <= D, 1.0, np.where(np.abs(r - s) >= D, 0.0, frac))
        return np.trapz(w * frac, s, axis=1) / V
    return f


def main():
    t0 = time.time()
    sel = load_gc()
    WW = np.array([1 / s[3][1] ** 2 for s in sel])
    mond_ref = None

    def mismatch(gf):
        dd = []
        for c, rr, ss, (so, eo) in sel:
            mo = sigma_los_general(ModHubble(c['M'], c['r_c'], c['r_t']), gf(c), rr)
            ok = np.isfinite(mo) & (mo > 0)
            dd.append(so - (wslope(rr[ok], mo[ok])[0] if ok.sum() >= 3 else np.nan))
        dd = np.array(dd); ok = np.isfinite(dd)
        return float(np.sum(dd[ok] * WW[ok]) / np.sum(WW[ok]))

    base = mismatch(lambda c: g_newton)
    mond = mismatch(lambda c: make_g_mond(233.0 ** 2 / (c['R_GC'] * 1000.0)))
    print(f"# N = {len(sel)} clusters; Newtonian mismatch {base:+.3f}; MOND+EFE {mond:+.3f}  (09-08: -0.057 / -0.093)")
    status = lambda v: 'ok' if abs(v) <= abs(mond) else ('marg' if abs(v) < 2 * abs(mond) else 'EXCL')

    # Smoothers are expensive; cache per (cluster, D)
    cache = {}
    def law(gamma, rc, D):
        def gf(c):
            if D == 0.0:
                return lambda gN, rho, r: gN / C(rho / rc, gamma)
            key = (c['M'], c['r_c'], c['r_t'], D)
            def g(gN, rho, r):
                if key not in cache:
                    cache[key] = tophat_smoother(ModHubble(c['M'], c['r_c'], c['r_t']), D)(r)
                return gN / C(cache[key] / rc, gamma)
            return g
        return gf

    # typical cluster: how big is r_t vs D?
    rts = np.array([c['r_t'] for c, *_ in sel]); rcs = np.array([c['r_c'] for c, *_ in sel])
    print(f"# cluster r_t: median {np.median(rts):.1f} pc (range {rts.min():.1f}-{rts.max():.1f}); r_c median {np.median(rcs):.2f} pc")

    res = {}
    print("\n" + "=" * 100)
    print("GC mismatch (suffix o/m/E) vs smoothing radius D [pc]")
    print("=" * 100)
    print(f"{'gamma':>6s} {'rho_c':>8s} " + " ".join(f"{'D='+str(D):>10s}" for D in DS))
    for gamma, knees in KNEES.items():
        for rc in knees:
            row = []
            for D in DS:
                v = mismatch(law(gamma, rc, D))
                res[f"{gamma}|{rc}|{D}"] = dict(mismatch=v, status=status(v))
                row.append(f"{v:+.3f}{status(v)[0]}")
            print(f"{gamma:6.3f} {rc:8.4g} " + " ".join(f"{x:>10s}" for x in row), flush=True)

    print("\nPOSITIVE CONTROL (D = 0 vs 09-08 output, tolerance 0.002):")
    for (g, rc), ref in REF_D0.items():
        v = res[f"{g}|{rc}|0.0"]['mismatch']
        print(f"  gamma {g} rho_c {rc}: {v:+.3f} vs {ref:+.3f}  {'PASS' if abs(v-ref) <= 0.002 else 'FAIL'}")

    print("\nRULE: does any joint-window-edge knee become EXCL at some D > 0?")
    fired = []
    for g, edges in EDGES.items():
        for rc in edges:
            for D in DS[1:]:
                if res[f"{g}|{rc}|{D}"]['status'] == 'EXCL':
                    fired.append((g, rc, D))
    print("  FIRED:" if fired else "  NOT FIRED - GC internal dynamics give no D_max on this grid.", fired if fired else "")
    print("\nSmallest D at which each previously-EXCL cell is no longer EXCL:")
    for g, knees in KNEES.items():
        for rc in knees:
            if res[f"{g}|{rc}|0.0"]['status'] != 'EXCL':
                continue
            dd = [D for D in DS[1:] if res[f"{g}|{rc}|{D}"]['status'] != 'EXCL']
            print(f"  gamma {g} rho_c {rc}: {min(dd) if dd else '> 30 pc'}  "
                  f"(statuses: {[res[f'{g}|{rc}|{D}']['status'] for D in DS]})")
    json.dump(dict(DS=DS, newton=base, mond=mond, res=res), open('gc_slope_smoothed_density.json', 'w'), indent=1)
    print(f"[{time.time()-t0:.0f}s]")


if __name__ == '__main__':
    main()
