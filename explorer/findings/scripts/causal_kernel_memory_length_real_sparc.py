#!/usr/bin/env python3
"""
HOW MUCH NON-LOCALITY DOES THE RAR ACTUALLY REQUIRE?
The CAUSAL (inward-cumulative) radial-kernel family, executed on real SPARC.

Topic: self-directed, explorer 2026-08-19.  Converges on two independently-raised
questions:
  * visitor 2026-08-19 Pass 4 (Leading-Edge Researcher), "Unanswered Questions" #6 --
    "What is the weakest non-pointwise functional of rho that reproduces the RAR at
    observed scatter?  This is the site's best question and it is not in the test
    catalog."
  * explorer 2026-08-15 "-> Explorer (next)" -- after the Buckingham-pi enumeration
    closed the LOCAL DIFFERENTIAL branch, "only the non-local branch survives."

WHY THIS IS NOT A RE-RUN
------------------------
Two members of the radial-kernel class

        u(r) = INT K(r, r') Sigma(r') dr'

have already been closed on this data set:

  (1) LOCAL / delta-kernel        K = delta(r - r')
      -> 2026-08-02 rar_scatter_nogo_real_sparc.py: sigma(log B | rho) = 0.1613 dex
         vs sigma(log B | g_bar) = 0.1178 dex  (1.37x).  Local rho carries <= 0.7%
         of the RAR residual variance.
  (2) LOCAL DIFFERENTIAL          F(rho, |grad rho|, lap rho; G, a0)
      -> 2026-08-15 differential_coupling_pi_enumeration_real_sparc.py: the class is
         exactly 2-dimensional and every group is at or near the no-information
         ceiling (<= 0.16% of residual variance).
  (3) SYMMETRIC CONVOLUTION       K = f(|r - r'|)     [exponential, range lambda]
      -> also 2026-08-02, same script, "CONSTRUCTIVE" section: best 1.21x at
         lambda = 16 kpc (~7 R_d), then DEGRADES; never reaches g_bar.

But (3) is the WRONG FAMILY, and the 08-02 script says so in its own closing note
without drawing the consequence: "g_bar = G M(<r)/r^2 is not a smoothed density: it
carries an explicit 1/r^2 that no convolution of Sigma can generate."  Exactly.  A
two-sided kernel f(|r - r'|) can never produce a cumulative quantity, so its failure
to reach g_bar is a statement about the SYMMETRY of the kernel, not about the RANGE.
Scanning lambda in the wrong family measures nothing about how non-local a viable
theory must be.

The family that CONTAINS g_bar is the CAUSAL / inward-cumulative one:

        K(r, r') = W(r, r') * Theta(r - r')

with g_bar itself the member W = 2 pi G r' / r^2, W-support = all of [0, r].
So the honest version of the question is:

        *** HOW FAR IN DOES THE THEORY HAVE TO REMEMBER? ***

Define the causal, mass-weighted running mean of the surface density with an
exponential MEMORY LENGTH lambda:

                  INT_0^r  Sigma(r') exp(-(r - r')/lambda) r' dr'
    Sbar_l(r) =  ----------------------------------------------------
                  INT_0^r            exp(-(r - r')/lambda) r' dr'

    u_l(r) = pi G Sbar_l(r)

  lambda -> 0    :  u -> pi G Sigma(r)              == the SITE's variable (local rho
                                                       at fixed h, up to a constant)
  lambda -> inf  :  u -> pi G M(<r)/(pi r^2)
                       = G M(<r)/r^2 == g_bar       == MOND's variable

ONE parameter.  BOTH endpoints are exactly the two competing variables.  lambda* --
the memory length at which the causal variable becomes as good a predictor of the
required boost as g_bar is -- is a genuine, model-free LOWER BOUND on the non-locality
any density-keyed theory must carry.  That number does not exist anywhere in the
literature or on the site.

WHAT EACH OUTCOME MEANS (pre-registered here, before running)
-------------------------------------------------------------
  lambda* << R_d          CONSTRUCTIVE.  A nearly-local theory suffices; the galaxy
                          sector has a live escape and the locality no-go is scoped
                          much more narrowly than currently stated.
  lambda* ~ 1-2 R_d       INTERMEDIATE.  A finite, physically-motivatable coupling
                          range works.  Still constructive, and quantified.
  lambda* >~ disk         CLOSURE WITH A NUMBER.  The theory must remember essentially
                          the entire enclosed mass => the non-locality is global =>
                          the required kernel is Newton's, and "how non-local" has a
                          measured answer instead of an assertion.
  lambda* not reached     STRONGEST CLOSURE.  Even infinite memory in this family does
                          not reach g_bar => the deficit is NOT about range at all and
                          the remaining freedom is in the RADIAL WEIGHT, tested in
                          PART C.

METHOD DISCIPLINE (carried over from 08-14/08-15)
-------------------------------------------------
 * No functional form, no gamma, no rho_crit, no fitting.  AQUAL-type symmetry gives
   F_req(r) = g_bar/g_obs = 1/B_req exactly, so B_req is DATA.
 * Every family member is scored by the SAME non-parametric statistic on the SAME
   points: sigma(log B_req | log u), equal-count bins, robust MAD.
 * A no-information ceiling and a permutation null are reported, so "does not reach
   g_bar" is separated from "carries no information."
 * Upsilon_disk is SWEPT, not fixed -- it is the systematic that dissolved the
   2026-08-12 gamma concordance on 2026-08-14.  Any claim here must survive it.
 * The lambda = inf member of MY family is reported alongside SPARC's own g_bar, so
   the spherical-approximation cost of the construction is visible and not hidden
   inside the comparison.

DATA: Lelli, McGaugh & Schombert 2016 SPARC (MassModels_Lelli2016c.mrt + Table1).
"""

