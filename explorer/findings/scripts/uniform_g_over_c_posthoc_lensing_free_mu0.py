"""POST-HOC (not in PREREG be3ecba): compare (U)'s projected mu0 against Ishak+2024 Table 3 rows that use no
galaxy weak lensing (mu0-eta parameterization; eta free, so Sigma is marginalised and both branches are covered).
Reason: the registered D1 rows include DES Y3 3x2pt, which shares lensing physics with the KiDS S8 probe."""
import importlib.util, sys, os
spec = importlib.util.spec_from_file_location("m", os.path.join(os.path.dirname(__file__), "uniform_g_over_c_growth_vs_isw_s8_mu.py"))
import io, contextlib
buf = io.StringIO()
with contextlib.redirect_stdout(buf):
    m = importlib.util.module_from_spec(spec); spec.loader.exec_module(m)
a = m.mu0_eff_D0(m.U); b = m.mu0_eff_fs8(m.U)
rows = [("DESI(FS+BAO)+BBN+ns10 (no CMB, no WL)", 0.17, 0.45, 0.56),
        ("DESI+CMB(LoLLiPoP-HiLLiPoP)-nl (no WL, no CMB lensing)", 0.17, 0.23, 0.23),
        ("DESI+CMB(LoLLiPoP-HiLLiPoP)-l (CMB lensing, no galaxy WL)", 0.18, 0.23, 0.23),
        ("DESI+CMB(PR3)-nl+DESY3+DESY5SN (registered-type, with WL)", 0.02, 0.19, 0.24)]
print(f"(U) projected mu0: {a:.3f} (D(0) match), {b:.3f} (fs8(0.5) match)")
for name, c, up, lo in rows:
    print(f"  {name:62s} mu0 = {c:+.2f} (+{up}/-{lo}):  {(a - c) / up:+.1f}σ (D0)  {(b - c) / up:+.1f}σ (fs8)")
# S8 incremental over LCDM's own offset
print(f"KiDS-Legacy incremental: (U,Sigma=1) - LCDM = {0.890 - 0.831:.3f} -> {(0.890 - 0.831) / 0.016:.1f}σ "
      f"(LCDM itself sits +1.0σ)")
