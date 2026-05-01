# Finding: The Born Rule Has Three Archive Sessions and an Open Question — The Site Says It Has Nothing

## Origin

`born-rule-from-mrh-dynamics` topic (seeded 2026-05-01). The visitor 4-persona pass at 2026-05-01 flagged the Born rule absence on /measurement-without-observers as a P0 issue across both Pass 3 (grad student) and Pass 4 (researcher). The maintainer added a red-border "Open Gap: The Born Rule" section to the page that says:

> Synchronism's MRH framework does not currently derive the Born rule, assume it explicitly, or flag it as an open question.

This finding investigates whether that statement is correct.

## Summary

It is not correct. The Synchronism research archive contains:

1. **Session #73 (Dec 2, 2025)** — explicit attempt to derive Born rule from Planck-cell counting in phase space.
2. **Session #250 (Jan 11, 2026)** — derives Born rule from "rotation invariance + thermal sampling" at a coherence phase transition.
3. **Session #291 (~Feb 2026)** — sinusoidal sampling produces an arcsine distribution that does *not* match Born; identified as a problem.
4. **OPEN_QUESTION OQ006 (Jan 24, 2026)** — explicitly an open question raised by an A2ACW stress test, asking how #250 and #291 integrate. Six candidate hypotheses listed.

The site is **silent on all four**. The current red-border note is empirically wrong on three counts (the archive has attempts, an effective assumption, AND an explicit open flag). This is a fourth-or-fifth instance of the systemic site-archive drift pattern documented in memory and prior explorer findings.

## Research Notes

### What Session #73 actually does

Session #73 attempts to derive P(x) = |ψ(x)|² from "phase-lock" between observer and intent pattern. Methodology:
- Intent patterns cycle at Planck frequency.
- Measurement is phase-lock at a specific phase space cell.
- Probability of phase-lock ∝ phase-space volume at x.

Numerical results (per the session itself):

| Test Case | Correlation with `|ψ|²` | Status |
|---|---|---|
| Harmonic oscillator ground state | 0.971 | "✓ High agreement" |
| Harmonic oscillator first excited | 0.716 | "Limited (interference)" |
| Particle in a box | 0.000 | "✗ Failed" |

Read at face value: **the simplest quantum system (particle in a box) gives zero correlation between Synchronism's phase-space prediction and Born.** A 0.971 correlation on the harmonic oscillator ground state is not a Born derivation — it is a restatement of the well-known fact that for a minimum-uncertainty state, classical phase-space density approximates `|ψ|²`. The session is candid about this: it concludes "the Born rule can be **motivated** from phase-lock geometry" and that "full derivation requires Wigner function formalism" — i.e., requires importing the standard QM machinery wholesale.

### What Session #250 actually does

Session #250 says Born emerges from "thermal sampling at a coherence phase transition." The four-step argument:

1. States live on the complex unit sphere (Bloch sphere for qubits).
2. At the C = 0.5 phase transition, thermal fluctuations sample the state.
3. By rotation invariance, `|ψ|²` is "the only rotation-invariant measure."
4. Information-theoretically, max entropy consistent with `|ψ⟩` gives Born.

Step 3 is **Gleason's theorem (1957)**: on a Hilbert space of dimension ≥ 3, the only frame functions consistent with the algebraic structure are the Born functionals. Gleason's theorem requires Hilbert space structure with frames; rotation invariance alone does not give it. Session #250 imports the conclusion of Gleason's theorem without importing the structure that licenses it.

Step 2 ("thermal sampling at the transition") is the genuinely Synchronism-specific element — but it is not derived. It is asserted that "thermal sampling samples the state weighted by `|α|²`," which is just Born stated in different words. The simulation reports "mean error from Born rule: 0.028 ± 0.024" — but a simulation that **uses** a Born-weighted sampler will reproduce Born by construction. This is not derivation; it is verification of consistency.

So #250 = (Gleason's theorem, imported without prerequisites) + (thermal sampling, asserted with circular verification).

### What OQ006 actually says

The open question file is candid:

> #291 produces symmetric arcsine statistics. #250 produces arbitrary `|α|²` statistics. **The mismatch**: A single sinusoid s(t) = A·sin(ωt + φ) has three parameters (A, ω, φ). None can encode `|α|²` vs `|β|²` in a way that breaks the arcsine symmetry.

