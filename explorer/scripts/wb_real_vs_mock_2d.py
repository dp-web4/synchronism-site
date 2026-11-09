#!/usr/bin/env python3
"""Arm A of PREREG c31d20e. Same code on Chae's real catalogue and his Newtonian mock.
Normalized sky velocity v~ = |dv_perp| / sqrt(G M / s), angular perspective correction at a common distance.
Newtonian template per pair: Kepler orbit (scale-free at fixed s), real errors, identical truncations.
E1 = untruncated median; E2 = median truncated at v~ < sqrt2. Both inverted to gamma per zone.
argv: real_csv mock_csv [nboot]"""
import csv
import sys
import numpy as np

GM_KAU = 1.32712440018e20 / 1.495978707e14   # (m/s)^2 per Msun at 1 kau
G_UNIT = 1.32712440018e20 / (1.495978707e14) ** 2 / 1e-10   # g_N in 1e-10 m/s^2 for M=1, s=1 kau
KAPPA = 4.740470463533349                     # m/s per (mas/yr pc)
SQ2 = np.sqrt(2.0)
A0 = 1.2
GAMS = np.exp(np.linspace(np.log(0.6), np.log(5.0), 81))
COLS = ["R_chance", "s[kau]", "d1[pc]", "d1_err[pc]", "d2[pc]", "d2_err[pc]", "M1[Msun]", "M2[Msun]", "mu1ra[mas/yr]", "mu1ra_err[mas/yr]", "mu1dec[mas/yr]", "mu1dec_err[mas/yr]",
        "mu2ra[mas/yr]", "mu2ra_err[mas/yr]", "mu2dec[mas/yr]", "mu2dec_err[mas/yr]", "RV1[km/s]", "RV1_err[km/s]", "RV2[km/s]", "RV2_err[km/s]", "ruwe1", "ruwe2", "RA1[deg]", "DEC1[deg]", "RA2[deg]", "DEC2[deg]", "e", "e0", "e1"]


def load(path):
    rows = list(csv.DictReader(open(path)))
    d = {k: np.array([float(r[k]) if r[k] not in ("", "nan") else np.nan for r in rows]) for k in COLS}
    d["id1"] = np.array([r["source_id1"] for r in rows])
    return d


def triad(ra, dec):
    cd, sd, ca, sa = np.cos(dec), np.sin(dec), np.cos(ra), np.sin(ra)
    return np.array([cd * ca, cd * sa, sd]).T, np.array([-sa, ca, 0 * sa]).T, np.array([-sd * ca, -sd * sa, cd]).T


