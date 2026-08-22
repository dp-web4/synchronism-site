#!/usr/bin/env python3
"""
ADDENDUM to yukawa_symmetric_kernel_self_check.py -- explorer 2026-08-22.

Three numbers from the main run are quotable ONLY with an error bar, and the
program has a documented history (5 over-refutations, 1 over-affirmation) of
quoting unbootstrapped point estimates:

  (1) "the exterior exponent minimises at q = 1.75, not Newton's 2"
      -> 0.1145 vs 0.1175 dex is a 0.003 dex difference.  Bootstrap it before
         anyone reads a departure from the inverse square into it.
  (2) "the screening length is constrained to lambda_s >~ 1 R_d"
      -> locate the separation threshold on a fine grid with the same
         galaxy-block bootstrap.
  (3) "08-19's causal family was SEPARATED from g_bar at every lambda <= 4 R_d"
      -> my Part G says 4 R_d OVERLAPS.  08-19's own CI lower edge was +0.0003.
         Re-run 08-19's member on 08-19's point set (no common-validity mask) to
         see whether the discrepancy is the mask or the marginality.
"""
import os, sys
import numpy as np

HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)
sys.path.insert(0, os.path.abspath(os.path.join(HERE, "..", "..", "scripts")))

from yukawa_symmetric_kernel_self_check import (   # noqa: E402
    build_profiles, assemble, causal_mean, enclosed_mass_power, score, hdr,
)
from rar_scatter_nogo_real_sparc import conditional_scatter   # noqa: E402

RNG = np.random.default_rng(20260822)
NB = 300

gals = build_profiles()
LS_FINE = [0.25, 0.4, 0.5, 0.6, 0.75, 1.0, 1.25, 1.5, 2.0, 3.0, 4.0, 1.0e6]
A = assemble(gals, LS_FINE)
logB, M, gid = A["logB"], A["mask"], A["gid"]
ug = np.unique(gid[M])
idx_by_g = {g: np.where((gid == g) & M)[0] for g in ug}


def block_boot(members, nb=NB):
    out = {n: [] for n in members}
    for _ in range(nb):
        pick = RNG.choice(ug, size=len(ug), replace=True)
        idx = np.concatenate([idx_by_g[g] for g in pick])
        lb = logB[idx]
        for n, arr in members.items():
            v = arr[idx]
            good = np.isfinite(v) & (v > 0)
            if good.sum() < 200:
                out[n].append(np.nan); continue
            out[n].append(conditional_scatter(np.log10(v[good]), lb[good])[1])
    return {n: np.array(v) for n, v in out.items()}


hdr("(1) EXTERIOR EXPONENT q -- IS 1.75 DISTINGUISHABLE FROM NEWTON'S 2?")
qs = [1.25, 1.5, 1.75, 2.0, 2.25, 2.5]
mem = {f"q={q}": np.concatenate([enclosed_mass_power(g, q) for g in gals]) for q in qs}
mem["g_bar"] = A["gbar"]
B = block_boot(mem)
print(f"  {'member':>10}{'median':>10}{'95% CI':>22}{'delta vs q=2':>24}")
ref2 = B["q=2.0"]
for q in qs:
    a = B[f"q={q}"]
    d = a - ref2
    lo, hi = np.nanpercentile(d, [2.5, 97.5])
    clo, chi = np.nanpercentile(a, [2.5, 97.5])
    tag = "" if lo <= 0 <= hi else "   <-- DISTINGUISHABLE from q=2"
    print(f"  {'q='+str(q):>10}{np.nanmedian(a):>10.4f}   [{clo:.4f}, {chi:.4f}]"
          f"   {np.nanmedian(d):>+8.4f} [{lo:+.4f},{hi:+.4f}]{tag}")
# bootstrap distribution of the ARGMIN itself
qgrid = np.arange(1.0, 3.01, 0.25)
memq = {f"Q{q:.2f}": np.concatenate([enclosed_mass_power(g, q) for g in gals])
        for q in qgrid}
Bq = block_boot(memq, nb=200)
stack = np.vstack([Bq[f"Q{q:.2f}"] for q in qgrid])          # [nq, nb]
argmins = qgrid[np.nanargmin(stack, axis=0)]
print(f"\n  bootstrap distribution of argmin_q:  median {np.median(argmins):.2f}, "
      f"95% CI [{np.percentile(argmins,2.5):.2f}, {np.percentile(argmins,97.5):.2f}]")
print(f"  fraction of resamples with argmin >= 2.0 : {np.mean(argmins >= 2.0):.3f}")
print(f"  q = 0 (pure accumulated mass, no falloff): "
      f"{score(np.concatenate([enclosed_mass_power(g,0.0) for g in gals]), logB, M):.4f} dex")

