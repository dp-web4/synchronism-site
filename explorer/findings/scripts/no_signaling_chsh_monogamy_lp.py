#!/usr/bin/env python3
"""
Is CHSH violation monogamous for EVERY no-signaling theory, not just quantum mechanics? (explorer 2026-10-04)

B6 (PREDICTIONS.md) bets that entanglement is "not inherently monogamous" in the S > 2 regime, with
B1's no-signaling as a precondition. Toner (Proc. R. Soc. A 465, 59, 2009; quant-ph/0601172) bounds
the AB/AC CHSH trade-off by an LP over no-signaling distributions. Reproduce the no-signaling LP here.

Variables: p(a,b,c | x,y,z), a,b,c,x,y,z in {0,1} -> 64 numbers.
Constraints: normalization per (x,y,z); positivity; no-signaling for each party (its input does not
change the joint marginal of the other two).
Objective: maximize S_AB + S_AC, with S = E00 + E01 + E10 - E11 (CHSH), correlators computed on the
tripartite box with the third party's input fixed to 0 (no-signaling makes this choice irrelevant).
Controls: max S_AB alone must be 4 (PR box); max S_AB with C ignored... and the classical (local
deterministic) maximum of S_AB + S_AC must be 4 as well (2 + 2).
"""
import itertools
import numpy as np
from scipy.optimize import linprog

B = (0, 1)
idx = {}
for k, (a, b, c, x, y, z) in enumerate(itertools.product(B, repeat=6)):
    idx[(a, b, c, x, y, z)] = k
N = len(idx)


def row():
    return np.zeros(N)


Aeq, beq = [], []
for x, y, z in itertools.product(B, repeat=3):
    r = row()
    for a, b, c in itertools.product(B, repeat=3):
        r[idx[(a, b, c, x, y, z)]] = 1
    Aeq.append(r); beq.append(1)
# no-signaling: marginal over one party independent of that party's input
for party in range(3):
    for others_in in itertools.product(B, repeat=2):
        for others_out in itertools.product(B, repeat=2):
            r = row()
            for out in B:
                for inp, sgn in ((0, 1), (1, -1)):
                    o = list(others_out); i = list(others_in)
                    o.insert(party, out); i.insert(party, inp)
                    r[idx[tuple(o) + tuple(i)]] += sgn
            Aeq.append(r); beq.append(0)
Aeq, beq = np.array(Aeq), np.array(beq)


def corr_vec(pair, s1, s2):
    """E_{s1 s2} for parties pair=(0,1) or (0,2), third party's input = 0."""
    r = row()
    for a, b, c in itertools.product(B, repeat=3):
        outs = (a, b, c)
        for_in = [0, 0, 0]
        for_in[pair[0]] = s1; for_in[pair[1]] = s2
        sign = (-1) ** (outs[pair[0]] ^ outs[pair[1]])
        r[idx[outs + tuple(for_in)]] += sign
    return r


def chsh(pair):
    return corr_vec(pair, 0, 0) + corr_vec(pair, 0, 1) + corr_vec(pair, 1, 0) - corr_vec(pair, 1, 1)


def maximize(c):
    res = linprog(-c, A_eq=Aeq, b_eq=beq, bounds=[(0, 1)] * N, method="highs")
    return -res.fun, res.x


S_AB, S_AC = chsh((0, 1)), chsh((0, 2))
m1, _ = maximize(S_AB)
print(f"control: max S_AB over no-signaling boxes = {m1:.4f} (expect 4, PR box)")
m2, x2 = maximize(S_AB + S_AC)
print(f"max S_AB + S_AC over no-signaling boxes = {m2:.4f}")
print(f"   at that optimum S_AB = {S_AB @ x2:.4f}, S_AC = {S_AC @ x2:.4f}")
# trade-off curve: max S_AC given S_AB >= s
print("trade-off: max S_AC subject to S_AB >= s")
for s in (2.0, 2.2, 2.5, 2 * np.sqrt(2), 3.0, 3.5, 4.0):
    res = linprog(-S_AC, A_ub=[-S_AB], b_ub=[-s], A_eq=Aeq, b_eq=beq, bounds=[(0, 1)] * N, method="highs")
    print(f"   S_AB >= {s:.3f}: max S_AC = {-res.fun:.4f}")
# classical control: deterministic local strategies
best = -9
for fa in itertools.product(B, repeat=2):
    for fb in itertools.product(B, repeat=2):
        for fc in itertools.product(B, repeat=2):
            def E(f, g, s, t): return (-1) ** (f[s] ^ g[t])
            sab = E(fa, fb, 0, 0) + E(fa, fb, 0, 1) + E(fa, fb, 1, 0) - E(fa, fb, 1, 1)
            sac = E(fa, fc, 0, 0) + E(fa, fc, 0, 1) + E(fa, fc, 1, 0) - E(fa, fc, 1, 1)
            best = max(best, sab + sac)
print(f"control: local deterministic max S_AB + S_AC = {best} (expect 4)")
print("VERDICT:", "both pairs cannot exceed 2 under no-signaling (monogamy is a no-signaling theorem)"
      if m2 <= 4 + 1e-9 else "no-signaling permits shared violation")


# ---- Extension: A has FOUR inputs; AB's test uses A in {0,1}, AC's uses A in {2,3} (disjoint settings) ----
def disjoint_settings_lp():
    XA, XB, XC = range(4), B, B
    keys = list(itertools.product(B, B, B, XA, XB, XC))
    ix = {k: i for i, k in enumerate(keys)}
    n = len(keys)
    Ae, be = [], []
    for x, y, z in itertools.product(XA, XB, XC):
        r = np.zeros(n)
        for a, b, c in itertools.product(B, repeat=3):
            r[ix[(a, b, c, x, y, z)]] = 1
        Ae.append(r); be.append(1)
    ins = (XA, XB, XC)
    for party in range(3):
        oth = [p for p in range(3) if p != party]
        for oi in itertools.product(*(ins[p] for p in oth)):
            for oo in itertools.product(B, repeat=2):
                for i0 in ins[party]:
                    if i0 == 0:
                        continue
                    r = np.zeros(n)
                    for out in B:
                        for inp, sgn in ((0, 1), (i0, -1)):
                            o = [None] * 3; i = [None] * 3
                            o[party], i[party] = out, inp
                            for p, v, w in zip(oth, oo, oi):
                                o[p], i[p] = v, w
                            r[ix[tuple(o) + tuple(i)]] += sgn
                    Ae.append(r); be.append(0)

    def S(pair, aset):
        r = np.zeros(n)
        for sa, s2, sg in ((0, 0, 1), (0, 1, 1), (1, 0, 1), (1, 1, -1)):
            for a, b, c in itertools.product(B, repeat=3):
                outs = (a, b, c)
                inp = [aset[sa], 0, 0]
                inp[pair] = s2
                r[ix[outs + tuple(inp)]] += sg * (-1) ** (a ^ outs[pair])
        return r
    sab, sac = S(1, (0, 1)), S(2, (2, 3))
    res = linprog(-(sab + sac), A_eq=np.array(Ae), b_eq=np.array(be), bounds=[(0, 1)] * n, method="highs")
    x = res.x
    print(f"disjoint A settings: max S_AB + S_AC = {-res.fun:.4f}  (S_AB = {sab @ x:.3f}, S_AC = {sac @ x:.3f})")


disjoint_settings_lp()
