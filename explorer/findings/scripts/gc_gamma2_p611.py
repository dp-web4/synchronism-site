#!/usr/bin/env python3
"""
S611 P611.2 as it was actually registered (2026-02-17):

  "Globular cluster internal dynamics should follow gamma = 2 (member stars are
   resolved individually), despite the cluster acting as N_corr = 1 from the
   galaxy's perspective.  This tests whether gamma resets at each Markov blanket
   boundary."

gamma = 2 <=> N_corr = (2/gamma)^2 = 1: every star is its own coherence unit.
The galaxy sector uses gamma = 0.489 (N_corr ~ 16.7).  So the registered
prediction is a DIFFERENT function, not just a different knee, and it must be
adjudicated on its own terms.

Same statistic as gc_slope_with_mond.py: error-weighted outer d log sigma/d log r.
"""
import json, math
import numpy as np
from gc_knee_jeans_test import ModHubble
from gc_slope_with_mond import sigma_los_general, make_g_mond, g_newton, wslope

OMEGA_M = 0.315
G2C = 6.7699e-23

def make_C(gamma, floored=True):
    if floored:
        return lambda x: OMEGA_M + (1-OMEGA_M)*np.tanh(gamma*np.log1p(x))
    return lambda x: np.tanh(gamma*np.log1p(x))

def main():
    d = json.load(open('baumgardt_gc.json')); cl, pr = d['clusters'], d['profiles']
    sel = []
    for name, p in pr.items():
        c = cl.get(name)
        if not c or not all(c.get(k) for k in ('M','r_hm','r_t','r_c','R_sun','R_GC','sigma0')):
            continue
        D = c['R_sun']*1000.0
        b = [(x['r_arcsec']*D/206265.0, x['sigma'], 0.5*(x['e_up']+x['e_low'])) for x in p]
        b = [x for x in b if x[2] > 0 and x[0] < c['r_t']*0.98]; b.sort()
        if len(b) < 10: continue
        rr = np.array([x[0] for x in b]); ss = np.array([x[1] for x in b]); ee = np.array([x[2] for x in b])
        m = rr > rr.max()/3.0
        if m.sum() < 5: continue
        w = 1.0/(ee[m]/ss[m])**2
        sel.append((c, rr[m], wslope(rr[m], ss[m], w)))
    WW = np.array([1/s[2][1]**2 for s in sel])
    def mismatch(gf):
        dd = []
        for c, rr, (so, eo) in sel:
            mo = sigma_los_general(ModHubble(c['M'], c['r_c'], c['r_t']), gf(c), rr)
            ok = np.isfinite(mo) & (mo > 0)
            dd.append(so - (wslope(rr[ok], mo[ok])[0] if ok.sum() >= 3 else np.nan))
        dd = np.array(dd); ok = np.isfinite(dd)
        return np.sum(dd[ok]*WW[ok])/np.sum(WW[ok]), math.sqrt(1/np.sum(WW[ok]))
    base, sd = mismatch(lambda c: g_newton)
    mond, _ = mismatch(lambda c: make_g_mond(233.0**2/(c['R_GC']*1000.0)))
    print(f"# N = {len(sel)} clusters, king-like mass model, outer factor 3")
    print(f"# Newtonian {base:+.3f} +- {sd:.3f}   MOND+EFE {mond:+.3f}\n")
    print(f"{'gamma':>7s}{'N_corr':>8s}{'rho_crit':>11s}{'floor':>7s}{'obs-pred':>11s}{'x Newt':>8s}{'status':>11s}")
    rows = []
    for gamma in (0.489, 2.0):
        ncorr = (2/gamma)**2
        for rc, lab in ((0.0083, 'RG'), (0.161, 'measured'), (1404.0, 'A V^2 220')):
            for fl in (True, False):
                Cf = make_C(gamma, fl)
                v, _ = mismatch(lambda c, rc=rc, Cf=Cf: (lambda gN, rho, r: gN/Cf(rho/rc)))
                st = ('ok' if abs(v) <= abs(mond) else
                      'marginal' if abs(v) < 2*abs(mond) else 'EXCLUDED')
                print(f"{gamma:7.3f}{ncorr:8.1f}{rc:11.4g}{'yes' if fl else 'no':>7s}"
                      f"{v:+11.3f}{abs(v)/abs(base):8.1f}{st:>11s}")
                rows.append((gamma, rc, fl, v))
    # where is the gamma=2 exclusion edge?
    print("\n# gamma = 2 (P611.2 as registered), floored -- scan of the knee:")
    print(f"{'rho_c [Msun/pc3]':>18s}{'log10 g/cm3':>13s}{'obs-pred':>11s}{'status':>11s}")
    Cf = make_C(2.0, True)
    for rc in [1e-4, 1e-3, 0.003, 0.0083, 0.02, 0.05, 0.161, 1.0, 10.0, 100.0, 1404.0]:
        v, _ = mismatch(lambda c, rc=rc: (lambda gN, rho, r: gN/Cf(rho/rc)))
        st = ('ok' if abs(v) <= abs(mond) else
              'marginal' if abs(v) < 2*abs(mond) else 'EXCLUDED')
        print(f"{rc:18.4g}{math.log10(rc*G2C):13.2f}{v:+11.3f}{st:>11s}")
    print("\n# P611.2 verdict is read off the gamma=2 rows: the registered prediction is that")
    print("# gamma RESETS to 2 at the cluster's Markov-blanket boundary.  Compare against the")
    print("# gamma=0.489 rows (no reset) and against Newtonian / MOND+EFE.")

if __name__ == '__main__':
    main()
