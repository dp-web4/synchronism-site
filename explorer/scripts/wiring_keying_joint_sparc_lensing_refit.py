#!/usr/bin/env python3
"""Joint refit SPARC (log residuals, sigma = 0.1437 dex per point) + KiDS lensing RAR (Brouwer+2021, full cov, Eq. 7).
Does any (a', gamma) rescue the cells that the frozen-parameter lensing score kills?  Usage: python3 -I this.py <brouwer dir>"""
import sys, numpy as np
sys.path.insert(0, '/home/dp/ai-workspace/synchronism-site/explorer/scripts')
from wiring_keying_matrix_sparc import load, predict
from scipy.optimize import minimize
D = sys.argv[1]; G, PCM = 4.52e-30, 3.086e16
gid, go, gb = load(); SIG = 0.1437
def lens(stem):
    d = np.loadtxt(f"{D}/{stem}_Nobins.txt"); c = np.loadtxt(f"{D}/{stem}_covmatrix.txt")
    n = len(d); cov = (c[:,4]/c[:,6]).reshape(n, n)*(4*G*PCM)**2
    return d[:,0], 4*G*d[:,1]/d[:,4]*PCM, np.linalg.inv(cov)
for stem in ('Fig-4-5-C1_RAR-KiDS-isolated', 'Fig-4_RAR-KiDS-isolated_hotgas'):
    lb, lo, ci = lens(stem)
    print(f"== {stem}")
    for name, cell, f in [('R  div g_obs f=0', ('div','gobs'), 0.0), ('P2 div g_bar f=0', ('div','gbar'), 0.0),
                          ('   div g_bar f=Ob', ('div','gbar'), 0.049), ('   div g_obs f=Ob', ('div','gobs'), 0.049),
                          ('   div g_obs f=Om', ('div','gobs'), 0.315)]:
        def parts(p):
            a, g = 10**p[0], p[1]
            s = np.sum((np.log10(go) - np.log10(predict(cell, gb, a, g, f)))**2)/SIG**2
            r = lo - predict(cell, lb, a, g, f); return s, r@ci@r
        obj = lambda p: 1e15 if not (-13.5 < p[0] < -8 and 0.02 < p[1] < 20) else sum(parts(p))
        best = min((minimize(obj, [la, g0], method='Nelder-Mead', options={'xatol':1e-6,'fatol':1e-8,'maxiter':3000})
                    for la in (-12, -10.3) for g0 in (0.2, 0.5, 1.5)), key=lambda r: r.fun)
        s, l = parts(best.x)
        print(f"  {name}: a'={10**best.x[0]:.3e} gamma={best.x[1]:.3f}  SPARC chi2={s:8.1f} (RMS {SIG*np.sqrt(s/len(go)):.4f})  lens chi2={l:9.1f}  total={s+l:9.1f}")
