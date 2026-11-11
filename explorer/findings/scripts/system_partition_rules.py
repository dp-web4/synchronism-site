#!/usr/bin/env python3
"""Can any written "which bodies form the system" rule keep the internal (no-EFE) reading of the algebraic
compander alive?  Explorer 2026-11-11.  PREREG: ../PREREG-system-partition-rule-open-clusters-20261111.md
(commit a1b3be0, before this file and before any open-cluster number was retrieved).

Law: g_N = g tanh(gamma ln(1 + g/a0')), a0'/gamma = a_M = 1.1e-10 m/s^2, gamma 0.87-0.95, g = internal acceleration.

Usage: system_partition_rules.py [open_clusters.json]
  The JSON (written after retrieval) maps cluster -> {M_lo, M_hi, a_pc (Plummer scale = projected half-mass radius),
  r_t_pc, r_ap_pc (3D aperture of the dispersion), sig, sig_err, age_Myr, src}.  Without it the PREREG recall values run.
"""
import math, sys, json
import numpy as np

G_SI = 6.674e-11; MSUN = 1.989e30; PC = 3.0857e16; AU = 1.496e11; YR = 3.156e7
G = 4.3009e-3                    # pc (km/s)^2 / Msun
ACC = 1e6/PC                     # (km/s)^2/pc -> m/s^2
A_M = 1.1e-10                    # a0'/gamma, ledger EFE_FREE_CORNER_STATUS
GAMMAS = (0.87, 0.90, 0.95)
V_SUN, R_SUN = 220.0, 8200.0     # km/s, pc  -> g_ext(Sun) = 1.91e-10
V_HALO = 200.0                   # km/s, flat, for satellites (declared; enters g_ext and r_J only)
RHO_DISC = 0.084                 # Msun/pc^3, local mid-plane (repo value)


def g_full(gN, gamma=0.9, aM=A_M):
    """solve g tanh(gamma ln(1+g/a0')) = gN  (same bisection as efe_free_corner_dsph.py); vectorised"""
    gN = np.asarray(gN, float); a0p = aM*gamma
    lo = np.log(gN); hi = lo + 16
    for _ in range(80):
        m = 0.5*(lo+hi); g = np.exp(m)
        low = g*np.tanh(gamma*np.log1p(g/a0p)) < gN
        lo = np.where(low, m, lo); hi = np.where(low, hi, m)
    return np.exp(0.5*(lo+hi))


def jeans_plummer(M, a, law="newton", gamma=0.9, r_ap=None, r_trunc=None, n=6000):
    """Isotropic Jeans, Plummer density (scale a pc, mass M Msun).  Returns mass-weighted 1D sigma (km/s) inside 3D
    radius r_ap (None = whole model).  r_trunc: density set to zero outside (pressure boundary sigma = 0 there)."""
    rmax = r_trunc if r_trunc else 400*a
    r = np.logspace(math.log10(a*1e-3), math.log10(rmax), n)
    rho = 3*M/(4*math.pi*a**3)*(1+(r/a)**2)**-2.5
    Menc = M*r**3/(r*r+a*a)**1.5
    gN = G*Menc/r**2                                   # (km/s)^2/pc
    if law == "newton": g = gN
    elif law == "deep": g = np.sqrt(gN*A_M/ACC)
    else: g = g_full(gN*ACC, gamma)/ACC
    f = rho*g
    # P(r) = int_r^rmax rho g dr'
    seg = 0.5*(f[1:]+f[:-1])*np.diff(r)
    P = np.concatenate([np.cumsum(seg[::-1])[::-1], [0.0]])
    w = 4*math.pi*r*r
    m = (r <= (r_ap if r_ap else rmax))
    num = np.trapz((P*w)[m], r[m]); den = np.trapz((rho*w)[m], r[m])
    return math.sqrt(num/den)


def sig_iso_deep(M):  # km/s, (4/81) G M a_M
    return ((4/81)*G_SI*M*MSUN*A_M)**0.25/1e3


