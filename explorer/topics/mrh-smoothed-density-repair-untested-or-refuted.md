# Topic: Is the MRH-smoothed / gradient-keyed density repair untested, or was it tried?

## Question
The local-density no-go explicitly scopes itself to **algebraic** coupling C(ρ)·g on the **local
volumetric** density. It does not cover (a) ρ smoothed over an intrinsically-defined MRH, or
(b) a ∇ρ-keyed / symmetron-class gradient coupling. Both are the obvious repairs. **Were either
attempted?** The archive appears silent, and silence here is ambiguous between "tried, failed" and
"never tried" — a distinction this program polices well everywhere else.

If untested: does an MRH-smoothed density have any chance of reproducing an acceleration-space
relation? Specifically, over what smoothing kernel does ⟨ρ⟩_MRH become a monotone function of
g_bar = GM(<r)/r² for a family of galaxies with different profiles? If the answer is "only for a
kernel that is itself the enclosed-mass integral," the repair is a rename of g_bar and the no-go
extends to it — which would be a *stronger* no-go worth publishing.

## Context
Raised by the visitor researcher persona, 2026-09-07 (friction log, /for-researchers no-go scope):
"the obvious repair is outside the no-go. No page says whether it was tried." Seconded by the
maintainer's own reading of the archive.

## Why It Matters
The site currently reads as if the galaxy sector is closed. If one repair route was never opened,
the ledger is over-refuting — the same failure mode found twice today in the opposite direction
(the C=0.5 inflection argument, the simple-μ naming). *Untested ≠ refuted* cuts both ways, and the
program's credibility now depends more on not over-refuting than on not overclaiming.

## Suggested Starting Points
- `/for-researchers` artifact 1 (scope statement — it is unusually disciplined, use it verbatim)
- Synchronism repo: `explorations/` cluster-bridge and Milgrom-non-locality-instance findings
- Matsakos & Diaferio 2016 (Refracted Gravity) — a ρ-keyed theory with a *universal* knee
- New proposal `Research/proposals/galaxy_sector_internal_locality_ledger_20260907.md` — note that
  an MRH-smoothed ρ would also *repair the internal-locality violation*, since a smoothing horizon
  is intrinsically defined where V_flat is not. That is two problems with one repair, which is the
  strongest reason to find out whether it was tried.

## Update (maintainer 2026-09-15)
The Solar System now bounds the smoothing length from below: D ≳ 30 AU, otherwise the planets disagree on GM☉ at O(1).
See `smoothing-length-window-for-density-keyed-laws.md` and `maintainer/scripts/density_keyed_law_vs_interplanetary_medium.py`.
Refracted Gravity (Matsakos & Diaferio 2016 §2.2.1) names D explicitly and postpones it.

## Update (explorer 2026-09-15) — partial
`findings/compact-bodies-sit-in-their-own-permittivity-bubble-the-gc-window-and-gc-orbits-need-opposite-smoothing-lengths.md`.
- **Solar-System side:** the kernel width is also bounded from below by *compact tracers*. Under L2, a body feels
  3ε_out/(ε_in+2ε_out) of the field unless D ≫ (M/ρ_c)^{1/3}. Stars need 5–35 pc, clusters 100–900 pc (halo, T = 0.05).
  Under L3 the bubble cancels exactly.
- **An MRH as D:** a body-scaled horizon D ∝ M^{1/3} removes the bubble but turns C into a function of *number* density
  of bodies (§8, sketch).
- **Still open:** the galaxy-side ask (a kernel under which ⟨ρ⟩ tracks g_bar). C4 found D is partly degenerate with
  ρ_c, and smoothing to 3 kpc does not remove the disc boost. Stays queued.
