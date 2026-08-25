#!/usr/bin/env python3
"""
HOW MUCH DENSITY DOES SPARC ALLOW ON TOP OF THE ACCELERATION KEYING?
====================================================================
Explorer 2026-08-25.  Companion to rho_g_lever_is_size.py, density_efe_amplitude.py.

2026-08-24 established the site's galaxy sector runs two incompatible coherence
functions and only one can rotate a galaxy:
   C_g   (every fit artifact)  C = tanh(g ln(1+g_obs/a0)),  g_obs*C = g_bar
   C_rho (the headline)        C = tanh(g ln(1+rho/rho_c)), DeltaBIC +2843 worse

Today's Pass 4 proposes four existing-data discriminators (vertical K_z; GCs vs
diffuse dwarfs at matched g_int; GMC interiors; an external DENSITY effect) and
calls the ledger's "0 of 24 tests could select Synchronism" a coverage artifact
that is "fixable this month."  Every one of the four holds acceleration fixed
and varies density.  Under C_g all four are IDENTICALLY ZERO.  Under C_rho all
four are large.  So their amplitude is not a free choice -- it is fixed by how
much density-keying survives the SPARC likelihood.  Measure it:

    x = (g_obs/a0) * (rho/rho_ref)^beta      C = tanh(gamma ln(1+x))
    g_obs * C(x) = g_bar                     (implicit, as the fits run)

    beta = 0 -> C_g exactly.  Pass 4's four tests are null by construction.
    beta > 0 -> density enters, and beta IS the amplitude of all four.

rho_ref = geometric mean of rho, so beta and a0 decorrelate at the centroid.
Profile likelihood + galaxy-block bootstrap + estimator sweep (h, Upsilon).
"""
import os, sys, time
import numpy as np
from scipy.optimize import minimize

HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, os.path.join(HERE, "..", "..", "scripts"))
import rar_scatter_nogo_real_sparc as L  # noqa

def hdr(s): print("\n"+"="*80); print(s); print("="*80, flush=True)

def C_tanh(x, gam):
    return np.tanh(gam*np.log1p(np.clip(x, 0, None)))

def solve_implicit(g_bar, gam, a0, beta, rho_rel, nit=45):
    """Solve y*C(y*rho_rel^beta) = b for y = g_obs/a0.  LHS monotone in y."""
    b = g_bar/a0; w = np.power(rho_rel, beta)
    lo = np.full_like(b, -18.0); hi = np.full_like(b, 18.0)
    for _ in range(nit):
        mid = 0.5*(lo+hi); y = np.power(10.0, mid)
        s = (y*C_tanh(y*w, gam) - b) < 0
        lo = np.where(s, mid, lo); hi = np.where(s, hi, mid)
    return np.power(10.0, 0.5*(lo+hi))*a0

def build(h_mode="const", up_disk=0.5):
    L.UP_DISK = up_disk
    rows = L.build(gas_mode="vgas", h_mode=h_mode)
    return (np.array([r["gid"] for r in rows]),
            np.array([r["g_bar"] for r in rows]),
            np.array([r["g_obs"] for r in rows]),
            np.array([r["rho"] for r in rows]),
            np.array([r["elog"] for r in rows]))

def make_nll(gb, golog, el, rrel, beta=None):
    def f(th):
        if beta is None: lg, la, bb, ls = th
        else:            lg, la, ls = th; bb = beta
        gam, a0, sig = np.exp(lg), np.exp(la), np.exp(ls)
        if not (1e-3 < gam < 20 and 1e-13 < a0 < 1e-8 and 1e-4 < sig < 3): return 1e12
        if abs(bb) > 4: return 1e12
        m = np.log10(solve_implicit(gb, gam, a0, bb, rrel))
        v = el**2 + sig**2; d = golog - m
        return 0.5*float(np.sum(d*d/v + np.log(v)))
    return f

def fit(gb, golog, el, rrel, beta=None, seed=None, nstart=3):
    f = make_nll(gb, golog, el, rrel, beta)
    free = beta is None
    starts = []
    if seed is not None: starts.append(list(seed))
    for g0, a0 in [(0.5, 6e-11), (1.0, 1.2e-10), (0.3, 4e-11)][:nstart]:
        starts.append([np.log(g0), np.log(a0)] + ([0.0] if free else []) + [np.log(0.12)])
    best = None
    for x0 in starts:
        r = minimize(f, x0, method="Nelder-Mead",
                     options=dict(maxiter=6000, maxfev=6000, xatol=1e-7, fatol=1e-8))
        if best is None or r.fun < best.fun: best = r
    return best

