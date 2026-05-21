#!/usr/bin/env python3
"""
RAR transition-shape discriminator on REAL SPARC data.

Tests the 2026-05-20 explorer finding's open thread: "Run it on real SPARC."
Prior finding estimated a 0.067 dex structured residual for the gamma=2 compander
vs the McGaugh interpolating function, against an *idealized* McGaugh curve.
Here we run it against the actual Lelli-McGaugh-Schombert (2016) mass models.

Models compared (each with a0 free, log-space least squares on g_obs):
  1. McGaugh nu:   g_obs = g_bar / (1 - exp(-sqrt(g_bar/a0)))           [k=1]
  2. Compander mu (gamma=2 PINNED): g_bar = g_obs * tanh(2*ln(1+g_obs/a0))  [k=1]
  3. Compander mu (gamma free):     fit gamma too                          [k=2]

Data: MassModels_Lelli2016c.mrt (per-radius points, M/L=1 contributions).
Standard McGaugh (2016) prescription: Upsilon_disk=0.5, Upsilon_bul=0.7.
"""
import numpy as np
from scipy.optimize import brentq, minimize_scalar, minimize

MRT = "/mnt/c/exe/projects/ai-agents/Synchronism/simulations/sparc_real_data/MassModels_Lelli2016c.mrt"
KPC = 3.0856775814913673e19  # m
KMS = 1.0e3                   # m/s
UP_DISK, UP_BUL = 0.5, 0.7

def load():
    rows = []
    with open(MRT) as f:
        started = False
        for line in f:
            # data lines: first token is non-numeric galaxy ID, then 9 numbers
            parts = line.split()
            if len(parts) != 10:
                continue
            gid = parts[0]
            try:
                vals = list(map(float, parts[1:]))
            except ValueError:
                continue
            D, R, Vobs, eVobs, Vgas, Vdisk, Vbul, SBdisk, SBbul = vals
            rows.append((gid, R, Vobs, eVobs, Vgas, Vdisk, Vbul))
            started = True
    return rows

def accelerations(rows, err_cut=0.10):
    g_obs, g_bar, eg = [], [], []
    for gid, R, Vobs, eVobs, Vgas, Vdisk, Vbul in rows:
        if R <= 0 or Vobs <= 0:
            continue
        if eVobs / Vobs > err_cut:    # standard quality cut (McGaugh/Lelli)
            continue
        Rm = R * KPC
        # signed squares (SPARC convention: some components negative)
        Vbar2 = (Vgas*abs(Vgas) + UP_DISK*Vdisk*abs(Vdisk) + UP_BUL*Vbul*abs(Vbul)) * KMS**2
        if Vbar2 <= 0:
            continue
        gb = Vbar2 / Rm
        go = (Vobs*KMS)**2 / Rm
        # log-space obs error from velocity error: d(log g_obs)=2*d(log Vobs)
        e = 2.0 * (eVobs / Vobs) / np.log(10)
        g_obs.append(go); g_bar.append(gb); eg.append(e)
    return np.array(g_obs), np.array(g_bar), np.array(eg)

# ---- models: return predicted log10(g_obs) given g_bar ----
def mcgaugh_gobs(gbar, a0):
    y = gbar / a0
    return gbar / (1.0 - np.exp(-np.sqrt(y)))

def compander_gobs(gbar, a0, gamma):
    """Invert g_bar = g_obs * tanh(gamma*ln(1+g_obs/a0)) for g_obs."""
    out = np.empty_like(gbar)
    for i, gb in enumerate(gbar):
        # g_obs >= g_bar always (boost>=1); bracket generously
        f = lambda go: go * np.tanh(gamma*np.log(1.0+go/a0)) - gb
        lo, hi = gb, gb*1e6 + a0*1e3
        # ensure sign change
        if f(hi) < 0:
            hi *= 1e3
        out[i] = brentq(f, lo, hi, xtol=1e-30, rtol=1e-10, maxiter=200)
    return out

def ssr_log(g_obs, pred):
    return np.sum((np.log10(g_obs) - np.log10(pred))**2)

