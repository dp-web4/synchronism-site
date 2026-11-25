#!/usr/bin/env python3
"""Is the Synchronism substrate in 't Hooft's CAI class? A permutation test.

PREREG (artifact: substrate_cai_permutation_test_output.json): explorer/findings/PREREG-substrate-vs-cai-permutation-test-20261125.md (commit ffac773, before running).

E1  stated rule (conservative first-order transfer gated by R >= 0): Lyapunov check (float) and an exhaustive
    functional graph of an integer version on small rings (recurrent set, cycle periods, Garden-of-Eden fraction).
E2  measurement primitive of kuramoto-lattice-suite 02/05: phi <- phi + r sin(theta - phi), image size on M bins.
E3  working substrate (Stage-1 Arm D) made bit-reversible by integer leapfrog: exact reversal, and breather survival
    under the archive's own Stage-1 classifier vs resolution M. P3c: true-Hamiltonian energy drift of the float run.
"""
import json
import os
import sys

import numpy as np

ARCHIVE_SIM = "/home/dp/ai-workspace/Synchronism/simulations"
sys.path.insert(0, ARCHIVE_SIM)
import phase1_stage1_localized_oscillation_substrate as s1  # noqa: E402  (archive's own Stage-1 code)

OUT = {}


# ---------------------------------------------------------------- E1a: float Lyapunov check
def lap_coupled_2d(u, R):
    out = np.zeros_like(u)
    for ax in (0, 1):
        Rb = 0.5 * (R + np.roll(R, -1, ax))
        out += Rb * (np.roll(u, -1, ax) - u) + np.roll(Rb, 1, ax) * (np.roll(u, 1, ax) - u)
    return out


