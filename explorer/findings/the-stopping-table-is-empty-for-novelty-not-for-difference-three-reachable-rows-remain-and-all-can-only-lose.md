# Finding: The stopping table is empty for *novelty*, not for *difference*. Three reachable rows remain, and each can only lose.

## Origin
Topic `is-there-any-reachable-observable-where-any-reading-differs-from-its-parent.md`. It answers the maintainer's 2026-10-04
proposal (`Synchronism/Research/proposals/a0_identified_scale_clusters_inherited_and_the_stopping_question_20261004.md` §3),
which concluded that "the registered physics program has met a stopping condition: no registered or proposed observable has a
branch where any reading of the framework differs from its parent theory in reachable data."
Companion finding, executed today: `the-lensing-kill-of-the-no-cdm-cap-lives-in-bins-the-data-paper-flags-the-dwarf-leg-carries-it.md`.

## Summary
The proposal states one criterion and supports it with evidence for another. The researcher persona asked about **difference**:
does any reading give a different number from MOND+EFE or ΛCDM in reachable data? The supporting evidence (09-25 "no branch moves
Bucket 0", 09-27 nesting) is about **novelty**: does any branch put a confirmed novel prediction in Bucket 0? Under the novelty
criterion, the table is empty, and I agree. Under the difference criterion, it has **three live rows**:
- the γ = 2 transition shape: SPARC disfavours it at 1.9–2.3σ; BIG-SPARC, ~4,000 galaxies, decides it.
- the a₀(z) ∝ H(z) trend: the RC100 data exist, and the test is unrun.
- wide binaries per realization: Gaia DR4 decides them.

Each row can kill a reading, and none can earn Bucket-0 credit: the γ = 2 shape is "MOND with another μ", a₀(z) is Milgrom
1983 prior art, and the wide-binary row is split. So the honest stopping statement is: **the program has stopped generating
novelty candidates, but has not stopped generating falsifiable differences.** That points to a different action than "write up
and pivot": write up now, and convert the three rows into **data-arrival triggers** rather than daily executions.
Two more rows were closed or sharpened today:
- the no-CDM cap: dwarfs close it, and lensing is census-conditional.
- B6, non-monogamy: the version with the same settings for A is excluded by no-signaling alone (LP); the version with
  different settings is allowed by no-signaling but forbidden by QM for a two-level A (numerical), so B6 survives only as a
  dimension claim.

## Research Notes

### The table
Status key: **excluded** = executed against data or a theorem. **nested** = no forced difference from the parent.
**live** = forced difference, reachable, not yet decided. Rows marked (archive) were not re-run today.

| # | reading | observable | forced difference from parent? | reach ≤ 2030 | status |
|---|---|---|---|---|---|
| 1 | density-keyed C_ρ (any sector) | LLR Ġ/G, Oort limit, local-density no-go | yes | done | **excluded** (archive: LLR kills 68/74 laws; Oort refutes the density law) |
| 2 | bounded boost, any cosmic floor (TEST-09/10) | max boost per system | yes (cap; MOND has none) | done | **excluded.** Ω_m caps fail on KiDS bins in every baryon treatment (today). 1/Ω_b = 20.3 fails on gas-free dSphs (B ≈ 30–100). On lensing it fails only if hidden baryons are < ~2–3× (today) |
| 3 | acceleration-keyed C_a / C_g, γ free | RAR shape | no (⊂ MOND family; γ̂ = 0.6 [0.43, 0.95] marginalized) | — | **nested** |
| 4 | **γ = 2 pin (B2)** | RAR transition curvature, 0.083 dex vs McGaugh ν | **yes** (B2: "the place the math is forced to differ") | **BIG-SPARC** (~4,000 galaxies, Haubner+2024, IAU S392; release pending) | **live.** 1.9–2.3σ galaxy-level on 166 SPARC (09-29). If galaxies are i.i.d. draws, width shrinks ~√24 ≈ 4.9×, so the same offset reads ~9–11σ (estimate, not a forecast run). Also adjudicates TEST-25 (the Cassini-passing γ ≳ 1.5–2) |
| 5 | **a₀(z) = cH(z)/2π (branch A)** | trend k(z_hi)/k(z_lo) of the f_DM(R_e)-preferred a₀, level free | **yes** (MOND: ratio 1; A: 1.80) | **RC100** (Nestor Shachar+2023, published) | **live, unrun.** 09-19 post-hoc on 41 discs: 1.46 (Price) vs 0.91 (Genzel). Topic `a0-of-z-trend-ratio-on-rc100-level-free.md` |
| 6 | **wide binaries, per realization (TEST-02)** | low-acceleration binary boost | yes per realization; split across them | **Gaia DR4** (planned Dec 2026) | **live but split.** Each outcome spares one realization (09-27); the registered ratio statistic is identically null (archive) |
| 7 | EFE keyed on internal g only (no EFE) | environment dependence (TEST-05/20) | yes (MOND+EFE predicts it, this keying predicts zero) | done (Chae+2020/2021) | **excluded if Chae holds**; literature-contested (Freundlich+2022). The keying that carries an EFE is nested (row 3) |
| 8 | mean-density DE (TEST-26) | w(z) | no (contains Λ at γ = ½; P(k) pins γ to ½ within 1e-5) | — | **nested** (archive) |
| 9 | local-fluid DE / sign lock | thawing + crossing quadrant | joint with ΛCDM only | DESI DR3 | **joint kill**, not a difference row (09-27 correction) |
| 10 | TEST-04a growth suppression | fσ8(z) | yes in amplitude | DESI DR2/3 RSD | **disfavoured, not counted**; kill criterion fires < 1% under ΛCDM (archive), so power-limited |
| 11 | clusters | r500 boost | no (shortfall ≥ MOND's ×2) | CLASH / X-COP | **nested-failure, inherited** (maintainer estimate; topic open) |
| 12 | door #3 intrinsic decoherence | heating of bound matter | yes | done | **excluded** at the natural rate, by 15–30 orders (09-27 heat budget) |
| 13 | B1 single-observer CHSH | Bell correlations | no by design (aims to reproduce QM) | — | construction failed for local-realist readings; Toner–Bacon branch unexplored. **Not a data row** |
| 14 | **B6 non-monogamy** | three-party CHSH sharing | see below | gated on B1 | **sharpened today:** the same-A-settings version is excluded by no-signaling. The disjoint-settings version is allowed by no-signaling, forbidden by QM for a qubit A, so it is a dimension claim |
| 15 | B7 / dim-4 LIV | species-dependent c, n = 2 dispersion | yes | n = 2 ~10⁷ below reach | dim-4 natural value **excluded** (archive); n = 2 **unreachable** |
| 16 | a₀ = cH₀/2π level | a₀ value | 3–12% from the fit's identified a₀′/γ | done | Milgrom 1983 coincidence, **Bucket 3** |
| 17 | GW170817 c_T | — | no completion, so no prediction | — | **not a row** |

**Count of live difference rows: 3 (#4, #5, #6). Count of rows where a win would be novel: 0.**

### Why the two criteria come apart
Row 4: B2's own ledger entry already says a γ = 2 win "only ever lands on MOND (Bucket 3)", because door #1 reduces to "a
non-local a₀ switch = MOND" (Phase 11). But a γ = 2 *loss* is still informative: it removes the only shape that survives
Cassini, so TEST-25 resolves. Row 5: a₀ ∝ H(z) is Milgrom's (1983, 2017), so the win goes to him. The loss kills the
framework's cosmological anchor for a₀. Row 6: split.

So the 09-27 nesting statement ("can lose, cannot win") is exactly right *for credit*, and the 09-28 explorer revision is right
that the cause is prior art, not nesting. But "can only lose" is not "uninformative". Under the site's own culture (productive
failure > safe summaries), a row that can only lose is still a stake in the ground. What changes is the **cost model**: these
rows are worth running when data arrive, and not worth a daily loop.

### B6: what the theorem does and does not say (executed today)
`scripts/no_signaling_chsh_monogamy_lp.py`, an LP over all tripartite no-signaling boxes (2 inputs, 2 outputs per party):
- Controls: max S_AB = 4.0000 (PR box). Local deterministic max S_AB + S_AC = 4.
- **Same A settings for both tests:** max S_AB + S_AC = **4.0000**. Trade-off: S_AB ≥ 2.828 ⇒ S_AC ≤ 1.17; S_AB = 4 ⇒ S_AC ≤ 0.
  Monogamy of CHSH violation is a theorem of **no-signaling**, not of QM (reproduces Toner, Proc. R. Soc. A 465, 59, 2009).
- **Disjoint A settings** (A has four inputs, two used for each partner): max S_AB + S_AC = **8.0000**. No-signaling alone
  permits both pairs maximal.
- `scripts/three_qubit_disjoint_chsh_horodecki.py`, the quantum check (Horodecki maximum, 12 restarts): with A as **one qubit**
  and disjoint settings, max S_AB + S_AC = **4.0000**, so at most one pair violates. Control: A as two qubits gives 5.6569 = 2 × 2√2.

Consequence. B6's refutation clause (a) reads "the substrate model, once it produces genuine no-signaling S > 2 pair
correlations, is provably monogamous (cannot share S > 2 three ways)". That clause is **already satisfied by theorem** for
same-settings sharing. As written, B6 is refuted by its own clause the moment B1 succeeds. The bet survives only as: *a
two-outcome, two-level A shares CHSH > 2 with two partners using different measurement pairs.* No-signaling allows that, and QM
forbids it via dimension. That is a well-formed, risky claim. It is a dimension-witness claim, not a monogamy claim, and it stays
gated on B1's missing primitive. I first drafted "B6 refuted by theorem"; the disjoint-settings control showed that would have
been an over-refutation.

### What this means for the stopping question
1. **The proposal's §3 sentence is false as worded** (rows 4–6). It is true with "moves Bucket 0" in place of "differs from its
   parent". I recommend that substitution.
2. **The write-up recommendation stands.** Nothing in the table argues for a daily physics loop.
3. **What replaces the loop:** three triggers, each pre-registered now, so they cost nothing until the data land:
   - **RC100 trend ratio:** runnable today. It is the only row with data in hand, and the one I would execute next.
   - **BIG-SPARC release:** rerun `gamma2_pin_nuisance_refit.py` unchanged. The kill is z ≥ 3 galaxy-level against γ = 2.
   - **Gaia DR4:** the split wide-binary row; register which realization each outcome removes.
4. **Bucket 1's "live bets" sentence** ("five untested, falsifiable, novel-in-structure") is now stale on its own board: B2 is
   1.9–2.3σ disfavoured, B4 is a reparametrization, B5 is an obligation, B6 is a dimension claim gated on B1, and B7 is
   unreachable. "Novel in structure" survives for B1 (the Toner–Bacon branch) and B6 (dimension form) only, and neither is
   reachable by data.

## Implications for the Site
- /for-researchers "What Transfers" and any stopping-question text: say "no reachable observable can move Bucket 0; three can
  still refute a reading (γ = 2 shape, a₀(z) trend, wide binaries), and the program will run them when the data arrive."
  This keeps the site's questions-first culture: it names the stakes still in the ground.
- B6 wording wherever it appears (test-catalog, terms.ts "B1–B7" gloss): "gated on B1" should become "same-settings sharing is
  excluded by no-signaling; the surviving form is a dimension claim, gated on B1".

## Action: Maintainer
- Synchronism proposal §3 / SESSION_FOCUS "stopping question": replace "differs from its parent theory" with "moves Bucket 0";
  add the three trigger rows. This is a wording correction, and the decision still gates on dp.
- PREDICTIONS.md B6 row: append the LP result (same settings: NS max 4; disjoint: NS 8, qubit QM 4) and restate the bet as the
  dimension form. Refutation clause (a) as written is met by theorem.
- PREDICTIONS.md "How to read the whole board": "five live bets" → the count above.
- /test-catalog L394 and terms.ts L217 B6 gloss: as in Implications.

## Open Threads
- Execute the RC100 trend ratio (topic exists; registration rules are in the topic).
- Pre-register the BIG-SPARC γ = 2 trigger now, while the data are unseen.
- Can any substrate reading even define the "dimension" of A that B6's surviving form needs? If not, B6 cannot be stated.
- Row 7 (EFE) is decided by a literature dispute, not by new data. Is there a cheap in-house replication of Chae+2020's
  SPARC EFE signal with galaxy-level scoring (memory: point-count ΔBIC needs a galaxy-block bootstrap)?
