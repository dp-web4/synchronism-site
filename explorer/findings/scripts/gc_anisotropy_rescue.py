#!/usr/bin/env python3
"""
How much orbital anisotropy would it take to rescue the density-keyed law?

Constant-beta spherical Jeans:
    rho sigma_r^2 (r) = r^{-2beta} int_r^{r_t} s^{2beta} rho(s) g(s) ds
    sigma_los^2(R) = (2/Sigma) int_R^{r_t} (1 - beta R^2/r^2) rho sigma_r^2 r dr / sqrt(r^2-R^2)

beta > 0 = radially anisotropic (STEEPENS sigma_los, could hide a boost)
beta < 0 = tangentially anisotropic (flattens sigma_los)

Direction matters: tidally limited clusters lose radial orbits preferentially and
their outskirts become TANGENTIALLY anisotropic (Baumgardt & Makino 2003;
Tiongco, Vesperini & Varri 2016; Vasiliev & Baumgardt 2021 measure beta < 0 in
the outer parts of Galactic GCs from Gaia PMs).  So the observationally
supported sign of this systematic works AGAINST the density-keyed law, not for it.
"""
import json, math, sys
import numpy as np
from gc_knee_jeans_test import ModHubble, C_floored

G, A0, V_MW = 4.30091e-3, 3.702, 233.0
def mu_simple(x): return x/(1.0+x)

def sigma_los_beta(model, gfun, Rbins, beta, ngrid=700):
    r_t = model.r_t
    r = np.geomspace(max(1e-3, r_t*1e-5), r_t*(1-1e-9), ngrid)
    rho = np.array([model.rho(x) for x in r])
    gN = G*np.array([model.Menc(x) for x in r])/r**2
    g = gfun(gN, rho, r)
    integ = (r**(2*beta))*rho*g
    dP = (integ[:-1]+integ[1:])/2*np.diff(r)
    J = np.concatenate([np.cumsum(dP[::-1])[::-1], [0.0]])
    P = (r**(-2*beta))*J                     # = rho sigma_r^2
    out = np.zeros(len(Rbins))
    for i, R in enumerate(Rbins):
        m = r > R
        if m.sum() < 5: out[i] = np.nan; continue
        rr = r[m]
        w = rr/np.sqrt(np.maximum(rr**2-R**2, 1e-12))
        num = np.trapz(2*(1-beta*R**2/rr**2)*P[m]*w, rr)
        den = np.trapz(2*rho[m]*w, rr)
        out[i] = math.sqrt(max(num/den, 0.0)) if den > 0 else np.nan
    return out

def wslope(r, s, w=None):
    X, Y = np.log10(r), np.log10(s)
    if w is None: w = np.ones_like(X)
    W, Sx, Sy = w.sum(), (w*X).sum(), (w*Y).sum()
    Sxx, Sxy = (w*X*X).sum(), (w*X*Y).sum()
    den = W*Sxx-Sx*Sx
    return ((W*Sxy-Sx*Sy)/den, math.sqrt(W/den)) if den > 0 else (np.nan, np.nan)

def main():
    d = json.load(open('baumgardt_gc.json'))
    cl, pr = d['clusters'], d['profiles']
    betas = np.array([-0.6,-0.4,-0.2, 0.0, 0.2, 0.4, 0.6, 0.8])
    acc = {b: {'newt': [], 'mond': [], 'dens': [], 'w': [], 'obs': []} for b in betas}
    n = 0
    for name, p in pr.items():
        c = cl.get(name)
        if not c or not all(c.get(k) for k in ('M','r_hm','r_t','r_c','R_sun','R_GC','sigma0')):
            continue
        D = c['R_sun']*1000.0
        b_ = [(x['r_arcsec']*D/206265.0, x['sigma'], 0.5*(x['e_up']+x['e_low'])) for x in p]
        b_ = [x for x in b_ if x[2] > 0 and x[0] < c['r_t']*0.98]
        b_.sort()
        if len(b_) < 10: continue
        rr = np.array([x[0] for x in b_]); ss = np.array([x[1] for x in b_])
        ee = np.array([x[2] for x in b_])
        m = rr > rr.max()/3.0
        if m.sum() < 5: continue
        n += 1
        w = 1.0/(ee[m]/ss[m])**2
        s_obs, e_obs = wslope(rr[m], ss[m], w)
        mod = ModHubble(c['M'], c['r_c'], c['r_t'])
        g_ext = V_MW**2/(c['R_GC']*1000.0)
        def g_newt(gN, rho, r): return gN
        def g_mond(gN, rho, r):
            lo, hi = np.array(gN), np.array(gN)*60+1e-12
            for _ in range(70):
                mid = 0.5*(lo+hi); k = mid*mu_simple((mid+g_ext)/A0) < gN
                lo = np.where(k, mid, lo); hi = np.where(k, hi, mid)
            return 0.5*(lo+hi)
        def g_dens(gN, rho, r): return gN/C_floored(rho/0.161)
        for bb in betas:
            for lab, gf in (('newt', g_newt), ('mond', g_mond), ('dens', g_dens)):
                mo = sigma_los_beta(mod, gf, rr[m], bb)
                ok = np.isfinite(mo) & (mo > 0)
                acc[bb][lab].append(wslope(rr[m][ok], mo[ok])[0] if ok.sum() >= 3 else np.nan)
            acc[bb]['obs'].append(s_obs); acc[bb]['w'].append(1.0/e_obs**2)
    print(f"# N = {n} clusters, king-like mass model, outer factor 3\n")
    print(f"{'beta':>6s}{'obs-Newt':>11s}{'obs-MOND+EFE':>14s}{'obs-density(0.161)':>20s}")
    for bb in betas:
        A = acc[bb]; w = np.array(A['w']); o = np.array(A['obs'])
        line = f"{bb:6.1f}"
        for lab in ('newt','mond','dens'):
            dd = o - np.array(A[lab]); ok = np.isfinite(dd)
            line += f"{np.sum(dd[ok]*w[ok])/np.sum(w[ok]):>{11 if lab=='newt' else (14 if lab=='mond' else 20)}.3f}"
        print(line)
    print("\n  beta > 0 is radial anisotropy -- the only sign that could hide a boost.")
    print("  Read off the beta at which each column crosses zero.")
if __name__ == '__main__':
    main()
