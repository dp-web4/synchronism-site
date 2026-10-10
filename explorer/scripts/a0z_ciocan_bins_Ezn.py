#!/usr/bin/env python3
"""REGISTERED (PREREG work/2026-10-10-ciocan-a0z/PREREG.md, commit 9527643).
Ciocan+2026 (arXiv:2604.22613v1) Fig. 3: four quantile-bin a0 values, pixel-extracted (see finding for calibration).
Fit a0 = k * E(z)^n with the level k free; two estimators (bins; the paper's global line 1.0+1.59z over the data range),
two conventions (M: measurement only; A: SPARC anchor 1.2±0.26 at z=0 added), two readings of the bar width (1σ; 95%).
E(z) = sqrt(Om(1+z)^3 + 1-Om), Om = 0.315, as in the RC100 run."""
import numpy as np
Om = 0.315
E = lambda z: np.sqrt(Om * (1 + z) ** 3 + 1 - Om)
# bin edges (blue bars), dot z, a0 (dot), half-width of grey bar (×1e-10 m/s²); pixel read 2026-10-10
edges = np.array([[0.334, 0.669], [0.671, 0.978], [0.980, 1.110], [1.112, 1.437]])
z = np.array([0.503, 0.825, 1.047, 1.276])
a0 = np.array([1.990, 2.200, 2.571, 2.710])
s = np.array([0.086, 0.105, 0.112, 0.136])
ANCH = (0.0, 1.2, 0.26)

def wls(x, y, w):
    W = w.sum(); xb = (w * x).sum() / W; yb = (w * y).sum() / W
    n = (w * (x - xb) * (y - yb)).sum() / (w * (x - xb) ** 2).sum()
    k = yb - n * xb
    sn = np.sqrt(1 / (w * (x - xb) ** 2).sum())
    chi2 = (w * (y - k - n * x) ** 2).sum()
    return n, sn, k, chi2

def fitE(zz, aa, ss, label):
    x = np.log(E(zz)); y = np.log(aa); w = (aa / ss) ** 2  # σ_ln = σ/a0
    n, sn, k, chi2 = wls(x, y, w)
    # fixed-n chi2 for n=0 and n=1 (level free)
    out = {}
    for nf in (0.0, 1.0):
        kk = ((y - nf * x) * w).sum() / w.sum(); out[nf] = (w * (y - kk - nf * x) ** 2).sum()
    print(f'  [{label}] n = {n:+.3f} ± {sn:.3f} (formal, Δχ²=1); level k = {np.exp(k):.3f}; χ²_min = {chi2:.2f} / dof {len(zz)-2}; '
          f'χ²(n=0) = {out[0.0]:.2f}, χ²(n=1) = {out[1.0]:.2f}; pull vs 0: {n/sn:+.1f}σ, vs 1: {(n-1)/sn:+.1f}σ')
    return n, sn, chi2

print('=== Binned estimator ===')
res = {}
for bar, f in (('bars = 1σ', 1.0), ('bars = 95% CI (halved)', 0.5)):
    print(bar)
    res[(bar, 'M')] = fitE(z, a0, s * f, 'M: no anchor')
    za = np.r_[ANCH[0], z]; aa = np.r_[ANCH[1], a0]; sa = np.r_[ANCH[2], s * f]
    res[(bar, 'A')] = fitE(za, aa, sa, 'A: SPARC anchor 1.2±0.26 at z=0')
    # jackknife over bins (leave one out), convention M
    nj = []
    for i in range(4):
        m = np.arange(4) != i
        nj.append(wls(np.log(E(z[m])), np.log(a0[m]), (a0[m] / (s[m] * f)) ** 2)[0])
    nj = np.array(nj); jk = np.sqrt(3 / 4 * ((nj - nj.mean()) ** 2).sum())
    print(f'  [M] leave-one-bin-out n: {np.round(nj, 2)}; jackknife σ_n = {jk:.3f}')
# bins' own linear fit, a0 = a0(0) + a1 z (to compare with the global Eq. 4 slope 1.59 ± 0.05)
w = 1 / s ** 2
a1, sa1, b0, c2 = wls(z, a0, w)
print(f'Bins fitted linearly: a1 = {a1:.2f} ± {sa1:.2f}, a0(0) = {b0:.2f} (bars=1σ), χ² = {c2:.2f}/2  vs global Eq.4: a1 = 1.59 ± 0.05, a0(0) = 1.00 ± 0.02')

print('\n=== Global-line estimator: a0(z) = a0(0) + a1 z projected onto k E(z)^n over 0.33–1.44 ===')
zz = np.linspace(0.33, 1.44, 50); x = np.log(E(zz)); ones = np.ones_like(zz)
def proj(a00, a1):
    y = np.log(a00 + a1 * zz); return wls(x, y, ones)[0]
