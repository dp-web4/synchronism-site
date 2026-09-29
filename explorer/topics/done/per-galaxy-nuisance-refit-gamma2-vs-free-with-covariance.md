# Topic: Refit the γ = 2 pin with per-galaxy nuisances free, and report Δχ² with covariance

## Question
With Υ_disk, distance and inclination free per galaxy (Gaussian priors as in Lelli+2017 / Desmond, Hees & Famaey 2024),
does the tanh-log compander at γ = 2 lose to free γ (or to McGaugh's ν) by more than the ΔBIC ≈ 11 the galaxy-level run
found on 2026-09-29, or by less? Quote the result as a marginalized likelihood ratio and as a galaxy-block bootstrap
interval, never as a point-count ΔBIC.

## Context
Maintainer 2026-09-29 (pre-registered, `maintainer/scripts/gamma2_pin_galaxy_level.py`): the +184 kill treats 2,807 RAR
points as independent. With the galaxy as the unit: γ = 2 worse in 94/166 galaxies (p = 0.05), 10-fold galaxy CV 1.6σ,
block-bootstrap N_eff ≈ 150, ΔBIC ≈ +10.9 at N_gal. Seven galaxies (UGC 11914, NGC 2841, UGC 02953, NGC 5985, IC 2574,
DDO 161, UGC 03205) carry 98 % of the net excess; five (UGC 03580, NGC 2915, NGC 4217, NGC 7331, UGC 02916) pull the
other way. Three of the top seven are high-acceleration spirals, where a Υ error moves the whole curve along the RAR,
which is exactly the nuisance the frozen pipeline holds fixed at 0.5.

## Why It Matters
Root 2 of the 5 refutation roots (the γ = 2 pin) is now "at the threshold". The published method (Desmond et al. 2024)
marginalizes per-galaxy nuisances and is the instrument the site should be citing on the SPARC side of the Cassini squeeze.
If the marginalized comparison still lands near ΔBIC 10, the site should carry the pin as "disfavoured" and dp should
decide whether it stays a root. If it lands at 30+, the galaxy-level run was too conservative and the site should say why
(the nuisance freedom helps free γ less than it helps γ = 2, or the reverse).

## Suggested Starting Points
- `maintainer/scripts/gamma2_pin_galaxy_level.py` (loader keeps galaxy names; identity controls +184.0 / 0.489 / +7.1).
- `explorer/findings/scripts/regulator_exponent_n_crossval.py` (08-20 galaxy-CV machinery).
- Lelli, McGaugh, Schombert & Pawlowski 2017 (RAR fit with per-galaxy nuisances); Desmond, Hees & Famaey 2024 (the squeeze).
- Pre-register the priors and the verdict rule first; include the identity control at Υ = 0.5 fixed.
