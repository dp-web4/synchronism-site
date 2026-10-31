#!/usr/bin/env python3
"""Polynomial-in-Z null on the recoverable chemistry rows (PREREG 6a1c4b6, 2026-10-31).

Loads the dict literals of each session script by executing it with stdout silenced, keeps element rows,
and compares r against the framework variable with r against Z (linear, sqrt, log, quadratic multiple-R).
"""
import contextlib, io, os, runpy, sys, warnings
import numpy as np

warnings.filterwarnings("ignore")
os.environ["MPLBACKEND"] = "Agg"
CHEM = "/home/dp/ai-workspace/Synchronism/simulations/chemistry"
SYMS = ("H He Li Be B C N O F Ne Na Mg Al Si P S Cl Ar K Ca Sc Ti V Cr Mn Fe Co Ni Cu Zn Ga Ge As Se Br Kr "
        "Rb Sr Y Zr Nb Mo Tc Ru Rh Pd Ag Cd In Sn Sb Te I Xe Cs Ba La Ce Pr Nd Pm Sm Eu Gd Tb Dy Ho Er Tm Yb "
        "Lu Hf Ta W Re Os Ir Pt Au Hg Tl Pb Bi Po At Rn").split()
ZOF = {s: i + 1 for i, s in enumerate(SYMS)}
ZOF["C_diamond"] = 6
ZOF["C-d"] = 6  # added after the registered run: diamond was dropped as a non-element in #109/#110/#114
T = 300.0
rng = np.random.default_rng(20261031)


def load(fname):
    import matplotlib
    matplotlib.use("Agg")
    import matplotlib.pyplot as plt
    plt.savefig = lambda *a, **k: None
    plt.show = lambda *a, **k: None
    with contextlib.redirect_stdout(io.StringIO()):
        return runpy.run_path(os.path.join(CHEM, fname))


def r(x, y):
    return float(np.corrcoef(x, y)[0, 1])


def quad_R(Z, y):
    A = np.vstack([np.ones_like(Z), Z, Z ** 2]).T
    yhat = A @ np.linalg.lstsq(A, y, rcond=None)[0]
    return r(yhat, y)


def shuffle_p(x, y, n=10000):
    obs = abs(r(x, y))
    hits = sum(abs(r(x, rng.permutation(y))) >= obs for _ in range(n))
    return (hits + 1) / (n + 1)


rows = []


def add(label, src, names, prop, fw, fwname, theta=None):
    names = [m for m in names if m in ZOF]
    idx = {m: i for i, m in enumerate(src)}
    sel = [idx[m] for m in names]
    y = np.asarray(prop, float)[sel]
    x = np.asarray(fw, float)[sel]
    Z = np.array([ZOF[m] for m in names], float)
    out = dict(label=label, n=len(names), fw=fwname, r_fw=r(x, y), r_Z=r(Z, y), r_sqrtZ=r(np.sqrt(Z), y),
               r_logZ=r(np.log(Z), y), R_quad=quad_R(Z, y), p_shuf=shuffle_p(x, y),
               zmin=int(Z.min()), zmax=int(Z.max()),
               r_jk_min=min(r(np.delete(x, i), np.delete(y, i)) * np.sign(r(x, y)) for i in range(len(y))))
    if theta is not None:
        out["r_theta"] = r(np.asarray(theta, float)[sel], y)
    rows.append(out)


# #109 sound velocity
g = load("sound_velocity_coherence.py")
d = g["elements_data"]; nm = list(d)
th = [d[m]["theta_D"] for m in nm]
inv_g = [th_i / (2 * T) for th_i in th]
add("#109 v_L", nm, nm, [d[m]["v_L"] for m in nm], inv_g, "1/γ_ph", th)
vD = [(3 / (1 / d[m]["v_L"] ** 3 + 2 / d[m]["v_T"] ** 3)) ** (1 / 3) for m in nm]
add("#109 v_D", nm, nm, vD, inv_g, "1/γ_ph", th)

# #110 elastic moduli
g = load("elastic_moduli_coherence.py")
d = g["elements_data"]; nm = list(d)
th = [d[m]["theta_D"] for m in nm]
inv_g = [t / (2 * T) for t in th]
for k in ("E", "G", "B"):
    add(f"#110 {k}", nm, nm, [d[m][k] for m in nm], inv_g, "1/γ_ph", th)

# #114 atomic volume
g = load("atomic_volume_coherence.py")
d = g["elements_data"]; nm = list(d)
th = [d[m]["theta_D"] for m in nm]
add("#114 V_a", nm, nm, [d[m]["Va"] for m in nm], [2 * T / t for t in th], "γ_ph", th)

# #118 EN / EA / softness vs γ_optical (= IE_ref/IE)
g = load("electron_affinity_coherence.py")
d = g["materials"]
nm = [m for m in d if d[m]["EN"] is not None and d[m]["EA"] > -0.2]
IE = np.array([d[m]["IE"] for m in nm]); EA = np.array([d[m]["EA"] for m in nm])
EN = np.array([d[m]["EN"] for m in nm])
add("#115 χ (Pauling)", nm, nm, EN, 1 / np.array([d[m]["gamma_optical"] for m in nm]), "1/γ_opt (∝IE)")
add("#118 softness S", nm, nm, 1 / (IE - EA), [d[m]["gamma_optical"] for m in nm], "γ_opt (∝1/IE)")
add("#118 EA", nm, nm, EA, 1 / np.array([d[m]["gamma_optical"] for m in nm]), "1/γ_opt (∝IE)")

# #80 sound speed, elements only
g = load("sound_speed_coherence.py")
d = g["materials"]; nm = list(d)
th = [d[m][3] for m in nm]
el = [m for m in nm if m in ZOF]
add("#80 v_L (elements)", nm, el, [d[m][0] for m in nm], th, "θ_D", th)

hdr = f"{'row':22s} {'n':>3s} {'Z':>7s} {'fw':>14s} {'r_fw':>7s} {'r_θD':>7s} {'r_Z':>7s} {'r_√Z':>7s} {'r_lnZ':>7s} {'R_quad':>7s} {'p_shuf':>8s} {'jk_min':>7s}"
print(hdr); print("-" * len(hdr))
for o in rows:
    rt = f"{o['r_theta']:7.3f}" if "r_theta" in o else "    —  "
    print(f"{o['label']:22s} {o['n']:3d} {o['zmin']:3d}-{o['zmax']:<3d} {o['fw']:>14s} {o['r_fw']:7.3f} {rt} "
          f"{o['r_Z']:7.3f} {o['r_sqrtZ']:7.3f} {o['r_logZ']:7.3f} {o['R_quad']:7.3f} {o['p_shuf']:8.4f} {o['r_jk_min']:7.3f}")
