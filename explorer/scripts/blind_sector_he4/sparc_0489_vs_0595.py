"""Side question: why is the frozen-Υ SPARC fit 0.489 while McGaugh's RAR function has γ_eq 0.595?
Projection test: replace each SPARC point's g_obs by the RAR prediction at its own g_bar (same rows, same loss) and refit."""
import sys, numpy as np
from pathlib import Path
sys.path.insert(0, '/home/dp/ai-workspace/synchronism-site/explorer/findings/scripts')
import sparc_gamma_interval_frozen_likelihood as F
from scipy.optimize import minimize_scalar
F.DATA = Path('/home/dp/ai-workspace/Synchronism/simulations/sparc_real_data/MassModels_Lelli2016c.mrt')
go, gb, gid, names = F.load_rows()
print("rows", len(go), "galaxies", gid.max()+1)
g, a, s = F.fit_gamma(go, gb); print(f"identity: data fit γ={g:.3f} a0'={a:.3e}  (expect 0.489)")
def rar(gb_, gd): return gb_/(1-np.exp(-np.sqrt(gb_/gd)))
# the data's own preferred RAR scale g_dagger (vertical log loss)
r = minimize_scalar(lambda lg: np.sum((np.log10(go)-np.log10(rar(gb,10**lg)))**2), bounds=(-10.5,-9.5), method='bounded')
gd = 10**r.x; rms_rar = np.sqrt(r.fun/len(go))
print(f"RAR fit to these rows: g†={gd:.3e}, rms={rms_rar:.4f} dex")
for lab, gdd in [('RAR g†=1.2e-10', 1.2e-10), ('RAR g† fitted', gd)]:
    syn = rar(gb, gdd); g2,a2,_ = F.fit_gamma(syn, gb, bounds=(0.3,0.9)); print(f"γ_eq of {lab} on SPARC's 2807-point grid, same loss: {g2:.3f}")
_, _, ssr_t = F.fit_gamma(go, gb); print(f"template rms on data = {np.sqrt(ssr_t/len(go)):.4f} dex vs RAR {rms_rar:.4f}")
# where does the data depart from the RAR? residual vs log g_bar, binned
res = np.log10(go)-np.log10(rar(gb,gd)); lb=np.log10(gb)
for lo in np.arange(-12.5,-8.4,0.5):
    m=(lb>=lo)&(lb<lo+0.5)
    if m.sum(): print(f"  log g_bar [{lo:.1f},{lo+0.5:.1f}) n={m.sum():4d} mean resid vs RAR {res[m].mean():+.3f}")
# Upsilon_bulge sensitivity and error cut off
for cut in [0.10, 1.0]:
    F.ERROR_CUT=cut; go2,gb2,_,_=F.load_rows(); print(f"error cut {cut}: n={len(go2)} γ={F.fit_gamma(go2,gb2)[0]:.3f}")
F.ERROR_CUT=0.10
