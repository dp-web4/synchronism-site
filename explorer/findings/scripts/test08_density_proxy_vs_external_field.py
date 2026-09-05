#!/usr/bin/env python3
"""
Topic: chae-efe-detection-vs-cosmicflows-environment-null (seeded maintainer 2026-09-05).

Question: TEST-08 (r^2 = 1e-4 between per-galaxy RAR offset and CF4 ambient DENSITY, N=141) is
consistent with C(rho)'s ~1e-3 dex lever. MOND+EFE's lever is ~0.09 dex. Does the same null bite
MOND+EFE, or is a density-count proxy structurally blind to external ACCELERATION?

Pre-registered rules P1-P5 in explorer/logs/2026-09-05.md.  Nothing here is fitted to the answer.

Data (research repo): SPARC tables, NED coordinates, CF4 table2 (55,877 galaxies with DM + Vcmb).
TEST-08's per-galaxy table (offset, cyl2 count, D) is read from simulations/test08_per_galaxy_results.json
so the density proxy is EXACTLY the one that was adjudicated.
"""
import json, os, sys
import numpy as np
from scipy import stats
from scipy.spatial import cKDTree

REPO = '/home/dp/ai-workspace/Synchronism'
SIM = os.path.join(REPO, 'simulations')
T1 = os.path.join(SIM, 'sparc_real_data', 'SPARC_Lelli2016c.mrt')
T2 = os.path.join(SIM, 'sparc_real_data', 'MassModels_Lelli2016c.mrt')
COORDS = os.path.join(SIM, 'sparc_real_data', 'sparc_ned_coordinates.json')
CF4 = os.path.join(REPO, 'data', 'cf4', 'table2.dat')
T08 = os.path.join(SIM, 'test08_per_galaxy_results.json')

H0 = 74.6
A0 = 1.20e-10
KM2_S2_PER_KPC_TO_M_S2 = 1.0e6 / 3.0857e19
ML_DISK, ML_BUL = 0.5, 0.7
rng = np.random.default_rng(20260905)

def nu(y):
    return 1.0 / (1.0 - np.exp(-np.sqrt(y)))

def unit_vec(ra, dec):
    return np.stack([np.cos(dec) * np.cos(ra), np.cos(dec) * np.sin(ra), np.sin(dec)], axis=-1)

# ------------------------------------------------------------------ SPARC
def parse_table1():
    gals = {}
    lines = open(T1).readlines()
    last = max(i for i, l in enumerate(lines) if l.startswith('-----'))
    for l in lines[last + 1:]:
        if len(l) < 95: continue
        name = l[0:11].strip(); f = l[11:].split()
        gals[name] = dict(D=float(f[1]), inc=float(f[4]), L36=float(f[6]), Q=int(f[16]))
    return gals

def parse_table2():
    pts = {}
    lines = open(T2).readlines()
    last = max(i for i, l in enumerate(lines) if l.startswith('-----'))
    for l in lines[last + 1:]:
        if len(l) < 60: continue
        name = l[0:11].strip(); f = l[11:].split()
        if len(f) < 9: continue
        try:
            row = dict(R=float(f[1]), Vobs=float(f[2]), eV=float(f[3]), Vgas=float(f[4]),
                       Vdisk=float(f[5]), Vbul=float(f[6]))
        except ValueError:
            continue
        pts.setdefault(name, []).append(row)
    return pts

t1, t2 = parse_table1(), parse_table2()
coords = json.load(open(COORDS))
t08 = json.load(open(T08))
names = sorted(t08.keys())
N = len(names)
offset = np.array([t08[n]['offset_dex'] for n in names])
cyl2 = np.array([t08[n]['cyl2'] for n in names])
D = np.array([t08[n]['D'] for n in names])
logD = np.log10(D)
print(f'TEST-08 galaxy set: N = {N}; offset std = {offset.std():.3f} dex')

