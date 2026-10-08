#!/usr/bin/env python3
"""
Is the DE sector's freezing locus resolvable from generic freezing at DESI DR3?
Pre-registered: PREREG_de_freezing_locus_dr3_shape_resolvability.md (2026-10-08).

Asimov forecast: synthetic BAO + CMB-prior + SN data generated from the
substituted locus at a truth gamma_t, BAO covariance scaled by s^2, then fitted
by LCDM, wCDM (= original Cardassian), MP-Cardassian n=0 (free q), the locus,
and CPL. Expected Delta chi^2 = how well a DR3 freezing detection could single
out the locus. Likelihood machinery imported unchanged from
fit_gamma_family_to_desi_dr2.py.
"""
import os
import sys

import numpy as np
from scipy.optimize import minimize, brentq
from scipy.stats import norm

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import fit_gamma_family_to_desi_dr2 as F  # noqa: E402

TRUTH_BASE = dict(om=0.3038, h=0.6815, ob=0.02255)
GAMMA_TRUTHS = [0.445, 0.466, 0.487]
S_BAO = [1.0, 0.75, 0.6]
GAMMA_DR2, SIG_DR2 = 0.487, 0.5 * (0.0207 + 0.0240)
N_ALL = 13 + 3 + 1820 - 2   # 13 BAO numbers incl. DV, 3 CMB; -2 is irrelevant, ln N ~ 7.51
THR_ALL = 6.0 + np.log(1834)
THR_BAOCMB = 6.0 + np.log(16)


# ---------------------------------------------------------- extra models
def make_E2(model, p):
    om, h = p["om"], p["h"]
    orad = F.OMEGA_R / h ** 2
    if model == "wcdm":
        w = p["w"]
        ol = 1.0 - om - orad
        return lambda z: om * (1 + z) ** 3 + orad * (1 + z) ** 4 \
            + ol * (1 + z) ** (3 * (1 + w))
    if model == "mp0":
        # H^2 = (rho^q + rho_c^q)^(1/q) + rad, closure at z=0
        q = p["q"]
        omq = om ** q
        rest = (1.0 - orad) ** q - omq
        if rest <= 0:
            return None
        return lambda z: (omq * (1 + z) ** (3 * q) + rest) ** (1.0 / q) \
            + orad * (1 + z) ** 4
    return F.make_E2(model, p)


F_make_E2_orig = F.make_E2


