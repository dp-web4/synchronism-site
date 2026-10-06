#!/usr/bin/env python3
"""REGISTERED: explorer/work/2026-10-06-rc100-a0z/PREREG.md (commit 8b4b355, before Table 3 was read).
a0(z) as a trend: rho = k(z>=1.5)/k(z<1.5) on RC100 (Nestor Shachar+2023 Table 3, transcribed by eye from the PDF raster).
Branch A predicts rho_A = <E>_hi/<E>_lo; constant a0 predicts 1. Level k free per bin.
Also: identity controls (synthetic f_DM generated under A and under C through the same pipeline) -- not registered,
they test the pipeline, not the data; and a post-hoc sigma0 check of the registered caveat (labelled)."""
import numpy as np, csv, os, sys, importlib.util
HERE = os.path.dirname(os.path.abspath(__file__))
spec = importlib.util.spec_from_file_location('m', os.path.join(HERE, 'a0z_highz_tfr_and_phantom_fdm.py'))
M = importlib.util.module_from_spec(spec); spec.loader.exec_module(M)
TAB = os.path.join(HERE, '..', 'work', '2026-10-06-rc100-a0z', 'rc100_table3.csv')
rows = list(csv.DictReader(open(TAB)))
z = np.array([float(r['z']) for r in rows]); fo = np.array([float(r['fdm']) for r in rows])
efo = np.array([float(r['efdm']) for r in rows]); s0 = np.array([float(r['sigma0']) for r in rows])
ks = np.geomspace(0.05, 50, 400)
NMC = 3000; ZS = 1.5

def gN_samples(seed=7):
    """g_N(R_e) [m/s^2] per galaxy, column 0 = central, 1: = mass MC with the table's log M_bar error."""
    rng = np.random.default_rng(seed); out = []
    for r in rows:
        Mb = 10 ** float(r['logMbar']); bt = min(10 ** (float(r['logMbulge']) - float(r['logMbar'])), 1.0)
        Re = float(r['Re']); Rd = Re / 1.678
        fac = 10 ** np.concatenate([[0.0], rng.normal(0, float(r['elogMbar']), NMC)])
        vN2 = M.vN2_freeman((1 - bt) * Mb * fac, Rd, Re) + M.G * bt * Mb * fac / Re
        out.append(vN2 / Re * M.ACC)
    return np.array(out)

GN = gN_samples()

def curves(nu, fobs):
    """chi2 curve over k for each galaxy, shape (N, len(ks))."""
    C = np.zeros((len(rows), len(ks)))
    for j, k in enumerate(ks):
        f = 1 - 1 / nu(GN / (k * M.A0))
        C[:, j] = (fobs - f[:, 0]) ** 2 / (np.maximum(efo, 0.02) ** 2 + f[:, 1:].std(1) ** 2)
    return C

def kbest(Csum):
    i = Csum.argmin(); ok = ks[Csum <= Csum.min() + 1]
    return ks[i], ok.min(), ok.max()

lo = z < ZS; hi = ~lo
rhoA = M.E(z[hi]).mean() / M.E(z[lo]).mean()

def analyse(nu, fobs, nboot=2000, seed=11, verbose=True):
    C = curves(nu, fobs)
    klo = kbest(C[lo].sum(0)); khi = kbest(C[hi].sum(0))
    lr = np.log(khi[0] / klo[0])
    rng = np.random.default_rng(seed); il = np.where(lo)[0]; ih = np.where(hi)[0]; b = []
    for _ in range(nboot):
        a = C[rng.choice(il, il.size)].sum(0); c = C[rng.choice(ih, ih.size)].sum(0)
        b.append(np.log(ks[c.argmin()] / ks[a.argmin()]))
    b = np.array(b); sst = 0.5 * (np.percentile(b, 84) - np.percentile(b, 16))
    return dict(klo=klo, khi=khi, lr=lr, sst=sst, chi_lo=C[lo].sum(0).min(), chi_hi=C[hi].sum(0).min(), C=C)

def verdict(lr, s):
    nC = abs(lr) < 2 * s; nA = abs(lr - np.log(rhoA)) < 2 * s
    return {(True, False): 'A DISFAVOURED', (False, True): 'C DISFAVOURED',
            (False, False): 'BOTH FAIL', (True, True): 'NON-DISCRIMINATING'}[(nC, nA)]

print(f'RC100: N_lo={lo.sum()} (z {z[lo].min()}-{z[lo].max()}, median {np.median(z[lo])}), '
      f'N_hi={hi.sum()} (z {z[hi].min()}-{z[hi].max()}, median {np.median(z[hi])})')
