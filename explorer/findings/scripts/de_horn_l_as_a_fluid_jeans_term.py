#!/usr/bin/env python3
"""
DE-sector Horn L completed as a fluid: does the pressure-gradient (Jeans) term the 2026-08-18
growth ODE omitted change "no channel of order eps^0"?        explorer, 2026-09-14

Pre-registration: explorer/work/2026-09-14-wake-and-prereg.md (committed 7d8efbf before this ran).

Model (Session 100 sector, rho_DE evaluated at the LOCAL matter density, DE comoving with matter):
    rho_tot = rho_m + f(rho_m),  f = rho_m (1-C)/C,  C = tanh(gamma ln(1+x)),  x = rho_m/rho_crit
    rho_m number-conserved (a^-3);  continuity then fixes p = rho_m f' - f   (barotropic, unified fluid)
    c_s^2 = dp/drho_tot = rho_m f''/(1+f')                     [c = 1]

Sub-horizon linear perturbations, Newtonian gauge, N = ln a  (derivation in the finding):
    delta_m'' + (2 + dlnH/dN - 3 c_s^2) delta_m' = [ 1.5 C (1+f') - c_s^2 (k/aH)^2 ] delta_m
With c_s^2 -> 0 this is 08-18's growth(cluster_de=True, adiabatic_pressure=False) exactly.
"""
import numpy as np
from scipy.integrate import solve_ivp

OM = 0.315
C_OVER_H0 = 2997.92458          # Mpc/h
Z_INI = 200.0

def rule(t):
    print("\n" + "=" * 92 + "\n" + t + "\n" + "=" * 92)

# --------------------------------------------------------------- analytic f, f', f'' in x (rho_crit units)
def f_derivs(x, gam):
    s = 2.0 * gam
    u = np.exp(s * np.log1p(x))
    um1 = np.expm1(s * np.log1p(x))
    ux = s * u / (1 + x)
    uxx = s * (s - 1) * u / (1 + x) ** 2
    f = 2 * x / um1
    fx = 2 / um1 - 2 * x * ux / um1 ** 2
    fxx = -4 * ux / um1 ** 2 - 2 * x * uxx / um1 ** 2 + 4 * x * ux ** 2 / um1 ** 3
    return f, fx, fxx

def x0_of(gam):
    return np.expm1(np.arctanh(OM) / gam)

def background(N, gam):
    X0 = x0_of(gam)
    x = X0 * np.exp(-3 * N)
    f, fx, fxx = f_derivs(x, gam)
    rho = x + f
    C = x / rho
    dlnH = 0.5 * (-3 * x * (1 + fx)) / rho
    cs2 = x * fxx / (1 + fx)
    E = np.sqrt(rho / (X0 + f_derivs(X0, gam)[0]))
    return x, C, fx, cs2, dlnH, E

def grow(gam, k, jeans=True, friction=True, N_out=None):
    """k in h/Mpc. Returns delta_m and d delta_m/dN at N_out (default today)."""
    def rhs(N, y):
        x, C, fx, cs2, dlnH, E = background(N, gam)
        cs2j = cs2 if jeans else 0.0
        cs2f = cs2 if friction else 0.0
        kah2 = (k * C_OVER_H0 / (np.exp(N) * E)) ** 2
        d, dp = y
        return [dp, -(2 + dlnH - 3 * cs2f) * dp + (1.5 * C * (1 + fx) - cs2j * kah2) * d]
    Ni = -np.log1p(Z_INI)
    ai = np.exp(Ni)
    t_eval = None if N_out is None else N_out
    sol = solve_ivp(rhs, [Ni, 0.0], [ai, ai], method="DOP853", rtol=1e-9, atol=1e-30,
                    t_eval=t_eval, max_step=0.01)
    return sol

def R_of(gam, k, **kw):
    ref = grow(0.5, k, **kw).y[:, -1]
    mod = grow(gam, k, **kw).y[:, -1]
    return (mod[0] / ref[0]) ** 2

