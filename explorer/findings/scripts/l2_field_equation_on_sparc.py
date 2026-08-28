#!/usr/bin/env python3
r"""
THE FRAMEWORK'S OWN FIELD EQUATION, SOLVED ON SPARC FOR THE FIRST TIME
======================================================================
Explorer session 2026-08-28.

Every galaxy-sector fit in this program (08-24 head-to-head, the RAR-scatter
no-go, TEST-09/10, the plotter) evaluates the DIVISION LAW  g_obs = g_bar / C
(L3).  The framework's stated field equation is

        div( C(rho) grad Phi ) = 4 pi G rho                          (L2)

and 2026-08-26 showed L2 != L3 on a disc by up to B_max.  The 2026-08-28
visitor Pass 4 (researcher) asks for exactly this computation: "solve
div[C grad Phi] = 4 pi G rho for the disc ... let the reader see the same
form fit and fail", and claims the identical permittivity with Refracted
Gravity's published parameters fits.  Pass 3 (grad student) notes the
plotter runs neither law.

So: solve L2 on 149 SPARC discs (Q<=2, i>30), with the framework's C and
with Refracted Gravity's, at fixed published parameters and on a parameter
grid, and score against MOND (simple mu, RAR nu) and Newton on the same
points with the same likelihood.

ESTIMATORS NAMED (per feedback_state_which_nuisances_were_marginalised):
  * Upsilon_disk = 0.5, Upsilon_bul = 0.7 at 3.6 um (SPARC standard).  FIXED.
    Sensitivity: Upsilon_disk = 0.7 in section 5.
  * scale height h = 0.196 R_d^0.633 kpc (Bershady+2010), sech^2 slab.  FIXED.
    Sensitivity: h = 0.3 kpc constant in section 5.
  * gas Sigma from d/dR of the Vgas enclosed-mass proxy (loader default);
    alternative: exponential HI disc.  Both reported in section 1.
  * bulge: Abel deprojection of SBbul (spherical).
  * a0 = 1.2e-10 m/s^2 for the MOND references.  FIXED.
  * No per-galaxy nuisance is fitted anywhere.  N_eff = number of galaxies.

PREDICTION TRANSFER.  The grid mass model is not SPARC's (different gas
inversion, different bulge deprojection, thickness).  So the quantity taken
from the PDE is the BOOST on the grid,  B(R) = g_L2(R) / g_Newton(R), and the
prediction is  V_pred^2 = B(R) * V_bar,SPARC^2(R).  This cancels the mass-model
error to first order in the boost; C(rho) itself still sees the grid rho.
Both the transferred and the raw V_L2 are reported.
"""
import os
import sys
import time
import json
import numpy as np

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import l2_sparc_core as K   # noqa: E402

OMEGA_M = 0.315
OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)),
                   "l2_field_equation_on_sparc_cache.json")


def hdr(s):
    print("\n" + "=" * 78 + "\n" + s + "\n" + "=" * 78, flush=True)


