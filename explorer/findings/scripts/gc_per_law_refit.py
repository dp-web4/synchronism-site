#!/usr/bin/env python3
"""
Explorer 2026-10-30 -- GC outer-slope statistic with the mass model refit under each law.
PREREG: gc_per_law_refit_PREREG.md (committed 012ca7c before this file existed).

Arm A: identity (maintainer's d_i, N=42) and the same on the 28 non-core-collapsed clusters.
Arm B: Harris photometric r_c, r_t (law-independent truncation); M fixed at Baumgardt, and M refit per law.
Arm C: r_c Baumgardt; r_t, beta, M free per law; chi2 on outer-window sigma + Gaussian prior on log r_t/r_t(H), 0.25 dex.
"""
import sys, math, json
import numpy as np
from scipy.optimize import minimize_scalar
from gc_knee_jeans_test import ModHubble, OMEGA_M
from gc_slope_with_mond import sigma_los_general, make_g_mond, g_newton, wslope

G = 4.30091e-3
PRIOR_DEX = 0.25
BETAS = (-0.3, 0.0, 0.3)
RT_GRID = np.geomspace(0.3, 3.0, 13)

d = json.load(open('baumgardt_gc.json')); cl, pr = d['clusters'], d['profiles']
lines = open('data/harris2010_mwgc.dat').read().splitlines()
start = next(i for i, l in enumerate(lines) if 'Part III' in l)
harris = {}
for l in lines[start:]:
    if len(l) < 64 or l.strip().startswith('ID'): continue
    try: hc = float(l[48:54]); hrc = float(l[58:64])
    except ValueError: continue
    harris[l[:12].strip()] = (hc, hrc, 'c' in l[54:58])

sel = []
for name, p in pr.items():
    c = cl.get(name)
    if not c or not all(c.get(k) for k in ('M', 'r_hm', 'r_t', 'r_c', 'R_sun', 'R_GC', 'sigma0')): continue
    D = c['R_sun']*1000.0
    b = [(x['r_arcsec']*D/206265.0, x['sigma'], 0.5*(x['e_up']+x['e_low'])) for x in p]
    b = [x for x in b if x[2] > 0 and x[0] < c['r_t']*0.98]; b.sort()
    if len(b) < 10: continue
    rr = np.array([x[0] for x in b]); ss = np.array([x[1] for x in b]); ee = np.array([x[2] for x in b])
    m = rr > rr.max()/3.0
    if m.sum() < 5: continue
    hc, hrc, cc = harris[name]
    rc_H = hrc/60*math.pi/180*D
    sel.append(dict(name=name, c=c, r=rr[m], s=ss[m], e=ee[m], rmax=rr.max(), cc=cc,
                    rc_H=rc_H, rt_H=rc_H*10**hc, obs=wslope(rr[m], ss[m], 1.0/(ee[m]/ss[m])**2)))
N42 = len(sel)


def sigma_beta(M, r_c, r_t, gfun, Rb, beta, ngrid=700):
    """Constant-beta spherical Jeans on ModHubble; returns list over beta tuple if beta is a tuple."""
    mod = ModHubble(M, r_c, r_t)
    r = np.geomspace(max(1e-3, r_t*1e-5), r_t*(1-1e-9), ngrid)
    x = r/r_c
    rho = mod.rho0*(1+x**2)**-1.5
    Menc = 4*math.pi*mod.rho0*r_c**3*(np.arcsinh(x) - x/np.sqrt(1+x**2))
    g = gfun(G*Menc/r**2, rho, r)
    outs = []
    for bt in (beta if isinstance(beta, tuple) else (beta,)):
        integ = r**(2*bt)*rho*g
        dP = (integ[:-1]+integ[1:])/2*np.diff(r)
        P = r**(-2*bt)*np.concatenate([np.cumsum(dP[::-1])[::-1], [0.0]])
        out = np.full(len(Rb), np.nan)
        for i, R in enumerate(Rb):
            mm = r > R
            if mm.sum() < 5: continue
            rr = r[mm]; w = rr/np.sqrt(np.maximum(rr**2-R**2, 1e-12))
            num = np.trapz(2*(1-bt*R**2/rr**2)*P[mm]*w, rr); den = np.trapz(2*rho[mm]*w, rr)
            if den > 0: out[i] = math.sqrt(max(num/den, 0.0))
        outs.append(out)
    return outs if isinstance(beta, tuple) else outs[0]