# per-galaxy g_bar arrays with TEST-08's cuts
gbar = {}
for n in names:
    arr = []
    for r in t2[n]:
        if r['R'] <= 0 or r['Vobs'] <= 0 or r['eV'] / r['Vobs'] >= 0.1: continue
        gb = (r['Vgas'] * abs(r['Vgas']) + ML_DISK * r['Vdisk'] * abs(r['Vdisk'])
              + ML_BUL * r['Vbul'] * abs(r['Vbul'])) / r['R']
        if gb <= 0: continue
        arr.append(gb * KM2_S2_PER_KPC_TO_M_S2)
    gbar[n] = np.array(arr)

def dist_correct(m):
    A = np.stack([np.ones_like(logD), logD], axis=1)
    return m - A @ np.linalg.lstsq(A, m, rcond=None)[0]

prim_env = dist_correct(np.log10(1 + cyl2))        # TEST-08's PRIMARY proxy, reproduced
r0, p0 = stats.pearsonr(offset, prim_env)
print(f'reproduce TEST-08 primary: r = {r0:+.3f}, r^2 = {r0**2:.4f}, p = {p0:.3g}  (published 0.0001, p=0.89)')

# ------------------------------------------------------------------- CF4
vcmb, dm, ra, dec = [], [], [], []
with open(CF4) as f:
    for l in f:
        toks = l.split()
        if len(toks) < 12: continue
        try:
            head = l[:41].split()
            vcmb.append(float(head[3])); dm.append(float(head[4]))
            ra.append(float(toks[-6])); dec.append(float(toks[-5]))
        except (ValueError, IndexError):
            continue
vcmb, dm = np.array(vcmb), np.array(dm)
ra, dec = np.radians(np.array(ra)), np.radians(np.array(dec))
uv_cf4 = unit_vec(ra, dec)
d_dm = 10 ** ((dm - 25.0) / 5.0)
d_z = np.where(vcmb > 300, vcmb / H0, d_dm)          # redshift-space distance, DM for the nearest
print(f'CF4: {len(vcmb)} galaxies')

# SPARC positions (NED coords + SPARC distance), as TEST-08 did
uv_s = np.array([unit_vec(np.radians(coords[n]['ra']), np.radians(coords[n]['dec'])) for n in names])
xyz_s = uv_s * D[:, None]

def gext_proxy(d_cat, soft=0.5, rmax=30.0):
    """equal-mass vector sum of (r_j - r_i)/(|r|^2+s^2)^{3/2} over catalogue galaxies within rmax,
    self excluded with TEST-08's rule (proj<0.1 Mpc & |dV|<200 km/s)."""
    xyz_c = uv_cf4 * d_cat[:, None]
    tree = cKDTree(xyz_c)
    g = np.zeros((N, 3)); nn = np.zeros(N, int)
    for i in range(N):
        idx = tree.query_ball_point(xyz_s[i], rmax)
        idx = np.array(idx)
        dvec = xyz_c[idx] - xyz_s[i]
        cosang = np.clip(uv_cf4[idx] @ uv_s[i], -1, 1)
        proj = np.arccos(cosang) * D[i]
        dv = np.abs(vcmb[idx] - H0 * D[i])
        keep = ~((proj < 0.1) & (dv < 200))
        dvec = dvec[keep]
        r2 = np.sum(dvec ** 2, axis=1) + soft ** 2
        g[i] = np.sum(dvec / r2[:, None] ** 1.5, axis=0)
        nn[i] = keep.sum()
    return np.linalg.norm(g, axis=1), nn

results = {}
print('\n=== P1: does the TEST-08 density proxy track |g_ext| built from the same catalogue? ===')
print(f"{'positions':10s} {'soft':>5s} {'rmax':>5s} | {'r(prim,log g) raw':>18s} {'r dist-corr':>12s} {'r^2 dc':>7s} | {'e_N 10/50/90 pct':>22s}")
for lab, dcat in (('3D (DM)', d_dm), ('z-space', d_z)):
    for soft, rmax in ((0.5, 30.0), (1.0, 30.0), (0.5, 10.0), (2.0, 50.0)):
        gmag, nn = gext_proxy(dcat, soft, rmax)
        lg = np.log10(gmag)
        lg_dc = dist_correct(lg)
        r_raw = stats.pearsonr(prim_env, lg)[0]
        r_dc = stats.pearsonr(prim_env, lg_dc)[0]
        eN = 0.033 * gmag / np.median(gmag)
        q = np.percentile(eN, [10, 50, 90])
        print(f'{lab:10s} {soft:5.1f} {rmax:5.0f} | {r_raw:+18.3f} {r_dc:+12.3f} {r_dc**2:7.3f} | {q[0]:.3f} / {q[1]:.3f} / {q[2]:.3f}')
        results[(lab, soft, rmax)] = (gmag, lg_dc, eN)

