# Finding: Orphaned Inscription — Maintainer Killed Mid-Session; Its Unverified Statistics All Regenerate Except the One About the Loop Itself

## Origin

Self-directed (WAKE redirect). The topic queue (~50 items) was set aside because git status
showed a dirtier problem: 11 modified source files, uncommitted, with no session log explaining them.

## Summary

Today's 06:00 maintainer session was killed by a session limit at 06:14 — **after** inscribing
fresh statistics into nine site pages (responding to today's visitor log), but **before** running
the build, writing its log, updating SESSION_FOCUS, or committing. That left the repo in a state
the loop has never produced before: substantive edits with no accountable author record. I walked
every inscribed statistic to its primary. **All physics/statistics inscriptions regenerate exactly.
The single break is the sentence the dying session wrote about the loop's own provenance — and it
breaks in the self-critical direction**, extending the 07-09 reflexivity finding (SELF-claims are
the ones that break). The work is recovered: attribution corrected, build verified (92/92), committed.

## Timeline (from file mtimes + logs)

| Time (PDT) | Event |
|---|---|
| 05:21 | Visitor log written (4 personas; committed `1b1faf6`) |
| 06:00:01 | Maintainer run starts; log stub created |
| 06:08–06:13 | Nine `src/app/` pages edited (core-idea, equation-walkthrough, page, honest-assessment, rar-scatter, cdm-discrimination, cosmology-predictions, for-researchers, galaxy-rotation) |
| 06:14:16 | Log gains one line: "You've hit your session limit · resets 7am" — session dies |
| — | No build check, no maintainer log content, no SESSION_FOCUS entry, no commit |
| 08:00 | This explorer session finds the orphaned tree |

A second, smaller orphan from yesterday: the 07-09 explorer finding
(`directional-bias-law-fails-its-own-null-reflexivity-is-the-real-predictor.md`) cites
`explorer/scripts/directional_bias_null_model.py`, but the script was never `git add`ed —
the finding's reproducibility artifact was missing from the repo. Committed today.

## Audit of the orphaned inscriptions (citation-walk before recovery)

| Inscribed claim | Primary | Verdict |
|---|---|---|
| σ_int = 0.086 ± 0.003 dex belongs to **optimal cut N=677**, not the headline sample | `Synchronism/Research/Session610_CDM_Synthesis.md` table | **REGENERATES** (row: Optimal, 677, 0.086 ± 0.003) |
| Full cross-match **N = 14,435 → 0.118 ± 0.001 dex** | same table | **REGENERATES** exactly |
| Quality cuts "SNR > 15, e_W50 < 10, b/a < 0.65, V > 80 km/s" | S610 line 24 | **REGENERATES** verbatim |
| CDM benchmark 0.085 dex is S610's own internal halo-concentration figure, no external benchmark checked | S610 lines 53–66 (S610 itself hedges the consistency) | **REGENERATES** — the disclosure is accurate and matches the source's own caveat |
| Hill identity: tanh(γ·ln(1+x)) ≡ [(1+x)^2γ−1]/[(1+x)^2γ+1] | re-verified numerically this session, machine precision, γ ∈ {6×10⁻⁴, 0.49, 2}, x ∈ [10⁻⁶, 10⁴⁰]; C(ρ_crit, γ=2) = 15/17 | **REGENERATES** |
| Berezhiani & Khoury superfluid DM, PRD 92, 103510 (2015), phonon-mediated MOND force gated by a local condensation criterion | literature | **CORRECT** citation; the switch-vs-force separation argument is the standard reading |
| "~3,300 sessions (self-reported; archive tallies disagree by hundreds)" | 07-08 explorer census (650 session files; 2,685 vs 2,671; grand tables sum ~2,926 vs stated totals) | **REGENERATES** — honest deflation of the previous "3,308" |
| **"Identity stated 2026-07-10 after an external reader derived it independently — a site branded on catching its own reparametrizations should have caught this one itself"** | 07-09 visitor log lines 161–171 (full derivation, one day earlier, in-loop) | **BREAK — false in both halves.** No external reader exists; the loop's own review pass derived the identity 24h before today's pass re-derived it. The failure was a propagation lag, not a detection miss. |

## The break is directional, and in the predicted direction

The 2026-07-09 explorer finding replaced the "6/6 over-refute" law with a sharper predictor:
statistics the loop makes **about itself** break (3/3), while physics statistics regenerate (4/27 break).
Today adds a clean fourth instance: under a hard deadline (the session had minutes to live), the
maintainer's only factual error was a **self-referential provenance claim, wrong in the self-critical
direction** — it invented an external discoverer and confessed to a detection failure that never
happened. The physics it inscribed in the same minutes is flawless. SELF-claims now break 4/4.
This is exactly what the efficiency-attractor account predicts: self-flagellation is the house style,
so under time pressure the cheapest sentence to emit is a self-critical one — and nobody audits
those, because they don't look like overclaims.

**Corrected inscription** (shipped on `/core-idea` and `/equation-walkthrough`): identity derived
independently by two successive internal review passes (2026-07-09, 2026-07-10); the audit machinery
caught it; propagation took a day; no external derivation is on record.

## New failure mode named: orphaned inscription

The loop has session-level provenance discipline (walk statistics to primaries before inscribing)
but **no transactional discipline**: a session that dies between edit and commit leaves unaccountable
changes that the next track would either commit blindly or bulldoze. The window is real — session
limits, API outages (cf. the June Fable-5 outage), and machine sleep all produce it.

Recommendations (for dp / supervisor):

1. **Dirty-tree check at WAKE, every track.** If `git status` is dirty at session start, the
   predecessor crashed. The inheriting session audits the diff against primaries *before* doing
   anything else, then commits with recovery attribution (this session is the worked example).
2. **Maintainer commits incrementally** — one commit per closed fix, not one end-of-session commit.
   The 06:14 kill would then have cost only the in-flight fix, not the session.
3. **Run scripts should append exit status** to the log (the two-line log was the only signal the
   session died; a `EXIT: session-limit` line would make this machine-detectable).
4. **Findings must commit their scripts.** Yesterday's null-model script existed only on this
   machine's disk for 24 hours while the finding citing it was public.

## Implications for the Site

Shipped this session (recovered + corrected + build-verified 92/92):

- Hill identity stated on `/core-idea` and `/equation-walkthrough` with honest provenance —
  closes the 07-09 memory's action item and today's Pass 3 "conspicuous omission" (P3-high).
- N=677/14,435 sample-splice correction on 4 pages (honest-assessment, rar-scatter,
  cdm-discrimination, cosmology-predictions) — same numerator/denominator splice class as TEST-03.
- Superfluid-DM / screening escape taxonomy on `/for-researchers` and `/galaxy-rotation`
  (today's Pass 4 top contextualization ask).
- Landing: orientation sentence before the 0-confirmed ledger (Pass 1 bounce risk),
  "post-hoc retrodictions attempted: 1 — failed" reword (Pass 3), ~3,300 count deflation.
- CDM-discrimination external-benchmark disclosure (Pass 4: "uncheckable as written").

## Open Threads

1. **14,585 vs 14,435**: two "full ALFALFA–SDSS cross-match" Ns now live in the archive
   (S591 vs S610). Probably different match versions; the site now cites each with its session,
   but the discrepancy itself is unexplained. Small, but it's exactly the class that grew into
   TEST-03's splice. Worth one session tracing the match pipeline.
2. Most of today's visitor findings remain untriaged (badge-rendering collision, breadcrumbs,
   MRH definition drift, glossary gaps, ΔBIC labeling, A2ACW circularity caveat, consciousness
   convergence framing on /key-claims). The recovered WIP covered roughly the top third.
   Tomorrow's maintainer should triage today's log as if unworked.
3. Whether the visitor personas' twice-independent derivation of the Hill identity counts as
   "external" for the site's brand is a live framing question — the corrected text says "internal
   review passes," which is the defensible reading, but dp may want a policy sentence on how the
   site describes its own persona machinery to readers.
