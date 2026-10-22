#!/usr/bin/env python3
"""Covariant Refracted Gravity (Sanna, Matsakos & Diaferio 2023, arXiv:2109.11217) vs local tests.

PREREG: covariant_rg_local_tests_PREREG.md (commits 4e3898f, 1244148).
Reading run: CRG as published -- W(phi) = -1, V(phi) = -Xi*phi, Jordan frame, their Eqs. 7-9, 47-49.
Imported, not re-fit: Omega0 = 0.31, Omega_Xi0 = 0.65, H0 = 67.7 (their Fig./SNIa section).

A. Trace combination -> exact scalar equation (is it linear in phi?)
B. Static linearized field equations -> PPN gamma, Nordtvedt eta
C. Flat FLRW identity -> zeta0 = phidot/(H phi) over the admissible region -> Gdot/G vs LLR
D. Weak field of a Milky-Way-mass source: delta phi / phi, rotation curve, the far-field relation's domain
E. Sun's galactic orbit -> Gdot/G (the topic's literal question)
"""
import numpy as np
import sympy as sp

print("=" * 78)
print("A. Exact scalar equation from the paper's Eqs. (7)-(8)")
print("=" * 78)
# Scalars: phi, R (Ricci scalar, their convention), X = grad phi . grad phi, B = box phi, T = trace T_mn, Xi, G
phi, R, X, B, T, Xi, G = sp.symbols("phi R X B T Xi G")
# Eq. (8) Einstein2 traced with g^{mn} (g^{mn} g_mn = 4):
#   phi (R - 2R) - 4(-X/(2phi) + B - Xi phi) + B - X/phi = -8 pi G T
trace_E = sp.Eq(-phi * R - 4 * (-X / (2 * phi) + B - Xi * phi) + B - X / phi, -8 * sp.pi * G * T)
# Eq. (9) scalar: phi R - X/phi + 2B - 2 Xi phi = 0  -> solve for R
R_sol = sp.solve(sp.Eq(phi * R - X / phi + 2 * B - 2 * Xi * phi, 0), R)[0]
combined = sp.simplify(trace_E.lhs.subs(R, R_sol) - trace_E.rhs)
print("trace(Einstein) with R eliminated, LHS - RHS =", sp.expand(combined))
B_sol = sp.solve(combined, B)[0]
print("=> box phi =", sp.simplify(B_sol))
lin = sp.simplify(sp.diff(B_sol, phi, 2)) == 0 and sp.diff(B_sol, X) == 0
print("box phi is linear in phi and free of (grad phi)^2:", lin)
print("(Brans-Dicke trace eq. is (3+2w) box phi = 8piG T + ...; coefficient 1 -> w = -1)")

print()
print("=" * 78)
print("B. Static, linearized field equations: PPN gamma and Nordtvedt eta")
print("=" * 78)
eps = sp.symbols("epsilon")
x, y, z = sp.symbols("x y z")
Phi = sp.Function("Phi")(x, y, z)
U = sp.Function("U")(x, y, z)
dphi = sp.Function("dphi")(x, y, z)
rho = sp.Function("rho")(x, y, z)
phi0 = sp.symbols("phi0", positive=True)
t = sp.symbols("t")
coords = [t, x, y, z]
g = sp.diag(-(1 + 2 * eps * Phi), 1 - 2 * eps * U, 1 - 2 * eps * U, 1 - 2 * eps * U)
ginv = g.inv()


def christoffel(g, ginv):
    n = 4
    Gm = [[[0] * n for _ in range(n)] for _ in range(n)]
    for a in range(n):
        for b in range(n):
            for c in range(n):
                Gm[a][b][c] = sp.Rational(1, 2) * sum(
                    ginv[a, d] * (sp.diff(g[d, b], coords[c]) + sp.diff(g[d, c], coords[b]) - sp.diff(g[b, c], coords[d]))
                    for d in range(n))
    return Gm


Gm = christoffel(g, ginv)


def ricci_std(a, b):  # standard (MTW) convention: R_ab = d_c G^c_ab - d_b G^c_ac + G^c_cd G^d_ab - G^c_bd G^d_ac
    n = 4
    r = sum(sp.diff(Gm[c][a][b], coords[c]) for c in range(n)) - sum(sp.diff(Gm[c][a][c], coords[b]) for c in range(n))
    r += sum(Gm[c][c][d] * Gm[d][a][b] - Gm[c][b][d] * Gm[d][a][c] for c in range(n) for d in range(n))
    return sp.series(sp.simplify(r), eps, 0, 2).removeO()


