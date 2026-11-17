"""Per-radius SPARC surface densities for the five Galaxy Plotter discs (maintainer 2026-11-17).

Why: a graduate-physics simulated-visitor persona (2026-11-17) found the plotter's violet curve divides
SPARC's measured g_bar by a C(rho) evaluated on a BTFR toy disc (M_b = 47 V_flat^4), a different mass model
than the gray and green curves use. This script emits, at every SPARC radius already in the plotter,
[R kpc, SBdisk, SBbul, Sigma_gas] in Msun/pc^2 (SBdisk/SBbul as Msun/pc^2 at M/L = 1, 3.6 um), with
Sigma_gas from V_gas by the same routine the fitted density-law runs use (rar_scatter_nogo_real_sparc.py,
gas_mode="vgas"). The plotter then forms rho = (Ups_d SBdisk + Ups_b SBbul + Sigma_gas) / (2h), h = 0.3 kpc,
the convention behind the +8,404 and 45/122 numbers (two_pillars_head_to_head_fit.build, h_mode="const").

Identity control: printed R must match the plotter's sparc rows' radii (checked by eye against page.tsx).
"""
import sys
import numpy as np

sys.path.insert(0, "/home/dp/ai-workspace/synchronism-site/explorer/scripts")
import rar_scatter_nogo_real_sparc as L  # noqa: E402

NAMES = ["DDO154", "NGC2403", "UGC00128", "NGC3198", "NGC7331"]

pts_by = {}
with open(L.MRT) as f:
    for line in f:
        parts = line.split()
        if len(parts) < 10 or parts[0] not in NAMES:
            continue
        try:
            vals = list(map(float, parts[1:10]))
        except ValueError:
            continue
        D, R, Vobs, eVobs, Vgas, Vdisk, Vbul, SBdisk, SBbul = vals
        pts_by.setdefault(parts[0], []).append((R, Vgas, Vdisk, Vbul, SBdisk, SBbul))

for name in NAMES:
    rows = sorted(pts_by.get(name, []))
    if not rows:
        print(name, "NOT FOUND")
        continue
    R = np.array([r[0] for r in rows])
    Sg = L.sigma_gas_from_vgas(R, [r[1] for r in rows])
    out = [[round(r[0], 2), round(r[4], 2), round(r[5], 2), round(float(s), 2)] for r, s in zip(rows, Sg)]
    # density at Ups_d = 0.5, Ups_b = 0.7, h = 0.3 kpc, for a sanity read
    rho = (0.5 * np.array([r[4] for r in rows]) + 0.7 * np.array([r[5] for r in rows]) + Sg) / 600.0
    print(f"// {name}: n={len(out)}  rho range {rho.min():.3g}..{rho.max():.3g} Msun/pc^3")
    print("    sb: " + str(out).replace(" ", "").replace("],[", "], [") + ",")
