#!/usr/bin/env python3
"""
THE ARGUMENT OF C: the site runs two mutually exclusive galaxy-sector models
=============================================================================
Explorer session 2026-08-24.

WHAT PROMPTED THIS.  The 2026-08-24 visitor log (Pass 4, "Note for the maintainer,
out of persona") asked for one grep: what is the literal argument of C in the
objective function that produced the site's galaxy-sector numbers?  It named a
third branch nobody in this program had enumerated -- an *implicit* form with C
keyed to g_obs -- and stated the consequence correctly:

    "If the fit is implicit, refutation #3 is NOT wrong-model -- but then C
     responds to the total field, and EFE = 0 has to be retracted instead."

THE GREP, SETTLED.  Two independent code paths in this repository, and four in
the research archive, all solve the SAME implicit equation:

  explorer/findings/scripts/sparc_gamma_interval_frozen_likelihood.py:108
      "Invert g_bar = g_obs * tanh(gamma * ln(1 + g_obs/a0)) (frozen scheme)."
  explorer/findings/scripts/regulator_exponent_n_real_sparc.py:127
      "Solve  y * C_n(y) = b   for y = g_obs/a0,  b = g_bar/a0."
  Synchronism/simulations/sparc_tanhlog_profile.py:84       (archive, frozen)
  Synchronism/simulations/sparc_cassini_q2.py:43            "mu convention"

The archive already recorded the acceleration keying on 2026-08-04
(explorations/2026-08-04-publisher-the-frozen-sparc-artifact-is-keyed-on-
acceleration.md) and drew ONE conclusion from it: gamma = 0.489 is a property of
MOND's mu, not a measurement of C(rho).  It did not draw the second, which is
what this script executes.

THE TWO PILLARS.
  Pillar A -- the NOVELTY.  C = C(rho_local).  /mond-unification derives EFE = 0
    from exactly this premise ("a uniform external field does not change rho"),
    and from the linearity in Phi of  div[C(rho) grad Phi] = 4 pi G rho.
    /galaxy-plotter renders it.  The boost ceiling B <= 1/Omega_m descends from it.
  Pillar B -- the NUMBERS.  C = C(g_obs/a0).  Everything the site quotes:
    dBIC = +184 and +7, gamma = 0.489, a0 = 5.33e-11, TEST-25's +17.95 sigma.

They are different functions of different variables, and the field equation that
implements Pillar B, div[C(|grad Phi|/a0) grad Phi] = 4 pi G rho, is AQUAL --
NONLINEAR in Phi.  The linearity that carries EFE = 0 is gone.

RUN:  python3 two_pillars_argument_of_C.py
DATA: Lelli, McGaugh & Schombert 2016 SPARC (MassModels_Lelli2016c.mrt +
      SPARC_Lelli2016c.mrt).  Same Q<3 / inc>30 / e_V/V<0.10 cuts as every
      prior script in this program.
"""
import os
import sys
import numpy as np

sys.path.insert(0, os.path.join(os.path.dirname(os.path.abspath(__file__)),
                                "..", "..", "scripts"))
from rar_scatter_nogo_real_sparc import load_table1, load_massmodels, KPC, KMS  # noqa: E402

A0_MOND = 1.20e-10        # m/s^2, Lelli+2017 g_dagger; +-0.02 (ran) +-0.24 (sys)
A0_SYS = 0.24e-10         # McGaugh+2016 systematic, printed beside the random one
A0_FROZEN = 5.33265e-11   # the frozen SPARC profile's own preferred a0
GAMMA_FIT = 0.489         # frozen-instrument SPARC preference
OMEGA_M = 0.315


def hdr(s):
    print("\n" + "=" * 78)
    print(s)
    print("=" * 78)


# --------------------------------------------------------------------- the model
def mu_gamma(x, gam):
    """C in the mu convention: C(x) = tanh(gam * ln(1+x)).  x = g/a0."""
    return np.tanh(gam * np.log1p(x))


def mu_simple(y):
    """MOND's simple mu."""
    return y / (1.0 + y)


def dlnmu_dlnx(x, gam):
    """L(x) = dln mu / dln x, computed in closed form (no finite differencing)."""
    u = gam * np.log1p(x)
    # d mu/dx = gam * sech^2(u) / (1+x)
    dmu = gam / (np.cosh(u) ** 2) / (1.0 + x)
    return x * dmu / mu_gamma(x, gam)


