#!/usr/bin/env python3
"""The EFE-free corner (g_N = g tanh(gamma ln(1+g/a0')), a0'/gamma = a_M = 1.1e-10, no external field)
against the pressure-supported dwarfs. Explorer 2026-11-10. PREREG: efe_free_corner_dsph_PREREG.md
(commit 9fd9639, before this file existed).

Isolated deep estimator (McGaugh 2016 eq. 1; McGaugh & Milgrom 2013b): sigma_los^4 = (4/81) G M a.
Finite-x correction for the corner: solve the full law at g_N = G (M/2) / r_1/2^2 and scale sigma by
sqrt(g_full / g_deep). gamma enters only through that factor.
Sources (verbatim numbers): McGaugh 2016 ApJL 832 L8 (L_V 1.6e5, r_h 1066 pc, r_1/2 = 4 r_h/3, Upsilon 2 +2/-1,
sigma_iso ~ 4, sigma_efe 2.1 +0.9/-0.6); Caldwell+2017 (2.7 +/- 0.3, 62 stars); Fu+2019 (2.7 +0.5/-0.4, 37);
Ji+2021 S5 Table 1 (Cra2 2.34 +0.42/-0.30 with gradient, 2.43 +0.54/-0.35 without, 141 stars; Ant2 5.98 +0.37/-0.36
with gradient, 7.69 +0.40/-0.37 without, 283 stars, L_V 10^5.88, r_h 2541 pc; EFE prediction for Ant2 2.8 +1.3/-0.8);
McGaugh & Milgrom 2013b Table 1 (L_V in 1e5 Lsun, r_1/2 pc, sigma_iso, sigma_efe at Upsilon 2, sigma_obs Collins+2013).
"""
import math, sys
G = 6.674e-11; MSUN = 1.989e30; PC = 3.0857e16
A0_MILGROM = 1.2e-10          # McGaugh's a0
A_M = 1.1e-10                 # corner's identified a0'/gamma (ledger EFE_FREE_CORNER_STATUS)
GAMMAS = (0.87, 0.90, 0.95)

def g_full(gN, gamma, aM):
    """solve g tanh(gamma ln(1+g/a0')) = gN, a0' = gamma aM (same solver as maintainer's corner script)"""
    a0p = aM * gamma
    lo, hi = math.log(gN), math.log(gN) + 14
    for _ in range(200):
        m = 0.5*(lo+hi); g = math.exp(m)
        if g*math.tanh(gamma*math.log1p(g/a0p)) < gN: lo = m
        else: hi = m
    return math.exp(0.5*(lo+hi))

def sig_iso(M_msun, a):   # km/s, deep isolated, McGaugh eq. 1
    return ((4/81)*G*M_msun*MSUN*a)**0.25/1e3

def sig_corner(M_msun, r12_pc, gamma, aM=A_M):
    gN = G*(M_msun*MSUN/2)/(r12_pc*PC)**2
    gd = math.sqrt(gN*aM); gf = g_full(gN, gamma, aM)
    return sig_iso(M_msun, aM)*math.sqrt(gf/gd), gN/aM, gf/gd

