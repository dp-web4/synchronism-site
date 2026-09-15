#!/usr/bin/env python3
r"""
C4 of explorer/work/2026-09-15-wake-and-prereg.md (committed ab620af before this ran).

D_max from the galaxy mechanism: the 08-26 L2 solver (l2_vs_l3_and_the_missing_striction_force.py, machinery unchanged)
on the same toy exponential disc (Md = 5e10, Rd = 3 kpc, z0 = 0.3 kpc), with C evaluated at a Gaussian-smoothed
density rho_D.  The source (cell masses) is the unsmoothed disc.  rho = rho0 exp(-R/Rd) sech^2(z/z0) is separable, so a
3D Gaussian of width D factorises exactly into an in-plane 2D convolution (I0 kernel) times a 1D z convolution.

Pre-registered metric: max over R in [1, 50] kpc of g_L2/g_bar in the midplane; D_max(mechanism) = the D at which
(max boost - 1) falls to half its D = 0 value.
Post-hoc metrics (added before looking at output, because the pre-registered max is dominated by R >> Rd where
rho << rho_c whatever D is, so it is expected to be insensitive): boost at R = 3, 8, 15 kpc, and the shape proxy
S = boost(15)/boost(3), with D_shape = the D at which (S - 1) halves.  Labelled post-hoc in the finding.
"""
import math, time, json
import numpy as np
from scipy.special import i0e
import l2_vs_l3_and_the_missing_striction_force as L

Md, Rd, z0 = 5e10, 3.0, 0.3
DS = [0.0, 0.1, 0.3, 1.0, 3.0]        # kpc
MODELS = [('RG eps0=0.089 q=0.47', lambda: L.refracted(eps0=0.089, q=0.47, rho_c_pc3=8.3e-3)),
          ('RG eps0=0.56 q=0.47', lambda: L.refracted(eps0=0.56, q=0.47, rho_c_pc3=8.3e-3)),
          ('F gamma=0.489 rc=0.0079', lambda: L.framework(gamma=0.489, rho_crit_pc3=0.0079, Cmin=0.315)),
          ('F gamma=2 rc=0.078', lambda: L.framework(gamma=2.0, rho_crit_pc3=0.078, Cmin=0.315))]
RS = [1., 2., 3., 5., 8., 10., 15., 20., 30., 50.]


def smoothed_disc_rho(g, D):
    rho0 = Md / (4 * np.pi * Rd ** 2 * z0)
    if D == 0.0:
        return L.disc_rho(g, Md, Rd, z0)
    # z: sech^2 convolved with N(0, D) (reflection-symmetric), on a fine uniform z' grid
    zp = np.linspace(-(40 * z0 + 8 * D), 40 * z0 + 8 * D, 16001)
    h = 1 / np.cosh(np.minimum(np.abs(zp) / z0, 300.)) ** 2
    Sz = np.array([np.trapz(h * np.exp(-(z - zp) ** 2 / (2 * D ** 2)), zp) / (math.sqrt(2 * math.pi) * D)
                   for z in g.zc])
    # R: 2D in-plane Gaussian convolution of exp(-R/Rd): int R' f(R') (1/D^2) exp(-(R-R')^2/2D^2) I0e(RR'/D^2) dR'
    Rp = np.linspace(0, 60 * Rd + 10 * D, 40001)
    f = np.exp(-Rp / Rd)
    SR = np.array([np.trapz(Rp * f * np.exp(-(R - Rp) ** 2 / (2 * D ** 2)) * i0e(R * Rp / D ** 2), Rp) / D ** 2
                   for R in g.Rc])
    return rho0 * SR[:, None] * Sz[None, :]


def main():
    t0 = time.time()
    g = L.Grid(Rmax=400., zmax=400., NR=220, NZ=240, aR=4.5, aZ=8.0)
    Mc = L.disc_cellmass(g, Md, Rd, z0)
    Phi_N = L.solve_poisson(g, np.ones((g.NR, g.NZ)), Mc, 1.0, Md)
    dRN, _ = L.grad(g, Phi_N)
    idx = [int(np.argmin(np.abs(g.Rc - R))) for R in RS]
    print(f"grid {g.NR}x{g.NZ}; Newtonian solved [{time.time()-t0:.0f}s]")
    out = {}
    for mname, mk in MODELS:
        m = mk()
        print("\n" + "=" * 100)
        print(m.name)
        print("=" * 100)
        print(f"{'D kpc':>6s} {'rhoD(8,0) pc3':>14s} {'C(8,0)':>7s} " + " ".join(f"{'B@'+str(int(R)):>7s}" for R in RS)
              + f" {'maxB':>6s} {'S=B15/B3':>9s}")
        rows = {}
        for D in DS:
            rhoD = smoothed_disc_rho(g, D)
            # sanity: smoothing conserves mass
            Mchk = np.sum(rhoD * g.V) * 2
            C = m.C(rhoD)
            Phi2 = L.solve_poisson(g, C, Mc, m.Cmin, Md)
            dR2, _ = L.grad(g, Phi2)
            B = np.array([dR2[i, 0] / dRN[i, 0] for i in idx])
            S = B[RS.index(15.)] / B[RS.index(3.)]
            rows[D] = dict(B=B.tolist(), maxB=float(B.max()), S=float(S), Mfrac=float(Mchk / Md))
            i8 = idx[RS.index(8.)]
            print(f"{D:6.2f} {rhoD[i8,0]/1e9:14.4g} {C[i8,0]:7.4f} " + " ".join(f"{b:7.3f}" for b in B)
                  + f" {B.max():6.3f} {S:9.3f}   (mass in grid {Mchk/Md:.3f}) [{time.time()-t0:.0f}s]", flush=True)
        def halving(key, base_minus_one):
            b0 = rows[0.0][key] - 1
            for D in DS[1:]:
                if (rows[D][key] - 1) <= 0.5 * b0:
                    return D
            return None
        dmax_pre = halving('maxB', None)
        dmax_shape = halving('S', None)
        print(f"  PRE-REGISTERED D_max(mechanism) [(maxB-1) halves]: {dmax_pre if dmax_pre is not None else '> 3 kpc (not on grid)'}")
        print(f"  POST-HOC D_shape [(S-1) halves]: {dmax_shape if dmax_shape is not None else '> 3 kpc (not on grid)'}"
              f"   (S at D=0: {rows[0.0]['S']:.3f})")
        out[mname] = dict(rows={str(k): v for k, v in rows.items()}, dmax_pre=dmax_pre, dmax_shape=dmax_shape)
    json.dump(out, open('disc_boost_vs_smoothing_length.json', 'w'), indent=1)
    print(f"[{time.time()-t0:.0f}s]")


if __name__ == '__main__':
    main()
