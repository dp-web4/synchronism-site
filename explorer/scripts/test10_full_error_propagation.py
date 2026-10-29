#!/usr/bin/env python3
"""
TEST-10 at the permissive cap B_max = Om/Ob = 6.39, with SPARC distance, inclination, M/L (and gas) nuisances.

Registered in test10_full_error_propagation_PREREG.md (committed d38045c before this ran).

Scalings: V_obs(i') = V_obs sin i / sin i'; V_gas^2, V_disk^2, V_bul^2 proportional to D at fixed angle.
  => B = V_obs^2 / V_bar^2 proportional to 1/(D sin^2 i) at fixed Upsilon.

Statistic A: Monte Carlo of the outer-3 boost (TEST-10 script's statistic), P(B_out > 6.39).
Statistic B: profile chi^2 of the most permissive capped model (V_pred^2 <= B_max V_bar^2 at every radius, one-sided
             residuals over all radii) + Gaussian priors on D, i, log10 Ups (0.1 dex), optionally log10 s_gas (0.1 dex).
"""
import numpy as np

BASE = "/home/dp/ai-workspace/Synchronism/simulations/sparc_real_data/"
BMAX = 6.39
UPS0 = 0.5
SIG_LUPS = 0.1
SIG_LGAS = 0.1
RNG = np.random.default_rng(20261029)
NMC = 20000


def load_meta():
    out = {}
    with open(BASE + "SPARC_Lelli2016c.mrt") as f:
        for line in f:
            p = line.split()
            if len(p) < 18:
                continue
            try:
                out[p[0]] = dict(D=float(p[2]), eD=float(p[3]), fD=int(p[4]), inc=float(p[5]), einc=float(p[6]),
                                 l36=float(p[7]), mhi=float(p[13]), q=int(p[17]))
            except ValueError:
                continue
    return out


def load_mm():
    out = {}
    with open(BASE + "MassModels_Lelli2016c.mrt") as f:
        for line in f:
            p = line.split()
            if len(p) < 8:
                continue
            try:
                vals = [float(x) for x in p[2:8]]
            except ValueError:
                continue
            out.setdefault(p[0], []).append(vals)
    return {k: np.array(v)[np.argsort(np.array(v)[:, 0])] for k, v in out.items()}


def vbar2(vgas, vdisk, vbul, ups, sgas=1.0):
    return sgas * vgas * np.abs(vgas) + ups * vdisk ** 2 + 1.4 * ups * vbul ** 2


def stat_a(arr, m):
    o = arr[-3:]
    r, vobs, ev, vg, vd, vb = o.T
    w = 1 / ev ** 2
    w = w / w.sum()
    n = NMC
    V = vobs[None, :] + ev[None, :] * RNG.standard_normal((n, len(vobs)))
    D = np.maximum(m["D"] + m["eD"] * RNG.standard_normal(n), 0.2 * m["D"])
    inc = np.clip(m["inc"] + m["einc"] * RNG.standard_normal(n), 10, 90)
    ups = 10 ** (np.log10(UPS0) + SIG_LUPS * RNG.standard_normal(n))
    V = V * (np.sin(np.radians(m["inc"])) / np.sin(np.radians(inc)))[:, None]
    vb2 = vbar2(vg[None, :], vd[None, :], vb[None, :], ups[:, None]) * (D / m["D"])[:, None]
    B = (V ** 2 @ w) / (vb2 @ w)
    B0 = (vobs ** 2 @ w) / (vbar2(vg, vd, vb, UPS0) @ w)
    return B0, np.mean(B > BMAX), np.percentile(B, [2.3, 50, 97.7])


def stat_b(arr, m, gas):
    r, vobs, ev, vg, vd, vb = arr.T
    nD, nI, nU, nG = 41, 41, 17, (13 if gas else 1)
    dD = np.linspace(-4, 4, nD)
    di = np.linspace(-4, 4, nI)
    dU = np.linspace(-4, 4, nU)
    dG = np.linspace(-4, 4, nG) if gas else np.zeros(1)
    best = (np.inf, None)
    for g in dG:
        sg = 10 ** (SIG_LGAS * g)
        for u in dU:
            ups = 10 ** (np.log10(UPS0) + SIG_LUPS * u)
            vb2_0 = vbar2(vg, vd, vb, ups, sg)  # at D0
            D = np.maximum(m["D"] + m["eD"] * dD, 0.2 * m["D"])
            inc = np.clip(m["inc"] + m["einc"] * di, 10, 90)
            # (nD, nI, nk)
            vpred = np.sqrt(np.clip(BMAX * vb2_0[None, None, :] * (D / m["D"])[:, None, None], 0, None))
            vo = vobs[None, None, :] * (np.sin(np.radians(m["inc"])) / np.sin(np.radians(inc)))[None, :, None]
            res = np.clip(vo - vpred, 0, None) / ev
            chi = (res ** 2).sum(-1)
            # priors use the actual (clipped) values
            pD = ((D - m["D"]) / m["eD"]) ** 2
            pI = ((inc - m["inc"]) / m["einc"]) ** 2
            tot = chi + pD[:, None] + pI[None, :] + u ** 2 + g ** 2
            k = np.unravel_index(np.argmin(tot), tot.shape)
            if tot[k] < best[0]:
                best = (tot[k], dict(D=D[k[0]], inc=inc[k[1]], ups=ups, sg=sg, chi_data=chi[k]))
    return best


