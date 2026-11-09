#!/usr/bin/env python3
"""Arm B of PREREG c31d20e: forward model of an inner companion on one wide-binary component.
Photocentre orbit over the baseline, Gaia-like scan angles, 5-parameter fit, RUWE from residuals, PM bias from the fit.
Everything is a model: F, a, q are inputs. Output is conditional on them (reading rule R3)."""
import numpy as np

KAPPA = 4.740470463533349          # m/s per (mas/yr pc) == km/s per (arcsec/yr pc)
AUYR = 4740.470463533349           # m/s per AU/yr
TWOPI = 2 * np.pi


def sigma_al(G):
    """Per-FoV-transit along-scan error, mas. Order-of-magnitude table consistent with DR3 parallax errors."""
    return np.interp(G, [6, 13, 15, 17, 19, 21], [0.10, 0.10, 0.14, 0.40, 1.2, 4.0])


def draw_q(rng, n, mode):
    if mode == "flat":              # flat 0.1-1
        return rng.uniform(0.1, 1.0, n)
    if mode == "flat02":            # Boufourou: flat 0.02-1
        return rng.uniform(0.02, 1.0, n)
    if mode == "md17":              # Moe & Di Stefano 2017 shape, log P ~ 5-7: gamma_small 0.3 (q 0.1-0.3), gamma_large -0.5 (q 0.3-1)
        x = np.linspace(0.1, 1, 901)
        p = np.where(x < 0.3, (x / 0.3) ** 0.3, (x / 0.3) ** -0.5)
        c = np.cumsum(p)
        c = c / c[-1]
        return np.interp(rng.uniform(0, 1, n), c, x)
    if mode == "chae_msc":          # Chae+ 2026 Fig. 28 as quoted: P(q<0.15)=1.7%, P(q<0.3)=4.5%, P(q<0.5) small; rises to 1
        return np.interp(rng.uniform(0, 1, n), [0, 0.017, 0.045, 0.15, 1.0], [0.1, 0.15, 0.3, 0.5, 1.0])
    raise ValueError(mode)


def _kepler(M, e):
    E = M + e * np.sin(M)
    for _ in range(12):
        E = E - (E - e * np.sin(E) - M) / (1 - e * np.cos(E))
    return E


