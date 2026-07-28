const galaxies=[
 {name:'DDO 154',rd:1.5,vflat:47,rmax:5.0},
 {name:'NGC 2403',rd:2.7,vflat:136,rmax:11.0},
 {name:'NGC 3198',rd:3.2,vflat:150,rmax:20.0},
 {name:'UGC 128',rd:4.0,vflat:55,rmax:18.0},
 {name:'NGC 7331',rd:6.5,vflat:250,rmax:20.0},
];
const G=4.301e-6, BTFR_A=47, H_Z=0.3;
const diskMass=v=>BTFR_A*Math.pow(v,4);
const encFrac=(r,rd)=>{const x=r/rd;return 1-Math.exp(-x)*(1+x);};
const vNewt=(r,v,rd)=>r<=0?0:Math.sqrt(G*diskMass(v)*encFrac(r,rd)/r);
const rho=(r,v,rd)=>{const s0=diskMass(v)/(2*Math.PI*rd*rd*1e6);return s0*Math.exp(-r/rd)/(2*H_Z*1000);};
const C=(r,v,rd,A,g)=>Math.tanh(g*Math.log(rho(r,v,rd)/(A*v*v)+1));
const vSyn=(r,v,rd,A,g)=>{const b=vNewt(r,v,rd);const c=C(r,v,rd,A,g);return Math.sqrt(b*b+Math.pow(v*c,2));};

console.log('=== AS SHIPPED: A=0.029, gamma=2 ===');
console.log('galaxy      rho/rhoc(r=0)  rho/rhoc(rmax)   Cmax     max|vSyn-vNewt| (km/s)  as % of vflat');
for(const G_ of galaxies){
  let maxdev=0, cmax=0;
  const xMax=G_.rmax*1.1;
  for(let i=1;i<=50;i++){const r=(i/50)*xMax;
    const d=Math.abs(vSyn(r,G_.vflat,G_.rd,0.029,2)-vNewt(r,G_.vflat,G_.rd));
    if(d>maxdev)maxdev=d; const c=C(r,G_.vflat,G_.rd,0.029,2); if(c>cmax)cmax=c;}
  const r0=rho(0.001,G_.vflat,G_.rd)/(0.029*G_.vflat**2);
  const rM=rho(G_.rmax,G_.vflat,G_.rd)/(0.029*G_.vflat**2);
  console.log(G_.name.padEnd(11), r0.toExponential(3).padStart(10), rM.toExponential(3).padStart(13),
    cmax.toExponential(3).padStart(11), maxdev.toFixed(5).padStart(18), (100*maxdev/G_.vflat).toFixed(5).padStart(12));
}
console.log('\n(SVG plot is 600x350 px; y-axis spans 1.3*vflat over ~280px => 1 px ~ ' );
for(const G_ of galaxies){console.log('   ',G_.name,'1 px =', (1.3*G_.vflat/280).toFixed(2),'km/s');}

console.log('\n=== A-SWEEP: what A puts the disk at the knee? (gamma=2) ===');
console.log('A          NGC3198 rho/rhoc(0)   C(0)     vflat*C(0)');
for(const A of [2.9e-2,4.6e-5,1e-5,3e-6]){
  const g=galaxies[2];
  const r0=rho(0.001,g.vflat,g.rd)/(A*g.vflat**2);
  const c=C(0.001,g.vflat,g.rd,A,2);
  console.log(A.toExponential(1).padEnd(10), r0.toExponential(3).padStart(14), c.toFixed(4).padStart(9), (g.vflat*c).toFixed(1).padStart(11));
}
console.log('\n=== mass/size dependence of rho/rhoc at r=0 (A=0.029) ===');
for(const g of galaxies){
  console.log(g.name.padEnd(11),'V^2/rd^2 =',(g.vflat**2/g.rd**2).toFixed(1).padStart(8),
    ' ratio0 =', (rho(0.001,g.vflat,g.rd)/(0.029*g.vflat**2)).toExponential(3));
}


