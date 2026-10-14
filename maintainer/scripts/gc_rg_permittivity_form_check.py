#!/usr/bin/env python3
"""
Maintainer 2026-10-14 -- does "Refracted Gravity is not excluded by the GC slope test"
survive the published form of RG's permittivity?

The explorer's gc_knee_bound.py::fine() evaluates RG as
    eps = e0 + (1-e0) * [1 + tanh( (log10 rho - log10 rho_c) / Q )] / 2
i.e. the log DIVIDED by Q.  The archive's verbatim read of M&D 2016 Eq. (4.1)
(Synchronism/simulations/publisher_20260827_rg_floor_is_not_universal.py) is
    eps = e0 + (1-e0) * (1/2) * { tanh[ log (rho/rho_c)^Q ] + 1 }
i.e. the log MULTIPLIED by Q, base unstated (ln in M&D sec 3.4 and Cesare+2020).
For Q = 0.47 the three readings differ in steepness per decade: /Q 2.13, Q*ln 1.08, Q*log10 0.47.

Predictions written BEFORE running (2026-10-14):
  P1  identity control: the /Q row reproduces the published -0.070 (Cesare+2022 E0 mean).
  P2  Q*ln reading: still 'ok' (|obs-pred| <= |MOND+EFE| = 0.093).
  P3  Q*log10 reading: gentler switch, more boost at GC densities; drifts toward 'marginal'.
Decision rule (as gc_knee_bound.py): ok if |v| <= |MOND+EFE|; marginal if < 2x; else EXCLUDED.
"""
import sys, math, json, os
import numpy as np
EXPL = '/home/dp/ai-workspace/synchronism-site/explorer/findings/scripts'
sys.path.insert(0, EXPL); os.chdir(EXPL)
from gc_knee_jeans_test import ModHubble
from gc_slope_with_mond import sigma_los_general, make_g_mond, g_newton, wslope

d = json.load(open('baumgardt_gc.json')); cl, pr = d['clusters'], d['profiles']
sel = []
for name, p in pr.items():
    c = cl.get(name)
    if not c or not all(c.get(k) for k in ('M','r_hm','r_t','r_c','R_sun','R_GC','sigma0')): continue
    D = c['R_sun']*1000.0
    b = [(x['r_arcsec']*D/206265.0, x['sigma'], 0.5*(x['e_up']+x['e_low'])) for x in p]
    b = [x for x in b if x[2] > 0 and x[0] < c['r_t']*0.98]; b.sort()
    if len(b) < 10: continue
    rr = np.array([x[0] for x in b]); ss = np.array([x[1] for x in b]); ee = np.array([x[2] for x in b])
    m = rr > rr.max()/3.0
    if m.sum() < 5: continue
    w = 1.0/(ee[m]/ss[m])**2
    sel.append((c, rr[m], ss[m], wslope(rr[m], ss[m], w)))
WW = np.array([1/s[3][1]**2 for s in sel])
def mismatch(gf):
    dd = []
    for c, rr, ss, (so, eo) in sel:
        mo = sigma_los_general(ModHubble(c['M'], c['r_c'], c['r_t']), gf(c), rr)
        ok = np.isfinite(mo) & (mo > 0)
        dd.append(so - (wslope(rr[ok], mo[ok])[0] if ok.sum() >= 3 else np.nan))
    dd = np.array(dd); ok = np.isfinite(dd)
    return np.sum(dd[ok]*WW[ok])/np.sum(WW[ok])
G2C = 6.7699e-23
base = mismatch(lambda c: g_newton)
mond = mismatch(lambda c: make_g_mond(233.0**2/(c['R_GC']*1000.0)))
print(f"N clusters {len(sel)}; Newton {base:+.3f}; MOND+EFE {mond:+.3f}")
def st(v): return 'ok' if abs(v) <= abs(mond) else ('marginal' if abs(v) < 2*abs(mond) else 'EXCLUDED')
forms = {
  '/Q (explorer, control)': lambda lr, lrc, Q: (lr-lrc)/Q,
  'Q*ln (verbatim, ln)'   : lambda lr, lrc, Q: Q*(lr-lrc)*math.log(10),
  'Q*log10 (verbatim, log10)': lambda lr, lrc, Q: Q*(lr-lrc),
}
rows = ((0.089, -24.25, 'E0 mean'), (0.089, -23.97, 'E0 +1sig rho_c'), (0.089, -24.45, 'E0 -1sig rho_c'),
        (0.20, -24.25, 'eps0 0.20'), (0.315, -24.25, 'eps0 = Omega_m'))
out = {}
for fname, arg in forms.items():
    print(f"\n## {fname}")
    for e0, lg, lab in rows:
        lrc = math.log10(10**lg/G2C)
        def gf(c, e0=e0, lrc=lrc, arg=arg):
            def f(gN, rho, r):
                lr = np.log10(np.maximum(rho, 1e-30))
                eps = e0 + (1-e0)*(1+np.tanh(arg(lr, lrc, 0.47)))/2
                return gN/eps
            return f
        v = mismatch(gf); out[f"{fname}|{lab}"] = v
        print(f"  {lab:16s} rho_c = {10**lrc:8.4f}  obs-pred {v:+.3f}  {st(v)}")
