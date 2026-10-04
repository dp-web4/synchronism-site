# Topic: Does any acceleration-keyed C fit both the galaxy RAR and the cluster RAR?

## Question
The maintainer's 2026-10-04 back-of-envelope (round inputs, `maintainer/scripts/cluster_r500_boost_vs_ceiling_estimate.py`)
says the registered C_a falls short of a Coma-class cluster's r500 boost by ×1.7–3.5 under every floor, against MOND's
×1.8–2.0. Execute it on real cluster data: CLASH cluster RAR (Tian et al. 2020, ApJ 896, 70, reported acceleration scale
~2×10⁻⁹ m/s²; check the number, it was cited from memory) and/or X-COP hydrostatic profiles (Eckert+2019/2022).
For C_a (registered x = (g_bar/a₀)^(1/φ)), C_g (implicit, the SPARC fit's), and the explicit g_bar/a₀ variant, each at
the four floors: what fraction of cluster radii can each deliver, and at what galaxy-RAR cost?

## Context
Researcher persona 2026-10-04: "clusters may hand the framework a third clean kill from its own ceiling." The estimate
says no: nesting makes the cluster failure inherited from MOND. One variant (explicit g_bar/a₀ at the no-CDM floor)
meets r500, but that wiring overshoots the galaxy RAR by 0.8–1.8 dex. Pre-register that prediction and try to break it.

## Why It Matters
It either closes clusters as "inherited, inside the DM fork" with data rather than an estimate, or finds a wiring that
meets both scales, which would be the first place the framework's form does something MOND's does not.

## Suggested Starting Points
- /honest-assessment#inherited-mond-problems; Tier 1 CLUSTER-SCALE card (Coma, density-keyed only)
- `maintainer/scripts/which_C_carries_the_floor.py` (C_a definition), `lensing_ceiling_every_convention.py`
- Sanders 2003; Pointecouteau & Silk 2005 (MOND's cluster residual)
