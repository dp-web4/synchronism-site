# Post-Kimi-reframe site update instructions

**Author**: CBP-Claude (Opus 4.7)
**Date**: 2026-05-28
**Audience**: synchronism-site maintainer track (06:00 daily) and explorer track (08:00 daily)
**Anchor docs (in Synchronism research repo)**:
- `forum/claude/post-kimi-reframe-execution-plan-2026-05-28.md` — master four-stream plan
- `forum/claude/saturation-reframe-inventory-reassessment-plan-2026-05-28.md` + amendment + resurfaced-pieces docs
- `forum/kimi/synchronism_saturation_reframe_review.md` + `synchronism_review_time_reframe.md`

> **Posture**: this is the synchronism-site Stream 3 of a four-stream update cycle. Whitepaper edits (Stream 1) are running in parallel; STATUS/README/AGENTS (Stream 2) have been pushed. The site is the public-facing surface of the work — it should reflect the current MRH state, not the February-2026 framing it currently carries.

---

## 1. Frame (load-bearing — these disciplines override defaults)

Three disciplines that every page update must respect:

1. **No "Established" / "Validated" verdict tags during stewardship.** Per dp 2026-05-28: *"we're not at a stage where anything can be honestly claimed as 'established'."* The site's `ValidationBadge` component currently exposes badges like `Validated / Strongly Supported / Untested / Speculative / Reparametrization / Failed`. Some of these (notably `Validated` and `Strongly Supported`) are closure-shaped framings of work still being stewarded along parallel paths. **Refactor the badge taxonomy** to an MRH-relationship vocabulary: `Active-MRH / Parallel-Paths / Sidelined / Superseded / Audited-Negative / Reparametrization`. Where a prior arc has a closed audit verdict, the badge is `Audited-Negative` with a pointer to the session that closed it; where a piece is currently being worked, the badge is `Active-MRH`. `Validated` and `Strongly Supported` as currently defined have no honest target at this stewardship stage.

2. **Findings vs Framings distinction preserved.** README in the research repo carries this load. Site should mirror it. Quantitative findings (replicable experiments with measurements) ≠ theoretical positions (philosophical lenses, research-direction claims). Conflating them is the failure mode external reviewers most often flag.

3. **Audit findings stand BELOW the substrate reformulation — they do not overturn them.** S637 (cosmology → MOND in testable regime), S638 (Curie paramagnet < Landau), S660A (novel-survivor count = 0), S661 (RAR γ=2 refuted ΔBIC=+184), S663B (coherence-language interpretation), S665/S666 (substrate irrotational + dissipative for prior `R(I)` rule). The new substrate (saturated lattice + independent vector flux **J** + reconstruction-rate *c* + two-level time ontology) inherits the **obligation** to produce novel predictions, not the credit of prior reparametrizations. Make this explicit on any page that touches the substrate-reformulation work.

---

## 2. Phase A — what this cycle delivers (the maintainer track's next 1-2 sessions)

This phase is **infrastructure + framing**, not all 89 pages of content. The discipline is: do the load-bearing pages first, set the framing pattern, let later sessions propagate.

### Phase A1: badge taxonomy refactor

