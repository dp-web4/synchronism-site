#!/usr/bin/env python3
r"""
WHICH C CARRIES THE OMEGA_M FLOOR — and does the TEST-09 kill survive the ceiling sweep?

Maintainer 2026-09-18.  Pre-registered in which_C_carries_the_floor_PREREG.md, committed at
site 89e0467 BEFORE this script was written or run.  Read that file for the verdict rules;
they are restated inline here but the committed copy is authoritative.

Adjudicates visitor 2026-09-18 Pass 4 P0 item 1 ("the floor binds at every radius on every
disc, so the galaxy sector applies the constant 3.17 and TEST-09/TEST-10 are algebra"), and
executes the TEST-09 half of the registered-but-unrun Branch 1 of
Research/proposals/boost_ceiling_provenance_and_class_exclusion.md.

Reuses explorer/scripts/test09_btfr_bounded_boost_real_sparc.py as a module so the sample
cuts, the V_flat estimator and the bootstrap are byte-identical to the executed TEST-09.
Its BASE constant points at a pre-move path and is patched at import.
"""
import os
import sys

import numpy as np

HERE = os.path.dirname(os.path.abspath(__file__))
SITE = os.path.normpath(os.path.join(HERE, "..", ".."))
WS = os.path.normpath(os.path.join(SITE, ".."))
SPARC = os.path.join(WS, "Synchronism", "simulations", "sparc_real_data") + os.sep

sys.path.insert(0, os.path.join(SITE, "explorer", "scripts"))
import test09_btfr_bounded_boost_real_sparc as T9  # noqa: E402

T9.BASE = SPARC  # the module's literal path predates the workspace move

KPC, KMS = T9.KPC, T9.KMS
OM, PHI, A0 = T9.OM, T9.PHI, T9.A0_SYNC
UP_DISK, UP_BUL = T9.UP_DISK, T9.UP_BUL

OMEGA_B = 0.0493
CEILINGS = [
    ("1/Omega_m            (site's choice)", 1.0 / OM),
    ("(Omega_m-Omega_b)/Omega_b", (OM - OMEGA_B) / OMEGA_B),
    ("Omega_m/Omega_b      (baryon budget)", OM / OMEGA_B),
]


def C_a(g_bar, C_min=OM):
    """The acceleration-keyed compander TEST-09/TEST-10 actually evaluate."""
    x = (np.asarray(g_bar, dtype=float) / A0) ** (1.0 / PHI)
    return C_min + (1.0 - C_min) * x / (1.0 + x)


def C_rho(rho, rho_crit, gamma):
    """The density-keyed law the galaxy plotter displays. Unfloored, as the plotter has it."""
    return np.tanh(gamma * np.log1p(np.asarray(rho, dtype=float) / rho_crit))


def sample():
    """TEST-09's own sample: its cuts, its mass model, its baryonic acceleration."""
    tbl, mm = T9.load_galaxy_table(), T9.load_mass_models()
    out = []
    for name, t in tbl.items():
        if name not in mm:
            continue
        if t["Q"] > 2 or t["Inc"] < 30.0 or t["Vflat"] <= 0 or t["L36"] <= 0:
            continue
        gal = mm[name]
        R, Vb = gal["R"], T9.v_bar(gal)
        ok = (R > 0) & np.isfinite(Vb) & (Vb > 0)
        R, Vb, Vobs = R[ok], Vb[ok], gal["Vobs"][ok]
        if len(R) < 3:
            continue
        r_m = R * KPC
        g_bar = (Vb * KMS) ** 2 / r_m
        m_bar = (UP_DISK * t["L36"] + 1.33 * t["MHI"]) * 1e9
        if m_bar <= 0:
            continue
        # surface density from the same mass model: Sigma(R) = g_bar-free, use V^2 decomposition
        # Sigma_disk from Vdisk is not directly available; use the enclosed-mass estimate
        # M(<R) = V_bar^2 R / G, and the local Sigma from its radial derivative (finite diff).
        out.append(dict(name=name, R=R, Vb=Vb, Vobs=Vobs, g_bar=g_bar, M=m_bar,
                        Vflat_cat=t["Vflat"], gal=gal))
    return out