def derive(D, use_rv=True, persp=True):
    """Velocity components in m/s (E, N at the midpoint), errors, vN, gN."""
    w1, w2 = 1 / D["d1_err[pc]"] ** 2, 1 / D["d2_err[pc]"] ** 2
    dm = (D["d1[pc]"] * w1 + D["d2[pc]"] * w2) / (w1 + w2)
    ra1, de1, ra2, de2 = [np.radians(D[k]) for k in ("RA1[deg]", "DEC1[deg]", "RA2[deg]", "DEC2[deg]")]
    r1, e1, n1 = triad(ra1, de1)
    r2, e2, n2 = triad(ra2, de2)
    K = KAPPA * dm
    rv1, rv2 = D["RV1[km/s]"].copy(), D["RV2[km/s]"].copy()
    se1, se2 = D["RV1_err[km/s]"].copy(), D["RV2_err[km/s]"].copy()
    # sentinels (-10000 / -20000) and blanks are missing
    bad1 = ~np.isfinite(rv1) | (np.abs(rv1) > 5000) | ~np.isfinite(se1) | (se1 <= 0)
    bad2 = ~np.isfinite(rv2) | (np.abs(rv2) > 5000) | ~np.isfinite(se2) | (se2 <= 0)
    w_a = np.where(bad1, 0.0, 1 / np.where(bad1, 1, se1) ** 2)
    w_b = np.where(bad2, 0.0, 1 / np.where(bad2, 1, se2) ** 2)
    has = (w_a + w_b) > 0
    rv = np.where(has, (np.nan_to_num(rv1) * w_a + np.nan_to_num(rv2) * w_b) / np.where(has, w_a + w_b, 1), 0.0) * 1000.0
    if not use_rv:
        rv = rv * 0
    # systemic tangential velocity in each star's own frame, then expressed as a 3-vector
    pa = 0.5 * (D["mu1ra[mas/yr]"] + D["mu2ra[mas/yr]"])
    pd = 0.5 * (D["mu1dec[mas/yr]"] + D["mu2dec[mas/yr]"])
    rm, em, nm = triad(0.5 * (ra1 + ra2), 0.5 * (de1 + de2))
    Vs = (K * pa)[:, None] * em + (K * pd)[:, None] * nm + rv[:, None] * rm
    pred1a, pred1d = (Vs * e1).sum(1) / K, (Vs * n1).sum(1) / K
    pred2a, pred2d = (Vs * e2).sum(1) / K, (Vs * n2).sum(1) / K
    if not persp:   # Chae's mock draws mu_A, mu_B about a common mean: it contains no perspective term to remove
        pred1a, pred1d, pred2a, pred2d = 0 * pa, 0 * pa, 0 * pa, 0 * pa
    dE = K * ((D["mu2ra[mas/yr]"] - pred2a) - (D["mu1ra[mas/yr]"] - pred1a))
    dN = K * ((D["mu2dec[mas/yr]"] - pred2d) - (D["mu1dec[mas/yr]"] - pred1d))
    # RV noise enters along the separation: sigma_RV * theta. Template must carry it (zone-matched noise).
    sig_rv = np.where(has, 1 / np.sqrt(np.where(has, w_a + w_b, 1)), 0.0) * 1000.0
    cosd = np.cos(0.5 * (de1 + de2))
    tE, tN = (ra2 - ra1) * cosd, de2 - de1
    thet = np.hypot(tE, tN)
    sRV = sig_rv * thet * (1.0 if persp else 0.0)
    uE, uN = tE / np.maximum(thet, 1e-12), tN / np.maximum(thet, 1e-12)
    sE = K * np.hypot(D["mu1ra_err[mas/yr]"], D["mu2ra_err[mas/yr]"])
    sN = K * np.hypot(D["mu1dec_err[mas/yr]"], D["mu2dec_err[mas/yr]"])
    M = D["M1[Msun]"] + D["M2[Msun]"]
    s = D["s[kau]"]
    vN = np.sqrt(GM_KAU * M / s)
    vt = np.hypot(dE, dN) / vN
    sv = np.sqrt((dE * sE) ** 2 + (dN * sN) ** 2) / np.maximum(np.hypot(dE, dN), 1e-9) / vN
    return dict(sRV=sRV, uE=uE, uN=uN, dE=dE, dN=dN, sE=sE, sN=sN, vN=vN, vt=vt, sv=sv, M=M, s=s, d=dm, g=G_UNIT * M / s**2, has_rv=has)


def kepler_units(rng, n, alpha):
    e = np.minimum(rng.uniform(0, 1, n) ** (1.0 / (alpha + 1.0)), 0.98)
    return orbit_vec(rng, e)


def orbit_vec(rng, e):
    n = len(e)
    Ma = rng.uniform(0, 2 * np.pi, n)
    E = Ma + e * np.sin(Ma)
    for _ in range(25):
        E = E - (E - e * np.sin(E) - Ma) / (1 - e * np.cos(E))
    xo, yo = np.cos(E) - e, np.sqrt(1 - e**2) * np.sin(E)
    den = 1 - e * np.cos(E)
    vxo, vyo = -np.sin(E) / den, np.sqrt(1 - e**2) * np.cos(E) / den
    ci = rng.uniform(-1, 1, n)
    si = np.sqrt(1 - ci**2)
    om, Om = rng.uniform(0, 2 * np.pi, (2, n))
    co, so, cO, sO = np.cos(om), np.sin(om), np.cos(Om), np.sin(Om)
    Px, Py = cO * co - sO * so * ci, sO * co + cO * so * ci
    Qx, Qy = -cO * so - sO * co * ci, -sO * so + cO * co * ci
    x, y = Px * xo + Qx * yo, Py * xo + Qy * yo
    vx, vy = Px * vxo + Qx * vyo, Py * vxo + Qy * vyo
    g = np.hypot(x, y)
    # at fixed s and mu: a = s/g, v scales as sqrt(mu/a) = sqrt(mu g / s), so v~ comps = v * sqrt(g)
    return vx * np.sqrt(g), vy * np.sqrt(g)


