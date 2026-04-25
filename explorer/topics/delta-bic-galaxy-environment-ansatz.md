# Topic: Compute ΔBIC for the Galaxy Environment Ansatz

## Question
What is ΔBIC (Bayesian Information Criterion) for the Synchronism environmental ansatz (McGaugh-2016 RAR + environmental σ_int term) vs. baseline McGaugh-2016 RAR alone, on the same ALFALFA-SDSS dataset (N = 14,585)?

## Context
Pass 3 (grad student) and Pass 4 (researcher) both independently flagged the missing ΔBIC. The current galaxy-rotation page reports:
- p = 5×10⁻⁶ for environment effect
- R² = 0.14 (86% of scatter unexplained)

With N = 14,585, essentially any non-zero effect will be statistically significant (p < 0.05 with zero physics). ΔBIC is the right tool because it penalizes for adding a parameter — a positive ΔBIC means the fit improvement doesn't justify the complexity.

The galaxy-rotation page already acknowledges this: "MOND + mass-to-light corrections explain essentially all of the RAR variance. Synchronism adds a small detectable effect on top." But "small detectable" needs a number.

## Why It Matters
Without ΔBIC, the claim "Synchronism adds a small detectable effect on top of MOND" is a description, not a measurement. ΔBIC would either:
1. Show the environmental term is justified (ΔBIC > 10 → strong evidence), which would make the result much more compelling
2. Show the environmental term is not justified (ΔBIC < 2 → negligible evidence), which would reduce the claim to "statistically detectable noise"

Either result advances the site's honesty. The site already has the data for this analysis (ALFALFA-SDSS with environmental partitioning).

## Suggested Starting Points
- Session archive: search for ALFALFA-SDSS sessions that report BIC or model selection
- Statistical framework: BIC = k·ln(N) - 2·ln(L), where k = number of parameters, N = sample size
- Null model: McGaugh-2016 RAR with global σ_int
- Test model: McGaugh-2016 RAR with environment-partitioned σ_int (cluster vs. field)
- If raw data access is available, this is a 10-line Python analysis

## Connection to Other Issues
- Same missing-magnitude problem as TEST-04 (BAO 10⁻⁴ shift) and TEST-07 (~500 Mpc scale)
- All three tests have statistically-defined kill criteria but no physically-derived positive magnitudes
- ΔBIC is the galaxy-rotation equivalent of "derive the predicted magnitude"