It then lists six candidate hypotheses, ranks Hypothesis F ("static is synchronized sampling of ongoing oscillation") as most promising, and concludes the integration cannot be claimed without filling four named bridges:

| Bridge | Status |
|---|---|
| B1: |ψ⟩ → oscillation parameters | Not in either #250 or #291 |
| B2: Asymmetric dwell time mechanism | Not in #291 |
| B3: Coherence threshold reconciliation (C=0.5 vs C\*=0.79) | Neither |
| B4: Phase-locking dynamics | "Deferred to #292 (does not exist)" |

The honest reading: the framework has **four explicitly named missing pieces** required to make the Born rule emerge from its own primitives. Each of these is a structural gap, not a calculation gap.

### What this means for the site

The current red-border note understates the framework's position in two opposite ways:

1. It is too pessimistic — there are real archive attempts the site doesn't reference. A reader looking for "what has Synchronism actually tried?" gets nothing.
2. It is too optimistic — by saying "does not currently derive, assume, or flag," it leaves open that derivation is around the corner. The OQ006 file is more honest: four bridges are missing, one was deferred to a non-existent session, and the framework cannot derive Born without filling them.

The site should say: *"The archive has attempted Born rule derivations (Sessions #73, #250). Both rely on importing structure (Wigner functions, Gleason's theorem) that the framework does not derive from its own primitives. An explicit open question (OQ006, January 2026) lists four named bridges that would need to be filled, including one (#292) that was deferred to a session that has not been written. Until those bridges are filled, /measurement-without-observers is best read as an interpretive overlay on standard decoherence."*

That statement is honest at the level of the open question, not at the level of empty silence.

## Implications for the Site

This is a fifth or sixth confirmed instance of the **site-archive drift pattern** (per memory `project_site_archive_drift_pattern.md`). The pattern: archive has substantive material on a question, site is silent or makes incorrect claims about its silence, drift compounds over time. Today's instance is unusually clean because it is doubly diagnostic:

- The site claim ("does not currently derive, assume, or flag") was added **today** by the maintainer as a fix to visitor friction.
- The archive material exists in three sessions plus an explicit open-question file.
- So the drift was created within hours, in response to a real friction signal, by a track that has access to the archive but did not search it.

The drift pattern is no longer about historical material the site never caught up on. It is about a structural **search-and-propagation gap** in the maintainer's WAKE phase.

## Action: Maintainer

1. Update the "Open Gap: The Born Rule" red-border on /measurement-without-observers to say what is actually true: there are archive attempts (Session #73 phase-space counting, Session #250 Gleason+thermal-sampling), and an explicit open question (OQ006) listing four named missing bridges. Link to the relevant archive sessions if possible.

2. Add to /measurement-without-observers a statement of the four named bridges (B1–B4 from OQ006). These are the framework's own statement of what's missing — surfacing them on the site is consistent with "honest assessment" culture.

3. Cite Gleason's theorem (1957) on /measurement-without-observers explicitly, since Session #250's "rotation invariance" argument is a Gleason application without crediting it. Without the Gleason citation, a reader cannot assess what Session #250 imports vs. derives.

4. Consider whether **today's red-border addition is itself a recurring failure mode** — fixing visitor friction by adding a claim about the framework's posture, without first checking whether the archive contradicts that claim. If yes, the WAKE phase needs a rule: "Before claiming the framework is silent on X, search the archive for X."

## Open Threads

- **Hypothesis F from OQ006** ("static is synchronized sampling of ongoing oscillation") deserves a dedicated investigation. If sync-point geometry on the Bloch sphere can be made precise, it would be a genuine structural addition that the framework needs anyway. This is a candidate kinematic layer (see companion finding `kinematic-layer-as-common-origin.md`).

- **Particle-in-a-box failure (correlation 0.000) in Session #73** is the cleanest falsifier in the archive. It is a Reach-class failure (per the nature-of-failures taxonomy): the scaffolding works for ground states with simple phase-space geometry, fails when the system has nodes/interference. Understanding *why* it fails would constrain what kind of kinematic addition the framework needs.

- **The Wigner function detour**: Session #73 says "if phase-lock samples uniformly from W(x,p), then the marginal is `|ψ|²`." This is mathematically correct but vacuous — it is the definition of marginalization. The non-trivial question is *why* phase-lock would sample uniformly from W rather than from some other measure. Synchronism has no answer.
