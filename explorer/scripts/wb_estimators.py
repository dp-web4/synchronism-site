#!/usr/bin/env python3
"""Wide-binary gamma estimators by phase-space reduction (explorer 2026-11-08; PREREG 704cd42).

For isotropic Kepler orbits with uniform phase and priors p(a), p(e):
    f(r, v | mu) = p(a) p(e) / [(2 pi)^3 mu^(3/2) a^(1/2) e],   1/a = 2/r - v^2/mu,  mu = gamma G M.
Thermal p(e)=2e cancels e, so f depends only on (r, v^2, mu). Then
    L(gamma) = gamma^(-3/2) * < M^(-3/2) G(w/gamma) >_kernel,  w = v^2/(G M),
    G(x)     = sum_r W(r) q(a) a^(-3/2) [1/a = 2/r - x > 0],   p(a) da = q(a) da/a.
W(r) carries the z integral, the optional z datum and the optional sigma_s kernel with its d^2s factor.
"""
import csv
import json
import numpy as np

GMSUN_KAU = 1.32712440018e20 / 1.495978707e14   # (m/s)^2 per Msun at 1 kau
KAPPA = 4.74047                                  # m/s per (mas/yr pc)
PC_KAU = 206.264806                              # kau per pc
GAMMA_GRID = np.linspace(-0.30, 0.50, 81)        # Gamma = log10 sqrt(gamma): flat prior
GAM = 10 ** (2 * GAMMA_GRID)
XT = np.logspace(-4.5, 3.5, 500)                 # x*s grid for G


def triad(ra, dec):
    cd, sd, ca, sa = np.cos(dec), np.sin(dec), np.cos(ra), np.sin(ra)
    return (np.array([cd * ca, cd * sa, sd]), np.array([-sa, ca, 0.0]), np.array([-sd * ca, -sd * sa, cd]))


def load(gaia_csv, chae_csv, tables=None, dataset="st"):
    """dataset 'st': S&T CSV as used (Chae v1-era v_r; blank masses -> 1.0 each, as coded).
    dataset 'v4': Chae v4 Tables 2-3 (v_r + GR/CB correction, sigma with the correction error, Table 3 masses)."""
    g = list(csv.DictReader(open(gaia_csv)))
    c = list(csv.DictReader(open(chae_csv)))
    tabs = json.load(open(tables)) if tables else None
    out = []
    for a, b in zip(c, g):
        assert a["gaia_a"] == b["gaia_a"] and a["gaia_b"] == b["gaia_b"]
        f = lambda k: float(b[k])
        pa, pb, ea, eb = f("parallax_a"), f("parallax_b"), f("parallax_error_a"), f("parallax_error_b")
        da, db = 1000 / pa, 1000 / pb
        sda, sdb = 1000 * ea / pa**2, 1000 * eb / pb**2
        dm = float(a["d_M_pc"])
        dmean = 0.5 * (da + db)
        ra_a, dec_a, ra_b, dec_b = [np.radians(f(k)) for k in ("ra_a", "dec_a", "ra_b", "dec_b")]
        th = np.hypot((ra_b - ra_a) * np.cos(0.5 * (dec_a + dec_b)), dec_b - dec_a)
        s = dmean * th * PC_KAU
        sig_d = 0.5 * np.hypot(sda, sdb) * PC_KAU            # S&T d_mean_err (kau)
        rA, eA, nA = triad(ra_a, dec_a)
        rB, eB, nB = triad(ra_b, dec_b)
        rmid, emid, nmid = triad(0.5 * (ra_a + ra_b), 0.5 * (dec_a + dec_b))
        vr = float(a["vr_kms"]) * 1000.0
        rv_sig = float(a["vr_sigma_kms"]) * 1000.0
        ma = float(a["mass_a"]) if a["mass_a"] else 1.0
        mb = float(a["mass_b"]) if a["mass_b"] else 1.0
        t3 = None
        if dataset == "v4":
            t2 = tabs["T2"][a["chae_id"]]
            t3 = tabs["T3"][a["chae_id"]]
            assert t2["a"] == a["gaia_a"]
            vr = (t2["vr"] + t2["corr"]) * 1000.0
            rv_sig = np.hypot(t2["sig"], t2["cerr"]) * 1000.0
            ma, mb = t3["MA"], t3["MB"]
        rva = f("gaia_rv_a") * 1000.0
        # Perspective-corrected vector with a common distance (Chae / Yoon+25 style, eq. A1-A3)
        K = KAPPA * dm
        VA = K * (f("pmra_a") * eA + f("pmdec_a") * nA) + rva * rA
        VB = K * (f("pmra_b") * eB + f("pmdec_b") * nB) + (rva - vr) * rB   # Chae: v_r = RV_A - RV_B
        dV = VB - VA
        v_c = np.array([dV @ emid, dV @ nmid, dV @ rmid])
        sE = K * np.hypot(f("pmra_error_a"), f("pmra_error_b"))
        sN = K * np.hypot(f("pmdec_error_a"), f("pmdec_error_b"))
        # S&T raw differences. Kernel: Gaussian in (E, N) with their pm_err, t5 in R, plus v_sys marginalized at 30 km/s.
        KD = KAPPA * dmean
        v_raw = np.array([(f("pmra_b") - f("pmra_a")) * KD, (f("pmdec_b") - f("pmdec_a")) * KD, -vr])
        pm_err_a = np.hypot(f("pmra_error_a"), f("pmdec_error_a"))
        pm_err_b = np.hypot(f("pmra_error_b"), f("pmdec_error_b"))
        st_pm_err = 0.5 * np.hypot(pm_err_a, pm_err_b)       # mas/yr, as coded
        B = np.vstack([
            KD * (eB / (KAPPA * db) - eA / (KAPPA * da)),
            KD * (nB / (KAPPA * db) - nA / (KAPPA * da)),
            rB - rA,
        ])
        # Offset of the real raw differences from the corrected vector: the real perspective term, used in mocks.
        offset = v_raw - v_c
        out.append(dict(
            id=int(a["chae_id"]), ra_rad=0.5 * (ra_a + ra_b), dec_rad=0.5 * (dec_a + dec_b), d=dm, dmean=dmean, s=s, sig_d=sig_d, sig_s_true=s * (0.5 * np.hypot(sda, sdb) / dmean),
            z_obs=(db - da) * PC_KAU, sig_z=np.hypot(sda, sdb) * PC_KAU,
            v_c=v_c, sE=sE, sN=sN, rv_sig=rv_sig, v_raw=v_raw, st_pm_err=st_pm_err, KD=KD, B=B, offset=offset,
            M=ma + mb, ma=ma, mb=mb, eta_csv=t3["eta_s"] if t3 else float(a["vobs_over_vesc"]), eta_err=float(a["vobs_vesc_err"]), v_tab=t3["v"] * 1000 if t3 else np.nan, verr_tab=t3["verr"] * 1000 if t3 else np.nan,
            Gamma_csv=tabs["T2"][a["chae_id"]].get("Gamma", np.nan) if dataset == "v4" else f("Gamma"), merits=a["merits"], rv_source=a["rv_source"],
        ))
    return out


