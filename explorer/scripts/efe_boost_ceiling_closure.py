#!/usr/bin/env python3
"""
EFE / TDG discriminator closure via the boost-ceiling argument.

Hypothesis (this session): the only Synchronism functional form that produces a
DISTINCT external-field-effect / tidal-dwarf-galaxy prediction (the bounded Hill
C(a), 2026-03-06 finding: sigma_iso = 14.5 km/s vs MOND 40.9 km/s) is the same
bounded form that CANNOT reproduce the SPARC RAR, because its boost is capped at
1/Omega_m = 3.17 while the deep-MOND RAR requires boosts up to ~30x.

Both the EFE/TDG discriminator AND the galaxy RAR fit are governed by ONE knob:
the boost ceiling B_max = 1/C_floor. SPARC pins it to "unbounded" (-> MOND); the
discriminator only exists when it is small. There is no B_max that both fits the
RAR and keeps the TDG prediction distinct from MOND. This extends the RAR
transition-shape fork (gamma=2 refuted / free-gamma=MOND) to the EFE sector,
which the 2026-05-13 verdict and the RAR finding both left as an open thread.

Reuses the SPARC loader convention from rar_transition_shape_real_sparc.py.
"""
import numpy as np
from scipy.optimize import minimize, minimize_scalar

MRT = "/mnt/c/exe/projects/ai-agents/Synchronism/simulations/sparc_real_data/MassModels_Lelli2016c.mrt"
KPC = 3.0856775814913673e19
KMS = 1.0e3
UP_DISK, UP_BUL = 0.5, 0.7
OMEGA_M = 0.315
PHI = 1.618033988749895
LN10 = np.log(10.0)

def load_rar(err_cut=0.10):
    g_obs, g_bar, elog = [], [], []
    with open(MRT) as f:
        for line in f:
            parts = line.split()
            if len(parts) != 10:
                continue
            try:
                vals = list(map(float, parts[1:]))
            except ValueError:
                continue
            D, R, Vobs, eVobs, Vgas, Vdisk, Vbul, SBd, SBb = vals
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
            elog.append(2.0 * (eVobs / Vobs) / LN10)
    return np.array(g_bar), np.array(g_obs), np.array(elog)

# ---- boost functions B(x)=g_obs/g_bar as a function of x=g_bar/a0 ----
def B_mond_simple(x):
    # simple mu(y)=y/(1+y), y=g_obs/a0 -> invert to g_obs(g_bar): standard "simple" nu
    # nu(x) = 0.5 + sqrt(0.25 + 1/x)  (RAR boost for simple mu)
    return 0.5 + np.sqrt(0.25 + 1.0/x)

def B_mcgaugh(x):
    # McGaugh nu: g_obs = g_bar/(1-exp(-sqrt(x))) -> boost = 1/(1-exp(-sqrt(x)))
    return 1.0 / (1.0 - np.exp(-np.sqrt(x)))

def B_capped(x, Bmax):
    """MOND-simple boost smoothly capped at Bmax (a one-parameter ceiling family).
    Bmax -> inf recovers MOND-simple (unbounded). Bmax = 3.17 ~ Hill ceiling."""
    Bm = B_mond_simple(x)
    return Bm * Bmax / (Bm + Bmax)   # harmonic cap: -> Bm for Bm<<Bmax, -> Bmax for Bm>>Bmax

def B_hill_acc(x):
    # the actual 2026-03-06 Hill form on acceleration: C=Om+(1-Om)*xa/(1+xa), xa=x^(1/phi)
    xa = x**(1.0/PHI)
    C = OMEGA_M + (1-OMEGA_M)*xa/(1+xa)
    return 1.0/C

def fit_a0_logspace(g_bar, g_obs, elog, boost_fn, *extra):
    """Fit log10(a0) (and extra params) minimizing chi2 of log10(g_obs)."""
    y = np.log10(g_obs)
    w = 1.0/np.maximum(elog, 1e-3)**2
    def chi2(p):
        la0 = p[0]; a0 = 10**la0
        x = g_bar/a0
        x = np.clip(x, 1e-8, 1e8)
        pred = np.log10(g_bar * boost_fn(x, *p[1:]))
        return np.sum(w*(y-pred)**2)
    return chi2

def rms_resid(g_bar, g_obs, a0, boost_fn, *extra):
    x = np.clip(g_bar/a0, 1e-8, 1e8)
    pred = np.log10(g_bar*boost_fn(x, *extra))
    r = np.log10(g_obs) - pred
    return np.sqrt(np.mean(r**2)), r

# ================= MAIN =================
g_bar, g_obs, elog = load_rar()
boost = g_obs/g_bar
a0_canon = 1.2e-10
x_canon = g_bar/a0_canon
print(f"SPARC RAR points (10% cut): N = {len(g_bar)}")
print(f"observed boost g_obs/g_bar: median={np.median(boost):.2f}  90th pct={np.percentile(boost,90):.2f}  max={boost.max():.1f}")
HILL_CEIL = 1.0/OMEGA_M
print(f"\nHill-form boost ceiling 1/Omega_m = {HILL_CEIL:.2f}")
frac_over = np.mean(boost > HILL_CEIL)
print(f"fraction of SPARC points needing boost > {HILL_CEIL:.2f} (Hill CANNOT deliver): {frac_over*100:.1f}%")
frac_x = np.mean(x_canon < 0.1)
print(f"fraction with g_bar/a0 < 0.1 (deep regime where Hill floor bites): {frac_x*100:.1f}%")

