import sys, math, numpy as np
sys.path.insert(0, "/home/dp/ai-workspace/synchronism-site/explorer/findings/scripts")
import collins_on_a_lattice_hypercubic_control as c
comp=c.comp
edges=np.array([0,0.05,0.1,0.2,0.4,0.8,1.6,3.2,100])
def radial(m, xi, n, h=0.01):
    a_t=1.0/xi; js,ws,Ns3=c.spatial_domain(n); u=math.pi*js/n
    s_sp,w_sp=comp(u,1.0); shp=[comp(u[:,i]+h,1.0) for i in range(3)]; shm=[comp(u[:,i]-h,1.0) for i in range(3)]
    S2=(s_sp**2).sum(1); W=w_sp.sum(1); ks2=(u**2).sum(1)
    nt=int(round(n*max(xi,1.0))); rwt=np.full(nt+1,2.0); rwt[0]=rwt[nt]=1.0
    bins=np.zeros(len(edges)-1)
    for jt in range(nt+1):
        u0=math.pi*jt/nt; k0=u0/a_t; s0,w0=comp(np.array(u0),a_t); M=m+w0+W; D=s0**2+S2+M**2
        f0=4*(M*M-(s0**2+S2))/(D*D); fA=-2*f0
        for sg in (1,-1):
            s0p,w0p=comp(np.array(u0+sg*h*a_t),a_t); Mp=m+w0p+W; Dp=s0p**2+S2+Mp**2
            fA=fA+4*(M*Mp-(s0*s0p+S2))/(D*Dp)
        fB=-2*f0
        for i in range(3):
            for sp,wp in (shp[i],shm[i]):
                Mp=m+w0+W-w_sp[:,i]+wp; ss=s0**2+S2-s_sp[:,i]**2+s_sp[:,i]*sp
                Dp=s0**2+S2-s_sp[:,i]**2+sp**2+Mp**2; fB=fB+4*(M*Mp-ss)/(D*Dp)/3
        r=np.sqrt(ks2+k0**2); b=np.digitize(r,edges)-1
        bins+=rwt[jt]*np.bincount(b,weights=ws*(fB-fA),minlength=len(edges)-1)[:len(edges)-1]
    return bins*xi/(Ns3*2*nt)*16*math.pi**2/(2*h*h)
for m in (0.125,0.0625):
    b=radial(m,2.0,96); print('m=',m,' '.join('%+.4f'%x for x in b),' sum=%+.4f'%b.sum())
print('bins:',edges)
