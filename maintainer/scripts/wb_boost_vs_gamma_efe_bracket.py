# Order-of-magnitude: wide-binary internal boost under EFE for the compander C_g family,
# C(g) = tanh(gamma*ln(1+g/(gamma*A))), A = identified a0'/gamma scale. nu = 1/C as a function of g_N.
# EFE-dominated (g_int << g_e) 1D/quasi-linear QUMOND bracket: boost in [nu_e*(1+L_e), nu_e], L_e = dln nu/dln y_N at g_e.
import math
A=1.08e-10
def C(g,gm): return math.tanh(gm*math.log1p(g/(gm*A)))
def gN_of_g(g,gm): return g*C(g,gm)
def nu_of_gN(gN,gm):
    lo,hi=gN,1e3*gN+1e-8
    for _ in range(200):
        mid=math.sqrt(lo*hi)
        if gN_of_g(mid,gm)<gN: lo=mid
        else: hi=mid
    return lo/gN
for ge in (1.6e-10,1.9e-10,2.2e-10):
  print(f"g_e(observed) = {ge:.2e} m/s^2")
  for gm in (0.3,0.489,0.5,1.0,1.5,2.0,3.0):
    gNe=gN_of_g(ge,gm); nu=ge/gNe
    h=1e-4; L=(math.log(nu_of_gN(gNe*(1+h),gm))-math.log(nu_of_gN(gNe*(1-h),gm)))/(math.log(1+h)-math.log(1-h))
    print(f"  gamma={gm:5.3f}  nu_e={nu:6.3f}  L_e={L:+6.3f}  boost in g: [{nu*(1+L):5.3f}, {nu:5.3f}]")
