#!/usr/bin/env python3
r"""
Is the boost ceiling a REFUTATION or a MEASUREMENT?
===================================================

Visitor Pass 4 (2026-08-30) makes a specific rescue claim about two of the six
counted refutations:

    "The boost ceiling is a fitted parameter, not a cosmological identity. In RG
     the maximum boost is exactly 1/eps0, and eps0 is *fitted* ... The site
     instead asserts B <= 1/Omega_m = 3.17 ... If eps0 is free, TEST-09 and
     TEST-10 are not refutations of the framework -- they are measurements of
     eps0, and SPARC's f_DM = 0.927 measures eps0 ~= 0.073."

This is a claim that the galaxy-sector refutation count drops from 6 to 4.  It is
testable.  The 2026-08-28 run scanned floor in {0.05, 0.089, 0.15, 0.315, 0.661}
but its three lowest-floor rows bottomed out ON THE LEFT GRID EDGE and were still
falling -- i.e. UNCONVERGED.  This script converges them, and then asks the
maximally generous version of the same question.

Everything is solved under L2, the framework's actual stated field equation

    div( C(rho) grad Phi ) = 4 pi G rho                        (NOT g = g_bar/C)

using the 2026-08-28 finite-volume solver (validated to 0.4% against the exact
Hankel transform of an exponential/sech^2 disc).

  E1  CONVERGED (eps0, rho_c) PROFILE.  Both C-forms, grid extended 2.5 dex left
      so every row has an interior minimum or provably runs into the Newtonian
      limit.  Answers: what IS the best-fit eps0, and does freeing it close the
      gap to MOND?

  E2  PER-GALAXY FREE eps0.  The maximally generous rescue: every galaxy gets to
      measure its own ceiling (153 extra free parameters, vs MOND's zero).  If
      the class still loses, amplitude freedom is not what is missing.

  E3  FORM-FREE SIGN TEST.  No parameters at all.  Any C that is monotone
      INCREASING in rho delivers a boost that is monotone DECREASING in rho.  So
      the required boost must be anti-correlated with local density, in every
      galaxy, or no member of the class fits it.  Count the galaxies where the
      sign is wrong.  This is a statement about the whole class, forever,
      independent of eps0, rho_c, the exponent, and the functional form.

NUISANCES -- STATED BEFORE ANY NUMBER (feedback_state_which_nuisances_were_marginalised):
  MARGINALISED : Upsilon_disk, per galaxy, on {0.3,0.5,0.7} with a 0.1 dex
                 lognormal prior about 0.5 (Li+2018's prior), where flagged.
                 eps0 per galaxy in E2.
  FIXED        : Upsilon_bul = 0.7; distance; inclination; disc scale height
                 (Bershady h = 0.196 Rd^0.633); gas from V_gas; a0 = 1.2e-10
                 for the MOND reference (also profiled, see E1b).
  NOT MARGINALISED, AND THIS MATTERS: distance and inclination.  Li+2018 obtain
                 median reduced chi2 ~ 1-2 for MOND on SPARC *with* D and i
                 marginalised; here MOND lands at chi2/N ~ 21.  So the ABSOLUTE
                 chi2 values below are meaningless and no absolute claim is made
                 from them.  Every claim in this script is a RATIO between models
                 scored on identical points with identical nuisance treatment.
"""
import os
import sys
import json
import time
import numpy as np

HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)
import l2_sparc_core as K                      # noqa: E402
import l2_field_equation_on_sparc as D         # noqa: E402

OMEGA_M = 0.315
UPS_GRID = D.UPS_GRID
OUT = os.path.join(HERE, "epsilon0_free_the_ceiling_rescue_cache.json")


def hdr(s):
    print("\n" + "=" * 78 + f"\n{s}\n" + "=" * 78, flush=True)


