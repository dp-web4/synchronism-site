"""Cassini Q2 for MOND delta-family and compander, Upsilon free per galaxy (lognormal prior), a0 profiled.
Explorer 2026-11-07. PREREG: cassini_both_families_upsilon_free_PREREG.md (committed 10d0bdf before running).
"""
import sys
import time
import numpy as np
from scipy.optimize import minimize, minimize_scalar

sys.path.insert(0, '/home/dp/ai-workspace/synchronism-site/explorer/scripts')
sys.path.insert(0, '/home/dp/ai-workspace/Synchronism/simulations')
import mond_delta_family_cassini_at_sparc_profiled_a0 as M  # noqa: E402
from sparc_cassini_q2 import TanhLogNu, qumond_q, q2_si  # noqa: E402

KPC, KMS = M.KPC, M.KMS
SIG = float(sys.argv[2]) if len(sys.argv) > 2 else 0.144
W = float(sys.argv[1]) if len(sys.argv) > 1 else 0.1
LUD, LUB = np.log10(0.5), np.log10(0.7)
GEXT = M.GEXT


def load():
    rows = []
    for line in open(M.MRT):
        p = line.split()
        if len(p) != 10:
            continue
        try:
            D, R, V, eV, Vg, Vd, Vb, _, _ = map(float, p[1:])
        except ValueError:
            continue
        if R <= 0 or V <= 0 or eV / V > 0.10:
            continue
        vb2 = (Vg * abs(Vg) + 0.5 * Vd * abs(Vd) + 0.7 * Vb * abs(Vb)) * KMS**2
        if vb2 <= 0:
            continue
        Rm = R * KPC
        rows.append((p[0], (V * KMS)**2 / Rm, Vg * abs(Vg) * KMS**2 / Rm, Vd * abs(Vd) * KMS**2 / Rm,
                     Vb * abs(Vb) * KMS**2 / Rm))
    gid = np.array([r[0] for r in rows])
    a = np.array([r[1:] for r in rows])
    return gid, a[:, 0], a[:, 1], a[:, 2], a[:, 3]


GID, GOBS, GG, GD, GB = load()
LGOBS = np.log10(GOBS)
GALS = list(dict.fromkeys(GID))
IDX = {g: np.where(GID == g)[0] for g in GALS}
HASB = {g: bool(np.any(GB[IDX[g]] > 0)) for g in GALS}
BUL = {g for g in GALS if HASB[g]}


def gal_obj(lu, ii, nu, a0, hasb):
    ud = 10**lu[0]
    ub = 10**lu[1] if hasb else 0.7
    gb = GG[ii] + ud * GD[ii] + ub * GB[ii]
    if np.any(gb <= 0):
        return 1e12
    r = LGOBS[ii] - np.log10(gb * nu(gb / a0))
    pr = ((lu[0] - LUD) / W)**2 + (((lu[1] - LUB) / W)**2 if hasb else 0.0)
    return np.sum(r**2) / SIG**2 + pr


WARM = {}


def total(a0, nu, gals, pinned):
    tot, ups = 0.0, {}
    for g in gals:
        ii = IDX[g]
        if pinned:
            lu = np.array([LUD, LUB])
            tot += gal_obj(lu, ii, nu, a0, HASB[g])
            ups[g] = lu
            continue
        x0 = WARM.get(g, np.array([LUD, LUB]))
        if HASB[g]:
            r = minimize(gal_obj, x0, args=(ii, nu, a0, True), method='L-BFGS-B', bounds=[(-1.5, 0.7)] * 2)
        else:
            r = minimize(gal_obj, x0[:1], args=(ii, nu, a0, False), method='L-BFGS-B', bounds=[(-1.5, 0.7)])
            r.x = np.array([r.x[0], LUB])
        WARM[g] = r.x
        ups[g] = r.x
        tot += r.fun
    return tot, ups


def profile(nu, gals, pinned, lo=-11.5, hi=-9.0):
    WARM.clear()
    r = minimize_scalar(lambda la: total(10**la, nu, gals, pinned)[0], bounds=(lo, hi), method='bounded',
                        options={'xatol': 1e-5})
    a0 = 10**r.x
    chi, ups = total(a0, nu, gals, pinned)
    return a0, chi, ups


def z(nu, a0, ge, ang=128, rad=512):
    res = qumond_q(nu, ge / a0, angular_order=ang, radial_order=rad, log_v_bound=14.0)
    return (q2_si(res.q, a0) - M.MEAN) / M.SIG


def conv(nu, a0):
    return [z(nu, a0 * 1.001, 2.32e-10), z(nu, a0, 2.32e-10, 192, 768)]


