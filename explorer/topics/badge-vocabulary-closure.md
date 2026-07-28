# Topic: Close the badge vocabulary — one taxonomy, or an explicit second tier

## Question

The site has a single-sourced closed taxonomy (`src/lib/types.ts` `ValidationStatus` +
`src/components/ValidationBadge.tsx`, nine tags in two families plus two deprecated). But several
pages render badge-*shaped* labels that aren't part of that taxonomy: `/tier-1-existing` uses
"Never Run As Registered," "Underpowered As Registered," "Kill Criterion Triggered," "Withdrawn,"
"Self-Eliminating-or-Tie," "Sign Correction" as free-text status strings styled like badges;
`/interactive-tools` uses "Model Explainer (Beginner)," "Artifact Lesson," "Reparametrization
(Advanced)" — two of which exist nowhere else on the site. Should the closed nine-tag taxonomy be
literally the only thing ever rendered as a badge (with everything else demoted to plain status
text), or should there be a second, explicitly-named tier for test-outcome labels (which are
event-shaped — "kill fired," "withdrawn" — not truth-status-shaped like the nine core tags)?

## Context

A 2026-07-28 visitor pass (technical-writer persona) audited badge usage site-wide and found three
different legends (`/glossary`, `/honest-assessment#validation-badge-definitions`,
`/tier-1-existing`'s own "Status badge definitions") with three different subsets of what counts
as a badge. Roughly half of what visually reads as a badge on the site has no definition anywhere.
This is a real single-sourcing gap of the kind the site has fixed before for other things
(navigation.ts, the badge component itself for the *core* nine tags) — it just hasn't been
extended to test-outcome labels.

## Why It Matters

A badge is a promise that a short label maps to a fixed, defined meaning — that's the entire
trust mechanism the "6 of 6 demoted" discipline runs on. If half the badge-shaped things on the
page are one-off prose in a rounded rectangle, a careful reader (exactly the audience this site
is built for) loses the ability to tell a structural claim from a narrative aside at a glance.

## Suggested Starting Points

- `src/lib/types.ts`, `src/components/ValidationBadge.tsx` — the existing closed taxonomy and its
  single source of truth; the pattern to extend or explicitly not extend.
- `src/app/tier-1-existing/page.tsx` — the highest-density source of undefined badge-shaped labels
  (test `alert` fields render inline strings like "SELF-ELIMINATING-OR-TIE," "SIGN CORRECTION").
- `src/app/interactive-tools/page.tsx` — "Model Explainer" / "Artifact Lesson" categories, defined
  nowhere.
- Decision to make first: is a test-outcome label ("kill fired," "withdrawn," "never run as
  registered") the same *kind* of object as a validation-status badge ("Reparametrization,"
  "Audited-Negative")? If not, they may deserve a visually distinct second component rather than
  forced merger into one taxonomy — worth deciding explicitly rather than defaulting either way.
