#!/usr/bin/env python3
"""PREREG 1a4d020 (2026-11-17): which DR4 count separates "Newton + F~0.45-0.5 companions" from "boost + F~0.3" on S1?

For each S1 system j and hypothesis H: p_j(H) = P(DR4 flags the system | eta_obs, H).
Companion pool per system: wb_hidden_companions.forward (11-09 model), DR3 cuts as 11-09, then a DR4 flag from
(1) 66-mo 7-par acceleration dchi2 > 30 (noncentral chi2 noise), (2) 66-mo RUWE > 1.25, (3) PM change 34->66 mo > 5 sigma
(nested-data sigma, with noise), (4) Gaia epoch RV quadratic-vs-constant dchi2 > 30 (per-transit sigma_RV(G_RVS)).
argv: gaia_csv chae_csv [variant: base | sal2 | md17 | rvoff]  [ndraw]
"""
import sys
import numpy as np
import wb_estimators as W
import wb_hidden_companions as H

TWOPI = 2 * np.pi
AUYR = H.AUYR
VARIANT = sys.argv[3] if len(sys.argv) > 3 else "base"
NDRAW = int(sys.argv[4]) if len(sys.argv) > 4 else 200000
TOL = float(sys.argv[5]) if len(sys.argv) > 5 else 0.04       # ABC acceptance width on eta (noise is already simulated)
SAL = 2.0 if VARIANT == "sal2" else 1.0
QMODE = "md17" if VARIANT == "md17" else "flat"
RV_ON = VARIANT != "rvoff"
if SAL != 1.0:                                                  # scale sigma_AL everywhere: DR3 cuts and DR4 flags together
    _sal0 = H.sigma_al
    H.sigma_al = lambda G: SAL * _sal0(G)


def sigma_rv_transit(Grvs):
    """Per-transit Gaia RVS precision, km/s. Anchors: DR3 combined 1.3 km/s at G_RVS 12 and 6.4 at 14 with median 18 transits
    (Katz+2023) -> per transit ~5.5 and ~27; ~0.23 km/s combined near G_RVS 10 (one subsample) -> ~1.0; floor 0.113 combined."""
    return np.interp(Grvs, [5, 8, 10, 11, 12, 13, 14], [0.5, 0.6, 1.0, 2.2, 5.5, 12.0, 27.0])


