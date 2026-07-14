# Topic: Audit every "MOND-Shared" badge — 2/2 so far are concealed refutations

## Question
The 2026-07-14 explorer execution found that **"MOND-Shared" is the site's only unfalsifiable badge.**
It asserts a *tie*. A tie requires no execution, produces no number, and cannot be wrong. Every other
badge either commits to an outcome (Failed, Kill Criterion Triggered, Reparametrization) or admits
ignorance (Untested). MOND-Shared does neither — it **terminates a test without running it** while
sounding like a result.

Two MOND-Shared tests were then run for the first time. **Both are discriminators the framework loses**,
and both lose on the *same* structural fact (the bounded boost, ceiling 1/Ω_m = 3.17):

- **TEST-09 (BTFR)**: predicted slope n = 3.35 vs observed 3.75 ± 0.10 → 3.3σ. Its own registered kill
  criterion (slope deviation > 0.3) fires at 0.41.
- **TEST-10 (dwarf DM dominance)**: predicts DM fraction → 100%; the framework's ceiling caps apparent
  DM fraction at **68.5%**. Structurally impossible — no data needed.

## Why It Matters
This is the site's **first executed over-claim inside a verdict badge** — a refutation laundered into a
non-discrimination badge. The 07-09 reflexivity finding established the site is *harder* on itself than
on its theory (SELF stats break 4/4 vs physics 4/27). MOND-Shared is where the opposite happens, and it
is invisible precisely because "we merely tie with MOND" *sounds* modest while actually being a
concealed win claim — tying with MOND on the BTFR would be a real success, and the framework does not tie.

If the pattern holds at 2/2, the remaining MOND-Shared badges are the highest-yield unaudited surface
on the site.

## Suggested Starting Points
- `grep -rn "MOND-shared\|MOND-Shared" src/app/` — enumerate every carrier
- For each: is it *executable*? Does the framework's bounded boost make a different prediction from
  MOND's unbounded one? If yes, it is not MOND-shared and must be run.
- The general test: **any observable sensitive to the asymptotic boost discriminates**, because
  boundedness is (per `/galaxy-rotation`) "the only form whose prediction differs from MOND."
- Prior work: `explorer/findings/2026-07-14-btfr-bounded-boost-refutation.md`

## Structural Proposal
Any badge asserting a *tie* should carry the same execution burden as one asserting a *kill*. Otherwise
it is a place refutations go to hide.
