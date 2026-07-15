#!/usr/bin/env python3
"""
TEST-10 EXECUTION: dwarf-galaxy DM dominance under Synchronism's bounded boost, on real SPARC.

The site (/tier-1-existing, TEST-10) badges this "MOND-shared" with the registered prediction
"DM fraction -> 100% for M_bar < 1e8 Msun". But the framework's own galaxy formula
(Sessions #191-193):

    C(a) = Om + (1 - Om) * x / (1 + x),   x = (a/a0)^(1/phi)
    g_obs = g_bar / C(g_bar)

is bounded: C >= Om, so the boost B = g_obs/g_bar <= 1/Om = 3.17. The apparent DM fraction
in Newtonian terms is

    f_DM = 1 - g_bar/g_obs = 1 - C(g_bar) <= 1 - Om = 0.685.

So "f_DM -> 100%" is NOT the framework's prediction -- it is MOND's (unbounded boost).
The framework's ceiling is 68.5%, structurally, for every galaxy at every radius.

This script measures, on real SPARC outermost rotation-curve points:
  1. each galaxy's observed apparent DM fraction f_obs = 1 - (V_bar/V_obs)^2,
  2. the framework's maximum reachable prediction at the same g_bar,
  3. MOND's prediction at the same g_bar,
and reports how many galaxies (and how many dwarfs, M_bar < 1e9 / < 1e8) sit above the
68.5% ceiling -- i.e. are structurally impossible for the bounded boost.

Data: Lelli, McGaugh & Schombert (2016) SPARC mass models (175 galaxies).
M/L: 0.5 (disk), 0.7 (bulge) at 3.6um (McGaugh 2016). V_bar^2 = Vgas|Vgas| + 0.5 Vdisk^2 + 0.7 Vbul^2.
Outer point = error-weighted mean of the outermost 3 measured radii (quality Q<=2, i>30deg).
"""
import numpy as np

BASE = "/mnt/c/exe/projects/ai-agents/Synchronism/simulations/sparc_real_data/"
KPC = 3.0856775814913673e19
KMS = 1.0e3
MSUN = 1.98892e30
G = 6.67430e-11

UP_DISK, UP_BUL = 0.5, 0.7
OM = 0.315
PHI = (1.0 + 5.0 ** 0.5) / 2.0
A0_SYNC = 1.05e-10
A0_MOND = 1.20e-10


def C_sync(g_bar):
    x = (np.asarray(g_bar) / A0_SYNC) ** (1.0 / PHI)
    return OM + (1.0 - OM) * x / (1.0 + x)


def f_dm_mond(g_bar):
    """MOND (McGaugh nu): f_DM = 1 - g_bar/g_obs = exp(-sqrt(g_bar/a0))."""
    return np.exp(-np.sqrt(np.asarray(g_bar) / A0_MOND))


def load_meta():
    """Table 1: name -> (L36 [1e9 Lsun], MHI [1e9 Msun], Q, Inc). Whitespace-parsed (see test09)."""
    out = {}
    with open(BASE + "SPARC_Lelli2016c.mrt") as f:
        for line in f:
            p = line.split()
            if len(p) < 18:
                continue
            try:
                out[p[0]] = dict(inc=float(p[5]), l36=float(p[7]), mhi=float(p[13]),
                                 q=int(p[17]))
            except ValueError:
                continue
    return out


def load_mass_models():
    """Table 2: name -> arrays of (R [kpc], Vobs, eVobs, Vgas, Vdisk, Vbul) [km/s]."""
    out = {}
    with open(BASE + "MassModels_Lelli2016c.mrt") as f:
        for line in f:
            p = line.split()
            if len(p) < 8:
                continue
            try:
                name = p[0]
                r, vobs, evobs, vgas, vdisk, vbul = (float(x) for x in p[2:8])
            except ValueError:
                continue
            out.setdefault(name, []).append((r, vobs, evobs, vgas, vdisk, vbul))
    return {k: np.array(v) for k, v in out.items()}


