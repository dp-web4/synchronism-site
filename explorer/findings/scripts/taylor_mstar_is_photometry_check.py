"""Are Durbala's Taylor stellar masses a deterministic function of (i-band L, g-i)?  If so, S592's
'i-band L is independent of M*' circularity test swapped one copy of the identity for another."""
import numpy as np
SRC = '/home/dp/ai-workspace/Synchronism/simulations/session610_cdm_synthesis.py'
g = {'__file__': SRC, '__name__': 'p'}
exec(compile('\n'.join(open(SRC).read().splitlines()[:278]), SRC, 'exec'), g)
logL, gi, fg, dsps = g['logL'], g['g_i'], g['f_gas'], g['delta_sps']
logMsT = g['logMbar_T'] + np.log10(1 - fg)
logMsM = logMsT - dsps
for name, yv in [('Taylor', logMsT), ('Mendel', logMsM)]:
    X = np.column_stack([np.ones(len(yv)), logL, gi]); b = np.linalg.lstsq(X, yv, rcond=None)[0]
    r = yv - X @ b
    print(f'{name}: logM* = {b[0]:+.3f} + {b[1]:.3f} logL_i + {b[2]:.3f} (g-i);  rms {r.std():.4f} dex, R2 {1-r.var()/yv.var():.4f}  (N={len(yv)})')
print('Taylor+2011 eq.8 in these units: logM* = -0.68 + 0.70(g-i) + 1.0 logL_i [Lsun]  (rms 0.1 dex quoted)')

# Exact reconstruction of S610's target from S610's own predictors (no V, no fit beyond the 2 Taylor coefs above)
bT = np.linalg.lstsq(np.column_stack([np.ones(len(logL)), logL, gi]), logMsT, rcond=None)[0]
MsT_hat = 10**(np.column_stack([np.ones(len(logL)), logL, gi]) @ bT)
MsM_hat = MsT_hat * 10**(-dsps)
Mgas_hat = fg / (1 - fg) * MsT_hat            # f_gas = Mgas / (MsT + Mgas)
y_hat = np.log10(MsM_hat + Mgas_hat)
yM = g['logMbar_M']
m = g['opt_mask']
r = (yM - y_hat)[m]
print(f'Exact identity on optimal 677: rms(log Mbar_M - f(L, g-i, dSPS, f_gas)) = {r.std():.4f} dex  (vs S610 linear-model rms 0.0942, sigma_int 0.0864)')
