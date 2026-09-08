#!/usr/bin/env python3
r"""
THE JOINT LOCAL WINDOW ON THE KNEE, WITH THE gamma-DEPENDENCE MADE EXPLICIT
===========================================================================
Explorer 2026-09-08.  Corrects explorer 2026-09-07 sec.7, which compared the
gamma = 2 Oort-limit window (0.074-0.154 Msun/pc3) against the gamma = 0.489
globular-cluster exclusion and called the intersection empty.  Same-gamma
comparison here, on a gamma axis.

Law:  g = g_N / C(rho),  C = f + (1-f) tanh(gamma ln(1 + rho/rho_c)),  f = Omega_m = 0.315.

Constraint 1 (Oort limit, from knee_inventory_oort_limit_and_globular_clusters.py):
   at the Sun, rho_bar = 0.084 Msun/pc3 (midplane), the law predicts
   f_DM,local = 1 - C(0.084/rho_c).  Measured 0.134 +/- 0.036 (McKee+2015);
   0.082 +/- 0.030 (Bovy & Tremaine 2012).  Window = |f_pred - f_meas| <= 2 sigma.
   This is analytic in rho_c at fixed gamma.

Constraint 2 (globular clusters, from gc_knee_bound.py, statistic verbatim):
   error-weighted outer d log sigma / d log r on 42 Baumgardt & Hilker clusters,
   isotropic Jeans on the catalogue modified-Hubble mass model; verdict against
   MOND+EFE's mismatch (ok <= |MOND|, marginal < 2|MOND|, excluded otherwise).
   Scanned on (gamma x rho_c).

Output: JSON with both constraints on the same gamma axis, and the printed
intersection Oort ∩ GC per gamma.  SPARC (constraint 3) is a separate script,
sparc_pinned_at_rg_knee_l2.py, because it needs the L2 solver.
"""
import json, math, sys, time
import numpy as np
from gc_knee_jeans_test import ModHubble
from gc_slope_with_mond import sigma_los_general, make_g_mond, g_newton, wslope

OMEGA_M = 0.315
RHO_SUN = 0.084                      # Msun/pc3 midplane baryons (Flynn+2006 / McKee+2015)
MCKEE = (0.134, 0.036); BT = (0.082, 0.030)
GAMMAS = [0.3, 0.489, 0.7, 1.0, 1.414, 2.0, 3.0]
RC_GRID = np.logspace(math.log10(0.002), math.log10(300.0), 27)   # Msun/pc3


def C(x, gamma, f=OMEGA_M):
    return f + (1 - f) * np.tanh(gamma * np.log1p(x))


def oort_window(gamma, meas, f=OMEGA_M, nsig=2.0):
    """rho_c interval where |1 - C(0.084/rho_c) - f_meas| <= nsig*sigma (analytic inversion)."""
    lo_f, hi_f = meas[0] - nsig * meas[1], meas[0] + nsig * meas[1]
    lo_f = max(lo_f, 0.0)
    out = []
    for fd in (hi_f, lo_f):            # larger f_DM -> smaller C -> smaller x -> larger rho_c
        Ct = 1 - fd
        t = (Ct - f) / (1 - f)
        if t >= 1: out.append(0.0); continue
        if t <= 0: out.append(np.inf); continue
        x = math.exp(math.atanh(t) / gamma) - 1
        out.append(RHO_SUN / x if x > 0 else np.inf)
    return min(out), max(out)          # (rho_c_min, rho_c_max)


def load_gc():
    d = json.load(open('baumgardt_gc.json')); cl, pr = d['clusters'], d['profiles']
    sel = []
    for name, p in pr.items():
        c = cl.get(name)
        if not c or not all(c.get(k) for k in ('M', 'r_hm', 'r_t', 'r_c', 'R_sun', 'R_GC', 'sigma0')):
            continue
        D = c['R_sun'] * 1000.0
        b = [(x['r_arcsec'] * D / 206265.0, x['sigma'], 0.5 * (x['e_up'] + x['e_low'])) for x in p]
        b = [x for x in b if x[2] > 0 and x[0] < c['r_t'] * 0.98]; b.sort()
        if len(b) < 10: continue
        rr = np.array([x[0] for x in b]); ss = np.array([x[1] for x in b]); ee = np.array([x[2] for x in b])
        m = rr > rr.max() / 3.0
        if m.sum() < 5: continue
        w = 1.0 / (ee[m] / ss[m]) ** 2
        sel.append((c, rr[m], ss[m], wslope(rr[m], ss[m], w)))
    return sel