def main():
    meta = load_meta()
    mm = load_mass_models()

    rows = []
    for name, arr in mm.items():
        m = meta.get(name)
        if m is None or m["q"] > 2 or m["inc"] < 30.0:
            continue
        arr = arr[np.argsort(arr[:, 0])]
        outer = arr[-3:] if len(arr) >= 3 else arr
        r, vobs, evobs, vgas, vdisk, vbul = outer.T
        ok = (vobs > 0) & (evobs > 0)
        if not ok.any():
            continue
        r, vobs, evobs, vgas, vdisk, vbul = (a[ok] for a in (r, vobs, evobs, vgas, vdisk, vbul))
        vbar2 = vgas * np.abs(vgas) + UP_DISK * vdisk ** 2 + UP_BUL * vbul ** 2
        if (vbar2 <= 0).any():
            continue
        w = 1.0 / evobs ** 2
        # error-weighted outer means
        vobs_o = np.sqrt(np.average(vobs ** 2, weights=w))
        vbar2_o = np.average(vbar2, weights=w)
        r_o = np.average(r, weights=w)
        g_bar = vbar2_o * KMS ** 2 / (r_o * KPC)
        f_obs = 1.0 - vbar2_o / vobs_o ** 2
        f_syn = 1.0 - C_sync(g_bar)          # framework's prediction at this g_bar
        f_mnd = f_dm_mond(g_bar)
        m_bar = (UP_DISK * m["l36"] + 1.33 * m["mhi"]) * 1e9  # Msun
        rows.append((name, m_bar, g_bar, f_obs, float(f_syn), float(f_mnd)))

    rows.sort(key=lambda t: t[1])
    n = len(rows)
    m_bar = np.array([t[1] for t in rows])
    f_obs = np.array([t[3] for t in rows])
    f_syn = np.array([t[4] for t in rows])
    f_mnd = np.array([t[5] for t in rows])
    ceiling = 1.0 - OM

    print(f"SPARC galaxies passing quality cuts (Q<=2, i>30): {n}")
    print(f"Framework ceiling on apparent DM fraction: 1 - Om = {ceiling:.3f}\n")

    def report(mask, label):
        k = mask.sum()
        if k == 0:
            print(f"{label}: none in sample")
            return
        exceed = (f_obs[mask] > ceiling).sum()
        print(f"{label} (N={k}):")
        print(f"  median observed f_DM at outer radii : {np.median(f_obs[mask]):.3f}")
        print(f"  max observed f_DM                   : {f_obs[mask].max():.3f}")
        print(f"  exceeding the 0.685 ceiling         : {exceed}/{k} = {100*exceed/k:.0f}%")
        print(f"  median framework prediction f_syn   : {np.median(f_syn[mask]):.3f}")
        print(f"  median MOND prediction f_mond       : {np.median(f_mnd[mask]):.3f}")
        print(f"  median (f_obs - f_syn)              : {np.median(f_obs[mask]-f_syn[mask]):+.3f}")
        print(f"  median (f_obs - f_mond)             : {np.median(f_obs[mask]-f_mnd[mask]):+.3f}\n")

    report(np.ones(n, bool), "ALL galaxies")
    report(m_bar < 1e9, "Dwarfs, M_bar < 1e9 Msun")
    report(m_bar < 1e8, "Dwarfs, M_bar < 1e8 Msun (TEST-10's registered population)")

    print("Ten most DM-dominated galaxies (observed):")
    print(f"{'galaxy':<12} {'M_bar[Msun]':>12} {'f_obs':>6} {'f_syn(max .685)':>15} {'f_mond':>7}  impossible?")
    for name, mb, gb, fo, fs, fm in sorted(rows, key=lambda t: -t[3])[:10]:
        print(f"{name:<12} {mb:>12.2e} {fo:>6.3f} {fs:>15.3f} {fm:>7.3f}  {'YES' if fo > ceiling else 'no'}")

    exceed_all = (f_obs > ceiling).sum()
    print(f"\nVERDICT: {exceed_all}/{n} = {100*exceed_all/n:.0f}% of ALL SPARC galaxies show outer")
    print("apparent DM fractions the bounded boost cannot produce at ANY radius or mass.")
    print("The registered prediction 'f_DM -> 100%' is MOND's, not the framework's; the")
    print("framework's own formula caps f_DM at 68.5%. Not MOND-shared: a discriminator, lost.")


if __name__ == "__main__":
    main()