# fiducial for the rest
gmag, lg_dc, eN = results[('z-space', 0.5, 30.0)]
gmag3, lg3_dc, eN3 = results[('3D (DM)', 0.5, 30.0)]
print(f'\nfiducial (z-space, s=0.5, R=30): log|g| spread (std) = {np.std(np.log10(gmag)):.2f} dex; '
      f'Chae 2020 range 0.01-0.1 => ~0.5 dex half-range')
print(f'r between the two position conventions, dist-corr log|g|: {stats.pearsonr(lg_dc, lg3_dc)[0]:+.3f}')

# ------------------------------------------------ P2/P3: predicted EFE offsets
def efe_offset(eN_arr, aligned=True):
    """per-galaxy mean log10(g_obs^EFE / g_obs^noEFE), then sample-mean subtracted (pooled fit absorbs it).
    1D aligned-field EFE: g_obs = a0[(y+e)nu(y+e) - e nu(e)]."""
    out = np.zeros(N)
    for i, n in enumerate(names):
        y = gbar[n] / A0
        e = eN_arr[i]
        g_efe = (y + e) * nu(y + e) - e * nu(e)
        g_0 = y * nu(y)
        out[i] = np.mean(np.log10(g_efe / g_0))
    return out - out.mean()

print('\n=== P2/P3: MOND+EFE predicted per-galaxy offsets ===')
for lab, e_arr in (('e_N from z-space proxy', eN), ('e_N from 3D proxy', eN3)):
    off_pred = efe_offset(e_arr)
    r_e = stats.pearsonr(off_pred, np.log10(e_arr))[0]
    r_d = stats.pearsonr(off_pred, prim_env)[0]
    print(f'{lab}: pred offset std = {off_pred.std():.4f} dex (observed {offset.std():.3f}); '
          f'P2 r^2(pred, log e_N) = {r_e**2:.3f} (r={r_e:+.3f}); P3 r^2(pred, TEST-08 density proxy) = {r_d**2:.4f} (r={r_d:+.3f})')
    # what r^2 would the TEST-08 estimator have seen if the DATA were MOND+EFE + observed-level noise?
    # add Gaussian noise to make total std equal observed std, correlate with density proxy, many draws
    noise_sd = np.sqrt(max(offset.var() - off_pred.var(), 0))
    r2s_d, r2s_e = [], []
    for _ in range(2000):
        mock = off_pred + rng.normal(0, noise_sd, N)
        r2s_d.append(stats.pearsonr(mock, prim_env)[0] ** 2)
        r2s_e.append(stats.pearsonr(mock, np.log10(e_arr))[0] ** 2)
    print(f'   mock data = EFE + noise to observed scatter: r^2 vs density proxy median {np.median(r2s_d):.4f} '
          f'[{np.percentile(r2s_d,5):.4f}, {np.percentile(r2s_d,95):.4f}]; '
          f'vs log e_N itself median {np.median(r2s_e):.4f} [{np.percentile(r2s_e,5):.4f}, {np.percentile(r2s_e,95):.4f}]')

# lever sanity: Chae-like e_N spread with a stronger, lognormal(0.033, 0.35 dex) e_N drawn independent of position
e_ln = 10 ** rng.normal(np.log10(0.033), 0.35, N)
op = efe_offset(e_ln)
print(f'control: independent lognormal e_N (0.35 dex): pred offset std = {op.std():.4f} dex; '
      f'r^2(pred, log e_N) = {stats.pearsonr(op, np.log10(e_ln))[0]**2:.3f}')


