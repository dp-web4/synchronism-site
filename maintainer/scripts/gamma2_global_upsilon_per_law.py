#!/usr/bin/env python3
"""The gamma = 2 pin with one global Upsilon_disk per law.  Maintainer 2026-11-09.

Pre-registered in gamma2_global_upsilon_per_law_PREREG.md (site commit 5a95614) before this file existed.
Pipeline as in gamma2_pin_galaxy_level.py (frozen 2026-07-22). Upsilon_bul = 1.4 Upsilon_disk.
Per-galaxy SSR tables over (Upsilon, a0) let the bootstrap refit both per law in every resample.
"""
import os
import sys
import numpy as np

HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)
from gamma2_pin_galaxy_level import tanhlog_pred, mcgaugh_pred, fit_a0, fit_gamma_a0, DATA, KPC_M, KMS, ERR_CUT

SEED = 20261109
UPS = np.round(np.arange(0.30, 0.9001, 0.01), 2)
LA = np.arange(-11.0, -8.9999, 0.004)     # log10 a0 grid for the tables
C_LIGHT, MPC = 2.99792458e8, 3.0856775814913673e22


def load_rows():
    rows = []
    with open(DATA, encoding="utf-8") as fh:
        for line in fh:
            p = line.split()
            if len(p) != 10:
                continue
            try:
                r, vo, evo, vg, vd, vb = map(float, p[2:8])
            except ValueError:
                continue
            if r <= 0 or vo <= 0 or evo / vo > ERR_CUT:
                continue
            rows.append((p[0], r, vo, vg, vd, vb))
    names = np.array([x[0] for x in rows])
    r, vo, vg, vd, vb = (np.array([x[i] for x in rows]) for i in range(1, 6))
    return names, r, vo, vg, vd, vb


def gbar_at(ud, r, vg, vd, vb):
    v2 = (vg * np.abs(vg) + ud * vd * np.abs(vd) + 1.4 * ud * vb * np.abs(vb)) * KMS**2
    return v2 / (r * KPC_M), v2


def table(pred, names, gal, gobs, r, vg, vd, vb):
    """SSR[galaxy, Upsilon, log a0], by point residuals."""
    T = np.zeros((len(gal), len(UPS), len(LA)))
    idx = {g: np.where(names == g)[0] for g in gal}
    ly = np.log10(gobs)
    for iu, ud in enumerate(UPS):
        gb, _ = gbar_at(ud, r, vg, vd, vb)
        for ia, la in enumerate(LA):
            res = (ly - np.log10(pred(gb, 10.0**la))) ** 2
            T[:, iu, ia] = [res[idx[g]].sum() for g in gal]
    return T


def best(Tsum):
    """min over (Upsilon, a0), with a parabola in log a0 to get below the grid step."""
    iu, ia = np.unravel_index(np.argmin(Tsum), Tsum.shape)
    s = Tsum[iu, ia]
    if 0 < ia < Tsum.shape[1] - 1:
        y0, y1, y2 = Tsum[iu, ia - 1], s, Tsum[iu, ia + 1]
        d = y0 - 2 * y1 + y2
        if d > 0:
            s = y1 - (y2 - y0) ** 2 / (8 * d)
    return iu, ia, s


