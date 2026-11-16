"""Blind-sector γ register, He-4 superfluid fraction. Uses ONLY the T column of the measured rows (keys 2,3),
never their rho_s values. Template: rho_s/rho = tanh(γ ln(β(1/t-1)+1)), t = T/T_lambda (archive SC form, sc2.py)."""
import numpy as np
from scipy.optimize import minimize_scalar, minimize
TL = 2.1768  # K, T90; rho_s = 0 at the last spline knot of Donnelly & Barenghi Table 2.1/2.3
raw = np.genfromtxt('table21_rho_s.csv', delimiter=',', comments='#', dtype=str)
T_all = raw[:, 0].astype(float); key = raw[:, 2]
T = np.unique(T_all[(key == '2') | (key == '3')])           # measured grid only (T values, not y)
t = T / TL
tot = np.loadtxt('table23_total.csv', delimiter=',', comments='#'); rho_tot = lambda TT: np.interp(TT, tot[:,0], tot[:,1]+tot[:,2])
def model(t, g, b): return np.tanh(g*np.log(b*(1/t-1)+1))
# ---- incumbents (none uses the rho_s data) ----
kB=1.380649e-23; hbar=1.054571817e-34; mHe=6.6464731e-27
def landau(TT, D=8.65, p0=1.92e10, mu=0.16, c=238.0):
    """Landau phonon+roton excitation gas, constants from neutron scattering (Henshaw & Woods 1961 era), SI."""
    kT = kB*TT; P0 = p0*hbar; M = mu*mHe
    rn_ph = 2*np.pi**2*kT**4/(45*hbar**3*c**5)
    rn_rot = 2*np.sqrt(M)*P0**4/(3*(2*np.pi)**1.5*hbar**3)*kT**-0.5*np.exp(-D/TT)
    rho = rho_tot(TT)*1000.0  # kg/m3
    return np.clip(1-(rn_ph+rn_rot)/rho, 0, 1)
INC = {
  'I1 London ideal BEC 1-t^1.5 (1938)':      lambda tt: 1-tt**1.5,
  'I2 Landau phonon+roton gas (neutron consts)': lambda tt: landau(tt*TL),
  'I3 Andronikashvili 1-t^5.6 (1946 data)':   lambda tt: 1-tt**5.6,
}
def fit(tt, y, beta=None, w=None):
    w = np.ones_like(y) if w is None else w
    if beta is not None:
        r = minimize_scalar(lambda g: np.sum(w*(model(tt,g,beta)-y)**2), bounds=(0.02,40), method='bounded')
        return r.x, beta, np.sqrt(r.fun/np.sum(w))
    best=min((minimize(lambda p: np.sum(w*(model(tt,p[0],10**p[1])-y)**2) if p[0]>0 else 1e9,[g0,lb],method='Nelder-Mead',
              options=dict(xatol=1e-7,fatol=1e-14,maxiter=8000)) for g0 in [0.3,0.6,1,2,4] for lb in [-1,0,1,2]), key=lambda r:r.fun)
    return best.x[0], 10**best.x[1], np.sqrt(best.fun/np.sum(w))
if __name__ == '__main__':
    print(f"measured grid: {len(T)} unique T from {T.min():.4f} to {T.max():.4f} K (t {t.min():.3f}-{t.max():.3f})")
    print("Landau incumbent spot values rho_s/rho:", {x: round(float(landau(x)),4) for x in [1.2,1.6,1.8,2.0,2.1,2.16]})
    dense = np.linspace(0.02, 0.99, 98)
    for name, f in INC.items():
        print(name)
        for lab, tt in [('data grid', t), ('dense 0.02-0.99', dense)]:
            y = f(tt); out=[]
            for beta in [1.0, 2.0, None]:
                g,b,r = fit(tt, y, beta); out.append(f"β={'free' if beta is None else beta}: γ={g:.3f} (β={b:.3g}, rms={r:.4f})")
            yw = fit(tt, y, None, w=1/np.maximum(y,0.02)**2)
            out.append(f"β free, rel-weighted: γ={yw[0]:.3f} (β={yw[1]:.3g})")
            print(f"   {lab:16s} " + " | ".join(out))
