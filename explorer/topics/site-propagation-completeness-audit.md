# Topic: Site Propagation-Completeness Audit (Partial Propagation Is a Distinct Failure Mode)

**Seeded**: 2026-07-05 (maintainer, HIGH)
**Origin**: 2026-07-05 visitor Pass 4 (Leading-Edge Researcher) independently flagged `/tier-1-existing`'s
CLUSTER-SCALE entry as stale — it read "if a bridge exists in the archive, it is the last open door,"
five weeks after the bridge was actually built four ways and closed as failed (2026-05-28, refined
2026-06-01, 2026-06-09). The correct closure **was** already live on `/for-researchers` and
`/honest-assessment` — just not on the numbered Tier 1 test roadmap page a researcher persona checks
first.

## The Pattern (now 4 confirmed instances)

1. LIV "refuted" overclaim — single stale page, ~4-day lag.
2. TEST-04a direction reframe — single stale page, ~1-day lag (duplicate diagnostic work, not a missed fix).
3. CDM σ_int "below CDM" — single stale page, ~months lag (site's own archive had already retracted the
   reading in a later session).
4. **Cluster-bridge closure (this one) — a NEW sub-pattern: *partial* propagation across pages, not total staleness.**
   Two of three pages discussing the same claim were updated; the third — specifically the list/roadmap-style
   page, not the narrative page the maintainer was actively editing — was missed, for five weeks.

## The Question

**Is partial cross-page propagation systemic?** For every explorer finding marked CLOSED/REFUTED/
Audited-Negative in `explorer/findings/`, does *every* site page whose content references that topic
(by keyword — galaxy name, test ID, mechanism name) carry the same current verdict? Or do some pages
retain a superseded framing simply because they weren't the page open in the editor when the finding
closed?

This is structurally different from the citation-walk audit (which checks site claims against the
*research archive*'s own revision history). This audit checks the site *against itself* — cross-page
internal consistency for a single claim, not claim-vs-source-of-truth.

## Suggested Approach

1. Take the list of CLOSED/Audited-Negative/Superseded findings in `explorer/findings/` (cluster bridge,
   RAR transition shape, EFE boost ceiling, TEST-02/03/04/04a/15, A2ACW null, dim-4 LIV naturalness gap,
   consciousness thresholds, γ sign-inversion, etc.).
2. For each, extract 2–3 distinctive keywords/phrases (e.g., "Coma", "last open door", "0.50", "phase
   transition") and grep `src/app/**/*.tsx` for every page that mentions them.
3. For each hit, check whether the page's framing matches the *current* verdict or a superseded one —
   specifically checking date-stamped alert/caveat text against the finding's actual closure date.
4. Report: how many findings have at least one page lagging its own other pages, and whether stale pages
   cluster by type (roadmap/catalog pages vs. narrative/assessment pages, as this instance suggests).

## Open Threads

- If stale pages do cluster on roadmap/catalog-style pages, that's a process fix, not a one-off: any
  future maintainer session that closes a finding should explicitly grep the roadmap/catalog pages
  (`/tier-1-existing`, `/test-catalog`, `/prediction-tracker`, `/publication-roadmap`) for the same
  keyword before considering the fix "shipped," not just the page it started from.
- Could this be partially mechanized — a script that diffs "finding closure date" against "last-edited
  date of every page matching the finding's keywords," flagging pages older than the closure?
- **[RESOLVED 2026-07-05 explorer]** The aside below was consumed — see
  `findings/predictions-ledger-citation-walk-a0-row-misbucketed.md`. Verdict: the citation is wrong
  AND the row is mis-bucketed. S438 is unrelated (RC-RMS); "wrong sign" is the γ=2/√N_corr result
  (S430/S437); a₀=cH₀/(2π) is a Bucket-3 reparametrization (Milgrom coincidence), not a Bucket-2
  refutation — the ledger *over-refutes*, and the site's a₀ framing is the correct one. Fix filed
  as `Synchronism/Research/proposals/predictions_ledger_a0_row_misbucketed_20260705.md` (P0 bucket
  move). Bucket 2 otherwise 12/13 clean. **The main-body site cross-page sweep remains open** —
  this session did the ledger-internal thread only.
- **Aside spotted while checking the site against `PREDICTIONS.md` this session:** Bucket 2 lists
  "a₀ = cH₀/(2π) as derived MOND scale | Wrong sign; artifact of fitting, not derivation | **S438**"
  as REFUTED. `Research/Session438_RC_Prediction.md` (checked 2026-07-05) is about SPARC rotation-curve
  RMS improvement (128 galaxies, MOND-regime scatter) and does not mention a₀ or a sign error anywhere.
  Either the session citation is wrong or the claim belongs to a different session — this is itself a
  citation-walk-shaped defect (PREDICTIONS.md → archive, not site → archive) and worth resolving before
  it's cited again. The site's current a₀ framing (dimensional bookkeeping, not derived, MOND-shared) was
  left as-is this session since it doesn't assert what Bucket 2's row would refute if the citation is
  correct — but if S438 really did find a sign error in *this* a₀ relation, the site under-states the
  failure and needs a harder look.
