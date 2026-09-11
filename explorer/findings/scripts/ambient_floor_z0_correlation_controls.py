#!/usr/bin/env python3
r"""
POST-HOC CONTROLS FOR THE ONE z = 0 NUMBER THAT WENT THE READING'S WAY
======================================================================
Explorer 2026-09-11.  NOT pre-registered — written after evolving_floor_highz_and_ambient_z0.py §E
returned Spearman rho(B_req, rho_5NN | D) = -0.31 (p < 0.01), the sign the ambient-floor reading
predicts (boost-hungry discs in emptier places).  Two ordinary explanations exist before any
floor physics: (i) morphology/surface-brightness–density — LSB dwarfs need the most boost AND are
the least clustered; (ii) the external field effect — denser surroundings, stronger g_ext, less boost.

 1. Partial rank correlation of B_req with the environment residual, controlling for distance and
    for galaxy properties (L[3.6], SB_disk, Hubble type T, V_flat).
 2. The discriminating form.  Where the cap binds (g_bar < 0.1 a0) the reading predicts a RAR residual
    set by the environment: resid_pred = log10(min(nu, B_max(delta)) / nu).  Its predicted spread is
    compared with the observed residual, and the observed residual is regressed on the prediction.
    A proxy-noise attenuation bound is reported so a flat slope is not over-read.
"""
import json
import os
import sys

import numpy as np
from scipy import stats

HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)
import l2_sparc_core as K                                                   # noqa: E402
from evolving_floor_highz_and_ambient_z0 import C_amb, GDE                   # noqa: E402

REPO = os.path.expanduser("~/ai-workspace/Synchronism")
LOCAL = os.path.join(REPO, "simulations", "sparc_real_data")
if not os.path.exists(K.LOAD.TAB1) and os.path.exists(LOCAL):
    K.LOAD.BASE = LOCAL
    K.LOAD.MRT = os.path.join(LOCAL, "MassModels_Lelli2016c.mrt")
    K.LOAD.TAB1 = os.path.join(LOCAL, "SPARC_Lelli2016c.mrt")
A0 = 1.2e-10
KMS2_KPC = 1.0e6 / 3.0857e19


def table1():
    lines = open(os.path.join(LOCAL, "SPARC_Lelli2016c.mrt")).readlines()
    last = max(i for i, l in enumerate(lines) if l.startswith("-----"))
    out = {}
    for l in lines[last + 1:]:
        if len(l) < 95:
            continue
        name, f = l[0:11].strip(), l[11:].split()
        out[name] = dict(T=float(f[0]), D=float(f[1]), L36=float(f[6]), SBdisk=float(f[11]), Vflat=float(f[14]))
    return out


def resid_on(y, X):
    X = np.column_stack([np.ones(len(y))] + X)
    beta, *_ = np.linalg.lstsq(X, y, rcond=None)
    return y - X @ beta


def partial_spearman(a, b, controls):
    ra = stats.rankdata(a)
    rb = stats.rankdata(b)
    rc = [stats.rankdata(c) for c in controls]
    return stats.pearsonr(resid_on(ra, rc), resid_on(rb, rc))


def nu_rar(y):
    return 1.0 / (1.0 - np.exp(-np.sqrt(y)))