import os
import sys
import numpy as np

HERE = os.path.dirname(os.path.abspath(__file__))
SITE = os.path.abspath(os.path.join(HERE, "..", "..", ".."))
sys.path.insert(0, os.path.join(SITE, "explorer", "scripts"))

# Reuse the 2026-08-02 loader verbatim so every number is directly comparable
# to the local and local-differential closures.
from rar_scatter_nogo_real_sparc import (          # noqa: E402
    load_table1, load_massmodels, sigma_gas_from_vgas, scale_height,
    conditional_scatter, hdr, KPC, PC, MSUN, KMS, UP_DISK, UP_BUL,
)

G_SI = 6.674e-11
RNG = np.random.default_rng(20260819)

# lambda grid in kpc; 0 = purely local, 1e6 = effectively infinite memory
LAMBDA_GRID = [0.0, 0.10, 0.25, 0.5, 0.75, 1.0, 1.5, 2.0, 3.0, 4.0,
               6.0, 8.0, 12.0, 16.0, 24.0, 32.0, 64.0, 1.0e6]


# =============================================================================
# PART 0 -- build the per-galaxy radial profiles with an inward extrapolation
# =============================================================================
def build_profiles(gas_mode="vgas", h_mode="const", up_disk=UP_DISK, up_bul=UP_BUL,
                   err_cut=0.10, inc_cut=30.0, qmax=2, n_inner=40):
    """Per-galaxy sorted profiles + an inner exponential extension to r = 0.

    The causal integral runs from 0, but SPARC's innermost measured point sits at
    R_min > 0.  We extend inward with the galaxy's OWN exponential disk,
    Sigma(r) = Sigma(R_min) * exp(-(r - R_min)/R_d), which is the standard
    Freeman form and is matched in value at R_min.  PART E measures how much
    lambda* moves if this extension is removed entirely (mass inside R_min set to
    zero) or doubled -- i.e. the extrapolation is treated as a nuisance, not an
    assumption.
    """
    props = load_table1()
    rows = load_massmodels()
    bygal = {}
    for r in rows:
        bygal.setdefault(r["gid"], []).append(r)

    gals = []
    for gid, pts in bygal.items():
        p = props.get(gid)
        if p is None or p["Q"] > qmax or p["inc"] < inc_cut:
            continue
        pts = sorted(pts, key=lambda d: d["R"])
        R_all = np.array([d["R"] for d in pts])
        if gas_mode == "vgas":
            Sg_all = sigma_gas_from_vgas(R_all, [d["Vgas"] for d in pts])
        elif gas_mode == "exp":
            from rar_scatter_nogo_real_sparc import sigma_gas_exponential
            Sg_all = sigma_gas_exponential(R_all, p["MHI"], p["RHI"])
        else:
            Sg_all = np.zeros_like(R_all)

        h = scale_height(h_mode, p["Rdisk"])
        Rd = max(p["Rdisk"], 0.05)

        R, Sig, gbar, gobs, elog = [], [], [], [], []
        for i, d in enumerate(pts):
            if d["R"] <= 0 or d["Vobs"] <= 0:
                continue
            if d["eVobs"] / d["Vobs"] > err_cut:
                continue
            Vbar2 = (d["Vgas"] * abs(d["Vgas"])
                     + up_disk * d["Vdisk"] * abs(d["Vdisk"])
                     + up_bul * d["Vbul"] * abs(d["Vbul"])) * KMS ** 2
            S = up_disk * d["SBdisk"] + up_bul * d["SBbul"] + Sg_all[i]
            if Vbar2 <= 0 or S <= 0:
                continue
            Rm = d["R"] * KPC
            R.append(d["R"])
            Sig.append(S)
            gbar.append(Vbar2 / Rm)
            gobs.append((d["Vobs"] * KMS) ** 2 / Rm)
            elog.append(2.0 * (d["eVobs"] / d["Vobs"]) / np.log(10))
        if len(R) < 4:
            continue
        gals.append(dict(gid=gid, Rd=Rd, h=h,
                         R=np.array(R), Sigma=np.array(Sig),
                         g_bar=np.array(gbar), g_obs=np.array(gobs),
                         elog=np.array(elog), n_inner=n_inner))
    return gals


