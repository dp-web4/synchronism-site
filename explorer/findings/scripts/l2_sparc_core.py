#!/usr/bin/env python3
r"""
Vectorised finite-volume solver for   div( C(rho) grad Phi ) = 4 pi G rho
on the axisymmetric (R, z >= 0) half plane, plus the SPARC mass-model builder.

Same stencil, grid and boundary condition as
  l2_vs_l3_and_the_missing_striction_force.py  (explorer 2026-08-26),
whose assembly is a Python double loop (fine for one disc, too slow for 149
galaxies x ~30 parameter sets).  The assembly here is array-based; it is
validated against the original loop assembly to machine precision and against
the exact Hankel transform of an exponential/sech^2 disc in
l2_field_equation_on_sparc.py (section 0).

Units: kpc, Msun, km/s.   G = 4.3009e-6 kpc (km/s)^2 / Msun.
"""
import os
import sys
import numpy as np
import scipy.sparse as sp
import scipy.sparse.linalg as spl

HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)
sys.path.insert(0, os.path.join(HERE, "..", "..", "scripts"))
import l2_vs_l3_and_the_missing_striction_force as L2   # noqa: E402  (Grid, hankel, models)
import rar_scatter_nogo_real_sparc as LOAD               # noqa: E402  (SPARC loader)

G = L2.G
KPC3 = L2.KPC3_PER_PC3
Grid = L2.Grid
A0_KPC = 1.2e-10 / 3.24078e-14         # a0 in (km/s)^2/kpc  = 3703


# ----------------------------------------------------------------- solver
def solve_poisson_fast(g, C, Mcell, Cmin_far, Mtot):
    """Identical discretisation to L2.solve_poisson, assembled with arrays."""
    NR, NZ = g.NR, g.NZ
    N = NR * NZ
    Ar_p = 2 * np.pi * g.Rf[1:][:, None] * g.dz[None, :]
    Ar_m = 2 * np.pi * g.Rf[:-1][:, None] * g.dz[None, :]
    Az = (np.pi * (g.Rf[1:]**2 - g.Rf[:-1]**2))[:, None] * np.ones((1, NZ))
    Cr = np.zeros((NR + 1, NZ)); Cr[1:-1] = 0.5 * (C[:-1] + C[1:])
    Cz = np.zeros((NR, NZ + 1)); Cz[:, 1:-1] = 0.5 * (C[:, :-1] + C[:, 1:])
    dRc = np.diff(g.Rc); dzc = np.diff(g.zc)

    I, J = np.meshgrid(np.arange(NR), np.arange(NZ), indexing="ij")
    k = (I * NZ + J).ravel()
    diag = np.zeros((NR, NZ))
    rhs = 4 * np.pi * G * Mcell.copy()
    rows, cols, vals = [], [], []

    # R- face (interior only; i=0 is the axis)
    w = np.zeros((NR, NZ)); w[1:] = Ar_m[1:] * Cr[1:-1] / dRc[:, None]
    m = I > 0
    rows.append(k[m.ravel()]); cols.append(((I - 1) * NZ + J)[m]); vals.append(w[m]); diag -= w
    # R+ face interior
    w = np.zeros((NR, NZ)); w[:-1] = Ar_p[:-1] * Cr[1:-1] / dRc[:, None]
    m = I < NR - 1
    rows.append(k[m.ravel()]); cols.append(((I + 1) * NZ + J)[m]); vals.append(w[m]); diag -= w
    # R+ Dirichlet at outer edge
    wb = Ar_p[-1] * C[-1] / (g.Rf[-1] - g.Rc[-1])
    r = np.hypot(g.Rf[-1], g.zc)
    rhs[-1] -= wb * (-G * Mtot / (Cmin_far * r)); diag[-1] -= wb
    # z- face (j=0 midplane: symmetry, no flux on the half grid)
    w = np.zeros((NR, NZ)); w[:, 1:] = Az[:, 1:] * Cz[:, 1:-1] / dzc[None, :]
    m = J > 0
    rows.append(k[m.ravel()]); cols.append((I * NZ + (J - 1))[m]); vals.append(w[m]); diag -= w
    if g.full_z:
        wb = Az[:, 0] * C[:, 0] / (g.zc[0] - g.zf[0])
        r = np.hypot(g.Rc, g.zf[0])
        rhs[:, 0] -= wb * (-G * Mtot / (Cmin_far * r)); diag[:, 0] -= wb
    # z+ face interior
    w = np.zeros((NR, NZ)); w[:, :-1] = Az[:, :-1] * Cz[:, 1:-1] / dzc[None, :]
    m = J < NZ - 1
    rows.append(k[m.ravel()]); cols.append((I * NZ + (J + 1))[m]); vals.append(w[m]); diag -= w
    # z+ Dirichlet
    wb = Az[:, -1] * C[:, -1] / (g.zf[-1] - g.zc[-1])
    r = np.hypot(g.Rc, g.zf[-1])
    rhs[:, -1] -= wb * (-G * Mtot / (Cmin_far * r)); diag[:, -1] -= wb

    rows.append(k); cols.append(k); vals.append(diag.ravel())
    A = sp.csc_matrix((np.concatenate(vals), (np.concatenate(rows), np.concatenate(cols))),
                      shape=(N, N))
    return spl.spsolve(A, rhs.ravel()).reshape(NR, NZ)