lap = lambda f: sp.diff(f, x, 2) + sp.diff(f, y, 2) + sp.diff(f, z, 2)
# Paper uses Weinberg's convention R^W_mn = -R^MTW_mn and G_mn = -8piG T_mn.
# Eq. (Einstein3): phi R^W_mn + nabla_m nabla_n phi - (1/phi) d_m phi d_n phi = -8 pi G T_mn
# At O(eps): phi -> phi0 + eps dphi; nabla nabla dphi -> d d dphi (Gamma*dphi is O(eps^2)); static.
T00 = eps * rho
R00 = ricci_std(0, 0)
E00 = sp.expand(phi0 * (-R00) + sp.diff(eps * dphi, t, 2) - 0 + 8 * sp.pi * G * T00)
E00_1 = sp.simplify(E00.coeff(eps, 1))
print("00 eq at O(eps):  ", E00_1, "= 0")
print("   => phi0 lap(Phi) = 8 pi G rho  (matches paper Eq. 24 with phi=2 Newtonian): ",
      sp.simplify(E00_1.subs(lap(Phi), 8 * sp.pi * G * rho / phi0)) == 0 or
      sp.simplify(sp.expand(E00_1 + phi0 * lap(Phi) - 8 * sp.pi * G * rho)) == 0 or
      sp.simplify(sp.expand(E00_1 - phi0 * lap(Phi) + 8 * sp.pi * G * rho)) == 0)
Eij = {}
for (i, j) in [(1, 1), (1, 2)]:
    Rij = ricci_std(i, j)
    e = sp.expand(phi0 * (-Rij) + eps * sp.diff(dphi, coords[i], coords[j]))
    Eij[(i, j)] = sp.simplify(e.coeff(eps, 1))
    print(f"{i}{j} eq at O(eps): ", Eij[(i, j)], "= 0")
# Scalar eq. (static, weak): lap(dphi) - 2 Xi phi = 8 pi G T = -8 pi G rho  (Xi term: background, Hubble-scale; drop)
# Off-diagonal ij: d_i d_j [ phi0 (Phi - U) + dphi ] = 0 type => phi0 (U - Phi) relation; read it off
print("Off-diagonal xy equation fixes the combination ->", sp.factor(Eij[(1, 2)]))
# Solve with point mass outside source: Phi = -2GM/(phi0 r) (from 00), dphi = +2GM/r (from scalar eq lap dphi = -8piG rho)
M, r = sp.symbols("M r", positive=True)
rr = sp.sqrt(x**2 + y**2 + z**2)
Phi_s = -2 * G * M / (phi0 * rr)
dphi_s = 2 * G * M / rr
Us = sp.symbols("Us")
# Try U = k * Phi_s and solve the xy equation for k
k = sp.symbols("k")
xy = Eij[(1, 2)].subs({Phi: Phi_s, U: k * Phi_s, dphi: dphi_s}).doit()
ksol = sp.solve(sp.simplify(xy), k)
print("U = k*Phi outside a point mass, xy eq => k =", ksol)
xx = sp.simplify(Eij[(1, 1)].subs({Phi: Phi_s, U: ksol[0] * Phi_s, dphi: dphi_s}).doit())
print("xx eq residual with that k (vacuum):", xx)
gamma_ppn = ksol[0]  # g_ij = (1 - 2U) = (1 + 2 gamma |Phi|) -> gamma = U/Phi
print(f"PPN gamma = U/Phi = {gamma_ppn}")
beta = 1  # constant-W Brans-Dicke; Xi potential negligible on AU scales (checked in section D)
eta_N = 4 * beta - gamma_ppn - 3
print(f"Nordtvedt eta = 4 beta - gamma - 3 = {eta_N}  (BD: 1/(2+w) with w=-1)")
cass_mu, cass_sd = 2.1e-5, 2.3e-5
print(f"Cassini gamma-1 = ({cass_mu:.1e} +- {cass_sd:.1e}); CRG gamma-1 = {float(gamma_ppn) - 1:+.0f}"
      f"  -> {abs(float(gamma_ppn) - 1 - cass_mu) / cass_sd:.2e} sigma")
for lab, (m_, s_) in {"Will 2014 review": (4.4e-4, 4.5e-4), "Mueller workshop (recall-level)": (2.0e-4, 4.0e-4)}.items():
    print(f"Nordtvedt eta [{lab}] = ({m_:.1e} +- {s_:.1e}); CRG eta = {float(eta_N):.0f} -> {abs(float(eta_N) - m_) / s_:.2e} sigma")
dE = 4.64e-10 - 0.19e-10  # |Omega/mc^2| Earth - Moon
print(f"  Earth-Moon differential acceleration toward Sun: eta * {dE:.2e} = {float(eta_N) * dE:.2e}"
      f" (LLR WEP/SEP tests resolve ~1e-13)")

