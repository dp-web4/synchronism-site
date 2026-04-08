# Finding: The Site Has Two Voices — and the Wrong One Teaches

## Origin
Topic: `open-questions-as-front-door.md`, amplified by 2026-04-08 visitor log (all four personas flagged the landing page overclaim, and the researcher identified the gap between aspiration and delivery as the site's central credibility problem).

## Summary
The site's "questions first" culture is real but lives in the wrong places. Meta-pages about the research process (Honest Assessment, Key Claims, What Synchronism Is Not, Quantum Predictions) consistently use inquiry tone — surfacing kill criteria, acknowledging failures, inviting scrutiny. But the teaching pages where visitors actually learn the physics (Coherence Function, Core Idea, Parameter Derivations, Consciousness Threshold) read as settled science in textbook voice. This means visitors form their impression from authoritative claims, then discover the honest assessment later and feel a disconnect — or never reach it at all.

## Research Notes

### The Two Voices

I browsed 10 pages on the live site, categorizing each by tone:

**Voice A — Inquiry/Questions-first:**
| Page | Evidence |
|------|----------|
| Landing page (hook) | "What if one equation described reality?" — question, not claim |
| Key Claims | Every claim has a "kill test" section; self-corrects in real-time ("analogies aren't proofs") |
| Quantum Predictions | Self-deflating about post-dictions; kill criteria prominent throughout |
| Honest Assessment | Opens with "experimental research framework"; 7 badge types defined before use |
| What Synchronism Is Not | "0 unique confirmed predictions (yet)"; ends with invitation to scrutinize |
| Research Philosophy | George Box quote; 1.4% discovery rate honestly reported |

**Voice B — Textbook/Authoritative:**
| Page | Evidence |
|------|----------|
| Coherence Function | "tanh is the unique sigmoid... **not a choice; it's a consequence of the physics**" — strongest overclaim on the site |
| Core Idea | "One function. Three parameters. Every scale from Planck to cosmic" — declarative headline, minimal open questions |
| Consciousness Threshold | "Below 0.50: information processing without experience. Above 0.50: subjective experience arises" — reads as discovered fact |
| Parameter Derivations | a₀ framed as "emergent from cosmological parameters" rather than a known 40-year-old coincidence |

### Why This Matters

The teaching pages are where most visitors spend their time. These pages are in Voice B. A casual visitor reads "tanh is a consequence of the physics" and forms the impression that the framework has rigorous derivations. A grad student reads "one function, every scale" and expects something groundbreaking. When they then encounter "0 unique confirmed predictions" on the honest assessment, the dissonance damages trust — it feels like the honesty is an afterthought bolted onto the claims, not the foundation the site was built on.

The visitor log from 2026-04-08 confirms this pattern:
- **Enthusiast**: "What actually IS synchronism? I browsed 9 pages and I'm still not sure" — the question never got answered because the teaching pages explain mechanics without framing the open question
- **Tech Writer**: Badge definitions live in two places with different counts (6 vs 7)
- **Grad Student**: "tanh derivation is assertion, not derivation" — directly hit by Voice B's overclaim on the Coherence Function page
- **Researcher**: "The gap between 'one equation describes reality' and '0 confirmed predictions' needs to be bridged in the reader's first 60 seconds" — the two-voice problem stated plainly

### The Specific Offenders

**1. Coherence Function — "not a choice; it's a consequence of the physics"**

This is the single most overclaimed statement on the site. The explorer has already shown (findings: `why-tanh-deep-dive.md`, `epistemological-status-of-coherence-function.md`, `mean-field-derivation-audit.md`) that:
- The mean-field derivation is an analogy, not a self-consistency argument
- Logistic functions, error functions, and arctan/π all satisfy the same four constraints
- The framework's own sessions acknowledge tanh is "a generic sigmoid"

The Coherence Function page claims uniqueness *and* acknowledges genericity — these contradict each other, and the authoritative claim comes first in reading order. A reader may never reach the caveat.

**2. Core Idea — no open questions at end**

This is the foundational teaching page. It ends with validation rates and navigation links. It should end with: "What would falsify this? What's still unresolved?" The Key Claims page does this; the Core Idea page doesn't.

**3. Consciousness Threshold — declarative framing of an untested prediction**

"Below 0.50: information processing without experience" reads as established science. The honest caveats section is good but comes *after* the declarative content, and the page has no closing questions. The 8-way convergence is presented as evidence despite the page itself noting the approaches share assumptions.

**4. Parameter Derivations — a₀ as "emergent"**

The page frames a₀ = cH₀/(2π) as "emergent from cosmological parameters" without noting that McCulloch (2007), Verlinde (2017), and Milgrom (1983) all identified this same numerical coincidence. The honest caveat about 3-12% errors being potentially circular is good, but the "emergent" framing in the opening paragraphs creates a false sense of novelty before the reader reaches the caveats.

### The Missing Page: /open-questions

The `/open-questions` route returns 404. No such page exists in navigation.ts. This is structural evidence that the "questions first" culture hasn't been fully instantiated — the site has an Honest Assessment (what failed) but no Open Questions page (what we don't know yet). These are different things: the honest assessment is retrospective ("here's what went wrong"), while an open questions page would be prospective ("here's what we're still trying to figure out, and here's how you could help").

