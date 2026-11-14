"""B = M_tot(<r)/M_b(<r) = 1/f_b(<r) from published hydrostatic X-ray baryon fractions, against the cap 6.39.
Inputs are quoted from the papers by a fetch agent on 2026-11-14 (see finding); 'summary'-grade inputs are flagged.
No light rule enters: hot gas in hydrostatic balance traces the potential that moves matter."""
import numpy as np
CAP = 6.39
def B(fb, sfb): return 1/fb, sfb/fb**2
def z(Bv, sB): return (Bv - CAP)/sB
rows = []
# X-COP, Eckert+2019 Sect 4.1 (verbatim): median f_gas,500 = 0.141 +- 0.005 (HSE); Eq.4 f*,500 = 0.015 +- 0.005; h=0.7
fb = 0.141 + 0.015; s = np.hypot(0.005, 0.005)
rows.append(("X-COP 13 massive clusters, r500, HSE masses (median)", fb, s))
rows.append(("  same, M_HSE/M_tot = 0.94+-0.04 applied [summary-grade]", fb*0.94, fb*0.94*np.hypot(s/fb, 0.04/0.94)))
rows.append(("  same, r200: f_gas 0.149 (+0.006/-0.008) + f* 0.015", 0.149 + 0.015, np.hypot(0.007, 0.005)))
# Gonzalez+2013 Table 2 [summary-grade]: individual low-mass systems, total f_bary (gas + stars incl. ICL)
for n, f, e in (("A2955 (0.99e14)", 0.097, 0.011), ("AS0296 (1.45e14)", 0.095, 0.013), ("A2401 (0.95e14)", 0.118, 0.014), ("A2984 (0.95e14)", 0.152, 0.015)):
    rows.append((f"Gonzalez+13 {n}, r500, T_X-M masses [summary-grade]", f, e))
rows.append(("Gonzalez+13 weighted mean M500>2e14 (WMAP7) [summary-grade]", 0.136, 0.005))
# Sun+2009 fits [summary-grade], gas to r500 measured for 11/43, extrapolated for 12 more; no coefficient errors
for T in (1.0, 2.0, 3.0):
    fg = 0.0708*T**0.220
    for lab, fs in (("Lin-type stars", 0.0263*T**-0.481), ("Gonzalez-type stars (incl. ICL)", 0.0864*T**-1.056)):
        rows.append((f"Sun+09 groups T={T:.0f} keV r500, {lab} (fit, no error; 15% assumed)", fg + fs, 0.15*(fg + fs)))
# Lovisari+2015 Table 2 (agent arithmetic): f_gas,500 mean 0.074 for 20 groups; stars not measured -> both bracket values at T~1.5
for lab, fs in (("Lin-type", 0.0263*1.5**-0.481), ("Gonzalez-type", 0.0864*1.5**-1.056)):
    rows.append((f"Lovisari+15 20 groups r500 mean, {lab} stars at 1.5 keV (15% assumed)", 0.074 + fs, 0.15*(0.074 + fs)))
print(f"cap = {CAP}  (Omega_m/Omega_b; f_b floor 1/cap = {1/CAP:.4f})")
print(f"{'system':88s} {'f_b':>6s} {'B':>6s} {'+-':>5s} {'z vs cap':>8s} {'B(h=.674)':>9s}")
for n, f, s in rows:
    b, sb = B(f, s)
    hcorr = (0.7/0.674)**1.5       # f_gas ~ h^-1.5; applied to the whole f_b as an upper bound on the shift
    print(f"{n:88s} {f:6.3f} {b:6.2f} {sb:5.2f} {z(b, sb):+8.1f} {1/(f*hcorr):9.2f}")
print("\nExtra baryons (fraction of detected) needed to bring B down to the cap:  B/cap - 1")
for n, f, s in rows:
    print(f"  {n[:60]:60s} {max(0, 1/f/CAP - 1):.2f}")

# ---------------- POST-HOC (chosen after reading Eckert+2022 Table 4; not in the PREREG) ----------------
print("\nPOST-HOC: cluster cores at R2500 (well inside detected emission). Eckert+2022 Table 4 (percent, HSE, gas+BCG+satellites, ICL excluded, h=0.7)")
E22 = {"A644": (7.7, 0.1, 1.2, 0.4), "A1795": (9.6, 0.1, 1.7, 0.6), "A2029": (11.1, 0.1, 2.8, 0.9), "A2142": (12.0, 0.1, 2.3, 0.8), "A2319": (9.2, 0.1, 2.0, 0.7)}
print(f"{'cluster':8s} {'f_b':>6s} {'B':>6s} {'+-':>5s} {'z':>5s} | stress: h=.674 (f_gas x1.058) + masses 10% high (f_gas x1.111) + stars x2 -> f_b, B")
fbs = []
for n, (fg, sg, fs, ss) in E22.items():
    f = (fg + fs)/100; s = np.hypot(sg, ss)/100; b, sb = B(f, s); fbs.append(f)
    fst = fg/100*1.058*1.111 + 2*fs/100
    print(f"{n:8s} {f:6.3f} {b:6.2f} {sb:5.2f} {z(b, sb):+5.1f} | {fst:.3f}  B={1/fst:5.2f}  extra baryons needed at face value {1/f/CAP-1:.2f}")
print(f"mean of five f_b,2500 = {np.mean(fbs):.3f} -> B = {1/np.mean(fbs):.2f}")
# Allen+2008: 42 relaxed kT>5 keV clusters, f_gas(r2500) = 0.1104 +- 0.0016 (stat), 10-15% abs normalisation systematic; s = f*/f_gas = 0.16 +- 0.05
fg, s0 = 0.1104, 0.16
f = fg*(1 + s0); sstat = np.hypot(0.0016*(1 + s0), fg*0.05); ssys = 0.125*fg*(1 + s0)
b = 1/f
print(f"Allen+08 42 relaxed: f_b(r2500) = {f:.3f} -> B = {b:.2f}; stat+s err on B {sstat/f**2:.2f} (z {z(b, sstat/f**2):+.1f}); with 12.5% abs-normalisation sys {np.hypot(sstat, ssys)/f**2:.2f} (z {z(b, np.hypot(sstat, ssys)/f**2):+.1f})")
print(f"  stress (h=.674, f_gas x1.125 normalisation, s=0.32): f_b = {fg*1.058*1.125*(1+0.32):.3f} -> B = {1/(fg*1.058*1.125*1.32):.2f}")
