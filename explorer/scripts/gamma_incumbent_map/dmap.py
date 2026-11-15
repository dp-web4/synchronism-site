import numpy as np
from scipy.optimize import minimize, brentq
gb=np.logspace(-12.3,-8.7,120); a0=1.2e-10
def nu_delta(y,d): return (1-np.exp(-y**(d/2)))**(-1/d)
def comp(gb,g,a):
    out=[]
    for b in gb:
        f=lambda lgo: np.log10(10**lgo*np.tanh(g*np.log1p(10**lgo/a)))-np.log10(b)
        out.append(10**brentq(f,np.log10(b)-1e-9,np.log10(b)+4))
    return np.array(out)
def gfit(d):
    t=gb*nu_delta(gb/a0,d)
    best=min((minimize(lambda p: np.mean((np.log10(comp(gb,p[0],10**p[1]))-np.log10(t))**2) if p[0]>0.05 else 1e9,[g0,-10.1],method='Nelder-Mead',options=dict(xatol=1e-5,fatol=1e-14)) for g0 in [0.4,0.8]),key=lambda r:r.fun)
    return best.x[0]
for d in [0.85,0.89,0.93,0.97,1.01,1.05]:
    print(f"delta={d:.2f} -> gamma={gfit(d):.3f}")