def main():
    t0 = time.time()
    print("=" * 96)
    print("1. OORT-LIMIT WINDOW ON rho_c vs gamma   (floor = Omega_m; f_DM,pred = 1 - C(0.084/rho_c))")
    print("=" * 96)
    print(f"{'gamma':>7s} {'McKee 2sig window [Msun/pc3]':>32s} {'B&T 2sig window':>28s} {'C needed':>12s}")
    oort = {}
    for g in GAMMAS:
        wm = oort_window(g, MCKEE); wb = oort_window(g, BT)
        oort[g] = dict(mckee=wm, bt=wb)
        print(f"{g:7.3f} {wm[0]:14.4g} .. {wm[1]:<14.4g} {wb[0]:12.4g} .. {wb[1]:<12.4g} {1-MCKEE[0]-2*MCKEE[1]:.3f}-{1-MCKEE[0]+2*MCKEE[1]:.3f}")
    print("  (the window slides as exp(1/gamma): gamma 0.489 -> 0.004-0.017, gamma 2 -> 0.074-0.154; 09-07 sec.7 mixed these)")

    sel = load_gc()
    WW = np.array([1 / s[3][1] ** 2 for s in sel])

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
    print(f"\n# GC: N = {len(sel)} clusters;  Newtonian mismatch {base:+.3f} (systematics budget);  MOND+EFE {mond:+.3f}  [{time.time()-t0:.0f}s]")

    print("\n" + "=" * 96)
    print("2. GLOBULAR-CLUSTER VERDICT on (gamma x rho_c)   ok <= |MOND+EFE| ; marginal < 2x ; EXCL otherwise")
    print("=" * 96)
    hdr = f"{'rho_c':>9s} " + " ".join(f"{g:>9.3f}" for g in GAMMAS)
    print(hdr)
    gc = {str(g): {} for g in GAMMAS}
    for rc in RC_GRID:
        row = []
        for g in GAMMAS:
            v = mismatch(lambda c, rc=rc, g=g: (lambda gN, rho, r: gN / C(rho / rc, g)))
            st = 'ok' if abs(v) <= abs(mond) else ('marg' if abs(v) < 2 * abs(mond) else 'EXCL')
            gc[str(g)][f"{rc:.5g}"] = dict(mismatch=v, status=st)
            row.append(f"{v:+.3f}{st[0]}")
        print(f"{rc:9.4g} " + " ".join(f"{s:>9s}" for s in row), flush=True)
    print("  (suffix: o = ok, m = marginal, E = excluded)")

    print("\n" + "=" * 96)
    print("3. INTERSECTION  Oort(McKee, 2 sigma) ∩ GC(not excluded)  per gamma")
    print("=" * 96)
    inter = {}
    for g in GAMMAS:
        lo, hi = oort[g]['mckee']
        pts = [(float(k), v) for k, v in gc[str(g)].items()]
        inside = [(rc, v) for rc, v in pts if lo <= rc <= hi]
        # also evaluate GC exactly at the window edges (so the verdict is not grid-limited)
        edge = {}
        for e in (lo, hi):
            if np.isfinite(e) and e > 0:
                v = mismatch(lambda c, rc=e, g=g: (lambda gN, rho, r: gN / C(rho / rc, g)))
                edge[e] = ('ok' if abs(v) <= abs(mond) else ('marg' if abs(v) < 2 * abs(mond) else 'EXCL'), v)
        ok_band = [rc for rc, v in inside if v['status'] == 'ok'] + [e for e, (s, v) in edge.items() if s == 'ok']
        marg_band = [rc for rc, v in inside if v['status'] != 'EXCL'] + [e for e, (s, v) in edge.items() if s != 'EXCL']
        inter[g] = dict(oort=(lo, hi), edges={f"{e:.4g}": s for e, s in edge.items()},
                        ok=(min(ok_band), max(ok_band)) if ok_band else None,
                        not_excluded=(min(marg_band), max(marg_band)) if marg_band else None)
        es = "  ".join(f"GC@{e:.3g}={s[0]}({s[1]:+.3f})" for e, s in edge.items())
        print(f"gamma {g:5.3f}: Oort {lo:.4g}-{hi:.4g};  {es};  "
              f"ok-band {inter[g]['ok']};  not-excluded band {inter[g]['not_excluded']}")
    json.dump(dict(gammas=GAMMAS, oort={str(k): v for k, v in oort.items()}, gc=gc,
                   newton=base, mond_efe=mond,
                   intersection={str(k): v for k, v in inter.items()}),
              open('joint_local_window_gamma_axis.json', 'w'), indent=1, default=str)
    print(f"\n[{time.time()-t0:.0f}s]")


if __name__ == '__main__':
    main()