def main():
    names, r, vo, vg, vd, vb = load_rows()
    # original frozen rows: V_bar^2 > 0 at 0.5
    _, v05 = gbar_at(0.5, r, vg, vd, vb)
    orig = v05 > 0
    # fixed rows: V_bar^2 > 0 at every Upsilon on the grid
    allpos = np.ones_like(orig)
    for ud in UPS:
        allpos &= gbar_at(ud, r, vg, vd, vb)[1] > 0
    print(f"rows: original {orig.sum()}, positive at every Upsilon {allpos.sum()}")

    # ---- identity controls on the original rows ----
    g05, _ = gbar_at(0.5, r[orig], vg[orig], vd[orig], vb[orig])
    go = (vo[orig] * KMS) ** 2 / (r[orig] * KPC_M)
    N0 = len(go)
    a_m, s_m = fit_a0(go, g05, mcgaugh_pred)
    a_2, s_2 = fit_a0(go, g05, lambda gb, a: tanhlog_pred(gb, a, 2.0))
    print(f"C1 dBIC = {N0*np.log(s_2/s_m):+.1f}, rms {np.sqrt(s_2/N0):.4f}/{np.sqrt(s_m/N0):.4f}, a0'={a_2:.3e}, a0_McG={a_m:.3e}")
    grid = sorted(set(np.round(np.arange(0.35, 1.25001, 0.025), 6)) | {0.489, 0.5, 2.0})
    gh, af, sf = fit_gamma_a0(go, g05, grid)
    print(f"C2 gamma_hat={gh:.3f} a0'={af:.3e}")
    if abs(N0 * np.log(s_2 / s_m) - 184) > 2 or abs(gh - 0.489) > 0.013:
        print("IDENTITY CONTROL FAILED — stop")
        return 1
    print("C1 C2 PASS")

    # ---- tables on the fixed rows ----
    m = allpos
    names_f, rf, vof, vgf, vdf, vbf = names[m], r[m], vo[m], vg[m], vd[m], vb[m]
    gobs = (vof * KMS) ** 2 / (rf * KPC_M)
    gal = np.unique(names_f)
    Ngal = len(gal)
    npts = np.array([(names_f == g).sum() for g in gal])
    N = len(gobs)
    print(f"fixed rows: {N} points, {Ngal} galaxies")
    Tm = table(mcgaugh_pred, names_f, gal, gobs, rf, vgf, vdf, vbf)
    T2 = table(lambda gb, a: tanhlog_pred(gb, a, 2.0), names_f, gal, gobs, rf, vgf, vdf, vbf)
    Th = table(lambda gb, a: tanhlog_pred(gb, a, 0.5), names_f, gal, gobs, rf, vgf, vdf, vbf)

    SumM, Sum2, SumH = Tm.sum(0), T2.sum(0), Th.sum(0)
    i5 = int(np.argmin(np.abs(UPS - 0.5)))

    def at_ups(S, iu):
        ia = np.argmin(S[iu]); y = S[iu]
        s = y[ia]
        if 0 < ia < len(LA) - 1:
            d = y[ia - 1] - 2 * y[ia] + y[ia + 1]
            if d > 0:
                s = y[ia] - (y[ia + 1] - y[ia - 1]) ** 2 / (8 * d)
        return ia, s

    # frozen Upsilon on the fixed rows
    _, sm5 = at_ups(SumM, i5); _, s25 = at_ups(Sum2, i5)
    print(f"frozen 0.5 on fixed rows: dBIC {N*np.log(s25/sm5):+.1f}")

    # ---- P1, P2, P3 ----
    um, _, smb = best(SumM); u2, _, s2b = best(Sum2)
    print(f"P1 best Upsilon: gamma=2 {UPS[u2]:.2f}, McGaugh {UPS[um]:.2f}")
    d_own = N * np.log(s2b / smb)
    d_gal = Ngal * np.log(s2b / smb)
    print(f"P2 own-Upsilon dBIC {d_own:+.1f}  rms {np.sqrt(s2b/N):.4f} vs {np.sqrt(smb/N):.4f}")
    print(f"P3 N->N_gal ({Ngal}): {d_gal:+.2f}")
    # a common Upsilon jointly chosen, for comparison
    print("   gamma=2 vs McGaugh at a common Upsilon:")
    for ud in (0.40, 0.45, 0.50, 0.55, 0.60, 0.65, 0.70):
        iu = int(np.argmin(np.abs(UPS - ud)))
        _, sm = at_ups(SumM, iu); _, s2 = at_ups(Sum2, iu)
        print(f"     Y={ud:.2f}: dBIC {N*np.log(s2/sm):+7.1f}  rms McG {np.sqrt(sm/N):.4f}  gamma=2 {np.sqrt(s2/N):.4f}")
    # Li+2018 prior width 0.1 dex on the global offset, as a coarse penalty (reported, not used in the rule)
    pen = lambda u: (np.log10(u / 0.5) / 0.1) ** 2
    print(f"   prior cost (0.1 dex about 0.5): Y={UPS[u2]:.2f} chi2 {pen(UPS[u2]):.2f}; Y={UPS[um]:.2f} chi2 {pen(UPS[um]):.2f}")

    # ---- P4: galaxy-block bootstrap, refit per law per resample ----
    rng = np.random.default_rng(SEED)
    B = 5000
    out = np.empty(B); own2 = np.empty(B); ownm = np.empty(B); gal_form = np.empty(B); frozen = np.empty(B)
    for b in range(B):
        w = np.bincount(rng.integers(0, Ngal, Ngal), minlength=Ngal).astype(float)
        Sm = np.tensordot(w, Tm, axes=1); S2 = np.tensordot(w, T2, axes=1)
        n = (w * npts).sum()
        um_, _, sm_ = best(Sm); u2_, _, s2_ = best(S2)
        out[b] = n * np.log(s2_ / sm_); gal_form[b] = Ngal * np.log(s2_ / sm_)
        own2[b], ownm[b] = UPS[u2_], UPS[um_]
        _, a = at_ups(Sm, i5); _, c = at_ups(S2, i5)
        frozen[b] = n * np.log(c / a)
    q = lambda x: np.percentile(x, [2.5, 16, 50, 84, 97.5])
    print(f"P4 own-Upsilon bootstrap (B={B}) dBIC percentiles 2.5/16/50/84/97.5: {np.round(q(out),1)}; P(dBIC<=0)={np.mean(out<=0):.3f}")
    print(f"   N_gal form: {np.round(q(gal_form),2)}; P(<=0)={np.mean(gal_form<=0):.3f}; P(<6)={np.mean(gal_form<6):.3f}")
    print(f"   frozen 0.5 same resamples: {np.round(q(frozen),1)}")
    print(f"   Upsilon spread: gamma=2 {np.round(q(own2),2)}  McGaugh {np.round(q(ownm),2)}")

    # per-galaxy paired at own Upsilon
    _, im = at_ups(SumM, um), None
    ia_m = at_ups(SumM, um)[0]; ia_2 = at_ups(Sum2, u2)[0]
    d = T2[:, u2, ia_2] - Tm[:, um, ia_m]
    order = np.argsort(-d)
    print(f"   per galaxy at own Upsilon: gamma=2 worse in {(d>0).sum()}/{Ngal}; top 7 share of net {d[order[:7]].sum()/d.sum():.2f}: {list(gal[order[:7]])}")

    # ---- P5: pinned gamma = 1/2 ----
    print("P5 pinned gamma=1/2 (a0_M = a0'/gamma = 2 a0'):")
    for ud in (0.40, 0.45, 0.50, 0.55, 0.60, 0.65, 0.70):
        iu = int(np.argmin(np.abs(UPS - ud)))
        ia, s = at_ups(SumH, iu)
        a0p = 10.0 ** LA[ia]; aM = a0p / 0.5
        H0 = 2 * np.pi * aM / C_LIGHT * MPC / 1e3
        print(f"     Y={ud:.2f}: a0'={a0p:.3e}  a0_M={aM:.3e}  H0 for cH0/2pi {H0:5.1f}  rms {np.sqrt(s/N):.4f}")

    # ---- P6: free gamma across Upsilon ----
    print("P6 free gamma, a0'/gamma:")
    gr = sorted(set(np.round(np.arange(0.2, 3.0001, 0.02), 4)))
    lg = lambda: None
    for ud in (0.40, 0.50, 0.55, 0.60, 0.65, 0.70):
        gb, _ = gbar_at(ud, rf, vgf, vdf, vbf)
        g_, a_, s_ = fit_gamma_a0(gobs, gb, gr)
        print(f"     Y={ud:.2f}: gamma_hat {g_:.2f}  a0'={a_:.3e}  a0'/gamma={a_/g_:.3e}  rms {np.sqrt(s_/N):.4f}")

    # ---- reading rule ----
    lo = q(out)[0]
    if lo <= 0 and d_gal < 6:
        v = "R1"
    elif lo > 10 and d_gal >= 10:
        v = "R2"
    else:
        v = "R3"
    print(f"\nREADING RULE: {v}  (P4 lower edge {lo:.1f}, N_gal form {d_gal:.2f})")
    return 0


if __name__ == "__main__":
    sys.exit(main())
