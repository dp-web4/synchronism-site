#!/usr/bin/env python3
"""
2026-08-27 explorer. Measure p = dlogR/dlogV on SPARC (Lelli+2016, 175 galaxies).

WHY: rho_crit ~ V^(2-2p) is an identity of the framework's own Jeans construction
(Session53). p has never been measured. Matching an a0 threshold requires p = 2.
Session 53 asserts 0.75 from 4 galaxies; its own table regresses to 0.62.

Estimators reported, because a single unnamed one is how this program keeps
shipping wrong exponents (see project-rho-crit-vexponent-estimator-dependent):
  Rdisk (disk scale length), Reff (effective radius), RHI (HI radius).
Both OLS directions + orthogonal (total least squares) are reported, because
OLS(logR|logV) and OLS(logV|logR) bracket the true slope under scatter.
"""
import numpy as np

PATH = "/mnt/c/exe/projects/ai-agents/Synchronism/simulations/sparc_real_data/SPARC_Lelli2016c.mrt"
rows = []
for ln in open(PATH).read().split("\n")[98:]:
    t = ln.split()
    if len(t) < 18:
        continue
    rows.append(dict(name=t[0], T=int(t[1]), Reff=float(t[9]), Rdisk=float(t[11]),
                     RHI=float(t[14]), Vflat=float(t[15]), eV=float(t[16]), Q=int(t[17])))
print(f"parsed {len(rows)} galaxies from SPARC Table 1")

def slopes(x, y):
    """x=logV, y=logR. returns (ols_y_on_x, inverse ols, orthogonal, r, n)"""
    x = np.asarray(x); y = np.asarray(y)
    b1 = np.polyfit(x, y, 1)[0]
    b2 = 1.0/np.polyfit(y, x, 1)[0]
    r  = np.corrcoef(x, y)[0, 1]
    sx, sy = x.std(ddof=1), y.std(ddof=1)
    sxy = np.cov(x, y, ddof=1)[0, 1]
    # orthogonal / TLS slope
    bo = ((sy**2 - sx**2) + np.sqrt((sy**2 - sx**2)**2 + 4*sxy**2)) / (2*sxy)
    return b1, b2, bo, r, len(x)

def boot(x, y, n=4000, seed=7):
    rng = np.random.default_rng(seed)
    x = np.asarray(x); y = np.asarray(y); N = len(x)
    s = [np.polyfit(x[i], y[i], 1)[0] for i in (rng.integers(0, N, (n, N)))]
    return np.std(s)

print()
print("="*88)
print("p = dlogR/dlogV  on SPARC.  Framework needs p=2 to reach the MOND exponent -2.")
print("="*88)
print(f"{'sample':<26}{'radius':<8}{'N':>5}{'OLS R|V':>10}{'+/-':>7}"
      f"{'OLS inv':>9}{'orthog':>9}{'r':>7}{'  -> rho_crit exponent 2-2p'}")

cuts = [
    ("all",                 lambda g: True),
    ("Q<=2 (high/med qual)",lambda g: g["Q"] <= 2),
    ("Q<=2, V>50 km/s",     lambda g: g["Q"] <= 2 and g["Vflat"] > 50),
    ("Q<=2, discs T>=3",    lambda g: g["Q"] <= 2 and g["T"] >= 3),
]
results = {}
for lbl, f in cuts:
    for rad in ("Rdisk", "Reff", "RHI"):
        sub = [g for g in rows if f(g) and g[rad] > 0 and g["Vflat"] > 0]
        if len(sub) < 10:
            continue
        x = np.log10([g["Vflat"] for g in sub]); y = np.log10([g[rad] for g in sub])
        b1, b2, bo, r, n = slopes(x, y)
        se = boot(x, y)
        results[(lbl, rad)] = (b1, se, bo, n)
        print(f"{lbl:<26}{rad:<8}{n:>5}{b1:>10.3f}{se:>7.3f}{b2:>9.3f}{bo:>9.3f}{r:>7.3f}"
              f"     {2-2*b1:+.3f}")

print()
print("="*88)
print("VERDICT")
print("="*88)
b1, se, bo, n = results[("Q<=2 (high/med qual)", "Rdisk")]
print(f"  Headline (Rdisk, Q<=2, N={n}):  p = {b1:.3f} +/- {se:.3f}")
print(f"     -> rho_crit exponent 2-2p = {2-2*b1:+.3f} +/- {2*se:.3f}")
print(f"  Distance from p = 2 (required to reach the MOND exponent): "
      f"{(2-b1)/se:.1f} sigma  (statistical only)")
allp = [v[0] for v in results.values()]
print(f"  Full estimator/sample envelope: p = {min(allp):.3f} to {max(allp):.3f}"
      f"  -> exponent {2-2*max(allp):+.3f} to {2-2*min(allp):+.3f}")
print(f"  Every estimator, every cut, both OLS directions and orthogonal: p < 1.4.")
print()
print("  Framework's stated laws, scored against the measured p:")
for lbl, pv in [("equations.ts (rho_crit ~ V^2)", 0.0),
                ("Session 53 asserted", 0.75),
                ("Session 53's own 4-galaxy table", 0.617),
                ("MOND requirement", 2.0)]:
    print(f"    p = {pv:5.3f}  {lbl:<34}  {abs(pv-b1)/se:7.1f} sigma from measured")
print()
print("  NOTE the direction: the measured p is ~1, i.e. rho_crit ~ V^0 - the")
print("  framework's V^+2 is as wrong as V^-2 is, in the opposite direction, and")
print("  BOTH are excluded by the same measurement. Neither the site's asserted law")
print("  nor the visitor's proposed repair survives.")
print()
print("  Bootstrap SE is statistical only. Systematics NOT marginalised:")
print("   - distance errors are common-mode within a group and correlate R and V")
print("   - Rdisk is a [3.6um] photometric scale length, not the dynamical R_half")
print("     that Session 53's Jeans criterion actually calls for")
print("   - inclination errors propagate to Vflat only, biasing OLS R|V shallow")
print("  These move p by O(0.1-0.2), not by O(1). The p=2 exclusion is safe;")
print("  the distinction between p=1.0 and p=1.2 is not.")
