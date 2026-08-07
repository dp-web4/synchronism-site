#!/usr/bin/env python3
"""EFE sign under the three force-law readings + registrability/power of EFE = 0.

Topic: explorer/topics/efe-sign-convention-dependence.md (maintainer, 2026-08-07, P0)
Finding: explorer/findings/efe-sign-is-not-convention-dependent-the-blocker-is-a-category-error.md

PART A  - symbolic/numeric: does the FORCE-LAW fork (amplitude / division / multiplication)
          change the sign of the response to an external gravitational field g_ext?
PART B  - separate the two environmental channels: g_ext (EFE proper) vs rho_ext (ambient
          density effect).  Reproduce the 2026-08-04 "opposite sign" and show which channel
          it belongs to.
PART C  - registrability + POWER.  Matched-filter regression of the measured per-galaxy RAR
          offset on the MOND+EFE *predicted* offset built from each galaxy's own e_env and
          <x0>, controlling for ambient density.  Pre-declared verdict rule in the finding.

No new data.  Sources:
  - Chae et al. 2020 (ApJ 904,51) Table 2, erratum-corrected arXiv v2 tarball
    -> explorer/data/chae2020_ms_r2.tex   (in-repo)
  - TEST-08 registered per-galaxy run
    -> Synchronism/simulations/test08_per_galaxy_results.json
"""
import json
import re
import math

TEX = "/mnt/c/exe/projects/ai-agents/synchronism-site/explorer/data/chae2020_ms_r2.tex"
T08 = "/mnt/c/exe/projects/ai-agents/Synchronism/simulations/test08_per_galaxy_results.json"

GAMMA = 2.0          # site's stated gamma for the galaxy sector
RHO_CRIT = 653.0     # M_sun/pc^3 at V_flat = 150 km/s  (0.029 * V^2)


def C(rho, gamma=GAMMA, rho_crit=RHO_CRIT):
    return math.tanh(gamma * math.log(rho / rho_crit + 1.0))


# =====================================================================
# PART A - the force-law fork vs an external gravitational field
# =====================================================================
print("=" * 78)
print("PART A  -  EFE (response to g_ext) under the three force-law readings")
print("=" * 78)
print()
print("Setup: an isolated system with internal baryonic acceleration g_bar and local")
print("density rho is embedded in a uniform external field g_ext.  Baryons held fixed.")
print("A UNIFORM field exerts no tide, so rho is unchanged by construction.")
print()

g_bar = 1.0e-10       # m/s^2, typical SPARC outer point
rho_local = 1.0e-2    # M_sun/pc^3, outer disk
V_flat = 150.0        # km/s, for the amplitude reading
v_b = 71.0            # km/s

for label, g_ext in [("isolated  (g_ext = 0)", 0.0),
                     ("e = 0.05  (g_ext = 0.05 a0)", 0.05 * 1.2e-10),
                     ("e = 0.50  (g_ext = 0.50 a0)", 0.50 * 1.2e-10),
                     ("e = 5.00  (g_ext = 5.00 a0)", 5.00 * 1.2e-10)]:
    c = C(rho_local)                      # C's argument does not contain g_ext
    L1 = g_bar / c                        # division    g_obs = g_bar / C
    L3 = c * g_bar                        # multiplication  g_obs = C * g_bar
    L2 = math.sqrt(v_b ** 2 + (V_flat * c) ** 2)   # amplitude  v^2 = v_b^2 + (V_flat C)^2
    print(f"  {label:32s}  C = {c:.6e}   L1 g_obs = {L1:.6e}   "
          f"L3 g_obs = {L3:.6e}   L2 v = {L2:.4f}")

print()
print("  -> All four rows identical.  The response to g_ext is EXACTLY ZERO under all three")
print("     force-law readings, because g_ext appears in none of them.  Zero has no sign,")
print("     so the sign of the EFE is not convention-dependent on the force-law axis.")
print()

