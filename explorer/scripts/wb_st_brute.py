#!/usr/bin/env python3
"""Brute-force orbital-element emulation of Saad & Ting's models (P10; addendum A). Independent of the phase-space reduction.
Evaluates per-system marginal L(gamma) by simple Monte Carlo over (a or deprojection, e, i, Omega, omega, M, masses), with their projection code path.
argv: gaia chae dataset nproc nsamples"""
import sys
import time
import numpy as np
from multiprocessing import Pool
from scipy import stats
import wb_estimators as W

S = W.load(sys.argv[1], sys.argv[2], "wb_chae_v4_tables.json", sys.argv[3])
NP = int(sys.argv[4])
NS = int(float(sys.argv[5]))
SEEDOFF = int(sys.argv[7]) if len(sys.argv) > 7 else 0
GG = np.linspace(-0.2, 0.4, 25)
GAM = 10 ** (2 * GG)


def tri(ra, dec):
    return W.triad(ra, dec)


def sim_system(args):
    sd, mode, frac, frame = args
    rng = np.random.default_rng(1000 + sd["id"] + SEEDOFF)
    n = NS
    e = np.minimum(rng.beta(2.2, 1.0, n), 0.98)      # alpha = 1.2 as in S&T for s > 3 kau
    Ma = rng.uniform(0, 2 * np.pi, n)
    E = Ma + e * np.sin(Ma)
    for _ in range(12):
        E = E - (E - e * np.sin(E) - Ma) / (1 - e * np.cos(E))
    nu = 2 * np.arctan2(np.sqrt(1 + e) * np.sin(E / 2), np.sqrt(1 - e) * np.cos(E / 2))
    ci = rng.uniform(-1, 1, n)
    si = np.sqrt(1 - ci**2)
    om, Om = rng.uniform(0, 2 * np.pi, (2, n))
    s = sd["s"]
    if mode in ("base", "base_opik", "base_opik_wide"):
        la = rng.uniform(-3.0, 6.0, n) if mode == "base_opik_wide" else rng.uniform(-1.0, 2.5, n)
        a = s * np.exp(la)
        pri = (1 + a / 5.0) ** (-0.6) if mode == "base" else np.ones(n)
        rt = a * (1 - e**2) / (1 + e * np.cos(nu))
    else:
        ph = om + nu
        de = np.maximum(np.sqrt(np.cos(ph) ** 2 + ci**2 * np.sin(ph) ** 2), 1e-6)
        rt = s / de
        pri = np.ones(n)
    # orbital-plane vectors
    xo, yo = rt * np.cos(nu), rt * np.sin(nu)
    F = (1 + e**2 + 2 * e * np.cos(nu)) / (1 + e * np.cos(nu))
    dn = np.sqrt(1 + e**2 + 2 * e * np.cos(nu))
    vrf, vtf = -e * np.sin(nu) / dn, (1 + e * np.cos(nu)) / dn
    vxf, vyf = vrf * np.cos(nu) - vtf * np.sin(nu), vrf * np.sin(nu) + vtf * np.cos(nu)
    co, so, cO, sO = np.cos(om), np.sin(om), np.cos(Om), np.sin(Om)
    P = np.array([cO * co - sO * so * ci, sO * co + cO * so * ci, so * si])
    Q = np.array([-cO * so - sO * co * ci, -sO * so + cO * co * ci, co * si])
    r3 = P * xo + Q * yo             # in the R-frame
    v3 = P * vxf + Q * vyf           # unit velocity direction times magnitude factor
    if frame == "icrs":
        ra, dec = sd["ra_mid"], sd["dec_mid"]
        rh, eh, nh = tri(ra, dec)
    else:                            # consistent: R-frame z is the line of sight
        rh, eh, nh = np.array([0, 0, 1.0]), np.array([1.0, 0, 0]), np.array([0, 1.0, 0])
    rE, rN = eh @ r3, nh @ r3
    rp = np.hypot(rE, rN)
    if frac == "coded":
        sig_s = max(0.05 * s, sd["sig_d"])
    elif frac == "exact":
        sig_s = None
    else:
        sig_s = float(frac) * s
    w = pri.copy()
    if sig_s is not None:
        w = w * np.exp(-0.5 * ((rp - s) / sig_s) ** 2) / sig_s
    M1 = sd["ma"] * np.exp(0.05 * rng.standard_normal(n))
    M2 = sd["mb"] * np.exp(0.05 * rng.standard_normal(n))
    vmag0 = np.sqrt(W.GMSUN_KAU * (M1 + M2) / rt * F)
    vE, vN, vR = eh @ v3 * vmag0, nh @ v3 * vmag0, rh @ v3 * vmag0
    vsE, vsN, vsR = np.sqrt(((30e3 * sd["B"]) ** 2).sum(1))
    sp = np.hypot(sd["st_pm_err"], 0.02) * sd["KD"]
    sigE, sigN = np.hypot(sp, vsE), np.hypot(sp, vsN)
    sigR = np.sqrt(sd["rv_sig"] ** 2 + 40.0**2 + 7.0**2 + vsR**2)
    D = sd["v_raw"]
    out = []
    for g in GAM:
        sq = np.sqrt(g)
        ll = -0.5 * ((D[0] - sq * vE) / sigE) ** 2 - 0.5 * ((D[1] - sq * vN) / sigN) ** 2 - 3.0 * np.log1p(((D[2] - sq * vR) / sigR) ** 2 / 5.0)
        out.append(np.mean(w * np.exp(ll)))
    return np.log(np.maximum(out, 1e-300))