# --------------------------------------------------------------- build sample
t0 = time.time()
gals = K.load_sparc()
G = [D.Gal(d) for d in gals.values()]
GU = {u: [D.Gal(d, up_disk=u) for d in gals.values()] for u in UPS_GRID if u != 0.5}
GU[0.5] = G
print(f"built {len(G)} galaxies x {len(UPS_GRID)} Upsilon in {time.time()-t0:.0f}s", flush=True)

NPTS = sum(int(g.ok.sum()) for g in G)
print(f"N points = {NPTS}   (transfer-guard dropped {sum(g.n_dropped for g in G)})", flush=True)


def score_fixed(Cf, Cmin, gl):
    """per-galaxy (chi2, n, rms) at Upsilon_d = 0.5."""
    return [g.score(g.solve(Cf, Cmin)[0] * g.vbar2) for g in gl]


def score_prof(Cf, Cmin):
    """per-galaxy prior-penalised minimum over the Upsilon grid."""
    per_u = {u: [g.score(g.solve(Cf, Cmin)[0] * g.vbar2) for g in GU[u]] for u in UPS_GRID}
    return [D.profiled([per_u[u][i] for u in UPS_GRID]) for i in range(len(G))]


def agg(per_gal):
    c = np.array([p[0] for p in per_gal]); n = np.array([p[1] for p in per_gal])
    return float(c.sum() / n.sum()), c, n


# ------------------------------------------------------- reference: MOND, Newton
hdr("0. REFERENCES (identical points, identical nuisance treatment)")
print("   Reported at BOTH Upsilon treatments, because the L2 grid below is run at")
print("   Upsilon = 0.5 fixed and must be compared like-for-like.\n")
print(f"   {'model':<32s} {'Ups=0.5 fixed':>14s} {'Ups profiled':>14s}")
refs, refs_fix = {}, {}
for nm, f in (("Newton (C=1)", lambda g: g.vbar2),
              ("MOND simple mu  a0=1.2e-10", lambda g: K.mond_simple(g.gbar_sparc) * g.d["R"]),
              ("MOND RAR nu     McGaugh+16", lambda g: K.mond_rar(g.gbar_sparc) * g.d["R"])):
    per_u = {u: [g.score(f(g)) for g in GU[u]] for u in UPS_GRID}
    pg = [D.profiled([per_u[u][i] for u in UPS_GRID]) for i in range(len(G))]
    cp, c, n = agg(pg)
    cpf, cf, _ = agg(per_u[0.5])
    refs[nm] = dict(chi2_per_pt=cp, per_gal=c.tolist(), n=n.tolist())
    refs_fix[nm] = dict(chi2_per_pt=cpf, per_gal=cf)
    print(f"   {nm:<32s} {cpf:14.2f} {cp:14.2f}")

# MOND with a0 free (the fair comparison: give MOND its one parameter too)
best_a0 = None
for a0 in np.logspace(np.log10(0.4e-10), np.log10(3.0e-10), 15):
    a0k = a0 / 3.24078e-14
    old = K.A0_KPC
    K.A0_KPC = a0k
    per_u = {u: [g.score(K.mond_simple(g.gbar_sparc) * g.d["R"]) for g in GU[u]] for u in UPS_GRID}
    K.A0_KPC = old
    pg = [D.profiled([per_u[u][i] for u in UPS_GRID]) for i in range(len(G))]
    cp, c, n = agg(pg)
    if best_a0 is None or cp < best_a0[1]:
        best_a0 = (a0, cp, c)
print(f"   {'MOND simple mu, a0 FREE':<32s} chi2/N = {best_a0[1]:8.2f}   at a0 = {best_a0[0]:.3e}")
refs["MOND simple mu, a0 free"] = dict(chi2_per_pt=best_a0[1], per_gal=best_a0[2].tolist(),
                                       a0=best_a0[0], n=refs["MOND simple mu  a0=1.2e-10"]["n"])