out = {}
print("=" * 118); print("0. CONTROLS"); print("=" * 118)
c1 = sig_iso_deep(3.2e5) * math.sqrt(float(g_full(G_SI*1.6e5*MSUN/(1421*PC)**2))/math.sqrt(G_SI*1.6e5*MSUN/(1421*PC)**2*A_M))
print(f"C1 Crater II corner sigma (Upsilon=2, gamma=0.9, 11-10 estimator): {c1:.2f} km/s   (11-10: 3.90)")
b1 = float(g_full(1.0e-10))/1.0e-10; b2 = float(g_full(0.2e-10))/0.2e-10
print(f"C2 internal-reading boost at g_N = 1.0e-10 / 0.2e-10 (gamma=0.9): {b1:.2f} / {b2:.2f}   (ledger 1.48 / 2.69)")
sN = jeans_plummer(1000, 3.0, "newton"); an = math.sqrt(math.pi/32*G*1000/3.0)
print(f"C3 Newtonian Plummer global sigma_1D: Jeans {sN:.4f} vs analytic sqrt(pi G M / 32 a) {an:.4f}  ({100*(sN/an-1):+.2f} %)")
sD = jeans_plummer(1000, 3.0, "deep"); ad = sig_iso_deep(1000)
print(f"C4 deep-limit Plummer global sigma_1D: Jeans {sD:.4f} vs (4/81 G M a_M)^(1/4) {ad:.4f}  ({100*(sD/ad-1):+.2f} %)")
out["controls"] = dict(C1=c1, C2=(b1, b2), C3=sN/an-1, C4=sD/ad-1)

# ------------------------------------------------------------------------------------------------------------------
# Systems.  M Msun; a = projected half-mass radius (Plummer scale) pc; sigma km/s; D pc from Galactic centre; age Myr
# dSphs: McConnachie 2012 L_V, r_h (as in gamma_ladder_precheck_dsph_open_clusters.py), M = 1.5 L_V; D_GC from recall
#   (+-5 %, enters g_ext and r_J only).  Segue 1: L 340, r_h 29, sigma 3.7 +- 1.4 (McGaugh & Wolf 2010, read 11-10), D 28 kpc.
# GCs: Baumgardt catalogue on disk; M there is DYNAMICAL (fit to sigma), so no B_req is computed for them.
OC = {  # PREREG recall values, replaced by the JSON when given
 "Hyades":   dict(M_lo=400, M_hi=450, a_pc=4.0, r_t_pc=9.5,  r_ap_pc=9.5,  sig=0.35, sig_err=0.05, age_Myr=650, src="recall"),
 "Pleiades": dict(M_lo=700, M_hi=800, a_pc=3.0, r_t_pc=11.5, r_ap_pc=11.5, sig=0.50, sig_err=0.05, age_Myr=120, src="recall"),
 "Praesepe": dict(M_lo=500, M_hi=600, a_pc=3.5, r_t_pc=10.5, r_ap_pc=10.5, sig=0.45, sig_err=0.10, age_Myr=700, src="recall"),
}
if len(sys.argv) > 1:
    OC = json.load(open(sys.argv[1]))
for n, d in OC.items():
    if "obs" not in d: d["obs"] = [["recall", d["sig"], d["sig_err"], "PREREG recall"]]; d["best"] = "recall"
    b = [o for o in d["obs"] if o[0] == d["best"]][0]; d["sig"], d["sig_err"] = b[1], b[2]
    d.setdefault("src", "retrieved 2026-11-11, see JSON")
DSPH = {  # L_V, r_h(proj) pc, sigma, sigma_err, D_GC kpc
 "Fornax": (2.0e7, 710, 11.7, 0.9, 147), "Leo I": (5.5e6, 251, 9.2, 1.4, 254), "Sculptor": (2.3e6, 283, 9.2, 1.4, 86),
 "Leo II": (7.4e5, 176, 6.6, 0.7, 233), "Sextans": (4.4e5, 695, 7.9, 1.3, 86), "Carina": (3.8e5, 250, 6.6, 1.2, 106),
 "Ursa Minor": (2.9e5, 181, 9.5, 1.2, 76), "Draco": (2.9e5, 221, 9.1, 1.2, 76),
 "Crater II": (1.6e5, 1066, 2.34, 0.42, 117), "Antlia 2": (10**5.88, 2541, 5.98, 0.37, 132), "Segue 1": (340, 29, 3.7, 1.4, 28),
}
GC = {"Pal 14": (19100, 27.63, 0.71, 0.18, 68.55), "NGC 2419": (783000, 19.76, 5.51, 0.57, 95.93)}   # M(dyn), r_hl, sigma(inner bin), err, R_GC kpc


