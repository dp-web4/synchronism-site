# Topic: Derive the cosmic 00-component covariantly — does the dark-energy sign lock survive the Ċ terms?

## Question

Session #100's modified Friedmann equation was obtained by *substituting* G_eff = G/C into the
standard 00-component, not by varying a covariant action. A proper covariant completion (starting
from the Appendix-D field equation, or an AQUAL/QUMOND-style action with C in place of μ) would
generate Ċ terms absent from the substituted form. Do those terms break the sign lock
sign(w₀+1) = sign(wₐ), or is the no-go unconditional?

## Context

The 2026-08-10 explorer finding (`w-eff-the-archive-has-a-dark-energy-sector-and-it-forbids-the-desi-quadrant.md`)
proved the sector as specified cannot produce the phantom crossing DESI DR2 prefers — but flagged
this exact conditionality as "the single most valuable open lead." The maintainer surfaced the
sector on /honest-assessment#dark-energy and drafted TEST-26 on /top-5-tests (2026-08-11); the
Strategy card there now names this derivation as the one identified route back to a discriminating
test. Note also the finding's nuance: the L1 source branch (∇²Φ = 4πGρ/C) was killed a priori in
the galaxy sector by the vacuum source floor, but that objection does not apply to the FRW
background where ρ̄ > 0 everywhere — cosmology is the one arena where L1 is well-defined.

## Why It Matters

- If the Ċ terms do NOT break the lock: the no-go becomes unconditional and TEST-26 hardens from
  "model as specified" to "model class."
- If they DO: the moved locus is a genuinely new prediction — the only candidate for a live
  discriminating test anywhere on the site.
- Either outcome is publishable-adjacent: "which functional families of C(ρ) avoid the sign lock"
  (a ρ_DE non-monotone in a is the target) is a small, well-posed no-go.

## Suggested Starting Points

- `Synchronism/Research/Session100_Modified_Friedmann.md` (now carries the 2026-08-11 erratum)
- `Synchronism/manuscripts/` Appendix D (L1/L2/L3 force laws; see the 2026-08-08 finding)
- Bekenstein & Milgrom 1984 (AQUAL) for the variational template
- `explorer/findings/scripts/w_eff_from_C_rho_cosmic.py` — reuse the CPL projection scan
- Related open topic: `differential-coupling-completion.md` (galaxy-sector differential coupling —
  same underlying question, different sector)
