#!/usr/bin/env python3
"""
Refutation #1 audit (2026-08-09): what variable was it computed in, and does it
survive the dominant SPARC systematic?

Part A -- provenance, re-derived not inherited.
  Reproduce the frozen artifact's headline rows from the raw .mrt and confirm
  the argument of the compander is an ACCELERATION ratio, not a density ratio.

Part B -- the test the frozen instrument never ran.
  The registered fit pins Upsilon_disk = 0.5, Upsilon_bulge = 0.7 with ZERO
  nuisance freedom.  Stellar mass-to-light is the dominant SPARC systematic
  (Lelli+2016 quote ~0.11 dex scatter on Upsilon_disk at 3.6um; McGaugh's own
  RAR fits marginalise over per-galaxy Upsilon, distance and inclination).
  Question: is dBIC(gamma=2 vs McGaugh) = +184 a statement about transition
  SHAPE, or is it inside the M/L systematic?

  Three escalating levels of nuisance freedom, applied IDENTICALLY to both arms
  so the BIC penalty cancels:
    L0  Upsilon_d = 0.5 fixed                      (the registered instrument)
    L1  one global Upsilon_d, free                 (+1 param each, cancels)
    L2  per-galaxy Upsilon_d, free                 (+N_gal each, cancels)

Part C -- effective N.  The site already carries "conservative N_eff ~ 500-1000
  => dBIC ~ 33".  Report the full curve so the claim can be read off at any
  N_eff, including the N_eff = 175 (one per galaxy) end of the range.

No new data.  Same .mrt, same cut, same estimator as the registered run.
"""
import numpy as np
from scipy.optimize import minimize_scalar

MRT = "/mnt/c/exe/projects/ai-agents/Synchronism/simulations/sparc_real_data/MassModels_Lelli2016c.mrt"
KPC = 3.0856775814913673e19
KMS = 1.0e3
UP_DISK, UP_BUL = 0.5, 0.7
ERR_CUT = 0.10


def load():
    """Registered selection: 10 whitespace fields, eVobs/Vobs <= 0.10, Vbar^2 > 0."""
    gid_l, R_l, Vobs_l, Vgas_l, Vdisk_l, Vbul_l = [], [], [], [], [], []
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
            D, R, Vobs, eVobs, Vgas, Vdisk, Vbul, SBd, SBb = vals
            if R <= 0 or Vobs <= 0:
                continue
            if eVobs / Vobs > ERR_CUT:
                continue
            gid_l.append(gid); R_l.append(R); Vobs_l.append(Vobs)
            Vgas_l.append(Vgas); Vdisk_l.append(Vdisk); Vbul_l.append(Vbul)
    return (np.array(gid_l), np.array(R_l), np.array(Vobs_l),
            np.array(Vgas_l), np.array(Vdisk_l), np.array(Vbul_l))


gid, R, Vobs, Vgas, Vdisk, Vbul = load()
Rm = R * KPC
g_obs_all = (Vobs * KMS) ** 2 / Rm
sq = lambda v: v * np.abs(v) * KMS ** 2
GAS, DISK, BUL = sq(Vgas) / Rm, sq(Vdisk) / Rm, sq(Vbul) / Rm


def g_bar_of(up_d, up_b=UP_BUL):
    """up_d may be scalar or per-point array (broadcast from per-galaxy values)."""
    return GAS + up_d * DISK + up_b * BUL


# ---------------------------------------------------------------- models
def mcgaugh_logpred(lg_bar, la0):
    """log10 g_obs from log10 g_bar, McGaugh/Lelli RAR nu.  Exact, no inversion."""
    y = 10.0 ** (lg_bar - la0)
    return lg_bar - np.log10(-np.expm1(-np.sqrt(y)))