# ---------------------------------------------------------- Asimov likelihood
class Asimov:
    def __init__(self, sn, truth_model, truth_p, s_bao, s_sn=1.0):
        self.z_sn, self.zhel_sn, _, icov = sn
        self.icov_sn = icov / s_sn ** 2
        self.s = s_bao
        E2 = make_E2(truth_model, truth_p)
        self.bao_t = self._bao_vec(E2, truth_p)
        self.cmb_t = self._cmb_vec(E2, truth_p)
        self.mu_t = self._mu(E2, truth_p["h"])
        # covariance blocks for BAO
        self.bao_cov = []
        for (_, _, sM, _, sH, r) in F.BAO_MH:
            c = np.array([[sM * sM, r * sM * sH], [r * sM * sH, sH * sH]])
            self.bao_cov.append(c * s_bao ** 2)
        self.dv_sig = F.BAO_DV[0][2] * s_bao

    def _bao_vec(self, E2, p):
        h, ob, om = p["h"], p["ob"], p["om"]
        rd = F.sound_horizon(E2, h, ob, F.z_drag(ob, om * h * h), F.CALIB_DRAG)
        z = F.BAO_DV[0][0]
        DM = F.comoving_DM(E2, h, np.array([z]))[0]
        DH = F.C_KMS / (100 * h * np.sqrt(E2(z)))
        out = [(z * DM * DM * DH) ** (1 / 3) / rd]
        zs = np.array([r[0] for r in F.BAO_MH])
        DMs = F.comoving_DM(E2, h, zs)
        for zz, DMz in zip(zs, DMs):
            out += [DMz / rd, F.C_KMS / (100 * h * np.sqrt(E2(zz))) / rd]
        return np.array(out)

    def _cmb_vec(self, E2, p):
        h, ob, om = p["h"], p["ob"], p["om"]
        zs = F.z_star(ob, om * h * h)
        rs = F.sound_horizon(E2, h, ob, zs, F.CALIB_STAR)
        DMs = F.comoving_DM(E2, h, np.array([zs]))[0]
        return np.array([np.sqrt(om) * 100 * h * DMs / F.C_KMS,
                         np.pi * DMs / rs, ob])

    def _mu(self, E2, h):
        from scipy.integrate import cumulative_trapezoid
        zg = np.linspace(0, self.z_sn.max() * 1.001, 30000)
        integ = cumulative_trapezoid(1 / np.sqrt(E2(zg)), zg, initial=0)
        DM = F.C_KMS / (100 * h) * np.interp(self.z_sn, zg, integ)
        return 5 * np.log10((1 + self.zhel_sn) * DM) + 25

    def chi2(self, model, p):
        E2 = make_E2(model, p)
        if E2 is None:
            return 1e10
        with np.errstate(all="ignore"):
            if not np.isfinite(E2(0.0)) or E2(0.0) <= 0 or \
                    not np.all(np.isfinite(E2(np.array([0.5, 2.0, 1100.0])))):
                return 1e10
            if model == "subst":
                orad = F.OMEGA_R / p["h"] ** 2
                C0 = p["om"] / (1 - orad)
                if not 0 < C0 < 1:
                    return 1e10
                if F.C_of_x(F.x0_substituted(p["gamma"], C0) * 1090.0 ** 3,
                            p["gamma"]) < 0.99:
                    return 1e10
            b = self._bao_vec(E2, p) - self.bao_t
            c = self._cmb_vec(E2, p) - self.cmb_t
            d = self._mu(E2, p["h"]) - self.mu_t
        if not (np.all(np.isfinite(b)) and np.all(np.isfinite(c))
                and np.all(np.isfinite(d))):
            return 1e10
        x = (b[0] / self.dv_sig) ** 2
        for i, cov in enumerate(self.bao_cov):
            v = b[1 + 2 * i: 3 + 2 * i]
            x += v @ np.linalg.solve(cov, v)
        x += c @ F.CMB_ICOV @ c
        A = d @ self.icov_sn @ d
        B = np.sum(self.icov_sn @ d)
        x += A - B * B / np.sum(self.icov_sn)
        return float(x)


EXTRA = {"lcdm": ([], []), "wcdm": (["w"], [(-1.6, -0.4)]),
         "mp0": (["q"], [(0.05, 3.0)]), "subst": (["gamma"], [(0.2, 0.9)]),
         "cpl": (["w0", "wa"], [(-2.0, 0.0), (-3.0, 3.0)])}
STARTS = {"lcdm": [[]], "wcdm": [[-1.0], [-0.95]], "mp0": [[1.0], [0.9]],
          "subst": [[0.5], [0.46]], "cpl": [[-1.0, 0.0], [-0.95, 0.15]]}


def fit_model(lik, model, base=TRUTH_BASE):
    names, bounds = EXTRA[model]
    allnames = ["om", "h", "ob"] + names

    def cost(v):
        p = dict(zip(allnames, v))
        if not (0.05 < p["om"] < 0.95 and 0.4 < p["h"] < 1.0
                and 0.015 < p["ob"] < 0.03):
            return 1e10
        for (lo, hi), val in zip(bounds, v[3:]):
            if not lo <= val <= hi:
                return 1e10
        return lik.chi2(model, p)
    best = None
    for st in STARTS[model]:
        x0 = [base["om"], base["h"], base["ob"]] + list(st)
        r = minimize(cost, x0, method="Nelder-Mead",
                     options=dict(xatol=1e-7, fatol=1e-6, maxiter=8000,
                                  maxfev=12000))
        r = minimize(cost, r.x, method="Nelder-Mead",
                     options=dict(xatol=1e-8, fatol=1e-7, maxiter=8000,
                                  maxfev=12000))
        if best is None or r.fun < best.fun:
            best = r
    return best.fun, dict(zip(allnames, best.x))


