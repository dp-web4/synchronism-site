#!/usr/bin/env python3
"""
Like-for-like slope test: Newtonian vs MOND(+EFE) vs the density-keyed law, all
through the SAME isotropic Jeans solver, the same mass model, the same radii,
the same weighting.  Plus the systematics budget the comparison has to survive.
"""
import json, math, sys
import numpy as np
from gc_knee_jeans_test import ModHubble, Plummer, C_floored, C_unfloored

G = 4.30091e-3
A0 = 3.702          # (km/s)^2 / pc
V_MW = 233.0

def mu_simple(x): return x/(1.0+x)

def sigma_los_general(model, gfun, Rbins, ngrid=700):
    r_t = model.r_t
    r = np.geomspace(max(1e-3, r_t*1e-5), r_t*(1-1e-9), ngrid)
    rho = np.array([model.rho(x) for x in r])
    Menc = np.array([model.Menc(x) for x in r])
    gN = G*Menc/r**2
    g = gfun(gN, rho, r)
    integ = rho*g
    dP = (integ[:-1]+integ[1:])/2*np.diff(r)
    P = np.concatenate([np.cumsum(dP[::-1])[::-1], [0.0]])
    out = np.zeros(len(Rbins))
    for i, R in enumerate(Rbins):
        m = r > R
        if m.sum() < 5: out[i] = np.nan; continue
        rr, Pr, rhor = r[m], P[m], rho[m]
        w = rr/np.sqrt(np.maximum(rr**2 - R**2, 1e-12))
        num = np.trapz(2*Pr*w, rr); den = np.trapz(2*rhor*w, rr)
        out[i] = math.sqrt(max(num/den, 0.0)) if den > 0 else np.nan
    return out

def g_newton(gN, rho, r): return gN

def make_g_mond(g_ext):
    def f(gN, rho, r):
        g = np.array(gN, dtype=float)
        lo = np.array(gN); hi = np.array(gN)*60 + 1e-12
        for _ in range(80):
            mid = 0.5*(lo+hi)
            m = mid*mu_simple((mid+g_ext)/A0) < gN
            lo = np.where(m, mid, lo); hi = np.where(m, hi, mid)
        return 0.5*(lo+hi)
    return f

def make_g_dens(rho_crit, law):
    def f(gN, rho, r): return gN/law(rho/rho_crit)
    return f

def wslope(r, s, w=None):
    X, Y = np.log10(r), np.log10(s)
    if w is None: w = np.ones_like(X)
    W, Sx, Sy = w.sum(), (w*X).sum(), (w*Y).sum()
    Sxx, Sxy = (w*X*X).sum(), (w*X*Y).sum()
    den = W*Sxx - Sx*Sx
    if den <= 0: return np.nan, np.nan
    return (W*Sxy - Sx*Sy)/den, math.sqrt(W/den)

