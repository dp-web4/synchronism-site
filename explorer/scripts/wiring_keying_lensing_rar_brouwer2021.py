#!/usr/bin/env python3
"""Score the SPARC-fitted wiring x keying cells against the KiDS-1000 weak-lensing RAR (Brouwer+2021, isolated
lenses), which reaches g_bar ~ 1e-15 m/s^2, 2-3 dex below SPARC. Parameters are frozen at the SPARC fits
(wiring_keying_matrix_sparc_output.txt) -- no refit. g_obs from ESD via the README's Eq. 7. Full covariance.
Usage: python3 -I this.py <dir containing Brouwer2021 txt files>
"""
import sys, numpy as np
sys.path.insert(0, '/home/dp/ai-workspace/synchronism-site/explorer/scripts')
from wiring_keying_matrix_sparc import predict
D = sys.argv[1]
G, PCM = 4.52e-30, 3.086e16
def load(stem):
    d = np.loadtxt(f"{D}/{stem}_Nobins.txt", comments='#')
    gb, esd, err, bias = d[:,0], d[:,1], d[:,3], d[:,4]
    go = 4*G*esd/bias*PCM; eg = 4*G*err/bias*PCM
    c = np.loadtxt(f"{D}/{stem}_covmatrix.txt", comments='#')
    n = len(gb); cov = (c[:,4]/c[:,6]).reshape(n, n)*(4*G*PCM)**2
    return gb, go, eg, cov
cells = {
  'R    div g_obs f=0   (MOND-like, gamma .489)': (('div','gobs'), 5.336e-11, 0.489, 0.0),
  'P2   div g_bar f=0   (never-run cell)':        (('div','gbar'), 2.444e-12, 0.177, 0.0),
  '     div g_bar f=Ob':                          (('div','gbar'), 5.099e-12, 0.216, 0.049),
  '     div g_bar f free (0.094)':                (('div','gbar'), 1.081e-11, 0.275, 0.094),
  '     div g_obs f=Ob':                          (('div','gobs'), 1.008e-10, 0.675, 0.049),
  'P4   div g_obs f=Om':                          (('div','gobs'), 1.000e-08, 15.723, 0.315),
  'P3   div g_bar f=Om (C_a-like ceiling)':       (('div','gbar'), 6.181e-09, 20.0, 0.315),
}
for stem in ('Fig-4-5-C1_RAR-KiDS-isolated', 'Fig-4_RAR-KiDS-isolated_hotgas'):
    gb, go, eg, cov = load(stem); ci = np.linalg.inv(cov)
    print(f"\n== {stem}  ({len(gb)} bins, g_bar {gb.min():.1e}..{gb.max():.1e})")
    print("  g_bar      g_obs +- err    | " + " | ".join(k.split()[0] or '-' for k in cells))
    preds = {k: predict(c, gb, a, g, f) for k, (c, a, g, f) in cells.items()}
    for i in range(len(gb)):
        print(f"  {gb[i]:.2e}  {go[i]:.2e} {eg[i]:.1e} | " + " ".join(f"{preds[k][i]:.2e}" for k in cells))
    for k in cells:
        r = go - preds[k]
        print(f"  chi2 full-cov {r@ci@r:9.1f}  diag {np.sum((r/eg)**2):9.1f}   {k}")
    print(f"  chi2 for g_obs=0 (no signal): {go@ci@go:.1f}   for Newton g_obs=g_bar: {(go-gb)@ci@(go-gb):.1f}")