def e1a():
    rng = np.random.default_rng(11)
    res = {}
    for dim in (1, 2):
        for n in (1, 2, 4, 8):
            for Ddt, label in ((0.01, "inside"), (0.30, "inside_hi"), (0.60, "outside_control")):
                viol_runs, rev_runs = 0, 0
                nruns = 20
                for _ in range(nruns):
                    shape = (128,) if dim == 1 else (32, 32)
                    u = rng.uniform(0, 1, size=shape) * (rng.uniform(size=shape) < 0.3)
                    u += 0.05 * rng.uniform(size=shape)
                    u = np.clip(u, 0, 1)
                    S_prev = np.sum(u * u)
                    viol = False
                    amps = []
                    for t in range(2000):
                        R = np.clip(1 - np.minimum(np.abs(u), 1.0) ** n, 0, 1)
                        lap = s1.lap_coupled(u, R) if dim == 1 else lap_coupled_2d(u, R)
                        u = u + Ddt * lap
                        S = np.sum(u * u)
                        if S > S_prev * (1 + 1e-12) + 1e-12:
                            viol = True
                        S_prev = S
                        if t % 10 == 0:
                            amps.append(float(np.max(np.abs(u))))
                    d = np.diff(np.array(amps[len(amps) // 2:]))
                    sg = np.sign(d[np.abs(d) > 1e-9])
                    reversals = int(np.sum(sg[1:] != sg[:-1])) if len(sg) > 1 else 0
                    viol_runs += viol
                    rev_runs += reversals >= 4
                res[f"dim{dim}_n{n}_Ddt{Ddt}_{label}"] = {
                    "runs": nruns, "runs_with_sumI2_increase": viol_runs, "runs_with_core_reversals>=4": rev_runs}
    return res


# ---------------------------------------------------------------- E1b: integer functional graph
def int_next(states, Imax, n, kappa):
    """states: (N, L) int array on a ring. Per bond, downhill flux q = floor(kappa * R(receiver) * |dI|)."""
    Ls = states.shape[1]
    a = states
    b = np.roll(states, -1, axis=1)                        # right neighbour
    d = a - b
    recv = np.where(d > 0, b, a)                            # receiver = lower cell
    R = 1.0 - (recv / Imax) ** n
    q = np.floor(kappa * R * np.abs(d) + 1e-12).astype(np.int64)
    flux = np.sign(d) * q                                   # >0 means a -> b
    new = states - flux + np.roll(flux, 1, axis=1)
    return new


def e1b():
    res = {}
    for (Ls, Imax) in ((5, 8), (6, 6), (7, 4)):
        base = Imax + 1
        N = base ** Ls
        idx = np.arange(N, dtype=np.int64)
        states = np.stack([(idx // base ** k) % base for k in range(Ls)], axis=1)
        for n in (2, 8):
            for kappa in (0.25, 0.5, 1.0):
                nxt = int_next(states, Imax, n, kappa)
                ok = (nxt.min() >= 0) and (nxt.max() <= Imax)
                if not ok:
                    res[f"L{Ls}_Imax{Imax}_n{n}_k{kappa}"] = {"left_state_space": True,
                                                              "min": int(nxt.min()), "max": int(nxt.max())}
                    continue
                f = np.zeros(N, dtype=np.int64)
                for k in range(Ls):
                    f += nxt[:, k] * base ** k
                assert np.all(np.sum(nxt, 1) == np.sum(states, 1))  # conservation
                g = f.copy()
                for _ in range(22):                                   # f^(2^22): past any transient
                    g = g[g]
                recurrent = np.unique(g)
                periods = {}
                for r in recurrent:
                    p, x = 1, f[r]
                    while x != r and p < 10000:
                        x = f[x]; p += 1
                    periods[p] = periods.get(p, 0) + 1
                has_pre = np.zeros(N, bool); has_pre[f] = True
                sectors = len(np.unique(np.sum(states, 1)))
                res[f"L{Ls}_Imax{Imax}_n{n}_k{kappa}"] = {
                    "states": int(N), "recurrent_states": int(len(recurrent)),
                    "cycle_period_counts(states)": {str(k): v for k, v in sorted(periods.items())},
                    "garden_of_eden_fraction": round(float(1 - has_pre.mean()), 4),
                    "injective": bool(len(np.unique(f)) == N),
                    "conserved_total_sectors": sectors}
    return res


# ---------------------------------------------------------------- E2: measurement primitive
def e2():
    M, r = 4096, 0.2
    res = {}
    for theta in (0.0, 1.3):
        phi = (np.arange(M) + 0.5) * 2 * np.pi / M
        for _ in range(50):
            phi = phi + r * np.sin(theta - phi)
        bins = np.unique(np.floor((phi % (2 * np.pi)) / (2 * np.pi) * M).astype(int))
        res[f"theta{theta}"] = {"M": M, "image_bins_after_50": int(len(bins)),
                                "bits_erased": round(float(np.log2(M / len(bins))), 2)}
    return res


# ---------------------------------------------------------------- E3: bit-reversible Arm D
DT = s1.DT


def accel_focus(u):
    return (s1.C2 * (np.roll(u, -1) - 2 * u + np.roll(u, 1)) - s1.OMEGA0_2 * u
            + s1.GAMMA * u ** 3 / (1.0 + (u / s1.U_S) ** 2))


def force_int(X, M):
    """Integer increment; identical float input -> identical output, so the step is exactly invertible."""
    return np.rint(DT * DT * M * accel_focus(X / M)).astype(np.int64)


def run_int(u0, M, kick, T_pre=s1.T_PRE, T_post=s1.T_POST, integer=True):
    if integer:
        X0 = np.rint(u0 * M).astype(np.int64)
        Xm = X0 - np.rint(0.5 * DT * DT * M * accel_focus(X0 / M)).astype(np.int64)  # v=0 start
    else:
        X0 = u0.copy(); Xm = X0 - 0.5 * DT * DT * accel_focus(X0)
    amps, widths = [], []
    scale = M if integer else 1.0
    for t in range(T_pre + T_post):
        if t == T_pre:
            if integer:
                Xm = Xm - np.rint(DT * M * kick).astype(np.int64)
            else:
                Xm = Xm - DT * kick
        if integer:
            Xn = 2 * X0 - Xm + force_int(X0, M)
        else:
            Xn = 2 * X0 - Xm + DT * DT * accel_focus(X0)
        Xm, X0 = X0, Xn
        if t % 50 == 0:
            u = X0 / scale
            amps.append(s1.core_amp(u)); widths.append(s1.eff_width(u))
    return s1.classify(amps, widths, energy_drift=None)


def reversal_exact(u0, M, steps=8000):
    X0 = np.rint(u0 * M).astype(np.int64)
    Xm = X0 - np.rint(0.5 * DT * DT * M * accel_focus(X0 / M)).astype(np.int64)
    A, B = Xm.copy(), X0.copy()
    for _ in range(steps):
        A, B = B, 2 * B - A + force_int(B, M)
    A, B = B, A                                    # reverse time: swap the pair
    for _ in range(steps):
        A, B = B, 2 * B - A + force_int(B, M)
    return bool(np.array_equal(B, Xm) and np.array_equal(A, X0)), int(np.max(np.abs(X0)))


def e3():
    res = {"pass_fraction": {}, "reversal": {}}
    n_runs = s1.N_RUNS
    ics = []
    rng = np.random.default_rng(1)
    for _ in range(n_runs):
        ics.append((s1.seed_pulse(rng), 0.05 * rng.standard_normal(s1.L)))
    runs = [run_int(u0, 1, k, integer=False) for (u0, k) in ics]
    res["pass_fraction"]["float_leapfrog"] = round(sum(r["pass"] for r in runs) / n_runs, 3)
    res["float_mean_width"] = round(float(np.mean([r["final_width"] for r in runs])), 1)
    for p in (3, 5, 7, 10, 14, 20):
        M = 2 ** p
        runs = [run_int(u0, M, k) for (u0, k) in ics]
        res["pass_fraction"][f"M=2^{p}"] = round(sum(r["pass"] for r in runs) / n_runs, 3)
        res[f"mean_width_M=2^{p}"] = round(float(np.mean([r["final_width"] for r in runs])), 1)
        res[f"mean_amp_retained_M=2^{p}"] = round(float(np.mean([r["amp_retained"] for r in runs])), 3)
    for p in (3, 10, 20):
        oks = [reversal_exact(ics[i][0], 2 ** p)[0] for i in range(6)]
        res["reversal"][f"M=2^{p}"] = f"{sum(oks)}/6 bit-exact"
    return res


# ---------------------------------------------------------------- P3c: true-energy drift of archive Arm D
def V_nl(u):
    a2 = s1.U_S ** 2
    return -s1.GAMMA * (a2 / 2) * (u * u - a2 * np.log1p(u * u / a2))


def energies(u, v):
    kin = 0.5 * np.sum(v * v)
    grad = 0.5 * s1.C2 * np.sum((np.roll(u, -1) - u) ** 2)
    pot = 0.5 * s1.OMEGA0_2 * np.sum(u * u)
    return kin + grad + pot, kin + grad + pot + np.sum(V_nl(u))


def p3c():
    rng = np.random.default_rng(1)
    worst_arch, worst_true = 0.0, 0.0
    for _ in range(8):
        u = s1.seed_pulse(rng); v = np.zeros(s1.L)
        a = accel_focus(u)
        e_a0, e_t0 = energies(u, v)
        for t in range(s1.T_PRE):                        # pre-kick only
            u = u + DT * v + 0.5 * DT * DT * a
            an = accel_focus(u); v = v + 0.5 * DT * (a + an); a = an
            if t % 50 == 0:
                ea, et = energies(u, v)
                worst_arch = max(worst_arch, abs(ea - e_a0) / abs(e_a0))
                worst_true = max(worst_true, abs(et - e_t0) / abs(e_t0))
    return {"archive_energy_fn_max_rel_dev": round(worst_arch, 4),
            "true_hamiltonian_max_rel_dev": round(worst_true, 6)}


if __name__ == "__main__":
    which = sys.argv[1:] or ["e1a", "e1b", "e2", "p3c", "e3"]
    for w in which:
        OUT[w] = globals()[w]()
        print(w, json.dumps(OUT[w], indent=1), flush=True)
    path = os.path.join(os.path.dirname(os.path.abspath(__file__)), "substrate_cai_permutation_test_output.json")
    old = json.load(open(path)) if os.path.exists(path) else {}
    old.update(OUT)
    json.dump(old, open(path, "w"), indent=1)