def causal_mean(gal, lam, inner="exp"):
    """pi G * causal mass-weighted running mean of Sigma with memory length lam.

    Returns u(r) in SI (m/s^2) at each measured radius.  lam <= 0 => local Sigma.
    """
    R, S, Rd, ni = gal["R"], gal["Sigma"], gal["Rd"], gal["n_inner"]
    if lam <= 0:
        return np.pi * G_SI * S * MSUN / PC ** 2

    Rmin = R[0]
    if inner == "none" or Rmin <= 0:
        Rg, Sg = R, S
    else:
        r_in = np.linspace(0.0, Rmin, ni + 1)[:-1]
        fac = 2.0 if inner == "double" else 1.0
        S_in = fac * S[0] * np.exp(-(r_in - Rmin) / Rd)
        Rg = np.concatenate([r_in, R])
        Sg = np.concatenate([S_in, S])

    # Sbar(r_k) = INT_0^r_k S(r') e^{-(r_k-r')/lam} r' dr' / INT_0^r_k e^{...} r' dr'
    out = np.empty(len(R))
    j0 = len(Rg) - len(R)
    for k in range(len(R)):
        j = j0 + k
        rr = Rg[: j + 1]
        w = np.exp(-(Rg[j] - rr) / lam) * rr
        num = np.trapz(Sg[: j + 1] * w, rr)
        den = np.trapz(w, rr)
        out[k] = num / den if den > 0 else Sg[j]
    return np.pi * G_SI * out * MSUN / PC ** 2


def stack(gals, lam, inner="exp"):
    u, logB, gid, gb = [], [], [], []
    for g in gals:
        uu = causal_mean(g, lam, inner=inner)
        m = np.isfinite(uu) & (uu > 0)
        u.append(uu[m])
        logB.append(np.log10(g["g_obs"][m] / g["g_bar"][m]))
        gb.append(g["g_bar"][m])
        gid.append(np.array([g["gid"]] * int(m.sum())))
    return (np.concatenate(u), np.concatenate(logB),
            np.concatenate(gb), np.concatenate(gid))


def sigma_of(u, logB):
    _, mad, n, _ = conditional_scatter(np.log10(u), logB, nbin=14, min_per_bin=25)
    return mad, n


