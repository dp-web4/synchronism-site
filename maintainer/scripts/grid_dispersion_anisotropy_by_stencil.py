#!/usr/bin/env python3
"""Grid n = 2 dispersion by stencil: is the l = 4 (cubic) anisotropy generic, or a stencil choice?

PREREG: grid_dispersion_anisotropy_by_stencil_PREREG.md (committed 823387d before this file existed).

Massless scalar, cubic lattice a = 1 (= l_Pl, M_Pl = 1), leapfrog with dt = lam.
Symmetric 27-point stencil: weights w1 (6 faces), w2 (12 edges), w3 (8 corners).
  L(k) = sum_j w_j (2 - 2 cos(k.e_j));   (4/dt^2) sin^2(w dt/2) = L(k)
  => w^2 = L + dt^2 L^2 / 12 + ... = k^2 + eta(n) k^4 + O(k^6)
Decompose eta(n) = eta0 + eta4 * (sum n_i^4 - 3/5).
"""
import itertools
import numpy as np
import sympy as sp

kx, ky, kz, t = sp.symbols('kx ky kz t', real=True)
w1, w2, w3, lam = sp.symbols('w1 w2 w3 lam', real=True)
K = (kx, ky, kz)

nbrs = [e for e in itertools.product((-1, 0, 1), repeat=3) if e != (0, 0, 0)]
cls = {1: w1, 2: w2, 3: w3}


def symbol(scale):
    """Stencil symbol L(scale*k) as a series in scale to order 4."""
    L = 0
    for e in nbrs:
        x = scale * sum(ei * ki for ei, ki in zip(e, K))
        L += cls[sum(abs(ei) for ei in e)] * (x**2 - x**4 / 12)
    return sp.expand(L)


Ls = symbol(t)
c2 = sp.expand(Ls.coeff(t, 2))
c4 = sp.expand(Ls.coeff(t, 4))
S4 = kx**4 + ky**4 + kz**4
k2 = kx**2 + ky**2 + kz**2
# consistency: c2 = (2 w1 + 8 w2 + 8 w3) k^2
cons = sp.simplify(c2 / k2)
print("k^2 coefficient:", cons)

# c4 = A*S4 + B*k^4  -> solve
A, B = sp.symbols('A B')
sol = sp.solve(sp.Poly(sp.expand(c4 - (A * S4 + B * k2**2)), kx, ky, kz).coeffs(), [A, B], dict=True)[0]
print("spatial k^4 term: A*S4 + B*k^4 with A =", sp.simplify(sol[A]), ", B =", sp.simplify(sol[B]))
# eta(n) = A*s + B + lam^2/12  (time term), s = sum n^4
eta0 = sp.simplify(sol[A] * sp.Rational(3, 5) + sol[B] + lam**2 / 12)
eta4 = sp.simplify(sol[A])
print("eta0 =", eta0, "  eta4 =", eta4, "   (eta(n) = eta0 + eta4*(sum n^4 - 3/5))")

# ---------- numerics ----------
g = np.linspace(-np.pi, np.pi, 49)  # includes 0 and +-pi
KX, KY, KZ = np.meshgrid(g, g, g, indexing='ij')


_CL = {1: np.zeros_like(KX), 2: np.zeros_like(KX), 3: np.zeros_like(KX)}
for _e in nbrs:
    _CL[sum(abs(v) for v in _e)] += 2 - 2 * np.cos(_e[0] * KX + _e[1] * KY + _e[2] * KZ)


def Lnum(W1, W2, W3):
    return W1 * _CL[1] + W2 * _CL[2] + W3 * _CL[3]


def report(name, W1, W2, W3):
    assert abs(2 * W1 + 8 * W2 + 8 * W3 - 1) < 1e-12, "inconsistent stencil"
    L = Lnum(W1, W2, W3)
    if L.min() < -1e-12:
        print(f"{name}: L(k) < 0 somewhere (min {L.min():.3g}) -> unstable at every dt")
        return
    lam_max = 2 / np.sqrt(L.max())
    subs = {w1: W1, w2: W2, w3: W3}
    e4 = float(eta4.subs(subs))
    for lv, tag in ((lam_max, 'lam_max'), (1.0, 'lam=1')):
        if lv > lam_max + 1e-9:
            print(f"{name}: lam = 1 exceeds lam_max = {lam_max:.4f} -> UNSTABLE at one cell per tick")
            continue
        e0 = float(eta0.subs({**subs, lam: lv}))
        ax = e0 + e4 * (1 - 0.6)
        di = e0 + e4 * (1 / 3 - 0.6)
        print(f"{name}: {tag} = {lv:.4f}  eta0 = {e0:+.4f}  eta4 = {e4:+.4f}  eta(axis) = {ax:+.4f}  "
              f"eta(body diag) = {di:+.4f}  l=4 peak-to-peak = {abs(ax - di):.4f}")


