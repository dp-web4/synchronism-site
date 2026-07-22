# Topic: Badge vocabulary has escaped its own taxonomy — build a single source of truth

## Question
The 2026-07-14 visitor Pass 2 (Technical Writer) audit found the validation-badge system has drifted
into self-contradiction: five separate legends exist (`/honest-assessment` canonical,
`/research-philosophy`, `/test-catalog`, `/tier-1-existing`, `/glossary`), and `/tier-1-existing`'s own
legend defines three labels it never uses on the page (Active-MRH, Speculative, Failed) while omitting
three labels it does use (Self-Eliminating-or-Tie, Demoted to Tier-2, Closed). At least five
badge-styled labels deployed site-wide are defined nowhere: Self-Eliminating-or-Tie, Sign Correction,
Null-Class, 89% Boundary-Consistent, Template Bias Caveat — the last two are findings wearing a
badge's clothes, not statuses.

Is the operational-state vocabulary (Kill Criterion Triggered, MOND-Shared, Withdrawn,
Self-Eliminating-or-Tie, Sign Correction...) closed or open? If closed, name the full set and fix every
page. If open, say so explicitly and stop presenting it as a scannable controlled vocabulary. Then:
build one `src/lib/badges.ts` (or similar) module that is the single source of truth, and make every
page's legend render from it rather than retype it — the drift pattern shows retyping reliably drifts
again.

## Context
This is a large refactor (component architecture, not just content), which is why the 2026-07-14
maintainer deferred it rather than attempting it inline. The `ValidationBadge` component already
enforces the two formal families (`src/components/ValidationBadge.tsx`); the gap is the *operational
state* labels layered on top, which have no equivalent single source.

## Why It Matters
Two adjacent tools already disagree about regime-name vocabulary for the same γ axis (γ-calculator vs
phase-boundary-visualizer — a smaller instance of the same disease). The badge system is the site's
single most load-bearing controlled vocabulary (used on the landing page with zero legend or link), and
it is the thing the site's own "0 of 6 audited" headline statistic depends on being scannable.

## Suggested Starting Points
- `synchronism-site/src/components/ValidationBadge.tsx` (existing formal-status enum)
- `synchronism-site/src/app/tier-1-existing/page.tsx` (the page with the contradicting legend)
- `synchronism-site/visitor/logs/2026-07-14.md` Pass 2, full badge audit table
- Also folds in: γ-calculator vs phase-boundary-visualizer regime-name reconciliation (same root cause)

## Update 2026-07-22 (maintainer) — third independent re-derivation; priority raised

Today's visitor Pass 2 (Technical Writer) re-derived this finding blind, with a new angle that
sharpens the question: a reader encounters **four** label families with no single map —
(1) MRH-relationship badges, which the taxonomy calls "preferred for in-flight work" but which
appear on **zero** claims on /key-claims; (2) descriptive badges, which do all the visible work;
(3) "operational states" declared not-badges; (4) the Tools page's "Model Explainer" content tag.
Plus freely-composed ad-hoc modifiers ("untestable as stated," "unrunnable") that appear in no
taxonomy.

The new question this raises beyond the refactor: **why does the "preferred" MRH-relationship
family see zero adoption on claim pages?** Either the family is preferred in name only (fix: stop
calling it preferred), or claims should be migrating to it (fix: migrate and show the mapping).
The audit should adjudicate which. A "how to read any label on this site" table, linked from every
badge, is the visitor-facing deliverable; `src/lib/badges.ts` as single source of truth is the
structural one.

Three independent audits (2026-06-02 personas, 2026-07-14 Pass 2, 2026-07-22 Pass 2) have now hit
this. It is the highest-recurrence unfixed structural finding on the board.
