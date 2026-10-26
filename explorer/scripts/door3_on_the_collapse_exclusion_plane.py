"""Door #3 (Gamma = 2 D k^2, Planck diffusion) against the collapse-model exclusion instruments.

Topic: door3-diffusion-on-the-csl-exclusion-plane.md (maintainer 2026-10-26).

Two models:
  (L) literal door #3 (09-27 reading B): each particle's position random-walks independently,
      <dx^2> = 2 D t per axis; Lindblad L = k-hat (momentum-basis dephasing).  No length scale.
  (C) correlated extension: displacement field u(x,t) shared by everything within a correlation
      length ell (the analogue of CSL's r_C).  ell -> infinity is a global translation (unobservable).

Retrieved numbers (verbatim, see finding for locators):
  Carlesso+2022 Nat Phys 18, 243: P_CSL = 3 hbar^2 lam m / (4 m0^2 rC^2); bulk heating residual
     P/m ~ 10 pW/kg -> lam < 3.3e-11 /s at rC=1e-7 m; Gran Sasso X-ray lam < 5.2e-13 /s;
     LISA Pathfinder lam < 3.8e-9; cantilever 2.0e-10; cold atoms 5.1e-8; Neptune 6.6e-11.
  Borexino PRL 108, 051302 (arXiv 1110.3230): 11C production ~27 counts/(day 100 ton) from muons.
  Amelino-Camelia 1999 Nature 398, 216: random-walk ASD S(f) = f^-1 sqrt(L_QG c); Caltech 40-m
     3e-19 m/sqrt(Hz) near 450 Hz -> L_QG <= 1e-40 m.
Recalled (flagged): aLIGO O3 DARM ~2e-20 m/sqrt(Hz) near 150 Hz (Buikema+2020 Fig. 2; axis floor 1e-20).
"""
import numpy as np

hbar, c, G = 1.054571817e-34, 2.99792458e8, 6.67430e-11
eV, MeV = 1.602176634e-19, 1.602176634e-13
m_n, m_e, amu = 1.67492750e-27, 9.1093837e-31, 1.66053907e-27
m0 = 1.67262192e-27  # nucleon mass in CSL convention
NA, day = 6.02214076e23, 86400.0
lPl = np.sqrt(hbar * G / c**3)
D_Pl = c * lPl
print(f"D_Pl = c l_Pl = {D_Pl:.3e} m^2/s")

def hw_MeV(A):  # shell-model oscillator quantum, same rule as the 09-27 script
    return 41.0 * A ** (-1 / 3)

def nucleon_heat(A, D):  # (B) heating D<lap V>, V = m w^2 r^2/2 -> lap V = 3 m w^2
    w = hw_MeV(A) * MeV / hbar
    return 3 * D * m_n * w**2  # J/s per nucleon

# ---------------------------------------------------------------- 1. heating-equivalent CSL line
print("\n[1] Heating-equivalent lambda: CSL with the same per-nucleon heating as literal door #3")
print("    P_CSL per nucleon = 3 hbar^2 lam / (4 m0 rC^2)  ->  lam_eq = 4 m0 rC^2 P / (3 hbar^2)  (slope +2)")
csl_bounds = {"Gran Sasso X-ray": 5.2e-13, "bulk heating 10 pW/kg": 3.3e-11, "Neptune heat": 6.6e-11,
              "cantilever": 2.0e-10, "LISA Pathfinder": 3.8e-9, "cold atoms": 5.1e-8}
for A in (12, 56, 128):
    P = nucleon_heat(A, D_Pl)
    lam_eq = 4 * m0 * (1e-7) ** 2 * P / (3 * hbar**2)
    print(f"    A={A:3d}: P = {P/eV:.2e} eV/s/nucleon -> lam_eq(rC=1e-7 m) = {lam_eq:.2e} /s")
