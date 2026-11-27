"""Pre-send check of the RG / LLR note: kernel-shape and star-count escapes, and the 2021 LLR bound.

Executes rg_note_presend_check_PREREG.md (committed 378f2f2 before this file existed).
Reuses rg_smoothing_length_window.py (same directory). Q*ln reading only (confirmed from source).
Usage: python3 -I rg_note_presend_check.py
"""
import sys
import os
import numpy as np

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import rg_smoothing_length_window as W  # noqa: E402

HM18 = 2.23e-13                      # Hofmann & Mueller 2018, (7.1 +- 7.6)e-14, upper 2-sigma edge
B21 = abs(-5.0e-15) + 2 * 9.6e-15    # Biskupek+2021 (arXiv:2012.12032), (-5.0 +- 9.6)e-15 -> 2.42e-14 worse side
RD = "Q*ln"
T_LLR = 48.0                         # yr, 1970-2017 span of the HM18 solution
FIELD = 0.043                        # Msun/pc^3 stars, McKee+2015
TOPHAT_FACE = (0.5, 1.9)             # top-hat / Gaussian planar-edge response (edge at D/1.4 .. at centre)


def slope(rho, cal):
    return abs(W.dlneps_dlnrho(rho, cal, RD))


def gauss_table(bound):
    Ds = [0.1, 0.3, 0.5, 1.0, 3.0, 10.0]
    out = {}
    for k, cal in W.CAL.items():
        row = []
        for D in Ds:
            rho_s, rs, glo, ghi = W.llr_rate(D)
            row.append(slope(rho_s, cal) * (rs + glo) / bound)
        for rho_s in (0.043, 0.084):
            row.append((slope(rho_s, cal) * 2e-9 / bound, slope(rho_s, cal) * 4.5e-9 / bound))
        out[k] = row
    return Ds, out


def tophat_rho(D):
    sun = 1.0 / (4 / 3 * np.pi * D ** 3)
    inside = sum(m for d, m, _ in W.HAND if d < D) / (4 / 3 * np.pi * D ** 3)
    return sun + max(inside, FIELD) + W.RHO_GAS


def main():
    print("Bounds: HM18 2sigma |Gdot/G| <= %.3g /yr; Biskupek+2021 2sigma <= %.3g /yr (ratio %.1fx)\n"
          % (HM18, B21, HM18 / B21))

    # identity control: Gaussian table under HM18 must reproduce the note's Q*ln table
    for name, bound in (("HM18 (identity: must match the note's table)", HM18), ("Biskupek+2021", B21)):
        Ds, out = gauss_table(bound)
        print("A. Gaussian kernel, Q*ln, ratio to %s" % name)
        print("   D(pc): " + "  ".join(f"{D:g}" for D in Ds) + "  | >=30 pc rho_s 0.043 / 0.084")
        for k, row in out.items():
            cells = "  ".join(f"{x:.2g}" for x in row[:len(Ds)])
            big = "  ".join(f"{a:.2g}-{b:.2g}" for a, b in row[len(Ds):])
            print(f"   {k:9s} {cells}  | {big}")
        print()

    print("B. Sharp-edged (top-hat) kernel: stars inside contribute a constant; gas-only rate between crossings")
    print("   gas rate = 11-18 measured lo..hi x top-hat/Gaussian edge response %s; rho_s with top-hat Sun term" % (TOPHAT_FACE,))
    for D in (1.0, 2.0, 3.0, 5.0, 10.0):
        _, _, glo, ghi = W.llr_rate(D)
        rho_g = W.llr_rate(D)[0]
        rho_t = tophat_rho(D)
        lo, hi = glo * TOPHAT_FACE[0] * rho_g / rho_t, ghi * TOPHAT_FACE[1] * rho_g / rho_t
        cells = []
        for k, cal in W.CAL.items():
            s = slope(rho_t, cal)
            cells.append(f"{k}: HM {s * lo / HM18:.2g}-{s * hi / HM18:.2g}, B21 {s * lo / B21:.2g}-{s * hi / B21:.2g}")
        print(f"   D={D:g} rho_s(top-hat) {rho_t:.3g}: " + "; ".join(cells))
    print()
    print("   expected star boundary crossings in %g yr: 2 pi n v D^2 T  (n 0.08-0.15 pc^-3, v 35-55 km/s)" % T_LLR)
    for D in (1.0, 3.0, 5.0, 10.0):
        lo = 2 * np.pi * 0.08 * 35 * W.KMS * D ** 2 * T_LLR
        hi = 2 * np.pi * 0.15 * 55 * W.KMS * D ** 2 * T_LLR
        step = 0.2 / (4 / 3 * np.pi * D ** 3) / tophat_rho(D)
        steps = ", ".join(f"{k} dlnG {slope(tophat_rho(D), cal) * step:.1e}" for k, cal in W.CAL.items())
        print(f"   D={D:g}: N_cross {lo:.3f}-{hi:.3f}  P(>=1) {1 - np.exp(-lo):.3f}-{1 - np.exp(-hi):.3f};"
              f"  step per 0.2 Msun crossing: {steps}")
    print("   (a step of dlnG >~ 1e-11 inside the LLR span would be seen; every step above is larger)\n")

    print("C. Kernel fixed by star count (k-nearest-neighbour, sharp edge): rho_s = sum m / V(r_N), dln rho/dt = 3|r_N dot|/r_N")
    hand = sorted(W.HAND)
    for N in (3, 5, 10, 13):
        d, m, v = hand[N - 1]
        mass = 1.0 + sum(x[1] for x in hand[:N])          # Sun + N neighbours
        rho = mass / (4 / 3 * np.pi * d ** 3) + W.RHO_GAS
        rate = 3 * abs(v) * W.KMS / d
        cells = "; ".join(f"{k} HM {slope(rho, cal) * rate / HM18:.2g} B21 {slope(rho, cal) * rate / B21:.2g}"
                          for k, cal in W.CAL.items())
        print(f"   N={N}: r_N {d} pc (v_r {v} km/s), rho_s {rho:.3g}, rate {rate:.2e}/yr -> {cells}")
    print("   (hand list is incomplete beyond ~3.5 pc; N=13 is indicative)\n")

    print("D. Sub-parsec window under Biskupek+2021 (Gaussian, Q*ln, stars + gas lo): largest D passing")
    for k, cal in W.CAL.items():
        ok = []
        for D in np.geomspace(0.05, 0.9, 60):
            rho_s, rs, glo, _ = W.llr_rate(float(D))
            ok.append((D, slope(rho_s, cal) * (rs + glo) <= B21, slope(rho_s, cal) * (rs + glo) <= HM18))
        b = [D for D, a, _ in ok if a]
        h = [D for D, _, c in ok if c]
        print(f"   {k}: passes up to D = {max(b) if b else 0:.3g} pc (B21) vs {max(h) if h else 0:.3g} pc (HM18)")


if __name__ == "__main__":
    main()