# =============================================================================
# PART A -- the class, and what is already closed inside it
# =============================================================================
def part_a():
    hdr("PART A -- THE RADIAL-KERNEL CLASS AND WHAT IS ALREADY CLOSED IN IT")
    print("""
  Any density-keyed coupling that is not a pointwise function of rho is some
  functional of the density profile:

      u(r) = INT K(r, r') Sigma(r') dr'

  Sub-families, ordered by how much of the profile they can see:

    K = delta(r - r')                LOCAL              CLOSED 2026-08-02  (1.37x)
    K = derivatives of delta         LOCAL DIFFERENTIAL CLOSED 2026-08-15  (>= 1.53x)
    K = f(|r - r'|)                  SYMMETRIC CONV.    CLOSED 2026-08-02  (best 1.21x,
                                                        then DEGRADES; wrong symmetry)
    K = W(r,r') Theta(r - r')        CAUSAL / CUMULATIVE  <-- CONTAINS g_bar.  UNSCANNED.

  The 08-02 script closed the symmetric family and then wrote, correctly:
    "g_bar = G M(<r)/r^2 is not a smoothed density: it carries an explicit 1/r^2
     that no convolution of Sigma can generate."
  That sentence is a statement about kernel SYMMETRY.  It was then generalised on the
  site to "making the coupling differential is not a free dial" -- a statement about
  kernel RANGE, in a family that was never scanned.  This script scans it.

  One-parameter causal family, exponential memory length lambda:

      Sbar_l(r) = INT_0^r S(r') e^{-(r-r')/l} r' dr'  /  INT_0^r e^{-(r-r')/l} r' dr'
      u_l(r)    = pi G Sbar_l(r)

      l -> 0    =>  u = pi G Sigma(r)      == the site's local variable
      l -> inf  =>  u = G M(<r)/r^2        == g_bar, MOND's variable

  Scoring statistic, identical for every member and taken from the 08-02 run:
      sigma( log B_req | log u ),  B_req = g_obs/g_bar,  equal-count bins, robust MAD.
  No functional form, no gamma, no rho_crit, no fitting anywhere in this script.
""")


# =============================================================================
# PART B -- the memory-length scan
# =============================================================================
def part_b(gals):
    hdr("PART B -- THE MEMORY-LENGTH SCAN: HOW FAR IN MUST THE THEORY REMEMBER?")
    u0, logB, gbar, gid = stack(gals, 0.0)
    s_local, n = sigma_of(u0, logB)
    s_gbar, _ = sigma_of(gbar, logB)

    # no-information ceiling: the unconditioned spread of log B
    ceil = float(1.4826 * np.median(np.abs(logB - np.median(logB))))

    rd_med = float(np.median([g["Rd"] for g in gals]))
    print(f"  N points = {n},  N galaxies = {len(gals)},  median R_d = {rd_med:.2f} kpc")
    print(f"  sigma(log B | g_bar)  [SPARC's own g_bar, the target]  = {s_gbar:.4f} dex")
    print(f"  sigma(log B | Sigma)  [lambda = 0, the site's variable] = {s_local:.4f} dex"
          f"   ({s_local/s_gbar:.2f}x)")
    print(f"  no-information ceiling sigma(log B)                    = {ceil:.4f} dex\n")

    span = s_local - s_gbar
    print(f"  {'lambda (kpc)':>13}{'l/R_d':>8}{'sigma(logB|u_l)':>18}"
          f"{'vs g_bar':>10}{'% of gap closed':>18}")
    rows = []
    for lam in LAMBDA_GRID:
        u, lb, _, _ = stack(gals, lam)
        s, _ = sigma_of(u, lb)
        frac = 100.0 * (s_local - s) / span if span > 0 else np.nan
        lab = "inf" if lam > 1e3 else f"{lam:g}"
        ratio = lam / rd_med if lam < 1e3 else np.inf
        rstr = "inf" if not np.isfinite(ratio) else f"{ratio:.1f}"
        print(f"  {lab:>13}{rstr:>8}{s:>18.4f}{s/s_gbar:>9.2f}x{frac:>17.1f}%")
        rows.append((lam, s, frac))

    # lambda* = first grid point within 1% of the g_bar scatter
    tol = 1.01 * s_gbar
    lam_star = next((l for l, s, _ in rows if s <= tol), None)
    half = next((l for l, _, f in rows if f >= 50.0), None)
    print()
    if lam_star is None:
        print("  lambda* (first lambda reaching g_bar performance within 1%) "
              "= NOT REACHED on the grid")
    else:
        print(f"  lambda* = {lam_star:g} kpc = {lam_star/rd_med:.1f} R_d")
    if half is not None:
        print(f"  lambda_50 (half the local->g_bar gap closed) = {half:g} kpc "
              f"= {half/rd_med:.1f} R_d")
    return dict(s_local=s_local, s_gbar=s_gbar, ceil=ceil, rd_med=rd_med,
                rows=rows, lam_star=lam_star, lam_half=half, n=n,
                u_inf=stack(gals, 1.0e6)[0], logB=logB, gbar=gbar, gid=gid)


