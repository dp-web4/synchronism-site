import runpy, sys, io, contextlib
import numpy as np
buf = io.StringIO()
src = open('/home/dp/ai-workspace/synchronism-site/explorer/scripts/efe_offset_eenv_power.py').read()
src = src.replace('N_DRAW, N_MOCK = 400, 5000', 'N_DRAW, N_MOCK = 5, 10')
g = {}
with contextlib.redirect_stdout(buf):
    exec(compile(src, 'p', 'exec'), g)
x1, E1, names, gal, gb = g['x1'], g['E1_off'], g['names'], g['gal'], g['gb']
x0 = np.array([np.log10(gb[gal == n]).mean() for n in names])
print('r(log e_env, <log g_bar>) =', np.corrcoef(x1, x0)[0, 1])
X = np.column_stack([np.ones_like(x1), x1, x0]); b, *_ = np.linalg.lstsq(X, E1, rcond=None)
r = E1 - X @ b; cov = r @ r / (len(E1) - 3) * np.linalg.inv(X.T @ X)
print('E1 slope on log e_env | <x0>: %+.4f +- %.4f ; x0 coef %+.4f +- %.4f' % (b[1], cov[1,1]**.5, b[2], cov[2,2]**.5))
s1m, _ = g['signal'](g['eenv_med'])
Xs = np.column_stack([np.ones_like(x1), x1, x0]); bs, *_ = np.linalg.lstsq(Xs, s1m, rcond=None)
print('predicted (median e) slope on log e_env | <x0>: %+.4f' % bs[1])
