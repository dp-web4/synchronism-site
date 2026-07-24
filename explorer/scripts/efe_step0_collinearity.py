#!/usr/bin/env python3
"""Step-0 collinearity check: Chae+2020 e_env vs TEST-08 ambient density in SPARC.

Pre-declared in explorer/findings/efe-step0-collinearity-e-env-vs-ambient-density.md
BEFORE this script was run.

PRIMARY: Pearson r between log10(e_env) [Chae+2020 Table 2, erratum-corrected arXiv v2]
and distance-corrected log(1+N_cyl) [TEST-08 registered density metric, CF4].
Verdict rule (fixed in the finding before running):
  r^2 >= 0.5  -> collinear, "independent corroboration" framing DIES
  r^2 <  0.25 -> separable, framing survives step-0
  else        -> gray zone, framing weakened
"""
import json
import re
import math

TEX = "/mnt/c/exe/projects/ai-agents/synchronism-site/explorer/data/chae2020_ms_r2.tex"
T08 = "/mnt/c/exe/projects/ai-agents/Synchronism/simulations/test08_per_galaxy_results.json"

# ---------- parse Chae Table 2 ----------
row_re = re.compile(
    r"^\s*([A-Za-z0-9+\-]+)\s*&\s*\$\s*(-?\d+\.\d+)\s*\$\s*&"      # galaxy, <x0>
    r"\s*\$\s*(-?\d+\.\d+)\s*_.*?\$\s*&"                            # e median
    r"\s*\$\s*(-?\d+\.\d+)\s*_.*?\$\s*&"                            # e_env median
)
chae = {}
with open(TEX) as f:
    for line in f:
        m = row_re.match(line)
        if m and "galaxy" not in line:
            name, x0, e, eenv = m.group(1), float(m.group(2)), float(m.group(3)), float(m.group(4))
            chae[name] = {"x0": x0, "e": e, "eenv": eenv}
print(f"Parsed {len(chae)} galaxies from Chae Table 2")

# Erratum verification: v2 body text (pre-erratum) quoted NGC5055 e_env=0.094, NGC5033 e_env=0.102.
for g in ("NGC5055", "NGC5033", "NGC1090", "NGC6674"):
    if g in chae:
        print(f"  {g}: e_env = {chae[g]['eenv']:.3f}, e = {chae[g]['e']:.3f}")

# ---------- load TEST-08 per-galaxy ----------
t08 = json.load(open(T08))
print(f"TEST-08 galaxies: {len(t08)}")

# ---------- join ----------
def norm(n):
    return n.replace(" ", "").replace("-", "").upper()

chae_n = {norm(k): (k, v) for k, v in chae.items()}
joined = []
for name, rec in t08.items():
    key = norm(name)
    if key in chae_n:
        cname, c = chae_n[key]
        joined.append({"name": name, **rec, **c})
print(f"Joined sample: N = {len(joined)}")
unmatched = [n for n in t08 if norm(n) not in chae_n]
print(f"TEST-08 galaxies not in Chae table ({len(unmatched)}): {unmatched}")

# ---------- statistics helpers (no scipy dependency assumptions kept minimal) ----------
def pearson(x, y):
    n = len(x)
    mx, my = sum(x) / n, sum(y) / n
    sxx = sum((a - mx) ** 2 for a in x)
    syy = sum((b - my) ** 2 for b in y)
    sxy = sum((a - mx) * (b - my) for a, b in zip(x, y))
    return sxy / math.sqrt(sxx * syy)

def rank(v):
    order = sorted(range(len(v)), key=lambda i: v[i])
    r = [0.0] * len(v)
    i = 0
    while i < len(order):
        j = i
        while j + 1 < len(order) and v[order[j + 1]] == v[order[i]]:
            j += 1
        avg = (i + j) / 2 + 1
        for k in range(i, j + 1):
            r[order[k]] = avg
        i = j + 1
    return r

def spearman(x, y):
    return pearson(rank(x), rank(y))

def resid_on(y, x):
    """residual of y after OLS on x (with intercept)"""
    n = len(x)
    mx, my = sum(x) / n, sum(y) / n
    b = sum((a - mx) * (c - my) for a, c in zip(x, y)) / sum((a - mx) ** 2 for a in x)
    a0 = my - b * mx
    return [c - (a0 + b * a) for a, c in zip(x, y)]

