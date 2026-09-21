"""TEST-04a multi-bin statistic on DESI DR1 full-shape, and the DR2 power of the same statistic.
PREREG ee7f509 (P8-P10). DR1 values: fsigma8/(fsigma8)^fid per tracer, DESI 2024 V (arXiv:2411.12021) Table 9, AS
TRANSCRIBED in Synchronism/Research/proposals/session107_disfavored_by_desi_dr1.md (not re-verified against the
paper this session). Session 107 ratios = Sync/LCDM from its own table, interpolated to DESI z_eff by the archive.
Delta chi2 = chi2(S107) - chi2(LCDM); positive favours LCDM. Bins independent (disjoint z; DESI treats them so)."""
import numpy as np
from scipy.stats import norm
#            ratio   sig_up  sig_dn  S107
bins = {'BGS':  (0.84, 0.19, 0.19, 0.867),
        'LRG1': (1.16, 0.13, 0.13, 0.882),
        'LRG2': (1.04, 0.11, 0.092, 0.898),
        'LRG3': (0.997, 0.10, 0.084, 0.916),
        'ELG2': (0.945, 0.097, 0.077, 0.932),
        'QSO':  (1.16, 0.12, 0.12, 0.947)}

def dchi(names, scale=1.0):
    tot = 0; exp = 0
    for k in names:
        r, su, sd, s = bins[k]
        sS = sd if s < r else su      # side of the data facing the model
        sL = sd if 1 < r else su
        d = ((r - s)/(sS*scale))**2 - ((r - 1)/(sL*scale))**2
        tot += d
        exp += ((1 - s)/(0.5*(su+sd)*scale))**2   # E[dchi2 | LCDM] = sum (Delta/sigma)^2
        print(f"   {k:5s} r={r:.3f} S107={s:.3f}  dchi2={d:+.2f}")
    return tot, exp

for lab, names in (("four bins (S107's five minus ELG_low, absent in DR1 FS)", ['LRG1','LRG2','LRG3','ELG2']),
                   ("all six DR1 FS tracers", list(bins))):
    print(lab)
    t, e = dchi(names)
    print(f"  observed Delta chi2 = {t:+.2f}  (sqrt = {np.sign(t)*np.sqrt(abs(t)):.2f} sigma-equiv); "
          f"expected under LCDM at DR1 sigma = {e:.2f}")
    # Delta chi2 under LCDM truth ~ Normal(mean=E, var=4E) (linear in the data for fixed models)
    print("  DR2 power, kill = Delta chi2 > 9, truth = LCDM, sigma_DR2 = f * sigma_DR1:")
    for f in (1.0, 0.8, 0.75, 0.7, 0.65, 0.6, 0.55, 0.5):
        E = e / f**2
        # by symmetry P(Delta chi2 < -9 | S107 true) is the same number (first run printed a mis-signed column)
        print(f"    f={f:.2f}  E={E:5.2f}  P(kill | LCDM) = P(favour | S107) = {1-norm.cdf((9-E)/(2*np.sqrt(E))):.2f}")
    # f needed for 80% power: E - 0.8416*2*sqrt(E) = 9
    m = (2*0.8416 + np.sqrt((2*0.8416)**2 + 36))/2
    print(f"  f needed for 80% power: {np.sqrt(e/m**2):.3f}  (needs E = {m**2:.1f})\n")

# DR2 CONTAINS DR1. Conditional forecast given the DR1 values (Gaussian, symmetrised sigma, inverse-variance nesting):
# x = r - 1, Delta = 1 - S107 (>0). Per bin dchi2 = (Delta^2 + 2 x Delta)/sigma^2 (with sigma facing each model equal).
# DR2 = DR1 information fraction f^2; E[x2 | x1] = f^2 x1 + (1 - f^2) mu_new, var = f^2 (1 - f^2) sigma1^2.
print("CONDITIONAL on DR1 (DR2 ⊃ DR1), four bins, symmetrised sigma; kill = Delta chi2 > 9")
names = ['LRG1', 'LRG2', 'LRG3', 'ELG2']
for truth in ('LCDM', 'S107'):
    for f in (0.75, 0.7, 0.65, 0.6):
        mean = 0; var = 0
        for k in names:
            r, su, sd, s = bins[k]; sig = 0.5*(su+sd); D = 1 - s; x1 = r - 1
            mu_new = 0.0 if truth == 'LCDM' else -D
            ex2 = f**2*x1 + (1-f**2)*mu_new
            s2 = f*sig
            mean += (D**2 + 2*ex2*D)/s2**2
            var += (2*D/s2**2)**2 * (f**2*(1-f**2)*sig**2)
        print(f"  truth={truth:4s} f={f:.2f}  E[dchi2_DR2 | DR1]={mean:5.2f} sd={np.sqrt(var):.2f}  "
              f"P(kill)={1-norm.cdf((9-mean)/np.sqrt(var)):.2f}")
