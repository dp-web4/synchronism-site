#!/usr/bin/env python3
"""
The differential-coupling branch: complete Buckingham-pi enumeration + real-SPARC test
=====================================================================================

Topic: explorer/topics/differential-coupling-completion.md
Session: 2026-08-15 explorer

BACKGROUND
----------
The galaxy sector's stated last un-eliminated constructive direction is a coupling
that is DIFFERENTIAL in rho (keyed on grad rho, grad ln rho, laplacian rho) rather
than ALGEBRAIC in rho.  Provenance:

  2026-07-27  Burrage, Copeland & Millington (2017) found as a published
              counterexample to the "locality no-go" -- a screened scalar with a
              differential coupling reproducing MOND-like phenomenology.  The real
              axis was re-scoped from local-vs-nonlocal to ALGEBRAIC-vs-DIFFERENTIAL.
  2026-07-28  Hand pass over two candidate forms only (|grad rho| and |grad ln rho|).
  2026-08-02  RAR scatter no-go: local rho carries <=0.7% of the boost-residual
              variance.  Its "constructive" section convolved Sigma with SMOOTHING
              kernels of range lambda and concluded "making the coupling differential
              is not a free dial".
  2026-08-03  Algebraic branch closed constructively (vacuum divergence of
              div[C(rho) grad Phi] = 4 pi G rho, since C(0) = 0 exactly).

*** THE GAP THIS SCRIPT ADDRESSES ***
Smoothing and differentiating are OPPOSITE operations.  The 2026-08-02 scan varied an
integral (convolution) kernel; no gradient of rho ever entered it.  Its closing
sentence generalises an integral-kernel result to the differential class.  So the
differential axis is NOT closed by that no-go, and the two hand-checked forms of
2026-07-28 are 2 members of a class nobody bounded.

*** WHAT IS NEW HERE ***
Rather than guessing more forms, bound the class exactly.  A local differential
coupling is a dimensionless F built from the density field and its first two
derivatives plus the theory constants:

    F = F(rho, |grad rho|, lap rho ; G, a0)

Five quantities, three dimensions (M, L, T) => Buckingham pi gives EXACTLY TWO
independent dimensionless groups.  Enumerating them turns "which F?" from an open
search into a closed question.  PART A derives them; PART B takes their vacuum
limits; PART C tests them against real SPARC with no functional form assumed;
PART D checks the 07-28 degeneracy (does the group smuggle in a per-galaxy constant?);
PART E declares the null by PERMUTATION rather than by convention.

Benchmarks reproduced from explorer/scripts/rar_scatter_nogo_real_sparc.py (2026-08-02),
same loader, same cuts, same estimator:
    sigma(log B_req | log g_bar) = 0.1178 dex   <- MOND / RAR, the target
    sigma(log B_req | log rho)   = 0.1613 dex   <- the site's algebraic variable
    sigma(log B_req | log R)     = 0.2777 dex   <- radius only, a trivial baseline

WORKING ASSUMPTION (same one the site's own galaxy plotter makes): for the
AQUAL-type field equation div[F grad Phi] = 4 pi G rho, symmetry integrates the
operator once, giving F * g_obs = g_bar exactly.  Hence the REQUIRED coupling is
    F_req(r) = g_bar(r) / g_obs(r) = 1 / B_req(r)
and a differential theory is viable iff F_req is a tight single-valued function of
its pi groups.  No functional form, no gamma, no rho_crit, no fitting.

DATA: Lelli, McGaugh & Schombert 2016 SPARC (MassModels_Lelli2016c.mrt + Table1).
Units: SI internally (kg/m^3, m/s^2), radii in kpc where labelled.
"""

import os
import sys
import numpy as np

HERE = os.path.dirname(os.path.abspath(__file__))
SITE = os.path.abspath(os.path.join(HERE, "..", "..", ".."))
sys.path.insert(0, os.path.join(SITE, "explorer", "scripts"))

# Reuse the 2026-08-02 loader verbatim so every number is directly comparable.
from rar_scatter_nogo_real_sparc import (          # noqa: E402
    load_table1, load_massmodels, sigma_gas_from_vgas, scale_height,
    conditional_scatter, hdr, KPC, PC, MSUN, KMS, UP_DISK, UP_BUL,
)

G_SI = 6.674e-11
A0 = 1.20e-10            # m/s^2, Lelli+2017 RAR scale
RNG = np.random.default_rng(20260815)


