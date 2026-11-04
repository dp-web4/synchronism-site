import sys, numpy as np
sys.path.insert(0, sys.argv[1])
import density_partial_beyond_gbar as D
import two_pillars_head_to_head_fit as H
d = D.load("const"); gal, idx = D.idx_by_gal(d["gid"])
rB = H.fit_pillarB(d["gb"], d["gl"], d["el"]); w = 1/(d["el"]**2+np.exp(rB.x[2])**2)
lB = d["gl"]-d["lg"]
gm = d["lr"].copy()
for i in idx: gm[i] = d["lr"][i].mean()
X = D.design_poly(d["lg"], gm); b = D.wls(X, lB, w)[-1]
bs=[]
for k in range(600):
    pick=np.concatenate([idx[i] for i in D.RNG.integers(0,len(idx),len(idx))])
    bs.append(D.wls(D.design_poly(d["lg"][pick], gm[pick]), lB[pick], w[pick])[-1])
print(f"between-galaxy (galaxy-mean log rho) beta {b:+.4f} CI [{np.percentile(bs,2.5):+.4f},{np.percentile(bs,97.5):+.4f}]")
# reliability: var(gm)/var(lr)
print("var share of log rho that is between-galaxy", np.var(gm)/np.var(d["lr"]))
