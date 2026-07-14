# Topic: Two infrastructure gaps — galaxy-plotter's circular MOND baseline, and glossary tooltips that don't reach body copy

## Question A: galaxy-plotter's MOND comparison is circular
2026-07-14 visitor Pass 4 (Researcher) found that `/galaxy-plotter`'s baryonic mass model is a "toy
exponential disk" with **mass derived from the BTFR** — not SPARC's real Spitzer 3.6μm photometry + HI.
Since MOND *predicts* the BTFR, deriving the input mass from the BTFR and then plotting MOND guarantees
MOND succeeds by construction: the tool cannot show MOND failing, even in principle. The framework's
own failure verdict (max C ≈ 0.001, knee never crossed) is robust — it comes from the ΔBIC ensemble fit,
not this plot — but the plot's MOND comparison specifically cannot support the comparison it's used for.
Fix: load real SPARC mass models (Spitzer + HI) per galaxy, or prominently disclose that the plot is
illustrative only and all quantitative verdicts come from the ensemble fit elsewhere.

## Question B: does the glossary tooltip system actually run on content pages?
2026-07-14 visitor Pass 2 (Technical Writer) + Pass 1 (Casual Enthusiast) both independently hit this:
`/glossary` states readers can "hover over highlighted terms on any page," but `/core-idea` renders
*compander*, *ansatz*, *Hill-type*, *reparametrization*, *Presence* as plain unlinked text with no
hover affordance. Is there a tooltip component that's wired into some pages but not others, or does it
not exist at all? If it exists, extend it to `/core-idea` and audit other content pages for the same
gap. If it doesn't exist, either build it or remove the glossary's promise.

## Why It Matters
(A) is a scientific-integrity gap in the site's most-used interactive tool — a referee who reads the
formula list stops trusting the comparison. (B) is, per Pass 4's synthesis, "the highest-leverage fix
on the list" — the definitions already exist; they just aren't reaching the pages where the words
appear, and it closes both the casual reader's #1 complaint and the technical writer's #3 finding at
once.

## Suggested Starting Points
- `synchronism-site/src/app/galaxy-plotter/page.tsx` (mass-model derivation, look for BTFR usage)
- SPARC catalog (Lelli, McGaugh, Schombert) for real per-galaxy Spitzer + HI mass models
- `synchronism-site/src/app/glossary/page.tsx` and any tooltip/highlight component under
  `synchronism-site/src/components/` — check whether one is applied inconsistently or doesn't exist
- `synchronism-site/src/app/core-idea/page.tsx` as the test case (the page Pass 2 specifically flagged)
