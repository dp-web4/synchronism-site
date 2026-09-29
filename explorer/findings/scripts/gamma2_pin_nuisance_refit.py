#!/usr/bin/env python3
"""The gamma = 2 pin with per-galaxy nuisances free (explorer 2026-09-29).

Pre-registered in gamma2_pin_nuisance_refit_PREREG.md (site commit 187d495) BEFORE this file existed.

Arms:
  A  frozen nuisances, unweighted log-space SSR      (identity control against the 07-22 artifact)
  B  frozen nuisances, velocity chi^2 with e_Vobs      (isolates the weighting change)
  C  Upsilon_d, Upsilon_b, D, i profiled per galaxy under Li+2018 Gaussian priors, velocity chi^2
Every statistic downstream is computed from the stored per-galaxy table chi2_g(gamma, a0), so the
galaxy-block bootstrap re-profiles a0 and gamma-hat per resample exactly.
"""
import os, sys, time
import numpy as np
from multiprocessing import Pool
from scipy.optimize import minimize, minimize_scalar
from scipy.stats import binomtest, wilcoxon

HERE = os.path.dirname(os.path.abspath(__file__))
WS = os.path.normpath(os.path.join(HERE, "..", "..", "..", ".."))
DDIR = os.path.join(WS, "Synchronism", "simulations", "sparc_real_data")
MM = os.path.join(DDIR, "MassModels_Lelli2016c.mrt")
GT = os.path.join(DDIR, "SPARC_Lelli2016c.mrt")
KPC_M, KMS = 3.0856775814913673e19, 1.0e3
UP_DISK, UP_BUL, ERR_CUT = 0.5, 0.7, 0.10
PRIOR_DEX = 0.10
SEED = 20260929
# argv: [sigint_dex] [upsilon_bound_dex]; defaults are the registered arm C
SIGINT_DEX = float(sys.argv[1]) if len(sys.argv) > 1 else 0.0   # per-point intrinsic RAR scatter (Desmond+2024: 0.034 dex)
UB = float(sys.argv[2]) if len(sys.argv) > 2 else 0.5             # |dlog Upsilon| bound (Li+2018 reached 0.7-0.8 dex)
SUFFIX = ("" if SIGINT_DEX == 0 else f"_sigint{SIGINT_DEX:g}") + ("" if UB == 0.5 else f"_ub{UB:g}")
OUT = os.path.join(HERE, f"gamma2_pin_nuisance_refit{SUFFIX}_output.txt")
NPZ = os.path.join(HERE, f"gamma2_pin_nuisance_refit{SUFFIX}_tables.npz")

GAMMAS = np.array([0.30, 0.35, 0.40, 0.45, 0.489, 0.50, 0.55, 0.60, 0.70, 0.80, 0.90, 1.00, 1.20, 1.50, 2.00, 2.50, 3.00])
LA0 = np.round(np.arange(-10.8, -8.999, 0.05), 4)
IG2 = int(np.where(GAMMAS == 2.0)[0][0])

_log = []
def P(*a):
    s = " ".join(str(x) for x in a)
    print(s, flush=True); _log.append(s)


# ---------------------------------------------------------------- data
def load():
    gt = {}
    with open(GT, encoding="utf-8") as fh:
        for line in fh:
            p = line.split()
            if len(p) < 18:
                continue
            try:
                gt[p[0]] = dict(D=float(p[2]), eD=float(p[3]), inc=float(p[5]), einc=float(p[6]), Q=int(p[17]))
            except ValueError:
                continue
    gals = {}
    with open(MM, encoding="utf-8") as fh:
        for line in fh:
            p = line.split()
            if len(p) != 10:
                continue
            try:
                r, vo, evo, vg, vd, vb = map(float, p[2:8])
            except ValueError:
                continue
            if r <= 0 or vo <= 0 or evo / vo > ERR_CUT:
                continue
            vb2 = (vg * abs(vg) + UP_DISK * vd * abs(vd) + UP_BUL * vb * abs(vb)) * KMS**2
            if vb2 <= 0:
                continue
            gals.setdefault(p[0], []).append((r, vo, evo, vg, vd, vb))
    out = []
    for name in sorted(gals):
        a = np.array(gals[name])
        m = gt[name]
        out.append(dict(name=name, R=a[:, 0], Vobs=a[:, 1], eV=a[:, 2], Vgas=a[:, 3], Vd=a[:, 4], Vb=a[:, 5],
                        D0=m["D"], eD=m["eD"], i0=m["inc"], ei=m["einc"], Q=m["Q"], hasbul=bool((a[:, 5] != 0).any())))
    return out


