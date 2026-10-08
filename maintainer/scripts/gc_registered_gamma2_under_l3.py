#!/usr/bin/env python3
r"""
P611.2's REGISTERED POINT (gamma = 2, rho_c = 0.161) UNDER THE ACTION (L3)
=========================================================================
Pre-registered: maintainer/scripts/gc_registered_gamma2_under_l3_PREREG.md (commit 5ca3fac, before this file).
Machinery imported verbatim from explorer/findings/scripts/gc_window_under_l3_monopole.py (explorer 2026-09-16),
which ran only the gamma = 0.489 row.  Only change: gamma = 2.0, grid = RC_GRID + the registered knee 0.161.
Verdict rule (imported): ok <= |MOND+EFE| ; marginal < 2|MOND+EFE| ; EXCL otherwise.
"""
import json, os, sys, time
import numpy as np

SCR = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', '..', 'explorer', 'findings', 'scripts')
SCR = os.path.normpath(SCR)
sys.path.insert(0, SCR)
os.chdir(SCR)  # imported modules read their data relative to this directory

from gc_knee_jeans_test import ModHubble
from gc_slope_with_mond import sigma_los_general, make_g_mond, g_newton, wslope
from joint_local_window_gamma_axis import load_gc, RC_GRID
from gc_window_under_l3_monopole import make_l2, make_l3

GAMMA = 2.0
REG_KNEE = 0.161


def main():
    t0 = time.time()
    sel = load_gc()
    WW = np.array([1 / s[3][1] ** 2 for s in sel])

    def mismatch(gf):
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
    print(f"C3  N = {len(sel)}  Newtonian {base:+.3f}  MOND+EFE {mond:+.3f}   (published -0.057, -0.093)")
    pub = json.load(open('joint_local_window_gamma_axis.json'))['gc'][str(GAMMA)]
    st = lambda v: 'ok' if abs(v) <= abs(mond) else ('marg' if abs(v) < 2 * abs(mond) else 'EXCL')

    grid = sorted(set(list(RC_GRID) + [REG_KNEE]))
    print(f"\n{'rho_c':>9s} {'pub L2':>8s} {'L2':>8s} {'L3 C->0':>8s} {'L3':>8s} {'#g<0':>5s} {'min g/gs':>9s} {'nan':>4s}  change")
    rows, c1, c2 = {}, True, True
    for rc in grid:
        key = f"{rc:.5g}"
        p = pub.get(key, {}).get('mismatch')
        v2, _ = mismatch(lambda c, rc=rc: make_l2(rc, g=GAMMA))
        v0, _ = mismatch(lambda c, rc=rc: make_l3(rc, g=GAMMA, striction=0.0))
        stats = []
        v3, nnan = mismatch(lambda c, rc=rc: make_l3(rc, g=GAMMA, stats=stats))
        nneg = sum(1 for s in stats if s < 0)
        if p is not None and abs(p - v2) > 1e-3: c1 = False
        if abs(v0 - v2) > 1e-3: c2 = False
        rows[key] = dict(pub=p, l2=v2, l3_identity=v0, l3=v3, status_l2=st(v2), status_l3=st(v3),
                         n_clusters_outward_g=nneg, min_g_over_gs=min(stats), n_nan=nnan)
        ps = f"{p:+8.3f}" if p is not None else f"{'--':>8s}"
        print(f"{rc:9.4g} {ps} {v2:+8.3f} {v0:+8.3f} {v3:+8.3f} {nneg:5d} {min(stats):9.2f} {nnan:4d}  "
              f"{st(v2)}->{st(v3)}{'  *' if st(v2) != st(v3) else ''}{'   <== registered knee' if rc == REG_KNEE else ''}",
              flush=True)
    print(f"\nC1 (L2 reproduces published gamma=2 row): {'PASS' if c1 else 'FAIL'}")
    print(f"C2 (L3 with C'=0 equals L2):               {'PASS' if c2 else 'FAIL'}")

    r = rows[f"{REG_KNEE:.5g}"]
    print("\nPredictions:")
    print(f"P1 L3 verdict differs from L2 at registered knee: {r['status_l2']} -> {r['status_l3']}  "
          f"{'HELD' if r['status_l2'] != r['status_l3'] else 'FAILED'}")
    print(f"P2 >=1 cluster with outward net g at registered knee: {r['n_clusters_outward_g']}  "
          f"{'HELD' if r['n_clusters_outward_g'] >= 1 else 'FAILED'}")
    ok_hi = [k for k, v in rows.items() if float(k) >= 0.03 and v['status_l3'] == 'ok']
    print(f"P3 no 'ok' L3 point at rho_c >= 0.03: ok points = {ok_hi}  {'HELD' if not ok_hi else 'FAILED'}")
    d = abs(r['l3'] - r['l2'])
    print(f"P4 |L3-L2| >= 0.03 at registered knee: {d:.3f}  {'HELD' if d >= 0.03 else 'FAILED'}")
    rule = {'EXCL': 'survives under L2 only; excluded under the action',
            'marg': 'survives as marginal under both L2 and the action',
            'ok': 'survives under both; the action helps it'}[r['status_l3']]
    print(f"\nDECISION (pre-fixed rule): the registered prediction {rule}.")
    out = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'gc_registered_gamma2_under_l3.json')
    json.dump(dict(gamma=GAMMA, newton=base, mond_efe=mond, rows=rows), open(out, 'w'), indent=1)
    print(f"[{time.time()-t0:.0f}s]")


if __name__ == '__main__':
    main()