def dlnmu_simple(y):
    # mu = y/(1+y); dmu/dy = 1/(1+y)^2; L = y * dmu / mu = 1/(1+y)
    return 1.0 / (1.0 + y)


def solve_gobs_implicit(g_bar, gam, a0):
    """Pillar B: solve g_obs * C(g_obs/a0) = g_bar.  Bisection in log10."""
    b = np.asarray(g_bar, float) / a0
    lo = np.full_like(b, -14.0)
    hi = np.full_like(b, 14.0)
    for _ in range(60):
        mid = 0.5 * (lo + hi)
        y = np.power(10.0, mid)
        f = y * mu_gamma(y, gam) - b
        small = f < 0
        lo = np.where(small, mid, lo)
        hi = np.where(small, hi, mid)
    return np.power(10.0, 0.5 * (lo + hi)) * a0


def build_rar(up_disk=0.5, up_bul=0.7, err_cut=0.10, inc_cut=30.0, qmax=2):
    props = load_table1()
    rows = load_massmodels()
    bygal = {}
    for r in rows:
        bygal.setdefault(r["gid"], []).append(r)
    gid, gb, go, rad = [], [], [], []
    for g, pts in bygal.items():
        p = props.get(g)
        if p is None or p["Q"] > qmax or p["inc"] < inc_cut:
            continue
        for d in sorted(pts, key=lambda z: z["R"]):
            if d["R"] <= 0 or d["Vobs"] <= 0:
                continue
            if d["eVobs"] / d["Vobs"] > err_cut:
                continue
            Rm = d["R"] * KPC
            Vbar2 = (d["Vgas"] * abs(d["Vgas"])
                     + up_disk * d["Vdisk"] * abs(d["Vdisk"])
                     + up_bul * d["Vbul"] * abs(d["Vbul"])) * KMS ** 2
            if Vbar2 <= 0:
                continue
            gid.append(g)
            gb.append(Vbar2 / Rm)
            go.append((d["Vobs"] * KMS) ** 2 / Rm)
            rad.append(d["R"])
    return (np.array(gid), np.array(gb), np.array(go), np.array(rad))


# ============================================================ PART 1: asymptotics
def part1_asymptotics():
    hdr("PART 1 -- the four branches, and what each does in the deep limit")
    print("""
Branch      argument of C     coupling                          deep limit (g_bar << a0)
---------------------------------------------------------------------------------------
A-quad      rho/rho_crit      v^2 = v_b^2 + [V_flat*C]^2        C->0 outward => halo term dies
A-div       rho/rho_crit      g_obs = g_bar / C(rho)            C->0 outward => g_obs DIVERGES
B-expl      g_bar/a0          g_obs = g_bar / C(g_bar/a0)       g_obs -> a0/gam  (CONSTANT)
B-impl      g_obs/a0          g_obs * C(g_obs/a0) = g_bar       g_obs -> sqrt(g_bar*a0/gam)
""")
    gam = GAMMA_FIT
    gb = np.logspace(-13, -8, 60)

    # B-explicit
    go_expl = gb / mu_gamma(gb / A0_MOND, gam)
    # B-implicit
    go_impl = solve_gobs_implicit(gb, gam, A0_MOND)

    def loglogslope(x, y, lo, hi):
        m = (x >= lo) & (x <= hi)
        return np.polyfit(np.log10(x[m]), np.log10(y[m]), 1)[0]

    s_expl = loglogslope(gb, go_expl, 1e-13, 1e-12)
    s_impl = loglogslope(gb, go_impl, 1e-13, 1e-12)
    print(f"  measured deep-limit slope  dlog g_obs / dlog g_bar   (g_bar in 1e-13..1e-12)")
    print(f"    B-explicit (C at g_bar):  {s_expl:+.4f}   -> analytic 0    => g_obs const")
    print(f"    B-implicit (C at g_obs):  {s_impl:+.4f}   -> analytic 1/2  => MOND sqrt law")
    print()
    print("  Rotation-curve consequence (v^2 = g*r, flat curve needs g ~ 1/r ~ g_bar^(1/2)):")
    print(f"    B-explicit  g_obs = const  =>  v ~ sqrt(r).  RISING, never flat.")
    print(f"    B-implicit  g_obs ~ g_bar^(1/2)  =>  v -> const.  FLAT.  <-- the only one that works")
    print()
    print("  => Only the implicit branch reproduces flat rotation curves at all.")
    print("     The site's prose describes the explicit one; the code runs the implicit one.")
    return s_expl, s_impl


