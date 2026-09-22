#!/usr/bin/env python3
"""DM double count on SPARC: the tanh-log boost plus an a-priori LCDM-abundance NFW halo.

Registered in dm_double_count_sparc_PREREG.md (commit 28e691f) before this file existed.
Models: M0 boost only, M1 halo only, M2 boost(baryons) + Newtonian halo, M3 boost(baryons + halo).
"""
import numpy as np
from scipy.optimize import brentq, minimize_scalar

BASE = "/home/dp/ai-workspace/Synchronism/simulations/sparc_real_data/"
KPC = 3.0856775814913673e19
KMS = 1.0e3
G = 6.67430e-11
MSUN = 1.98847e30
UP_DISK, UP_BUL = 0.5, 0.7
GAMMA, A0 = 0.489, 5.33265e-11
A0_MCG = 1.1275e-10
H = 0.7
RHO_CRIT = 2.775e11 * H**2 * MSUN / (1e3 * KPC)**3  # kg m^-3


def load_rows():
    rows = []
    for line in open(BASE + "MassModels_Lelli2016c.mrt"):
        p = line.split()
        if len(p) != 10:
            continue
        try:
            vals = list(map(float, p[1:]))
        except ValueError:
            continue
        rows.append((p[0], *vals))
    return rows


def load_lum():
    lum = {}
    for line in open(BASE + "SPARC_Lelli2016c.mrt"):
        p = line.split()
        if len(p) < 18:
            continue
        try:
            int(p[1]); float(p[2]); L = float(p[7])
        except ValueError:
            continue
        lum[p[0]] = L * 1e9
    return lum


def mu(x):
    return np.tanh(GAMMA * np.log1p(x))


def boost(gsrc):
    """g solving gsrc = mu(g/A0) g."""
    out = np.empty_like(gsrc)
    for i, gs in enumerate(gsrc):
        f = lambda lg: np.log(mu(np.exp(lg) / A0) * np.exp(lg)) - np.log(gs)
        out[i] = np.exp(brentq(f, np.log(gs) - 1e-9, np.log(gs) + 25))
    return out


def moster_mstar(M):
    M1, N, b, g = 10**11.590, 0.0351, 1.376, 0.608
    return M * 2 * N / ((M / M1)**(-b) + (M / M1)**g)


def halo_mass(mstar):
    f = lambda lm: np.log10(moster_mstar(10**lm)) - np.log10(mstar)
    return 10**brentq(f, 8.0, 16.0)


def nfw_g(r, M200):
    c = 10**(0.905 - 0.101 * np.log10(M200 * H / 1e12))
    r200 = (3 * M200 * MSUN / (4 * np.pi * 200 * RHO_CRIT))**(1 / 3)
    rs = r200 / c
    m = lambda y: np.log1p(y) - y / (1 + y)
    return G * M200 * MSUN * m(r / rs) / m(c) / r**2, c