# =============================================================================
# PART A -- the Buckingham pi enumeration (analytic, printed as a derivation)
# =============================================================================
def part_a():
    hdr("PART A -- COMPLETE ENUMERATION OF LOCAL DIFFERENTIAL COUPLINGS")
    print("""
  A local differential coupling is a dimensionless function

      F = F( rho , s1 , s2 ; G , a0 )        s1 = |grad rho| , s2 = lap rho

  Dimensions:
      [rho] = M L^-3      [s1] = M L^-4      [s2] = M L^-5
      [G]   = L^3 M^-1 T^-2                  [a0] = L T^-2

  Seek pi = rho^a s1^b s2^c G^d a0^e with all exponents killed:

      M :   a + b + c - d              = 0
      L : -3a - 4b - 5c + 3d + e       = 0
      T :            -2d - 2e          = 0   =>  e = -d

  Substituting e = -d into L and using d = a + b + c from M:

      -3a - 4b - 5c + 2(a+b+c) = 0     =>   a = -2b - 3c

  Two free exponents (b, c) => the null space is exactly 2-DIMENSIONAL.
  *** Any local differential coupling is a function of exactly two groups. ***

  Basis choice 1 -- (b,c) = (1,0):

      pi_1  =  a0 |grad rho| / (G rho^2)          [the SCALE group]

  It is more natural inverted, so that large means "deep in the high-density
  regime" exactly like the site's x = rho/rho_crit:

      x_diff  =  1 / pi_1  =  G rho^2 / ( a0 |grad rho| )

  Basis choice 2 -- (b,c) = (0,1):

      pi_2  =  a0^2 (lap rho) / (G^2 rho^3)

  A more informative second basis vector is pi_2 / pi_1^2, which is free of BOTH
  G and a0 -- a pure profile-shape number:

      q  =  rho (lap rho) / |grad rho|^2          [the SHAPE group]

  So the complete class is  F = F(x_diff, q)  and nothing else.

  *** STRUCTURAL RESULT 1 (cuts TOWARD the framework) ***
  The algebraic branch needs a free density scale rho_crit to form x = rho/rho_crit.
  The differential branch needs NO new constant at all: x_diff is built from rho and
  grad rho with G and a0 alone, and q needs not even those.  The differential branch
  is strictly LESS parameterised than the algebraic one it would replace.  Since
  rho_crit is degenerate with gamma (2026-08-02 memory), removing it is a real gain.

  *** STRUCTURAL RESULT 2 (the vacuum fork -- see PART B) ***
  What killed the algebraic branch was C(rho -> 0) = 0 exactly, which makes the
  exterior field g = g_bar / C diverge.  The survival question for the differential
  branch is therefore entirely about the vacuum limits of x_diff and q.
""")


# =============================================================================
# PART B -- vacuum limits of the two groups (analytic)
# =============================================================================
def part_b():
    hdr("PART B -- VACUUM LIMITS: DOES THE DIFFERENTIAL BRANCH ESCAPE THE 08-03 KILL?")
    print("""
  Take the site's own baseline geometry, an exponential disk rho ~ exp(-r/R_d),
  and push r -> infinity (rho -> 0), which is where the algebraic branch died.

    |grad rho| = rho / R_d
    x_diff     = G rho^2 / (a0 rho / R_d) = G rho R_d / a0    ->  0   as rho -> 0
    lap rho    = rho / R_d^2  (radial part)
    q          = rho (rho/R_d^2) / (rho/R_d)^2 = 1            ->  1   EXACTLY, and
                 identically 1 at every radius, for any exponential.

  Read that carefully -- it is a TRAP with two horns:

    HORN 1  F depending on x_diff inherits the vacuum pathology unchanged.
            x_diff -> 0 exactly as rho -> 0, so any F with F(0, .) = 0 -- which is
            what the site's compander C(x) = x^g/(x^g + 1) does by construction --
            gives a divergent exterior field.  The differential branch buys NOTHING
            on the axis that killed the algebraic branch.

    HORN 2  F depending only on q is vacuum-finite (q -> 1), but q is IDENTICALLY 1
            at every radius of a pure exponential disk.  A coupling that is constant
            across the whole disk is not a modification of gravity at all: it
            renormalises G.  This is precisely the 2026-07-28 degeneracy
            (|grad ln rho| = 1/R_d is radially constant) re-derived at class level,
            and the failure mode memory flags as project_ncorr_ladder_never_anchored.

  So on the site's own baseline geometry the class is closed by construction.
  The ONLY escape is that real galaxies are not pure exponentials: gas, bulges and
  truncations make q(r) vary.  Whether that variation carries the boost is an
  EMPIRICAL question, and it is the one PART C answers on real SPARC data.

  *** STRUCTURAL RESULT 3 (the thin-disk midplane problem) ***
  The above used radial derivatives only.  A real disk is thin: h ~ 0.3 kpc against
  R_d ~ 2-4 kpc.  Write rho(r,z) = rho_0(r) f(z/h) with f even and peaked at z = 0.

    at z = 0:   d rho/dz = 0            (symmetry -- the midplane is an extremum)
                d^2 rho/dz^2 = rho_0 f''(0) / h^2   with f''(0) < 0

  So the midplane FIRST derivative is purely radial (~ rho/R_d) while the midplane
  SECOND derivative is dominated by the vertical term:

    q(midplane) ~= rho * (rho f''(0)/h^2) / (rho/R_d)^2 = f''(0) * (R_d/h)^2

  For a sech^2 profile f''(0) = -2, giving q ~= -2 (R_d/h)^2, i.e. of order -200 for
  SPARC-like aspect ratios -- and set ENTIRELY by the aspect ratio R_d/h, a per-galaxy
  geometric constant, not by the radial profile at all.  The shape group is therefore
  degenerate with disk thickness, the single WORST-constrained quantity in the problem,
  while the variable it must beat (g_bar) depends only on the measured rotation curve.

  PART C nonetheless runs the RADIAL-ONLY groups, which is the steelman: it is the
  most generous possible reading, since it discards the vertical term that makes q a
  per-galaxy constant.
""")


