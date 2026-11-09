#!/usr/bin/env python3
"""Arm C (2D). Real catalogue covariates (s, M, d, errors); velocities replaced by a known truth; same E1/E2 pipeline as the real data.
Truths: Newton; Newton + forward-model companions at per-star F; flat boost; EFE-free (simple nu, a0=1.2).
Then the real data on the same cuts, next to it. argv: real_csv [nboot] [nreal]"""
import sys
import numpy as np
import wb_real_vs_mock_2d as R
import wb_hidden_companions as H

path = sys.argv[1]
NB = int(sys.argv[2]) if len(sys.argv) > 2 else 60
NR = int(sys.argv[3]) if len(sys.argv) > 3 else 4
D = R.load(path)
import csv
rows = list(csv.DictReader(open(path)))
MG1 = np.array([float(r["MagG1"]) if r["MagG1"] else np.nan for r in rows])
MG2 = np.array([float(r["MagG2"]) if r["MagG2"] else np.nan for r in rows])
BR1 = np.array([float(r["bp_rp1"]) if r["bp_rp1"] else np.nan for r in rows])
BR2 = np.array([float(r["bp_rp2"]) if r["bp_rp2"] else np.nan for r in rows])
Q = R.derive(D, persp=True)


def ms_excess(mg, br):
    """Magnitudes above an empirical main-sequence locus built from this catalogue (median MG per colour bin)."""
    e = np.arange(0.4, 4.2, 0.1)
    c = 0.5 * (e[:-1] + e[1:])
    med = np.array([np.nanmedian(mg[(br >= a) & (br < b)]) if ((br >= a) & (br < b)).sum() > 20 else np.nan for a, b in zip(e[:-1], e[1:])])
    k = np.isfinite(med)
    return np.interp(br, c[k], med[k]) - mg


X1, X2 = ms_excess(MG1, BR1), ms_excess(MG2, BR2)
OK_CMD = (np.nan_to_num(X1, nan=9) < 0.4) & (np.nan_to_num(X2, nan=9) < 0.4)
RU = np.maximum(D["ruwe1"], D["ruwe2"])
BASE = {
    "fiducial": (D["R_chance"] < 0.01) & (RU < 1.4) & (Q["sv"] < 0.10) & (Q["d"] < 200),
    "ruwe1.25+cmd d<150": (D["R_chance"] < 0.01) & (RU < 1.25) & (Q["sv"] < 0.10) & (Q["d"] < 150) & OK_CMD,
    "S2like+cmd": (D["R_chance"] < 0.01) & (RU < 1.25) & (Q["sv"] < 0.10) & (Q["d"] <= 130) & (Q["s"] >= 1) & (Q["s"] < 30) & OK_CMD,
}
HC_KW = {"fiducial": (1.4, dict(ipd=False, cmd=None)), "ruwe1.25+cmd d<150": (1.25, dict(ipd=False, cmd=0.4)), "S2like+cmd": (1.25, dict(ipd=False, cmd=0.4))}


def nu_simple(y):
    return 0.5 + np.sqrt(0.25 + 1 / y)


def gamma_flat(g):
    # EFE-dominated: flat 1.38 below 1, taper to 1.03 at 10 (log-linear in ln g)
    return np.interp(np.log(g), np.log([1.0, 10.0]), [1.38, 1.03])


GT = {"newton": lambda g: np.ones_like(g), "flat": gamma_flat, "efe_free": lambda g: nu_simple(g / 1.2)}