def e_prior_draw(rng, kind, D, idx):
    """e for each template draw of pair idx."""
    n = len(idx)
    if kind == "thermal":
        a = np.full(n, 1.0)
    elif kind == "super1.3":
        a = np.full(n, 1.3)
    elif kind == "chae_sdep":
        x = np.log10(D["s[kau]"][idx] * 1000)
        a = np.clip(-5.12340377 + 4.61235048 * x - 1.09835007 * x**2 + 0.08748435 * x**3, 1e-3 - 1, 1.5)
    elif kind == "individual":
        e0, e, e1 = D["e0"][idx], D["e"][idx], D["e1"][idx]
        z = rng.standard_normal(n)
        x = np.where(z < 0, e + z * (e - e0), e + z * (e1 - e))
        x = np.where(np.isfinite(x) & (x > 0.001) & (x < 0.98), x, np.minimum(np.nan_to_num(e, nan=0.7), 0.98))
        return np.clip(x, 0.001, 0.98)
    return np.minimum(rng.uniform(0, 1, n) ** (1.0 / (a + 1.0)), 0.98)


def tmed(v, trunc):
    w = v[v < trunc] if np.isfinite(trunc) else v
    return np.median(w) if len(w) else np.nan


def build_template(rng, D, Q, mask, kind, K=12):
    idx = np.repeat(np.where(mask)[0], K)
    e = e_prior_draw(rng, kind, D, idx)
    ux, uy = orbit_vec(rng, e)
    th = rng.uniform(0, 2 * np.pi, len(idx))
    # orientation on the sky is random; noise is in (E, N)
    cx, cy = np.cos(th) * ux - np.sin(th) * uy, np.sin(th) * ux + np.cos(th) * uy
    nx = rng.standard_normal(len(idx)) * Q["sE"][idx] / Q["vN"][idx]
    ny = rng.standard_normal(len(idx)) * Q["sN"][idx] / Q["vN"][idx]
    zr = rng.standard_normal(len(idx)) * Q["sRV"][idx] / Q["vN"][idx]
    nx, ny = nx + zr * Q["uE"][idx], ny + zr * Q["uN"][idx]
    return idx, cx, cy, nx, ny


def invert(obs, curve):
    """Median rises with gamma; invert on GAMS. nan if outside."""
    c = np.asarray(curve)
    k = np.isfinite(c)
    if k.sum() < 3 or obs < c[k][0] or obs > c[k][-1]:
        return np.nan
    return float(np.interp(obs, c[k], GAMS[k]))


def eb_limit(Q):
    # El-Badry truncation as used by Boufourou, v~ <= 2.23/sqrt(M)
    return 2.23 / np.sqrt(Q["M"])


def zone_stats(D, Q, mask, zones, kind, trunc, rng, nboot=200):
    idx, cx, cy, nx, ny = build_template(rng, D, Q, mask, kind)
    ebl = eb_limit(Q)
    res = {}
    sidx = Q["s"][idx]
    gidx = Q["g"][idx]
    ebi = ebl[idx]
    curves = {}
    for g in GAMS:
        rg = np.sqrt(g)
        v = np.hypot(rg * cx + nx, rg * cy + ny)
        keep = v <= ebi
        for name, f in zones.items():
            k = f(sidx, gidx) & keep
            curves.setdefault(name, []).append(tmed(v[k], trunc))
    obs_v, obs_s, obs_g, obs_eb = Q["vt"][mask], Q["s"][mask], Q["g"][mask], ebl[mask]
    sel = obs_v <= obs_eb
    for name, f in zones.items():
        k = f(obs_s, obs_g) & sel
        vz = obs_v[k]
        gam = invert(tmed(vz, trunc), curves[name])
        bs = []
        for _ in range(nboot):
            b = rng.integers(0, len(vz), len(vz))
            bs.append(invert(tmed(vz[b], trunc), curves[name]))
        bs = np.array(bs)
        n_nan = np.isnan(bs).sum()
        bsf = bs[np.isfinite(bs)]
        lo, hi = (np.percentile(bsf, [16, 84]) if len(bsf) > 5 else (np.nan, np.nan))
        res[name] = dict(n=len(vz), gam=gam, lo=lo, hi=hi, sd=(np.nanstd(bsf) if len(bsf) > 5 else np.nan), nnan=n_nan, boots=bs)
    return res


