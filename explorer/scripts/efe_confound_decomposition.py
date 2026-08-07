#!/usr/bin/env python3
"""Break the x0/e_env confound in the EFE matched filter.

Delta_pred = log10(-s + sqrt(s^2+1)), s = e_env/(2 sqrt(g_bar/a0)).
It mixes the ENVIRONMENT variable (e_env) with the galaxy's own mean ACCELERATION (<x0>).
The RAR offset is independently known to track mean acceleration.  So: which factor carries
the beta_E = +2.1 signal?

Decisive test (pre-declared here before running): PERMUTATION.  Shuffle e_env across galaxies
while holding each galaxy's <x0> and density fixed, rebuild Delta_pred, refit beta_E.  This
destroys the environment information and preserves the acceleration structure exactly.
  - If the observed beta_E sits inside the permuted null  -> the signal is the x0 confound.
  - If it sits outside                                    -> the signal is environmental.
Two-sided p from 20000 permutations.
"""
import json, re, math, random

random.seed(20260807)
a0 = 1.2e-10
TEX = "/mnt/c/exe/projects/ai-agents/synchronism-site/explorer/data/chae2020_ms_r2.tex"
T08 = "/mnt/c/exe/projects/ai-agents/Synchronism/simulations/test08_per_galaxy_results.json"

row_re = re.compile(r"^\s*([A-Za-z0-9+\-]+)\s*&\s*\$\s*(-?\d+\.\d+)\s*\$\s*&"
                    r"\s*\$\s*(-?\d+\.\d+)\s*_.*?\$\s*&\s*\$\s*(-?\d+\.\d+)\s*_.*?\$\s*&")
chae = {}
for line in open(TEX):
    m = row_re.match(line)
    if m and "galaxy" not in line:
        chae[m.group(1)] = dict(x0=float(m.group(2)), e=float(m.group(3)), eenv=float(m.group(4)))
t08 = json.load(open(T08))
norm = lambda n: n.replace(" ", "").replace("-", "").upper()
cn = {norm(k): v for k, v in chae.items()}
J = [dict(name=n, **r, **cn[norm(n)]) for n, r in t08.items() if norm(n) in cn]
N = len(J)

def mean(v): return sum(v)/len(v)
def sd(v):
    m=mean(v); return math.sqrt(sum((a-m)**2 for a in v)/(len(v)-1))
def pearson(x,y):
    mx,my=mean(x),mean(y)
    n=sum((a-mx)*(b-my) for a,b in zip(x,y))
    dx=math.sqrt(sum((a-mx)**2 for a in x)); dy=math.sqrt(sum((b-my)**2 for b in y))
    return n/(dx*dy) if dx and dy else 0.0
def ols(y, cols):
    n=len(y); X=[[1.0]+[c[i] for c in cols] for i in range(n)]; p=len(X[0])
    XtX=[[sum(X[i][a]*X[i][b] for i in range(n)) for b in range(p)] for a in range(p)]
    Xty=[sum(X[i][a]*y[i] for i in range(n)) for a in range(p)]
    M=[r[:]+[1.0 if i==j else 0.0 for j in range(p)] for i,r in enumerate(XtX)]
    for c in range(p):
        pv=max(range(c,p), key=lambda r: abs(M[r][c])); M[c],M[pv]=M[pv],M[c]
        d=M[c][c]; M[c]=[v/d for v in M[c]]
        for r in range(p):
            if r!=c and M[r][c]:
                f=M[r][c]; M[r]=[vr-f*vc for vr,vc in zip(M[r],M[c])]
    inv=[r[p:] for r in M]
    b=[sum(inv[a][k]*Xty[k] for k in range(p)) for a in range(p)]
    fit=[sum(b[a]*X[i][a] for a in range(p)) for i in range(n)]
    res=[y[i]-fit[i] for i in range(n)]
    s2=sum(r*r for r in res)/(n-p)
    return b, [math.sqrt(s2*inv[a][a]) for a in range(p)], math.sqrt(s2)

def dpred_of(eenv, x0):
    x = 10.0**x0 / a0
    s = eenv/(2.0*math.sqrt(x))
    return math.log10(-s + math.sqrt(s*s+1.0))

