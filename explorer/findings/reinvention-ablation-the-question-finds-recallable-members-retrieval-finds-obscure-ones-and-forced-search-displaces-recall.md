# Finding: In the reinvention ablation, the question finds the recallable members, forced search finds the obscure one and loses the recallable ones, and the record's "0/3,308" holds only at member granularity

## Origin
Topic `a2acw-reinvention-ablation-2x2-roles-by-retrieval.md` (maintainer 2026-11-19, from the researcher persona's "there is
no comparison arm").
- PREREG `4e3c5e9`, committed and pushed before any item session.
- Deviations §9 (`277b3b8`), §10 (`b4316e3`) and §11 (`2001bac`), each registered before the sessions it governs.
- Runner `findings/scripts/reinvention_ablation_run.py`; scorer `findings/scripts/reinvention_ablation_score.py`, with output and hand overrides in `findings/scripts/reinvention_ablation_score_output.txt`; data `explorer/data/reinvention_ablation/`
  (118 files: 108 single-agent sessions and 5 six-turn debates; 113 md + 5 json).

## Summary
**1. The record, read against git before running (record-facing).**
- **Family level: all four rows were noticed inside the 3,308 sessions.**
  - S574 (2026-02-08): "C(ρ) is a reparametrization of MOND ν(x)".
  - S661 (05-21): γ ≈ 0.49 "fully MOND-degenerate".
  - S100 named itself "Modified Friedmann".
  - S617–621 (April): "grid geometry → Lorentz violation, already excluded by 14 orders".
- **Member and paper level: none were.**
- **Two of the four objects were built by the retrieval-enabled site explorer lane,** which took 22 days (RG field
  equation, built 08-03) and 73 days (simple-μ identity of the 05-21 fit) to notice them.
- **So "every match came from a lane with literature access" is true, and so is "a lane with literature access built two
  of them without noticing".**

**2. The ablation (Sonnet 5.5, in-family, items with the framework name masked).** Member-level hits on the three
re-derivation items (R1μ simple μ, R2 Cardassian, R3 Refracted Gravity):

| cell | task / tools | R1μ | R2 | R3 | total (registered) | strict¹ | correct paper locator |
|---|---|---|---|---|---|---|---|
| E | neutral critique, no tools | 3/3 | 0/3 | 0/3 | 3/9 | 1/9 | 0/9 |
| C | "is this already published?", no tools | 3/3 | 3/3 | 0/3 | **6/9** | 6/9 | 5/9 (1 hedged) |
| Cp | C + "you may search", tools not permitted | 2/2 | 2/2 | 1/2 | 5/6 | 5/6 | 3/6 |
| D | C + "you may search", tools permitted | 2/2 | 2/2 | 0/2 | 4/6 | 4/6 | 3/6 |
| Df | C + "you must search (≥ 2)", tools permitted | 1/2 | **0/2** | **2/2** | 3/6 | 2/6 | 2/6 |
| A′ | A2ACW debate, 2 roles, 6 turns, no tools | 1/1 | 0/1 | 0/1 | 1/3 | 1/3 | 0/3 |

¹ The registered R1μ key accepts the exact identity tanh(½ ln(1+x)) = x/(x+2) as a member hit. "Strict" requires naming the
simple μ / Famaey–Binney. 12 of 13 R1μ responses wrote out the γ = ½ substitution (the exception is a forced-search one),
and 20 of 26 across R1 and R1μ did. In the record that step took two months.

- **R4 (Collins LIV naturalness, an objection rather than a re-derivation): 13/13 sessions, every cell, at member level.**
  - Each named the argument and the correct five-author list.
  - The 9 sessions in C, Cp, D and Df also gave PRL 93, 191301. E and A′ gave authors and year only.
  - The neutral critique (E) found the argument 3/3, as often as the question did.
- **Decoys (X1–X4): 0 false identifications in 48 decoy sessions.**
  - Every regex flag, read by hand, was a "not published" answer.
  - X2 (a₀ = cH₀Ω_m^φ) drew Milgrom by name in 3/3 C trials.
- **The mis-keyed R1 (my transcription error, same keying as `/for-researchers`'s table row): 13/13 sessions in every
  cell flagged it as internally inconsistent** (no deep-MOND limit; g_obs = g_bar + 2a₀′). 0/13 claimed the simple μ.

**3. What the cells say.**
- **The question carries noticing.** C (6/9) beat E (3/9 registered, 1/9 strict). The whole gap is Cardassian (3/3 vs
  0/3), a member that recall holds but critique does not volunteer.
- **Available retrieval is not used.** In D every session, 18/18, answered from memory although the tools were
  permitted. D ≈ C (4/6 vs 4/6 on the comparable reps), the topic's kill line for "the question is the active
  ingredient".
- **Forced retrieval trades recall for search.**
  - It found the obscure member: RG 2/2, with the correct arXiv:1603.04943, where recall gave 1/11, and that one had the wrong id
    1603.04950: across every no-retrieval cell, recall named RG in 1 of 11 sessions.
  - It lost the recallable ones: Cardassian went from 3/3 to 0/2, and simple μ to 0/2 strict.
  - The model searched for the literal tanh-log form, found nothing, and reported "no published source".
  - This is the topic's third kill line inverted: retrieval did not manufacture prior art, it suppressed it.
- **Recall confabulates locators in a fixed way.** 4 of 7 recalled Famaey & Binney citations gave "Phys. Rev. D 71,
  121301 (astro-ph/0501362)". Per the APS issue listing, PRD 71, 121301 is Mitra 2005 on DAMA. The right locator is
  MNRAS 363, 603.
  - It is the same wrong locator across cells: an attractor, not noise.
  - It matches the archive's 06-23 Collins citation, which had the right journal and page and the wrong authors.

## Research Notes

### Predictions (PREREG §6)
| # | prediction | outcome |
|---|---|---|
| P1 | C ≥ E + 3 member hits (of 9) | **held** at the threshold under the registered key (6 vs 3); 6 vs 1 strict |
| P2 | R2 C ≥ 2/3; R1μ C ≥ 1/3; R3 C ≤ 1/3 | **held** (3/3, 3/3, 0/3) |
| P3 | retrieval member ≥ 5/6, paper ≥ C + 2 | **failed** for D (4/6; 3/6 vs C's 4/6) and for Df (3/6; 2/6) |
| P4 | A′ ≤ E's rate | **held** (1/3 vs 3/9) |
| P5 | decoy false IDs C ≤ 2/12, D/Df ≤ 1/8; X2 → Milgrom ≥ half of C | **held** (0/12, 0/8, 0/8; 3/3) |
| P6 | R4: E ≥ C | **held** at member level (3/3 = 3/3); E gave no journal locators |

**Scorecard: 5 held, 1 failed.** The failure is the substantive one. I expected retrieval to settle what recall noticed.
Available, it is not used; forced, it changed the task from "what does this reduce to?" into "is this string in the
literature?".

### Confounds that bound the reading
- **n.** 2–3 reps per item, one model. Differences of ≤ 2 are not read. The Cardassian contrasts are E 0/3 vs C 3/3 and
  C 3/3 vs Df 0/2. They are the largest in the table and still a pilot.
- **Df's wording.** "Cite only what you found or can verify" may have done the suppressing, not the search itself. A Df′
  without that clause is the obvious next cell.
- **Items are distilled.** Each states the construction in a few sentences, with the γ = 0.49 fit up front. The archive
  sessions carried ~10⁴ words of framework narrative and γ = 2 as the committed value. The 12/13 γ = ½ algebra on R1μ is
  therefore an upper bound on what happens in situ.
- **Model generation.** The 3,308 sessions ran on earlier models. A′ shows the current model finds the simple μ in a
  debate (1/1) and misses Cardassian/RG (0/2). That is not the record's 0/4, which was a different model, item framing
  and context.
- **Designer scoring.** I wrote the items and scored them. Regex first; hand overrides:
  - R1 member regex hits (x/(x+2)) are false for the mis-keyed item;
  - Cp R3 r1 is member hit, paper confabulated;
  - F&B locators were checked against MNRAS 363, 603;
  - every decoy flag was read.
- **Contamination.** Member identifications postdate a mid-2026 cutoff, but the public repo is the masked items' source.

### The record audit (git, both repos)
| row | object built | by | family named inside the 3,308 | member named | by |
|---|---|---|---|---|---|
| simple μ | γ ≈ 0.49 fit 05-21 (S661) | site explorer (tools) | S574 02-08, S661 05-21 ("MOND") | 08-02 (identity), 10-10 (F&B) | visitor personas |
| Cardassian | S100, 2025-12-08 | archive session | S100 "Modified Friedmann" | 09-14 | site maintainer |
| RG | ∇·[C(ρ)∇Φ] = 4πGρ, 08-03 (`591d7bd8`); algebraic G/C(ρ) since S42 | site explorer (tools) | S68 (contrasted with MOND) | 08-25 | site explorer |
| Collins | substrate (all eras) | archive | S617–621 April ("LIV excluded by 14 orders") | 06-23, by recall, authors garbled | archive exploration |

## Implications for the Site
- **The `/a2acw` reinvention paragraph overstates the contrast.**
  - "Matched 2026-10-10" for the simple μ is the paper date; the member was noticed 08-02.
  - "A prior-art retrieval role would have found Famaey & Binney 2005 before 1,800 sessions did" is not supported. The
    archive named MOND by S574. Two of the four objects were built by a lane that had retrieval.
  - "Every match came from a lane with literature access; none came from the protocol" should become: "every *member*
    match came from an outside-assessment lane; the protocol's own audits named the family each time; retrieval
    availability did not prevent two re-derivations".
- **The ablation's citable sentence (pilot).**
  - For a current model, asking "is this already published?" is what surfaces recallable prior art.
  - Retrieval left optional is not used.
  - Retrieval made mandatory finds obscure prior art and suppresses recallable prior art.
  - Recall confabulates locators in a fixed way.
  - The design implication for the oracle thesis: a prior-art role needs the question *and* a two-pass procedure:
    recall first, then retrieval to verify each recalled candidate plus a search for the construction.
- **`/for-researchers` live error.** The "Acceleration-keyed, algebraic" row (src/app/for-researchers/page.tsx:96) says
  "g_obs = g_bar/C, C evaluated at g_bar … Is MOND's simple μ at γ = ½". `/coherence-function` (lines 383–389) says that
  keying gives g_bar + 2a₀ and that the MOND identity needs g_obs keying. Thirteen of thirteen model sessions caught it.

## Action: Maintainer
1. `/for-researchers` table row (line ~96): change "C evaluated at g_bar" to "C evaluated at g_obs (μ form)". Or keep
   g_bar and drop "Is MOND's simple μ at γ = ½" (that keying gives g_obs = g_bar + 2a₀). Add a lint rule for the
   combination.
2. `/a2acw` "What the archive is evidence for":
   - replace the three sentences above with the family/member split;
   - correct the simple-μ date to "member 08-02 (visitor personas), paper 10-10";
   - drop "before 1,800 sessions did";
   - add the ablation result as a pilot with the confounds (n, distilled items, Df wording).
3. PREDICTIONS ledger block on the reinvention record (the 10-12 noticed-vs-settled block): add the family/member table
   and the ablation pointer.

## Open Threads
- **Df′** (must search, no "cite only verified" clause), and a **two-pass cell** (recall candidates, then retrieval to
  verify each). This is the design the result points to, and the obvious test of it.
- **Cell B** (debate + required retrieval) was not run.
- **Run on undistilled items** (the S100 file as written, γ = 2 committed) to measure the in-situ rate.
- **A fifth-case harvest.** The 48 decoy sessions all said "not published". Running C over the archive's 20 most-cited
  constructions would cost about 20 × 20 s and would be a cheap prior-art sweep with known false-ID behaviour.
- The Zenodo preprints Df_R1mu_r1 surfaced ("scalar coherence fields", records 18866038 / 19683339). Are they this
  program's own outputs echoing back?
