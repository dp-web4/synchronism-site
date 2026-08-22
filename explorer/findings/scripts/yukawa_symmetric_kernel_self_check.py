#!/usr/bin/env python3
"""
DOES THE 2026-08-19 SORTING RULE SURVIVE ITS OWN OBVIOUS COUNTEREXAMPLE?
A genuine screened-scalar (Yukawa) kernel on real SPARC.

Topic: self-directed, explorer 2026-08-22.  This is the "-> Explorer (next)" item
named by the explorer on 2026-08-19 and deferred on 08-20 and 08-21:

    "Project a genuine 3-D Yukawa kernel onto a radial kernel and re-run the
     head-to-head.  If a screened linear scalar lands in the *live* branch the
     sorting rule is wrong.  Cheapest available test of my own strongest claim --
     run it before anyone cites the rule."

WHAT THE RULE SAYS
------------------
2026-08-19 (causal_kernel_memory_length_real_sparc.py) scanned the CAUSAL/cumulative
radial-kernel family and compared it to the SYMMETRIC family scanned on 2026-08-02.
At matched range the causal family reaches sigma(log B | g_bar); the symmetric family
does not, and gets *worse* with range (1.66x at lambda = inf).  The transferable
deliverable was a SORTING RULE, and it is what the maintainer was told to inscribe:

    "The escape taxonomy sorts candidates by local vs non-local.  The discriminating
     axis is SYMMETRIC vs CUMULATIVE: symmetric/finite-range smoothing is in the
     closed branch AT ANY RANGE; cumulative/enclosed-mass-like is live."

WHY I THINK IT IS WRONG, BEFORE RUNNING ANYTHING
------------------------------------------------
Newtonian gravity is a symmetric convolution.

    Phi = -G rho * (1/|r|),        g_bar = |grad Phi|

The kernel 1/|r-r'| is two-sided, isotropic and infinite-range.  So the branch the
rule declares dead CONTAINS THE WINNER.  The argument must be at the wrong level.

Reading the two implementations side by side, the difference is not symmetry:

  SYMMETRIC family (08-02):   u(r) = INT S(r') K r' dr'  /  INT K r' dr'
                              <- NORMALISED.  A weighted MEAN of Sigma.  Intensive.
                                 Units of Sigma.  lambda -> inf gives the galaxy-wide
                                 mean surface density: a CONSTANT per galaxy.
                                 That is why it degrades with range.

  CAUSAL family (08-19):      u(r) = INT_0^r S(r') K r' dr' / INT_0^r K r' dr'
                              <- also normalised, BUT over a domain [0, r] that GROWS
                                 WITH r.  At lambda -> inf the denominator is r^2/2,
                                 and THAT is where the 1/r^2 comes from -- not from
                                 the one-sidedness.

  NEWTON:                     g_bar = |grad (-G rho * 1/|r-r'|)|
                              <- symmetric, UNNORMALISED, and a GRADIENT of a
                                 potential.  Extensive.  Units of acceleration.

So the two 08-19 families differ in TWO factors at once (support, and whether the
normalisation domain scales with r) and the whole effect was attributed to one.
This is the failure class the program already has a name for -- a conclusion one
CLASS wider than its own test; check the OPERATOR, not the number -- firing on my
own work three days later.  Smoothing is not convolving with a Green's function.

THE TEST
--------
The cleanest symmetric, unnormalised, finite-range kernel in physics is the Yukawa
propagator of a screened linear scalar -- exactly what the escape literature actually
contains (Burrage-Copeland-Millington 2017; chameleon / symmetron):

    (lap - m^2) h = 4 pi G rho     =>     h(r) = -G INT rho(r') e^{-m|r-r'|}/|r-r'| d3r'

with in-plane radial field, for a thin axisymmetric disk of surface density Sigma and
half-thickness h_z (softening):

    g_Y(R) = G INT dr' INT dphi  Sigma(r') r' e^{-m d} (1 + m d) (R - r' cos phi) / d^3
             d = sqrt(R^2 + r'^2 - 2 R r' cos phi + h_z^2)

  m -> 0        =>  g_Y -> the exact thin-disk Newtonian in-plane field == g_bar
  m -> inf      =>  g_Y -> 0 / contact-like

ONE parameter (the screening length lambda_s = 1/m), symmetric at every value of it,
and its unscreened endpoint IS the winner.  If sigma(log B | g_Y) reaches g_bar at
any finite lambda_s, the sorting rule is refuted by explicit construction.

PRE-REGISTERED OUTCOMES (written before running)
------------------------------------------------
 (O1) lambda_s -> inf reaches sigma(log B | g_bar) to within the reconstruction cost
      of the 08-19 causal endpoint (+0.0029 dex).  If it does NOT, my disk
      reconstruction is broken and nothing else in this script is interpretable.
      This is a VALIDATION GATE, not a result.
 (O2) The sorting rule is REFUTED at the level of symmetry regardless of the
      lambda_s curve, purely because a symmetric family reaches g_bar.  The only
      question left is whether it is also refuted at the level of RANGE.
 (O3) RANGE.  lambda_s* = the largest screening MASS (shortest range) still matching
      g_bar within the galaxy-block bootstrap.
        lambda_s* <~ few R_d  -> finite-range non-locality is LIVE.  The site's
                                 locality no-go is scoped much too widely and a
                                 physically-motivated escape has a measured range.
        lambda_s* >~ disk     -> 08-19's RANGE conclusion survives; only its REASON
                                 changes, from symmetry to accumulation.
 (O4) ACCUMULATION vs INVERSE SQUARE.  Free the exterior exponent: u = M(<r)/r^q.
      08-19 freed the interior weight p and measured Newton's r' dr'; it never freed
      q.  If q_hat ~ 2 the inverse square is measured, not assumed.  If sigma is flat
      in q, then "the data fixes the kernel to Newton's" is over-stated in the other
      direction.

METHOD DISCIPLINE (carried from 08-14/08-15/08-19)
--------------------------------------------------
 * Same data, same cuts, same points, same scoring statistic as 08-02/08-19:
   sigma(log B_req | log u), B_req = g_obs/g_bar, equal-count bins, robust MAD.
 * No functional form, no gamma, no rho_crit, no fitting of the coherence law.
 * Upsilon_disk SWEPT (the systematic that dissolved the 08-12 concordance on 08-14).
 * The outward extrapolation is NEW here and is a nuisance: a symmetric kernel sees
   mass beyond R_last that a causal one does not.  It is swept in PART F.
 * Galaxy-block bootstrap on every claim of "reaches / does not reach" g_bar.

DATA: Lelli, McGaugh & Schombert 2016 SPARC (MassModels_Lelli2016c.mrt + Table1).
"""