print(f'rho_A = <E>_hi/<E>_lo = {rhoA:.3f}  (ln {np.log(rhoA):.3f});  rho_C = 1\n')

res = {}
for nun, nu in (('simple', M.nu_simple), ('RAR', M.nu_rar)):
    R = analyse(nu, fo); res[nun] = R
    print(f'[{nun} nu] k_lo = {R["klo"][0]:.2f} [{R["klo"][1]:.2f},{R["klo"][2]:.2f}] chi2={R["chi_lo"]:.1f}/{lo.sum()}   '
          f'k_hi = {R["khi"][0]:.2f} [{R["khi"][1]:.2f},{R["khi"][2]:.2f}] chi2={R["chi_hi"]:.1f}/{hi.sum()}')
    print(f'          rho_obs = {np.exp(R["lr"]):.3f}  ln rho = {R["lr"]:+.3f}   sigma_stat (galaxy bootstrap) = {R["sst"]:.3f}')
    for ss in (0.33, 0.47, 0.0):
        s = np.hypot(R['sst'], ss)
        print(f'          sigma_sys={ss:.2f}: sigma={s:.3f}  pull vs C {R["lr"]/s:+.2f}  pull vs A {(R["lr"]-np.log(rhoA))/s:+.2f}  '
              f'-> {verdict(R["lr"], s)}')
    # all-z comparison
    Ct = R['C'].sum(0); kall = kbest(Ct)
    def chi_model(a0fun):
        f = 1 - 1 / nu(GN / (a0fun(z)[:, None] * M.A0))
        return ((fo - f[:, 0]) ** 2 / (np.maximum(efo, 0.02) ** 2 + f[:, 1:].std(1) ** 2)).sum()
    print(f'          all-z: best const k={kall[0]:.2f} chi2={Ct.min():.1f}; k_lo*E(z)/E_lo-mean scaled A (level free): '
          f'{min(chi_model(lambda zz, kk=kk: kk*M.E(zz)) for kk in ks):.1f}; C(k=1)={chi_model(lambda zz: np.ones_like(zz)):.1f}; '
          f'A(k=1)={chi_model(lambda zz: M.E(zz)):.1f}\n')

print('=== identity controls (pipeline only; synthetic f_obs, table errors, simple nu) ===')
rng = np.random.default_rng(99)
for name, a0z, kk in (('C, k=2', lambda zz: np.ones_like(zz), 2.0), ('A, k=2', M.E, 2.0)):
    out = []
    for t in range(40):
        ftrue = 1 - 1 / M.nu_simple(GN[:, 0] * 10 ** rng.normal(0, [float(r['elogMbar']) for r in rows]) / (kk * a0z(z) * M.A0))
        fsyn = ftrue + rng.normal(0, efo)
        R = analyse(M.nu_simple, fsyn, nboot=200, seed=t, verbose=False); out.append((R['lr'], R['sst']))
    out = np.array(out)
    print(f'  truth {name}: recovered ln rho mean {out[:,0].mean():+.3f} sd {out[:,0].std():.3f} (truth {0 if name[0]=="C" else np.log(rhoA):+.3f}); '
          f'mean bootstrap sigma_stat {out[:,1].mean():.3f}')

print('\n=== POST-HOC (labelled): the registered sigma0 caveat ===')
R = res['simple']; kg = ks[R['C'].argmin(1)]
lk = np.log(np.clip(kg, ks[1], ks[-2]))
for nm, sel in (('lo', lo), ('hi', hi)):
    print(f'  median sigma0 {nm}: {np.median(s0[sel]):.0f} km/s')
from scipy.stats import spearmanr
print(f'  Spearman(per-galaxy ln k_best, sigma0): {spearmanr(lk, s0).correlation:+.2f} (p={spearmanr(lk, s0).pvalue:.3f})')
print(f'  Spearman(per-galaxy ln k_best, z): {spearmanr(lk, z).correlation:+.2f} (p={spearmanr(lk, z).pvalue:.3f})')
# sigma0-matched ratio: restrict both bins to the overlapping sigma0 range 30-70
for lo_s, hi_s in ((30, 70), (40, 80)):
    m = (s0 >= lo_s) & (s0 <= hi_s); C = R['C']
    a = kbest(C[lo & m].sum(0)); b = kbest(C[hi & m].sum(0))
    print(f'  sigma0 in [{lo_s},{hi_s}]: N_lo={int((lo&m).sum())} N_hi={int((hi&m).sum())} rho={b[0]/a[0]:.2f} '
          f'(rho_A on this subset {M.E(z[hi&m]).mean()/M.E(z[lo&m]).mean():.2f})')
