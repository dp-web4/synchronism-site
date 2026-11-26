#!/usr/bin/env python3
"""Grid's frame-locked cubic p^4 term vs SME d=6 and direction-dependent thresholds.

PREREG: explorer/findings/PREREG-grid-cubic-p4-vs-sme-d6-and-direction-thresholds-20261126.md (e3f03f0).

Convention: E^2 = p^2 + m^2 + eta(n) p^4 / M^2, lattice spacing a = 1/M (M = M_Pl = 1.22e19 GeV).
Stencils: leapfrog time, dt = lam*a. Dispersion (4/lam^2) sin^2(w lam/2) = L(k).
"""
import numpy as np
from mpmath import mp, mpf, sin, cos, asin, sqrt as msqrt
from scipy.special import sph_harm

mp.dps = 50
M_PL = 1.22e19  # GeV

# ---------------------------------------------------------------- stencils (symbols L(k), a = 1)
def L_27(k, w1, w2, w3):
    kx, ky, kz = k
    faces = sum(1 - cos(ki) for ki in k)
    edges = sum(2 - cos(a + b) - cos(a - b) for a, b in ((kx, ky), (ky, kz), (kx, kz)))
    corners = 8 - 8 * cos(kx) * cos(ky) * cos(kz)  # sum over 8 corners of (1 - cos k.e) = 8 - 8 c c c
    return 2 * (2 * w1 * faces + 2 * w2 * edges + w3 * corners)

def L_corner(k):
    return L_27(k, 0, 0, mpf(1) / 8)

def L_product(k):  # [1/4,1/2,1/4]^3 product stencil (11-22 "M")
    p = 1
    for ki in k:
        p *= cos(ki / 2) ** 2
    return 4 * (1 - p)

W3_ISO = mpf('0.01')
def L_iso(k):  # isotropic-error family member with largest lam_max (maintainer run)
    return L_27(k, 4 * W3_ISO + mpf(1) / 6, mpf(1) / 12 - 2 * W3_ISO, W3_ISO)

def L_7pt(k):
    return 2 * sum(1 - cos(ki) for ki in k)

# generalized Yee: transverse-averaged staggered differences d_i = 2 sin(k_i/2) prod_{j!=i} cos(k_j/2)
def d_avg(k):
    out = []
    for i in range(3):
        v = 2 * sin(k[i] / 2)
        for j in range(3):
            if j != i:
                v *= cos(k[j] / 2)
        out.append(v)
    return out

def d_yee(k):
    return [2 * sin(ki / 2) for ki in k]

def maxwell_eigs(dfun, k):
    d = np.array([float(x) for x in dfun(k)])
    C = np.dot(d, d) * np.eye(3) - np.outer(d, d)  # curl-curl symbol for real staggered symbols
    return np.sort(np.linalg.eigvalsh(C))

def omega_leapfrog(Lval, lam):
    s = msqrt(Lval) * lam / 2
    if s > 1:
        return None
    return 2 * asin(s) / lam

def eta_of(Lfun, nhat, lam, k=mpf('1e-6')):
    kv = [k * mpf(x) for x in nhat]
    w = omega_leapfrog(Lfun(kv), lam)
    return float((w ** 2 - k ** 2) / k ** 4)

def S4(n):
    return sum(x ** 4 for x in n)

def unit(v):
    v = np.array(v, float)
    return v / np.linalg.norm(v)

DIRS = {'axis': unit([1, 0, 0]), 'face diag': unit([1, 1, 0]), 'body diag': unit([1, 1, 1]),
        'generic': unit([0.3, 0.5, 0.81])}

STENCILS = {
    '(a) corner, lam=1': (L_corner, 1.0, lambda n: -(n[0]**2*n[1]**2 + n[1]**2*n[2]**2 + n[0]**2*n[2]**2) / 3),
    '(M) product, lam=1': (L_product, 1.0, lambda n: -(n[0]**2*n[1]**2 + n[1]**2*n[2]**2 + n[0]**2*n[2]**2) / 12),
    '(b) iso-error, lam=sqrt3/2': (L_iso, float(msqrt(3) / 2), lambda n: -1 / 48 + 0 * n[0]),
}

