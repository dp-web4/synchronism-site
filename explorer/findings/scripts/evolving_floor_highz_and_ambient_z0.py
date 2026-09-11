#!/usr/bin/env python3
r"""
THE EVOLVING FLOOR, TESTED ON PUBLISHED KINEMATICS — AND ITS ENVIRONMENT TWIN ON SPARC
======================================================================================
Explorer 2026-09-11.  Topic: floor-meaning-evolving-ceiling-high-z-dm-fraction-check.md (HIGH).
Pre-registration: explorer/work/2026-09-11-prereg-evolving-floor-highz.md
  high-z rule committed a9dfc48 before any f_DM table was fetched;
  z = 0 addendum committed before section E was computed.

Reading under test: the galaxy floor is the dark-energy sector's C at the ambient matter density,
    C_floor = C_DE(rho_m(z) (1 + delta)),   C = tanh(gamma ln(1 + x)),  rho_DE = rho_m (1 - C)/C,
closed on today's Omega_m (Session 100).  Boost ceiling B_max = 1/C_floor, f_DM,max = 1 - C_floor.

 A. Identity: C_DE(rho_m(z)) = Omega_m(z) of the model's own background, at EVERY z and gamma.
    So the maintainer's 09-11 table is the 08-08 "branch (ii)" 1/Omega_m(z) closed a priori.
 B. The gamma band DESI DR2 wCDM allows (crude pivot mapping, declared).
 C. Price+2021 (41 SFGs, 0.66 < z < 2.45) against the cap, pre-registered rule, stress rows.
 D. RC100 (Nestor Shachar+2023) binned medians against the cap.
 E. z = 0: the ambient-environment twin on SPARC x TEST-08's CF4 environment proxy.
"""
import csv
import json
import math
import os
import sys

import numpy as np
from scipy import stats

HERE = os.path.dirname(os.path.abspath(__file__))
DATA = os.path.join(HERE, "..", "..", "data", "highz_fdm")
OM = 0.315
GDE = 0.487


def x0_for(g, om=OM):
    return math.exp(math.atanh(om) / g) - 1.0


def C(x, g):
    return np.tanh(g * np.log1p(x))


def C_amb(z, g, delta=0.0):
    return C(x0_for(g) * (1 + z) ** 3 * (1 + delta), g)


def om_lcdm(z):
    return OM * (1 + z) ** 3 / (OM * (1 + z) ** 3 + 1 - OM)


def w_closed(z, g):
    u = 1.0 + x0_for(g) * (1 + z) ** 3
    p = 2 * g
    return -1.0 + (u ** p - 1 - p * (u - 1) * u ** (p - 1)) / (u ** p - 1)


def delta_required(f, z, g):
    """ambient overdensity at which C_floor = 1 - f (the cap just admits f)."""
    c = 1.0 - f
    if c <= 0:
        return float("nan")
    return (math.exp(math.atanh(c) / g) - 1.0) / (x0_for(g) * (1 + z) ** 3) - 1.0


def verdict(f, sig, cap):
    n = len(f)
    exc = (f - cap) > 2 * sig
    need = max(5, math.ceil(0.10 * n))
    se = 1.2533 * np.std(f, ddof=1) / math.sqrt(n)
    dmed = np.median(f) - np.median(cap)
    if exc.sum() >= need or dmed > 3 * se:
        v = "REFUTED"
    elif exc.sum() <= 2 and dmed <= se:
        v = "SURVIVES"
    else:
        v = "INCONCLUSIVE"
    return v, int(exc.sum()), need, dmed, se


