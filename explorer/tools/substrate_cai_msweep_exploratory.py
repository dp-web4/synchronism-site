import sys, json; sys.path.insert(0,'/home/dp/ai-workspace/synchronism-site/explorer/tools')
import numpy as np, substrate_cai_permutation_test as t, phase1_stage1_localized_oscillation_substrate as s1
out={}
for seed in (1,2):
    rng=np.random.default_rng(seed); ics=[(s1.seed_pulse(rng),0.05*rng.standard_normal(s1.L)) for _ in range(12)]
    for p in (6,7,8,9,10,11,12,13,16):
        runs=[t.run_int(u0,2**p,k) for u0,k in ics]
        out[f"seed{seed}_M2^{p}"]=(round(sum(r['pass'] for r in runs)/12,2), round(float(np.mean([r['final_width'] for r in runs])),1), round(float(np.mean([r['amp_retained'] for r in runs])),2), round(float(np.mean([r['reversals'] for r in runs])),1))
    runs=[t.run_int(u0,1,k,integer=False) for u0,k in ics]
    out[f"seed{seed}_float"]=(round(sum(r['pass'] for r in runs)/12,2), round(float(np.mean([r['final_width'] for r in runs])),1))
    print(json.dumps(out),flush=True)
json.dump(out,open('/home/dp/ai-workspace/synchronism-site/explorer/tools/substrate_cai_msweep_exploratory_output.json','w'),indent=0)