# --------------------------------------------------------------------- Part A
def part_A(rows):
    print("=" * 96)
    print("PART A — in the C that TEST-09/TEST-10 actually evaluate, does the floor bind?")
    print("=" * 96)
    allC = np.concatenate([C_a(r["g_bar"]) for r in rows])
    n = allC.size
    pinned = np.mean(allC < 1.01 * OM)
    q = np.percentile(allC, [0, 25, 50, 75, 100])
    print(f"  radii in TEST-09's sample: {n} over {len(rows)} galaxies")
    print(f"  C_a floor = Omega_m = {OM};  boost = 1/C_a, ceiling {1/OM:.3f}")
    print(f"  C_a  min {q[0]:.4f}  p25 {q[1]:.4f}  median {q[2]:.4f}  p75 {q[3]:.4f}  max {q[4]:.4f}")
    print(f"  IQR = {q[3]-q[1]:.4f}")
    print(f"  fraction of radii with C_a < 1.01*Omega_m (i.e. 'pinned at the floor'): {pinned:.4f}")
    B = 1.0 / allC
    print(f"  implied boost 1/C_a:  min {B.min():.3f}  median {np.median(B):.3f}  max {B.max():.3f}")
    if pinned >= 0.95:
        v = "CONFIRMED — the applied law is effectively the constant 1/Omega_m"
    elif pinned < 0.50 and (q[3] - q[1]) > 0.05:
        v = "REFUTED — C_a spans a wide range; the floor does NOT bind at every radius"
    else:
        v = "INDETERMINATE"
    print(f"\n  >>> VERDICT A (pre-fixed rule): {v}")
    return dict(pinned=pinned, iqr=q[3] - q[1], verdict=v)


def part_A2(rows):
    print()
    print("=" * 96)
    print("PART A2 — the plotter's density-keyed C_rho ('max C on this disk: 0.001'), on real SPARC")
    print("=" * 96)
    print("  Sigma(R) from the SPARC mass model by inverting the enclosed baryonic mass;")
    print("  rho = Sigma/(2h), h = 0.3 kpc (the plotter's assumption); rho_crit = 0.029*Vflat^2.")
    G_KPC = 4.301e-6  # kpc (km/s)^2 / Msun
    for gamma in (2.0, 0.489):
        maxes, exceed_floor = [], 0
        for r in rows:
            R, Vb = r["R"], r["Vb"]
            Menc = Vb ** 2 * R / G_KPC                      # Msun
            # local surface density from dM/dR = 2 pi R Sigma
            dM = np.gradient(Menc, R)
            Sigma = dM / (2.0 * np.pi * R) / 1e6            # Msun/pc^2
            Sigma = np.clip(Sigma, 0.0, None)
            rho = Sigma / (2.0 * 300.0)                     # Msun/pc^3, h = 0.3 kpc = 300 pc
            rho_crit = 0.029 * r["Vflat_cat"] ** 2
            c = C_rho(rho, rho_crit, gamma)
            maxes.append(float(np.max(c)))
            if np.max(c) > OM:
                exceed_floor += 1
        maxes = np.array(maxes)
        print(f"\n  gamma = {gamma}:  per-disc max C_rho over {len(maxes)} discs")
        print(f"    min {maxes.min():.2e}  p25 {np.percentile(maxes,25):.2e}  "
              f"median {np.median(maxes):.2e}  p75 {np.percentile(maxes,75):.2e}  max {maxes.max():.2e}")
        print(f"    discs whose max C_rho exceeds the floor Omega_m = {OM}: "
              f"{exceed_floor}/{len(maxes)} = {exceed_floor/len(maxes):.1%}")
        print(f"    discs with max C_rho < 0.01: "
              f"{np.mean(maxes < 0.01):.1%}")
        if gamma == 2.0:
            gen = (np.median(maxes) < 0.01) and (exceed_floor / len(maxes) < 0.05)
            print(f"\n  >>> VERDICT A2 (pre-fixed rule, gamma = 2): "
                  f"{'the plotter number GENERALISES' if gen else 'the plotter number does NOT generalise'}")


# --------------------------------------------------------------------- Part B
def btfr_slope(rows, C_min):
    logM, V = [], []
    for r in rows:
        g = r["g_bar"] / C_a(r["g_bar"], C_min)
        v = np.sqrt(g * (r["R"] * KPC)) / KMS
        vf = T9.v_flat_estimator(r["R"], v)
        if np.isfinite(vf) and vf > 0:
            logM.append(np.log10(r["M"]))
            V.append(vf)
    n, sd, _ = T9.fit_btfr(np.array(logM), np.log10(np.array(V)))
    return n, sd