MOND = np.array(refs["MOND simple mu  a0=1.2e-10"]["per_gal"])          # Ups profiled
MOND_F = np.array(refs_fix["MOND simple mu  a0=1.2e-10"]["per_gal"])    # Ups = 0.5 fixed
NEWT = refs["Newton (C=1)"]["chi2_per_pt"]
NN = np.array(refs["MOND simple mu  a0=1.2e-10"]["n"])

# ------------------------------------------------------------------ E1: profile
hdr("E1. CONVERGED (eps0, rho_c) PROFILE UNDER L2   [Upsilon_d = 0.5 fixed]")
print("    C_fw(rho) = eps0 + (1-eps0) tanh( 0.489 ln(1+rho/rho_c) )      ceiling = 1/eps0")
print("    C_rg(rho) = eps0 + (1-eps0) (1/2)[tanh( 0.47 ln(rho/rho_c) )+1]")
print("    rho_c -> 0  is the NEWTONIAN limit of the framework form;")
print("    rho_c -> inf is the UNIFORM-BOOST limit (B = 1/eps0 everywhere).\n")

EPS = np.array([0.02, 0.035, 0.05, 0.073, 0.089, 0.12, 0.16, 0.22, 0.315, 0.42, 0.56, 0.661, 0.80])
RHOC = np.logspace(-7, 1.5, 12)
if "--smoke" in sys.argv:                       # tiny grid, to shake out bugs only
    EPS = np.array([0.073, 0.315]); RHOC = np.logspace(-5, 1, 3)

grid = {}
for form in ("fw", "rg"):
    print(f"   --- {form} form ---", flush=True)
    print("   eps0 \\ rho_c " + " ".join(f"{r:8.2g}" for r in RHOC) + "     row min")
    for e0 in EPS:
        row, rowc = [], []
        for rc in RHOC:
            Cf = K.C_framework(0.489, rc, e0) if form == "fw" else K.C_refracted(e0, 0.47, rc)
            cp, c, n = agg(score_fixed(Cf, e0, G))
            row.append(cp); rowc.append(c)
            grid[(form, float(e0), float(rc))] = dict(chi2_per_pt=cp, per_gal=c)
        j = int(np.argmin(row))
        mark = "  <-EDGE" if j in (0, len(RHOC) - 1) else ""
        print(f"   {e0:<6.3f}      " + " ".join(f"{v:8.1f}" for v in row) +
              f"   {row[j]:8.1f} @ {RHOC[j]:.2g}{mark}", flush=True)

bestk = min(grid, key=lambda k: grid[k]["chi2_per_pt"])
print(f"\n   BEST over the whole 2-parameter class: {bestk}  chi2/N = {grid[bestk]['chi2_per_pt']:.2f}")
print(f"   (MOND simple a0 fixed {refs['MOND simple mu  a0=1.2e-10']['chi2_per_pt']:.2f} at Ups profiled;"
      f"  Newton {NEWT:.2f})")

# exponent freedom at the optimum: is the shape parameter doing anything?
print("\n   exponent scan at the optimum (adds a 3rd free parameter):")
_, e0b, rcb = bestk
for ex in (0.1, 0.25, 0.489, 1.0, 2.0, 4.0):
    Cf = K.C_framework(ex, rcb, e0b) if bestk[0] == "fw" else K.C_refracted(e0b, ex, rcb)
    cp, _, _ = agg(score_fixed(Cf, e0b, G))
    print(f"      exponent {ex:5.2f}: chi2/N = {cp:8.2f}")

# ------------------------------------------------------------ E2: per-galaxy eps0
hdr("E2. PER-GALAXY FREE eps0  (the maximally generous form of the rescue)")
print("    Every galaxy picks its own ceiling AND its own rho_c from the E1 grid.")
print("    That is 2 free parameters per galaxy = 306, against MOND's 0.\n")

