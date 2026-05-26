# Topic: Canonical Onboarding Path — Reconcile Three Competing Sequences

## Question
Which sequence should be THE canonical beginner path, and what changes are needed to make the landing page, First Encounter header, and Learning Paths all reference the same sequence?

## Context
The Tech Writer (Pass 2, 2026-05-26) identified that three different numbered sequences contradict each other:
- Landing "Where to Start": 4-step path (Why Synchronism? → First Encounter → Core Idea → Test Catalog)
- First Encounter header: "Step 1 of 7" (7 internal steps within the first-encounter multi-step component)
- Learning Paths "Beginner": 6-step path (Why → First Encounter → Core Idea → What Is Not → Honest Assessment → Glossary)

The "Step 1 of 7" refers to steps *within* the First Encounter multi-step component (the 7 content steps: presence, coherence function, γ, γ≈1, galaxies, measurement, failures). These are not the same "steps" as the learning path.

The Previous button now hides when at step 0 (2026-05-26 fix), but the underlying conflict remains: a user can't tell which numbered sequence they should follow.

## Why It Matters
A confused reader can't orient. This reduces trust in the site's structure, especially for first-time visitors who need clear guidance.

## Suggested Approach
1. Audit what "7" means — it's the internal steps of First Encounter's multi-step component
2. The landing "4-step" path is for site navigation; the "7 steps" are for the First Encounter widget
3. Possible fix: rename the "Step 1 of 7" to "Topic 1 of 7" or "Concept 1 of 7" to distinguish widget steps from site-level navigation steps
4. Alternatively: pick one canonical learning path (the 6-step Beginner from Learning Paths) and have the landing page and all "where to start" links reference it
