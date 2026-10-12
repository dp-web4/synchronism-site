#!/usr/bin/env python3
"""Wiring x keying x floor cells on real SPARC (explorer 2026-10-12). PREREG: wiring_keying_matrix_sparc_PREREG.md
C(y) = f + (1-f) tanh(gamma ln(1+y)),  y = (keying variable)/a'.
Cells: division (g_obs = g_bar/C) or multiplication (g_obs = C g_bar); keyed on g_bar (explicit) or g_obs (implicit).
"""
import numpy as np
from scipy.optimize import minimize

MRT = "/home/dp/ai-workspace/Synchronism/simulations/sparc_real_data/MassModels_Lelli2016c.mrt"
KPC, KMS = 3.0856775814913673e19, 1e3
OM, OB = 0.315, 0.049

def load():
    gid, go, gb = [], [], []
    for line in open(MRT):
        p = line.split()
        if len(p) != 10: continue
        try: v = list(map(float, p[1:]))
        except ValueError: continue
        D, R, Vo, eVo, Vg, Vd, Vb, _, _ = v
        if R <= 0 or Vo <= 0 or eVo/Vo > 0.10: continue
        Vbar2 = (Vg*abs(Vg) + 0.5*Vd*abs(Vd) + 0.7*Vb*abs(Vb))*KMS**2
        if Vbar2 <= 0: continue
        Rm = R*KPC
        gid.append(p[0]); gb.append(Vbar2/Rm); go.append((Vo*KMS)**2/Rm)
    return np.array(gid), np.array(go), np.array(gb)

def C(y, g, f): return f + (1-f)*np.tanh(g*np.log1p(y))

def bisect(F, lo, hi, n=80):
    # vectorised bisection in log space; F(lo)<0<F(hi) assumed
    llo, lhi = np.log(lo), np.log(hi)
    for _ in range(n):
        m = 0.5*(llo+lhi); s = F(np.exp(m)) < 0
        llo = np.where(s, m, llo); lhi = np.where(s, lhi, m)
    return np.exp(0.5*(llo+lhi))

def predict(cell, gb, a, g, f):
    wiring, key = cell
    if key == 'gbar':
        c = C(gb/a, g, f)
        return gb/c if wiring == 'div' else gb*c
    if wiring == 'div':   # g_bar = g_obs * C(g_obs/a): go*C increasing in go
        hi = gb/max(f, 1e-6)*1.01 + 1e3*a
        return bisect(lambda x: x*C(x/a, g, f) - gb, gb, hi)
    # multiplication keyed on g_obs: g_obs = g_bar*C(g_obs/a); largest root in (0, g_bar]
    return bisect(lambda x: x - gb*C(x/a, g, f), gb*1e-12, gb)

def ssr(go, pred): r = np.log10(go) - np.log10(pred); return r

def fit(cell, go, gb, f=None, starts=None):
    free_f = f is None
    def obj(p):
        la, g = p[0], p[1]; ff = p[2] if free_f else f
        if not (-13 < la < -8 and 0.02 < g < 20 and 0 <= ff < 0.99): return 1e12
        return np.sum(ssr(go, predict(cell, gb, 10**la, g, ff))**2)
    best = None
    for la0 in (-11.5, -10.3, -9.5):
        for g0 in (0.3, 0.5, 1.0, 3.0):
            x0 = [la0, g0] + ([0.05] if free_f else [])
            r = minimize(obj, x0, method='Nelder-Mead', options={'xatol':1e-6,'fatol':1e-10,'maxiter':6000,'maxfev':6000})
            if best is None or r.fun < best.fun: best = r
    p = best.x; ff = p[2] if free_f else f
    return dict(a=10**p[0], g=p[1], f=ff, ssr=best.fun, k=len(p),
                res=ssr(go, predict(cell, gb, 10**p[0], p[1], ff)))

def main():
    gid, go, gb = load(); N = len(go); gals = np.unique(gid)
    print(f"N = {N} points, {len(gals)} galaxies")
    newton = np.log10(go) - np.log10(gb)
    print(f"Newton (C=1) RMS = {np.sqrt(np.mean(newton**2)):.4f} dex")
    cells = [
        ('R   div  g_obs f=0',    ('div','gobs'), 0.0),
        ('P2  div  g_bar f=0',    ('div','gbar'), 0.0),
        ('    div  g_bar f=Ob',   ('div','gbar'), OB),
        ('P3  div  g_bar f=Om',   ('div','gbar'), OM),
        ('    div  g_obs f=Ob',   ('div','gobs'), OB),
        ('P4  div  g_obs f=Om',   ('div','gobs'), OM),
        ('P6  div  g_obs f free', ('div','gobs'), None),
        ('    div  g_bar f free', ('div','gbar'), None),
        ('P5  mul  g_bar f=0',    ('mul','gbar'), 0.0),
        ('P5  mul  g_bar f=Om',   ('mul','gbar'), OM),
        ('P5  mul  g_obs f=0',    ('mul','gobs'), 0.0),
    ]
    res = {}
    for name, cell, f in cells:
        r = fit(cell, go, gb, f); res[name] = r
    R = res['R   div  g_obs f=0']
    bic = lambda r: N*np.log(r['ssr']/N) + r['k']*np.log(N)
    rng = np.random.default_rng(20261012)
    idx = {g: np.where(gid == g)[0] for g in gals}
    B = 2000; samples = [np.concatenate([idx[g] for g in rng.choice(gals, len(gals))]) for _ in range(B)]
    print(f"\n{'cell':24s} {'a_prime':>10s} {'gamma':>7s} {'f':>6s} {'RMS':>7s} {'dBIC_pts':>9s} {'boot95':>18s} {'R wins gal':>10s}")
    for name, cell, f in cells:
        r = res[name]
        rms = np.sqrt(r['ssr']/N); d = bic(r) - bic(R)
        # galaxy bootstrap of the point-level dBIC at fixed fitted params (shape-only resampling)
        dv = []
        for s in samples:
            n = len(s); sr = np.sum(r['res'][s]**2); s0 = np.sum(R['res'][s]**2)
            dv.append(n*np.log(sr/s0) + (r['k']-R['k'])*np.log(n))
        lo, hi = np.percentile(dv, [2.5, 97.5])
        wins = np.mean([np.sqrt(np.mean(R['res'][idx[g]]**2)) < np.sqrt(np.mean(r['res'][idx[g]]**2)) for g in gals])
        print(f"{name:24s} {r['a']:10.3e} {r['g']:7.3f} {r['f']:6.3f} {rms:7.4f} {d:+9.1f} [{lo:+8.0f},{hi:+8.0f}] {wins:10.2f}")
    # deep-regime diagnostic for P2: binned median residual
    r = res['P2  div  g_bar f=0']
    print("\nP2 residual (log g_obs - log pred) by log g_bar bin:")
    for lo in np.arange(-12.5, -8.4, 0.5):
        m = (np.log10(gb) >= lo) & (np.log10(gb) < lo+0.5)
        if m.sum() > 5:
            print(f"  [{lo:5.1f},{lo+0.5:5.1f}) n={m.sum():4d}  P2 med {np.median(r['res'][m]):+.3f}   R med {np.median(R['res'][m]):+.3f}")

if __name__ == '__main__':
    main()
