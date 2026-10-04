#!/usr/bin/env python3
"""
The no-CDM boost cap 1/Omega_b = 20.3 against the published KiDS-1000 lensing-RAR bins
(Brouwer et al. 2021, A&A 650, A113). Explorer 2026-10-04.
Pre-registration: lensing_cap_on_kids_bins_PREREG.md (commit e3461c1, before the data were unpacked).

Data: https://kids.strw.leidenuniv.nl/sci_data/brouwer2021_rar.tar, unpacked to DATA (below).
g_obs = 4 G ESD_t / bias (B21 Eq. 7 / README); covariance / bias (README).

Cap model: g_obs <= B_max * f * g_bar_file. A bin excludes the cap if
z_i = (g_obs_i - B_max f_i g_bar_i) / sigma_i > z_crit, z_crit = Phi^-1(1 - 0.05/N) (Bonferroni).

Treatments: (a) f = 1; (b) the release's own hot-gas file (B21 Fig. 4) plus flat f = 2, 5;
(c) f_c = f_b M200(M_gal) / M_gal, Moster+2013 z=0 SHMR inverted at each mass bin's mean M_gal.
Non-registered robustness rows are labelled [not registered].
"""
import os
import sys
import numpy as np
from scipy.stats import norm
from scipy.optimize import brentq

DATA = sys.argv[1] if len(sys.argv) > 1 else "/tmp/b21"
G_PC = 4.52e-30          # pc^3 / (Msun s^2), README
PC_M = 3.086e16
OB, OM = 0.0493, 0.315
FB = OB / OM
CAPS = {"1/Om": 1 / OM, "(Om-Ob)/Ob": (OM - OB) / OB, "Om/Ob": OM / OB, "1/Ob": 1 / OB}
LOG_MGAL = [10.14, 10.57, 10.78, 10.96]   # B21 sec. 5.5, mean stars+cold gas per mass bin (h70^-2 Msun)


def load_profile(name):
    d = np.loadtxt(os.path.join(DATA, name))
    gbar, esd, err, bias = d[:, 0], d[:, 1], d[:, 3], d[:, 4]
    k = 4 * G_PC * PC_M
    return gbar, k * esd / bias, k * err / bias


def load_cov(name, nbins_obs, nr):
    d = np.loadtxt(os.path.join(DATA, name))
    k = 4 * G_PC * PC_M
    mvals = np.unique(d[:, 0])
    rvals = np.unique(d[:, 2])
    assert len(mvals) == nbins_obs and len(rvals) == nr, (len(mvals), len(rvals))
    C = np.zeros((nbins_obs * nr, nbins_obs * nr))
    for row in d:
        m = np.searchsorted(mvals, row[0]); n = np.searchsorted(mvals, row[1])
        i = np.searchsorted(rvals, row[2]); j = np.searchsorted(rvals, row[3])
        C[m * nr + i, n * nr + j] = row[4] / row[6] * k * k
    return C


def shmr_moster13(mh):
    N, M1, b, g = 0.0351, 10 ** 11.590, 1.376, 0.608
    x = mh / M1
    return 2 * N * mh / (x ** -b + x ** g)


def m200_from_mstar(ms):
    return 10 ** brentq(lambda lm: np.log10(shmr_moster13(10 ** lm)) - np.log10(ms), 9, 16)