# ---------------------------------------------------------------- G(x)
def q_opik(a):
    return np.ones_like(a)


def q_bpl(a):
    # exp(-0.6*softplus(log(a/5))) as coded in run_gamma_analysis.py
    return (1.0 + a / 5.0) ** (-0.6)


def r_weights(s, sig_s=None, zdat=None, nz=260, ns=160, nr=420):
    """Return r nodes and W(r). z flat on the line unless zdat=(z_obs, sig_z). sig_s None => exact s."""
    u = np.linspace(-3.5, 3.8, nz)
    zn = s * 10**u
    dz = np.gradient(zn)
    zn = np.concatenate([[0.0], zn])
    dz = np.concatenate([[zn[1]], dz])
    wz = 2 * dz
    if zdat is not None:
        z0, sz = zdat
        wz = dz * (np.exp(-0.5 * ((zn - z0) / sz) ** 2) + np.exp(-0.5 * ((zn + z0) / sz) ** 2)) / (np.sqrt(2 * np.pi) * sz)
    if sig_s is None:
        return np.sqrt(s**2 + zn**2), wz
    hi = s + 6 * sig_s
    sn = np.logspace(np.log10(s) - 3.0, np.log10(hi), ns)
    ds = np.gradient(sn)
    ws = sn * ds * np.exp(-0.5 * ((sn - s) / sig_s) ** 2) / s    # d^2s factor; constant 2 pi dropped, s for scale
    rr = np.sqrt(sn[:, None] ** 2 + zn[None, :] ** 2).ravel()
    ww = (ws[:, None] * wz[None, :]).ravel()
    edges = np.logspace(np.log10(rr.min()) - 1e-6, np.log10(rr.max()) + 1e-6, nr + 1)
    idx = np.searchsorted(edges, rr) - 1
    W = np.bincount(idx, ww, nr)
    # weighted-mean r per bin keeps first moment
    R = np.bincount(idx, ww * rr, nr)
    k = W > 0
    return R[k] / W[k], W[k]


