"""LLR bound on density-keyed G with a MEASURED d ln rho_s / dt (Gaia DR3, r < 30 pc), not an e-fold over ell.

Executes explorer/scripts/llr_bound_measured_gradient_PREREG.md (committed 6c15fc7 before this file existed).

Gaussian kernel W(r) = (2 pi ell^2)^-1.5 exp(-r^2 / 2 ell^2). Only the heliocentric radial velocity enters:
    d rho_s/dt = sum_i m_i W(r_i) (-r_i v_r,i / ell^2).
Input: /tmp/gaia30/gaia30.csv (ESA Gaia archive TAP, 2026-11-18:
    SELECT source_id, ra, dec, parallax, parallax_over_error, phot_g_mean_mag, bp_rp, radial_velocity, radial_velocity_error
    FROM gaiadr3.gaia_source WHERE parallax > 33.333 AND parallax_over_error > 10)
Usage: python3 -I llr_bound_measured_gradient.py /tmp/gaia30/gaia30.csv
"""
import csv
import sys
import numpy as np

KMS = 1.0227e-6            # km/s -> pc/yr
LLR_2SIG = 7.1e-14 + 2 * 7.6e-14   # Hofmann & Mueller 2018, 2-sigma upper edge on |Gdot/G|
RHO_STAR_SMOOTH = 0.043    # Msun/pc^3, midplane stars (09-23 prereg value)
RHO_GAS_LOCAL = 0.009      # Msun/pc^3, LIC-like warm gas (n ~ 0.27 cm^-3); the Local Bubble elsewhere is ~0
ELLS = [1.0, 2.0, 3.0, 5.0, 10.0]
NDRAW = 1000
SIG_VR = 35.0              # km/s, draw for stars without a Gaia RV
rng = np.random.default_rng(20261118)

# Bright stars absent from (or unusable in) Gaia DR3 within 30 pc: name, ra, dec (deg), d pc, mass Msun, v_r km/s.
# Values are catalogue-level recall (SIMBAD-class), adequate for an order-of-magnitude rate; stated as such.
BRIGHT = [("alpha Cen AB", 219.90, -60.83, 1.34, 2.01, -22.4), ("Sirius AB", 101.29, -16.72, 2.64, 3.08, -5.5),
          ("Procyon AB", 114.83, 5.23, 3.51, 2.10, -3.2), ("Altair", 297.70, 8.87, 5.13, 1.80, -26.1),
          ("Vega", 279.23, 38.78, 7.68, 2.10, -13.9), ("Fomalhaut", 344.41, -29.62, 7.70, 1.92, 6.5),
          ("Arcturus", 213.92, 19.18, 11.26, 1.08, -5.2), ("Pollux", 116.33, 28.03, 10.36, 1.91, 3.2),
          ("Capella", 79.17, 46.00, 13.12, 5.05, 29.2), ("Castor", 113.65, 31.89, 15.6, 6.0, 6.0),
          ("Aldebaran", 68.98, 16.51, 20.0, 1.16, 54.3), ("Regulus", 152.09, 11.97, 24.3, 3.8, 5.9),
          ("Denebola", 177.26, 14.57, 11.0, 1.78, -0.2), ("Rasalhague", 263.73, 12.56, 14.9, 2.4, 12.4),
          ("Alderamin", 319.64, 62.59, 15.0, 1.74, -10.0), ("Diphda", 10.90, -17.99, 29.5, 2.8, 13.3),
          ("Alioth", 193.51, 55.96, 25.3, 2.9, -9.3), ("Mizar", 200.98, 54.93, 26.3, 4.5, -6.0),
          ("Merak", 165.46, 56.38, 24.4, 2.7, -12.0), ("Phecda", 178.46, 53.69, 25.5, 2.9, -12.6),
          ("Alphecca", 233.67, 26.71, 23.0, 3.5, 1.7), ("Hamal", 31.79, 23.46, 20.2, 1.5, -14.6),
          ("Caph", 2.29, 59.15, 16.8, 1.9, 11.3), ("Algol", 47.04, 40.96, 28.5, 5.7, 4.0),
          ("Menkent", 211.67, -36.37, 18.0, 1.27, 1.3), ("Zosma", 168.53, 20.52, 17.9, 2.2, -20.0)]

