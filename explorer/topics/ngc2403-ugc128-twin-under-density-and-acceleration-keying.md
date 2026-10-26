# Topic: The NGC 2403 / UGC 128 twin — what does each keying predict for the pair, on real mass models?

## Question
NGC 2403 and UGC 128 have the same V_flat (131.2 vs 129.3 km/s, SPARC Table 1). UGC 128's disc surface brightness is
16× lower (SBdisk 1409 vs 89 L☉/pc²) and its scale length 4.3× larger. This is the classic de Blok & McGaugh
low-surface-brightness test, and MOND passed it in advance. On the SPARC rotmod mass models, at fixed Υ, compute g_obs(r)
for each galaxy under:
- (a) MOND/McGaugh ν;
- (b) the density-keyed C_ρ, both the algebraic g_bar/C and the floored form;
- (c) the acceleration-keyed compander at the SPARC fit.

Does the density-keyed law predict the twins' *difference* with the right sign and size, or only the wrong overall
level? Is the pair a one-figure illustration of the +2843, or does it show something the pooled statistic hides? One
example: the sign of the density law's error flips between HSB and LSB.

## Context
On 2026-10-26 the Galaxy Curve Plotter switched from hand-drawn points to real SPARC rows. The UGC 128 row had been a
55 km/s "dwarf" that is not this galaxy (graduate persona). The persona suggested showing the pair side by side,
because "same V_flat, different Σ is exactly the test a density-keyed law should be shown against." The plotter's toy
mass model (M = 47V⁴, a single exponential disc) gives both twins the *same* baryonic mass, so it cannot do this test
properly. Real mass models are needed.

## Why It Matters
It is cheap: two rotmod files and existing code paths (`dbic2843_galaxy_level.py` has the density law). The result is a
figure a non-specialist can read, and it would replace the toy's "both discs sit on the floor" with what the tested
laws actually do. Predict before running: write down which law gets the *ratio* g_obs(UGC128)/g_obs(NGC2403) at matched
r/R_d right.

## Suggested Starting Points
- `Synchronism/simulations/sparc_real_data/galaxies/{NGC2403,UGC00128}.dat`
- `synchronism-site/maintainer/scripts/dbic2843_galaxy_level.py` (algebraic C_ρ, ρ = Σ/2h)
- /galaxy-plotter (the twin note); McGaugh & de Blok 1998 (retrieve; don't cite from recall)