print("-" * 78)
print("PART A2 - the axis that DOES determine the EFE: what C's argument is")
print("-" * 78)
print()
a0 = 1.2e-10
print("  Source-side arguments (functionals of the matter distribution only):")
print("    C(rho)    : uniform g_ext leaves rho unchanged            -> EFE = 0 exactly")
print("    C(g_bar)  : g_bar is Newtonian-Poisson from rho; the")
print("                external mass is not internal baryons         -> EFE = 0 exactly")
print()
print("  Solution-side argument (a functional of the field being solved for):")
print("    C(|grad Phi|) : |grad Phi| = |g_int + g_ext| includes the external field.")
print("                    This IS AQUAL with nu = 1/C.  Bekenstein-Milgrom 1984 derive")
print("                    the EFE from exactly this.  EFE != 0, MOND-sized, suppressing.")
print()
print("  Numerically, algebraic MOND-with-EFE, g_obs*(g_obs + g_ext) = g_bar*a0:")
for e in (0.0, 0.03, 0.05, 0.15, 0.5):
    g_ext = e * a0
    g_obs = (-g_ext + math.sqrt(g_ext ** 2 + 4 * g_bar * a0)) / 2
    g_iso = math.sqrt(g_bar * a0)
    print(f"    e = {e:5.2f}  ->  g_obs/g_iso = {g_obs / g_iso:.4f}   "
          f"Delta log10 = {math.log10(g_obs / g_iso):+.4f} dex")
print()
print("  -> EFE is set by the ARGUMENT fork (rho / g_bar / |grad Phi|), not by the")
print("     FORCE-LAW fork (amplitude / division / multiplication).  The two forks are")
print("     orthogonal.  Under both source-side arguments EFE = 0; under the solution-side")
print("     argument the framework IS MOND and has MOND's EFE.  No branch gives a nonzero")
print("     EFE of framework-specific sign.")
print()


# =====================================================================
# PART B - the other channel: ambient DENSITY, where the sign really does flip
# =====================================================================
print("=" * 78)
print("PART B  -  the rho_ext channel (ambient-density effect), where the fork bites")
print("=" * 78)
print()
print("Adding ambient mass density rho_ext to the local rho DOES change C.  Direction:")
print()
print(f"  {'rho_ext/rho_local':>18s}  {'C':>12s}  {'L1 g/C':>12s}  {'L3 C*g':>12s}  {'L2 v':>10s}")
base = None
for frac in (0.0, 1.0, 10.0, 1e3, 1e6):
    rho = rho_local * (1.0 + frac)
    c = C(rho)
    L1 = g_bar / c
    L3 = c * g_bar
    L2 = math.sqrt(v_b ** 2 + (V_flat * c) ** 2)
    if base is None:
        base = (L1, L3, L2)
    print(f"  {frac:18.0e}  {c:12.4e}  {L1:12.4e}  {L3:12.4e}  {L2:10.4f}")
print()
print(f"  L1 (division)       : g_obs DECREASES  ({base[0]:.3e} -> {g_bar / C(rho_local * 1e6):.3e})  "
      f"= velocity DEFICIT   [same sign as MOND's EFE]")
print(f"  L3 (multiplication) : g_obs INCREASES  ({base[1]:.3e} -> {C(rho_local * 1e6) * g_bar:.3e})  "
      f"= velocity SURPLUS   [opposite sign]")
print(f"  L2 (amplitude)      : v INCREASES      ({base[2]:.3f} -> "
      f"{math.sqrt(v_b ** 2 + (V_flat * C(rho_local * 1e6)) ** 2):.3f})  = velocity SURPLUS   [opposite sign]")
print()
print("  -> The 2026-08-04 'the two conventions give opposite-signed environmental effects'")
print("     is CORRECT, and it is a statement about the rho_ext channel.  It says nothing")
print("     about the EFE, which is the g_ext channel and is zero in every reading.")
print()


# =====================================================================
# PART C - registrability and POWER
# =====================================================================
print("=" * 78)
print("PART C  -  is EFE = 0 registrable?  Matched-filter regression + power")
print("=" * 78)
print()

row_re = re.compile(
    r"^\s*([A-Za-z0-9+\-]+)\s*&\s*\$\s*(-?\d+\.\d+)\s*\$\s*&"
    r"\s*\$\s*(-?\d+\.\d+)\s*_.*?\$\s*&"
    r"\s*\$\s*(-?\d+\.\d+)\s*_.*?\$\s*&"
)
chae = {}
with open(TEX) as f:
    for line in f:
        m = row_re.match(line)
        if m and "galaxy" not in line:
            chae[m.group(1)] = {"x0": float(m.group(2)),
                                "e": float(m.group(3)),
                                "eenv": float(m.group(4))}
print(f"Chae Table 2 rows parsed: {len(chae)}")
print(f"  erratum check  NGC5055 e_env = {chae['NGC5055']['eenv']:.3f} "
      f"(pre-erratum body text 0.094), NGC5033 = {chae['NGC5033']['eenv']:.3f} (0.102)")

