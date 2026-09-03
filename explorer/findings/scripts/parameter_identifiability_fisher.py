#!/usr/bin/env python3
r"""
IS THE PARAMETER LEDGER FALSIFIABLE?   (explorer 2026-09-03)
============================================================
The site badges  A = 0.029  in  rho_crit = A V_flat^2  as AUDITED-NEGATIVE,
"600x off", because the stated formula  A = 4 pi / (beta_J^2 G R_0^2)  gives
4.6e-5.  Nobody has asked what factor the galaxy sector can RESOLVE on A.

Density-keyed hero equation, no floor:
    C(rho) = tanh( gamma * ln(1 + rho/rho_crit) ),   rho_crit = A * V_flat^2
    x = rho/rho_crit  =>  C = gamma x [1 - x/2 + O(x^2)]
so to leading order only gamma/A enters and the second combination (gamma/A^2)
enters at relative weight x/2.  Separability is therefore controlled by x.

Coupling: the site's division branch,  f_DM = 1 - C  =>  g_obs = g_bar / C,
i.e.  V_pred^2 = R * g_bar / C.   floor = 0 (this is the HERO equation, not the
Omega_m-floored TEST-09/10 form).

NUISANCES -- all FIXED, none marginalised:
    Upsilon_disk = 0.5, Upsilon_bul = 0.7, gas from Vgas (signed),
    h = 0.196 R_d^0.633 (Bershady), SPARC Q<=2 & inc>=30 (153 galaxies),
    same builder as the 08-26/08-30/09-02 runs (l2_sparc_core).
    g_bar = vbar^2/R (SPARC quadrature), NOT the L2 solve -- this audit is
    about C's parameters, and the L2 solve does not change which combination
    of (gamma, A) enters C.

Pre-registered rules R1..R6 live in explorer/logs/2026-09-03.md.
Output: parameter_identifiability_fisher_output.txt
"""
import os, sys, json
import numpy as np
HERE = os.path.dirname(os.path.abspath(__file__)); sys.path.insert(0, HERE)
import l2_sparc_core as K

A_CAL   = 0.029        # Msun/pc^3 per (km/s)^2 -- the propagated calibrated number
A_STATED= 4.6e-5       # what the site says the stated formula gives
GAMMA0  = 0.489        # the SPARC-fitted gamma the site quotes
KPC3    = 1.0e9        # (Msun/pc^3) -> (Msun/kpc^3)
A0      = 1.2e-10 / 3.24078e-14   # a0 in (km/s)^2/kpc

def hdr(s): print("\n" + "=" * 78 + "\n" + s + "\n" + "=" * 78, flush=True)

# ---------------------------------------------------------------- build data
gals = K.load_sparc()
rows = []
for gid, d in gals.items():
    p = d["props"]
    Rd = max(p["Rdisk"], 0.1)
    h  = 0.196 * Rd**0.633
    g  = K.make_grid(d["R"][-1])
    rho, Mc = K.build_density(g, d, h, 0.5, 0.7, "vgas")     # Msun/kpc^3
    rho_mid = np.interp(d["R"], g.Rc, rho[:, 0]) / KPC3      # -> Msun/pc^3
    vbar, vbar2 = K.vbar_sparc(d, 0.5, 0.7)
    gbar = np.where(vbar2 > 0, vbar2 / d["R"], np.nan)
    Vflat = p["Vflat"] if p["Vflat"] > 0 else float(np.mean(d["Vobs"][-3:]))
    ok = (vbar2 > 0) & (d["Vobs"] > 0) & (d["eVobs"] > 0) & (rho_mid > 0)
    if ok.sum() < 3 or Vflat <= 0:
        continue
    rows.append(dict(gid=gid, R=d["R"][ok], Vobs=d["Vobs"][ok], eV=d["eVobs"][ok],
                     rho=rho_mid[ok], gbar=gbar[ok], Vflat=Vflat,
                     Mtot=2*Mc.sum()))
NG = len(rows)
NPT = sum(len(r["R"]) for r in rows)
print(f"galaxies kept {NG}   points {NPT}")

