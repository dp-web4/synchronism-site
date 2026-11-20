"""Refracted Gravity's smoothing length D: which D survives the solar system, wide binaries, LLR Gdot/G and K_z(1.1 kpc)?

Executes rg_smoothing_length_window_PREREG.md (committed 4167dd5 before this file existed).
Usage: python3 -I rg_smoothing_length_window.py
"""
import numpy as np

G_CGS_PER_MSUNPC3 = 6.770e-23            # g/cm^3 per Msun/pc^3
M_P = 1.67262e-24                         # g
AU_PC = 4.84814e-6
GM_SUN = 1.32712e20                       # m^3/s^2
AU_M = 1.495979e11
KMS = 1.0227e-6                           # km/s -> pc/yr
LLR_2SIG = 2.23e-13                       # /yr, Hofmann & Mueller 2018 2-sigma edge
PIONEER = 8.7e-10                         # m/s^2, whole Pioneer anomaly (thermal) used as bound
PLANET_TOL = 1e-8

CAL = {  # (eps0, Q, log10 rho_c [g/cm^3])  Cesare 2024 review table
    "DMS mean": (0.56, 0.92, -25.30),
    "DMS joint": (0.661, 1.79, -24.54),
    "E0 mean": (0.089, 0.47, -24.25),
}
READINGS = ("Q*ln", "Q*log10", "/Q")


def eps(rho_msun, cal, reading, eps0_override=None, Q_override=None):
    """rho in Msun/pc^3."""
    e0, Q, lrc = cal
    if eps0_override is not None:
        e0 = eps0_override
    if Q_override is not None:
        Q = Q_override
    lx = np.log10(np.asarray(rho_msun, dtype=float) * G_CGS_PER_MSUNPC3) - lrc   # log10(rho/rho_c)
    if reading == "Q*ln":
        S = Q * lx * np.log(10)
    elif reading == "Q*log10":
        S = Q * lx
    else:
        S = lx / Q
    # stable form of (1+tanh S)/2 = 1/(1+exp(-2S)); 1 - that = 1/(1+exp(2S))
    one_minus = 1.0 / (1.0 + np.exp(np.clip(2 * S, -700, 700)))
    return 1.0 - (1.0 - e0) * one_minus, (1.0 - e0) * one_minus


def dlneps_dlnrho(rho, cal, reading, **kw):
    h = 1e-4
    a, _ = eps(rho * np.exp(h), cal, reading, **kw)
    b, _ = eps(rho * np.exp(-h), cal, reading, **kw)
    e, _ = eps(rho, cal, reading, **kw)
    return (np.log(a) - np.log(b)) / (2 * h)


def n_to_msun(n_h, he=1.4):
    return n_h * he * M_P / G_CGS_PER_MSUNPC3


def wind(r_au, n1=5.0):
    return n_to_msun(n1, he=1.16) * r_au ** -2


def gauss_W(r_pc, D_pc):
    return (2 * np.pi * D_pc ** 2) ** -1.5 * np.exp(-r_pc ** 2 / (2 * D_pc ** 2))


def rho_solar(r_au, D_au, kernel):
    D = D_au * AU_PC
    if kernel == "gauss":
        sun = gauss_W(r_au * AU_PC, D)
    else:
        sun = (1.0 / (4 / 3 * np.pi * D ** 3)) if D_au > r_au else 0.0
    w = wind(r_au) if D_au < r_au else 3 * wind(1.0) * D_au ** -2
    return sun + w


# ---------------------------------------------------------------- 1. solar system
def solar_ok(D_au, cal, reading, kernel, **kw):
    e1, _ = eps(rho_solar(1.0, D_au, kernel), cal, reading, **kw)
    worst_pl = 0.0
    for r in np.geomspace(0.39, 30.0, 60):
        e, _ = eps(rho_solar(r, D_au, kernel), cal, reading, **kw)
        worst_pl = max(worst_pl, abs(e / e1 - 1))
    worst_pi = 0.0
    for r in np.linspace(20, 70, 51):
        e, _ = eps(rho_solar(r, D_au, kernel), cal, reading, **kw)
        worst_pi = max(worst_pi, abs(GM_SUN / (r * AU_M) ** 2 * (1 / e - 1 / e1)))
    return worst_pl <= PLANET_TOL and worst_pi <= PIONEER, worst_pl, worst_pi


