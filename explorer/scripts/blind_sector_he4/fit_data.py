import numpy as np
from scipy.optimize import minimize
from incumbents import *
rng = np.random.default_rng(20261116)
m = (key=='2')|(key=='3')
Td = T_all[m]; td = Td/TL; yd = raw[m,1].astype(float)/rho_tot(Td); kd = key[m]
def fit2(tt,y):  # rival (1-t^a)^b
    best=min((minimize(lambda p: np.sum(((1-tt**p[0])**p[1]-y)**2) if p[0]>0 and p[1]>0 else 1e9,[a0,b0],method='Nelder-Mead',
              options=dict(xatol=1e-8,fatol=1e-15,maxiter=8000)) for a0 in [1,3,6] for b0 in [0.5,1]),key=lambda r:r.fun)
    return best.x, np.sqrt(best.fun/len(y))
print("CONTROLS")
print("  identity I3:", [round(fit(t,INC['I3 Andronikashvili 1-t^5.6 (1946 data)'](t),b)[0],3) for b in [2.0,None]], "expect [2.243, 1.321]")
print("  injection I1:", [round(fit(t,INC['I1 London ideal BEC 1-t^1.5 (1938)'](t),b)[0],3) for b in [2.0,None]], "expect [0.711, 0.636]")
# duplicate scatter
dup=[]; 
for TT in np.unique(Td):
    s=yd[Td==TT]
    if len(s)>1: dup.append(np.std(s,ddof=1))
print(f"duplicate-row scatter (rms of per-T sd, {len(dup)} T with >1 row): {np.sqrt(np.mean(np.square(dup))):.5f}")
print("\nDATA FITS (48 measured rows)")
res={}
for lab,beta,w in [('β=1',1.0,None),('β=2 (primary)',2.0,None),('β free',None,None),('β free rel-wt',None,1/yd**2)]:
    g,b,r = fit(td,yd,beta,w); res[lab]=g
    boots=[]
    for _ in range(300):
        i=rng.integers(0,len(yd),len(yd)); boots.append(fit(td[i],yd[i],beta,None if w is None else w[i])[0])
    sg=np.std(boots)
    print(f"  {lab:15s} γ={g:.3f} ± {sg:.3f} (boot)  β={b:.3g}  rms={r:.4f}")
    for inc,gi in [('I1',None),('I3',None)]:
        pass
for lab,mm in [('Maynard (key 2)',kd=='2'),('Tam & Ahlers (key 3)',kd=='3')]:
    out=[f"{('β=2' if b else 'β free')}: γ={fit(td[mm],yd[mm],b)[0]:.3f} β={fit(td[mm],yd[mm],b)[1]:.3g}" for b in [2.0,None]]
    print(f"  split {lab:22s} n={mm.sum()}  " + " | ".join(out))
p,r2 = fit2(td,yd); print(f"\nRIVAL (1-t^a)^b: a={p[0]:.3f} b={p[1]:.3f} rms={r2:.4f}")
gf,bf,rf = fit(td,yd,None); print(f"TEMPLATE β free rms={rf:.4f}; ratio template/rival rms = {rf/r2:.2f}")
# residual structure near T_lambda
for lo,hi in [(0.55,0.8),(0.8,0.95),(0.95,1.0)]:
    s=(td>=lo)&(td<hi); print(f"  t in [{lo},{hi}): n={s.sum()} mean resid template={np.mean(yd[s]-model(td[s],gf,bf)):+.4f}  rival={np.mean(yd[s]-(1-td[s]**p[0])**p[1]):+.4f}")
# distances to incumbents
geq={'β=2 (primary)':{'I1':0.711,'I3':2.243},'β free':{'I1':0.636,'I3':1.321},'β=1':{'I1':1.220,'I3':4.090},'β free rel-wt':{'I1':0.624,'I3':1.135}}
print("\nRULE R: fractional distance |γ_fit-γ_eq|/γ_eq")
for lab,d in geq.items(): print(f"  {lab:15s} " + "  ".join(f"{k}: {abs(res[lab]-v)/v*100:5.1f}%" for k,v in d.items()))
# incumbent residuals vs data
for name,f in INC.items():
    print(f"  rms(data - {name[:2]}) = {np.sqrt(np.mean((yd-f(td))**2)):.4f}")
