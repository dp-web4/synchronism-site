# Topic: Session 107 Pre-Registration Audit — Prospective vs Post-Hoc

## Question

Session 107 (DESI Forecasts — Concrete testable predictions) was committed to the Synchronism repo on 2025-12-10. DESI DR1 dropped in April 2024. Does this mean the "2.4σ falsification" is post-hoc? And more broadly: for each Tier-1 kill criterion, was the prediction made before or after the relevant data was publicly available?

## Context

Seeded by Pass 4 (researcher) visitor feedback on 2026-05-07. The researcher asked: "If git-commit timestamps for predictions exist before the relevant data release dates (DESI DR1 = 2024-04, etc.), surface them next to each prediction. If they don't, replace 'pre-registered kill criterion' with 'self-stated kill criterion (post-hoc / pre-data).'"

A maintainer git timestamp check (2026-05-07) confirmed:
- Session 107 committed: 2025-12-10
- DESI DR1 public: April 2024
- Gap: ~8 months — the prediction document was written AFTER the data was available

The current framing on /tier-1-existing says "DISFAVORED at 2.4σ" but doesn't specify this is a post-hoc calculation. A post-hoc tension (framework applied with knowledge of data) is epistemic level of "internal consistency failure" — real and important, but weaker than prospective falsification.

## Research Task

### Step 1: Read Session 107

Read `/mnt/c/exe/projects/ai-agents/Synchronism/Research/Session107_DESI_Forecasts.md` and answer:
- Does Session 107 cite or reference any DESI DR1 measurements?
- Is the fσ₈ ≈ 0.418 prediction derived from framework parameters without consulting DR1, or is it calibrated against DR1?
- If the derivation is independent of DR1 data, the prediction has more epistemic force even if committed post-release.

### Step 2: Apply to all Tier-1 tests

For each TEST-01 through TEST-10 on /tier-1-existing:
1. Find the relevant prediction session(s) in the archive
2. Check their git commit timestamps
3. Find the relevant data release date (DESI DR1: 2024-04, DESI DR2: TBD, SDSS DR17: 2021-12, Gaia DR3: 2022-06, etc.)
4. Classify: prospective (timestamp before data), post-hoc (timestamp after data), or ambiguous

### Step 3: Write the audit table

Produce a table: Test × {Prediction date, Data release date, Pre/Post, Derivation independent?}. This becomes the evidence base for updating /tier-1-existing and seeding an honest framing for what "0 formal pre-registered tests" actually means.

## Why It Matters

The site says "0 of 24 run as formal pre-registered tests." But "formal" is undefined. If even one Tier-1 prediction was committed to git before the relevant data release, and that prediction's derivation is independent of the data, it should be prominently labeled as the framework's strongest falsification result. Conversely, if all predictions are post-hoc, the honest framing is "0 prospective predictions tested" — which changes the epistemic status of every disfavor/failure on the site.

This is the single most credibility-relevant investigation the framework can do on its own data.

## Suggested Starting Points

- `git log --format="%ai %s" -- Research/Session107_DESI_Forecasts.md` (already confirmed: 2025-12-10)
- Read Session107_DESI_Forecasts.md directly for DR1 citations
- DESI DR1 public release: April 2024 (arXiv:2411.12021 is DR1 analysis paper)
- SDSS DR17: December 2021; Gaia DR3: June 2022; Euclid: ongoing
- Research proposal: `proposals/session107_preregistration_gap.md` (filed 2026-05-07)
