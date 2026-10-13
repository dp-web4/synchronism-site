#!/usr/bin/env python3
"""Is the tanh-ln family closed under the L2->L3 map  mu = C  ->  C + x C'/2 ?  For each gamma_L3, the nearest L2 curve
(a' and gamma_L2 free) over SPARC's g_bar range, and the Solar-System tail where the two separate. Explorer 2026-10-13."""
import sys, numpy as np
from scipy.optimize import minimize
sys.path.insert(0, '/home/dp/ai-workspace/synchronism-site/explorer/scripts')
from wiring_keying_matrix_sparc import bisect
C = lambda x, g: np.tanh(g*np.log1p(x))
Cp = lambda x, g: g/np.cosh(g*np.log1p(x))**2/(1+x)
mu = {'L2': lambda x, g: C(x, g), 'L3': lambda x, g: C(x, g) + 0.5*x*Cp(x, g)}
def pred(w, gb, a, g): return bisect(lambda go: go*mu[w](go/a, g) - gb, gb*0.2, gb*1e3 + 1e3*a)
gg = np.logspace(-12.3, -8.5, 200)
print("gamma_L3   a'_L3      ->  gamma_L2   a'_L2/a'_L3   max|dlog g| SPARC range   ratio gamma_L2/gamma_L3")
for g3 in (0.2, 0.3, 0.4, 0.4435, 0.5, 0.7, 1.0, 1.5, 2.0):
    a3 = 7.3046e-11; p3 = np.log10(pred('L3', gg, a3, g3))
    f = lambda p: np.max(np.abs(np.log10(pred('L2', gg, a3*10**p[0], p[1])) - p3))
    b = min((minimize(f, [0.0, g0], method='Nelder-Mead', options={'xatol':1e-6, 'fatol':1e-8}) for g0 in (g3, 1.1*g3, 0.9*g3)), key=lambda r: r.fun)
    print(f"  {g3:6.4f}  {a3:.3e}  ->  {b.x[1]:7.4f}   {10**b.x[0]:8.4f}      {b.fun:8.4f} dex          {b.x[1]/g3:6.3f}")
# Solar-System tail at the SPARC-fitted parameters (from l3_gradient_keyed_sparc_lensing_output.txt)
print("\n1 - mu at Solar-System accelerations, SPARC-fitted parameters (Sun only; no EFE)")
GM, AU = 1.32712e20, 1.496e11
for nm, r in (('Earth', 1.0), ('Saturn', 9.54), ('Neptune', 30.1), ('100 AU', 100.)):
    g = GM/(r*AU)**2
    l2 = 1 - mu['L2'](g/5.3363e-11, 0.4892); l3 = 1 - mu['L3'](g/7.3046e-11, 0.4435)
    print(f"  {nm:8s} g = {g:.2e}  L2 (R) {l2:.3e}   L3 {l3:.3e}   L3/L2 {l3/l2:5.2f}")