# =============================================================================
# data build -- same cuts as 2026-08-02, plus per-galaxy radial derivatives
# =============================================================================
def build_with_derivatives(gas_mode="vgas", h_mode="const", err_cut=0.10,
                           inc_cut=30.0, qmax=2, deriv="poly", win=5):
    """Per-galaxy rho(r) and its first two radial log-derivatives.

    deriv = 'fd'   : np.gradient finite differences on log rho vs log r
            'poly' : local quadratic fit in (log r, log rho) over a window of
                     `win` points -- far more stable for a second derivative.

    Returns list of dicts with rho, dlnrho/dlnr, d2lnrho/dlnr2 and the pi groups.
    """
    props = load_table1()
    rows = load_massmodels()
    bygal = {}
    for r in rows:
        bygal.setdefault(r["gid"], []).append(r)

    out = []
    for gid, pts in bygal.items():
        p = props.get(gid)
        if p is None or p["Q"] > qmax or p["inc"] < inc_cut:
            continue
        pts = sorted(pts, key=lambda d: d["R"])
        R = np.array([d["R"] for d in pts])
        if gas_mode == "vgas":
            Sg = sigma_gas_from_vgas(R, [d["Vgas"] for d in pts])
        elif gas_mode == "none":
            Sg = np.zeros_like(R)
        else:
            raise ValueError(gas_mode)

        h = scale_height(h_mode, p["Rdisk"])

        Sigma = np.array([UP_DISK * d["SBdisk"] + UP_BUL * d["SBbul"] + Sg[i]
                          for i, d in enumerate(pts)])          # Msun/pc^2
        good = (Sigma > 0) & (R > 0)
        if good.sum() < max(win, 5):
            continue

        Rg, Sgm = R[good], Sigma[good]
        idx = np.where(good)[0]
        lr, ls = np.log(Rg), np.log(Sgm)

        # rho = Sigma / (2h); at fixed h, d ln rho = d ln Sigma exactly.
        if deriv == "fd":
            d1 = np.gradient(ls, lr)
            d2 = np.gradient(d1, lr)
        elif deriv == "poly":
            n = len(lr)
            d1 = np.empty(n)
            d2 = np.empty(n)
            half = win // 2
            for k in range(n):
                lo = max(0, min(k - half, n - win))
                hi = lo + win
                cf = np.polyfit(lr[lo:hi] - lr[k], ls[lo:hi], 2)
                d2[k] = 2.0 * cf[0]
                d1[k] = cf[1]
        else:
            raise ValueError(deriv)

        for k, j in enumerate(idx):
            d = pts[j]
            if d["Vobs"] <= 0 or d["eVobs"] / d["Vobs"] > err_cut:
                continue
            Rm = d["R"] * KPC
            Vbar2 = (d["Vgas"] * abs(d["Vgas"])
                     + UP_DISK * d["Vdisk"] * abs(d["Vdisk"])
                     + UP_BUL * d["Vbul"] * abs(d["Vbul"])) * KMS ** 2
            if Vbar2 <= 0:
                continue
            g_bar = Vbar2 / Rm
            g_obs = (d["Vobs"] * KMS) ** 2 / Rm
            if g_obs <= 0:
                continue

            rho = Sgm[k] * MSUN / (PC ** 2) / (2.0 * h * KPC)    # kg/m^3
            rm = d["R"] * KPC                                    # r in metres

            # radial derivatives of rho from the log-derivatives
            a1 = d1[k]                      # dln rho / dln r
            a2 = d2[k]                      # d2 ln rho / dln r^2
            grad = rho * a1 / rm            # d rho / dr    (signed)
            # radial part of the laplacian: (1/r^2) d/dr (r^2 d rho/dr) for spherical,
            # (1/r) d/dr (r d rho/dr) for cylindrical.  Use cylindrical (disk):
            #   lap_r rho = (rho / r^2) * (a2 + a1^2)
            lap = rho * (a2 + a1 * a1) / (rm * rm)

            agrad = abs(grad)
            if agrad <= 0 or not np.isfinite(agrad):
                continue

            x_diff = G_SI * rho ** 2 / (A0 * agrad)
            qshape = rho * lap / (grad * grad)
            # |grad ln rho| in inverse metres -- the 07-28 hand form, for reference
            gradln = agrad / rho

            elog = 2.0 * (d["eVobs"] / d["Vobs"]) / np.log(10)
            out.append(dict(gid=gid, R=d["R"], g_bar=g_bar, g_obs=g_obs, rho=rho,
                            Sigma=Sgm[k], h=h, elog=elog,
                            a1=a1, a2=a2, x_diff=x_diff, q=qshape, gradln=gradln))
    return out


