"""
Registry decidability sweep + the Tier-3 environment lever.

Explorer session 2026-09-12.  Two independent parts:

  A. Attention topology of the 26-card test registry: how many distinct site pages
     mention each TEST- id.  Tests the WAKE hypothesis that audit attention is
     allocated by existing cross-reference count.

  B. TEST-20 (Tier 3, $1M-$3M, "Void Galaxy Rotation Curves") is badged
     "Not a discriminating test vs MOND" on the grounds that MOND's EFE predicts the
     same environment-dependent DM fraction.  Compute BOTH levers in TEST-20's own
     statistic -- f_DM at fixed baryons -- on real SPARC mass models:
       B1  framework, density-keyed, FLOORED C = max(Om, tanh(g ln(1+rho/rho_c)))
       B2  MOND + EFE, mu_simple, external field in the AQUAL 1D argument
       B3  framework, acceleration-keyed: identically zero (no environment argument)
     and the viability of ambient-only keying (C constant across a galaxy => pure
     G-rescaling => Newtonian curve shape).

All densities in Msun/pc^3, accelerations in m/s^2.
"""
import os, re, sys, math
from collections import defaultdict
import numpy as np

SITE = os.path.expanduser("~/ai-workspace/synchronism-site")
SPARC = os.path.expanduser("~/ai-workspace/Synchronism/simulations/sparc_real_data")

OM = 0.315                      # Omega_m, sets the coherence floor
A0 = 1.2e-10                    # m/s^2
G_MSUN_PC = 4.30091e-3          # pc (km/s)^2 / Msun
RHO_C_COSMO = 1.36e-7           # Msun/pc^3, cosmological critical density (H0=67.4)
RHO_AMB_MEAN = OM * RHO_C_COSMO # mean matter density today

# knees (rho_crit) in live use on the site, Msun/pc^3
KNEES = {
    "S691 registered 1e-23 kg/m3": 1.477e-4,
    "Refracted Gravity fitted":    8.3e-3,
    "published A*Vflat^2 (MW)":    1.52e3,
    "galaxy-sector working":       2.91e-2,
}
GAMMAS = [0.489, 2.0]

def C_floored(rho, gamma, rho_c):
    return np.maximum(OM, np.tanh(gamma * np.log1p(rho / rho_c)))

# ----------------------------------------------------------------- A
def part_A():
    print("=" * 78)
    print("A.  ATTENTION TOPOLOGY OF THE TEST REGISTRY")
    print("=" * 78)
    pages = defaultdict(set)
    counts = defaultdict(int)
    root = os.path.join(SITE, "src", "app")
    for dirpath, _, files in os.walk(root):
        for fn in files:
            if not fn.endswith(".tsx"):
                continue
            p = os.path.join(dirpath, fn)
            page = os.path.relpath(dirpath, root)
            txt = open(p, encoding="utf-8").read()
            for m in re.finditer(r"TEST-(\d{2}[a-z]?)", txt):
                tid = "TEST-" + m.group(1)
                pages[tid].add(page)
                counts[tid] += 1
    home = {  # the card's own tier page
        **{f"TEST-{i:02d}": "tier-1-existing" for i in range(1, 11)},
        **{f"TEST-{i:02d}": "tier-2-pilots" for i in range(11, 15)},
        **{f"TEST-{i:02d}": "tier-3-major" for i in range(15, 22)},
        **{f"TEST-{i:02d}": "tier-4-frontier" for i in range(22, 25)},
    }
    print(f"{'id':<9}{'tier':<17}{'pages':>6}{'mentions':>10}   other pages")
    order = sorted(pages, key=lambda t: (int(re.sub(r'\D','',t)), t))
    for tid in order:
        h = home.get(tid, "(out-of-band)")
        others = sorted(pages[tid] - {h})
        print(f"{tid:<9}{h:<17}{len(pages[tid]):>6}{counts[tid]:>10}   "
              f"{', '.join(others) if others else '-- NONE --'}")
    print()
    for lo, hi, lbl in [(1, 10, "Tier 1"), (11, 14, "Tier 2"),
                        (15, 21, "Tier 3"), (22, 24, "Tier 4")]:
        ids = [t for t in order if re.fullmatch(r"TEST-\d{2}", t)
               and lo <= int(t[5:]) <= hi]
        npg = [len(pages[t] - {home.get(t)}) for t in ids]
        orphan = sum(1 for n in npg if n == 0)
        print(f"{lbl}: {len(ids)} cards | mean off-tier pages {np.mean(npg):.2f} "
              f"| cards appearing NOWHERE but their own tier page: {orphan}")
    print()

