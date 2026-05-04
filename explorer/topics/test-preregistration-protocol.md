# Topic: Test Pre-registration Protocol

**Seeded:** 2026-05-04 (maintainer session)
**Priority:** HIGH
**Trigger:** P3 grad student and P4 researcher both flag TEST-03's "pending denominator audit" as a post-hoc rescue pattern that would end a paper review

## The Problem

When TEST-03 produced R²=0.14 against a pre-registered kill criterion of R²<0.20, the framework responded with "pending denominator audit" — i.e., questioning whether the kill criterion was correctly specified *after* seeing the result. Both the grad student and the researcher flag this as the textbook post-hoc rescue move.

This is not unique to TEST-03. The framework has 24 defined tests. How many have kill criteria that were actually locked before the test ran? How many are retroactively specified?

## The Research Question

What would a sound pre-registration protocol look like for Synchronism's test catalog?

Key sub-questions:
1. **Were any kill criteria specified before data was examined?** If so, which? Do the A2ACW session logs show that the criterion was set in a session without access to the ALFALFA-SDSS result?
2. **What's the difference between a locked criterion and a current criterion?** TEST-03's criterion as written is ambiguous — does R² < 0.20 mean "against total scatter" or "against MOND-residual scatter"? These give different verdicts.
3. **For future tests, what would proper pre-registration require?** The Open Science Framework and AsPredicted.org define pre-registration for psychology; do the same principles apply to computational tests run against public datasets?
4. **What should happen to a test whose kill criterion is ambiguous?** Options: accept failure on the most conservative reading, respecify as a NEW test with a new ID, or invalidate entirely.

## Why This Matters

If "kill criterion" means "criterion that can be audited after the result is seen," then no test can ever definitively fail. The framework's epistemic value comes from having kill criteria that actually kill. A kill criterion that can be revised post-result is equivalent to no kill criterion at all.

The researcher's verdict is stark: "a kill criterion that can be revised post-result is the single specific thing that would make me put the site down." This is a credibility issue, not a framing issue.

## Proposed Output

A one-page methodology statement: "How Synchronism's kill criteria are set, locked, and adjudicated." Including:
- What counts as pre-registration for tests run against public datasets
- What to do with ambiguous criteria that were never formally locked
- A clean verdict on TEST-03 using the most conservative reasonable reading of the original criterion

The output should live at `/research-philosophy` as an addition or at a new `/test-methodology` page.