print()
print("=" * 78)
print("C. Flat baryon-only FLRW: zeta0 = phidot/(H phi) and Gdot/G")
print("=" * 78)
# Paper Eqs. system4a-c. 4a - 4b => q - zeta = 2. 4b + 4c => zeta^2/3 + 2 zeta + 2 = Omega - 2 Omega_Xi
zeta, q, qphi, Om, OX = sp.symbols("zeta q q_phi Omega Omega_Xi")
e4a = sp.Eq(q + zeta**2 / 3 + qphi / 3, Om / 2)
e4b = sp.Eq(2 + zeta + zeta**2 / 3 + qphi / 3, Om / 2)
e4c = sp.Eq(-qphi / 3 + zeta, Om / 2 - 2 * OX)
sol = sp.solve([e4a, e4b, e4c], [q, zeta, qphi], dict=True)
for s in sol:
    print("  zeta =", sp.simplify(s[zeta]), "   q =", sp.simplify(s[q]))
H0_kms = 67.7
H0_yr = H0_kms / 3.0857e19 * 3.15576e7
print(f"H0 = {H0_kms} km/s/Mpc = {H0_yr:.3e} /yr")
LLR = {"Hofmann & Mueller 2018 (as quoted in 09-24 finding)": (7.1e-14, 7.6e-14),
       "workshop-table reduction (recall-level)": (1.4e-13, 1.5e-13)}
# G_cav = 2G/phi (section B: Phi = -2GM/(phi0 r), U=0) -> Gdot/G = -phidot/phi = -zeta H
best_min = np.inf
worst = None
for Om0 in [0.25, 0.30, 0.31, 0.35]:
    for OX0 in np.linspace(1e-4, (1 + Om0) / 2, 400):
        disc = 3 * (1 + Om0 - 2 * OX0)
        for sgn in (+1, -1):
            z0 = -3 + sgn * np.sqrt(max(disc, 0))
            gd = -z0 * H0_yr
            if abs(gd) < best_min:
                best_min, worst = abs(gd), (Om0, OX0, z0)
print(f"Smallest |Gdot/G| over admissible (Omega0 in [0.25,0.35], 0<Omega_Xi0<=(1+Omega0)/2): "
      f"{best_min:.2e} /yr at Omega0={worst[0]}, Omega_Xi0={worst[1]:.4f}, zeta0={worst[2]:.3f}")
z_best = [float(-3 + s * np.sqrt(3 * (1 + 0.31 - 2 * 0.65))) for s in (+1, -1)]
print(f"Paper best fit (0.31, 0.65): zeta0 = {z_best}  -> Gdot/G = {[-zz * H0_yr for zz in z_best]}")
for lab, (m_, s_) in LLR.items():
    print(f"  LLR [{lab}] ({m_:.1e} +- {s_:.1e}):  best fit {abs(-z_best[0] * H0_yr - m_) / s_:.0f} sigma;"
          f"  most favourable admissible point {(best_min - m_) / s_:.0f} sigma")

print()
print("=" * 78)
print("D. Weak field of a Milky-Way-mass Hernquist sphere")
print("=" * 78)
Gsi, c = 6.674e-11, 2.998e8
Msun, kpc = 1.989e30, 3.0857e19
Mgal, a_h = 1e11 * Msun, 3 * kpc
OX0 = 0.65
H0_si = H0_kms * 1e3 / 3.0857e22
Xi_c1 = 3 * OX0 * (H0_si / c) ** 2  # 1/m^2 (c=1 units)
m_y = np.sqrt(2 * Xi_c1)
print(f"Scalar mass sqrt(2 Xi) = {m_y:.3e} /m -> range {1 / m_y / 3.0857e25:.2f} Gpc; m*AU = {m_y * 1.496e11:.1e}; m*100kpc = {m_y * 100 * kpc:.1e}")
rho_h = lambda r: Mgal * a_h / (2 * np.pi * r * (r + a_h) ** 3)
Menc = lambda r: Mgal * r**2 / (r + a_h) ** 2
# Yukawa solution of lap f - m^2 f = -4 pi s, s = 2 G rho / c^2 (so lap dphi - m^2 dphi = -8 pi G rho / c^2)
rg = np.logspace(np.log10(1e-4 * kpc), np.log10(1e4 * kpc), 40000)
s = 2 * Gsi * rho_h(rg) / c**2
from scipy.integrate import cumulative_trapezoid as ctz
inner = ctz(s * np.sinh(m_y * rg) * rg, rg, initial=0.0)
outer_cum = ctz(s * np.exp(-m_y * rg) * rg, rg, initial=0.0)
outer = outer_cum[-1] - outer_cum
f = 4 * np.pi / (m_y * rg) * (np.exp(-m_y * rg) * inner + np.sinh(m_y * rg) * outer)
newt = 2 * Gsi * Mgal / (c**2 * (rg + a_h))  # m->0 limit: dphi = -2 Phi_N(bare)/c^2
sel = (rg >= 0.1 * kpc) & (rg <= 100 * kpc)
print(f"dphi(0.1 kpc) = {np.interp(0.1 * kpc, rg, f):.3e}, dphi(100 kpc) = {np.interp(100 * kpc, rg, f):.3e}; "
      f"Yukawa vs massless max rel diff on [0.1,100] kpc: {np.max(np.abs(f[sel] / newt[sel] - 1)):.1e}")
