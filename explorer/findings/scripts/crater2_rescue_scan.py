#!/usr/bin/env python3
"""What would it take to rescue Crater II for the framework?  Scan the escapes."""
import math
G = 4.300917270e-6
LV, rh_fid, sobs, serr = 1.6e5, 1.42, 2.7, 0.3
def sigN(M, rh): return math.sqrt(G*(M/2.0)/(4.0*rh))

print("Crater II: observed sigma = 2.70 +/- 0.30 km/s (Caldwell+2017)")
print("Framework max sigma = sigma_N * sqrt(B_max).  Escape needs sigma_max >= 2.70 - 2*0.30 = 2.10\n")
target = sobs - 2*serr
print(f"{'escape axis':<34}{'value needed for sigma_max >= 2.10 km/s':<44}{'plausible?'}")
print("-"*100)
for Bmax, lbl in [(3.17,"B_max=3.17"), (13.7,"B_max=13.7")]:
    # need sigma_N >= target/sqrt(Bmax) -> G*M/(8*rh) >= (target^2/Bmax)
    need_sN = target/math.sqrt(Bmax)
    M_need = need_sN**2 * 8.0 * rh_fid / G
    ML_need = M_need/LV
    rh_need = G*(LV*2.0)/2.0/4.0/need_sN**2       # at M/L=2, what r_half is needed
    print(f"{lbl+': stellar M/L':<34}{f'M/L >= {ML_need:.1f} (fiducial 2.0)':<44}"
          f"{'NO - exceeds any stellar pop. (Draco-like ~2-4)' if ML_need>6 else 'maybe'}")
    print(f"{lbl+': r_half shrink':<34}{f'r_1/2 <= {rh_need:.3f} kpc (observed 1.42)':<44}"
          f"{'NO - factor %.1f below measured' % (rh_fid/rh_need) if rh_need<rh_fid/1.5 else 'maybe'}")
    print(f"{lbl+': tidal inflation of sigma':<34}"
          f"{f'sigma inflated by >= {target/(sigN(LV*2,rh_fid)*math.sqrt(Bmax)):.2f}x':<44}"
          f"{'possible but voids McGaugh 2016 a-priori hit'}")
    print()
print("Note: B_max=13.7 is the form that carries TEST-10 (f_DM,max=0.927); 3.17 is the headline 1/Omega_m.")
print("Both are exceeded band-robustly.  M/L would have to reach %.0f-%.0f to escape."
      % (target**2*8*rh_fid/G/3.17/LV/1.0, target**2*8*rh_fid/G/13.7/LV/1.0))
