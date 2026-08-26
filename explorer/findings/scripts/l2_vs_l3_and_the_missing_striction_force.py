#!/usr/bin/env python3
r"""
Does the galaxy sector's field equation have an action, and does it matter?

The site (/honest-assessment, lines 163-172) asserts:
    "L3 is the spherical solution of  div(C grad Phi) = 4 pi G rho  (L2), so L2 == L3.
     Every test on this page uses L2 == L3. ... None of the refutations below change --
     they are driven by the shape of C and the B <= 3.17 ceiling, NOT by the presence or
     absence of a Lagrangian."

Two claims are tested here, both by direct computation on a real exponential disc:

  (1) GEOMETRY.  div(C grad Phi) = C lap Phi + grad C . grad Phi.  L3 (g = g_bar/C) is the
      spherical branch, which drops grad C . grad Phi.  A disc is not spherical.
      How big is the dropped term?

  (2) THE ACTION.  Matsakos & Diaferio 2016 (this IS the same equation -- refracted gravity)
      wrote, and deferred:
        "The consequences of a variational approach applied to a possible RG Lagrangian of
         the form L = eps/8piG (grad Phi)^2 + rho Phi should also be investigated."
      Run it.  Varying that Lagrangian w.r.t. Phi returns the field equation.  Varying w.r.t.
      the matter (delta rho = -div(rho xi)) returns an EXTRA force per unit mass

            a_extra = -grad Psi,      Psi = C'(rho) |grad Phi|^2 / (8 pi G)

      This is the gravitational analogue of the Korteweg-Helmholtz ELECTROSTRICTION term in
      a dielectric whose permittivity depends on mass density (Landau & Lifshitz ECM sec.15).
      Claim to verify numerically: WITHOUT it the theory violates Newton's third law, with a
      net self-force  F_tot = -(1/8 pi G) \int |grad Phi|^2 grad C  dV ;  WITH it the total
      force on an isolated system is exactly zero.

Units: kpc, Msun, km/s.
"""
import numpy as np
import scipy.sparse as sp
import scipy.sparse.linalg as spl

G = 4.300917270e-6          # kpc (km/s)^2 / Msun
KPC3_PER_PC3 = 1.0e9        # (Msun/pc^3) -> (Msun/kpc^3) multiply by 1e9

# ---------------------------------------------------------------- grids
def stretched_faces(xmax, n, a=4.0, x0=0.0):
    t = np.linspace(0.0, 1.0, n + 1)
    return x0 + (xmax - x0) * (np.exp(a * t) - 1.0) / (np.exp(a) - 1.0)

