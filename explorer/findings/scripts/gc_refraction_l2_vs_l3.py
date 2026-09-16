#!/usr/bin/env python3
r"""
A GLOBULAR CLUSTER IN THE GALACTIC FIELD UNDER L2 AND UNDER L3 (THE ACTION)
==========================================================================
Explorer 2026-09-16.  Pre-registered in explorer/work/2026-09-16-wake-and-prereg.md (commit b0a82e2), controls
C0a-C0c and predictions P1-P3.  P4/P5 are in gc_window_under_l3_monopole.py and gc_rt_scaling_catalogue.py.

Dynamics (08-26 finding, sec.1):  L = -C(rho)|grad Phi|^2/8piG - rho Phi.
   field:  div[C grad Phi] = 4 pi G rho                            (L2 and L3 share it)
   force:  L2  a = -grad Phi
           L3  a = -grad Phi - grad Psi,   Psi = C'(rho) |grad Phi|^2 / 8 pi G      (striction)
Cluster in a uniform external field.  Phi = Phi_s + Phi_e (field eq. linear at fixed rho).
   Phi_s: spherical, grad Phi_s = g_s r_hat,  g_s = G M(<r) / (C r^2)
   Phi_e = -g_ext f(r) cos(theta),  C (f'' + 2f'/r - 2f/r^2) + C_r f' = 0,  f -> r at infinity (C = floor there)
Terms linear in g_ext:
   L2:  a1 = g_ext grad[f cos]                         -> q = f
   L3:  Psi_1 = 2 C' grad Phi_s . grad Phi_e / 8piG = -g_ext cos C' g_s f' / 4piG
        a1 = g_ext grad[q cos],  q = f + s,  s = C'(rho) g_s f' / (4 pi G)      [s in pc]
   For q cos(theta):  a_r = q' cos,  a_theta = -(q/r) sin.   Uniform (= const z-hat) iff q' = q/r = const.
Monopole under L3:  inward g_L3 = g_s + dPsi_0/dr,  Psi_0 = C'(rho) g_s^2 / 8 pi G.
Units: pc, Msun, km/s.  C'(rho) analytic.
"""
import numpy as np
from scipy.integrate import solve_ivp

G = 4.30091e-3                    # pc (km/s)^2 / Msun
SI = 1e6 / 3.0857e16              # (km/s)^2/pc -> m/s^2
FLOOR = 0.315
GEXT_SI = (220e3)**2 / (10 * 3.0857e19)
GEXT = GEXT_SI / SI               # (km/s)^2/pc
PAIRS = ((0.489, 0.161), (2.0, 0.161), (0.489, 1.225), (2.0, 12.12), (0.489, 0.0079))


class Law:
    def __init__(self, gamma, rho_c, floor=FLOOR):
        self.g, self.rc, self.f = gamma, rho_c, floor

    def C(self, rho):
        return self.f + (1 - self.f) * np.tanh(self.g * np.log1p(rho / self.rc))

    def dC(self, rho):             # dC/drho, pc^3/Msun
        return (1 - self.f) * self.g / np.cosh(self.g * np.log1p(rho / self.rc))**2 / (self.rc + rho)


class Plummer:
    def __init__(self, M, a):
        self.M, self.a = M, a

    def rho(self, r):
        return 3 * self.M / (4 * np.pi * self.a**3) * (1 + r**2 / self.a**2) ** -2.5

    def drho(self, r):
        return self.rho(r) * (-5 * r / (self.a**2 + r**2))

    def Menc(self, r):
        return self.M * r**3 / (r**2 + self.a**2) ** 1.5


