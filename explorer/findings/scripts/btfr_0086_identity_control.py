"""Is Session 610's sigma_int = 0.086 dex a BTFR scatter?  Identity / shuffled-V control.
PREREG: btfr_0086_identity_control_PREREG.md (b134d0f).
Reuses S610's own loader and estimator verbatim (lines 1-278 of the source script), so only the regressions differ."""
import os, sys
import numpy as np

SRC = '/home/dp/ai-workspace/Synchronism/simulations/session610_cdm_synthesis.py'
lines = open(SRC).read().splitlines()
prefix = '\n'.join(lines[:278])
g = {'__file__': SRC, '__name__': 's610_prefix'}
exec(compile(prefix, SRC, 'exec'), g)

np_ = np
m = g['opt_mask']
logV = g['logV'][m]; logL = g['logL'][m]; y = g['logMbar_M'][m]
dsps = g['delta_sps'][m]; gi = g['g_i'][m]; fg = g['f_gas'][m]
sig = g['sigma_full'][m]; N = int(m.sum())
ols = g['ols_with_loo']; mli = g['ml_intrinsic']
one = np.ones(N)


def tfr_res(v):
    X = np.column_stack([one, v]); b = np.linalg.lstsq(X, logL, rcond=None)[0]
    return logL - X @ b


def fit(cols, yy=y, s=sig):
    X = np.column_stack([one] + cols)
    _, _, r, sd, _, r2 = ols(X, yy)
    si, e = mli(r, s)
    return si, e, sd, r2


print(f'N_opt = {N}')
s5, e5, sd5, r25 = fit([logV, tfr_res(logV), dsps, gi, fg])
sb, eb, sdb, r2b = fit([logV])
print(f'R0  5-var   sigma_int = {s5:.4f} +- {e5:.4f}  (rms {sd5:.4f}, LOO R2 {r25:.3f})')
print(f'R0  BTFR    sigma_int = {sb:.4f} +- {eb:.4f}  (rms {sdb:.4f}, LOO R2 {r2b:.3f})')

rng = np.random.default_rng(20261023)
S, R2 = [], []
for _ in range(200):
    vs = rng.permutation(logV)
    si, _, _, r2 = fit([vs, tfr_res(vs), dsps, gi, fg]); S.append(si); R2.append(r2)
S = np.array(S); R2 = np.array(R2)
print(f'R1  shuffled-V 5-var sigma_int: median {np.median(S):.4f}  [2.5,97.5]% {np.percentile(S,2.5):.4f}-{np.percentile(S,97.5):.4f}; LOO R2 median {np.median(R2):.3f}')

# No velocity at all: log M_b from its photometric/gas ingredients only
s0, e0, _, r20 = fit([logL, dsps, gi, fg])
print(f'R1b no-V  (logL, dSPS, g-i, f_gas) sigma_int = {s0:.4f}  LOO R2 {r20:.3f}')
# Velocity's marginal contribution on top of the ingredients
print(f'    velocity adds: {s0:.4f} -> {s5:.4f}')

sc, ec, _, r2c = fit([logV, gi])
print(f'R2  colour-only (logV, g-i) sigma_int = {sc:.4f} +- {ec:.4f}  LOO R2 {r2c:.3f}')

# R3 inverse axis: log V on log M_b. Noise in log V: kinematic only for V; distance enters M (2x in log D) -> treat
# total noise projected with the forward slope (approximate).
X = np.column_stack([one, y]); b = np.linalg.lstsq(X, logV, rcond=None)[0]
rv = logV - X @ b
bf = np.linalg.lstsq(np.column_stack([one, logV]), y, rcond=None)[0]
print(f'R3  forward slope dlogM/dlogV = {bf[1]:.3f}; inverse slope dlogV/dlogM = {b[1]:.3f} (1/inv = {1/b[1]:.3f})')
print(f'    rms in log V at fixed M = {rv.std():.4f} dex; x(1/inverse slope) = {rv.std()/b[1]:.4f} dex in M')
print(f'    forward rms in log M at fixed V = {sdb:.4f}; x forward slope^-1 = {sdb/bf[1]:.4f} dex in V')
print(f'    -> compare Desmond 2017 (log V_f dex): SPARC 0.029, AM 0.064, AM-scatter-0 0.061')

# Coefficients of the S610 5-var model (real V) and the equivalent (logV, logL, ...) parametrisation
for name, cols in [('S610 form [V, TFRres, dSPS, g-i, fgas]', [logV, tfr_res(logV), dsps, gi, fg]),
                   ('same span [V, logL, dSPS, g-i, fgas]', [logV, logL, dsps, gi, fg])]:
    Xc = np.column_stack([one] + cols); bc = np.linalg.lstsq(Xc, y, rcond=None)[0]
    print(f'coef {name}: ' + ', '.join(f'{c:+.3f}' for c in bc[1:]))

# R3b: intrinsic scatter of the plain inverse BTFR in log V (Desmond's axis).
# Noise in log V: S610's kinematic sigma_v; noise in log M (distance 2x, HI) projected by the inverse slope.
sv = g['sigma_v'][m]
sM = np.sqrt(g['sigma_dist'][m]**2 + (g['sigma_mhi'][m])**2)
s_inv = np.sqrt(sv**2 + (b[1]*sM)**2)
si_v, ei_v = mli(rv, s_inv)
print(f'R3b plain inverse BTFR sigma_int in log V = {si_v:.4f} +- {ei_v:.4f} dex (median noise {np.median(s_inv):.4f})')
for lo, hi in [(80, 150), (150, 400)]:
    mm = (g['v_rot'][m] >= lo) & (g['v_rot'][m] < hi)
    s_, _ = mli(rv[mm], s_inv[mm]); print(f'     V in [{lo},{hi}) km/s: N={mm.sum()}, sigma_int(log V) = {s_:.4f}')