def gamma_profile_width(lik):
    """Delta chi2 = 1 half-width of gamma on the Asimov set (om,h,ob refit)."""
    def prof(g):
        def cost(v):
            p = dict(om=v[0], h=v[1], ob=v[2], gamma=g)
            return lik.chi2("subst", p)
        r = minimize(cost, [TRUTH_BASE["om"], TRUTH_BASE["h"],
                            TRUTH_BASE["ob"]], method="Nelder-Mead",
                     options=dict(xatol=1e-8, fatol=1e-7, maxiter=6000))
        return r.fun
    return prof


def main():
    np.seterr(all="ignore")
    F.CALIB_STAR, F.CALIB_DRAG = F._calibrate()
    sn = F.load_sn()
    print("=" * 79)
    print("DE FREEZING LOCUS — DR3 SHAPE RESOLVABILITY (Asimov forecast)")
    print("=" * 79)

    # ---- CPL projection of the locus
    print("\n[1] CPL projection (w0, wa) of the locus at DR2 best-fit (om, h):")
    proj = {}
    for g in [0.30, 0.40, 0.445, 0.466, 0.487, 0.50, 0.52, 0.60, 0.70]:
        p = dict(TRUTH_BASE, gamma=g)
        w0, wa, rms = F.cpl_projection("subst", p)
        proj[g] = (w0, wa)
        print(f"    gamma={g:.3f}: w0={w0:+.4f} wa={wa:+.4f} "
              f"(1+w0={1+w0:+.4f}, slope wa/(1+w0)="
              f"{(wa/(1+w0) if abs(1+w0) > 1e-6 else float('nan')):+.2f}, "
              f"rms {rms:.3f}%)")
    p1 = all(abs(1 + proj[g][0]) <= 0.04 and 0 <= proj[g][1] <= 0.15
             for g in [0.445, 0.466, 0.487, 0.50])
    print(f"    P1 (|1+w0|<=0.04, 0<=wa<=0.15 on [0.445,0.5]): "
          f"{'HELD' if p1 else 'FAILED'}")

    # ---- identity / closure controls
    print("\n[0] Controls: mp0 at q=1 and wcdm at w=-1 must equal LCDM E2;"
          " subst at gamma=1/2 too")
    zz = np.array([0.0, 0.5, 1.0, 3.0, 1100.0])
    eL = F.make_E2("lcdm", TRUTH_BASE)(zz)
    for m, extra in [("mp0", dict(q=1.0)), ("wcdm", dict(w=-1.0)),
                     ("subst", dict(gamma=0.5))]:
        e = make_E2(m, dict(TRUTH_BASE, **extra))(zz)
        print(f"    {m:6s}: max |E2/E2_LCDM - 1| = "
              f"{np.max(np.abs(e/eL-1)):.2e}")

    results = {}
    print("\n[2] Asimov fits (Delta chi2 vs locus; locus chi2 should be ~0)")
    for s_sn in [1.0, 0.7]:
        for s in S_BAO:
            if s_sn != 1.0 and s != 0.75:
                continue
            for gt in GAMMA_TRUTHS:
                lik = Asimov(sn, "subst", dict(TRUTH_BASE, gamma=gt), s, s_sn)
                row = {}
                for m in ["subst", "lcdm", "wcdm", "mp0", "cpl"]:
                    c, p = fit_model(lik, m)
                    row[m] = (c, p)
                results[(s_sn, s, gt)] = row
                ex = (f"w={row['wcdm'][1]['w']:+.4f} q={row['mp0'][1]['q']:.4f}"
                      f" g_fit={row['subst'][1]['gamma']:.4f}"
                      f" cpl=({row['cpl'][1]['w0']:+.3f},"
                      f"{row['cpl'][1]['wa']:+.3f})")
                print(f"  sSN={s_sn:.1f} sBAO={s:.2f} g_t={gt:.3f} | "
                      f"locus {row['subst'][0]:.4f} | dLCDM "
                      f"{row['lcdm'][0]-row['subst'][0]:+.3f} | dwCDM "
                      f"{row['wcdm'][0]-row['subst'][0]:+.4f} | dMP0 "
                      f"{row['mp0'][0]-row['subst'][0]:+.4f} | dCPL "
                      f"{row['cpl'][0]-row['subst'][0]:+.4f} | {ex}")

    prim = {k: v for k, v in results.items() if k[0] == 1.0}
    dw = max(v["wcdm"][0] - v["subst"][0] for v in prim.values())
    dm = max(v["mp0"][0] - v["subst"][0] for v in prim.values())
    allw = max(v["wcdm"][0] - v["subst"][0] for v in results.values())
    dl487 = (results[(1.0, 0.75, 0.487)]["lcdm"][0]
             - results[(1.0, 0.75, 0.487)]["subst"][0])
    print(f"\n    P2 max dchi2(wCDM-locus) primary = {dw:.4f} "
          f"(all arms {allw:.4f}) -> {'HELD' if dw < 1 else 'FAILED'}")
    print(f"    P3 max dchi2(MP0-locus) = {dm:.4f} -> "
          f"{'HELD' if dm < 1 else 'FAILED'}")
    print(f"    P4 dchi2(LCDM-locus) at g_t=0.487, s=0.75 = {dl487:.3f} -> "
          f"{'HELD' if dl487 < 4 else 'FAILED'}")

    # ---- predictive probability of a DR3 win
    print("\n[3] Predictive probability of a DR3 win over LCDM")
    out = {}
    for s in S_BAO:
        lik = Asimov(sn, "subst", dict(TRUTH_BASE, gamma=0.487), s)
        prof = gamma_profile_width(lik)
        c0 = prof(0.487)
        f = lambda g: prof(g) - c0 - 1.0
        lo = brentq(f, 0.40, 0.487, xtol=1e-5)
        hi = brentq(f, 0.487, 0.60, xtol=1e-5)
        sig3 = 0.5 * (hi - lo)
        # threshold gamma-hat for dchi2(LCDM) > thr: (0.5-g)/sig3 > sqrt(thr)
        g_thr = 0.5 - np.sqrt(THR_ALL) * sig3
        g_thr2 = 0.5 - np.sqrt(THR_BAOCMB) * sig3
        if sig3 < SIG_DR2:
            spread = np.sqrt(SIG_DR2 ** 2 - sig3 ** 2)
            pw = norm.cdf((g_thr - GAMMA_DR2) / spread)
            pw2 = norm.cdf((g_thr2 - GAMMA_DR2) / spread)
        else:
            spread, pw, pw2 = float("nan"), float("nan"), float("nan")
        out[s] = (sig3, g_thr, pw)
        print(f"  sBAO={s:.2f}: Asimov sigma_gamma(DR3) = {sig3:.4f} "
              f"(DR2 {SIG_DR2:.4f}); win needs gamma_hat < {g_thr:.4f} "
              f"(thr 13.5) / {g_thr2:.4f} (thr 8.8); predictive spread "
              f"{spread:.4f}; P(win) = {pw:.4f} / {pw2:.4f}")
    p5 = out[0.75][2]
    print(f"    P5 P(win, s=0.75, thr 13.5) = {p5:.4f} -> "
          f"{'HELD' if p5 < 0.05 else 'FAILED'}")
    print("\n  NOTE: sigma_gamma(DR3) at s=1.0 checks the Asimov width against "
          "the real DR2 profile width (0.022) -- a pipeline control.")


if __name__ == "__main__":
    main()