class TanhLogInverse:
    """g_bar = g_obs * tanh(gamma*ln(1+g_obs/a0)) is scale-free in a0:
       y_bar = Phi(y_obs) with y = g/a0.  Build Phi^-1 once on a log grid."""

    def __init__(self, gamma, lo=-14.0, hi=14.0, n=400001):
        ly_obs = np.linspace(lo, hi, n)
        y_obs = 10.0 ** ly_obs
        mu = np.tanh(gamma * np.log1p(y_obs))
        ly_bar = ly_obs + np.log10(mu)
        if not np.all(np.diff(ly_bar) > 0):
            raise RuntimeError("non-monotone tanh-log map")
        self.ly_bar, self.ly_obs = ly_bar, ly_obs

    def logpred(self, lg_bar, la0):
        ly_b = lg_bar - la0
        if ly_b.min() < self.ly_bar[0] or ly_b.max() > self.ly_bar[-1]:
            raise RuntimeError("outside interpolation bracket")
        return np.interp(ly_b, self.ly_bar, self.ly_obs) + la0


TANH2 = TanhLogInverse(2.0)
TANH049 = TanhLogInverse(0.489)

MODELS = {
    "McGaugh nu (ref)":   lambda lg, la0: mcgaugh_logpred(lg, la0),
    "compander gamma=2":  lambda lg, la0: TANH2.logpred(lg, la0),
    "compander g=0.489":  lambda lg, la0: TANH049.logpred(lg, la0),
}


def ssr(logpred, up_d, la0):
    gb = g_bar_of(up_d)
    return float(np.sum((np.log10(g_obs_all) - logpred(np.log10(gb), la0)) ** 2))


def fit_a0(logpred, up_d):
    r = minimize_scalar(lambda la0: ssr(logpred, up_d, la0),
                        bounds=(-11.0, -9.0), method="bounded",
                        options={"xatol": 1e-8})
    return 10 ** r.x, r.fun


N = len(g_obs_all)
gal_ids = np.unique(gid)
NG = len(gal_ids)
idx_of = {g: np.where(gid == g)[0] for g in gal_ids}

print(f"N = {N} points, {NG} galaxies "
      f"(eVobs/Vobs <= {ERR_CUT}, Ups_d={UP_DISK}, Ups_b={UP_BUL})")
print("registered artifact says: 2807 selected rows, 175 galaxies\n")

# =============================================================== PART A
print("=" * 78)
print("PART A -- reproduce the frozen artifact from raw data (L0: Ups_d fixed)")
print("=" * 78)
L0 = {}
for name, fn in MODELS.items():
    a0, s = fit_a0(fn, UP_DISK)
    L0[name] = (a0, s)
    print(f"  {name:<20} a0 = {a0:.4e} m/s^2   SSR = {s:.4f}   "
          f"RMS = {np.sqrt(s/N):.5f} dex")

ref = L0["McGaugh nu (ref)"][1]
dbic_184 = N * np.log(L0["compander gamma=2"][1] / ref)
print(f"\n  dBIC(gamma=2 vs McGaugh, dk=0) = {dbic_184:+.2f}"
      f"     [artifact: +184.04]")
print(f"  RMS gap  = {np.sqrt(L0['compander gamma=2'][1]/N) - np.sqrt(ref/N):+.5f} dex")
print(f"  argument of the compander in this fit: y = g_obs / a0   (ACCELERATION)")
print(f"  the string 'rho' does not appear in the registered instrument.")

# =============================================================== PART B
print()
print("=" * 78)
print("PART B -- does it survive the M/L systematic?")
print("=" * 78)


def fit_global_upsilon(logpred):
    """Joint (a0, Upsilon_d).  Nested: outer Ups_d, inner a0."""
    def obj(u):
        return fit_a0(logpred, u)[1]
    r = minimize_scalar(obj, bounds=(0.10, 1.50), method="bounded",
                        options={"xatol": 1e-5})
    a0, s = fit_a0(logpred, r.x)
    return r.x, a0, s


print("\nL1 -- ONE global Upsilon_disk, free (dk = +1 in both arms, cancels)")
L1 = {}
for name, fn in MODELS.items():
    u, a0, s = fit_global_upsilon(fn)
    L1[name] = (u, a0, s)
    print(f"  {name:<20} Ups_d = {u:.4f}  a0 = {a0:.4e}  SSR = {s:.4f}  "
          f"RMS = {np.sqrt(s/N):.5f}")