t08 = json.load(open(T08))


def norm(n):
    return n.replace(" ", "").replace("-", "").upper()


chae_n = {norm(k): v for k, v in chae.items()}
J = []
for name, rec in t08.items():
    k = norm(name)
    if k in chae_n:
        J.append({"name": name, **rec, **chae_n[k]})
N = len(J)
print(f"Joined sample: N = {N}")
print()

# --- build the MOND+EFE matched filter -------------------------------
# Deep-MOND algebraic EFE:  g_obs (g_obs + g_ext) = g_bar a0
#   with x = g_bar/a0 and e = g_ext/a0:
#   g_obs/g_iso = -s + sqrt(s^2+1),  s = e / (2 sqrt(x))
# <x0> in Chae Table 2 is the galaxy's mean log10(g_bar) in SI (m/s^2) -- their
# low-acceleration cut is <x0> < -10.3, which is only sensible in SI.  Divide by a0.
for g in J:
    x = 10.0 ** g["x0"] / a0
    s = g["eenv"] / (2.0 * math.sqrt(x))
    g["dpred"] = math.log10(-s + math.sqrt(s * s + 1.0))   # dex, negative
    g["leenv"] = math.log10(g["eenv"]) if g["eenv"] > 0 else None

dpred = [g["dpred"] for g in J]
offset = [g["offset_dex"] for g in J]


def mean(v):
    return sum(v) / len(v)


def sd(v):
    m = mean(v)
    return math.sqrt(sum((a - m) ** 2 for a in v) / (len(v) - 1))


def pearson(x, y):
    mx, my = mean(x), mean(y)
    num = sum((a - mx) * (b - my) for a, b in zip(x, y))
    dx = math.sqrt(sum((a - mx) ** 2 for a in x))
    dy = math.sqrt(sum((b - my) ** 2 for b in y))
    return num / (dx * dy) if dx and dy else 0.0


def ols_multi(y, Xcols):
    """OLS with intercept via normal equations (small p, plain python)."""
    n = len(y)
    X = [[1.0] + [col[i] for col in Xcols] for i in range(n)]
    p = len(X[0])
    XtX = [[sum(X[i][a] * X[i][b] for i in range(n)) for b in range(p)] for a in range(p)]
    Xty = [sum(X[i][a] * y[i] for i in range(n)) for a in range(p)]
    # gauss-jordan inverse
    M = [row[:] + [1.0 if i == j else 0.0 for j in range(p)] for i, row in enumerate(XtX)]
    for c in range(p):
        piv = max(range(c, p), key=lambda r: abs(M[r][c]))
        M[c], M[piv] = M[piv], M[c]
        d = M[c][c]
        M[c] = [v / d for v in M[c]]
        for r in range(p):
            if r != c and M[r][c] != 0.0:
                f = M[r][c]
                M[r] = [vr - f * vc for vr, vc in zip(M[r], M[c])]
    inv = [row[p:] for row in M]
    beta = [sum(inv[a][b] * Xty[b] for b in range(p)) for a in range(p)]
    fit = [sum(beta[a] * X[i][a] for a in range(p)) for i in range(n)]
    resid = [y[i] - fit[i] for i in range(n)]
    s2 = sum(r * r for r in resid) / (n - p)
    se = [math.sqrt(s2 * inv[a][a]) for a in range(p)]
    return beta, se, math.sqrt(s2)


# TEST-08 registered density metric, distance-corrected (reproduce the registered build)
logD = [math.log10(g["D"]) for g in J]
cyl = [math.log10(1.0 + g["cyl2"]) for g in J]


def resid_on(y, x):
    b = pearson(x, y) * sd(y) / sd(x)
    a = mean(y) - b * mean(x)
    return [yi - (a + b * xi) for yi, xi in zip(y, x)]


cyl_dc = resid_on(cyl, logD)

print("--- descriptive ---")
print(f"  measured RAR offset : mean {mean(offset):+.4f}  sd {sd(offset):.4f} dex")
print(f"  MOND+EFE predicted  : mean {mean(dpred):+.4f}  sd {sd(dpred):.4f} dex "
      f"(range {min(dpred):+.4f} .. {max(dpred):+.4f})")