Dphi = f[sel].max() - f[sel].min()
for lab, p0 in {"phi0 = 2 (Newtonian normalisation)": 2.0, "phi0 = 2 Om_b/Om0 = 0.316 (paper's cosmology)": 2 * 0.049 / 0.31,
                "phi0 = Om_b/(2 Om_Xi) = 0.038 (static 'far' solution)": 0.049 / 1.3}.items():
    print(f"  {lab}: max |Delta phi / phi| over 0.1-100 kpc = {Dphi / p0:.2e}")
# rotation curve from div(phi grad Phi) = 8 pi G rho:  Phi'(r) = 2 G M(<r) / (phi(r) r^2)
p0 = 0.049 / 1.3
r100 = 100 * kpc
phi_r = p0 + np.interp(r100, rg, f) - 0  # background + local (sign: dphi positive near mass)
phi_ref = p0 + np.interp(8 * kpc, rg, f)
v_crg = np.sqrt(2 * Gsi * Menc(r100) / (phi_r * r100))
v_newt_cal = np.sqrt(2 * Gsi * Menc(r100) / (phi_ref * r100))  # Newton with G_cav calibrated at 8 kpc
print(f"  v(100 kpc): CRG {v_crg / 1e3:.4f} km/s vs Newton(G calibrated at 8 kpc) {v_newt_cal / 1e3:.4f} km/s; "
      f"ratio-1 = {v_crg / v_newt_cal - 1:.1e}")
print(f"  (for comparison: a flat 200 km/s curve at 100 kpc would need ratio {200e3 / v_newt_cal:.2f})")
# Paper's far-field relation Eq. (27): radicand 1 + (2 Xi - 8 pi G rho / phi) / Phi'^2 must be >= 0
rho_bg = 0.049 * 3 * H0_si**2 / (8 * np.pi * Gsi)
for rk in [1, 10, 30, 100, 300, 1000]:
    rr_ = rk * kpc
    Pp = 2 * Gsi * Menc(rr_) / (p0 * rr_**2) / c**2
    rad = 1 + (2 * Xi_c1 - 8 * np.pi * Gsi * (rho_h(rr_) + rho_bg) / (p0 * c**2)) / Pp**2
    print(f"  Eq.27 radicand at {rk:5d} kpc: {rad:+.2e}  (rho/rho_bg = {rho_h(rr_) / rho_bg:.1e})")
# bound on Delta ln phi from Eq. 27 where defined: |dlnphi/dr| <= Phi' (1 + sqrt(1 + 2Xi/Phi'^2)) <= 2Phi' + sqrt(2Xi)
Pp = 2 * Gsi * Menc(rg) / (p0 * rg**2) / c**2
bound = ctz((2 * Pp + m_y)[sel], rg[sel], initial=0.0)[-1]
print(f"  Upper bound on |Delta ln phi| over 0.1-100 kpc from Eq. 27 wherever defined: {bound:.2e}")

print()
print("=" * 78)
print("E. Sun's galactic orbit -> Gdot/G = Phidot/c^2 (dphi/phi0 = -Phi_N/c^2)")
print("=" * 78)
U_sun, W_sun = 11.1e3, 7.25e3  # m/s, Schoenrich+2010 (peculiar w.r.t. LSR)
gR = (233e3) ** 2 / (8.2 * kpc)
rho0 = 0.1 * 6.77e-20  # 0.1 Msun/pc^3
gz = 4 * np.pi * Gsi * rho0 * 20.8 * 3.0857e16
yr = 3.15576e7
Gd_R = U_sun * gR / c**2 * yr
Gd_z = W_sun * gz / c**2 * yr
print(f"radial: U*g_R/c^2 = {Gd_R:.1e} /yr; vertical: W*g_z/c^2 = {Gd_z:.1e} /yr; LLR sigma 7.6e-14 -> "
      f"{(Gd_R + Gd_z) / 7.6e-14:.3f} sigma")
e_orb = 0.0167
print(f"Earth orbit eccentricity: annual fractional G oscillation amplitude e*GM_sun/(AU c^2) = "
      f"{e_orb * Gsi * Msun / (1.496e11 * c**2):.1e} (this is the eta_N = 1 physics of section B)")
