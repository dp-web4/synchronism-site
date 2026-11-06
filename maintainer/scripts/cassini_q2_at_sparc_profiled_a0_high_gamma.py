"""Cassini Q2 for the tanh-log compander at gamma 0.489-3 with a0 PROFILED FROM SPARC at each gamma.

Maintainer 2026-11-06.

Why: the ledger's 2026-09-17 block says "the compander passes [Cassini] at gamma >~ 1.5-2, which is SPARC-excluded".
That pass came from sparc_cassini_q2.py's *preparatory* target scan, which holds a0 = 1.03e-10 fixed for every gamma
(its own docstring: "not the registered joint test because a0 is not profiled from SPARC"). The registered joint
test (Research/preregistrations/sparc_cassini_tanhlog/joint_result.json) evaluated Cassini only where SPARC retained
gamma at point level (0.425-0.600) and marked gamma >= ~0.6 "not_required". Since 2026-09-29 the galaxy-level SPARC
interval reaches (0.3, 1.7), so those rows are now required and were never run with SPARC's a0.

PREDICTIONS (written before running; a fixed-a0 = gamma*1.08e-10 pass this session gave z 8.9-14.6 for gamma 1-3):
 P1. With SPARC-profiled a0 (a0/gamma = 1.34-1.53e-10 for gamma 1-3), Cassini z > 5 at every gamma in [1, 3] and every
     registered g_ext (2.00, 2.32, 2.48e-10).
 P2. z decreases monotonically with gamma at fixed g_ext.
 P3. No gamma in [1, 3] reaches |z| < 2 (i.e. the "passes at gamma >~ 1.5-2" statement does not survive profiling).
Identity control: gamma = 0.489 with the profiled a0 must reproduce the registered joint result's z (~+17.7-18).
"""
import json
import sys
from pathlib import Path

SIM = Path('/home/dp/ai-workspace/Synchronism/simulations')
sys.path.insert(0, str(SIM))
from sparc_cassini_q2 import TanhLogNu, qumond_q, q2_si  # noqa: E402

PROF = Path('/home/dp/ai-workspace/Synchronism/Research/preregistrations/sparc_cassini_tanhlog/sparc_profile.json')
rows = {round(r['gamma'], 4): r for r in json.load(open(PROF))['rows']}
MEAN, SIG = 1.6e-27, 1.8e-27  # Park, Hees, Famaey, Desmond & Durakovic 2026

gammas = [0.3, 0.4, 0.489, 0.6, 0.75, 1.0, 1.25, 1.5, 1.7, 2.0, 2.5, 3.0]
print(f"{'gamma':>6} {'a0_prof':>10} {'a0/g':>10} {'dBIC_pt':>8} " + " ".join(f"z@{g:.2e}" for g in (2.00e-10, 2.32e-10, 2.48e-10)))
out = []
for gm in gammas:
    r = rows.get(round(gm, 4))
    if r is None:
        print(f"{gm}: not on SPARC grid"); continue
    a0 = r['a0_m_s2']
    nu = TanhLogNu(gm)
    zs = []
    for ge in (2.00e-10, 2.32e-10, 2.48e-10):
        res = qumond_q(nu, ge / a0, angular_order=128, radial_order=512, log_v_bound=14.0)
        q2 = q2_si(res.q, a0)
        zs.append((q2 - MEAN) / SIG)
    out.append((gm, a0, zs))
    print(f"{gm:6.3f} {a0:10.3e} {a0/gm:10.3e} {r['delta_bic_fixed_gamma_vs_mcgaugh']:8.1f} " + " ".join(f"{z:12.2f}" for z in zs))

allz = [z for g, a, zs in out if g >= 1.0 for z in zs]
print(f"\nP1 (z > 5 for all gamma in [1,3], all g_ext): {'HELD' if min(allz) > 5 else 'FAILED'}  (min z = {min(allz):.2f})")
hi = [o for o in out if o[0] >= 1.0]
mono = all(hi[i][2][k] > hi[i + 1][2][k] for i in range(len(hi) - 1) for k in range(3))
lo = [o for o in out if o[0] < 1.0]
print(f"Added after the first run (rows below gamma 1, galaxy-level interval reaches 0.3): min z = "
      f"{min(z for o in lo for z in o[2]):.2f}")
print(f"P2 (monotone decreasing in gamma over [1,3]): {'HELD' if mono else 'FAILED'}")
print(f"P3 (no gamma in [1,3] with |z| < 2): {'HELD' if min(abs(z) for z in allz) >= 2 else 'FAILED'}")
