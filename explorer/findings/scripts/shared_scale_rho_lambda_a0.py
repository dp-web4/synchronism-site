"""Shared scale between rho_Lambda and a0 (explorer 2026-10-14). PREREG: shared_scale_rho_lambda_a0_PREREG.md (814517a).

P2/P3: look-elsewhere base rate of 'natural' cH0 * k * Omega^p constructions hitting a0 within +-10%.
P4: literal one-knee reading -- mean enclosed density at the deep-MOND transition radius vs rho_Lambda/2.
"""
import math
import itertools
import numpy as np

c = 2.99792458e8
G = 6.674e-11
Mpc = 3.0857e22
PHI = (1 + 5 ** 0.5) / 2
Om, Ob, OL = 0.315, 0.049, 0.685
TOL = 0.10

def cH0(h):
    return c * h * 1e3 / Mpc

# ---- grammar ----
ms = {'1': 1, '2': 2, '3': 3, '4': 4, '6': 6, '8': 8, 'pi': math.pi, '2pi': 2 * math.pi, '4pi': 4 * math.pi,
      '8pi': 8 * math.pi, '4pi/3': 4 * math.pi / 3, '3/(8pi)': 3 / (8 * math.pi)}
es = {'1': 1, '-1': -1, '1/2': 0.5, '-1/2': -0.5}
ks = {}
for (mn, mv), (en, ev) in itertools.product(ms.items(), es.items()):
    v = mv ** ev
    key = round(math.log(v), 10)
    ks.setdefault(key, (f'({mn})^{en}', v))
ks = sorted(ks.values(), key=lambda t: t[1])
ps = [0, 0.25, -0.25, 1 / 3, -1 / 3, 0.5, -0.5, 2 / 3, -2 / 3, 1, -1, 1.5, -1.5, 2, -2, PHI]
oms = {'Om': Om, 'OL': OL, 'Ob': Ob}

small = [(n, v) for n, v in ks]
full = {}
for n, v in ks:
    full[round(math.log(v), 10)] = (n, v)
    for (on, ov), p in itertools.product(oms.items(), ps):
        if p == 0:
            continue
        val = v * ov ** p
        full.setdefault(round(math.log(val), 10), (f'{n}*{on}^{p:.3g}', val))
full = sorted(full.values(), key=lambda t: t[1])
print(f'grammar sizes: G_small {len(small)} distinct k; G_full {len(full)} distinct k*Omega^p')

def hits(gram, ktarget):
    return [(n, v) for n, v in gram if abs(v / ktarget - 1) <= TOL]

def coverage(gram, lo=0.1, hi=0.3, n=20000):
    grid = np.exp(np.linspace(math.log(lo), math.log(hi), n))
    vals = np.array([v for _, v in gram])
    covered = np.array([np.any(np.abs(vals / t - 1) <= TOL) for t in grid])
    return covered.mean()

print('\n== P2/P3 coverage of k in [0.1, 0.3] (log-uniform), +-10% ==')
cs, cf = coverage(small), coverage(full)
print(f'G_small coverage {cs:.3f}   (P2 predicts >= 0.5)')
print(f'G_full  coverage {cf:.3f}   (P3 predicts >= 0.95)')
print(f'wider window k in [0.03, 1]: G_small {coverage(small, 0.03, 1):.3f}, G_full {coverage(full, 0.03, 1):.3f}')

print('\n== hits per target ==')
for a0 in (1.08e-10, 1.20e-10):
    for h in (67.4, 73.0):
        kt = a0 / cH0(h)
        hs, hf = hits(small, kt), hits(full, kt)
        print(f'a0={a0:.3g} H0={h}: k_target={kt:.4f}  G_small hits {len(hs)}: {[n for n, _ in hs]}  G_full hits {len(hf)}')