def build_G(s, q=q_opik, a_range=None, sig_s=None, zdat=None):
    r, W = r_weights(s, sig_s, zdat)
    x = XT / s
    inv_a = 2.0 / r[None, :] - x[:, None]
    H = np.zeros_like(inv_a)
    ok = inv_a > 0
    a = 1.0 / inv_a[ok]
    v = q(a) * a ** (-1.5)
    if a_range is not None:
        v = np.where((a >= a_range[0]) & (a <= a_range[1]), v, 0.0)
    H[ok] = v
    return x, H @ W


# ---------------------------------------------------------------- velocity kernels
class Kernel:
    """Standardized draws reused across catalogs so a mock costs only a histogram.
    Noise is importance-sampled from a t3 proposal (scale PROP) so that the tails of the kernel are covered;
    v_obs beyond v_esc makes L(gamma) depend on those tails."""

    PROP = 1.6

    def __init__(self, n=12000, seed=11):
        from scipy import stats
        rng = np.random.default_rng(seed)
        self.n = n
        self.u = rng.standard_t(3, (n, 3)) * self.PROP
        q = stats.t.pdf(self.u / self.PROP, 3) / self.PROP
        self.wg = stats.norm.pdf(self.u) / q
        self.wt5 = stats.t.pdf(self.u, 5) / q
        self.zsys = rng.standard_normal((n, 3))
        self.zm = rng.standard_normal((n, 2))


KERN = Kernel()


def draws_gauss(sysd, v, kern=KERN, rv_extra=0.0):
    """Chae-like: Gaussian (E, N, R) with table sigmas; total-mass lognormal 5%."""
    vv = np.empty((kern.n, 3))
    vv[:, 0] = v[0] + sysd["sE"] * kern.u[:, 0]
    vv[:, 1] = v[1] + sysd["sN"] * kern.u[:, 1]
    vv[:, 2] = v[2] + np.hypot(sysd["rv_sig"], rv_extra) * kern.u[:, 2]
    M = sysd["M"] * np.exp(0.05 * kern.zm[:, 0])
    return (vv**2).sum(1), M, kern.wg.prod(1)


def draws_coded(sysd, v, kern=KERN, pm_jit=0.02, rv_jit=7.0, use_vsys=True, rv_gauss=False):
    """S&T as coded: E, N Gaussian with st_pm_err + jitter (mas/yr); R t5 with sqrt(s^2 + 40^2 + jit^2); v_sys ~ N(0, 30 km/s) marginalized."""
    sp = np.hypot(sysd["st_pm_err"], pm_jit) * sysd["KD"]
    vv = np.empty((kern.n, 3))
    vv[:, 0] = v[0] + sp * kern.u[:, 0]
    vv[:, 1] = v[1] + sp * kern.u[:, 1]
    vv[:, 2] = v[2] + np.sqrt(sysd["rv_sig"] ** 2 + 40.0**2 + rv_jit**2) * kern.u[:, 2]
    if use_vsys:
        vv = vv + (30e3 * kern.zsys) @ sysd["B"].T
    M1 = sysd["ma"] * np.exp(0.05 * kern.zm[:, 0])
    M2 = sysd["mb"] * np.exp(0.05 * kern.zm[:, 1])
    wr = kern.wg[:, 2] if rv_gauss else kern.wt5[:, 2]
    return (vv**2).sum(1), M1 + M2, kern.wg[:, 0] * kern.wg[:, 1] * wr


def log_L_curve(v2, M, wk, x_tab, G_tab):
    """ln L(Gamma) for one system on GAMMA_GRID, using a histogram of ln w."""
    w = v2 / (GMSUN_KAU * M)
    wt = wk * M ** (-1.5)
    lw = np.log(w)
    h, e = np.histogram(lw, bins=400, weights=wt)
    c = np.exp(0.5 * (e[:-1] + e[1:]))
    k = h > 0
    c, h = c[k], h[k]
    L = np.interp(np.log(c[None, :] / GAM[:, None]), np.log(x_tab), G_tab, left=G_tab[0], right=0.0) @ h
    L = L * GAM ** (-1.5)
    return np.log(np.maximum(L, 1e-300))


def posterior_summary(lnL):
    p = np.exp(lnL - lnL.max())
    cdf = np.cumsum(p)
    cdf = cdf / cdf[-1]
    q = np.interp([0.16, 0.5, 0.84], cdf, GAMMA_GRID)
    return 10 ** (2 * q), q


# ---------------------------------------------------------------- configurations
def sig_s_of(sysd, mode):
    if mode == "exact":
        return None
    if mode == "true":
        return sysd["sig_s_true"]
    if mode == "coded":
        return max(0.05 * sysd["s"], sysd["sig_d"])
    return float(mode) * sysd["s"]


