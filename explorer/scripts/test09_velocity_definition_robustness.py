#!/usr/bin/env python3
"""
TEST-09 ROBUSTNESS RUN: does the BTFR kill survive under every defensible velocity definition?

Registered 2026-07-18 (Synchronism/Research/proposals/test09_velocity_definition_robustness_20260718.md).
Verdict rule FIXED BEFORE THIS RUN:
  - deviation |n_obs - n_sync| > 0.3 under ALL THREE registered definitions
      (V_flat, W_P20-class, V_max)  =>  kill stands, "definition-robust by execution"
  - deviation <= 0.3 under ANY of the three  =>  downgrade to "definition-dependent",
      front-page refutation count drops to 3 until resolved.

Method: identical to the 2026-07-14 execution (test09_btfr_bounded_boost_real_sparc.py) --
same SPARC data, same force laws, same quality cuts (Q<=2, Inc>30deg), same vertical
log-log fitter with bootstrap errors -- except the V_flat estimator is replaced, in turn,
by each velocity-definition estimator, applied IDENTICALLY to the observed, MOND, and
Synchronism rotation curves of the same galaxies. The adjudicated quantity is the
differential n_obs - n_pred under one consistent definition, not absolute slopes across
pipelines.

Estimators (each maps a rotation curve (R, V) -> one velocity):
  V_flat  : mean of outermost 3 points (the 07-14 estimator, reproduced here as baseline)
  V_max   : maximum of the sampled curve (Lelli+2019 definition v)
  W_P20/2 : half-width at 20% of peak of a SYNTHETIC global HI profile built from the curve
            (rings project to f(v) ~ 1/sqrt(V_i^2 - v^2); annulus flux weights ~ R dR,
            i.e. uniform HI surface density over the sampled extent; Gaussian broadening
            sigma = 10 km/s for gas turbulence, matching Lelli+2019's uncorrected widths).
            This is a PROXY for archival single-dish W_P20 -- SPARC has no HI profiles --
            but the same generator is applied to all three curves, so generator biases are
            common-mode in the differential. Sensitivity variants: sigma in {0, 10} km/s,
            weighting in {uniform, exp(-R/Rdisk)}.
  V_2.2, V_2Re : EXPLORATORY, outside the registered three (inner-disc definitions;
            Lelli+2019 call V_flat "most fundamental" and these the broadest/shallowest).

Observed-side anchors (Lelli+2019, MNRAS 484, 3267, Table 1, orthogonal ML):
  V_f 3.85+/-0.09 (N=123) | W_P20/2 3.75+/-0.08 (148) | W_M50/2 3.62+/-0.09 (125)
  V_max 3.52+/-0.07 (153) | V_2Re 3.14+/-0.08 (142)   | V_2.2 3.06+/-0.08 (148)
(Our vertical fitter gives slightly shallower slopes than their orthogonal ML -- 3.75 vs
3.85 on the same 123-galaxy V_flat sample -- a known fitter-family offset, common to all
three arms here.)
"""
import numpy as np

BASE = "/mnt/c/exe/projects/ai-agents/Synchronism/simulations/sparc_real_data/"
KPC = 3.0856775814913673e19
KMS = 1.0e3

UP_DISK, UP_BUL = 0.5, 0.7
OM = 0.315
PHI = (1.0 + 5.0 ** 0.5) / 2.0
A0_SYNC = 1.05e-10
A0_MOND = 1.20e-10

THRESHOLD = 0.3   # registered kill criterion, site commit 89825cf (2026-04-24)


# ---------------------------------------------------------------- force laws (unchanged)
def g_obs_sync(g_bar):
    x = (g_bar / A0_SYNC) ** (1.0 / PHI)
    C = OM + (1.0 - OM) * x / (1.0 + x)
    return g_bar / C


def g_obs_mond(g_bar):
    return g_bar / (1.0 - np.exp(-np.sqrt(g_bar / A0_MOND)))


# ---------------------------------------------------------------- data loading
def load_galaxy_table():
    """Whitespace-parsed SPARC Table 1 (byte header does not match this file's spacing).
    Cols: 0 name, 5 Inc, 7 L36, 9 Reff, 11 Rdisk, 13 MHI, 14 RHI, 15 Vflat, 16 e_Vflat, 17 Q."""
    out = {}
    with open(BASE + "SPARC_Lelli2016c.mrt") as f:
        for line in f:
            p = line.split()
            if len(p) < 18:
                continue
            try:
                out[p[0]] = dict(Inc=float(p[5]), L36=float(p[7]), Reff=float(p[9]),
                                 Rdisk=float(p[11]), MHI=float(p[13]), RHI=float(p[14]),
                                 Vflat=float(p[15]), Q=int(p[17]))
            except ValueError:
                continue
    return out


