#!/usr/bin/env python3
r"""
WHICH ARGUMENT OF C PUTS THE TRANSITION WHERE THE DISCS WANT IT?
================================================================
Explorer 2026-09-09, from the maintainer topic
`argument-of-c-which-variable-puts-the-switch-outside-the-disc.md`.

The topic names four candidate arguments (Sigma, an MRH-smoothed rho, g_N, "the compander
form") and asks which one lands near MOND on the same likelihood.  Two things it does not
state, established in this session's WAKE and tested here:

  (i) The maximum boost the L2 field equation can deliver is 1/floor, whatever C is a
      function of (spherically g = GM/(C r^2); C >= floor by construction).  So at the
      Omega_m floor no argument can work, and the control that proves it is C keyed on
      g_N itself -- MOND's own keying -- at floor = Omega_m.
  (ii) In this code the scale height is one number per galaxy, so rho_mid(R) = Sigma(R)/(2h)
      exactly: Sigma-keying is rho-keying with a per-galaxy knee shift.  An MRH-smoothed rho
      with horizon lambda is the one-parameter family joining them.  Three of the four
      candidates are one candidate; the real dichotomy is exponential (rho, Sigma, rho_MRH)
      vs power-law (g_N, mean interior density) fall-off.

PART A (fit-free): the slope diagnostic.  SPARC's flat curves need d ln B_req/d ln R over the
outer disc; a floored tanh can deliver at most max_x|d ln C/d ln x| * |d ln X/d ln R|.  No knee,
no floor, no fit -- says which arguments are kinematically capable before any solver runs.

PART B: the head-to-head the topic asks for.  Same solver, same grid, same Bershady scale
height, same Upsilon profiling and same likelihood as
`sparc_pinned_at_rg_knee_l2.py` (explorer 2026-09-08), C = floor + (1-floor) tanh(gamma ln(1+X/X_c))
keyed on X in {rho, Sigma, rho_MRH(lambda), g_N, rhobar(<r)}, both floors, knee scanned in each
argument's own units.

Pre-registered expectations (logs/2026-09-09.md):
  E1  at floor = Omega_m every argument, g_N included, lands >= 3x MOND's chi2/N.
  E2  at floor = 0.089 the ordering is g_N << rhobar < Sigma ~ rho_MRH ~ rho, g_N within 2x of MOND.
  E3  Sigma- and rho-keyed curves coincide under a knee shift of ~2h.
"""
import os
import sys
import time
import json
import numpy as np

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import l2_field_equation_on_sparc as L
import l2_sparc_core as K

_LOCAL = os.path.expanduser('~/ai-workspace/Synchronism/simulations/sparc_real_data')
if not os.path.exists(K.LOAD.TAB1) and os.path.exists(_LOCAL):      # loader hardcodes a CBP path
    K.LOAD.BASE = _LOCAL
    K.LOAD.MRT = os.path.join(_LOCAL, 'MassModels_Lelli2016c.mrt')
    K.LOAD.TAB1 = os.path.join(_LOCAL, 'SPARC_Lelli2016c.mrt')

OMEGA_M = 0.315
RG_FLOOR = 0.089
GAMMA = 0.489                     # SPARC's own selected value; gamma = 2 added for the winner
LAMBDA_MRH = 1.0                  # kpc, the MRH horizon for the smoothed-density argument


# ------------------------------------------------------------------ C, generic in its argument
def C_tanh(gamma, x_c, floor):
    """The site's compander form, agnostic about what x is.  x_c in the same units as X."""
    return lambda X: floor + (1 - floor) * np.tanh(gamma * np.log1p(np.maximum(X, 0.0) / x_c))


def max_dlnC_dlnx(gamma, floor, xs=None):
    """max over x of |d ln C / d ln x| for the floored tanh -- the steepest response the form has."""
    if xs is None:
        xs = np.logspace(-8, 8, 20001)
    u = gamma * np.log1p(xs)
    C = floor + (1 - floor) * np.tanh(u)
    d = (1 - floor) / np.cosh(u)**2 * gamma * xs / (1 + xs) / C
    return float(d.max()), float(xs[int(d.argmax())])