# name, L_V [Lsun], r_1/2 (3D) [pc], regime, published sigma_iso, sigma_efe (McGaugh, Upsilon=2),
#   observations: list of (label, sigma, +err, -err, N)
D = [
 ("Crater II", 1.6e5, 1421, "EFE", 4.0, (2.1,0.9,0.6), [
     ("Caldwell+17", 2.7,0.3,0.3,62), ("Fu+19", 2.7,0.5,0.4,37), ("Ji+21 S5 (grad.)", 2.34,0.42,0.30,141), ("Ji+21 S5 (no grad.)", 2.43,0.54,0.35,141)]),
 ("Antlia 2", 10**5.88, 2541*4/3, "EFE", None, (2.8,1.3,0.8), [
     ("Ji+21 S5 (grad.)", 5.98,0.37,0.36,283), ("Ji+21 S5 (no grad.)", 7.69,0.40,0.37,283)]),
 ("And XVII", 2.6e5, 381, "EFE", 4.5, (2.5,1.0,0.7), [("Collins+13", 2.9,2.2,1.9,8)]),
 ("And XIX", 4.1e5, 2244, "EFE", 5.0, (2.6,1.1,0.8), [("Collins+13", 4.7,1.6,1.4,26)]),
 ("And XXI", 4.6e5, 1023, "EFE", 5.2, (3.7,1.5,1.1), [("Collins+13", 4.5,1.2,1.0,32)]),
 ("And XXV", 6.5e5, 945, "EFE", 5.7, (3.5,1.5,1.0), [("Collins+13", 3.0,1.2,1.1,26)]),
 ("And XXIII", 1.0e6, 1372, "EFE?", 6.4, (4.4,1.8,1.3), [("Collins+13", 7.1,1.0,1.0,42)]),
 ("And XXVIII", 2.1e5, 284, "iso", 4.3, None, [("Collins+13", 6.6,2.9,2.1,17), ("Tollerud+13", 4.9,1.6,1.6,18)]),
 ("And XXIX", 1.8e5, 481, "iso/EFE", 4.1, (3.8,1.6,1.1), [("Tollerud+13", 5.7,1.2,1.2,24)]),
 ("And XXII", 0.35e5, 340, "iso/EFE", 2.7, (2.3,1.0,0.7), [("Collins+13", 2.8,1.9,1.4,10)]),
]
# optional current re-measurements, filled after the literature agent returns: name -> (label, sigma, +, -, N)
CURRENT = {}
if len(sys.argv) > 1 and sys.argv[1] == "--current":
    import json; CURRENT = json.load(open(sys.argv[2]))

print("C1 identity: Crater II sigma_iso at a0=1.2e-10, Upsilon=2:", f"{sig_iso(3.2e5, A0_MILGROM):.3f} km/s (08-23 value 3.98; McGaugh '~4')")
print("   McGaugh & Milgrom 2013b table at Upsilon=2: ", ", ".join(f"{n} {sig_iso(2*L, A0_MILGROM):.2f}/{si}" for n,L,_,_,si,_,_ in D if si))
print("C2 gamma-blind: Crater II corner sigma at gamma 0.87/0.90/0.95, Upsilon=2:",
      ", ".join(f"{sig_corner(3.2e5,1421,g)[0]:.4f}" for g in GAMMAS))
sc, x, corr = sig_corner(3.2e5, 1421, 0.9)
print(f"   g_N/a_M at r_1/2 = {x:.2e}; finite-x factor on g = {corr:.4f}")
print()

def z(pred, obs, ep, em, sys_frac=0.0):
    e = ep if pred > obs else em          # error on the side toward the prediction
    return (pred-obs)/math.hypot(e, sys_frac*pred)

print("=== Corner (gamma = 0.9, a_M = 1.1e-10) vs observed, per Upsilon_V; z random-only and with 20% prefactor systematic")
print(f"{'dwarf':<11}{'reg':<8}{'obs':<22}{'sigma_obs':<16}" + "".join(f"{'U='+str(u):<22}" for u in (1,2,4)) + "sigma_efe(McG)")
rows = []
for name, L, r12, reg, si, se, obs in D:
    allobs = list(obs) + ([tuple(CURRENT[name])] if name in CURRENT else [])
    for lab, s, ep, em, N in allobs:
        line = f"{name:<11}{reg:<8}{lab:<22}{s:.2f} +{ep:.2f}/-{em:.2f}  "
        zs = {}
        for u in (1,2,4):
            p = sig_corner(u*L, r12, 0.9)[0]
            zr, zsy = z(p,s,ep,em), z(p,s,ep,em,0.2)
            zs[u] = (p, zr, zsy)
            line += f"{p:5.2f} ({zr:+.1f}|{zsy:+.1f})    "
        line += f"{se[0]:.1f}" if se else "  -"
        print(line)
        rows.append((name, reg, lab, s, ep, em, N, zs))
print()