print("\n--- P1/P2: 7-point face-neighbour ---")
report("7-pt", 0.5, 0.0, 0.0)
for lv in (0.1, 0.3, 1 / np.sqrt(3)):
    e0 = float(eta0.subs({w1: 0.5, w2: 0, w3: 0, lam: lv}))
    print(f"   lam = {lv:.3f}: |eta0| = {abs(e0):.4f}, l=4 p2p = {abs(float(eta4.subs({w1: .5, w2: 0, w3: 0}))) * (1 - 1/3):.4f}")

print("\n--- P3: isotropic-error family (eta4 = 0) ---")
iso = sp.solve([eta4, 2 * w1 + 8 * w2 + 8 * w3 - 1], [w1, w2], dict=True)[0]
print("eta4 = 0 family:", iso, "(w3 free)")

print("\n--- P4/P5: scan w3 over the isotropic family, and the general 2-parameter family ---")
best = None
for W3 in np.linspace(-0.2, 0.2, 401):
    W1 = float(iso[w1].subs(w3, W3)); W2 = float(iso[w2].subs(w3, W3))
    L = Lnum(W1, W2, W3)
    if L.min() < -1e-12:
        continue
    lam_max = 2 / np.sqrt(L.max())
    # lam at which eta0 = 0
    e0_at0 = float(eta0.subs({w1: W1, w2: W2, w3: W3, lam: 0}))
    lz = [float(np.sqrt(-12 * e0_at0))] if e0_at0 < 0 else []
    ok = [v for v in lz if v <= lam_max + 1e-9]
    if best is None or lam_max > best[3]:
        best = (W1, W2, W3, lam_max, lz)
    if ok:
        print(f"  ISO + eta0=0 stable: w=({W1:.4f},{W2:.4f},{W3:.4f}) lam_eta0=0 = {ok[0]:.4f} <= lam_max {lam_max:.4f}")
        break
else:
    print("  no isotropic-family member has eta0 = 0 at a stable lam")
print("  isotropic member with largest lam_max:", tuple(round(v, 4) if isinstance(v, float) else v for v in best[:4]),
      "lam(eta0=0) =", best[4])
report("iso-best", *best[:3])

print("\n  general family: stencils stable at lam = 1")
found = 0
for W2 in np.linspace(-0.1, 0.15, 51):
    for W3 in np.linspace(-0.1, 0.15, 51):
        W1 = (1 - 8 * W2 - 8 * W3) / 2
        L = Lnum(W1, W2, W3)
        if L.min() < -1e-12 or L.max() > 4 + 1e-9:
            continue
        found += 1
        if found <= 3:
            report(f"  lam=1-stable w=({W1:.3f},{W2:.3f},{W3:.3f})", W1, W2, W3)
print(f"  {found} of 2601 grid stencils are stable at lam = 1")

print("\n--- added after the first run (not pre-registered): closed forms and the lam = 1 anisotropy floor ---")
print("eta0 on the isotropic family:", sp.simplify(eta0.subs(iso)), " (independent of w3)")
lm = []
for W3 in np.linspace(-0.5, 0.5, 2001):
    W1 = float(iso[w1].subs(w3, W3)); W2 = float(iso[w2].subs(w3, W3))
    L = Lnum(W1, W2, W3)
    if L.min() >= -1e-12:
        lm.append((2 / np.sqrt(L.max()), W3))
print(f"isotropic family: {len(lm)} stable members; max lam_max = {max(lm)[0]:.4f} at w3 = {max(lm)[1]:.4f} (sqrt(3)/2 = {np.sqrt(3)/2:.4f})")
e4s = []
for W2 in np.linspace(-0.2, 0.2, 161):
    for W3 in np.linspace(-0.2, 0.2, 161):
        W1 = (1 - 8 * W2 - 8 * W3) / 2
        L = Lnum(W1, W2, W3)
        if L.min() < -1e-12 or L.max() > 4 + 1e-9:
            continue
        e4s.append(abs(float(eta4.subs({w1: W1, w2: W2, w3: W3}))))
print(f"lam = 1 stable stencils on a 161x161 weight grid: {len(e4s)}; min |eta4| = {min(e4s):.4f}, "
      f"min l=4 peak-to-peak = {min(e4s) * (1 - 1/3):.4f}")
