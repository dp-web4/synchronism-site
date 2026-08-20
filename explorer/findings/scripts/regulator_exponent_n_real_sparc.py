#!/usr/bin/env python3
"""
SWEEP THE ARGUMENT, NOT THE SIGMOID:
the exponent inside the logarithm is the framework's only non-nested direction.
Executed on real SPARC.

Topic: self-directed, explorer 2026-08-20.  Converges on:
  * visitor 2026-08-20 Pass 4 (Leading-Edge Researcher), "the thing I'd actually want the
    program to do": generalize the regulator to C_n = tanh(g*ln(1+x^n)); n=1 is the unique
    value giving flat rotation curves; "n is the non-nested direction, and it is measurable."
  * the standing memory note that every compander/sigmoid sweep this program has run
    varied the OUTER sigmoid at FIXED argument (2026-05-02 sigmoid-family test), which is
    the opposite operation to the one that matters.

THE OBJECT
----------
Site equation:            C(x)   = tanh(gam * ln(1 + x))
Generalized regulator:    C_n(x) = tanh(gam * ln(1 + x^n))

Read in the MOND variable (x = g/a0), which is the reading under which the site's own
identity C == mu holds exactly (gam=1/2, n=1  =>  C = x/(x+2) = mu_simple(x/2)), the
force law g_obs * C_n(g_obs/a0) = g_bar has

    deep limit     C ~ gam*x^n     =>  g = (g_bar a0^n / gam)^(1/(n+1))
                                   =>  RAR log-log slope at low g_bar  s_deep = 1/(n+1)
                                   =>  V^2 ~ r^((n-1)/(n+1))
    Newtonian end  1 - C ~ 2 x^(-2 gam n)  =>  the APPROACH to g_obs=g_bar is set by gam*n

So n is a SLOPE parameter at the deep end and enters the high end only through the product
gam*n.  Two ends, two combinations, n identified.  n=1 <=> asymptotically flat rotation
curves <=> Milgrom (2009) deep-MOND spacetime scale invariance.  n != 1 breaks that
symmetry and is a place MOND structurally cannot follow.

WHY n MIGHT SURVIVE THE SYSTEMATIC THAT KILLED gamma
-----------------------------------------------------
2026-08-14 found gam_SPARC = 0.49 +- 0.11 (stat) with a Upsilon-systematic band [0.27, 0.96]
-- the mass-to-light convention swamps the measurement.  But rescaling Upsilon multiplies
g_bar by a (near-)constant, i.e. TRANSLATES the RAR horizontally in log-log.  A translation
cannot change a slope.  PREDICTION, REGISTERED HERE BEFORE RUNNING:
    n-hat is approximately Upsilon-invariant while gam-hat sweeps its full 08-14 band.
If that fails, the WAKE reasoning that motivated this session is wrong and I say so.

PRE-REGISTERED OUTCOMES (all three are real; none is rhetorical)
----------------------------------------------------------------
 (a) n = 1 tightly      -> nesting inside MOND CONFIRMED WITH A NUMBER rather than asserted.
                           First quotable positive bound the galaxy sector has.
 (b) n != 1 universally -> a positive, non-nested result.  MOND cannot accommodate it.
 (c) no universal n     -> per-galaxy n-hat scatters beyond its errors / correlates with
                           galaxy properties.  The extension class is REFUTED while MOND is
                           not.  (Persic-Salucci luminosity-dependent outer slopes make this
                           live.)

AND THE GATE THAT OUTRANKS ALL THREE
-------------------------------------
Desmond, Bartlett & Ferreira 2023 (MNRAS 521, 1817), exhaustive symbolic regression on this
same data: "the deep-MOND limit as g_bar -> 0 is little evident at all", and their algorithm
fails to recover s_deep = 1/2 even from MOND-generated MOCKS.  So before any n is quoted:

    *** INJECTION-RECOVERY.  If mock data generated at a known n_true cannot be
    *** recovered, this test has NO POWER and the correct deliverable is that statement.

DATA: Lelli, McGaugh & Schombert 2016 SPARC (MassModels_Lelli2016c.mrt + SPARC_Lelli2016c.mrt).
Quality cuts match every prior script in this program: Q<3, inc>30 deg, e_Vobs/Vobs<0.10, R>0.
"""
import os
import sys
import json
import numpy as np
from scipy.optimize import minimize

