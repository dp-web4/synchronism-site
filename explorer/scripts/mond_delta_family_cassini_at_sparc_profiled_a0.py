"""MOND delta-family: Cassini Q2 at SPARC-profiled a0. Explorer 2026-11-06.
PREREG: mond_delta_family_cassini_at_sparc_profiled_a0_PREREG.md (committed a4d99f4 before running).
"""
import sys
from pathlib import Path
import numpy as np
from scipy.optimize import minimize_scalar

SIM = Path('/home/dp/ai-workspace/Synchronism/simulations')
sys.path.insert(0, str(SIM))
from sparc_cassini_q2 import qumond_q, q2_si  # noqa: E402

MRT = SIM / 'sparc_real_data/MassModels_Lelli2016c.mrt'
KPC, KMS = 3.0856775814913673e19, 1.0e3
MEAN, SIG = 1.6e-27, 1.8e-27
GEXT = (2.00e-10, 2.32e-10, 2.48e-10)


def load():
    gid, gobs, gbar = [], [], []
    for line in open(MRT):
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
        gid.append(p[0]); gobs.append((V * KMS)**2 / Rm); gbar.append(vb2 / Rm)
    return np.array(gid), np.array(gobs), np.array(gbar)


def nu_delta(delta):
    def f(y):
        y = np.asarray(y, dtype=float)
        with np.errstate(over='ignore', under='ignore'):
            return (-np.expm1(-y ** (delta / 2.0))) ** (-1.0 / delta)
    return f


def resid(gobs, gbar, a0, delta):
    return np.log10(gobs) - np.log10(gbar * nu_delta(delta)(gbar / a0))


def fit(gobs, gbar, delta):
    r = minimize_scalar(lambda la: np.sum(resid(gobs, gbar, 10**la, delta)**2), bounds=(-11, -9), method='bounded',
                        options={'xatol': 1e-9})
    return 10**r.x, r.fun


def zq(delta, a0, ge):
    res = qumond_q(nu_delta(delta), ge / a0, angular_order=128, radial_order=512, log_v_bound=14.0)
    return (q2_si(res.q, a0) - MEAN) / SIG


def main():
    gid, gobs, gbar = load()
    N = len(gobs)
    a1, s1 = fit(gobs, gbar, 1.0)
    print(f"N = {N}")
    print(f"C1 delta=1: a0 = {a1:.5e} (ref 1.12751e-10)  SSR = {s1:.4f} (ref 57.9649)  "
          f"-> {'PASS' if abs(a1/1.127510621e-10-1) < 1e-4 and abs(s1-57.9649) < 1e-3 else 'FAIL'}")
    c2 = zq(4.0, 1.128e-10, 2.32e-10)
    print(f"C2 delta=4 a0=1.128e-10 g_ext=2.32e-10: z = {c2:+.2f} (ref +1.32) -> {'PASS' if abs(c2-1.32) < 0.02 else 'FAIL'}")

    grid = [1.0, 1.5, 2.0, 2.5, 3.0, 3.5, 4.0, 5.0, 6.0]
    rows = []
    print(f"\n{'delta':>5} {'a0_prof':>11} {'rms_dex':>8} {'dBIC_pt':>8} " + " ".join(f"z@{g:.2e}" for g in GEXT))
    for d in grid:
        a0, s = fit(gobs, gbar, d)
        dbic = N * np.log(s / s1)  # k=1 vs k=1
        zs = [zq(d, a0, g) for g in GEXT]
        rows.append((d, a0, s, dbic, zs))
        print(f"{d:5.1f} {a0:11.4e} {np.sqrt(s/N):8.4f} {dbic:8.1f} " + " ".join(f"{z:12.2f}" for z in zs))

    a0s = [r[1] for r in rows]
    print(f"\nP1 a0 range {min(a0s):.3e}-{max(a0s):.3e} (ratio {max(a0s)/min(a0s):.2f}); in [1.0,1.6]e-10: "
          f"{'HELD' if min(a0s) >= 1.0e-10 and max(a0s) <= 1.6e-10 else 'FAILED'}")
    print(f"P2 monotone increasing: {'HELD' if all(a0s[i] < a0s[i+1] for i in range(len(a0s)-1)) else 'FAILED'}")
    r4 = [r for r in rows if r[0] == 4.0][0]
    print(f"P3 delta=4 profiled z@2.32 = {r4[4][1]:+.2f} > 1.96: {'HELD' if r4[4][1] > 1.96 else 'FAILED'}")
    print(f"P4 delta=4 dBIC_pt = {r4[3]:+.1f} > +100: {'HELD' if r4[3] > 100 else 'FAILED'}")

    passing = [r for r in rows if all(abs(z) < 1.96 for z in r[4])]
    targets = sorted({4.0} | ({passing[0][0]} if passing else set()))
    print(f"Smallest delta passing all three g_ext: {passing[0][0] if passing else 'none <= 6'}")

    # galaxy-block bootstrap of dBIC(delta) vs delta=1, each side re-profiled per resample
    rng = np.random.default_rng(20261106)
    gals = np.unique(gid)
    idx = {g: np.where(gid == g)[0] for g in gals}
    B = 1000
    for d in targets:
        vals = []
        for _ in range(B):
            pick = np.concatenate([idx[g] for g in rng.choice(gals, len(gals), replace=True)])
            go, gb = gobs[pick], gbar[pick]
            _, sa = fit(go, gb, 1.0)
            _, sd = fit(go, gb, d)
            vals.append(len(pick) * np.log(sd / sa))
        vals = np.array(vals)
        pt = [r for r in rows if r[0] == d][0][3]
        print(f"galaxy-boot delta={d}: point {pt:+.1f}; boot median {np.median(vals):+.1f}, "
              f"16-84% [{np.percentile(vals,16):+.1f}, {np.percentile(vals,84):+.1f}], sd {vals.std():.1f}, "
              f"frac>0 {np.mean(vals>0):.3f}, point/sd = {pt/vals.std():.1f}")
        if d == 4.0:
            print(f"P5 frac>0 >= 0.975: {'HELD' if np.mean(vals>0) >= 0.975 else 'FAILED'}")


if __name__ == '__main__':
    main()