def variables(name, cls, M, a, sig, sig_err, D_pc, V, age_Myr, rho_amb, need):
    r12 = 1.305*a
    gN = G*(M/2)/r12**2*ACC                       # m/s^2 at the 3D half-mass radius
    gB = float(g_full(gN))
    gext = V*V/D_pc*ACC
    rJ = (G*M*D_pc**2/(2*V*V))**(1/3)             # Newtonian, flat host curve: r_J^3 = G M / (2 Omega^2)
    contrast = (M/2)/(4/3*math.pi*r12**3)/rho_amb
    sN = math.sqrt(math.pi/32*G*M/a)              # exact Plummer virial, mass follows light
    sB = jeans_plummer(M, a, "law")
    N = M/0.5
    trh = 0.138*math.sqrt(N)*r12**1.5/(math.sqrt(0.5*G)*math.log(0.4*N))*0.978   # Myr (pc/(km/s) = 0.978 Myr), Spitzer
    trhB = trh*(sB/sN)**3
    tcross = r12/sN*0.978
    return dict(name=name, cls=cls, M=M, a=a, x_int=gN/A_M, x_ext=gext/A_M, ratioN=gN/gext, ratioB=gB/gext, fill=r12/rJ,
                contrast=contrast, N=N, trh_age_N=trh/age_Myr, trh_age_B=trhB/age_Myr, ncross=age_Myr/tcross,
                freq_obs=(math.sqrt(3)*sig/r12)/(V/D_pc), freq_N=(math.sqrt(3)*sN/r12)/(V/D_pc),
                sN=sN, sB=sB, sig=sig, sig_err=sig_err, Breq=(sig/sN)**2 if sig else None, need=need)

rows = []
for n, d in OC.items():
    M = 0.5*(d["M_lo"]+d["M_hi"])
    rows.append(variables(n, "open cl.", M, d["a_pc"], d["sig"], d["sig_err"], R_SUN, V_SUN, d["age_Myr"], RHO_DISC, "N"))
for n, (L, rh, s, e, D) in DSPH.items():
    rho_host = 3*V_HALO**2/(4*math.pi*G*(D*1e3)**2)
    rows.append(variables(n, "dSph", 1.5*L, rh, s, e, D*1e3, V_HALO, 1.0e4, rho_host, "B"))
for n, (M, rh, s, e, D) in GC.items():
    rho_host = 3*V_HALO**2/(4*math.pi*G*(D*1e3)**2)
    r = variables(n, "GC", M, rh, s, e, D*1e3, V_HALO, 1.2e4, rho_host, "?"); r["Breq"] = None; rows.append(r)
# wide binaries, 2 Msun total, at the Sun: treat separation s as the system size
WB = []
for s_kau in (5, 10, 20):
    s_pc = s_kau*1e3*AU/PC; gN = G_SI*2*MSUN/(s_kau*1e3*AU)**2; gB = float(g_full(gN)); gext = V_SUN**2/R_SUN*ACC
    rJ = (G*2*R_SUN**2/(2*V_SUN**2))**(1/3); P_Myr = 2*math.pi*math.sqrt((s_kau*1e3*AU)**3/(G_SI*2*MSUN))/YR/1e6
    WB.append(dict(name=f"WB {s_kau} kAU", cls="binary", x_int=gN/A_M, x_ext=gext/A_M, ratioN=gN/gext, ratioB=gB/gext,
                   fill=s_pc/rJ, contrast=2/(4/3*math.pi*s_pc**3)/RHO_DISC, N=2, trh_age_N=None, trh_age_B=None,
                   ncross=5000/P_Myr, boost=gB/gN, need="open",
                   freq_obs=(2*math.pi/P_Myr)/(V_SUN/R_SUN/0.978), freq_N=(2*math.pi/P_Myr)/(V_SUN/R_SUN/0.978)))
# Sun-Saturn, Earth-Moon: high-acceleration; the law itself returns Newton whatever the rule says
for nm, Mtot, sep in (("Sun-Saturn", 1.0, 9.58*AU), ("Earth-Moon", 3.04e-6, 3.844e8)):
    gN = G_SI*Mtot*MSUN/sep**2
    WB.append(dict(name=nm, cls="planetary", x_int=gN/A_M, x_ext=V_SUN**2/R_SUN*ACC/A_M, ratioN=gN/(V_SUN**2/R_SUN*ACC), ratioB=None,
                   fill=None, contrast=None, N=2, trh_age_N=None, trh_age_B=None, ncross=None,
                   boost=float(g_full(gN))/gN, need="N"))

