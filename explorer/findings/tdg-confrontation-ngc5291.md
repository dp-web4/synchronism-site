# Finding: Confronting the EFE Prediction with NGC 5291 TDG Data

## Origin
Topic: `topics/tdg-efe-observational-test.md` (seeded by maintainer 2026-03-07, building on `findings/efe-numerical-test-results.md`)

## Summary

The EFE finding predicted Synchronism gives sigma ~ 10.5-14.5 km/s for a 10^7 M_sun TDG at g_ext = 1.0 a0. When confronted with **actual NGC 5291 data** (Lelli et al. 2015, Bournaud et al. 2007), the prediction parameters don't match: these TDGs have M ~ 10^8 M_sun and g_ext ~ 0.15 a0. At these actual parameters, Synchronism (Hill form) over-predicts rotation velocities by ~35%, while MOND over-predicts by ~60-90%. Both frameworks over-predict, but Synchronism's bounded C brings it closer to observations. The EFE is nearly irrelevant for this system because g_ext is comparable to (not dominant over) g_int.

---

## The Data

### NGC 5291 System
NGC 5291 is an early-type galaxy at the edge of Abell 3574 with a massive HI ring (~5 x 10^10 M_sun) from a past collision. Three tidal dwarf galaxies formed in this ring.

### Lelli et al. 2015 (revised analysis with 3D disc modelling)

| TDG | Vrot (km/s) | R_out (kpc) | Mdyn/Mbar |
|-----|-------------|-------------|-----------|
| NGC 5291N | 32 +/- 5 | 1.1 +/- 0.2 | ~0.9-1.3 |
| NGC 5291S | 25 +/- 4 | 1.5 +/- 0.3 | ~0.9-1.2 |
| NGC 5291SW | 20 +/- 3 | 1.4 +/- 0.3 | ~0.8-1.1 |

**Key finding**: Mdyn/Mbar ~ 1, consistent with Newtonian gravity and no dark matter.

### External Field
g_ext ~ 0.1-0.2 a0 from NGC 5291 (estimated from host galaxy kinematics).

### Bournaud et al. 2007 (original analysis)
Used different inclination corrections, found higher Vrot and Mdyn/Mbar ~ 2-4, suggesting significant mass discrepancies. MOND successfully explained these discrepancies.

### Discrepancy Between Papers
Lelli 2015 revised Bournaud 2007 downward using 3D disc modelling that better constrains inclination. The Lelli analysis found TDGs "fall to the left of the Baryonic Tully-Fisher Relation" (lower Vrot for given Mbar), and notes MOND predictions remain "systematically higher than observed."

---

## Parameter Mismatch with EFE Finding

The original EFE numerical test used:
- M = 10^7 M_sun, r_half = 0.5 kpc, g_ext = 1.0 a0

Actual NGC 5291 TDGs have:
- M ~ 10^8 M_sun (10x more massive)
- R ~ 1.1-1.5 kpc (2-3x larger)
- g_ext ~ 0.15 a0 (7x weaker)

This changes the physics qualitatively:
- Internal accelerations a_int ~ 0.08-0.20 a0 (deep modified gravity regime)
- g_ext/a_int ~ 0.1-2 (comparable, not dominant)
- The EFE is a minor perturbation, not the dominant effect

---

## The Confrontation

### Method
Self-consistent solution of V^2/R = a_N/C(a_obs) where a_obs = V^2/R, iterated to convergence. Assumes Mdyn/Mbar = 1 (Newtonian dynamics) gives the baseline mass, then computes what Synchronism and MOND would predict for that mass.

### Results

| TDG | V_obs | V_N | V_Sync | V_Sync_EFE | V_MOND | V_MOND_EFE |
|-----|-------|-----|--------|------------|--------|------------|
| NGC 5291N | 32 | 32 | 43.0 | 42.7 | 48.8 | 48.3 |
| NGC 5291S | 25 | 25 | 34.8 | 34.4 | 42.7 | 41.9 |
| NGC 5291SW | 20 | 20 | 28.7 | 28.1 | 38.0 | 36.8 |

**Ratios (predicted/observed):**

| TDG | Sync iso | Sync+EFE | MOND iso | MOND+EFE |
|-----|----------|----------|----------|----------|
| NGC 5291N | 1.34 | 1.33 | 1.53 | 1.51 |
| NGC 5291S | 1.39 | 1.37 | 1.71 | 1.68 |
| NGC 5291SW | 1.44 | 1.40 | 1.90 | 1.84 |

### Interpretation