def cap_test(gbar, gobs, C, f, cap, extra_dex=0.0, mask=None):
    """Return per-bin z, Bonferroni z_crit, smallest allowed cap, GLS R-hat +- sigma (g_bar<1e-13)."""
    sig = np.sqrt(np.diag(C))
    if extra_dex:
        # B21 sec 4.4 add 0.1 dex to every RAR error bar (ESD -> RAR conversion); add in quadrature
        sig = np.sqrt(sig ** 2 + (gobs * (10 ** extra_dex - 1)) ** 2)
    m = np.ones_like(gbar, bool) if mask is None else mask
    N = m.sum()
    zc = norm.ppf(1 - 0.05 / N)
    z = (gobs - cap * f * gbar) / sig
    # smallest cap with no bin above zc: cap >= (gobs - zc*sig)/(f gbar) for every bin
    bmin = np.max(((gobs - zc * sig) / (f * gbar))[m])
    low = m & (gbar < 1e-13)
    R = gobs[low] / (f * gbar)[low] if np.ndim(f) else gobs[low] / (f * gbar[low])
    J = np.diag(1 / ((f * gbar)[low] if np.ndim(f) else f * gbar[low]))
    Cl = C[np.ix_(low, low)]
    if extra_dex:
        Cl = Cl + np.diag((gobs[low] * (10 ** extra_dex - 1)) ** 2)
    CR = J @ Cl @ J
    W = np.linalg.inv(CR)
    one = np.ones(low.sum())
    var = 1 / (one @ W @ one)
    Rhat = var * (one @ W @ R)
    return z, zc, bmin, Rhat, np.sqrt(var), m


def report(label, gbar, gobs, C, f, extra_dex=0.0, mask=None):
    print(f"\n=== {label} ===")
    z, zc, bmin, Rhat, sR, m = cap_test(gbar, gobs, C, f, CAPS["1/Ob"], extra_dex, mask)
    ff = f if np.ndim(f) else np.full_like(gbar, f)
    print(f"  bins used N = {m.sum()}, Bonferroni z_crit = {zc:.2f}")
    print("  g_bar        B_obs=g_obs/(f g_bar)   +-1sig    z vs 20.3")
    sig = np.sqrt(np.diag(C))
    for i in range(len(gbar)):
        if not m[i]:
            continue
        print(f"  {gbar[i]:.3e}   {gobs[i]/(ff[i]*gbar[i]):9.1f}          {sig[i]/(ff[i]*gbar[i]):7.1f}   {z[i]:6.2f}")
    verdicts = {}
    for k, cap in CAPS.items():
        zz = (gobs - cap * ff * gbar) / sig if not extra_dex else cap_test(gbar, gobs, C, f, cap, extra_dex, mask)[0]
        verdicts[k] = ("EXCLUDED" if np.any(zz[m] > zc) else "allowed", float(np.max(zz[m])))
    for k, (v, zm) in verdicts.items():
        print(f"  cap {k:11s} = {CAPS[k]:6.2f}: {v:8s} (max z = {zm:6.2f})")
    print(f"  smallest allowed cap (no bin > z_crit): {bmin:.1f}")
    print(f"  GLS R-hat over g_bar<1e-13: {Rhat:.1f} +- {sR:.1f}  -> 20.3 {'EXCLUDED' if Rhat - 2*sR > CAPS['1/Ob'] else 'allowed'} (joint, 2 sigma)")
    return verdicts["1/Ob"][0] == "EXCLUDED", bmin, Rhat, sR


PHI = (1 + 5 ** 0.5) / 2
A0_REG = 1.05e-10


def boost_registered(gtrue, cmin=OB):
    """Registered TEST-09/10 C_a at the no-CDM floor: B = 1/C, C = Cmin + (1-Cmin) x/(1+x), x=(g/a0)^(1/phi)."""
    x = (gtrue / A0_REG) ** (1 / PHI)
    return 1 / (cmin + (1 - cmin) * x / (1 + x))


def f_required(gbar, gobs, C, mask, extra_dex=0.0, law="cap"):
    """Smallest flat hidden-baryon factor f with no bin above the Bonferroni z_crit."""
    sig = np.sqrt(np.diag(C))
    if extra_dex:
        sig = np.sqrt(sig ** 2 + (gobs * (10 ** extra_dex - 1)) ** 2)
    zc = norm.ppf(1 - 0.05 / mask.sum())
    target = (gobs - zc * sig)[mask]
    gb = gbar[mask]
    out = []
    for t, g in zip(target, gb):
        if t <= 0:
            out.append(0.0); continue
        if law == "cap":
            out.append(t / (CAPS["1/Ob"] * g)); continue
        fn = lambda lf: boost_registered(10 ** lf * g) * 10 ** lf * g - t
        out.append(10 ** brentq(fn, -3, 4) if fn(-3) < 0 else 0.0)
    i = int(np.argmax(out))
    return out[i], gb[i]