print("    LIKE-FOR-LIKE: the grid is at Upsilon = 0.5 fixed, so the comparison")
print("    reference here is MOND at Upsilon = 0.5 fixed too.\n")
BEST_PG = {}
for form in ("fw", "rg"):
    keys = [k for k in grid if k[0] == form]
    M = np.array([grid[k]["per_gal"] for k in keys])           # (nparam, ngal)
    best_per_gal = M.min(axis=0)
    arg = M.argmin(axis=0)
    BEST_PG[form] = (best_per_gal, [keys[a] for a in arg])
    print(f"   {form}: chi2/N, per-galaxy (eps0,rho_c) free = {best_per_gal.sum()/NN.sum():8.2f}"
          f"   vs MOND (0 free params) {MOND_F.sum()/NN.sum():8.2f}"
          f"   wins {100*np.mean(best_per_gal < MOND_F):3.0f}% of galaxies")
    # N_eff-honest restatement: the sum over points is dominated by a handful of
    # galaxies with small error bars.  Galaxy is the independent unit.
    from scipy.stats import wilcoxon as _w
    rc_cls = best_per_gal / np.maximum(NN, 1); rc_mnd = MOND_F / np.maximum(NN, 1)
    st = _w(rc_cls, rc_mnd)
    print(f"        GALAXY-LEVEL (N_eff = {len(NN)}): median reduced chi2 "
          f"class {np.median(rc_cls):6.2f} vs MOND {np.median(rc_mnd):6.2f}; "
          f"paired Wilcoxon p = {st.pvalue:.2e}")
    top = np.argsort(-(best_per_gal - MOND_F))[:5]
    frac = (best_per_gal - MOND_F)[top].sum() / max((best_per_gal - MOND_F).sum(), 1e-9)
    print(f"        top 5 galaxies carry {100*frac:.0f}% of the total chi2 gap "
          f"({', '.join(G[j].gid for j in top)})")
    e0s = np.array([keys[a][1] for a in arg])
    print(f"        preferred eps0 per galaxy: median {np.median(e0s):.3f}, "
          f"16-84% [{np.percentile(e0s,16):.3f},{np.percentile(e0s,84):.3f}]; "
          f"pinned at grid floor {100*np.mean(e0s<=EPS[0]):.0f}%, at grid top {100*np.mean(e0s>=EPS[-1]):.0f}%")
    print(f"        implied ceiling 1/eps0: median {1/np.median(e0s):.2f}, "
          f"16-84% [{1/np.percentile(e0s,84):.2f},{1/np.percentile(e0s,16):.2f}]")
    if form == "fw":
        np.save(os.path.join(HERE, "epsilon0_per_galaxy_fw.npy"),
                np.vstack([e0s, best_per_gal, MOND_F, NN]))

# ------------------- E2b: add Upsilon freedom to the class too, near the basin
hdr("E2b. SAME, WITH Upsilon ALSO MARGINALISED FOR THE CLASS  (basin sub-grid)")
sub_e = EPS[(EPS >= 0.05) & (EPS <= 0.56)]
sub_r = RHOC[::2]
print(f"    sub-grid {len(sub_e)} eps0 x {len(sub_r)} rho_c, Upsilon profiled on {UPS_GRID}")
print("    (both sides now carry the same nuisance treatment)\n")
subM = {}
for form in ("fw", "rg"):
    rowsM = []
    for e0 in sub_e:
        for rc in sub_r:
            Cf = K.C_framework(0.489, rc, e0) if form == "fw" else K.C_refracted(e0, 0.47, rc)
            pg = score_prof(Cf, e0)
            rowsM.append((e0, rc, np.array([p[0] for p in pg])))
    M = np.array([r[2] for r in rowsM])
    glob = M.sum(axis=1).min() / NN.sum()
    bp = M.min(axis=0)
    subM[form] = (glob, bp, rowsM, M)
    print(f"   {form}: global best (eps0,rho_c) = {glob:8.2f} ;  per-galaxy free = {bp.sum()/NN.sum():8.2f}"
          f" ;  MOND = {MOND.sum()/NN.sum():8.2f} ;  per-galaxy wins {100*np.mean(bp < MOND):3.0f}%")
    from scipy.stats import wilcoxon as _w2
    print(f"        GALAXY-LEVEL: median reduced chi2 class {np.median(bp/np.maximum(NN,1)):6.2f}"
          f" vs MOND {np.median(MOND/np.maximum(NN,1)):6.2f};"
          f"  paired Wilcoxon p = {_w2(bp/np.maximum(NN,1), MOND/np.maximum(NN,1)).pvalue:.2e}")
    e0s = np.array([rowsM[a][0] for a in M.argmin(axis=0)])
    print(f"        preferred eps0: median {np.median(e0s):.3f}, 16-84% "
          f"[{np.percentile(e0s,16):.3f},{np.percentile(e0s,84):.3f}]")