hdr("(2) WHERE DOES SCREENING START TO COST?  FINE lambda_s GRID")
memL = {f"ls={ls:g}": A["per"][ls]["fld"] for ls in LS_FINE}
memL["g_bar"] = A["gbar"]
BL = block_boot(memL)
ref = BL["g_bar"]
print(f"  {'lambda_s/R_d':>13}{'median':>10}{'delta vs g_bar':>26}   verdict")
for ls in LS_FINE:
    a = BL[f"ls={ls:g}"]
    d = a - ref
    lo, hi = np.nanpercentile(d, [2.5, 97.5])
    lab = "inf" if ls > 1e5 else f"{ls:g}"
    verd = "OVERLAPS g_bar" if lo <= 0 <= hi else "SEPARATED from g_bar"
    print(f"  {lab:>13}{np.nanmedian(a):>10.4f}   {np.nanmedian(d):>+8.4f} "
          f"[{lo:+.4f},{hi:+.4f}]   {verd}")

hdr("(3) DOES 08-19'S OWN 'SEPARATED AT 4 R_d' REPRODUCE?")
print("  08-19 Part F reported causal l=4Rd: delta = +0.0157 [+0.0003, +0.0340].")
print("  The lower edge is +0.0003 -- separation by 3e-4 dex.  Re-run here on")
print("  (a) my common-validity point set and (b) the unmasked 08-19 point set.\n")
caus4 = np.concatenate([causal_mean(g, 4.0) for g in gals])
caus_inf = np.concatenate([causal_mean(g, 1.0e6) for g in gals])
for label, mask in (("common-validity mask (N=%d)" % M.sum(), M),
                    ("unmasked, 08-19 point set (N=%d)"
                     % (np.isfinite(caus4) & (caus4 > 0)).sum(),
                     np.isfinite(caus4) & (caus4 > 0) & (A["gbar"] > 0))):
    ugm = np.unique(gid[mask])
    ib = {g: np.where((gid == g) & mask)[0] for g in ugm}
    vals, refs = [], []
    for _ in range(NB):
        pick = RNG.choice(ugm, size=len(ugm), replace=True)
        idx = np.concatenate([ib[g] for g in pick])
        lb = logB[idx]
        v = caus4[idx]; good = np.isfinite(v) & (v > 0)
        vals.append(conditional_scatter(np.log10(v[good]), lb[good])[1])
        r = A["gbar"][idx]; g2 = np.isfinite(r) & (r > 0)
        refs.append(conditional_scatter(np.log10(r[g2]), lb[g2])[1])
    d = np.array(vals) - np.array(refs)
    lo, hi = np.nanpercentile(d, [2.5, 97.5])
    print(f"  {label:>36}: delta = {np.nanmedian(d):+.4f} [{lo:+.4f}, {hi:+.4f}]  "
          + ("SEPARATED" if lo > 0 else "OVERLAPS"))

hdr("(4) THE OPERATOR CLAIM, BOOTSTRAPPED")
print("  Symmetry held fixed; only the functional varies.  lambda_s = 4 R_d and inf.\n")
memO = {}
for ls in (4.0, 1.0e6):
    lab = "4Rd" if ls < 1e5 else "inf"
    memO[f"<Sigma>_Y {lab}"] = A["per"][ls]["sbar"]
    memO[f"|Phi_Y| {lab}"] = A["per"][ls]["pot"]
    memO[f"g_Y {lab}"] = A["per"][ls]["fld"]
memO["g_bar"] = A["gbar"]
BO = block_boot(memO)
ref = BO["g_bar"]
print(f"  {'functional':>18}{'median':>10}{'delta vs g_bar':>26}   verdict")
for n in memO:
    a = BO[n]; d = a - ref
    lo, hi = np.nanpercentile(d, [2.5, 97.5])
    verd = "OVERLAPS g_bar" if lo <= 0 <= hi else "SEPARATED from g_bar"
    print(f"  {n:>18}{np.nanmedian(a):>10.4f}   {np.nanmedian(d):>+8.4f} "
          f"[{lo:+.4f},{hi:+.4f}]   {verd}")


hdr("(5) IS THE |Phi_Y| FAILURE REAL, OR AN OUTER-TRUNCATION ARTIFACT?")
print("  Phi converges more slowly than g with the outer radius, so the Phi row of the")
print("  operator table could in principle be a truncation artifact.  Sweep r_out.\n")
print(f"  {'r_out/R_last':>13}{'g_bar':>9}{'|Phi_Y| inf':>13}{'g_Y inf':>10}"
      f"{'|Phi_Y| ratio':>15}{'g_Y ratio':>11}")
for rom in (1.0, 2.0, 3.0, 6.0, 12.0):
    gg = build_profiles(r_out_mult=rom)
    AA = assemble(gg, [1.0e6])
    lb2, MM = AA["logB"], AA["mask"]
    sg = score(AA["gbar"], lb2, MM)
    sp = score(AA["per"][1.0e6]["pot"], lb2, MM)
    sf = score(AA["per"][1.0e6]["fld"], lb2, MM)
    print(f"  {rom:>13.1f}{sg:>9.4f}{sp:>13.4f}{sf:>10.4f}{sp/sg:>14.2f}x{sf/sg:>10.2f}x")
