#!/usr/bin/env python3
"""POST-HOC (2026-11-12): the registered P_ABg arm (density_law_at_archive_calibration_v05.py) hit its B bound (-4).
Widen B to (-15, 15) and profile ΔBIC over B on a grid, to see where the free-exponent density law goes and whether
the +2295 is a boundary artefact. Not registered."""
import numpy as np
import density_law_at_archive_calibration_v05 as D

H = D.H


def best_at_B(B, starts_g=(0.02, 0.046, 0.2), starts_A=(-60, -40, -20, -5, 5, 20)):
    def f(th):
        lg, lA, ls = th
        if not (1e-4 < np.exp(lg) < 50 and 1e-4 < np.exp(ls) < 3 and -200 < lA < 200):
            return 1e12
        return H.neglnL(D.mlog(np.exp(lg), D.rc_of(np.exp(lA), B)), D.GL, D.EL, ls)
    return D.fit(f, [[np.log(g), A, np.log(0.2)] for g in starts_g for A in starts_A])


def main():
    rB = H.fit_pillarB(D.GB, D.GL, D.EL)
    mB = np.log10(H.solve_gobs_implicit(D.GB, np.exp(rB.x[0]), np.exp(rB.x[1])))
    bicB = 2 * rB.fun + 3 * D.LN_N
    print("profile over B (A, gamma, sigma free at each B); dBIC counted with k = 4")
    best = None
    for B in (-12, -8, -6, -4, -3, -2, -1, 0, 0.5, 1, 2):
        r = best_at_B(B)
        dbic = 2 * r.fun + 4 * D.LN_N - bicB
        ml = D.mlog(np.exp(r.x[0]), D.rc_of(np.exp(r.x[1]), B))
        _, sd, nl = D.per_gal(ml, r.x[2], mB, rB.x[2])
        print(f"  B {B:+6.1f}: gamma {np.exp(r.x[0]):.4f}  lnA {r.x[1]:+8.2f}  dBIC vs B {dbic:+8.1f}  gal-sd {sd:6.1f}  lose {nl}/122")
        if best is None or dbic < best[1]:
            best = (B, dbic)
    print(f"best grid B {best[0]:+.1f}  dBIC {best[1]:+.1f}")
    # log-regime check: C ~ gamma*(ln rho - ln A - B ln V) => B and gamma*B ln V act as a per-galaxy offset in C
    print("note: in the log regime C ~ gamma(ln rho - lnA) - gamma*B*ln V, so B is a V-dependent additive term in C")


if __name__ == "__main__":
    main()