def fit_mcgaugh(g_obs, g_bar):
    obj = lambda la0: ssr_log(g_obs, mcgaugh_gobs(g_bar, 10**la0))
    r = minimize_scalar(obj, bounds=(-11, -9), method='bounded')
    return 10**r.x, r.fun

def fit_compander_fixed(g_obs, g_bar, gamma):
    obj = lambda la0: ssr_log(g_obs, compander_gobs(g_bar, 10**la0, gamma))
    r = minimize_scalar(obj, bounds=(-11, -9), method='bounded')
    return 10**r.x, r.fun

def fit_compander_free(g_obs, g_bar):
    obj = lambda p: ssr_log(g_obs, compander_gobs(g_bar, 10**p[0], p[1]))
    r = minimize(obj, x0=[-9.92, 1.0], method='Nelder-Mead',
                 options={'xatol':1e-4,'fatol':1e-8,'maxiter':2000})
    return 10**r.x[0], r.x[1], r.fun

def main():
    rows = load()
    for err_cut in (0.10, 1.0):  # 1.0 = effectively no cut
        g_obs, g_bar, eg = accelerations(rows, err_cut=err_cut)
        N = len(g_obs)
        print(f"\n{'='*70}\nERROR CUT eVobs/Vobs < {err_cut}   N = {N} points")
        a0_M, ssr_M = fit_mcgaugh(g_obs, g_bar)
        a0_C, ssr_C = fit_compander_fixed(g_obs, g_bar, 2.0)
        a0_F, gam_F, ssr_F = fit_compander_free(g_obs, g_bar)
        rms_M = np.sqrt(ssr_M/N); rms_C = np.sqrt(ssr_C/N); rms_F = np.sqrt(ssr_F/N)
        print(f"  McGaugh nu        : a0={a0_M:.3e}  RMS={rms_M:.4f} dex")
        print(f"  Compander gamma=2 : a0={a0_C:.3e}  RMS={rms_C:.4f} dex")
        print(f"  Compander free    : a0={a0_F:.3e}  gamma={gam_F:.3f}  RMS={rms_F:.4f} dex")
        # BIC: same noise model, Gaussian -> BIC = N*ln(SSR/N) + k*ln(N)
        def bic(ssr,k): return N*np.log(ssr/N) + k*np.log(N)
        dBIC_C = bic(ssr_C,1) - bic(ssr_M,1)   # compander(g=2) - McGaugh
        dBIC_F = bic(ssr_F,2) - bic(ssr_M,1)
        print(f"  dBIC (g=2 compander - McGaugh) = {dBIC_C:+.1f}   (>10 => McGaugh strongly favored)")
        print(f"  dBIC (free compander - McGaugh)= {dBIC_F:+.1f}")
        # structured (binned-mean) residual vs g_bar/a0 for gamma=2 compander
        print("  --- binned mean residual log10(g_obs_obs) - log10(g_pred), gamma=2 compander vs McGaugh ---")
        x = np.log10(g_bar / a0_C)
        predC = compander_gobs(g_bar, a0_C, 2.0)
        predM = mcgaugh_gobs(g_bar, a0_M)
        resC = np.log10(g_obs) - np.log10(predC)
        resM = np.log10(g_obs) - np.log10(predM)
        bins = np.linspace(-2.5, 2.5, 11)
        idx = np.digitize(np.log10(g_bar/a0_C), bins)
        print(f"  {'log(gbar/a0)':>13} {'N':>5} {'meanRes_C':>10} {'err':>7} {'meanRes_M':>10}")
        for b in range(1, len(bins)):
            m = idx == b
            if m.sum() < 5: continue
            c = bins[b-1]; cc=(bins[b-1]+bins[b])/2
            err = resC[m].std()/np.sqrt(m.sum())
            print(f"  {cc:>13.2f} {m.sum():>5d} {resC[m].mean():>10.4f} {err:>7.4f} {resM[m].mean():>10.4f}")

if __name__ == "__main__":
    main()