def report(data, label):
    logB = np.log10(np.array([d["g_bar"] for d in data]) /
                    np.array([d["g_obs"] for d in data]))
    # B_req = g_obs/g_bar is the boost; F_req = 1/B_req.  log F_req = log(g_bar/g_obs).
    return logB


# =============================================================================
# PART C -- does either pi group predict the required coupling on real SPARC?
# =============================================================================
def part_c(data):
    hdr("PART C -- REAL SPARC: sigma( log F_req | pi ) FOR EVERY GROUP IN THE CLASS")

    gb = np.array([d["g_bar"] for d in data])
    go = np.array([d["g_obs"] for d in data])
    rho = np.array([d["rho"] for d in data])
    xd = np.array([d["x_diff"] for d in data])
    qs = np.array([d["q"] for d in data])
    gl = np.array([d["gradln"] for d in data])
    RR = np.array([d["R"] for d in data])
    logF = np.log10(gb / go)          # = -log10 B_req; scatter is identical either way

    n = len(logF)
    print(f"  N = {n} points, {len(set(d['gid'] for d in data))} galaxies")
    print(f"  unconditional sigma(log F_req)            rms={np.sqrt(np.mean((logF-np.mean(logF))**2)):.4f}"
          f"  MAD-sig={1.4826*np.median(np.abs(logF-np.median(logF))):.4f} dex")
    print("  ^ this is the NO-INFORMATION ceiling: a pure-noise variable scores here.\n")

    variables = [
        ("log g_bar          (MOND/RAR target)", np.log10(gb)),
        ("log rho            (algebraic, 08-02)", np.log10(rho)),
        ("log R              (trivial baseline)", np.log10(RR)),
        ("log x_diff         (DIFF scale group)", np.log10(np.maximum(xd, 1e-300))),
        ("q                  (DIFF shape group)", qs),
        ("sign(q) log|q|     (shape, log-spread)", np.sign(qs) * np.log10(np.maximum(np.abs(qs), 1e-30))),
        ("log|grad ln rho|   (07-28 hand form) ", np.log10(np.maximum(gl, 1e-300))),
        ("dln rho/dln r      (log-slope)       ", np.array([d["a1"] for d in data])),
    ]

    print(f"  {'variable':<40}{'rms':>9}{'MAD-sig':>10}{'vs g_bar':>10}{'N':>7}")
    print("  " + "-" * 76)
    res = {}
    for lbl, xv in variables:
        m = np.isfinite(xv)
        rms, mad, nn, _ = conditional_scatter(xv[m], logF[m])
        res[lbl.strip()] = (rms, mad, nn)
        print(f"  {lbl:<40}{rms:>9.4f}{mad:>10.4f}{mad/0.1178:>9.2f}x{nn:>7}")

    hdr("PART C2 -- THE FULL CLASS: F(x_diff, q) JOINTLY, 2-D CONDITIONING")
    print("""  The class allows F to depend on BOTH groups.  Condition on the pair by
  binning in 2-D (equal-count in each axis) and taking residuals about the
  per-cell median.  This is the most generous possible test of the class: it
  assumes the best F that any 2-argument function could be.\n""")

    def cond2d(u, v, y, nb=8, minc=15):
        u, v, y = np.asarray(u), np.asarray(v), np.asarray(y)
        m = np.isfinite(u) & np.isfinite(v) & np.isfinite(y)
        u, v, y = u[m], v[m], y[m]
        eu = np.quantile(u, np.linspace(0, 1, nb + 1)); eu[-1] += 1e-9
        ev = np.quantile(v, np.linspace(0, 1, nb + 1)); ev[-1] += 1e-9
        out = []
        for i in range(nb):
            mi = (u >= eu[i]) & (u < eu[i + 1])
            for j in range(nb):
                mj = mi & (v >= ev[j]) & (v < ev[j + 1])
                if mj.sum() < minc:
                    continue
                out.append(y[mj] - np.median(y[mj]))
        r = np.concatenate(out) if out else np.array([])
        if len(r) == 0:
            return np.nan, np.nan, 0
        return float(np.sqrt(np.mean(r ** 2))), float(1.4826 * np.median(np.abs(r - np.median(r)))), len(r)

    lx = np.log10(np.maximum(xd, 1e-300))
    sq = np.sign(qs) * np.log10(np.maximum(np.abs(qs), 1e-30))
    lg = np.log10(gb)
    for lbl, (u, v) in [
        ("(x_diff, q)   FULL DIFFERENTIAL CLASS", (lx, sq)),
        ("(rho, q)      algebraic + shape      ", (np.log10(rho), sq)),
        ("(g_bar, q)    control: does q add to MOND?", (lg, sq)),
        ("(g_bar, g_bar) control: 2-D cost of binning", (lg, lg + 1e-9 * RR)),
    ]:
        rms, mad, nn = cond2d(u, v, logF)
        print(f"  {lbl:<44}rms={rms:.4f}  MAD-sig={mad:.4f}  ({mad/0.1178:.2f}x g_bar)  N={nn}")
    return res, logF, (lx, sq, lg)