def two_sided_faces(zmax, n, a=5.0):
    """Symmetric stretched faces from -zmax to +zmax (n must be even)."""
    half = stretched_faces(zmax, n // 2, a)
    return np.concatenate([-half[::-1], half[1:]])

class Grid:
    def __init__(self, Rmax, zmax, NR, NZ, aR=4.5, aZ=6.5, full_z=False):
        self.Rf = stretched_faces(Rmax, NR, aR)
        self.full_z = full_z
        # z >= 0 with midplane reflection symmetry, unless full_z
        self.zf = two_sided_faces(zmax, NZ, aZ) if full_z else stretched_faces(zmax, NZ, aZ)
        NZ = len(self.zf) - 1
        self.Rc = 0.5 * (self.Rf[:-1] + self.Rf[1:])
        self.zc = 0.5 * (self.zf[:-1] + self.zf[1:])
        self.NR, self.NZ = NR, NZ
        self.dR = np.diff(self.Rf)
        self.dz = np.diff(self.zf)
        # cell volumes  pi (R+^2 - R-^2) dz   (half-space z>0)
        self.V = (np.pi * (self.Rf[1:]**2 - self.Rf[:-1]**2))[:, None] * self.dz[None, :]
        self.RR, self.ZZ = np.meshgrid(self.Rc, self.zc, indexing='ij')

# ---------------------------------------------------------------- solver
def solve_poisson(g, C, Mcell, Cmin_far, Mtot):
    """Solve  div(C grad Phi) = 4 pi G rho  by finite volume on the (R,z>=0) half plane.

    Mcell : mass in each cell of the z>0 half space (Msun)
    Dirichlet outer BC: Phi = -G Mtot / (Cmin_far * r)   (exact once C has floored)
    """
    NR, NZ = g.NR, g.NZ
    idx = lambda i, j: i * NZ + j
    N = NR * NZ
    rows, cols, vals = [], [], []
    rhs = np.zeros(N)

    # face conductances
    Ar_p = 2 * np.pi * g.Rf[1:][:, None] * g.dz[None, :]      # outer R face area
    Ar_m = 2 * np.pi * g.Rf[:-1][:, None] * g.dz[None, :]
    Az   = (np.pi * (g.Rf[1:]**2 - g.Rf[:-1]**2))[:, None] * np.ones(NZ)[None, :]

    Cr = np.zeros((NR + 1, NZ)); Cr[1:-1] = 0.5 * (C[:-1] + C[1:])
    Cz = np.zeros((NR, NZ + 1)); Cz[:, 1:-1] = 0.5 * (C[:, :-1] + C[:, 1:])

    dRc = np.diff(g.Rc); dzc = np.diff(g.zc)

    for i in range(NR):
        for j in range(NZ):
            k = idx(i, j); diag = 0.0
            # ---- R- face (i=0 is the axis: zero area, no flux)
            if i > 0:
                w = Ar_m[i, j] * Cr[i, j] / dRc[i - 1]
                rows.append(k); cols.append(idx(i - 1, j)); vals.append(w); diag -= w
            # ---- R+ face
            if i < NR - 1:
                w = Ar_p[i, j] * Cr[i + 1, j] / dRc[i]
                rows.append(k); cols.append(idx(i + 1, j)); vals.append(w); diag -= w
            else:
                # Dirichlet at R = Rmax
                w = Ar_p[i, j] * C[i, j] / (g.Rf[-1] - g.Rc[i])
                r = np.hypot(g.Rf[-1], g.zc[j])
                rhs[k] -= w * (-G * Mtot / (Cmin_far * r)); diag -= w
            # ---- z- face (on a half grid, j=0 is the midplane: zero flux by symmetry)
            if j > 0:
                w = Az[i, j] * Cz[i, j] / dzc[j - 1]
                rows.append(k); cols.append(idx(i, j - 1)); vals.append(w); diag -= w
            elif g.full_z:
                w = Az[i, j] * C[i, j] / (g.zc[j] - g.zf[0])
                r = np.hypot(g.Rc[i], g.zf[0])
                rhs[k] -= w * (-G * Mtot / (Cmin_far * r)); diag -= w
            # ---- z+ face
            if j < NZ - 1:
                w = Az[i, j] * Cz[i, j + 1] / dzc[j]
                rows.append(k); cols.append(idx(i, j + 1)); vals.append(w); diag -= w
            else:
                w = Az[i, j] * C[i, j] / (g.zf[-1] - g.zc[j])
                r = np.hypot(g.Rc[i], g.zf[-1])
                rhs[k] -= w * (-G * Mtot / (Cmin_far * r)); diag -= w
            rows.append(k); cols.append(k); vals.append(diag)
            rhs[k] += 4 * np.pi * G * Mcell[i, j]

    A = sp.csr_matrix((vals, (rows, cols)), shape=(N, N))
    return spl.spsolve(A, rhs).reshape(NR, NZ)

# ---------------------------------------------------------------- gradients
def grad(g, Phi):
    """Centred gradient at cell centres. Midplane: dPhi/dz = 0 at j=0 by symmetry."""
    dR = np.gradient(Phi, g.Rc, axis=0, edge_order=2)
    dz = np.gradient(Phi, g.zc, axis=1, edge_order=2)
    if not g.full_z:
        dz[:, 0] = 0.0
    return dR, dz

# ---------------------------------------------------------------- coherence models
class Model:
    """C(rho) and dC/drho.  rho in Msun/kpc^3."""
    def __init__(self, name, C, dC, Cmin):
        self.name, self.C, self.dC, self.Cmin = name, C, dC, Cmin

def framework(gamma=2.0, rho_crit_pc3=0.029 * 150.0**2, Cmin=0.315):
    """Site's C(rho) = tanh(gamma ln(rho/rho_crit + 1)), floored at B_max^-1 = Omega_m.
    Smooth floor (the hard max() version has C' = 0 by fiat below the knee, which would
    assume the answer)."""
    rc = rho_crit_pc3 * KPC3_PER_PC3
    def C(r):
        return Cmin + (1 - Cmin) * np.tanh(gamma * np.log1p(r / rc))
    def dC(r):
        u = gamma * np.log1p(r / rc)
        return (1 - Cmin) * (1.0 / np.cosh(u))**2 * gamma / (r + rc)
    return Model(f"framework(gamma={gamma}, rho_crit={rho_crit_pc3:.3g} Msun/pc^3)", C, dC, Cmin)

def refracted(eps0=0.089, q=0.47, rho_c_pc3=8.3e-3):
    """Cesare et al. 2020 (A&A 637, A70) best fit to 30 DiskMass galaxies.
    eps = eps0 + (1-eps0) * 0.5 * (tanh[q ln(rho/rho_c)] + 1)."""
    rc = rho_c_pc3 * KPC3_PER_PC3
    def C(r):
        return eps0 + (1 - eps0) * 0.5 * (np.tanh(q * np.log(np.maximum(r, 1e-30) / rc)) + 1)
    def dC(r):
        u = q * np.log(np.maximum(r, 1e-30) / rc)
        return (1 - eps0) * 0.5 * (1.0 / np.cosh(u))**2 * q / np.maximum(r, 1e-30)
    return Model(f"refracted gravity (Cesare+2020: eps0={eps0}, q={q}, rho_c={rho_c_pc3:.3g} Msun/pc^3)",
                 C, dC, eps0)

def newtonian():
    return Model("Newtonian (C=1)", lambda r: np.ones_like(r), lambda r: np.zeros_like(r), 1.0)

# ---------------------------------------------------------------- mass models
def disc_cellmass(g, Md, Rd, z0):
    """Exact cell masses for rho = rho0 exp(-R/Rd) sech^2(z/z0), normalised to Md."""
    rho0 = Md / (4 * np.pi * Rd**2 * z0)
    fR = Rd * ((g.Rf[:-1] + Rd) * np.exp(-g.Rf[:-1] / Rd) -
               (g.Rf[1:] + Rd) * np.exp(-g.Rf[1:] / Rd))          # int R e^-R/Rd dR / 1
    fz = z0 * (np.tanh(g.zf[1:] / z0) - np.tanh(g.zf[:-1] / z0))
    return rho0 * 2 * np.pi * fR[:, None] * fz[None, :]

def disc_rho(g, Md, Rd, z0):
    rho0 = Md / (4 * np.pi * Rd**2 * z0)
    return rho0 * np.exp(-g.RR / Rd) / np.cosh(np.minimum(g.ZZ / z0, 300.))**2

def sphere_cellmass(g, M, rc, zc0):
    """Uniform sphere of mass M, radius rc, centred on the axis at z = zc0.
    Cell mass by midpoint rule x cell volume, renormalised to M exactly."""
    rho = np.where(np.hypot(g.RR, g.ZZ - zc0) <= rc, 1.0, 0.0)
    m = rho * g.V
    return m * (M / m.sum()) if m.sum() > 0 else m

# ---------------------------------------------------------------- Freeman disc (analytic)
def freeman_v(R, Md, Rd):
    from scipy.special import i0, i1, k0, k1
    y = np.maximum(R, 1e-9) / (2 * Rd)
    S0 = Md / (2 * np.pi * Rd**2)
    return np.sqrt(np.maximum(4 * np.pi * G * S0 * Rd * y**2 *
                              (i0(y) * k0(y) - i1(y) * k1(y)), 0.0))

# ---------------------------------------------------------------- exact Newtonian reference
def hankel_disc(R, z, Md, Rd, z0, nk=4000, kmax_fac=400.0, nzp=1200):
    r"""EXACT Newtonian g_R and g_z for rho = rho0 exp(-R/Rd) sech^2(z/z0), by Hankel transform.

    rho~(k,z) = rho0 sech^2(z/z0) Rd^2 (1+k^2 Rd^2)^{-3/2}
    Phi~(k,z) = -(2 pi G / k) \int e^{-k|z-z'|} rho~(k,z') dz'
    Phi(R,z)  = \int_0^inf Phi~(k,z) J0(kR) k dk
    """
    from scipy.special import j0, j1
    rho0 = Md / (4 * np.pi * Rd**2 * z0)
    k = np.linspace(1e-6, kmax_fac / Rd, nk)
    zp = np.linspace(-40 * z0, 40 * z0, nzp)
    fz = 1.0 / np.cosh(zp / z0)**2
    R = np.atleast_1d(R); z = np.atleast_1d(z)
    gR = np.zeros((len(R), len(z))); gz = np.zeros((len(R), len(z)))
    shape = Rd**2 / (1 + (k * Rd)**2)**1.5
    for jz, zz in enumerate(z):
        e = np.exp(-np.abs(zz - zp)[None, :] * k[:, None])
        I  = np.trapz(e * fz[None, :], zp, axis=1)                       # int e^{-k|z-z'|} f dz'
        sgn = np.sign(zz - zp)[None, :]
        Iz = np.trapz(sgn * e * fz[None, :], zp, axis=1)                 # d/dz of the above / (-k)
        A = 2 * np.pi * G * rho0 * shape                                  # common prefactor
        for iR, RR_ in enumerate(R):
            gR[iR, jz] = np.trapz(A * I * j1(k * RR_) * k, k)            # = dPhi/dR
            gz[iR, jz] = np.trapz(A * Iz * j0(k * RR_) * k, k)           # = dPhi/dz
    return gR, gz


# ================================================================ VALIDATION
def validate():
    print("=" * 78)
    print("VALIDATION")
    print("=" * 78)

    # A. uniform sphere, C = 1  ->  Phi = -GM/r outside
    g = Grid(Rmax=200., zmax=200., NR=120, NZ=120, aR=4.0, aZ=4.0)
    M, rc = 1e11, 5.0
    Mc = sphere_cellmass(g, M / 2, rc, 0.0)      # half-space holds M/2
    C = np.ones_like(g.RR)
    Phi = solve_poisson(g, C, Mc, 1.0, M)
    r = np.hypot(g.RR, g.ZZ)
    out = (r > 3 * rc) & (r < 100.)
    exact = -G * M / r
    err = np.abs(Phi - exact)[out] / np.abs(exact)[out]
    print(f"A. uniform sphere, C=1, Phi vs -GM/r on 15<r<100 kpc:")
    print(f"     max rel err {err.max():.3e}   median {np.median(err):.3e}")

    # B. exponential disc at PRODUCTION thickness, C=1, vs exact Hankel reference
    Md, Rd, z0 = 5e10, 3.0, 0.3
    Rtest = np.array([1., 2., 4., 6.6, 10., 15., 20., 30.])
    gRh, _ = hankel_disc(Rtest, np.array([0.0]), Md, Rd, z0)
    for (NR, NZ) in [(180, 200), (260, 280)]:
        g = Grid(Rmax=400., zmax=400., NR=NR, NZ=NZ, aR=4.5, aZ=8.0)
        Mc = disc_cellmass(g, Md, Rd, z0)   # already the z>0 half
        Phi = solve_poisson(g, np.ones_like(g.RR), Mc, 1.0, Md)
        dR, dz = grad(g, Phi)
        num = np.interp(Rtest, g.Rc, dR[:, 0])
        rel = np.abs(num - gRh[:, 0]) / gRh[:, 0]
        jz = np.argmin(np.abs(g.zc - 1.5))
        _, gzh = hankel_disc(Rtest, np.array([g.zc[jz]]), Md, Rd, z0)
        numz = np.interp(Rtest, g.Rc, dz[:, jz])
        sel = Rtest <= 20.
        relz = (np.abs(numz - gzh[:, 0]) / np.abs(gzh[:, 0]))[sel]
        print(f"B. disc z0=0.3 kpc, C=1, vs EXACT Hankel  [{NR}x{NZ} cells]:")
        print(f"     dPhi/dR at z=0     : max rel err {rel.max():.3%}  median {np.median(rel):.3%}")
        print(f"     K_z at z={g.zc[jz]:.2f} kpc, R<=20 : max rel err {relz.max():.3%}  "
              f"median {np.median(relz):.3%}")

    # C. spherically symmetric source with C(rho) -> L2 must reproduce L3 exactly
    g = Grid(Rmax=200., zmax=200., NR=140, NZ=140, aR=4.0, aZ=4.0)
    m = refracted()
    M, rc = 1e11, 20.0
    Mc = sphere_cellmass(g, M / 2, rc, 0.0)
    rho = np.where(np.hypot(g.RR, g.ZZ) <= rc, M / (4 / 3 * np.pi * rc**3), 1e-8)
    C = m.C(rho)
    Phi = solve_poisson(g, C, Mc, m.Cmin, M)
    dR, dz = grad(g, Phi)
    rr = np.hypot(g.RR, g.ZZ)
    gr = (dR * g.RR + dz * g.ZZ) / np.maximum(rr, 1e-9)
    Menc = np.where(rr <= rc, M * (rr / rc)**3, M)
    gL3 = G * Menc / np.maximum(rr, 1e-9)**2 / C
    sel = (rr > 2.) & (rr < 80.)
    rel = np.abs(gr - gL3)[sel] / gL3[sel]
    print(f"C. SPHERICAL source with C(rho): L2 solve vs L3 (g = g_bar/C), 2<r<80 kpc:")
    print(f"     max rel err {rel.max():.3%}   median {np.median(rel):.3%}   "
          f"(this is the discretisation floor; L2==L3 IS exact here)")
    print()

# ================================================================ EXPERIMENTS
A0 = 1.2e-10 / 3.24078e-14      # a_0 in (km/s)^2 / kpc  -> 3703

def plummer(g, M, a, z_c=0.0):
    rho = M * 3.0 / (4 * np.pi * a**3) * (1 + (np.hypot(g.RR, g.ZZ - z_c) / a)**2)**-2.5
    Mc = rho * g.V
    return rho, Mc


def exp1_L2_vs_L3(model, Md=5e10, Rd=3.0, z0=0.3, NR=260, NZ=280, tag=""):
    """Is L3 (g = g_bar/C) the solution of L2 (div C grad Phi = 4 pi G rho) for a DISC?"""
    g = Grid(Rmax=400., zmax=400., NR=NR, NZ=NZ, aR=4.5, aZ=8.0)
    Mc = disc_cellmass(g, Md, Rd, z0)
    rho = disc_rho(g, Md, Rd, z0)
    C = model.C(rho)

    Phi_N = solve_poisson(g, np.ones_like(rho), Mc, 1.0, Md)      # Newtonian, same grid
    Phi_2 = solve_poisson(g, C, Mc, model.Cmin, Md)               # L2
    dRN, dzN = grad(g, Phi_N)
    dR2, dz2 = grad(g, Phi_2)

    gL3 = dRN / C                                                 # L3 branch, midplane
    print(f"\n--- EXP 1  L2 vs L3 in the midplane of an exponential disc  {tag}")
    print(f"    {model.name}")
    print(f"    Md={Md:.1e} Msun  Rd={Rd} kpc  z0={z0} kpc")
    print(f"    {'R':>6} {'rho(R,0)':>11} {'C':>7} {'g_bar':>9} {'g_L3':>9} {'g_L2':>9} "
          f"{'L2/L3':>7} {'v_L3':>7} {'v_L2':>7}")
    rows = []
    for R in [1., 2., 3., 5., 8., 10., 15., 20., 30., 50.]:
        i = np.argmin(np.abs(g.Rc - R))
        gb, g3, g2, cc = dRN[i, 0], gL3[i, 0], dR2[i, 0], C[i, 0]
        v3, v2 = np.sqrt(max(R * g3, 0)), np.sqrt(max(R * g2, 0))
        rows.append((g.Rc[i], rho[i, 0], cc, gb, g3, g2, g2 / g3, v3, v2))
        print(f"    {g.Rc[i]:6.2f} {rho[i,0]/KPC3_PER_PC3:11.3e} {cc:7.4f} {gb:9.1f} "
              f"{g3:9.1f} {g2:9.1f} {g2/g3:7.4f} {v3:7.2f} {v2:7.2f}")
    r = np.array([x[6] for x in rows])
    print(f"    L2/L3 over 1-50 kpc: min {r.min():.4f}  max {r.max():.4f}  "
          f"=> max deviation from 'L2 == L3': {100*np.abs(r-1).max():.2f}% in g, "
          f"{100*np.abs(np.sqrt(r)-1).max():.2f}% in v")
    return g, rho, C, Phi_N, Phi_2, dRN, dzN, dR2, dz2


def exp2_striction(g, rho, C, model, Phi2, dR2, dz2, Md=5e10, Rd=3.0, tag=""):
    """The Korteweg-Helmholtz / electrostriction term the variational principle demands."""
    gradsq = dR2**2 + dz2**2
    Psi = model.dC(rho) * gradsq / (8 * np.pi * G)                # units (km/s)^2
    dPsiR = np.gradient(Psi, g.Rc, axis=0, edge_order=2)
    dPsiZ = np.gradient(Psi, g.zc, axis=1, edge_order=2)
    if not g.full_z:
        dPsiZ[:, 0] = 0.0
    print(f"\n--- EXP 2  the variational EXTRA force  a_extra = -grad[C'(rho)|grad Phi|^2/8piG]  {tag}")
    print(f"    {'R':>6} {'Psi/|Phi|':>10} {'dPsi/dR':>10} {'dPhi/dR':>10} {'ratio':>8} "
          f"{'v(no Psi)':>10} {'v(with Psi)':>11} {'dv':>7}")
    for R in [1., 2., 3., 5., 8., 10., 15., 20., 30.]:
        i = np.argmin(np.abs(g.Rc - R))
        gr, ge = dR2[i, 0], dPsiR[i, 0]
        v0 = np.sqrt(max(R * gr, 0)); v1 = np.sqrt(max(R * (gr + ge), 0))
        print(f"    {g.Rc[i]:6.2f} {Psi[i,0]/abs(Phi2[i,0]):10.3e} {ge:10.2f} {gr:10.2f} "
              f"{ge/gr:8.4f} {v0:10.2f} {v1:11.2f} {100*(v1/v0-1) if v0>0 else 0:6.2f}%")
    # vertical channel (TEST-27)
    print(f"    vertical channel, K_z at fixed R (the 2026-08-25 pre-registered discriminator):")
    print(f"    {'R':>6} {'z':>6} {'dPhi/dz':>10} {'dPsi/dz':>10} {'ratio':>8}")
    for R in [4., 8.]:
        for Z in [0.5, 1.0, 2.0]:
            i = np.argmin(np.abs(g.Rc - R)); j = np.argmin(np.abs(g.zc - Z))
            gz_, ge = dz2[i, j], dPsiZ[i, j]
            print(f"    {g.Rc[i]:6.2f} {g.zc[j]:6.2f} {gz_:10.2f} {ge:10.2f} {ge/gz_:8.4f}")
    return Psi, dPsiR, dPsiZ


def exp3_momentum(model, sep=30.0, M1=2e10, a1=3.0, M2=2e10, a2=12.0,
                  Rmax=90., zmax=90., NR=150, NZ=300, label=""):
    """Newton's third law.  Two Plummer spheres of equal mass but very different DENSITY,
    on the axis.  UNIFORM grid (a stretched grid gives each anisotropic cell a spurious
    self-force that swamps the effect).  The C=1 run on the same grid is the noise floor."""
    g = Grid.__new__(Grid)
    g.Rf = np.linspace(0., Rmax, NR + 1)
    g.zf = np.linspace(-zmax, zmax, NZ + 1)
    g.full_z = True
    g.Rc = 0.5 * (g.Rf[:-1] + g.Rf[1:]); g.zc = 0.5 * (g.zf[:-1] + g.zf[1:])
    g.NR, g.NZ = NR, NZ
    g.dR = np.diff(g.Rf); g.dz = np.diff(g.zf)
    g.V = (np.pi * (g.Rf[1:]**2 - g.Rf[:-1]**2))[:, None] * g.dz[None, :]
    g.RR, g.ZZ = np.meshgrid(g.Rc, g.zc, indexing='ij')

    r1, m1 = plummer(g, M1, a1, -sep / 2)
    r2, m2 = plummer(g, M2, a2, +sep / 2)
    rho, Mc = r1 + r2, m1 + m2
    Mtot = Mc.sum()
    scale = G * M1 * M2 / sep**2

    # --- control: C = 1 (must give zero net force; whatever we get is the noise floor)
    PhiN = solve_poisson(g, np.ones_like(rho), Mc, 1.0, Mtot)
    _, dzN = grad(g, PhiN)
    F_ctrl = -(Mc * dzN).sum()

    C = model.C(rho)
    Phi = solve_poisson(g, C, Mc, model.Cmin, Mtot)
    dR, dz = grad(g, Phi)
    F_naive = -(Mc * dz).sum()
    dCz = np.gradient(C, g.zc, axis=1, edge_order=2)
    F_defect = -(1 / (8 * np.pi * G)) * ((dR**2 + dz**2) * dCz * g.V).sum()
    Psi = model.dC(rho) * (dR**2 + dz**2) / (8 * np.pi * G)
    F_extra = -(Mc * np.gradient(Psi, g.zc, axis=1, edge_order=2)).sum()

    rho1 = M1 * 3 / (4 * np.pi * a1**3); rho2 = M2 * 3 / (4 * np.pi * a2**3)
    print(f"\n--- EXP 3  Newton's third law {label}")
    print(f"    {model.name}")
    print(f"    sphere 1: M={M1:.1e} a={a1} kpc  rho_c={rho1/KPC3_PER_PC3:.4g} Msun/pc^3  "
          f"C={model.C(np.array([rho1]))[0]:.4f}")
    print(f"    sphere 2: M={M2:.1e} a={a2} kpc  rho_c={rho2/KPC3_PER_PC3:.4g} Msun/pc^3  "
          f"C={model.C(np.array([rho2]))[0]:.4f}   separation {sep} kpc   grid {NR}x{NZ} uniform")
    u = lambda F: f"{F/scale:+9.4f}"
    print(f"    CONTROL  C=1, net axial force / (GM1M2/d^2)          : {u(F_ctrl)}   <- numerical noise floor")
    print(f"    NAIVE    g = -grad Phi,       net force / (GM1M2/d^2): {u(F_naive)}")
    print(f"    identity -(1/8piG) int |grad Phi|^2 dC/dz            : {u(F_defect)}")
    print(f"    striction  -int rho grad Psi                         : {u(F_extra)}")
    print(f"    NAIVE + striction (should be 0)                      : {u(F_naive + F_extra)}")
    print(f"    -> naive law violates Newton's third law by {abs((F_naive-F_ctrl)/scale):.3f} x "
          f"the pair's own mutual force")
    print(f"    -> identity reproduces the violation to "
          f"{abs((F_defect-(F_naive-F_ctrl))/max(abs(F_defect),1e-30)):.1%}")
    print(f"    -> striction term cancels it to "
          f"{abs((F_naive-F_ctrl+F_extra)/max(abs(F_naive-F_ctrl),1e-30)):.1%} of the violation")
    a_self = (F_naive - F_ctrl) / Mtot
    print(f"    self-acceleration of the isolated pair: {a_self:+.4g} (km/s)^2/kpc "
          f"= {a_self/A0:+.4f} a_0")
    return F_ctrl, F_naive, F_defect, F_extra


def exp4_scan(Md=5e10, Rd=3.0, z0=0.3, NR=240, NZ=260):
    """Where does the knee have to sit for the geometry term and the striction term to bite?
    Scan rho_crit for the FRAMEWORK's own functional form.  The framework's asserted
    rho_crit = 0.029 V^2 sits at the far right of this scan."""
    print("=" * 78)
    print("EXP 4  rho_crit scan, framework form C = Cmin + (1-Cmin) tanh(gamma ln(1+rho/rho_crit))")
    print("=" * 78)
    g = Grid(Rmax=400., zmax=400., NR=NR, NZ=NZ, aR=4.5, aZ=8.0)
    Mc = disc_cellmass(g, Md, Rd, z0)
    rho = disc_rho(g, Md, Rd, z0)
    PN = solve_poisson(g, np.ones_like(rho), Mc, 1.0, Md)
    dRN, dzN = grad(g, PN)
    print(f"    disc: Md={Md:.1e} Rd={Rd} z0={z0};  midplane rho: "
          f"{rho[np.argmin(abs(g.Rc-1)),0]/KPC3_PER_PC3:.3g} (1 kpc) -> "
          f"{rho[np.argmin(abs(g.Rc-8)),0]/KPC3_PER_PC3:.3g} (8 kpc) Msun/pc^3")
    print(f"    {'rho_crit':>10} {'gamma':>6} | {'max L2/L3':>10} {'@R':>5} | "
          f"{'max|dPsi/dR / dPhi/dR|':>23} | {'max|dPsi/dz / dPhi/dz|':>23}")
    print(f"    {'Msun/pc^3':>10} {'':>6} | {'(1<R<40)':>10} {'kpc':>5} | "
          f"{'midplane, 1<R<40':>23} | {'|z|<3 kpc, R=8':>23}")
    for gam in [2.0, 0.489]:
        for rc in [1e-4, 1e-3, 1e-2, 1e-1, 1.0, 10.0, 652.0]:
            m = framework(gamma=gam, rho_crit_pc3=rc)
            C = m.C(rho)
            P2 = solve_poisson(g, C, Mc, m.Cmin, Md)
            dR2, dz2 = grad(g, P2)
            sel = (g.Rc > 1) & (g.Rc < 40)
            ratio = (dR2[:, 0] / (dRN[:, 0] / C[:, 0]))[sel]
            Psi = m.dC(rho) * (dR2**2 + dz2**2) / (8 * np.pi * G)
            dPr = np.gradient(Psi, g.Rc, axis=0, edge_order=2)
            dPz = np.gradient(Psi, g.zc, axis=1, edge_order=2); dPz[:, 0] = 0.
            rr = np.abs(dPr[:, 0] / dR2[:, 0])[sel]
            i8 = np.argmin(np.abs(g.Rc - 8.)); jz = (g.zc > 0.1) & (g.zc < 3.)
            rz = np.abs(dPz[i8, jz] / dz2[i8, jz])
            print(f"    {rc:10.3g} {gam:6.3f} | {ratio.max():10.3f} "
                  f"{g.Rc[sel][np.argmax(ratio)]:5.1f} | {rr.max():23.4f} | {rz.max():23.4f}")


def exp5_vertical_profile(model, R=8.0, Md=5e10, Rd=3.0, z0=0.3, NR=240, NZ=260, tag=""):
    """Where in z does the striction force live, and how big is it there?"""
    g = Grid(Rmax=400., zmax=400., NR=NR, NZ=NZ, aR=4.5, aZ=8.0)
    Mc = disc_cellmass(g, Md, Rd, z0); rho = disc_rho(g, Md, Rd, z0)
    C = model.C(rho)
    P2 = solve_poisson(g, C, Mc, model.Cmin, Md)
    dR2, dz2 = grad(g, P2)
    Psi = model.dC(rho) * (dR2**2 + dz2**2) / (8 * np.pi * G)
    dPz = np.gradient(Psi, g.zc, axis=1, edge_order=2); dPz[:, 0] = 0.
    i = np.argmin(np.abs(g.Rc - R))
    print(f"\n--- EXP 5  vertical structure of the striction force at R={g.Rc[i]:.2f} kpc  {tag}")
    print(f"    {model.name}")
    print(f"    {'z':>6} {'rho':>11} {'C':>7} {'K_z=dPhi/dz':>12} {'dPsi/dz':>12} {'ratio':>9}")
    for Z in [0.15, 0.3, 0.6, 0.9, 1.2, 1.5, 2.0, 3.0, 5.0]:
        j = np.argmin(np.abs(g.zc - Z))
        print(f"    {g.zc[j]:6.2f} {rho[i,j]/KPC3_PER_PC3:11.3e} {C[i,j]:7.4f} "
              f"{dz2[i,j]:12.1f} {dPz[i,j]:12.1f} {dPz[i,j]/dz2[i,j]:9.3f}")


def exp6_appendixD5(model, sep=30.0, M1=2e10, a1=3.0, M2=2e10, a2=12.0,
                    Rmax=90., zmax=90., NR=150, NZ=300):
    """Appendix D SS.D.5 states a worldline action with an extra force from
    U(x) ~ -ln C(rho), coupling lambda 'to be calibrated'.  Can THAT term restore the
    third law?

    Analytic answer: no, and for a reason that generalises.  Any extra force of the form
    -grad f(rho) contributes ZERO net force to an isolated system:
        int rho grad f(rho) dV = int grad F(rho) dV = 0,   F'(rho) = rho f'(rho)
    The conservation-restoring term MUST depend on the field, not on rho alone.
    (*) does; -lambda grad[-ln C(rho)] does not.  Verified here.
    """
    g = Grid.__new__(Grid)
    g.Rf = np.linspace(0., Rmax, NR + 1); g.zf = np.linspace(-zmax, zmax, NZ + 1)
    g.full_z = True
    g.Rc = 0.5 * (g.Rf[:-1] + g.Rf[1:]); g.zc = 0.5 * (g.zf[:-1] + g.zf[1:])
    g.NR, g.NZ = NR, NZ; g.dR = np.diff(g.Rf); g.dz = np.diff(g.zf)
    g.V = (np.pi * (g.Rf[1:]**2 - g.Rf[:-1]**2))[:, None] * g.dz[None, :]
    g.RR, g.ZZ = np.meshgrid(g.Rc, g.zc, indexing='ij')

    r1, m1 = plummer(g, M1, a1, -sep / 2); r2, m2 = plummer(g, M2, a2, +sep / 2)
    rho, Mc = r1 + r2, m1 + m2
    C = model.C(rho)
    Phi = solve_poisson(g, C, Mc, model.Cmin, Mc.sum())
    dR, dz = grad(g, Phi)
    scale = G * M1 * M2 / sep**2
    F_naive = -(Mc * dz).sum()
    # D.5 term: force = -lambda grad U = +lambda grad ln C   (per unit mass, lambda absorbing m)
    lnC = np.log(np.maximum(C, 1e-300))
    I_D5 = (Mc * np.gradient(lnC, g.zc, axis=1, edge_order=2)).sum()
    Psi = model.dC(rho) * (dR**2 + dz**2) / (8 * np.pi * G)
    I_str = -(Mc * np.gradient(Psi, g.zc, axis=1, edge_order=2)).sum()
    print(f"\n--- EXP 6  can Appendix D SS.D.5's  -lambda grad[-ln C(rho)]  restore the third law?")
    print(f"    {model.name}   sep={sep} kpc")
    print(f"    third-law violation, naive law      : {F_naive/scale:+10.4f} x GM1M2/d^2")
    print(f"    striction (*)  -int rho grad Psi     : {I_str/scale:+10.4f}   -> cancels")
    print(f"    D.5 term, per unit lambda            : {I_D5/scale:+10.3e}   "
          f"-> ZERO to {abs(I_D5/max(abs(F_naive),1e-30)):.2e} of the violation")
    print(f"    lambda needed to cancel              : "
          f"{-F_naive/I_D5 if I_D5 != 0 else float('inf'):+.4e}   (diverges as the net D.5 force -> 0)")
    return F_naive, I_D5, I_str


# ================================================================ ROBUSTNESS
def flux_check(g, C, Phi, Mc, radii=(5., 10., 20., 40.)):
    """Gauss check on the DISCRETE solution: oint C grad Phi . dA  ==  4 pi G M_enc."""
    print("    Gauss-law check on the discrete solution (sphere radius r):")
    rr = np.hypot(g.RR, g.ZZ)
    dR, dz = grad(g, Phi)
    for r in radii:
        # surface integral over the sphere r, using the half-space and doubling
        th = np.linspace(0, np.pi / 2, 400)
        Rs, zs = r * np.sin(th), r * np.cos(th)
        from scipy.interpolate import RegularGridInterpolator as RGI
        fR = RGI((g.Rc, g.zc), dR, bounds_error=False, fill_value=None)
        fz = RGI((g.Rc, g.zc), dz, bounds_error=False, fill_value=None)
        fC = RGI((g.Rc, g.zc), C, bounds_error=False, fill_value=None)
        p = np.column_stack([Rs, zs])
        gr = fR(p) * np.sin(th) + fz(p) * np.cos(th)
        flux = 2 * (2 * np.pi * r**2) * np.trapz(fC(p) * gr * np.sin(th), th)
        Menc = Mc[rr <= r].sum() * 2
        lhs, rhs = flux, 4 * np.pi * G * Menc
        print(f"      r={r:5.1f} kpc   flux/4piG M_enc = {lhs/rhs:.4f}   (M_enc={Menc:.3e})")


def robustness():
    print("=" * 78); print("ROBUSTNESS  (RG calibration, the regime where C actually varies)")
    print("=" * 78)
    m = refracted()
    Md, Rd, z0 = 5e10, 3.0, 0.3
    for (Rmax, NR, NZ) in [(400., 200, 220), (400., 300, 320), (800., 260, 300), (1500., 300, 340)]:
        g = Grid(Rmax=Rmax, zmax=Rmax, NR=NR, NZ=NZ, aR=4.5, aZ=8.0)
        Mc = disc_cellmass(g, Md, Rd, z0)
        rho = disc_rho(g, Md, Rd, z0)
        C = m.C(rho)
        PN = solve_poisson(g, np.ones_like(rho), Mc, 1.0, Md)
        P2 = solve_poisson(g, C, Mc, m.Cmin, Md)
        dRN, _ = grad(g, PN); dR2, _ = grad(g, P2)
        out = []
        for R in [3., 8., 15., 30.]:
            i = np.argmin(np.abs(g.Rc - R))
            out.append(dR2[i, 0] / (dRN[i, 0] / C[i, 0]))
        print(f"  box={Rmax:6.0f} kpc  {NR}x{NZ}:  L2/L3 at R=3,8,15,30 kpc = "
              + "  ".join(f"{v:6.3f}" for v in out))
        if Rmax == 800.:
            flux_check(g, C, P2, Mc)
    # harmonic vs arithmetic face averaging is a discretisation choice; check the floor argument
    print("\n  Sanity: the SURFACE-AVERAGED permittivity on a sphere of radius r")
    g = Grid(Rmax=800., zmax=800., NR=260, NZ=300, aR=4.5, aZ=8.0)
    rho = disc_rho(g, Md, Rd, z0); C = m.C(rho); rr = np.hypot(g.RR, g.ZZ)
    for r in [3., 8., 15., 30.]:
        sel = np.abs(rr - r) < 0.06 * r
        w = g.V[sel]
        print(f"      r={r:5.1f}: <C>_sphere = {np.average(C[sel], weights=w):.4f}   "
              f"C(midplane) = {C[np.argmin(np.abs(g.Rc-r)), 0]:.4f}   "
              f"eps_0 = {m.Cmin:.4f}")


if __name__ == "__main__":
    import sys
    what = sys.argv[1] if len(sys.argv) > 1 else "all"
    if what in ("all", "val"):
        validate()
    if what in ("all", "disc"):
        for m, tag in [(refracted(), "[RG / Cesare+2020 calibration]"),
                       (framework(gamma=2.0), "[framework: gamma=2, rho_crit=0.029 V^2]"),
                       (framework(gamma=0.489), "[framework: gamma=0.489 SPARC optimum]")]:
            g, rho, C, PN, P2, dRN, dzN, dR2, dz2 = exp1_L2_vs_L3(m, tag=tag)
            exp2_striction(g, rho, C, m, P2, dR2, dz2, tag=tag)
    if what in ("all", "scan"):
        exp4_scan()
    if what in ("all", "vert"):
        for m, t in [(refracted(), "[RG q=0.47]"),
                     (refracted(q=1.0), "[RG form, q=1.0]"),
                     (refracted(q=2.0), "[RG form, q=2.0]"),
                     (framework(gamma=2.0, rho_crit_pc3=0.05), "[framework form, knee at 0.05]"),
                     (framework(gamma=2.0), "[framework, asserted rho_crit=0.029 V^2]")]:
            exp5_vertical_profile(m, tag=t)
    if what in ("all", "d5"):
        for sep_ in [20., 30., 45.]:
            exp6_appendixD5(refracted(), sep=sep_)
    if what in ("all", "rob"):
        robustness()
    if what in ("all", "mom"):
        exp3_momentum(refracted(), label="[RG / Cesare+2020: C varies across the pair]")
        exp3_momentum(framework(gamma=2.0),
                      label="[framework rho_crit = 0.029 V^2: C is pinned at the floor]")
        exp3_momentum(framework(gamma=2.0, rho_crit_pc3=0.05),
                      label="[framework form, knee placed BETWEEN the two spheres]")
        for n in [(100, 200), (200, 400)]:
            exp3_momentum(refracted(), NR=n[0], NZ=n[1], label=f"[convergence {n[0]}x{n[1]}]")

