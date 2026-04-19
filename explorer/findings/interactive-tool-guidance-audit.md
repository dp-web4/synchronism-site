# Finding: Interactive Tool Guidance — Audit and Design Proposal

## Origin

Topic queue: `interactive-tool-guidance.md` (open). Triggered by the 2026-02-21 visitor flag of
the Coherence Explorer as HIGH severity (*"no explanation of what I'm looking at"*), and
reinforced by today's Pass 1 (*"I had no idea what I was supposed to notice"* on the same tool)
and Pass 3 (Coherence Explorer reveals the equation's non-self-consistency).

## Summary

The Coherence Explorer *does* have a "What you're seeing" / "What to notice" card. The
problem is not absence of guidance — it's that **the existing guidance is wrong on the math**
(instructs "watch the curve flatten" when the curve in fact steepens) and **anchorless on
the physics** (no preset links γ values to real systems). Across the 7 tools in the
Interactive Tools category, the dominant pedagogical failure is not inconsistent guidance —
it's guidance that contradicts what the tool actually displays, or guidance that leaves the
visitor without a physical anchor. Adding more prompts is not the fix; auditing the existing
ones against the math is. The design principle is: *no prompt should contradict the math; an
empty prompt is better than a wrong one.* Below is a per-tool audit and a unified
"Three Observations" pattern.

---

## 1. The false premise of the topic framing

The topic question asks "what should 'what to notice' prompts look like?" The premise is that
prompts are missing. They are not. The Coherence Explorer contains this card at
`coherence-explorer/page.tsx` lines 58–75:

> **What to notice:** Move γ from 0.5 to 2.0 and watch the curve **flatten**. At γ ≈ 1, the
> transition from quantum to classical is steepest — this is where the most interesting
> physics happens.

The two sentences are internally contradictory: the first says "flatten," the second says
"steepest." A visitor who moves the slider sees the curve *steepen* from γ=0.5 to γ=2.0,
matching the second sentence. Prior finding `interpretation-gap-math-vs-physics.md` §2
already documented this as a behavior-inverted label.

**So the Coherence Explorer's guidance isn't silent — it's wrong.** Adding more prompts
before fixing the existing wrong ones compounds the problem. The first pass of
tool-guidance work must be a correctness audit, not a copywriting pass.

## 2. Per-tool audit

### /coherence-explorer

| Element | Status | Issue |
|---------|--------|-------|
| "What to notice" card | **present, mathematically wrong** | "Watch the curve flatten" — curve steepens. Rename the observation. |
| Regime label | present, **inverted per taxonomy** | Ideal-gas / single-particle γ=2 labeled "Quantum"; superconductor γ=0.02 labeled "Classical" or "Macroscopic Coherence" depending on page. The label usage is a separate finding (interpretation-gap §1). |
| Presets | **absent** | Pass 1: "Add 2–3 preset buttons: See a superconductor, See a galaxy." |
| Anchor points on curve | absent | No pins showing where BCS, BEC, or MOND-scale systems sit. |
| Mean-field warning | **present on high-γ branch** (line 128) | "N_corr = X — mean-field approximation weakens as N_corr approaches 1" — good. Under-used. |
| Self-consistency | **absent; should not be absent** | Pass 3: γ and ρ_crit are independent sliders, but the framework's own derivation has ρ_crit = A·V_flat² for galaxies. The tool decouples what the framework couples. Pass 4: "the explorer should let you enter V_flat and N_corr and *compute* ρ_crit and γ." |

### /gamma-calculator

| Element | Status | Issue |
|---------|--------|-------|
| Presets | **present and pedagogically strong** (Pass 2) | Ideal gas / Liquid water / Enzyme / Ferromagnet / BCS / BEC. Ground abstract N_corr in physical systems. |
| Regime label | **categorically wrong for "Ideal gas → Quantum"** | Pass 3: ideal gas is the textbook classical system; calling it "Quantum" (via γ=2, N_corr=1) inverts standard vocabulary. Per gamma-calculator line 12, the regime description says *"Decoherence is fast"* — which is the physics of a *classical* system, not a quantum-coherent one. |
| "What value should I enter?" hint | absent (Pass 2) | For users outside preset list. |
| Quick reference table | present | Good. Links N_corr → γ → regime → example. But reproduces the regime mislabel. |
| Novelty caveat | absent | Pass 3: the tool "looks predictive" but N_corr is an input, not derived. A one-line note ("N_corr is a phenomenological input per system, not computed from first principles") would fix this. |

### /phase-boundary-visualizer

| Element | Status | Issue |
|---------|--------|-------|
| Regime labels + anchor systems | **present and effective** (Pass 1: *"best teaching asset on the site"*) | Classical / Boundary / Quantum regions with real-world examples pinned. Pass 1 called this the single best onboarding asset. |
| Galaxies pinned at γ=2 | **misleading** (Pass 4) | Galaxies span a *range* of γ by the framework's own logic (different V_flat, N_corr per galaxy). A single pin understates the scatter. |
| Consciousness threshold at C≈0.50 | speculative anchor | The speculative nature is not flagged on the tool itself. Badge or tag it per the taxonomy. |
| "What to notice" card | present, qualitatively correct | Keep. Add: "the three regions are *labeled*, not derived — different frameworks group systems differently." |

### /galaxy-plotter

| Element | Status | Issue |
|---------|--------|-------|
| SPARC galaxy rotation curves + 3-model overlay | present, works | Pass 1: the gap between Newtonian and observed is "immediately visual." |
| γ = 2 fixed choice | **not flagged** | The tool fixes γ = 2, which (per the framework's own logic) corresponds to N_corr = 1. For a whole galaxy this is an assumption, not a measurement. A note belongs on the page: "γ = 2 corresponds to the 'uncorrelated stars' regime assumed by the framework at galactic scale. If this assumption is wrong, all five curves change." |
| "Predict my galaxy" input | absent | The tool is read-only. Adding a "plug in your own V_flat, R_0, N_corr" input would turn it from demonstration into instrument. |
| Honest framing | partially present | The text mentions "Synchronism's theoretical predictions" — should say "reproductions of MOND's rotation curve predictions via a different parameterization" per `/mond-unification`'s own admission. |

### /mond-comparator

| Element | Status | Issue |
|---------|--------|-------|
| Interactive element | **none** | Pass 2: "Try It" CTA routes to a static two-column comparison table. Pass 3 independently flagged. |
| Classification | **miscategorized** | Lives under "Interactive Tools" breadcrumb despite being a static page. |
| Content (the table) | reasonable summary | The comparison itself is honest. The problem is the packaging. |
| Fix (two options) | — | (a) Rename the CTA elsewhere from "Try It" to "See the comparison," reclassify page to Cosmology. (b) Build the promised interactive: γ slider controlling live MOND/Synchronism/CDM value columns side-by-side. |

### /equation-walkthrough

| Element | Status | Issue |
|---------|--------|-------|
| Step-through derivation | present (6 steps) | Good. One observation per step. |
| Step-specific "What to notice" | absent | Each step could carry a single "what to observe here" line anchoring the step to a testable or visible consequence. |
| Connection to scaffolding audit | missing | Given that prior findings established C(ρ) is scaffolding, not theory, the walkthrough should end with: *"What this is: a convenient functional form that generated the framework's questions. What this is not: a derived consequence of first principles. See /honest-assessment."* |

### /chemistry-correlation-explorer

Not audited in depth this pass; Pass 2 flagged the 89% number as a fit-vs-prediction
ambiguity (see validated-badge-violates-own-definition.md §5). Interactive tool guidance
for this page should surface: **which substances were used to fit the Ncorr values, and
which were held out for prediction?** That distinction is the difference between r² and
novel prediction.

### /prediction-tracker

Mostly works as a filter interface; the badge assignment problem (separate finding) is the
more urgent issue. Tool-guidance change suggested: hover-tooltip each badge with the
taxonomy definition (already proposed in the badge finding §6).

## 3. Design principle: the "Three Observations" pattern

The Phase Boundary Visualizer works because it provides *three labeled regions* with
*anchor examples* and *one interaction*. This is a teachable pattern. Proposal for every
tool that currently has a "What to notice" card:

```
## Three observations

1. [Observation tied to the tool's central behavior]
   → What to look for: [specific visual cue]
   → What this means: [one-line physical interpretation]

2. [Observation tied to a boundary case or anchor]
   → Try: [specific preset or slider move]
   → What you should see: [specific predicted outcome]

3. [Observation tied to the tool's limitation or honest caveat]
   → Watch out for: [a place the tool doesn't do what the visitor might expect]
```

Example applied to Coherence Explorer:

```
## Three observations

1. The curve steepens as γ increases from 0.5 to 2.0 — this is a *sharpening* transition,
   not a flattening. At γ=2 the jump from C ≈ 0 to C ≈ 1 happens within a factor of ~3 in ρ.
   → Try: move the γ slider from 0.5 → 2.0 and watch the transition zone narrow.

2. γ and ρ_crit are decoupled in this tool but not in the framework's derivation. The
   framework says γ = 2/√N_corr and ρ_crit = A·V_flat². A more faithful tool would take
   N_corr and V_flat as inputs and compute the curve.
   → Try: match the preset button for "BCS superconductor" (γ from N_corr=10,000), then
   ignore ρ_crit to focus on the shape of C(ρ).

3. The regime labels on the slider are named after physical systems, not derived from the
   math. The label "Quantum" at γ > 1.4 corresponds to N_corr ≈ 1 — an uncorrelated
   single-particle system. This is the opposite of "macroscopic quantum coherence" (BCS,
   BEC) — the labels use "quantum" in a nonstandard sense.
   → Watch out for: mapping "Quantum regime" to "coherent quantum state." The tool's
   "Quantum" means "few correlated particles."
```

The three-observation pattern costs 10 lines of text per tool and addresses the three kinds of
visitor friction: (1) UI → behavior (what happens when I move this slider), (2) anchoring
(what does this value mean for a real system), (3) limitation (where does the tool mislead me).

## 4. Tiered guidance (Pass 1 proposal revisited)

Pass 1 asked: "should guidance be always-visible, toggleable, or shown only on first visit?"
The tool audit suggests a different tiering:

| Tier | Audience | Visible to whom |
|------|----------|-----------------|
| Always-visible card | All visitors | The "Three observations" pattern above. |
| Hover-tooltip on each slider label | Enthusiast + writer | "γ = transition sharpness" etc. |
| "Advanced notes" expandable | Grad student + researcher | Self-consistency caveat, mean-field regime, degree-of-freedom contraction ambiguity, Ncorr-as-input disclosure. |

The current single-card approach collapses these three tiers and ends up serving none of
them well. An always-visible prompt simple enough for Pass 1 is too shallow for Pass 3; a
prompt dense enough for Pass 3 intimidates Pass 1. A collapsible advanced-notes section
under each tool would let each persona's needed content be visible at their reading depth.

## 5. What the audit revealed that the topic didn't ask

The tools are a diagnostic layer the framework doesn't fully use. Pass 3 used the Coherence
Explorer to *diagnose* non-self-consistency. Pass 4 used it to *diagnose* the two-parameter-
per-system problem. The tools expose more structural information than their prompts admit.

An interesting design move: rather than hiding the diagnostic signal behind reassuring
prompts, the "Three observations" pattern item 3 (*watch out for*) *institutionalizes* the
structural honesty that makes the /honest-assessment page compelling. The tools should not
sell the framework — they should illustrate it, including where it breaks down. This is
also tonally consistent with the site's "Questions First" convention (SESSION_PRIMER.md).

---

## Implications for the Site

1. **First pass of tool-guidance work is a correctness audit, not copywriting.** The
   Coherence Explorer's existing "flatten" instruction contradicts the math. Fix wrong
   guidance before adding new guidance.

2. **Presets ground tools in physics.** γ Calculator and Phase Boundary Visualizer already
   demonstrate this. The Coherence Explorer and Galaxy Plotter would both benefit from
   matched presets that link sliders to a concrete physical system.

3. **The MOND Comparator is miscategorized.** Either rebuild it as interactive or move it
   out of "Interactive Tools." Leaving "Try It" as the CTA is the single clearest
   terminology-to-implementation mismatch on the site (per Pass 2).

4. **"What to notice" should include "Watch out for."** The failure modes of each tool
   belong on the tool itself, not buried in /honest-assessment. Tools are where the visitor
   forms their mental model — if the honest caveats aren't there, the mental model forms
   without them.

5. **Tiered guidance serves multiple personas.** A single prompt for all audiences fails
   all audiences. Cards for all, tooltips for the middle tier, expandable "advanced notes"
   for experts.

## Action: Maintainer

- **`src/app/coherence-explorer/page.tsx` line 71:** Replace current "watch the curve
  flatten" line with "watch the transition steepen" (matches line 72's own "steepest" text).
  This is a one-word correction that ends the current internal contradiction.
- **`src/app/coherence-explorer/page.tsx`:** Add preset buttons mirroring γ Calculator:
  "Single electron" (γ=2), "Enzyme" (γ≈0.37), "BCS superconductor" (γ≈0.02), "BEC"
  (γ≈0.002). Auto-set γ from N_corr preset. Leave ρ_crit as a separate slider for now; flag
  that self-consistency would require tying it to V_flat (future enhancement).
- **`src/app/coherence-explorer/page.tsx`:** Add `## Three observations` card with items
  matching §3 example above (steepen / anchor / regime-label caveat).
- **`src/app/gamma-calculator/page.tsx` `regimeInfo()`:** Update "Quantum" regime description
  to clarify the nonstandard use — propose: *"Quantum (small-system): few correlated
  particles (N_corr < 2). Superposition of individual particles is the natural description.
  Note: this is the opposite of 'macroscopic quantum coherence' (superconductors, BEC),
  which the framework places in the 'Macroscopic Coherence' regime at γ < 0.2."*
- **`src/app/phase-boundary-visualizer/page.tsx`:** Widen the "galaxies" anchor from a
  single pin at γ=2 to a band covering the empirical range (per-galaxy V_flat + N_corr
  produce a distribution, not a point). Note this explicitly: *"Galaxies span a range of γ
  — this pin shows the framework's default assumption (N_corr=1)."*
- **`src/app/galaxy-plotter/page.tsx`:** Add the γ=2 / N_corr=1 assumption disclosure as a
  footnote. Add link to `/mond-unification` with the "reproduction, not novel derivation"
  framing.
- **`src/app/mond-comparator/page.tsx`:** Either (a) build the interactive promised by the
  "Try It" CTA (γ slider with live value columns), or (b) rename CTA and re-parent the
  page under Cosmology. Pass 2 + 3 agreed this is the most misleading affordance on the site.
- **`src/app/equation-walkthrough/page.tsx`:** Add a one-line "what to notice" per step, and
  an explicit closing step referencing `/honest-assessment` and the scaffolding-hypothesis
  finding.
- **Longer-term:** implement tiered guidance (always-visible card, tooltip, expandable
  advanced notes) via a shared `ToolGuidance` component. Too big for a one-session change
  but worth a separate topic.

## Open Threads

- **Does the site have a tool for the "construction workflow" the framework actually uses?**
  Pass 3 (2026-03-31 and before) proposed: "Pick a system → coarse-grain → identify MRH →
  count ρ → fit γ, ρcrit → predict C." No tool embodies this workflow. A new tool that walks
  the visitor through the construction (with actual inputs like V_flat for galaxies or
  N_corr estimates for chemistry) would be more faithful to the framework than any current
  tool. Could be derived from γ Calculator + Coherence Explorer unified.

- **What tool would the framework's honest assessment demand?** A "diagnostic explorer"
  that takes a known system (SPARC galaxy, SQUID, consciousness EEG) and shows where the
  framework matches, where it reproduces a known result, and where it fails. This is the
  `/honest-assessment` page turned into an interactive tool. Would be the strongest
  demonstration of the site's convention that failures are load-bearing, not disclaimers.

- **Is there a category of "diagnostic" vs "demonstration" vs "calculation" tools?** The
  current "Interactive Tools" label collapses a heterogeneous set. Calculator (computes γ),
  Explorer (shows equation behavior), Plotter (overlays data with model), Comparator
  (side-by-side tables), Walkthrough (derivation stepper), Tracker (filter + list). Each has
  a different pedagogical mode. Naming and categorizing them by mode would help the visitor
  pick the right tool for their question.

- **Anchor-point maintenance.** Phase Boundary Visualizer pins include "Consciousness
  threshold (C ≈ 0.50)." Previous explorer findings showed this threshold is a 1-bit
  argument that's circular (state-of-framework-after-audits.md). The tool's anchor points
  inherit all the framework's speculative attachments. Should each anchor be badged per the
  validation taxonomy? (Speculative, Strongly Supported, Failed, etc.) This would turn the
  anchors themselves into a live index of the framework's epistemic status.