def census_table(sets):
    print("\n\n######## HIDDEN-BARYON DEMAND f_req (flat, Bonferroni per bin) [not registered] ########")
    print("  dataset / range                               err      f_req(cap 20.3)  at g_bar    f_req(registered C_a, 1/Ob floor)  at g_bar")
    for lab, gbar, gobs, C, mask in sets:
        for xd in (0.0, 0.1):
            fc_, gc_ = f_required(gbar, gobs, C, mask, xd, "cap")
            fr_, gr_ = f_required(gbar, gobs, C, mask, xd, "reg")
            print(f"  {lab:44s} {'+0.1dex' if xd else 'stat   '}  {fc_:6.2f}        {gc_:.2e}     {fr_:6.2f}                         {gr_:.2e}")


def main():
    # identity control: g_obs conversion reproduces B21's stated amplitude scale
    gb, go, _ = load_profile("Fig-4-5-C1_RAR-KiDS-isolated_Nobins.txt")
    print("control: highest-g_bar bin g_obs/g_bar =", round(go[-1] / gb[-1], 2),
          "(MOND simple nu at that g_bar =", round(0.5 + np.sqrt(0.25 + 1.2e-10 / gb[-1]), 2), ")")
    nr = len(gb)
    C = load_cov("Fig-4-5-C1_RAR-KiDS-isolated_covmatrix.txt", 1, nr)
    _, _, e = load_profile("Fig-4-5-C1_RAR-KiDS-isolated_Nobins.txt")
    print("control: cov diagonal vs file error column, max |ratio-1| =",
          round(float(np.max(np.abs(np.sqrt(np.diag(C)) / e - 1))), 3))

    res = {}
    res["a"] = report("(a) KiDS isolated, f = 1 [PRIMARY]", gb, go, C, 1.0)
    gh, goh, _ = load_profile("Fig-4_RAR-KiDS-isolated_hotgas_Nobins.txt")
    Ch = load_cov("Fig-4_RAR-KiDS-isolated_hotgas_covmatrix.txt", 1, len(gh))
    res["b_hot"] = report("(b) KiDS isolated, B21 hot-gas g_bar (release file)", gh, goh, Ch, 1.0)
    res["b2"] = report("(b) KiDS isolated, flat f = 2", gb, go, C, 2.0)
    res["b5"] = report("(b) KiDS isolated, flat f = 5", gb, go, C, 5.0)

    # (c) mass bins
    print("\n--- (c) cosmic baryons of the halo, per mass bin (Moster+2013 inverted at mean M_gal) ---")
    fc = []
    for lm in LOG_MGAL:
        m200 = m200_from_mstar(10 ** lm)
        fc.append(FB * m200 / 10 ** lm)
        print(f"  log M_gal = {lm}: log M200 = {np.log10(m200):.2f}, f_c = f_b M200/M_gal = {fc[-1]:.2f}")
    files = [f"Fig-9_RAR-KiDS-isolated_Massbin-{i}.txt" for i in range(1, 5)]
    profs = [load_profile(fn) for fn in files]
    nrm = len(profs[0][0])
    Cm = load_cov("Fig-9_RAR-KiDS-isolated_Massbins_covmatrix.txt", 4, nrm)
    for i, (g1, o1, _) in enumerate(profs):
        Ci = Cm[i * nrm:(i + 1) * nrm, i * nrm:(i + 1) * nrm]
        res[f"a_m{i+1}"] = report(f"(a) mass bin {i+1}, f = 1", g1, o1, Ci, 1.0)
        res[f"c_m{i+1}"] = report(f"(c) mass bin {i+1}, f_c = {fc[i]:.2f}", g1, o1, Ci, fc[i])

    # robustness [not registered]
    print("\n\n######## ROBUSTNESS [not registered unless marked] ########")
    report("(a) drop lowest bin [registered sensitivity]", gb, go, C, 1.0, mask=gb > gb.min())
    report("(b) hot-gas, drop lowest bin [registered sensitivity]", gh, goh, Ch, 1.0, mask=gh > gh.min())
    report("(a) KiDS reliable range only, g_bar >= 1e-13 (B21 sec 5.1) [not registered]", gb, go, C, 1.0, mask=gb >= 1e-13)
    report("(a) + 0.1 dex conversion error (B21 sec 4.4) [not registered]", gb, go, C, 1.0, extra_dex=0.1)
    report("(b) hot-gas + 0.1 dex [not registered]", gh, goh, Ch, 1.0, extra_dex=0.1)
    gg, gog, _ = load_profile("Fig-4-C1_RAR-GAMA-isolated_Nobins.txt")
    Cg = load_cov("Fig-4-C1_RAR-GAMA-isolated_covmatrix.txt", 1, len(gg))
    report("GAMA isolated (spectroscopic isolation, reliable at low g_bar per B21), f = 1 [not registered]", gg, gog, Cg, 1.0)
    report("GAMA isolated, f = 5 [not registered]", gg, gog, Cg, 5.0)
    report("GAMA isolated, f = 1, +0.1 dex [not registered]", gg, gog, Cg, 1.0, extra_dex=0.1)
    for i, (g1, o1, _) in enumerate(profs):
        Ci = Cm[i * nrm:(i + 1) * nrm, i * nrm:(i + 1) * nrm]
        report(f"(c) mass bin {i+1}, f_c, +0.1 dex, g_bar>=1e-13 only [not registered]", g1, o1, Ci, fc[i],
               extra_dex=0.1, mask=g1 >= 1e-13)
    gd, god, _ = load_profile("Fig-10_RAR-KiDS-isolated-dwarfs_Nobins.txt")
    Cd = load_cov("Fig-10_RAR-KiDS-isolated-dwarfs_covmatrix.txt", 1, len(gd))
    report("isolated dwarfs (Fig 10), f = 1 [not registered]", gd, god, Cd, 1.0)

    census_table([
        ("KiDS isolated, g_bar>=1e-13 (B21 reliable)", gb, go, C, gb >= 1e-13),
        ("KiDS isolated, all bins", gb, go, C, gb > 0),
        ("KiDS hot-gas file, g_bar>=1e-13", gh, goh, Ch, gh >= 1e-13),
        ("GAMA isolated, all bins", gg, gog, Cg, gg > 0),
        ("KiDS isolated dwarfs, all bins", gd, god, Cd, gd > 0),
    ] + [(f"KiDS mass bin {i+1}, g_bar>=1e-13", p[0], p[1], Cm[i*nrm:(i+1)*nrm, i*nrm:(i+1)*nrm], p[0] >= 1e-13)
         for i, p in enumerate(profs)])
    print("  f_c (all cosmic baryons of the halo, Moster+13) per mass bin:", [round(x, 2) for x in fc])
    print("  registered C_a at 1/Ob floor, B at g_bar = 1e-13, 1e-14, 1e-15:",
          [round(float(boost_registered(g)), 1) for g in (1e-13, 1e-14, 1e-15)])


    print("\n\n######## VERDICTS (registered) ########")
    p1 = res["a"][0]
    p2 = res["b5"][0]
    p3 = not any(res[f"c_m{i}"][0] for i in range(1, 5))
    print(f"P1 (a: 20.3 excluded):                      {'HELD' if p1 else 'FAILED'}")
    print(f"P2 (b, f=5: 20.3 excluded in >=1 bin):       {'HELD' if p2 else 'FAILED'}")
    print(f"   (b, B21 hot-gas file: 20.3 excluded):      {res['b_hot'][0]}")
    print(f"P3 (c: 20.3 NOT excluded in any mass bin):   {'HELD' if p3 else 'FAILED'}")


if __name__ == "__main__":
    main()