# --------------------------------------------------- E3: form-free sign test
hdr("E3. FORM-FREE SIGN TEST  (no parameters at all)")
print("    Any monotone-increasing C(rho) => boost B = f(rho) monotone DECREASING.")
print("    So Spearman[ rho_mid(r), B_required(r) ] must be NEGATIVE in every galaxy.")
print("    B_required = Vobs^2 / Vbar^2 on the same points, Upsilon_d = 0.5.\n")

from scipy.stats import spearmanr           # noqa: E402
rows = []
for g in G:
    o = g.ok
    if o.sum() < 5:
        continue
    rho = g.rho_mid[o] / K.KPC3               # Msun/pc^3
    Breq = g.d["Vobs"][o]**2 / g.vbar2[o]
    rs, p = spearmanr(rho, Breq)
    rows.append((g.gid, rs, p, int(o.sum()), float(Breq.max()), float(np.median(rho))))

rs = np.array([r[1] for r in rows]); ps = np.array([r[2] for r in rows])
wrong = (rs > 0)
sig_wrong = (rs > 0) & (ps < 0.05)
print(f"   N galaxies with >=5 usable points: {len(rows)}")
print(f"   median Spearman(rho, B_req) = {np.median(rs):+.3f}   (a perfect C would give -1)")
print(f"   WRONG SIGN (rho and B_req rise together): {wrong.sum()}/{len(rows)} = {100*wrong.mean():.0f}%")
print(f"   wrong sign AND p < 0.05:                  {sig_wrong.sum()}/{len(rows)} = {100*sig_wrong.mean():.0f}%")
print(f"   right sign AND p < 0.05:                  {((rs<0)&(ps<0.05)).sum()}/{len(rows)}")

# the same test for the acceleration variable, which is what MOND keys on
rows_g = []
for g in G:
    o = g.ok
    if o.sum() < 5:
        continue
    gbar = g.gbar_sparc[o]
    Breq = g.d["Vobs"][o]**2 / g.vbar2[o]
    rows_g.append(spearmanr(gbar, Breq)[0])
rows_g = np.array(rows_g)
print(f"\n   SAME TEST ON THE ACCELERATION VARIABLE (what MOND keys on):")
print(f"   median Spearman(g_bar, B_req) = {np.median(rows_g):+.3f}")
print(f"   WRONG SIGN: {(rows_g>0).sum()}/{len(rows_g)} = {100*np.mean(rows_g>0):.0f}%")

worst = sorted([r for r in rows if r[1] > 0], key=lambda r: -r[1])[:12]
if worst:
    print("\n   worst offenders (rho and required boost rise together):")
    print(f"      {'galaxy':<12s} {'rho_s':>7s} {'p':>9s} {'n':>4s} {'maxBreq':>8s}")
    for gid, r, p, n_, mb, _ in worst:
        print(f"      {gid:<12s} {r:+7.3f} {p:9.2e} {n_:4d} {mb:8.2f}")