def make_dens(gamma, rho_c=0.161):
    law = lambda x: OMEGA_M + (1-OMEGA_M)*np.tanh(gamma*np.log1p(x))
    return lambda gN, rho, r: gN/law(rho/rho_c)

LAWS = {
    'Newton': lambda c: g_newton,
    'MOND+EFE': lambda c: make_g_mond(233.0**2/(c['R_GC']*1000.0)),
    'dens g=2': lambda c: make_dens(2.0),
}


def dstat(S, mo):
    ok = np.isfinite(mo) & (mo > 0)
    return S['obs'][0] - (wslope(S['r'][ok], mo[ok])[0] if ok.sum() >= 3 else np.nan)

def chi2(S, mo):
    ok = np.isfinite(mo)
    return float(np.sum(((S['s'][ok]-mo[ok])/S['e'][ok])**2)) + 1e3*(~ok).sum()

def fit_M(S, gfun, r_c, r_t, beta):
    """Best M (log-bounded x0.25-4 around Baumgardt) for given shape; returns (chi2, logf, sigma_model)."""
    M0 = S['c']['M']
    f = lambda lf: chi2(S, sigma_beta(M0*10**lf, r_c, r_t, gfun, S['r'], beta))
    res = minimize_scalar(f, bounds=(math.log10(0.25), math.log10(4.0)), method='bounded', options=dict(xatol=2e-3))
    return res.fun, res.x, sigma_beta(M0*10**res.x, r_c, r_t, gfun, S['r'], beta)


# ------------------------------------------------------------------ arm A identity
print(f"N clusters {N42}; non-core-collapsed {sum(not S['cc'] for S in sel)}")
A = {k: [] for k in LAWS}
for S in sel:
    for k, lf in LAWS.items():
        A[k].append(dstat(S, sigma_los_general(ModHubble(S['c']['M'], S['c']['r_c'], S['c']['r_t']), lf(S['c']), S['r'])))
A = {k: np.array(v) for k, v in A.items()}
W42 = np.array([1/S['obs'][1]**2 for S in sel])
def wmean(x, w): ok = np.isfinite(x); return np.sum(x[ok]*w[ok])/np.sum(w[ok])
print("ARM A identity (published Newton -0.0565, MOND+EFE -0.0933, g2 -0.1111):",
      {k: round(wmean(v, W42), 4) for k, v in A.items()})

keep = np.array([not S['cc'] for S in sel])
S28 = [S for S in sel if not S['cc']]; N = len(S28); W = W42[keep]
rng = np.random.default_rng(1); BOOT = rng.integers(0, N, size=(4000, N))
def report_d(tag, DD):
    print(f"\n{tag}")
    for k in DD: print(f"  level {k:10s} {wmean(DD[k], W):+.4f} +/- {np.std([wmean(DD[k][i], W[i]) for i in BOOT]):.4f}")
    out = {}
    for a, b in (('Newton', 'MOND+EFE'), ('dens g=2', 'MOND+EFE'), ('dens g=2', 'Newton')):
        diff = DD[a]-DD[b]; v = wmean(diff, W); s = np.std([wmean(diff[i], W[i]) for i in BOOT])
        out[(a, b)] = v/s
        print(f"  {a:9s} - {b:9s} {v:+.4f} +/- {s:.4f}  ({v/s:+.1f} sigma)")
    return out

res = {}
res['A28'] = report_d("ARM A on the 28 non-core-collapsed (catalogue ModHubble, isotropic)", {k: v[keep] for k, v in A.items()})

# ------------------------------------------------------------------ arm B photometric truncation
nfloor = sum(S['rt_H'] < 1.05*S['rmax'] for S in S28)
print(f"\nARM B: Harris r_t below 1.05 r_max(data) in {nfloor}/{N} clusters -> floored")
B_fix = {k: [] for k in LAWS}; B_fit = {k: [] for k in LAWS}; B_lf = {k: [] for k in LAWS}
for S in S28:
    rt = max(S['rt_H'], 1.05*S['rmax'])
    for k, lf in LAWS.items():
        gf = lf(S['c'])
        B_fix[k].append(dstat(S, sigma_beta(S['c']['M'], S['rc_H'], rt, gf, S['r'], 0.0)))
        _, lfm, mo = fit_M(S, gf, S['rc_H'], rt, 0.0)
        B_fit[k].append(dstat(S, mo)); B_lf[k].append(lfm)