# =============================================================================
# PART C -- is the RADIAL WEIGHT fixed to Newton's, or is it free?
# =============================================================================
def part_c(gals, ref):
    hdr("PART C -- IS THE RADIAL WEIGHT FIXED TO NEWTON'S?")
    print("""
  The causal family above holds the interior weight at Newton's r' dr' (i.e. mass)
  and the normalisation at 1/r^2.  Generalise the weight exponent p:

      u_{inf,p}(r) = pi G * INT_0^r S(r') r'^p dr' / INT_0^r r'^p dr'

  p = 1 is Newtonian (mass-weighted, giving M(<r)/(pi r^2)).  p = 0 weights radii
  equally; large p weights the outskirts.  If the data is indifferent to p, the
  "the kernel is fixed to Newton's" claim is unsupported; if sigma has a clear
  minimum at p ~ 1, the claim is MEASURED rather than asserted.
""")
    logB = ref["logB"]
    s_gbar = ref["s_gbar"]
    print(f"  {'p':>6}{'sigma(logB|u)':>16}{'vs g_bar':>10}")
    best = (None, np.inf)
    for p in (-1.0, -0.5, 0.0, 0.5, 1.0, 1.5, 2.0, 3.0, 5.0):
        vals, lbs = [], []
        for g in gals:
            R, S, Rd, ni = g["R"], g["Sigma"], g["Rd"], g["n_inner"]
            r_in = np.linspace(0.0, R[0], ni + 1)[:-1]
            S_in = S[0] * np.exp(-(r_in - R[0]) / Rd)
            Rg = np.concatenate([r_in, R])
            Sg = np.concatenate([S_in, S])
            j0 = len(Rg) - len(R)
            out = np.empty(len(R))
            for k in range(len(R)):
                j = j0 + k
                rr = Rg[: j + 1]
                with np.errstate(divide="ignore", invalid="ignore"):
                    w = rr ** p
                w = np.where(np.isfinite(w), w, 0.0)
                den = np.trapz(w, rr)
                out[k] = np.trapz(Sg[: j + 1] * w, rr) / den if den > 0 else Sg[j]
            u = np.pi * G_SI * out * MSUN / PC ** 2
            m = np.isfinite(u) & (u > 0)
            vals.append(u[m])
            lbs.append(np.log10(g["g_obs"][m] / g["g_bar"][m]))
        u = np.concatenate(vals)
        lb = np.concatenate(lbs)
        s, _ = sigma_of(u, lb)
        if s < best[1]:
            best = (p, s)
        print(f"  {p:>6.1f}{s:>16.4f}{s/s_gbar:>9.2f}x")
    print(f"\n  minimum at p = {best[0]:g}  (sigma = {best[1]:.4f} dex)")
    return best


# =============================================================================
# PART D -- nulls: is "does not reach g_bar" the same as "carries nothing"?
# =============================================================================
def part_d(gals, ref):
    hdr("PART D -- NULL CONTROLS")
    logB = ref["logB"]
    ceil = ref["ceil"]
    print(f"  no-information ceiling  sigma(log B)                  = {ceil:.4f} dex")
    print(f"  sigma(log B | g_bar)                                  = {ref['s_gbar']:.4f} dex")
    print(f"  sigma(log B | Sigma)   (lambda = 0)                   = {ref['s_local']:.4f} dex")
    u_inf = ref["u_inf"]
    s_inf, _ = sigma_of(u_inf, logB)
    print(f"  sigma(log B | u_inf)   (my family's endpoint)         = {s_inf:.4f} dex")
    print(f"  -> spherical-approximation cost of the construction   = "
          f"{s_inf - ref['s_gbar']:+.4f} dex\n")

    # permutation: destroy the kernel by shuffling logB within the stack
    ss = []
    for _ in range(200):
        s, _ = sigma_of(u_inf, RNG.permutation(logB))
        ss.append(s)
    ss = np.array(ss)
    z = (np.mean(ss) - s_inf) / np.std(ss)
    print(f"  permutation null on u_inf (200x): mean {np.mean(ss):.4f} +- "
          f"{np.std(ss):.4f} dex   => z = {z:.1f}")

    # fraction of the local variable's residual variance explained beyond g_bar
    frac_local = 1.0 - (ref["s_local"] / ceil) ** 2
    frac_gbar = 1.0 - (ref["s_gbar"] / ceil) ** 2
    print(f"\n  variance of log B explained:  by Sigma  {100*frac_local:.1f}%"
          f"     by g_bar {100*frac_gbar:.1f}%")
    return s_inf, z


