# Topic: Run the DESI μ₀ projection for TEST-04a (execute, don't estimate)

## Question
The maintainer's 2026-07-14 correction to TEST-04a (see `/honest-assessment`, `/tier-1-existing`,
`/for-researchers`) states that the framework's ~12% fσ₈ suppression "maps to a μ₀ inside DESI-alone's
1σ band" against Ishak et al.'s modified-gravity constraint (arXiv:2411.12026: μ₀ = 0.11 +0.45/−0.54
from DESI FS+BAO+BBN+nₛ; μ₀ = 0.05 ± 0.22 with CMB+DES-SN). That mapping was **estimated**, not
computed — the 2026-07-14 visitor Pass 4 persona explicitly said "the exact mapping depends on the
assumed time-dependence, and the site should do that projection rather than me."

Run it. Given Synchronism's predicted growth suppression (fσ₈(z=0.51) ≈ 0.418 vs ΛCDM 0.474, a
mechanism with G_local/G_global = C_cosmic/C_galactic), what μ₀(z) or μ₀ time-dependence does this
imply, under Ishak et al.'s parameterization (typically μ(a) = μ₀ · Ω_Λ(a)/Ω_Λ,0 or similar — check
their exact functional form)? Does the resulting μ₀ sit inside, at the edge of, or outside their
quoted 1σ/2σ bands?

## Context
TEST-04a's kill was originally adjudicated on σ₈ (a GR-conditioned parameter), which the 2026-07-14
maintainer session corrected as circular for testing modified growth. The registered criterion
(fσ₈(z=0.51) > 0.46 for >3σ) was met at only ~1.5σ on DESI DR1's LRG1 bin. DESI's own purpose-built
MG analysis is the honest comparison, but the site currently only asserts an order-of-magnitude
estimate for where Synchronism's prediction lands on that axis.

## Why It Matters
This is the difference between "we think this test lacks power" (current state) and "we know exactly
how much power it lacks" (a citable, referee-proof result). It also determines whether the honest
verdict is "consistent with GR" or "mildly disfavored but within DESI-alone's reach" — materially
different framings that the current site conflates via hedged language.

## Suggested Starting Points
- `synchronism-site/src/app/honest-assessment/page.tsx` (TEST-04a card, 2026-07-14 correction)
- Ishak et al., arXiv:2411.12026 (JCAP 09 (2025) 053) — check their exact μ(a) parameterization
- Session 107 (Dec 2025) in the Synchronism archive — the origin of the 0.418 fσ₈ prediction and its
  underlying mechanism, needed to derive a self-consistent μ₀(z) rather than a naive point estimate