def part_B(rows):
    print()
    print("=" * 96)
    print("PART B — TEST-09's BTFR slope under each candidate ceiling (registered, previously unrun)")
    print("=" * 96)

    logM = np.array([np.log10(r["M"]) for r in rows])
    v_cat = np.array([r["Vflat_cat"] for r in rows])
    n_obs, sd_obs, _ = T9.fit_btfr(logM, np.log10(v_cat))
    print(f"  OBSERVED (SPARC catalogue Vflat):  n = {n_obs:.2f} +/- {sd_obs:.2f}"
          f"   [Lelli+2019 report 3.85 +/- 0.09]")

    n0, sd0 = btfr_slope(rows, OM)
    print(f"\n  IDENTITY CONTROL at C_min = Omega_m = {OM}:  n = {n0:.2f} +/- {sd0:.2f}"
          f"   [TEST-09 published 3.35 +/- 0.07]")
    ok = abs(n0 - 3.35) <= 3 * max(sd0, 0.07)
    print(f"  control {'PASSES' if ok else 'FAILS'} — "
          f"{'proceed' if ok else 'RUN IS VOID, nothing below goes on the site'}")
    if not ok:
        return None

    print(f"\n  {'ceiling reading':<40} {'B_max':>7} {'C_min':>7} {'slope n':>9} {'+/-':>6} "
          f"{'|n-n_obs|':>10}  kill fires (>0.3)?")
    print("  " + "-" * 94)
    fires = []
    for label, B in CEILINGS:
        Cm = 1.0 / B
        n, sd = btfr_slope(rows, Cm)
        d = abs(n_obs - n)
        fires.append(d > 0.3)
        print(f"  {label:<40} {B:>7.3f} {Cm:>7.4f} {n:>9.2f} {sd:>6.2f} {d:>10.2f}"
              f"  {'FIRES' if d > 0.3 else 'does NOT fire'}")

    print("\n  Free scan over B_max (rule B2: is the slope independent of the ceiling?):")
    print(f"  {'B_max':>8} {'C_min':>8} {'slope n':>9} {'+/-':>6}")
    scan = []
    for B in [2.0, 3.175, 5.0, 6.39, 10.0, 20.0, 50.0, 100.0]:
        n, sd = btfr_slope(rows, 1.0 / B)
        scan.append(n)
        print(f"  {B:>8.2f} {1.0/B:>8.4f} {n:>9.2f} {sd:>6.2f}")
    spread = max(scan) - min(scan)
    print(f"\n  slope spread across B_max in [2, 100]: {spread:.2f}")
    if spread < sd0:
        v2 = "CONFIRMED — the slope is independent of the ceiling (boost effectively constant)"
    elif spread > 0.3:
        v2 = "REFUTED — the slope moves with the ceiling by more than the kill threshold"
    else:
        v2 = "INDETERMINATE"
    print(f"  >>> VERDICT B2 (pre-fixed rule): {v2}")

    v1 = ("the TEST-09 kill STANDS under every candidate ceiling" if all(fires)
          else "the TEST-09 kill is CONVENTION-DEPENDENT — it fails to fire under at least one candidate")
    print(f"  >>> VERDICT B  (pre-fixed rule): {v1}")
    return dict(n_obs=n_obs, sd_obs=sd_obs, n0=n0, spread=spread)


# --------------------------------------------------------------------- Part C
def part_C(rows):
    print()
    print("=" * 96)
    print("PART C — is the predicted f_DM a delta function at 0.685?  (visitor's TEST-10 claim)")
    print("=" * 96)
    f = np.array([1.0 - C_a(r["g_bar"][-1]) for r in rows])
    q = np.percentile(f, [0, 25, 50, 75, 100])
    print(f"  f_DM,pred = 1 - C_a(g_bar) at the outermost measured radius, N = {f.size}")
    print(f"  min {q[0]:.4f}  p25 {q[1]:.4f}  median {q[2]:.4f}  p75 {q[3]:.4f}  max {q[4]:.4f}")
    print(f"  std = {f.std():.4f}   (cap 1 - Omega_m = {1-OM:.4f})")
    print(f"  galaxies within 0.01 of the cap: {np.mean(np.abs(f - (1-OM)) < 0.01):.1%}")
    if f.std() < 0.01:
        v = "CONFIRMED — delta function at the cap"
    elif f.std() > 0.05:
        v = "REFUTED — the predicted f_DM has real scatter; it is not a delta function"
    else:
        v = "INDETERMINATE"
    print(f"\n  >>> VERDICT C (pre-fixed rule): {v}")


def main():
    rows = sample()
    part_A(rows)
    part_A2(rows)
    part_B(rows)
    part_C(rows)
    print()
    print("=" * 96)
    print("Data: Lelli, McGaugh & Schombert (2016) SPARC. Constants and cuts: TEST-09's own.")
    print("=" * 96)


if __name__ == "__main__":
    main()