def gas_needed(arr, m):
    """Gas multiplier (D, i, Ups free under priors) to bring the profile chi^2 below 1 -- descriptive."""
    for lg in np.arange(0, 1.51, 0.01):
        sg = 10 ** lg
        arr2 = arr.copy()
        arr2[:, 3] = arr[:, 3] * np.sqrt(sg)  # vgas scaled so vgas|vgas| -> sg*...
        c, _ = stat_b(arr2, m, gas=False)
        if c < 1:
            return sg
    return np.inf


def main():
    meta, mm = load_meta(), load_mm()
    rows = []
    for name, arr in mm.items():
        m = meta.get(name)
        if m is None or m["q"] > 2 or m["inc"] < 30:
            continue
        o = arr[-3:]
        if not ((o[:, 1] > 0) & (o[:, 2] > 0)).all():
            o_ok = (o[:, 1] > 0) & (o[:, 2] > 0)
            if not o_ok.any():
                continue
        if (vbar2(o[:, 3], o[:, 4], o[:, 5], UPS0) <= 0).any():
            continue
        arr = arr[(arr[:, 2] > 0)]
        rows.append((name, arr, m))
    print(f"sample: {len(rows)} discs (Q<=2, i>30, outer-3 V_bar^2>0)   B_max = {BMAX}")

    res = []
    for name, arr, m in rows:
        B0, pA, q = stat_a(arr, m)
        res.append((name, arr, m, B0, pA, q))
    face = [r for r in res if r[3] > BMAX]
    print(f"face-value outer-3 exceeders at Ups=0.5: {len(face)}/{len(res)}\n")

    hdr = (f"{'galaxy':13s} {'D':>5s}±{'eD':<4s} fD {'i':>4s}±{'ei':<4s} {'B0':>6s} {'P_A':>6s} {'B 2.3/50/97.7%':>20s}"
           f" {'chi2B':>7s} {'chi2B+gas':>9s}  best(D,i,Ups,sg) w/ gas")
    print(hdr)
    survA = survB = survBg = robB = robBg = 0
    out_rows = []
    for name, arr, m, B0, pA, q in sorted(face, key=lambda t: -t[3]):
        cB, _ = stat_b(arr, m, gas=False)
        cBg, bg = stat_b(arr, m, gas=True)
        survA += pA >= 0.977
        survB += cB >= 4
        robB += cB >= 9
        survBg += cBg >= 4
        robBg += cBg >= 9
        out_rows.append((name, cB, cBg))
        print(f"{name:13s} {m['D']:5.2f}±{m['eD']:<4.2f} {m['fD']:2d} {m['inc']:4.0f}±{m['einc']:<4.0f} {B0:6.2f} {pA:6.3f}"
              f" {q[0]:6.2f}/{q[1]:6.2f}/{q[2]:6.2f} {cB:7.1f} {cBg:9.1f}  "
              f"({bg['D']:.2f}, {bg['inc']:.0f}, {bg['ups']:.2f}, {bg['sg']:.2f})")
    n = len(face)
    print(f"\nsurvive A (P>=0.977): {survA}/{n}")
    print(f"survive B (chi2>=4): {survB}/{n}   robust (>=9): {robB}/{n}")
    print(f"survive B+gas (chi2>=4): {survBg}/{n}   robust (>=9): {robBg}/{n}")

    # Non-exceeders at face value can still fail the all-radii statistic B (inner points); count them too.
    extra = 0
    extra_names = []
    for name, arr, m, B0, pA, q in res:
        if B0 > BMAX:
            continue
        c, _ = stat_b(arr, m, gas=True)
        if c >= 4:
            extra += 1
            extra_names.append((name, round(float(c), 1)))
    print(f"\nnon-exceeders (outer-3) that nonetheless fail B+gas at chi2>=4 (inner radii): {extra}: {extra_names}")

    print("\ngas multiplier needed for chi2<1 (D, i, Ups profiled under priors):")
    for name in ["NGC3741", "ESO444-G084"] + [r[0] for r in out_rows if r[2] >= 9 and r[0] not in ("NGC3741", "ESO444-G084")]:
        hit = [r for r in res if r[0] == name]
        if hit:
            _, arr, m, *_ = hit[0]
            print(f"  {name:13s} x{gas_needed(arr, m):.2f}")


if __name__ == "__main__":
    main()
