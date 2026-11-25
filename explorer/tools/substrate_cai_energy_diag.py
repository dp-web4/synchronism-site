import sys; sys.path.insert(0,'/home/dp/ai-workspace/synchronism-site/explorer/tools')
import numpy as np, substrate_cai_permutation_test as t, phase1_stage1_localized_oscillation_substrate as s1
DT=s1.DT
rng=np.random.default_rng(1); u0s=[s1.seed_pulse(rng) for _ in range(6)]; _=[0.05*rng.standard_normal(s1.L) for _ in range(6)]
for p in (7,9,10,12,16):
    M=2**p; rel=[]; frozen=[]
    for u0 in u0s:
        X0=np.rint(u0*M).astype(np.int64); Xm=X0-np.rint(0.5*DT*DT*M*t.accel_focus(X0/M)).astype(np.int64)
        def H(Xm,X0):
            u=(X0+Xm)/(2*M); v=(X0-Xm)/(DT*M); return t.energies(u,v)[1]
        h0=H(Xm,X0)
        for _ in range(8000):
            Xm,X0=X0,2*X0-Xm+t.force_int(X0,M)
        rel.append((H(Xm,X0)-h0)/abs(h0))
        frozen.append(float(np.mean(t.force_int(X0,M)==0)))
    print(f"M=2^{p}: rel dH after 8000 steps mean {np.mean(rel):+.3f} (range {min(rel):+.3f}..{max(rel):+.3f}); fraction of sites with zero increment {np.mean(frozen):.2f}")
# Rb-87 tail-overlap bound (finding table)
import math
hbarc=0.1973269804e-15; m=86.909180*0.93149410; lam=hbarc/m
for V in (0.5,0.1,0.01):
    need=0.54/math.log(2/V); eps=lam/need
    print(f'Rb87 V={V}: tail length >= {need:.2f} m; lambda_C={lam:.3e} m; 1-(w_b/w0)^2 <= {eps**2:.2e}; binding fraction ~ {eps**2/2:.1e}')