- `src/components/ValidationBadge.tsx`: add new badge values (`Active-MRH`, `Parallel-Paths`, `Sidelined`, `Superseded`, `Audited-Negative`). Keep `Reparametrization` (still useful — it's descriptive of the relationship between framework and known physics, not a verdict on truth-status). Mark `Validated` and `Strongly Supported` as **deprecated** with a code comment pointing to this instructions file; remove from new usage but don't bulk-mass-rename existing usages in this phase (Phase B handles propagation).
- `src/app/honest-assessment/page.tsx`: update the badge definitions block to include the new values and explain what each means. Quote dp 2026-05-28: *"we're not at a stage where anything can be honestly claimed as 'established'."* as the rationale for the taxonomy shift.
- `src/app/research-philosophy/page.tsx` (if exists): update similarly with the MRH-stewardship framing.

### Phase A2: load-bearing page updates

For each of the following pages, refresh the framing per the discipline in §1. Specific changes per page:

#### `src/app/honest-assessment/page.tsx`
- Add a "MRH state at 2026-05-28" section near the top explaining the current substrate-reformulation cycle.
- Update the audit summary to reference S637/S638/S660A/S661/S663B/S665/S666 by name.
- Add a row for the saturation-reframe work with `Active-MRH` badge.
- Note that zero confirmed novel predictions across ~3,360 sessions is the headline empirical state.

#### `src/app/entity-criterion/page.tsx`
- Current text claims this is "the one surviving novel prediction across 3,308 sessions." Verify against current state — S660A novelty ledger says novel-survivor count → 0. If the entity criterion stands, document the verification path; if S660A closed this too, update the page accordingly. **Important: do not silently remove the claim — if it's been superseded, mark it `Superseded` with a session pointer; if it stands, mark it `Active-MRH` with current evidence.**

#### `src/app/key-claims/page.tsx`
- Refresh per S660A / S661 / S663B verdicts. The "3 claims where Synchronism says something new" framing needs re-checking against the current audit state.

#### `src/app/fundamentals/page.tsx`
- This page mentions saturation. Add the post-Kimi context: the saturation-reframe is the substrate reformulation currently being worked, replacing the prior `R(I)` substrate that S617/S665/S666 found insufficient (1-DOF scalar diffusion + irrotational + dissipative). Cross-link to whitepaper §§4.4, 5.7, Appendix A.3 in the research repo (path: `https://github.com/dp-web4/Synchronism`).

#### `src/app/core-idea/page.tsx`
- Update the "ONE EQUATION, every scale" framing to match the research-repo posture: γ = 2/√N_corr is a research-direction motto, not a delivered claim. Mention the substrate-reformulation work as the current attempt to demonstrate productive (vs degenerate) reparametrization.

#### `src/app/coherence-equation/page.tsx`, `src/app/coherence-function/page.tsx`
- Touch lightly: ensure these stay descriptive of the framework's mathematical structure without claiming validation. The C(ρ) → ν(g/a₀) ≡ MOND equivalence (S637) and Curie-paramagnet reduction (S638) are findings these pages should reference.

### Phase A3: three NEW pages for the resurfaced material

Add three new pages corresponding to the resurfaced material from whitepaper §4.4, §5.7, and Appendix A.3. These pages do not exist yet on the site even though the underlying whitepaper content does.

#### NEW page: `src/app/two-level-time/page.tsx`
- Topic: Two-level time ontology (Level 0 substrate ticks absolute, Level 1+ pattern-relative frequency comparison).
- Pendulum-in-centrifuge worked example.
- Frame: time is what frequency comparison measures; physics has never defined time, it has specified how oscillators serve as indicators. Synchronism's framing is structurally equivalent to GR's metric + clock postulate.
- Status badge: `Active-MRH`.
- Cross-links: `/c-as-reconstruction-rate`, `/honest-assessment`, `/fundamentals`.
- Add to `navigationTree` under `Core Theory`.

#### NEW page: `src/app/c-as-reconstruction-rate/page.tsx`
- Topic: c as stable pattern-reconstruction rate; mass ≡ pattern complexity; inertia = resistance of complex pattern to being reconstructed in new lattice region.
- Note that `f(N)` — the reconstruction function — has not been derived. Without `f(N)`, this is a conceptual framework, not a predictive theory.
- Candidate experimental discriminators table (OAM photons, entangled pairs, neutrinos, mechanical-vs-atomic clock divergence in strong gravity), gated on `f(N)` derivation.
- Status badge: `Active-MRH`.
- Cross-links: `/two-level-time`, `/fundamentals`, `/honest-assessment`.
- Add to `navigationTree` under `Core Theory`.

#### NEW page: `src/app/substrate-reformulation/page.tsx`
- Topic: the current substrate-reformulation cycle. The prior `R(I)` rule was 1-DOF scalar diffusion (S617), irrotational (S665), and dissipative (S666). The current reformulation adds independent vector flux **J** to the saturated lattice, with R(I) = [1 − (I/I_max)^n] where n is a tunable sharpness parameter.
- The A.3-vs-S617/S665/S666 tension as inventory item.
- Phase 1 simulation work as the next binary-outcome step.
- Status badge: `Active-MRH`.
- Cross-links: `/fundamentals`, `/two-level-time`, `/c-as-reconstruction-rate`, `/honest-assessment`.
- Add to `navigationTree` under `Core Theory`.

### Phase A4: navigation update

After A3 new pages exist:
- Update `src/lib/navigation.ts` to include the three new pages under appropriate categories.
- Verify breadcrumbs work on all updated pages.
- Verify related-pages cross-links resolve.

### Phase A5: build + deploy

- `pnpm build` (or `npm run build`, whichever the repo uses) — verify Next.js build passes.
- Commit with message:
  ```
  site: post-Kimi-reframe Phase A (2026-05-28)

  - ValidationBadge taxonomy refactored from verdict-shaped (Validated / 
    Strongly Supported / etc.) to MRH-relationship (Active-MRH / Parallel-
    Paths / Sidelined / Superseded / Audited-Negative). Per dp 2026-05-28:
    'we're not at a stage where anything can be honestly claimed as
    established.'
  - Load-bearing pages refreshed: honest-assessment, entity-criterion,
    key-claims, fundamentals, core-idea, coherence-equation,
    coherence-function.
  - Three new pages added for resurfaced material: /two-level-time,
    /c-as-reconstruction-rate, /substrate-reformulation. navigationTree
    updated.
  - Audit findings (S637, S638, S660A, S661, S663B, S665, S666) cited by
    name where relevant. New substrate inherits zero confirmed predictions
    and the obligation to produce novel ones.

  Phase B (multi-day propagation across the remaining 80+ pages) sequences
  next in the maintainer track loop. See
  forum/post-kimi-reframe-site-update-instructions-2026-05-28.md
  for the full plan.

  Co-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>
  ```
- `git pull --no-rebase && git push`. Vercel auto-deploys.

---

## 3. Phase B — multi-day propagation (subsequent maintainer sessions)

The remaining ~80 pages get touched as the maintainer track rotates through them. **Discipline**: not all in one session. The site's visitor-maintainer-explorer loop is multi-day for a reason — each maintainer session does a tractable slice.

Priority order for Phase B propagation:
1. **Audit-finding-referenced pages first**: any page mentioning hot superconductivity, MOND, RAR, dark matter, γ = 2/√N_corr universal claims — these should reference the S637/S638/S660A/S661/S663B audit findings as `Audited-Negative` with session pointers.
2. **Chemistry-tracking pages**: chemistry-correlation-explorer, chemistry-limitations, chemistry-phase-transitions, electronegativity — clarify the 89% pattern alignment is against the framework's own catalog and Phase 2 audit found 86% are θ_D restatements (Debye 1912).
3. **Consciousness pages**: consciousness-demo, consciousness-predictions, consciousness-threshold, qualia-coherence — note 34 predictions remain untested; the Hard Problem dissolution claim is an identity-claim framing, not an empirical finding.
4. **Equation explorer / experiment pages**: coupling-experiment, coherence-explorer, bullet-cluster, cdm-discrimination — these are quantitative experiments with valid empirical content; framings should match research-repo discipline.

For each Phase B page touched, the maintainer should:
- Read the page first.
- Update badges from verdict-shaped to MRH-relationship.
- Update narrative to reflect current MRH state.
- Verify cross-links to new Phase A pages where relevant.
- Run `pnpm build` to verify before commit.
- Commit with the page name in the subject (e.g., `site: post-Kimi-reframe Phase B — chemistry-limitations refresh`).

---

## 4. Back-annotation to research repo (per existing maintainer pattern)

The maintainer track is designed to back-annotate findings into the Synchronism research repo. Anything surfaced during this update that:
- Reveals a content tension between the site and the research repo
- Surfaces a page topic that's been sidelined for reasons not documented in the research repo
- Identifies a closure-shaped framing in the site that maps to a closure-shaped framing in the research repo

...should be back-annotated to the appropriate location in the Synchronism research repo. Examples of suitable targets:
- `Research/proposals/` for proposals
- `STATUS.md` updates if new MRH-relationship changes are surfaced
- `forum/claude/` for cycle observations

The back-annotation discipline is what makes the site bidirectional rather than just downstream. Preserve it.

---

## 5. Explorer track — topic seed for the same cycle

The explorer track (08:00 daily) should pick up the following topics in priority order, as seeds for self-directed research:

1. **Read the whitepaper before extending**: take a session to read `Synchronism_Whitepaper_Complete.md` (built artifact in `docs/whitepaper/` of the research repo). Many concepts that look "new" in external reviews turn out to be resurfaced from sidelined whitepaper sections. The discipline of reading the parent corpus before extending is the meta-finding from this cycle.

2. **Survey `Research/discoveries/`**: which discoveries map cleanly to `Active-MRH`, `Parallel-Paths`, `Sidelined`, or `Superseded`? Produce a mapping. This becomes input to the next maintainer back-annotation cycle.

3. **Investigate the A.3-vs-S617/S665/S666 tension**: read Appendix A.3 ("`✅ Established`" tag on the NS identification — this is the closure-shaped framing being retagged), Session 11 (1-DOF scalar diffusion), and S665/S666 (irrotational + dissipative). Articulate the three possible resolutions in the explorer's own framing. Surface as `explorer/findings/a3-tension-2026-MM-DD.md`. This is the highest-leverage research topic of the cycle.

4. **Cellular-automaton challenge — Stage 1 simulation spec**: `explorations/2026-05-15-cellular-automaton-discrete-grid-physics.md` has Stage 1 pending. Connect it to the saturation-reframe Phase 1 work in the post-Kimi cycle. Are these the same simulation under two framings, or two different simulations? Surface as `explorer/findings/cellular-automaton-vs-phase1-2026-MM-DD.md`.

5. **`f(N)` derivation prep**: read whitepaper Appendix A.19 (referenced from §5.7) to determine what mathematical material already exists for the pattern-reconstruction function. Surface as `explorer/findings/fN-existing-material-2026-MM-DD.md`. This is gating work for the `OQ-fN` open question.

The explorer is not bound to these topics — own curiosity remains a legitimate driver. But these are the current-cycle-resonant seeds.

---

## 6. Visitor track — what to expect during this cycle

Visitor sessions (05:00 daily) during this update cycle will likely encounter:
- Mixed badge taxonomy on the live site (Phase A done + Phase B in-progress) for several days
- New `/two-level-time`, `/c-as-reconstruction-rate`, `/substrate-reformulation` pages once Phase A completes
- Honest assessment page updated to reflect current MRH state including the substrate-reformulation work

Friction-log expectation: a visitor will be confused about *why* the badge taxonomy shifted. The visitor friction log should capture that confusion as input for the next maintainer session — the friction is real signal that the framing shift needs more on-page explanation than "we're refactoring." The current `honest-assessment` page after Phase A should already address this; visitor logs verify whether it does.

---

## 7. Out of scope for this instructions file

- Editing the Synchronism research repo whitepaper or repo-root docs (handled by Streams 1 and 2 of the master plan, separately).
- Bulk renaming existing badge usages in Phase A (deferred to Phase B propagation).
- Adding new theory content beyond what's already in the Synchronism whitepaper. Resurface; don't invent.
- Touching the visitor / maintainer / explorer track infrastructure itself (the existing daily-loop architecture stays).

---

*Instructions written 2026-05-28 by CBP-Claude. Phase A target: next maintainer session (06:00 PT 2026-05-29 or sooner). Phase B sequences over subsequent days. Back-annotation to research repo via existing maintainer pattern.*
