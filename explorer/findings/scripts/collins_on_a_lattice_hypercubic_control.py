#!/usr/bin/env python3
"""Collins on a lattice: one-loop speed-of-light renormalization from a lattice regulator
with and without a time<->space symmetry.  PREREG: findings/PREREG-bell-liv-pincer-hypercubic-control-20261121.md

Euclidean lattice, a_s = 1, a_t = 1/xi.  Yukawa y*phi*psibar*psi, Wilson fermion with an
isotropic-at-O(k^2) Wilson term  w_mu = (r a_s / a_mu^2)(1 - cos k_mu a_mu),  r = 1,
so the free fermion has speed 1 up to O(a^2 k^2) (dim-6) at every xi.  The scalar is free
at tree level with speed 1.

Pi(p) = int d^4k/(2pi)^4 tr[S(k) S(k+p)] = 4 int [M M' - s.s'] / (D D')
Pi(p) ~ Pi0 + A p0^2 + B p1^2   (units: multiplied by 16 pi^2, i.e. y^2/16pi^2 per unit)
delta c_phi^2 = lambda (B - A), lambda = +-y^2/16pi^2 (overall sign convention-dependent).

Quadrature: periodic trapezoid (exponentially convergent for analytic periodic integrands),
reduced to the spatial cubic fundamental domain with multiplicities and to k0 >= 0 by
reflection (the +-h symmetric second difference is reflection-even).
"""
import sys, json, math, itertools
import numpy as np

R = 1.0


def comp(u, a):
    """u = k a on the periodic grid; returns s(k), w(k) for spacing a (a_s = 1)."""
    return np.sin(u) / a, R * (1.0 - np.cos(u)) / a**2


def spatial_domain(n):
    """Triples j1>=j2>=j3 in 0..n on the half grid of N=2n points; weights incl. reflections+perms."""
    rw = np.full(n + 1, 2.0); rw[0] = 1.0; rw[n] = 1.0
    js, ws = [], []
    for j1 in range(n + 1):
        for j2 in range(j1 + 1):
            for j3 in range(j2 + 1):
                if j1 == j2 == j3:
                    mult = 1
                elif j1 == j2 or j2 == j3:
                    mult = 3
                else:
                    mult = 6
                js.append((j1, j2, j3)); ws.append(mult * rw[j1] * rw[j2] * rw[j3])
    js = np.array(js); ws = np.array(ws)
    return js, ws, (2 * n) ** 3


def run(m, xi, n, h=0.02):
    a_t = 1.0 / xi
    js, ws, Ns3 = spatial_domain(n)
    u = math.pi * js / n                         # spatial u = k (a_s = 1), shape (T,3)
    s_sp, w_sp = comp(u, 1.0)
    sh_p = [comp(u[:, i] + h, 1.0) for i in range(3)]
    sh_m = [comp(u[:, i] - h, 1.0) for i in range(3)]
    S2sp = (s_sp**2).sum(1); Wsp = w_sp.sum(1)

    nt = int(round(n * max(xi, 1.0)))            # temporal half-grid size
    rwt = np.full(nt + 1, 2.0); rwt[0] = 1.0; rwt[nt] = 1.0
    sumA = sumB = 0.0
    for jt in range(nt + 1):
        u0 = math.pi * jt / nt
        s0, w0 = comp(np.array(u0), a_t)
        M = m + w0 + Wsp
        D = s0**2 + S2sp + M**2
        f0 = 4.0 * (M * M - (s0**2 + S2sp)) / (D * D)
        # temporal shifts
        fA = -2.0 * f0
        for sg in (+1, -1):
            s0p, w0p = comp(np.array(u0 + sg * h * a_t), a_t)
            Mp = m + w0p + Wsp
            Dp = s0p**2 + S2sp + Mp**2
            fA = fA + 4.0 * (M * Mp - (s0 * s0p + S2sp)) / (D * Dp)
        # spatial shifts, averaged over i (cubic-invariant combination)
        fB = -2.0 * f0
        for i in range(3):
            for (sp, wp) in (sh_p[i], sh_m[i]):
                Mp = m + w0 + Wsp - w_sp[:, i] + wp
                ss = s0**2 + S2sp - s_sp[:, i]**2 + s_sp[:, i] * sp
                Dp = s0**2 + S2sp - s_sp[:, i]**2 + sp**2 + Mp**2
                fB = fB + (4.0 * (M * Mp - ss) / (D * Dp)) / 3.0
        sumA += rwt[jt] * (ws * fA).sum()
        sumB += rwt[jt] * (ws * fB).sum()
    norm = xi / (Ns3 * 2 * nt)                   # int d^4k/(2pi)^4 = xi * <f>
    A = 16 * math.pi**2 * norm * sumA / (2 * h * h)
    B = 16 * math.pi**2 * norm * sumB / (2 * h * h)
    return A, B


if __name__ == "__main__":
    out = []
    masses = [0.5, 0.25, 0.125]
    xis = [1.0, 2.0, 0.5]
    for m in masses:
        nbase = int(math.ceil(12.0 / m))
        for xi in xis:
            for scale in (1.0, 1.5):
                n = int(round(nbase * scale))
                A, B = run(m, xi, n)
                rec = dict(m=m, xi=xi, n=n, A=A, B=B, dc2=B - A)
                out.append(rec)
                print(json.dumps(rec), flush=True)
    # h-check on one point
    A1, B1 = run(0.25, 2.0, 48, h=0.02)
    A2, B2 = run(0.25, 2.0, 48, h=0.01)
    hc = dict(h_check=dict(h002=B1 - A1, h001=B2 - A2))
    print(json.dumps(hc))
    out.append(hc)
    with open(sys.argv[1] if len(sys.argv) > 1 else "/tmp/collins_lattice.json", "w") as f:
        json.dump(out, f, indent=1)