# ============================================== PART 2: the EFE each pillar predicts
def part2_efe():
    hdr("PART 2 -- the External Field Effect each pillar predicts")
    print("""
DEFINITION (standard, algebraic mu-form).  For a system with internal field g_i
embedded in an external field g_e, linearise the relation g_N = g * mu(g/a0) about
g = g_e for |g_i| << |g_e|:

    g_N,i,par = d/dg [ g mu(g/a0) ]|_{g_e} * g_i,par
              = mu(x) [1 + L(x)] * g_i,par ,   x = g_e/a0,  L = dln mu / dln x

So the embedded system is Newtonian with an effective boost

    B_par(x) = 1 / ( mu(x) [1 + L(x)] )        (radial / along the field)

PILLAR A.  mu = C(rho).  Then d/dg [ g C(rho) ] = C(rho): NO x anywhere.
    B is independent of g_e.  EFE = 0 exactly.  This is the site's derivation, and
    it is correct GIVEN the premise.  It is also why the completion
    div[C(rho) grad Phi] = 4 pi G rho is LINEAR in Phi.

PILLAR B.  mu = C(g/a0).  B_par depends on x = g_e/a0 explicitly.  EFE != 0.
    The completion div[C(|grad Phi|/a0) grad Phi] = 4 pi G rho is AQUAL --
    the original nonlinear-in-Phi MOND field equation, whose EFE is Milgrom's.
""")
    hdr("PART 2a -- at gamma = 1/2 the two EFEs are ALGEBRAICALLY IDENTICAL")
    print("""
  tanh(0.5 * ln(1+x)) = [(1+x)^.5 - (1+x)^-.5] / [(1+x)^.5 + (1+x)^-.5]
                      = [(1+x) - 1] / [(1+x) + 1]
                      = x / (x+2)
                      = mu_simple(x/2)

  So C_{gamma=1/2}(g/a0) == mu_simple(g / 2a0), an EXACT identity, and every
  EFE quantity built from it inherits the identity with a0 -> 2a0.
""")
    x = np.logspace(-3, 3, 13)
    fw = mu_gamma(x, 0.5) * (1.0 + dlnmu_dlnx(x, 0.5))
    ms = mu_simple(x / 2) * (1.0 + dlnmu_simple(x / 2))
    print("     x=g_ext/a0     framework mu(1+L)   MOND-simple@(x/2)      |diff|")
    for xi, a, b in zip(x, fw, ms):
        print(f"     {xi:10.4g}   {a:16.10f}   {b:17.10f}   {abs(a-b):10.2e}")
    maxdiff = float(np.max(np.abs(fw - ms)))
    print(f"\n     max |difference| over 6 decades: {maxdiff:.3e}  (machine zero)")

    hdr("PART 2b -- the a0 factor-2 anomaly is this identity, not a measurement")
    print(f"""
  This program has carried an unexplained discrepancy since 2026-08-18:
  the frozen SPARC profile prefers a0 = {A0_FROZEN:.4g} m/s^2, a factor
  {A0_MOND/A0_FROZEN:.3f} BELOW MOND's g_dagger = {A0_MOND:.3g}.

  The identity above says the factor is forced: C_{{1/2}}(g/a0) == mu_simple(g/2a0),
  so a framework fit at gamma ~ 1/2 MUST return a0 = g_dagger / 2.

    predicted from the identity : {A0_MOND/2:.4g}
    actually fitted             : {A0_FROZEN:.4g}
    ratio                       : {A0_FROZEN/(A0_MOND/2):.4f}""")
    doubled = 2 * A0_FROZEN
    nsig_sys = abs(doubled - A0_MOND) / A0_SYS
    print(f"""
  Equivalently: 2*a0_frozen = {doubled:.4g}, versus McGaugh's
  g_dagger = {A0_MOND:.3g} +- {A0_SYS:.2g} (systematic) -> {nsig_sys:.2f} sigma.

  => The "factor ~2 in a0" was never an independent result.  It is the gamma=1/2
     reparametrization, read back out of the fit.
""")

    hdr("PART 2c -- residual EFE difference at the FITTED gamma = 0.489")
    print("""
  At gamma != 1/2 the identity breaks and a residual appears.  Expand:
  gamma = (1 + eps)/2, so eps = 2*gamma - 1 is the ONLY deformation parameter.
  Fit value:""")
    eps = 2 * GAMMA_FIT - 1
    print(f"    eps = 2*{GAMMA_FIT} - 1 = {eps:+.4f}")
    print("""
  Residual in the EFE boost, framework(gamma) vs MOND-simple, with a0 marginalised
  (i.e. MOND's a0 rescaled to the framework's best-matching value at each gamma):
""")
    xs = np.logspace(-2, 2, 400)

    def efe_boost(x, gam):
        return 1.0 / (mu_gamma(x, gam) * (1.0 + dlnmu_dlnx(x, gam)))

    def efe_boost_simple(y):
        return 1.0 / (mu_simple(y) * (1.0 + dlnmu_simple(y)))

    print("      gamma    eps      max |dlog10 B_EFE| over g_ext/a0 in [1e-2,1e2]")
    for gam in (0.40, 0.45, 0.489, 0.50, 0.55, 0.60):
        # marginalise a0: find the scale s minimising the max-abs log difference
        best = None
        for s in np.logspace(-0.6, 0.6, 601):
            d = np.log10(efe_boost(xs, gam)) - np.log10(efe_boost_simple(xs / s))
            m = float(np.max(np.abs(d - np.median(d))))
            if best is None or m < best:
                best = m
        star = "   <-- SPARC fit" if abs(gam - GAMMA_FIT) < 1e-9 else ""
        print(f"      {gam:5.3f}  {2*gam-1:+.3f}    {best:.4f} dex{star}")
    print("""
  The residual is O(eps) and vanishes identically at eps = 0.
""")
    return eps


