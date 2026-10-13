#!/usr/bin/env python3
"""L3 (action C(|grad Phi|)|grad Phi|^2/8piG + rho Phi) at the gradient keying: AQUAL with mu_eff = C + x C'/2.
SPARC fit + galaxy bootstrap vs R (L2 = AQUAL with mu = C), frozen and joint KiDS-1000 lensing. Explorer 2026-10-13.
PREREG: l3_gradient_keyed_sparc_lensing_PREREG.md (commit 8618d5d).  Usage: python3 -I this.py /tmp/brouwer"""
import sys, numpy as np
sys.path.insert(0, '/home/dp/ai-workspace/synchronism-site/explorer/scripts')
from wiring_keying_matrix_sparc import load, bisect
from scipy.optimize import minimize
D = sys.argv[1]; G, PCM = 4.52e-30, 3.086e16

def C(x, g, f): return f + (1-f)*np.tanh(g*np.log1p(x))
def Cp(x, g, f): return (1-f)*g/np.cosh(g*np.log1p(x))**2/(1+x)
def mu(x, g, f, wiring):
    return C(x, g, f) if wiring == 'L2' else C(x, g, f) + 0.5*x*Cp(x, g, f)

def predict(wiring, gb, a, g, f=0.0):
    hi = gb/max(f, 1e-6)*1.01 + 1e3*a
    return bisect(lambda go: go*mu(go/a, g, f, wiring) - gb, gb*0.2, hi)

def lens(stem):
    d = np.loadtxt(f"{D}/{stem}_Nobins.txt"); c = np.loadtxt(f"{D}/{stem}_covmatrix.txt")
    n = len(d); cov = (c[:,4]/c[:,6]).reshape(n, n)*(4*G*PCM)**2
    return d[:,0], 4*G*d[:,1]/d[:,4]*PCM, np.linalg.inv(cov)

gid, go, gb = load(); N = len(go); gals = np.unique(gid)
print(f"N = {N} points, {len(gals)} galaxies")

# P5: ellipticity and mu_eff > 1
xs = np.logspace(-6, 8, 20001)
print("\nP5  d(x mu_eff)/dx > 0 and max mu_eff, f = 0:")
for g in (0.05, 0.1, 0.2, 0.3, 0.4, 0.5, 0.7, 0.9, 1.0, 1.1, 1.5, 2.0):
    m = mu(xs, g, 0, 'L3'); xm = xs*m
    print(f"  gamma {g:4.2f}: monotone {np.all(np.diff(xm) > 0)}   max mu_eff {m.max():.4f}   deep mu/x -> {m[0]/xs[0]:.4f} (=1.5 gamma {1.5*g:.4f})")

def fit(wiring, f=0.0):
    def obj(p):
        if not (-13 < p[0] < -8 and 0.02 < p[1] < 20): return 1e12
        return np.sum((np.log10(go) - np.log10(predict(wiring, gb, 10**p[0], p[1], f)))**2)
    best = min((minimize(obj, [la, g0], method='Nelder-Mead', options={'xatol':1e-7,'fatol':1e-10,'maxiter':4000})
                for la in (-11.5, -10.3, -9.5) for g0 in (0.2, 0.5, 1.0, 3.0)), key=lambda r: r.fun)
    a, g = 10**best.x[0], best.x[1]
    return dict(a=a, g=g, ssr=best.fun, res=np.log10(go) - np.log10(predict(wiring, gb, a, g, f)))

R, L3 = fit('L2'), fit('L3')
bic = lambda r: N*np.log(r['ssr']/N) + 2*np.log(N)
rng = np.random.default_rng(20261012); idx = {g: np.where(gid == g)[0] for g in gals}
dv = []
for _ in range(2000):
    s = np.concatenate([idx[g] for g in rng.choice(gals, len(gals))]); n = len(s)
    dv.append(n*np.log(np.sum(L3['res'][s]**2)/np.sum(R['res'][s]**2)))