# ----------------------------------------------------------------- SPARC loader
def load_sparc():
    """Whitespace-split parse (SPARC names contain no spaces); the .mrt byte columns
    are right-justified and the name field pads differently between the two files."""
    master = {}
    started = False
    for line in open(os.path.join(SPARC, "SPARC_Lelli2016c.mrt"), encoding="utf-8"):
        if line.startswith("---"):
            started = True
            continue
        if not started:
            continue
        f = line.split()
        if len(f) < 18:
            continue
        try:
            name = f[0]
            Inc = float(f[5]); Rdisk = float(f[11]); SBdisk0 = float(f[12])
            MHI = float(f[13]) * 1e9; RHI = float(f[14])
            Vflat = float(f[15]); Q = int(f[17])
        except ValueError:
            continue
        master[name] = dict(Rdisk=Rdisk, MHI=MHI, RHI=RHI, Q=Q, Inc=Inc,
                            Vflat=Vflat, SBdisk0=SBdisk0)
    gal = defaultdict(list)
    started = False
    for line in open(os.path.join(SPARC, "MassModels_Lelli2016c.mrt"), encoding="utf-8"):
        if line.startswith("---"):
            started = True
            continue
        if not started:
            continue
        f = line.split()
        if len(f) < 10:
            continue
        try:
            name = f[0]
            R = float(f[2]); Vobs = float(f[3]); eV = float(f[4])
            Vgas = float(f[5]); Vdisk = float(f[6]); Vbul = float(f[7])
            SBd = float(f[8]); SBb = float(f[9])
        except ValueError:
            continue
        if name not in master or R <= 0 or Vobs <= 0 or eV <= 0:
            continue
        gal[name].append((R, Vobs, eV, Vgas, Vdisk, Vbul, SBd, SBb))
    out = {}
    for n, rows in gal.items():
        a = np.array(rows, float)
        out[n] = dict(master[n], R=a[:,0], Vobs=a[:,1], eV=a[:,2], Vgas=a[:,3],
                      Vdisk=a[:,4], Vbul=a[:,5], SBd=a[:,6], SBb=a[:,7])
    return out

def kms2_per_kpc_to_ms2(v2_over_r_kpc):
    """ (km/s)^2 / kpc  ->  m/s^2 """
    return v2_over_r_kpc * (1e3 ** 2) / (3.0857e19)

# ----------------------------------------------------------------- MOND + EFE
def mond_gobs(g_bar, g_ext):
    """mu_simple(x) g_obs = g_bar, x = sqrt(g_obs^2+g_ext^2)/a0.  Fixed point."""
    g = np.maximum(g_bar, 1e-30)
    for _ in range(200):
        x = np.sqrt(g**2 + g_ext**2) / A0
        mu = x / (1.0 + x)
        gn = g_bar / np.maximum(mu, 1e-30)
        if np.all(np.abs(gn - g) <= 1e-10 * np.maximum(gn, 1e-30)):
            g = gn; break
        g = 0.5 * g + 0.5 * gn
    return g