# =============================================================== 0. background numbers
rule("0. c_s^2 OF THE UNIFIED FLUID (and of the DE component alone), by gamma and z")
print(f"{'gamma':>7} {'eps':>9} " + " ".join(f"{'z='+str(z):>12}" for z in [0, 0.5, 1, 3, 10]))
for gam in [0.48, 0.487, 0.499, 0.4999, 0.5001, 0.501, 0.513, 0.52]:
    row = []
    for z in [0, 0.5, 1, 3, 10]:
        _, _, _, cs2, _, _ = background(-np.log1p(z), gam)
        row.append(cs2)
    print(f"{gam:7.4f} {2*gam-1:+9.4f} " + " ".join(f"{v:+12.3e}" for v in row))
print("\nc_s^2 / eps at z=0 (leading order should be eps-independent):")
for gam in [0.45, 0.487, 0.4999, 0.500001, 0.5001, 0.513, 0.55]:
    _, _, _, cs2, _, _ = background(0.0, gam)
    print(f"   gamma={gam:<9} c_s^2/eps = {cs2/(2*gam-1):+.5f}")
# DE component alone (Koivisto-style separate fluid): c_a,DE^2 = x f''/f'
print("\nDE component alone, c_a,DE^2 = x f''/f' (a separate-fluid completion would use this):")
for gam in [0.487, 0.4999, 0.5001, 0.513]:
    vals = []
    for z in [0, 1, 3]:
        x = x0_of(gam) * (1 + z) ** 3
        f, fx, fxx = f_derivs(x, gam)
        vals.append(x * fxx / fx)
    print(f"   gamma={gam:<7} z=0,1,3: " + "  ".join(f"{v:+.4f}" for v in vals))
print("   -> O(1) and negative, NOT suppressed by eps: an imaginary sound speed at every gamma != 1/2.")

# =============================================================== 1. positive controls
rule("1. POSITIVE CONTROLS")
for k in [0.001, 0.1]:
    print(f"   gamma = 1/2 exactly, k={k}: c_s^2(z=0) = {background(0.0, 0.5)[3]:+.2e};"
          f"  R(0.5 vs 0.5) - 1 = {R_of(0.5, k)-1:+.2e}")
# 08-18 reproduction: jeans=False, friction=False with OM=0.3 in 08-18; here check k-independence
r1 = R_of(0.489, 0.001, jeans=False, friction=False)
r2 = R_of(0.489, 0.2, jeans=False, friction=False)
print(f"   08-18 limit (no Jeans, no friction), gamma=0.489: R(k=0.001)={r1:.6f}  R(k=0.2)={r2:.6f}"
      f"  (must be equal: scale-free)")
d_growth = np.sqrt(r1) - 1
print(f"   -> delta_m(z=0) shift in the 08-18 limit = {100*d_growth:+.3f} %  (08-18 quoted O(0.1-1)% channels)")

# =============================================================== 2. R(k) table
rule("2. R(k) = [delta_m(k,z=0;gamma)/delta_m(k,z=0;1/2)]^2  -- full fluid (Jeans + friction)")
KS = [0.001, 0.003, 0.01, 0.03, 0.1, 0.2]
GAMS = [0.48, 0.487, 0.495, 0.499, 0.4999, 0.49999, 0.500005, 0.50005, 0.5005, 0.505, 0.513]
print(f"{'gamma':>9} {'eps':>10} " + " ".join(f"{'k='+str(k):>11}" for k in KS))
table = {}
for gam in GAMS:
    row = [R_of(gam, k) for k in KS]
    table[gam] = row
    print(f"{gam:9.6f} {2*gam-1:+10.2e} " + " ".join(f"{v:11.4g}" for v in row))

# =============================================================== 3. the allowed band in eps
rule("3. PRE-REGISTERED RULE: excluded if |R-1| > 10% at any k <= 0.1; allowed if |R-1| < 1% at all k <= 0.2")
def maxdev(gam, kmax):
    ks = [k for k in [0.001, 0.003, 0.01, 0.02, 0.05, 0.1, 0.15, 0.2] if k <= kmax]
    return max(abs(R_of(gam, k) - 1) for k in ks)

