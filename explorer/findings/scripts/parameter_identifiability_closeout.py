#!/usr/bin/env python3
r"""
CLOSE-OUT of the three loose ends in parameter_identifiability_fisher.py:
  (a) the profiled gamma hit the grid edge (10^1.5) at BOTH audited A values;
  (b) the profile-likelihood 1-sigma interval was reported on a model rejected
      at chi2/N = 192, where dchi2 = 1 has no interpretation -- replace it with
      the honest statement (distance to the data-preferred A);
  (c) the global optimum sits at x >> 1, where C = tanh(gamma ln x) is nearly
      CONSTANT.  Test that directly against a 1-parameter constant boost.
  (d) R6 estimator-dependence: memory records three different rho_crit
      V-exponents from three unnamed estimators (-0.15, +1.52, and today's).
      Run a second estimator here so the spread is quantified in one place.

Nuisances FIXED exactly as in the parent script (Ups 0.5/0.7, Vgas, Bershady h,
Q<=2, inc>=30).  Nothing marginalised.
Output: parameter_identifiability_closeout_output.txt
"""
import os, sys
import numpy as np
HERE = os.path.dirname(os.path.abspath(__file__)); sys.path.insert(0, HERE)
import l2_sparc_core as K

A_CAL, A_STATED, GAMMA0 = 0.029, 4.6e-5, 0.489
KPC3 = 1.0e9
def hdr(s): print("\n" + "=" * 78 + "\n" + s + "\n" + "=" * 78, flush=True)

gals = K.load_sparc(); rows = []
for gid, d in gals.items():
    p = d["props"]; Rd = max(p["Rdisk"], 0.1); h = 0.196 * Rd**0.633
    g = K.make_grid(d["R"][-1]); rho, Mc = K.build_density(g, d, h, 0.5, 0.7, "vgas")
    rho_mid = np.interp(d["R"], g.Rc, rho[:, 0]) / KPC3
    vbar, vbar2 = K.vbar_sparc(d, 0.5, 0.7)
    gbar = np.where(vbar2 > 0, vbar2 / d["R"], np.nan)
    Vflat = p["Vflat"] if p["Vflat"] > 0 else float(np.mean(d["Vobs"][-3:]))
    ok = (vbar2 > 0) & (d["Vobs"] > 0) & (d["eVobs"] > 0) & (rho_mid > 0)
    if ok.sum() < 3 or Vflat <= 0: continue
    rows.append(dict(gid=gid, R=d["R"][ok], Vobs=d["Vobs"][ok], eV=d["eVobs"][ok],
                     rho=rho_mid[ok], gbar=gbar[ok], Vflat=Vflat))
RHO  = np.concatenate([r["rho"] for r in rows]); VOBS = np.concatenate([r["Vobs"] for r in rows])
EV   = np.concatenate([r["eV"] for r in rows]);  RR   = np.concatenate([r["R"] for r in rows])
GBAR = np.concatenate([r["gbar"] for r in rows])
VF   = np.concatenate([np.full(len(r["R"]), r["Vflat"]) for r in rows])
NPT  = len(RHO); NG = len(rows)
print(f"galaxies {NG}   points {NPT}")

def Cof(gamma, A): return np.tanh(gamma * np.log1p(RHO / (A * VF**2)))
def chi2(gamma, A):
    C = Cof(gamma, A)
    V = np.sqrt(np.clip(RR * GBAR / C, 0, None))
    return float(np.sum(((VOBS - V) / EV)**2))

# ---------------------------------------------------------------- (a) wide grid
hdr("(a) profile with a gamma grid wide enough that nothing sits on an edge")
ggrid = np.logspace(-6, 6, 241)
Agrid = np.logspace(-14, 2, 161)
prof = np.empty(len(Agrid)); gh = np.empty(len(Agrid))
for i, A in enumerate(Agrid):
    c = np.array([chi2(g, A) for g in ggrid]); j = int(np.argmin(c))
    prof[i] = c[j]; gh[i] = ggrid[j]
i0 = int(np.argmin(prof))
Ab, gb = Agrid[i0], gh[i0]
print(f"  gamma grid [{ggrid[0]:.1e}, {ggrid[-1]:.1e}], A grid [{Agrid[0]:.1e}, {Agrid[-1]:.1e}]")
print(f"  global min chi2 = {prof[i0]:.6g}  (chi2/N = {prof[i0]/NPT:.4g})  at A = {Ab:.4e}, gamma = {gb:.4e}")
print(f"  A on grid edge? {i0 in (0, len(Agrid)-1)}   gamma on grid edge? "
      f"{gb in (ggrid[0], ggrid[-1])}")
for tag, A in (("A_cal   = 0.029 ", A_CAL), ("A_stated= 4.6e-5", A_STATED)):
    c = np.array([chi2(g, A) for g in ggrid]); j = int(np.argmin(c))
    print(f"  {tag}: chi2 = {c[j]:.6g}  (chi2/N {c[j]/NPT:.5g})  at gamma_hat = {ggrid[j]:.4e}"
          f"   edge? {j in (0, len(ggrid)-1)}")

