#!/usr/bin/env python3
r"""
WHICH UNIVERSAL CONSTANT IS ACTUALLY UNIVERSAL?  eps0 vs a0, one parameter each.
===============================================================================

E2 of epsilon0_free_the_ceiling_rescue.py found that letting every galaxy choose
its OWN (eps0, rho_c) takes the L2 density-keyed class from chi2/N = 126.5 to
18.69 and beats MOND's 52.88, winning 85% of galaxies.

That comparison is NOT fair and must not be quoted as a win: it gives the class
2 free parameters per galaxy and MOND 0.  The honest version of the same question
is parameter-matched, and it is the sharpest test available, because BOTH theories
claim their constant is UNIVERSAL:

    Synchronism / Refracted Gravity :  eps0  (boost ceiling 1/eps0)   -- one value
    MOND                            :  a0                            -- one value

So: give each galaxy ONE free constant.  Let it measure eps0, and separately let
it measure a0.  Then ask which constant the galaxies agree about.

    - The FIT quality tells you which model has the right shape.
    - The SCATTER of the fitted constant tells you which one is a theory and
      which one is a per-galaxy curve fit.

A universal constant whose per-galaxy measurements scatter by a factor of 3 is
not a universal constant.

rho_c is held at the global best from the converged E1 profile (framework form,
rho_c = 3.5e-06, eps0 = 0.220 -> chi2/N = 126.5), so the class gets exactly one
free parameter per galaxy, matching MOND's one.

NUISANCES: Upsilon_disk = 0.5 FIXED for both sides; Upsilon_bul = 0.7; distance
and inclination NOT marginalised for either side.  Identical points, identical
treatment -- the comparison is a ratio, not an absolute.
"""
import os
import sys
import time
import numpy as np

HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)
import l2_sparc_core as K                      # noqa: E402
import l2_field_equation_on_sparc as D         # noqa: E402

RHO_C_BEST = 3.5e-06          # global optimum from the converged E1 profile
EPS = np.array([0.02, 0.035, 0.05, 0.073, 0.089, 0.12, 0.16, 0.22, 0.315, 0.42, 0.56, 0.661, 0.80])
A0S = np.logspace(np.log10(0.15e-10), np.log10(12e-10), 41)     # 1.9 dex, generous


def hdr(s):
    print("\n" + "=" * 78 + f"\n{s}\n" + "=" * 78, flush=True)


t0 = time.time()
gals = K.load_sparc()
G = [D.Gal(d) for d in gals.values()]
NN = np.array([int(g.ok.sum()) for g in G])
print(f"built {len(G)} galaxies in {time.time()-t0:.0f}s;  N = {NN.sum()} points", flush=True)

# ------------------------------------------------ per-galaxy eps0 (class)
M_eps = np.zeros((len(EPS), len(G)))
for a, e0 in enumerate(EPS):
    Cf = K.C_framework(0.489, RHO_C_BEST, e0)
    for i, g in enumerate(G):
        M_eps[a, i] = g.score(g.solve(Cf, e0)[0] * g.vbar2)[0]
    print(f"   eps0 = {e0:.3f}  global chi2/N = {M_eps[a].sum()/NN.sum():8.2f}", flush=True)

# ------------------------------------------------ per-galaxy a0 (MOND)
M_a0 = np.zeros((len(A0S), len(G)))
old = K.A0_KPC
for a, a0 in enumerate(A0S):
    K.A0_KPC = a0 / 3.24078e-14
    for i, g in enumerate(G):
        M_a0[a, i] = g.score(K.mond_simple(g.gbar_sparc) * g.d["R"])[0]
K.A0_KPC = old

hdr("1. GLOBAL (universal constant, as each theory actually claims)")
ie, ia = int(M_eps.sum(1).argmin()), int(M_a0.sum(1).argmin())
print(f"   class : best universal eps0 = {EPS[ie]:.3f}  (ceiling {1/EPS[ie]:.2f})"
      f"   chi2/N = {M_eps[ie].sum()/NN.sum():8.2f}")
print(f"   MOND  : best universal a0   = {A0S[ia]:.3e}"
      f"                 chi2/N = {M_a0[ia].sum()/NN.sum():8.2f}")
print(f"   -> MOND's fitted a0 is {A0S[ia]/1.2e-10:.2f}x the literature value 1.2e-10.")