def midplane_gR(g, Phi):
    dR = np.gradient(Phi, g.Rc, axis=0, edge_order=2)
    return dR[:, 0]


# ------------------------------------------------------------ coherence models
def C_framework(gamma, rho_c_pc3, floor):
    """Site's C = tanh(gamma ln(1 + rho/rho_c)), with a smooth floor:
       C = floor + (1-floor) tanh(...).  floor = Omega_m is the site's B_max = 1/Omega_m."""
    rc = rho_c_pc3 * KPC3
    return lambda r: floor + (1 - floor) * np.tanh(gamma * np.log1p(r / rc))


def C_refracted(eps0, q, rho_c_pc3):
    """Matsakos & Diaferio 2016 permittivity, Cesare+2020 parameterisation."""
    rc = rho_c_pc3 * KPC3
    return lambda r: eps0 + (1 - eps0) * 0.5 * (np.tanh(q * np.log(np.maximum(r, 1e-30) / rc)) + 1)


# --------------------------------------------------------------- mass models
def load_sparc(qmax=2, inc_cut=30.0):
    props = LOAD.load_table1()
    rows = LOAD.load_massmodels()
    by = {}
    for r in rows:
        by.setdefault(r["gid"], []).append(r)
    out = {}
    for gid, pts in by.items():
        p = props.get(gid)
        if p is None or p["Q"] > qmax or p["inc"] < inc_cut:
            continue
        pts = sorted(pts, key=lambda d: d["R"])
        d = {k: np.array([pt[k] for pt in pts]) for k in
             ("R", "Vobs", "eVobs", "Vgas", "Vdisk", "Vbul", "SBdisk", "SBbul")}
        d.update(props=p, gid=gid)
        out[gid] = d
    return out


def sigma_profiles(d, up_disk=0.5, up_bul=0.7, gas_mode="vgas"):
    """Surface densities (Msun/pc^2) on the SPARC radii."""
    R = d["R"]
    Sd = up_disk * d["SBdisk"]
    Sb = up_bul * d["SBbul"]
    if gas_mode == "vgas":
        Sg = LOAD.sigma_gas_from_vgas(R, d["Vgas"])
    elif gas_mode == "exp":
        Sg = LOAD.sigma_gas_exponential(R, d["props"]["MHI"], d["props"]["RHI"])
    else:
        Sg = np.zeros_like(R)
    return Sd, Sb, Sg


def interp_logsigma(Rgrid, R, S, Rd):
    """Log-linear interpolation of a surface density profile onto the grid,
    exponential extrapolation (scale Rd) beyond the last measured point,
    flat inside the first one."""
    S = np.asarray(S, float)
    pos = S > 0
    if pos.sum() < 2:
        return np.zeros_like(Rgrid)
    Rp, Sp = R[pos], S[pos]
    out = np.exp(np.interp(Rgrid, Rp, np.log(Sp)))
    out = np.where(Rgrid < Rp[0], Sp[0], out)
    beyond = Rgrid > Rp[-1]
    out = np.where(beyond, Sp[-1] * np.exp(-(Rgrid - Rp[-1]) / max(Rd, 0.05)), out)
    return out


def abel_deproject(g, R, Sb):
    """Spherical density (Msun/kpc^3) on the grid from a projected profile Sb (Msun/pc^2):
    rho(r) = -(1/pi) int_r^inf (dSigma/dR) dR / sqrt(R^2 - r^2), on a dense log grid with
    exponential extrapolation of Sigma beyond the last point."""
    pos = Sb > 0
    Rp, Sp = R[pos], Sb[pos] * 1e6
    Rd = max(0.5 * Rp[-1], 0.05)
    Rg = np.logspace(np.log10(0.25 * Rp[0]), np.log10(50 * Rp[-1]), 1500)
    Sg = np.exp(np.interp(np.log(Rg), np.log(Rp), np.log(Sp)))
    Sg = np.where(Rg < Rp[0], Sp[0], Sg)
    Sg = np.where(Rg > Rp[-1], Sp[-1] * np.exp(-(Rg - Rp[-1]) / Rd), Sg)
    dS = np.gradient(Sg, Rg)
    rr = np.hypot(g.RR, g.ZZ)
    rq = np.logspace(np.log10(Rg[0]), np.log10(Rg[-1]), 400)
    rho_q = np.zeros_like(rq)
    for i, r in enumerate(rq):
        m = Rg > r
        if m.sum() < 3:
            continue
        integrand = dS[m] / np.sqrt(Rg[m]**2 - r**2)
        rho_q[i] = -np.trapz(integrand, Rg[m]) / np.pi
    rho_q = np.clip(rho_q, 0, None)
    return np.interp(rr, rq, rho_q, left=rho_q[0], right=0.0)