def main():
    print(__doc__.split("\n")[1])
    sp = K.load_sparc()
    t1 = table1()
    env = json.load(open(os.path.join(REPO, "simulations", "test08_per_galaxy_results.json")))
    rows = []
    for gid in sorted(set(sp) & set(env) & set(t1)):
        d = sp[gid]
        _v, v2 = K.vbar_sparc(d, up_disk=0.5, up_bul=0.7)
        m = (v2 > 0) & (d["Vobs"] > 0)
        if m.sum() < 3:
            continue
        R = d["R"][m]
        gbar = v2[m] * KMS2_KPC / R
        gobs = d["Vobs"][m] ** 2 * KMS2_KPC / R
        low = gbar < 0.1 * A0
        rows.append(dict(gid=gid, breq=float((d["Vobs"][m] ** 2 / v2[m]).max()), rho5=env[gid]["rho5"],
                         sph5=env[gid]["sph5"], gmin=float(gbar.min()),
                         Denv=env[gid]["D"], gbar_low=gbar[low], gobs_low=gobs[low], **t1[gid]))
    N = len(rows)
    col = lambda k: np.array([r[k] for r in rows], dtype=float)
    breq, rho5, D, L, SB, T, VF = map(col, ("breq", "rho5", "Denv", "L36", "SBdisk", "T", "Vflat"))
    sph5, gmin = col("sph5"), col("gmin")
    envres = resid_on(np.log10(rho5), [np.log10(D)])
    sphres = resid_on(np.log10(1 + sph5), [np.log10(D)])
    print(f"N = {N}\n")

    print("0. Added after the first run (still post-hoc): HI extent and proxy reliability")
    for lab, ctrl in (("D + log g_bar,min", [np.log10(D), np.log10(gmin)]),
                      ("D + log g_bar,min + L36 + SB + T", [np.log10(D), np.log10(gmin), np.log10(L), np.log10(SB), T])):
        r, p = partial_spearman(breq, np.log10(rho5), ctrl)
        print(f"   partial Spearman(B_req, rho5 | {lab:<32}) = {r:+.3f}  (p = {p:.3f})")
    r1, p1 = stats.spearmanr(np.log10(gmin), envres)
    r2, p2 = stats.spearmanr(np.log10(gmin), breq)
    print(f"   Spearman(log g_bar,min, env residual) = {r1:+.3f} (p={p1:.3f});  Spearman(log g_bar,min, B_req) = {r2:+.3f}")
    rel = stats.pearsonr(envres, sphres)[0]
    print(f"   two-estimator reliability: Pearson(rho5 residual, N(<5 Mpc) residual) = {rel:+.3f}"
          "  (shared distance errors inflate it: an UPPER bound on the true-environment reliability)")
    print()

    print("1. Is rho(B_req, environment) a galaxy-property correlation?")
    for lab, ctrl in (("D only", [np.log10(D)]),
                      ("D + L36", [np.log10(D), np.log10(L)]),
                      ("D + SB_disk", [np.log10(D), np.log10(SB)]),
                      ("D + T", [np.log10(D), T]),
                      ("D + L36 + SB_disk + T", [np.log10(D), np.log10(L), np.log10(SB), T])):
        r, p = partial_spearman(breq, np.log10(rho5), ctrl)
        print(f"   partial Spearman(B_req, rho5 | {lab:<22}) = {r:+.3f}  (p = {p:.3f})")
    for lab, x in (("L36", np.log10(L)), ("SB_disk", np.log10(SB)), ("T", T)):
        r1, p1 = stats.spearmanr(breq, x)
        r2, p2 = stats.spearmanr(envres, x)
        print(f"   Spearman(B_req, {lab:<7}) = {r1:+.3f} (p={p1:.3f});  Spearman(env residual, {lab:<7}) = {r2:+.3f} (p={p2:.3f})")
    print()

    print("2. The discriminating form: low-g_bar RAR residual vs the residual the reading predicts")
    sel = [i for i, r in enumerate(rows) if len(r["gbar_low"]) >= 3]
    delta = 10 ** envres - 1
    obs, pred = [], []
    for i in sel:
        r = rows[i]
        nu = nu_rar(r["gbar_low"] / A0)
        obs.append(np.mean(np.log10(r["gobs_low"] / (r["gbar_low"] * nu))))
        bmax = 1.0 / float(C_amb(0.0, GDE, delta[i]))
        pred.append(np.mean(np.log10(np.minimum(nu, bmax) / nu)))
    obs, pred = np.array(obs), np.array(pred)
    sl, ic, rr, pp, se = stats.linregress(pred, obs)
    rs, ps = stats.spearmanr(pred, obs)
    print(f"   discs with >= 3 points below 0.1 a0: {len(sel)}")
    print(f"   predicted residual: median {np.median(pred):+.3f} dex, spread (SD) {np.std(pred):.3f} dex, "
          f"range [{pred.min():+.2f}, {pred.max():+.2f}]")
    print(f"   observed  residual: median {np.median(obs):+.3f} dex, spread (SD) {np.std(obs):.3f} dex")
    print(f"   OLS obs = {ic:+.3f} + {sl:.3f} x pred  (+/- {se:.3f});  Spearman = {rs:+.3f} (p = {ps:.3f})")
    rs2, ps2 = partial_spearman(obs, pred, [np.log10(np.array([rows[i]['L36'] for i in sel])),
                                            np.log10(np.array([rows[i]['SBdisk'] for i in sel]))])
    print(f"   partial Spearman(obs, pred | L36, SB_disk) = {rs2:+.3f} (p = {ps2:.3f})")
    # attenuation: a noisy proxy flattens the slope by lambda = var(true)/var(observed).  Poisson noise alone
    # (0.217 dex for k = 5) would allow lambda up to ~0.90, but CF4 distance errors add unknown noise, so the
    # only defensible statement is the lambda the data REQUIRE: the reading survives only if the proxy's
    # true-environment reliability is below the observed slope's 2-sigma upper edge.
    lam_need = sl + 2 * se
    rel = stats.pearsonr(envres, sphres)[0]
    print(f"   the reading survives this form only if proxy reliability lambda < {lam_need:.2f} (slope + 2 s.e.);"
          f" the two CF4 estimators agree at r = {rel:.2f} (upper bound: shared distance errors).")
    print("   Not decisive on its own: lambda is unmeasured.  The level test (section E of the main script) is.")
    print(f"   predicted-median offset alone: the reading puts the typical low-g disc {np.median(pred):+.2f} dex "
          f"below the RAR; observed median {np.median(obs):+.3f}")


if __name__ == "__main__":
    main()