print(f"  marginal r(offset, dpred)   = {pearson(offset, dpred):+.4f}")
print(f"  marginal r(offset, cyl_dc)  = {pearson(offset, cyl_dc):+.4f}   [TEST-08 registered null]")
print(f"  r(dpred, cyl_dc)            = {pearson(dpred, cyl_dc):+.4f}")
print()

print("--- PRIMARY: offset ~ 1 + beta_E * dpred + beta_rho * cyl_dc ---")
beta, se, sig = ols_multi(offset, [dpred, cyl_dc])
lo, hi = beta[1] - 1.96 * se[1], beta[1] + 1.96 * se[1]
print(f"  beta_E   = {beta[1]:+.3f} +/- {se[1]:.3f}    95% CI [{lo:+.3f}, {hi:+.3f}]")
print(f"  beta_rho = {beta[2]:+.4f} +/- {se[2]:.4f}")
print(f"  residual sigma = {sig:.4f} dex")
print()
print(f"  CI contains 0 (framework EFE=0)?  {lo <= 0 <= hi}")
print(f"  CI contains 1 (MOND+EFE)?         {lo <= 1 <= hi}")
print()

print("--- POWER ---")
mdc = 1.96 * se[1]
print(f"  minimum detectable |beta_E| at 95% : {mdc:.3f}")
print(f"  MOND+EFE amplitude is beta_E = 1.  Detectable? {1.0 > mdc}")
print(f"  implied SNR of the MOND+EFE signal in this estimator: {1.0 / se[1]:.2f} sigma")
print()
print("  Signal budget:")
sig_signal = sd(dpred)
print(f"    sd of the MOND+EFE predicted offset (the signal)   : {sig_signal:.4f} dex")
print(f"    residual scatter of the RAR offset (the noise)     : {sig:.4f} dex")
print(f"    signal/noise per galaxy                            : {sig_signal / sig:.4f}")
print(f"    N required for 3-sigma on beta_E = 1               : "
      f"{math.ceil((3.0 * sig / sig_signal) ** 2)}")
print()

# low-acceleration subsample, where the EFE actually acts
lo_idx = [i for i, g in enumerate(J) if g["x0"] < -10.3]   # Chae's own low-acceleration cut
if len(lo_idx) > 20:
    yl = [offset[i] for i in lo_idx]
    d1 = [dpred[i] for i in lo_idx]
    d2 = [cyl_dc[i] for i in lo_idx]
    b2, s2, sg2 = ols_multi(yl, [d1, d2])
    print(f"--- robustness: low-acceleration subsample (<x0> < -10.3, Chae's cut), N = {len(lo_idx)} ---")
    print(f"  beta_E = {b2[1]:+.3f} +/- {s2[1]:.3f}   95% CI "
          f"[{b2[1] - 1.96 * s2[1]:+.3f}, {b2[1] + 1.96 * s2[1]:+.3f}]   sd(dpred) = {sd(d1):.4f}")
    print(f"  SNR of beta_E = 1 : {1.0 / s2[1]:.2f} sigma")
    print()

# what would it take?  invert for the sample size / scatter needed
print("--- what a powered version would require ---")
for target in (3.0, 5.0):
    need_n = math.ceil((target * sig / sig_signal) ** 2)
    print(f"  {target:.0f}-sigma on beta_E = 1 at current scatter ({sig:.3f} dex): N = {need_n} galaxies")
need_sig = sig_signal / 3.0 * math.sqrt(N)
print(f"  ...or, at N = {N}, residual scatter must fall to {need_sig:.4f} dex "
      f"(currently {sig:.4f})")
print()

out = {
    "N": N,
    "beta_E": beta[1], "se_beta_E": se[1], "ci": [lo, hi],
    "beta_rho": beta[2], "se_beta_rho": se[2],
    "resid_sigma": sig,
    "sd_dpred": sig_signal,
    "sd_offset": sd(offset),
    "r_offset_dpred": pearson(offset, dpred),
    "r_offset_density": pearson(offset, cyl_dc),
    "r_dpred_density": pearson(dpred, cyl_dc),
    "snr_mond_efe": 1.0 / se[1],
    "N_for_3sigma": math.ceil((3.0 * sig / sig_signal) ** 2),
}
with open("/mnt/c/exe/projects/ai-agents/synchronism-site/explorer/data/"
          "efe_sign_convention_and_power.json", "w") as f:
    json.dump(out, f, indent=2)
print("wrote explorer/data/efe_sign_convention_and_power.json")