sys.path.insert(0, os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "..", "scripts"))
from rar_scatter_nogo_real_sparc import (          # noqa: E402
    load_table1, load_massmodels, KPC, KMS,
)

RNG = np.random.default_rng(20260820)
A0_REF = 1.20e-10          # m/s^2, Lelli+2017


# ------------------------------------------------------------------ data build
def build_rar(up_disk=0.5, up_bul=0.7, err_cut=0.10, inc_cut=30.0, qmax=2,
              gas_scale=1.0):
    """RAR points with Upsilon as an explicit argument (the 08-14 systematic axis)."""
    props = load_table1()
    rows = load_massmodels()
    bygal = {}
    for r in rows:
        bygal.setdefault(r["gid"], []).append(r)

    gid, gb, go, el, rad = [], [], [], [], []
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
            Vbar2 = (gas_scale * d["Vgas"] * abs(d["Vgas"])
                     + up_disk * d["Vdisk"] * abs(d["Vdisk"])
                     + up_bul * d["Vbul"] * abs(d["Vbul"])) * KMS ** 2
            if Vbar2 <= 0:
                continue
            gid.append(g)
            gb.append(Vbar2 / Rm)
            go.append((d["Vobs"] * KMS) ** 2 / Rm)
            el.append(2.0 * (d["eVobs"] / d["Vobs"]) / np.log(10))
            rad.append(d["R"])
    return (np.array(gid), np.array(gb), np.array(go), np.array(el), np.array(rad))


# ------------------------------------------------------------------- the model
def C_family(z, gam, n, outer="tanh"):
    """C_n(z) = S(gam * ln(1 + z^n)) for a saturating S with S(0)=0, S(inf)=1."""
    u = gam * np.log1p(np.power(z, n))
    if outer == "tanh":
        return np.tanh(u)
    if outer == "algebraic":                 # power-law approach to 1, not exponential
        return u / np.sqrt(1.0 + u * u)
    if outer == "expo":                      # 1 - exp(-u)
        return -np.expm1(-u)
    raise ValueError(outer)


def solve_gobs(g_bar, gam, a0, n, outer="tanh"):
    """Solve  y * C_n(y) = b   for y = g_obs/a0,  b = g_bar/a0.  Vectorized bisection.

    y*C_n(y) is strictly increasing (product of two positive increasing functions),
    so bisection in log10 y is safe and monotone-exact.
    """
    b = np.asarray(g_bar, float) / a0
    lo = np.full_like(b, -14.0)
    hi = np.full_like(b, 14.0)
    for _ in range(46):                      # 28 decades / 2^46 -> far below 1e-9 dex
        mid = 0.5 * (lo + hi)
        y = np.power(10.0, mid)
        f = y * C_family(y, gam, n, outer) - b
        too_small = f < 0
        lo = np.where(too_small, mid, lo)
        hi = np.where(too_small, hi, mid)
    return np.power(10.0, 0.5 * (lo + hi)) * a0


def neglnL(theta, gb, go_log, elog, outer="tanh", fix=None):
    """Gaussian likelihood in log10 g_obs with a profiled intrinsic scatter."""
    p = dict(zip(("lgam", "la0", "n", "lsig"), theta))
    if fix:
        p.update(fix)
    gam = np.exp(p["lgam"])
    a0 = np.exp(p["la0"])
    n = p["n"]
    sig = np.exp(p["lsig"])
    if not (1e-4 < gam < 50 and 1e-13 < a0 < 1e-7 and 0.02 < n < 8 and 1e-4 < sig < 3):
        return 1e12
    mod = np.log10(solve_gobs(gb, gam, a0, n, outer))
    v = elog ** 2 + sig ** 2
    d = go_log - mod
    return 0.5 * np.sum(d * d / v + np.log(v))


def fit(gb, go, elog, outer="tanh", fix=None, start=None, nrestart=3):
    go_log = np.log10(go)
    x0 = start if start is not None else np.array(
        [np.log(0.5), np.log(A0_REF), 1.0, np.log(0.11)])
    best, bx = None, None
    for jitter in range(nrestart):
        s = x0 if jitter == 0 else x0 + RNG.normal(0, [0.3, 0.3, 0.15, 0.2])
        r = minimize(neglnL, s, args=(gb, go_log, elog, outer, fix),
                     method="Nelder-Mead",
                     options=dict(maxiter=2500, xatol=1e-5, fatol=1e-7))
        if best is None or r.fun < best:
            best, bx = r.fun, r.x
    p = dict(zip(("lgam", "la0", "n", "lsig"), bx))
    if fix:
        p.update(fix)
    return dict(gam=np.exp(p["lgam"]), a0=np.exp(p["la0"]), n=p["n"],
                sig=np.exp(p["lsig"]), nll=best, x=bx)