/* ===== PART 2: per-galaxy A fit + radial trend ===== */
const galaxies=[
 {name:'DDO 154',rd:1.5,vflat:47,pts:[[0.3,10],[0.6,18],[1.0,25],[1.5,32],[2.0,37],[2.8,41],[3.5,44],[4.2,46],[5.0,47]]},
 {name:'NGC 2403',rd:2.7,vflat:136,pts:[[0.5,40],[1.0,70],[2.0,100],[3.0,118],[4.0,127],[5.5,132],[7.0,134],[9.0,135],[11.0,136]]},
 {name:'NGC 3198',rd:3.2,vflat:150,pts:[[1.0,60],[2.0,105],[4.0,140],[6.0,148],[8.0,150],[10.0,150],[13.0,149],[16.0,150],[20.0,150]]},
 {name:'UGC 128',rd:4.0,vflat:55,pts:[[1.0,15],[2.0,25],[4.0,35],[6.0,42],[8.0,48],[10.0,51],[13.0,53],[16.0,54],[18.0,55]]},
 {name:'NGC 7331',rd:6.5,vflat:250,pts:[[1.0,100],[2.0,180],[4.0,230],[6.0,245],[8.0,250],[10.0,250],[13.0,249],[16.0,250],[20.0,250]]},
];
const G=4.301e-6,BTFR=47,HZ=0.3,A0=3703;
const M=v=>BTFR*v**4;
const enc=(r,rd)=>{const x=r/rd;return 1-Math.exp(-x)*(1+x);};
const vN=(r,v,rd)=>r<=0?0:Math.sqrt(G*M(v)*enc(r,rd)/r);
const rho=(r,v,rd)=>M(v)/(2*Math.PI*rd*rd*1e6)*Math.exp(-r/rd)/(2*HZ*1000);
const vM=(r,v,rd)=>{const b=vN(r,v,rd);if(b<=0)return 0;const y=(b*b/r)/A0;return b*Math.sqrt(0.5+Math.sqrt(0.25+1/y));};
const vS=(r,v,rd,A,g)=>{const b=vN(r,v,rd);const c=Math.tanh(g*Math.log(rho(r,v,rd)/(A*v*v)+1));return Math.sqrt(b*b+(v*c)**2);};
const rms=(g,f)=>Math.sqrt(g.pts.reduce((s,[r,vo])=>s+(f(r)-vo)**2,0)/g.pts.length);

console.log('RMS residual vs observed points (km/s), gamma=2\n');
console.log('galaxy      Newton    MOND   Syn@A=0.029  Syn@A=4.6e-5  best-A     A_best');
for(const g of galaxies){
  // scan A for best fit
  let bA=null,bR=1e9;
  for(let e=-8;e<=-1;e+=0.005){const A=Math.pow(10,e);const r=rms(g,x=>vS(x,g.vflat,g.rd,A,2));if(r<bR){bR=r;bA=A;}}
  console.log(g.name.padEnd(11),
    rms(g,r=>vN(r,g.vflat,g.rd)).toFixed(2).padStart(7),
    rms(g,r=>vM(r,g.vflat,g.rd)).toFixed(2).padStart(7),
    rms(g,r=>vS(r,g.vflat,g.rd,0.029,2)).toFixed(2).padStart(11),
    rms(g,r=>vS(r,g.vflat,g.rd,4.6e-5,2)).toFixed(2).padStart(13),
    bR.toFixed(2).padStart(8), bA.toExponential(2).padStart(11));
}
console.log('\n--- radial shape at A=4.6e-5, gamma=2 (NGC 3198): does the coherence term run the right way? ---');
const g=galaxies[2];
console.log(' r(kpc)   rho/rhoc    C      vflat*C   v_syn   v_newt  v_obs');
for(const [r,vo] of g.pts){
  const ratio=rho(r,g.vflat,g.rd)/(4.6e-5*g.vflat**2);
  const c=Math.tanh(2*Math.log(ratio+1));
  console.log(r.toFixed(1).padStart(6), ratio.toExponential(2).padStart(10), c.toFixed(4).padStart(8),
    (g.vflat*c).toFixed(1).padStart(9), vS(r,g.vflat,g.rd,4.6e-5,2).toFixed(1).padStart(8),
    vN(r,g.vflat,g.rd).toFixed(1).padStart(8), vo.toString().padStart(6));
}
console.log('\n--- best-fit A per galaxy: is a SINGLE universal A possible? ---');
let As=[];
for(const gg of galaxies){let bA=null,bR=1e9;
  for(let e=-8;e<=-1;e+=0.005){const A=Math.pow(10,e);const r=rms(gg,x=>vS(x,gg.vflat,gg.rd,A,2));if(r<bR){bR=r;bA=A;}}As.push(bA);}
console.log('best A values:',As.map(a=>a.toExponential(2)).join(', '));
console.log('spread (max/min):',(Math.max(...As)/Math.min(...As)).toExponential(2));