# ---------------------------------------------------------------- models
_TGRID = np.linspace(-7.0, 5.0, 6001)
_XCACHE = {}

def _implicit_x_of_t(gamma):
    key = float(gamma)
    if key in _XCACHE:
        return _XCACHE[key]
    t = 10.0 ** _TGRID
    lo = t.copy(); hi = np.maximum(2.0 * t + 1.0, 2.0)
    f = lambda x: x * np.tanh(gamma * np.log1p(x)) - t
    for _ in range(60):
        m = f(hi) < 0
        if not m.any():
            break
        hi[m] *= 2.0
    for _ in range(100):
        mid = 0.5 * (lo + hi); m = f(mid) < 0
        lo[m] = mid[m]; hi[~m] = mid[~m]
    _XCACHE[key] = np.log10(0.5 * (lo + hi))
    return _XCACHE[key]

def tanhlog_pred(gbar, a0, gamma):
    lx = _implicit_x_of_t(gamma)
    return a0 * 10.0 ** np.interp(np.log10(gbar / a0), _TGRID, lx)

def mcgaugh_pred(gbar, a0):
    y = gbar / a0
    return gbar / (-np.expm1(-np.sqrt(y)))


# ---------------------------------------------------------------- per-galaxy chi2 with nuisances
def gal_chi2(theta, g, a0, gamma, prior=True):
    """theta = (dlogUd, dlogUb, dratio, i_deg).  gamma=None -> McGaugh."""
    dlu, dlb, dr, i = theta
    ud = UP_DISK * 10.0 ** dlu; ub = UP_BUL * 10.0 ** dlb
    R = g["R"] * dr * KPC_M
    vb2 = (g["Vgas"] * np.abs(g["Vgas"]) + ud * g["Vd"] * np.abs(g["Vd"]) + ub * g["Vb"] * np.abs(g["Vb"])) * dr * KMS**2
    gbar = np.maximum(vb2 / R, 1e-16)
    gp = mcgaugh_pred(gbar, a0) if gamma is None else tanhlog_pred(gbar, a0, gamma)
    vpred = np.sqrt(gp * R) / KMS
    s = np.sin(np.radians(g["i0"])) / np.sin(np.radians(i))
    vo = g["Vobs"] * s; ev = np.sqrt(g["eV"] ** 2 + (0.5 * np.log(10.0) * SIGINT_DEX * g["Vobs"]) ** 2) * s
    c = float((((vo - vpred) / ev) ** 2).sum())
    if prior:
        c += (dlu / PRIOR_DEX) ** 2 + ((dlb / PRIOR_DEX) ** 2 if g["hasbul"] else 0.0)
        c += ((dr - 1.0) * g["D0"] / g["eD"]) ** 2 + ((i - g["i0"]) / g["ei"]) ** 2
    return c

def prior_only(theta, g):
    dlu, dlb, dr, i = theta
    return (dlu / PRIOR_DEX) ** 2 + ((dlb / PRIOR_DEX) ** 2 if g["hasbul"] else 0.0) + ((dr - 1.0) * g["D0"] / g["eD"]) ** 2 + ((i - g["i0"]) / g["ei"]) ** 2

THETA0 = lambda g: np.array([0.0, 0.0, 1.0, g["i0"]])

def fit_gal(g, a0, gamma, x0=None):
    x0 = THETA0(g) if x0 is None else x0
    bounds = [(-UB, UB), (-UB, UB) if g["hasbul"] else (0.0, 0.0), (0.2, 3.0), (5.0, 90.0)]
    res = minimize(gal_chi2, x0, args=(g, a0, gamma), method="L-BFGS-B", bounds=bounds,
                   options={"maxiter": 300, "ftol": 1e-12, "gtol": 1e-8})
    # one restart from the prior mean guards against a bad warm start
    if x0 is not None and not np.allclose(x0, THETA0(g)):
        r2 = minimize(gal_chi2, THETA0(g), args=(g, a0, gamma), method="L-BFGS-B", bounds=bounds,
                      options={"maxiter": 300, "ftol": 1e-12, "gtol": 1e-8})
        if r2.fun < res.fun:
            res = r2
    return float(res.fun), res.x