# Main-sequence M_G -> mass (Msun), piecewise-linear; giants (M_G < 1, BP-RP > 1) 1.2; WDs 0.6; M_G > 16: 0.05.
MG_TAB = np.array([-1, 0.5, 1.5, 2.5, 3.5, 4.5, 5.5, 6.5, 7.5, 8.5, 9.5, 10.5, 11.5, 12.5, 13.5, 14.5, 15.5, 16.0])
M_TAB = np.array([3.0, 2.3, 1.9, 1.6, 1.3, 1.05, 0.9, 0.77, 0.68, 0.58, 0.48, 0.37, 0.26, 0.19, 0.14, 0.11, 0.09, 0.07])


def mass_from(G, bprp, plx, nophot_mass):
    if G is None:
        return nophot_mass
    MG = G + 5 * np.log10(plx / 100.0)
    if MG > 16:
        return 0.05
    if MG > 10 and bprp is not None and bprp < 1.5:
        return 0.6
    if MG < 1 and bprp is not None and bprp > 1.0:
        return 1.2
    return float(np.interp(MG, MG_TAB, M_TAB))


def unitvec(ra, dec):
    ra, dec = np.radians(ra), np.radians(dec)
    return np.array([np.cos(dec) * np.cos(ra), np.cos(dec) * np.sin(ra), np.sin(dec)])


RV_CLEAN = False   # variant: RVs with error > 5 km/s or on WD-classified sources are treated as missing (drawn)


def load(path, nophot_mass):
    rows = []
    with open(path) as f:
        for r in csv.DictReader(f):
            fl = lambda k: float(r[k]) if r[k] not in ("", None) else None
            plx, G, bprp, rv = fl("parallax"), fl("phot_g_mean_mag"), fl("bp_rp"), fl("radial_velocity")
            m = mass_from(G, bprp, plx, nophot_mass)
            if RV_CLEAN and rv is not None and (m == 0.6 or (fl("radial_velocity_error") or 99) > 5):
                rv = None
            rows.append(dict(ra=fl("ra"), dec=fl("dec"), d=1000.0 / plx, m=m, rv=rv, src="gaia"))
    # add bright stars unless Gaia already has a source within 1 deg and 10 % in distance
    pos = np.array([unitvec(r["ra"], r["dec"]) * r["d"] for r in rows])
    added, matched = [], []
    for name, ra, dec, d, m, vr in BRIGHT:
        p = unitvec(ra, dec) * d
        sep = np.linalg.norm(pos - p, axis=1)
        near = np.where(sep < max(0.1 * d, 0.05))[0]
        if len(near) and max(rows[i]["m"] for i in near) > 0.8:
            matched.append(name)
            for i in near:          # use the catalogue mass / RV for the matched primary
                if rows[i]["m"] > 0.8:
                    rows[i].update(m=max(rows[i]["m"], m), rv=vr if rows[i]["rv"] is None else rows[i]["rv"])
                    break
        else:
            rows.append(dict(ra=ra, dec=dec, d=d, m=m, rv=vr, src="bright"))
            added.append(name)
    return rows, added, matched


def rates(rows, ell, draws):
    d = np.array([r["d"] for r in rows])
    m = np.array([r["m"] for r in rows])
    W = (2 * np.pi * ell ** 2) ** -1.5 * np.exp(-d ** 2 / (2 * ell ** 2))
    has = np.array([r["rv"] is not None for r in rows])
    rv = np.array([r["rv"] if r["rv"] is not None else 0.0 for r in rows])
    coef = m * W * (-d / ell ** 2) * KMS                # d rho_s/dt = sum coef * v_r
    fixed = np.sum(coef[has] * rv[has])
    rand = rng.normal(0, SIG_VR, size=(draws, int((~has).sum()))) @ coef[~has]
    total = fixed + rand
    rho_disc = RHO_STAR_SMOOTH + RHO_GAS_LOCAL
    rho_sun = (2 * np.pi * ell ** 2) ** -1.5        # the Sun's own kernel weight (constant in time)
    rho_s = rho_disc + rho_sun
    # top contributors (fixed RVs only)
    contrib = coef * np.where(has, rv, 0.0)
    top = np.argsort(-np.abs(contrib))[:4]
    return dict(rho_s=rho_s, fixed=fixed / rho_s, med=np.median(np.abs(total)) / rho_s,
                p16=np.percentile(np.abs(total), 16) / rho_s, p84=np.percentile(np.abs(total), 84) / rho_s,
                rand_rms=np.std(rand) / rho_s, n_in=int(np.sum(d < 2 * ell)), frac_rv=float(has[d < 2 * ell].mean()),
                mass_in=float(np.sum(m[d < ell])), top=[(rows[i].get("src"), round(rows[i]["d"], 2), rows[i]["m"],
                                                          rows[i]["rv"], contrib[i] / rho_s) for i in top])