# ------------------------------------------------ DIAGNOSTIC: why P3 ~ 0 while P1 ~ 0.26 ?
print('\n=== DIAGNOSTIC: decompose the predicted offset into environment channel and structure channel ===')
logL = np.log10(np.array([max(t1[n]['L36'], 1e-4) for n in names]))
def partial_r(x, y, controls):
    A = np.stack([np.ones_like(x)] + controls, axis=1)
    rx = x - A @ np.linalg.lstsq(A, x, rcond=None)[0]
    ry = y - A @ np.linalg.lstsq(A, y, rcond=None)[0]
    return stats.pearsonr(rx, ry)
# (a) distance-corrected e_N (remove the flux-limit trend before normalising)
eN_dc = 0.033 * 10 ** (lg_dc - np.median(lg_dc))
op_dc = efe_offset(eN_dc)
# (b) structure channel only: every galaxy gets the SAME e_N = 0.033
op_struct = efe_offset(np.full(N, 0.033))
# (c) environment channel only: a common g_bar profile (pooled SPARC low-g points) for every galaxy
pooled = np.concatenate([gbar[n] for n in names]); ref = np.percentile(pooled, [10, 20, 30, 40, 50, 60, 70, 80, 90])
def env_only(e_arr):
    y = ref / A0
    out = np.array([np.mean(np.log10(((y+e)*nu(y+e) - e*nu(e)) / (y*nu(y)))) for e in e_arr])
    return out - out.mean()
op_env = env_only(eN_dc)
print(f'pred offset std: full(dc e_N) {op_dc.std():.4f}  structure-only {op_struct.std():.4f}  environment-only {op_env.std():.4f} dex')
for lab, v in (('full (dc e_N)', op_dc), ('structure-only', op_struct), ('environment-only', op_env)):
    r1 = stats.pearsonr(v, prim_env)[0]; r2 = stats.pearsonr(v, lg_dc)[0]; r3 = stats.pearsonr(v, logL)[0]
    print(f'  {lab:18s}: r vs density proxy {r1:+.3f} | vs log g_ext(dc) {r2:+.3f} | vs log L36 {r3:+.3f}')
print(f'  density proxy vs log L36: r = {stats.pearsonr(prim_env, logL)[0]:+.3f};  log g_ext(dc) vs log L36: r = {stats.pearsonr(lg_dc, logL)[0]:+.3f}')
rp = partial_r(op_dc, prim_env, [logL])
print(f'  partial r(full pred, density proxy | logL) = {rp[0]:+.3f} (p={rp[1]:.3g})')
# what could TEST-08 have seen? mock = alpha*pred + noise to the observed scatter
print('\n  mocks: data = alpha * EFE_pred(dc e_N) + noise, total scatter = observed 0.124 dex; 2000 draws each')
for alpha in (1.0, 0.5, 0.25, 0.12):
    sig = alpha * op_dc; noise_sd = np.sqrt(max(offset.var() - sig.var(), 0))
    r2d, r2g, r2e = [], [], []
    for _ in range(2000):
        m = sig + rng.normal(0, noise_sd, N)
        r2d.append(stats.pearsonr(m, prim_env)[0] ** 2); r2g.append(stats.pearsonr(m, lg_dc)[0] ** 2); r2e.append(stats.pearsonr(m, op_dc)[0]**2)
    print(f'  alpha={alpha:4.2f} (EFE signal std {sig.std():.3f} dex): r^2 vs density proxy {np.median(r2d):.4f} [{np.percentile(r2d,5):.4f},{np.percentile(r2d,95):.4f}] '
          f'| vs log g_ext {np.median(r2g):.4f} [{np.percentile(r2g,5):.4f},{np.percentile(r2g,95):.4f}] | vs EFE template {np.median(r2e):.3f}')