def forward_dr4(rng, Mphot, d, G, s_kau, q_mode="flat", a_med=40.0, a_sig=1.5, T_mo=34.0, Nep=40, T2_mo=66.0):
    """H.forward verbatim in its random-number order (identity-checked below), then DR4 extras drawn afterwards."""
    st = rng.bit_generator.state
    o = H.forward(rng, Mphot, d, G, T_mo=T_mo, Nep=Nep, q_mode=q_mode, a_med=a_med, a_sig=a_sig, s_kau=s_kau, T2_mo=T2_mo)
    # re-derive the orbit elements by replaying forward's first draws (same generator state)
    r2 = np.random.default_rng()
    r2.bit_generator.state = st
    n = len(Mphot)
    q = H.draw_q(r2, n, q_mode)
    assert np.allclose(q, o["q"])
    ell = q**4
    M1 = Mphot / (1 + ell) ** 0.25
    Mt = M1 * (1 + q)
    a = 10 ** (np.log10(a_med) + a_sig * r2.standard_normal(n))
    u = r2.uniform(0, 1, n)
    e = np.minimum((-0.4 + np.sqrt(0.16 + 2.4 * u)) / 1.2, 0.97)
    a = np.clip(a, 0.01, 1e5)
    for _ in range(20):
        bad = a * (1 + e) > 1000 * s_kau / 5.0
        if not bad.any():
            break
        a[bad] = 10 ** (np.log10(a_med) + a_sig * r2.standard_normal(bad.sum()))
    a = np.minimum(a, 1000 * s_kau / 5.0 / (1 + e))
    assert np.allclose(a, o["a"]) and np.allclose(e, o["e"])
    P = np.sqrt(a**3 / Mt)
    ci = r2.uniform(-1, 1, n)
    si = np.sqrt(1 - ci**2)
    om, Om, M0 = r2.uniform(0, TWOPI, (3, n))
    co, so = np.cos(om), np.sin(om)
    fB = (ell - q) / ((1 + q) * (1 + ell))
    b = np.sqrt(1 - e**2)
    # Gaia epoch RV over T2 (LOS component z: A[2] = so*si, B[2] = co*si)
    Nrv = int(round(8 * 0.75 * T2_mo / 12.0))
    t = np.sort(rng.uniform(0, T2_mo / 12.0, (n, Nrv)), axis=1)
    Mn = M0[:, None] + TWOPI * t / P[:, None]
    E = H._kepler(Mn, e[:, None])
    ce, se = np.cos(E), np.sin(E)
    Edot = (TWOPI / P[:, None]) / (1 - e[:, None] * ce)
    VX, VY = -a[:, None] * se * Edot, a[:, None] * b[:, None] * ce * Edot
    vz = (so * si)[:, None] * VX + (co * si)[:, None] * VY
    rv = fB[:, None] * vz * AUYR / 1000.0                       # km/s, photocentre-weighted (as rv0 in forward)
    sig = sigma_rv_transit(G - 0.8)[:, None] * np.ones_like(rv)
    tc = t - t.mean(1, keepdims=True)
    # weighted LSQ: constant vs quadratic, per star
    w = 1 / sig**2

    def chi2_poly(deg):
        X = np.stack([tc**k for k in range(deg + 1)], axis=2)  # n, Nrv, deg+1
        XtW = X * w[:, :, None]
        A_ = np.einsum("nik,nil->nkl", XtW, X)
        bb = np.einsum("nik,ni->nk", XtW, rv)
        c = np.linalg.solve(A_, bb[:, :, None])[:, :, 0]
        r = rv - np.einsum("nik,nk->ni", X, c)
        return (w * r**2).sum(1)
    drv_sig = chi2_poly(0) - chi2_poly(2)                        # signal-only dchi2 (2 extra params)
    o["drv_gaia"] = rng.noncentral_chisquare(2, np.maximum(drv_sig, 1e-12)) if RV_ON else np.zeros(n)
    # astrometric flags with noise
    sal = H.sigma_al(G)
    o["acc_obs"] = rng.noncentral_chisquare(2, np.maximum(o["acc22"], 1e-12))
    N2 = int(Nep * T2_mo / T_mo)
    o["ruwe2_obs"] = o["ruwe2"]                                   # already includes per-epoch noise (forward)
    s34 = sal * np.sqrt(12.0 / Nep) / (T_mo / 12.0)
    s66 = sal * np.sqrt(12.0 / N2) / (T2_mo / 12.0)
    sd = np.sqrt(np.maximum(s34**2 - s66**2, 1e-12))
    dmu = o["dmu"] + sd[:, None] * rng.standard_normal((n, 2))
    o["pm_chg"] = np.hypot(dmu[:, 0], dmu[:, 1]) / sd
    o["flag_acc"] = o["acc_obs"] > 30
    o["flag_ruwe"] = o["ruwe2_obs"] > 1.25
    o["flag_pm"] = o["pm_chg"] > 5                                # |dPM| / sigma > 5 (2D; noise-only rate ~4e-6)
    o["flag_rv"] = o["drv_gaia"] > 30
    o["flag"] = o["flag_acc"] | o["flag_ruwe"] | o["flag_pm"] | o["flag_rv"]
    if VARIANT.startswith("rvcamp"):                           # ground RV campaign: new epochs 12 and 15 yr after the archival rv0 epoch
        thr = 30.0 if VARIANT == "rvcamp30" else 50.0
        tt = np.column_stack([o["t0"] + 12.0, o["t0"] + 15.0])
        _, vel = o["_state"](tt)
        rvn = fB[:, None] * vel[2] * AUYR
        o["flag_camp"] = np.abs(rvn - o["rv0"][:, None]).max(1) > thr
        o["flag"] = o["flag"] | o["flag_camp"]
    return o


def identity_check():
    rng1, rng2 = np.random.default_rng(5), np.random.default_rng(5)
    n = 2000
    Mp, d, G, s = np.full(n, 1.0), np.full(n, 80.0), np.full(n, 10.0), np.full(n, 6.0)
    o1 = H.forward(rng1, Mp, d, G, s_kau=s, T2_mo=66.0)
    o2 = forward_dr4(rng2, Mp, d, G, s)
    same = all(np.array_equal(o1[k], o2[k]) for k in ("q", "a", "e", "ruwe", "acc22", "k_pm", "rv0", "drv", "dmu"))
    print("IDENTITY: forward_dr4 reproduces H.forward on shared keys: %s" % same)
    return same