print('=== 1. low-k eta(n) from exact leapfrog dispersions vs closed forms ===')
for name, (Lf, lam, closed) in STENCILS.items():
    row = []
    for dn, n in DIRS.items():
        e = eta_of(Lf, n, mpf(lam))
        row.append(f'{dn}: {e:+.6f} (closed {closed(n):+.6f})')
    print(f'{name:28s} ' + ' | '.join(row))

# exactness along axis at lam = 1 for corner and product stencils (all orders)
for name, Lf in (('corner', L_corner), ('product', L_product)):
    errs = []
    for kk in ('0.001', '0.3', '1.0', '2.5'):
        k = mpf(kk)
        w = omega_leapfrog(Lf([k, 0, 0]), mpf(1))
        errs.append(float(w - k))
    print(f'{name} along axis at lam=1, omega - k at k = 0.001, 0.3, 1.0, 2.5: {errs}')

print('\n=== 2. lattice Maxwell: generalized Yee (transverse-averaged) vs plain Yee ===')
for nm, dfun in (('avg-Yee', d_avg), ('plain Yee', d_yee)):
    # stability: max transverse eigenvalue over BZ
    g = np.linspace(-np.pi, np.pi, 49)
    mx = 0.0
    for kx in g:
        for ky in g:
            for kz in g:
                ev = maxwell_eigs(dfun, [mpf(kx), mpf(ky), mpf(kz)])
                mx = max(mx, ev[-1])
    lam_max = 2 / np.sqrt(mx)
    print(f'{nm}: max eigenvalue over BZ = {mx:.4f} -> leapfrog lam_max = {lam_max:.4f}')
    for dn, n in DIRS.items():
        k = mpf('1e-4')
        kv = [k * mpf(x) for x in n]
        ev = maxwell_eigs(dfun, kv)
        # two transverse eigenvalues (largest two), longitudinal ~ 0
        lam = min(1.0, lam_max) if nm == 'avg-Yee' else 1 / np.sqrt(3)
        etas = []
        for e in ev[1:]:
            w = omega_leapfrog(mpf(e), mpf(lam))
            etas.append(float((w ** 2 - k ** 2) / k ** 4))
        print(f'   {dn:10s} lam={lam:.4f}: longitudinal eig {ev[0]:.1e}; transverse eta = {etas[0]:+.5f}, {etas[1]:+.5f}'
              f'  (corner-stencil closed form {STENCILS["(a) corner, lam=1"][2](n):+.5f})')
# nonbirefringence at finite k (all orders) for avg-Yee
rng = np.random.default_rng(1)
maxsplit = 0
for _ in range(2000):
    kv = rng.uniform(-np.pi, np.pi, 3)
    ev = maxwell_eigs(d_avg, [mpf(x) for x in kv])
    maxsplit = max(maxsplit, abs(ev[2] - ev[1]))
print(f'avg-Yee: max |difference of the two transverse eigenvalues| over 2000 random k in BZ = {maxsplit:.1e}')
# corner-stencil symbol vs avg-Yee |d|^2: difference order
for kk in ('1e-2', '1e-3'):
    k = mpf(kk)
    n = DIRS['generic']
    kv = [k * mpf(x) for x in n]
    dd = sum(x ** 2 for x in d_avg(kv))
    print(f'   generic dir, k={kk}: (L_corner - |d_avg|^2)/k^6 = {float((L_corner(kv) - dd) / k**6):+.4f}, /k^4 = {float((L_corner(kv) - dd)/k**4):+.2e}')

print('\n=== 3. SME d=6 nonbirefringent: c^(6)_(I)jm in the grid frame ===')
# sum_jm Y_jm(n) c_jm = -eta(n) / (2 M^2)   [delta v = eta p^2/(2M^2), sigma0 = -delta v]
nth, nph = 200, 400
th = (np.arange(nth) + 0.5) * np.pi / nth
ph = (np.arange(nph) + 0.5) * 2 * np.pi / nph
TH, PH = np.meshgrid(th, ph, indexing='ij')
NX, NY, NZ = np.sin(TH) * np.cos(PH), np.sin(TH) * np.sin(PH), np.cos(TH)
dOm = (np.pi / nth) * (2 * np.pi / nph) * np.sin(TH)
for name, (_, _, closed) in STENCILS.items():
    eta = closed((NX, NY, NZ)) * np.ones_like(NX)
    f = -eta / (2 * M_PL ** 2)
    out = {}
    for l in (0, 2, 4, 6):
        cl = [np.sum(f * np.conj(sph_harm(m, l, PH, TH)) * dOm) for m in range(-l, l + 1)]
        out[l] = np.sqrt(np.sum(np.abs(cl) ** 2))
    c00 = np.sum(f * np.conj(sph_harm(0, 0, PH, TH)) * dOm).real
    print(f'{name:28s} c00 = {c00:+.3e} GeV^-2;  rotation-invariant |c_l| = sqrt(sum_m |c_lm|^2): '
          + ', '.join(f'l={l}: {out[l]:.2e}' for l in out) + ' GeV^-2')
    print(f'{"":28s} max over sky |eta|/(2M^2) = {np.max(np.abs(eta))/(2*M_PL**2):.2e} GeV^-2')