# --------------------------------- E4: what is LEFT after per-galaxy amplitude freedom
hdr("E4. RESIDUAL SHAPE AFTER PER-GALAXY (eps0, rho_c) FREEDOM")
print("    At each galaxy's OWN best (eps0,rho_c), regress log10(Vobs/Vpred) on")
print("    log10(R/Rdisk).  A nonzero systematic slope is a RADIAL SHAPE error --")
print("    the one thing no amplitude parameter (eps0) can absorb.\n")

def shape_slopes(pred_fn, label):
    sl, rr = [], []
    for i, g in enumerate(G):
        o = g.ok
        if o.sum() < 5:
            continue
        v = np.sqrt(np.clip(pred_fn(i, g), 1e-12, None))
        y = np.log10(g.d["Vobs"][o] / v[o])
        x = np.log10(g.d["R"][o] / max(g.d["props"]["Rdisk"], 0.05))
        if np.ptp(x) < 1e-6:
            continue
        A = np.polyfit(x, y, 1)
        sl.append(A[0]); rr.append(float(np.sqrt(np.mean(y**2))))
    sl = np.array(sl); rr = np.array(rr)
    med = np.median(sl)
    # sign test on the per-galaxy slopes: is the population slope systematically nonzero?
    from scipy.stats import wilcoxon
    st = wilcoxon(sl)
    print(f"   {label:<34s} median slope {med:+.4f} dex/dex   "
          f"|slope|>0.02 in {100*np.mean(np.abs(sl)>0.02):3.0f}%   "
          f"Wilcoxon p = {st.pvalue:.2e}   median rms {np.median(rr):.3f} dex")
    return sl

keys_fw = BEST_PG["fw"][1]
def pred_class(i, g):
    _, e0, rc = keys_fw[i]
    Cf = K.C_framework(0.489, rc, e0)
    return g.solve(Cf, e0)[0] * g.vbar2
sl_cls = shape_slopes(pred_class, "L2 class, per-galaxy eps0,rho_c")
sl_mond = shape_slopes(lambda i, g: K.mond_simple(g.gbar_sparc) * g.d["R"], "MOND simple mu, 0 free params")
sl_newt = shape_slopes(lambda i, g: g.vbar2, "Newton")
print(f"\n   The class has {np.median(np.abs(sl_cls))/max(np.median(np.abs(sl_mond)),1e-9):.2f}x MOND's"
      f" median |radial slope error| WHILE carrying 2 free parameters per galaxy to MOND's 0.")

json.dump(dict(N=NPTS,
               refs={k: v["chi2_per_pt"] for k, v in refs.items()},
               best=dict(key=[bestk[0], bestk[1], bestk[2]], chi2_per_pt=grid[bestk]["chi2_per_pt"]),
               grid={f"{k[0]}|{k[1]:.4g}|{k[2]:.4g}": v["chi2_per_pt"] for k, v in grid.items()},
               spearman_rho=dict(median=float(np.median(rs)), wrong=int(wrong.sum()),
                                 sig_wrong=int(sig_wrong.sum()), n=len(rows)),
               spearman_gbar=dict(median=float(np.median(rows_g)), wrong=int(np.sum(rows_g > 0))),
               per_galaxy_free=dict(fw=float(BEST_PG["fw"][0].sum() / NN.sum()),
                                    rg=float(BEST_PG["rg"][0].sum() / NN.sum()),
                                    mond_fixed_ups=float(MOND_F.sum() / NN.sum())),
               with_upsilon=dict(fw=float(subM["fw"][1].sum() / NN.sum()),
                                 rg=float(subM["rg"][1].sum() / NN.sum()),
                                 fw_global=subM["fw"][0], rg_global=subM["rg"][0],
                                 mond=float(MOND.sum() / NN.sum())),
               shape=dict(cls=float(np.median(np.abs(sl_cls))), mond=float(np.median(np.abs(sl_mond))),
                          newton=float(np.median(np.abs(sl_newt))))),
          open(OUT, "w"), indent=1)
print(f"\n[cache -> {os.path.basename(OUT)}]   total {time.time()-t0:.0f}s")
