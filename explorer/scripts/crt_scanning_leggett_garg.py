"""CRT temporal-scanning model vs Leggett-Garg and the quantum Zeno effect.

PREREG: explorer/work/2026-09-21-crt-leggett-garg/PREREG.md (committed ee7f509 before this file existed).

Hidden state: phase phi on the precession great circle. A measurement samples the fast scan at a detector
instant u ~ U[0,1): mode + iff u < cos^2(phi/2) (Born duty cycle -- ASSUMED, not derived in the archive).
  Model N    : sampling leaves phi unchanged ("nothing about the screen changed").
  Model I(s) : after sampling mode m, phi -> (1-s)*phi + s*phi_m  (phi_m = 0 for +, nearest of +-pi for -).
Between measurements phi advances by theta = omega*tau.
"""
import numpy as np

rng = np.random.default_rng(20260921)
M = 400_000  # runs per correlator


def wrap(p):
    return (p + np.pi) % (2 * np.pi) - np.pi


def sample(phi, s, neg=None):
    """Return (outcome +-1, new phi). neg: None = ordinary; 'sync' / 'nosync' = detector coupled to - only.
    For negative measurement, a click means mode -; no click means + inferred. 'nosync': no-click runs are
    not touched (phi unchanged); 'sync': the no-click run was still a sampling (phase-lock) event."""
    u = rng.random(phi.shape)
    plus = u < np.cos(phi / 2) ** 2
    q = np.where(plus, 1, -1)
    target = np.where(plus, 0.0, np.where(phi >= 0, np.pi, -np.pi))
    new = (1 - s) * phi + s * target
    if neg == 'nosync':
        new = np.where(plus, phi, new)  # detector (coupled to -) found nothing: no interaction
    return q, wrap(new)


def correlator(pair, theta, s, phi0, neg=None):
    """Measure only the two times in `pair` (subset of {1,2,3}); times 1,2,3 at 0, theta, 2*theta after phi0."""
    phi = np.full(M, phi0, dtype=float) if np.isscalar(phi0) else phi0.copy()
    out = {}
    for k in (1, 2, 3):
        if k > 1:
            phi = wrap(phi + theta)
        if k in pair:
            q, phi = sample(phi, s, neg if k == 2 else None)  # negative measurement applied at the middle time
            out[k] = q
    a, b = pair
    return np.mean(out[a] * out[b]), np.std(out[a] * out[b]) / np.sqrt(M)


def K(theta, s, phi0, neg=None):
    c12, e12 = correlator((1, 2), theta, s, phi0, neg)
    c23, e23 = correlator((2, 3), theta, s, phi0, neg)
    c13, e13 = correlator((1, 3), theta, s, phi0, neg)
    return c12 + c23 - c13, np.sqrt(e12**2 + e23**2 + e13**2)


def zeno(N, s, runs=M):
    """Start in + (phi=0), rotate by pi in total with N equally spaced measurements (last one at the end)."""
    phi = np.zeros(runs)
    for _ in range(N):
        phi = wrap(phi + np.pi / N)
        q, phi = sample(phi, s)
    return np.mean(q == -1)


print("=== P1/P2: K(theta) = C12 + C23 - C13; QM = 2cos(theta) - cos(2 theta) ===")
thetas = np.linspace(0.1, np.pi, 12)
maxN = -9
worst = 0
for th in thetas:
    qm = 2 * np.cos(th) - np.cos(2 * th)
    kI, eI = K(th, 1.0, 0.0)
    kN_best = max(K(th, 0.0, p0)[0] for p0 in np.linspace(-np.pi, np.pi, 13))
    kN_mix, _ = K(th, 0.0, rng.uniform(-np.pi, np.pi, M))
    maxN = max(maxN, kN_best)
    worst = max(worst, abs(kI - qm) / eI) if eI > 0 else worst
    print(f"theta={th:5.3f}  QM={qm:+.4f}  I(1)={kI:+.4f}+-{eI:.4f}  N(best phi0)={kN_best:+.4f}  N(mixed)={kN_mix:+.4f}")
print(f"max K over grid, model N (13 initial phases): {maxN:.4f}   worst |I(1)-QM|/sigma: {worst:.2f}")
k, e = K(np.pi / 3, 1.0, 0.0)
print(f"K(pi/3) model I(1) = {k:.4f} +- {e:.4f}   (QM 1.5)")

print("\n=== P4: ideal negative measurement at t2 (detector coupled to - only) ===")
for neg in ('sync', 'nosync'):
    k, e = K(np.pi / 3, 1.0, 0.0, neg)
    print(f"  I(1), no-click runs {neg:6s}: K(pi/3) = {k:.4f} +- {e:.4f}")
# the actual negative-measurement protocol keeps only no-click runs at t2; compute C23 conditioned that way
phi = np.zeros(M)
q1, phi = sample(phi, 1.0)
for neg in ('sync', 'nosync'):
    p = wrap(np.zeros(M) + 0.0)
    q1, p = sample(p, 1.0)
    p = wrap(p + np.pi / 3)
    q2, p = sample(p, 1.0, neg)
    p = wrap(p + np.pi / 3)
    q3, _ = sample(p, 1.0)
    noclick = q2 == 1
    c12 = np.mean((q1 * q2)[noclick]); c23 = np.mean((q2 * q3)[noclick])
    print(f"  no-click-only subset ({neg:6s}): <Q2Q3 | Q2=+ inferred> = {c23:+.4f}  (QM, i.e. sync: cos(pi/3) = +0.5)")

print("\n=== P3: quantum Zeno, pi rotation, N measurements; P(transition to -) ===")
for N in (1, 2, 4, 8, 16, 32, 64):
    pN, pI = zeno(N, 0.0), zeno(N, 1.0)
    # run 1 (and PREREG P3) used 1 - cos^{2N}(pi/2N) = P(left + at ANY step), the wrong statistic.
    # P(final outcome -) is Itano 1990's (1 - cos^N(pi/N))/2.
    qm = (1 - np.cos(np.pi / N) ** N) / 2
    print(f"N={N:3d}  model N={pN:.4f}  model I(1)={pI:.4f}  QM={qm:.4f}")
print("NB model N's *last* sample is at phi=pi exactly, so P=1 for all N; the pre-final samples are irrelevant.")

print("\n=== P5: partial reset I(s), K(pi/3) and Zeno N=64 ===")
ss = np.linspace(0, 1, 21)
ks = []
for s in ss:
    k, e = K(np.pi / 3, s, 0.0)
    kmax = max(K(th, s, 0.0)[0] for th in np.linspace(0.2, 1.4, 7))
    ks.append(kmax)
    print(f"s={s:4.2f}  K(pi/3)={k:+.4f}+-{e:.4f}  max_theta K={kmax:+.4f}  Zeno(N=64)={zeno(64, s, 100_000):.4f}")
ks = np.array(ks)
above = ss[ks > 1.0 + 0.01]
print(f"smallest s with max_theta K > 1.01: {above.min() if len(above) else None}")
