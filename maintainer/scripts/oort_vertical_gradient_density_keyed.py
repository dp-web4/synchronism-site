#!/usr/bin/env python3
"""
Does the Oort / K_z(z) limit see a density-keyed boost at the Sun once laboratory G is
measured at the same smoothed density?  (maintainer 2026-11-20)

ORIGIN. Visitor researcher persona 2026-11-20 (Pass 4): the site says the density-keyed
boost of 2.7-10.5x in g at the Sun "does not cancel in absolute dynamics ... which the Oort
limit can see". Under the 1-10 pc smoothing that the wide-binary null and the LLR item
require, lab G is measured at the same rho_s, so G_lab = G/C(rho_s) and the AMPLITUDE cancels
from a midplane Oort analysis, by the same argument the site applies to close-binary masses
and to ephemerides. What K_z(z) can see is the VERTICAL change C(rho(z)) over ~1 kpc.
"Mechanism wrong, verdict probably right, untested."

SET-UP (estimate, not a registered test).
 * 1D slab. Algebraic g = g_N / C(rho) and the L2 field equation d/dz(C dPhi/dz) = 4 pi G rho
   give the same vertical force in 1D:  K_z(z) = 2 pi G Sigma_b(<|z|) / C(rho_b(z)).
 * Lab G = G / C(rho_s), rho_s = baryonic midplane density (kpc gradients >> l = 1-10 pc).
 * Inferred dynamical surface density, the Bovy & Rix observable:
       Sigma_dyn(z) = K_z / (2 pi G_lab) = Sigma_b(<|z|) * C(rho_0) / C(rho_b(z)).
 * No dark matter (the framework's galaxy sector replaces it).
 * Baryons: gas + thin + thick exponential layers, midplane total fixed to 0.084 Msun/pc^3
   (McKee, Parravano & Hollenbach 2015 abstract: all matter 0.097 +- 0.013, DM 0.013;
   baryonic column 47.1 +- 3.4 Msun/pc^2). Shape grid scanned (scale heights, thick fraction,
   gas column); only shapes whose Sigma_b(<1.1 kpc) lies in 40-56 Msun/pc^2 are kept
   (Bovy & Rix 2013 stars 38 +- 4 plus gas). Gas column 10-14 is recalled, not read.
 * Data: Bovy & Rix 2013 (ApJ 779, 115; abstract read 2026-11-20): Sigma(|z| < 1.1 kpc) =
   68 +- 4 Msun/pc^2 total.

PREDICTIONS (written before the first run; hand estimate on one shape first):
 P1  Archive knee rho_c = 0.028 V^0.5 (V = 220 km/s), gamma = 2 and 0.489, unfloored:
     C(rho_0)/C(rho(1.1 kpc)) >= 10, Sigma_dyn(1.1) >= 300, excluded at > 5 sigma on every shape.
 P2  One global knee of the +2843 fit (rho_c = 4.4e-6, gamma = 0.046): ratio 1.2-2.0 and
     Sigma_dyn(1.1) within 3 sigma of 68 on most kept shapes (passes or marginal).
 P3  Archive knee with the affine Omega_m floor C_f = 0.315 + 0.685 C: ratio <= 3.17 and the
     excess over 68 is between 1 and 5 sigma (not decisive).
 P4  (identity control, must hold) the inferred MIDPLANE density equals rho_0 exactly for every
     law: the amplitude cancels. And C = const gives ratio 1 at every height.
"""
import numpy as np

G_kms = 4.301e-3  # pc (km/s)^2 / Msun

RHO0 = 0.084       # baryonic midplane, McKee+2015 (0.097 - 0.013)
OBS, OBS_ERR = 68.0, 4.0   # Bovy & Rix 2013, Sigma(|z|<1.1 kpc)
Z_OBS = 1100.0
V_MW = 220.0


def C_tanh(rho, gamma, rho_c):
    return np.tanh(gamma * np.log1p(rho / rho_c))