# ------------------------------------------------------------------ per-galaxy
class Gal:
    def __init__(self, d, h_mode="bershady", gas_mode="vgas", up_disk=0.5, up_bul=0.7):
        self.d = d
        self.gid = d["gid"]
        Rd = d["props"]["Rdisk"]
        self.h = 0.196 * max(Rd, 0.1)**0.633 if h_mode == "bershady" else 0.3
        self.g = K.make_grid(d["R"][-1])
        self.rho, self.Mc = K.build_density(self.g, d, self.h, up_disk, up_bul, gas_mode)
        self.Mtot = 2 * self.Mc.sum()
        self.vbar, self.vbar2 = K.vbar_sparc(d, up_disk, up_bul)
        PhiN = K.solve_poisson_fast(self.g, np.ones_like(self.g.RR), self.Mc, 1.0, self.Mtot)
        self.gN_grid = K.midplane_gR(self.g, PhiN)
        self.gN = np.interp(d["R"], self.g.Rc, self.gN_grid)
        self.gbar_sparc = self.vbar2 / d["R"]
        self.rho_mid = np.interp(d["R"], self.g.Rc, self.rho[:, 0])      # Msun/kpc^3
        # transfer guard: the grid's Newtonian field must be positive and not tiny
        # (central HI holes / gas-derivative zeros make g_N,grid ~ 0 at a few inner points)
        # keep a point only if the grid's Newtonian field is within 0.5 dex of SPARC's g_bar
        # there (otherwise the grid rho that C sees is not the galaxy's)
        gb = np.where(self.vbar2 > 0, self.vbar2 / d["R"], 1.0)
        self.ok = (self.vbar2 > 0) & (d["Vobs"] > 0) & (self.gN > 0.316 * gb) & (self.gN < 3.16 * gb)
        self.n_dropped = int(np.sum((self.vbar2 > 0) & (d["Vobs"] > 0)) - self.ok.sum())

    def solve(self, Cfun, Cmin):
        C = Cfun(self.rho)
        Phi = K.solve_poisson_fast(self.g, C, self.Mc, Cmin, self.Mtot)
        gL2 = K.midplane_gR(self.g, Phi)
        gL2_R = np.interp(self.d["R"], self.g.Rc, gL2)
        B = np.where(self.ok, gL2_R / np.where(self.ok, self.gN, 1.0), 1.0)
        return B, gL2_R

    def score(self, v2pred):
        """chi2 and rms log residual on the ok points."""
        v = np.sqrt(np.clip(v2pred, 0, None))
        o = self.ok & (v > 0)
        r = (self.d["Vobs"][o] - v[o]) / self.d["eVobs"][o]
        lg = np.log10(self.d["Vobs"][o] / v[o])
        return float(np.sum(r**2)), int(o.sum()), float(np.sqrt(np.mean(lg**2)))


UPS_GRID = [0.3, 0.5, 0.7]
UPS_PRIOR_DEX = 0.10          # lognormal prior on Upsilon_disk about 0.5 (Li+2018 use 0.1 dex)


def profiled(scores):
    """scores: list over UPS_GRID of (chi2, n, rms).  Return the prior-penalised minimum."""
    best = None
    for u, (c, n, r) in zip(UPS_GRID, scores):
        pen = (np.log10(u / 0.5) / UPS_PRIOR_DEX)**2
        if best is None or c + pen < best[0] + best[3]:
            best = (c, n, r, pen, u)
    return (best[0] + best[3], best[1], best[2])


def summarise(name, per_gal):
    """per_gal: list of (chi2, n, rmslog).  Report global chi2/N and galaxy-level stats."""
    chi2 = np.array([p[0] for p in per_gal]); n = np.array([p[1] for p in per_gal])
    rms = np.array([p[2] for p in per_gal])
    red = chi2 / np.maximum(n, 1)
    return dict(name=name, chi2=float(chi2.sum()), N=int(n.sum()), chi2_per_pt=float(chi2.sum() / n.sum()),
                median_red=float(np.median(red)), rmslog_med=float(np.median(rms)),
                frac_red_lt_5=float(np.mean(red < 5)), per_gal_chi2=chi2.tolist(), per_gal_n=n.tolist())


# ------------------------------------------------------------------ models
def model_set(vflat):
    """Fixed-parameter models.  rho_c in Msun/pc^3."""
    rc_site = 0.029 * vflat**2
    return {
        "site  gamma=2   rho_c=0.029V^2 floor=Om":  (K.C_framework(2.0, rc_site, OMEGA_M), OMEGA_M),
        "site  gamma=.489 rho_c=0.029V^2 floor=Om": (K.C_framework(0.489, rc_site, OMEGA_M), OMEGA_M),
        "Jeans gamma=.489 rho_c=0.161   floor=Om":  (K.C_framework(0.489, 0.161, OMEGA_M), OMEGA_M),
        "Jeans gamma=2    rho_c=0.161   floor=Om":  (K.C_framework(2.0, 0.161, OMEGA_M), OMEGA_M),
        "RG    Cesare+20  e0=.089 q=.47 rc=8.3e-3": (K.C_refracted(0.089, 0.47, 8.3e-3), 0.089),
        "RG    Cesare+20  e0=.089 q=.47 rc=4.3e-3": (K.C_refracted(0.089, 0.47, 4.3e-3), 0.089),
        "RG    Pass4-quoted e0=.09 q=.7 rc=0.015":  (K.C_refracted(0.09, 0.70, 0.015), 0.09),
        "RG    DMS-unique e0=.661 Q=1.79 rc=4.3e-3": (K.C_refracted(0.661, 1.79, 4.3e-3), 0.661),
        "RG    DMS-mean   e0=.56  Q=.92  rc=7.4e-4": (K.C_refracted(0.56, 0.92, 7.4e-4), 0.56),
        "Jeans gamma=.489 rho_c=0.161   floor=.089": (K.C_framework(0.489, 0.161, 0.089), 0.089),
        "nofloor gamma=.489 rho_c=0.161 floor=1e-3": (K.C_framework(0.489, 0.161, 1e-3), 1e-3),
    }


