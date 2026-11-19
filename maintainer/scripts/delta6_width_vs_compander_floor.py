"""10-90% transition width of MOND's delta family vs the tanh-log compander, and the Newtonian-return tail.

Asked by a researcher persona (visitor log 2026-11-19): /for-researchers says the compander "is never narrower than
1.17 dex, so it cannot reach delta = 6" without printing the delta = 6 width. Not pre-registered (a lookup, not a test).
Definitions as in the archive code: nu_delta(y) = [1 - exp(-y^(delta/2))]^(-1/delta)
(synchronism-site/explorer/scripts/mond_delta_family_cassini_at_sparc_profiled_a0.py) and mu = tanh(gamma ln(1+x))
(Synchronism/simulations/sparc_cassini_q2.py). Widths are of mu in log10(x), x = g/a0, each at its own a0.
Identity control: delta-free n-family n = 1 (simple mu) must equal tanh at gamma = 1/2 (1.908 dex).
"""
import numpy as np

ly = np.linspace(-14, 14, 280001)
y = 10 ** ly


def nu_delta(d, yy):
    return (-np.expm1(-yy ** (d / 2.0))) ** (-1.0 / d)


def width_from_nu(nu):
    x = y * nu
    mu = 1 / nu
    lx = np.log10(x)
    return np.interp(0.9, mu, lx) - np.interp(0.1, mu, lx)


simple = (0.5 * (1 + np.sqrt(1 + 4 / y))) ** 1.0
print(f"identity: simple mu width {width_from_nu(simple):.3f} dex", end="; ")
lx = np.linspace(-14, 14, 280001)
m = np.tanh(0.5 * np.log1p(10 ** lx))
print(f"tanh gamma=1/2 width {np.interp(0.9, m, lx) - np.interp(0.1, m, lx):.3f} dex")
for d in (1, 2, 4, 6, 8):
    nu = nu_delta(d, y)
    print(f"delta = {d}: width {width_from_nu(nu):.3f} dex; nu - 1 at g_N = 2 a0: {nu_delta(d, np.array(2.0)) - 1:.1e}")
for g in (0.5, 1, 2, 3, 1e4):
    m = np.tanh(g * np.log1p(10 ** lx))
    yy = 10 ** lx * m
    w = np.interp(0.9, m, lx) - np.interp(0.1, m, lx)
    tail = 1 / np.interp(2.0, yy, m) - 1
    print(f"compander gamma = {g:g}: width {w:.3f} dex; nu - 1 at g_N = 2 a0: {tail:.1e}")