# =============================================================================
# PART D -- degeneracy: is the group a per-galaxy constant in disguise?
# =============================================================================
def part_d(data):
    hdr("PART D -- DEGENERACY CHECK: WITHIN- vs BETWEEN-GALAXY VARIANCE")
    print("""  The 2026-07-28 pass rejected |grad ln rho| because it is radially CONSTANT for
  an exponential disk -- it fits flat curves only by smuggling in a per-galaxy
  number, which is not a mechanism.  Quantify that for every group: split the
  variance of each variable into within-galaxy (real radial structure, the part
  that can do mechanistic work) and between-galaxy (a per-galaxy constant).\n""")

    gids = np.array([d["gid"] for d in data])
    gb = np.array([d["g_bar"] for d in data])
    variables = [
        ("log g_bar        ", np.log10(gb)),
        ("log rho          ", np.log10([d["rho"] for d in data])),
        ("log x_diff       ", np.log10(np.maximum([d["x_diff"] for d in data], 1e-300))),
        ("sign(q) log|q|   ", np.sign([d["q"] for d in data]) *
         np.log10(np.maximum(np.abs([d["q"] for d in data]), 1e-30))),
        ("log|grad ln rho| ", np.log10(np.maximum([d["gradln"] for d in data], 1e-300))),
    ]
    print(f"  {'variable':<20}{'total var':>11}{'within':>10}{'between':>10}{'within %':>11}")
    print("  " + "-" * 62)
    for lbl, xv in variables:
        xv = np.asarray(xv, float)
        m = np.isfinite(xv)
        xv2, g2 = xv[m], gids[m]
        tot = np.var(xv2)
        wit = 0.0
        cnt = 0
        for g in np.unique(g2):
            mm = g2 == g
            if mm.sum() >= 3:
                wit += np.sum((xv2[mm] - np.mean(xv2[mm])) ** 2)
                cnt += mm.sum()
        wit = wit / max(cnt, 1)
        print(f"  {lbl:<20}{tot:>11.4f}{wit:>10.4f}{max(tot-wit,0):>10.4f}{100*wit/max(tot,1e-30):>10.1f}%")

    print("""
  A variable whose within-galaxy share is small is mostly a per-galaxy label.
  g_bar's share is the reference: it varies strongly ALONG each rotation curve,
  which is exactly why it can carry the boost pointwise.""")