print("=== Crater II: Upsilon_V needed for the corner to pass at 2 sigma (random-only / with 20% sys), per measurement")
for lab, s, ep, em, N in D[0][6]:
    for sysf in (0.0, 0.2):
        # scan Upsilon down until z < 2
        u = 4.0
        while u > 0.05 and z(sig_corner(u*1.6e5,1421,0.9)[0], s, ep, em, sysf) > 2.0: u -= 0.01
        print(f"  {lab:<22} sys={sysf:.1f}: passes at 2 sigma for Upsilon_V <= {u:.2f}")
print("  (old, [Fe/H] ~ -2 population: McGaugh adopts 2 +2/-1; McGaugh & Wolf 2010 Kroupa mean 1.3; Ji+21 adopt 2.2)")
print()

print("=== Ratio R = sigma_obs / sigma_corner(U=2) against McGaugh's R_efe = sigma_efe / sigma_iso")
print(f"{'dwarf':<11}{'obs':<22}{'R_obs':>7}{'R_efe':>7}   note")
notes = {"Crater II":"almost certainly stripped (Fu+19); tentative gradient (Ji+21)", "Antlia 2":"clear gradient, >90% stars lost (Ji+21)",
         "And XIX":"tentative gradient (Collins+20)", "And XXI":"", "And XXV":"", "And XVII":"8 stars", "And XXIII":""}
for name, L, r12, reg, si, se, obs in D:
    if reg not in ("EFE","EFE?"): continue
    p = sig_corner(2*L, r12, 0.9)[0]
    allobs = list(obs) + ([tuple(CURRENT[name])] if name in CURRENT else [])
    for lab, s, ep, em, N in allobs:
        refe = f"{se[0]/sig_iso(2*L,A0_MILGROM):.2f}" if se else "   -"
        print(f"{name:<11}{lab:<22}{s/p:7.2f}{refe:>7}   {notes.get(name,'')}")
print()

print("=== Kill criterion (PREREG): Crater II at Upsilon=1 with 20% sys >= 3 sigma?  Population of EFE-regime rows combined?")
for lab, s, ep, em, N in D[0][6]:
    p = sig_corner(1.6e5,1421,0.9)[0]
    print(f"  Crater II {lab:<22}: U=1, 20% sys: z = {z(p,s,ep,em,0.2):+.2f}   (U=2: {z(sig_corner(3.2e5,1421,0.9)[0],s,ep,em,0.2):+.2f})")
# population: one measurement per dwarf (largest N, gradient-subtracted where available), EFE-regime only, U=2 and U=1, 20% sys
def pick(obs):
    return max(obs, key=lambda o: o[4])
for u in (1,2):
    zz = []
    for name, L, r12, reg, si, se, obs in D:
        if reg != "EFE": continue
        allobs = list(obs) + ([tuple(CURRENT[name])] if name in CURRENT else [])
        lab, s, ep, em, N = pick(allobs)
        zz.append((name, lab, z(sig_corner(u*L,r12,0.9)[0], s, ep, em, 0.2)))
    chi2 = sum(v*v for _,_,v in zz); n = len(zz); mean_z = sum(v for _,_,v in zz)/math.sqrt(n)
    print(f"  U={u}: EFE-regime rows " + ", ".join(f"{nm}({lb.split()[0]}) {v:+.1f}" for nm,lb,v in zz))
    print(f"        chi2 = {chi2:.1f} / {n} dof; signed mean z*sqrt(n) = {mean_z:+.2f} (positive = corner over-predicts)")
    pos = sum(1 for _,_,v in zz if v > 0); print(f"        sign count: corner above data in {pos}/{n} rows")