def D_min(cal, reading, kernel):
    for D in np.geomspace(0.1, 1e5, 1500):
        if solar_ok(D, cal, reading, kernel)[0]:
            return D
    return np.nan


# ---------------------------------------------------------------- 2. wide binaries
def wb_boost(n_h, cal, reading, **kw):
    es, _ = eps(n_to_msun(n_h), cal, reading, **kw)
    return 3 / (1 + 2 * es), 1 / es, es


# ---------------------------------------------------------------- 3. LLR
# Near-star hand list (11-18 identity-control list): d pc, m Msun, v_r km/s
HAND = [(1.34, 2.01, -22.4), (1.30, 0.12, -22.2), (1.83, 0.16, -110.6), (2.41, 0.11, 19.0), (2.55, 0.39, -84.7),
        (2.64, 3.04, -5.5), (2.68, 0.20, 29.0), (2.97, 0.17, -10.7), (3.22, 0.82, 16.4), (3.51, 2.10, -3.2),
        (3.49, 1.33, -65.0), (3.64, 0.76, -40.0), (5.13, 1.80, -26.1)]
RHO_GAS = 0.009          # LIC-like (11-18)
# 11-18 measured (default variant, no-phot 0.2): D: (rho_s, |dln rho_s/dt| median, gas lo, gas hi)
MEAS = {1.0: (0.1155, 2.32e-5, 9.5e-8, 8.3e-7), 2.0: (0.0599, 6.33e-6, 9.2e-8, 8.0e-7),
        3.0: (0.0544, 1.70e-6, 4.5e-8, 3.9e-7), 5.0: (0.0525, 3.36e-7, 3.6e-9, 3.1e-8),
        10.0: (0.0521, 4.3e-8, 1.1e-10, 9.9e-10)}


def llr_rate(D, edge_pc=0.0):
    """Returns rho_s, stellar |dln rho/dt|, gas lo, gas hi."""
    if D in MEAS:
        return MEAS[D]
    if D >= 30:
        return (0.043, 4.5e-9, 0.0, 0.0)          # 09-23 smooth-disc floor (Local Bubble: gas ~0)
    sun = gauss_W(0.0, D)
    stars = sum(m * gauss_W(d, D) for d, m, _ in HAND)
    rho_s = sun + stars + RHO_GAS
    drho = sum(m * gauss_W(d, D) * (-d * v / D ** 2) * KMS for d, m, v in HAND)
    att = np.exp(-edge_pc ** 2 / (2 * D ** 2))
    lo = 0.3 * RHO_GAS * 10 * KMS / (np.sqrt(2 * np.pi) * D) / rho_s * att
    hi = 1.0 * RHO_GAS * 26 * KMS / (np.sqrt(2 * np.pi) * D) / rho_s * att
    return rho_s, abs(drho) / rho_s, lo, hi


# ---------------------------------------------------------------- 4. K_z
def sigma_inferred(sig_b, rho_mid, rho_z, cal, reading, **kw):
    em, _ = eps(rho_mid, cal, reading, **kw)
    ez, _ = eps(rho_z, cal, reading, **kw)
    return sig_b * em / ez


