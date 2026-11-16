import sys, numpy as np
from pathlib import Path
sys.path.insert(0, '/home/dp/ai-workspace/synchronism-site/explorer/findings/scripts')
import sparc_gamma_interval_frozen_likelihood as F
F.DATA = Path('/home/dp/ai-workspace/Synchronism/simulations/sparc_real_data/MassModels_Lelli2016c.mrt')
go, gb, gid, _ = F.load_rows(); N=len(go)
_,_,s0 = F.fit_gamma(go,gb)
for g in [0.5,0.55,0.588,0.595]:
    _,s=F.fit_a0(go,gb,g); print(f"γ={g}: N ln(SSR/SSRmin) = {N*np.log(s/s0):.2f}")
def rar(gb_, gd): return gb_/(1-np.exp(-np.sqrt(gb_/gd)))
from scipy.optimize import minimize_scalar
r=minimize_scalar(lambda lg: np.sum((np.log10(go)-np.log10(rar(gb,10**lg)))**2), bounds=(-10.5,-9.5), method='bounded')
print(f"RAR (1 param) vs template min (2 params): N ln(SSR_RAR/SSR_tmpl) = {N*np.log(r.fun/s0):.2f}")
