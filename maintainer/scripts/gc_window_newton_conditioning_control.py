#!/usr/bin/env python3
"""
Control on the globular-cluster outer-slope test: is the exclusion window conditioned on Newton
through the catalogue mass (Arm A) or the catalogue half-MASS radius (Arm B)?

PREREG: gc_window_newton_conditioning_control_PREREG.md  (site commit d9d7beb, before this file).
Reuses the explorer's solver and laws unchanged (explorer/findings/scripts/gc_slope_with_mond.py).
"""
import json, math, os, sys
import numpy as np

HERE = os.path.dirname(os.path.abspath(__file__))
EXPL = os.path.normpath(os.path.join(HERE, '..', '..', 'explorer', 'findings', 'scripts'))
sys.path.insert(0, EXPL)
from gc_slope_with_mond import (sigma_los_general, g_newton, make_g_mond, make_g_dens,
                                wslope, V_MW)
from gc_knee_jeans_test import ModHubble, Plummer, C_floored

OUTER = 3.0
FGRID = np.geomspace(0.03, 3.0, 61)
LAWS = ('newt', 'mond', 'mond_noefe', 'dens_0161')
LABEL = dict(newt='Newtonian', mond='MOND simple mu + EFE', mond_noefe='MOND simple mu, EFE off',
             dens_0161='density, knee 0.161 (floored)')


class Scaled:
    """Wrap a mass model with a mass scale f (rho and Menc both scale)."""
    def __init__(self, base, f): self.b, self.f, self.r_t = base, f, base.r_t
    def rho(self, r): return self.f*self.b.rho(r)
    def Menc(self, r): return self.f*self.b.Menc(r)


class PlummerHL(Plummer):
    """Plummer with a = projected half-light radius (photometric), not r_hm/1.30477."""
    def __init__(self, M, r_hl, r_t):
        Plummer.__init__(self, M, r_hl*1.30477, r_t)


def load():
    d = json.load(open(os.path.join(EXPL, 'baumgardt_gc.json')))
    cl, pr = d['clusters'], d['profiles']
    out = []
    for name, p in pr.items():
        c = cl.get(name)
        if not c or not all(c.get(k) for k in ('M', 'r_hm', 'r_t', 'r_c', 'R_sun', 'R_GC', 'sigma0')):
            continue
        D = c['R_sun']*1000.0
        b = [(x['r_arcsec']*D/206265.0, x['sigma'], 0.5*(x['e_up']+x['e_low'])) for x in p]
        b = sorted(x for x in b if x[2] > 0 and x[0] < c['r_t']*0.98)
        if len(b) < 10: continue
        rr, ss, ee = (np.array(v) for v in zip(*b))
        m = rr > rr.max()/OUTER
        if m.sum() < 5: continue
        out.append((name, c, rr, ss, ee, m))
    return out


def laws_for(c):
    g_ext = V_MW**2/(c['R_GC']*1000.0)
    return dict(newt=g_newton, mond=make_g_mond(g_ext), mond_noefe=make_g_mond(0.0),
                dens_0161=make_g_dens(0.161, C_floored))


def slope_of(model, gf, R):
    mo = sigma_los_general(model, gf, R)
    ok = np.isfinite(mo) & (mo > 0)
    return wslope(R[ok], mo[ok])[0] if ok.sum() >= 3 else np.nan


def best_f(base, gf, rr, ss, ee):
    best = (np.inf, 1.0)
    for f in FGRID:
        mo = sigma_los_general(Scaled(base, f), gf, rr, ngrid=300)
        ok = np.isfinite(mo) & (mo > 0)
        if ok.sum() < 5: continue
        chi = float(np.sum(((ss[ok]-mo[ok])/ee[ok])**2))
        if chi < best[0]: best = (chi, f)
    return best[1]


def run(data, make_model, fit_mass):
    rec = []
    for name, c, rr, ss, ee, m in data:
        base = make_model(c)
        if base is None: continue
        w = 1.0/(ee[m]/ss[m])**2
        s_obs, e_obs = wslope(rr[m], ss[m], w)
        row = dict(name=name, obs=s_obs, e=e_obs)
        for k, gf in laws_for(c).items():
            f = best_f(base, gf, rr, ss, ee) if fit_mass else 1.0
            row[k] = slope_of(Scaled(base, f), gf, rr[m])
            row['f_'+k] = f
        rec.append(row)
    return rec


