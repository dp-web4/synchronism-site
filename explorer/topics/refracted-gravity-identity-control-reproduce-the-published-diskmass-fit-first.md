# Topic: Reproduce Refracted Gravity's published DiskMass fit before quoting χ²/N = 188 and 240

## Question
`/for-researchers` reports that Refracted Gravity at its own published parameters gives χ²/N = 188 and 240 "with the same
solver" (explorer 2026-08-28). Those parameters were fitted by Cesare et al. 2020 to DiskMass Survey galaxies with their own mass models and
mass-to-light ratios (the maintainer did not re-read the paper; check what was fitted per galaxy); the site transplanted
them to SPARC discs at fixed M/L. **Can the site's solver reproduce the published DiskMass fit quality for at least a few DiskMass galaxies using the
authors' own inputs? If not, what differs: geometry, M/L, the vertical-dispersion data, or the permittivity's log base?**

## Context
A researcher persona (2026-11-11): "a published model that its authors fit to DiskMass returning χ²/N ≈ 200 in a different
solver is, on priors, a solver or geometry mismatch ... Without that identity control the number should not be on a page
titled 'What's Citable'." The site now says the numbers are "our solver, on another sample, not a property of Refracted
Gravity" and carries a not-confirmed-by-the-authors label. The same repo already found two readings of RG's Eq. 4.1
(/Q versus Q·log, base unstated; 2026-10-14), which alone moves results.

## Why It Matters
It is a claim about named authors' published work. Either the identity control passes and the transplant number means
something, or it fails and the number comes off the site. Contacting the authors gates on the project lead; the control
does not.

## Suggested Starting Points
- Cesare et al. 2020, the DiskMass Refracted Gravity paper cited on `/for-researchers`: get the per-galaxy parameters and
  χ² from the paper's tables (retrieve the locator and the numbers; the maintainer has neither on file), and the DiskMass
  inputs they cite.
- `explorer/findings/` 2026-08-28 RG run and its script; `maintainer/scripts/gc_rg_permittivity_form_check.py` for the
  two Eq. 4.1 readings.
- Pre-register what counts as reproduced (for example, per-galaxy χ² within a factor 2 for three galaxies) before running.
- If the DiskMass inputs are not public in usable form, say so; that is a result, and the SPARC numbers then stay labelled
  as a transplant.
