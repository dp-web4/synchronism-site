#!/usr/bin/env python3
"""TEST-09 paired galaxy bootstrap of dn = n_obs - n_pred. Explorer 2026-11-05.
Pre-registered: test09_paired_bootstrap_delta_n_PREREG.md (committed c9ff6ab before this file existed).
Reuses maintainer/scripts/which_C_carries_the_floor.py (sample, C_a) and T9 (fitter, V_flat estimator)."""
import os, sys
import numpy as np

HERE = os.path.dirname(os.path.abspath(__file__))
SITE = os.path.normpath(os.path.join(HERE, "..", "..", ".."))
sys.path.insert(0, os.path.join(SITE, "maintainer", "scripts"))
import which_C_carries_the_floor as W  # noqa: E402
T9 = W.T9
OM, OB = W.OM, W.OMEGA_B
CEIL = [("1/Om", 1 / OM), ("(Om-Ob)/Ob", (OM - OB) / OB), ("Om/Ob", OM / OB)]


def slope(logM, logV):
    a, _ = np.polyfit(logM, logV, 1)
    return 1.0 / a


def pred_logV(rows, C_min):
    out = []
    for r in rows:
        g = r["g_bar"] / W.C_a(r["g_bar"], C_min)
        v = np.sqrt(g * (r["R"] * W.KPC)) / W.KMS
        out.append(np.log10(T9.v_flat_estimator(r["R"], v)))
    return np.array(out)


def paired(logM, lo, lp, B=4000, seed=20261105):
    rng = np.random.default_rng(seed)
    n = len(logM)
    no, npd = np.empty(B), np.empty(B)
    for b in range(B):
        s = rng.integers(0, n, n)
        no[b], npd[b] = slope(logM[s], lo[s]), slope(logM[s], lp[s])
    return no, npd


def report(tag, logM, lo, lp):
    n_o, n_p = slope(logM, lo), slope(logM, lp)
    d = n_o - n_p
    bo, bp = paired(logM, lo, lp)
    bd = bo - bp
    s_o, s_p, s_d = bo.std(), bp.std(), bd.std()
    rho = np.corrcoef(bo, bp)[0, 1]
    quad = np.hypot(s_o, s_p)
    print(f"  {tag:<12} n_obs {n_o:.3f}±{s_o:.3f}  n_pred {n_p:.3f}±{s_p:.3f}  dn {d:.3f}  "
          f"rho {rho:+.3f}  sig_paired {s_d:.4f}  sig_quad {quad:.4f}  "
          f"S1 {d/s_d:.2f} (quad {d/quad:.2f})  S2 {(abs(d)-0.3)/s_d:+.2f}  "
          f"P(|dn*|<=0.3) {np.mean(np.abs(bd) <= 0.3):.3f}  "
          f"dn* 2.5/97.5% [{np.percentile(bd,2.5):.3f},{np.percentile(bd,97.5):.3f}]")
    return dict(d=d, sd=s_d, rho=rho, S1=d / s_d, S2=(abs(d) - 0.3) / s_d, P=np.mean(np.abs(bd) <= 0.3))


def main():
    rows = W.sample()
    logM = np.array([np.log10(r["M"]) for r in rows])
    lo_cat = np.log10(np.array([r["Vflat_cat"] for r in rows]))
    print(f"N = {len(rows)}")

    print("\nIDENTITY CONTROL (unpaired, seed 12345, as published)")
    n0, s0, _ = T9.fit_btfr(logM, lo_cat)
    ok = abs(n0 - 3.75) < 0.01 and abs(s0 - 0.10) < 0.01
    print(f"  obs  {n0:.3f} ± {s0:.3f}  (target 3.75 ± 0.10)")
    targets = [(3.35, 0.07), (3.46, 0.06), (3.49, 0.06)]
    LP = {}
    for (tag, Bm), (tn, ts) in zip(CEIL, targets):
        lp = pred_logV(rows, 1 / Bm)
        assert np.all(np.isfinite(lp))
        LP[tag] = lp
        n1, s1, _ = T9.fit_btfr(logM, lp)
        ok &= abs(n1 - tn) < 0.01 and abs(s1 - ts) < 0.01
        print(f"  {tag:<12} {n1:.3f} ± {s1:.3f}  (target {tn} ± {ts})")
    print(f"  identity control {'PASSES' if ok else 'FAILS -> RUN VOID'}")
    if not ok:
        return

    print("\nPAIRED BOOTSTRAP (B = 4000, seed 20261105), catalogue V_flat")
    res = {tag: report(tag, logM, lo_cat, LP[tag]) for tag, _ in CEIL}

    print("\nMETHOD CONTROL: observed V_flat = outer-3 mean of V_obs (07-18 finding: 0.44 ± 0.12)")
    lo3 = np.log10(np.array([T9.v_flat_estimator(r["R"], r["Vobs"]) for r in rows]))
    report("1/Om outer3", logM, lo3, LP["1/Om"])

    print("\nDECOMPOSITION: why is rho what it is?  (pred V_flat vs obs V_flat, per galaxy)")
    r_v = np.corrcoef(lo_cat, LP["1/Om"])[0, 1]
    res_o = lo_cat - np.polyval(np.polyfit(logM, lo_cat, 1), logM)
    res_p = LP["1/Om"] - np.polyval(np.polyfit(logM, LP["1/Om"], 1), logM)
    print(f"  corr(logV_obs, logV_pred) = {r_v:.3f};  corr of BTFR residuals = {np.corrcoef(res_o, res_p)[0,1]:+.3f}")
    print(f"  residual rms: obs {res_o.std():.4f} dex, pred {res_p.std():.4f} dex")

    print("\nVERDICTS (pre-registered rules)")
    r1 = res["1/Om"]
    print(f"  P1 rho>0 and <0.4: {'HELD' if 0 < r1['rho'] < 0.4 else 'FAILED'} (rho {r1['rho']:+.3f})")
    print(f"  P2 sig in [0.095,0.125] and S1 in [3.2,4.3]: "
          f"{'HELD' if 0.095 <= r1['sd'] <= 0.125 and 3.2 <= r1['S1'] <= 4.3 else 'FAILED'}")
    print(f"  P3 S2(1/Om) < 2: {'HELD' if r1['S2'] < 2 else 'FAILED -> ledger 2sigma-rule delta is WRONG'}")
    order = res["1/Om"]["S1"] > res["(Om-Ob)/Ob"]["S1"] > res["Om/Ob"]["S1"]
    print(f"  P4 order kept and all S1 > 2: {'HELD' if order and min(v['S1'] for v in res.values()) > 2 else 'FAILED'}")
    print(f"  P5 P(|dn*|<=0.3) in [0.10,0.25]: {'HELD' if 0.10 <= r1['P'] <= 0.25 else 'FAILED'} ({r1['P']:.3f})")


if __name__ == "__main__":
    main()
