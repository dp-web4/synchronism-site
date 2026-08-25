#!/usr/bin/env python3
"""Estimator sweep + propagation only -- reuses the saved bootstrap.
Split out because the full script's 316s bootstrap need not be repeated."""
import numpy as np, importlib.util, sys, os
spec = importlib.util.spec_from_file_location("hb", "hybrid_beta_admixture_fit.py")
# import the helpers without re-running main: re-declare them here instead
sys.path.insert(0, os.path.join(os.getcwd(), "..", "..", "scripts"))
import rar_scatter_nogo_real_sparc as L
from scipy.optimize import minimize

def hdr(s): print("\n"+"="*80); print(s); print("="*80, flush=True)
def C_tanh(x,g): return np.tanh(g*np.log1p(np.clip(x,0,None)))
def solve_implicit(gb,gam,a0,beta,rrel,nit=45):
    b=gb/a0; w=np.power(rrel,beta)
    lo=np.full_like(b,-18.); hi=np.full_like(b,18.)
    for _ in range(nit):
        mid=.5*(lo+hi); y=10**mid
        s=(y*C_tanh(y*w,gam)-b)<0
        lo=np.where(s,mid,lo); hi=np.where(s,hi,mid)
    return 10**(.5*(lo+hi))*a0
def build(h_mode="const", up_disk=0.5):
    L.UP_DISK=up_disk
    r=L.build(gas_mode="vgas",h_mode=h_mode)
    return (np.array([d["g_bar"] for d in r]), np.array([d["g_obs"] for d in r]),
            np.array([d["rho"] for d in r]), np.array([d["elog"] for d in r]))
def fit(gb,golog,el,rrel,beta=None,seed=None):
    free = beta is None
    def f(th):
        if free: lg,la,bb,ls=th
        else:    lg,la,ls=th; bb=beta
        gam,a0,sig=np.exp(lg),np.exp(la),np.exp(ls)
        if not (1e-3<gam<20 and 1e-13<a0<1e-8 and 1e-4<sig<3): return 1e12
        if abs(bb)>4: return 1e12
        m=np.log10(solve_implicit(gb,gam,a0,bb,rrel))
        v=el**2+sig**2; d=golog-m
        return .5*float(np.sum(d*d/v+np.log(v)))
    starts=[list(seed)] if seed is not None else []
    for g0,a0 in [(0.5,6e-11),(1.0,1.2e-10),(0.3,4e-11)]:
        starts.append([np.log(g0),np.log(a0)]+([0.0] if free else [])+[np.log(0.12)])
    best=None
    for x0 in starts:
        r=minimize(f,x0,method="Nelder-Mead",options=dict(maxiter=6000,maxfev=6000,xatol=1e-7,fatol=1e-8))
        if best is None or r.fun<best.fun: best=r
    return best

boots=np.load("hybrid_beta_bootstrap.npy")
SB=boots.std()
hdr("ESTIMATOR SWEEP -- h and Upsilon are conventions; name them and one alternative")
print(f"  bootstrap sigma(beta) from the const/0.50 run = {SB:.4f}")
print(f"  |beta| cap = |beta_hat| + 2 sigma_boot\n")
print(f"  {'h mode':>12}{'Ups_disk':>10}{'beta_hat':>11}{'gamma':>9}{'a0':>12}{'|beta| cap':>12}")
print("  "+"-"*66)
caps=[]
for hm in ("const","rd5","bershady"):
    for up in (0.5,0.7):
        gb,go,rho,el=build(hm,up)
        rr=rho/np.exp(np.mean(np.log(rho)))
        r=fit(gb,np.log10(go),el,rr,beta=None)
        cap=abs(r.x[2])+2*SB; caps.append(cap)
        print(f"  {hm:>12}{up:>10.2f}{r.x[2]:>11.4f}{np.exp(r.x[0]):>9.4f}"
              f"{np.exp(r.x[1]):>12.3e}{cap:>12.4f}", flush=True)
BCAP=max(caps)
print(f"\n  worst-case cap carried forward:  |beta| < {BCAP:.4f}")
print(f"  (bootstrap 95% upper alone was  {np.percentile(boots,97.5):+.4f})")

hdr("PROPAGATION -- power of each of Pass 4's four proposed discriminators")
print("  |d ln C| = beta * ln10 * (d log rho AT MATCHED |g|);  |dv/v| = 0.5 |d ln C|")
print("  Levers from rho_g_lever_is_size.py and vertical_lever_total_field.py.\n")
print(f"  {'discriminator':<44}{'lever':>7}{'floor':>7}{'beta_min':>10}{'headroom':>10}{'verdict':>12}")
print("  "+"-"*90)
tests=[("vertical K_z, |z|<2 kpc, fixed R (Gaia DR3)",2.30,0.03),
       ("GC vs UDG at matched g_int (Pal14/DF44)",   2.22,0.10),
       ("GMC interior vs disk mean at matched |g|",  1.50,0.10),
       ("external density EFE (Antlia II, best LG)", 0.0854/np.log(10), 0.10)]
for nm,lev,floor in tests:
    bmin = 2*floor/(np.log(10)*lev)
    head = BCAP/bmin
    v = "REAL POWER" if head>3 else "marginal" if head>1 else "NO POWER"
    print(f"  {nm:<44}{lev:>7.2f}{floor*100:>6.0f}%{bmin:>10.4f}{head:>9.1f}x{v:>12}")
print(f"\n  headroom = (SPARC's allowed |beta|) / (beta needed to see the effect).")
print(f"  headroom > 1 means the test probes a region SPARC has not already excluded.")