res['Bfix'] = report_d("ARM B, M fixed (Baumgardt)", {k: np.array(v) for k, v in B_fix.items()})
res['Bfit'] = report_d("ARM B, M refit per law on outer sigma level", {k: np.array(v) for k, v in B_fit.items()})
print("  median log M_fit/M_B:", {k: round(float(np.median(v)), 3) for k, v in B_lf.items()})

# ------------------------------------------------------------------ arm C per-law refit
C_d = {k: [] for k in LAWS}; C_chi = {k: [] for k in LAWS}; C_rt = {k: [] for k in LAWS}; C_b = {k: [] for k in LAWS}
for j, S in enumerate(S28):
    for k, lf in LAWS.items():
        gf = lf(S['c']); best = None
        for fr in RT_GRID:
            rt = max(fr*S['rt_H'], 1.05*S['rmax'])
            pen = (math.log10(rt/S['rt_H'])/PRIOR_DEX)**2
            for bt in BETAS:
                c2, lfm, mo = fit_M(S, gf, S['c']['r_c'], rt, bt)
                if best is None or c2+pen < best[0]: best = (c2+pen, rt, bt, mo)
        C_chi[k].append(best[0]); C_rt[k].append(math.log10(best[1]/S['rt_H'])); C_b[k].append(best[2])
        C_d[k].append(dstat(S, best[3]))
    print(f"  [{j+1}/{N}] {S['name']:9s} " + "  ".join(f"{k}: chi2 {C_chi[k][-1]:7.1f} lrt {C_rt[k][-1]:+.2f} b {C_b[k][-1]:+.1f}" for k in LAWS), flush=True)
res['Cd'] = report_d("ARM C, d at per-law best fit (r_t, beta, M free; r_t prior 0.25 dex)", {k: np.array(v) for k, v in C_d.items()})
print("\nARM C prior cost: median log10(r_t,fit / r_t,Harris), and beta counts")
for k in LAWS:
    print(f"  {k:10s} median {np.median(C_rt[k]):+.3f}  mean {np.mean(C_rt[k]):+.3f}  beta(-.3/0/+.3) "
          f"{[C_b[k].count(b) for b in BETAS]}")
print(f"  MOND+EFE - Newton median of per-cluster log r_t difference: {np.median(np.array(C_rt['MOND+EFE'])-np.array(C_rt['Newton'])):+.3f}")
print("\nARM C total chi2 (data + prior), cluster bootstrap of the summed per-cluster difference")
CH = {k: np.array(v) for k, v in C_chi.items()}
for k in LAWS: print(f"  {k:10s} sum chi2 {CH[k].sum():9.1f}")
for a, b in (('Newton', 'MOND+EFE'), ('dens g=2', 'MOND+EFE'), ('dens g=2', 'Newton')):
    diff = CH[a]-CH[b]; s = np.std([diff[i].sum() for i in BOOT])
    res[('Cchi', a, b)] = diff.sum()/s
    print(f"  {a:9s} - {b:9s} dchi2 {diff.sum():+8.1f} +/- {s:6.1f} ({diff.sum()/s:+.1f} sigma; negative = A better)"
          f"  clusters A better: {(diff < 0).sum()}/{N}")

zB = res['Bfix'][('Newton', 'MOND+EFE')]; zC = -res[('Cchi', 'Newton', 'MOND+EFE')]
print(f"\n>>> PRE-FIXED RULE: arm B fixed-M z = {zB:+.1f}; arm C dchi2 z (Newton better) = {zC:+.1f}")
if zB >= 3 and zC >= 3: print(">>> VERDICT: the lead measures gravity")
elif abs(zB) < 2: print(">>> VERDICT: the lead was the mass-model convention")
else: print(">>> VERDICT: mixed")