def main():
    for sd in S:
        sd["ra_mid"], sd["dec_mid"] = sd["ra_rad"], sd["dec_rad"]
    # descriptive: how far is r_proj_model from r_obs in their frame?
    rng = np.random.default_rng(3)
    print("dataset", sys.argv[3], "N samples per system", NS)
    ratios = []
    for sd in S:
        n = 200000
        nu, om, Om = rng.uniform(0, 2 * np.pi, (3, n))
        ci = rng.uniform(-1, 1, n)
        si = np.sqrt(1 - ci**2)
        ph = om + nu
        de = np.maximum(np.sqrt(np.cos(ph) ** 2 + ci**2 * np.sin(ph) ** 2), 1e-6)
        co, so, cO, sO = np.cos(om), np.sin(om), np.cos(Om), np.sin(Om)
        P = np.array([cO * co - sO * so * ci, sO * co + cO * so * ci, so * si])
        Q = np.array([-cO * so - sO * co * ci, -sO * so + cO * co * ci, co * si])
        r3 = (P * np.cos(nu) + Q * np.sin(nu)) / de
        _, eh, nh = W.triad(sd["ra_rad"], sd["dec_rad"])
        ratios.append(np.percentile(np.hypot(eh @ r3, nh @ r3), [5, 50, 95]))
    ratios = np.array(ratios)
    print("r_proj_model/r_obs in S&T's frame, geometric model, prior draws: median of the 5/50/95 pct over systems:", np.median(ratios, axis=0).round(3))
    runs = [("geom consistent exact", "geom", "exact", "los"), ("free a Opik, range, 1%", "base_opik", "0.01", "los"), ("free a Opik, wide, 1%", "base_opik_wide", "0.01", "los"), ("free a Opik, range, 5%", "base_opik", "0.05", "los"), ("free a Opik, wide, 5%", "base_opik_wide", "0.05", "los")] if sys.argv[6:] == ["lemma"] else [("geom icrs coded", "geom", "coded", "icrs"), ("geom icrs 5%", "geom", "0.05", "icrs"), ("geom icrs 1%", "geom", "0.01", "icrs"),
            ("geom consistent coded", "geom", "coded", "los"), ("geom consistent 5%", "geom", "0.05", "los"), ("geom consistent exact", "geom", "exact", "los"),
            ("base icrs coded", "base", "coded", "icrs"), ("base icrs 5%", "base", "0.05", "icrs")]
    with Pool(NP) as P:
        for nm, mode, frac, frame in runs:
            t0 = time.time()
            L = P.map(sim_system, [(sd, mode, frac, frame) for sd in S])
            t = np.sum(L, axis=0)
            p = np.exp(t - t.max())
            c = np.cumsum(p) / p.sum()
            q = np.interp([0.16, 0.5, 0.84], c, GG)
            print(" %-24s gamma %.3f [%.3f, %.3f]   (%.0f s)" % (nm, *(10 ** (2 * q))[[1, 0, 2]], time.time() - t0), flush=True)


if __name__ == "__main__":
    main()
