#!/usr/bin/env python3
r"""
THE BOOST CEILING AND THE LIKELIHOOD DISAGREE.  WHERE DOES THE DEFICIT HIDE?
============================================================================
Explorer 2026-09-09, stage 3.  Unplanned; forced by the stage-2 validity control.

The control in `aqual_fixed_point_check.py` was meant only to check that evaluating C on
the Newtonian field is harmless.  It produced something else: MOND's own mu, FLOORED at
Omega_m -- so the boost is capped at 1/0.315 = 3.17 -- and solved self-consistently, scores
chi2/N = 71.68 against parameter-free MOND's 75.21 on a 51-disc subsample.  0.95x.  Yet
`the_floor_sparc_demands.py` shows 77% of the 153 discs require a boost above 3.17 at some
radius.  Both cannot be the whole story.

Hypothesis (pre-registered here, before running): the ceiling deficit is real but sits at the
outermost radii, where SPARC's velocity errors are largest and the chi2 weight is smallest.
If so, the ceiling argument and the chi2 likelihood are measuring different things, and the
site's B_max = 3.17 refutation -- and my own 2026-09-08 "the floor is what SPARC objects to"
-- are chi2-invisible statements about the outer disc.

Falsifier: if the floored and unfloored models differ by <5% in chi2 on the OUTER half too,
the ceiling deficit is not hiding anywhere and the ceiling argument is simply wrong.
Confirmer: outer-half chi2 ratio >> inner-half ratio, and a large systematic velocity deficit
at the last measured point.

Full 153 discs, Upsilon_disk = 0.5 fixed, self-consistent (AQUAL-style) iteration.
"""
import os
import sys
import time
import numpy as np

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import l2_field_equation_on_sparc as L
import l2_sparc_core as K
from argument_of_C_head_to_head_l2 import GalArg, C_tanh, OMEGA_M, RG_FLOOR
from aqual_fixed_point_check import solve_selfconsistent, mond_mu_floor, A0


def split_scores(gg, v2pred):
    """chi2 and n on inner half, outer half, and the last two measured points."""
    R = gg.d["R"]
    v = np.sqrt(np.clip(v2pred, 0, None))
    o = gg.ok & (v > 0)
    if o.sum() < 4:
        return None
    med = np.median(R[o])
    r = ((gg.d["Vobs"] - v) / gg.d["eVobs"])**2
    inner, outer = o & (R < med), o & (R >= med)
    last = np.zeros_like(o)
    idx = np.where(o)[0]
    last[idx[-2:]] = True
    # fractional velocity deficit at the last measured point
    defic = float(1.0 - v[idx[-1]] / gg.d["Vobs"][idx[-1]])
    err = float(gg.d["eVobs"][idx[-1]] / gg.d["Vobs"][idx[-1]])
    return (float(r[inner].sum()), int(inner.sum()),
            float(r[outer].sum()), int(outer.sum()),
            float(r[last].sum()), int(last.sum()), defic, err)


def main():
    t0 = time.time()
    gal = K.load_sparc()
    G = []
    for gid in sorted(gal):
        try:
            G.append(GalArg(gal[gid]))
        except Exception as e:                                   # noqa
            print("skip", gid, e)
    print(f"built {len(G)} discs in {time.time()-t0:.0f}s (Upsilon_disk = 0.5 fixed)\n", flush=True)

    cases = [("MOND mu algebraic (SPARC vbar, no field eq)", None, None),
             ("MOND mu, NO floor capped only at 1/50",  mond_mu_floor(0.02), 0.02),
             ("MOND mu, floor = 0.089 (B_max 11.2)",    mond_mu_floor(RG_FLOOR), RG_FLOOR),
             ("MOND mu, floor = Omega_m (B_max 3.17)",  mond_mu_floor(OMEGA_M), OMEGA_M),
             ("compander g=0.489 g_c=a0 floor=Omega_m", C_tanh(0.489, A0, OMEGA_M), OMEGA_M),
             ("compander g=0.489 g_c=.32a0 floor=.089", C_tanh(0.489, 0.32 * A0, RG_FLOOR), RG_FLOOR)]

    print(f"{'model':<44s} | {'all':>8s} | {'inner half':>10s} | {'outer half':>10s} | "
          f"{'last 2 pts':>10s} | {'deficit at R_last':>18s}")
    print(f"{'':<44s} | {'chi2/N':>8s} | {'chi2/N':>10s} | {'chi2/N':>10s} | {'chi2/N':>10s} | "
          f"{'median':>8s} {'/err':>8s}")
    base = {}
    for name, mu, cmin in cases:
        rows = []
        for gg in G:
            if mu is None:
                v2 = K.mond_simple(gg.gbar_sparc) * gg.d["R"]
            else:
                B, _d = solve_selfconsistent(gg, mu, cmin)
                v2 = B * gg.vbar2
            s = split_scores(gg, v2)
            if s:
                rows.append(s)
        a = np.array([r[:6] for r in rows], float)
        defic = np.array([r[6] for r in rows]); err = np.array([r[7] for r in rows])
        tot = (a[:, 0].sum() + a[:, 2].sum()) / (a[:, 1].sum() + a[:, 3].sum())
        ci = a[:, 0].sum() / a[:, 1].sum()
        co = a[:, 2].sum() / a[:, 3].sum()
        cl = a[:, 4].sum() / a[:, 5].sum()
        base.setdefault('ref', (tot, ci, co, cl))
        print(f"{name:<44s} | {tot:8.2f} | {ci:10.2f} | {co:10.2f} | {cl:10.2f} | "
              f"{np.median(defic)*100:7.1f}% {np.median(err)*100:7.1f}%", flush=True)
    r0 = base['ref']
    print(f"\n Reference row is the algebraic MOND the other tables use.  Ratios to it:")
    print(f" 'deficit at R_last' = median over discs of 1 - Vpred/Vobs at the outermost fitted point,")
    print(f" beside the median fractional velocity error there.  A ceiling failure that is real but")
    print(f" chi2-invisible shows up as deficit >> err with outer-half chi2 close to the reference.")
    print(f"\n[{time.time()-t0:.0f}s]")


if __name__ == '__main__':
    main()
