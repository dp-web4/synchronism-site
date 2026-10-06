#!/usr/bin/env python3
"""POST-HOC (not registered; written after a0z_rc100_trend_ratio.py returned NON-DISCRIMINATING).
The registered statistic bins at z=1.5 and bootstraps an argmin. Does the full-z shape test (level free, a0 = k*E(z) vs
a0 = k) say more, and does it survive a galaxy-level bootstrap instead of the formal chi2?"""
import numpy as np, importlib.util, os
HERE = os.path.dirname(os.path.abspath(__file__))
spec = importlib.util.spec_from_file_location('r', os.path.join(HERE, 'a0z_rc100_trend_ratio.py'))
# reuse helpers without re-running the main script's prints: exec only definitions
src = open(os.path.join(HERE, 'a0z_rc100_trend_ratio.py')).read().split("print(f'RC100:")[0]
g = {'__file__': os.path.join(HERE, 'a0z_rc100_trend_ratio.py')}; exec(src, g)
M, GN, z, fo, efo, ks, rows = g['M'], g['GN'], g['z'], g['fo'], g['efo'], g['ks'], g['rows']

def curves(nu, shape):
    C = np.zeros((len(z), len(ks)))
    for j, k in enumerate(ks):
        f = 1 - 1 / nu(GN / (k * shape(z)[:, None] * M.A0))
        C[:, j] = (fo - f[:, 0]) ** 2 / (np.maximum(efo, 0.02) ** 2 + f[:, 1:].std(1) ** 2)
    return C

def powlaw(n):  # a0 ∝ E(z)^n : n=0 constant, n=1 branch A
    return lambda zz: M.E(zz) ** n

for nun, nu in (('simple', M.nu_simple), ('RAR', M.nu_rar)):
    CC = curves(nu, powlaw(0)); CA = curves(nu, powlaw(1))
    d = CA.sum(0).min() - CC.sum(0).min()
    rng = np.random.default_rng(5); b = []
    for _ in range(4000):
        i = rng.choice(len(z), len(z)); b.append(CA[i].sum(0).min() - CC[i].sum(0).min())
    b = np.array(b)
    # profile over exponent n: a0 ∝ E^n, level free
    ns = np.linspace(-1.5, 2.5, 41); prof = np.array([curves(nu, powlaw(n)).sum(0).min() for n in ns])
    nbest = ns[prof.argmin()]; okn = ns[prof <= prof.min() + 1]
    # galaxy bootstrap of n_best
    Cn = [curves(nu, powlaw(n)) for n in ns]; nb = []
    for _ in range(1000):
        i = rng.choice(len(z), len(z)); nb.append(ns[np.argmin([c[i].sum(0).min() for c in Cn])])
    nb = np.array(nb)
    print(f'[{nun}] chi2_min C={CC.sum(0).min():.1f} A={CA.sum(0).min():.1f} (N={len(z)}, 1 free level each)  dchi2(A-C)={d:+.1f}')
    print(f'        galaxy bootstrap dchi2: median {np.median(b):+.1f}, 16-84% [{np.percentile(b,16):+.1f},{np.percentile(b,84):+.1f}], '
          f'P(A better)={np.mean(b<0):.3f}')
    print(f'        exponent a0∝E^n, level free: n_best={nbest:+.2f}, formal Δχ²=1 [{okn.min():+.2f},{okn.max():+.2f}]; '
          f'galaxy bootstrap 16-84% [{np.percentile(nb,16):+.2f},{np.percentile(nb,84):+.2f}], 2.5-97.5% [{np.percentile(nb,2.5):+.2f},{np.percentile(nb,97.5):+.2f}]; '
          f'P(n>=1)={np.mean(nb>=1):.3f}')
