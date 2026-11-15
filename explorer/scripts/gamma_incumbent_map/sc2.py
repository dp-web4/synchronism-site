import numpy as np
from scipy.optimize import minimize_scalar, minimize
def model(t,g,b): return np.tanh(g*np.log(b*(1-t)/t+1))
exp={'Al':[(0.2,0.99),(0.4,0.96),(0.6,0.88),(0.8,0.68),(0.9,0.48),(0.95,0.31)],
     'Nb':[(0.2,0.99),(0.4,0.97),(0.6,0.90),(0.8,0.72),(0.9,0.52),(0.95,0.35)],
     'Pb':[(0.2,0.99),(0.4,0.96),(0.6,0.89),(0.8,0.70),(0.9,0.50),(0.95,0.32)]}
print("identity control (archive points, beta=2, bounds 0.5-4):")
for m,d in exp.items():
    t=np.array([x for x,_ in d]); y=np.array([v for _,v in d])
    r=minimize_scalar(lambda g: np.sum((model(t,g,2.0)-y)**2),bounds=(0.5,4),method='bounded'); print(f"  {m}: gamma={r.x:.3f}")
t=np.array([0.2,0.4,0.6,0.8,0.9,0.95])
std=np.tanh(1.74*np.sqrt(1/t-1))
print("standard BCS interpolation tanh(1.74 sqrt(1/t-1)) at archive t:",np.round(std,3))
r=minimize_scalar(lambda g: np.sum((model(t,g,2.0)-std)**2),bounds=(0.5,4),method='bounded'); print(f"BCS-interp, beta=2, same t grid: gamma={r.x:.3f}")
tt=np.linspace(0.02,0.98,49); s=np.tanh(1.74*np.sqrt(1/tt-1))
best=min((minimize(lambda p: np.sum((model(tt,p[0],10**p[1])-s)**2),[g0,lb],method='Nelder-Mead') for g0 in [0.5,1,2,4] for lb in [-1,0,1]),key=lambda r:r.fun)
print(f"BCS-interp, both free, dense grid: gamma={best.x[0]:.3f} beta={10**best.x[1]:.3f} rms={np.sqrt(best.fun/len(tt)):.4f}")
for b in [1,2,4]:
    r=minimize_scalar(lambda g: np.sum((model(tt,g,b)-s)**2),bounds=(0.05,40),method='bounded'); print(f"  beta={b}: gamma={r.x:.3f} rms={np.sqrt(r.fun/len(tt)):.4f}")