d1 = N * np.log(L1["compander gamma=2"][2] / L1["McGaugh nu (ref)"][2])
print(f"  dBIC(gamma=2 vs McGaugh) = {d1:+.2f}")


def fit_per_galaxy_upsilon(logpred, n_outer=40):
    """Per-galaxy Upsilon_d, free in [0.05, 3.0]; a0 global.
       dk = +NG in BOTH arms, so it cancels in dBIC exactly as L1 does."""
    lg_obs = np.log10(g_obs_all)

    def ssr_at_a0(la0):
        tot = 0.0
        ups = np.empty(NG)
        for j, g in enumerate(gal_ids):
            ii = idx_of[g]
            gas, dsk, bul, lo = GAS[ii], DISK[ii], BUL[ii], lg_obs[ii]

            def f(u):
                gb = gas + u * dsk + UP_BUL * bul
                if np.any(gb <= 0):
                    return 1e9
                return float(np.sum((lo - logpred(np.log10(gb), la0)) ** 2))

            rr = minimize_scalar(f, bounds=(0.05, 3.0), method="bounded",
                                 options={"xatol": 1e-4})
            ups[j] = rr.x
            tot += rr.fun
        return tot, ups

    r = minimize_scalar(lambda la0: ssr_at_a0(la0)[0],
                        bounds=(-11.0, -9.0), method="bounded",
                        options={"xatol": 1e-4, "maxiter": n_outer})
    s, ups = ssr_at_a0(r.x)
    return 10 ** r.x, s, ups


print("\nL2 -- per-galaxy Upsilon_disk, free (dk = +%d in both arms, cancels)" % NG)
L2 = {}
for name in ["McGaugh nu (ref)", "compander gamma=2"]:
    a0, s, ups = fit_per_galaxy_upsilon(MODELS[name])
    L2[name] = (a0, s, ups)
    print(f"  {name:<20} a0 = {a0:.4e}  SSR = {s:.4f}  RMS = {np.sqrt(s/N):.5f}  "
          f"median Ups_d = {np.median(ups):.3f}")
d2 = N * np.log(L2["compander gamma=2"][1] / L2["McGaugh nu (ref)"][1])
print(f"  dBIC(gamma=2 vs McGaugh) = {d2:+.2f}")

print("\n  summary of the M/L ladder (all at dk = 0):")
print(f"    L0  Ups_d fixed 0.5      dBIC = {dbic_184:+8.2f}   <- the registered / quoted number")
print(f"    L1  Ups_d global free    dBIC = {d1:+8.2f}")
print(f"    L2  Ups_d per-galaxy     dBIC = {d2:+8.2f}")

# =============================================================== PART C
print()
print("=" * 78)
print("PART C -- effective N (correlated points within a galaxy)")
print("=" * 78)
print("  dBIC scales linearly in N at fixed SSR ratio.  ln-ratio is fixed:")
lr0 = np.log(L0["compander gamma=2"][1] / ref)
lr2 = np.log(L2["compander gamma=2"][1] / L2["McGaugh nu (ref)"][1])
print(f"    ln(SSR_g2/SSR_ref)  L0 = {lr0:.6f}   L2 = {lr2:.6f}\n")
print(f"  {'N_eff':>8} {'dBIC (L0)':>12} {'dBIC (L2)':>12}   note")
for ne, note in [(2807, "as registered (every point independent)"),
                 (1000, "site's conservative low end"),
                 (500,  "site's conservative high end"),
                 (175,  "one independent datum per galaxy"),
                 (NG,   "galaxies in this cut")]:
    if ne == NG and NG == 175:
        continue
    print(f"  {ne:>8} {ne*lr0:>+12.2f} {ne*lr2:>+12.2f}   {note}")
print("\n  site's own decisiveness threshold (script docstring): |dBIC| > 10")