def main():
    rows, lum = load_rows(), load_lum()
    gal, R, gobs, gbar = [], [], [], []
    for gid, D, Rk, V, eV, Vg, Vd, Vb, _, _ in rows:
        if Rk <= 0 or V <= 0 or eV / V > 0.10:
            continue
        vb2 = (Vg * abs(Vg) + UP_DISK * Vd * abs(Vd) + UP_BUL * Vb * abs(Vb)) * KMS**2
        if vb2 <= 0:
            continue
        r = Rk * KPC
        gal.append(gid); R.append(r); gobs.append((V * KMS)**2 / r); gbar.append(vb2 / r)
    gal = np.array(gal); R = np.array(R); gobs = np.array(gobs); gbar = np.array(gbar)
    print(f"rows selected: {len(gal)}   galaxies: {len(set(gal))}")

    missing = sorted(set(gal) - set(lum))
    print(f"galaxies without L[3.6]: {missing}")
    M200 = {}
    cs = []
    for g in sorted(set(gal)):
        ms = UP_DISK * lum[g]
        M200[g] = halo_mass(ms)
    gh = np.empty_like(gobs)
    for i in range(len(gal)):
        gh[i], c = nfw_g(R[i], M200[gal[i]])
        cs.append(c)
    lm = np.log10(list(M200.values()))
    print(f"log M200 range {lm.min():.2f}..{lm.max():.2f}, median {np.median(lm):.2f}; "
          f"c200 median {np.median(cs):.1f}")

    g0 = boost(gbar)
    models = {
        "M0 boost only": g0,
        "M1 halo only (LCDM)": gbar + gh,
        "M2 boost(bar) + halo": g0 + gh,
        "M3 boost(bar+halo)": boost(gbar + gh),
        "Newton baryons only": gbar,
    }
    outer = gbar < A0_MCG / 3
    print(f"outer (g_bar < a0_McG/3) points: {outer.sum()}")
    print(f"\n{'model (f=1)':24s} {'median r':>9s} {'rms':>7s} {'outer med':>10s} {'outer rms':>10s}")
    res = {}
    for k, gm in models.items():
        r = np.log10(gm) - np.log10(gobs)
        res[k] = r
        print(f"{k:24s} {np.median(r):+9.4f} {np.sqrt(np.mean(r**2)):7.4f} "
              f"{np.median(r[outer]):+10.4f} {np.sqrt(np.mean(r[outer]**2)):10.4f}")

    # halo-to-boost-excess ratio: how much of the needed excess does the AM halo already supply?
    need = gobs - gbar
    ratio = gh[outer] / need[outer]
    print(f"\nouter: g_NFW / (g_obs - g_bar) median {np.median(ratio):.3f}, IQR "
          f"{np.percentile(ratio, 25):.3f}..{np.percentile(ratio, 75):.3f}")

    # per-galaxy amplitude fits
    def fit_f(model_fn):
        fs = {}
        for g in sorted(set(gal)):
            s = gal == g
            obj = lambda f: np.sum((np.log10(model_fn(s, f)) - np.log10(gobs[s]))**2)
            fs[g] = minimize_scalar(obj, bounds=(0, 10), method="bounded", options={"xatol": 1e-4}).x
        return np.array(list(fs.values()))

    f1 = fit_f(lambda s, f: gbar[s] + f * gh[s])
    f2 = fit_f(lambda s, f: g0[s] + f * gh[s])
    for name, fv in [("M1 halo only", f1), ("M2 boost + halo", f2)]:
        print(f"\nfitted f, {name}: median {np.median(fv):.3f}, IQR {np.percentile(fv, 25):.3f}.."
              f"{np.percentile(fv, 75):.3f}; frac f<0.1 = {np.mean(fv < 0.1):.3f}; "
              f"frac f>=0.5 = {np.mean(fv >= 0.5):.3f}; frac at upper bound 10 = {np.mean(fv > 9.99):.3f}")

    # sensitivity: gamma edges of the SPARC-retained interval are not re-profiled here (a0 fixed); report
    # the halo-mass sensitivity instead: SHMR shifted by +/-0.2 dex in M* at fixed M200 mapping
    print("\nsensitivity: M* x 10^(+/-0.2) before SHMR inversion (M2, f=1)")
    for dl in (-0.2, 0.2):
        ghs = np.empty_like(gobs)
        Ms = {g: halo_mass(UP_DISK * lum[g] * 10**dl) for g in set(gal)}
        for i in range(len(gal)):
            ghs[i], _ = nfw_g(R[i], Ms[gal[i]])
        r = np.log10(g0 + ghs) - np.log10(gobs)
        print(f"  dlogM*={dl:+.1f}: median r {np.median(r):+.4f}, outer median {np.median(r[outer]):+.4f}")

    # verdicts
    r0, r1, r2, r3 = (res[k] for k in list(models)[:4])
    rms = lambda x: np.sqrt(np.mean(x**2))
    print("\nVERDICTS")
    print(f"P1 M0 rms {rms(r0):.4f} in 0.1437+/-0.001: {abs(rms(r0) - 0.1437) <= 0.001}")
    print(f"P2 M1 median {np.median(r1):+.4f} in [-0.05,+0.15]: {-0.05 <= np.median(r1) <= 0.15}")
    p3 = (0.12 <= np.median(r2) <= 0.35) and np.median(r2[outer]) > 0.20 and rms(r2) > 1.5 * rms(r0)
    print(f"P3 M2 median {np.median(r2):+.4f}, outer {np.median(r2[outer]):+.4f}, rms ratio "
          f"{rms(r2) / rms(r0):.2f}: {p3}")
    p4 = np.median(f2) < 0.2 and np.mean(f2 < 0.1) >= 0.5 and 0.3 <= np.median(f1) <= 3
    print(f"P4 f2 median {np.median(f2):.3f}, frac<0.1 {np.mean(f2 < 0.1):.3f}; f1 median {np.median(f1):.3f}: {p4}")
    p5 = np.median(r3) < np.median(r2) and np.median(r3) > 0.08
    print(f"P5 M3 median {np.median(r3):+.4f} < M2 and > +0.08: {p5}")


if __name__ == "__main__":
    main()
