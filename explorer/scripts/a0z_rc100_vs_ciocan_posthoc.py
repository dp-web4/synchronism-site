#!/usr/bin/env python3
"""POST-HOC (labelled). Ciocan+2026 (arXiv:2604.22613) fit a0(z) = 1.0 + 1.59 z [1e-10 m/s^2] on MUSE-HUDF, 0.33<z<1.44.
(1) Their line extrapolated to RC100's registered bins; (2) the overlap range only: RC100 z<1.44, split at the median."""
import numpy as np, os
HERE = os.path.dirname(os.path.abspath(__file__))
src = open(os.path.join(HERE, 'a0z_rc100_trend_ratio.py')).read().split("print(f'RC100:")[0]
g = {'__file__': os.path.join(HERE, 'a0z_rc100_trend_ratio.py')}; exec(src, g)
M, z, ks, curves, kbest, fo = g['M'], g['z'], g['ks'], g['curves'], g['kbest'], g['fo']
cio = lambda zz: 1.0 + 1.59 * zz
lo, hi = z < 1.5, z >= 1.5
print(f'registered bins: rho_Ciocan(extrapolated) = {cio(z[hi]).mean()/cio(z[lo]).mean():.2f}; rho_A = {M.E(z[hi]).mean()/M.E(z[lo]).mean():.2f}; observed 1.11 (simple)')
C = curves(M.nu_simple, fo)
ov = z < 1.44; zm = np.median(z[ov]); a, b = ov & (z < zm), ov & (z >= zm)
ka, kb = kbest(C[a].sum(0)), kbest(C[b].sum(0)); lr = np.log(kb[0] / ka[0])
rng = np.random.default_rng(3); ia, ib = np.where(a)[0], np.where(b)[0]
bs = np.array([np.log(ks[C[rng.choice(ib, ib.size)].sum(0).argmin()] / ks[C[rng.choice(ia, ia.size)].sum(0).argmin()]) for _ in range(2000)])
s = 0.5 * (np.percentile(bs, 84) - np.percentile(bs, 16))
for nm, f in (('Ciocan', cio), ('A=E(z)', M.E), ('C', lambda zz: np.ones_like(zz))):
    pr = np.log(f(z[b]).mean() / f(z[a]).mean())
    print(f'overlap z<1.44 split at {zm}: N={a.sum()}/{b.sum()}  ln rho_obs={lr:+.3f} ± {s:.3f} (galaxy bootstrap)  {nm}: ln rho={pr:+.3f}  pull={(lr-pr)/s:+.2f}')
print(f'level at z~0.9: RC100 k={ka[0]:.2f}-{kb[0]:.2f} (a0={1.2*ka[0]:.2f}-{1.2*kb[0]:.2f}e-10) vs Ciocan line {cio(np.median(z[ov])):.2f}e-10')
