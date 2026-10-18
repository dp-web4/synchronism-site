#!/usr/bin/env python3
"""Power of the per-galaxy RAR offset vs log10 e_env regression against MOND+EFE (Chae+2020).

PREREG: explorer/findings/efe-offset-vs-eenv-regression-power-at-n141.md (commit 9a1b57c).
E1 = TEST-08 estimator (mean residual, all retained points); E2 = low-acc points only (g_bar < g_dag/10).
Signal: Chae+2020 Eq. 3-4 nu_e applied pointwise with e drawn from the Table-2 e_env posterior, pooled
g_dag refit on the shifted mock. Noise: observed offsets minus their own OLS line, bootstrap-resampled.
"""
import json, os, re, sys
import numpy as np
from scipy import optimize, stats

SYN = '/home/dp/ai-workspace/Synchronism/simulations'
TEX = '/home/dp/ai-workspace/synchronism-site/explorer/data/chae2020_ms_r2.tex'
OUT = '/home/dp/ai-workspace/synchronism-site/explorer/data/efe_offset_eenv_power.json'
SPARC_T1 = os.path.join(SYN, 'sparc_real_data', 'SPARC_Lelli2016c.mrt')
SPARC_T2 = os.path.join(SYN, 'sparc_real_data', 'MassModels_Lelli2016c.mrt')
T08 = os.path.join(SYN, 'test08_per_galaxy_results.json')
K = 1.0e6 / 3.0857e19
ML_DISK, ML_BUL = 0.5, 0.7
GDAG_EFE = 1.2e-10
rng = np.random.default_rng(20261018)
N_DRAW, N_MOCK = 400, 5000

def parse_table1():
    gals = {}
    lines = open(SPARC_T1).readlines()
    last = max(i for i, l in enumerate(lines) if l.startswith('-----'))
    for l in lines[last + 1:]:
        if len(l) < 95: continue
        f = l[11:].split()
        gals[l[0:11].strip()] = dict(D=float(f[1]), inc=float(f[4]), Q=int(f[16]))
    return gals

def parse_table2():
    pts = {}
    lines = open(SPARC_T2).readlines()
    last = max(i for i, l in enumerate(lines) if l.startswith('-----'))
    for l in lines[last + 1:]:
        if len(l) < 60: continue
        f = l[11:].split()
        if len(f) < 9: continue
        try:
            row = dict(R=float(f[1]), Vobs=float(f[2]), eV=float(f[3]),
                       Vgas=float(f[4]), Vdisk=float(f[5]), Vbul=float(f[6]))
        except ValueError:
            continue
        pts.setdefault(l[0:11].strip(), []).append(row)
    return pts

num = r'(-?\d+\.\d+)'
row_re = re.compile(r'^\s*([A-Za-z0-9+\-]+)\s*&\s*\$\s*' + num + r'\s*\$\s*&'
                    r'\s*\$\s*' + num + r'\s*_\{\s*' + num + r'\s*\}\s*\^\{\s*\+\s*' + num + r'\s*\}\s*\$\s*&'
                    r'\s*\$\s*' + num + r'\s*_\{\s*' + num + r'\s*\}\s*\^\{\s*\+\s*' + num + r'\s*\}\s*\$\s*&')
chae = {}
for line in open(TEX):
    m = row_re.match(line)
    if m:
        g = m.groups()
        chae[g[0].replace('-', '').upper()] = dict(x0=float(g[1]), e=float(g[2]),
                                                   eenv=float(g[5]), lo=-float(g[6]), hi=float(g[7]))
print(f'Chae rows parsed: {len(chae)}; NGC5055 {chae["NGC5055"]}')

t1, t2 = parse_table1(), parse_table2()
gb, go, gal = [], [], []
for name, rows in t2.items():
    meta = t1.get(name)
    if meta is None or meta['Q'] > 2 or meta['inc'] < 30: continue
    for r in rows:
        if r['R'] <= 0 or r['Vobs'] <= 0 or r['eV'] / r['Vobs'] >= 0.1: continue
        b = (r['Vgas'] * abs(r['Vgas']) + ML_DISK * r['Vdisk'] * abs(r['Vdisk'])
             + ML_BUL * r['Vbul'] * abs(r['Vbul'])) / r['R']
        if b <= 0: continue
        gb.append(b * K); go.append(r['Vobs'] ** 2 / r['R'] * K); gal.append(name)
gb, go, gal = np.array(gb), np.array(go), np.array(gal)
lgo = np.log10(go)

