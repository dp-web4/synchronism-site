"""Framework-independent LLR bound on |d ln G_eff / d ln rho_s| under a Gaussian vs a top-hat kernel, HM18 vs B21.

Executes llr_density_keyed_kernel_and_bound_edition_PREREG.md (committed 13639ec before this file existed).
Reuses the explorer's inputs (no new data): rg_smoothing_length_window.MEAS (11-18 Gaia census, Gaussian sigma = l)
and rg_note_presend_check's top-hat rho_s and planar-edge response factor.
Usage: python3 -I maintainer/scripts/llr_density_keyed_kernel_and_bound_edition.py
"""
import os
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, os.path.join(HERE, "..", "..", "explorer", "scripts"))
import rg_smoothing_length_window as W  # noqa: E402
import rg_note_presend_check as P       # noqa: E402

EDITIONS = {"HM18": P.HM18, "B21": P.B21}


def main():
    print("Bounds: HM18 2-sigma edge %.3g /yr; B21 worse-side 2-sigma edge %.3g /yr; ratio %.2f"
          % (P.HM18, P.B21, P.HM18 / P.B21))
    worst = 0.0
    print("\nA. Gaussian kernel (11-18 census; stars dominate; gas added at its hi end)")
    for D in (1.0, 3.0, 10.0):
        rho_s, rs, glo, ghi = W.llr_rate(D)
        rate = rs + ghi * 0  # stars only, as printed on the site
        cells = []
        for k, b in EDITIONS.items():
            bound = b / rate
            worst = max(worst, bound)
            cells.append(f"{k} {bound:.2g}")
        print(f"   l = {D:g} pc: rate {rate:.3g}/yr -> |dlnG/dln rho| < " + "; ".join(cells))

    print("\nB. Top-hat kernel: stars inside are a constant; gas-only rate between crossings")
    for D in (1.0, 3.0, 10.0):
        rho_g, _, glo, ghi = W.llr_rate(D)
        rho_t = P.tophat_rho(D)
        lo = glo * P.TOPHAT_FACE[0] * rho_g / rho_t
        hi = ghi * P.TOPHAT_FACE[1] * rho_g / rho_t
        n_in = sum(1 for d, _, _ in W.HAND if d < D)
        cells = []
        for k, b in EDITIONS.items():
            weak, strong = b / lo, b / hi
            worst = max(worst, weak)
            cells.append(f"{k} {strong:.2g}..{weak:.2g}")
        print(f"   l = {D:g} pc: hand-list stars inside {n_in}, rho_s {rho_t:.3g} Msun/pc^3, gas rate {lo:.2g}..{hi:.2g}/yr"
              f" -> |dlnG/dln rho| < " + "; ".join(cells))

    print(f"\nWeakest bound in any cell: {worst:.2g}  (P4: must be < 1e-2) -> {'HELD' if worst < 1e-2 else 'FAILED'}")
    print("Note: a top-hat edge crossing by a star inside the 48 yr LLR span is a step of 1e-7..1e-3 in ln rho_s,")
    print("      visible to LLR; probability 0.1-0.3 % (1 pc) to 8-23 % (10 pc), from the explorer's 11-27 run.")


if __name__ == "__main__":
    main()