RHO   = np.concatenate([r["rho"]   for r in rows])
VOBS  = np.concatenate([r["Vobs"]  for r in rows])
EV    = np.concatenate([r["eV"]    for r in rows])
RR    = np.concatenate([r["R"]     for r in rows])
GBAR  = np.concatenate([r["gbar"]  for r in rows])
VF    = np.concatenate([np.full(len(r["R"]), r["Vflat"]) for r in rows])
GIDX  = np.concatenate([np.full(len(r["R"]), i) for i, r in enumerate(rows)])
FRACERR = EV / VOBS

# ---------------------------------------------------------------- FACT 1: x
hdr("FACT 1 -- the x = rho/rho_crit distribution under the framework's own prescription")
for tag, A in (("A_cal   = 0.029  (propagated)", A_CAL), ("A_stated= 4.6e-5 (formula)", A_STATED)):
    x = RHO / (A * VF**2)
    q = np.percentile(x, [50, 90, 99, 100])
    C = np.tanh(GAMMA0 * np.log1p(x))
    print(f"{tag}:  x median {q[0]:.3e}  p90 {q[1]:.3e}  p99 {q[2]:.3e}  max {q[3]:.3e}")
    print(f"{'':28}  C(gamma=0.489) median {np.median(C):.3e}  max {C.max():.3e}"
          f"   =>  boost 1/C median {1/np.median(C):.3g}")
print(f"median fractional error on Vobs: {np.median(FRACERR)*100:.2f} %")

# ------------------------------------------------- R3: is the FORM identifiable?
hdr("R3 -- is the tanh-log FORM distinguishable from its own linearisation C = gamma*x?")
print("  registered rule: ratio (max relative deviation) / (observational precision on C) < 1")
print("  observational precision on C: C enters V as V ~ C^-1/2, so sigma(C)/C = 2*sigma(V)/V")
prec = 2 * np.median(FRACERR)
for tag, A in (("A_cal", A_CAL), ("A_stated", A_STATED)):
    x = RHO / (A * VF**2)
    Cex = np.tanh(GAMMA0 * np.log1p(x)); Clin = GAMMA0 * x
    dev = np.abs(Cex - Clin) / Cex
    print(f"  {tag:9s}: max |C_exact - gamma x|/C_exact = {dev.max():.3e}"
          f"   median {np.median(dev):.3e}   ratio to precision {dev.max()/prec:.3f}")
print(f"  (precision on C = {prec:.3f})")

# ------------------------------------------------------- R1: Fisher / kappa
hdr("R1 -- Fisher condition number in (ln gamma, ln A), pooled")
print("  V_pred^2 = R g_bar / C  =>  dlnV/dtheta = -0.5 dlnC/dtheta")
print("  weight w_i = (Vobs_i/eVobs_i)^2   (evaluated at Vpred ~ Vobs, standard)")
def dlnC(gamma, A):
    x = RHO / (A * VF**2)
    u = np.log1p(x); t = np.tanh(gamma * u); s2 = 1.0 / np.cosh(gamma * u)**2
    dg =  gamma * u * s2 / t                       # dlnC/dln gamma
    dA = -gamma * (x / (1 + x)) * s2 / t           # dlnC/dln A   (x propto 1/A)
    return dg, dA
def fisher(gamma, A):
    dg, dA = dlnC(gamma, A)
    w = (VOBS / EV)**2 * 0.25
    F = np.array([[np.sum(w*dg*dg), np.sum(w*dg*dA)],
                  [np.sum(w*dg*dA), np.sum(w*dA*dA)]])
    return F
for tag, A in (("A_cal   = 0.029", A_CAL), ("A_stated= 4.6e-5", A_STATED)):
    F = fisher(GAMMA0, A)
    ev = np.linalg.eigvalsh(F)
    kappa = ev[-1] / max(ev[0], 1e-300)
    Fi = np.linalg.pinv(F)
    sA = np.sqrt(max(Fi[1, 1], 0.0)); sg = np.sqrt(max(Fi[0, 0], 0.0))
    corr = Fi[0, 1] / max(np.sqrt(Fi[0, 0]*Fi[1, 1]), 1e-300)
    print(f"  {tag}: eig {ev[0]:.4e} {ev[-1]:.4e}   kappa = {kappa:.4e}")
    print(f"{'':20} marginal sigma(ln A) = {sA:.4g}  -> factor {np.exp(sA):.4g}x ;"
          f"  sigma(ln gamma) = {sg:.4g} ;  corr = {corr:+.6f}")

