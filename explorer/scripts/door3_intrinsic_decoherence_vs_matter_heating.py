#!/usr/bin/env python3
"""
Door #3 (Phase-16) intrinsic decoherence Gamma(k) = 2 D k^2 with the "natural" Planck diffusion
D = c * l_Pl = hbar / m_Pl (the Phase-16 doc's own value, 4.8e-27 m^2/s) -- what does it do to
BOUND STATES, not to lab superpositions?

Phase-16 compared the rate to superposition-decoherence bounds (CSL / matter-wave, ~1e-8..1e-16 /s)
and called it "near-reach". Bound states contain structure at k ~ 1/a0 (atoms) and k ~ 1/fm
(nuclei), far beyond any lab superposition, so the rate bites hardest there.

Two QM embeddings of "mode k damps at 2 D k^2" (Phase-16 does not choose one):
  (B) norm-preserving Lindblad dephasing in the momentum basis, drho/dt = -D [k,[k,rho]]
      == random position displacements with <dx^2> = 2 D t per axis.
      Energy input per particle: d<H>/dt = D <lap V>   (exact; hbar drops out)
  (C) literal non-unitary diffusion psi_t += D lap psi: structure at k decays at 2 D k^2;
      the rate on a bound state is 2 D <k^2> = 2 D * 2 m <T> / hbar^2.
Also a reading-independent check: (A) the structure-damping rate at the state's own k vs the age
of old matter.

Positive control: numerically integrate reading (B) for a 1D harmonic oscillator in a Fock basis and
confirm d<H>/dt = D m w^2 (lap V = m w^2 in 1D).
"""
import numpy as np

hbar = 1.054571817e-34; c = 2.99792458e8; G = 6.67430e-11
e = 1.602176634e-19; eps0 = 8.8541878128e-12; me = 9.1093837015e-31; mp = 1.67262192e-27
a0 = 5.29177210903e-11; eV = e; MeV = 1e6 * eV
lPl = np.sqrt(hbar * G / c**3); D_Pl = c * lPl
yr = 3.15576e7; t_univ = 13.8e9 * yr
print(f"D_Pl = c*l_Pl = {D_Pl:.3e} m^2/s   (hbar/m_Pl = {hbar/np.sqrt(hbar*c/G):.3e})")

# ---------- positive control: reading (B) on a 1D oscillator ----------
def ho_control(N=40, m=1.0, w=1.0, hb=1.0, D=1e-3, T=5.0, steps=5000):
    a = np.diag(np.sqrt(np.arange(1, N)), 1)
    x = np.sqrt(hb / (2*m*w)) * (a + a.T)
    p = 1j*np.sqrt(hb*m*w/2) * (a.T - a)
    k = p / hb
    H = hb*w*(a.T@a + 0.5*np.eye(N))
    rho = np.zeros((N, N), complex); rho[0, 0] = 1
    dt = T/steps
    def L(r): return -1j/hb*(H@r - r@H) - D*(k@(k@r - r@k) - (k@r - r@k)@k)
    E0 = np.real(np.trace(H@rho))
    for _ in range(steps):  # RK4
        k1 = L(rho); k2 = L(rho+dt/2*k1); k3 = L(rho+dt/2*k2); k4 = L(rho+dt*k3)
        rho = rho + dt/6*(k1+2*k2+2*k3+k4)
    E1 = np.real(np.trace(H@rho))
    return (E1-E0)/T, D*m*w**2, np.real(np.trace(rho))
got, want, tr = ho_control()
print(f"[control B] 1D HO: numeric d<H>/dt = {got:.6e}, analytic D m w^2 = {want:.6e}, ratio {got/want:.6f}, tr {tr:.12f}")

# ---------- hydrogen (electron) ----------
# lap V for V = -e^2/(4 pi eps0 r): lap V = (e^2/eps0) delta^3(r);  <lap V> = (e^2/eps0)|psi(0)|^2
psi0sq = 1/(np.pi*a0**3)
lapV_H = e**2/eps0*psi0sq
P_H_B = D_Pl*lapV_H
k2_H = 1/a0**2                                   # <k^2> = 2 m <T>/hbar^2 = 1/a0^2 for 1s
G_H_C = 2*D_Pl*k2_H
print("\nHydrogen 1s electron, D = D_Pl")
print(f"  (B) heating     D<lapV> = {P_H_B:.3e} J/s = {P_H_B/eV:.3e} eV/s; 13.6 eV in {13.6*eV/P_H_B/86400:.2f} days")
print(f"  (C) damping   2D<k^2>   = {G_H_C:.3e} /s  (tau = {1/G_H_C/86400:.2f} days)")

# ---------- nucleons: shell-model oscillator, hbar w = 41 A^-1/3 MeV ----------
rows = []
for A in (4, 16, 56, 208):
    hw = 41*A**(-1/3)*MeV; w = hw/hbar
    lapV = 3*mp*w**2                              # 3D oscillator
    P_B = D_Pl*lapV
    k2 = 1.5*mp*w/hbar                            # <k^2> ground state = 3 m w / (2 hbar)
    G_C = 2*D_Pl*k2
    rows.append((A, hw/MeV, P_B/eV, G_C))
print("\nNucleons in the shell-model well, D = D_Pl")
for A, hw, pb, gc in rows:
    print(f"  A={A:3d}  hbar w={hw:5.1f} MeV   (B) heating {pb:.2e} eV/s/nucleon   (C) damping {gc:.2e} /s")

# ---------- bounds ----------
# Earth's heat budget: 47 TW over 5.97e24 kg; ~half radiogenic. Anything new must be < ~1e-11 W/kg.
q_earth = 47e12/5.97e24
q_bound = q_earth
nuc_per_kg = 1/mp
# (B), electrons only, hydrogen-like per nucleon (very conservative: 1 electron per nucleon at H 1s density)
P_kg_e = P_H_B*nuc_per_kg
# (B), nucleons (A=56 value)
P_kg_n = rows[2][2]*eV*nuc_per_kg
print(f"\nEarth mean heat output {q_earth:.2e} W/kg  (used as the upper bound on any new heating)")
print(f"  (B) electrons (H-like):  {P_kg_e:.2e} W/kg  -> D/D_Pl < {q_bound/P_kg_e:.1e}")
print(f"  (B) nucleons  (A=56):    {P_kg_n:.2e} W/kg  -> D/D_Pl < {q_bound/P_kg_n:.1e}")
# (A)/(C) reading-independent-ish: atomic structure survives >= age of universe => 2 D <k^2> t_univ < 1
print(f"  (A/C) atoms survive t_univ: 2D/a0^2 < 1/t_univ -> D/D_Pl < {1/(t_univ*G_H_C):.1e}")
print(f"  (A/C) nuclei survive t_univ (A=56): D/D_Pl < {1/(t_univ*rows[2][3]):.1e}")

# What is left of the Phase-16 "near-reach" superposition signature at the allowed D?
for label, frac in (("atomic-heat", q_bound/P_kg_e), ("nuclear-heat", q_bound/P_kg_n)):
    for L_, name in ((1e-10, "1 A"), (1e-9, "1 nm"), (1e-6, "1 um")):
        print(f"  allowed by {label:12s}: Gamma({name}) = 2 D/L^2 < {2*D_Pl*frac/L_**2:.1e} /s")