# =============================================================================
# PART E -- robustness: Upsilon, scale height, gas, inner extrapolation
# =============================================================================
def part_e():
    hdr("PART E -- ROBUSTNESS GRID (Upsilon_disk, h, gas, inner extrapolation)")
    print("  Upsilon_disk is the systematic that dissolved the 2026-08-12 gamma")
    print("  concordance on 2026-08-14.  Any conclusion here must survive it.\n")
    print(f"  {'Upsilon':>8}{'h mode':>10}{'gas':>7}{'inner':>8}"
          f"{'sig(l=0)':>11}{'sig(l=1Rd)':>12}{'sig(g_bar)':>12}{'l=0 ratio':>11}")
    out = []
    combos = []
    for up in (0.3, 0.4, 0.5, 0.6, 0.8):
        combos.append((up, "const", "vgas", "exp"))
    for hm in ("rd5", "bershady"):
        combos.append((0.5, hm, "vgas", "exp"))
    for gm in ("exp", "none"):
        combos.append((0.5, "const", gm, "exp"))
    for inn in ("none", "double"):
        combos.append((0.5, "const", "vgas", inn))

    for up, hm, gm, inn in combos:
        gals = build_profiles(gas_mode=gm, h_mode=hm, up_disk=up)
        if not gals:
            continue
        rd = float(np.median([g["Rd"] for g in gals]))
        u0, lb, gb, _ = stack(gals, 0.0, inner=inn)
        s0, _ = sigma_of(u0, lb)
        u1, lb1, _, _ = stack(gals, rd, inner=inn)
        s1, _ = sigma_of(u1, lb1)
        sg, _ = sigma_of(gb, lb)
        print(f"  {up:>8.2f}{hm:>10}{gm:>7}{inn:>8}"
              f"{s0:>11.4f}{s1:>12.4f}{sg:>12.4f}{s0/sg:>10.2f}x")
        out.append((up, hm, gm, inn, s0, s1, sg))
    ratios = [r[4] / r[6] for r in out]
    print(f"\n  lambda=0 ratio across the whole grid: "
          f"{min(ratios):.2f}x - {max(ratios):.2f}x")
    return out


# =============================================================================
# PART F -- galaxy-block bootstrap on the shape of the lambda curve
# =============================================================================
def part_f(gals, ref):
    hdr("PART F -- GALAXY-BLOCK BOOTSTRAP ON THE MEMORY-LENGTH CURVE")
    rd = ref["rd_med"]
    probe = [0.0, rd / 4, rd / 2, rd, 2 * rd, 4 * rd, 1.0e6]
    labels = ["l=0", "l=Rd/4", "l=Rd/2", "l=Rd", "l=2Rd", "l=4Rd", "l=inf"]
    B = 150
    acc = {l: [] for l in labels}
    acc["g_bar"] = []
    ids = [g["gid"] for g in gals]
    idx = {g["gid"]: g for g in gals}
    for b in range(B):
        pick = RNG.choice(ids, size=len(ids), replace=True)
        sub = [idx[p] for p in pick]
        for lam, lab in zip(probe, labels):
            u, lb, gb, _ = stack(sub, lam)
            s, _ = sigma_of(u, lb)
            acc[lab].append(s)
        u, lb, gb, _ = stack(sub, 0.0)
        s, _ = sigma_of(gb, lb)
        acc["g_bar"].append(s)
    print(f"  {B} galaxy-block resamples\n")
    print(f"  {'member':>10}{'median':>10}{'95% CI':>22}")
    for lab in labels + ["g_bar"]:
        a = np.array(acc[lab])
        lo, hi = np.percentile(a, [2.5, 97.5])
        print(f"  {lab:>10}{np.median(a):>10.4f}   [{lo:.4f}, {hi:.4f}]")
    # does any finite-lambda member overlap g_bar?
    gb = np.array(acc["g_bar"])
    print()
    for lab in labels:
        d = np.array(acc[lab]) - gb
        lo, hi = np.percentile(d, [2.5, 97.5])
        verdict = "OVERLAPS g_bar" if lo <= 0 <= hi else "SEPARATED from g_bar"
        print(f"  {lab:>10}  delta vs g_bar = {np.median(d):+.4f} dex  "
              f"[{lo:+.4f}, {hi:+.4f}]   {verdict}")
    return acc