/* ===== PART 3: anticorrelation + gamma independence ===== */
const galaxies=[
 {name:'DDO 154',rd:1.5,vflat:47,pts:[[0.3,10],[0.6,18],[1.0,25],[1.5,32],[2.0,37],[2.8,41],[3.5,44],[4.2,46],[5.0,47]]},
 {name:'NGC 2403',rd:2.7,vflat:136,pts:[[0.5,40],[1.0,70],[2.0,100],[3.0,118],[4.0,127],[5.5,132],[7.0,134],[9.0,135],[11.0,136]]},
 {name:'NGC 3198',rd:3.2,vflat:150,pts:[[1.0,60],[2.0,105],[4.0,140],[6.0,148],[8.0,150],[10.0,150],[13.0,149],[16.0,150],[20.0,150]]},
 {name:'UGC 128',rd:4.0,vflat:55,pts:[[1.0,15],[2.0,25],[4.0,35],[6.0,42],[8.0,48],[10.0,51],[13.0,53],[16.0,54],[18.0,55]]},
 {name:'NGC 7331',rd:6.5,vflat:250,pts:[[1.0,100],[2.0,180],[4.0,230],[6.0,245],[8.0,250],[10.0,250],[13.0,249],[16.0,250],[20.0,250]]},
];
const G=4.301e-6,BTFR=47,HZ=0.3;
const M=v=>BTFR*v**4, enc=(r,rd)=>{const x=r/rd;return 1-Math.exp(-x)*(1+x);};
const vN=(r,v,rd)=>Math.sqrt(G*M(v)*enc(r,rd)/r);
const rho=(r,v,rd)=>M(v)/(2*Math.PI*rd*rd*1e6)*Math.exp(-r/rd)/(2*HZ*1000);
const Cf=(r,v,rd,A,g)=>Math.tanh(g*Math.log(rho(r,v,rd)/(A*v*v)+1));
const pearson=(a,b)=>{const n=a.length,ma=a.reduce((x,y)=>x+y)/n,mb=b.reduce((x,y)=>x+y)/n;
 let sn=0,da=0,db=0;for(let i=0;i<n;i++){sn+=(a[i]-ma)*(b[i]-mb);da+=(a[i]-ma)**2;db+=(b[i]-mb)**2;}return sn/Math.sqrt(da*db);};

console.log('REQUIRED non-baryonic term  T(r)=sqrt(v_obs^2 - v_b^2)  vs  MODEL term  V_flat*C(rho(r))\n');
for(const g of galaxies){
  const rs=[],T=[],Mt=[];
  for(const [r,vo] of g.pts){const b=vN(r,g.vflat,g.rd);const t2=vo*vo-b*b;if(t2<=0)continue;
    rs.push(r);T.push(Math.sqrt(t2));Mt.push(g.vflat*Cf(r,g.vflat,g.rd,4.6e-5,2));}
  console.log(g.name+'  (A=4.6e-5, gamma=2)');
  console.log('   r     :',rs.map(x=>x.toFixed(1).padStart(6)).join(''));
  console.log('   needed:',T.map(x=>x.toFixed(1).padStart(6)).join(''));
  console.log('   model :',Mt.map(x=>x.toFixed(1).padStart(6)).join(''));
  console.log('   Pearson r(needed, model) =',pearson(T,Mt).toFixed(3),
    ' | needed trend',(T[T.length-1]>T[0]?'RISING':'falling'),' model trend',(Mt[Mt.length-1]>Mt[0]?'rising':'FALLING'),'\n');
}
console.log('gamma-independence check — sign of d(model term)/dr for a range of gamma, NGC 3198, A free:');
for(const gam of [0.25,0.49,1,2,4,8]){
  for(const A of [4.6e-5,1e-6]){
    const a=150*Cf(2,150,3.2,A,gam), b=150*Cf(20,150,3.2,A,gam);
    process.stdout.write(`  g=${gam} A=${A.toExponential(0)}: term(2kpc)=${a.toFixed(1)} term(20kpc)=${b.toFixed(1)} d/dr<0? ${b<a}\n`);
  }
}


