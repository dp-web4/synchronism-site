# PRE-REGISTRATION — the no-CDM boost cap 1/Ω_b = 20.3 against the published KiDS-1000 lensing-RAR bins

Explorer, 2026-10-04. Written and committed **before** the Brouwer+2021 data tarball is unpacked.
Not blind: I know the qualitative statement "the isolated-lens RAR follows the extrapolated MOND branch
to g_bar ~ 1e-15", and the maintainer's 09-25 represented-curve result (20.3 fails at 1e-15 with f = 5, 1.71×).
I have not seen the bin values, the bin count, or the covariance.

## Question
The stopping-question table (topic `is-there-any-reachable-observable-…`) has one row whose "excluded" status
rests on a represented curve rather than a data read: the bounded-boost reading at its only floor that clears
SPARC's 13.7, B_max = 1/Ω_b = 20.3 (no CDM). Read it on the bins.

## Data
Brouwer et al. 2021 (A&A 650, A113) public release, `kids.strw.leidenuniv.nl/sci_data/brouwer2021_rar.tar`.
Primary: the isolated KiDS-bright RAR (`RAR-KiDS-isolated`, Nobins) with its covariance. Secondary: the
stellar-mass-binned isolated RAR if released. g_obs = 4 G ESD_t / bias (B21 Eq. 7, README), errors and covariance
divided by bias as the README specifies. g_bar is the file's abscissa (B21's stars + cold gas, point mass).
Ω_b = 0.0493, Ω_m = 0.315 (Planck 2018, as the site).

## Model of the cap
Under any C ≥ C_min the framework's acceleration obeys g_obs ≤ g_bar,true / C_min = B_max · f · g_bar,file, where f
multiplies the file's baryons. A bin *excludes* the cap if g_obs,i − B_max f_i g_bar,i > z_crit σ_i.

## Statistics (fixed now)
- **Primary:** per-bin one-sided z_i = (g_obs,i − B_max f_i g_bar,i)/σ_i, σ_i from the covariance diagonal;
  Bonferroni over the N bins of the file: z_crit = Φ⁻¹(1 − 0.05/N). "Excluded" = any bin with z_i > z_crit.
- **Secondary (joint):** GLS mean of R_i = g_obs,i/(f_i g_bar,i) over bins with g_bar < 1e-13 m/s² using the full
  covariance (propagated as diag(1/(f g_bar)) Cov diag(1/(f g_bar))); cap excluded if R̂ − 2σ_R̂ > B_max.
- **Smallest allowed cap** per treatment: smallest B_max with no bin above z_crit (reported, not a verdict).
- **Sensitivity (reported, not verdict):** drop the lowest-g_bar bin (largest radius, where isolation and the
  two-halo term bite).

## Baryon treatments
- (a) f = 1: the file's stars + cold gas.
- (b) B21's own hot-gas allowance, if the release or paper gives it as a multiplier/profile; otherwise f = 2
  and f = 5 flat (the 09-25 values).
- (c) Every cosmic baryon of the halo, placed as a point mass inside every radius (maximal at all r):
  M_bar,true = f_b · M_200(M_*), f_b = Ω_b/Ω_m = 0.157, M_200 from the Moster+2013 z = 0 SHMR inverted at the
  sample's stellar mass (per mass bin if released, else at the isolated sample's mean log M_* stated in B21).
  f_c = f_b M_200 / M_bar,file. Note in advance: if the lensing mass inside r were exactly M_200 this would give
  B_req = 1/f_b = 6.4 by construction; the test is non-trivial only because M_lens(<r) keeps growing past r_200.

## Predictions (mine, registered)
- **P1** (a): 20.3 excluded (primary). Every Ω_m-based cap (3.17, 5.39, 6.39) excluded.
- **P2** (b, f = 5): 20.3 excluded in ≥ 1 bin (primary). Agrees with 09-25's represented curve.
- **P3** (c): 20.3 **not** excluded. Expected because f_c ≈ 6–20 for the B21 mass range.

## Consequence rule for the stopping table
- P3 fails (20.3 excluded even under (c)): the bounded-boost class is dead in both branches of the DM fork from
  lensing alone; the row closes as "excluded, executed on bins".
- P3 holds: the row stays open **conditional** on a census claim. The cap is then equivalent to the statement
  "baryons ≥ Ω_b × lensing mass inside every radius around isolated galaxies", which is a reachable observable
  (CGM X-ray/SZ/kSZ baryon census). I will state the f(r) the data require and compare it with the published census
  as an estimate, labelled as one.
- Independently of either outcome, the classical-dSph kill (B ≈ 30–100, gas-free) stands as the site states; the row
  only reopens if that is also escaped (tides/non-equilibrium). I will record that, not resolve it.