def load_mass_models():
    rows = {}
    with open(BASE + "MassModels_Lelli2016c.mrt") as f:
        for line in f:
            parts = line.split()
            if len(parts) != 10:
                continue
            try:
                vals = list(map(float, parts[1:]))
            except ValueError:
                continue
            D, R, Vobs, eVobs, Vgas, Vdisk, Vbul, SBd, SBb = vals
            rows.setdefault(parts[0], []).append((R, Vobs, eVobs, Vgas, Vdisk, Vbul))
    out = {}
    for gid, rr in rows.items():
        rr.sort()
        a = np.array(rr)
        out[gid] = dict(R=a[:, 0], Vobs=a[:, 1], eVobs=a[:, 2],
                        Vgas=a[:, 3], Vdisk=a[:, 4], Vbul=a[:, 5])
    return out


def v_bar(gal):
    vg, vd, vb = gal["Vgas"], gal["Vdisk"], gal["Vbul"]
    v2 = vg * np.abs(vg) + UP_DISK * vd ** 2 + UP_BUL * vb ** 2
    return np.sqrt(np.clip(v2, 0.0, None))


# ---------------------------------------------------------------- estimators
def est_vflat(R, V, meta):
    if len(R) < 3:
        return np.nan
    return float(np.mean(V[-3:]))


def est_vmax(R, V, meta):
    return float(np.max(V))


def est_vlast(R, V, meta):
    """Outermost measured point (V_out; used in some high-z / Ponomareva-class studies).
    Not one of the three registered definitions -- diagnostic."""
    return float(V[-1])


def _interp_at(R, V, r_target):
    """Linear interpolation on the sampled curve; NaN if target outside sampled range."""
    if r_target <= 0 or r_target > R[-1]:
        return np.nan
    return float(np.interp(r_target, R, V))


def est_v22(R, V, meta):
    return _interp_at(R, V, 2.2 * meta["Rdisk"])


def est_v2re(R, V, meta):
    return _interp_at(R, V, 2.0 * meta["Reff"])


def _profile(R, V, meta, sigma_kms, weighting):
    """Synthetic global HI profile from a rotation curve.

    Each sampled annulus is a ring whose (deprojected) line-of-sight velocity
    distribution is f(v) = 1/(pi sqrt(V_i^2 - v^2)) on |v| < V_i. Per-bin flux is
    computed analytically via arcsin differences (no singularity issues), weighted by
    annulus flux w_i, convolved with a Gaussian of width sigma."""
    dR = np.gradient(R)
    if weighting == "uniform":
        w = R * dR
    else:                                   # exponential HI disc, scale = Rdisk
        w = R * dR * np.exp(-R / max(meta["Rdisk"], 1e-3))
    vmax_ = float(np.max(V))
    span = vmax_ + 5.0 * sigma_kms + 5.0
    edges = np.linspace(-span, span, 4001)
    flux = np.zeros(len(edges) - 1)
    for Vi, wi in zip(V, w):
        if Vi <= 0 or wi <= 0:
            continue
        a = np.clip(edges / Vi, -1.0, 1.0)
        cdf = (np.arcsin(a) + np.pi / 2.0) / np.pi          # ring velocity CDF
        flux += wi * np.diff(cdf)
    if sigma_kms > 0:
        dv = edges[1] - edges[0]
        half = int(np.ceil(4 * sigma_kms / dv))
        kx = np.arange(-half, half + 1) * dv
        kern = np.exp(-0.5 * (kx / sigma_kms) ** 2)
        flux = np.convolve(flux, kern / kern.sum(), mode="same")
    centers = 0.5 * (edges[:-1] + edges[1:])
    return centers, flux


def make_wp20(sigma_kms=10.0, weighting="uniform"):
    """W_P20/2: half-width at 20% of PEAK flux (Lelli+2019 definition i)."""
    def est(R, V, meta):
        if len(R) < 3:
            return np.nan
        centers, flux = _profile(R, V, meta, sigma_kms, weighting)
        peak = flux.max()
        if peak <= 0:
            return np.nan
        above = np.where(flux >= 0.2 * peak)[0]
        return float((centers[above[-1]] - centers[above[0]]) / 2.0)
    return est


def make_wm50(sigma_kms=10.0, weighting="uniform"):
    """W_M50/2: half-width at 50% of the MEAN flux density (Lelli+2019 definition ii).
    Mean flux is taken over the emission window (bins above 1% of peak)."""
    def est(R, V, meta):
        if len(R) < 3:
            return np.nan
        centers, flux = _profile(R, V, meta, sigma_kms, weighting)
        peak = flux.max()
        if peak <= 0:
            return np.nan
        window = flux >= 0.01 * peak
        mean_flux = flux[window].mean()
        above = np.where(flux >= 0.5 * mean_flux)[0]
        if len(above) == 0:
            return np.nan
        return float((centers[above[-1]] - centers[above[0]]) / 2.0)
    return est