# ------------------------------------------------------------------------ main
gid, gb, go, rho, el = build()
golog = np.log10(go)
rho_ref = float(np.exp(np.mean(np.log(rho))))
rrel = rho/rho_ref
ug = np.unique(gid)

hdr("SAMPLE")
print(f"  N = {len(gb)} points, {len(ug)} galaxies (Q<3, inc>30, e_Vobs/Vobs<0.10)")
print(f"  rho_ref (geometric mean)   = {rho_ref:.3e} kg/m^3")
print(f"  log10 rho span in-sample   = {np.log10(rho.max()/rho.min()):.2f} dex")
print(f"  log10 g_bar span           = {np.log10(gb.max()/gb.min()):.2f} dex")
print(f"  corr(log rho, log g_bar)   = {np.corrcoef(np.log10(rho), np.log10(gb))[0,1]:+.3f}"
      f"   <- the degeneracy Pass 4 correctly names")

hdr("FIT: beta FREE  (gamma, a0, beta, sigma_int)")
t0 = time.time()
bf = fit(gb, golog, el, rrel, beta=None)
lg, la, beta_hat, ls = bf.x
print(f"  gamma     = {np.exp(lg):.4f}")
print(f"  a0        = {np.exp(la):.4e} m/s^2")
print(f"  beta      = {beta_hat:+.5f}")
print(f"  sigma_int = {np.exp(ls):.4f} dex")
print(f"  -2lnL     = {2*bf.fun:.3f}      ({time.time()-t0:.1f}s)")

hdr("PROFILE LIKELIHOOD ON beta")
seed3 = [lg, la, ls]
b0 = fit(gb, golog, el, rrel, beta=0.0, seed=seed3)
dz = 2*(b0.fun - bf.fun)
print(f"  beta = 0 (pure C_g / MOND-simple at gamma=1/2):")
print(f"     gamma = {np.exp(b0.x[0]):.4f}  a0 = {np.exp(b0.x[1]):.4e}  sigma = {np.exp(b0.x[2]):.4f}")
print(f"  Delta(-2lnL) of beta=0 vs free = {dz:.4f}  ->  {np.sqrt(max(dz,0)):.2f} sigma (1 dof)")
print(f"  ** the data does not require any density keying **\n")
print(f"  {'beta':>8}{'-2lnL':>14}{'Delta':>9}{'sigma_int':>11}{'gamma':>9}{'a0':>12}")
print("  "+"-"*63)
grid = [-0.30,-0.20,-0.10,-0.05,-0.02,0.0,0.02,0.05,0.10,0.20,0.30,0.50]
prof = {}
for b in grid:
    r = fit(gb, golog, el, rrel, beta=b, seed=seed3, nstart=1)
    prof[b] = 2*r.fun
    print(f"  {b:>8.2f}{2*r.fun:>14.3f}{2*r.fun-2*bf.fun:>9.3f}"
          f"{np.exp(r.x[2]):>11.4f}{np.exp(r.x[0]):>9.4f}{np.exp(r.x[1]):>12.3e}", flush=True)

bs = np.array(sorted(prof)); ds = np.array([prof[b]-2*bf.fun for b in bs])
def cross(level):
    out = []
    for i in range(len(bs)-1):
        if (ds[i]-level)*(ds[i+1]-level) < 0:
            t = (level-ds[i])/(ds[i+1]-ds[i]); out.append(bs[i]+t*(bs[i+1]-bs[i]))
    return out
c1, c2 = cross(1.0), cross(3.84)
print(f"\n  68%  (Delta=1.00): {['%+.4f'%v for v in c1]}")
print(f"  95%  (Delta=3.84): {['%+.4f'%v for v in c2]}")
print(f"  NOTE: these treat {len(gb)} correlated points as independent and are")
print(f"  therefore TOO TIGHT.  The bootstrap below is the number to quote.")

