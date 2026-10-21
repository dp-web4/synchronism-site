import numpy as np
from scipy.integrate import solve_ivp
def run(epsr, R=60.0):
    rhs=lambda r,y:[y[1]/(epsr(r)*r*r), 2*epsr(r)*y[0]]
    r0=1e-3; s=solve_ivp(rhs,(r0,R),[r0,epsr(r0)*r0*r0],rtol=1e-10,atol=1e-15,dense_output=True)
    u,w=s.sol(R); up=w/(epsr(R)*R*R); a=(2*u/R+up)/3
    return s,a
# uniform
s,a=run(lambda r:0.3); u,w=s.sol(1.0); print("uniform: u(1)/a",u/a,"D",abs(w/(0.3)-u)/a)
# smoothed step: eps_in=1 inside r<1, eps_out=0.1 outside
ein,eout=1.0,0.1
f=lambda r: eout+(ein-eout)*0.5*(1-np.tanh((r-1)/0.01))
s,a=run(f); u,w=s.sol(0.5); print("step sphere interior slope u/r/a",u/0.5/a,"analytic",3*eout/(ein+2*eout))