CONFIGS = {
    # name: sigma_s, q, range?, z used?, kernel
    "chae":        dict(sig="exact", q=q_opik, rng=False, z=True, kern="gauss"),
    "opik_noz":    dict(sig="exact", q=q_opik, rng=False, z=False, kern="gauss"),
    "bpl_noz":     dict(sig="exact", q=q_bpl, rng=True, z=False, kern="gauss"),
    "st_geom":     dict(sig="exact", q=q_opik, rng=False, z=False, kern="coded"),
    "st_base_1pc": dict(sig="0.01", q=q_bpl, rng=True, z=False, kern="coded"),
    "st_base_5pc": dict(sig="0.05", q=q_bpl, rng=True, z=False, kern="coded"),
    "st_base":     dict(sig="coded", q=q_bpl, rng=True, z=False, kern="coded"),
    "st_base_true": dict(sig="true", q=q_bpl, rng=True, z=False, kern="coded"),
}


def G_for(sysd, cfg, zobs=None):
    s = sysd["s"]
    rg = (np.exp(-1.0) * s, np.exp(2.5) * s) if cfg["rng"] else None
    z = (sysd["z_obs"] if zobs is None else zobs, sysd["sig_z"]) if cfg["z"] else None
    return build_G(s, cfg["q"], rg, sig_s_of(sysd, cfg["sig"]), z)


def lnL_system(sysd, cfg, v=None, Gt=None, rv_extra=0.0, pm_jit=0.02, zobs=None, coded_kw=None):
    x, G = Gt if Gt is not None else G_for(sysd, cfg, zobs)
    if cfg["kern"] == "gauss":
        d = draws_gauss(sysd, sysd["v_c"] if v is None else v, rv_extra=rv_extra)
    else:
        d = draws_coded(sysd, sysd["v_raw"] if v is None else v, pm_jit=pm_jit, **(coded_kw or {}))
    return log_L_curve(*d, x, G)


# ---------------------------------------------------------------- mock generation from orbital elements (independent of the reduction)
def kepler_unit(rng, n, alpha=1.0):
    """Orbit at a=1, mu=1: returns unit-free position and velocity in the observer frame (x, y sky; z LOS)."""
    e = rng.uniform(0, 1, n) ** (1.0 / (alpha + 1.0))
    e = np.minimum(e, 0.98)
    Ma = rng.uniform(0, 2 * np.pi, n)
    E = Ma + e * np.sin(Ma)
    for _ in range(30):
        E = E - (E - e * np.sin(E) - Ma) / (1 - e * np.cos(E))
    xo, yo = np.cos(E) - e, np.sqrt(1 - e**2) * np.sin(E)
    den = 1 - e * np.cos(E)
    vxo, vyo = -np.sin(E) / den, np.sqrt(1 - e**2) * np.cos(E) / den
    ci = rng.uniform(-1, 1, n)
    si = np.sqrt(1 - ci**2)
    om, Om = rng.uniform(0, 2 * np.pi, (2, n))
    co, so, cO, sO = np.cos(om), np.sin(om), np.cos(Om), np.sin(Om)
    P = np.array([cO * co - sO * so * ci, sO * co + cO * so * ci, so * si])
    Q = np.array([-cO * so - sO * co * ci, -sO * so + cO * co * ci, co * si])
    return (P * xo + Q * yo).T, (P * vxo + Q * vyo).T


def mock_catalog(systems, gamma_true, rng, truth="opik", alpha=1.0, rv_extra=0.0, comp_frac=0.0, kick_cap=2000.0):
    out = []
    for sd in systems:
        for _ in range(100000):
            r, v = kepler_unit(rng, 1, alpha)
            r, v = r[0], v[0]
            g = np.hypot(r[0], r[1])
            a = sd["s"] / g
            if truth == "opik" or rng.uniform() < (1 + a / 5.0) ** (-0.6):
                break
        Mt = sd["M"] * np.exp(0.05 * rng.standard_normal())
        vel = v * np.sqrt(gamma_true * GMSUN_KAU * Mt / a)
        z_true = r[2] * a
        vobs = vel + np.array([sd["sE"], sd["sN"], np.hypot(sd["rv_sig"], rv_extra)]) * rng.standard_normal(3)
        if comp_frac > 0 and rng.uniform() < comp_frac:
            kick = 10 ** rng.uniform(2, np.log10(kick_cap))
            d = rng.standard_normal(3)
            vobs = vobs + kick * d / np.linalg.norm(d)
        out.append(dict(v_c=vobs, v_raw=vobs + sd["offset"], z_obs=z_true + sd["sig_z"] * rng.standard_normal(),
                        eta=np.linalg.norm(vobs) / np.sqrt(2 * GMSUN_KAU * sd["M"] / sd["s"])))
    return out
