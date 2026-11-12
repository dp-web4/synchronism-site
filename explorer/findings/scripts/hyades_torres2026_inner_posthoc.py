#!/usr/bin/env python3
"""POST-HOC (after retrieval, 2026-11-12): score Torres, Stefanik & Latham 2026 (arXiv:2603.00229v2, §12) Hyades
inner dispersion sigma_LOS = 0.21 +- 0.05 km/s within ~5.5 pc (68 FGK stars; multi-epoch-RV binaries removed;
errors, gravitational redshift and convective blueshift corrected) against the 11-11 predictions.
PREREG for the reading: ../PREREG-hyades-praesepe-cleaned-dispersions-20261112.md (commit 8d8070a).
Functions copied verbatim from system_partition_rules.py (11-11) to avoid re-running that file's top level."""
import math
import numpy as np

G = 4.3009e-3
PC = 3.0857e16
ACC = 1e6 / PC
A_M = 1.1e-10


def g_full(gN, gamma=0.9, aM=A_M):
    gN = np.asarray(gN, float)
    a0p = aM * gamma
    lo = np.log(gN)
    hi = lo + 16
    for _ in range(80):
        m = 0.5 * (lo + hi)
        g = np.exp(m)
        low = g * np.tanh(gamma * np.log1p(g / a0p)) < gN
        lo = np.where(low, m, lo)
        hi = np.where(low, hi, m)
    return np.exp(0.5 * (lo + hi))


def jeans_plummer(M, a, law="newton", gamma=0.9, r_ap=None, r_trunc=None, n=6000):
    rmax = r_trunc if r_trunc else 400 * a
    r = np.logspace(math.log10(a * 1e-3), math.log10(rmax), n)
    rho = 3 * M / (4 * math.pi * a ** 3) * (1 + (r / a) ** 2) ** -2.5
    Menc = M * r ** 3 / (r * r + a * a) ** 1.5
    gN = G * Menc / r ** 2
    g = gN if law == "newton" else g_full(gN * ACC, gamma) / ACC
    f = rho * g
    seg = 0.5 * (f[1:] + f[:-1]) * np.diff(r)
    P = np.concatenate([np.cumsum(seg[::-1])[::-1], [0.0]])
    w = 4 * math.pi * r * r
    m = r <= (r_ap if r_ap else rmax)
    return math.sqrt(np.trapz((P * w)[m], r[m]) / np.trapz((rho * w)[m], r[m]))


OBS, ERR = 0.21, 0.05
a = 3.1
print("Hyades, Plummer a = 3.1 pc (Roeser+2011), 3D aperture 5.5 pc (Torres+2026 'inner region'); r_t 9.0 pc truncated and untruncated")
for lab, M in (("M_lo 193 (Hunt & Reffert, binary-corrected)", 193.0), ("M_mid 314", 314.0),
               ("M_hi 435 (Roeser+2011 to 30 pc)", 435.0)):
    for rt in (None, 9.0):
        pN = jeans_plummer(M, a, "newton", r_ap=5.5, r_trunc=rt)
        pI = [jeans_plummer(M, a, "law", gm, r_ap=5.5, r_trunc=rt) for gm in (0.87, 0.90, 0.95)]
        zI = (pI[1] - OBS) / math.hypot(ERR, 0.2 * pI[1])
        zr = (pI[1] - OBS) / ERR
        print(f"  {lab:44s} trunc {str(rt):>4s}: Newton {pN:.3f}  internal {pI[0]:.3f}/{pI[1]:.3f}/{pI[2]:.3f}  "
              f"obs/Newton {OBS/pN:.2f}  obs/internal {OBS/pI[1]:.2f}  internal above obs by {zI:.1f} sigma (20% sys) / {zr:.1f} (random)")
print("Reading rule (maintainer DR4 addendum 11-12, mid counted mass): <= 0.65 counts against reading (I).")
print("Caveat: 75% completeness for P < 1e4 d; residual long-period binaries inflate sigma, so 0.21 is an upper estimate.")
