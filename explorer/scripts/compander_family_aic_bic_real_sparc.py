#!/usr/bin/env python3
"""
Compander-family functional-form selection on REAL SPARC data (2026-07-22).

Executes the queued topic `tanh-compander-family-aic-bic.md`:
does tanh carry any statistical privilege over other members of the
compander/sigmoid family, or is it one arbitrary choice?

Verdict rule (fixed in explorer/logs/2026-07-22.md BEFORE running):
  - identical data, identical noise model, BIC = N*ln(SSR/N) + k*ln(N)
  - "distinguishable" = |dBIC| > 10 between family members of equal k
  - "tanh privileged" requires tanh to beat EVERY same-k member by dBIC > 10
  - anything less => form-selection null (tanh statistically indistinguishable)

All family members occupy the same mu-slot as the framework's form:
    g_bar = g_obs * mu(y),  y = g_obs/a0
with the framework's argument u = gamma*ln(1+y) where noted.

Members (shape parameter free unless pinned):
  tanh-log g=2   mu = tanh(2*ln(1+y))            k=1  (framework, pinned)
  tanh-log free  mu = tanh(g*ln(1+y))            k=2
  erf-log        mu = erf(g*ln(1+y))             k=2
  atan-log       mu = (2/pi)*atan(g*ln(1+y))     k=2  (slow approach to 1)
  alg-log        mu = u/sqrt(1+u^2), u=g*ln(1+y) k=2
  Hill free-n    mu = y^n/(1+y^n)                k=2  (logistic in ln y)
  Hill n=1       mu = y/(1+y)                    k=1  (MOND "simple" mu)
  Gompertz       mu = exp(-y^(-n))               k=2  (violates deep-MOND slope)
References:
  McGaugh nu     g_obs = g_bar/(1-exp(-sqrt(g_bar/a0)))          k=1
  nu-delta free  g_obs = g_bar*(1-exp(-(g_bar/a0)^d))^(-1/(2d))  k=2
                 (generalized RAR family; d=1/2 recovers McGaugh)

Identity note: the logistic sigmoid in the log-argument, 2/(1+e^(-2u))-1,
IS tanh(u) exactly; and the Hill function IS the logistic in ln(y).
The audio mu-law compander F(x)=ln(1+mx)/ln(1+m) maps [0,1]->[0,1] and has
no parameter-free adaptation to the unbounded mu-slot; documented, not fit.

Data: MassModels_Lelli2016c.mrt, McGaugh (2016) prescription
(Upsilon_disk=0.5, Upsilon_bul=0.7, eVobs/Vobs<0.10 cut), identical to
rar_transition_shape_real_sparc.py (2026-06-XX run: dBIC(g=2)=+184).
"""
import numpy as np
from math import erf as _erf
from scipy.optimize import brentq, minimize_scalar, minimize

MRT = "/mnt/c/exe/projects/ai-agents/Synchronism/simulations/sparc_real_data/MassModels_Lelli2016c.mrt"
KPC = 3.0856775814913673e19
KMS = 1.0e3
UP_DISK, UP_BUL = 0.5, 0.7

def load():
    rows = []
    with open(MRT) as f:
        for line in f:
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
    return rows

def accelerations(rows, err_cut=0.10):
    g_obs, g_bar = [], []
    for gid, R, Vobs, eVobs, Vgas, Vdisk, Vbul in rows:
        if R <= 0 or Vobs <= 0:
            continue
        if eVobs / Vobs > err_cut:
            continue
        Rm = R * KPC
        Vbar2 = (Vgas*abs(Vgas) + UP_DISK*Vdisk*abs(Vdisk) + UP_BUL*Vbul*abs(Vbul)) * KMS**2
        if Vbar2 <= 0:
            continue
        g_bar.append(Vbar2 / Rm)
        g_obs.append((Vobs*KMS)**2 / Rm)
    return np.array(g_obs), np.array(g_bar)

# ---------- mu-forms: mu(y, shape) ----------
erf_v = np.vectorize(_erf)

def mu_tanh(y, g):    return np.tanh(g*np.log1p(y))
def mu_erf(y, g):     return erf_v(g*np.log1p(y))
def mu_atan(y, g):    return (2.0/np.pi)*np.arctan(g*np.log1p(y))
def mu_alg(y, g):
    u = g*np.log1p(y)
    return u/np.sqrt(1.0+u*u)
def mu_hill(y, n):    return 1.0/(1.0 + y**(-n))
def mu_gomp(y, n):
    with np.errstate(over='ignore'):
        return np.exp(-y**(-n))

# invert g_bar = g_obs * mu(g_obs/a0) pointwise
def invert_mu(gbar, a0, shape, mu):
    out = np.empty_like(gbar)
    for i, gb in enumerate(gbar):
        f = lambda go: go * mu(go/a0, shape) - gb
        lo = gb
        if f(lo) > 0:           # mu(lo/a0) >= gb/lo already
            out[i] = lo
            continue
        hi = gb * 10.0 + a0
        it = 0
        while f(hi) < 0 and it < 200:
            hi *= 10.0
            it += 1
        out[i] = brentq(f, lo, hi, xtol=1e-30, rtol=1e-12, maxiter=300)
    return out

