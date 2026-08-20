#!/usr/bin/env python3
"""
SECOND, INDEPENDENT ESTIMATOR OF n: the outer rotation-curve log-slope.

The RAR fit (regulator_exponent_n_real_sparc.py) measures n through the SHAPE of the
g_obs(g_bar) relation, which needs Upsilon to build g_bar.  This script measures the
same n from a statistic that needs NO Upsilon at all:

        s_V(r) = d ln V_obs / d ln r          <- pure kinematics, no mass model

Because, in the deep regime and where the enclosed baryonic mass has converged
(g_bar -> GM/r^2),

        V^2 ~ r^((n-1)/(n+1))    =>    s_V = (n-1) / (2(n+1))
        =>  n = (1 + 2 s_V) / (1 - 2 s_V)

MOND / spacetime scale invariance (Milgrom 2009) predicts s_V = 0 exactly, i.e. n = 1.

THE TWO CONDITIONS ARE THE WHOLE GAME, so they are enforced, not assumed:
  (i)  DEEP:      g_bar < a0/f            (f swept)
  (ii) CONVERGED: M_bar(<r) rises by less than tol over the window used
                  (otherwise g_bar is not ~ r^-2 and the conversion is invalid)
Galaxies failing either are reported as excluded, with counts -- no silent caps.

Upsilon enters ONLY through condition (ii) and the deep cut, never through the
statistic, so the Upsilon-sensitivity of THIS estimator is a second, independent
check on the 08-14 mass-to-light systematic.
"""
import os
import sys
import json
import numpy as np

sys.path.insert(0, os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "..", "scripts"))
from rar_scatter_nogo_real_sparc import load_table1, load_massmodels, KPC, KMS  # noqa: E402

RNG = np.random.default_rng(20260820)
A0_REF = 1.20e-10
Gk = 4.301e-6            # kpc (km/s)^2 / Msun


def galaxies(up_disk=0.5, up_bul=0.7):
    props = load_table1()
    rows = load_massmodels()
    by = {}
    for r in rows:
        by.setdefault(r["gid"], []).append(r)
    out = []
    for g, pts in by.items():
        p = props.get(g)
        if p is None or p["Q"] > 2 or p["inc"] < 30.0:
            continue
        pts = sorted(pts, key=lambda z: z["R"])
        R = np.array([d["R"] for d in pts])
        V = np.array([d["Vobs"] for d in pts])
        eV = np.array([d["eVobs"] for d in pts])
        Vg = np.array([d["Vgas"] for d in pts])
        Vd = np.array([d["Vdisk"] for d in pts])
        Vb = np.array([d["Vbul"] for d in pts])
        ok = (R > 0) & (V > 0) & (eV / np.maximum(V, 1e-9) <= 0.10)
        if ok.sum() < 5:
            continue
        R, V, eV, Vg, Vd, Vb = R[ok], V[ok], eV[ok], Vg[ok], Vd[ok], Vb[ok]
        Vbar2 = (Vg * np.abs(Vg) + up_disk * Vd * np.abs(Vd)
                 + up_bul * Vb * np.abs(Vb))
        Mbar = np.clip(Vbar2, 0, None) * R / Gk                # Msun enclosed
        g_bar = np.clip(Vbar2, 0, None) * KMS ** 2 / (R * KPC)
        out.append(dict(gid=g, R=R, V=V, eV=eV, Mbar=Mbar, g_bar=g_bar,
                        Rd=p["Rdisk"], L36=p["L36"], T=p["T"]))
    return out


def outer_slope(gal, deep_f=3.0, tol=0.10, nmin=4):
    """Weighted ln V vs ln r slope over the outermost window satisfying (i) and (ii)."""
    R, V, eV = gal["R"], gal["V"], gal["eV"]
    deep = gal["g_bar"] < A0_REF / deep_f
    if deep.sum() < nmin:
        return None, "not-deep"
    idx = np.where(deep)[0]
    idx = idx[idx >= idx.max() - 30]                # outermost contiguous block
    # enforce convergence of enclosed baryonic mass across the window
    M = gal["Mbar"][idx]
    while len(idx) >= nmin:
        Mw = gal["Mbar"][idx]
        if Mw.max() <= 0:
            return None, "no-mass"
        if (Mw.max() - Mw.min()) / Mw.max() <= tol:
            break
        idx = idx[1:]                               # drop the innermost point
        M = gal["Mbar"][idx]
    if len(idx) < nmin:
        return None, "not-converged"
    x = np.log(R[idx])
    y = np.log(V[idx])
    w = 1.0 / (eV[idx] / V[idx]) ** 2
    Sw, Sx = w.sum(), (w * x).sum()
    Sxx, Sxy, Sy = (w * x * x).sum(), (w * x * y).sum(), (w * y).sum()
    den = Sw * Sxx - Sx * Sx
    if den <= 0:
        return None, "degenerate"
    s = (Sw * Sxy - Sx * Sy) / den
    es = np.sqrt(Sw / den)
    span = x.max() - x.min()
    if span < np.log(1.3):                          # need real leverage in radius
        return None, "no-leverage"
    return dict(s=s, es=es, n_pts=len(idx), span_dex=span / np.log(10),
                rmin=R[idx].min(), rmax=R[idx].max()), "ok"