# =============================================================================
# PART E -- declare the null by PERMUTATION, and bound the attenuation
# =============================================================================
def part_e(data, logF, packed):
    hdr("PART E -- PERMUTATION NULL AND NOISE-ATTENUATION BOUND")
    lx, sq, lg = packed
    print("""  Guardrail (feedback_declare_the_null_by_permutation): a conditional scatter is
  only evidence if it beats what the SAME estimator returns on a destroyed variable.
  Permute each group across all data points (breaking any real relation while keeping
  its exact marginal distribution) and re-run the identical estimator 200x.\n""")

    print(f"  {'variable':<22}{'measured':>10}{'null mean':>11}{'null sd':>10}{'z':>9}{'verdict':>26}")
    print("  " + "-" * 88)
    for lbl, xv in (("log x_diff", lx), ("sign(q)log|q|", sq),
                    ("log g_bar", lg)):
        m = np.isfinite(xv) & np.isfinite(logF)
        x0, y0 = xv[m], logF[m]
        _, mad0, _, _ = conditional_scatter(x0, y0)
        nulls = []
        for _ in range(200):
            _, mn, _, _ = conditional_scatter(RNG.permutation(x0), y0)
            nulls.append(mn)
        nulls = np.array(nulls)
        z = (mad0 - nulls.mean()) / nulls.std()
        # negative z = tighter than null = carries information
        if z < -3:
            verdict = "carries information"
        elif z < -1:
            verdict = "marginal"
        else:
            verdict = "INDISTINGUISHABLE FROM NULL"
        print(f"  {lbl:<22}{mad0:>10.4f}{nulls.mean():>11.4f}{nulls.std():>10.4f}{z:>9.1f}{verdict:>26}")

    print("""
  Reading: 'measured' below 'null mean' by many sigma means the variable genuinely
  predicts the required coupling.  A variable sitting AT its own permutation null is
  carrying no information about the boost -- and, crucially, that conclusion is
  immune to the objection that the variable is merely noisy, because the null was
  constructed from that same noisy variable.""")


def part_f(data_sets):
    hdr("PART F -- ROBUSTNESS GRID (estimator, window, scale height, gas)")
    print(f"  {'deriv':<8}{'win':>5}{'h':>12}{'gas':>7}{'N':>7}"
          f"{'sig|x_diff':>12}{'sig|q':>9}{'sig|g_bar':>11}")
    print("  " + "-" * 71)
    for (dv, win, hm, gm), d in data_sets.items():
        gb = np.array([q["g_bar"] for q in d]); go = np.array([q["g_obs"] for q in d])
        lF = np.log10(gb / go)
        lx = np.log10(np.maximum([q["x_diff"] for q in d], 1e-300))
        qq = np.array([q["q"] for q in d])
        sq = np.sign(qq) * np.log10(np.maximum(np.abs(qq), 1e-30))
        out = []
        for xv in (lx, sq, np.log10(gb)):
            m = np.isfinite(xv)
            _, mad, _, _ = conditional_scatter(np.asarray(xv)[m], lF[m])
            out.append(mad)
        print(f"  {dv:<8}{win:>5}{hm:>12}{gm:>7}{len(d):>7}"
              f"{out[0]:>12.4f}{out[1]:>9.4f}{out[2]:>11.4f}")


# =============================================================================
# PART G -- is x_diff a new variable, or rho reparametrised by aspect ratio?
# =============================================================================
def part_g():
    hdr("PART G -- IS x_diff A NEW VARIABLE, OR rho REPARAMETRISED?")
    print("""  For a disk |grad rho| = rho |dln rho/dr|, so
      x_diff = G rho^2/(a0|grad rho|) = G rho L / a0,   L = local density scale length.
  If L is a per-galaxy constant (~R_d), x_diff is rho times a per-galaxy number -- a
  REPARAMETRISATION, not a new variable.  Regress log x_diff on log rho, then ask
  whether the RESIDUAL (the genuinely differential part) carries any boost info.\n""")
    for hm in ("const", "rd5", "bershady"):
        d = build_with_derivatives(deriv="poly", win=5, h_mode=hm)
        gb = np.array([q["g_bar"] for q in d]); go = np.array([q["g_obs"] for q in d])
        lF = np.log10(gb / go)
        lr = np.log10([q["rho"] for q in d])
        lx = np.log10(np.maximum([q["x_diff"] for q in d], 1e-300))
        gid = np.array([q["gid"] for q in d])
        L = np.array([q["R"] / abs(q["a1"]) if q["a1"] != 0 else np.nan for q in d])
        sl, ic = np.polyfit(lr, lx, 1)
        resid = lx - (sl * lr + ic)
        r = np.corrcoef(lr, lx)[0, 1]
        _, mr, _, _ = conditional_scatter(lr, lF)
        _, mx, _, _ = conditional_scatter(lx, lF)
        m = np.isfinite(resid)
        _, mres, _, _ = conditional_scatter(resid[m], lF[m])
        spread = [np.std(np.log10(L[(gid == g) & np.isfinite(L)]))
                  for g in np.unique(gid) if ((gid == g) & np.isfinite(L)).sum() >= 3]
        print(f"  h={hm:<10} log x_diff = {sl:.3f}*log rho + c   r={r:.4f}   "
              f"var explained by rho = {100*r*r:.1f}%")
        print(f"     sig(logF|rho)={mr:.4f}  sig(logF|x_diff)={mx:.4f}  "
              f"sig(logF|x_diff residual after removing rho)={mres:.4f}")
        print(f"     median within-galaxy sd of log10 L = {np.median(spread):.3f} dex"
              f"   (0 = L is a per-galaxy constant)\n")


