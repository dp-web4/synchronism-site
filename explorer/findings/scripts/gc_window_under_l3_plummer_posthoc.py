#!/usr/bin/env python3
"""POST-HOC robustness for P4 (explorer 2026-09-16, not registered).  Striction/gravity ~ (dC/dln rho) rho_bar/(6 C rho),
so its size depends on the mass model's tail: modified Hubble (r^-3, published) vs Plummer (r^-5).  Same statistic,
selection and cutoffs; ModHubble -> Plummer(M, r_hm, r_t) for Newton, MOND+EFE, L2 and L3 alike."""
import numpy as np
import gc_window_under_l3_monopole as W
from gc_knee_jeans_test import Plummer
from gc_slope_with_mond import sigma_los_general, make_g_mond, g_newton, wslope
sel = W.load_gc(); WW = np.array([1 / s[3][1] ** 2 for s in sel])
def mismatch(gf, stats=None):
    dd = []
    for c, rr, ss, (so, eo) in sel:
        mo = sigma_los_general(Plummer(c['M'], c['r_hm'], c['r_t']), gf(c), rr)
        ok = np.isfinite(mo) & (mo > 0)
        dd.append(so - (wslope(rr[ok], mo[ok])[0] if ok.sum() >= 3 else np.nan))
    dd = np.array(dd); ok = np.isfinite(dd)
    return float(np.sum(dd[ok] * WW[ok]) / np.sum(WW[ok])), int((~ok).sum())
base, _ = mismatch(lambda c: g_newton); mond, _ = mismatch(lambda c: make_g_mond(233.0**2 / (c['R_GC'] * 1000.0)))
st = lambda v: 'ok' if abs(v) <= abs(mond) else ('marg' if abs(v) < 2 * abs(mond) else 'EXCL')
print(f"PLUMMER mass model: Newton {base:+.3f}  MOND+EFE {mond:+.3f}")
print(f"{'rho_c':>9s} {'L2':>8s} {'L3':>8s} {'#g<0':>5s} {'min g/gs':>9s} {'nan':>4s}")
for rc in W.RC_GRID:
    v2, _ = mismatch(lambda c, rc=rc: W.make_l2(rc)); stats = []
    v3, nn = mismatch(lambda c, rc=rc: W.make_l3(rc, stats=stats))
    print(f"{rc:9.4g} {v2:+8.3f}{st(v2)[0]} {v3:+8.3f}{st(v3)[0]} {sum(s<0 for s in stats):5d} {min(stats):9.2f} {nn:4d}")
