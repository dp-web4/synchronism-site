#!/usr/bin/env python3
r"""
PLOTTER SURVEY AT THE ARCHIVE KNEE — rerun of the 2026-09-18 "per-disc max C_rho" survey under the
knee the galaxy plotter now draws by default (rho_crit = 0.028*Vflat^0.5, since 2026-11-14).

Maintainer 2026-11-24, from visitor 2026-11-24 Pass 3 (HIGH): the plotter prints "median 1.2e-3 at
gamma = 2 ... 0 of 123 reach Omega_m anywhere" beside DDO 154's own max C = 0.244 under the default
knee. The survey was run 2026-09-18 (which_C_carries_the_floor.py, Part A2) at the units-hybrid
0.029*Vflat^2 with Sigma from the enclosed-mass derivative.

PREDICTIONS (written here and committed before the first run):
  P1 identity: hybrid knee + 09-18 Sigma estimator reproduces median 1.20e-3 and 0/123 at gamma = 2.
  P2 archive knee 0.028*V^0.5, gamma = 2, plotter Sigma (Ups_d 0.5, Ups_b 0.7, gas from V_gas, h 0.3 kpc):
     median per-disc max C_rho in 0.2-0.7; discs whose max exceeds Omega_m: 60-110 of 123.
  P3 same at gamma = 0.489: median per-disc max C_rho 0.05-0.3; discs exceeding Omega_m: 10-50 of 123.
  P4 the two Sigma estimators agree on the archive-knee verdict ("0 of 123" false) at gamma = 2.

Sample: TEST-09's own cuts (Q <= 2, i >= 30, Vflat > 0, L36 > 0), as in 09-18 (123 discs).
"""
import os
import sys

import numpy as np

HERE = os.path.dirname(os.path.abspath(__file__))
SITE = os.path.normpath(os.path.join(HERE, "..", ".."))
sys.path.insert(0, HERE)
sys.path.insert(0, os.path.join(SITE, "explorer", "scripts"))

import which_C_carries_the_floor as W  # noqa: E402  (sample(), C_rho, OM; patches T9.BASE)
import rar_scatter_nogo_real_sparc as L  # noqa: E402

OM = W.OM
G_KPC = 4.301e-6
H_PC = 300.0
UPS_D, UPS_B = 0.5, 0.7


def sb_by_name():
    out = {}
    with open(L.MRT) as f:
        for line in f:
            p = line.split()
            if len(p) < 10:
                continue
            try:
                v = list(map(float, p[1:10]))
            except ValueError:
                continue
            out.setdefault(p[0], []).append((v[1], v[4], v[7], v[8]))  # R, Vgas, SBdisk, SBbul
    return out


def rho_enclosed(r):
    Menc = r["Vb"] ** 2 * r["R"] / G_KPC
    Sigma = np.clip(np.gradient(Menc, r["R"]) / (2 * np.pi * r["R"]) / 1e6, 0, None)
    return Sigma / (2 * H_PC)


def rho_plotter(name, SB):
    rows = sorted(SB[name])
    R = np.array([x[0] for x in rows])
    Sg = np.asarray(L.sigma_gas_from_vgas(R, [x[1] for x in rows]), dtype=float)
    Sig = UPS_D * np.array([x[2] for x in rows]) + UPS_B * np.array([x[3] for x in rows]) + Sg
    return np.clip(Sig, 0, None) / (2 * H_PC)


def survey(rows, SB, knee, est, gamma):
    maxes, names = [], []
    for r in rows:
        if est == "enclosed":
            rho = rho_enclosed(r)
        else:
            if r["name"] not in SB:
                continue
            rho = rho_plotter(r["name"], SB)
        V = r["Vflat_cat"]
        rc = 0.029 * V ** 2 if knee == "hybrid" else 0.028 * V ** 0.5
        maxes.append(float(np.max(W.C_rho(rho, rc, gamma))))
        names.append(r["name"])
    m = np.array(maxes)
    return m, names


def main():
    rows = W.sample()
    SB = sb_by_name()
    print(f"sample: {len(rows)} discs (TEST-09 cuts)")
    res = {}
    for knee in ("hybrid", "archive"):
        for est in ("enclosed", "plotter"):
            for gamma in (2.0, 0.489):
                m, names = survey(rows, SB, knee, est, gamma)
                n_ex = int(np.sum(m > OM))
                res[(knee, est, gamma)] = (m, names)
                print(f"knee={knee:8s} Sigma={est:8s} gamma={gamma:5.3f}  N={len(m):3d}  "
                      f"max C_rho: min {m.min():.2e} median {np.median(m):.3g} max {m.max():.3g}  "
                      f"exceed Omega_m: {n_ex}/{len(m)}  (>0.88: {int(np.sum(m > 0.88))})")
    m, names = res[("archive", "plotter", 2.0)]
    if "DDO154" in names:
        print(f"\nDDO154 max C_rho (archive knee, plotter Sigma, gamma 2): {m[names.index('DDO154')]:.3f}")
    rank = np.argsort(m)
    print(f"faintest-max discs (archive, plotter, gamma 2): "
          + ", ".join(f"{names[i]} {m[i]:.3f}" for i in rank[:5]))


if __name__ == "__main__":
    main()