import os
import sys
import numpy as np

HERE = os.path.dirname(os.path.abspath(__file__))
SITE = os.path.abspath(os.path.join(HERE, "..", "..", ".."))
sys.path.insert(0, os.path.join(SITE, "explorer", "scripts"))

from rar_scatter_nogo_real_sparc import (          # noqa: E402
    load_table1, load_massmodels, sigma_gas_from_vgas, scale_height,
    conditional_scatter, hdr, KPC, PC, MSUN, KMS, UP_DISK, UP_BUL,
)

G_SI = 6.674e-11
RNG = np.random.default_rng(20260822)

# screening length grid, in units of the galaxy's own disk scale length R_d
LS_OVER_RD = [0.10, 0.25, 0.5, 0.75, 1.0, 1.5, 2.0, 3.0, 4.0, 6.0, 8.0,
              12.0, 16.0, 24.0, 32.0, 64.0, 1.0e6]

N_RP = 240        # source radial quadrature points
N_PHI = 96        # azimuthal quadrature points (0..pi, doubled)


# =============================================================================
# PART 0 -- profiles, with inward AND outward exponential extension
# =============================================================================
def build_profiles(gas_mode="vgas", h_mode="const", up_disk=UP_DISK, up_bul=UP_BUL,
                   err_cut=0.10, inc_cut=30.0, qmax=2, r_out_mult=3.0):
    """Per-galaxy profiles.  Same cuts as 08-02/08-19.

    A symmetric kernel sees mass OUTSIDE the last measured point; a causal one does
    not.  Sigma is extended outward from R_last with the galaxy's own exponential
    disk out to r_out_mult * R_last, matched in value.  r_out_mult is swept.
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
        elif gas_mode == "none":
            Sg_all = np.zeros_like(R_all)
        else:
            raise ValueError(gas_mode)

        hz = scale_height(h_mode, p["Rdisk"])
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
            R.append(d["R"]); Sig.append(S)
            gbar.append(Vbar2 / Rm)
            gobs.append((d["Vobs"] * KMS) ** 2 / Rm)
            elog.append(2.0 * (d["eVobs"] / d["Vobs"]) / np.log(10))
        if len(R) < 4:
            continue
        gals.append(dict(gid=gid, Rd=Rd, hz=hz, r_out_mult=r_out_mult,
                         R=np.array(R), Sigma=np.array(Sig),
                         g_bar=np.array(gbar), g_obs=np.array(gobs),
                         elog=np.array(elog)))
    return gals


def source_profile(gal, n_rp=N_RP, inner="exp"):
    """Sigma(r') on a quadrature grid from 0 to r_out_mult*R_last, in SI (kg/m^2)."""
    R, S, Rd = gal["R"], gal["Sigma"], gal["Rd"]
    r_max = gal["r_out_mult"] * R[-1]
    rp = np.linspace(1e-4, r_max, n_rp)
    Sp = np.interp(rp, R, S)
    # inward: galaxy's own exponential disk, matched at R[0]
    inn = rp < R[0]
    if inner == "exp":
        Sp[inn] = S[0] * np.exp(-(rp[inn] - R[0]) / Rd)
    elif inner == "flat":
        Sp[inn] = S[0]
    elif inner == "none":
        Sp[inn] = 0.0
    # outward: exponential, matched at R[-1]
    out = rp > R[-1]
    Sp[out] = S[-1] * np.exp(-(rp[out] - R[-1]) / Rd)
    return rp, Sp * MSUN / PC ** 2          # kg/m^2


def kernel_integrals(gal, ls_over_rd_list, n_rp=N_RP, n_phi=N_PHI, inner="exp"):
    """Three functionals of the SAME symmetric screened kernel, per screening length.

    With d = sqrt(R^2 + r'^2 - 2 R r' cos phi + h_z^2):

      I_pot(R)  = INT S(r') r' e^{-m d}/d               -> Phi_Y = -G I_pot
                  UNNORMALISED, extensive, units of Sigma*length: the POTENTIAL.
      I_wt(R)   = INT        r' e^{-m d}/d              -> the normalisation
      I_fld(R)  = INT S(r') r' e^{-m d}(1+m d)(R - r' cos phi)/d^3
                  UNNORMALISED, extensive, units of acceleration/G: the FIELD.
      Sbar(R)   = I_pot / I_wt
                  NORMALISED, intensive, units of Sigma: a weighted MEAN of Sigma,
                  i.e. exactly the operator class of the 08-02 "symmetric" family,
                  but built from the same physical kernel as the field.

    This is the decomposition the 08-19 rule never made.  Symmetry is held FIXED
    across all three -- every one of them is two-sided and isotropic.  What varies
    is (i) normalisation and (ii) whether a gradient is taken.
    """
    R = gal["R"] * KPC
    rp_kpc, Sp = source_profile(gal, n_rp, inner)
    rp = rp_kpc * KPC
    hz = gal["hz"] * KPC
    Rd = gal["Rd"] * KPC

    phi = (np.arange(n_phi) + 0.5) * np.pi / n_phi        # midpoint on 0..pi
    dphi = np.pi / n_phi
    cph = np.cos(phi)

    Ri = R[:, None, None]
    rj = rp[None, :, None]
    ck = cph[None, None, :]
    d = np.sqrt(Ri ** 2 + rj ** 2 - 2.0 * Ri * rj * ck + hz ** 2)
    geo = (Ri - rj * ck)
    Sj = Sp[None, :, None]

    out = {}
    for ls in ls_over_rd_list:
        m = 0.0 if ls > 1e5 else 1.0 / (ls * Rd)
        scr = 1.0 if m == 0.0 else np.exp(-m * d)
        pot_k = scr * rj / d
        fld_k = scr * (1.0 + m * d) * rj * geo / d ** 3
        I_pot = np.trapz((Sj * pot_k).sum(axis=2) * dphi * 2.0, rp, axis=1)
        I_wt  = np.trapz(pot_k.sum(axis=2) * dphi * 2.0, rp, axis=1)
        I_fld = np.trapz((Sj * fld_k).sum(axis=2) * dphi * 2.0, rp, axis=1)
        out[ls] = dict(pot=G_SI * I_pot,                 # m^2/s^2  (|Phi_Y|)
                       fld=G_SI * I_fld,                 # m/s^2    (g_Y)
                       sbar=I_pot / np.maximum(I_wt, 1e-300))   # kg/m^2
    return out


# =============================================================================
# The 2026-08-19 CAUSAL family, re-implemented in per-galaxy R_d units so the
# head-to-head is at matched range in the same units as the Yukawa scan.
# =============================================================================
def causal_mean(gal, lam_over_rd, n_rp=N_RP, inner="exp"):
    """pi G * causal mass-weighted running mean of Sigma, memory length lam.

    lam -> 0    : pi G Sigma(r)          (local)
    lam -> inf  : G M(<r)/r^2 = g_bar    (MOND's variable)
    """
    R = gal["R"] * KPC
    rp_kpc, Sp = source_profile(gal, n_rp, inner)
    rp = rp_kpc * KPC
    lam = lam_over_rd * gal["Rd"] * KPC
    out = np.empty(len(R))
    for i, r in enumerate(R):
        m = rp <= r
        if m.sum() < 3:
            out[i] = np.pi * G_SI * np.interp(r, rp, Sp)
            continue
        rr, ss = rp[m], Sp[m]
        w = np.exp(-(r - rr) / lam) * rr if lam > 0 else np.zeros_like(rr)
        if lam <= 0:
            out[i] = np.pi * G_SI * np.interp(r, rp, Sp)
        else:
            out[i] = np.pi * G_SI * np.trapz(ss * w, rr) / max(np.trapz(w, rr), 1e-300)
    return out


def enclosed_mass_power(gal, q, n_rp=N_RP, inner="exp"):
    """u = G M(<r) / r^q  --  free EXTERIOR exponent.  q = 2 is Newton."""
    R = gal["R"] * KPC
    rp_kpc, Sp = source_profile(gal, n_rp, inner)
    rp = rp_kpc * KPC
    out = np.empty(len(R))
    for i, r in enumerate(R):
        m = rp <= r
        M = 2.0 * np.pi * np.trapz(Sp[m] * rp[m], rp[m]) if m.sum() >= 3 else 0.0
        out[i] = G_SI * M / r ** q
    return out


# =============================================================================
# scoring helpers
# =============================================================================
def score(u, logB, mask):
    uu = np.asarray(u)[mask]
    good = np.isfinite(uu) & (uu > 0)
    if good.sum() < 200:
        return np.nan
    _, mad, _, _ = conditional_scatter(np.log10(uu[good]), logB[mask][good])
    return mad


def assemble(gals, ls_grid, inner="exp"):
    """Run the kernel integrals over the whole sample, return stacked arrays."""
    per = {ls: dict(pot=[], fld=[], sbar=[]) for ls in ls_grid}
    gbar, gobs, sigma, gid = [], [], [], []
    for g in gals:
        K = kernel_integrals(g, ls_grid, inner=inner)
        for ls in ls_grid:
            for k in ("pot", "fld", "sbar"):
                per[ls][k].append(K[ls][k])
        gbar.append(g["g_bar"]); gobs.append(g["g_obs"])
        sigma.append(g["Sigma"]); gid.append([g["gid"]] * len(g["R"]))
    out = dict(
        gbar=np.concatenate(gbar), gobs=np.concatenate(gobs),
        Sigma=np.concatenate(sigma), gid=np.concatenate(gid),
        per={ls: {k: np.concatenate(v) for k, v in d.items()} for ls, d in per.items()},
    )
    out["logB"] = np.log10(out["gobs"] / out["gbar"])
    # COMMON validity mask: every family member positive & finite at every ls.
    ok = np.ones(len(out["logB"]), bool)
    for ls in ls_grid:
        for k in ("pot", "fld", "sbar"):
            v = out["per"][ls][k]
            ok &= np.isfinite(v) & (v > 0)
    ok &= np.isfinite(out["gbar"]) & (out["gbar"] > 0) & (out["Sigma"] > 0)
    out["mask"] = ok
    return out


# =============================================================================
def main():
    print(__doc__)

    gals = build_profiles()
    A = assemble(gals, LS_OVER_RD)
    logB, M = A["logB"], A["mask"]
    ceiling = 1.4826 * np.median(np.abs(logB[M] - np.median(logB[M])))
    s_gbar = score(A["gbar"], logB, M)
    s_loc = score(A["Sigma"], logB, M)
    rd_med = np.median([g["Rd"] for g in gals])

    hdr("PART A -- SETUP, AND THE TWO ANCHORS")
    print(f"  N points = {M.sum()} of {len(logB)} (common-validity mask), "
          f"N galaxies = {len(gals)}, median R_d = {rd_med:.2f} kpc")
    print(f"  sigma(log B | g_bar)   [SPARC's own g_bar, the target] = {s_gbar:.4f} dex")
    print(f"  sigma(log B | Sigma)   [the site's local variable]      = {s_loc:.4f} dex"
          f"   ({s_loc/s_gbar:.2f}x)")
    print(f"  no-information ceiling sigma(log B)                     = {ceiling:.4f} dex")
    print("\n  08-19 reference numbers on the same cuts, for continuity:")
    print("    sigma(log B | g_bar) = 0.1163   sigma(log B | Sigma) = 0.1611")
    print("    causal family, lambda = inf     = 0.1192  (1.02x)")
    print("    symmetric NORMALISED family, lambda = inf = 0.1930  (1.66x)  <- 'closed'")

    hdr("PART B -- THE VALIDATION GATE (O1): DOES MY DISK RECONSTRUCTION WORK?")
    print("  The unscreened member m -> 0 of the Yukawa family IS the Newtonian thin-disk")
    print("  in-plane field.  It must reproduce sigma(log B | g_bar).  If it does not,")
    print("  nothing below is interpretable.  This is a gate, not a result.\n")
    s_inf = score(A["per"][1.0e6]["fld"], logB, M)
    print(f"    sigma(log B | g_Y, lambda_s -> inf) = {s_inf:.4f} dex")
    print(f"    sigma(log B | g_bar)                = {s_gbar:.4f} dex")
    print(f"    reconstruction cost                 = {s_inf - s_gbar:+.4f} dex")
    print(f"    (08-19 causal endpoint's cost was  = +0.0029 dex)")
    print("\n  GATE: " + ("PASSES" if abs(s_inf - s_gbar) < 0.006 else "FAILS"))

    hdr("PART C -- (O2) IS THE SORTING RULE TRUE?  THE SCREENING-LENGTH SCAN")
    print("  Every member below is SYMMETRIC: two-sided, isotropic, K = K(|r - r'|).")
    print("  The 08-19 rule says this entire column is in the closed branch at ANY range.\n")
    print(f"  {'lambda_s/R_d':>13}{'lambda_s (kpc)':>16}{'sigma(logB|g_Y)':>18}"
          f"{'vs g_bar':>11}{'% of gap closed':>18}")
    gap = s_loc - s_gbar
    for ls in LS_OVER_RD:
        s = score(A["per"][ls]["fld"], logB, M)
        lab = "inf" if ls > 1e5 else f"{ls:.2f}"
        kpc = float("inf") if ls > 1e5 else ls * rd_med
        print(f"  {lab:>13}{kpc if kpc==kpc else 0:>16.2f}{s:>18.4f}"
              f"{s/s_gbar:>10.2f}x{100*(s_loc-s)/gap:>17.1f}%")

    hdr("PART D -- THE OPERATOR DECOMPOSITION: WHAT ACTUALLY DISCRIMINATES")
    print("  Same kernel, same range, same points, same statistic.  SYMMETRY IS HELD")
    print("  FIXED -- all three are two-sided and isotropic.  What varies is whether the")
    print("  functional is NORMALISED (a mean of Sigma; intensive) or UNNORMALISED (a")
    print("  field; extensive), and whether a GRADIENT is taken.\n")
    print(f"  {'lambda_s/R_d':>13}{'<Sigma>_Y':>14}{'|Phi_Y|':>12}{'g_Y=|grad Phi|':>17}"
          f"   {'ratios vs g_bar'}")
    print(f"  {'':>13}{'NORMALISED':>14}{'UNNORM.':>12}{'UNNORM.+GRAD':>17}")
    for ls in LS_OVER_RD:
        d = A["per"][ls]
        sb = score(d["sbar"], logB, M)
        sp = score(d["pot"], logB, M)
        sf = score(d["fld"], logB, M)
        lab = "inf" if ls > 1e5 else f"{ls:.2f}"
        print(f"  {lab:>13}{sb:>14.4f}{sp:>12.4f}{sf:>17.4f}"
              f"   {sb/s_gbar:.2f}x / {sp/s_gbar:.2f}x / {sf/s_gbar:.2f}x")

    hdr("PART E -- HEAD-TO-HEAD AT MATCHED RANGE: SYMMETRIC FIELD vs CAUSAL MEAN")
    print("  The 08-19 Part G table, re-run with the symmetric family replaced by the")
    print("  symmetric family that a FIELD EQUATION actually produces.  Same ranges,")
    print("  same points, same statistic.  Read row-wise.\n")
    lam_grid = [0.25, 0.5, 1.0, 2.0, 4.0, 8.0, 16.0, 1.0e6]
    caus = {}
    for lam in lam_grid:
        caus[lam] = np.concatenate([causal_mean(g, lam) for g in gals])
    print(f"  {'range/R_d':>11}{'symmetric g_Y':>16}{'causal <Sigma>':>16}"
          f"{'sym vs g_bar':>15}{'causal vs g_bar':>18}")
    for lam in lam_grid:
        sf = score(A["per"][lam]["fld"], logB, M) if lam in A["per"] else np.nan
        sc = score(caus[lam], logB, M)
        lab = "inf" if lam > 1e5 else f"{lam:.2f}"
        print(f"  {lab:>11}{sf:>16.4f}{sc:>16.4f}{sf/s_gbar:>14.2f}x{sc/s_gbar:>17.2f}x")

    hdr("PART F -- (O4) ACCUMULATION OR INVERSE SQUARE?  FREE THE EXTERIOR EXPONENT")
    print("  08-19 freed the INTERIOR weight p in INT Sigma r'^p dr' and measured")
    print("  Newton's p = 1.  It never freed the EXTERIOR exponent.  u = G M(<r)/r^q:")
    print("  q = 0 is pure accumulated mass, q = 2 is Newton.\n")
    print(f"  {'q':>6}{'sigma(logB|u)':>16}{'vs g_bar':>11}")
    qs = [0.0, 0.5, 1.0, 1.5, 1.75, 2.0, 2.25, 2.5, 3.0, 4.0]
    best_q, best_s = None, 1e9
    for q in qs:
        u = np.concatenate([enclosed_mass_power(g, q) for g in gals])
        s = score(u, logB, M)
        if s < best_s:
            best_s, best_q = s, q
        print(f"  {q:>6.2f}{s:>16.4f}{s/s_gbar:>10.2f}x")
    print(f"\n  minimum at q = {best_q}  (sigma = {best_s:.4f} dex)")

    hdr("PART G -- GALAXY-BLOCK BOOTSTRAP: WHICH RANGES ARE SEPARATED FROM g_bar?")
    print("  150 galaxy-block resamples.  A finite screening length only counts as")
    print("  'reaching g_bar' if its delta overlaps zero.\n")
    gid = A["gid"]
    ug = np.unique(gid[M])
    idx_by_g = {g: np.where((gid == g) & M)[0] for g in ug}
    members = [("g_Y ls=0.25Rd", A["per"][0.25]["fld"]),
               ("g_Y ls=0.5Rd", A["per"][0.5]["fld"]),
               ("g_Y ls=1Rd", A["per"][1.0]["fld"]),
               ("g_Y ls=2Rd", A["per"][2.0]["fld"]),
               ("g_Y ls=4Rd", A["per"][4.0]["fld"]),
               ("g_Y ls=inf", A["per"][1.0e6]["fld"]),
               ("causal 4Rd", caus[4.0]),
               ("<Sigma>_Y inf", A["per"][1.0e6]["sbar"]),
               ("Sigma local", A["Sigma"]),
               ("g_bar", A["gbar"])]
    NB = 150
    boots = {n: [] for n, _ in members}
    for b in range(NB):
        pick = RNG.choice(ug, size=len(ug), replace=True)
        idx = np.concatenate([idx_by_g[g] for g in pick])
        lb = logB[idx]
        for name, arr in members:
            v = arr[idx]
            good = np.isfinite(v) & (v > 0)
            if good.sum() < 200:
                boots[name].append(np.nan); continue
            _, mad, _, _ = conditional_scatter(np.log10(v[good]), lb[good])
            boots[name].append(mad)
    print(f"  {'member':>16}{'median':>10}{'95% CI':>22}{'delta vs g_bar':>18}   verdict")
    ref = np.array(boots["g_bar"])
    for name, _ in members:
        a = np.array(boots[name])
        d = a - ref
        lo, hi = np.nanpercentile(d, [2.5, 97.5])
        clo, chi = np.nanpercentile(a, [2.5, 97.5])
        verd = "OVERLAPS g_bar" if lo <= 0 <= hi else "SEPARATED from g_bar"
        print(f"  {name:>16}{np.nanmedian(a):>10.4f}   [{clo:.4f}, {chi:.4f}]"
              f"   {np.nanmedian(d):>+8.4f} [{lo:+.4f},{hi:+.4f}]  {verd}")

    hdr("PART H -- NULL CONTROL")
    u = A["per"][2.0]["fld"][M]
    lb = logB[M]
    g2 = np.isfinite(u) & (u > 0)
    perms = []
    for _ in range(200):
        perms.append(conditional_scatter(np.log10(u[g2]), RNG.permutation(lb[g2]))[1])
    perms = np.array(perms)
    s2 = score(A["per"][2.0]["fld"], logB, M)
    print(f"  permutation null on g_Y(ls=2Rd), 200x: {perms.mean():.4f} +- {perms.std():.4f} dex")
    print(f"  observed {s2:.4f} dex  => z = {(perms.mean()-s2)/perms.std():.1f}")

    hdr("PART I -- ROBUSTNESS GRID")
    print("  Upsilon_disk is the systematic that dissolved the 08-12 concordance on 08-14.")
    print("  r_out_mult is NEW and specific to symmetric kernels: a two-sided kernel sees")
    print("  mass beyond the last measured point that a causal one never does.\n")
    print(f"  {'Ups':>6}{'h mode':>10}{'gas':>7}{'r_out':>7}{'inner':>8}"
          f"{'g_bar':>9}{'ls=1Rd':>9}{'ls=2Rd':>9}{'ls=4Rd':>9}{'ls=inf':>9}")
    grid = [dict(), dict(up_disk=0.3), dict(up_disk=0.4), dict(up_disk=0.6),
            dict(up_disk=0.8), dict(h_mode="rd5"), dict(h_mode="bershady"),
            dict(gas_mode="none"), dict(r_out_mult=1.0), dict(r_out_mult=2.0),
            dict(r_out_mult=6.0)]
    inner_modes = ["exp", "none", "flat"]
    for cfg in grid:
        gg = build_profiles(**cfg)
        AA = assemble(gg, [1.0, 2.0, 4.0, 1.0e6])
        lb2, MM = AA["logB"], AA["mask"]
        row = [score(AA["gbar"], lb2, MM)] + [score(AA["per"][x]["fld"], lb2, MM)
                                              for x in (1.0, 2.0, 4.0, 1.0e6)]
        print(f"  {cfg.get('up_disk',UP_DISK):>6.2f}{cfg.get('h_mode','const'):>10}"
              f"{cfg.get('gas_mode','vgas'):>7}{cfg.get('r_out_mult',3.0):>7.1f}"
              f"{'exp':>8}" + "".join(f"{v:>9.4f}" for v in row))
    for im in inner_modes[1:]:
        gg = build_profiles()
        AA = assemble(gg, [1.0, 2.0, 4.0, 1.0e6], inner=im)
        lb2, MM = AA["logB"], AA["mask"]
        row = [score(AA["gbar"], lb2, MM)] + [score(AA["per"][x]["fld"], lb2, MM)
                                              for x in (1.0, 2.0, 4.0, 1.0e6)]
        print(f"  {UP_DISK:>6.2f}{'const':>10}{'vgas':>7}{3.0:>7.1f}{im:>8}"
              + "".join(f"{v:>9.4f}" for v in row))

    hdr("VERDICT INPUTS")
    print(f"  sigma(log B | g_bar)                       = {s_gbar:.4f} dex")
    print(f"  sigma(log B | Sigma)  [local]              = {s_loc:.4f} dex")
    print(f"  no-information ceiling                     = {ceiling:.4f} dex")
    print(f"  Yukawa unscreened (gate)                   = {s_inf:.4f} dex")
    print(f"  best exterior exponent q                   = {best_q}")
    print(f"  median R_d                                 = {rd_med:.2f} kpc")


if __name__ == "__main__":
    main()