def build_density(g, d, h_kpc, up_disk=0.5, up_bul=0.7, gas_mode="vgas", bulge="abel"):
    """rho(R,z) in Msun/kpc^3 on the grid: disc+gas as sech^2 slabs of half-thickness h,
    bulge as a spherical Hernquist profile matched to the SBbul mass and half-light radius.
    Returns rho and the exact-volume cell masses (z>0 half space)."""
    R = d["R"]; Rd = d["props"]["Rdisk"]
    Sd, Sb, Sg = sigma_profiles(d, up_disk, up_bul, gas_mode)
    # disc + gas slab, Sigma in Msun/kpc^2
    Sig = interp_logsigma(g.Rc, R, Sd + Sg, Rd) * 1e6
    # gas usually extends further; give the extrapolation the gas scale if gas dominates
    fz = 0.5 * (np.tanh(g.zf[1:] / h_kpc) - np.tanh(g.zf[:-1] / h_kpc))   # fraction per z-cell, int = 1/2 on half space... normalise below
    # sech^2 slab: rho = Sigma/(2h) sech^2(z/h);  int_0^inf = Sigma/2 ; cell mass = Sigma * area * (h/(2h)) [tanh diff]
    area = np.pi * (g.Rf[1:]**2 - g.Rf[:-1]**2)
    Mcell = (Sig * area)[:, None] * fz[None, :]          # tanh diff /2 = fraction of Sigma per half-space cell
    rho = (Sig / (2 * h_kpc))[:, None] / np.cosh(np.minimum(g.ZZ / h_kpc, 300.))**2
    # bulge
    if np.any(Sb > 0):
        Mb = 2 * np.pi * np.trapz(Sb * R, R) * 1e6       # Msun
        # half-light radius from cumulative SB
        cum = 2 * np.pi * np.concatenate([[0], np.cumsum(0.5 * (Sb[1:] * R[1:] + Sb[:-1] * R[:-1]) * np.diff(R))]) * 1e6
        Re = np.interp(0.5 * Mb, cum, R) if cum[-1] > 0 else R[0]
        a = Re / 1.8153                                     # Hernquist: R_e = 1.8153 a
        rr = np.hypot(g.RR, g.ZZ)
        if bulge == "abel":
            rho_b = abel_deproject(g, R, Sb)
            mb = rho_b * g.V
        else:
            rho_b = Mb / (2 * np.pi) * a / (np.maximum(rr, 1e-4) * (np.maximum(rr, 1e-4) + a)**3)
            mb = rho_b * g.V
            mb *= (0.5 * Mb) / mb.sum()                    # half-space mass exactly Mb/2
        rho = rho + rho_b
        Mcell = Mcell + mb
    return rho, Mcell


def make_grid(Rlast, NR=140, NZ=100, Rmax_fac=15.0, aR=5.5, aZ=8.0):
    Rmax = max(Rmax_fac * Rlast, 40.0)
    return Grid(Rmax=Rmax, zmax=Rmax, NR=NR, NZ=NZ, aR=aR, aZ=aZ)


def vbar_sparc(d, up_disk=0.5, up_bul=0.7):
    v2 = (d["Vgas"] * np.abs(d["Vgas"]) + up_disk * d["Vdisk"] * np.abs(d["Vdisk"])
          + up_bul * d["Vbul"] * np.abs(d["Vbul"]))
    return np.sqrt(np.clip(v2, 0, None)), v2


# ------------------------------------------------------------------ MOND refs
def mond_simple(gbar):
    """g_obs from simple mu, mu = x/(1+x), a0 = 1.2e-10."""
    y = gbar / A0_KPC
    return A0_KPC * y * (0.5 + np.sqrt(0.25 + 1.0 / np.maximum(y, 1e-30)))


def mond_rar(gbar):
    y = gbar / A0_KPC
    return gbar / (1 - np.exp(-np.sqrt(np.maximum(y, 1e-30))))
