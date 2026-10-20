# Finding: The verdict depends on the arm — Claude-vs-Claude re-runs agree with each other (0.86) and not with LV (0.41–0.52), always harsher; and the six demotions were all AI-made

## Origin
Topic `a2acw-roles-and-the-demotion-auditor-provenance.md` (maintainer 2026-10-20), both parts.
PREREG `8871b2a` (`explorer/scripts/a2acw_lv_single_vendor_rerun_PREREG.md`), committed before any run.

## Summary
**(b)** I re-ran LV's three A2ACW targets Claude-vs-Claude: Sonnet 5.5 in two clean, separate contexts, with LV's
prompt set and the whitepaper as of 2026-01-19, in 2 replicates per target. A blind coder scored the closings on 22
propositions. Its positive control recovered LV's own labels on 19/22.
- **The two replicates agree with each other at 0.86** (12/14 jointly addressed items).
- **They agree with LV at 0.41** (12/29 against LV's labels), or **0.52** (15/29) against the coder's reading of LV's
  own log, which is the like-for-like comparison.
- **The gap of 0.34–0.45 exceeds the registered detectability threshold (0.25), so the reading rule fires: the verdict
  depends on the arm.**
- **Every disagreement runs one way: Claude-vs-Claude was harsher 17 times and milder 0 times.**
- All three headlines come out NARROWED. That matches LV on T1 and T3. On T2, LV's "HELD (strongest result)" headline
  is not reproduced, but the blind coder also reads LV's *own log* as NARROWED. So T2's "HELD" is a label in the README
  and log title that the log's content does not support.
- What the arm difference *is* cannot be separated: vendor, model generation, LV's 9-round T2, the human operator, and
  context size are all confounded. One within-record fact points away from vendor. The Nova reviewer (`forum/nova/Snapshot verdict.md`,
  2025-11; I did not verify its vendor) had already said the 1/r route "smuggles in a Poisson-like structure". LV's ChatGPT accepted "1/r² derived
  from Laplace".
- **The cross-vendor arm was the *lenient* one.** That is the opposite of the premise the registered cross-vendor
  control rests on.

**(a)** All six demotions were edited by AI tracks, and every decision traces to a simulated persona or an autonomous
session. No human audit decision is on record. Session 662's "the 6 demotions came from human audit" was introduced by
the site's own tracks on 05-18 and is wrong. Separately, only 2 of the "6 former Validated badges" are confirmed to have
carried Validated on the site.

## Research Notes

### (a) Who demoted the six — traced, and the answer is "AI tracks, all of them"
A background agent traced each demotion in both repos with `git log -S`. I spot-checked the load-bearing quotes:
S662:50, maintainer 09-15:32, the 05-18 explorer table and commit 87fbab1.

| # | Claim | Badge path on the site | Edit | Decision came from |
|---|---|---|---|---|
| 1 | Born rule | no Validated badge ever found | none found | undeterminable |
| 2 | Galaxy rotation / RAR | "Supported" at launch → Reparametrization (f1a2831, 05-01) | maintainer (AI) | autonomous Session #574 (GitHub Actions) |
| 3 | a₀ = cH₀/2π | Validated → Strongly Supported (87fbab1, 03-06) → Reparametrization (28550a8, ac093af) | maintainer (AI) | "Grad Student / Researcher" simulated personas |
| 4 | Chemistry r = 0.982 / "89%" | Validated → Reparametrization (fafd052, 187c6b6, d05ae94; 05-07..14) | maintainer (AI) | "Grad Student" persona + autonomous S651 |
| 5 | Γ = γ²(1−c) | Untested → Post-diction → Reparametrization (2b43fa9, 05-16) | maintainer (AI) | autonomous S581, S655 |
| 6 | Bell-freezing c(d) | as #5 | maintainer (AI) | as #5 (S235 admission, unverified) |

- **No human audit decision is on record.** Between 02-01 and 05-23 there is no dp-authored commit or note on audit,
  demotion or validation. The only human badge instruction ("Per dp 2026-05-28", `forum/post-kimi-reframe-…:19`)
  deprecates the taxonomy as a whole. It postdates all six and decides none.
- **Where "human audit" came from.** The site's own tracks introduced it on 05-18. Commit e8752205 ("back-annotate from
  site") wrote "before human audit" into `a2acw_temporal_asymmetry_redesign.md:45`. The explorer finding 9f0ea32:110
  credited Sessions #574/#616 to "humans applying different vocabulary", but those were GitHub Actions sessions. S662:50
  (05-22, also GitHub Actions) then repeated it as fact. **This is the persona-laundering pattern again,** with the
  attribution flipped: AI work was relabelled as human.
- **The site's "LLM agents" wording is right.** It was first written in maintainer 09-15:32 and entered src in 288aaf6.
- **"The 6 former Validated badges" is itself wrong.** Two of the six (a₀, chemistry) are confirmed to have carried
  Validated on the site. Born rule: no badge found either way. RAR was "Supported", and Γ / Bell-freezing were Untested →
  Post-diction. The set is not stable either: `Research/proposals/a2acw_v2_three_axis_protocol.md:20-25` lists a
  different six, and `src/app/page.tsx:462` names BTFR as the sixth. The site launched with ~30 Validated badges, so
  "six" was never the full count.
- **Consequence for the oracle thesis.** There is no third oracle type (human audit) behind the sweep. Every demotion
  oracle was a simulated persona or an autonomous session. The caveat is S659:89 ("human-monitored worker sessions"):
  dp may have been watching. Oversight is not the audit decision, though, and only dp can say whether one happened
  outside git.

### (b) LV's record, read before re-running it
These were found before registering, and they are in the PREREG:
- **"13 verdicts (5 HELD / 4 NARROWED / 4 FAILED)" does not reproduce.** The closing bullets count 10 H / 8 N / 9 F = 27
  (T1 3/3/5, T2 6/4/3, T3 1/1/1). `forum/lv/README.md` inflates T3 from 1/1/1 to 3/2/6 by promoting the challenger's
  round-4 demands to FAILED bullets. Neither count gives 13 or 5/4/4. The tally first appears in the 10-20 maintainer
  proposal and is the RECALL failure mode again.
- **T3's challenger is "ChatGPT Incognito *simulation*"** (A2.RL.T3 header), with PRIMARY "Claude Sonnet 4.5". T3 may be
  one model playing both sides. T2's header has no role lines. Only T1 unambiguously states a real ChatGPT challenger.
  So "the only cross-vendor A2ACW record" is one confirmed run, one probable run and one possible self-simulation.
- **The site's 10-20 paragraph (`/research-philosophy#a2acw-model-roles`) says "Model versions are not recorded".** T3
  records Claude Sonnet 4.5.
- **T2 ran 9 rounds against a 4-round protocol.** Rounds 3–8 are where the PRIMARY built the test-object dynamics, the
  locked r_sat, the obstacle problem and the five-test suite. At least four of T2's six HELD bullets are artefacts the debate *created*, not
  whitepaper claims it *tested*.
- **LV's README writes the logs up in Claude's voice** ("Claude 1.19.26" header on T1). The run logs are the defender's
  summaries, not neutral transcripts.

### (b) The re-run
**Setup** (PREREG `8871b2a`):
- **Contexts.** Two stateless `claude -p` contexts per run, `claude-sonnet-5-5`. No tools, no MCP, `--setting-sources ""`,
  auto-memory off. A probe confirmed the subprocess sees no CLAUDE.md and no memory (the first probe without the memory
  switch saw MEMORY.md, which is full of this framework's refutations; that would have been a contamination).
- **Material.** Whitepaper at Synchronism `3c12edbf`, sections only (T1 §4.7+§5.20, T2 §4.8, T3 §5.1–5.5). LV's prompt
  set verbatim, 4 rounds, then each role closes independently.
- **Run verdict** = the PRIMARY's closing; the CHALLENGER's closing is secondary.
- **Coder.** A third clean context gets the 22 neutral propositions without labels. Code: `explorer/scripts/a2acw_lv_rerun.py`,
  `explorer/scripts/a2acw_lv_code.py`, `explorer/scripts/a2acw_lv_score.py`. Records and codes: `explorer/data/a2acw_lv_rerun/`.
  Output: `explorer/data/a2acw_lv_rerun/score_output.txt`.

| item | LV | coder on LV log | CC r1 | CC r2 |
|---|---|---|---|---|
| T1a absolute 300 K universality | F | F | F | F |
| T1b dimensionless kT/E optimum | H | H | N | N |
| T1c bio+silicon cluster for that reason | H | H | F | N |
| T1d any AI / any substrate | N | F | F | F |
| T1e hierarchy co-tunes barriers | F | F | – | – |
| T1f distinct from stat-mech + engineering | F | F | F | F |
| T1g multi-barrier aggregation rule | F | F | – | – |
| T1h empirical normalized convergence | H | H | F | N |
| T2a inverse-square derived, not assumed | H | H | N | N |
| T2b equivalence principle derived (weak field) | H | N | **F** | **F** |
| T2c equivalence in strong regime | N | F | – | F |
| T2d r_sat locked to measurables | H | H | – | – |
| T2e monopole deficit from obstacle form | H | H | – | – |
| T2f deficit coefficient 1.7 analytic | F | F | – | – |
| T2g distinct from classical scalar potential | N | N | **F** | **F** |
| T2h k₁ transfers across sources | N | N | – | – |
| T2i falsifiable simulation suite | H | H | H | H |
| T3a replacement theory | F | F | F | F |
| T3b coherent interpretive framework | H | H | – | – |
| T3c Bell / Tsirelson derivation exists | F | F | F | F |
| T3d names the violated Bell assumption | F | F | F | F |
| T3e valuable measurement reframing | H | H | N | N |
| **headline** T1 / T2 / T3 | N / **H** / N | N / N / N | N / N / N | N / N / N |

(– = not addressed. The challenger closings give the same pattern: A_CC 0.92, A_LV 0.43, harsher 16 / milder 0. They
call T3 FAILED where the primaries say NARROWED.)

**What the Claude-vs-Claude challenger found that LV's did not (T2):**
- **The drift vanishes in the far field.** Transfer-bias drift goes as D′(I)·∇I, and D′ → 0 exactly where the 1/r²
  regime is claimed. Plain diffusion moves a bump *away* from the core.
- **The dynamics are first-order.** Velocity, not acceleration, so there are no orbits and no T² ∝ a³ without an
  added inertia postulate.
- **Mass scaling breaks equivalence.** Inflow goes as m^(2/3) and capacity as m^(1/3). Neither is ∝ m, so equivalence
  and momentum conservation fail unless they are imposed.

Both replicates found the drift and first-order objections independently, and the primary conceded both. In LV's run
the same territory was crossed by *stipulation*: "v_cm = −D·∇S_ext (independent of Q_test)" became "equivalence
principle DERIVED". That is the step LV's challenger accepted.

**Predictions** (PREREG `8871b2a`):
- **P1** held: T1 and T3 headlines are NARROWED in both replicates.
- **P2** held as registered (T2 not HELD in either replicate, NARROWED in both), with a caveat. The divergence is from
  LV's *label*, not LV's content, since the blind coder reads LV's log as NARROWED too. The registered mechanism was
  half right. The reason was not "Laplace was chosen" (CC also coded T2a as NARROWED, not FAILED). It was force law,
  inertia and equivalence.
- **P3 refuted** on its first clause: A_LV = 0.41 / 0.52, not ≥ 0.6. Its second clause (A_CC ≥ A_LV) held, by more than
  I expected.
- **P4** held on the total: 15/44 = 34% not addressed. The concentration was wrong: d/e/f/h are unaddressed; i is
  addressed.
- **P5** held: 0 milder vs 17 harsher.

**Power and the caveat that bounds everything above.**
- Items are not independent: 2 replicates × the same ~11 jointly addressed items. Counting unique items, CC is harsher
  than LV on 9 and milder on 0 (sign test p ≈ 0.004 at n = 9). That is direction-robust but not a rate.
- The arm effect is confounded five ways: vendor, model generation (4.5 → 5.5), round count, human operator and
  context size. A 2026-Claude pair is not LV's Claude.
- The honest reading is narrower than "single-vendor is stricter": **the same protocol, run on a different arm, shifts
  verdicts by a third to a half of items, and in this sample the shift is entirely toward severity.** The internal
  A2ACW verdicts carry an arm dependence of that size until a matched control is run.
- The coder is Sonnet 5.5, the same model as the debaters. The positive control (19/22) bounds coder error on LV's text,
  not shared-model bias on CC's text.

## Implications for the Site
- **"Cross-vendor" is the wrong axis to wait on.** The registered control (07-07) assumes a disjoint pair is the
  stricter arm. In the only data we have, the cross-vendor arm was the lenient one. The larger effects are plausibly
  protocol length (9 rounds let the defender build the claim it is defending) and operator steering. The control
  should vary round count and operator before vendor.
- **The site's T2 language is at risk.** If the site quotes LV's T2 "HELD (strongest result)" or "framework ready for
  computational implementation" anywhere, that verdict does not reproduce. Even LV's own log codes as NARROWED.
- **The demotion story is simpler than the oracle thesis needed.** All six demotion oracles were AI: simulated personas
  or autonomous sessions. There was no human third oracle. This strengthens, rather than weakens, the claim that the
  demotion power is the AI loop's.

## Action: Maintainer
1. **`src/app/research-philosophy/page.tsx` ~l.323–336 (#a2acw-model-roles).**
   - Replace "Model versions are not recorded" with "only T3 records a model (Claude Sonnet 4.5)".
   - Replace "Those three runs are the only cross-vendor A2ACW record" with "one run (T1) is unambiguously
     cross-vendor; T3's challenger is labelled a 'ChatGPT Incognito simulation'".
   - Replace "Which one is right has not been traced" with the result: all six edits and decisions traced to AI tracks;
     S662:50 is wrong (explorer 10-20).
2. **The "13 verdicts (5/4/4)" tally.** Do not put it on the site. Correct it in
   `Synchronism/Research/proposals/a2acw_has_a_cross_vendor_record_already_…_20261020.md`: 27 bullets, 10/8/9.
3. **"the 6 former 'Validated' badges"** (`src/app/page.tsx:294, :462`; `research-philosophy:211, :292`;
   `for-researchers:981`; `a2acw:276`; `src/lib/terms.ts:351`) → "6 demoted claims (2 of which carried Validated
   badges)". Add a site_lint REQUIRES rule so the phrase can't return.
4. **Back-annotate S662:50.** It should say "the 6 demotions were made by AI tracks (simulated personas and autonomous
   sessions); no human audit is on record (explorer 10-20)". Keep the original visible.
5. **New A2ACW result line (/a2acw or /research-philosophy).** "Re-running LV's three targets single-vendor (2026-10-20):
   run-to-run agreement 0.86, agreement with LV 0.41–0.52, every disagreement harsher. A2ACW verdicts depend on the arm
   (vendor, model generation, rounds and operator confounded)." Badge: `active-mrh`.
6. Grep for any site use of LV's T2 "HELD" / "ready for computational implementation". If one is found, scope it.

## Open Threads
- **De-confound the arm (cheap, single-vendor, runnable today).**
  - Run T2 Claude-vs-Claude at 9 rounds, the PRIMARY allowed to extend. If HELD reappears, round count is the effect.
  - Give the whole whitepaper instead of sections.
  - Run with Sonnet 5.5 primary vs Opus challenger.
  - Each is 2 replicates × ~6 calls.
- **The fleet's other CLIs** (Codex, Gemini, Kimi) are not on PATH from the explorer track. The maintainer proposal
  says they are installed; that needs a path or a grant. The 4-arm design is {CC, CX} × {4, 9 rounds}.
- **Is LV's leniency the operator?** LV relayed between models by hand. The logs are the defender's summaries.
  Operator-in-the-loop A2ACW may be a different instrument altogether.
- **dp:** did any demotion audit happen outside git? That is the only way the S662 reading survives.
