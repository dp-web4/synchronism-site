#!/usr/bin/env python3
"""Supplement (deviation, logged): fixed-A arms hit the registered gamma <= 50 bound. Refit with gamma <= 1e8,
and add the Newtonian (C = 1) baseline.  Same loader/likelihood as density_law_knee_placement.py."""
import numpy as np
from scipy.optimize import minimize
import density_law_knee_placement as K

H = K.H
LN_N = K.LN_N
rB = H.fit_pillarB(K.GB, K.GL, K.EL)
bicB = 2 * rB.fun + 3 * LN_N
for A_msun in (4.6e-5, 0.029):
    rc = A_msun * K.MSUN_PC3 * K.VF ** 2
    x = K.RHO / rc
    print(f"A = {A_msun:g}: profile over gamma (sigma profiled)")
    best = None
    for lg in np.arange(0, 8.01, 0.5):
        v, s = K.prof_sig(np.log10(K.GB / np.clip(H.C_tanh(x, 10 ** lg), 1e-12, None)))
        bic = 2 * v + 2 * LN_N
        print(f"   log gamma {lg:4.1f}  dBIC vs B {bic-bicB:+9.1f}  sig {np.exp(s):.3f}")
        if best is None or bic < best[0]:
            best = (bic, lg)

    def f(th, x=x):
        return H.neglnL(np.log10(K.GB / np.clip(H.C_tanh(x, np.exp(th[0])), 1e-12, None)), K.GL, K.EL, th[1])
    r = minimize(f, [best[1] * np.log(10), np.log(0.3)], method="Nelder-Mead", options=K.NM)
    g = np.exp(r.x[0])
    C = np.tanh(g * np.log1p(x))
    print(f"   OPT gamma {g:.4g}  dBIC vs B {2*r.fun+2*LN_N-bicB:+.1f}  sig {np.exp(r.x[1]):.4f}  "
          f"gamma/A = {g/A_msun:.4g}  C median {np.median(C):.3f} range [{C.min():.3f},{C.max():.3f}]")
v, s = K.prof_sig(np.log10(K.GB))
print(f"Newton C=1: dBIC vs B {2*v + 1*LN_N - bicB:+.1f}  sig {np.exp(s):.4f}")