def gal_bootstrap(gid, gb, go, elog, nboot=200, outer="tanh", start=None):
    """Galaxy-level resampling -- the correlated unit is the galaxy, not the point.
    (2026-07-xx memory: N_eff inflation is how this program has over-refuted before.)"""
    gals = np.unique(gid)
    idx = {g: np.where(gid == g)[0] for g in gals}
    out = []
    for _ in range(nboot):
        pick = RNG.choice(gals, size=len(gals), replace=True)
        sel = np.concatenate([idx[g] for g in pick])
        try:
            r = fit(gb[sel], go[sel], elog[sel], outer=outer, start=start, nrestart=1)
            if 0.05 < r["n"] < 6:
                out.append((r["n"], r["gam"], r["a0"], r["sig"]))
        except Exception:
            pass
    return np.array(out)


def hdr(t):
    print("\n" + "=" * 78)
    print(t)
    print("=" * 78)


def main():
    results = {}

    hdr("PART 0 -- the data, and how much of it is actually in the deep regime")
    gid, gb, go, elog, rad = build_rar()
    print(f"  points {len(gb)}   galaxies {len(np.unique(gid))}   "
          f"(Upsilon_disk=0.5, Upsilon_bul=0.7, Q<3, inc>30, eV/V<0.10)")
    for thr, lab in [(1.0, "g_bar < a0"), (0.1, "g_bar < a0/10"),
                     (0.01, "g_bar < a0/100")]:
        m = gb < thr * A0_REF
        print(f"  {lab:>18}: {m.sum():5d} pts ({100*m.mean():5.1f}%)  "
              f"in {len(np.unique(gid[m])):3d} galaxies")
    lo, hi = np.log10(gb.min() / A0_REF), np.log10(gb.max() / A0_REF)
    print(f"  dynamic range in log10(g_bar/a0): [{lo:.2f}, {hi:.2f}]  = {hi-lo:.2f} dex")
    results["N_pts"] = int(len(gb))
    results["N_gal"] = int(len(np.unique(gid)))

    # -------------------------------------------------------------- POWER GATE
    hdr("PART 1 -- THE POWER GATE.  Injection-recovery before any measurement is quoted.")
    print("""  Desmond+2023 could not recover the deep slope from MOND mocks with a FREE
  functional form.  This family is rigid (3 shape parameters), so the question is
  open.  Inject at known n, with SPARC's own g_bar sampling and its own error bars.""")
    base = fit(gb, go, elog)
    print(f"\n  reference fit for the injection scatter: sigma_int = {base['sig']:.4f} dex")
    inj = {}
    print(f"\n  {'n_true':>7} | {'n_hat median':>13} {'bias':>8} {'scatter':>8} | "
          f"{'gam_hat':>8} {'a0_hat/a0ref':>12} | recovered?")
    print("  " + "-" * 76)
    for n_true in (0.70, 0.85, 1.00, 1.15, 1.30):
        gm = solve_gobs(gb, 0.5, A0_REF, n_true)
        nh, gh, ah = [], [], []
        for _ in range(24):
            noise = RNG.normal(0, np.sqrt(elog ** 2 + base["sig"] ** 2))
            mock = gm * 10.0 ** noise
            r = fit(gb, mock, elog, start=base["x"], nrestart=1)
            nh.append(r["n"]); gh.append(r["gam"]); ah.append(r["a0"])
        nh = np.array(nh)
        med, sc = np.median(nh), np.std(nh)
        ok = abs(med - n_true) < max(0.05, 1.0 * sc)
        print(f"  {n_true:7.2f} | {med:13.4f} {med-n_true:+8.4f} {sc:8.4f} | "
              f"{np.median(gh):8.4f} {np.median(ah)/A0_REF:12.4f} | {'YES' if ok else 'NO'}")
        inj[f"{n_true:.2f}"] = dict(median=float(med), bias=float(med - n_true),
                                    scatter=float(sc), recovered=bool(ok))
    results["injection"] = inj
    seps = [inj[k]["median"] for k in sorted(inj)]
    print(f"\n  monotone in n_true? {'YES' if all(np.diff(seps) > 0) else 'NO'}"
          f"   dn_hat/dn_true over [0.70,1.30] = {(seps[-1]-seps[0])/0.60:.3f}")

    # ----------------------------------------------------------- MEASUREMENT
    hdr("PART 2 -- the measurement on real SPARC")
    print(f"  gam    = {base['gam']:.4f}")
    print(f"  a0     = {base['a0']:.4e} m/s^2   ({base['a0']/A0_REF:.3f} x Lelli+2017)")
    print(f"  n      = {base['n']:.4f}")
    print(f"  sig_int= {base['sig']:.4f} dex")
    print(f"  s_deep = 1/(n+1) = {1.0/(base['n']+1.0):.4f}   "
          f"(MOND: 0.5)   outer V^2 slope (n-1)/(n+1) = "
          f"{(base['n']-1)/(base['n']+1):+.4f}")

    nfix = fit(gb, go, elog, fix={"n": 1.0})
    dnll = 2.0 * (nfix["nll"] - base["nll"])
    print(f"\n  n frozen at 1 (= MOND / scale-invariant deep limit):")
    print(f"    gam = {nfix['gam']:.4f}   a0 = {nfix['a0']/A0_REF:.3f} a0_ref   "
          f"sig = {nfix['sig']:.4f}")
    print(f"    Delta(2 lnL) freeing n = {dnll:.2f}   -> naive sqrt = "
          f"{np.sqrt(max(dnll,0)):.2f} sigma  [POINT-LEVEL, correlated: NOT the answer]")
    results["fit_free"] = {k: float(base[k]) for k in ("gam", "a0", "n", "sig")}
    results["fit_n1"] = {k: float(nfix[k]) for k in ("gam", "a0", "sig")}
    results["dnll_pointlevel"] = float(dnll)

    hdr("PART 3 -- galaxy-level bootstrap (the honest error bar)")
    bs = gal_bootstrap(gid, gb, go, elog, nboot=200, start=base["x"])
    n_bs = bs[:, 0]
    q = np.percentile(n_bs, [2.5, 16, 50, 84, 97.5])
    print(f"  nboot = {len(bs)}")
    print(f"  n  = {q[2]:.4f}  (+{q[3]-q[2]:.4f} / -{q[2]-q[1]:.4f})   "
          f"95% CI [{q[0]:.4f}, {q[4]:.4f}]")
    print(f"  sigma(n) = {n_bs.std():.4f}")
    print(f"  P(n > 1) = {np.mean(n_bs > 1):.3f}   "
          f"-> |n-1| = {abs(q[2]-1):.4f} = {abs(q[2]-1)/n_bs.std():.2f} sigma")
    print(f"  gam = {np.median(bs[:,1]):.4f} +- {bs[:,1].std():.4f}"
          f"   [08-14 quoted 0.49 +- 0.11]")
    cc = np.corrcoef(bs[:, 0], bs[:, 1])[0, 1]
    ca = np.corrcoef(bs[:, 0], np.log(bs[:, 2]))[0, 1]
    print(f"  corr(n, gam) = {cc:+.3f}     corr(n, ln a0) = {ca:+.3f}")
    results["bootstrap"] = dict(n_med=float(q[2]), n_lo95=float(q[0]), n_hi95=float(q[4]),
                                n_sd=float(n_bs.std()), P_gt1=float(np.mean(n_bs > 1)),
                                gam_med=float(np.median(bs[:, 1])),
                                gam_sd=float(bs[:, 1].std()),
                                corr_n_gam=float(cc), corr_n_lna0=float(ca))
    np.save(os.path.join(os.path.dirname(os.path.abspath(__file__)),
                         "regulator_exponent_n_bootstrap.npy"), bs)

    # ------------------------------------------- THE REGISTERED WAKE PREDICTION
    hdr("PART 4 -- THE REGISTERED PREDICTION: is n Upsilon-invariant where gamma is not?")
    print("""  Registered in the header before running: Upsilon rescaling translates the RAR
  horizontally, and a translation cannot change a slope, so n-hat should be ~flat
  across the same band that sweeps gam-hat over [0.27, 0.96] (2026-08-14).""")
    print(f"\n  {'ups_d':>6} {'ups_b':>6} | {'N':>5} | {'gam':>8} {'a0/a0ref':>9} "
          f"{'n':>8} {'sig':>7} | {'s_deep':>7}")
    print("  " + "-" * 74)
    ups_rows = []
    for ud in (0.30, 0.40, 0.50, 0.60, 0.70, 0.80):
        ub = min(1.4 * ud, 1.0)
        g2, gb2, go2, el2, _ = build_rar(up_disk=ud, up_bul=ub)
        r = fit(gb2, go2, el2, start=base["x"])
        print(f"  {ud:6.2f} {ub:6.2f} | {len(gb2):5d} | {r['gam']:8.4f} "
              f"{r['a0']/A0_REF:9.4f} {r['n']:8.4f} {r['sig']:7.4f} | "
              f"{1/(r['n']+1):7.4f}")
        ups_rows.append(dict(ups=ud, gam=float(r["gam"]), n=float(r["n"]),
                             a0=float(r["a0"]), sig=float(r["sig"])))
    gr = [r["gam"] for r in ups_rows]
    nr = [r["n"] for r in ups_rows]
    print(f"\n  gam range over the band : [{min(gr):.4f}, {max(gr):.4f}]  "
          f"span {max(gr)-min(gr):.4f}  = {100*(max(gr)-min(gr))/np.mean(gr):.1f}% of mean")
    print(f"  n   range over the band : [{min(nr):.4f}, {max(nr):.4f}]  "
          f"span {max(nr)-min(nr):.4f}  = {100*(max(nr)-min(nr))/np.mean(nr):.1f}% of mean")
    print(f"  n span in units of the bootstrap sigma(n): "
          f"{(max(nr)-min(nr))/n_bs.std():.2f}")
    print(f"  gam span in units of its bootstrap sigma : "
          f"{(max(gr)-min(gr))/bs[:,1].std():.2f}")
    results["upsilon_sweep"] = ups_rows
    results["upsilon_verdict"] = dict(
        gam_span=float(max(gr) - min(gr)), n_span=float(max(nr) - min(nr)),
        n_span_in_sigma=float((max(nr) - min(nr)) / n_bs.std()),
        gam_span_in_sigma=float((max(gr) - min(gr)) / bs[:, 1].std()))

    # --------------------------------------------- where does the n info come from?
    hdr("PART 5 -- WHERE does the constraint on n come from?  (data, or family rigidity?)")
    print("""  n is a deep-end slope, but it also enters the Newtonian end through gam*n
  (1 - C ~ 2 x^(-2 gam n)).  If the deep-only fit is uninformative while the full
  fit is tight, then the number is the FAMILY talking, not the data -- and this
  program has been burned by exactly that before (the N_corr ladder, B_max).""")
    for lab, mask in [("deep only  (g_bar < a0/3)", gb < A0_REF / 3),
                      ("deep only  (g_bar < a0)  ", gb < A0_REF),
                      ("high only  (g_bar > a0)  ", gb > A0_REF),
                      ("all points               ", np.ones(len(gb), bool))]:
        if mask.sum() < 60:
            print(f"  {lab}: too few points ({mask.sum()})")
            continue
        r = fit(gb[mask], go[mask], elog[mask], start=base["x"])
        b2 = gal_bootstrap(gid[mask], gb[mask], go[mask], elog[mask],
                           nboot=60, start=r["x"])
        sd = b2[:, 0].std() if len(b2) > 10 else np.nan
        print(f"  {lab}: N={mask.sum():5d}  n = {r['n']:.4f} +- {sd:.4f}   "
              f"gam = {r['gam']:.4f}")
        results.setdefault("subsets", {})[lab.strip()] = dict(
            N=int(mask.sum()), n=float(r["n"]), n_sd=float(sd), gam=float(r["gam"]))

    # ------------------------------------------------- outer-sigmoid conditionality
    hdr("PART 6 -- is n-hat a property of the data, or of tanh?  (swap the OUTER sigmoid)")
    print("""  The 2026-05-02 sweep varied the outer sigmoid at fixed argument and found the
  consciousness threshold moved.  Here the argument is generalized and the outer
  sigmoid is varied: if n-hat moves with the sigmoid, n is not separately measurable
  and the 'non-nested direction' is entangled with a second unconstrained choice.""")
    print(f"  {'outer S':>12} | {'gam':>8} {'a0/a0ref':>9} {'n':>8} {'sig':>7} {'nll':>12}")
    print("  " + "-" * 62)
    outer_rows = []
    for o in ("tanh", "algebraic", "expo"):
        r = fit(gb, go, elog, outer=o, start=base["x"])
        print(f"  {o:>12} | {r['gam']:8.4f} {r['a0']/A0_REF:9.4f} {r['n']:8.4f} "
              f"{r['sig']:7.4f} {r['nll']:12.2f}")
        outer_rows.append(dict(outer=o, gam=float(r["gam"]), n=float(r["n"]),
                               a0=float(r["a0"]), sig=float(r["sig"]),
                               nll=float(r["nll"])))
    no = [r["n"] for r in outer_rows]
    print(f"\n  n span across outer sigmoids: {max(no)-min(no):.4f} "
          f"= {(max(no)-min(no))/n_bs.std():.2f} bootstrap sigma")
    results["outer_sigmoid"] = outer_rows

    # ------------------------------------------------------------ universality
    hdr("PART 7 -- OUTCOME (c) TEST: is there a universal n at all?")
    print("""  n is supposed to be a constant of the theory, like a0.  Fit n per galaxy with
  gam and a0 frozen at the global values.  If per-galaxy n scatters beyond its own
  errors, or tracks a galaxy property, no universal n exists and the extension class
  dies while MOND does not.""")
    gals = np.unique(gid)
    per = []
    for g in gals:
        m = gid == g
        if m.sum() < 6:
            continue
        r = fit(gb[m], go[m], elog[m],
                fix={"lgam": np.log(base["gam"]), "la0": np.log(base["a0"])},
                start=base["x"], nrestart=1)
        if 0.05 < r["n"] < 6:
            per.append((g, r["n"], m.sum(), np.median(np.log10(gb[m] / A0_REF)),
                        np.log10(np.max(go[m] * (rad[m] * KPC)) )))
    ng = np.array([p[1] for p in per])
    print(f"\n  galaxies fit: {len(per)}")
    print(f"  per-galaxy n : median {np.median(ng):.3f}   mean {ng.mean():.3f}   "
          f"sd {ng.std():.3f}   IQR [{np.percentile(ng,25):.3f}, {np.percentile(ng,75):.3f}]")
    print(f"  expected sd if universal (bootstrap sigma * sqrt(Ngal)) ~ "
          f"{n_bs.std()*np.sqrt(len(per)):.3f}")
    xdeep = np.array([p[3] for p in per])
    xmass = np.array([p[4] for p in per])
    for lab, v in (("median log10(g_bar/a0)", xdeep), ("log10(V^2 r) proxy for mass", xmass)):
        ok = np.isfinite(v) & np.isfinite(ng)
        rr = np.corrcoef(v[ok], ng[ok])[0, 1]
        print(f"  corr(n_gal, {lab:28s}) = {rr:+.3f}   (N={ok.sum()})")
        results.setdefault("universality_corr", {})[lab] = float(rr)
    results["per_galaxy"] = dict(N=len(per), median=float(np.median(ng)),
                                 sd=float(ng.std()),
                                 iqr=[float(np.percentile(ng, 25)),
                                      float(np.percentile(ng, 75))])

    hdr("PART 8 -- permutation null")
    print("  Destroy the RAR by shuffling g_obs across galaxies; refit n.")
    nulls = []
    for _ in range(30):
        perm = RNG.permutation(len(go))
        r = fit(gb, go[perm], elog[perm], start=base["x"], nrestart=1)
        nulls.append(r["n"])
    nulls = np.array(nulls)
    print(f"  n under permutation: median {np.median(nulls):.4f}  sd {nulls.std():.4f}")
    print(f"  real n = {base['n']:.4f}  ->  z = "
          f"{(base['n']-np.median(nulls))/max(nulls.std(),1e-6):.2f} from the destroyed data")
    results["permutation"] = dict(median=float(np.median(nulls)), sd=float(nulls.std()))

    out = os.path.join(os.path.dirname(os.path.abspath(__file__)),
                       "regulator_exponent_n_real_sparc_output.json")
    with open(out, "w") as f:
        json.dump(results, f, indent=2)
    print(f"\n\n[json written: {out}]")


if __name__ == "__main__":
    main()