P128 = nucleon_heat(128, D_Pl)
lam_eq128 = 4 * m0 * 1e-14 * P128 / (3 * hbar**2)
print(f"    consistency: bulk-heating lam bound / lam_eq(A=128) = D/D_Pl < {3.3e-11/lam_eq128:.1e}")
P_kg_TeO2 = (1 / amu) * P128  # ~nucleons per kg times per-nucleon heating
print(f"    direct: TeO2 ~{P_kg_TeO2:.2e} W/kg at D_Pl vs 10 pW/kg -> D/D_Pl < {1e-11/P_kg_TeO2:.1e}")
print("    (valid only for heating-class experiments; X-ray emission needs accelerated free charges,")
print("     and literal door #3 conserves a free particle's momentum: no bremsstrahlung channel)")

# ---------------------------------------------------------------- 2. nuclear excitation, Borexino
print("\n[2] Underground nuclear excitation: 12C -> 11C + n against Borexino's 11C rate")
A = 12
b2 = hbar / (m_n * hw_MeV(A) * MeV / hbar)  # oscillator length^2
k2_sum = (4 * 1.5 + 8 * 2.5) / b2           # sum over nucleons of <k^2> (0s^4 0p^8)
r_rms2 = b2 * (4 * 1.5 + 8 * 2.5) / A
f_unblocked = 0.5                            # Pauli blocking of 0p->0s, spurious c.m.: O(1), flagged
Gam_exc_Pl = 2 * D_Pl * k2_sum * f_unblocked
E_mean = A * nucleon_heat(A, D_Pl) / Gam_exc_Pl / MeV
print(f"    b = {np.sqrt(b2)*1e15:.2f} fm, r_rms = {np.sqrt(r_rms2)*1e15:.2f} fm, sum<k^2> = {k2_sum:.2e} /m^2")
print(f"    excitation rate per 12C at D_Pl = {Gam_exc_Pl:.2e} /s, mean deposit ~{E_mean:.0f} MeV"
      " (1 hbar w region, above S_n = 18.7 MeV in part)")
N_C = 1e8 / (9 * 12.011 + 12 * 1.008) * 9 * NA  # carbon nuclei in 100 t pseudocumene C9H12
R11 = 27 / day                                    # 11C counts/s/100 t, all attributed to muons
for f_n in (0.1, 0.3, 0.5):
    xb = R11 / N_C / (Gam_exc_Pl * f_n)
    print(f"    branching to n f_n={f_n}: D/D_Pl < {xb:.1e}")
x_N = R11 / N_C / (Gam_exc_Pl * 0.3)
print(f"    N_C(100 t) = {N_C:.2e}; per-nucleus 11C rate < {R11/N_C:.1e} /s; adopted x_N = {x_N:.1e}")
print(f"    vs Earth-heat nucleon bound 2.0e-30: {2.0e-30/x_N:.0e} times tighter")

# ---------------------------------------------------------------- 3. CSL-plane instruments, literal door #3
print("\n[3] Literal door #3 on the CSL-plane instruments: c.o.m. of N independent particles diffuses at D/N")
def D_from_asd(x, f):  # one-sided ASD of a random walk: sqrt(G_x) = sqrt(D)/(pi f)
    return (np.pi * f * x) ** 2
D_40m = D_from_asd(3e-19, 450)
D_O3 = D_from_asd(2e-20, 150)
print(f"    40-m (3e-19 m/rtHz @450 Hz): D_lim = {D_40m:.1e} m^2/s = {D_40m/D_Pl:.1e} D_Pl")
print(f"    O3   (2e-20 m/rtHz @150 Hz, recall): D_lim = {D_O3:.1e} m^2/s = {D_O3/D_Pl:.1e} D_Pl")
LC_AC = (3e-19 * 450) ** 2 / c
print(f"    check vs Amelino-Camelia eq.4 convention: L_QG <= {LC_AC:.1e} m (paper: 1e-40)")
for name, M, Dlim in (("LIGO mirror 40 kg", 40, D_O3), ("LISA PF 1.93 kg", 1.93, None), ("cantilever sphere 100 ng", 1e-10, None)):
    N = M / amu
    s = f"    {name}: N = {N:.1e}, D/N at D_Pl = {D_Pl/N:.1e} m^2/s"
    if Dlim: s += f"  (needs {Dlim:.0e}: short by {Dlim/(D_Pl/N):.0e})"
    print(s)
