# Post-hoc (not registered): use the data-describing curve (1-t^a)^b, a=4.963 b=0.745, as the "incumbent".
import numpy as np
from incumbents import *
f=lambda tt:(1-tt**4.963)**0.745
for lab,tt in [('data grid',t),('dense 0.02-0.99',np.linspace(0.02,0.99,98)),('dense 0.55-0.995',np.linspace(0.55,0.995,60))]:
    print(lab, " | ".join(f"β={'free' if b is None else b}: γ={fit(tt,f(tt),b)[0]:.3f} (β={fit(tt,f(tt),b)[1]:.3g})" for b in [1.0,2.0,None]))
# 3D-XY-like near-T_lambda exponent: how large must beta be to make the template's linear zone unresolved on the grid?
print("1 - t_max =", 1-t.max())