# ---------------------------------------------------------------- fitter (unchanged)
def fit_btfr(logM, logV, n_boot=2000, seed=12345):
    a, b = np.polyfit(logM, logV, 1)
    rng = np.random.default_rng(seed)
    slopes = []
    idx = np.arange(len(logM))
    for _ in range(n_boot):
        s = rng.choice(idx, size=len(idx), replace=True)
        try:
            aa, _ = np.polyfit(logM[s], logV[s], 1)
            if aa > 1e-6:
                slopes.append(1.0 / aa)
        except Exception:
            pass
    return 1.0 / a, float(np.std(np.array(slopes)))


# ---------------------------------------------------------------- assembly
def build_curves():
    """Per-galaxy observed/MOND/Synchronism curves + baryonic mass, after base cuts
    (Q<=2, Inc>30). The V_flat>0 availability flag is kept as metadata, not a base cut."""
    tbl, mm = load_galaxy_table(), load_mass_models()
    gals = []
    for name, t in tbl.items():
        if name not in mm or t["Q"] > 2 or t["Inc"] < 30.0 or t["L36"] <= 0:
            continue
        gal = mm[name]
        R, Vb = gal["R"], v_bar(gal)
        ok = (R > 0) & np.isfinite(Vb) & (Vb > 0)
        R, Vb, Vobs = R[ok], Vb[ok], gal["Vobs"][ok]
        if len(R) < 3:
            continue
        r_m = R * KPC
        g_bar = (Vb * KMS) ** 2 / r_m
        m_bar = (UP_DISK * t["L36"] + 1.33 * t["MHI"]) * 1e9
        if m_bar <= 0:
            continue
        gals.append(dict(
            name=name, M=m_bar, R=R,
            V=dict(obs=Vobs,
                   mond=np.sqrt(g_obs_mond(g_bar) * r_m) / KMS,
                   sync=np.sqrt(g_obs_sync(g_bar) * r_m) / KMS),
            meta=dict(Rdisk=t["Rdisk"], Reff=t["Reff"], has_vflat=t["Vflat"] > 0),
        ))
    return gals


def run_definition(gals, est, fixed_sample, n_boot=2000, seed=12345):
    """Apply one estimator to all three arms; keep galaxies where it is finite on all
    three (coverage is a property of the shared R array, so this rarely differs by arm).

    The deviation |n_obs - n_sync| gets a PAIRED bootstrap: both slopes are refit on the
    same galaxy resample, so the correlation between the two arms (same galaxies, same
    masses) is retained in the error of the differential."""
    rows = []
    for g in gals:
        if fixed_sample and not g["meta"]["has_vflat"]:
            continue
        v = {arm: est(g["R"], g["V"][arm], g["meta"]) for arm in ("obs", "mond", "sync")}
        if all(np.isfinite(x) and x > 0 for x in v.values()):
            rows.append((g["M"], v))
    logM = np.log10(np.array([m for m, _ in rows]))
    logV = {arm: np.log10(np.array([v[arm] for _, v in rows]))
            for arm in ("obs", "mond", "sync")}
    out = {"N": len(rows)}
    for arm in ("obs", "mond", "sync"):
        out[arm] = fit_btfr(logM, logV[arm])
    out["dev_sync"] = abs(out["obs"][0] - out["sync"][0])
    out["dev_mond"] = abs(out["obs"][0] - out["mond"][0])

    rng = np.random.default_rng(seed)
    idx = np.arange(len(logM))
    devs = []
    for _ in range(n_boot):
        s = rng.choice(idx, size=len(idx), replace=True)
        try:
            ao, _ = np.polyfit(logM[s], logV["obs"][s], 1)
            as_, _ = np.polyfit(logM[s], logV["sync"][s], 1)
            if ao > 1e-6 and as_ > 1e-6:
                devs.append(abs(1.0 / ao - 1.0 / as_))
        except Exception:
            pass
    devs = np.array(devs)
    out["dev_sd"] = float(np.std(devs))
    out["p_under"] = float(np.mean(devs <= THRESHOLD))   # P(deviation <= 0.3), paired
    return out


