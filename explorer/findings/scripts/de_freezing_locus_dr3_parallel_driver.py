#!/usr/bin/env python3
"""Parallel execution driver for de_freezing_locus_dr3_shape_resolvability.py
(added after pre-registration, 2026-10-08, for runtime only: the serial run
needed ~80 min against a 60 min limit). Calls the registered functions
unchanged; one arm per process.
Usage: driver.py fit s_sn s_bao g_t   |   driver.py prof s_bao"""
import sys

import numpy as np
from scipy.optimize import brentq
from scipy.stats import norm

import de_freezing_locus_dr3_shape_resolvability as D

F = D.F
np.seterr(all="ignore")
F.CALIB_STAR, F.CALIB_DRAG = F._calibrate()
sn = F.load_sn()

if sys.argv[1] == "fit":
    s_sn, s, gt = map(float, sys.argv[2:5])
    lik = D.Asimov(sn, "subst", dict(D.TRUTH_BASE, gamma=gt), s, s_sn)
    row = {m: D.fit_model(lik, m)
           for m in ["subst", "lcdm", "wcdm", "mp0", "cpl"]}
    ex = (f"w={row['wcdm'][1]['w']:+.4f} q={row['mp0'][1]['q']:.4f}"
          f" g_fit={row['subst'][1]['gamma']:.4f}"
          f" cpl=({row['cpl'][1]['w0']:+.3f},{row['cpl'][1]['wa']:+.3f})")
    c0 = row["subst"][0]
    print(f"  sSN={s_sn:.1f} sBAO={s:.2f} g_t={gt:.3f} | locus {c0:.4f} | "
          f"dLCDM {row['lcdm'][0]-c0:+.3f} | dwCDM {row['wcdm'][0]-c0:+.4f} | "
          f"dMP0 {row['mp0'][0]-c0:+.4f} | dCPL {row['cpl'][0]-c0:+.4f} | {ex}",
          flush=True)
else:
    s = float(sys.argv[2])
    lik = D.Asimov(sn, "subst", dict(D.TRUTH_BASE, gamma=0.487), s)
    prof = D.gamma_profile_width(lik)
    c0 = prof(0.487)
    f = lambda g: prof(g) - c0 - 1.0  # noqa: E731
    lo = brentq(f, 0.40, 0.487, xtol=1e-5)
    hi = brentq(f, 0.487, 0.60, xtol=1e-5)
    sig3 = 0.5 * (hi - lo)
    g_thr = 0.5 - np.sqrt(D.THR_ALL) * sig3
    g_thr2 = 0.5 - np.sqrt(D.THR_BAOCMB) * sig3
    if sig3 < D.SIG_DR2:
        spread = np.sqrt(D.SIG_DR2 ** 2 - sig3 ** 2)
        pw = norm.cdf((g_thr - D.GAMMA_DR2) / spread)
        pw2 = norm.cdf((g_thr2 - D.GAMMA_DR2) / spread)
    else:
        spread = pw = pw2 = float("nan")
    print(f"  sBAO={s:.2f}: Asimov sigma_gamma(DR3) = {sig3:.4f} "
          f"(DR2 {D.SIG_DR2:.4f}); [lo,hi]=[{lo:.4f},{hi:.4f}]; win needs "
          f"gamma_hat < {g_thr:.4f} (thr 13.5) / {g_thr2:.4f} (thr 8.8); "
          f"predictive spread {spread:.4f}; P(win) = {pw:.4f} / {pw2:.4f}",
          flush=True)