def worker_C(g):
    nG, nA = len(GAMMAS), len(LA0)
    tab = np.empty((nG, nA)); th = np.empty((nG, nA, 4)); mc = np.empty(nA); thm = np.empty((nA, 4))
    for ig, gam in enumerate(GAMMAS):
        x = None
        for ia, la in enumerate(LA0):
            tab[ig, ia], x = fit_gal(g, 10.0 ** la, gam, x)
            th[ig, ia] = x
    x = None
    for ia, la in enumerate(LA0):
        mc[ia], x = fit_gal(g, 10.0 ** la, None, x)
        thm[ia] = x
    return tab, th, mc, thm

def worker_B(g):
    t0 = THETA0(g)
    tab = np.array([[gal_chi2(t0, g, 10.0 ** la, gam, prior=False) for la in LA0] for gam in GAMMAS])
    mc = np.array([gal_chi2(t0, g, 10.0 ** la, None, prior=False) for la in LA0])
    return tab, mc


# ---------------------------------------------------------------- profile helpers on tables
def prof_a0(row):
    """min over a0 of a 1-D chi2 row on LA0 with parabolic refinement; returns (chi2min, la0min)."""
    k = int(np.argmin(row))
    if 0 < k < len(row) - 1:
        y0, y1, y2 = row[k - 1], row[k], row[k + 1]
        d = y0 - 2 * y1 + y2
        if d > 0:
            off = 0.5 * (y0 - y2) / d
            off = float(np.clip(off, -1, 1))
            return float(y1 - 0.25 * (y0 - y2) * off), float(LA0[k] + off * 0.05)
    return float(row[k]), float(LA0[k])

def profile_gamma(tab):
    """tab (nG, nA) summed over galaxies -> chi2(gamma) profiled over a0, and la0(gamma)."""
    out = np.array([prof_a0(tab[ig]) for ig in range(len(GAMMAS))])
    return out[:, 0], out[:, 1]

def free_min(chi_g):
    """refine the gamma minimum by a parabola on the log-gamma grid."""
    k = int(np.argmin(chi_g))
    if 0 < k < len(chi_g) - 1:
        lg = np.log(GAMMAS); y0, y1, y2 = chi_g[k - 1], chi_g[k], chi_g[k + 1]
        # unequal spacing: fit parabola through three points
        A = np.vstack([lg[k-1:k+2] ** 2, lg[k-1:k+2], np.ones(3)]).T
        a, b, c = np.linalg.solve(A, [y0, y1, y2])
        if a > 0:
            lgm = -b / (2 * a)
            if lg[k - 1] <= lgm <= lg[k + 1]:
                return float(c - b * b / (4 * a)), float(np.exp(lgm))
    return float(chi_g[k]), float(GAMMAS[k])