def solve(law, cl, r1=3000.0, n=6000):
    rr = np.geomspace(1e-2, r1, n)
    Cr = lambda r: law.dC(cl.rho(r)) * cl.drho(r)

    def rhs(r, y):
        u, up = y
        return [up, -4 * up / r - Cr(r) / law.C(cl.rho(r)) * (u / r + up)]

    sol = solve_ivp(rhs, (rr[0], r1), [1.0, 0.0], method="Radau", rtol=1e-10, atol=1e-13,
                    t_eval=rr, max_step=0.25)
    assert sol.success, sol.message
    u, up = sol.y
    f, fp = rr * u, u + rr * up
    Aout = (2 * f[-1] / rr[-1] + fp[-1]) / 3          # f = A r + B/r^2 outside
    f, fp = f / Aout, fp / Aout

    rho = cl.rho(rr); C = law.C(rho); dC = law.dC(rho)
    gs = G * cl.Menc(rr) / (C * rr**2)
    # L3 dipole
    s = dC * gs * fp / (4 * np.pi * G)
    q = f + s
    qp = np.gradient(q, rr)
    # L3 monopole
    Psi0 = dC * gs**2 / (8 * np.pi * G)
    gL3 = gs + np.gradient(Psi0, rr)

    dm = 4 * np.pi * rr**2 * rho * np.gradient(rr)
    out = dict(r=rr, rho=rho, C=C, gs=gs, gL3=gL3, Psi0=Psi0)
    for lab, (Q, QP) in (("L2", (f, fp)), ("L3", (q, qp))):
        mean = np.sum(dm * (QP + 2 * Q / rr) / 3) / np.sum(dm)
        res = np.sqrt(((QP - mean)**2 + 2 * (Q / rr - mean)**2) / 3)
        out[lab] = dict(mean=mean, res=res, Er=QP, Et=Q / rr)
    i = np.where(rho < law.rc)[0]
    out["r_knee"] = rr[i[0]] if len(i) else np.inf
    return out


def at(o, key, R, lab=None):
    i = np.argmin(np.abs(o["r"] - R))
    return (o[lab][key] if lab else o[key])[i]


