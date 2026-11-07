"""Compander (tanh-log) Cassini Q2 at SPARC-profiled a0, NO-BULGE sample. Maintainer 2026-11-07.

Why: explorer 2026-11-06 found MOND's delta-family falls toward a Cassini pass when the 32 bulge galaxies are dropped
(delta = 6: z@2.32 +5.88 -> +3.02), Desmond, Hees & Famaey 2024's mitigation direction. The 11-06 maintainer run
(cassini_q2_at_sparc_profiled_a0_high_gamma.py: 14.5-19.3 sigma for every gamma 0.3-3) used the bulges-in sample, and
its result moved the count range 3-8 -> 4-8 (TEST-25 joined the rule-invariant floor). If the compander also falls
toward a pass without bulges, that range change is configuration-dependent. Explorer's "highest value, cheap" open thread.

Loader, likelihood (log10 g_obs residual, Upsilon 0.5/0.7, eV/V <= 0.10) and Q2 instrument are the explorer's
(explorer/scripts/mond_delta_family_cassini_at_sparc_profiled_a0.py), with nu = TanhLogNu(gamma) from the archive.

PREDICTIONS (written before running):
 P1. No-bulge, profiled a0: z@2.32e-10 > 5 at every gamma in {0.3 ... 3}  (compander stays excluded; bulges-in was
     flat 14.5-19.3).
 P2. The no-bulge profiled a0'/gamma is lower than the bulges-in value at gamma = 0.489 by 3-10 % (MOND delta=1 fell 6 %).
 P3. At every gamma the bulges-in -> no-bulge drop in z is smaller than MOND delta=6's drop (2.86).
Identity control (C1): bulges-in, gamma = 0.489 -> z@2.32 within 0.5 of the 11-06 value (+17.96 per SESSION_FOCUS).
"""
import sys
import numpy as np
from scipy.optimize import minimize_scalar

sys.path.insert(0, '/home/dp/ai-workspace/synchronism-site/explorer/scripts')
sys.path.insert(0, '/home/dp/ai-workspace/Synchronism/simulations')
import mond_delta_family_cassini_at_sparc_profiled_a0 as M  # noqa: E402
from sparc_cassini_q2 import TanhLogNu, qumond_q, q2_si  # noqa: E402

GE = 2.32e-10
bul = set()
for line in open(M.MRT):
    p = line.split()
    if len(p) == 10:
        try:
            if float(p[7]) > 0:
                bul.add(p[0])
        except ValueError:
            pass
gid, gobs, gbar = M.load()
keep = np.array([g not in bul for g in gid])


def fit(go, gb, nu):
    f = lambda la: np.sum((np.log10(go) - np.log10(gb * nu(gb / 10**la)))**2)
    r = minimize_scalar(f, bounds=(-12, -9), method='bounded', options={'xatol': 1e-9})
    return 10**r.x, r.fun


def z(nu, a0):
    res = qumond_q(nu, GE / a0, angular_order=128, radial_order=512, log_v_bound=14.0)
    return (q2_si(res.q, a0) - M.MEAN) / M.SIG


print(f"bulge galaxies dropped: {len(bul)}; no-bulge N = {keep.sum()}, all N = {len(gobs)}")
rows = []
print(f"{'gamma':>6} | {'a0_all':>10} {'a0/g_all':>10} {'z_all':>7} | {'a0_nb':>10} {'a0/g_nb':>10} {'z_nb':>7} {'dBIC_nb vs g=.489':>18}")
nu0 = TanhLogNu(0.489)
_, s_ref = fit(gobs[keep], gbar[keep], nu0)
Nnb = keep.sum()
for gm in (0.3, 0.489, 0.75, 1.0, 1.5, 2.0, 3.0):
    nu = TanhLogNu(gm)
    a_all, _ = fit(gobs, gbar, nu)
    a_nb, s_nb = fit(gobs[keep], gbar[keep], nu)
    za, zn = z(nu, a_all), z(nu, a_nb)
    rows.append((gm, a_all, za, a_nb, zn))
    print(f"{gm:6.3f} | {a_all:10.3e} {a_all/gm:10.3e} {za:7.2f} | {a_nb:10.3e} {a_nb/gm:10.3e} {zn:7.2f} {Nnb*np.log(s_nb/s_ref):+18.1f}")

c1 = [r for r in rows if r[0] == 0.489][0]
print(f"\nC1 identity (bulges-in gamma=0.489 z within 0.5 of +17.96): {'PASS' if abs(c1[2]-17.96) < 0.5 else 'FAIL'} ({c1[2]:+.2f})")
print(f"P1 (no-bulge z > 5 at every gamma): {'HELD' if min(r[4] for r in rows) > 5 else 'FAILED'} (min {min(r[4] for r in rows):+.2f})")
drop = (c1[1] / c1[0] - c1[3] / c1[0]) / (c1[1] / c1[0])
print(f"P2 (a0'/gamma falls 3-10% at 0.489): {'HELD' if 0.03 <= drop <= 0.10 else 'FAILED'} ({100*drop:.1f}%)")
print(f"P3 (z drop < 2.86 at every gamma): {'HELD' if all(r[2]-r[4] < 2.86 for r in rows) else 'FAILED'} "
      f"(drops {', '.join(f'{r[2]-r[4]:.2f}' for r in rows)})")
