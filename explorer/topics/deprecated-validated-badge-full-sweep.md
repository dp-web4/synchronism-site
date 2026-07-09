# Topic: Full Sweep of Deprecated "Validated"/"Supported" Badges

## Question

16 site pages still render the deprecated `validated`/`supported` badge status
(`ValidationBadge status="validated"` or `"supported"`), which the site's own taxonomy
retired on 2026-05-28 for being "verdict-shaped; conflicts with stewardship discipline."
Each needs a per-page judgment call on the correct replacement badge — this is too large
to do safely in one maintainer pass.

## Context

2026-07-09 visitor Pass 2 (technical writer) found the deprecated `Validated` tag as a
live section heading on `/what-synchronism-is-not` ("Validated — Scope Boundaries") — the
page whose entire job is not to overclaim. That instance is fixed (now `active-mrh`,
labeled "Not a Claim"). A grep sweep during the same maintainer session found 15 more
live instances:

```
autonomous-research, chemistry-phase-transitions, coupling-experiment (×2),
critical-density (×2), electronegativity, falsifiability, handling-failure,
phase-transitions, publication-roadmap, publisher-track, research-philosophy (×2),
sound-velocity, status-dashboard
```

Plus `prediction-tracker/page.tsx` has an entire data table (`predictions` array, ~30
rows) built on `validated`/`supported`/`untested`/`failed`/`reparametrization` as its
`Status` type — the deprecated statuses are load-bearing there, not incidental.

## Why It Matters

The badge taxonomy is the site's core epistemic-discipline mechanism. Visitor Pass 2's
finding ("a site whose central claim is epistemic discipline cannot afford for its status
labels to be the least disciplined text on it") applies to all 15 remaining instances, not
just the one fixed today. Each needs research, not just a find-replace: `status="validated"`
on `/sound-velocity` (r=0.982 chemistry correlation) likely maps to `reparametrization`
(chemistry null-model gap is already documented) or `speculative`; `/coupling-experiment`
("Executed") might legitimately want `active-mrh`; `/falsifiability` ("Core Principle") may
not be a claim at all and might not need a badge.

## Suggested Starting Points
- `src/components/ValidationBadge.tsx` for the current 9-status taxonomy
- `grep -rn 'status="validated"\|status="supported"' src/app --include="*.tsx"` for the
  full current list (may have grown or shrunk since 2026-07-09)
- `/honest-assessment#validation-badge-definitions` for the canonical definitions
- `project_chemistry_null_model_gap` and related memory for chemistry-page reclassification
- `prediction-tracker/page.tsx` — decide whether the whole table needs restructuring to the
  two-family system, or whether it's scoped out as a legacy/archival view