# --- 1. McGaugh reference fit ---
from scipy.optimize import minimize as _m
res_mc = _m(fit_a0_logspace(g_bar,g_obs,elog,lambda x:B_mcgaugh(x)), [np.log10(1.2e-10)], method='Nelder-Mead')
a0_mc = 10**res_mc.x[0]
rms_mc,_ = rms_resid(g_bar,g_obs,a0_mc,lambda x:B_mcgaugh(x))
print(f"\n[McGaugh nu]     a0={a0_mc:.2e}  RMS={rms_mc:.4f} dex  (reference)")

# --- 2. Hill C(a) fit (the EFE-discriminating form) ---
res_h = _m(fit_a0_logspace(g_bar,g_obs,elog,lambda x:B_hill_acc(x)), [np.log10(1.0e-10)], method='Nelder-Mead')
a0_h = 10**res_h.x[0]
rms_h, r_h = rms_resid(g_bar,g_obs,a0_h,lambda x:B_hill_acc(x))
print(f"[Hill C(a)]      a0={a0_h:.2e}  RMS={rms_h:.4f} dex   <-- the bounded form that gives the distinct TDG/EFE prediction")

# --- 3. Capped-boost family: fit a0 AND Bmax; scan RMS vs Bmax ---
print("\n--- Boost-ceiling family: RMS(RAR) as ceiling Bmax varies (a0 re-fit at each) ---")
print(f"{'Bmax':>8} {'a0':>10} {'RMS(dex)':>9}  {'note':<28}")
for Bmax in [3.17, 5, 8, 12, 20, 50, 200, 1e6]:
    rr = _m(fit_a0_logspace(g_bar,g_obs,elog,lambda x,b=Bmax:B_capped(x,b)), [np.log10(1.2e-10)], method='Nelder-Mead')
    a0b = 10**rr.x[0]
    rms_b,_ = rms_resid(g_bar,g_obs,a0b,lambda x,b=Bmax:B_capped(x,b))
    note = "Hill-like ceiling" if abs(Bmax-3.17)<0.1 else ("-> MOND (unbounded)" if Bmax>1e5 else "")
    print(f"{Bmax:>8.0f} {a0b:>10.2e} {rms_b:>9.4f}  {note:<28}")

# joint best-fit Bmax
def chi2_joint(p):
    la0, lB = p
    a0=10**la0; Bmax=10**lB
    x=np.clip(g_bar/a0,1e-8,1e8)
    w=1.0/np.maximum(elog,1e-3)**2
    pred=np.log10(g_bar*B_capped(x,Bmax))
    return np.sum(w*(np.log10(g_obs)-pred)**2)
rj=_m(chi2_joint,[np.log10(1.2e-10),np.log10(20)],method='Nelder-Mead')
a0j,Bj=10**rj.x[0],10**rj.x[1]
print(f"\nJoint best-fit ceiling: Bmax = {Bj:.1f} (a0={a0j:.2e}).  RAR drives the ceiling HIGH (toward unbounded/MOND).")

# --- 4. TDG isolated-dispersion discriminator amplitude vs ceiling ---
# sigma_iso ~ sqrt(G_eff M/r) ~ sqrt(boost) * sigma_Newt.  Take a deep-MOND TDG:
# M=1e7 Msun, r_half=0.5 kpc  ->  g_int/a0 ~ small.
G=6.674e-11; Msun=1.989e30; kpc=KPC
M=1e7*Msun; rh=0.5*kpc
g_int = G*M/rh**2
x_tdg = g_int/a0_canon
sigN = np.sqrt(G*M/rh)/KMS
B_M = B_mond_simple(x_tdg)
sig_mond = sigN*np.sqrt(B_M)
print(f"\n--- Isolated TDG (M=1e7 Msun, r_half=0.5 kpc): g_int/a0 = {x_tdg:.3f} ---")
print(f"Newtonian sigma = {sigN:.1f} km/s ; MOND-simple sigma = {sig_mond:.1f} km/s (boost {B_M:.1f})")
print(f"{'Bmax':>8} {'boost_Sync':>11} {'sigma_Sync':>11} {'Delta=MOND-Sync':>16}")
for Bmax in [3.17, 5, 8, 12, 20, 50, 200, 1e6]:
    Bs=B_capped(x_tdg,Bmax)
    ss=sigN*np.sqrt(Bs)
    print(f"{Bmax:>8.0f} {Bs:>11.2f} {ss:>11.1f} {sig_mond-ss:>16.1f}")
print(f"\nHill-actual sigma_Sync = {sigN*np.sqrt(B_hill_acc(x_tdg)):.1f} km/s "
      f"(matches 2026-03-06 finding's ~14.5; discriminator amplitude {sig_mond-sigN*np.sqrt(B_hill_acc(x_tdg)):.1f} km/s)")
