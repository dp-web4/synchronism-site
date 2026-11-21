import sys, math, json, numpy as np
sys.path.insert(0, "/home/dp/ai-workspace/synchronism-site/explorer/findings/scripts")
import collins_on_a_lattice_hypercubic_control as c
comp=c.comp
def run0(xi, n, h=0.01, m=0.0):
    a_t=1.0/xi; js,ws,Ns3=c.spatial_domain(n); u=math.pi*js/n
    s_sp,w_sp=comp(u,1.0); shp=[comp(u[:,i]+h,1.0) for i in range(3)]; shm=[comp(u[:,i]-h,1.0) for i in range(3)]
    S2=(s_sp**2).sum(1); W=w_sp.sum(1); origin=(js.sum(1)==0)
    nt=int(round(n*max(xi,1.0))); rwt=np.full(nt+1,2.0); rwt[0]=rwt[nt]=1.0
    tot=0.0
    for jt in range(nt+1):
        u0=math.pi*jt/nt; s0,w0=comp(np.array(u0),a_t); M=m+w0+W; D=s0**2+S2+M**2
        with np.errstate(divide='ignore', invalid='ignore'):
            f0=4*(M*M-(s0**2+S2))/(D*D); fA=-2*f0
            for sg in (1,-1):
                s0p,w0p=comp(np.array(u0+sg*h*a_t),a_t); Mp=m+w0p+W; Dp=s0p**2+S2+Mp**2
                fA=fA+4*(M*Mp-(s0*s0p+S2))/(D*Dp)
            fB=-2*f0
            for i in range(3):
                for sp,wp in (shp[i],shm[i]):
                    Mp=m+w0+W-w_sp[:,i]+wp; ss=s0**2+S2-s_sp[:,i]**2+s_sp[:,i]*sp
                    Dp=s0**2+S2-s_sp[:,i]**2+sp**2+Mp**2; fB=fB+4*(M*Mp-ss)/(D*Dp)/3
        d=fB-fA
        if jt==0: d=np.where(origin,0.0,d)
        tot+=rwt[jt]*(ws*d).sum()
    return tot*xi/(Ns3*2*nt)*16*math.pi**2/(2*h*h)
out=[]
for xi in (1.0,2.0,0.5,4.0):
    for n in (32,64,96):
        if xi==4.0 and n==96: continue
        r=dict(m=0.0, xi=xi, n=n, dc2=run0(xi,n)); print(json.dumps(r), flush=True); out.append(r)
json.dump(out, open("/home/dp/ai-workspace/synchronism-site/explorer/findings/scripts/collins_m0.json","w"), indent=1)
