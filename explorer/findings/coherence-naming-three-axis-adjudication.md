# Finding: The "Coherence" Naming Decision Is Mis-Framed — C Has No Quantum/Classical Content, and the Defining Metaphor Is Inverted

## Origin
Topic `coherence-classicality-naming-decision.md` (HIGH, seeded 2026-05-27; flagged by 3 of 4 visitor personas the same day). The topic asks: should C be renamed "classicality," "decoherence fraction," or kept-with-disambiguation? I went to adjudicate and found the question is mis-posed — and that **two open archive proposals on this exact issue recommend incompatible fixes** that nobody has reconciled.

## Summary
The naming problem is usually stated as "Synchronism's *coherence* is the opposite of condensed-matter *coherence* (BEC/BCS are maximally quantum-coherent but sit at low C)." That framing is correct but shallow. The deeper facts:

1. **The defining metaphor is inverted relative to the defining equation — on the front door.** The landing page, Coherence Explorer, and Glossary all say "elements in lockstep (like electrons in a superconductor) = *high* coherence; independent elements = *low* coherence." But γ = 2/√N_corr makes collective systems (large N_corr → small γ) pin at C ≈ 0, and independent systems (N_corr = 1 → γ = 2) reach the *highest* C. **The marching band the site uses to define "high coherence" is a low-C system by the site's own equation.** This is not a physicist-only confusion (the existing proposals only discuss BEC/BCS); it is the onboarding metaphor every visitor reads first.

2. **C has zero quantum-vs-classical content.** C = tanh(γ·ln(ρ/ρ_crit+1)) is a function of density ρ and collectivity N_corr *only*. It is high when (dense AND single-particle), low when (sparse OR collective). There is no ℏ, no temperature, no action, no decoherence rate. Labeling it "0 = quantum, 1 = classical" is a category error regardless of which word ("coherence"/"classicality"/"decoherence fraction") you attach.

3. **Therefore the two open proposals are in direct conflict, and one is wrong.** `coherence_classicality_naming_and_test03_test05_double_filing.md` (2026-05-27) says C *measures classicality* → rename to "classicality" or "decoherence fraction." `gamma_definitional_collision_regime_label_inversion.md` (2026-05-04) says C/γ *measures collectivity, NOT quantum-vs-classical* → relabel "single-particle/collective." These cannot both be the fix. **The 2026-05-04 diagnosis is right; the 2026-05-27 rename re-commits the category error in a new word.**

The naming decision is not "which axis-1 word for C" — it's "stop labeling C on the quantum/classical axis at all, and decide whether the framework's multi-scale claim survives once you do."

---

## The three axes (the organizing principle)

There are three *physically independent* properties at play. The framework collapses them onto one word, "coherence."

| Axis | What it is | Endpoints | Where it lives in the equation |
|------|-----------|-----------|-------------------------------|
| **A — Density** | how crowded | sparse ↔ dense | the input ρ |
| **B — Collectivity** | how many elements move as a correlated unit | single-particle (N_corr=1, γ=2) ↔ collective (N_corr≫1, γ→0) | γ = 2/√N_corr |
| **C-phys — Classicality** | quantum vs classical *character* (decoherence) | quantum-coherent ↔ decohered/classical | **absent** |

**C = tanh(γ·ln(ρ/ρ_crit+1)) is a function of A and B only.** It carries no information about Axis C-phys — yet the site names it on Axis C-phys ("0=quantum, 1=classical"), describes it on Axis B ("how collectively particles behave"), and the metaphor pins Axis B *backwards*.

These three axes happen to *correlate* for everyday bulk matter (a rock is dense, classical, and made of ~uncorrelated-at-the-relevant-scale atoms), which is why the metaphor feels intuitive. They **dissociate** exactly at the systems the framework cites to claim universality:

- **BEC / BCS superconductor**: collective (B: large N_corr), quantum-coherent (C-phys: maximal), and the macroscopic state is *ordered* (not "disordered"). The framework places them at C ≈ 0 and calls C ≈ 0 "quantum/independent." They are quantum ✓ but not independent ✗ — they are maximally *dependent*.
- **Marching band**: collective (B), classical (C-phys), ordered. The site calls it "high coherence." By the equation it is low-C (collective → small γ).
- **Single electron**: single-particle (B: N_corr=1, γ=2), quantum (C-phys). By the equation it reaches the *highest* C — i.e., the framework's equation calls the lone electron the *most classical* object available.

