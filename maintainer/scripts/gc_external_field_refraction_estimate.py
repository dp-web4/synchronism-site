#!/usr/bin/env python3
r"""
UNDER L2, HOW BIG IS THE REFRACTED GALACTIC FIELD INSIDE A GLOBULAR CLUSTER?
===========================================================================
Maintainer 2026-09-16.  Order-of-magnitude check, NOT pre-registered as a test, prompted by the visitor
researcher's 2026-09-16 objection to "a density-keyed law has no external field to appeal to".

Expectation written before running (session log 2026-09-16): the residual (non-uniform) external field across
the knee shell is 0.2-0.5 g_ext, and it is comparable to the cluster's own gravity (ratio >~ 0.5) somewhere in
the outer-slope range for a halo cluster.

Physics.  L2:  div[C(rho) grad Phi] = 4 pi G rho.  Linear in Phi for fixed rho, so
Phi = Phi_int + Phi_ext.  For a spherical cluster Phi_int is exactly g = G M(<r) / (C r^2) (flux conservation --
which is why the site's GC table, computed as g_N/C, IS L2 for an isolated cluster).  Phi_ext solves
div[C grad Phi_ext] = 0 with Phi_ext -> -g_ext z at infinity.  With Phi_ext = f(r) cos(theta):
    C (f'' + 2 f'/r - 2 f/r^2) + C' f' = 0,   f ~ r at the origin,   f -> A r + B/r^2 outside.
Field: E_r = -f' cos(theta),  E_theta = (f/r) sin(theta).  A uniform field has f = a r.

What moves a star relative to the cluster is the external field minus the cluster's own (mass-weighted)
acceleration.  Under L2 there is no momentum conservation, so the mass-weighted mean is a choice; the core value
f'(0) and the mass-weighted mean are both reported.

Cluster: Plummer, M = 2e5 Msun, a = 3 pc (r_h ~ 3.9 pc).  Law: floored tanh-log, C = f + (1-f) tanh(gamma ln(1+rho/rho_c)),
floor Omega_m = 0.315 (as in the site's GC rows), knees and gammas from the GC table.
g_ext for a halo cluster at R_GC = 10 kpc: V^2/R with V = 220 km/s.  This is the field a diffuse tracer feels
where C = floor; the Galaxy's own field inside the halo is already the refracted one, so it is a scale, not a model.
"""
import numpy as np
from scipy.integrate import solve_ivp

G = 4.30091e-3                    # pc (km/s)^2 / Msun
KMS2_PC_TO_SI = 1e6 / 3.0857e16   # (km/s)^2/pc -> m/s^2
M, A = 2e5, 3.0
FLOOR = 0.315
g_ext_SI = (220e3)**2 / (10 * 3.0857e19)          # 1.57e-10 m/s^2


def rho(r):
    return 3 * M / (4 * np.pi * A**3) * (1 + r**2 / A**2) ** -2.5


def Menc(r):
    return M * r**3 / (r**2 + A**2) ** 1.5


def run(gamma, rho_c):
    C = lambda r: FLOOR + (1 - FLOOR) * np.tanh(gamma * np.log1p(rho(r) / rho_c))
    h = 1e-4

    def dC(r):
        return (C(r + h) - C(r - h)) / (2 * h)

    # f = r u(r) removes the f/r^2 cancellation:  C (r u'' + 4 u') + C' (u + r u') = 0,  u(0) = 1, u'(0) = 0
    def rhs(r, y):
        u, up = y
        return [up, -4 * up / r - dC(r) / C(r) * (u / r + up)]

    r0, r1 = 1e-2, 2000.0
    sol = solve_ivp(rhs, (r0, r1), [1.0, 0.0], rtol=1e-8, atol=1e-11, dense_output=True, method="RK45", max_step=1.0)
    assert sol.success, sol.message   # LSODA stepped over the knee in a first draft (4 steps); RK45 and Radau agree
    u1, up1 = sol.y[0, -1], sol.y[1, -1]
    f1, fp1 = r1 * u1, u1 + r1 * up1
    Aout = (2 * f1 / r1 + fp1) / 3          # outside, f = A r + B/r^2
    scale = 1.0 / Aout                      # far field = g_ext exactly (units of g_ext)

    def fvals(rr):
        u, up = sol.sol(rr)
        return rr * u * scale, (u + rr * up) * scale

    rr = np.logspace(-1, np.log10(200), 400)
    f, fp = fvals(rr)
    Er, Et = fp, f / rr                      # amplitudes of the cos / sin parts, in units of g_ext
    core = fp[0]
    # mass-weighted mean of E_z over the cluster: E_z = Er cos^2 + Et sin^2 -> angular mean (Er + 2 Et)/3
    dm = 4 * np.pi * rr**2 * rho(rr) * np.gradient(rr)
    Ez_mean = np.sum(dm * (Er + 2 * Et) / 3) / np.sum(dm)
    out = []
    for ref, lab in ((core, "core"), (Ez_mean, "mass-wtd")):
        dEr, dEt = Er - ref, Et - ref
        rms = np.sqrt((dEr**2 + 2 * dEt**2) / 3)      # angle-rms of the residual vector
        g_int = G * Menc(rr) / (C(rr) * rr**2) * KMS2_PC_TO_SI
        out.append((lab, ref, rms, rms * g_ext_SI / g_int))
    r_knee = rr[np.argmin(np.abs(rho(rr) - rho_c))]
    return rr, r_knee, C, out


print(f"g_ext = {g_ext_SI:.2e} m/s^2 (halo, R_GC = 10 kpc).  Plummer M = {M:.0e} Msun, a = {A} pc; floor {FLOOR}\n")
print("sharp-sphere check: 3 C_out/(C_in + 2 C_out) at C_in = 1, C_out = 0.315 ->", round(3*FLOOR/(1+2*FLOOR), 3))
for gamma, rho_c in ((0.489, 0.161), (2.0, 0.161), (0.489, 1.225), (2.0, 12.12), (0.489, 0.0079)):
    rr, rk, C, out = run(gamma, rho_c)
    print(f"\ngamma = {gamma}, rho_c = {rho_c} Msun/pc^3   knee radius {rk:.1f} pc, C(0) = {C(0.01):.3f}")
    for lab, ref, rms, ratio in out:
        print(f"  reference = {lab:8s}: E_z = {ref:.3f} g_ext")
        for R in (2, 5, 10, 20, 30, 50):
            i = np.argmin(np.abs(rr - R))
            print(f"     r = {R:3d} pc  C = {C(R):.3f}  residual rms = {rms[i]:.3f} g_ext   residual / own gravity = {ratio[i]:.3f}")