print(); print("=" * 118)
print("1. THE TABLE: what a rule could key on (dimensionless), beside what the data require")
print("   x_int = g_N(r_1/2)/a_M; x_ext = g_host/a_M; gN/gext Newtonian; gB/gext with the internal law applied; fill = r_1/2 / r_J (Newtonian, counted mass);")
print("   contrast = mean density inside r_1/2 over ambient (disc 0.084 Msun/pc3; halo: host mean enclosed); t_rh/age on the Newtonian (N) and boosted (B) branch;")
print("   sigma_N = exact Plummer virial; sigma_B = Jeans under the internal law (gamma=0.9, global); B_req = (sigma_obs/sigma_N)^2")
print("=" * 118)
h = f"{'system':<12}{'class':<9}{'x_int':>9}{'x_ext':>7}{'gN/gext':>9}{'gB/gext':>9}{'fill':>7}{'contrast':>10}{'N':>9}{'trh/age N':>10}{'B':>8}{'n_cross':>9}{'sig_N':>7}{'sig_B':>7}{'sig_obs':>13}{'B_req':>7}"
print(h)
def fmt(v, f): return format(v, f) if v is not None else "-".rjust(int(f.split('.')[0].strip('>')) if f[0] != '>' else int(f[1:].split('.')[0]))
for r in rows:
    so = f"{r['sig']:.2f}+-{r['sig_err']:.2f}"
    br = f"{r['Breq']:.1f}" if r["Breq"] else "(dyn M)"
    print(f"{r['name']:<12}{r['cls']:<9}{r['x_int']:9.2e}{r['x_ext']:7.2f}{r['ratioN']:9.3f}{r['ratioB']:9.3f}{r['fill']:7.2f}{r['contrast']:10.1f}{r['N']:9.1e}"
          f"{r['trh_age_N']:10.2f}{r['trh_age_B']:8.1f}{r['ncross']:9.0f}{r['sN']:7.2f}{r['sB']:7.2f}{so:>13}{br:>7}")
for r in WB:
    rb = f"{r['ratioB']:9.3f}" if r["ratioB"] else f"{'-':>9}"
    fl = f"{r['fill']:7.3f}" if r["fill"] else f"{'-':>7}"
    ct = f"{r['contrast']:10.1e}" if r["contrast"] else f"{'-':>10}"
    nc = f"{r['ncross']:9.0f}" if r["ncross"] else f"{'-':>9}"
    print(f"{r['name']:<12}{r['cls']:<9}{r['x_int']:9.2e}{r['x_ext']:7.2f}{r['ratioN']:9.3f}{rb}{fl}{ct}{2:9d}{'-':>10}{'-':>8}{nc}   internal-law boost g/g_N = {r['boost']:.6f}" if r['boost'] < 1.01 else
          f"{r['name']:<12}{r['cls']:<9}{r['x_int']:9.2e}{r['x_ext']:7.2f}{r['ratioN']:9.3f}{rb}{fl}{ct}{2:9d}{'-':>10}{'-':>8}{nc}   internal-law boost g/g_N = {r['boost']:.2f}")
out["table"] = rows; out["binaries"] = WB