# ------------------------------------------------------------------ the galaxy, with extra fields
class GalArg(L.Gal):
    """L.Gal plus the alternative arguments of C on the same (R, z) grid.

    rho      Msun/kpc^3     the baseline (what every run to date has keyed on)
    Sigma    Msun/pc^2      column density of the whole model, broadcast over z
    mrh      Msun/kpc^3     rho smoothed along z over +-lambda (rho as lambda->0, Sigma/2lambda as lambda>>h)
    gN       (km/s)^2/kpc   |grad Phi_N| from the same Newtonian solve the class already does
    rhobar   Msun/kpc^3     3 M(<r) / (4 pi r^3), spherical mean interior density
    """

    def __init__(self, *a, lam=LAMBDA_MRH, **kw):
        super().__init__(*a, **kw)
        g = self.g
        # --- Sigma(R): exact from the cell masses (half-space -> x2), Msun/pc^2
        area = np.pi * (g.Rf[1:]**2 - g.Rf[:-1]**2)            # kpc^2
        Sig = 2.0 * self.Mc.sum(axis=1) / area / 1e6           # Msun/pc^2
        self.Sigma = np.repeat(Sig[:, None], g.NZ, axis=1)
        # --- MRH-smoothed rho: I(z) = int_0^z rho dz', rho even in z
        z = g.zc
        I = np.concatenate([np.zeros((g.NR, 1)),
                            np.cumsum(0.5 * (self.rho[:, 1:] + self.rho[:, :-1]) * np.diff(z), axis=1)],
                           axis=1)
        I = I + self.rho[:, :1] * z[0]                          # 0 -> zc[0] sliver
        zmax = z[-1]

        def Iof(zq):
            zq = np.abs(zq)
            out = np.empty_like(zq)
            for i in range(g.NR):
                out[i] = np.interp(zq[i], z, I[i], right=I[i, -1])
            return np.where(np.abs(zq) > zmax, I[:, -1:], out)

        zp = np.minimum(z[None, :] + lam, zmax)
        zm = z[None, :] - lam
        num = Iof(np.broadcast_to(zp, (g.NR, g.NZ)).copy()) + np.where(
            zm < 0, Iof(np.broadcast_to(-zm, (g.NR, g.NZ)).copy()),
            -Iof(np.broadcast_to(np.abs(zm), (g.NR, g.NZ)).copy()))
        self.mrh = np.maximum(num / (2 * lam), 0.0)
        self.lam = lam
        # --- |grad Phi_N| on the grid
        PhiN = K.solve_poisson_fast(g, np.ones_like(g.RR), self.Mc, 1.0, self.Mtot)
        gR = np.gradient(PhiN, g.Rc, axis=0, edge_order=2)
        gZ = np.gradient(PhiN, g.zc, axis=1, edge_order=2)
        self.gN2d = np.hypot(gR, gZ)
        # --- spherical mean interior density
        rr = np.hypot(g.RR, g.ZZ)
        order = np.argsort(rr.ravel())
        m_sorted = (2.0 * self.Mc).ravel()[order]
        r_sorted = rr.ravel()[order]
        Mcum = np.cumsum(m_sorted)
        self.rhobar = np.interp(rr, r_sorted, Mcum) / (4.0 / 3.0 * np.pi * np.maximum(rr, 1e-3)**3)
        # --- midplane values on the SPARC radii, for Part A
        R = self.d["R"]
        self.mid = {
            "rho":    np.interp(R, g.Rc, self.rho[:, 0]),
            "Sigma":  np.interp(R, g.Rc, Sig),
            "mrh":    np.interp(R, g.Rc, self.mrh[:, 0]),
            "gN":     np.interp(R, g.Rc, self.gN2d[:, 0]),
            "rhobar": np.interp(R, g.Rc, self.rhobar[:, 0]),
        }

    def field(self, key):
        return {"rho": self.rho, "Sigma": self.Sigma, "mrh": self.mrh,
                "gN": self.gN2d, "rhobar": self.rhobar}[key]

    def solve_arg(self, key, Cfun, Cmin):
        C = Cfun(self.field(key))
        Phi = K.solve_poisson_fast(self.g, C, self.Mc, Cmin, self.Mtot)
        gL2_R = np.interp(self.d["R"], self.g.Rc, K.midplane_gR(self.g, Phi))
        B = np.where(self.ok, gL2_R / np.where(self.ok, self.gN, 1.0), 1.0)
        return B, gL2_R