1. **Both frameworks over-predict**: Synchronism by ~35%, MOND by ~60-90%
2. **Synchronism is closer**: The bounded C (max boost 3.17x) limits over-prediction
3. **EFE barely matters**: 1-5% reduction for both — g_ext too weak relative to g_int
4. **Mass uncertainty could resolve Synchronism**: Sync matches if M_bar ~ 50% of Newtonian estimate (within mass uncertainty). MOND needs M_bar ~ 20% (more problematic)

---

## What Mass Would Each Framework Need?

For Vrot = 32 km/s at R = 1.5 kpc:

| Framework | Required M_bar | % of Newtonian M |
|-----------|---------------|-----------------|
| Newtonian | 3.57e8 M_sun | 100% |
| Sync (isolated) | 1.79e8 M_sun | 50% |
| Sync (EFE) | 1.86e8 M_sun | 52% |
| MOND (isolated) | 7.15e7 M_sun | 20% |
| MOND (EFE) | 8.77e7 M_sun | 25% |

Synchronism needs the actual baryonic mass to be ~half of the dynamical mass estimate. MOND needs it to be ~1/5. Given the large uncertainties in TDG baryonic masses (gas masses are hard to pin down, especially molecular gas), the Synchronism requirement is plausible; the MOND requirement is tighter.

---

## Caveats

### 1. Simplified EFE Model
The calculation uses a scalar approximation: C evaluated on |a_total| = sqrt(a_int^2 + g_ext^2). The proper treatment requires solving the full nonlinear Poisson equation (AQUAL for MOND, analogous for Synchronism). Published MOND analyses using full 2D solvers get better agreement than this simplified model.

### 2. Non-Equilibrium Effects
TDGs may not be in full dynamical equilibrium (they formed from a recent collision). Non-equilibrium dynamics could explain low Vrot without invoking any modified gravity.

### 3. The Two-Formulation Problem
The Hill form (used here) and tanh form make very different predictions. The tanh form would give even larger over-predictions (unbounded boost in the low-a regime).

### 4. Lelli vs. Bournaud Data
The two analyses of the same system give significantly different parameters. The Lelli analysis (3D disc modelling) is more recent and presumably more accurate, but the discrepancy highlights systematic uncertainties.

---

## Implications for the Site

### The TDG Test Is More Nuanced Than Claimed
The MOND unification page presents the TDG test as a clean discriminator. In practice:
- NGC 5291's g_ext is too weak for the EFE to matter
- Both frameworks over-predict, but Synchronism less so
- Mass uncertainties dominate the comparison
- The claimed "3x difference in sigma_iso" (from the EFE finding) applies at different parameters than the real system

### What Makes a Better TDG Test?
The ideal TDG test needs:
1. **Strong external field**: g_ext > 0.5 a0 (TDGs very close to massive host)
2. **Well-measured baryonic mass**: Gas + stars independently constrained
3. **Confirmed equilibrium**: Velocity field consistent with settled rotation
4. **Known 3D geometry**: Inclination and line-of-sight distance constrained

NGC 1052-DF2/DF4 partially satisfy these criteria but their nature as TDGs is debated.

---

## Action: Maintainer

1. **Soften the TDG claim**: The MOND unification page should note that existing TDG data doesn't cleanly discriminate between frameworks due to mass uncertainties and weak external fields
2. **Add the Synchronism advantage**: Synchronism systematically closer to observations than MOND for NGC 5291 — this is a genuine result worth reporting
3. **Frame as open**: "The TDG test requires better data, not better theory" — ideal test parameters exist but haven't been realized yet
4. **Note the Lelli 2015 finding**: MOND over-predicts TDG velocities, which is independently noted in the literature

---

## Open Threads

1. **Find TDGs in strong external fields**: Candidate systems closer to their parent galaxies (g_ext > 0.5 a0) would be the clean test
2. **Full 2D Poisson solver**: Both frameworks need proper numerical solutions for embedded subsystems, not perturbative estimates
3. **NGC 1052-DF2/DF4 confrontation**: These UDGs (not true TDGs) have stronger external fields but the simplified EFE calculation fails to match published MOND results — needs a full solver
4. **The Bournaud vs. Lelli discrepancy**: Understanding which dataset is more reliable would sharpen the test
5. **Molecular gas contribution**: If significant unmeasured molecular gas exists in these TDGs, it could resolve both frameworks' over-predictions

## Sources

- [Lelli et al. 2015, A&A 584, A113](https://www.aanda.org/articles/aa/full_html/2015/12/aa26613-15/aa26613-15.html)
- [Bournaud et al. 2007, A&A 476, 1](https://www.aanda.org/articles/aa/pdf/2007/35/aa8081-07.pdf)
- [McGaugh TDG analysis page](http://astroweb.case.edu/ssm/mond/TDGs2.html)
- [Haghi et al. 2019, MNRAS 487, 2441](https://academic.oup.com/mnras/article/487/2/2441/5505850)