# ------------------------------------------------------------------------------------------------------------------
print(); print("=" * 118)
print("2. OPEN CLUSTERS UNDER THE INTERNAL READING  (P1, P2, kill criterion)")
print("   prediction = isotropic Jeans, Plummer, mass-weighted inside the dispersion's 3D aperture; M at the LOWEST counted mass (registered)")
print("=" * 118)
kills = 0; res = {}
EFE = (1.3, 1.5)    # boost in g with an external field effect at the Sun: reading (T) 1.17-1.30, QUMOND gamma=1/2 1.38-1.53 (ledger rows)
for n, d in OC.items():
    a, rap, rt = d["a_pc"], d.get("r_ap_pc"), d.get("r_t_pc")
    print(f"{n}:  a = {a} pc, aperture {rap} pc, r_t {rt} pc")
    if "masses" in d: print(f"   masses: {d['masses']}"); print(f"   structure: {d['struct']}")
    pm = {}
    for tag, M in (("M_lo", d["M_lo"]), ("M_hi", d["M_hi"])):
        xh = G*(M/2)/(1.305*a)**2*ACC/A_M
        preds = {g: jeans_plummer(M, a, "law", g, r_ap=rap) for g in GAMMAS}
        pN = jeans_plummer(M, a, "newton", r_ap=rap); pT = jeans_plummer(M, a, "law", 0.9, r_ap=rap, r_trunc=rt)
        pm[tag] = (preds[0.90], pN, pT)
        print(f"   {tag} = {M:4.0f} Msun: x_int(r_1/2) = {xh:.4f};  Newton {pN:.3f};  with an EFE {pN*math.sqrt(EFE[0]):.3f}-{pN*math.sqrt(EFE[1]):.3f};"
              f"  internal reading " + "/".join(f"{preds[g]:.3f}" for g in GAMMAS) + f" (gamma 0.87/0.90/0.95; truncated at r_t {pT:.3f}; deep estimator {sig_iso_deep(M):.3f}) km/s")
    p, pN, pT = pm["M_lo"]; pH, pNH, _ = pm["M_hi"]
    rows_o = []
    for lab, sg, er, note in d["obs"]:
        z = (p-sg)/math.hypot(er, 0.2*p); zr = (p-sg)/er
        zN = (sg-pNH)/math.hypot(er, 0.2*pNH)                 # against Newton at the HIGHEST counted mass (most favourable to Newton)
        zNr = (sg-pNH)/er
        print(f"      {lab:<26} {sg:.3f} +- {er:.3f}   obs/Newton(M_hi) {sg/pNH:.2f} [z {zN:+.1f} | random {zNr:+.1f}]   obs/internal(M_lo) {sg/p:.2f} "
              f"[z {-z:+.1f} | random {-zr:+.1f}]   position between Newton(M_hi) and internal(M_lo): {(sg-pNH)/(p-pNH):.2f}   ({note})")
        rows_o.append(dict(label=lab, sig=sg, err=er, z_internal=z, z_internal_random=zr, z_newton=zN, z_newton_random=zNr, frac=(sg-pNH)/(p-pNH)))
    big = max(d["obs"], key=lambda o: o[1])
    zk = (p-big[1])/math.hypot(big[2], 0.2*p); fire = zk >= 3 and big[1] <= 0.8*p
    kills += fire
    print(f"   REGISTERED KILL (largest sigma = {big[0]} {big[1]:.3f}, lowest mass): pred {p:.3f}, obs/pred {big[1]/p:.2f}, z = {zk:+.1f} -> {'FIRES' if fire else 'does not fire'}")
    print(f"   highest z the registered form can reach at any error is (1 - obs/pred)/0.2: best row {(1-d['sig']/p)/0.2:.1f}")
    res[n] = dict(pred_lo=p, pred_hi=pH, newton_lo=pN, newton_hi=pNH, trunc=pT, rows=rows_o, kill_z=zk, fire=bool(fire))
print(f"\nKill criterion (>= 2 clusters at z >= 3 with the 20 % systematic, lowest mass, largest sigma, sigma_obs <= 0.8 pred): {kills} fire  ->  "
      f"{'MET' if kills >= 2 else 'NOT MET'}")
out["open_clusters"] = res; out["kill_met"] = bool(kills >= 2)