def main():
    D = sys.argv[1], sys.argv[2]
    S = W.load(D[0], D[1], "wb_chae_v4_tables.json", "v4")
    import csv
    rows = list(csv.DictReader(open(D[1])))
    ids = [r["chae_id"] for r in rows]
    for s in S:
        s["G"] = 4.8 + 10 * np.log10(1.0 / (0.5 * s["M"])) + 5 * np.log10(s["d"] / 10)
        s["vesc"] = np.sqrt(2 * W.GMSUN_KAU * s["M"] / s["s"])
    eta = np.array([np.linalg.norm(s["v_c"]) / s["vesc"] for s in S])
    eerr = np.full(len(S), TOL)
    print("variant %s  q %s  sigma_AL x%.1f  RV channel %s  ndraw %d  eta tolerance %.2f" % (VARIANT, QMODE, SAL, RV_ON, NDRAW, TOL))
    identity_check()

    rng = np.random.default_rng(1117)
    pools = []
    for j, s in enumerate(S):
        n = 30000
        o = forward_dr4(rng, np.full(n, 0.5 * s["M"]), np.full(n, s["d"]), np.full(n, s["G"]), np.full(n, s["s"]), q_mode=QMODE)
        rvm = rng.uniform(0, 1, n) < 21 / 36
        k0, _ = H.cuts(o)
        k1, _ = H.cuts(o, rv_stable=100.0)
        k = np.where(rvm, k1, k0)
        kv = np.column_stack([o["k_pm"][k, 0], o["k_pm"][k, 1], o["rv0"][k]])
        pools.append(dict(surv=k.mean(), pure=(o["ruwe_plain"] < 1.25).mean(), kv=kv, Mf=(o["Mt"][k] + 0.5 * s["M"]) / s["M"],
                          flag=o["flag"][k], fa=o["flag_acc"][k], fr=o["flag_ruwe"][k], fp=o["flag_pm"][k], fv=o["flag_rv"][k],
                          a=o["a"][k], kick=np.linalg.norm(kv, axis=1)))
    fl = np.array([p["flag"].mean() for p in pools])
    print("DR4 flag rate among DR3-surviving companions, per system: median %.2f [min %.2f max %.2f]" % (np.median(fl), fl.min(), fl.max()))
    ch = np.array([[p[c].mean() for c in ("fa", "fr", "fp", "fv")] for p in pools])
    only_rv = np.array([(p["fv"] & ~(p["fa"] | p["fr"] | p["fp"])).mean() / max(p["flag"].mean(), 1e-9) for p in pools])
    print("  channel rates (median over systems): acc %.2f  ruwe %.2f  pm-change %.2f  epoch-RV %.2f;  share of flags carried by RV alone: median %.2f" % (*np.median(ch, 0), np.median(only_rv)))
    for kk in (100, 300, 500):
        r = [p["flag"][p["kick"] > kk].mean() if (p["kick"] > kk).sum() > 20 else np.nan for p in pools]
        print("  flag rate among survivors with |kick| > %d m/s: median %.2f" % (kk, np.nanmedian(r)))

    def run(gam, F, eps, nd):
        r = np.random.default_rng(int(1000 * gam + 100 * F + 1e4 * eps))
        pj, pc = np.zeros(len(S)), np.zeros(len(S))
        for j, s in enumerate(S):
            p = pools[j]
            Z1 = 2 * F * (1 - F) * p["surv"] * p["pure"]
            Z2 = F * F * p["surv"] ** 2
            Z0 = (1 - F) ** 2 * p["pure"] ** 2
            f1, f2 = Z1 / (Z0 + Z1 + Z2), Z2 / (Z0 + Z1 + Z2)
            rr, v = W.kepler_unit(r, nd, 1.0)
            g = np.hypot(rr[:, 0], rr[:, 1])
            vv = v * np.sqrt(gam * W.GMSUN_KAU * s["M"] * np.exp(0.05 * r.standard_normal(nd)) * g / s["s"])[:, None]
            u = r.uniform(0, 1, nd)
            nc = (u < f1).astype(int) + 2 * (u >= 1 - f2)
            flag = np.zeros(nd, bool)
            m = len(p["kv"])
            for c in (1, 2):
                sel = nc >= c
                i = r.integers(0, m, sel.sum())
                if c == 1:
                    vv[sel] = vv[sel] * np.sqrt(p["Mf"][i])[:, None]
                vv[sel] += r.choice([-1.0, 1.0], sel.sum())[:, None] * p["kv"][i]
                flag[sel] |= p["flag"][i]
            nstar_clean = 2 - nc
            flag |= r.uniform(0, 1, nd) < 1 - (1 - eps) ** nstar_clean
            vv += np.array([s["sE"], s["sN"], s["rv_sig"]]) * r.standard_normal((nd, 3))
            es = np.linalg.norm(vv, axis=1) / s["vesc"]
            wgt = np.exp(-0.5 * ((es - eta[j]) / eerr[j]) ** 2)
            pj[j] = (wgt * flag).sum() / wgt.sum()
            pc[j] = (wgt * (nc > 0)).sum() / wgt.sum()
        return pj, pc

    def pbinom(p):
        dist = np.array([1.0])
        for x in p:
            dist = np.convolve(dist, [1 - x, x])
        return dist

    hyps = [("N F.45", 1.0, 0.45), ("N F.50", 1.0, 0.50), ("B g1.3 F.3", 1.3, 0.30), ("B g1.4 F.3", 1.4, 0.30)]
    if VARIANT == "chae":                                       # Chae v4 reading: gamma 1.60, contamination <~ 0.1
        hyps = [("N F.45", 1.0, 0.45), ("B g1.4 F.3", 1.4, 0.30), ("C g1.6 F.1", 1.6, 0.10), ("C g1.6 F.3", 1.6, 0.30)]
    hi = eta > 1.0
    mid = eta > 0.8
    lo = ~mid
    order = np.argsort(-eta)
    for eps in (0.01, 0.05):
        print("\n=== false-flag floor eps = %.2f per clean star" % eps)
        res = {}
        for lb, gam, F in hyps:
            res[lb] = run(gam, F, eps, NDRAW)
        print("  per system p_j = P(flag | eta_obs)  [and P(companion | eta_obs)]:")
        print("   id   eta  " + "  ".join("%-17s" % h[0] for h in hyps))
        for j in order[:11]:
            print("  %3s  %.2f  " % (ids[j], eta[j]) + "  ".join("%.2f [%.2f]       " % (res[h[0]][0][j], res[h[0]][1][j]) for h in hyps))
        def kl(a, b):
            a, b = np.clip(a, 1e-6, 1 - 1e-6), np.clip(b, 1e-6, 1 - 1e-6)
            return a * np.log(a / b) + (1 - a) * np.log((1 - a) / (1 - b))
        for hn, hb in ((("N F.45", "B g1.4 F.3"), ("B g1.4 F.3", "C g1.6 F.1")) if VARIANT == "chae" else (("N F.45", "B g1.4 F.3"), ("N F.50", "B g1.3 F.3"))):
            kf = kl(res[hn][0], res[hb][0])
            kc = kl(res[hn][1], res[hb][1])
            print("  expected information, %s vs %s (nats, truth = N): DR4 flags %.3f (eta>1: %.3f) | ideal census of companions %.3f (eta>1: %.3f)" % (hn, hb, kf.sum(), kf[hi].sum(), kc.sum(), kc[hi].sum()))
        print("  low-eta 25 mean p: " + "  ".join("%.3f" % res[h[0]][0][lo].mean() for h in hyps))
        for name, msk in (("T_hi (6, eta>1)", hi), ("T_mid (11, eta>0.8)", mid), ("T_lo (25)", lo), ("T_all (36)", np.ones(36, bool))):
            print("  %s" % name)
            dists = {h[0]: pbinom(res[h[0]][0][msk]) for h in hyps}
            for h in hyps:
                dd = dists[h[0]]
                print("    %-11s E %.2f  P(0) %.3f  P(>=2) %.3f  P(>=3) %.3f  dist %s" % (h[0], (np.arange(len(dd)) * dd).sum(), dd[0], dd[2:].sum(), dd[3:].sum(), np.round(dd[:8], 3)))
            # thresholds: Newton (F.45) vs boost (g1.4)
            for hn, hb in ((("N F.45", "B g1.4 F.3"), ("B g1.4 F.3", "C g1.6 F.1")) if VARIANT == "chae" else (("N F.45", "B g1.4 F.3"), ("N F.50", "B g1.3 F.3"))):
                dn, db = dists[hn], dists[hb]
                kN = next((k for k in range(len(db)) if db[k:].sum() <= 0.05), None)
                kB = next((k for k in range(len(dn) - 1, -1, -1) if dn[: k + 1].sum() <= 0.05), None)
                powN = dn[kN:].sum() if kN is not None else 0
                powB = db[: kB + 1].sum() if kB is not None else 0
                lr = np.log(np.maximum(dn, 1e-300) / np.maximum(db, 1e-300))
                med_abs = np.median(np.abs(np.repeat(lr, np.maximum((dn * 10000).astype(int), 0))))
                print("    %s vs %s: k_N = %s (P(T>=k_N|N) = %.2f), k_B = %s (P(T<=k_B|B) = %.2f); median |lnLR| under N %.2f" % (hn, hb, kN, powN, kB, powB, med_abs))


if __name__ == "__main__":
    main()