lo, hi = np.percentile(dv, [2.5, 97.5])
wins = np.mean([np.mean(R['res'][idx[g]]**2) < np.mean(L3['res'][idx[g]]**2) for g in gals])
print("\nP1-P3  SPARC (f = 0):")
for nm, r in (('R  (L2, mu = C)', R), ('L3 (mu = C + xC\'/2)', L3)):
    print(f"  {nm:22s} a'={r['a']:.4e}  gamma={r['g']:.4f}  RMS={np.sqrt(r['ssr']/N):.5f}")
print(f"  dBIC(L3 - R) points {bic(L3)-bic(R):+.1f}   galaxy-boot 95% [{lo:+.1f}, {hi:+.1f}]   R wins {wins:.2f} of galaxies")
print(f"  effective deep-MOND a0: R a'/gamma = {R['a']/R['g']:.4e}   L3 a'/(1.5 gamma) = {L3['a']/(1.5*L3['g']):.4e}")
print(f"  P6 tail exponent 2 gamma_L3 = {2*L3['g']:.3f}  (R: {2*R['g']:.3f});  1-mu at x=1e4 (g ~ 1e-6 m/s^2 scale): "
      f"R {1-mu(1e4*1.0, R['g'], 0, 'L2'):.3e}  L3 {1-mu(1e4, L3['g'], 0, 'L3'):.3e}")

# residual by bin, both
print("\n  median residual by log g_bar bin:  L3     R")
for b in np.arange(-12.0, -8.4, 0.5):
    m = (np.log10(gb) >= b) & (np.log10(gb) < b+0.5)
    if m.sum() > 5: print(f"  [{b:5.1f},{b+0.5:5.1f}) n={m.sum():4d}  {np.median(L3['res'][m]):+.3f}  {np.median(R['res'][m]):+.3f}")

# shape comparison: closest L2 gamma to the L3 curve at fitted params (over SPARC g_bar range)
gg = np.logspace(-12.3, -8.5, 200); pL3 = predict('L3', gg, L3['a'], L3['g'])
def shape(p): return np.max(np.abs(np.log10(predict('L2', gg, 10**p[0], p[1])) - np.log10(pL3)))
s = min((minimize(shape, [np.log10(L3['a']), g0], method='Nelder-Mead') for g0 in (0.3, 0.5, 0.8)), key=lambda r: r.fun)
print(f"\n  nearest L2 curve to fitted L3 over SPARC range: a'={10**s.x[0]:.3e} gamma={s.x[1]:.3f}  max |dlog g| = {s.fun:.4f} dex")

for stem in ('Fig-4-5-C1_RAR-KiDS-isolated', 'Fig-4_RAR-KiDS-isolated_hotgas'):
    lb, lo_, ci = lens(stem)
    print(f"\n== {stem}")
    for nm, w, r in (('R ', 'L2', R), ('L3', 'L3', L3)):
        d = lo_ - predict(w, lb, r['a'], r['g']); print(f"  P4 frozen {nm}: lens chi2 {d@ci@d:8.1f}")
    for w in ('L2', 'L3'):
        def parts(p):
            a, g = 10**p[0], p[1]
            sp = np.sum((np.log10(go) - np.log10(predict(w, gb, a, g)))**2)/0.1437**2
            d = lo_ - predict(w, lb, a, g); return sp, d@ci@d
        obj = lambda p: 1e15 if not (-13.5 < p[0] < -8 and 0.02 < p[1] < 20) else sum(parts(p))
        b = min((minimize(obj, [la, g0], method='Nelder-Mead', options={'xatol':1e-6,'fatol':1e-8,'maxiter':3000})
                 for la in (-12, -10.3) for g0 in (0.2, 0.5, 1.0)), key=lambda r: r.fun)
        sp, l = parts(b.x)
        print(f"  joint {w}: a'={10**b.x[0]:.3e} gamma={b.x[1]:.3f}  SPARC chi2 {sp:8.1f}  lens chi2 {l:7.1f}  total {sp+l:8.1f}")
