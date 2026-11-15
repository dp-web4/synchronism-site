import numpy as np, importlib.util
spec=importlib.util.spec_from_file_location("nest","/tmp/gnest/dict.py")
import numpy as np
from scipy.optimize import minimize, brentq
gdag=1.2e-10
def rar(gb): return gb/(1-np.exp(-np.sqrt(gb/gdag)))
def comp(gb,g,a):
    out=[]
    for b in gb:
        f=lambda lgo: np.log10(10**lgo*np.tanh(g*np.log1p(10**lgo/a)))-np.log10(b)
        out.append(10**brentq(f,np.log10(b)-1e-9,np.log10(b)+4))
    return np.array(out)
for lo,hi in [(-12.0,-9.0),(-12.3,-8.7),(-12.8,-8.5),(-11.5,-9.5),(-12.3,-10.5)]:
    gb=np.logspace(lo,hi,150)
    best=min((minimize(lambda p: np.mean((np.log10(comp(gb,p[0],10**p[1]))-np.log10(rar(gb)))**2) if p[0]>0.05 else 1e9,[g0,-10.1],method='Nelder-Mead') for g0 in [0.4,0.7,1.2]),key=lambda r:r.fun)
    print(f"range [{lo},{hi}]: gamma={best.x[0]:.3f} a0'={10**best.x[1]:.2e} rms={np.sqrt(best.fun)*1000:.1f} mdex")