def gas_terms(ell):
    """Planar LIC edge (valid while the cloud is larger than the kernel, ell <~ 2 pc): d rho/dt = drho v / (sqrt(2pi) ell).
    For ell >~ cloud size (~2-5 pc) a cloud is a compact blob: suppressed by ~ (L/ell)^3 (r/ell). Both printed."""
    rho_s = RHO_STAR_SMOOTH + RHO_GAS_LOCAL + (2 * np.pi * ell ** 2) ** -1.5
    lo = 0.3 * RHO_GAS_LOCAL * 10 * KMS / (np.sqrt(2 * np.pi) * ell) / rho_s
    hi = 1.0 * RHO_GAS_LOCAL * 26 * KMS / (np.sqrt(2 * np.pi) * ell) / rho_s
    L = 3.0
    supp = min(1.0, (L / ell) ** 3 * min(1.0, 2.0 / ell))
    return lo, hi, lo * supp, hi * supp


def main():
    global RV_CLEAN
    path = sys.argv[1]
    RV_CLEAN = len(sys.argv) > 2 and sys.argv[2] == "clean"
    print(f"RV_CLEAN = {RV_CLEAN}")
    print(f"2-sigma LLR edge |Gdot/G| < {LLR_2SIG:.3g} /yr\n")
    for nophot in (0.2, 0.5):
        rows, added, matched = load(path, nophot)
        print(f"=== no-photometry mass = {nophot} Msun; N = {len(rows)}; bright added {len(added)}: {', '.join(added)}")
        print(f"    bright matched in Gaia: {', '.join(matched) or 'none'}")
        dd = np.array([r["d"] for r in rows]); mm = np.array([r["m"] for r in rows])
        for R in (5, 10, 20):
            print(f"    stellar mass density r<{R} pc: {mm[dd < R].sum() / (4 / 3 * np.pi * R ** 3):.4f} Msun/pc^3"
                  f" (N={int((dd < R).sum())})")
        print(f"{'ell':>5} {'rho_s':>8} {'N<2ell':>7} {'fRV':>5} {'fixed-RV':>10} {'|tot| med':>10} {'16%':>9} {'84%':>9}"
              f" {'site v/ell':>10} {'gas edge':>18} {'gas blob':>18} {'bound(med)':>11} {'bound(16%)':>11}")
        for ell in ELLS:
            r = rates(rows, ell, NDRAW)
            glo, ghi, blo, bhi = gas_terms(ell)
            site = 20 * KMS / ell
            print(f"{ell:5.0f} {r['rho_s']:8.4f} {r['n_in']:7d} {r['frac_rv']:5.2f} {r['fixed']:10.2e} {r['med']:10.2e}"
                  f" {r['p16']:9.2e} {r['p84']:9.2e} {site:10.2e} {glo:8.1e}-{ghi:8.1e} {blo:8.1e}-{bhi:8.1e}"
                  f" {LLR_2SIG / r['med']:11.2e} {LLR_2SIG / r['p16']:11.2e}")
        for ell in (1.0, 3.0, 10.0):
            r = rates(rows, ell, 10)
            print(f"   top fixed-RV contributors at ell={ell:.0f}: " +
                  "; ".join(f"{s} d={d} m={m:.2f} vr={v} -> {c:+.2e}" for s, d, m, v, c in r["top"]))
        print()
    # Identity control: the 09-23 hand list alone at ell = 1 pc should reproduce its 'named stars' 1.62e-5
    hand = [dict(d=d, m=m, rv=v, src="hand") for _, _, _, d, m, v in BRIGHT[:1]] + \
           [dict(d=1.30, m=0.12, rv=-22.2), dict(d=1.83, m=0.16, rv=-110.6), dict(d=2.41, m=0.11, rv=19.0),
            dict(d=2.55, m=0.39, rv=-84.7), dict(d=2.64, m=3.04, rv=-5.5), dict(d=2.68, m=0.20, rv=29.0),
            dict(d=2.97, m=0.17, rv=-10.7), dict(d=3.22, m=0.82, rv=16.4), dict(d=3.51, m=2.10, rv=-3.2),
            dict(d=3.49, m=1.33, rv=-65.0), dict(d=3.64, m=0.76, rv=-40.0), dict(d=5.13, m=1.80, rv=-26.1)]
    r = rates(hand, 1.0, 1)
    print(f"Identity control (09-23 hand list, ell=1): fixed = {r['fixed']:.3g} (09-23 printed 1.62e-05;"
          f" its rho_ref was the bubble-free 0.147 vs {r['rho_s']:.3f} here)")


if __name__ == "__main__":
    main()