print(f'  central: n = {proj(1.00, 1.59):.3f}')
rng = np.random.default_rng(10)
for rho in (0.0, -0.5):
    cov = np.array([[0.02 ** 2, rho * 0.02 * 0.05], [rho * 0.02 * 0.05, 0.05 ** 2]])
    draws = rng.multivariate_normal([1.00, 1.59], cov, 4000)
    ns = np.array([proj(a, b) for a, b in draws])
    print(f'  MC (corner 1σ, corr {rho:+.1f}): n = {ns.mean():.3f} ± {ns.std():.3f}')
# MOND-track global fit, Eq. 14
print(f'  Appendix E MOND-track line (1.03 + 1.20 z): n = {proj(1.03, 1.20):.3f}')
print(f'  Appendix E per-galaxy regression (1.11 + 1.42 z): n = {proj(1.11, 1.42):.3f}')
# what "faster than H(z)" means in the paper's convention
for zt in (1.0, 1.44):
    print(f'  ratio to own intercept at z={zt}: (1+1.59z)/1 = {1+1.59*zt:.2f} vs E(z) = {E(zt):.2f};  with SPARC level: 2.38/1.2 = {2.38/1.2:.2f} vs E(z_eff≈0.9) = {E(0.9):.2f}')

print('\n=== Against RC100 (post-hoc n = 0.0, galaxy-bootstrap 95% ≈ [−1, +1] → σ ≈ 0.5) ===')
for key, (n, sn, _) in res.items():
    if key[1] == 'M':
        print(f'  Ciocan bins ({key[0]}): n = {n:+.2f} ± {sn:.2f}; vs RC100 0.0 ± 0.5: {(n-0)/np.hypot(sn,0.5):+.2f}σ')
ng = proj(1.00, 1.59)
print(f'  Ciocan global line: n = {ng:+.2f} ± 0.03; vs RC100: {(ng)/np.hypot(0.03,0.5):+.2f}σ')

print('\n=== P6: 2.38 (+0.12/−0.10, 95% CI) vs anchors ===')
s1 = 0.11 / 1.96
print(f'  1σ ≈ {s1:.3f}; vs SPARC 1.2: {(2.38-1.2)/s1:.1f}σ (measurement only; paper says ~19σ), {(2.38-1.2)/np.hypot(s1,0.26):.1f}σ (anchor carried)')
print(f'  vs cH(z)/2π on the SPARC anchor, 2.15: {(2.38-2.15)/s1:.1f}σ measurement only; {(2.38-2.15)/np.hypot(s1,0.26*2.15/1.2):.1f}σ anchor carried')
print(f'  branch A level-free prediction over bins (n=1): a0(z) = k E(z) with k fitted; see χ²(n=1) above')

print('\n=== Addenda (post-registration, labelled) ===')
# the global line scored against the four bins with no free parameter
r = (a0 - (1.0 + 1.59 * z)) / s
print(f'  global line vs bins, bars=1σ: residuals/σ = {np.round(r, 2)}; χ² = {(r**2).sum():.1f} / 4 (no free params)')
# projected level of the global line
y = np.log(1.0 + 1.59 * zz); n_, sn_, k_, _ = wls(x, y, ones)
print(f'  global line projection: k = {np.exp(k_):.3f}, n = {n_:.3f}; at z=0.5 line {1+1.59*0.5:.3f} vs kE^n {np.exp(k_)*E(0.5)**n_:.3f}')
# Mayer+2023 "factor ~3 from z=0 to 2" and the paper's "factor ~4" as exponents
print(f'  E(2) = {E(2):.3f}; Mayer factor 3 → n = {np.log(3)/np.log(E(2)):.2f}; paper factor ~4 (line to z=2: {1+1.59*2:.2f}) → n = {np.log(1+1.59*2)/np.log(E(2)):.2f}')
# bins vs n=1 level-free: the implied k and the per-bin residuals
yb = np.log(a0); xb = np.log(E(z)); wb = (a0 / s) ** 2
k1 = ((yb - xb) * wb).sum() / wb.sum()
print(f'  n=1 level-free on bins: k = {np.exp(k1):.3f} (SPARC 1.2); residuals/σ = {np.round((a0 - np.exp(k1)*E(z))/s, 2)}')
k0 = (yb * wb).sum() / wb.sum()
print(f'  n=0 level-free on bins: k = {np.exp(k0):.3f}; residuals/σ = {np.round((a0 - np.exp(k0))/s, 2)}')