def synth(rng, mask, truth, F, cut, q_mode="flat", a_med=40.0, kind="chae_sdep"):
    """Return vt array over the whole catalogue (nan outside) and a survivors mask."""
    idx = np.where(mask)[0]
    n = len(idx)
    M1, M2 = D["M1[Msun]"][idx], D["M2[Msun]"][idx]
    s, d = D["s[kau]"][idx], Q["d"][idx]
    e = R.e_prior_draw(rng, kind, D, idx)
    ux, uy = R.orbit_vec(rng, e)
    th = rng.uniform(0, 2 * np.pi, n)
    cx, cy = np.cos(th) * ux - np.sin(th) * uy, np.sin(th) * ux + np.cos(th) * uy
    scale = np.sqrt(GT[truth](Q["g"][idx]))
    Mfac = np.ones(n)
    keep = np.ones(n, bool)
    kx, ky = np.zeros(n), np.zeros(n)
    rm, kw = HC_KW[cut]
    if F > 0:
        for comp, Mh, Mg in ((1, M1, MG1[idx]), (2, M2, MG2[idx])):
            has = rng.uniform(0, 1, n) < F
            if has.sum() == 0:
                continue
            G = Mg[has] + 5 * np.log10(d[has] / 10)
            G = np.nan_to_num(G, nan=12.0)
            o = H.forward(rng, Mh[has], d[has], G, s_kau=s[has], q_mode=q_mode, a_med=a_med)
            k, _ = H.cuts(o, ruwe_max=rm, **kw)
            ii = np.where(has)[0]
            keep[ii[~k]] = False
            sgn = 1.0 if comp == 2 else -1.0
            kx[ii] += sgn * o["k_pm"][:, 0]
            ky[ii] += sgn * o["k_pm"][:, 1]
            Mfac[ii] += (o["Mt"] - Mh[has]) / (M1[has] + M2[has])
    vN = Q["vN"][idx]
    nx = rng.standard_normal(n) * Q["sE"][idx] / vN
    ny = rng.standard_normal(n) * Q["sN"][idx] / vN
    zr = rng.standard_normal(n) * Q["sRV"][idx] / vN
    vx = scale * np.sqrt(Mfac) * cx + kx / vN + nx + zr * Q["uE"][idx]
    vy = scale * np.sqrt(Mfac) * cy + ky / vN + ny + zr * Q["uN"][idx]
    vt = np.full(len(Q["s"]), np.nan)
    vt[idx] = np.hypot(vx, vy)
    m2 = np.zeros(len(Q["s"]), bool)
    m2[idx[keep]] = True
    return vt, m2


def one(rng, label, cut, vt, m, kinds=("chae_sdep",), est=(("E2", R.SQ2), ("E1", np.inf))):
    Q2 = dict(Q)
    Q2["vt"] = vt
    for kind in kinds:
        for nm, tr in est:
            r = R.zone_stats(D, Q2, m, R.ZONES, kind, tr, rng, NB)
            be, sb, gm = R.slope(r, Q2, m)
            yield nm, kind, r, be, sb


print("N by cut:", {k: int(v.sum()) for k, v in BASE.items()})
ZSHOW = ["val 0.2-2kau", "test 2-30kau", "deep g/a0 .03-.3", "g<0.3", "g 0.3-0.6", "g 0.6-1", "g 1-3", "g>3"]
rng = np.random.default_rng(20261109)
for cut, m0 in BASE.items():
    print("\n===== CUT", cut, "N", m0.sum())
    for kind in ("chae_sdep", "thermal", "individual"):
        for nm, tr in (("E2", R.SQ2), ("E1", np.inf)):
            r = R.zone_stats(D, Q, m0, R.ZONES, kind, tr, rng, NB)
            be, sb, _ = R.slope(r, Q, m0)
            print("REAL %s %-10s " % (nm, kind) + " ".join("%s %.3f±%.3f" % (z.split()[0] + z.split()[1] if z.startswith("g ") else z.split()[0], r[z]["gam"], r[z]["sd"]) for z in ZSHOW) + "  beta %.3f±%.3f" % (be, sb), flush=True)
    for truth, F, qm, am in (("newton", 0, "flat", 40), ("flat", 0, "flat", 40), ("efe_free", 0, "flat", 40), ("newton", 0.1, "flat", 40), ("newton", 0.2, "flat", 40), ("newton", 0.3, "flat", 40), ("newton", 0.45, "flat", 40), ("newton", 0.3, "chae_msc", 40), ("newton", 0.3, "flat", 150)):
        acc = {}
        for ir in range(NR):
            vt, m = synth(rng, m0, truth, F, cut, q_mode=qm, a_med=am)
            for nm, kind, r, be, sb in one(rng, truth, cut, vt, m):
                d = acc.setdefault(nm, {"n": [], "beta": [], "sb": [], **{z: [] for z in ZSHOW}})
                d["n"].append(m.sum())
                d["beta"].append(be)
                d["sb"].append(sb)
                for z in ZSHOW:
                    d[z].append(r[z]["gam"])
        for nm, d in acc.items():
            print("MOCK %-9s F=%.2f q=%-8s a=%3d %s N%6d " % (truth, F, qm, am, nm, np.mean(d["n"])) + " ".join("%s %.3f" % (z.split()[0] + z.split()[1] if z.startswith("g ") else z.split()[0], np.nanmean(d[z])) for z in ZSHOW) + "  beta %.3f (sd over reals %.3f; boot %.3f)" % (np.nanmean(d["beta"]), np.nanstd(d["beta"]), np.nanmean(d["sb"])), flush=True)