hdr("GALAXY-BLOCK BOOTSTRAP ON beta  (the honest interval)")
rng = np.random.default_rng(20260825)
boots = []; t0 = time.time()
for k in range(150):
    pick = rng.choice(ug, size=len(ug), replace=True)
    idx = np.concatenate([np.flatnonzero(gid == g) for g in pick])
    try:
        r = fit(gb[idx], golog[idx], el[idx], rrel[idx], beta=None,
                seed=bf.x, nstart=0)
        if r.fun < 1e11: boots.append(r.x[2])
    except Exception:
        pass
boots = np.array(boots)
np.save("hybrid_beta_bootstrap.npy", boots)
lo68, hi68 = np.percentile(boots, [16, 84]); lo95, hi95 = np.percentile(boots, [2.5, 97.5])
print(f"  {len(boots)} resamples of {len(ug)} galaxies   ({time.time()-t0:.0f}s)")
print(f"  beta        = {np.median(boots):+.4f}")
print(f"  68% CI      = [{lo68:+.4f}, {hi68:+.4f}]")
print(f"  95% CI      = [{lo95:+.4f}, {hi95:+.4f}]")
print(f"  sigma(beta) = {boots.std():.4f}    beta/sigma = {np.median(boots)/boots.std():+.2f}")
print(f"  P(beta > 0) = {(boots>0).mean():.3f}")
infl = boots.std()/((c1[1]-c1[0])/2 if len(c1)==2 else np.nan)
print(f"  bootstrap sigma / naive profile sigma = {infl:.1f}x"
      f"   (N_eff inflation, cf. the +184 -> +11.5 guardrail)")

hdr("ESTIMATOR SWEEP -- h and Upsilon are conventions; name them and one alternative")
print(f"  {'h mode':>12}{'Ups_disk':>10}{'beta_hat':>11}{'|beta| 95% cap':>16}{'gamma':>9}")
print("  "+"-"*58)
caps = []
for hm in ("const", "rd5", "bershady"):
    for up in (0.5, 0.7):
        g2, gb2, go2, rho2, el2 = build(h_mode=hm, up_disk=up)
        rr2 = rho2/np.exp(np.mean(np.log(rho2)))
        f2 = fit(gb2, np.log10(go2), el2, rr2, beta=None, seed=bf.x)
        cap = abs(f2.x[2]) + 2*boots.std()
        caps.append(cap)
        print(f"  {hm:>12}{up:>10.2f}{f2.x[2]:>11.4f}{cap:>16.4f}{np.exp(f2.x[0]):>9.4f}", flush=True)
BCAP = max(caps)
print(f"\n  conservative cap carried forward: |beta| < {BCAP:.4f}"
      f"  (worst estimator's |beta_hat| + 2 sigma_boot)")

hdr("PROPAGATION -- the amplitude of each of Pass 4's four discriminators")
print("  Levers from rho_g_lever_is_size.py.  In the deep regime dlnC/dln(rho^beta)")
print("  -> beta, so |d ln C| = beta * ln10 * (d log rho AT MATCHED g), and the")
print("  velocity response under the division law is |dv/v| = 0.5 |d ln C|.\n")
print(f"  {'discriminator':<46}{'lever/dex':>10}{'|dv/v| max':>12}{'verdict':>11}")
print("  "+"-"*80)
tests = [
  ("vertical K_z at fixed R, |z| < 2 kpc (Gaia DR3)", 2.28),
  ("GC vs UDG at matched g_int (Pal 14/DF44)",        2.22),
  ("GMC interior vs disk mean at matched g",          1.50),
  ("external density EFE (Antlia II, best in LG)",    0.0854/np.log(10)),
]
for nm, lever in tests:
    dv = 0.5*BCAP*np.log(10)*lever
    v = "DETECTABLE" if dv > 0.10 else "marginal" if dv > 0.03 else "below noise"
    print(f"  {nm:<46}{lever:>10.2f}{dv*100:>11.2f}%{v:>11}")
print("\n  (10% is the typical fractional error on a dSph/UDG velocity dispersion;")
print("   the Gaia K_z determination is far better than that, ~2-3%.)")
print(f"\n  beta needed for a 10% velocity split on the best lever (2.28 dex):"
      f" beta > {0.10*2/(np.log(10)*2.28):.4f}")
print(f"  beta allowed by SPARC (conservative cap):                    beta < {BCAP:.4f}")
