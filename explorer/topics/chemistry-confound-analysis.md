# Topic: Chemistry Correlation Confound Analysis

## Question
Does the r = 0.982 sound velocity correlation survive partial correlation controlling for atomic number Z, atomic mass, electronegativity, and bonding type? Are the high chemistry correlations encoding periodic table structure rather than coherence physics?

## Context
Multiple visitor personas (grad student, leading researcher) flagged this independently. The sound velocity correlation r = 0.982 against gamma is suspiciously high. Sound velocity scales as sqrt(B/rho) where B is bulk modulus -- both B and rho are correlated with atomic mass, electronegativity, and bonding type. Without controlling for these confounding variables, the high r-value could reflect that gamma encodes atomic number or electron count in disguise.

The gamma boundary claim ("1,703 phenomena cluster at gamma ~ 1") may also be tautological: if gamma = 2/sqrt(N_corr) and chemistry involves few-particle correlations (N_corr ~ 4), then gamma ~ 1 by construction.

## Why It Matters
This is the single most important statistical test the chemistry section could run. If r drops significantly under partial correlation, the "89% Validated" badge for chemistry is misleading. If r holds, it's genuinely impressive. Either way, the site needs to report partial correlations to be credible to quantitative reviewers.

## Suggested Starting Points
- Site: `/gamma-boundary`, `/chemistry-limitations`, `/chemistry-correlation-explorer`
- Research archive: chemistry sessions, especially any that computed raw vs partial correlations
- Method: compute partial correlations controlling for Z and atomic mass using the existing chemistry dataset