def pval_r(r, n):
    """two-sided p for Pearson r via t distribution (normal approx fallback)"""
    if abs(r) >= 1:
        return 0.0
    t = r * math.sqrt((n - 2) / (1 - r * r))
    # normal approximation is fine at n>100
    z = abs(t)
    p = math.erfc(z / math.sqrt(2))
    return p

# ---------- build variables (reproduce TEST-08 distance correction) ----------
logD = [math.log10(g["D"]) for g in joined]
lcyl = [math.log10(1 + g["cyl2"]) for g in joined]
lsph = [math.log10(1 + g["sph5"]) for g in joined]
lrho = [math.log10(g["rho5"]) if g["rho5"] > 0 else None for g in joined]
leenv = [math.log10(g["eenv"]) for g in joined]
eenv = [g["eenv"] for g in joined]
offset = [g["offset_dex"] for g in joined]
dvirgo = [g["dvirgo"] for g in joined]
e_fit = [g["e"] for g in joined]
x0 = [g["x0"] for g in joined]

cyl_dc = resid_on(lcyl, logD)
sph_dc = resid_on(lsph, logD)
rho_ok = [i for i, v in enumerate(lrho) if v is not None]
rho_dc_map = dict(zip(rho_ok, resid_on([lrho[i] for i in rho_ok], [logD[i] for i in rho_ok])))

N = len(joined)
print("\n===== PRIMARY (pre-declared) =====")
r_p = pearson(leenv, cyl_dc)
s_p = spearman(leenv, cyl_dc)
print(f"Pearson r  [log10(e_env) vs dist-corr log(1+N_cyl)] = {r_p:+.4f}  (r^2 = {r_p**2:.4f}, p = {pval_r(r_p, N):.3g})")
print(f"Spearman   = {s_p:+.4f}")
print(f"VIF = {1/(1-r_p**2):.3f}")
verdict = ("COLLINEAR - framing DIES" if r_p ** 2 >= 0.5
           else "SEPARABLE - framing survives step-0" if r_p ** 2 < 0.25
           else "GRAY ZONE - framing weakened")
print(f"PRE-DECLARED VERDICT: {verdict}")

print("\n===== Secondaries (context) =====")
for label, vec in [("dist-corr log(1+N_sph5)", sph_dc),
                   ("Virgo-centric distance", dvirgo),
                   ("log D (distance systematics)", logD)]:
    r = pearson(leenv, vec)
    print(f"log10(e_env) vs {label:34s}: r = {r:+.4f} (r^2={r**2:.4f}), Spearman = {spearman(leenv, vec):+.4f}")
idx = list(rho_dc_map.keys())
r = pearson([leenv[i] for i in idx], [rho_dc_map[i] for i in idx])
print(f"log10(e_env) vs {'dist-corr 5th-NN density':34s}: r = {r:+.4f} (r^2={r**2:.4f})  [N={len(idx)}]")
r_lin = pearson(eenv, cyl_dc)
print(f"linear e_env vs dist-corr log(1+N_cyl)          : r = {r_lin:+.4f} (r^2={r_lin**2:.4f})")

print("\n===== Diagnostic 2x2 (bonus, not verdict) =====")
lo = [i for i in range(N) if x0[i] < -10.3]
print(f"low-acceleration subset (<x0> < -10.3): N = {len(lo)}")
pairs = [
    ("e_env  vs RAR offset (all)      ", leenv, offset, range(N)),
    ("density vs RAR offset (all)     ", cyl_dc, offset, range(N)),  # TEST-08 replication
    ("e_env  vs fitted e (low-acc)    ", leenv, e_fit, lo),
    ("density vs fitted e (low-acc)   ", cyl_dc, e_fit, lo),
    ("e_env  vs RAR offset (low-acc)  ", leenv, offset, lo),
]
for label, xv, yv, sel in pairs:
    xs = [xv[i] for i in sel]
    ys = [yv[i] for i in sel]
    r = pearson(xs, ys)
    print(f"{label}: r = {r:+.4f} (r^2={r**2:.4f}, p={pval_r(r, len(xs)):.3g})")

# persist
out = {
    "N_joined": N,
    "primary_pearson_r": r_p,
    "primary_r2": r_p ** 2,
    "primary_spearman": s_p,
    "verdict": verdict,
    "erratum_check": {g: chae[g] for g in ("NGC5055", "NGC5033", "NGC1090", "NGC6674") if g in chae},
}
with open("/mnt/c/exe/projects/ai-agents/synchronism-site/explorer/data/efe_step0_results.json", "w") as f:
    json.dump(out, f, indent=2)
print("\nresults saved to explorer/data/efe_step0_results.json")