def main():
    print(__doc__.split("\n")[1])
    print()

    # ------------------------------------------------------------------ A
    print("A. C_DE at the mean matter density IS the model's own Omega_m(z) — every gamma, every z")
    worst = 0.0
    for g in (0.3, GDE, 0.5, 1.0, 2.0):
        row = []
        for z in (0.0, 1.0, 2.0, 4.2):
            c = float(C_amb(z, g))
            rm = x0_for(g) * (1 + z) ** 3
            rde = rm * (1 - c) / c
            om_model = rm / (rm + rde)
            worst = max(worst, abs(om_model - c))
            row.append(f"z={z:<3} C={c:.4f} 1/C={1 / c:.3f} [LCDM 1/Om(z)={1 / om_lcdm(z):.3f}]")
        print(f"   gamma={g:<5} " + " | ".join(row))
    print(f"   max |C - Omega_m,model(z)| = {worst:.1e}  (algebraic identity: rho_m/(rho_m+rho_DE) = C)")
    print("   08-08 branch (ii) table (LCDM): 1/Om = 1.272 (z=1), 1.081 (z=2).  gamma = 0.5 row reproduces it")
    print("   exactly; gamma = 0.487 (the 09-11 topic table) differs only because rho_DE(z) is not constant.")
    print()

    # ------------------------------------------------------------------ B
    print("B. gamma band allowed by DESI DR2 wCDM (arXiv:2503.14738 Table: DESI+CMB+{Pantheon+,Union3,DESY5})")
    rows = [(-0.995, 0.023), (-0.997, 0.027), (-0.971, 0.021)]
    lo = min(w - 2 * s for w, s in rows)
    hi = max(w + 2 * s for w, s in rows)
    print(f"   2-sigma envelope over the three SN choices: w in [{lo:.3f}, {hi:.3f}]")
    grid = np.linspace(0.30, 0.80, 5001)
    band = {}
    for zp in (0.3, 0.5, 1.0):
        ok = np.array([lo <= w_closed(zp, g) <= hi for g in grid])
        band[zp] = (grid[ok].min(), grid[ok].max())
        print(f"   pivot z = {zp}: w_model(z_p) inside envelope for gamma in [{band[zp][0]:.3f}, {band[zp][1]:.3f}]")
    gmin = min(b[0] for b in band.values())
    gmax = max(b[1] for b in band.values())
    print(f"   union over pivots (generous): gamma_DE in [{gmin:.3f}, {gmax:.3f}].  Crude: a single-pivot")
    print("   map from a constant-w posterior to a w(z) family, not a refit of the likelihood.")
    print()

    # ------------------------------------------------------------------ C
    print("C. Price+2021 Table 3 (1D MCMC) vs the cap  —  sigma = the quoted error toward the cap")
    gal = list(csv.DictReader(r for r in open(os.path.join(DATA, "price2021_table3_1d.csv")) if not r.startswith("#")))
    mas = {r["id"]: r for r in csv.DictReader(r for r in open(os.path.join(DATA, "price2021_table1_masses.csv"))
                                              if not r.startswith("#"))}
    z = np.array([float(r["z"]) for r in gal])
    f = np.array([float(r["fdm_re"]) for r in gal])
    sm = np.array([float(r["err_minus"]) for r in gal])
    ids = [r["id"] for r in gal]
    mstar = np.array([10 ** float(mas[i]["logMstar"]) for i in ids])
    mgas = np.array([10 ** float(mas[i]["logMgas"]) for i in ids])
    k_salp = (1.74 * mstar + mgas) / (mstar + mgas)          # Chabrier -> Salpeter on M*, gas unchanged
    variants = {
        "as published": f,
        "Salpeter stress": np.clip(1 - (1 - f) * k_salp, 0, 1),
        "least-sq shift (-0.12)": np.clip(f - 0.12, 0, 1),
        "Salpeter + least-sq": np.clip(1 - (1 - np.clip(f - 0.12, 0, 1)) * k_salp, 0, 1),
    }
    bins = (("z >= 1.5 (VERDICT)", z >= 1.5), ("0.9 <= z < 1.5 (secondary)", (z >= 0.9) & (z < 1.5)))
    for g in (0.5, gmin, gmax, 0.3):
        cap = np.array([1 - float(C_amb(zz, g)) for zz in z])
        print(f"   gamma = {g:.3f}")
        for bname, m in bins:
            for vname, fv in variants.items():
                v, n_exc, need, dmed, se = verdict(fv[m], sm[m], cap[m])
                print(f"     {bname:<27} {vname:<23} N={m.sum():2d}  median f={np.median(fv[m]):.2f}"
                      f"  median cap={np.median(cap[m]):.3f}  >2sig: {n_exc:2d} (need {need})"
                      f"  median excess = {dmed / se:5.1f} s.e.  -> {v}")
    print()
    sp_ = np.array([float(r["err_plus"]) for r in gal])
    print("   Does the Salpeter escape survive the same kinematics?  Galaxies pushed below f = 0 by more than")
    print("   2 sigma (baryons alone exceed the measured circular velocity):")
    for bname, m in bins:
        for vname, base in (("Salpeter stress", f), ("Salpeter + least-sq", np.clip(f - 0.12, 0, 1))):
            raw = 1 - (1 - base) * k_salp
            print(f"     {bname:<27} {vname:<23} super-maximal at >2 sigma: {int(np.sum(raw[m] < -2 * sp_[m]))}"
                  f" of {m.sum()};  at >1 sigma: {int(np.sum(raw[m] < -sp_[m]))}")
    print()

    print("C2. Genzel+2020 Table D1 (least-squares, constrained posterior; same galaxies, independent fit)")
    gz = list(csv.DictReader(r for r in open(os.path.join(DATA, "genzel2020_tableD1_fdm.csv")) if not r.startswith("#")))
    zg = np.array([float(r["z"]) for r in gz])
    fg = np.array([float(r["fdm_re"]) for r in gz])
    sg = np.array([float(r["err"]) for r in gz])
    kg = np.array([k_salp[ids.index(r["id"])] for r in gz])
    print(f"   N = {len(gz)} (GS4_32976 has no D1 row);  Spearman(Price, Genzel) f_DM = "
          f"{stats.spearmanr(fg, [f[ids.index(r['id'])] for r in gz])[0]:+.2f}")
    binsg = (("z >= 1.5 (VERDICT)", zg >= 1.5), ("0.9 <= z < 1.5 (secondary)", (zg >= 0.9) & (zg < 1.5)))
    for g in (0.5, gmin, gmax, 0.3):
        capg = np.array([1 - float(C_amb(zz, g)) for zz in zg])
        for bname, m in binsg:
            for vname, fv in (("as published", fg), ("Salpeter stress", np.clip(1 - (1 - fg) * kg, 0, 1))):
                v, n_exc, need, dmed, se = verdict(fv[m], sg[m], capg[m])
                print(f"     gamma={g:.3f} {bname:<27} {vname:<16} N={m.sum():2d}  median f={np.median(fv[m]):.2f}"
                      f"  median cap={np.median(capg[m]):.3f}  >2sig: {n_exc:2d} (need {need})"
                      f"  median excess = {dmed / se:5.1f} s.e.  -> {v}")
    rawg = 1 - (1 - fg) * kg
    for bname, m in binsg:
        print(f"   Genzel + Salpeter, {bname:<27}: super-maximal at >2 sigma {int(np.sum(rawg[m] < -2 * sg[m]))} of "
              f"{m.sum()}, at >1 sigma {int(np.sum(rawg[m] < -sg[m]))}, below f = 0 at all {int(np.sum(rawg[m] < 0))}")
    print()
    m = z >= 1.5
    cap = np.array([1 - float(C_amb(zz, GDE)) for zz in z])
    print(f"   z >= 1.5 per galaxy at gamma = {GDE}: f_DM, cap, and the ambient delta that would admit it")
    for i in np.where(m)[0]:
        dr = delta_required(f[i], z[i], GDE)
        flag = "EXCEEDS >2sig" if f[i] - cap[i] > 2 * sm[i] else ""
        print(f"     {ids[i]:<14} z={z[i]:.3f}  f={f[i]:.2f}-{sm[i]:.2f}  cap={cap[i]:.3f}  delta_req={dr:+.3f}  {flag}")
    dreq = np.array([delta_required(f[i], z[i], GDE) for i in np.where(m)[0]])
    print(f"   median delta_req (z >= 1.5) = {np.nanmedian(dreq):+.3f}; massive SFGs at z ~ 2 are biased tracers (delta > 0).")
    print()

    # ------------------------------------------------------------------ D
    print("D. RC100 (arXiv:2209.12199 §4.1): binned medians (the +/- read as the population spread)")
    for lab, n, med, sd, zl, zh in (("z = 0.6-1.2", 33, 0.38, 0.23, 0.6, 1.2), ("z = 1.2-2.5", 67, 0.27, 0.18, 1.2, 2.5)):
        se = 1.2533 * sd / math.sqrt(n)
        for g in (0.5, gmin):
            cl = 1 - float(C_amb(zl, g))
            cm = 1 - float(C_amb(0.5 * (zl + zh), g))
            print(f"   {lab}  N={n}  median={med}  s.e.={se:.3f}  gamma={g:.3f}: cap at bin's LOWEST z = {cl:.3f}"
                  f" (excess {(med - cl) / se:+5.1f} s.e.), at bin centre = {cm:.3f} ({(med - cm) / se:+5.1f} s.e.)")
    print("   Shape, not level: RC100 fits <f_DM>(z) = a (1+z)^-b with b = 1.07 +/- 0.33 (a = 0.75 +/- 0.23).")
    for g in (0.5, gmin, gmax):
        c1, c2 = 1 - float(C_amb(0.85, g)), 1 - float(C_amb(2.44, g))
        b_cap = math.log(c1 / c2) / math.log(3.44 / 1.85)
        print(f"   gamma={g:.3f}: cap falls {c1:.3f} -> {c2:.3f} over z = 0.85 -> 2.44, effective b = {b_cap:.2f}"
              f"  ({(b_cap - 1.07) / 0.33:+.1f} sigma from RC100's b).  At z = 0: fit a = 0.75, cap = 0.685.")
    print("   Can any power of the cosmic matter fraction fix the shape?  floor = Omega_m(z)^p (LCDM background):")
    for p in (1.0, 0.6, 0.4, 0.2, 0.1):
        c1, c2 = 1 - om_lcdm(0.85) ** p, 1 - om_lcdm(2.44) ** p
        print(f"     p = {p:<4} effective b = {math.log(c1 / c2) / math.log(3.44 / 1.85):.2f}   cap at z = 0 = {1 - OM ** p:.3f}")
    print("   b rises as p falls: the exponent is the (1+z)^3 dilution, not the floor's functional form.")
    print()

    # ------------------------------------------------------------------ E
    print("E. z = 0 ambient twin: SPARC (Q<=2, i>30) x TEST-08 CF4 environment, Upsilon_disk 0.5 / bulge 0.7")
    sys.path.insert(0, HERE)
    import l2_sparc_core as K
    local = os.path.expanduser("~/ai-workspace/Synchronism/simulations/sparc_real_data")
    if not os.path.exists(K.LOAD.TAB1) and os.path.exists(local):
        K.LOAD.BASE = local
        K.LOAD.MRT = os.path.join(local, "MassModels_Lelli2016c.mrt")
        K.LOAD.TAB1 = os.path.join(local, "SPARC_Lelli2016c.mrt")
    sp = K.load_sparc()
    env = json.load(open(os.path.expanduser("~/ai-workspace/Synchronism/simulations/test08_per_galaxy_results.json")))
    names, breq, rho5, sph5, dist = [], [], [], [], []
    for gid in sorted(set(sp) & set(env)):
        d = sp[gid]
        _v, v2 = K.vbar_sparc(d, up_disk=0.5, up_bul=0.7)
        mm = (v2 > 0) & (d["Vobs"] > 0)
        if mm.sum() < 3:
            continue
        names.append(gid)
        breq.append(float((d["Vobs"][mm] ** 2 / v2[mm]).max()))
        rho5.append(env[gid]["rho5"])
        sph5.append(env[gid]["sph5"])
        dist.append(env[gid]["D"])
    breq, rho5, sph5, dist = map(np.array, (breq, rho5, sph5, dist))
    print(f"   N = {len(names)} discs with both a mass model and the adjudicated environment proxy")
    lD = np.log10(dist)
    out = {}
    for pname, y in (("rho_5NN", np.log10(rho5)), ("N(<5 Mpc)", np.log10(1 + sph5))):
        sl, ic, r, p, _ = stats.linregress(lD, y)
        res = y - (ic + sl * lD)
        delta = 10 ** res - 1 if pname == "rho_5NN" else (10 ** y) / (10 ** (ic + sl * lD)) - 1
        rs, ps = stats.spearmanr(breq, res)
        rD, pD = stats.spearmanr(breq, dist)
        print(f"   proxy {pname:<10}: log-proxy vs log D slope {sl:+.2f} (r={r:+.2f});  "
              f"Spearman rho(B_req, proxy | D) = {rs:+.3f} (p={ps:.2f});  rho(B_req, D) = {rD:+.3f}")
        for g in (GDE, gmin, gmax):
            bmax = 1.0 / np.array([float(C_amb(0.0, g, dd)) for dd in delta])
            frac = np.mean(breq <= bmax)
            dreq = np.array([delta_required(1 - 1 / b, 0.0, g) for b in breq])
            vd = "REFUTED" if (frac < 0.5 or rs >= 0) else ("SURVIVES" if (frac >= 0.9 and rs < 0 and ps < 0.05)
                                                              else "INCONCLUSIVE")
            print(f"      gamma={g:.3f}: {frac * 100:5.1f}% satisfy B_req <= B_max(delta);  delta needed: median "
                  f"{np.median(dreq):+.3f}, p90 {np.percentile(dreq, 90):+.3f};  delta measured (generous): median "
                  f"{np.median(delta):+.3f}, p10 {np.percentile(delta, 10):+.3f}  -> {vd}")
        out[pname] = rs
    fixed = np.mean(breq <= 1 / OM)
    print(f"   cross-check: fixed floor Omega_m admits {fixed * 100:.1f}% (09-09 finding: 77% need more -> 23%)")


if __name__ == "__main__":
    main()