def mcgaugh_gobs(gbar, a0):
    y = gbar/a0
    return gbar / (1.0 - np.exp(-np.sqrt(y)))

def nu_delta_gobs(gbar, a0, d):
    y = gbar/a0
    with np.errstate(over='ignore', under='ignore'):
        return gbar * (1.0 - np.exp(-y**d))**(-1.0/(2.0*d))

def ssr_log(g_obs, pred):
    r = np.log10(g_obs) - np.log10(pred)
    return np.sum(r*r)

def fit1(g_obs, g_bar, predfn, lo=-11.0, hi=-9.0):
    obj = lambda la0: ssr_log(g_obs, predfn(g_bar, 10**la0))
    r = minimize_scalar(obj, bounds=(lo, hi), method='bounded')
    return 10**r.x, r.fun

def fit2(g_obs, g_bar, predfn, s0, sbounds):
    def obj(p):
        la0, s = p
        if not (sbounds[0] <= s <= sbounds[1]) or not (-11.5 <= la0 <= -8.5):
            return 1e9
        return ssr_log(g_obs, predfn(g_bar, 10**la0, s))
    r = minimize(obj, x0=[-9.92, s0], method='Nelder-Mead',
                 options={'xatol':1e-5,'fatol':1e-9,'maxiter':4000,'maxfev':4000})
    return 10**r.x[0], r.x[1], r.fun

def main():
    rows = load()
    g_obs, g_bar = accelerations(rows)
    N = len(g_obs)
    print(f"N = {N} points (eVobs/Vobs < 0.10, Upsilon_d=0.5, Upsilon_b=0.7)")
    bic = lambda ssr, k: N*np.log(ssr/N) + k*np.log(N)
    aic = lambda ssr, k: N*np.log(ssr/N) + 2*k

    results = []  # (name, k, a0, shape, ssr)

    # references
    a0, ssr = fit1(g_obs, g_bar, mcgaugh_gobs)
    results.append(("McGaugh nu (ref)", 1, a0, None, ssr))
    a0, d, ssr = fit2(g_obs, g_bar, nu_delta_gobs, 0.5, (0.05, 3.0))
    results.append(("nu-delta free d", 2, a0, d, ssr))

    # pinned members
    a0, ssr = fit1(g_obs, g_bar, lambda gb, a: invert_mu(gb, a, 2.0, mu_tanh))
    results.append(("tanh-log g=2 (framework)", 1, a0, 2.0, ssr))
    a0, ssr = fit1(g_obs, g_bar, lambda gb, a: invert_mu(gb, a, 1.0, mu_hill))
    results.append(("Hill n=1 (simple mu)", 1, a0, 1.0, ssr))

    # free-shape members
    free = [
        ("tanh-log free g", mu_tanh, 0.5, (0.05, 6.0)),
        ("erf-log free g",  mu_erf,  0.5, (0.05, 6.0)),
        ("atan-log free g", mu_atan, 0.8, (0.05, 12.0)),
        ("alg-log free g",  mu_alg,  0.7, (0.05, 12.0)),
        ("Hill free n",     mu_hill, 1.0, (0.1, 5.0)),
        ("Gompertz free n", mu_gomp, 1.0, (0.05, 5.0)),
    ]
    for name, mu, s0, sb in free:
        a0, s, ssr = fit2(g_obs, g_bar,
                          lambda gb, a, sh, _mu=mu: invert_mu(gb, a, sh, _mu),
                          s0, sb)
        results.append((name, 2, a0, s, ssr))

    ssr_ref = results[0][4]
    b_ref = bic(ssr_ref, 1)
    a_ref = aic(ssr_ref, 1)
    print(f"\n{'model':<28}{'k':>2}{'a0 [m/s^2]':>12}{'shape':>9}{'RMS dex':>9}"
          f"{'dBIC':>9}{'dAIC':>9}")
    for name, k, a0, s, ssr in results:
        rms = np.sqrt(ssr/N)
        db = bic(ssr, k) - b_ref
        da = aic(ssr, k) - a_ref
        sstr = f"{s:.3f}" if s is not None else "--"
        print(f"{name:<28}{k:>2}{a0:>12.3e}{sstr:>9}{rms:>9.4f}{db:>+9.1f}{da:>+9.1f}")

    # pairwise dBIC among free (k=2) members, relative to best k=2
    k2 = [(n, bic(ssr, 2)) for n, k, _, _, ssr in results if k == 2]
    best = min(k2, key=lambda t: t[1])
    print(f"\nk=2 family, dBIC relative to best ({best[0]}):")
    for n, b in sorted(k2, key=lambda t: t[1]):
        print(f"  {n:<28}{b-best[1]:>+9.1f}")

if __name__ == "__main__":
    main()