# ----------------------------------------------------------- P4: observed offsets vs g_ext proxy
print('\n=== P4: observed TEST-08 offsets vs external-field proxy (EFE predicts NEGATIVE) ===')
for lab, lg in (('z-space dist-corr log|g|', lg_dc), ('3D dist-corr log|g|', lg3_dc)):
    r, p = stats.pearsonr(offset, lg); rs, ps = stats.spearmanr(offset, lg)
    print(f'{lab}: Pearson r = {r:+.3f} (r^2={r**2:.4f}, p={p:.3g}); Spearman {rs:+.3f} (p={ps:.3g})')
# and the EFE-shaped statistic: offsets vs PREDICTED EFE offset (uses each galaxy's own g_bar profile)
op_z = efe_offset(eN)
r, p = stats.pearsonr(offset, op_z)
print(f'observed offset vs EFE-predicted offset (z-space e_N): r = {r:+.3f}, p = {p:.3g}  '
      f'(EFE predicts POSITIVE here); slope = {np.polyfit(op_z, offset, 1)[0]:.2f} (EFE = 1)')


logSB = np.log10(np.array([max(t1[n].get('SBeff', 1.0), 1e-2) for n in names])) if 'SBeff' in t1[names[0]] else logL*0
for lab, lg in (('z-space', lg_dc), ('3D', lg3_dc)):
    rp = partial_r(offset, lg, [logL, logD])
    print(f'  partial r(offset, {lab} log g_ext | logL36, logD) = {rp[0]:+.3f} (p={rp[1]:.3g})')
rp = partial_r(offset, prim_env, [logL, logD])
print(f'  partial r(offset, density proxy | logL36, logD) = {rp[0]:+.3f} (p={rp[1]:.3g})   [TEST-08 reported partial r with 3 controls]')
# amplitude of the EFE template in the data: offset = alpha * op_dc + b, bootstrap CI; also with structure channel as covariate
def fit_alpha(x, y):
    return np.polyfit(x, y, 1)[0]
al = fit_alpha(op_dc, offset)
boots = [fit_alpha(op_dc[i], offset[i]) for i in (rng.integers(0, N, N) for _ in range(4000))]
print(f'\n  EFE amplitude in the data (offset regressed on full template, dc e_N): alpha = {al:.3f} '
      f'[{np.percentile(boots,2.5):.3f}, {np.percentile(boots,97.5):.3f}] 95% bootstrap; EFE at 1D-aligned strength = 1')
al_env = fit_alpha(op_env, offset)
boots = [fit_alpha(op_env[i], offset[i]) for i in (rng.integers(0, N, N) for _ in range(4000))]
print(f'  environment-channel-only template: alpha = {al_env:.3f} [{np.percentile(boots,2.5):.3f}, {np.percentile(boots,97.5):.3f}]')
# joint: offset ~ a*env + b*struct
A = np.stack([np.ones(N), op_env, op_struct], axis=1); coef = np.linalg.lstsq(A, offset, rcond=None)[0]
res = offset - A @ coef; cov = np.linalg.inv(A.T @ A) * res.var(ddof=3)
print(f'  joint fit offset ~ a*env + b*struct: a = {coef[1]:.3f} +/- {np.sqrt(cov[1,1]):.3f}, b = {coef[2]:.3f} +/- {np.sqrt(cov[2,2]):.3f}')
# regression-dilution reminder: e_N proxy noise attenuates alpha; with proxy log-noise sigma_n and true spread sigma_t, attenuation = sigma_t^2/(sigma_t^2+sigma_n^2)
print('  (alpha is attenuated by e_N-proxy noise: with true and noise log-spreads equal, attenuation = 0.5)')

