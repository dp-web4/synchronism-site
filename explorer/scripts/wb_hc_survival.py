#!/usr/bin/env python3
"""Arm B outputs. (1) control against the published Pittordis/Boufourou triple oracles; (2) what f survives each cut sequence,
for S1-like (d 10-150 pc, bright) stars; (3) kick distribution; (4) DR3 vs DR4 baseline; (5) q-shape sensitivity."""
import numpy as np
import wb_hidden_companions as H

rng = np.random.default_rng(1109)
N = 300000


def pop(dmax=150.0, n=N, M=None):
    d = dmax * rng.uniform(0.02, 1, n) ** (1 / 2.5)                      # roughly volume-limited, flattened
    Mp = rng.uniform(0.5, 1.2, n) if M is None else M
    Gabs = 4.8 + 10 * np.log10(1.0 / Mp)                                  # L~M^4, rough
    G = Gabs + 5 * np.log10(d / 10)
    return Mp, d, G


def pct(x):
    return "%5.1f%%" % (100 * x)


def summarise(label, o, k, F, per="star"):
    surv = k.mean()
    # per system: two components, each with prob F of a companion; pure systems pass RUWE with plain probability
    pure = (o["ruwe_plain"] < 1.25).mean()
    p_pair_comp = 2 * F * (1 - F) * surv * pure + F * F * surv * surv     # at least one companion and surviving
    p_pair_pure = (1 - F) ** 2 * pure * pure
    f = p_pair_comp / (p_pair_comp + p_pair_pure)
    kick = np.hypot(o["k_pm"][:, 0], o["k_pm"][:, 1])[k]
    k3 = np.sqrt(kick**2 + o["rv0"][k] ** 2)
    print("%-44s surv %s  f(F=%.2f) %.3f | sky kick med %5.0f [16-84: %5.0f, %6.0f] m/s; 3D med %6.0f; P(sky>100)=%.2f P(>500)=%.2f P(>2000)=%.2f | a med %4.0f AU [16-84 %4.0f, %5.0f]; q med %.2f" % (
        label, pct(surv), F, f, np.median(kick), *np.percentile(kick, [16, 84]), np.median(k3), (kick > 100).mean(), (kick > 500).mean(), (kick > 2000).mean(), np.median(o["a"][k]), *np.percentile(o["a"][k], [16, 84]), np.median(o["q"][k])))
    return f


print("=== 1. CONTROL. Published (Pittordis+25 via Boufourou v1 text, not independently re-read): triple survival 40.5%, RUWE rejecting ~37%; triple median v~ 0.87 to 1.62 over eight separation bins.")
Mp, d, G = pop(dmax=250.0)
s = 10 ** rng.uniform(np.log10(0.2), np.log10(30), N)
o = H.forward(rng, Mp, d, G, q_mode="flat02", s_kau=s)
for rm in (1.2, 1.25, 1.4):
    k, fl = H.cuts(o, ruwe_max=rm, ipd=False, cmd=0.4)
    print("  ruwe<%.2f: RUWE alone rejects %s; survive RUWE+resolved+CMD %s" % (rm, pct(1 - fl["RUWE"].mean()), pct(k.mean())))
k, fl = H.cuts(o, ruwe_max=1.2, ipd=True, cmd=0.4)
# median v~ of the surviving triples by s, with a Kepler outer orbit
import wb_real_vs_mock_2d as R
ux, uy = R.orbit_vec(rng, np.minimum(rng.uniform(0, 1, N) ** (1 / 2.3), 0.98))
vN = np.sqrt(R.GM_KAU * (Mp + 0.7) / s)
mt = np.sqrt((o["Mt"] + 0.7) / (Mp + 0.7))
vx = ux * mt + o["k_pm"][:, 0] / vN
vy = uy * mt + o["k_pm"][:, 1] / vN
vt = np.hypot(vx, vy)
edges = np.logspace(np.log10(0.2), np.log10(30), 9)
print("  median v~ of surviving triples by s bin [kau]:")
for lo, hi in zip(edges[:-1], edges[1:]):
    m = k & (s >= lo) & (s < hi)
    print("    %.2f-%.2f: all %.2f   within v~<2.5 %.2f" % (lo, hi, np.median(vt[m]), np.median(vt[m & (vt < 2.5)])))

