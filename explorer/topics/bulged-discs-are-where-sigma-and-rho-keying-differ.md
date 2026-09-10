# Explorer Topic: The 19 Bulged Discs Are the Only Place Σ-Keying and ρ-Keying Are Different Physics

**Priority**: MEDIUM
**Seeded**: 2026-09-10 (maintainer)
**Origin**: Explorer's own self-seeded list, 2026-09-09 finding; formalized here because it is the
one place the 09-09 "three candidates are one" result can be *tested* rather than asserted

---

## Question

In the 19 of 153 SPARC discs where ρ_mid(R) = Σ(R)/2h fails by more than 5%, **does the choice between
Σ-keying and ρ-keying change the fit in a way that discriminates between them?** Or do both fail
there for the same reason, leaving the 2026-09-09 collapse-to-one-candidate intact?

## Context

The 2026-09-09 finding established that in a constant-scale-height disc, ρ_mid = Σ/2h *identically* —
measured spread 1.0000 across 153 discs — and an MRH-smoothed ρ at λ = 1 kpc is Σ/2λ to 0.4%. So
Σ-, MRH- and ρ-keying are one candidate, differing only by a per-galaxy knee shift of 2h. That result
is what let the site stop advertising three repairs where there is one, and it is now published on
`/honest-assessment`.

But the finding also named its own exception: the identity exceeds 5% in exactly **19 bulged discs**.
Those 19 are the only place in the sample where the two keyings are genuinely different functions of
radius, and therefore the only place the collapse could be falsified. The explorer's own self-seeded
note flagged this; nobody has run it.

## Why It Matters

- **It converts an argument into a measurement.** "These three candidates are one" currently rests on a
  near-identity holding in 134 of 153 discs. Testing the 19 where it *doesn't* hold is how you find out
  whether the collapse is a property of discs or a property of the sample.
- **A surviving discriminator would genuinely reopen the sector.** The 09-09 close says the real
  dichotomy is baryon-local scalar vs acceleration, with only acceleration working once the floor is
  freed. If Σ-keying beats ρ-keying *specifically in the bulged subsample*, that is a baryon-local
  scalar doing something an acceleration-keyed law does not — the first such signal in this archive.
  That would be a real result, and it would be worth more than any of the negative ones.
- **A null here is also worth publishing**, and is the likelier outcome: it would say the collapse is
  structural, and the site could then state the one-candidate claim without the 19-disc caveat it
  currently carries.

## Suggested Starting Points

- Identify the 19 from the 09-09 run rather than re-deriving the cut (`argument_of_C_head_to_head_l2.py`
  should already carry the per-galaxy spread).
- **19 discs is a small sample and this is the whole difficulty.** Pre-commit the statistic and the
  decision rule before looking, and report the paired per-galaxy Δχ² distribution, not just the
  subsample total. The 2026-09-09 near-miss — a 51-disc control reversing against the full 153 — is the
  governing precedent: a result on a subsample is a result about the subsample. Here the subsample *is*
  the experiment, which means the honest framing is "what do 19 discs have the power to say?" Answer
  that first; if the answer is "nothing," that is the finding and it costs one afternoon.
- Keep Υ profiled as in the 09-09 runs so the comparison is like-for-like, and stay above the ~0.01
  coherence floor until the outer Dirichlet condition is fixed.
- Cross-check against the bulge decomposition SPARC ships; the 19 should be the bulged ones, and if they
  aren't, the 5% cut is picking up something else and *that* is the finding.
