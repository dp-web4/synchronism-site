#!/usr/bin/env python3
"""
Turn the globular-cluster slope test into a framework-independent bound.

Any theory of the form  g = g_N / C(rho),  C(rho) = C_min + (1-C_min) tanh(gamma ln(1+rho/rho_c))
is excluded by the Galactic globular clusters wherever its knee rho_c is high
enough to sit inside the region where sigma(r) is measured.  Scan rho_c and report
the weighted-mean slope mismatch, with the Newtonian mismatch as the systematics
budget and the MOND+EFE mismatch as the reference for a theory that is not
excluded.
"""
import json, math
import numpy as np
from gc_knee_jeans_test import ModHubble
from gc_slope_with_mond import sigma_los_general, make_g_dens, make_g_mond, g_newton, wslope

OMEGA_M, GAMMA = 0.315, 0.489
def C_floored(x): return OMEGA_M + (1-OMEGA_M)*np.tanh(GAMMA*np.log1p(x))

def main():
    d = json.load(open('baumgardt_gc.json'))
    cl, pr = d['clusters'], d['profiles']
    sel = []
    for name, p in pr.items():
        c = cl.get(name)
        if not c or not all(c.get(k) for k in ('M','r_hm','r_t','r_c','R_sun','R_GC','sigma0')):
            continue
        D = c['R_sun']*1000.0
        b = [(x['r_arcsec']*D/206265.0, x['sigma'], 0.5*(x['e_up']+x['e_low'])) for x in p]
        b = [x for x in b if x[2] > 0 and x[0] < c['r_t']*0.98]
        b.sort()
        if len(b) < 10: continue
        rr = np.array([x[0] for x in b]); ss = np.array([x[1] for x in b]); ee = np.array([x[2] for x in b])
        m = rr > rr.max()/3.0
        if m.sum() < 5: continue
        w = 1.0/(ee[m]/ss[m])**2
        sel.append((c, rr[m], ss[m], w, wslope(rr[m], ss[m], w)))
    print(f"# N = {len(sel)} clusters")
    W = np.array([s[4][0] for s in sel]); WW = np.array([1/s[4][1]**2 for s in sel])

    def mismatch(gf_of_cluster):
        dd = []
        for c, rr, ss, w, (so, eo) in sel:
            mo = sigma_los_general(ModHubble(c['M'], c['r_c'], c['r_t']), gf_of_cluster(c), rr)
            ok = np.isfinite(mo) & (mo > 0)
            dd.append(so - (wslope(rr[ok], mo[ok])[0] if ok.sum() >= 3 else np.nan))
        dd = np.array(dd); ok = np.isfinite(dd)
        return np.sum(dd[ok]*WW[ok])/np.sum(WW[ok]), math.sqrt(1/np.sum(WW[ok]))

    base, sd = mismatch(lambda c: g_newton)
    mond, _ = mismatch(lambda c: make_g_mond(233.0**2/(c['R_GC']*1000.0)))
    print(f"# Newtonian mismatch  = {base:+.3f} +- {sd:.3f}   (the systematics budget)")
    print(f"# MOND+EFE mismatch   = {mond:+.3f}   (a theory the data do not exclude)")
    print(f"\n{'rho_c [Msun/pc3]':>18s}{'[g/cm3]':>12s}{'obs-pred':>11s}{'excess over Newt':>18s}{'verdict':>12s}")
    MS_PC3_TO_GCM3 = 6.7699e-23
    for rc in [1e-5, 1e-4, 1e-3, 3e-3, 1e-2, 3e-2, 0.1, 0.161, 0.3, 1.0, 3.0, 10.0,
               30.0, 100.0, 300.0, 1404.0, 1e4]:
        v, _ = mismatch(lambda c, rc=rc: make_g_dens(rc, C_floored))
        exc = abs(v) - abs(base)
        verdict = ('ok' if abs(v) <= abs(mond)+1e-9 else
                   'excluded' if abs(v) > 2*abs(mond) else 'marginal')
        print(f"{rc:18.5g}{rc*MS_PC3_TO_GCM3:12.3e}{v:+11.3f}{exc:+18.3f}{verdict:>12s}")
    print("\n  'ok'       : slope mismatch no worse than MOND+EFE, which these data admit")
    print("  'excluded' : mismatch more than twice MOND+EFE's, and >2x the Newtonian residual")

if __name__ == '__main__':
    main()

def fine():
    """Fine scan across the lower edge, plus Refracted Gravity evaluated with its
    OWN published parameters (Cesare et al. 2020/2022: eps_0 = 0.089 (+0.038/-0.035),
    Q = 0.47, log10[rho_c/(g/cm^3)] = -24.25 (+0.28/-0.20))."""
    import numpy as np, math, json
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
    print(f"\n\n### FINE SCAN OF THE LOWER EDGE  (Newt {base:+.3f}, MOND+EFE {mond:+.3f})")
    print(f"{'rho_c [Msun/pc3]':>18s}{'log10 g/cm3':>13s}{'obs-pred':>11s}{'status':>12s}")
    for rc in [0.003, 0.005, 0.0083, 0.012, 0.02, 0.03, 0.05, 0.074, 0.11, 0.154, 0.161]:
        v = mismatch(lambda c, rc=rc: (lambda gN, rho, r:
              gN/(0.315 + 0.685*np.tanh(0.489*np.log1p(rho/rc)))))
        st = 'ok' if abs(v) <= abs(mond) else ('marginal' if abs(v) < 2*abs(mond) else 'EXCLUDED')
        print(f"{rc:18.4g}{math.log10(rc*G2C):13.2f}{v:+11.3f}{st:>12s}")
    print("\n### REFRACTED GRAVITY WITH ITS OWN PUBLISHED PERMITTIVITY")
    print("    eps(rho) = eps_0 + (1-eps_0) [1 + tanh( (log10 rho - log10 rho_c)/Q )] / 2   (M&D 2016 Eq. 4.1)")
    for e0, rc_g, Q, lab in ((0.089, 10**-24.25, 0.47, 'Cesare+2022 E0 galaxies (mean)'),
                             (0.089, 10**-23.97, 0.47, '   same, +1sigma rho_c'),
                             (0.089, 10**-24.45, 0.47, '   same, -1sigma rho_c'),
                             (0.20,  10**-24.25, 0.47, 'eps_0 = 0.20 (NGC 1560)'),
                             (0.315, 10**-24.25, 0.47, 'eps_0 = Omega_m (framework floor)')):
        rc = rc_g/G2C
        def gf(c, e0=e0, rc=rc, Q=Q):
            def f(gN, rho, r):
                lr = np.log10(np.maximum(rho, 1e-30))
                eps = e0 + (1-e0)*(1+np.tanh((lr-math.log10(rc))/Q))/2
                return gN/eps
            return f
        v = mismatch(gf)
        st = 'ok' if abs(v) <= abs(mond) else ('marginal' if abs(v) < 2*abs(mond) else 'EXCLUDED')
        print(f"  {lab:36s} rho_c = {rc:8.4f} Msun/pc3   obs-pred {v:+.3f}  {st}")

if __name__ == '__main__':
    fine()
