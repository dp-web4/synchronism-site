#!/usr/bin/env python3
"""
Topic the-s-curve-is-an-axis-artifact, question 2: does MOND's interpolating function get the same
"the sigmoid only exists on the log axis" objection?  Checked on the RAR as actually plotted
(McGaugh+2016 form) and on the site's compander, in the three axis conventions each is drawn in.
Also: where does the crossover in the log-log slope sit relative to where the DATA sit.
"""
import numpy as np

def nu(y):                       # McGaugh 2016: g_obs = nu(g_bar/a0) g_bar
    return 1.0 / (1.0 - np.exp(-np.sqrt(y)))

def C(x, g):                     # site compander, x = rho/rho_crit
    return np.tanh(g * np.log1p(x))

def second_derivative_sign_changes(f, xs):
    fx = f(xs)
    d2 = np.gradient(np.gradient(fx, xs), xs)
    s = np.sign(d2)
    idx = np.where(np.diff(s) != 0)[0]
    return xs[idx], d2

# ---- 1. inflection in LINEAR variables
xs = np.logspace(-3, 3, 200001)
for lab, f in (("RAR: g_obs(g_bar) linear-linear, y = g_bar/a0", lambda y: nu(y) * y),
               ("MOND nu(y) linear", nu),
               ("site C(x), gamma = 0.489", lambda x: C(x, 0.489)),
               ("site C(x), gamma = 2", lambda x: C(x, 2.0))):
    xi, d2 = second_derivative_sign_changes(f, xs)
    # ignore numerical junk at the grid ends
    xi = xi[(xi > 1.1e-3) & (xi < 0.9e3)]
    print(f"{lab:48s}: inflection(s) in the LINEAR variable at x = {np.round(xi, 3) if len(xi) else 'none'}")

# ---- 2. inflection in semi-log (log abscissa), which is how both are usually shown
u = np.log10(xs)
for lab, f in (("RAR: g_obs vs log g_bar", lambda y: nu(y) * y),
               ("log g_obs vs log g_bar (the actual RAR plot)", lambda y: np.log10(nu(y) * y)),
               ("site C vs log x (coherence explorer, log toggle)", lambda x: C(x, 0.489))):
    fx = f(xs)
    d2 = np.gradient(np.gradient(fx, u), u)
    s = np.sign(d2); idx = np.where(np.diff(s) != 0)[0]
    xi = xs[idx]; xi = xi[(xi > 1.1e-3) & (xi < 0.9e3)]
    print(f"{lab:48s}: inflection(s) on the LOG abscissa at x = {np.round(xi, 3) if len(xi) else 'none'}")

# ---- 3. the axis-independent object: crossover of the log-log slope
def logslope(f, xs):
    return np.gradient(np.log(f(xs)), np.log(xs))
for lab, f, lo, hi in (("RAR log-slope d ln g_obs/d ln g_bar", lambda y: nu(y)*y, 0.5, 1.0),
                       ("site C log-slope d ln C/d ln x, gamma=0.489", lambda x: C(x, 0.489), 1.0, 0.0)):
    sl = logslope(f, xs)
    mid = 0.5 * (lo + hi)
    xc = xs[np.argmin(np.abs(sl - mid))]
    print(f"{lab:48s}: slope runs {lo} -> {hi}; midpoint crossover at x = {xc:.3f}")

# ---- 4. where the data sit relative to each crossover (numbers from the 09-03 finding)
print("\nSPARC placement relative to the crossover:")
print("  g_bar/a0 : median 0.179, p90 3.01  -> the RAR data STRADDLE the crossover (x~1)")
print("  rho/rho_c: median 6.86e-5, max 3.6e-2 -> ALL data sit >1.4 decades below the crossover;")
print("             C = gamma*x to 1.79% there (0.224x the data's precision). The knee is never sampled.")
