#!/usr/bin/env python3
r"""
EXPLORATORY, NOT PRE-REGISTERED (explorer 2026-09-16).  Does L3 with pointwise rho admit a smooth cluster across the knee?

Short-wavelength (WKB, k r >> 1) linearization of L3 about a background with field g (along unit vector g_hat),
perturbation delta rho exp(i k.x), angle alpha between k and g_hat:
  field:   div[C grad dPhi] + div[dC grad Phi] = 4 pi G drho   ->  at large k:  -C k^2 dPhi + i (k.g) C' drho ~ 0
           => grad dPhi = -(k_hat.g) C' drho / C * k_hat      (O(1) in k -- NOT negligible)
  striction enthalpy h = C'(rho)|grad Phi|^2/8piG:
           dh = [C'' g^2 + C' * 2 g.grad dPhi] drho / 8piG = g^2 [C'' - 2 C'^2 cos^2(alpha)/C] drho / 8piG
  => effective sound speed^2 from striction  c2_str = rho g^2 [C'' - 2 C'^2 cos^2 alpha / C] / 8 pi G
The second bracket term is negative for ANY C(rho) with C' != 0; the first is negative wherever C is concave in rho
(tanh-log: everywhere tested).  Dropped at k -> infinity: self-gravity Jeans term (~4piG rho/k^2), background gradients (O(1/kr)).
Instability where c2_str + sigma^2 < 0 (fluid criterion; for a collisionless system this is indicative only).
Reported: -c2_str / sigma_r^2 at alpha = 0, Plummer 2e5 Msun a = 3 pc, isotropic Jeans sigma under L2 (g = g_N/C).
C'' checked against finite differences.
"""
import numpy as np
from gc_refraction_l2_vs_l3 import Law, Plummer, G, PAIRS

def d2C(law, rho):
    x = rho / law.rc; u = law.g * np.log1p(x); s2 = 1 / np.cosh(u)**2
    # C' = (1-f) g s2 / (rc + rho);  C'' = (1-f) g [ -2 tanh(u) s2 * g/(rc+rho) - s2/(rc+rho) ] / (rc+rho)
    return (1 - law.f) * law.g * s2 * (-2 * np.tanh(u) * law.g - 1) / (law.rc + rho)**2

cl = Plummer(2e5, 3.0)
r = np.geomspace(0.05, 20000, 40000)   # P(r_max) = 0 boundary pushed far out; bands reported for r < 300 pc only
for g_, rc in PAIRS:
    law = Law(g_, rc)
    rho = cl.rho(r); C = law.C(rho); dC = law.dC(rho); ddC = d2C(law, rho)
    h = rho * 1e-5; fd = (law.dC(rho + h) - law.dC(rho - h)) / (2 * h)
    gs = G * cl.Menc(r) / (C * r**2)
    integ = rho * gs; dP = (integ[:-1] + integ[1:]) / 2 * np.diff(r)
    P = np.concatenate([np.cumsum(dP[::-1])[::-1], [0.0]]); sig2 = P / rho
    c2 = rho * gs**2 * (ddC - 2 * dC**2 / C) / (8 * np.pi * G)
    ratio = -c2 / sig2
    rk = r[np.argmin(np.abs(rho - rc))]
    print(f"(gamma {g_}, rho_c {rc})  knee {rk:.1f} pc   C'' vs finite-diff max rel err {np.max(np.abs(ddC/fd-1)[r<200]):.1e}")
    for R in (1, 3, 5, 10, 0.5*rk, rk, 1.5*rk, 2*rk, 3*rk):
        i = np.argmin(np.abs(r - R))
        print(f"   r {r[i]:7.1f}  C {C[i]:.3f}  -c2_str/sigma^2 = {ratio[i]:9.3g}   (C'' part {rho[i]*gs[i]**2*ddC[i]/(8*np.pi*G)/sig2[i]:+.3g}, "
              f"C'^2 part {-2*rho[i]*gs[i]**2*dC[i]**2/C[i]/(8*np.pi*G)/sig2[i]:+.3g})")
    m = (ratio > 1) & (r < 300)
    print(f"   unstable (-c2/sigma^2 > 1) for r in {r[m].min():.1f}-{r[m].max():.1f} pc" if m.any() else "   nowhere unstable")