ARGS = ["rho", "Sigma", "mrh", "gN", "rhobar"]
UNITS = {"rho": "Msun/kpc^3", "Sigma": "Msun/pc^2", "mrh": "Msun/kpc^3",
         "gN": "(km/s)^2/kpc", "rhobar": "Msun/kpc^3"}


def logslope(x, y, m):
    """least-squares d ln y / d ln x on the masked points."""
    if m.sum() < 3:
        return np.nan
    lx, ly = np.log(x[m]), np.log(np.maximum(y[m], 1e-300))
    if not np.all(np.isfinite(ly)):
        return np.nan
    return float(np.polyfit(lx, ly, 1)[0])


def part_A(G):
    print("\n" + "=" * 118)
    print("PART A -- THE SLOPE DIAGNOSTIC (no knee, no floor, no fit)")
    print("=" * 118)
    for f in (OMEGA_M, RG_FLOOR):
        for g_ in (GAMMA, 2.0):
            d, xstar = max_dlnC_dlnx(g_, f)
            print(f"  max |dlnC/dlnx|  gamma={g_:<5g} floor={f:<5g} = {d:6.3f}   (at x = {xstar:.3g})")
    # --- are Sigma / rho_MRH / rho actually distinct arguments?
    prop, mrh_ratio, hs = [], [], []
    for gg in G:
        o = gg.ok
        if o.sum() < 3:
            continue
        r = gg.mid["rho"][o] / (gg.mid["Sigma"][o] * 1e6 / (2 * gg.h))
        prop.append(float(np.nanmax(r) / np.nanmin(r)))            # within-galaxy spread of rho/(Sigma/2h)
        mrh_ratio.append(float(np.nanmedian(gg.mid["mrh"][o] / (gg.mid["Sigma"][o] * 1e6 / (2 * gg.lam)))))
        hs.append(gg.h)
    prop = np.array(prop); hs = np.array(hs)
    print(f"\n  rho / (Sigma/2h) within a galaxy: median spread max/min = {np.median(prop):.4f}, "
          f"p90 = {np.percentile(prop, 90):.4f}, worst = {prop.max():.3f} "
          f"({int(np.sum(prop > 1.05))} of {len(prop)} discs exceed 5%)")
    print(f"  rho_MRH(lambda={LAMBDA_MRH}) / (Sigma/2lambda): median {np.median(mrh_ratio):.4f}, "
          f"spread {np.min(mrh_ratio):.4f}-{np.max(mrh_ratio):.4f}")
    print(f"  scale height h: {hs.min():.3f}-{hs.max():.3f} kpc (x{hs.max()/hs.min():.1f}) -- the whole")
    print(f"  difference between a Sigma-keyed and a rho-keyed law is this per-galaxy knee shift.")

    rows = {a: [] for a in ARGS}
    sreq = []
    for gg in G:
        R = gg.d["R"]
        o = gg.ok & (gg.d["Vobs"] > 0)
        if o.sum() < 5:
            continue
        outer = o & (R >= np.median(R[o]))
        Breq = gg.d["Vobs"]**2 / np.maximum(gg.vbar2, 1e-30)
        s = logslope(R, Breq, outer)
        if not np.isfinite(s):
            continue
        sreq.append(s)
        for a in ARGS:
            rows[a].append(logslope(R, gg.mid[a], outer))
    sreq = np.array(sreq)
    print(f"\n  required outer-disc slope d ln B_req / d ln R over {len(sreq)} discs:"
          f"  median {np.median(sreq):+.3f}  [p25 {np.percentile(sreq,25):+.3f}, "
          f"p75 {np.percentile(sreq,75):+.3f}]")
    print(f"\n  {'argument':<10s} {'units':<14s} | {'median dlnX/dlnR':>17s} {'p10':>7s} {'p90':>7s} |"
          f" {'max deliverable dlnB/dlnR':>26s} | {'% discs capable':>16s}")
    out = {}
    for a in ARGS:
        sx = np.array(rows[a]); sx = sx[np.isfinite(sx)]
        cap = {}
        for f in (OMEGA_M, RG_FLOOR):
            for g_ in (GAMMA, 2.0):
                d, _ = max_dlnC_dlnx(g_, f)
                deliv = d * np.abs(sx)
                cap[(f, g_)] = (float(np.median(deliv)), float(np.mean(deliv >= np.median(sreq)) * 100))
        d489, _ = max_dlnC_dlnx(GAMMA, RG_FLOOR)
        deliv = d489 * np.abs(sx)
        n = min(len(deliv), len(sreq))
        print(f"  {a:<10s} {UNITS[a]:<14s} | {np.median(sx):17.3f} {np.percentile(sx,10):7.3f} "
              f"{np.percentile(sx,90):7.3f} | {np.median(deliv):26.3f} | "
              f"{np.mean(deliv[:n] >= sreq[:n])*100:15.0f}%")
        out[a] = dict(median_slope=float(np.median(sx)),
                      p10=float(np.percentile(sx, 10)), p90=float(np.percentile(sx, 90)),
                      capable_pct={f"floor={k[0]},gamma={k[1]}": v for k, v in cap.items()})
    print("\n  '% discs capable' = fraction whose own required slope is <= the bound at "
          f"gamma={GAMMA}, floor={RG_FLOOR} (the most permissive cell).")
    print("  The bound is an upper bound: it puts the knee at the single most favourable x for every")
    print("  radius at once, which no single knee can do.  Failing it is decisive; passing it is not.")
    return dict(sreq_median=float(np.median(sreq)), n=len(sreq), args=out)