# archive's own candidates as members
print('\n== archive candidates, value and error vs identified 1.08 / McGaugh 1.20 (H0 67.4) ==')
H = cH0(67.4)
arch = {'cH0/2pi': 1 / (2 * math.pi), 'cH0/6': 1 / 6, 'cH0/2': 0.5, 'cH0*Om^phi': Om ** PHI, 'cH0*Om^1.5': Om ** 1.5,
        'c*sqrt(G rho_L)': math.sqrt(3 / (8 * math.pi) * OL),
        'c*sqrt(G rho_L)/2pi': math.sqrt(3 / (8 * math.pi) * OL) / (2 * math.pi),
        'c^2 sqrt(L/3)/2pi (Milgrom 2020)': math.sqrt(OL) / (2 * math.pi),
        'Hubble-sphere g at rho_crit=rho_L/2: OL cH0/4': OL / 4}
for n, k in arch.items():
    a = k * H
    print(f'{n:36s} k={k:.4f} a={a:.3e}  vs1.08 {a / 1.08e-10 - 1:+.1%}  vs1.20 {a / 1.20e-10 - 1:+.1%}')

# how many G_small members lie in [0.1, 0.3]; expected hits for a random target
vals = np.array([v for _, v in small])
inwin = vals[(vals > 0.1 / 1.1) & (vals < 0.3 * 1.1)]
print(f'\nG_small members in window: {len(inwin)} -> expected #hits per random target ~ {len(inwin) * 2 * TOL / math.log(3.0):.2f}')
vals = np.array([v for _, v in full])
inwin = vals[(vals > 0.1 / 1.1) & (vals < 0.3 * 1.1)]
print(f'G_full  members in window: {len(inwin)} -> expected #hits per random target ~ {len(inwin) * 2 * TOL / math.log(3.0):.2f}')

# ---- P4 literal one-knee ----
print('\n== P4: mean enclosed density at deep-MOND transition vs rho_Lambda/2 ==')
rho_c0 = 3 * (67.4e3 / Mpc) ** 2 / (8 * math.pi * G)
knee = OL * rho_c0 / 2
Msun_pc3 = 1.989e30 / (3.0857e16) ** 3
print(f'rho_Lambda/2 = {knee:.3e} kg/m^3 = {knee / Msun_pc3:.3e} Msun/pc^3')
for a0 in (1.08e-10, 1.2e-10):
    for V in (20, 50, 100, 200, 300):
        v = V * 1e3
        rt = v ** 2 / a0
        rhobar = 3 * a0 / (4 * math.pi * G * rt)
        x = rhobar / knee
        C = x / (x + 2)
        print(f'a0={a0:.2g} V={V:3d}: r_t={rt / 3.0857e19:7.2f} kpc  rhobar={rhobar / Msun_pc3:.3e} Msun/pc3  x={x:.3e}  C={C:.7f}  1/C-1={1 / C - 1:.1e}')

# ---- post-PREREG addition (derivation, not a registered number): slope n in a0 ∝ E(z)^n implied by each z=0 construction ----
print('\n== slope n (a0 ∝ E^n) over z = 0.33-1.44 implied by each construction (post-PREREG derivation) ==')
z = np.linspace(0.33, 1.44, 50)
E = np.sqrt(Om * (1 + z) ** 3 + OL)
cons = {
    'cH(z)/2pi  (S88/S385 P1, branch A)': E,
    'c*sqrt(G*rho_knee), knee constant (DE knee)': np.ones_like(z),
    'c^2 sqrt(Lambda)/2pi (Milgrom 2020, de Sitter)': np.ones_like(z),
    'Hubble-sphere g at DE knee: (4pi/3)G rho_knee c/H(z)': 1 / E,
    'Hubble-sphere g of matter (S385): (4pi/3)G rho_m(z) c/H(z)': (1 + z) ** 3 / E,
    'Hubble-sphere g of total (site box cH/2): ∝ H(z)': E,
    'c*sqrt(G rho_m(z))': (1 + z) ** 1.5,
}
for n_, f in cons.items():
    slope = np.polyfit(np.log(E), np.log(f), 1)[0]
    zb = (slope - 0.71) / 0.13
    zr = (slope - 0.0) / 0.5
    print(f'{n_:58s} n = {slope:+.2f}   vs Ciocan bins 0.71±0.13: {zb:+.1f}σ   vs RC100 0.0±0.5: {zr:+.1f}σ')