# ----------------------------------------------------------- P5: GRF / lognormal control
print('\n=== P5: random-field control — is local density informative about |g| at the same point? ===')
n = 128; L = 256.0; dx = L / n                       # 2 Mpc cells
k1 = 2 * np.pi * np.fft.fftfreq(n, d=dx)
kx, ky, kz = np.meshgrid(k1, k1, k1, indexing='ij')
k2 = kx ** 2 + ky ** 2 + kz ** 2; k2[0, 0, 0] = 1.0; k = np.sqrt(k2)
# BBKS-like shape (Gamma = 0.2, h=0.7), n_s = 1
q = k / (0.2 * 0.7)
T = np.log(1 + 2.34 * q) / (2.34 * q) * (1 + 3.89 * q + (16.1 * q) ** 2 + (5.46 * q) ** 3 + (6.71 * q) ** 4) ** -0.25
P = k * T ** 2
P[0, 0, 0] = 0
W = np.exp(-0.5 * (k * 2.0) ** 2)                    # 2 Mpc Gaussian smoothing (the cylinder scale)
for sigma_target in (0.3, 1.0):
    white = np.fft.fftn(rng.normal(size=(n, n, n)))
    dk = white * np.sqrt(P) * W
    d = np.real(np.fft.ifftn(dk)); d *= sigma_target / d.std()
    # Gaussian field: g = -grad phi, phi_k = -delta_k / k^2  => g_k = i k delta_k / k^2
    dk = np.fft.fftn(d)
    g = np.stack([np.real(np.fft.ifftn(1j * kc * dk / k2)) for kc in (kx, ky, kz)])
    g[:, 0, 0, 0] = 0
    gmagG = np.linalg.norm(g, axis=0)
    sel = rng.integers(0, n, size=(20000, 3))
    dG = d[sel[:, 0], sel[:, 1], sel[:, 2]]; gG = gmagG[sel[:, 0], sel[:, 1], sel[:, 2]]
    rG = stats.pearsonr(dG, np.log(gG))[0]
    # lognormal transform of the SAME realisation, then recompute g from the lognormal density
    dl = np.exp(d - 0.5 * d.var()) - 1
    dlk = np.fft.fftn(dl)
    gl = np.stack([np.real(np.fft.ifftn(1j * kc * dlk / k2)) for kc in (kx, ky, kz)])
    gl[:, 0, 0, 0] = 0
    gmagL = np.linalg.norm(gl, axis=0)
    dL = dl[sel[:, 0], sel[:, 1], sel[:, 2]]; gL = gmagL[sel[:, 0], sel[:, 1], sel[:, 2]]
    rL = stats.pearsonr(np.log1p(dL), np.log(gL))[0]
    rL_s = stats.spearmanr(dL, gL)[0]
    print(f'sigma_delta = {sigma_target:.1f}: Gaussian  r(delta, log|g|) = {rG:+.3f} (r^2 = {rG**2:.4f});  '
          f'lognormal r(log(1+delta), log|g|) = {rL:+.3f} (r^2 = {rL**2:.3f}), Spearman {rL_s:+.3f}')

# point-process version of the same control: Poisson-sample "galaxies" from the lognormal field,
# then measure count-in-2Mpc-sphere and equal-mass |g| (soft 0.5, R 30) at random "SPARC" positions,
# i.e. exactly the two TEST-08-style estimators on a field where the truth is known.
sigma_target = 1.0
white = np.fft.fftn(rng.normal(size=(n, n, n)))
d = np.real(np.fft.ifftn(white * np.sqrt(P) * W)); d *= sigma_target / d.std()
dl = np.exp(d - 0.5 * d.var()) - 1
mean_per_cell = 60000 / n ** 3 * 8                    # ~ CF4 density within its dense core scaled up x8 for S/N
counts = rng.poisson(mean_per_cell * (1 + dl))
idx = np.argwhere(counts > 0); rep = counts[counts > 0]
pts = np.repeat(idx, rep, axis=0) * dx + rng.uniform(0, dx, size=(rep.sum(), 3))
tree = cKDTree(pts, boxsize=L)
probe = rng.uniform(0, L, size=(3000, 3))
n2 = np.array([len(tree.query_ball_point(p, 2.0)) for p in probe])
gp = np.zeros(3000)
for i, p in enumerate(probe):
    ii = tree.query_ball_point(p, 30.0)
    dv = pts[ii] - p; dv -= L * np.round(dv / L)
    r2 = np.sum(dv ** 2, axis=1) + 0.25
    gp[i] = np.linalg.norm(np.sum(dv / r2[:, None] ** 1.5, axis=0))