# molecule interferometry: grating fringe K washes out at (D/N) K^2
K = 2 * np.pi / 266e-9; N = 25000; T = 1e-2
print(f"    25 kDa KDTL, d=266 nm: washout rate (D_Pl/N) K^2 = {D_Pl/N*K**2:.1e} /s, needs >~1/T={1/T:.0e}"
      f" -> D/D_Pl < {N/(K**2*T)/D_Pl:.0e} (no bound)")

# ---------------------------------------------------------------- 4. correlated extension (D, ell) plane
print("\n[4] Correlated door #3: plane (D, ell).  Relative displacement over separation r suppressed by")
print("    s(r, ell) = 1 - exp(-r^2/(4 ell^2))  (~ r^2/4ell^2 for ell >> r)")
def s(r, ell): return -np.expm1(-(r / ell) ** 2 / 4)
r_N = np.sqrt(r_rms2)
L_arm = 4000.0
D_N = x_N * D_Pl
print(f"    nuclear bound D s(r_N) < {D_N:.1e} m^2/s ; LIGO D 4 s(L) / ... sees D*s(L,ell) > {D_O3/4:.1e}")
def ell_min_nuclear(D):  # smallest ell with D s(r_N, ell) <= D_N
    if D <= D_N: return 0.0
    return r_N / np.sqrt(-4 * np.log1p(-D_N / D))
def ell_max_ligo(D, Dlim=D_O3):  # largest ell at which 4 D s(L, ell) >= Dlim
    if 4 * D < Dlim: return 0.0
    return L_arm / np.sqrt(-4 * np.log1p(-Dlim / (4 * D)))
for x in (1.0, 1e-4, 1e-6, 1e-8):
    D = x * D_Pl
    lo, hi = ell_min_nuclear(D), ell_max_ligo(D)
    hi40 = 40.0 / np.sqrt(-4 * np.log1p(-D_40m / (4 * D))) if 4 * D > D_40m else 0.0
    print(f"    D = {x:.0e} D_Pl: nuclear needs ell > {lo:.1e} m; O3 excludes ell < {hi:.1e} m"
          f" (40-m: < {hi40:.1e} m) -> survives ell > {max(lo, hi):.1e} m")
band = (L_arm / r_N) ** 2 * D_N / (D_O3 / 4)
print(f"    band of D/ell^2 that O3 excludes but nuclei allow: width x{band:.1e} (exists iff > 1)")
# the v^2 law: heating per unit mass ~ D v_int^2 / ell^2 for ell >> structure
for name, v in (("nucleon (v ~ hbar/(m b))", hbar / (m_n * np.sqrt(b2))), ("H electron (alpha c)", c / 137.036),
                ("lattice (c_s 5 km/s)", 5e3)):
    print(f"    {name}: v = {v:.1e} m/s -> P/m ~ D v^2/ell^2 relative weight {v**2:.1e}")
ell_g = 3.8e8
print(f"    D_Pl at ell = Earth-Moon {ell_g:.1e} m: LLR needs D>~3e-16 m^2/s; local O3 sees "
      f"4 D s(L) = {4*D_Pl*s(L_arm, ell_g):.1e} < {D_O3:.1e} -> invisible")

# ---------------------------------------------------------------- 5. ell >> arm: a random-walk strain field
print("\n[5] ell >> baseline: relative displacement = L x strain, strain random-walks with D_eps ~ D/ell^2")
print("    strain ASD sqrt(D_eps)/(pi f) -> figure of merit f*h(f); bound D/ell^2 < (pi f h)^2  [h values recalled]")
for name, f, h in (("aLIGO O3 (2e-20 m / 4 km)", 150, 2e-20 / 4000), ("PTA (h_c 2e-15 @ 1/yr)", 3.17e-8,
                   np.sqrt((2e-15) ** 2 / 3.17e-8)), ("LISA design (~1e-20 /rtHz @ 3 mHz)", 3e-3, 1e-20)):
    De = (np.pi * f * h) ** 2
    print(f"    {name:36s}: f*h = {f*h:.1e}; D/ell^2 < {De:.1e} /s -> at D_Pl, ell > {np.sqrt(D_Pl/De):.1e} m")
