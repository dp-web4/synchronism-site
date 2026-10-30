#!/usr/bin/env python3
"""
POST-HOC (explorer 2026-10-30), after gc_per_law_refit.py ran. Not registered.
(1) Data-cancellation control: the paired difference d_A - d_B = slope_B(model) - slope_A(model); replace the observed
    slopes by shuffled ones and show the difference (and its bootstrap sd) is unchanged.
(2) Level-based scoring (obs - model against zero, cluster bootstrap) for the EFE-free rows (MOND EFE-off, compander
    gamma=0.9) under arm A28, arm B (Harris r_t, M fixed) and arm C (per-law refit) -- the 10.6 sigma corner closure was
    scored on the data-free difference.
(3) Arm C with beta restricted to {-0.3, 0} (observed GC outskirts are tangential; Vasiliev & Baumgardt 2021).
"""
import math, numpy as np
src = open('gc_per_law_refit.py').read().split('# ------------------------------------------------------------------ arm A')[0]
exec(src)
from gc_slope_with_mond import A0
A0P_ID = 1.1e-10/1.2e-10*A0
def make_compander_noefe(gamma):
    a0p = gamma*A0P_ID
    def f(gN, rho, r):
        gN = np.array(gN, dtype=float); lo = gN.copy(); hi = gN*200 + 1e-12
        for _ in range(90):
            mid = 0.5*(lo+hi); m = mid*np.tanh(gamma*np.log1p(mid/a0p)) < gN
            lo = np.where(m, mid, lo); hi = np.where(m, hi, mid)
        return 0.5*(lo+hi)
    return f
LAWS['MOND EFE-off'] = lambda c: make_g_mond(0.0)
LAWS['comp g=0.9 EFE-off'] = lambda c: make_compander_noefe(0.9)

S28 = [S for S in sel if not S['cc']]; N = len(S28)
W = np.array([1/S['obs'][1]**2 for S in S28])
BOOT = np.random.default_rng(1).integers(0, N, size=(4000, N))
def wmean(x, w): ok = np.isfinite(x); return np.sum(x[ok]*w[ok])/np.sum(w[ok])
def bsd(x): return np.std([wmean(x[i], W[i]) for i in BOOT])

def arm_models(arm, betas=BETAS):
    """return dict law -> (model slopes array, chi2 array or None)"""
    out = {}
    for k, lf in LAWS.items():
        sl, ch = [], []
        for S in S28:
            gf = lf(S['c'])
            if arm == 'A':
                mo = sigma_beta(S['c']['M'], S['c']['r_c'], S['c']['r_t'], gf, S['r'], 0.0); c2 = chi2(S, mo)
            elif arm == 'B':
                mo = sigma_beta(S['c']['M'], S['rc_H'], max(S['rt_H'], 1.05*S['rmax']), gf, S['r'], 0.0); c2 = chi2(S, mo)
            else:
                best = None
                for fr in RT_GRID:
                    rt = max(fr*S['rt_H'], 1.05*S['rmax']); pen = (math.log10(rt/S['rt_H'])/PRIOR_DEX)**2
                    for bt in betas:
                        c2, lfm, m2 = fit_M(S, gf, S['c']['r_c'], rt, bt)
                        if best is None or c2+pen < best[0]: best = (c2+pen, m2)
                c2, mo = best
            ok = np.isfinite(mo) & (mo > 0)
            sl.append(wslope(S['r'][ok], mo[ok])[0]); ch.append(c2)
        out[k] = (np.array(sl), np.array(ch))
    return out

obs = np.array([S['obs'][0] for S in S28])
for arm, betas in (('A', BETAS), ('B', BETAS), ('C', BETAS), ('C', (-0.3, 0.0))):
    M = arm_models(arm, betas)
    print(f"\n=== ARM {arm}" + (f" beta in {betas}" if arm == 'C' else ""))
    print("  LEVEL (obs - model) vs zero, cluster bootstrap; |z| is how far the law misses the observed outer slope")
    for k, (sl, ch) in M.items():
        L = obs - sl; v = wmean(L, W); s = bsd(L)
        print(f"   {k:20s} {v:+.4f} +/- {s:.4f}  z={v/s:+.1f}   sum chi2 {ch.sum():8.1f}")
    print("  PAIRED d(A) - d(Newton) with real obs, and with obs shuffled across clusters (data-cancellation control)")
    sh = np.random.default_rng(7).permutation(obs)
    for k in M:
        if k == 'Newton': continue
        dr = (obs - M[k][0]) - (obs - M['Newton'][0]); ds = (sh - M[k][0]) - (sh - M['Newton'][0])
        dc = M[k][1] - M['Newton'][1]; sc = np.std([dc[i].sum() for i in BOOT])
        print(f"   {k:20s} real {wmean(dr, W):+.4f}+/-{bsd(dr):.4f}  shuffled {wmean(ds, W):+.4f}+/-{bsd(ds):.4f}"
              f"   dchi2 vs Newton {dc.sum():+8.1f} +/- {sc:6.1f} ({dc.sum()/sc:+.1f} sig)")