def bisect_eps(sign, thresh, kmax):
    lo, hi = 1e-9, 0.1           # |eps|
    for _ in range(40):
        mid = np.sqrt(lo * hi)
        if maxdev(0.5 + sign * mid / 2, kmax) > thresh:
            hi = mid
        else:
            lo = mid
    return np.sqrt(lo * hi)

res = {}
for sign, lab in [(-1, "eps<0 (gamma<1/2, c_s^2<0: growth)"), (+1, "eps>0 (gamma>1/2, c_s^2>0: Jeans)")]:
    e10 = bisect_eps(sign, 0.10, 0.1)
    e1 = bisect_eps(sign, 0.01, 0.2)
    res[sign] = (e10, e1)
    print(f"   {lab}:  |eps|_10% (k<=0.1) = {e10:.2e}   |eps|_1% (k<=0.2) = {e1:.2e}"
          f"   -> gamma within {e10/2:.1e} / {e1/2:.1e} of 1/2")

print("\nCompare:")
print("   DESI DR2 direct fit (08-12):  gamma = 0.487 (-0.021/+0.024)  ->  eps = -0.026, sigma_eps ~ 0.045")
print("   SPARC galaxy sector (08-14):  eps = -0.022 +/- 0.22")
e10n = res[-1][0]
print(f"   Fluid-Horn-L allowed band is narrower than the DESI 1-sigma by a factor ~{0.045/e10n:.0f} (10% rule)")
for gam in [0.487, 0.489]:
    print(f"   At gamma={gam}: max |R-1| over k<=0.1 = {maxdev(gam, 0.1):.3g}  -> EXCLUDED" if maxdev(gam, 0.1) > 0.1
          else f"   At gamma={gam}: max |R-1| over k<=0.1 = {maxdev(gam, 0.1):.3g}")

# =============================================================== 4. which term does it
rule("4. ATTRIBUTION at gamma = 0.499 (eps = -0.002): switch terms off one at a time, k = 0.1")
for jeans, fric, lab in [(False, False, "08-18 (neither)"), (False, True, "friction only"),
                         (True, False, "Jeans only"), (True, True, "both (fluid)")]:
    print(f"   {lab:>16}:  R - 1 = {R_of(0.499, 0.1, jeans=jeans, friction=fric)-1:+.4e}")

# =============================================================== 5. scale dependence (08-18 said none)
rule("5. SHAPE: 08-18 said Horn L 'predicts no k-dependence'. Fluid Horn L at eps = +/-2e-5:")
for gam in [0.49999, 0.50001]:
    print(f"   gamma={gam}: " + "  ".join(f"k={k}: {R_of(gam,k)-1:+.2e}" for k in [0.001, 0.01, 0.05, 0.1, 0.2]))

# =============================================================== 6. ISW proxy (the literal import)
rule("6. ISW PROXY: psi ∝ (1+f') delta_m / a, k = 0.01 h/Mpc; net decay psi(z=3)->psi(0) vs gamma = 1/2")
Ns = -np.log1p(np.array([3.0, 2.0, 1.0, 0.5, 0.0]))[::1]
def psi_track(gam, k):
    sol = grow(gam, k, N_out=np.sort(Ns))
    out = []
    for N, d in zip(sol.t, sol.y[0]):
        _, _, fx, _, _, _ = background(N, gam)
        out.append((1 + fx) * d / np.exp(N))
    return np.array(out)       # ordered z = 3,2,1,0.5,0
ref = psi_track(0.5, 0.01)
print(f"   gamma=1/2 psi/psi(z=3): " + " ".join(f"{v/ref[0]:.4f}" for v in ref) + "   (z=3,2,1,0.5,0)")
for gam in [0.487, 0.499, 0.4999, 0.49999, 0.50001, 0.5001, 0.501, 0.513]:
    p = psi_track(gam, 0.01)
    dec_ref = ref[0] - ref[-1]
    dec = p[0] - p[-1]
    print(f"   gamma={gam:<8} psi/psi(z=3): " + " ".join(f"{v/p[0]:10.4g}" for v in p)
          + f"   ISW net-decay ratio = {dec/p[0] / (dec_ref/ref[0]):.4g}")
print("   (ISW ratio 1 = LambdaCDM. Negative = potential GROWS instead of decaying -> ISW sign flip.)")