ZONES = {
    "val 0.2-2kau": lambda s, g: (s >= 0.2) & (s < 2),
    "test 2-30kau": lambda s, g: (s >= 2) & (s < 30),
    "deep g/a0 .03-.3": lambda s, g: (g / A0 >= 0.03) & (g / A0 < 0.3),
    "g<0.3": lambda s, g: g < 0.3,
    "g 0.3-0.6": lambda s, g: (g >= 0.3) & (g < 0.6),
    "g 0.6-1": lambda s, g: (g >= 0.6) & (g < 1),
    "g 1-3": lambda s, g: (g >= 1) & (g < 3),
    "g>3": lambda s, g: g >= 3,
}
GMID = {"g<0.3": None, "g 0.3-0.6": None, "g 0.6-1": None}


def slope(res, Q, mask):
    names = ["g<0.3", "g 0.3-0.6", "g 0.6-1"]
    gmed = []
    for nm in names:
        k = ZONES[nm](Q["s"][mask], Q["g"][mask])
        gmed.append(np.median(Q["g"][mask][k]))
    x = np.log(gmed)
    y = np.log([res[n]["gam"] for n in names])
    B = np.log(np.array([res[n]["boots"] for n in names])).T   # nboot x 3
    B = B[np.all(np.isfinite(B), axis=1)]
    sig = np.nanstd(B, axis=0)
    w = 1 / sig**2
    def fit(yy):
        return np.sum(w * (x - np.sum(w * x) / w.sum()) * yy) / np.sum(w * (x - np.sum(w * x) / w.sum()) ** 2)
    be = fit(y)
    bb = np.array([fit(q) for q in B])
    return be, np.std(bb), gmed


def mask_of(Q, D, cut):
    r = np.maximum(D["ruwe1"], D["ruwe2"])
    if cut == "fiducial":
        return (D["R_chance"] < 0.01) & (r < 1.4) & (Q["sv"] < 0.10) & (Q["d"] < 200)
    if cut == "ruwe1.2":
        return (D["R_chance"] < 0.01) & (r < 1.2) & (Q["sv"] < 0.10) & (Q["d"] < 200)
    if cut == "S2like":
        return (D["R_chance"] < 0.01) & (r < 1.25) & (Q["sv"] < 0.10) & (Q["d"] <= 130) & (Q["s"] >= 1) & (Q["s"] < 30)
    raise ValueError(cut)


def run(label, path, nboot, seed, cuts=("fiducial", "ruwe1.2", "S2like"), kinds=("individual", "chae_sdep", "thermal", "super1.3"), persp=True):
    D = load(path)
    Q = derive(D, persp=persp)
    print("\n===== %s  rows %d  perspective correction %s; median sRV/vN at g<0.3: %.3f" % (label, len(D["s[kau]"]), persp, np.median((Q["sRV"] / Q["vN"])[Q["g"] < 0.3])))
    rng = np.random.default_rng(seed)
    for cut in cuts:
        m = mask_of(Q, D, cut)
        print("\n-- cut %s: N = %d  (median d %.0f pc; has RV %.3f; N with RV err<0.1 km/s both %d)" % (cut, m.sum(), np.median(Q["d"][m]), Q["has_rv"][m].mean(),
              ((D["RV1_err[km/s]"][m] < 0.1) & (D["RV2_err[km/s]"][m] < 0.1)).sum()))
        for kind in kinds:
            for est, tr in (("E2", SQ2), ("E1", np.inf)):
                r = zone_stats(D, Q, m, ZONES, kind, tr, rng, nboot)
                line = "  ".join("%s %.3f[%.3f,%.3f]n%d" % (n, r[n]["gam"], r[n]["lo"], r[n]["hi"], r[n]["n"]) for n in ZONES)
                try:
                    be, sb, gm = slope(r, Q, m)
                except Exception as ex:
                    be, sb, gm = np.nan, np.nan, []
                print("%s %-10s %s\n     slope beta(low 3 bins) %.3f +- %.3f (EFE-free -0.36: %.1f sigma; flat: %.1f sigma) g_med %s" % (est, kind, line, be, sb, (be + 0.36) / sb, be / sb, np.round(gm, 3)), flush=True)


if __name__ == "__main__":
    real, mock = sys.argv[1], sys.argv[2]
    nboot = int(sys.argv[3]) if len(sys.argv) > 3 else 200
    run("MOCK (Chae Newton_dr3_MSMS_d200pc_5), no correction: mock has no perspective term", mock, nboot, 1, persp=False)
    run("MOCK with correction (as Boufourou v1)", mock, nboot, 3, cuts=("fiducial",), kinds=("individual",), persp=True)
    run("REAL (Chae gaia_dr3_MSMS_d200pc_ruwe)", real, nboot, 2)