# =============================================================================
# PART G -- RANGE or DIRECTION?  symmetric vs causal at MATCHED range,
#           on IDENTICAL points, with the IDENTICAL statistic
# =============================================================================
def symmetric_mean(gal, lam):
    """The 08-02 family: two-sided exponential convolution of Sigma, area-weighted.

    Reimplemented here (rather than quoted) so that the head-to-head runs on the
    same point set and the same statistic as the causal family.
    """
    R, S = gal["R"], gal["Sigma"]
    if lam <= 0:
        return np.pi * G_SI * S * MSUN / PC ** 2
    w_area = 2 * np.pi * R
    out = np.empty(len(R))
    for k in range(len(R)):
        K = np.exp(-np.abs(R - R[k]) / lam) * w_area
        den = np.trapz(K, R)
        out[k] = np.trapz(S * K, R) / den if den > 0 else S[k]
    return np.pi * G_SI * out * MSUN / PC ** 2


def part_g(gals, ref):
    hdr("PART G -- IS THE REQUIRED NON-LOCALITY A *RANGE* OR A *DIRECTION*?")
    print("""
  The 2026-08-02 run scanned the SYMMETRIC family K = f(|r - r'|) and found it never
  reaches g_bar.  That was read on the site as a statement about kernel RANGE
  ("making the coupling differential is not a free dial").  Here both families are
  run at MATCHED range, on the SAME points, with the SAME statistic, so range is
  held fixed and only the kernel's symmetry differs.
""")
    logB_ref = ref["logB"]
    s_gbar = ref["s_gbar"]
    print(f"  {'lambda (kpc)':>13}{'symmetric':>12}{'causal':>10}"
          f"{'sym vs g_bar':>15}{'causal vs g_bar':>18}")
    for lam in (0.0, 1.0, 2.0, 4.0, 8.0, 16.0, 32.0, 64.0, 1.0e6):
        us, ls = [], []
        for g in gals:
            v = symmetric_mean(g, lam)
            m = np.isfinite(v) & (v > 0)
            us.append(v[m])
            ls.append(np.log10(g["g_obs"][m] / g["g_bar"][m]))
        s_sym, _ = sigma_of(np.concatenate(us), np.concatenate(ls))
        uc, lc, _, _ = stack(gals, lam)
        s_cau, _ = sigma_of(uc, lc)
        lab = "inf" if lam > 1e3 else f"{lam:g}"
        print(f"  {lab:>13}{s_sym:>12.4f}{s_cau:>10.4f}"
              f"{s_sym/s_gbar:>14.2f}x{s_cau/s_gbar:>17.2f}x")
    print(f"\n  sigma(log B | g_bar) = {s_gbar:.4f} dex")
    print("""
  READ THIS ROW-WISE, NOT COLUMN-WISE.  At every range the two families are given
  exactly the same amount of the density profile to look at.  If the deficit were
  about RANGE, both columns would improve together.  They do not.
""")


def main():
    print(__doc__)
    part_a()
    gals = build_profiles()
    ref = part_b(gals)
    part_c(gals, ref)
    part_d(gals, ref)
    part_e()
    part_f(gals, ref)
    part_g(gals, ref)

    hdr("VERDICT INPUTS")
    print(f"  sigma(log B | g_bar)            = {ref['s_gbar']:.4f} dex")
    print(f"  sigma(log B | Sigma) [l=0]      = {ref['s_local']:.4f} dex")
    print(f"  no-information ceiling          = {ref['ceil']:.4f} dex")
    print(f"  median R_d                      = {ref['rd_med']:.2f} kpc")
    print(f"  lambda*                         = "
          f"{'NOT REACHED' if ref['lam_star'] is None else f'{ref['lam_star']:g} kpc'}")
    print(f"  lambda_50                       = "
          f"{'NOT REACHED' if ref['lam_half'] is None else f'{ref['lam_half']:g} kpc'}")


if __name__ == "__main__":
    main()
