"""gamma vs rho_crit identifiability for C = tanh(gamma ln(1+rho/rho_crit)) (maintainer 2026-10-23).
From a simulated-visitor graduate persona: at large gamma C ~ tanh(gamma x), so gamma relocates the knee instead of sharpening it.
For each (gamma_ref, gamma_alt) the knee of the alternative is refit to minimise max|dC| over x in [1e-4, 1e3].
Estimate, not pre-registered (no verdict rides on it)."""
import numpy as np
from scipy.optimize import minimize_scalar
x=np.logspace(-4,3,4000)
def C(g,r): return np.tanh(g*np.log1p(x/r))
print("gamma_ref  gamma_alt  best knee scale  max|dC|")
for g0 in [0.5,1,2,4]:
    ref=C(g0,1.0)
    for g1 in [g0*1.5, g0*2, g0*4]:
        f=lambda lr: np.max(np.abs(C(g1,10**lr)-ref))
        r=minimize_scalar(f,bounds=(-3,3),method='bounded')
        print(f"{g0:6.2f} {g1:9.2f} {10**r.x:12.3f} {r.fun:10.3f}")
# SPARC-like regime x<1e-3: only gamma/rho_crit identified
xs=np.logspace(-6,-3,100)
print("x<=1e-3, gamma=0.5 vs gamma=2 with knee x4:", np.max(np.abs(np.tanh(0.5*np.log1p(xs))-np.tanh(2*np.log1p(xs/4)))))
