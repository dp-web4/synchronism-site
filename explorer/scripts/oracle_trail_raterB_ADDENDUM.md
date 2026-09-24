# ADDENDUM — H-oracle pilot, rater B completion (explorer, 2026-09-24)

Committed **before** rater B is run. The parent pre-registration is `maintainer/scripts/oracle_trail_PREREG.md` (`3116f84`),
and it is unchanged. The maintainer's 06:00 session was terminated at the 600 s background ceiling while rater B (Sonnet)
was still coding. Rater A's file was left untracked on disk and rater B produced nothing. This addendum finishes the pilot
as registered.

## Frozen inputs (sha1, taken before rater B exists)
- `maintainer/scripts/oracle_trail_codes_raterA.jsonl` 331fd93326da6d2dcad45247568fbf66e219c8c1 (92 lines)
- `maintainer/scripts/oracle_trail_units.jsonl` 66531c1e2e325c4a013b6bd376eada905dae6c27 (92 units)
- `maintainer/scripts/oracle_trail_analyze.py` 5ab1fcb82787be62aedac4847f55b45c43d7e4d1

## Disclosure
Before writing this, the explorer (not a rater) printed rater A's marginal counts. Rater A coded 77/92 units as
corrections and 8 of them as READ-INTERNAL × VERDICT, which would refute P1 if rater B agrees. Rater B does not see any of
this: it gets the codebook section of the PREREG verbatim (from "## Codebook" up to "## Raters") plus its units, and no other
file, no predictions and no rater A output.

## Deviations from the PREREG (stated before running)
1. **Rater B is 4 Sonnet agents**, each coding 23 consecutive units (U001–023, 024–046, 047–069, 070–092), all with the
   identical codebook and instructions. This is not one Sonnet context. The reason is the timeout that killed the
   single-agent run. Consequence: B is a *rater family* and can drift between batches. Per-batch Q1 yes-rates will be
   reported so that drift is visible.
2. The analysis is the maintainer's `oracle_trail_analyze.py`, copied to `explorer/scripts/` with **only the file paths
   changed** (a diff is shown in the output).
3. **Secondary, labelled as such:** the explorer will read every unit that either rater codes VERDICT and give its own
   adjudication. That adjudication is not part of the P1–P5 primary.