# the true field acceleration at the probe (continuum) for reference
dlk = np.fft.fftn(dl); gl = np.stack([np.real(np.fft.ifftn(1j * kc * dlk / k2)) for kc in (kx, ky, kz)]); gl[:, 0, 0, 0] = 0
cell = np.clip((probe / dx).astype(int), 0, n - 1)
gtrue = np.linalg.norm(gl[:, cell[:, 0], cell[:, 1], cell[:, 2]], axis=0)
dtrue = dl[cell[:, 0], cell[:, 1], cell[:, 2]]
r_cnt_g = stats.pearsonr(np.log10(1 + n2), np.log10(gp))[0]
r_cnt_gt = stats.pearsonr(np.log10(1 + n2), np.log10(gtrue))[0]
r_g_gt = stats.pearsonr(np.log10(gp), np.log10(gtrue))[0]
r_cnt_d = stats.pearsonr(np.log10(1 + n2), np.log10(1 + np.clip(dtrue, -0.99, None)))[0]
print(f'point-process mock ({len(pts)} pts, {np.mean(n2):.1f} mean count/2Mpc): '
      f'r(log count, log|g| point-sum) = {r_cnt_g:+.3f} (r^2={r_cnt_g**2:.3f}); '
      f'r(log count, log|g| true) = {r_cnt_gt:+.3f}; r(point-sum |g|, true |g|) = {r_g_gt:+.3f}; '
      f'r(log count, log(1+delta) true) = {r_cnt_d:+.3f}')

# ----------------------------------------------------------- save per-galaxy table
out = {n: dict(offset_dex=float(offset[i]), prim_env=float(prim_env[i]),
               log_gext_zspace_dc=float(lg_dc[i]), log_gext_3d_dc=float(lg3_dc[i]),
               eN_zspace=float(eN[i]), eN_3d=float(eN3[i]), efe_pred_offset=float(op_z[i]))
       for i, n in enumerate(names)}
json.dump(out, open(os.path.join(os.path.dirname(__file__), 'test08_density_proxy_vs_external_field.json'), 'w'), indent=1)
print('\nper-galaxy table written.')

# ----------------------------------------------------------- ROBUSTNESS of the P4 environment-channel amplitude
print('\n=== ROBUSTNESS: environment-channel amplitude a (offset ~ a*env + b*struct) across g_ext conventions ===')
print(f"{'positions':10s} {'soft':>5s} {'rmax':>5s} | {'partial r(off, log g | L, D)':>28s} {'p':>7s} | {'a':>6s} {'+/-':>6s} | {'b':>6s} {'+/-':>6s}")
for key, (gm, lgdc, _) in results.items():
    lab, soft, rmax = key
    e_dc = 0.033 * 10 ** (lgdc - np.median(lgdc))
    env = env_only(e_dc)
    A = np.stack([np.ones(N), env, op_struct], axis=1); coef = np.linalg.lstsq(A, offset, rcond=None)[0]
    res = offset - A @ coef; cov = np.linalg.inv(A.T @ A) * res.var(ddof=3)
    rp = partial_r(offset, lgdc, [logL, logD])
    print(f'{lab:10s} {soft:5.1f} {rmax:5.0f} | {rp[0]:+28.3f} {rp[1]:7.3f} | {coef[1]:6.2f} {np.sqrt(cov[1,1]):6.2f} | {coef[2]:6.3f} {np.sqrt(cov[2,2]):6.3f}')
# null calibration: permute g_ext across galaxies, how often |partial r| >= 0.16?
perm = []
for _ in range(5000):
    sh = rng.permutation(N)
    perm.append(partial_r(offset, lg3_dc[sh], [logL, logD])[0])
perm = np.array(perm)
print(f'permutation null (3D proxy): P(r <= -0.177) = {np.mean(perm <= -0.177):.4f}; two-sided P(|r| >= 0.177) = {np.mean(np.abs(perm) >= 0.177):.4f}')