offset=[g["offset_dex"] for g in J]
x0=[g["x0"] for g in J]
leenv=[math.log10(g["eenv"]) for g in J]
logD=[math.log10(g["D"]) for g in J]
cyl=[math.log10(1.0+g["cyl2"]) for g in J]
b=pearson(logD,cyl)*sd(cyl)/sd(logD); a=mean(cyl)-b*mean(logD)
cyl_dc=[c-(a+b*d) for c,d in zip(cyl,logD)]
dpred=[dpred_of(g["eenv"], g["x0"]) for g in J]

print(f"N = {N}")
print("\n--- how much of Delta_pred is <x0> and how much is e_env? ---")
print(f"  r(Delta_pred, <x0>)        = {pearson(dpred,x0):+.4f}   (r^2 = {pearson(dpred,x0)**2:.3f})")
print(f"  r(Delta_pred, log e_env)   = {pearson(dpred,leenv):+.4f}   (r^2 = {pearson(dpred,leenv)**2:.3f})")
print(f"  r(<x0>, log e_env)         = {pearson(x0,leenv):+.4f}")

print("\n--- marginal correlations with the measured RAR offset ---")
for lbl,v in [("Delta_pred (matched filter)",dpred),("<x0>  (mean acceleration)",x0),
              ("log e_env (environment)",leenv),("ambient density (dist-corr)",cyl_dc)]:
    r=pearson(offset,v); t=r*math.sqrt((N-2)/max(1e-12,1-r*r))
    print(f"  {lbl:30s} r = {r:+.4f}   t = {t:+.2f}")

print("\n--- additive decomposition: offset ~ 1 + log e_env + <x0> + density ---")
bb,ss,sg=ols(offset,[leenv,x0,cyl_dc])
for i,lbl in enumerate(["intercept","log e_env","<x0>","density"]):
    print(f"  {lbl:12s} = {bb[i]:+.4f} +/- {ss[i]:.4f}    t = {bb[i]/ss[i]:+.2f}")
print(f"  residual sigma = {sg:.4f}")

print("\n--- controlling the matched filter for <x0> directly: offset ~ Delta_pred + <x0> + density ---")
bb2,ss2,sg2=ols(offset,[dpred,x0,cyl_dc])
for i,lbl in enumerate(["intercept","Delta_pred","<x0>","density"]):
    print(f"  {lbl:12s} = {bb2[i]:+.4f} +/- {ss2[i]:.4f}    t = {bb2[i]/ss2[i]:+.2f}")
print(f"  residual sigma = {sg2:.4f}")
print(f"  95% CI on beta_E = [{bb2[1]-1.96*ss2[1]:+.3f}, {bb2[1]+1.96*ss2[1]:+.3f}]"
      f"   contains 0: {bb2[1]-1.96*ss2[1] <= 0 <= bb2[1]+1.96*ss2[1]}"
      f"   contains 1: {bb2[1]-1.96*ss2[1] <= 1 <= bb2[1]+1.96*ss2[1]}")

print("\n--- PERMUTATION (pre-declared decisive test): shuffle e_env, hold <x0> + density ---")
b_obs,_,_ = ols(offset,[dpred,cyl_dc])
beta_obs = b_obs[1]
NP=20000
cnt=0; nulls=[]
ee=[g["eenv"] for g in J]
for _ in range(NP):
    perm=ee[:]; random.shuffle(perm)
    dp=[dpred_of(perm[i], x0[i]) for i in range(N)]
    bp,_,_=ols(offset,[dp,cyl_dc])
    nulls.append(bp[1])
    if abs(bp[1])>=abs(beta_obs): cnt+=1
nulls.sort()
print(f"  observed beta_E                 = {beta_obs:+.4f}")
print(f"  permuted null: mean {mean(nulls):+.4f}  sd {sd(nulls):.4f}")
print(f"  null 2.5/50/97.5 pct            = {nulls[int(.025*NP)]:+.4f} / "
      f"{nulls[NP//2]:+.4f} / {nulls[int(.975*NP)]:+.4f}")
