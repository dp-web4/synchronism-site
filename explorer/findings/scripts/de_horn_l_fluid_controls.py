#!/usr/bin/env python3
"""Controls for de_horn_l_as_a_fluid_jeans_term.py (explorer 2026-09-14, post-hoc — not in the pre-registration).
A. Sound-speed formula c_s^2 = rho_m g''/g' against the generalized Chaplygin gas closed form c_s^2 = alpha*A/rho^(1+alpha).
B. Solver convergence (rtol, max_step, z_ini).
C. Baryon escape (Beca+2003-style): baryons pressureless, only CDM carries the DE pressure. Is the band still ~1e-5?
"""
import numpy as np
from scipy.integrate import solve_ivp
import importlib.util, sys
spec = importlib.util.spec_from_file_location("m", "de_horn_l_as_a_fluid_jeans_term.py")
src = open("de_horn_l_as_a_fluid_jeans_term.py").read().split("# =============================================================== 0.")[0]
m = {}; exec(src, m)

print("A. GCG control: rho_tot(rho_m) = (A + B rho_m^(1+al))^(1/(1+al)); closed form c_s^2 = al*A/rho^(1+al)")
for al in [1e-3, 0.1, 1.0]:
    A, B = 0.7, 0.3
    rm = 2.0; h = 1e-4 * rm
    g = lambda r: (A + B * r ** (1 + al)) ** (1 / (1 + al))
    g1 = (g(rm + h) - g(rm - h)) / (2 * h); g2 = (g(rm + h) - 2 * g(rm) + g(rm - h)) / h ** 2
    print(f"   alpha={al:<6} rho_m g''/g' = {rm*g2/g1:.6e}   closed form = {al*A/g(rm)**(1+al):.6e}")

print("\nB. Convergence, gamma=0.49999, k=0.1 (reported R-1 = +0.231):")
def grow(gam, k, rtol=1e-9, max_step=0.01, zini=200.0):
    def rhs(N, y):
        x, C, fx, cs2, dlnH, E = m["background"](N, gam)
        kah2 = (k * m["C_OVER_H0"] / (np.exp(N) * E)) ** 2
        return [y[1], -(2 + dlnH - 3 * cs2) * y[1] + (1.5 * C * (1 + fx) - cs2 * kah2) * y[0]]
    Ni = -np.log1p(zini); ai = np.exp(Ni)
    return solve_ivp(rhs, [Ni, 0], [ai, ai], method="DOP853", rtol=rtol, atol=1e-30, max_step=max_step).y[0, -1]
for rtol, ms, zi in [(1e-9, 0.01, 200), (1e-12, 0.002, 200), (1e-9, 0.01, 1000), (1e-9, 0.01, 50)]:
    R = (grow(0.49999, 0.1, rtol, ms, zi) / grow(0.5, 0.1, rtol, ms, zi)) ** 2
    print(f"   rtol={rtol:g} max_step={ms} z_ini={zi}:  R-1 = {R-1:+.5f}")

print("\nC. Baryon escape: f_b = Omega_b/Omega_m = 0.157 pressureless; CDM+DE is the fluid.")
FB = 0.0493 / 0.315
def grow2(gam, k):
    def rhs(N, y):
        x, C, fx, cs2, dlnH, E = m["background"](N, gam)
        dc, dcp, db, dbp = y
        kah2 = (k * m["C_OVER_H0"] / (np.exp(N) * E)) ** 2
        dm = (1 - FB) * dc + FB * db                       # total matter contrast
        src = 1.5 * C * (1 + fx) * dm                      # delta rho_tot = (1+f') delta rho_m
        # all DE momentum rides on CDM: inertia rho_c + f' rho_m, pressure grad f'' rho_m grad(rho_m)
        inert = (1 - FB) + fx
        cs2c = x * (m["f_derivs"](x, gam)[2]) / inert
        return [dcp, -(2 + dlnH - 3 * cs2c) * dcp + src - cs2c * kah2 * dm,
                dbp, -(2 + dlnH) * dbp + src]
    Ni = -np.log1p(200.0); ai = np.exp(Ni)
    s = solve_ivp(rhs, [Ni, 0], [ai, ai, ai, ai], method="DOP853", rtol=1e-9, atol=1e-30, max_step=0.01)
    return s.y[0, -1], s.y[2, -1]
ref = grow2(0.5, 0.1)
for gam in [0.49999, 0.4999, 0.487, 0.50001, 0.5001, 0.513]:
    c, b = grow2(gam, 0.1)
    print(f"   gamma={gam:<8} k=0.1:  R_cdm-1 = {(c/ref[0])**2-1:+.3e}   R_baryon-1 = {(b/ref[1])**2-1:+.3e}")