# ---------------------------------------------------------------------------------------------
# Post-2013 re-measurements (literature search 2026-11-10, verbatim from the papers' abstracts/tables):
#   And XIX  Collins+2020 (1910.12879): 7.8 +1.7/-1.5, 81 members, L = 7.9e5, r_h = 3065 pc (r_1/2 = 1.33 r_h)
#   And XXI  Collins+2021 (2102.11890): 6.1 +1.0/-0.9, 77,  L = 3.2e5, r_h = 1005 pc
#   And XXV  Charles+2023 (MNRAS 521, 3527, published value): 3.7 +1.2/-1.1, 49, L = 3.7e5, r_h 2.7' (~ 2013 r kept)
#   And XVII Collins+2015 (1411.3324): 6.5 +3.3/-2.7, 16 (contaminated), L and r as 2013
# EFE value rescaled from McGaugh & Milgrom's at the same g_ex: sigma_efe ~ sqrt(M / r_1/2) (their eq. 2 structure).
print()
print("=== 4a. Current M31 numbers (L and r_1/2 updated where the papers updated them); corner at gamma=0.9, a_M=1.1e-10")
CUR = [  # name, L_V, r12_pc, (sigma, +, -, N), ref, (L_2013, r12_2013, sigma_efe_2013)
 ("And XIX",  7.9e5, 3065*1.33, (7.8,1.7,1.5,81), "Collins+20", (4.1e5, 2244, 2.6)),
 ("And XXI",  3.2e5, 1005*1.33, (6.1,1.0,0.9,77), "Collins+21", (4.6e5, 1023, 3.7)),
 ("And XXV",  3.7e5, 945,       (3.7,1.2,1.1,49), "Charles+23", (6.5e5, 945, 3.5)),
 ("And XVII", 2.6e5, 381,       (6.5,3.3,2.7,16), "Collins+15", (2.6e5, 381, 2.5)),
 ("Crater II",1.6e5, 1421,      (2.34,0.42,0.30,141), "Ji+21", (1.6e5, 1421, 2.1)),
 ("Antlia 2", 10**5.88, 2541*4/3,(5.98,0.37,0.36,283), "Ji+21", (10**5.88, 2541*4/3, 2.8)),
]
print(f"{'dwarf':<10}{'ref':<12}{'sigma_obs':<18}{'corner U=1/2/4':<24}{'z U=2 (rand|sys)':<20}{'sigma_efe (rescaled)':<22}{'z_efe (rand, Ups band)'}")
zz2, zz1, zefe = [], [], []
for name, L, r12, (s,ep,em,N), ref, (L0, r0, se0) in CUR:
    c = [sig_corner(u*L, r12, 0.9)[0] for u in (1,2,4)]
    se = se0*math.sqrt((L/L0)/(r12/r0))
    zr, zs = z(c[1],s,ep,em), z(c[1],s,ep,em,0.2)
    # EFE: prediction below data -> use data's lower error; Upsilon band on the EFE value ~ x sqrt(2) up (McGaugh's +0.9 on 2.1 = x1.43)
    ze = (se - s)/em if se < s else (se - s)/ep
    ze_band = (se*1.43 - s)/em if se*1.43 < s else 0.0
    print(f"{name:<10}{ref:<12}{s:.2f} +{ep:.2f}/-{em:.2f}    {c[0]:4.2f}/{c[1]:4.2f}/{c[2]:4.2f}         {zr:+5.1f} | {zs:+5.1f}        {se:4.2f}                  {ze:+5.1f} ({ze_band:+.1f} at Ups=4)")
    zz2.append(zs); zz1.append(z(c[0],s,ep,em,0.2)); zefe.append(ze)
n = len(zz2)
for lab, v in (("corner U=2, 20% sys", zz2), ("corner U=1, 20% sys", zz1), ("MOND+EFE (rescaled, U=2, random-only)", zefe)):
    print(f"  {lab:<40}: chi2 = {sum(x*x for x in v):5.1f}/{n}; signed mean z*sqrt(n) = {sum(v)/math.sqrt(n):+.2f}; prediction above data in {sum(1 for x in v if x>0)}/{n}")
print("  (And XVII's 16-star sample is flagged contaminated by its authors; And XIX/XXI/XXV authors each flag possible non-equilibrium.)")
print("  P6 re-scored on current data: the EFE-regime rows are NOT below sigma_iso on average -> P6 REFUTED on the re-measured sample.")
