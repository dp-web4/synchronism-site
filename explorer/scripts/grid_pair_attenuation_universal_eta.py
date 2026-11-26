#!/usr/bin/env python3
"""Photon attenuation on the CMB with universal subluminal eta vs photon-only eta (post hoc, not pre-registered).

Approximation: LI leading-log Breit-Wheeler differential cross section in u = x(1-x) (x = lepton momentum fraction),
  dsigma/du = (2 pi r_e^2 m^2 / s) * 2/(u sqrt(1-4u)),  restricted to the kinematically allowed u.
Allowed region: s >= m^2/u + 3A u (universal, A = |eta| E^4/M^2);  s >= m^2/u + A (photon-only, electrons LI).
LI control: the same integral with A = 0 against the exact Breit-Wheeler total cross section.
CMB only (no radio background): LI attenuation at >= 1e19 eV is radio-dominated in reality, so ratios here bracket
the CMB contribution only.
"""
import numpy as np
from scipy import integrate

M_PL = 1.22e19; m = 0.000511; kT = 2.35e-13; r_e2 = (2.818e-13) ** 2  # cm^2
GEV3_TO_CM3 = (1 / 1.973e-14) ** 3

def bw_exact(s):
    if s <= 4 * m * m: return 0.0
    b = np.sqrt(1 - 4 * m * m / s)
    return np.pi * r_e2 / 2 * (1 - b * b) * ((3 - b ** 4) * np.log((1 + b) / (1 - b)) - 2 * b * (2 - b * b))

def sig_u(s, A, mode):
    # allowed u: g(u) = m^2/u + c*u <= s  (universal: c = 3A, cst = 0);  photon-only: m^2/u + A <= s
    if mode == 'photon-only':
        s2 = s - A
        if s2 <= 4 * m * m: return 0.0
        lo, hi = m * m / s2, 0.25
    else:
        c = 3 * A
        disc = s * s - 4 * c * m * m
        if c == 0:
            lo, hi = m * m / s, 0.25
        else:
            if disc <= 0: return 0.0
            lo = (s - np.sqrt(disc)) / (2 * c); hi = min(0.25, (s + np.sqrt(disc)) / (2 * c))
        if lo >= hi: return 0.0
    # integral of 2/(u sqrt(1-4u)) du = 2*[ln(u) - 2 ln(1 + sqrt(1-4u))] ... use closed form: d/du ln((1-r)/(1+r)), r = sqrt(1-4u)
    F = lambda u: 2 * np.log((1 - np.sqrt(1 - 4 * u)) / (1 + np.sqrt(1 - 4 * u)))
    return 2 * np.pi * r_e2 * m * m / s * (F(hi) - F(lo))

def rate(E, eta, mode, sigma=None):
    A = abs(eta) * E ** 4 / M_PL ** 2
    def integrand(lne, mu):
        eps = np.exp(lne)
        n = eps ** 2 / (np.pi ** 2 * (np.exp(eps / kT) - 1)) * GEV3_TO_CM3  # per GeV per cm^3
        s = 2 * E * eps * (1 - mu)
        sg = sigma(s) if sigma else sig_u(s, A, mode)
        return n * eps * sg * (1 - mu) / 2
    val, _ = integrate.dblquad(integrand, -1, 1, np.log(1e-4 * kT), np.log(40 * kT), epsabs=0, epsrel=1e-4)
    return val  # 1/cm

MPC = 3.086e24
print('LI control (CMB only): attenuation length, exact Breit-Wheeler vs leading-log approximation')
for Eev in (1e15, 1e17, 1e19):
    E = Eev / 1e9
    print(f'  E = {Eev:.0e} eV: exact {1/rate(E,0,"u",sigma=bw_exact)/MPC:.3g} Mpc; approx {1/rate(E,0.0,"universal")/MPC:.3g} Mpc')
print('\nattenuation length on CMB (Mpc): LI | photon-only eta | universal eta (kinematically allowed u only)')
for eta in (-0.0149, -1/48, -1/9):
    for Eev in (3e18, 1e19, 3e19, 1e20, 3e20):
        E = Eev / 1e9
        L0 = 1 / rate(E, 0.0, 'universal') / MPC
        rp = rate(E, eta, 'photon-only'); ru = rate(E, eta, 'universal')
        Lp = 1 / rp / MPC if rp > 0 else np.inf; Lu = 1 / ru / MPC if ru > 0 else np.inf
        print(f'  eta={eta:+.4f} E={Eev:.0e} eV: LI {L0:9.3g} | photon-only {Lp:9.3g} | universal {Lu:9.3g}')
