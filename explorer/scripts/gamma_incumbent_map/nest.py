import numpy as np
from scipy.optimize import minimize, brentq
gb = np.logspace(-12.3, -8.7, 300)   # SPARC g_bar range, m/s^2
gdag=1.2e-10
def rar(gb): return gb/(1-np.exp(-np.sqrt(gb/gdag)))
def mu_std_inv(gb,a0):  # standard mu: mu(y)=y/sqrt(1+y^2), g*mu(g/a0)=gb
    # solve y^2/sqrt(1+y^2)=gb/a0
    out=[]
    for z in gb/a0:
        y=brentq(lambda y: y*y/np.sqrt(1+y*y)-z,1e-12,1e8); out.append(y*a0)
    return np.array(out)
def simple(gb,a0): z=gb/a0; return a0*(z+np.sqrt(z*z+4*z))/2
def comp(gb,g,a0):
    out=[]
    for b in gb:
        f=lambda lgo: np.log10(10**lgo*np.tanh(g*np.log1p(10**lgo/a0)))-np.log10(b)
        out.append(10**brentq(f,np.log10(b)-1e-9,np.log10(b)+4))
    return np.array(out)
def fit(target):
    def loss(p):
        g,la=p
        if g<0.05: return 1e9
        return np.mean((np.log10(comp(gb,g,10**la))-np.log10(target))**2)
    best=None
    for g0 in [0.3,0.5,0.8,1.5,3]:
        r=minimize(loss,[g0,-10.0],method='Nelder-Mead',options=dict(xatol=1e-5,fatol=1e-12,maxiter=2000))
        if best is None or r.fun<best.fun: best=r
    return best.x[0],10**best.x[1],np.sqrt(best.fun)
for name,t in [("simple mu a0=1.2e-10 (identity: expect g=0.5,a0'=0.6e-10)",simple(gb,1.2e-10)),
               ("McGaugh RAR g+=1.2e-10",rar(gb)),
               ("standard mu a0=1.2e-10",mu_std_inv(gb,1.2e-10))]:
    g,a,r=fit(t); print(f"{name:55s} gamma={g:.3f} a0'={a:.3e} rms={r*1000:.2f} mdex")
# profile of rms vs gamma for RAR
print("RAR profile (a0' refit):")
for g in [0.4,0.5,0.6,0.7,0.8,1.0,1.5]:
    r=minimize(lambda la: np.mean((np.log10(comp(gb,g,10**la[0]))-np.log10(rar(gb)))**2),[-10.0],method='Nelder-Mead')
    print(f"  gamma={g:.2f} rms={np.sqrt(r.fun)*1000:.2f} mdex a0'={10**r.x[0]:.3e}")