# ==================================================== PART 3: the ceiling by pillar
def part3_ceiling(gid, gb, go):
    hdr("PART 3 -- the boost ceiling exists in Pillar A and NOT in Pillar B")
    print("""
  The ceiling B <= 1/Omega_m = %.2f is derived from f_DM = 1 - C with a premise
  C >= Omega_m.  Two of the six counted refutations (TEST-09 BTFR slope, TEST-10
  dwarf f_DM) are computed from it.  Ask what C actually is in each pillar.
""" % (1 / OMEGA_M))
    C_B = mu_gamma(go / A0_FROZEN, GAMMA_FIT)
    B_B = 1.0 / C_B
    B_req = go / gb
    print(f"  SPARC points passing the standard cuts: N = {len(go)}  "
          f"({len(set(gid))} galaxies)")
    print(f"\n  PILLAR B -- C = C(g_obs/a0) at the fitted gamma:")
    print(f"    min C over all points      : {C_B.min():.4f}")
    print(f"    max implied boost 1/C      : {B_B.max():.1f}")
    print(f"    fraction of points with C < Omega_m = {OMEGA_M}: "
          f"{100*np.mean(C_B < OMEGA_M):.1f}%")
    print(f"    => C(x) -> 0 as x -> 0.  NOTHING bounds it below.  NO CEILING EXISTS.")
    print(f"\n    sanity: 1/C reproduces the required boost g_obs/g_bar?")
    r = np.log10(B_B) - np.log10(B_req)
    print(f"      median log10 residual {np.median(r):+.4f} dex, "
          f"rms {np.std(r):.4f} dex  (should be ~0: this IS the fitted relation)")
    print(f"\n  PILLAR A -- C = C(rho/rho_crit), the plotter's law:")
    print(f"    /galaxy-plotter reports max C on the DDO 154 disk = 0.001,")
    print(f"    i.e. 1/C = 1000 -- {1000*OMEGA_M:.0f}x ABOVE the ceiling it is")
    print(f"    supposed to obey.  Pass 3 of the 2026-08-24 visitor log filed this")
    print(f"    as an unexplained 300x contradiction.  It is not a contradiction:")
    print(f"    the ceiling premise C >= Omega_m is FALSE in both pillars, and the")
    print(f"    site never states which C it is a premise about.")
    return C_B, B_B