LAWS = {
    'archive knee 0.028*V^0.5, gamma=2':      lambda r: C_tanh(r, 2.0, 0.028 * np.sqrt(V_MW)),
    'archive knee 0.028*V^0.5, gamma=0.489':  lambda r: C_tanh(r, 0.489, 0.028 * np.sqrt(V_MW)),
    'Jeans A=4.6e-5*V^2, gamma=2':            lambda r: C_tanh(r, 2.0, 4.6e-5 * V_MW**2),
    'units hybrid 0.029*V^2, gamma=2':        lambda r: C_tanh(r, 2.0, 0.029 * V_MW**2),
    'global knee fit 4.4e-6, gamma=0.046':    lambda r: C_tanh(r, 0.046, 4.4e-6),
    'archive knee, gamma=2, affine Om floor': lambda r: 0.315 + 0.685 * C_tanh(r, 2.0, 0.028 * np.sqrt(V_MW)),
    'archive knee, g=0.489, affine Om floor': lambda r: 0.315 + 0.685 * C_tanh(r, 0.489, 0.028 * np.sqrt(V_MW)),
    'CONTROL C = const':                      lambda r: 0.4 + 0.0 * r,
}


def shape_grid():
    for sig_g in (10.0, 12.0, 14.0):
        for h_g in (100.0, 150.0):
            for h_thin in (250.0, 300.0, 350.0):
                for h_thick in (700.0, 900.0, 1100.0):
                    for f_thick in (0.04, 0.08, 0.12):
                        rg0 = sig_g / (2 * h_g)
                        rs0 = RHO0 - rg0
                        if rs0 <= 0:
                            continue
                        rthin0 = rs0 / (1 + f_thick)
                        rthick0 = rs0 - rthin0
                        yield dict(sig_g=sig_g, h_g=h_g, h_thin=h_thin, h_thick=h_thick, f_thick=f_thick,
                                   comps=[(rg0, h_g), (rthin0, h_thin), (rthick0, h_thick)])


def rho(z, comps):
    return sum(r0 * np.exp(-abs(z) / h) for r0, h in comps)


def sigma_within(z, comps):
    return sum(2 * r0 * h * (1 - np.exp(-abs(z) / h)) for r0, h in comps)


def main():
    kept = []
    for s in shape_grid():
        sb = sigma_within(Z_OBS, s['comps'])
        if 40.0 <= sb <= 56.0:
            s['sb11'] = sb
            s['rho11'] = rho(Z_OBS, s['comps'])
            kept.append(s)
    print(f"shapes kept: {len(kept)} (Sigma_b(<1.1 kpc) 40-56); rho(1.1 kpc)/rho_0 range "
          f"{min(k['rho11'] for k in kept)/RHO0:.4f}-{max(k['rho11'] for k in kept)/RHO0:.4f}; "
          f"Sigma_b(<1.1) {min(k['sb11'] for k in kept):.1f}-{max(k['sb11'] for k in kept):.1f}")

    # P4 identity: inferred midplane density = rho_0 by numerical derivative
    s0 = kept[0]
    dz = 0.01
    for name, C in LAWS.items():
        Kz = lambda z: 2 * np.pi * G_kms * sigma_within(z, s0['comps']) / C(rho(z, s0['comps']))
        G_lab = G_kms / C(RHO0)
        rho_dyn0 = (Kz(dz) - Kz(0.0)) / dz / (4 * np.pi * G_lab)
        assert abs(rho_dyn0 / RHO0 - 1) < 1e-3, (name, rho_dyn0)
    print("P4 identity: inferred midplane density = rho_0 for every law (amplitude cancels): PASS")

    print(f"\n{'law':42s} {'C(rho0)':>8s} {'ratio range':>16s} {'Sigma_dyn(1.1)':>18s} {'z vs 68+-4 (min..max)':>24s}")
    for name, C in LAWS.items():
        ratios, sdyn, zs = [], [], []
        for k in kept:
            R = C(RHO0) / C(k['rho11'])
            sd = R * k['sb11']
            err = np.hypot(OBS_ERR, R * 4.0)   # 4 Msun/pc^2 baryon-census error scaled by R
            ratios.append(R); sdyn.append(sd); zs.append((sd - OBS) / err)
        print(f"{name:42s} {C(RHO0):8.4f} {min(ratios):7.2f}-{max(ratios):7.2f} "
              f"{min(sdyn):8.0f}-{max(sdyn):8.0f} {min(zs):+10.1f} .. {max(zs):+6.1f}")

    # the amplitude the site quoted, for reference
    for name in ('archive knee 0.028*V^0.5, gamma=2', 'archive knee 0.028*V^0.5, gamma=0.489'):
        print(f"amplitude 1/C(rho_s) at the Sun, {name}: {1/LAWS[name](RHO0):.2f}  (cancels against G_lab)")


if __name__ == '__main__':
    main()