# ------------------------------------------------------------------------------------------------------------------
print(); print("=" * 118)
print("3. SINGLE-VARIABLE SEPARABILITY: does any one variable put the open clusters (must be ~Newtonian) on one side and the")
print("   dwarf spheroidals (must be boosted) on the other?  And on which side do the wide binaries fall?")
print("=" * 118)
ocs = [r for r in rows if r["cls"] == "open cl."]; dw = [r for r in rows if r["cls"] == "dSph"]
sep = {}
for key, lab in (("x_int", "g_N,int / a_M"), ("x_ext", "g_ext / a_M"), ("ratioN", "g_N,int / g_ext"), ("ratioB", "g_int(boosted) / g_ext"),
                 ("fill", "r_1/2 / r_J"), ("contrast", "density contrast"), ("N", "number of bodies"),
                 ("trh_age_N", "t_rh/age (Newtonian branch)"), ("trh_age_B", "t_rh/age (boosted branch)"), ("ncross", "age / crossing time"),
                 ("freq_N", "POST-HOC w_int/w_ext (Newton)"), ("freq_obs", "POST-HOC w_int/w_ext (observed)")):
    o = [r[key] for r in ocs]; d = [r[key] for r in dw]
    gap = (max(o) < min(d)) or (max(d) < min(o))
    wb = [w[key] for w in WB if w["cls"] == "binary" and w.get(key) is not None]
    side = "-"
    if gap and wb:
        if max(o) < min(d): side = "with open clusters" if max(wb) <= max(o) else ("with dwarfs" if min(wb) >= min(d) else "in the gap / straddles")
        else: side = "with open clusters" if min(wb) >= min(o) else ("with dwarfs" if max(wb) <= max(d) else "in the gap / straddles")
    wbs = f"{min(wb):.3g}..{max(wb):.3g}" if wb else "n/a"
    print(f"  {lab:<30} open cl. {min(o):9.3g}..{max(o):<9.3g} dSph {min(d):9.3g}..{max(d):<9.3g} separable: {'YES' if gap else 'no ':<4}"
          f" binaries {wbs:<18} {side if gap else ''}")
    sep[key] = dict(oc=(min(o), max(o)), dsph=(min(d), max(d)), separable=bool(gap), binaries=(min(wb), max(wb)) if wb else None, side=side)
out["separability"] = sep
print("  --- robustness: the same test on the eight classical dwarfs only (Crater II, Antlia 2: tidally disturbed; Segue 1: contested) ---")
dw8 = [r for r in dw if r["name"] not in ("Crater II", "Antlia 2", "Segue 1")]; sep8 = {}
for key in ("x_int", "x_ext", "ratioN", "ratioB", "fill", "contrast", "N", "trh_age_N", "trh_age_B", "ncross", "freq_N", "freq_obs"):
    o = [r[key] for r in ocs]; d = [r[key] for r in dw8]
    gap = (max(o) < min(d)) or (max(d) < min(o))
    if gap:
        lo, hi = (max(o), min(d)) if max(o) < min(d) else (max(d), min(o))
        print(f"  {key:<12} separable on the classical eight: gap {lo:.3g} .. {hi:.3g}  ({math.log10(hi/lo):.2f} dex)")
    sep8[key] = bool(gap)
out["separability_classical8"] = sep8

# ------------------------------------------------------------------------------------------------------------------
print(); print("=" * 118); print("4. RULE BY RULE"); print("=" * 118)
# R1' pairwise sum: Galaxy field at the Sun from N equal bodies in the deep two-body law
Mgal = 6e10
for m, lab in ((1.0, "stars of 1 Msun"), (1e5, "10^5 Msun clouds"), (Mgal, "one body")):
    Nn = Mgal/m
    gsum = Nn*math.sqrt(G_SI*m*MSUN*A_M)/(R_SUN*PC)
    print(f"  R1' pairwise sum, Galaxy as {lab:<18}: g(Sun) ~ N sqrt(G m a_M)/R = {gsum:.2e} m/s^2 = {gsum/(V_SUN**2/R_SUN*ACC):.3g} x observed"
          f"   (sqrt(N) = {math.sqrt(Nn):.3g})")
print("  R2 Hill/tidal (fill < 1): " + ", ".join(f"{r['name']} {r['fill']:.2f}" for r in rows if r['cls'] != 'GC'))
print("     binaries: " + ", ".join(f"{w['name']} {w['fill']:.3f}" for w in WB if w['cls'] == 'binary'))
print("  R5 relaxation, bistability: (t_rh/age on the Newtonian branch -> on the boosted branch)")
for r in rows:
    a, b = r["trh_age_N"], r["trh_age_B"]
    st = "collisional on both" if b < 1 else ("collisionless on both" if a > 1 else "BISTABLE (collisional if Newtonian, collisionless if boosted)")
    print(f"     {r['name']:<12} {a:8.2f} -> {b:8.1f}   {st}")