/* ===== PART 4: differential + inverted couplings ===== */
const galaxies=[
 {name:'DDO 154',rd:1.5,vflat:47,pts:[[0.3,10],[0.6,18],[1.0,25],[1.5,32],[2.0,37],[2.8,41],[3.5,44],[4.2,46],[5.0,47]]},
 {name:'NGC 2403',rd:2.7,vflat:136,pts:[[0.5,40],[1.0,70],[2.0,100],[3.0,118],[4.0,127],[5.5,132],[7.0,134],[9.0,135],[11.0,136]]},
 {name:'NGC 3198',rd:3.2,vflat:150,pts:[[1.0,60],[2.0,105],[4.0,140],[6.0,148],[8.0,150],[10.0,150],[13.0,149],[16.0,150],[20.0,150]]},
 {name:'UGC 128',rd:4.0,vflat:55,pts:[[1.0,15],[2.0,25],[4.0,35],[6.0,42],[8.0,48],[10.0,51],[13.0,53],[16.0,54],[18.0,55]]},
 {name:'NGC 7331',rd:6.5,vflat:250,pts:[[1.0,100],[2.0,180],[4.0,230],[6.0,245],[8.0,250],[10.0,250],[13.0,249],[16.0,250],[20.0,250]]},
];
const G=4.301e-6,BTFR=47,HZ=0.3,A0=3703;
const M=v=>BTFR*v**4, enc=(r,rd)=>{const x=r/rd;return 1-Math.exp(-x)*(1+x);};
const vN=(r,v,rd)=>Math.sqrt(G*M(v)*enc(r,rd)/r);
const rho=(r,v,rd)=>M(v)/(2*Math.PI*rd*rd*1e6)*Math.exp(-r/rd)/(2*HZ*1000);
const vM=(r,v,rd)=>{const b=vN(r,v,rd);const y=(b*b/r)/A0;return b*Math.sqrt(0.5+Math.sqrt(0.25+1/y));};
const rms=(g,f)=>Math.sqrt(g.pts.reduce((s,[r,vo])=>s+(f(r)-vo)**2,0)/g.pts.length);
const V=(b,t)=>Math.sqrt(b*b+t*t);

// candidate couplings; each returns the coherence factor C in [0,1)
const forms={
 'ALGEBRAIC  C(rho)      ': (r,g,A,gam)=>Math.tanh(gam*Math.log(rho(r,g.vflat,g.rd)/(A*g.vflat**2)+1)),
 'LOG-GRAD   C(|dlnrho|) ': (r,g,A,gam)=>Math.tanh(gam*Math.log((1/g.rd)/A+1)),
 'GRAD       C(|drho|)   ': (r,g,A,gam)=>Math.tanh(gam*Math.log((rho(r,g.vflat,g.rd)/g.rd)/(A*g.vflat**2)+1)),
 'INVERTED   C(rhoc/rho) ': (r,g,A,gam)=>Math.tanh(gam*Math.log((A*g.vflat**2)/rho(r,g.vflat,g.rd)+1)),
};
console.log('Best-fit RMS (km/s) over A in [1e-9,1e3], gamma in [0.1,8]  — toy BTFR disk\n');
const hdr='galaxy      Newton   MOND  '+Object.keys(forms).map(k=>k.slice(0,10).padStart(11)).join('');
console.log(hdr);
for(const g of galaxies){
  let row=g.name.padEnd(11)+rms(g,r=>vN(r,g.vflat,g.rd)).toFixed(1).padStart(6)+rms(g,r=>vM(r,g.vflat,g.rd)).toFixed(1).padStart(7);
  for(const k of Object.keys(forms)){
    let best=1e9;
    for(let e=-9;e<=3;e+=0.05)for(let gm=0.1;gm<=8;gm+=0.1){
      const A=Math.pow(10,e);
      const rr=rms(g,r=>V(vN(r,g.vflat,g.rd), g.vflat*forms[k](r,g,A,gm)));
      if(rr<best)best=rr;}
    row+=best.toFixed(1).padStart(11);
  }
  console.log(row);
}
console.log('\nRadial trend of each coupling (NGC 3198, tuned to order-unity at 2 kpc):');
const g=galaxies[2];
for(const k of Object.keys(forms)){
  let A=null;
  for(let e=-9;e<=3;e+=0.02){const a=Math.pow(10,e);if(forms[k](2,g,a,2)>0.5){A=a;break;}}
  if(A===null){console.log(k,' no A reaches C>0.5');continue;}
  const t=[2,4,8,13,20].map(r=>(g.vflat*forms[k](r,g,A,2)).toFixed(1).padStart(7)).join('');
  console.log(k,'A='+A.toExponential(1),' term at r=2,4,8,13,20 kpc:',t);
}
console.log('\nrequired T(r) NGC 3198 at same radii:  ', [2,4,8,13,20].map(r=>Math.sqrt(
  {2:105,4:140,8:150,13:149,20:150}[r]**2 - vN(r,g.vflat,g.rd)**2).toFixed(1).padStart(7)).join(''));