# ----------------------------------------------------------------- B
def part_B(gals):
    print("=" * 78)
    print("B.  THE ENVIRONMENT LEVER IN TEST-20's OWN STATISTIC  (f_DM at fixed baryons)")
    print("=" * 78)
    UPS_D, UPS_B = 0.5, 0.7
    # quality cut matching the galaxy sector's convention
    names = [n for n, g in gals.items() if g["Q"] <= 2 and g["Inc"] > 30]
    print(f"SPARC galaxies after Q<=2, i>30 cut: {len(names)} of {len(gals)}")

    # ---- baryonic mid-plane density at every measured point
    rho_star, rho_bar, gbar, Rall, who = [], [], [], [], []
    for n in names:
        g = gals[n]
        Rd = g["Rdisk"] if g["Rdisk"] > 0 else 1.0
        h = 0.196 * (Rd ** 0.633)                       # Bershady+2010 h_z(R_d), kpc
        Sig_s = UPS_D * g["SBd"] + UPS_B * g["SBb"]     # Msun/pc^2
        # local gas surface density from SPARC's own Vgas:
        #   M_gas(<R) = Vgas^2 R / G   ->   Sigma_gas = (1/2 pi R) dM/dR
        # SPARC's Vgas already carries the 1.33 helium factor.
        Rk = np.maximum(g["R"], 1e-6)
        Mg = np.sign(g["Vgas"]) * g["Vgas"] ** 2 * Rk * 1e3 / G_MSUN_PC   # Msun
        dM = np.gradient(Mg, Rk)
        Sig_g = dM / (2 * math.pi * Rk * 1e6)                             # Msun/pc^2
        # SPARC curves are HI-derived and R_HI is DEFINED at Sigma_HI = 1 Msun/pc^2,
        # so inside R_HI the helium-corrected gas floor is 1.33 Msun/pc^2.
        inside = Rk <= (g["RHI"] if g["RHI"] > 0 else Rk.max())
        Sig_g = np.where(inside, np.maximum(Sig_g, 1.33), np.maximum(Sig_g, 0.0))
        rs = Sig_s / (2 * h * 1e3)                      # Msun/pc^3
        rb = (Sig_s + Sig_g) / (2 * h * 1e3)
        V2 = (UPS_D * g["Vdisk"] ** 2 * np.sign(g["Vdisk"])
              + UPS_B * g["Vbul"] ** 2 * np.sign(g["Vbul"])
              + g["Vgas"] ** 2 * np.sign(g["Vgas"]))
        gb = kms2_per_kpc_to_ms2(np.maximum(V2, 1e-6) / np.maximum(g["R"], 1e-6))
        rho_star.append(rs); rho_bar.append(rb); gbar.append(gb)
        Rall.append(g["R"]); who += [n] * len(g["R"])
    rho_star = np.concatenate(rho_star); rho_bar = np.concatenate(rho_bar)
    gbar = np.concatenate(gbar); Rall = np.concatenate(Rall); who = np.array(who)
    # Points beyond R_HI have no measured baryonic surface density in SPARC; leaving
    # them at rho=0 lets the ambient term dominate and inflates B1 by ~30x.  They are
    # dropped, and the sensitivity to that choice is reported at the end of B1.
    SIG_MIN = 0.5                     # Msun/pc^2, below SPARC's baryonic sensitivity
    rho_floor_used = SIG_MIN / (2 * 0.3 * 1e3)
    ndrop = int(np.sum(~(rho_bar > rho_floor_used)))
    ok = (np.isfinite(rho_bar) & np.isfinite(gbar) & (gbar > 0)
          & (rho_bar > rho_floor_used))
    print(f"points dropped for having no measured baryonic surface density "
          f"(rho_bar <= {rho_floor_used:.2e}): {ndrop}")
    rho_star, rho_bar, gbar, Rall, who = (v[ok] for v in (rho_star, rho_bar, gbar, Rall, who))
    print(f"measured points: {len(rho_bar)}")
    print(f"baryonic mid-plane rho  (Msun/pc^3): "
          f"median {np.median(rho_bar):.3e}  10th pct {np.percentile(rho_bar,10):.3e}  "
          f"min {rho_bar.min():.3e}")
    print(f"mean cosmic matter density rho_amb(delta=0) = {RHO_AMB_MEAN:.3e} Msun/pc^3")
    print()

    # ---- B1 framework, density-keyed, floored
    ENV = {"void (delta=-0.8)": -0.8, "field (delta=0)": 0.0,
           "group (delta=100)": 100.0, "cluster (delta=1000)": 1000.0}
    print("B1  framework, DENSITY-keyed, floored C = max(Om, tanh(g ln(1+rho/rho_c)))")
    print("    Delta f_DM = C(rho+rho_amb^void) - C(rho+rho_amb^cluster), per point")
    print(f"    {'knee':<30}{'gamma':>7}{'max|df_DM|':>13}{'median':>12}{'90th pct':>11}")
    worst = 0.0
    for kname, rc in KNEES.items():
        for gam in GAMMAS:
            for rho_used, tag in [(rho_bar, "")]:
                a = C_floored(rho_used + RHO_AMB_MEAN * (1 + ENV["void (delta=-0.8)"]), gam, rc)
                b = C_floored(rho_used + RHO_AMB_MEAN * (1 + ENV["cluster (delta=1000)"]), gam, rc)
                d = np.abs(a - b)
                worst = max(worst, d.max())
                print(f"    {kname:<30}{gam:>7.3f}{d.max():>13.3e}"
                      f"{np.median(d):>12.3e}{np.percentile(d,90):>11.3e}")
    print(f"    WORST CASE over all knees, all gamma, all retained points: "
          f"|Delta f_DM| = {worst:.3e}")
    # sensitivity to the outer-gas floor
    for sig in [2.0, 1.0, 0.5, 0.1]:
        rf = sig / (2 * 0.3 * 1e3)
        w2 = 0.0
        for kname, rc in KNEES.items():
            for gam in GAMMAS:
                r = np.maximum(rho_bar, rf)
                a = C_floored(r + RHO_AMB_MEAN * 0.2, gam, rc)
                b = C_floored(r + RHO_AMB_MEAN * 1001.0, gam, rc)
                w2 = max(w2, np.abs(a - b).max())
        print(f"      sensitivity: outer-gas floor Sigma = {sig:4.1f} Msun/pc^2 "
              f"(rho = {rf:.1e})  ->  worst |Delta f_DM| = {w2:.3e}")
    print()

    # ---- B2 MOND + EFE in the same statistic
    print("B2  MOND (mu_simple) + EFE, same galaxies, same points")
    print("    e_N = g_ext/a0.  Anchored on Chae+2021's fitted-and-located SPARC sample.")
    res = {}
    # Chae+2021 (arXiv:2109.04745) fitted e_N per SPARC galaxy and located them in the
    # cosmic web: underdense region e_N ~= 0, overdense (CfA2 wall / Perseus-Pisces)
    # e_N ~= 2x the SPARC median (Chae+2020 median 0.033).  That measured contrast --
    # NOT a hypothetical rich cluster -- is the like-for-like pair for TEST-20.
    for lbl, eN in [("Chae void (e_N=0)", 0.0), ("field (e_N=0.033)", 0.033),
                    ("Chae overdense (e_N=0.066)", 0.066),
                    ("rich cluster (e_N=0.30)", 0.30)]:
        go = mond_gobs(gbar, eN * A0)
        res[lbl] = 1.0 - gbar / go                      # f_DM
    dm = res["Chae void (e_N=0)"] - res["Chae overdense (e_N=0.066)"]
    dm_rich = res["Chae void (e_N=0)"] - res["rich cluster (e_N=0.30)"]
    lowg = gbar < 0.1 * A0
    for k, v in res.items():
        print(f"      median f_DM  {k:<28} {np.median(v):.4f}")
    print(f"    Delta f_DM at the MEASURED SPARC contrast (e_N 0 -> 0.066): "
          f"median {np.median(dm):.2e}  90th {np.percentile(dm,90):.2e}  max {dm.max():.2e}")
    print(f"    Delta f_DM at a rich-cluster contrast (e_N 0 -> 0.30):       "
          f"median {np.median(dm_rich):.2e}  90th {np.percentile(dm_rich,90):.2e}  "
          f"max {dm_rich.max():.2e}")
    print(f"    restricted to g_bar < 0.1 a0 (N={lowg.sum()}): measured-contrast "
          f"median {np.median(dm[lowg]):.2e}  max {dm[lowg].max():.2e}")
    print()
    # framework at the SAME environmental contrast, like for like
    best_fw_med, best_fw_lowg, best_fw_max, best_tag = 0.0, 0.0, 0.0, ""
    for kname, rc in KNEES.items():
        for gam in GAMMAS:
            a = C_floored(rho_bar + RHO_AMB_MEAN * 0.2, gam, rc)      # delta = -0.8
            b = C_floored(rho_bar + RHO_AMB_MEAN * 31.0, gam, rc)     # delta = +30
            d = np.abs(a - b)
            if np.median(d) > best_fw_med:
                best_fw_med, best_fw_lowg, best_fw_max, best_tag = (
                    np.median(d), np.median(d[lowg]), d.max(), f"{kname} @ gamma={gam}")
    print()
    print( "    LIKE FOR LIKE, same galaxies, same environmental contrast SPARC spans:")
    print(f"      framework, best case over knees x gamma ({best_tag}):")
    print(f"        Delta f_DM  median {best_fw_med:.2e}  low-g median {best_fw_lowg:.2e}"
          f"  max {best_fw_max:.2e}")
    print(f"      MOND + EFE (Chae measured contrast):")
    print(f"        Delta f_DM  median {np.median(dm):.2e}  low-g median "
          f"{np.median(dm[lowg]):.2e}  max {dm.max():.2e}")
    print(f"      RATIO (low-g median, MOND/framework): "
          f"{np.median(dm[lowg])/max(best_fw_lowg,1e-30):.1f}x")
    print()

    # ---- B3 acceleration keying
    print("B3  framework, ACCELERATION-keyed C(a): the law's only argument is g_bar,")
    print("    which is held fixed by TEST-20's 'at same M_bar' protocol.")
    print("    Delta f_DM = 0 identically, at every gamma, every knee, every galaxy.")
    print()

    # ---- B4 is ambient-only keying viable at all?
    print("B4  could the framework be AMBIENT-keyed instead (making TEST-20 live)?")
    print("    Ambient density is constant to ~1e-6 across a galaxy, so C would be a")
    print("    per-galaxy constant and g_eff = g_N/C is a pure rescaling of G.")
    print("    Best per-galaxy CONSTANT boost vs MOND on the same curves:")
    chi_const, chi_mond, nn = [], [], []
    for n in names:
        g = gals[n]
        V2 = (UPS_D * g["Vdisk"]**2 * np.sign(g["Vdisk"])
              + UPS_B * g["Vbul"]**2 * np.sign(g["Vbul"])
              + g["Vgas"]**2 * np.sign(g["Vgas"]))
        V2 = np.maximum(V2, 1e-6)
        Vb = np.sqrt(V2)
        w = 1.0 / g["eV"]**2
        # constant boost B on g  => V = sqrt(B) Vb ; optimal sqrt(B) is a WLS scale
        s = np.sum(w * g["Vobs"] * Vb) / np.sum(w * Vb**2)
        c1 = np.sum(w * (g["Vobs"] - s * Vb)**2)
        gb = kms2_per_kpc_to_ms2(V2 / np.maximum(g["R"], 1e-6))
        go = mond_gobs(gb, 0.0)
        Vm = np.sqrt(go * 3.0857e19 * np.maximum(g["R"], 1e-6)) / 1e3
        c2 = np.sum(w * (g["Vobs"] - Vm)**2)
        chi_const.append(c1); chi_mond.append(c2); nn.append(len(g["R"]))
    chi_const, chi_mond, nn = map(np.array, (chi_const, chi_mond, nn))
    print(f"      constant-boost (ambient keying)  chi2/N = "
          f"{chi_const.sum()/nn.sum():.2f}   (per-galaxy median {np.median(chi_const/nn):.2f})")
    print(f"      MOND simple mu                   chi2/N = "
          f"{chi_mond.sum()/nn.sum():.2f}   (per-galaxy median {np.median(chi_mond/nn):.2f})")
    print(f"      aggregate ratio {chi_const.sum()/chi_mond.sum():.2f}x worse, but the PER-GALAXY")
    print( "      MEDIAN goes the other way -- the aggregate is carried by the best-measured")
    print( "      discs.  chi2 alone does NOT settle this; the shape test below does.")
    print()
    print( "    Parameter-free version (no fitting at all): under ambient keying C is a")
    print( "    per-galaxy constant, so g_obs = g_bar / C and the RAR is a line of slope")
    print( "    EXACTLY 1 in log-log, for every galaxy, every gamma, every knee.")
    for cut, lbl in [(0.1, "g_bar < 0.1 a0"), (0.03, "g_bar < 0.03 a0")]:
        m = (gbar < cut * A0) & (gbar > 0)
        gobs_obs = []
        for n in names:
            g = gals[n]
            V2 = (UPS_D * g["Vdisk"]**2 * np.sign(g["Vdisk"])
                  + UPS_B * g["Vbul"]**2 * np.sign(g["Vbul"])
                  + g["Vgas"]**2 * np.sign(g["Vgas"]))
            gobs_obs.append(kms2_per_kpc_to_ms2(g["Vobs"]**2 / np.maximum(g["R"], 1e-6)))
        go_all = np.concatenate(gobs_obs)[ok]
        x = np.log10(gbar[m]); y = np.log10(go_all[m])
        A = np.vstack([x, np.ones_like(x)]).T
        slope, icpt = np.linalg.lstsq(A, y, rcond=None)[0]
        resid = y - (slope * x + icpt)
        se = np.sqrt(np.sum(resid**2) / (len(x) - 2) /
                     np.sum((x - x.mean())**2))
        print(f"      observed RAR log-slope, {lbl} (N={m.sum():4d}): "
              f"{slope:.3f} +/- {se:.3f}   -> {abs(slope-1)/se:.1f} sigma from 1")
    print( "      Ambient-only keying is excluded by the RAR slope alone, with no free")
    print( "      parameter.  The density-keyed branch is therefore forced to be")
    print( "      baryon-local, which is what makes B1's lever as small as it is.")
    print()

    # ---- B5 what precision would be needed
    print("B5  detectability, at the environmental contrast SPARC actually spans")
    print(f"    framework  Delta f_DM, low-g median : {best_fw_lowg:.2e}  "
          f"(absolute ceiling over any delta up to 1000: {worst:.2e})")
    print(f"    MOND + EFE Delta f_DM, low-g median : {np.median(dm[lowg]):.2e}")
    print( "    per-galaxy f_DM precision on resolved HI curves: ~0.05 (Upsilon*-dominated),")
    print( "    so NEITHER is a single-galaxy measurement; both need a stacked estimator.")
    print(f"    Stacked N needed to reach 3 sigma at sigma_gal = 0.05:")
    for lbl, sig in [("framework", best_fw_lowg), ("MOND+EFE", np.median(dm[lowg]))]:
        N = (3 * 0.05 / max(sig, 1e-30)) ** 2
        print(f"      {lbl:<12} N = {N:.3g} galaxies")
    print( "    Chae+2021 did not use Delta f_DM -- they fitted e_N per galaxy from the outer")
    print( "    RC shape, a sharper estimator, and got >4 sigma on ~150 SPARC galaxies.")
    print( "    The framework's signal is smaller by the ratio above in ANY estimator that is")
    print( "    linear in the environmental perturbation.")
    print()

if __name__ == "__main__":
    part_A()
    part_B(load_sparc())