# ------------------------------------------------------------------------------------------------------------------
print(); print("=" * 118)
print("5. POST-HOC (prompted by retrieval): a constant dispersion floor in the Huisjes & Hernandez (arXiv:2603.03522) plane")
print("   Their definitions: g_obs = 3 sigma^2 / R_1/2, g_bar = G M / (2 R_1/2^2); sigma = raw std of member proper motions, no error")
print("   deconvolution; the catalogue warns binaries 'can contribute >~ 500 m/s'.  Model: sigma_obs^2 = sigma_N^2 + floor^2,")
print("   sigma_N^2 = g_bar R/3 (Newtonian point in their own plane).  RAR: g_bar/(1-exp(-sqrt(g_bar/g_dag))), g_dag = 1.2e-10.")
print("=" * 118)
def rar(gb, gd=1.2e-10): return gb/(1-math.exp(-math.sqrt(gb/gd)))
fl = {}
print(f"{'M [Msun]':>9}{'R [pc]':>8}{'g_bar':>11}{'sigma_N':>9}{'sigma_RAR':>10}" + "".join(f"{'floor '+str(f):>22}" for f in (0.3, 0.5, 0.7)) + "   (sigma_obs km/s, g_obs/g_RAR in dex)")
for M in (30, 100, 250, 500, 1000, 3000):
    for R in (2.0, 4.0):
        gb = G*M/(2*R*R)*ACC; sN = math.sqrt(gb/ACC*R/3); sR = math.sqrt(rar(gb)/ACC*R/3)
        line = f"{M:9d}{R:8.1f}{gb:11.2e}{sN:9.3f}{sR:10.3f}"
        for f in (0.3, 0.5, 0.7):
            so = math.hypot(sN, f); dex = math.log10(3*so*so/R*ACC/rar(gb))
            line += f"{so:12.3f} ({dex:+.2f})"
            fl[f"{M}_{R}_{f}"] = dex
        print(line)
print("   Gaia DR3 proper-motion error -> km/s: 0.05 mas/yr at 1 / 2 / 3 kpc = " + " / ".join(f"{4.74*0.05*d:.2f}" for d in (1, 2, 3))
      + ";  0.1 mas/yr = " + " / ".join(f"{4.74*0.1*d:.2f}" for d in (1, 2, 3)))
out["floor_control"] = fl
# ------------------------------------------------------------------------------------------------------------------
print(); print("=" * 118)
print("6. POST-HOC: the same cluster measured with and without binaries.  Quadrature difference = what binaries add;")
print("   beside it, the internal-reading prediction and Newton, both at the mid counted mass.")
print("=" * 118)
pairs = (("Pleiades", "Hobart+26 PM", "Torres+21 PM"), ("M67", "Geller+15 RV uncorrected", "Geller+15 RV corrected"),
         ("NGC 188", "Geller+08 RV uncorrected", "Geller+08 RV corrected"))
pq = {}
if all(n in OC for n, _, _ in pairs):
    for n, lu, lc in pairs:
        d = OC[n]; o = {x[0]: x for x in d["obs"]}; su, sc = o[lu][1], o[lc][1]
        Mm = 0.5*(d["M_lo"]+d["M_hi"])
        pI = jeans_plummer(Mm, d["a_pc"], "law", 0.9, r_ap=d["r_ap_pc"]); pN = jeans_plummer(Mm, d["a_pc"], "newton", r_ap=d["r_ap_pc"])
        q = math.sqrt(su*su-sc*sc)
        print(f"  {n:<9} uncleaned {su:.3f}  cleaned {sc:.3f}  binary term {q:.2f} km/s   | internal reading {pI:.3f}  Newton {pN:.3f}  Newton+EFE {pN*math.sqrt(EFE[0]):.3f}-{pN*math.sqrt(EFE[1]):.3f}"
              f"   cleaned/Newton {sc/pN:.2f}  cleaned/internal {sc/pI:.2f}  uncleaned/internal {su/pI:.2f}")
        pq[n] = dict(unclean=su, clean=sc, binary=q, internal=pI, newton=pN)
    print("  Hobart+ (binaries not removed), three clusters of 518-650 Msun: 0.799 / 0.739 / 0.809 km/s.  Internal reading at those masses: "
          + " / ".join(f"{jeans_plummer(M, a, 'law', 0.9):.3f}" for M, a in ((518, 5.93), (650, 3.02), (598, 3.16)))
          + ";  Newton (+) 0.52 km/s binary term: " + " / ".join(f"{math.hypot(jeans_plummer(M, a, 'newton'), 0.52):.3f}" for M, a in ((518, 5.93), (650, 3.02), (598, 3.16))))
out["clean_vs_unclean"] = pq
json.dump(out, open(__file__.replace(".py", ".json"), "w"), indent=1, default=float)