def main():
    print("rho_c per calibration: " + "; ".join(
        f"{k}: {10 ** v[2] / G_CGS_PER_MSUNPC3:.3g} Msun/pc^3 = n_H {10 ** v[2] / (1.4 * M_P):.3g} cm^-3"
        for k, v in CAL.items()))
    print(f"solar wind at 1 AU (n=5): {wind(1.0):.3g} Msun/pc^3\n")

    # identity controls
    print("IDENTITY CONTROLS")
    for k, cal in CAL.items():
        a = solar_ok(1.0, cal, "Q*ln", "gauss", eps0_override=1.0)
        b = solar_ok(1.0, cal, "Q*ln", "gauss", Q_override=0.0)
        r = dlneps_dlnrho(0.1, cal, "Q*ln", Q_override=0.0)
        s = sigma_inferred(47.1, 0.043, 0.003, cal, "Q*ln", Q_override=0.0)
        print(f"  {k}: eps0=1 -> planet D {a[1]:.1e}, pioneer {a[2]:.1e};  Q=0 -> planet D {b[1]:.1e}, "
              f"dlneps/dlnrho {r:.1e}, Sigma_inf {s:.3f} (=47.1)")
    print()

    # 1. solar system
    print("1. SOLAR SYSTEM: smallest D (AU) passing planets (<=1e-8) and Pioneer (<=8.7e-10 m/s^2)")
    for k, cal in CAL.items():
        for rd in READINGS:
            print(f"  {k:9s} {rd:8s} gauss D_min = {D_min(cal, rd, 'gauss'):8.3g} AU   top-hat D_min = "
                  f"{D_min(cal, rd, 'tophat'):8.3g} AU")
    # pointwise check for reference (D tiny)
    for k, cal in CAL.items():
        ok, pl, pi = solar_ok(0.01, cal, "Q*ln", "gauss")
        print(f"  pointwise-like D=0.01 AU {k}: planet D {pl:.3g}, Pioneer dg {pi:.3g} m/s^2")
    print()

    # 2. wide binaries
    print("2. WIDE BINARIES (s >> D): boost = 3/(1+2 eps_s) [bare 1/eps_s]; Banik pass <=1.1, Chae pass 1.2-1.6")
    for k, cal in CAL.items():
        for rd in READINGS:
            cells = []
            for n in (0.005, 0.02, 0.05, 0.2):
                b, bare, es = wb_boost(n, cal, rd)
                cells.append(f"n={n}: {b:.2f} [{bare:.2f}]")
            print(f"  {k:9s} {rd:8s} " + "  ".join(cells))
    print()

    # 3. LLR
    Ds = [0.05, 0.1, 0.2, 0.3, 0.5, 0.7, 1.0, 2.0, 3.0, 5.0, 10.0, 30.0, 100.0, 300.0]
    print("3. LLR Gdot/G = |dln eps/dln rho_s| x |dln rho_s/dt|; pass <= 2.23e-13/yr (stars + gas lo); [with gas hi]")
    print("   rates: " + "; ".join(f"D={D}: rho_s {llr_rate(D)[0]:.3g}, stars {llr_rate(D)[1]:.2e}, gas "
                                    f"{llr_rate(D)[2]:.1e}-{llr_rate(D)[3]:.1e}" for D in Ds))
    print("   edge at 0.1 pc instead of 0: gas lo at D=0.05/0.1/0.2 = " +
          ", ".join(f"{llr_rate(D, 0.1)[2]:.1e}" for D in (0.05, 0.1, 0.2)))
    for k, cal in CAL.items():
        for rd in READINGS:
            row = []
            for D in Ds:
                rho_s, rs, glo, ghi = llr_rate(D)
                s = abs(dlneps_dlnrho(rho_s, cal, rd))
                gd, gdh = s * (rs + glo), s * (rs + ghi)
                row.append(f"{D:g}:{gd / LLR_2SIG:.1e}{'' if gd <= LLR_2SIG else '*'}")
            print(f"  {k:9s} {rd:8s} ratio to bound (* = excluded): " + " ".join(row))
    print()

    # 4. K_z (filled from McKee+2015 / Bovy & Rix 2013; brackets printed)
    print("4. K_z(1.1 kpc), D >= 30 pc: Sigma_inf = Sigma_b eps(rho_mid)/eps(rho(1.1 kpc)) vs 68 +- 4")
    for k, cal in CAL.items():
        for rd in READINGS:
            cells = []
            for rho_z in KZ_RHO_Z:
                lo = sigma_inferred(KZ_SIG_B[0], KZ_RHO_MID[0], rho_z, cal, rd)
                hi = sigma_inferred(KZ_SIG_B[1], KZ_RHO_MID[1], rho_z, cal, rd)
                mid = 0.5 * (lo + hi)
                z = (mid - 68) / np.hypot(4, 0.5 * abs(hi - lo))
                cells.append(f"rho_z={rho_z}: {lo:.0f}-{hi:.0f} ({z:+.1f}s)")
            print(f"  {k:9s} {rd:8s} " + "  ".join(cells))