def n_from_s(s):
    with np.errstate(divide="ignore", invalid="ignore"):
        return (1.0 + 2.0 * s) / (1.0 - 2.0 * s)


def hdr(t):
    print("\n" + "=" * 78)
    print(t)
    print("=" * 78)


def run(up_disk=0.5, up_bul=0.7, deep_f=3.0, tol=0.10, verbose=True):
    gals = galaxies(up_disk, up_bul)
    keep, reasons = [], {}
    for g in gals:
        r, why = outer_slope(g, deep_f=deep_f, tol=tol)
        reasons[why] = reasons.get(why, 0) + 1
        if r:
            r["gid"] = g["gid"]
            r["L36"] = g["L36"]
            r["Rd"] = g["Rd"]
            r["T"] = g["T"]
            keep.append(r)
    if verbose:
        print(f"  galaxies in     : {len(gals)}")
        print(f"  galaxies usable : {len(keep)}")
        print(f"  exclusions      : " +
              ", ".join(f"{k}={v}" for k, v in sorted(reasons.items()) if k != "ok"))
    return keep


def main():
    results = {}
    hdr("PART A -- the model-free statistic: outer d lnV / d lnr on real SPARC")
    print("""  No Upsilon in the statistic.  Windows are restricted to the deep regime AND to
  radii where the enclosed baryonic mass has converged, because the conversion
  s_V -> n is only valid where g_bar ~ r^-2.  Exclusion counts printed, not hidden.""")
    keep = run()
    s = np.array([k["s"] for k in keep])
    es = np.array([k["es"] for k in keep])
    w = 1.0 / es ** 2
    s_w = (w * s).sum() / w.sum()
    e_w = 1.0 / np.sqrt(w.sum())
    # galaxy bootstrap on the weighted mean
    bs = np.array([np.average(s[i], weights=w[i]) for i in
                   (RNG.integers(0, len(s), size=(2000, len(s))))])
    print(f"\n  N galaxies      = {len(s)}")
    print(f"  median window   = {np.median([k['n_pts'] for k in keep]):.0f} pts, "
          f"{np.median([k['span_dex'] for k in keep]):.2f} dex in radius")
    print(f"  s_V (weighted)  = {s_w:+.4f} +- {e_w:.4f} (formal)   "
          f"+- {bs.std():.4f} (galaxy bootstrap)")
    print(f"  s_V (median)    = {np.median(s):+.4f}    "
          f"population sd = {s.std():.4f}")
    print(f"  MOND / scale invariance predicts s_V = 0 exactly.")
    print(f"  -> departure = {abs(s_w)/bs.std():.2f} sigma (bootstrap)")
    n_hat = n_from_s(s_w)
    n_lo, n_hi = n_from_s(s_w - bs.std()), n_from_s(s_w + bs.std())
    print(f"\n  n  = {n_hat:.4f}   1-sigma [{min(n_lo,n_hi):.4f}, {max(n_lo,n_hi):.4f}]")
    n_lo2, n_hi2 = n_from_s(s_w - 2 * bs.std()), n_from_s(s_w + 2 * bs.std())
    print(f"      2-sigma [{min(n_lo2,n_hi2):.4f}, {max(n_lo2,n_hi2):.4f}]")
    results["main"] = dict(N=len(s), s_w=float(s_w), e_boot=float(bs.std()),
                           n=float(n_hat), n1sig=[float(min(n_lo, n_hi)),
                                                  float(max(n_lo, n_hi))],
                           n2sig=[float(min(n_lo2, n_hi2)),
                                  float(max(n_lo2, n_hi2))])

    hdr("PART B -- OUTCOME (c): is s_V universal, or does it track galaxy properties?")
    print("""  n is meant to be a constant of the theory.  If s_V correlates with luminosity or
  size, no single n exists and the extension class dies while MOND does not.
  (Persic & Salucci's universal-rotation-curve work reports exactly such a trend,
  so this is the outcome to beat, not a formality.)""")
    L = np.array([k["L36"] for k in keep])
    Rd = np.array([k["Rd"] for k in keep])
    okL = np.isfinite(L) & (L > 0)
    chi2_const = np.sum((s - s_w) ** 2 / es ** 2)
    dof = len(s) - 1
    print(f"\n  chi2 of 'all galaxies share one s_V' = {chi2_const:.1f} / {dof} dof "
          f"= {chi2_const/dof:.2f}")
    print(f"  (>> 1 means the spread in s_V is REAL, not measurement noise)")
    excess = np.sqrt(max(s.var() - np.mean(es ** 2), 0.0))
    print(f"  intrinsic galaxy-to-galaxy sd in s_V = {excess:.4f}   "
          f"-> spans n in [{n_from_s(s_w-excess):.3f}, {n_from_s(s_w+excess):.3f}]")
    for lab, v in (("log10 L[3.6um]", np.log10(np.where(okL, L, np.nan))),
                   ("log10 R_disk", np.log10(np.clip(Rd, 1e-3, None))),
                   ("Hubble type T", np.array([k["T"] for k in keep], float))):
        m = np.isfinite(v)
        r = np.corrcoef(v[m], s[m])[0, 1]
        # permutation p
        null = np.array([np.corrcoef(RNG.permutation(v[m]), s[m])[0, 1]
                         for _ in range(2000)])
        p = np.mean(np.abs(null) >= abs(r))
        print(f"  corr(s_V, {lab:16s}) = {r:+.3f}   perm p = {p:.4f}   (N={m.sum()})")
        results.setdefault("corr", {})[lab] = dict(r=float(r), p=float(p),
                                                   N=int(m.sum()))

    hdr("PART C -- Upsilon dependence of an estimator that contains no Upsilon")
    print("""  Upsilon touches this estimator only through the window-selection cuts.
  Registered prediction (same as the RAR-fit script): n from this route is far more
  Upsilon-stable than gamma was on 08-14 ([0.27, 0.96] over ups 0.4-0.6).""")
    print(f"\n  {'ups_d':>6} | {'N':>4} | {'s_V':>9} {'boot sd':>9} | {'n':>8}")
    print("  " + "-" * 48)
    rows = []
    for ud in (0.30, 0.40, 0.50, 0.60, 0.70, 0.80):
        k2 = run(up_disk=ud, up_bul=min(1.4 * ud, 1.0), verbose=False)
        s2 = np.array([q["s"] for q in k2]); e2 = np.array([q["es"] for q in k2])
        w2 = 1 / e2 ** 2
        sw2 = (w2 * s2).sum() / w2.sum()
        b2 = np.array([np.average(s2[i], weights=w2[i]) for i in
                       RNG.integers(0, len(s2), size=(600, len(s2)))])
        print(f"  {ud:6.2f} | {len(s2):4d} | {sw2:+9.4f} {b2.std():9.4f} | "
              f"{n_from_s(sw2):8.4f}")
        rows.append(dict(ups=ud, N=len(s2), s=float(sw2), n=float(n_from_s(sw2))))
    ns = [r["n"] for r in rows]
    print(f"\n  n span across the Upsilon band: {max(ns)-min(ns):.4f} "
          f"({100*(max(ns)-min(ns))/np.mean(ns):.1f}% of mean)")
    results["upsilon"] = rows

    hdr("PART D -- robustness of the window definition (the cuts ARE the assumption)")
    print(f"  {'deep_f':>7} {'tol':>6} | {'N':>4} | {'s_V':>9} | {'n':>8}")
    print("  " + "-" * 44)
    rob = []
    for df in (1.0, 2.0, 3.0, 5.0, 10.0):
        for tol in (0.05, 0.10, 0.20):
            k2 = run(deep_f=df, tol=tol, verbose=False)
            if len(k2) < 15:
                print(f"  {df:7.1f} {tol:6.2f} | {len(k2):4d} | "
                      f"{'--':>9} | {'--':>8}   (too few)")
                continue
            s2 = np.array([q["s"] for q in k2]); e2 = np.array([q["es"] for q in k2])
            w2 = 1 / e2 ** 2
            sw2 = (w2 * s2).sum() / w2.sum()
            print(f"  {df:7.1f} {tol:6.2f} | {len(k2):4d} | {sw2:+9.4f} | "
                  f"{n_from_s(sw2):8.4f}")
            rob.append(dict(deep_f=df, tol=tol, N=len(k2), s=float(sw2),
                            n=float(n_from_s(sw2))))
    nr = [r["n"] for r in rob]
    print(f"\n  n range across 15 window definitions: "
          f"[{min(nr):.3f}, {max(nr):.3f}]")
    results["window_robustness"] = rob

    hdr("PART E -- what SPARC itself says: does 'flat' mean flat?")
    print("""  Lelli+2016 assign V_flat only where the outer curve is flat by their criterion.
  If the fitted n implies a real outer decline, SPARC's own flatness classification
  is the cheapest independent cross-check on it.""")
    for lab, thr in (("|s_V| < 0.02", 0.02), ("|s_V| < 0.05", 0.05),
                     ("|s_V| < 0.10", 0.10)):
        print(f"  fraction of galaxies with {lab:14s}: "
              f"{np.mean(np.abs(s) < thr):.3f}")
    print(f"  fraction with s_V < 0 (declining): {np.mean(s < 0):.3f}")
    print(f"  sign test vs 50/50: N_neg={int((s<0).sum())} of {len(s)}")
    results["flatness"] = dict(frac_neg=float(np.mean(s < 0)),
                               frac_lt002=float(np.mean(np.abs(s) < 0.02)))

    out = os.path.join(os.path.dirname(os.path.abspath(__file__)),
                       "regulator_exponent_outer_slope_output.json")
    with open(out, "w") as f:
        json.dump(results, f, indent=2)
    print(f"\n\n[json written: {out}]")


if __name__ == "__main__":
    main()
