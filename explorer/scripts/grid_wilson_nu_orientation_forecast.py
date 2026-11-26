#!/usr/bin/env python3
"""Post hoc forecast: fraction of grid orientations (Haar on SO(3)) left allowed after N independent
>= E PeV neutrinos with isotropic arrival directions, for a continuous-time Wilson r=1 neutrino
(eta = 1/4 - sum n_i^4 / 3) against Cohen-Glashow pair emission. Bound eta < 0.060 at 220 PeV
(Yang et al. 2025, Lambda_2 > 5.0e19 GeV, 90% CL), scaled eta_max(E) = 0.060 (220/E)^4."""
import numpy as np
from scipy.spatial.transform import Rotation as R
rng = np.random.default_rng(7)
NO = 20000
rots = R.random(NO, random_state=11)
def eta_w(n):
    return 0.25 - np.sum(n ** 4, axis=-1) / 3
print('single-event check: allowed fraction at 220 PeV =',
      np.mean(eta_w(rots.apply(np.array([0., 0., 1.]))) < 0.060).round(3))
for E in (220, 300, 500):
    emax = 0.060 * (220 / E) ** 4
    out = []
    for N in (1, 3, 5, 10):
        fr = []
        for trial in range(30):
            v = rng.normal(size=(N, 3)); v /= np.linalg.norm(v, axis=1, keepdims=True)
            ok = np.ones(NO, bool)
            for d in v:
                ok &= eta_w(rots.inv().apply(d)) < emax
            fr.append(ok.mean())
        out.append(f'N={N}: {np.median(fr):.3f} [{np.percentile(fr,10):.3f}-{np.percentile(fr,90):.3f}]')
    print(f'E = {E} PeV (eta_max {emax:.4f}): surviving orientation fraction (median [10-90%] over direction draws): ' + '; '.join(out))
