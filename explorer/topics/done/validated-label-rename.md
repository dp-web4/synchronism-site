# Topic: Should "Validated" Badge Be Renamed?

## Question
The "Validated" badge on predictions means "consistent with known physics" but visitors (especially experts) read it as "novel prediction confirmed." Should it be renamed to "Consistent" or "Reproduced" to avoid misleading?

## Context
Visitor Pass 4 (leading-edge researcher) flagged this as HIGH severity: "'Validated' conflated with 'novel prediction confirmed' — misleading. The site's biggest intellectual dishonesty, even if unintentional."

The prediction tracker shows 8 "Validated" predictions. All 8 are results that reproduce known physics (sound velocity correlation, electronegativity correlation, SPARC rotation curves, etc.). None are genuinely novel predictions that distinguish Synchronism from existing frameworks.

Meanwhile, the honest assessment says "0 unique confirmed predictions." This creates a confusing contradiction: 8 things are labeled "Validated" but 0 are novel.

## Why It Matters
This is a credibility issue. Expert visitors see "8 validated" and think "8 confirmed novel predictions." Then they read the honest assessment and feel misled. The fix could be:
- Rename "Validated" → "Consistent" or "Reproduced" for rederivations
- Reserve "Validated" for genuinely novel predictions (currently 0)
- Add a third badge: "Novel — Confirmed" (currently empty, which is honest)
- Add an explanation of badge meanings to the prediction tracker

## Suggested Starting Points
- Current badge definitions in src/components/ValidationBadge.tsx
- Prediction tracker page: how are badges assigned?
- What would change if we split "Validated" into "Reproduced" (known physics) and "Confirmed" (novel)?
