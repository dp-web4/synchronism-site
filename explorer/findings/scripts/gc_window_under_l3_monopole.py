#!/usr/bin/env python3
r"""
P4 (pre-registered, explorer/work/2026-09-16-wake-and-prereg.md, commit b0a82e2):
THE GLOBULAR-CLUSTER OUTER-SLOPE WINDOW, gamma = 0.489 ROW, UNDER L3 (ACTION) INSTEAD OF L2
===========================================================================================
Statistic, selection, mass model, MOND+EFE benchmark and cutoffs are imported verbatim from
joint_local_window_gamma_axis.py.  The ONLY change is the force law passed to sigma_los_general:
    L2 (published):  g = g_N / C(rho)
    L3:              g = g_N / C(rho) + d/dr [ C'(rho) (g_N/C)^2 / 8 pi G ]
Code diff between the two gfuns: the added gradient term.  Identity control: L3 with C' forced to 0 must
reproduce the published L2 row digit for digit.
Isolated cluster, pointwise rho (D = 0), no external field (the dipole is dipolar and averages out of an
angle-averaged profile at first order; see gc_refraction_l2_vs_l3.py for its size).
"""
import json, math, sys, time
import numpy as np
from gc_knee_jeans_test import ModHubble
from gc_slope_with_mond import sigma_los_general, make_g_mond, g_newton, wslope
from joint_local_window_gamma_axis import load_gc, C, RC_GRID, OMEGA_M

G = 4.30091e-3
GAMMA = 0.489


def dC(x_rho, rho_c, gamma, f=OMEGA_M):          # dC/drho
    return (1 - f) * gamma / np.cosh(gamma * np.log1p(x_rho / rho_c))**2 / (rho_c + x_rho)


def make_l2(rc, g=GAMMA):
    return lambda gN, rho, r: gN / C(rho / rc, g)


def make_l3(rc, g=GAMMA, striction=1.0, stats=None):
    def f(gN, rho, r):
        gs = gN / C(rho / rc, g)
        Psi = striction * dC(rho, rc, g) * gs**2 / (8 * np.pi * G)
        out = gs + np.gradient(Psi, r)
        if stats is not None:
            stats.append(float(np.min(out / gs)))
        return out
    return f


def main():
    t0 = time.time()
    sel = load_gc()
    WW = np.array([1 / s[3][1] ** 2 for s in sel])

    def mismatch(gf, negstat=None):
        dd = []
        for c, rr, ss, (so, eo) in sel:
            mod = ModHubble(c['M'], c['r_c'], c['r_t'])
            mo = sigma_los_general(mod, gf(c), rr)
            ok = np.isfinite(mo) & (mo > 0)
            dd.append(so - (wslope(rr[ok], mo[ok])[0] if ok.sum() >= 3 else np.nan))
        dd = np.array(dd); ok = np.isfinite(dd)
        return float(np.sum(dd[ok] * WW[ok]) / np.sum(WW[ok])), int((~ok).sum())

    base, _ = mismatch(lambda c: g_newton)
    mond, _ = mismatch(lambda c: make_g_mond(233.0 ** 2 / (c['R_GC'] * 1000.0)))
    print(f"N = {len(sel)} clusters.  Newtonian {base:+.3f}   MOND+EFE {mond:+.3f}   (published: -0.057, -0.093)")
    pub = json.load(open('joint_local_window_gamma_axis.json'))['gc'][str(GAMMA)]
    st = lambda v: 'ok' if abs(v) <= abs(mond) else ('marg' if abs(v) < 2 * abs(mond) else 'EXCL')

    print(f"\n{'rho_c':>9s} {'pub L2':>10s} {'L2 here':>10s} {'L3 C->0':>10s} {'L3':>10s} {'#g<0':>5s} {'min g/gs':>9s} {'nan':>4s}  change")
    rows = {}
    nchange = 0
    for rc in RC_GRID:
        key = f"{rc:.5g}"
        p = pub[key]['mismatch']
        v2, _ = mismatch(lambda c, rc=rc: make_l2(rc))
        v0, _ = mismatch(lambda c, rc=rc: make_l3(rc, striction=0.0))
        stats = []
        v3, nnan = mismatch(lambda c, rc=rc: make_l3(rc, stats=stats))
        nneg = sum(1 for s in stats if s < 0)
        ch = st(v2) != st(v3)
        nchange += ch
        rows[key] = dict(pub=p, l2=v2, l3_identity=v0, l3=v3, status_l2=st(v2), status_l3=st(v3),
                         n_clusters_outward_g=nneg, min_g_over_gs=min(stats), n_nan=nnan)
        print(f"{rc:9.4g} {p:+10.3f} {v2:+10.3f} {v0:+10.3f} {v3:+10.3f} {nneg:5d} {min(stats):9.2f} {nnan:4d}  "
              f"{st(v2)}->{st(v3)}{'  *' if ch else ''}", flush=True)
    print(f"\nverdict changes on the gamma = 0.489 row: {nchange} / {len(RC_GRID)}   (P4 predicted >= 1)")
    json.dump(dict(gamma=GAMMA, newton=base, mond_efe=mond, rows=rows), open('gc_window_under_l3_monopole.json', 'w'), indent=1)
    print(f"[{time.time()-t0:.0f}s]")


if __name__ == '__main__':
    main()