def run(gas_mode="vgas", h_mode="bershady", up_disk=0.5, do_grid=True, tag="", profile_ups=True):
    gal = K.load_sparc()
    gids = sorted(gal)
    t0 = time.time()
    G = []; GU = {u: [] for u in UPS_GRID}
    for gid in gids:
        try:
            G.append(Gal(gal[gid], h_mode, gas_mode, up_disk))
            if profile_ups:
                for u in UPS_GRID:
                    GU[u].append(Gal(gal[gid], h_mode, gas_mode, u))
        except Exception as e:  # noqa
            print(f"   skip {gid}: {e}")
    print(f"built {len(G)} galaxies in {time.time()-t0:.0f}s  [{tag} gas={gas_mode} h={h_mode} Ups_d={up_disk}]"
          f"  transfer-guard dropped {sum(gg.n_dropped for gg in G)} of {sum(gg.ok.sum()+gg.n_dropped for gg in G)} points", flush=True)

    def score_model(Cf, Cmin, i):
        """fixed-Upsilon score for galaxy i, and profiled score if enabled."""
        gg = G[i]
        fixed = gg.score(gg.solve(Cf, Cmin)[0] * gg.vbar2)
        if not profile_ups:
            return fixed, fixed
        sc = []
        for u in UPS_GRID:
            gu = GU[u][i]
            sc.append(gu.score(gu.solve(Cf, Cmin)[0] * gu.vbar2))
        return fixed, profiled(sc)

    def score_ref(f, i):
        gg = G[i]
        fixed = gg.score(f(gg))
        if not profile_ups:
            return fixed, fixed
        return fixed, profiled([GU[u][i].score(f(GU[u][i])) for u in UPS_GRID])

    # ---------------------------------------------------------------- 1. mass model
    hdr(f"1. NEWTONIAN ON-GRID vs SPARC V_bar  [{tag}]  (is the grid mass model SPARC's?)")
    rat = []; med = []
    for gg in G:
        o = gg.ok
        r = np.log10(np.sqrt(gg.gN[o] * gg.d["R"][o]) / gg.vbar[o])
        rat.extend(r.tolist()); med.append(np.median(r))
    rat = np.array(rat); med = np.array(med)
    print(f"   per-point log10(V_N,grid / V_bar,SPARC): rms {np.sqrt(np.mean(rat**2)):.3f} dex, "
          f"median {np.median(rat):+.3f}, 16-84% [{np.percentile(rat,16):+.3f},{np.percentile(rat,84):+.3f}]")
    print(f"   per-galaxy median offset: rms {np.sqrt(np.mean(med**2)):.3f} dex; "
          f"|offset|>0.05 dex in {np.mean(np.abs(med)>0.05)*100:.0f}% of galaxies")
    print("   -> the BOOST transfer (V_pred^2 = B_grid * V_bar,SPARC^2) removes this at first order.")

    # ---------------------------------------------------------------- 2. fixed models
    hdr(f"2. FIXED-PARAMETER MODELS under L2  [{tag}]  (N_eff = galaxies; no per-galaxy nuisance)")
    results = {}
    refs = {"Newton (C=1)": lambda gg: gg.vbar2,
            "MOND simple mu (a0=1.2e-10)": lambda gg: K.mond_simple(gg.gbar_sparc) * gg.d["R"],
            "MOND RAR nu (McGaugh+16)": lambda gg: K.mond_rar(gg.gbar_sparc) * gg.d["R"]}
    prof = {}
    for name, f in refs.items():
        both = [score_ref(f, i) for i in range(len(G))]
        results[name] = summarise(name, [b[0] for b in both])
        prof[name] = summarise(name, [b[1] for b in both])
    names = list(model_set(100.0).keys())
    boosts = {n: [] for n in names}; pboosts = {n: [] for n in names}
    for i, gg in enumerate(G):
        ms = model_set(max(gg.d["props"]["Vflat"], 10.0))
        for n in names:
            Cf, Cmin = ms[n]
            fx, pr = score_model(Cf, Cmin, i)
            boosts[n].append(fx); pboosts[n].append(pr)
    for n in names:
        results["L2 " + n] = summarise("L2 " + n, boosts[n])
        prof["L2 " + n] = summarise("L2 " + n, pboosts[n])
    print(f"   {'model':<50s} | {'--- Ups_d = 0.5 fixed ---':>32s} | {'--- Ups_d profiled {0.3,0.5,0.7} ---':>34s}")
    print(f"   {'':<50s} | {'chi2/N':>8s} {'med chi2/n':>10s} {'rms dex':>8s} | {'chi2/N':>8s} {'med chi2/n':>10s} {'rms dex':>8s}")
    order = sorted(results, key=lambda k: prof[k]["chi2_per_pt"])
    for k in order:
        r = results[k]; p = prof[k]
        print(f"   {k:<50s} | {r['chi2_per_pt']:8.2f} {r['median_red']:10.2f} {r['rmslog_med']:8.3f} | "
              f"{p['chi2_per_pt']:8.2f} {p['median_red']:10.2f} {p['rmslog_med']:8.3f}")
    results_fixed = results
    results = prof          # everything downstream uses the profiled scores
    # galaxy-level head-to-head vs MOND simple
    hdr(f"2b. GALAXY-LEVEL HEAD-TO-HEAD vs MOND simple mu  [{tag}]")
    ref = np.array(results["MOND simple mu (a0=1.2e-10)"]["per_gal_chi2"])
    for k in order:
        if not k.startswith("L2 ") and k not in refs:
            continue
        c = np.array(results[k]["per_gal_chi2"])
        d = np.log10(np.maximum(c, 1e-3) / np.maximum(ref, 1e-3))
        wins = np.mean(c < ref)
        print(f"   {k:<50s} wins {wins*100:4.0f}% of galaxies;  median log10(chi2/chi2_MOND) = {np.median(d):+.2f};"
              f"  sum dchi2 = {c.sum()-ref.sum():+.0f}")

    # ---------------------------------------------------------------- 2c. boost diagnostics
    hdr(f"2c. WHERE DOES THE BOOST TURN ON?  [{tag}]  (max B per galaxy; knee radius)")
    for n in ["Jeans gamma=.489 rho_c=0.161   floor=Om", "RG    Cesare+20  e0=.089 q=.47 rc=8.3e-3",
              "RG    DMS-unique e0=.661 Q=1.79 rc=4.3e-3", "site  gamma=2   rho_c=0.029V^2 floor=Om"]:
        Bmax, Bmin, req = [], [], []
        for gg in G:
            ms = model_set(max(gg.d["props"]["Vflat"], 10.0)); Cf, Cmin = ms[n]
            B, _ = gg.solve(Cf, Cmin)
            o = gg.ok
            Bmax.append(B[o].max()); Bmin.append(B[o].min())
            req.append((gg.d["Vobs"][o]**2 / gg.vbar2[o]).max())
        Bmax, Bmin, req = map(np.array, (Bmax, Bmin, req))
        print(f"   {n}")
        print(f"      B at innermost/outermost: min-over-sample of min B = {Bmin.min():.2f}, median min B = {np.median(Bmin):.2f};"
              f"  median max B = {np.median(Bmax):.2f}, ceiling 1/floor = {1/ms[n][1]:.2f}")
        print(f"      required max boost (Vobs^2/Vbar^2): median {np.median(req):.2f}; galaxies needing > delivered max B: {np.mean(req > Bmax)*100:.0f}%")

    if not do_grid:
        return results

    # ---------------------------------------------------------------- 3. parameter grid
    hdr(f"3. PARAMETER GRID under L2  [{tag}]  (floor x rho_c; framework form gamma=0.489, RG form q=0.47)")
    floors = [0.05, 0.089, 0.15, 0.315, 0.661]
    rcs = np.logspace(-3.5, 0.5, 7)
    grid = {}
    for form in ["framework", "RG"]:
        print(f"   --- {form} form ---")
        print("   floor \\ rho_c " + " ".join(f"{r:8.3g}" for r in rcs) + "   (chi2/N; * = best in row)")
        for fl in floors:
            row = []
            for rc in rcs:
                Cf = K.C_framework(0.489, rc, fl) if form == "framework" else K.C_refracted(fl, 0.47, rc)
                sc = [score_model(Cf, fl, i)[1] for i in range(len(G))]
                s = summarise(f"{form} fl={fl} rc={rc:.3g}", sc)
                grid[(form, fl, float(rc))] = s
                row.append(s["chi2_per_pt"])
            row = np.array(row); b = np.argmin(row)
            print(f"   {fl:5.3f}         " + " ".join(f"{v:8.2f}" + ("*" if i == b else " ") for i, v in enumerate(row)), flush=True)
    best = min(grid, key=lambda k: grid[k]["chi2_per_pt"])
    print(f"\n   BEST on grid: {best}  chi2/N = {grid[best]['chi2_per_pt']:.2f}  "
          f"(MOND simple {results['MOND simple mu (a0=1.2e-10)']['chi2_per_pt']:.2f}, "
          f"RAR nu {results['MOND RAR nu (McGaugh+16)']['chi2_per_pt']:.2f}, "
          f"Newton {results['Newton (C=1)']['chi2_per_pt']:.2f})")
    # exponent scan at the best (form, floor, rc)
    form, fl, rc = best
    print(f"\n   exponent scan at floor={fl}, rho_c={rc:.3g} ({form} form):")
    for ex in [0.25, 0.35, 0.489, 0.7, 1.0, 2.0]:
        Cf = K.C_framework(ex, rc, fl) if form == "framework" else K.C_refracted(fl, ex, rc)
        sc = [score_model(Cf, fl, i)[1] for i in range(len(G))]
        s = summarise("", sc)
        print(f"      exponent {ex:5.3f}: chi2/N = {s['chi2_per_pt']:.2f}  median chi2/n = {s['median_red']:.2f}", flush=True)
    # galaxy-level vs MOND at the best point
    c = np.array(grid[best]["per_gal_chi2"])
    print(f"\n   best grid point vs MOND simple: wins {np.mean(c < ref)*100:.0f}% of galaxies, "
          f"median log10(chi2/chi2_MOND) = {np.median(np.log10(np.maximum(c,1e-3)/np.maximum(ref,1e-3))):+.2f}")
    # Wilcoxon-style sign test at galaxy level
    from scipy.stats import wilcoxon
    try:
        st = wilcoxon(np.log(np.maximum(c, 1e-3)), np.log(np.maximum(ref, 1e-3)))
        print(f"   Wilcoxon (galaxy-level, N={len(c)}): p = {st.pvalue:.2e}")
    except Exception as e:  # noqa
        print("   wilcoxon failed", e)
    results["grid"] = {str(k): v["chi2_per_pt"] for k, v in grid.items()}
    results["best"] = str(best)
    return results


if __name__ == "__main__":
    what = sys.argv[1] if len(sys.argv) > 1 else "main"
    if what == "massmodel":
        for gm in ["vgas", "exp"]:
            run(gas_mode=gm, do_grid=False, tag=f"gas={gm}", profile_ups=False)
    elif what == "main":
        res = run(gas_mode="vgas", tag="baseline")
        json.dump({k: v for k, v in res.items() if not isinstance(v, dict) or "per_gal_chi2" not in v} |
                  {k: {kk: vv for kk, vv in v.items() if kk != "per_gal_chi2" and kk != "per_gal_n"} for k, v in res.items() if isinstance(v, dict) and "per_gal_chi2" in v},
                  open(OUT, "w"), indent=1)
    elif what == "sens":
        hdr("5. SENSITIVITY: Upsilon_disk = 0.7 ; h = 0.3 kpc constant ; gas = exponential")
        run(gas_mode="vgas", h_mode="const", do_grid=False, tag="h=0.3")
        run(gas_mode="exp", do_grid=False, tag="gas=exp")