# ------------------------------------------- (b) what the data actually prefers
hdr("(b) the honest distance statement -- the model is rejected everywhere, so quote FACTORS")
print(f"  data-preferred A          : {Ab:.4e}")
print(f"  site's calibrated A       : {A_CAL:.4e}   -> factor {A_CAL/Ab:.4g}x above data-preferred")
print(f"  site's stated-formula A   : {A_STATED:.4e}   -> factor {A_STATED/Ab:.4g}x above data-preferred")
print(f"  the discrepancy the site BADGES (calibrated vs stated): "
      f"factor {A_CAL/A_STATED:.4g}x")
print(f"  ratio of the two discrepancies: {(A_CAL/Ab)/(A_CAL/A_STATED):.4g}x")
print(f"  best-fit chi2/N = {prof[i0]/NPT:.4g}  -> the model is rejected at the optimum,")
print( "  so no dchi2=1 interval on A is interpretable; the factor above is the statement.")

# ------------------------------------ (c) is the optimum a CONSTANT boost?
hdr("(c) at the optimum, how much does C actually vary?  vs a 1-parameter constant boost")
Cb = Cof(gb, Ab)
xb = RHO / (Ab * VF**2)
print(f"  x at optimum: median {np.median(xb):.4g}  p1 {np.percentile(xb,1):.4g}"
      f"  p99 {np.percentile(xb,99):.4g}")
print(f"  C at optimum: min {Cb.min():.4f}  median {np.median(Cb):.4f}  max {Cb.max():.4f}"
      f"   -> dynamic range {Cb.max()/Cb.min():.4f}x")
print(f"  boost 1/C   : min {1/Cb.max():.4f}  median {1/np.median(Cb):.4f}  max {1/Cb.min():.4f}")
Bg = np.linspace(1.0, 6.0, 5001)
cB = np.array([np.sum(((VOBS - np.sqrt(np.clip(RR*GBAR*B, 0, None)))/EV)**2) for B in Bg])
jB = int(np.argmin(cB))
print(f"  1-parameter constant boost: best B = {Bg[jB]:.4f}  chi2 = {cB[jB]:.6g}"
      f"  (chi2/N {cB[jB]/NPT:.5g})")
print(f"  2-parameter compander     : chi2 = {prof[i0]:.6g}  (chi2/N {prof[i0]/NPT:.5g})")
dchi = cB[jB] - prof[i0]
print(f"  dchi2 (constant - compander) = {dchi:+.4g} for 1 extra parameter;"
      f"  dBIC = {dchi - np.log(NPT):+.4g} (N={NPT})  /  dBIC_Neff = {dchi - np.log(NG):+.4g} (N_eff={NG})")
cN = np.sum(((VOBS - np.sqrt(np.clip(RR*GBAR, 0, None)))/EV)**2)
print(f"  0-parameter Newtonian (B=1): chi2 = {cN:.6g}  (chi2/N {cN/NPT:.5g})")

# -------------------------------- (d) R6 with a second, different estimator
hdr("(d) R6 robustness -- rho_crit V-exponent from a SECOND estimator")
print("  estimator 2: per-galaxy rho_c with the FULL tanh, gamma FIXED at 0.489, division coupling")
rc_grid = np.logspace(-14, 4, 721)
lrc, lv, keep = [], [], 0
for r in rows:
    x = r["rho"][None, :] / rc_grid[:, None]
    C = np.tanh(GAMMA0 * np.log1p(x))
    V = np.sqrt(np.clip(r["R"]*r["gbar"], 0, None)[None, :] / C)
    c = np.sum(((r["Vobs"][None, :] - V)/r["eV"][None, :])**2, axis=1)
    j = int(np.argmin(c))
    if j in (0, len(rc_grid)-1): continue
    keep += 1; lrc.append(np.log10(rc_grid[j])); lv.append(np.log10(r["Vflat"]))
lrc = np.array(lrc); lv = np.array(lv)
X = np.vstack([np.ones_like(lv), lv]).T
coef, *_ = np.linalg.lstsq(X, lrc, rcond=None); res = lrc - X @ coef
sig = np.sqrt(np.sum(res**2)/(len(lrc)-2)) * np.sqrt(np.linalg.inv(X.T@X)[1, 1])
print(f"  interior solutions: {keep}/{NG}")
print(f"  d log10 rho_crit / d log10 V_flat = {coef[1]:+.4f} +/- {sig:.4f}   scatter {np.std(res):.3f} dex")
print(f"  framework's V^+2 : deviation {(coef[1]-2)/sig:+.2f} sigma")
print(f"  MOND-side  V^-2  : deviation {(coef[1]+2)/sig:+.2f} sigma")
print("  estimator 1 (parent script, linear-C slope s = gamma/rho_c):")
print("     d log10 s / d log10 V = +1.008 +/- 0.253  =>  rho_c ~ V^-1.008 at fixed gamma")
print("  archive estimators: 08-27 rho_c ~ V^(-0.15 +/- 0.18);  plotter profile V^(+1.52)")
np.save(os.path.join(HERE, "parameter_identifiability_closeout.npy"),
        np.vstack([Agrid, prof, gh]))   # rows: Agrid, profile chi2 (wide gamma grid), gamma_hat
print("\nDONE")
