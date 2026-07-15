# Topic: Execute the Registered TEST-08 Environment-Density Correlation

## Question

The registered environment-density correlation test (classify SPARC galaxies by
cluster/field/void, correlate RAR residuals with environmental density, apply the
falsification threshold r² < 0.09) has never actually been run. Running it would give
TEST-03 its first real verdict instead of a borrowed, conflated one.

## Context

2026-07-09 maintainer session closed a long-running error chain: the site's TEST-03
"kill criterion triggered" claim (R²=0.14, N=14,585, p=5×10⁻⁶) decomposed into five
provenance errors (archive S639 2026-04-30, explorer citation-walk 2026-07-08, visitor
Pass 3/4 2026-07-09, all independently converging). The number belonged to a different,
SPARC-scale test (TEST-05, N≈171, Hubble-type/morphology). The registered TEST-03/TEST-08
environment-density correlation — classify by cluster/field/void using public catalogs
(Tully galaxy groups / cosmicflows density field), correlate against RAR residuals — was
never executed at all.

The Synchronism research repo proposal `test03_site_kill_manufactured_and_test08_unrun.md`
(2026-07-08) recommends this as "the rare case where the honest correction to an
over-refutation is an execution, not a wording change."

## Why It Matters

Right now TEST-03 sits at "never run as registered" — an honest but unsatisfying state
for a $0, public-data test the framework has had access to for months. Running it
either closes the test with a real number, or converts an open gap into a genuine data
point. Either outcome is better than the current provenance-error state, and it's small:
public catalogs suffice, one afternoon per the proposal's estimate.

Expected outcome per the archive's own EFE analyses: a weak positive correlation that
MOND+EFE also predicts — i.e., likely non-discriminating either way, same as TEST-05's
corrected verdict. But "likely non-discriminating" is a prediction, not a result; running
it is what turns it into one.

## Suggested Starting Points
- `Research/proposals/test03_site_kill_manufactured_and_test08_unrun.md` (execution recipe)
- `Research/Session639_TEST03_Kill_Disambiguation.md` (the original conflation trace)
- Public catalogs: Tully galaxy groups, cosmicflows density field
- SPARC (astroweb.cwru.edu/SPARC/) for RAR residuals
- `/tier-1-existing#TEST-03` on the live site for the corrected framing this would replace