def rar(g, gd): return g / (1.0 - np.exp(-np.sqrt(g / gd)))
def fit_gdag(lg_obs):
    res = optimize.minimize_scalar(lambda x: np.sum((lg_obs - np.log10(rar(gb, 10 ** x))) ** 2),
                                   bounds=(-11, -9), method='bounded', options={'xatol': 1e-7})
    return 10 ** res.x
gdag = fit_gdag(lgo)
resid = lgo - np.log10(rar(gb, gdag))
print(f'pooled g_dag = {gdag:.4e} (TEST-08 reproduction), points {len(gb)}')

t08 = json.load(open(T08))
names = [n for n in sorted(set(gal)) if (gal == n).sum() >= 3]
names = [n for n in names if n in t08 and n.replace('-', '').upper() in chae]
masks = {n: gal == n for n in names}
lowmask = gb < gdag / 10
E1_off = np.array([resid[masks[n]].mean() for n in names])
chk = np.array([t08[n]['offset_dex'] for n in names])
print(f'joined N = {len(names)}; max |offset - TEST-08 json| = {np.max(np.abs(E1_off - chk)):.2e}')
e2_names = [n for n in names if (masks[n] & lowmask).sum() >= 3]
E2_off = np.array([resid[masks[n] & lowmask].mean() for n in e2_names])
print(f'E2 sample (>=3 points with g_bar < g_dag/10): N = {len(e2_names)}')

C = [chae[n.replace('-', '').upper()] for n in names]
eenv_med = np.array([c['eenv'] for c in C]); elo = np.array([c['lo'] for c in C]); ehi = np.array([c['hi'] for c in C])
logD = np.log10(np.array([t1[n]['D'] for n in names]))
x1 = np.log10(eenv_med)
idx2 = [names.index(n) for n in e2_names]
x2 = x1[idx2]

def nu_e(z, e):
    A = e * (1 + e / 2) / (1 + e); B = 1 + e
    a = 0.5 - A / z
    return a + np.sqrt(a * a + B / z)

gal_index = np.array([names.index(n) if n in masks else -1 for n in gal])
inS = gal_index >= 0
z_all = gb / GDAG_EFE

def signal(e_gal):
    """per-galaxy residual shift (E1, E2) after pooled refit, for per-galaxy e."""
    e_pt = np.zeros_like(gb)
    e_pt[inS] = e_gal[gal_index[inS]]
    dpt = np.log10(nu_e(z_all, e_pt) / nu_e(z_all, 0.0))
    lg_mock = np.log10(rar(gb, gdag)) + dpt          # noise-free mock on the fitted baseline
    gd2 = fit_gdag(lg_mock)
    r = lg_mock - np.log10(rar(gb, gd2))
    s1 = np.array([r[masks[n]].mean() for n in names])
    s2 = np.array([r[masks[n] & lowmask].mean() for n in e2_names])
    return s1, s2

def draw_e(scale, add):
    zz = rng.standard_normal(len(eenv_med))
    e = eenv_med + np.where(zz > 0, zz * ehi, zz * elo)
    return np.clip(e, 1e-3, None) * scale + add

def ols(x, y):
    X = np.column_stack([np.ones_like(x), x])
    b, *_ = np.linalg.lstsq(X, y, rcond=None)
    res = y - X @ b
    s2 = res @ res / (len(y) - 2)
    se = np.sqrt(s2 * np.linalg.inv(X.T @ X)[1, 1])
    return b[1], se, res

out = {'N_E1': len(names), 'N_E2': len(e2_names), 'gdag_fit': gdag}
b1, se1, res1 = ols(x1, E1_off)
b2, se2, res2 = ols(x2, E2_off)
# observed with log D control
X = np.column_stack([np.ones_like(x1), x1, logD]); bb, *_ = np.linalg.lstsq(X, E1_off, rcond=None)
rr = E1_off - X @ bb; cov = rr @ rr / (len(x1) - 3) * np.linalg.inv(X.T @ X)
print(f'\nOBSERVED E1 slope = {b1:+.4f} ± {se1:.4f} dex/dex (r = {stats.pearsonr(x1, E1_off)[0]:+.3f})')
print(f'OBSERVED E1 slope | log D = {bb[1]:+.4f} ± {np.sqrt(cov[1,1]):.4f}')
print(f'OBSERVED E2 slope = {b2:+.4f} ± {se2:.4f} dex/dex (r = {stats.pearsonr(x2, E2_off)[0]:+.3f})')
print(f'noise sd: E1 {res1.std(ddof=2):.4f}, E2 {res2.std(ddof=2):.4f}; log e_env sd {x1.std():.3f}')
out['observed'] = dict(E1=[b1, se1], E1_logD=[bb[1], float(np.sqrt(cov[1, 1]))], E2=[b2, se2])