print(f"  two-sided permutation p         = {cnt/NP:.4f}   ({cnt}/{NP})")
print(f"  z of observed vs permuted null  = {(beta_obs-mean(nulls))/sd(nulls):+.2f}")

json.dump(dict(N=N, beta_obs=beta_obs, perm_p=cnt/NP, perm_sd=sd(nulls),
               perm_mean=mean(nulls), z=(beta_obs-mean(nulls))/sd(nulls),
               beta_ctrl_x0=bb2[1], se_ctrl_x0=ss2[1],
               b_leenv=bb[1], se_leenv=ss[1], b_x0=bb[2], se_x0=ss[2],
               r_dpred_x0=pearson(dpred,x0), r_dpred_leenv=pearson(dpred,leenv)),
          open("/mnt/c/exe/projects/ai-agents/synchronism-site/explorer/data/efe_confound_decomposition.json","w"), indent=2)
print("\nwrote explorer/data/efe_confound_decomposition.json")

# ---------------------------------------------------------------------
# ADDENDUM (written after the permutation exposed that the EFE=0 null is
# beta_E = +1.35, not 0).  Redo the comparison against the CORRECT null and
# ask what it would take to separate the two hypotheses.
# ---------------------------------------------------------------------
print("\n" + "="*70)
print("ADDENDUM - hypothesis separation against the permuted (confound) null")
print("="*70)
null_mu, null_sd = mean(nulls), sd(nulls)
# proper two-sided p, centred on the null mean
c2 = sum(1 for b in nulls if abs(b-null_mu) >= abs(beta_obs-null_mu))
b1,s1,_ = ols(offset,[dpred,cyl_dc])
se = s1[1]
H_efe0 = null_mu          # EFE = 0: only the <x0> confound contributes
H_mond = null_mu + 1.0    # MOND+EFE at its own predicted amplitude, added on top
print(f"  observed beta_E            = {beta_obs:+.4f} +/- {se:.4f}   95% CI "
      f"[{beta_obs-1.96*se:+.3f}, {beta_obs+1.96*se:+.3f}]")
print(f"  H0  EFE = 0  (confound only)     -> beta_E = {H_efe0:+.4f}   "
      f"|dev| = {abs(beta_obs-H_efe0)/se:.2f} sigma   inside CI: "
      f"{beta_obs-1.96*se <= H_efe0 <= beta_obs+1.96*se}")
print(f"  H1  MOND+EFE                     -> beta_E = {H_mond:+.4f}   "
      f"|dev| = {abs(beta_obs-H_mond)/se:.2f} sigma   inside CI: "
      f"{beta_obs-1.96*se <= H_mond <= beta_obs+1.96*se}")
print(f"  separation between H0 and H1     = {1.0/se:.2f} sigma")
print(f"  proper two-sided permutation p (centred on null) = {c2/NP:.4f}")
print(f"  z vs confound null = {(beta_obs-null_mu)/null_sd:+.2f}")

print("\n--- what an estimator WOULD need ---")
sd_dp = sd(dpred); sg = s1[2] if len(s1)>2 else None
_,_,resid_sig = ols(offset,[dpred,cyl_dc])
print(f"  current signal sd(Delta_pred) = {sd_dp:.4f} dex over e_env in "
      f"[{min(g['eenv'] for g in J):.4f}, {max(g['eenv'] for g in J):.4f}]")
print(f"  current noise (residual sigma) = {resid_sig:.4f} dex")
for target,Ntar in ((3.0,141),(3.0,175),(5.0,175)):
    need = target*resid_sig/math.sqrt(Ntar)
    print(f"  {target:.0f}-sigma separation at N={Ntar}: need sd(Delta_pred) >= {need:.4f} dex "
          f"= {need/sd_dp:.2f}x the SPARC field range")
# what e_env would deliver it, at the sample's median acceleration
xmed = 10.0**sorted(x0)[len(x0)//2] / a0
for e in (0.05,0.1,0.3,1.0,3.0):
    s = e/(2*math.sqrt(xmed))
    print(f"    e_env = {e:5.2f} at median <x0> -> Delta_pred = "
          f"{math.log10(-s+math.sqrt(s*s+1)):+.4f} dex")
