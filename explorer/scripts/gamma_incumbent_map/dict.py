import numpy as np, sys
sys.path.insert(0,'/tmp/gnest')
from scipy.optimize import minimize, brentq
gb = np.logspace(-12.3, -8.7, 200)
a0=1.2e-10
def nu_delta(y,d): return (1-np.exp(-y**(d/2)))**(-1/d)          # DHF/Desmond family; d=1 -> McGaugh RAR
def nu_n(y,n): return ((1+np.sqrt(1+4*y**(-n)))/2)**(1/n)          # n=1 simple, n=2 standard
def comp(gb,g,a):
    out=[]
    for b in gb:
        f=lambda lgo: np.log10(10**lgo*np.tanh(g*np.log1p(10**lgo/a)))-np.log10(b)
        out.append(10**brentq(f,np.log10(b)-1e-9,np.log10(b)+4))
    return np.array(out)
def fit(target):
    def loss(p):
        g,la=p
        if g<0.05 or g>40: return 1e9
        return np.mean((np.log10(comp(gb,g,10**la))-np.log10(target))**2)
    best=None
    for g0 in [0.3,0.6,1.0,2.0,4.0,8.0]:
        r=minimize(loss,[g0,-10.0],method='Nelder-Mead',options=dict(xatol=1e-5,fatol=1e-14,maxiter=3000))
        if best is None or r.fun<best.fun: best=r
    return best.x[0],10**best.x[1],np.sqrt(best.fun)
def w1090(gfun):  # 10-90 width of mu=gb/gobs in log g_obs
    lg=np.linspace(-14,-6,4000); go=10**lg
    # invert numerically: mu(go)=gb/go ; for target fn build go(gb) then mu
    return None
print("family      param   gamma_eq  a0'(1e-11)  rms(mdex)")
for d in [0.5,1,2,4,6,10]:
    g,a,r=fit(gb*nu_delta(gb/a0,d)); print(f"nu_delta  d={d:<5} {g:8.3f} {a*1e11:10.2f} {r*1000:9.2f}")
for n in [1,2,3,4,6]:
    g,a,r=fit(gb*nu_n(gb/a0,n)); print(f"nu_n      n={n:<5} {g:8.3f} {a*1e11:10.2f} {r*1000:9.2f}")
