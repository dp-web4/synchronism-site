#!/usr/bin/env python3
"""Extras on the real rows: (a) RV jitter scan on Chae's kernel; (b) eccentricity prior by direct Monte Carlo; (c) robust kernels. argv: gaia chae dataset"""
import sys
import numpy as np
import wb_estimators as W

DS = sys.argv[3]
S = W.load(sys.argv[1], sys.argv[2], "wb_chae_v4_tables.json", DS)


def summ(t):
    g, q = W.posterior_summary(t)
    return "gamma %.3f [%.3f, %.3f] Gamma %.3f" % (g[1], g[0], g[2], q[1])


print("dataset", DS)
print("--- (a) Added RV jitter, Chae kernel (z used, Gaussian, exact s)")
c = W.CONFIGS["chae"]
for x in [0, 50, 100, 150, 200, 250]:
    t = sum(W.lnL_system(s, c, rv_extra=x) for s in S)
    i1 = np.argmin(abs(W.GAM - 1.0))
    p = np.exp(t - t.max())
    print(" jitter %3d m/s: %s  P(gamma<1)=%.4f" % (x, summ(t), p[: i1 + 1].sum() / p.sum()))


# (b) direct Monte Carlo over (z, position angle, velocity noise, mass), keeping e.
def mc_curve(sd, alpha, kernel, n=200000, seed=5):
    rng = np.random.default_rng(seed + sd["id"])
    s = sd["s"]
    # z proposal: |z| log-uniform on [1e-3 s, 1e4 s]
    lz = rng.uniform(np.log(1e-3 * s), np.log(1e4 * s), n)
    z = np.exp(lz) * rng.choice([-1.0, 1.0], n)
    wz = np.abs(z) * (np.log(1e4 * s) - np.log(1e-3 * s)) * 2  # dz / proposal (up to a constant)
    phi = rng.uniform(0, 2 * np.pi, n)
    r_vec = np.stack([s * np.cos(phi), s * np.sin(phi), z], axis=1)
    from scipy import stats
    u = rng.standard_t(3, (n, 3)) * 1.6
    q = stats.t.pdf(u / 1.6, 3) / 1.6
    if kernel == "gauss":
        sig = np.array([sd["sE"], sd["sN"], sd["rv_sig"]])
        v0 = sd["v_c"]
        w = (stats.norm.pdf(u) / q).prod(1)
    else:  # robust: t5 + 40 m/s on R, Gaussian PM, no v_sys
        sp = np.hypot(sd["st_pm_err"], 0.02) * sd["KD"]
        sig = np.array([sp, sp, np.sqrt(sd["rv_sig"] ** 2 + 40.0**2 + 7.0**2)])
        v0 = sd["v_raw"]
        w = stats.norm.pdf(u[:, 0]) / q[:, 0] * stats.norm.pdf(u[:, 1]) / q[:, 1] * stats.t.pdf(u[:, 2], 5) / q[:, 2]
    v = v0 + sig * u
    M = sd["M"] * np.exp(0.05 * rng.standard_normal(n))
    r = np.linalg.norm(r_vec, axis=1)
    v2 = (v**2).sum(1)
    h2 = (np.cross(r_vec, v) ** 2).sum(1)
    out = []
    for gam in W.GAM:
        mu = gam * W.GMSUN_KAU * M
        inv_a = 2.0 / r - v2 / mu
        ok = inv_a > 0
        a = np.where(ok, 1.0 / np.where(ok, inv_a, 1.0), 0.0)
        e2 = np.where(ok, 1.0 - h2 * inv_a / mu, 0.0)
        e = np.sqrt(np.clip(e2, 1e-12, 1.0))
        val = np.where(ok, a ** (-1.5) * mu ** (-1.5) * (alpha + 1) / 2.0 * e ** (alpha - 1.0), 0.0)
        out.append(np.mean(w * wz * val))
    return np.log(np.maximum(out, 1e-300))


print("--- (b) eccentricity prior by direct MC (Opik, exact s, no z). alpha=1 checks the reduction.")
for kernel in ["gauss", "robust"]:
    for alpha in [0.0, 1.0, 1.2, 1.3]:
        t = sum(mc_curve(s, alpha, kernel) for s in S)
        print(" kernel %-7s alpha %.1f: %s" % (kernel, alpha, summ(t)))
g0 = W.CONFIGS["opik_noz"]
print(" reduction, gauss, alpha=1 :", summ(sum(W.lnL_system(s, g0) for s in S)))
rb = dict(sig="exact", q=W.q_opik, rng=False, z=False, kern="coded")
print(" reduction, robust, alpha=1:", summ(sum(W.lnL_system(s, rb, coded_kw=dict(use_vsys=False)) for s in S)))
