# PREREG — LV's three A2ACW targets re-run Claude-vs-Claude (2026-10-20)

Written before any debate run. Topic: `topics/a2acw-roles-and-the-demotion-auditor-provenance.md` part (b).

## What was found before registering (source audit, not results)
- **The "13 verdicts (5 HELD / 4 NARROWED / 4 FAILED)" tally does not reproduce.** The closing bullets in LV's run
  logs count 10 H / 8 N / 9 F = 27 (T1 3/3/5, T2 6/4/3, T3 1/1/1). `forum/lv/README.md` expands T3 to 3/2/6. Neither
  count gives 13 or 5/4/4. The tally is unsourced.
- **T3's challenger is labelled "ChatGPT Incognito simulation"** (A2.RL.T3 header). The PRIMARY line reads "Claude
  Sonnet 4.5". T3 may be Claude simulating the challenger, not cross-vendor at all. T2's header has no role lines. Only
  T1 states a real ChatGPT challenger unambiguously.
- **T2 ran 9 rounds, not the prompt set's 4.** The obstacle-problem formalism behind most of T2's HELD items was built
  inside rounds 5–8.
- No second-vendor CLI is on PATH (`which codex gemini kimi` → none). So this is the **one-sided arm**.

## Design
- Debaters: two separate `claude -p` contexts, both `claude-sonnet-5-5`. No tools, no MCP, setting-sources empty,
  auto-memory off (verified: the subprocess sees no CLAUDE.md and no memory). Stateless: each turn gets its role
  prompt, the whitepaper section and the transcript so far.
- Context: whitepaper at Synchronism `3c12edbf` (2026-01-19, the version LV saw), **sections only**. T1: §4.7 + §5.20.
  T2: §4.8. T3: §5.1–5.5. LV gave the whole document; this is a deviation.
- Protocol: LV's prompt set verbatim, 4 rounds (R1 P, R2 C, R3 P, R4 C), then each role writes a closing. The **run
  verdict is the PRIMARY's closing**, matching the provenance of LV's logs (written in Claude's voice). The challenger's
  closing is reported as secondary.
- Replicates: 2 per target (6 runs). Run-to-run agreement is the noise floor.
- Coding: a third clean context (Sonnet) gets 22 neutral propositions (below), **without LV's labels**, plus a run's
  closings and transcript. It assigns HELD / NARROWED / FAILED / NOT-ADDRESSED to each.
  **Positive control:** the same coder on LV's own three logs must recover LV's labels on ≥ 18/22. If it does not, the
  coder is the bottleneck and the item comparison is reported as uninterpretable.

## Items (LV label in brackets; the coder does not see it)
T1: a absolute ~300 K universality, substrate-independent [F]; b dimensionless intermediate kT/E optimum across
thermally driven substrates [H]; c bio + silicon cluster near 300 K for intermediate-regime reasons [H]; d the claim
applies to any AI / any substrate [N]; e hierarchy co-tunes barriers / narrows the optimum [F]; f prediction distinct
from standard stat-mech + engineering [F]; g principled multi-barrier aggregation rule supplied [F]; h empirical
convergence of thermally driven substrates on similar normalized regimes [H].
T2: a far-field inverse-square derived, not assumed [H]; b equivalence principle derived in weak field [H]; c
equivalence holds in the strong / clamped regime [N]; d saturation radius fixed by independently measurable
parameters [H]; e monopole deficit η<1 from a constrained formulation [H]; f deficit coefficient analytically derivable
(1.7 ± 0.15) [F]; g predictions distinct from a classical scalar potential [N]; h coupling k₁ transfers across sources
[N]; i concrete falsifiable simulation suite specified [H].
T3: a replacement theory of QM (B) [F]; b coherent interpretive framework (A) [H]; c formal derivation of Bell / −cos θ /
Tsirelson exists [F]; d specifies which Bell assumption is violated [F, from the R4 result, not the closing]; e
valuable reframing of measurement without observer effect [H].
Headlines (3 units): T1 NARROWED (strong failed); T2 HELD; T3 NARROWED (B→A).

## Statistic and power
- A_LV = agreement between a CC run and LV, on items both address. A_CC = agreement between the two CC replicates.
- With ~15–20 jointly addressed items per comparison, a proportion has SE ≈ 0.10–0.12. **A gap |A_CC − A_LV| < 0.25 is
  not detectable.** Three headlines is a descriptive n.
- **What this cannot show.** Vendor dependence. LV's arm differs in vendor, model generation (Sonnet 4.5 → 5.5), human
  operator, round count (T2) and context size. A gap means *some* pairing or setup factor matters. A match does not
  rule out shared-corpus correlated error.

## Predictions
- **P1.** T1 and T3 headlines reproduce in both replicates (strong claim fails or narrows; B→A).
- **P2.** The T2 headline does **not** reproduce as HELD in at least one replicate. It comes out NARROWED or FAILED, on
  "Laplace was chosen, so 1/r² is assumed" or "re-description of a scalar potential". The reason: under the 4-round
  protocol the obstacle formalism is never built.
- **P3.** A_LV ≥ 0.6 overall, and A_CC ≥ A_LV.
- **P4.** NOT-ADDRESSED ≥ 25% of the 22 items, concentrated in T2 d/e/i.
- **P5.** On items both arms address, CC is no more lenient than LV: #(CC milder than LV) ≤ #(CC harsher).

## Reading rule
- Gap ≥ 0.25 with A_CC > A_LV → "the verdict depends on the arm"; the internal single-vendor A2ACW verdicts carry an
  unmeasured pairing dependence.
- Otherwise → "no detectable arm dependence at this power". Not "vendor-independent".