# First run used 47.1 +- 3.4 (McKee's TOTAL baryonic column) and a recalled rho_z bracket. The PREREG says "read from
# McKee+2015": Table 3 gives Sigma_b,1.1 = 43.8 +- 3.4 (|z| < 1.1 kpc, the height Bovy & Rix's 68 +- 4 refers to);
# Eq. 46 gives the baryonic midplane 0.084 (stars 0.043 + gas 0.041). rho_b(1.1 kpc) is not stated in McKee; it is
# built from their Table 2 gas profiles (WNM2 0.077 exp(-z/403) + HII 0.0154 exp(-z/1590) -> n_H 0.0127 -> 4.5e-4) plus
# stars 0.043 x [thin sech^2 or exp, h1 300 + thick beta 0.1, h2 900-1000] = 1.4e-3 - 2.4e-3, plus halo ~1.5e-4.
KZ_SIG_B = (43.8 - 3.4, 43.8 + 3.4)
KZ_RHO_MID = (0.043, 0.084)               # Local-Bubble stars only .. McKee baryonic midplane
KZ_RHO_Z = (0.0014, 0.002, 0.0025, 0.003)


def llr_large_D_rho_variant():
    print("\n3b. LLR at D >= 30 pc with rho_s = 0.084 (McKee baryonic midplane) and rate 2e-9 / 4.5e-9:")
    for k, cal in CAL.items():
        for rd in READINGS:
            cells = []
            for rho_s in (0.043, 0.084):
                s = abs(dlneps_dlnrho(rho_s, cal, rd))
                cells.append(f"rho_s={rho_s}: {s * 2e-9 / LLR_2SIG:.2g}-{s * 4.5e-9 / LLR_2SIG:.2g}x")
            print(f"  {k:9s} {rd:8s} " + "  ".join(cells))


# ---------------------------------------------------------------- 5. joint window (added after the first run; combines
# tests 1-3 on a fine D grid; galaxy-fit applicability D >~ 2 pc printed alongside)
def s_onset_pc(D, n_h=0.02, m=1.0):
    """Separation where a 1 Msun star's Gaussian kernel density falls to the ISM density; beyond it the companion
    sits in the ISM sea (boost regime)."""
    rho_ism = n_to_msun(n_h)
    w0 = m * (2 * np.pi * D ** 2) ** -1.5
    if w0 <= rho_ism:
        return 0.0
    return D * np.sqrt(2 * np.log(w0 / rho_ism))


def joint():
    S_MAX = 30000 * AU_PC
    print("\n5. JOINT WINDOW: D (pc) passing solar system (either kernel) + LLR + wide binaries, per WB reading")
    grid = np.geomspace(1e-5, 300, 300)
    for k, cal in CAL.items():
        for rd in READINGS:
            boosts = [wb_boost(n, cal, rd)[0] for n in (0.005, 0.02, 0.05)]
            bmin, bmax = min(boosts), max(boosts)
            ok_b, ok_c = [], []
            for D in grid:
                if not (solar_ok(D / AU_PC, cal, rd, "tophat")[0] or solar_ok(D / AU_PC, cal, rd, "gauss")[0]):
                    continue
                Dl = D if (D < 1 or D >= 30) else min(MEAS, key=lambda x: abs(np.log(x / D)))
                rho_s, rs, glo, _ = llr_rate(Dl)
                if abs(dlneps_dlnrho(rho_s, cal, rd)) * (rs + glo) > LLR_2SIG:
                    continue
                boosted = s_onset_pc(D) < S_MAX
                if (not boosted) or bmax <= 1.1:
                    ok_b.append(D)
                if boosted and bmax >= 1.2 and bmin <= 1.6:
                    ok_c.append(D)
            f = lambda L: (f"{min(L):.2g}-{max(L):.2g} pc ({min(L) / AU_PC:.0f}-{max(L) / AU_PC:.3g} AU)"
                           if L else "none")
            print(f"  {k:9s} {rd:8s} WB boost(LB) {bmin:.2f}-{bmax:.2f} | Banik reading: {f(ok_b):36s} | "
                  f"Chae reading: {f(ok_c)}")
    print("  s_onset (n_H=0.02) at D = 0.001/0.003/0.01/0.03 pc: " +
          ", ".join(f"{s_onset_pc(D) / AU_PC:.3g} AU" for D in (0.001, 0.003, 0.01, 0.03)))
    print("  galaxy fits (smooth density) presuppose D >~ 2 pc.")


if __name__ == "__main__":
    main()
    llr_large_D_rho_variant()
    joint()