print("\n=== 2. What survives, S1-like: d<150 pc, flat q 0.1-1, a median 40 AU sigma 1.5 dex, baseline 34 mo")
Mp, d, G = pop()
s = 10 ** rng.uniform(np.log10(1), np.log10(30), N)
o = H.forward(rng, Mp, d, G, s_kau=s, T2_mo=66.0)
seqs = [("RUWE<1.25 only", dict(ipd=False, cmd=None, resolve=False)),
        ("+ resolved", dict(ipd=False, cmd=None)),
        ("+ IPD", dict(cmd=None)),
        ("+ CMD 0.4 mag", dict()),
        ("+ CMD 0.25 mag", dict(cmd=0.25)),
        ("+ RV stable 100 m/s, 3-11 yr (21 of the 36)", dict(rv_stable=100.0)),
        ("+ RV stable 50 m/s", dict(rv_stable=50.0)),
        ("+ RV + speckle (10 of the 36)", dict(rv_stable=100.0, speckle=True)),
        ("+ speckle, no RV", dict(speckle=True))]
for F in (0.3,):
    for lb, kw in seqs:
        k, _ = H.cuts(o, **kw)
        summarise(lb, o, k, F)
print("\n  f among survivors vs F (per star), cut = RUWE+res+IPD+CMD / + RV 100 / + RV + speckle")
for F in (0.1, 0.2, 0.3, 0.45):
    fs = []
    for kw in (dict(), dict(rv_stable=100.0), dict(rv_stable=100.0, speckle=True)):
        k, _ = H.cuts(o, **kw)
        pure = (o["ruwe_plain"] < 1.25).mean()
        surv = k.mean()
        comp = 2 * F * (1 - F) * surv * pure + F * F * surv * surv
        fs.append(comp / (comp + (1 - F) ** 2 * pure**2))
    print("    F=%.2f  %.3f  %.3f  %.3f" % (F, *fs))

print("\n=== 3. Kick distribution against the 11-08 log-uniform 100-2000 m/s placeholder (quantiles of the sky kick after RUWE+res+IPD+CMD; log-uniform quartiles 211, 447, 946)")
k, _ = H.cuts(o)
kick = np.hypot(o["k_pm"][:, 0], o["k_pm"][:, 1])[k]
print("   quantiles 5,25,50,75,95: ", np.round(np.percentile(kick, [5, 25, 50, 75, 95])))
print("   a-range carrying survivors with sky kick 100-2000 m/s: ", np.round(np.percentile(o["a"][k][(kick > 100) & (kick < 2000)], [5, 25, 50, 75, 95])))
print("   fraction of survivors with kick<30 m/s (harmless): %.3f" % (kick < 30).mean())

print("\n=== 4. DR4 vetting: same systems, 66 months, Nep scaled. RUWE<1.25 at 66 mo; acceleration flag (delta chi2 of 7-par > 30); PM change between baselines > 5 sigma")
for lb, kw in (("no RV", dict()), ("+ RV stable 100", dict(rv_stable=100.0))):
    k34, _ = H.cuts(o, **kw)
    r66 = o["ruwe2"] < 1.25
    acc = o["acc22"] < 30
    dmu = np.hypot(o["dmu"][:, 0], o["dmu"][:, 1])
    dm = dmu < 5 * o["sig_mu2"]
    for lab, kk in (("34 mo", k34), ("66 mo RUWE", k34 & r66), ("66 mo RUWE+acc", k34 & r66 & acc), ("66 mo RUWE+acc+PM change", k34 & r66 & acc & dm)):
        kick = np.hypot(o["k_pm"][:, 0], o["k_pm"][:, 1])[kk]
        print("   %-16s %-26s surv %s  sky kick med %5.0f  a med %4.0f AU  frac with kick>100 m/s among all companions %.3f" % (lb, lab, pct(kk.mean()), np.median(kick), np.median(o["a"][kk]), ((np.hypot(o["k_pm"][:, 0], o["k_pm"][:, 1]) > 100) & kk).mean()))

print("\n=== 5. q shape sensitivity; cut = RUWE+res+IPD+CMD, then + RV stable")
print("   Chae MSC as quoted: P(q<0.3)=4.5%. flat 0.1-1: 22%. MD17 shape computed below.")
for qm in ("flat", "md17", "chae_msc"):
    o2 = H.forward(rng, Mp, d, G, s_kau=s, q_mode=qm)
    print("  q mode %-9s P(q<0.3)=%.3f P(q<0.15)=%.3f" % (qm, (o2["q"] < 0.3).mean(), (o2["q"] < 0.15).mean()))
    k, _ = H.cuts(o2)
    summarise("   no RV", o2, k, 0.3)
    k, _ = H.cuts(o2, rv_stable=100.0)
    summarise("   + RV stable", o2, k, 0.3)

print("\n=== 6. a-median sensitivity (K/M hosts have smaller a)")
for am in (10.0, 20.0, 40.0, 80.0):
    o2 = H.forward(rng, Mp, d, G, s_kau=s, a_med=am)
    k, _ = H.cuts(o2)
    summarise("   a_med %3.0f AU, no RV" % am, o2, k, 0.3)
    k, _ = H.cuts(o2, rv_stable=100.0)
    summarise("   a_med %3.0f AU, + RV" % am, o2, k, 0.3)
