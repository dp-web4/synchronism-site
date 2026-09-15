#!/usr/bin/env python3
r"""
POST-HOC companion to compact_tracer_bubble_factor.py (NOT in the 2026-09-15 pre-registration).

Why it exists:
 (1) The pre-registered RG rows paired eps0 in {0.089, 0.25, 0.56} with Q = 0.47, rho_c = 0.0083.  Reading the papers
     (Cesare+2022 arXiv:2102.12499; Cesare 2024 review arXiv:2404.06538) shows (0.089, 0.47, 10^-24.25 g/cm3 = 0.0083
     Msun/pc3) is the ELLIPTICAL (E0) mean set, and the DiskMass mean set is (0.56, 0.92, 10^-25.30 g/cm3), with a joint
     DMS fit (0.661, 1.79, 10^-24.54).  So the eps0 = 0.56 pre-registered row is a hybrid no paper published.  Here: the
     three published sets as published.
 (2) The only citable fractional tolerance on a compact-vs-diffuse differential acceleration located in the literature
     check is Kesden & Kamionkowski 2006 (Sgr streams; a differential force >~10% of gravity between the satellite's
     bound core and its escaped stars is disfavoured).  That structure is exactly the L2 bubble: the bound remnant
     feels F g_out, escaped stars beyond D feel g_out.  So: F for a Sgr-like baryonic remnant (no dark matter in a
     density-keyed law).  Masses and radii are bracketing guesses, not a fit: M in {2e7, 1e8} Msun, Plummer r_h in
     {0.5, 1.5} kpc.  Illustrative, labelled as such.
"""
import math
import numpy as np
import compact_tracer_bubble_factor as B

MSUN_PC3_G_CM3 = 6.770e-23
B.LAWS.update({
    'RG E0 mean (0.089,0.47,-24.25)': ('RG', dict(eps0=0.089, Q=0.47, rc=10 ** -24.25 / MSUN_PC3_G_CM3)),
    'RG DMS mean (0.56,0.92,-25.30)': ('RG', dict(eps0=0.56, Q=0.92, rc=10 ** -25.30 / MSUN_PC3_G_CM3)),
    'RG DMS joint (0.661,1.79,-24.54)': ('RG', dict(eps0=0.661, Q=1.79, rc=10 ** -24.54 / MSUN_PC3_G_CM3)),
})
PUB = ['RG E0 mean (0.089,0.47,-24.25)', 'RG DMS mean (0.56,0.92,-25.30)', 'RG DMS joint (0.661,1.79,-24.54)',
       'F g0.489 rc0.0079', 'F g2 rc0.078']
BG = 1e-5


def dmin(law, M, rh, T, grid=np.logspace(-2, math.log10(3000.0), 43)):
    Fs = np.array([B.bubble(law, M, rh, D, BG)['F_L2'] for D in grid])
    bad = np.where(np.abs(1 - Fs) > T)[0]
    if len(bad) == 0:
        return '<0.01pc', Fs
    if bad[-1] == len(grid) - 1:
        return '>3kpc', Fs
    return f"{grid[bad[-1]+1]:.3g}pc", Fs


def main():
    for law in PUB[:3]:
        print(f"{law}: rho_c = {B.LAWS[law][1]['rc']:.3g} Msun/pc3")
    print("\n" + "=" * 100)
    print("A. Published RG parameter sets as published: halo background 1e-5; D_min(T) for the pre-registered tracers")
    print("=" * 100)
    print(f"{'law':34s} {'tracer':20s} {'eps_out':>7s} {'F(1pc)':>7s} {'F(100pc)':>8s} {'Dmin .01':>9s} {'Dmin .05':>9s} {'Dmin .2':>9s}")
    for law in PUB[:3]:
        for nm, M, rh in B.TRACERS:
            row = [dmin(law, M, rh, T) for T in (0.01, 0.05, 0.2)]
            Fs = row[0][1]
            grid = np.logspace(-2, math.log10(3000.0), 43)
            pick = lambda d: float(np.interp(math.log(d), np.log(grid), Fs))
            eo = B.bubble(law, M, rh, 1000.0, BG)['eps_out']
            print(f"{law:34s} {nm:20s} {eo:7.4f} {pick(1):7.4f} {pick(100):8.4f} {row[0][0]:>9s} {row[1][0]:>9s} {row[2][0]:>9s}", flush=True)

    print("\n" + "=" * 100)
    print("B. Sgr-like baryonic remnant (ILLUSTRATIVE; K&K 2006 tolerance ~0.10): F_L2 vs D, halo background 1e-5")
    print("=" * 100)
    Ds = [10.0, 100.0, 300.0, 1000.0, 3000.0]
    print(f"{'law':34s} {'M':>7s} {'r_h pc':>7s} {'rho_bar(r_h)':>12s} " + " ".join(f"{'F@'+str(int(D)):>8s}" for D in Ds) + "  |1-F|<=0.1 at D<=300pc?")
    for law in PUB:
        for M in (2e7, 1e8):
            for rh in (500.0, 1500.0):
                a = rh / 1.30477
                rho_h = 3 * M / (4 * math.pi * a ** 3) * (1 + (rh / a) ** 2) ** -2.5
                Fs = [B.bubble(law, M, rh, D, BG)['F_L2'] for D in Ds]
                ok = all(abs(1 - F) <= 0.1 for F, D in zip(Fs, Ds) if D <= 300)
                print(f"{law:34s} {M:7.0e} {rh:7.0f} {rho_h:12.3g} " + " ".join(f"{F:8.4f}" for F in Fs)
                      + f"  {'yes' if ok else 'NO'}", flush=True)


if __name__ == '__main__':
    main()