def main():
    gals = build_curves()
    print("=" * 88)
    print("TEST-09 VELOCITY-DEFINITION ROBUSTNESS -- registered 2026-07-18, threshold 0.3 fixed 04-24")
    print("=" * 88)
    print(f"  Base sample after Q<=2, Inc>30, L36>0 cuts: {len(gals)} galaxies "
          f"({sum(g['meta']['has_vflat'] for g in gals)} with measured V_flat)\n")

    # The three REGISTERED definitions. Sample scope follows each definition's own
    # availability (Lelli+2019): V_flat exists only where the flatness criterion holds
    # (their N=123); W_P20 and V_max cover the full quality-cut sample. Applying the
    # outer-3 estimator to non-flat curves is NOT the V_flat definition (Lelli+2019
    # 3.2: including rising curves "introduces severe systematics on slope and
    # normalization") -- that combination is reported below as a diagnostic, not
    # adjudicated.
    registered = [
        ("V_flat (outer-3 mean) @ flat-sample", est_vflat, True, "3.85 +/- 0.09 (123)"),
        ("W_P20/2 (sig=10, uni) @ flat-sample", make_wp20(10.0, "uniform"), True, ""),
        ("W_P20/2 (sig=10, uni) @ full sample", make_wp20(10.0, "uniform"), False, "3.75 +/- 0.08 (148)"),
        ("V_max @ flat-sample", est_vmax, True, ""),
        ("V_max @ full sample", est_vmax, False, "3.52 +/- 0.07 (153)"),
    ]
    wp20_variants = []
    for fixed in (True, False):
        tag = "flat" if fixed else "full"
        for sig in (0.0, 10.0):
            for wgt in ("uniform", "exponential"):
                if sig == 10.0 and wgt == "uniform":
                    continue                       # primary generator, already above
                wp20_variants.append((f"W_P20 sig={sig:.0f}, {wgt[:3]} @ {tag}",
                                      make_wp20(sig, wgt), fixed))
    exploratory = [
        ("W_M50/2 (sig=10, uni) @ full", make_wm50(10.0, "uniform"), False, "3.62 +/- 0.09 (125)"),
        ("V_2.2 (2.2 Rdisk) @ flat", est_v22, True, ""),
        ("V_2.2 (2.2 Rdisk) @ full", est_v22, False, "3.06 +/- 0.08 (148)"),
        ("V_2Re (2 Reff) @ flat", est_v2re, True, ""),
        ("V_2Re (2 Reff) @ full", est_v2re, False, "3.14 +/- 0.08 (142)"),
        ("V_last (outermost point) @ flat", est_vlast, True, ""),
        ("V_last (outermost point) @ full", est_vlast, False, ""),
        ("outer-3 mean @ full [NOT a definition]", est_vflat, False, ""),
    ]

    def show(title, entries):
        print("  " + "-" * 86)
        print(f"  {title}")
        print("  " + "-" * 86)
        print(f"  {'definition':<40}{'N':>4} {'n_obs':>6} {'n_mond':>7} {'n_sync':>7}"
              f"  {'|obs-sync|':>10} {'P(<=0.3)':>9}  verdict    Lelli+19 obs")
        results = []
        for entry in entries:
            name, est, fixed = entry[0], entry[1], entry[2]
            anchor = entry[3] if len(entry) > 3 else ""
            r = run_definition(gals, est, fixed_sample=fixed)
            verdict = "FIRES" if r["dev_sync"] > THRESHOLD else "UNDER 0.3"
            print(f"  {name:<40}{r['N']:>4} {r['obs'][0]:>6.2f} {r['mond'][0]:>7.2f}"
                  f" {r['sync'][0]:>7.2f}  {r['dev_sync']:>5.2f}+/-{r['dev_sd']:.2f}"
                  f" {r['p_under']:>9.3f}  {verdict:<9} {anchor}")
            results.append((name, r))
        print()
        return results

    reg_results = show("REGISTERED DEFINITIONS (adjudicated under the pre-fixed rule)", registered)
    var_results = show("W_P20 GENERATOR VARIANTS (adjudicated -- generator choice is a free knob)",
                       wp20_variants)
    show("EXPLORATORY (outside the registered three -- reported, not adjudicated)", exploratory)

    adjudicated = reg_results + var_results
    worst = min(adjudicated, key=lambda t: t[1]["dev_sync"])
    print("  " + "=" * 86)
    print("  REGISTERED VERDICT (V_flat, W_P20 incl. all generator variants, V_max):")
    print(f"    runs adjudicated: {len(adjudicated)};  minimum deviation: "
          f"{worst[1]['dev_sync']:.2f} +/- {worst[1]['dev_sd']:.2f}  ({worst[0]});"
          f"  max P(dev<=0.3): {max(r['p_under'] for _, r in adjudicated):.3f}")
    if worst[1]["dev_sync"] > THRESHOLD:
        print("    ALL adjudicated runs exceed 0.3  =>  KILL STANDS: 'definition-robust by execution'")
    else:
        print("    At least one adjudicated run <= 0.3  =>  DOWNGRADE: 'definition-dependent';")
        print("    refutation count drops to 3 until resolved")
    print("  " + "=" * 86)


if __name__ == "__main__":
    main()