hdr("2. PER-GALAXY (one free constant each -- parameter-matched)")
best_e, arg_e = M_eps.min(0), M_eps.argmin(0)
best_a, arg_a = M_a0.min(0), M_a0.argmin(0)
e0_gal, a0_gal = EPS[arg_e], A0S[arg_a]
print(f"   class : chi2/N = {best_e.sum()/NN.sum():8.2f}   median reduced chi2 = {np.median(best_e/NN):6.2f}")
print(f"   MOND  : chi2/N = {best_a.sum()/NN.sum():8.2f}   median reduced chi2 = {np.median(best_a/NN):6.2f}")
print(f"   class wins {100*np.mean(best_e < best_a):.0f}% of galaxies")
from scipy.stats import wilcoxon                                       # noqa: E402
print(f"   paired Wilcoxon on per-galaxy reduced chi2: p = {wilcoxon(best_e/NN, best_a/NN).pvalue:.2e}")

hdr("3. IS THE CONSTANT UNIVERSAL?  (the actual question)")
edge_e = np.mean((arg_e == 0) | (arg_e == len(EPS) - 1))
edge_a = np.mean((arg_a == 0) | (arg_a == len(A0S) - 1))
le, la = np.log10(e0_gal), np.log10(a0_gal)
print(f"   {'':<8s} {'median':>12s} {'16-84% (dex)':>16s} {'scatter':>10s} {'grid-edge':>10s}")
print(f"   {'eps0':<8s} {np.median(e0_gal):12.4f} "
      f"{np.percentile(le,84)-np.percentile(le,16):16.3f} "
      f"{np.std(le):10.3f} {100*edge_e:9.0f}%")
print(f"   {'a0':<8s} {np.median(a0_gal):12.4e} "
      f"{np.percentile(la,84)-np.percentile(la,16):16.3f} "
      f"{np.std(la):10.3f} {100*edge_a:9.0f}%")

# improvement bought by abandoning universality, per extra dof
d_e = M_eps[ie].sum() - best_e.sum()
d_a = M_a0[ia].sum() - best_a.sum()
ndof = len(G) - 1
print(f"\n   chi2 bought by letting the constant vary per galaxy ({ndof} extra dof):")
print(f"      class (eps0): dchi2 = {d_e:12.0f}   = {d_e/ndof:8.1f} per extra dof")
print(f"      MOND  (a0)  : dchi2 = {d_a:12.0f}   = {d_a/ndof:8.1f} per extra dof")
print(f"   ratio = {d_e/max(d_a,1e-9):.2f}x  -- how much more the class NEEDS non-universality.")
print("\n   NOTE: chi2 here is mis-scaled (D and i unmarginalised), so these are")
print("   NOT p-values.  The comparison is the RATIO between the two columns,")
print("   which share the pipeline, the points and the nuisance treatment.")

hdr("4. IS THE PER-GALAXY eps0 PREDICTABLE?  (the only escape left)")
print("   If eps0 varied with a galaxy observable in a stated way, the theory would")
print("   survive with one extra relation.  Correlate it against what SPARC knows.\n")
from scipy.stats import spearmanr                                      # noqa: E402
obs = {
    "log Vflat": np.array([np.log10(max(g.d["props"]["Vflat"], 10.0)) for g in G]),
    "log Rdisk": np.array([np.log10(max(g.d["props"]["Rdisk"], 0.05)) for g in G]),
    "log Mbar ": np.array([np.log10(max(g.Mtot, 1e6)) for g in G]),
    "log rho_m": np.array([np.log10(np.median(g.rho_mid[g.ok] / K.KPC3) + 1e-12) for g in G]),
    "log Breq ": np.array([np.log10(np.max(g.d["Vobs"][g.ok]**2 / g.vbar2[g.ok])) for g in G]),
}
print(f"   {'observable':<12s} {'rho_s(eps0)':>12s} {'p':>10s}  |  {'rho_s(a0)':>10s} {'p':>10s}")
for k, v in obs.items():
    r1, p1 = spearmanr(v, le)
    r2, p2 = spearmanr(v, la)
    print(f"   {k:<12s} {r1:+12.3f} {p1:10.2e}  |  {r2:+10.3f} {p2:10.2e}")

np.save(os.path.join(HERE, "universality_eps0_vs_a0.npy"),
        np.vstack([e0_gal, a0_gal, best_e, best_a, NN]))
print(f"\ntotal {time.time()-t0:.0f}s")