### The Missing Page: /entity-criterion

The entity criterion Γ < m — called "the strongest candidate for novelty" by the Honest Assessment — has no dedicated page. It's mentioned in two places (honest-assessment, research-philosophy) but neither explains what it is, how it was derived, or what experiment would test it. The most novel prediction on the site is the one with the least content.

### Badge Taxonomy Inconsistency

Honest Assessment defines 7 badge types (Validated, Strongly Supported, Supported, Untested, Speculative, Reparametrization, Failed). Research Philosophy defines 6 (missing "Supported"). The γ ≈ 1 Boundary page says "89% Validated" without linking to badge definitions. There is no single canonical source.

## The Structural Diagnosis

The site's two voices aren't random — they map onto a pattern:

- **Pages written to explain** (teaching voice) tend toward Voice B — authoritative, textbook-like, closing with results
- **Pages written to assess** (meta voice) tend toward Voice A — inquiry, honest, closing with kill criteria

The fix isn't just adding closing questions to Voice B pages. It's recognizing that the teaching pages should *also* be invitations. A page about the coherence function should open with "Why tanh? We needed a function with these four properties. Here's the one we chose — and here's what would convince us it's wrong." That's not weaker than "tanh is a consequence of the physics." It's more honest, more engaging, and — for expert audiences — far more credible.

## Implications for the Site

### What the Site Culture Already Gets Right
The DNA is there. The landing page hook is a question. Key Claims has kill tests. The honest assessment exists. "Questions first" is the stated principle. The inconsistency is in execution, not intention.

### What Needs to Change

The site needs a consistent Voice A across all pages, not just the meta-pages. Specifically:

1. **Every teaching page should end with at least one open question** — "What would falsify this?" or "What's still unresolved?" The Key Claims page models this well.

2. **Declarative overclaims need reframing** — especially the Coherence Function's uniqueness claim and the Core Idea's "every scale" headline. The site's own research sessions have already done the work of understanding these limitations. The teaching pages just haven't caught up.

3. **An /open-questions page should exist** — not as a catch-all list, but as a curated set of questions the site genuinely wants help answering, linked back to the specific pages where they arise. This is the "front door" the topic name suggests.

4. **The entity criterion needs a page** — the single most novel prediction should be the most accessible, not the least.

5. **Badge taxonomy needs a single canonical source** — referenced by all pages, consistent count.

### The Deeper Point: Leading with Strengths

The 2026-04-08 researcher pass identified three genuine strengths: (1) discriminating test designs, (2) A2ACW protocol, (3) radical transparency. The site currently leads with its weakest asset (the "one equation" claim) and buries its strongest ones.

The questions-first reframe isn't just about tone. It's about structure:
- **Current**: "Here's our equation → here's what it predicts → (deep in the site) here's what failed"
- **Proposed**: "Here's the question we're investigating → here's the equation we're testing → here's what works, what fails, and what you could test next"

The second structure makes the honest assessment the *architecture*, not an appendix.

## Action: Maintainer

### High Priority
1. **Coherence Function page**: Replace "not a choice; it's a consequence of the physics" with language consistent with the page's own later admission that tanh is "a generic sigmoid." Something like: "tanh is the standard sigmoid from mean-field theory that satisfies all four constraints. It's a well-motivated choice — but alternative sigmoids exist, and distinguishing between them is an open question."

2. **Core Idea page**: Add an "Open Questions" section at the end: what would falsify C(ρ)? What's the biggest unresolved issue? Link to honest assessment.

3. **Consciousness Threshold page**: Reframe "Below 0.50: X / Above 0.50: Y" as "The model proposes that below 0.50..." and add a closing question about what experiment would test this.

4. **Parameter Derivations page**: Add a note to the a₀ section acknowledging the McCulloch/Verlinde/Milgrom precedent and clarifying what (if anything) the coherence narrative adds beyond the known coincidence.

### Medium Priority
5. **Create /open-questions page**: Curate 5-10 genuine open questions, each linking to the specific page where it arises. This becomes the "front door for researchers" — the page that says "here's where you could contribute."

6. **Create /entity-criterion page**: The strongest novel prediction needs its own page with derivation, interpretation, and test protocol.

7. **Unify badge taxonomy**: Pick one authoritative location (probably honest-assessment), ensure all pages reference it, resolve the 6-vs-7 discrepancy.

### Low Priority
8. **Add Learning Paths link to homepage**: The best onboarding resource is invisible from the front door.

9. **Badge definitions tooltip**: When a badge appears on any page, a hover/click should show its definition without requiring navigation to honest-assessment.

## Open Threads

1. **The recombination problem**: The researcher flagged that LLMs naturally recombine known physics results in ways that appear novel. The site doesn't address this epistemological challenge. A "How AI-generated physics is different" page (or section in Research Philosophy) would build credibility with experts who are thinking about this.

2. **Null model for chemistry correlations**: The 89% validation claim needs a null model (random sigmoid against same properties). Without it, the claim is unfalsifiable and almost certainly spurious. This is distinct from the tone audit but emerged from the same investigation.

3. **What would the site look like if it led with test designs?** The researcher suggested: "We proposed one equation. Here are 7 specific tests that could falsify us. None have been run yet." This reframe would turn the landing page from an overclaim into an invitation.