def main():
    d = json.load(open('baumgardt_gc.json'))
    cl, pr = d['clusters'], d['profiles']
    MODEL = sys.argv[1] if len(sys.argv) > 1 else 'king'
    OUTER = float(sys.argv[2]) if len(sys.argv) > 2 else 3.0
    TYPE  = sys.argv[3] if len(sys.argv) > 3 else 'all'
    rec = []
    for name, p in pr.items():
        c = cl.get(name)
        if not c or not all(c.get(k) for k in ('M','r_hm','r_t','r_c','R_sun','R_GC','sigma0')):
            continue
        D = c['R_sun']*1000.0
        b = [(x['r_arcsec']*D/206265.0, x['sigma'], 0.5*(x['e_up']+x['e_low']), x['type'])
             for x in p]
        b = [x for x in b if x[2] > 0 and x[0] < c['r_t']*0.98]
        if TYPE != 'all': b = [x for x in b if x[3].upper().startswith(TYPE.upper())]
        b.sort()
        if len(b) < 10: continue
        rr = np.array([x[0] for x in b]); ss = np.array([x[1] for x in b])
        ee = np.array([x[2] for x in b])
        m = rr > rr.max()/OUTER
        if m.sum() < 5: continue
        w = 1.0/(ee[m]/ss[m])**2
        s_obs, e_obs = wslope(rr[m], ss[m], w)
        mod = (ModHubble(c['M'], c['r_c'], c['r_t']) if MODEL == 'king'
               else Plummer(c['M'], c['r_hm'], c['r_t']))
        g_ext = V_MW**2/(c['R_GC']*1000.0)
        preds = {}
        for lab, gf in (('newt', g_newton),
                        ('mond', make_g_mond(g_ext)),
                        ('mond_noefe', make_g_mond(0.0)),
                        ('dens_0161', make_g_dens(0.161, C_floored)),
                        ('dens_avs', make_g_dens(0.029*c['sigma0']**2, C_floored)),
                        ('dens_avh', make_g_dens(0.029*220.0**2, C_floored)),
                        ('dens_0161_nf', make_g_dens(0.161, C_unfloored))):
            mo = sigma_los_general(mod, gf, rr[m])
            ok = np.isfinite(mo) & (mo > 0)
            preds[lab] = wslope(rr[m][ok], mo[ok])[0] if ok.sum() >= 3 else np.nan
        rec.append(dict(name=name, R_GC=c['R_GC'], n=int(m.sum()), obs=s_obs, e=e_obs,
                        g_ext_a0=g_ext/A0, **preds))
    arr = lambda k: np.array([x[k] for x in rec], dtype=float)
    print(f"# mass model = {MODEL}  outer factor = {OUTER}  tracer = {TYPE}  N = {len(rec)} clusters")
    print(f"# weighted mean measured outer slope = {np.sum(arr('obs')/arr('e')**2)/np.sum(1/arr('e')**2):+.3f}")
    print()
    print(f"{'dynamics':34s}{'<obs-pred>':>12s}{'+-':>8s}{'sigma':>8s}{'rms':>8s}{'<pred>':>9s}")
    w = 1.0/arr('e')**2
    base = None
    for k, lab in (('newt', 'Newtonian'),
                   ('mond', 'MOND simple mu + EFE'),
                   ('mond_noefe', 'MOND simple mu, EFE off'),
                   ('dens_avh', 'density, A V^2 (V=220 host)'),
                   ('dens_0161', 'density, knee 0.161 (measured)'),
                   ('dens_avs', 'density, A V^2 (V=sigma_0)'),
                   ('dens_0161_nf', 'density, knee 0.161, unfloored')):
        dd = arr('obs') - arr(k)
        ok = np.isfinite(dd)
        mn = np.sum(dd[ok]*w[ok])/np.sum(w[ok]); sd = math.sqrt(1/np.sum(w[ok]))
        rms = math.sqrt(np.mean(dd[ok]**2))
        print(f"{lab:34s}{mn:+12.3f}{sd:8.3f}{abs(mn/sd):8.1f}{rms:8.3f}"
              f"{np.mean(arr(k)[ok]):9.3f}")
        if k == 'newt': base = abs(mn)
    print(f"\n  Newtonian's own offset ({base:.3f}) is the systematics budget: anisotropy, mass")
    print("  segregation and the mass model are all unmodelled here and all push this way.")
    for k, lab in (('mond','MOND+EFE'), ('dens_0161','density knee 0.161'),
                   ('dens_avs','density A V^2 sigma_0')):
        dd = arr('obs') - arr(k); ok = np.isfinite(dd)
        mn = abs(np.sum(dd[ok]*w[ok])/np.sum(w[ok]))
        print(f"    {lab:24s} misses by {mn:.3f} = {mn/base:4.1f}x the Newtonian residual")
    # jackknife over clusters on the two headline contrasts
    for k, lab in (('mond','MOND+EFE'), ('dens_0161','density 0.161'), ('dens_avs','density AV2sig')):
        dd = arr('obs') - arr(k); ok = np.isfinite(dd)
        vals = []
        for i in range(len(rec)):
            sel = ok.copy(); sel[i] = False
            vals.append(np.sum(dd[sel]*w[sel])/np.sum(w[sel]))
        vals = np.array(vals)
        print(f"  jackknife {lab:16s}: mean {vals.mean():+.3f}, "
              f"max single-cluster shift {np.max(np.abs(vals - vals.mean())):.4f}")
    json.dump(rec, open(f'gc_slope_with_mond_{MODEL}_{TYPE}.json','w'), indent=0)

if __name__ == '__main__':
    main()