print('\n=== 4. sky fractions ===')
def frac(mask):
    return np.sum(dOm * mask) / (4 * np.pi)
for name, (_, _, closed) in STENCILS.items():
    eta = closed((NX, NY, NZ)) * np.ones_like(NX)
    a = np.abs(eta)
    print(f'{name:28s} photopion-on (elementary |eta|<1e-5): {frac(a < 1e-5):.4f}; '
          f'(partonic |eta|*0.0055<1e-5): {frac(a * 0.0055 < 1e-5):.4f}; '
          f'eta < -0.0149 (Auger photon bound bites if photons exist): {frac(eta < -0.0149):.3f}')

# Wilson fermion (continuous time): eta = 1/4 - S4/3; staggered: eta = -S4/3
S4g = NX ** 4 + NY ** 4 + NZ ** 4
for nm, eta in (('Wilson r=1', 0.25 - S4g / 3), ('staggered/naive', -S4g / 3)):
    print(f'{nm:16s} nu: fraction of sky (= fraction of Haar orientations for one event) with eta > 0.060: '
          f'{frac(eta > 0.060):.3f}; range {eta.min():+.4f}..{eta.max():+.4f}')

print('\n=== 5. Auger photon bound: self-consistent production vs escape (universal eta, one direction) ===')
# Units GeV. Kinematics: collinear products, soft target photon of energy eps head-on.
m_e, m_p, m_pi = 0.000511, 0.93827, 0.13498
kT = 2.35e-13  # GeV (CMB)
EPS_EBL_MAX = 13.6e-9  # GeV (Lyman limit; generous UV ceiling for EBL)

def pair_eps_th(E, eta):
    """gamma(E) + gamma(eps) -> e+ e-, universal eta<=0, optimal split. Returns threshold eps."""
    A = abs(eta) * E ** 4 / M_PL ** 2 if eta < 0 else 0.0
    # f(u) = m^2/u + 3A u (u = x(1-x) in (0,1/4]); for eta>0 the LIV term lowers the threshold (not used here)
    u_star = np.sqrt(m_e ** 2 / (3 * A)) if A > 0 else 1.0
    f = 2 * np.sqrt(3 * A) * m_e if u_star < 0.25 else 4 * m_e ** 2 + 0.75 * A
    return f / (4 * E)

def photopion_eps_th(Ep, eta, partonic):
    """p(Ep) + gamma(eps) -> p + pi0, universal eta (<=0), scan pion fraction. Returns min threshold eps."""
    s_p = 0.0055 if partonic else 1.0
    s_pi = 0.0114 if partonic else 1.0
    A = abs(eta) * Ep ** 4 / M_PL ** 2 if eta < 0 else 0.0
    best = np.inf
    for xpi in np.linspace(0.01, 0.6, 600):
        xp = 1 - xpi
        # 4 Ep eps >= m_p^2/xp + m_pi^2/xpi - m_p^2 + A*(s_p*xp^3 + s_pi*xpi^3 - s_p)   [eta<0: E^2 -> -A x^3 terms]
        need = m_p ** 2 / xp + m_pi ** 2 / xpi - m_p ** 2 + A * (s_p - s_p * xp ** 3 - s_pi * xpi ** 3)
        best = min(best, need / (4 * Ep))
    return best, None

print('Lorentz-invariant control: photopion eps_th at Ep=10^19.75 eV =',
      f'{photopion_eps_th(10**10.75, 0.0, False)[0]/kT:.3f} kT (expect ~5.1); pair eps_th at 1e19 eV = {pair_eps_th(1e10, 0.0):.2e} GeV (m_e^2/E = {m_e**2/1e10:.2e})')
