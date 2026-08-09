#!/usr/bin/env python3
"""
Addendum to refutation1_argument_and_ml_robustness.py (2026-08-09).

The L2 result (per-galaxy Upsilon free => dBIC sign flips) uses MORE M/L freedom
than anyone claims SPARC warrants.  This addendum runs the defensible version:
per-galaxy Upsilon_disk with the LOGNORMAL PRIOR the SPARC/RAR literature
actually uses (Lelli, McGaugh & Schombert 2016; McGaugh, Lelli & Schombert 2016
marginalise Upsilon_d over ~0.11 dex about 0.5 at 3.6um).

Objective, identical in both arms (so all penalties cancel at dk = 0):

    P = sum_i [r_i / sigma]^2  +  sum_j [log10(Ups_j / 0.5) / s_prior]^2

with r_i the registered residual log10(g_obs) - log10(g_obs_model), sigma the
reference fit's per-point RMS (0.1437 dex, i.e. the instrument's own noise
scale, since the registered objective carries no error model), and s_prior the
M/L prior width in dex.  s_prior -> 0 recovers L0 (fixed 0.5); s_prior -> inf
recovers L2 (free).  The literature value is 0.11.

Also: how many galaxies actually survive the registered cut?
"""
import numpy as np
from scipy.optimize import minimize_scalar

exec(open("/mnt/c/exe/projects/ai-agents/synchronism-site/explorer/scripts/"
          "refutation1_argument_and_ml_robustness.py").read().split(
          "N = len(g_obs_all)")[0])

lg_obs = np.log10(g_obs_all)
N = len(g_obs_all)
gal_ids = np.unique(gid)
NG = len(gal_ids)
idx_of = {g: np.where(gid == g)[0] for g in gal_ids}
SIGMA = 0.14370150528174686          # reference-fit RMS, the artifact's own value

# ------------------------------------------------------------ galaxy inventory
tot_gal = set()
with open(MRT) as f:
    for line in f:
        p = line.split()
        if len(p) == 10:
            try:
                float(p[1])
            except ValueError:
                continue
            tot_gal.add(p[0])
print(f"galaxies in MassModels_Lelli2016c.mrt : {len(tot_gal)}")
print(f"galaxies surviving the registered cut : {NG}")
print(f"points surviving                      : {N}   [artifact: 2807]\n")


def fit_prior(logpred, s_prior, n_outer=30):
    """Per-galaxy Ups_d under a lognormal prior of width s_prior dex about 0.5."""
    def obj_at_a0(la0, want_ups=False):
        tot = 0.0
        ups = np.empty(NG)
        for j, g in enumerate(gal_ids):
            ii = idx_of[g]
            gas, dsk, bul, lo = GAS[ii], DISK[ii], BUL[ii], lg_obs[ii]

            def f(lu):
                u = 10.0 ** lu
                gb = gas + u * dsk + UP_BUL * bul
                if np.any(gb <= 0):
                    return 1e9
                chi2 = np.sum((lo - logpred(np.log10(gb), la0)) ** 2) / SIGMA ** 2
                pen = ((lu - np.log10(0.5)) / s_prior) ** 2
                return float(chi2 + pen)

            rr = minimize_scalar(f, bounds=(np.log10(0.05), np.log10(3.0)),
                                 method="bounded", options={"xatol": 1e-5})
            ups[j] = 10.0 ** rr.x
            tot += rr.fun
        return (tot, ups) if want_ups else tot

    r = minimize_scalar(lambda la0: obj_at_a0(la0), bounds=(-11.0, -9.0),
                        method="bounded", options={"xatol": 1e-4,
                                                   "maxiter": n_outer})
    P, ups = obj_at_a0(r.x, want_ups=True)
    return 10 ** r.x, P, ups


ARMS = ["McGaugh nu (ref)", "compander gamma=2"]
print("dBIC = dP (dk = 0: both arms carry the same %d M/L parameters)\n" % NG)
print(f"  {'prior width':>14} {'McGaugh P':>12} {'gamma=2 P':>12} "
      f"{'dBIC':>10}  {'med Ups(g=2)':>13}  verdict")

rows = []
for s_prior, tag in [(0.02, "0.02 (near-rigid)"),
                     (0.05, "0.05"),
                     (0.08, "0.08"),
                     (0.11, "0.11 LITERATURE"),
                     (0.15, "0.15"),
                     (0.25, "0.25 (loose)")]:
    out = {}
    for name in ARMS:
        a0, P, ups = fit_prior(MODELS[name], s_prior)
        out[name] = (a0, P, ups)
    d = out["compander gamma=2"][1] - out["McGaugh nu (ref)"][1]
    verdict = ("gamma=2 REFUTED" if d > 10 else
               "gamma=2 FAVOURED" if d < -10 else "INDISTINGUISHABLE")
    med = np.median(out["compander gamma=2"][2])
    rows.append((s_prior, d))
    print(f"  {tag:>14} {out['McGaugh nu (ref)'][1]:>12.2f} "
          f"{out['compander gamma=2'][1]:>12.2f} {d:>+10.2f}  {med:>13.3f}  {verdict}")

print("\n  limits for reference:")
print("    s_prior -> 0    : dBIC -> +184.04  (the registered / quoted number)")
print("    s_prior -> inf  : dBIC -> -27.70   (fully free per-galaxy Ups)")

# where does the refutation cross its own threshold?
sp = np.array([r[0] for r in rows]); db = np.array([r[1] for r in rows])
if db.min() < 10 < db.max():
    k = np.argmax(db < 10)
    x0, x1, y0, y1 = sp[k-1], sp[k], db[k-1], db[k]
    cross = x0 + (10 - y0) * (x1 - x0) / (y1 - y0)
    print(f"\n  dBIC falls below the site's own |dBIC| > 10 decisiveness "
          f"threshold at an M/L prior width of ~{cross:.3f} dex.")
    print(f"  The literature width is 0.11 dex.")

# ------------------------------------------------------ combined (M/L x N_eff)
# Inflating errors for intra-galaxy correlation multiplies the chi2 term by
# (N_eff/N).  Factoring that out, P(s, N_eff) = (N_eff/N) * P(s*sqrt(N_eff/N), N).
# So the 2-D grid collapses exactly onto the 1-D prior sweep already computed.
print("\n" + "=" * 78)
print("COMBINED: literature M/L prior (0.11 dex) x intra-galaxy correlation")
print("=" * 78)
print(f"  {'N_eff':>8} {'s_eff (dex)':>12} {'dBIC':>10}   note")
for ne, note in [(2807, "every point independent (as registered)"),
                 (1000, "site's conservative low end"),
                 (500,  "site's conservative high end -> site says +33"),
                 (175,  "one independent datum per galaxy")]:
    s_eff = 0.11 * np.sqrt(ne / N)
    Ps = {}
    for name in ARMS:
        _, P, _ = fit_prior(MODELS[name], s_eff)
        Ps[name] = P
    d = (ne / N) * (Ps["compander gamma=2"] - Ps["McGaugh nu (ref)"])
    print(f"  {ne:>8} {s_eff:>12.4f} {d:>+10.2f}   {note}")
print("\n  site's own decisiveness threshold: |dBIC| > 10")