def knee_grid(G, a, npts=5):
    """log grid of knees spanning the argument's own sampled range on the ok points."""
    v = np.concatenate([gg.mid[a][gg.ok] for gg in G])
    v = v[v > 0]
    lo, hi = np.percentile(np.log10(v), [2, 98])
    return list(10 ** np.linspace(lo - 0.5, hi + 0.5, npts))


def main():
    t0 = time.time()
    gal = K.load_sparc()
    gids = sorted(gal)
    G, GU = [], {u: [] for u in L.UPS_GRID}
    for gid in gids:
        try:
            G.append(GalArg(gal[gid]))
            for u in L.UPS_GRID:
                GU[u].append(GalArg(gal[gid], up_disk=u))
        except Exception as e:                                   # noqa
            print("skip", gid, e)
    print(f"built {len(G)} galaxies (x{1+len(L.UPS_GRID)} Upsilon variants) in {time.time()-t0:.0f}s",
          flush=True)

    res = {"partA": part_A(G)}

    # ---------------------------------------------------------------- references
    def score_ref(f):
        fixed, prof = [], []
        for i, gg in enumerate(G):
            fixed.append(gg.score(f(gg)))
            prof.append(L.profiled([GU[u][i].score(f(GU[u][i])) for u in L.UPS_GRID]))
        return fixed, prof

    refs = {"Newton (C=1)": lambda gg: gg.vbar2,
            "MOND simple mu": lambda gg: K.mond_simple(gg.gbar_sparc) * gg.d["R"]}
    out = {}
    for n, f in refs.items():
        fx, pr = score_ref(f)
        out[n] = dict(fixed=L.summarise(n, fx), prof=L.summarise(n, pr))
    mond_prof = np.array(out["MOND simple mu"]["prof"]["per_gal_chi2"])

    grids = {a: knee_grid(G, a) for a in ARGS}
    print("\nknee grids (2nd-98th percentile of the argument on the fitted points, +-0.5 dex):")
    for a in ARGS:
        print(f"  {a:<8s} [{UNITS[a]}]  " + "  ".join(f"{v:.3g}" for v in grids[a]))

    print("\n" + "=" * 150)
    print(f"PART B -- SPARC (Q<=2, i>30; {len(G)} discs) under L2,  "
          f"C = f + (1-f) tanh(gamma ln(1 + X/X_c)),  gamma = {GAMMA}")
    print("=" * 150)
    hdr = (f"{'argument / knee / floor':<46s} | {'--- Ups_d=0.5 fixed ---':^24s} | "
           f"{'--- Ups_d profiled ---':^24s} | {'vs MOND (prof)':^18s} | {'boost':^18s}")
    sub = (f"{'':<46s} | {'chi2/N':>8s} {'rmsV':>7s} {'rms g':>7s} | {'chi2/N':>8s} {'rmsV':>7s} "
           f"{'rms g':>7s} | {'wins':>5s} {'sum dchi2':>11s} | {'medBmax':>7s} {'medReq':>6s} {'need>':>5s}")

    def run(a, g_, xc, fl):
        Cf = C_tanh(g_, xc, fl)
        fixed, prof, bmax, req = [], [], [], []
        for i, gg in enumerate(G):
            B, _ = gg.solve_arg(a, Cf, fl)
            fixed.append(gg.score(B * gg.vbar2))
            o = gg.ok
            bmax.append(B[o].max())
            req.append((gg.d["Vobs"][o]**2 / gg.vbar2[o]).max())
            sc = []
            for u in L.UPS_GRID:
                gu = GU[u][i]
                sc.append(gu.score(gu.solve_arg(a, Cf, fl)[0] * gu.vbar2))
            prof.append(L.profiled(sc))
        return fixed, prof, np.array(bmax), np.array(req)

    for n in refs:
        f, p = out[n]["fixed"], out[n]["prof"]
        if n == "Newton (C=1)":
            print(hdr); print(sub)
        c = np.array(p["per_gal_chi2"])
        print(f"{n:<46s} | {f['chi2_per_pt']:8.2f} {f['rmslog_med']:7.3f} {2*f['rmslog_med']:7.3f} | "
              f"{p['chi2_per_pt']:8.2f} {p['rmslog_med']:7.3f} {2*p['rmslog_med']:7.3f} | "
              f"{np.mean(c < mond_prof)*100:4.0f}% {c.sum()-mond_prof.sum():+11.0f}", flush=True)

    for fl in (OMEGA_M, RG_FLOOR):
        print("-" * 150)
        for a in ARGS:
            for xc in grids[a]:
                name = f"{a:<7s} X_c={xc:<9.3g} floor={fl:g}"
                fx, pr, bmax, req = run(a, GAMMA, xc, fl)
                rf, rp = L.summarise(name, fx), L.summarise(name, pr)
                c = np.array(rp["per_gal_chi2"])
                print(f"{name:<46s} | {rf['chi2_per_pt']:8.2f} {rf['rmslog_med']:7.3f} "
                      f"{2*rf['rmslog_med']:7.3f} | {rp['chi2_per_pt']:8.2f} {rp['rmslog_med']:7.3f} "
                      f"{2*rp['rmslog_med']:7.3f} | {np.mean(c < mond_prof)*100:4.0f}% "
                      f"{c.sum()-mond_prof.sum():+11.0f} | {np.median(bmax):7.2f} "
                      f"{np.median(req):6.2f} {np.mean(req > bmax)*100:4.0f}%", flush=True)
                out[name] = dict(arg=a, gamma=GAMMA, knee=float(xc), floor=fl,
                                 fixed={k: v for k, v in rf.items() if not k.startswith('per_gal')},
                                 prof={k: v for k, v in rp.items() if not k.startswith('per_gal')},
                                 medBmax=float(np.median(bmax)), medReq=float(np.median(req)),
                                 frac_need_more=float(np.mean(req > bmax)))
    res["partB"] = out
    json.dump(res, open(os.path.join(os.path.dirname(os.path.abspath(__file__)),
                                     'argument_of_C_head_to_head_l2.json'), 'w'), indent=1,
              default=float)
    print(f"\n[{time.time()-t0:.0f}s]")


if __name__ == '__main__':
    main()
