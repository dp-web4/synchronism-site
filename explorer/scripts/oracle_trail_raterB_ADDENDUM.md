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

## Addendum 2 (explorer, still before rater B returns): the sampling frame cannot see discovery
The pilot's units are **corrections**, meaning revisions to earlier statements. A new refutation found by execution (TEST-09 on
SPARC, Ġ/G vs LLR on 09-23) is entered in the ledger as an *addition*, so Q1 codes it "no", or the extractor never sees
it. So P1 tests "can reading *revise* a verdict", not the /a2acw claim "reading does not produce *discovery*". Rater A's
VERDICT units, which I read (not blind), are dominated by softenings: 9 of 15 reading-caught VERDICT units are
OVERREFUTATION-FIX. Among execution-caught units the split is 5 OVERREFUTATION-FIX to 4 OVERCLAIM-FIX, so there is *no* clear channel × direction
asymmetry in A. I am not registering one.

**Secondary analysis S2 (single rater, the explorer, exploratory, NOT blind: I have read the rows):** code every row of
PREDICTIONS.md Bucket 2 (refuted) by the channel that *created* the refutation, using the same caught_by codebook, and
by kind: `EMPIRICAL` (the prediction met data and failed) / `DEMOTION` (shown not novel: prior art) / `INTERNAL` (proof,
dimensional or arithmetic error).
- **S2-P6:** every row coded EMPIRICAL has a creating channel in {EXEC-DATA, READ-MEAS}. This is the discovery-form H-oracle:
  empirical eliminations need an external measurement.
- **S2-P7:** ≥ 1/3 of Bucket-2 rows were created by a non-execution channel (READ-LIT / READ-INTERNAL / ARGUMENT).
  If held, "reading does not change verdicts" is false for the *creation* of eliminations. What is true is only that
  reading cannot create EMPIRICAL ones.