# median-e signal (no posterior scatter) for P1 diagnostic
s1m, s2m = signal(eenv_med)
print(f'\nmedian-e signal: E1 spread sd {s1m.std():.4f} dex, slope {ols(x1, s1m)[0]:+.4f}; '
      f'E2 spread sd {s2m.std():.4f}, slope {ols(x2, s2m)[0]:+.4f}')

zcrit = stats.t.ppf(0.95, len(x1) - 2)
for label, scale, add in [('A1 e=e_env', 1.0, 0.0), ('A2 e=e_env+0.011', 1.0, 0.011), ('A3 e=1.5 e_env', 1.5, 0.0)]:
    S1, S2 = [], []
    for _ in range(N_DRAW):
        a, b = signal(draw_e(scale, add)); S1.append(a); S2.append(b)
    S1, S2 = np.array(S1), np.array(S2)
    bp1 = np.mean([ols(x1, s)[0] for s in S1]); bp2 = np.mean([ols(x2, s)[0] for s in S2])
    hits1 = hits2 = 0; sl1 = []
    for k in range(N_MOCK):
        y1 = S1[k % N_DRAW] + rng.choice(res1, len(res1))
        y2 = S2[k % N_DRAW] + rng.choice(res2, len(res2))
        b, se, _ = ols(x1, y1); hits1 += (b / se < -zcrit); sl1.append(b)
        b, se, _ = ols(x2, y2); hits2 += (b / se < -stats.t.ppf(0.95, len(x2) - 2))
    p1, p2 = hits1 / N_MOCK, hits2 / N_MOCK
    d1 = (b1 - bp1) / se1; d2 = (b2 - bp2) / se2
    print(f'\n[{label}] beta_pred E1 = {bp1:+.4f}, E2 = {bp2:+.4f}')
    print(f'   power (one-sided 5%): E1 = {p1:.3f}, E2 = {p2:.3f}')
    print(f'   observed - predicted: E1 {d1:+.2f} sigma, E2 {d2:+.2f} sigma; obs vs 0: E1 {b1/se1:+.2f}, E2 {b2/se2:+.2f}')
    out[label] = dict(beta_pred_E1=bp1, beta_pred_E2=bp2, power_E1=p1, power_E2=p2,
                      dist_pred_E1=d1, dist_pred_E2=d2)

# identity control: zero signal -> false-positive rate should be ~0.05
fp = 0
for k in range(N_MOCK):
    y1 = rng.choice(res1, len(res1)); b, se, _ = ols(x1, y1); fp += (b / se < -zcrit)
print(f'\nidentity control (no signal): E1 rejection rate = {fp / N_MOCK:.3f} (nominal 0.05)')
out['identity_fp_E1'] = fp / N_MOCK
json.dump(out, open(OUT, 'w'), indent=2, default=float)

# ---- secondary (added after the PREREG run, labelled as such): power of the REGISTERED density regression
lcyl = np.log10(1 + np.array([t08[n]['cyl2'] for n in names]))
bD = np.polyfit(logD, lcyl, 1); cyl_dc = lcyl - np.polyval(bD, logD)
bo, seo, resd = ols(cyl_dc, E1_off)
S1 = np.array([signal(draw_e(1.0, 0.0))[0] for _ in range(N_DRAW)])
hits = 0
for k in range(N_MOCK):
    y = S1[k % N_DRAW] + rng.choice(resd, len(resd)); b, se, _ = ols(cyl_dc, y); hits += (b / se < -zcrit)
print(f'\n[density secondary] observed slope on dist-corr log(1+N_cyl) = {bo:+.4f} ± {seo:.4f}; '
      f'beta_pred(A1) = {np.mean([ols(cyl_dc, s)[0] for s in S1]):+.4f}; power vs MOND+EFE A1 = {hits / N_MOCK:.3f}')
for target in (0.8,):
    zt = stats.norm.ppf(0.95) + stats.norm.ppf(target)
    for lab, bp, se, n in [('E1', out['A1 e=e_env']['beta_pred_E1'], se1, len(x1)),
                           ('E2', out['A1 e=e_env']['beta_pred_E2'], se2, len(x2))]:
        print(f'N for {target:.0%} power ({lab}, A1, same noise and e_env spread): {n * (zt * se / abs(bp)) ** 2:.0f}')