def table(rec, title):
    arr = lambda k: np.array([x[k] for x in rec], dtype=float)
    w = 1.0/arr('e')**2
    print(f"\n=== {title}   N = {len(rec)} ===")
    print(f"{'dynamics':34s}{'<obs-pred>':>12s}{'+-':>8s}{'ratio':>8s}{'<f>':>8s}{'med f':>8s}{'f@edge':>8s}")
    res = {}
    for k in LAWS:
        dd = arr('obs') - arr(k); ok = np.isfinite(dd)
        res[k] = np.sum(dd[ok]*w[ok])/np.sum(w[ok])
    sd = math.sqrt(1/np.sum(w))
    for k in LAWS:
        f = arr('f_'+k)
        edge = int(np.sum((f <= FGRID[0]*1.001) | (f >= FGRID[-1]*0.999)))
        print(f"{LABEL[k]:34s}{res[k]:+12.3f}{sd:8.3f}{abs(res[k]/res['newt']):8.2f}"
              f"{f.mean():8.2f}{np.median(f):8.2f}{edge:8d}")
    return res


def verdict(R):
    return 'SUPPORTED' if R < 2.0 else ('REFUTED' if R >= 3.0 else 'PARTIAL')


def main():
    data = load()
    king = lambda c: ModHubble(c['M'], c['r_c'], c['r_t'])
    plum = lambda c: Plummer(c['M'], c['r_hm'], c['r_t'])
    plhl = lambda c: PlummerHL(c['M'], c['r_hl'], c['r_t']) if c.get('r_hl') else None

    print("IDENTITY CONTROL (King, catalogue M): expect -0.057 / -0.093 / -0.245 / -0.211, N = 42")
    r0 = table(run(data, king, False), 'King, f = 1 (published configuration)')
    want = dict(newt=-0.057, mond=-0.093, mond_noefe=-0.245, dens_0161=-0.211)
    ok = all(abs(round(r0[k], 3) - want[k]) < 5e-4 for k in want) and len(data) == 42
    print("IDENTITY:", "PASS" if ok else "FAIL")
    if not ok:
        print("identity failed -- nothing below is to be read"); sys.exit(1)

    rA = table(run(data, king, True), 'ARM A: King, mass scale refit under each law')
    print(f"  Newtonian-row internal control (slope is f-independent): "
          f"{r0['newt']:+.4f} -> {rA['newt']:+.4f}")
    p0 = table(run(data, plum, False), 'Plummer baseline (a = r_hm/1.30477), f = 1')
    pB = table(run(data, plhl, False), 'ARM B: Plummer photometric (a = r_hl), f = 1')
    pAB = table(run(data, plhl, True), 'ARM AxB: Plummer photometric + mass refit')
    pA = table(run(data, plum, True), 'Plummer (r_hm) + mass refit  [reported, not registered]')

    print("\n=== PRE-FIXED VERDICT (King, Arm A) ===")
    for k in ('dens_0161', 'mond_noefe', 'mond'):
        R0, RA = abs(r0[k]/r0['newt']), abs(rA[k]/rA['newt'])
        print(f"  {LABEL[k]:34s} R: {R0:.2f} -> {RA:.2f}  ({100*(RA-R0)/R0:+.0f}%)"
              + (f"   critique {verdict(RA)}" if k == 'dens_0161' else ''))
    print("  Arm B (Plummer): density-law R "
          f"{abs(p0['dens_0161']/p0['newt']):.2f} -> {abs(pB['dens_0161']/pB['newt']):.2f};"
          f" residual {p0['dens_0161']:+.3f} -> {pB['dens_0161']:+.3f};"
          f" Newtonian residual {p0['newt']:+.3f} -> {pB['newt']:+.3f}")
    print("  (Plummer ratios are fragile when the Newtonian residual is near zero; read residuals.)")


if __name__ == '__main__':
    main()