# ============================================ PART 4: what the six refutations test
def part4_ledger():
    hdr("PART 4 -- the six counted refutations do not test one model")
    rows = [
        ("#1 BTFR slope (TEST-09)",       "A", "boost ceiling B <= 1/Omega_m"),
        ("#2 dwarf f_DM (TEST-10)",       "A", "boost ceiling / f_DM = 1 - C"),
        ("#3 RAR shape dBIC = +184",      "B", "frozen instrument, C at g_obs/a0"),
        ("#4 environment scatter (TEST-05)", "A", "ambient rho adds to local rho"),
        ("#5 Cassini +17.95 sigma (TEST-25)", "B", "mu in acceleration, q = 2gamma"),
        ("#6 Bell / CHSH",                "-", "QM sector; neither galaxy pillar"),
    ]
    print(f"    {'refutation':36s} {'pillar':7s} what it is computed from")
    print("    " + "-" * 74)
    for name, p, src in rows:
        print(f"    {name:36s} {p:7s} {src}")
    na = sum(1 for _, p, _ in rows if p == "A")
    nb = sum(1 for _, p, _ in rows if p == "B")
    print(f"""
    Pillar A (C keyed to rho -- the NOVELTY)  : {na}
    Pillar B (C keyed to g   -- the NUMBERS)  : {nb}
    Neither (QM sector)                       : {6 - na - nb}

    The two pillars are mutually exclusive: Pillar A's field equation is linear
    in Phi, Pillar B's is AQUAL.  So no single model on this site has been
    refuted {na + nb} times.  The largest coherent sub-ledger is {max(na, nb)}.
""")
    return na, nb


# =========================================================== PART 5: Crater II flip
def part5_crater2():
    hdr("PART 5 -- what Pillar B does to the 2026-08-23 Crater II result")
    print("""
  On 2026-08-23 this program executed the boost ceiling on six pressure-supported
  dwarfs and found Crater II the only discriminating system:

     required boost B_req = (sigma_obs/sigma_N)^2 = 60.2
     framework ceiling    = 3.17 (or 13.7 on the f_DM,max reading)
     => the ceiling caps sigma at 1.29 km/s, 4.7 sigma short of Caldwell+2017
     MOND+EFE a priori (McGaugh 2016, ApJL 832 L8): 2.1 (+0.9/-0.6) vs 2.7 +- 0.3
     => 0.6 sigma, consistent.

  That verdict is a PILLAR A verdict twice over:
    (i)  it uses the ceiling, which exists only in Pillar A -- and Part 3 shows
         the ceiling's premise C >= Omega_m is false there too; and
    (ii) it contrasts the framework against MOND+EFE on the grounds that the
         framework has EFE = 0, which is a Pillar A property.

  Under Pillar B -- the branch that supplies every number the site quotes --
  the framework at gamma = 1/2 IS MOND-simple with a0 -> 2a0, EFE included.
  So Pillar B's Crater II prediction is McGaugh's own: 0.6 sigma, consistent.

  The framework's sharpest dwarf-galaxy failure and its most favourable dwarf-
  galaxy agreement are the SAME framework evaluated in the two pillars.
""")


def main():
    hdr("THE ARGUMENT OF C -- executed 2026-08-24")
    part1_asymptotics()
    part2_efe()
    gid, gb, go, rad = build_rar()
    part3_ceiling(gid, gb, go)
    part4_ledger()
    part5_crater2()

    hdr("SUMMARY")
    print("""
  1. The grep the 2026-08-24 visitor log asked for is settled: C's argument in
     every fit artifact is g_obs/a0.  The implicit branch.  (Also recorded in the
     archive 2026-08-04, for a different purpose.)

  2. Consequence the archive did not draw: the implicit branch makes C a function
     of the TOTAL field, so its field completion is AQUAL, nonlinear in Phi, and
     EFE = 0 -- which /mond-unification calls "a sharper structural claim than
     MOND" -- is FALSE in the branch that produced the site's numbers.

  3. At gamma = 1/2, C(g/a0) == mu_simple(g/2a0) identically, EFE and all.  The
     framework's unexplained a0 = g_dagger/2 is this identity, not a measurement.

  4. eps = 2*gamma - 1 is the framework's only deformation from MOND in the galaxy
     sector -- the SAME eps that the 2026-08-11 dark-energy work found controls the
     deviation from LambdaCDM.  SPARC pins eps = -0.022.

  5. Therefore the honest galaxy-sector statement is not "refuted".  It is:
     the framework is a one-parameter deformation of MOND about eps = 0, and
     SPARC measures the deformation to be consistent with zero.  Pillar A -- the
     density keying that is the actual novelty -- has never been fitted to anything.
""")


if __name__ == "__main__":
    main()