# ------------------------- R2': direct absorption test (no fit, no Fisher)
hdr("R2' -- DIRECT absorption test: is (gamma/630, A_stated) the same prediction as (gamma, A_cal)?")
ratio = A_STATED / A_CAL
print(f"  A_stated/A_cal = {ratio:.4e}  ->  absorbing shift gamma -> gamma*{ratio:.4e}")
def Vpred(gamma, A):
    x = RHO / (A * VF**2)
    C = np.tanh(gamma * np.log1p(x))
    return np.sqrt(np.clip(RR * GBAR / C, 0, None))
V1 = Vpred(GAMMA0, A_CAL); V2 = Vpred(GAMMA0 * ratio, A_STATED)
rel = np.abs(V2 - V1) / V1
print(f"  max |dV|/V = {rel.max():.4e}   median {np.median(rel):.4e}"
      f"   (observational precision {np.median(FRACERR):.4e})")
print(f"  points where |dV|/V exceeds that point's own eVobs/Vobs: "
      f"{int(np.sum(rel > FRACERR))} / {NPT}")
d2 = np.sum(((V2 - V1) / EV)**2)
print(f"  chi^2 distance between the two parameter sets: {d2:.4g}  over {NPT} points")

# ------------------------- R2: profile likelihood on A with gamma free
hdr("R2 -- profile likelihood: 1-sigma factor range on A with gamma FREE")
def chi2(gamma, A):
    V = Vpred(gamma, A)
    return float(np.sum(((VOBS - V) / EV)**2))
Agrid = np.logspace(-12, 2, 141)
ggrid = np.logspace(-6, 1.5, 121)
prof = np.empty(len(Agrid)); gbest = np.empty(len(Agrid))
for i, A in enumerate(Agrid):
    c = np.array([chi2(g, A) for g in ggrid])
    j = int(np.argmin(c)); prof[i] = c[j]; gbest[i] = ggrid[j]
i0 = int(np.argmin(prof))
print(f"  global min chi^2 = {prof[i0]:.6g}  (chi2/N = {prof[i0]/NPT:.4g})"
      f"  at A = {Agrid[i0]:.4e}, gamma = {gbest[i0]:.4e}")
for dchi, lab in ((1.0, "1-sigma (dchi2=1)"), (9.0, "3-sigma (dchi2=9)")):
    m = prof <= prof[i0] + dchi
    lo, hi = Agrid[m].min(), Agrid[m].max()
    edge = " [AT GRID EDGE]" if (m[0] or m[-1]) else ""
    print(f"  {lab}: A in [{lo:.3e}, {hi:.3e}]  -> factor {hi/lo:.4g}x{edge}")
print("  chi^2 at the two audited points, gamma profiled:")
for tag, A in (("A_cal   = 0.029", A_CAL), ("A_stated= 4.6e-5", A_STATED)):
    c = np.array([chi2(g, A) for g in ggrid]); j = int(np.argmin(c))
    print(f"    {tag}: chi^2 = {c[j]:.6g}  (dchi2 vs global {c[j]-prof[i0]:+.4g})"
          f"  at gamma = {ggrid[j]:.4e}")
np.save(os.path.join(HERE, "parameter_identifiability_profile.npy"),
        np.vstack([Agrid, prof, gbest]))   # rows: Agrid, profile chi2, gamma_hat

# ------------------------- R4: control -- acceleration-keyed variable
hdr("R4 -- CONTROL: same audit for the ACCELERATION-keyed C(g_bar/a0)")
print("  C = tanh(gamma ln(1 + g_bar/(k a0))), same division coupling.")
XG = GBAR / A0
print(f"  g_bar/a0: median {np.median(XG):.3f}  p10 {np.percentile(XG,10):.3f}"
      f"  p90 {np.percentile(XG,90):.3f}   (compare x_rho median above)")