def main():
    t0 = time.time()
    allg = GALS
    nob = [g for g in GALS if g not in BUL]
    print(f"N points {len(GOBS)}, galaxies {len(allg)} (bulge {len(BUL)}), sigma {SIG}, prior width w = {W} dex")
    # identity controls (pinned)
    a1, _, _ = profile(M.nu_delta(1.0), allg, True)
    print(f"C1 pinned delta=1 all: a0 {a1:.5e} (ref 1.12751e-10) -> {'PASS' if abs(a1/1.12751e-10-1) < 2e-4 else 'FAIL'}")
    a6, _, _ = profile(M.nu_delta(6.0), nob, True)
    z6 = z(M.nu_delta(6.0), a6, 2.32e-10)
    print(f"C2 pinned delta=6 no-bulge: a0 {a6:.4e} (ref 1.5391e-10) z@2.32 {z6:+.2f} (ref +3.02) -> "
          f"{'PASS' if abs(z6-3.02) < 0.05 else 'FAIL'}", flush=True)

    fams = [('MOND d', [1.0, 2.0, 4.0, 6.0], M.nu_delta), ('tanh g', [0.489, 1.0, 2.0, 3.0], TanhLogNu)]
    results = {}
    for arm, gals in (('all', allg), ('nobulge', nob)):
        for fname, pars, mk in fams:
            ref = None
            for p in pars:
                nu = mk(p)
                out = {}
                for mode in ('pinned', 'free'):
                    a0, chi, ups = profile(nu, gals, mode == 'pinned')
                    zs = [z(nu, a0, g) for g in GEXT]
                    out[mode] = (a0, chi, zs, ups)
                if ref is None:
                    ref = {m: out[m][1] for m in out}
                c = conv(nu, out['free'][0])
                ud = np.array([10**out['free'][3][g][0] for g in gals])
                results[(arm, fname, p)] = out
                print(f"{arm:7s} {fname} {p:5.3f} | pinned a0 {out['pinned'][0]:.4e} dchi {out['pinned'][1]-ref['pinned']:+8.1f} "
                      f"z {' '.join(f'{v:+6.2f}' for v in out['pinned'][2])} | free a0 {out['free'][0]:.4e} "
                      f"dchi {out['free'][1]-ref['free']:+8.1f} z {' '.join(f'{v:+6.2f}' for v in out['free'][2])} "
                      f"conv {c[0]:+.2f}/{c[1]:+.2f} | Ud med {np.median(ud):.3f} [{np.percentile(ud,16):.3f},"
                      f"{np.percentile(ud,84):.3f}] chi_free {out['free'][1]:.1f}  t={time.time()-t0:.0f}s", flush=True)

    # predictions
    a = results[('all', 'MOND d', 1.0)]['free'][0]
    print(f"\nP1 Upsilon-free all delta=1 a0 {a:.4e} within 10% of 1.128e-10: {'HELD' if abs(a/1.128e-10-1) <= 0.10 else 'FAILED'}")
    passing = [p for p in (1.0, 2.0, 4.0, 6.0) if all(abs(v) < 1.96 for v in results[('nobulge', 'MOND d', p)]['free'][2])]
    z6f = results[('nobulge', 'MOND d', 6.0)]['free'][2][1]
    print(f"P2 no-bulge free: passing deltas {passing or 'none'}; delta=6 z@2.32 {z6f:+.2f} (< +3.02?) -> "
          f"{'HELD' if not passing and z6f < 3.02 else 'FAILED'}")
    mt = min(results[('nobulge', 'tanh g', p)]['free'][2][1] for p in (0.489, 1.0, 2.0, 3.0))
    print(f"P3 compander no-bulge free min z@2.32 {mt:+.2f} > 10: {'HELD' if mt > 10 else 'FAILED'}")
    dm = abs(results[('nobulge', 'MOND d', 6.0)]['free'][2][1] - results[('nobulge', 'MOND d', 6.0)]['pinned'][2][1])
    dt = abs(results[('nobulge', 'tanh g', 3.0)]['free'][2][1] - results[('nobulge', 'tanh g', 3.0)]['pinned'][2][1])
    print(f"P4 |dz| delta=6 {dm:.2f} > |dz| gamma=3 {dt:.2f}: {'HELD' if dm > dt else 'FAILED'}")
    cost = results[('nobulge', 'MOND d', 6.0)]['free'][1] - results[('nobulge', 'MOND d', 1.0)]['free'][1]
    print(f"P5 no-bulge free cost delta=6 vs 1 {cost:+.1f} > +50: {'HELD' if cost > 50 else 'FAILED'}")


if __name__ == '__main__':
    main()
