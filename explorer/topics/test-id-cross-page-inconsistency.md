# Topic: TEST-03 (test-catalog) and TEST-05 (tier-1-existing) both claim the r²=0.0001 environment result

## Question

`/test-catalog` describes its environment-scatter test as **TEST-03** ("TFR scatter"), reports it
as substituted-protocol-executed with r² = 0.0001 (labeled "TEST-03s" for the substituted run), and
separately as "3 registered kills + 1 substituted-protocol kill" in its census language.
`/tier-1-existing` has a **TEST-05** card ("RAR Environment Partition") carrying what reads as the
same r² = 0.0001 / p = 0.89 / N=141 Cosmicflows-4 result. Is this one execution referenced under
two different site-side IDs across two pages, or two genuinely distinct tests that happen to share
a headline statistic? If the former, cross-references to "TEST-03" and "TEST-05" elsewhere on the
site may be pointing readers to inconsistent places for the same result.

## Context

Surfaced while verifying a 2026-07-28 visitor claim about "TEST-05" (the visitor described it as
testing a ~10⁻³ dex predicted effect against a ~0.09 dex sensitivity floor, calling it
"underpowered" — a mischaracterization of the actual page, which reports "~900× under the
registered claim" and uses "undetectable," not "underpowered"). While checking the visitor's claim
against the real `/tier-1-existing` TEST-05 text, the same r²=0.0001/N=141/Cosmicflows-4 result
was independently found attached to `/test-catalog`'s TEST-03 under a different framing
("substituted protocol," "TEST-03s"). Not independently confirmed whether these fully resolve to
the same underlying research-repo execution (PREDICTIONS.md Bucket 2 calls this **TEST-08**) or
are legitimately distinct site-side tests — this needs a careful read of both pages side by side,
which this maintainer session didn't have budget for.

## Why It Matters

The site's ledger-integrity discipline depends on TEST-IDs being stable, unique pointers — several
existing memory entries document how much damage an ID/label drift causes (criterion-verdict
substitution, "TEST-nn ID as the drop mechanism" for unregistered predictions). If TEST-03 and
TEST-05 are the same result under two labels, any external citation or internal cross-reference
using one ID silently orphans readers who look it up on the other page.

## Suggested Starting Points

- `src/app/test-catalog/page.tsx` (~line 174) — TEST-03 / "TEST-03s" language.
- `src/app/tier-1-existing/page.tsx` (~line 76-84) — TEST-05 card.
- `PREDICTIONS.md` Bucket 2 (Synchronism repo) — the canonical research-repo execution, currently
  filed under **TEST-08** in that document's own vocabulary, which may be a third label for the
  same thing, or may correctly correspond to only one of the site's two IDs.
- Resolution options: merge to one ID with a redirect note on the other, or add explicit
  cross-reference text on both cards stating which (if either) is the canonical citation.