def main():
    t_start = time.time()
    gals = load()
    P(f"SIGINT_DEX = {SIGINT_DEX} dex (per-point intrinsic scatter added in quadrature), Upsilon bound = ±{UB} dex; (0, 0.5) = arm C as registered")
    N = sum(len(g["R"]) for g in gals); Ngal = len(gals)
    P(f"rows {N}, galaxies {Ngal}; with bulge {sum(g['hasbul'] for g in gals)}; i<30: {sum(g['i0']<30 for g in gals)}; Q=3: {sum(g['Q']==3 for g in gals)}")
    names = np.array([g["name"] for g in gals])

    # ---------------- arm A: identity control on the frozen log-SSR ----------------
    gobs = np.concatenate([(g["Vobs"] * KMS) ** 2 / (g["R"] * KPC_M) for g in gals])
    gbar = np.concatenate([(g["Vgas"] * np.abs(g["Vgas"]) + UP_DISK * g["Vd"] * np.abs(g["Vd"]) + UP_BUL * g["Vb"] * np.abs(g["Vb"])) * KMS**2 / (g["R"] * KPC_M) for g in gals])
    ssr = lambda pred: float(((np.log10(gobs) - np.log10(pred)) ** 2).sum())
    fa = lambda pred: minimize_scalar(lambda la: ssr(pred(gbar, 10.0 ** la)), bounds=(-11, -9), method="bounded", options={"xatol": 1e-9})
    rm = fa(mcgaugh_pred); r2 = fa(lambda gb, a: tanhlog_pred(gb, a, 2.0))
    sA = np.array([fa(lambda gb, a, g=g: tanhlog_pred(gb, a, g)).fun for g in GAMMAS])
    kf = int(np.argmin(sA))
    dbic2 = N * np.log(r2.fun / rm.fun); dbicf = N * np.log(sA[kf] / rm.fun) + np.log(N)
    P(f"A   frozen log-SSR: dBIC(gamma=2 vs McG) = {dbic2:+.1f}; free gamma-hat = {GAMMAS[kf]:.3f}, dBIC vs McG = {dbicf:+.1f}; "
      f"dchi2(gamma=2 vs free) = {N*np.log(r2.fun/sA[kf]):+.1f}")
    c1 = abs(dbic2 - 184) <= 2 and GAMMAS[kf] == 0.489 and abs(dbicf - 7.1) <= 1
    P(f"    C1 {'PASS' if c1 else 'FAIL'}")
    if not c1:
        P("IDENTITY CONTROL C1 FAILED — stop"); return 1

    # ---------------- positive control C3: synthetic galaxy ----------------
    rng = np.random.default_rng(SEED)
    g = next(x for x in gals if x["name"] == "NGC3198")
    truth = np.array([np.log10(1.2), 0.0, 1.1, g["i0"] + 4.0])
    syn = dict(g); a0t = 10.0 ** -9.55
    dr = truth[2]; R = g["R"] * dr * KPC_M
    vb2 = (g["Vgas"] * np.abs(g["Vgas"]) + UP_DISK * 10 ** truth[0] * g["Vd"] * np.abs(g["Vd"])) * dr * KMS**2
    vpred = np.sqrt(tanhlog_pred(vb2 / R, a0t, 2.0) * R) / KMS
    s = np.sin(np.radians(g["i0"])) / np.sin(np.radians(truth[3]))
    syn["Vobs"] = (vpred + rng.normal(0, 1, len(vpred)) * g["eV"]) / s   # observed at nominal inclination
    syn["hasbul"] = False
    cs = np.array([[fit_gal(syn, 10.0 ** la, gam)[0] for la in LA0] for gam in GAMMAS])
    pg, pla = profile_gamma(cs); cmin, ghat_s = free_min(pg)
    k2 = IG2; th2 = fit_gal(syn, 10.0 ** pla[k2], 2.0)[1]
    P(f"C3  synthetic NGC3198 from gamma=2 (truth: dlogUd={truth[0]:+.3f}, dr={truth[2]:.2f}, i={truth[3]:.1f}; a0'=1e-9.55): "
      f"recovered dlogUd={th2[0]:+.3f}, dr={th2[2]:.2f}, i={th2[3]:.1f} at a0'=1e{pla[k2]:.2f}; gamma-hat={ghat_s:.2f}; "
      f"dchi2(gamma=2 vs free)={pg[k2]-cmin:+.2f}")
    c3 = abs(th2[0] - truth[0]) < 0.1 and abs(th2[2] - truth[2]) < g["eD"] / g["D0"] * 1.5 + 0.02 and abs(th2[3] - truth[3]) < g["ei"] * 1.5 + 0.5 and (pg[k2] - cmin) <= 3.84
    P(f"    C3 {'PASS' if c3 else 'FAIL'}")

    # ---------------- arm B: frozen nuisances, velocity chi2 ----------------
    with Pool(8) as pool:
        resB = pool.map(worker_B, gals)
    tabB = np.array([r[0] for r in resB]); mcB = np.array([r[1] for r in resB])
    P(f"    arm B tables done ({time.time()-t_start:.0f}s)")

    # ---------------- arm C: nuisances profiled ----------------
    with Pool(8) as pool:
        resC = pool.map(worker_C, gals)
    tabC = np.array([r[0] for r in resC]); thC = np.array([r[1] for r in resC])
    mcC = np.array([r[2] for r in resC]); thmC = np.array([r[3] for r in resC])
    P(f"    arm C tables done ({time.time()-t_start:.0f}s)")
    # C2: plumbing identity — chi2 at prior means without prior terms equals arm B
    c2diff = max(abs(gal_chi2(THETA0(g), g, 1e-10, 0.6, prior=False) - tabB[k, list(GAMMAS).index(0.6), int(np.where(LA0 == -10.0)[0][0])]) for k, g in enumerate(gals))
    c2 = c2diff < 1e-6
    P(f"C2  nuisance plumbing at prior means reproduces arm B: max |diff| = {c2diff:.2e}  {'PASS' if c2 else 'FAIL'}")
    # C profile must never exceed B+0 (optimizer sanity: chi2_C <= chi2_B since prior terms vanish at the mean)
    viol = int((tabC > tabB + 1e-6).sum())
    P(f"    optimizer sanity: cells where chi2_C > chi2_B (should be 0): {viol} of {tabC.size}")
    np.savez(NPZ, GAMMAS=GAMMAS, LA0=LA0, names=names, tabB=tabB, mcB=mcB, tabC=tabC, thC=thC, mcC=mcC, thmC=thmC)

    # ---------------- report per arm ----------------
    def report(label, tab, mc, npar_note=""):
        pg, pla = profile_gamma(tab.sum(0)); cmin, ghat = free_min(pg)
        cM, laM = prof_a0(mc.sum(0))
        d2f = pg[IG2] - cmin; d2M = pg[IG2] - cM; dfM = cmin - cM
        P(f"{label}: chi2(gamma=2)={pg[IG2]:.1f} @a0'=1e{pla[IG2]:.2f}; chi2(free)={cmin:.1f} @gamma={ghat:.3f}, a0'=1e{pla[int(np.argmin(pg))]:.2f}; "
          f"chi2(McG)={cM:.1f} @a0=1e{laM:.2f}; chi2_red(free)={cmin/(N-2):.2f}")
        P(f"    dchi2: gamma=2 vs free {d2f:+.1f}; gamma=2 vs McG {d2M:+.1f}; free vs McG {dfM:+.1f}  (per chi2_red: {d2f/(cmin/(N-2)):+.1f})")
        P("    profile: " + "  ".join(f"{g:.3g}:{pg[i]-cmin:+.1f}" for i, g in enumerate(GAMMAS)))
        return pg, pla, cmin, ghat, cM
    pgB, plaB, cminB, ghatB, cMB = report("B   frozen nuisances, velocity chi2", tabB, mcB)
    pgC, plaC, cminC, ghatC, cMC = report("C   nuisances profiled (Li+2018 priors)", tabC, mcC)

    # ---------------- P1: galaxy-block bootstrap of dchi2_C(gamma=2 vs free) ----------------
    rng = np.random.default_rng(SEED)
    B = 2000
    d2f_C = pgC[IG2] - cminC
    boots = np.empty(B); gboot = np.empty(B); bootsB = np.empty(B)
    for b in range(B):
        pick = rng.integers(0, Ngal, Ngal)
        pg_, _ = profile_gamma(tabC[pick].sum(0)); cm_, gh_ = free_min(pg_)
        boots[b] = pg_[IG2] - cm_; gboot[b] = gh_
        pgb, _ = profile_gamma(tabB[pick].sum(0)); cmb, _ = free_min(pgb)
        bootsB[b] = pgb[IG2] - cmb
    z = d2f_C / boots.std(); lo, hi = np.percentile(boots, [2.5, 97.5])
    zB = (pgB[IG2] - cminB) / bootsB.std()
    P(f"P1  arm C: dchi2(gamma=2 vs free) = {d2f_C:+.1f}; galaxy-block bootstrap sd = {boots.std():.1f}, 95% [{lo:.1f}, {hi:.1f}], "
      f"median {np.median(boots):.1f}; z = {z:.2f}   (arm B for contrast: z = {zB:.2f}, 95% [{np.percentile(bootsB,2.5):.0f}, {np.percentile(bootsB,97.5):.0f}])")
    p1 = "HELD" if z >= 3 else ("REFUTED" if z < 2 else "NEITHER")
    P(f"    P1 {p1}")

    # ---------------- P2: sign test per galaxy at the global optima ----------------
    def gal_at(tab, ig, la):
        # per-galaxy chi2 at (gamma index, a0) by linear interpolation on the LA0 grid
        return np.array([np.interp(la, LA0, tab[k, ig]) for k in range(Ngal)])
    kf = int(np.argmin(pgC))
    c2g = gal_at(tabC, IG2, plaC[IG2]); cfg = gal_at(tabC, kf, plaC[kf])
    dg = c2g - cfg
    nw = int((dg > 0).sum()); frac = nw / Ngal
    ps = binomtest(nw, Ngal, 0.5, alternative="greater").pvalue; pw = wilcoxon(dg, alternative="greater").pvalue
    P(f"P2  gamma=2 worse in {nw}/{Ngal} = {100*frac:.1f}% of galaxies (free fit taken at grid gamma={GAMMAS[kf]}); sign p = {ps:.2e}; Wilcoxon p = {pw:.2e}")
    p2 = "HELD" if (frac > 0.65 and ps < 1e-3) else ("REFUTED" if (frac < 0.55 or ps > 0.01) else "NEITHER")
    P(f"    P2 {p2}")
    order = np.argsort(-dg)
    P("    top 10 galaxies by dchi2 excess (share of net):")
    for k in order[:10]:
        P(f"      {names[k]:12s} {dg[k]:+8.1f} ({100*dg[k]/dg.sum():5.1f}%)  n={len(gals[k]['R']):3d}  i0={gals[k]['i0']:.0f} Q={gals[k]['Q']}")
    P("    bottom 5 (free worse):")
    for k in order[-5:]:
        P(f"      {names[k]:12s} {dg[k]:+8.1f}  n={len(gals[k]['R']):3d}")
    P(f"    sum positive {dg[dg>0].sum():.1f}, sum negative {dg[dg<0].sum():.1f}; share of net from top 7: {100*dg[order[:7]].sum()/dg.sum():.0f}%")

    # ---------------- P3 / nuisance diagnostics at the two optima ----------------
    def theta_at(th, ig, la):
        ia = int(np.argmin(np.abs(LA0 - la)))
        return th[:, ig, ia]
    th2 = theta_at(thC, IG2, plaC[IG2]); thf = theta_at(thC, kf, plaC[kf])
    pr2 = np.array([prior_only(th2[k], gals[k]) for k in range(Ngal)]); prf = np.array([prior_only(thf[k], gals[k]) for k in range(Ngal)])
    P(f"P3  summed prior penalty: gamma=2 {pr2.sum():.1f}  vs free {prf.sum():.1f}; ratio {pr2.sum()/prf.sum():.2f}")
    p3 = "HELD" if pr2.sum() / prf.sum() > 1.5 else ("REFUTED" if pr2.sum() / prf.sum() < 1.1 else "NEITHER")
    P(f"    P3 {p3}")
    P(f"    mean dlogUd: gamma=2 {th2[:,0].mean():+.3f} dex, free {thf[:,0].mean():+.3f} dex; "
      f"mean D/D0: {th2[:,2].mean():.3f} vs {thf[:,2].mean():.3f}; mean (i-i0): {(th2[:,3]-np.array([g['i0'] for g in gals])).mean():+.2f} vs {(thf[:,3]-np.array([g['i0'] for g in gals])).mean():+.2f} deg")
    P(f"    galaxies at a Upsilon bound (|dlogUd|={UB}): gamma=2 {(np.abs(th2[:,0])>=UB-0.001).sum()}, free {(np.abs(thf[:,0])>=UB-0.001).sum()}")

    # ---------------- P4: does the free fit move? ----------------
    glo, ghi = np.percentile(gboot, [2.5, 97.5])
    P(f"P4  arm C gamma-hat = {ghatC:.3f}; galaxy-bootstrap 95% [{glo:.3f}, {ghi:.3f}]  (arm B gamma-hat = {ghatB:.3f})")
    p4 = "HELD" if glo > 0.50 else ("REFUTED" if glo <= 0.489 <= ghi else "NEITHER")
    P(f"    P4 {p4}")

    # ---------------- P5: retained interval ----------------
    red = cminC / (N - 2)
    ret = [g for i, g in enumerate(GAMMAS) if (pgC[i] - cminC) / red <= 10]
    P(f"P5  retained gamma (dchi2/chi2_red <= 10): {min(ret)} .. {max(ret)}  (chi2_red = {red:.2f}); raw dchi2 <= 10: "
      f"{[g for i, g in enumerate(GAMMAS) if pgC[i]-cminC <= 10]}")
    p5 = "HELD" if 2.0 not in ret else "REFUTED"
    P(f"    P5 {p5}")

    # ---------------- Laplace correction at the two comparison points ----------------
    def laplace_logdet(g, a0, gamma, x):
        free = [0, 2, 3] + ([1] if g["hasbul"] else [])
        h = 1e-3; n = len(free); H = np.zeros((n, n))
        f0 = gal_chi2(x, g, a0, gamma)
        for a_, ia in enumerate(free):
            for b_, ib in enumerate(free):
                xa = x.copy(); xb = x.copy(); xab = x.copy()
                xa[ia] += h; xb[ib] += h; xab[ia] += h; xab[ib] += h
                H[a_, b_] = (gal_chi2(xab, g, a0, gamma) - gal_chi2(xa, g, a0, gamma) - gal_chi2(xb, g, a0, gamma) + f0) / h / h
        H = 0.5 * (H + H.T) / 2.0   # Hessian of -lnL = chi2/2
        w = np.linalg.eigvalsh(H)
        return float(np.log(np.clip(w, 1e-12, None)).sum())
    ld2 = np.array([laplace_logdet(gals[k], 10 ** plaC[IG2], 2.0, th2[k]) for k in range(Ngal)])
    ldf = np.array([laplace_logdet(gals[k], 10 ** plaC[kf], GAMMAS[kf], thf[k]) for k in range(Ngal)])
    # -2 ln (marginal L) = chi2 + logdet H (+ const, equal parameter counts cancel)
    dmarg = d2f_C + (ld2.sum() - ldf.sum())
    P(f"LAP -2 ln marginal-likelihood ratio (gamma=2 vs free), Laplace: {dmarg:+.1f}  (profile {d2f_C:+.1f}; Occam term {ld2.sum()-ldf.sum():+.1f})")

    # ---------------- sensitivity: drop i<30 and Q=3 ----------------
    keep = np.array([(g["i0"] >= 30 and g["Q"] != 3) for g in gals])
    pgS, _ = profile_gamma(tabC[keep].sum(0)); cS, gS = free_min(pgS)
    P(f"SENS drop i<30 & Q=3 ({keep.sum()} galaxies): dchi2(gamma=2 vs free) = {pgS[IG2]-cS:+.1f}, gamma-hat = {gS:.3f}")
    keep7 = np.ones(Ngal, bool); keep7[order[:7]] = False
    pgS, _ = profile_gamma(tabC[keep7].sum(0)); cS, gS = free_min(pgS)
    P(f"SENS drop top-7 excess galaxies: dchi2(gamma=2 vs free) = {pgS[IG2]-cS:+.1f}, gamma-hat = {gS:.3f}")
    # per-galaxy free gamma: how many galaxies individually prefer gamma >= 1.5?
    pref = np.array([GAMMAS[int(np.argmin([prof_a0(tabC[k, ig])[0] for ig in range(len(GAMMAS))]))] for k in range(Ngal)])
    P(f"    per-galaxy preferred gamma (own a0'): median {np.median(pref):.2f}; >=1.5 in {(pref>=1.5).sum()}, <=0.5 in {(pref<=0.5).sum()} of {Ngal}")

    verdict = ("REFUTED CONVENTION-FREE (published method)" if (p1 == "HELD" and p2 == "HELD")
               else ("NOT DISTINGUISHABLE" if p1 == "REFUTED" else "DISFAVOURED"))
    P(f"\nVERDICT (registered): {verdict}    P1 {p1}  P2 {p2}  P3 {p3}  P4 {p4}  P5 {p5}   [{time.time()-t_start:.0f}s]")
    with open(OUT, "w") as fh:
        fh.write("\n".join(_log) + "\n")
    return 0


if __name__ == "__main__":
    sys.exit(main())