def dlnC_g(gamma, k):
    x = XG / k
    u = np.log1p(x); t = np.tanh(gamma*u); s2 = 1.0/np.cosh(gamma*u)**2
    return gamma*u*s2/t, -gamma*(x/(1+x))*s2/t
def fisher_g(gamma, k):
    dg, dk = dlnC_g(gamma, k)
    w = (VOBS/EV)**2 * 0.25
    return np.array([[np.sum(w*dg*dg), np.sum(w*dg*dk)],
                     [np.sum(w*dg*dk), np.sum(w*dk*dk)]])
for k in (1.0, 2.0):
    F = fisher_g(GAMMA0, k); ev = np.linalg.eigvalsh(F)
    Fi = np.linalg.pinv(F)
    print(f"  k = {k}: kappa = {ev[-1]/max(ev[0],1e-300):.4e}   "
          f"sigma(ln k) = {np.sqrt(Fi[1,1]):.4g} -> factor {np.exp(np.sqrt(Fi[1,1])):.4g}x  "
          f"corr = {Fi[0,1]/np.sqrt(Fi[0,0]*Fi[1,1]):+.6f}")

# ------------------------- R5: what N_corr does the repair need?
hdr("R5 -- the free-repair arithmetic: gamma = 2/sqrt(N_corr)")
def ncorr(g): return (2.0/g)**2
print(f"  gamma = {GAMMA0}          -> N_corr = {ncorr(GAMMA0):.4g}   (the SPARC fit)")
g_rep = GAMMA0 * ratio
print(f"  gamma = {g_rep:.4e}  -> N_corr = {ncorr(g_rep):.4g}   (absorbing A -> 4.6e-5)")
print(f"  site's gamma-calculator admits N_corr in [1, 1e7]:  repair inside range? "
      f"{1.0 <= ncorr(g_rep) <= 1e7}")
print(f"  gamma = 2.0 (the framework's original pin) -> N_corr = {ncorr(2.0):.4g}")

# ------------------------- R6: does the SCALING survive the degeneracy?
hdr("R6 -- the identifiable combination gamma/rho_crit: what V-exponent does the data want?")
print("  per-galaxy fit of the single identifiable slope s = gamma/rho_crit (linear C = s*rho),")
print("  then regress ln s on ln V_flat.  Framework: gamma universal & rho_c ~ V^2 => s ~ V^-2.")
sl, lv, lm = [], [], []
for i, r in enumerate(rows):
    sg = np.logspace(-8, 6, 561)
    Vp = np.sqrt(np.clip(r["R"]*r["gbar"], 0, None)[None, :] / (sg[:, None]*r["rho"][None, :]))
    c = np.sum(((r["Vobs"][None, :] - Vp)/r["eV"][None, :])**2, axis=1)
    j = int(np.argmin(c))
    if j in (0, len(sg)-1):
        continue
    sl.append(sg[j]); lv.append(np.log10(r["Vflat"])); lm.append(np.log10(r["Mtot"]))
sl = np.log10(np.array(sl)); lv = np.array(lv); lm = np.array(lm)
X = np.vstack([np.ones_like(lv), lv]).T
coef, *_ = np.linalg.lstsq(X, sl, rcond=None)
res = sl - X @ coef
sig = np.sqrt(np.sum(res**2)/(len(sl)-2)) * np.sqrt(np.linalg.inv(X.T@X)[1, 1])
print(f"  N galaxies with an interior solution: {len(sl)}")
print(f"  d log10 s / d log10 V_flat = {coef[1]:+.4f} +/- {sig:.4f}")
print(f"  framework predicts -2 :  deviation {(coef[1]+2)/sig:+.2f} sigma")
print(f"  MOND-side  predicts +2 :  deviation {(coef[1]-2)/sig:+.2f} sigma")
print(f"  scatter of log10 s about the fit: {np.std(res):.3f} dex")
np.save(os.path.join(HERE, "parameter_identifiability_slopes.npy"),
        np.vstack([sl, lv, lm]))          # rows: log10 s, log10 Vflat, log10 Mtot
print("\nDONE")