for eta in (-0.0149, -1/48, -1/36, -1/9):
    # escape: lowest photon energy with pair threshold above X kT (X = 3 marginal, 10 escape)
    Eg = np.logspace(8, 13, 2001)
    th = np.array([pair_eps_th(E, eta) for E in Eg])
    E_marg = Eg[np.argmax(th > 3 * kT)]
    E_esc = Eg[np.argmax(th > 10 * kT)]
    lines = [f'eta = {eta:+.4f}: photons escape CMB pair production above E_gamma ~ {E_marg*1e9:.1e} eV (3 kT), {E_esc*1e9:.1e} eV (10 kT)']
    for partonic in (False, True):
        # photon carries ~ x_pi/2 of proton energy; to make E_gamma >= E_marg need Ep >= 2 E_marg / x_pi(max ~0.5)
        Ep_needed = 4 * E_marg  # x_pi ~ 0.5 at most, photon gets half the pion: generous
        eps, _ = photopion_eps_th(Ep_needed, eta, partonic)
        lines.append(f'   {"partonic" if partonic else "elementary"}: to make such photons, protons >= {Ep_needed*1e9:.1e} eV need target eps >= '
                     f'{eps*1e9:.3g} eV  ({"OPEN (<= 13.6 eV UV ceiling)" if eps <= EPS_EBL_MAX else "closed: no background photon that energetic"})')
    print('\n'.join(lines))

print('\n=== 6. added after first run (not pre-registered): pair-production split bracket and EBL photopion ===')
# Escape energy (pair threshold eps > 3 kT) under three readings:
#   photon-only LIV (electrons Lorentz-invariant; the Galaverni-Sigl / Auger-type convention): 4 eps E = 4 m^2 + |eta| E^4/M^2
#   universal, symmetric split (x = 1/2; where LI phase space peaks):                        4 eps E = 4 m^2 + 0.75 |eta| E^4/M^2
#   universal, kinematic threshold (optimal asymmetric split):                                  4 eps E = 2 sqrt(3|eta|) m E^2/M
def esc(eta, mode, X=3):
    Eg = np.logspace(8, 13, 4001)
    A = abs(eta) * Eg ** 4 / M_PL ** 2
    if mode == 'photon-only':
        f = 4 * m_e ** 2 + A
    elif mode == 'universal-sym':
        f = 4 * m_e ** 2 + 0.75 * A
    else:
        f = np.array([pair_eps_th(E, eta) * 4 * E for E in Eg])
    th = f / (4 * Eg)
    return Eg[np.argmax(th > X * kT)] * 1e9
print(f'{"eta":>8s} {"photon-only":>14s} {"universal sym":>14s} {"universal asym":>15s}   (eV; photon escapes CMB pair production above this, eps_th > 3 kT)')
for eta in (-0.0149, -1/48, -1/36, -1/9):
    print(f'{eta:+8.4f} {esc(eta,"photon-only"):14.2e} {esc(eta,"universal-sym"):14.2e} {esc(eta,"universal-asym"):15.2e}')
# Universal eta needed (asymmetric threshold) to free photons at the energies where photon-only eta = -0.0149 frees them
for Eev in (3e18, 1e19):
    E = Eev / 1e9
    eps_target = 3 * kT
    eta_needed = ((eps_target * 4 * E * M_PL) / (2 * m_e * E ** 2)) ** 2 / 3
    print(f'universal |eta| needed for asym threshold eps_th = 3 kT at E_gamma = {Eev:.0e} eV: {eta_needed:.3g}')
# EBL photopion at lower proton energy: target eps threshold vs eta (partonic and elementary)
print('photopion target-photon threshold (eV) at lower proton energies (EBL far-IR ~0.003-0.03 eV, near-IR/optical ~0.3-3 eV):')
for Ep_ev in (1e19, 3e19, 1e20):
    row = []
    for eta in (0.0, -1/48, -1/9):
        for partonic in (False, True):
            e, _ = photopion_eps_th(Ep_ev / 1e9, eta, partonic)
            row.append(f'eta={eta:+.3f} {"part" if partonic else "elem"}: {e*1e9:.3g}')
    print(f'  Ep = {Ep_ev:.0e} eV: ' + '; '.join(row))