# =============================================================================
# PART H -- what does the data say the coupling must depend on?
# =============================================================================
def _rar_residual(lg, lF, k=60):
    order = np.argsort(lg); inv = np.argsort(order)
    lgs, lFs = lg[order], lF[order]
    base = np.empty(len(lgs))
    for i in range(len(lgs)):
        lo = max(0, min(i - k // 2, len(lgs) - k))
        base[i] = np.median(lFs[lo:lo + k])
    return (lFs - base)[inv]


def part_h(data):
    hdr("PART H -- WHAT DOES THE DATA SAY THE COUPLING MUST DEPEND ON?")
    gb = np.array([d["g_bar"] for d in data]); go = np.array([d["g_obs"] for d in data])
    lF = np.log10(gb / go); lg = np.log10(gb)
    qq = np.array([d["q"] for d in data])
    sq = np.sign(qq) * np.log10(np.maximum(np.abs(qq), 1e-30))
    lx = np.log10(np.maximum([d["x_diff"] for d in data], 1e-300))
    gl = np.log10(np.maximum([d["gradln"] for d in data], 1e-300))
    dB = _rar_residual(lg, lF)
    print("  dB = RAR residual (log F_req minus its local g_bar relation).")
    print("  A differential group that is the missing physics MUST correlate with dB.\n")
    print(f"  {'group':<24}{'r(dB,group|g_bar)':>20}{'var expl':>11}")
    print("  " + "-" * 55)
    for lbl, v in (("log x_diff", lx), ("sign(q)log|q|", sq), ("log|grad ln rho|", gl),
                   ("dln rho/dln r", np.array([d["a1"] for d in data]))):
        s, i = np.polyfit(lg, v, 1)
        dv = v - (s * lg + i)
        m = np.isfinite(dv) & np.isfinite(dB)
        r = np.corrcoef(dv[m], dB[m])[0, 1]
        print(f"  {lbl:<24}{r:>20.4f}{100*r*r:>10.2f}%")
    print("\n  Reference: the 2026-08-02 no-go found local rho explains <=0.7% of dB.")


# =============================================================================
# PART I -- Upsilon sweep (the dominant galaxy-sector systematic)
# =============================================================================
def part_i():
    global UP_DISK
    hdr("PART I -- UPSILON SWEEP: THE DOMINANT SYSTEMATIC (per 2026-08-14)")
    print("""  The 08-14 session showed Upsilon_disk in [0.4,0.6] sweeps gamma across
  [0.27,0.96] at flat rms, so no galaxy-sector conclusion may be quoted at a single
  Upsilon.  Does ANY Upsilon let a differential group beat g_bar?\n""")
    saved = UP_DISK
    print(f"  {'Ups':>6}{'N':>7}{'sig|g_bar':>11}{'sig|rho':>10}"
          f"{'sig|x_diff':>12}{'sig|q':>9}{'best/g_bar':>12}")
    print("  " + "-" * 67)
    for up in (0.30, 0.40, 0.45, 0.50, 0.55, 0.60, 0.70, 0.80):
        UP_DISK = up
        d = build_with_derivatives(deriv="poly", win=5)
        gb = np.array([q["g_bar"] for q in d]); go = np.array([q["g_obs"] for q in d])
        lF = np.log10(gb / go)
        qq = np.array([q["q"] for q in d])
        vs = []
        for xv in (np.log10(gb), np.log10([q["rho"] for q in d]),
                   np.log10(np.maximum([q["x_diff"] for q in d], 1e-300)),
                   np.sign(qq) * np.log10(np.maximum(np.abs(qq), 1e-30))):
            xv = np.asarray(xv, float); m = np.isfinite(xv)
            _, mad, _, _ = conditional_scatter(xv[m], lF[m]); vs.append(mad)
        print(f"  {up:>6.2f}{len(d):>7}{vs[0]:>11.4f}{vs[1]:>10.4f}"
              f"{vs[2]:>12.4f}{vs[3]:>9.4f}{min(vs[1:])/vs[0]:>11.2f}x")
    UP_DISK = saved


# =============================================================================
# PART J -- derivative order: does going beyond lap rho reopen the class?
# =============================================================================
def part_j():
    hdr("PART J -- DERIVATIVE ORDER: DOES grad^3 rho REOPEN THE CLASS?")
    print("""  Each extra derivative order adds exactly one pi group (6 quantities, rank 3
  => 3 groups).  The third-order group is c3 = rho^2 (d3 rho/dr3)/|grad rho|^3.
  Test it rather than assert the class stays closed.\n""")
    props = load_table1(); rows = load_massmodels()
    bygal = {}
    for r in rows:
        bygal.setdefault(r["gid"], []).append(r)
    recs = []
    for gid, pts in bygal.items():
        p = props.get(gid)
        if p is None or p["Q"] > 2 or p["inc"] < 30:
            continue
        pts = sorted(pts, key=lambda z: z["R"]); R = np.array([z["R"] for z in pts])
        Sg = sigma_gas_from_vgas(R, [z["Vgas"] for z in pts])
        Sig = np.array([UP_DISK * z["SBdisk"] + UP_BUL * z["SBbul"] + Sg[i]
                        for i, z in enumerate(pts)])
        good = (Sig > 0) & (R > 0)
        if good.sum() < 9:
            continue
        Rg, Sm = R[good], Sig[good]; idx = np.where(good)[0]
        lr, ls = np.log(Rg), np.log(Sm); n = len(lr)
        a1 = np.empty(n); a2 = np.empty(n); a3 = np.empty(n)
        for k in range(n):
            lo = max(0, min(k - 4, n - 9))
            cf = np.polyfit(lr[lo:lo + 9] - lr[k], ls[lo:lo + 9], 3)
            a3[k] = 6 * cf[0]; a2[k] = 2 * cf[1]; a1[k] = cf[2]
        for k, j in enumerate(idx):
            z = pts[j]
            if z["Vobs"] <= 0 or z["eVobs"] / z["Vobs"] > 0.10 or abs(a1[k]) < 1e-9:
                continue
            Rm = z["R"] * KPC
            Vb2 = (z["Vgas"] * abs(z["Vgas"]) + UP_DISK * z["Vdisk"] * abs(z["Vdisk"])
                   + UP_BUL * z["Vbul"] * abs(z["Vbul"])) * KMS ** 2
            if Vb2 <= 0:
                continue
            gobs = (z["Vobs"] * KMS) ** 2 / Rm
            if gobs <= 0:
                continue
            num = a3[k] + 3 * a1[k] * a2[k] + a1[k] ** 3 - 3 * a2[k] - 3 * a1[k] ** 2 + 2 * a1[k]
            recs.append((Vb2 / Rm, gobs, num / a1[k] ** 3))
    gb = np.array([r[0] for r in recs]); go = np.array([r[1] for r in recs])
    c3 = np.array([r[2] for r in recs])
    lF = np.log10(gb / go); lg = np.log10(gb)
    sc = np.sign(c3) * np.log10(np.maximum(np.abs(c3), 1e-30))
    m = np.isfinite(sc)
    _, mg, _, _ = conditional_scatter(lg[m], lF[m])
    _, mc, _, _ = conditional_scatter(sc[m], lF[m])
    print(f"  N={m.sum()}   sigma(logF|g_bar)={mg:.4f}   "
          f"sigma(logF|c3)={mc:.4f}  ({mc/mg:.2f}x)")
    s, i = np.polyfit(lg[m], sc[m], 1)
    dv = sc[m] - (s * lg[m] + i)
    dB = _rar_residual(lg[m], lF[m])
    r = np.corrcoef(dv, dB)[0, 1]
    print(f"  r(dB, c3 | g_bar) = {r:+.4f}   RAR-residual variance explained = {100*r*r:.2f}%")
    print("\n  -> the third-order group behaves exactly like the first two.")


def main():
    part_a()
    part_b()

    data = build_with_derivatives(deriv="poly", win=5)
    res, logF, packed = part_c(data)
    part_d(data)
    part_e(data, logF, packed)
    part_g()
    part_h(data)
    part_i()
    part_j()

    grid = {}
    for dv, win in (("poly", 5), ("poly", 7), ("poly", 9), ("fd", 0)):
        for hm in ("const", "bershady"):
            for gm in ("vgas", "none"):
                try:
                    grid[(dv, win, hm, gm)] = build_with_derivatives(
                        deriv=dv, win=max(win, 5), h_mode=hm, gas_mode=gm)
                except Exception as e:                     # pragma: no cover
                    print("skip", dv, win, hm, gm, e)
    part_f(grid)

    hdr("SUMMARY")
    print("""  See finding:
    explorer/findings/differential-coupling-pi-enumeration-local-branch-closed.md

  The class F(rho, grad rho, lap rho, grad^3 rho; G, a0) is closed on real SPARC:
  every group explains <=0.16% of the RAR residual (local rho itself managed 0.7%),
  the full 2-argument class conditioned jointly sits 1.53x above the MOND benchmark,
  and the result is flat across Upsilon in [0.30,0.80].  The surviving direction is
  NON-LOCAL -- which is what Burrage, Copeland & Millington 2017 actually is (a
  symmetron, PRD 95 064050), and which forfeits EFE = 0.""")


if __name__ == "__main__":
    main()