---

## Numerical backbone

C(ρ) = tanh(γ·ln(ρ/ρ_crit + 1)), verified:

**γ–C anti-correlation at fixed density (ρ = ρ_crit):** more collective (smaller γ) → lower C.

| System (framework's own N_corr) | γ = 2/√N_corr | C(ρ_crit) | C(100·ρ_crit) |
|---|---|---|---|
| ideal gas / galaxy stars (N_corr=1) | 2.0 | 0.882 | 1.000 |
| chemistry (N_corr≈4) | 1.0 | 0.600 | 1.000 |
| superconductor-ish (N_corr≈100) | 0.2 | 0.138 | 0.727 |
| BCS (N_corr≈10³) | 0.063 | 0.044 | 0.283 |
| BEC (N_corr≈10⁶) | 0.002 | 0.0014 | 0.009 |

For low-γ (collective) systems, C is pinned near 0 across *all* physical densities: with γ = 0.002, reaching C = 0.5 would require ρ/ρ_crit ≈ e²⁷⁵. **Collective systems are stuck at low C regardless of density** — density cannot rescue the metaphor. The "lockstep = high coherence" claim is robustly inverted, not a corner case.

(Consistency check with today's maintainer fix: max slope vs log-density is at C = 0.601 for γ=2 and C = 0.562 for γ=1 — confirming the dropped "steepest-slope at C≈0.50" claim. Note the consciousness threshold C≈0.50 maps to the γ≈1 "boundary" regime, i.e. it is an *Axis-B* (collectivity) location, not an Axis-C-phys (awareness/quantum) one — the same conflation, one more time.)

---

## The on-site contradiction, with exact citations

**Front-of-site (still conflated — labels C on Axis C-phys AND describes it on Axis B, metaphor inverted):**

- `src/app/page.tsx:44-46` — "Coherence is a measure of how collectively a group of elements behaves. When elements act independently (like stars in a galaxy), coherence is low. When they move in lockstep (like electrons in a superconductor), coherence is **high**." → superconductor = high-C exemplar (it is the canonical *low*-C system).
- `src/app/page.tsx:62` — "C = coherence (0 = quantum, 1 = classical)" → Axis C-phys label.
- `src/app/why-synchronism/page.tsx:46` — "returns one output (coherence: how quantum or classical something is)."
- `src/app/coherence-function/page.tsx:37,53` — "how quantum or classical a system is"; "Output: coherence (0 = quantum, 1 = classical)."
- `src/app/coherence-explorer/page.tsx:61-68` — "Coherence ≈ 1 is like a marching band — everyone in lockstep"; "returns a coherence value between 0 (independent/quantum-like) and 1 (collective/classical-like)." → **"0 = independent" is itself wrong**: C≈0 is reached by *collective* (low-γ) systems, the opposite of independent; independent systems (γ=2) reach the *highest* C.
- `src/lib/terms.ts:122` (Glossary "Coherence", the authoritative definition) — "Low coherence: elements act independently (like stars in a galaxy). High coherence: elements move in lockstep (like electrons in a superconductor)."

**`src/lib/terms.ts` internal contradiction (two entries, opposite γ→regime maps):**
- line 23 (`γ`): "When γ << 1, behavior is quantum… γ >> 1, behavior is classical."
- line 30 (`N_corr`): "A single electron has N_corr = 1 (γ = 2, **quantum**). A crystal lattice N_corr = 10²⁴ (γ ≈ 10⁻¹², **classical**)."
- These invert each other: line 23 puts γ≪1 = quantum; line 30 puts γ=10⁻¹² (crystal) = classical. The C-axis machinery (high γ → high C → "classical") agrees with line 23, which makes line 30's *physically correct* labels (electron=quantum, crystal=classical) contradict the framework's own equation. The authors wrote the right physics and the equation disagrees with it.

**Tools (already half-fixed — Axis B correctly separated from Axis C-phys):**
- `coherence-explorer/page.tsx:78` — "these labels describe the number of correlated degrees of freedom, not the standard quantum/classical distinction — BEC and BCS appear in the 'collective' basin, which is correct (they have large N_corr)."
- `phase-boundary-visualizer/page.tsx:14` — "Note: this is NOT the same as 'classical' in the standard quantum/classical sense — these are macroscopic quantum systems. The label describes correlation count, not quantum-vs-classical."

So the **γ-axis** has been correctly re-diagnosed (in the tools) as Axis B (collectivity), per the 2026-05-04 proposal's Case 1. But:
1. That fix never propagated to the front-of-site copy above (the signature site–self-audit propagation gap, cf. `feedback_framing_vs_selfaudit`).
2. Even in the fixed tools, **C itself is still labeled on Axis C-phys** ("0=quantum/independent, 1=classical/collective", `coherence-explorer:67-68`) — and that label even contradicts the same tool's γ description: C=1 is called "collective" (line 68) but C=1 is reached only by *single-particle* (large-γ) systems (line 75). The half-fix relabeled γ and left C inverted.

---

## Adjudicating the two proposals

**2026-05-27 proposal — "C measures classicality, rename to classicality / decoherence fraction."**
Wrong. "Classicality" and "decoherence fraction" are Axis-C-phys names. C has no Axis-C-phys content. Renaming would:
- still call the lone electron (γ=2, high C) "maximally classical" and the BEC (low C) "maximally quantum" — but it would now *assert that as physics* rather than as a confusing label;
- still leave the marching band (collective, classical, but low-C) mislabeled.
A new word does not add the missing axis.

**2026-05-04 proposal — "C/γ is a collectivity axis; 'quantum/classical' labels mislead; relabel single-particle/collective."**
Right as far as the γ-axis goes (and the tools implemented it). But incomplete: it relabeled γ and stopped. It did not (a) strip the "0=quantum,1=classical" label off **C**, (b) fix the inverted *metaphor*, or (c) confront the consequence for the multi-scale claim.

**The reconciliation (the actual naming decision):**
C is the output of a log-compander: it measures **how far density has driven a system toward saturation, at a fixed single-particle normalization** — high for dense + single-particle, low for sparse *or* collective. Honest descriptors live on Axes A and B (density, collectivity, saturation), never on Axis C-phys. Given that, the framework faces a real choice, and it is *not* a vocabulary choice:

- **Option I — Scope restriction (honest, deflationary).** C(ρ) is a density→saturation map valid where collectivity is fixed at the single-particle reference (N_corr=1, γ=2): the galaxy-rotation regime where it was calibrated. *Drop* the "quantum→classical, one equation from BEC to cosmos" framing, because the moment N_corr varies, C measures (inverse) collectivity, which is orthogonal to the quantum/classical character the hero claim invokes. This is consistent with the audited state (compander, 0 discriminators) and the gamma-dual-role finding's conclusion that C(ρ) "degenerates for all domains except N_corr≈1."
- **Option II — Keep multi-scale, but state the truth on every page.** "C is a density-driven saturation index normalized by collectivity (N_corr). It is high for dense, weakly-correlated matter and low for sparse *or* strongly-correlated matter. It does **not** measure quantum-vs-classical character: macroscopic quantum systems (BEC, BCS) are strongly correlated and therefore low-C, even though they are maximally quantum-coherent. The 'quantum→classical' reading is a galaxy-regime heuristic that inverts for genuine many-body quantum systems."

Either way: **delete "0 = quantum, 1 = classical" and "coherence = how collectively elements behave" as co-resident descriptions of C, and stop using a superconductor/marching-band as the "high coherence" exemplar.** A rename to "classicality" actively makes it worse.

---

## Why this matters beyond the label

This is the same structural pathology the audit keeps finding, in a fresh location: a single scalar is asked to carry several physically independent axes, and "works" only on the sub-manifold (galaxy regime, N_corr=1) where those axes happen to align. It is the coherence-axis analogue of:
- the **compander-class** diagnosis (C(ρ) is a μ-law/Hill response, not an order parameter);
- the **γ dual-role** problem (γ is fluctuation-ratio *and* coupling, scaling oppositely);
- the **three-C** problem (C(ρ) vs C(a) vs RAR — different variables, opposite EFE predictions).

In each case the framework's universality comes from *projecting a multi-axis reality onto one knob* and naming the knob after whichever axis is most marketable ("coherence," "synchronization"). The projection is lossy in exactly the direction that makes the result reducible to known one-parameter laws — which is also why every discriminating test has collapsed onto an existing framework. The naming inversion is not a typo; it is this projection made visible at the front door.

Note the deepest irony for a framework named **Synchronism**: C does not measure synchronization either. A marching band and a BEC are both maximally *synchronized* (Axis B, collective) and both sit at **low C**. The central quantity is misaligned with the physics community's "coherence" (Axis C-phys), with the framework's own metaphor (Axis B, but inverted), *and* with the framework's own name (synchronization = Axis B = low C).

---

## Implications for the Site
- The front-of-site "coherence = collective lockstep, 0=quantum/1=classical" copy is not just jargon-confusing; it is *contradicted by the framework's own equation and by the framework's own (already-fixed) tools*. This is a P0 accuracy item, not a P2 onboarding one.
- A rename to "classicality"/"decoherence fraction" (the current leading proposal) should **not** be implemented — it would convert a confusing label into an asserted falsehood.
- The decision is a research-level scope decision (Option I vs II), not a vocabulary patch.

## Action: Maintainer
1. **Do not rename C to "classicality" or "decoherence fraction."** If a symbol annotation is wanted, the honest gloss is Axis-A/B: "density-driven saturation index (normalized by N_corr)."
2. **Strip "0 = quantum, 1 = classical" from C's definition everywhere it co-resides with "how collectively elements behave":** `page.tsx:62`, `why-synchronism:46`, `coherence-function:37,53`, `coherence-explorer:67-68`. Replace with the Axis-A/B description (Option II text above) or the scope-restricted version (Option I).
3. **Fix the inverted exemplar (highest-leverage single edit):** in `page.tsx:44-46` and `terms.ts:122`, "high coherence: electrons in a superconductor" uses the canonical *low-C* system as the high-C example. Replace the high-C exemplar with a dense, weakly-correlated *classical* system (the framework's own γ=2 example is "ideal gas / free atoms"; high density there → high C). Or invert the metaphor's poles to match the equation and flag that "coherence here = density-saturation, not lockstep."
4. **Resolve the `terms.ts` line 23 vs line 30 contradiction:** the γ→regime maps are opposite. Pick the equation-consistent one (high γ → high C) and rewrite the N_corr-entry examples so they don't assert electron=classical-by-equation.
5. **Propagate the tools' caveat to the front-of-site**, and extend it from the γ-axis (done) to C itself (not done): C=1 is "dense single-particle," not "collective."
6. Cross-link the resolved statement to `/honest-assessment` as an "Open Structural Problem: C does not measure quantum-vs-classical character" entry, at the same weight as the compander and three-C entries.

## Open Threads
1. **Is ρ_crit a quantum scale that could restore Axis-C-phys content?** If ρ_crit were the quantum-degeneracy density (nλ_dB³ ~ 1), then ρ > ρ_crit would be the *degenerate* (quantum) regime — but the framework calls high-ρ "classical," so even this rescue inverts (degenerate matter is *more* quantum, not less). Worth a one-paragraph closure: ρ_crit is a fitted reference density, not a quantum scale, so no Axis-C-phys content enters through it either.
2. **Does Option I (scope restriction) actually cost anything not already lost?** The audited state is already "0 discriminators, compander, galaxy-regime." Option I may be free — it only deletes a hero claim the scorecard already contradicts.
3. **Synchronization metric.** If the framework wants a quantity that genuinely tracks "lockstep," that is an Axis-B order parameter (e.g., a Kuramoto-style coherence r, or ODLRO) — which is a *different* object from C(ρ) and would, unlike C, place BEC/BCS/marching-band correctly at high synchronization. Is there appetite to define one, or is C(ρ) the whole framework?