def forward(rng, Mphot, d, G, T_mo=34.0, Nep=40, q_mode="flat", a_med=40.0, a_sig=1.5, s_kau=None, a_max=None, T2_mo=None):
    """One inner companion on each of n hosts. Mphot: photometric mass the catalogue assigned to the unresolved source."""
    n = len(Mphot)
    q = draw_q(rng, n, q_mode)
    ell = q**4
    M1 = Mphot / (1 + ell) ** 0.25
    M2 = q * M1
    Mt = M1 + M2
    a = 10 ** (np.log10(a_med) + a_sig * rng.standard_normal(n))
    u = rng.uniform(0, 1, n)                                     # e density 0.4 + 1.2 e
    e = (-0.4 + np.sqrt(0.16 + 2.4 * u)) / 1.2
    e = np.minimum(e, 0.97)
    a = np.clip(a, 0.01, 1e5)
    if s_kau is not None:                                        # hierarchy: redraw a beyond s/5
        for _ in range(20):
            bad = a * (1 + e) > 1000 * s_kau / 5.0
            if not bad.any():
                break
            a[bad] = 10 ** (np.log10(a_med) + a_sig * rng.standard_normal(bad.sum()))
        a = np.minimum(a, 1000 * s_kau / 5.0 / (1 + e))
    P = np.sqrt(a**3 / Mt)                                       # yr
    ci = rng.uniform(-1, 1, n)
    si = np.sqrt(1 - ci**2)
    om, Om, M0 = rng.uniform(0, TWOPI, (3, n))
    co, so, cO, sO = np.cos(om), np.sin(om), np.cos(Om), np.sin(Om)
    A = np.array([cO * co - sO * so * ci, sO * co + cO * so * ci, so * si])     # x,y sky; z LOS
    B = np.array([-cO * so - sO * co * ci, -sO * so + cO * co * ci, co * si])
    b = np.sqrt(1 - e**2)
    fB = (ell - q) / ((1 + q) * (1 + ell))                       # photocentre / flux-weighted velocity factor on the relative orbit

    def state(tyr):
        """tyr: n x k. Returns relative position (AU) and velocity (AU/yr)."""
        Mn = M0[:, None] + TWOPI * tyr / P[:, None]
        E = _kepler(Mn, e[:, None])
        ce, se = np.cos(E), np.sin(E)
        X, Y = a[:, None] * (ce - e[:, None]), a[:, None] * b[:, None] * se
        Edot = (TWOPI / P[:, None]) / (1 - e[:, None] * ce)
        VX, VY = -a[:, None] * se * Edot, a[:, None] * b[:, None] * ce * Edot
        pos = [A[i][:, None] * X + B[i][:, None] * Y for i in range(3)]
        vel = [A[i][:, None] * VX + B[i][:, None] * VY for i in range(3)]
        return pos, vel

    def fit(T_mo_, Nep_, batch=600):
        T = T_mo_ / 12.0
        mu = np.zeros((n, 2))
        res2 = np.zeros(n)
        acc2 = np.zeros(n)
        for st in range(0, n, batch):
            idx = np.arange(st, min(st + batch, n))
            t = np.sort(rng.uniform(0, T, Nep_))
            psi = rng.uniform(0, TWOPI, Nep_)
            cp, sp = np.cos(psi), np.sin(psi)
            plx = np.sin(TWOPI * t + rng.uniform(0, TWOPI)) * cp + np.cos(TWOPI * t + rng.uniform(0, TWOPI)) * sp
            tc = t - T / 2
            X5 = np.column_stack([cp, sp, tc * cp, tc * sp, plx])
            X7 = np.column_stack([X5, 0.5 * tc**2 * cp, 0.5 * tc**2 * sp])
            Mn = M0[idx, None] + TWOPI * t[None, :] / P[idx, None]
            E = _kepler(Mn, e[idx, None])
            Xo, Yo = a[idx, None] * (np.cos(E) - e[idx, None]), a[idx, None] * b[idx, None] * np.sin(E)
            px = (A[0][idx, None] * Xo + B[0][idx, None] * Yo) * fB[idx, None] * 1000 / d[idx, None]   # mas
            py = (A[1][idx, None] * Xo + B[1][idx, None] * Yo) * fB[idx, None] * 1000 / d[idx, None]
            sig = px * cp[None, :] + py * sp[None, :]
            pin = np.linalg.pinv(X5)
            beta = sig @ pin.T
            r5 = sig - beta @ X5.T
            b7 = sig @ np.linalg.pinv(X7).T
            r7 = sig - b7 @ X7.T
            mu[idx, 0], mu[idx, 1] = beta[:, 2], beta[:, 3]
            s2 = sigma_al(G[idx]) ** 2
            res2[idx] = (r5**2).sum(1) / s2
            acc2[idx] = ((r5**2).sum(1) - (r7**2).sum(1)) / s2
        return mu, res2, acc2

    mu, res2, acc2 = fit(T_mo, Nep)
    dof = Nep - 5
    ruwe = np.sqrt((rng.chisquare(dof, n) + res2) / dof)
    k_pm = mu * KAPPA * d[:, None]                               # m/s, E/N
    t0 = rng.uniform(0, 1000, n)[:, None]                        # arbitrary reference
    dt = 10 ** rng.uniform(np.log10(3), np.log10(11), n)[:, None]
    pos0, vel0 = state(t0)
    pos1, vel1 = state(t0 + dt)
    rv0 = (fB[:, None] * vel0[2] * AUYR)[:, 0]
    rv1 = (fB[:, None] * vel1[2] * AUYR)[:, 0]
    theta = np.hypot(pos0[0][:, 0], pos0[1][:, 0]) / d           # arcsec
    dG = 10 * np.log10(1 / q)                                    # L ~ M^4
    excess = 2.5 * np.log10(1 + ell)
    out = dict(q=q, a=a, e=e, P=P, ruwe=ruwe, res2=res2, acc2=acc2, k_pm=k_pm, rv0=rv0, drv=rv1 - rv0, theta=theta, dG=dG, excess=excess, Mt=Mt, M2=M2, M1=M1, ruwe_plain=np.sqrt((rng.chisquare(dof, n)) / dof))
    if T2_mo is not None:
        mu2, res22, acc22 = fit(T2_mo, int(Nep * T2_mo / T_mo))
        dof2 = int(Nep * T2_mo / T_mo) - 5
        out.update(mu2=mu2 * KAPPA * d[:, None], ruwe2=np.sqrt((rng.chisquare(dof2, n) + res22) / dof2), acc22=acc22, dmu=(mu2 - mu) * 1.0, sig_mu2=sigma_al(G) * np.sqrt(12.0 / int(Nep * T2_mo / T_mo)) / (T2_mo / 12.0))
    return out


def cuts(o, ruwe_max=1.25, ipd=True, cmd=0.4, rv_stable=None, speckle=False, resolve=True):
    """Boolean survivors. Sequential flags returned for reporting."""
    k = o["ruwe"] < ruwe_max
    fl = {"RUWE": k.copy()}
    if resolve:
        r = ~((o["theta"] >= 1.0) & (o["dG"] < 10))
        k &= r
        fl["resolved"] = r
    if ipd:
        r = ~((o["theta"] >= 0.2) & (o["theta"] < 1.0) & (o["dG"] < 4))
        k &= r
        fl["ipd"] = r
    if cmd is not None:
        r = o["excess"] < cmd
        k &= r
        fl["cmd"] = r
    if rv_stable is not None:
        r = np.abs(o["drv"]) < rv_stable
        k &= r
        fl["rv"] = r
    if speckle:
        r = ~((o["theta"] >= 0.04) & (o["dG"] < 4 + np.minimum(o["theta"], 2.0)))
        k &= r
        fl["speckle"] = r
    return k, fl