def main():
    cl = Plummer(2e5, 3.0)
    print(f"g_ext = {GEXT_SI:.3e} m/s^2 = {GEXT:.4f} (km/s)^2/pc;  Plummer M = 2e5, a = 3 pc;  floor {FLOOR}\n")

    print("=" * 100)
    print("CONTROLS")
    print("=" * 100)
    o = solve(Law(0.489, 0.161), cl)
    print(f"C0a  L2 mass-weighted E_z (0.489, 0.161) = {o['L2']['mean']:.4f}   (maintainer 0.654; pass if |d| <= 0.01)")
    ok = True
    for g, rc in PAIRS:
        oo = solve(Law(g, rc), cl)
        m3 = oo["L3"]["mean"]
        print(f"C0b  L3 mass-weighted E_z ({g}, {rc}) = {m3:.4f}   L2 = {oo['L2']['mean']:.4f}   (pass if |L3-1| <= 0.01)")
        ok &= abs(m3 - 1) <= 0.01
    for rc in (1e9, 1e-9):
        oo = solve(Law(0.489, rc), cl)
        print(f"C0c  uniform C (rho_c = {rc:g}, C = {oo['C'][0]:.4f}..{oo['C'][-1]:.4f}): "
              f"max residual L2 {oo['L2']['res'].max():.2e}  L3 {oo['L3']['res'].max():.2e}  "
              f"max |gL3/gs - 1| {np.max(np.abs(oo['gL3']/oo['gs']-1)):.2e}")
    # resolution check
    o2 = solve(Law(0.489, 0.161), cl, n=12000)
    print(f"res  n=12000: L3 mean {o2['L3']['mean']:.4f}, L3 residual at 20 pc {at(o2,'res',20,'L3'):.4f} "
          f"(n=6000: {at(o,'res',20,'L3'):.4f})")
    print(f"C0b all pass: {ok}")

    print("\n" + "=" * 100)
    print("P1 (dipole residual, units g_ext, reference = own mass-weighted mean)  and  P2 (monopole striction)")
    print("=" * 100)
    for g, rc in PAIRS:
        o = solve(Law(g, rc), cl)
        rk = o["r_knee"]
        print(f"\n(gamma {g}, rho_c {rc})  knee radius {rk:.1f} pc   L2 mean {o['L2']['mean']:.3f}  L3 mean {o['L3']['mean']:.3f}")
        print(f"{'r':>6s} {'C':>6s} {'resL2':>8s} {'resL3':>8s} {'L3/L2':>7s} {'Er_L3':>8s} {'Et_L3':>8s} "
              f"{'dPsi/dr/gs':>11s} {'gL3/gs':>8s} {'resL2*gext/gs':>14s} {'resL3*gext/|gL3|':>17s}")
        radii = sorted(set([2, 5, 10, 15, 20, 30, 50, 80] + [round(rk, 1)]))
        for R in radii:
            i = np.argmin(np.abs(o["r"] - R))
            r2, r3 = o["L2"]["res"][i], o["L3"]["res"][i]
            gs, g3 = o["gs"][i], o["gL3"][i]
            print(f"{R:6.1f} {o['C'][i]:6.3f} {r2:8.3f} {r3:8.3f} {r3/max(r2,1e-12):7.1f} {o['L3']['Er'][i]:8.3f} "
                  f"{o['L3']['Et'][i]:8.3f} {(g3-gs)/gs:11.3f} {g3/gs:8.3f} {r2*GEXT/gs:14.3f} {r3*GEXT/abs(g3):17.3f}")
        rr = o["r"]; m = rr < 3 * rk
        neg = rr[m & (o["gL3"] < 0)]
        print(f"   net L3 monopole outward inside 3 r_knee: {'YES, r = %.1f-%.1f pc' % (neg.min(), neg.max()) if len(neg) else 'no'}"
              f";  min gL3/gs over r<3r_knee = {np.min(o['gL3'][m]/o['gs'][m]):.2f}, max = {np.max(o['gL3'][m]/o['gs'][m]):.2f}")

    print("\n" + "=" * 100)
    print("P3  L2 truncation radius r_eq: first r > r_knee with resL2 * g_ext >= g_s   (gamma 0.489, rho_c 0.161, a = 3 pc)")
    print("=" * 100)
    law = Law(0.489, 0.161)
    Ms = [5e4, 1e5, 2e5, 5e5, 1e6, 2e6]; gf = [0.5, 1.0, 2.0]
    tab = {}
    for M in Ms:
        o = solve(law, Plummer(M, 3.0))
        for x in gf:
            ratio = o["L2"]["res"] * GEXT * x / o["gs"]
            idx = np.where((o["r"] > o["r_knee"]) & (ratio >= 1))[0]
            tab[(M, x)] = o["r"][idx[0]] if len(idx) else np.nan
        print(f"M {M:8.0e}  r_knee {o['r_knee']:6.1f}   r_eq(g x0.5, x1, x2) = "
              + "  ".join(f"{tab[(M, x)]:7.1f}" for x in gf)
              + f"   res at r_eq(x1) {at(o, 'res', tab[(M,1.0)], 'L2'):.3f}")
    lm = np.log10([[tab[(M, 1.0)]] for M in Ms]).ravel()
    bM = np.polyfit(np.log10(Ms), lm, 1)[0]
    bg = np.mean([np.polyfit(np.log10(gf), np.log10([tab[(M, x)] for x in gf]), 1)[0] for M in Ms])
    print(f"slope d log r_eq / d log M (g x1) = {bM:.3f}   d log r_eq / d log g_ext (mean over M) = {bg:.3f}")
    print(f"P3 pass (0.50 +/- 0.08, -0.50 +/- 0.08): {abs(bM-0.5)<=0.08 and abs(bg+0.5)<=0.08}")
    # Jacobi for comparison at R_GC = 10 kpc, V = 220
    for M in (2e5,):
        rJ = (G * M * 10000.0**2 / (2 * 220.0**2)) ** (1 / 3)
        print(f"Newtonian Jacobi radius, M = {M:.0e}, R_GC 10 kpc: {rJ:.1f} pc;  L2 r_eq {tab[(M,1.0)]:.1f} pc")


if __name__ == "__main__":
    main()
