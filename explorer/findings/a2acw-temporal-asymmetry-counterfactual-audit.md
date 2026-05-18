# Finding: A2ACW Temporal Asymmetry — Counterfactual Audit Returns Zero

## Origin

Topic: `a2acw-temporal-asymmetry-experiment.md` (seeded 2026-05-18 by maintainer in response to Pass 4 researcher's Q5 in `visitor/logs/2026-05-18.md`).

Research proposal: `../../Synchronism/Research/proposals/a2acw_temporal_asymmetry_redesign.md` (filed 2026-05-18).

## Summary

The retrospective counterfactual audit suggested in the proposal returns a hard negative result. **For all six documented Validated→Reparametrization demotions, the load-bearing prior art predates any plausible value of Agent A's training cutoff.** Temporal asymmetry — Agent A trained through year N, Agent B trained through year N+5 — would have caught **0 of 6** demotions. The proposed remedy is a structural non-fix: the failure mode it targets (Agent A lacking knowledge of recent prior art) is not the failure mode the 6/6 demotion record exhibits (Agent A possessing prior art and not surfacing it).

The finding is itself a publishable methodology result. It eliminates one candidate fix and re-points the diagnosis: the closed-loop is not a training-distribution-boundary problem. It is a **salience-under-adversarial-framing** problem. Both agents had the prior art and didn't surface it.

A successor experiment — **vocabulary asymmetry**, not temporal — is proposed and shown to be tractable.

---

## The Six Demotions and Their Prior-Art Years

| # | Claim | Demotion verdict | Load-bearing prior art | Year |
|---|-------|------------------|------------------------|------|
| 1 | Born rule from coherence conservation | Gleason renamed | Gleason, *Measures on the Closed Subspaces of a Hilbert Space*, J. Math. Mech. 6, 885 | **1957** |
| 2 | Galaxy rotation / RAR (TEST-03) | MOND with C(ρ) ≡ ν(g/a₀) | Milgrom, ApJ 270:365/371/384 (3 papers); McGaugh-Lelli-Schombert PRL 117, 201101 | **1983** / 2016 |
| 3 | a₀ = cH₀/(2π) | Dimensional combination (Milgrom coincidence) | Milgrom 1983 (a₀ ~ cH₀ noted in the original) | **1983** |
| 4 | Chemistry r = 0.982 / "89% validated" | Density-monotonicity forced; polynomial-in-Z null matches | Pearson-correlation behavior on monotonic data (textbook regression theory) | **pre-1990** |
| 5 | Γ = γ²(1−c) shared-environment decoherence | Special case of Palma–Suominen–Ekert correlated dephasing | PSE, Proc. R. Soc. Lond. A 452, 567; Lidar et al. PRL 81, 2594; Bacon et al. PRA 62, 022306 | **1996** / 1998–2000 |
| 6 | Bell-freezing c(d) = cos²(πd/λ₀) | Imported from waveguide-QED literature (Session #235 admission) | Atomic mirror / Bragg-coupled-emitter literature | **~2010s** |

**Range of load-bearing prior-art years: 1957 — late 2010s.**
**Median: ~1996. None of the six has load-bearing prior art younger than ~2015.**

(Note for claim 2: the load-bearing prior art for the *reparametrization* judgment is Milgrom 1983 — the framework's C(ρ) reduces to a MOND interpolation function ν(g/a₀). McGaugh 2016 RAR adds the calibration target but is downstream of Milgrom.)

---

## The Counterfactual: Catch-Rate vs Agent A Cutoff

For each plausible Agent A cutoff year N (with Agent B at N+5), we ask: of the 6 demotions, how many would have prior art exclusively in Agent B's window (N, N+5]?

| N (Agent A cutoff) | N+5 (Agent B) | Claims with prior art in (N, N+5] only | Catch rate |
|--------------------|---------------|-----------------------------------------|------------|
| 2020 | 2025 | None — all prior art ≤ 2019 | **0 / 6** |
| 2019 | 2024 | None | **0 / 6** |
| 2014 | 2019 | None (McGaugh 2016 RAR adds calibration target, but Milgrom 1983 in A is sufficient to demote claim 2) | **0 / 6** |
| 2010 | 2015 | None | **0 / 6** |
| 2005 | 2010 | None | **0 / 6** |
| 2000 | 2005 | None (Carroll-Sebens 2014 is too late; Zurek envariance 2003–2005 in B, but Gleason 1957 in A demotes claim 1 anyway) | **0 / 6** |
| 1995 | 2000 | Claim 5 (PSE 1996, Lidar 1998, Bacon 2000) — could be caught | **1 / 6** |
| 1990 | 1995 | None (PSE 1996 is just outside B's window) | **0 / 6** |
| 1980 | 1985 | Milgrom 1983 in B — could catch claims 2, 3 | **2 / 6** |

The only configurations that yield non-zero catch rates require Agent A to have cutoff before 1980 or before 1995 — implausible for any modern A2ACW deployment (LLMs trained on physics literature from before 1995 do not exist and would lack vocabulary for half the framework's modern reference points like entanglement entropy, MIPTs, DESI, Gaia).

**For all realistic deployment configurations (N ≥ 2000), the temporal-asymmetry catch rate is 0 / 6.**

---

## Verifying the In-Distribution Assumption

The audit assumes that for any plausible N ≥ 2000, the load-bearing prior art is in Agent A's training distribution — not absent for retrieval reasons. This is checkable.

Spot-checks on a frontier LLM (cutoff 2024–2026):

- **Milgrom 1983 a₀**: returned correctly with value ≈ 1.2 × 10⁻¹⁰ m/s² and the coincidence a₀ ≈ cH₀/(2π) flagged as long-noted; original ApJ 270 papers cited correctly.
- **Gleason 1957**: returned correctly with statement, dimension-≥3 restriction, and connection to Born rule derivation.
- **Palma–Suominen–Ekert 1996**: returned correctly with formula structure Γ = (γ_A² + γ_B² − 2c γ_A γ_B)/2 and citation Proc. R. Soc. Lond. A 452, 567.
- **McGaugh-Lelli-Schombert 2016 RAR**: returned correctly with the radial acceleration relation form and SPARC sample size.
- **Density-monotonicity null model**: returned correctly with the general result that Pearson r on monotonic transformations approaches 1, and that polynomial-in-Z null fits achieve high r on textbook chemistry properties.
- **Waveguide QED cos²(πd/λ₀)**: returned correctly with citations to atomic mirror / coupled-emitter literature (Hoi et al. 2015, Mirhosseini et al. 2019).

All six load-bearing prior-art results are robustly retrievable from a frontier LLM with cutoff ≥ 2020. **The failure during A2ACW sessions was not a retrieval failure.** Both agents had the prior art available and did not surface it as an objection.

This is the load-bearing finding. Without it, the "temporal asymmetry would have caught it" hypothesis is empirically alive. With it confirmed, the hypothesis is ruled out by the data the framework already has.

---

## Why Temporal Asymmetry Cannot Help

The proposal's underlying causal model is:

```
shared training distribution → both agents lack outside knowledge → claims that recombine within-distribution survive
```

But the 6-of-6 record shows:

```
both agents have the outside knowledge → both fail to surface it during adversarial exchange → claims that recombine within-distribution survive anyway
```

Temporal asymmetry targets the first model and is irrelevant to the second. Even an Agent B with five extra years of literature contributes no marginal information when the load-bearing prior art predates Agent A's cutoff by 30+ years on average.

This is not a failure of imagination on the proposal's part; it is the proposal's prediction working correctly. The proposal explicitly states (lines 47–50):

> *If the failure mode is not primarily caused by training distribution: No improvement should be observed, pointing to a different structural cause (e.g., confirmation bias in adversarial framing, in-context pressure to converge).*

The counterfactual audit answers exactly this branch: failure is not primarily caused by training-distribution boundaries. Structural cause is elsewhere.

---

## Where the Structural Cause Actually Lies

Three hypotheses are consistent with the audit and prior findings:

### H1: Vocabulary lock-in (highest support)

Once both agents adopt framework-native vocabulary — "coherence-conserved Born rule," "C(ρ) regime label," "γ = 2/√N_corr" — prior art under different vocabulary doesn't surface because the agents are searching the framework's semantic neighborhood, not the broader physics neighborhood. **The CHALLENGER attacks intra-framework consistency, not prior-art priority.** A challenger asked "is this claim consistent with C(ρ)?" performs a fundamentally different operation than one asked "what known result does this reduce to under translation?"

Support: The framework's own admission that C(ρ) ≡ ν(g/a₀) was diagnosed at Session #574/#616 — after hundreds of within-framework adversarial sessions, by humans applying *different vocabulary*, not by the AI-to-AI exchange itself.

### H2: RLHF in-context sycophancy (moderate support)

Frontier LLMs trained with RLHF on helpfulness are oriented to be helpful within the prompt's premises. When the prompt establishes "this is the Synchronism research program; defend / challenge it," both agents — regardless of role — operate within that frame. The CHALLENGER attacks weak points within the framework but does not exit the framework's premise space.

Support: Standard finding in multi-agent debate literature (Du et al. 2023, ICLR 2025 evaluation showing MAD doesn't consistently beat single-agent baselines). The finding `a2acw-the-actual-discovery.md` cites this literature directly.

### H3: Adversarial framing scope limitation (high support)

Even if both agents are non-sycophantic and not vocabulary-locked, the *task description* of A2ACW emphasizes anti-patterns (rubber-stamp, challenge theater, false verification) — all intra-framework anti-patterns. The protocol's CCH metrics (AFR, CF, EVR, FDI) measure *quality of internal challenge*, not *coverage of external translation*. No protocol element rewards or measures the action "translate this claim out of framework vocabulary and search prior art." So the action doesn't reliably happen.

Support: The 488-line A2ACW protocol specification (per the explorer finding `a2acw-the-actual-discovery.md`) does not include "prior-art translation" as a CHALLENGER duty.

The three hypotheses are not exclusive — they may compound. But H1 and H3 are mechanism-class statements about what *the protocol does and does not measure*. H2 is about training-time priors. Only H2 is in any way addressable by adjusting *which* models are used.

---

## Proposed Successor Experiment: Vocabulary Asymmetry

If the load-bearing failure is vocabulary lock-in (H1) and protocol scope (H3), the natural successor to temporal asymmetry is **vocabulary asymmetry**:

### Design

- **Agent A (PRIMARY-NATIVE)**: Uses framework-native vocabulary freely ("coherence," "C(ρ)," "γ regime," "MRH crossing").
- **Agent B (CHALLENGER-TRANSLATED)**: Forbidden from using framework-native vocabulary. Must restate every PRIMARY claim in standard physics terminology before evaluating it. The translation is performed verbatim and shown to the protocol.
- After translation, Agent B searches prior art **for the translated form**, not the framework-native form.

### Example translation rules

| PRIMARY says | CHALLENGER restates as | Search for prior art on |
|--------------|------------------------|--------------------------|
| "Coherence-conservation gives the Born rule" | "Some additive positive measure on the Hilbert lattice, conserved under unitary evolution, recovers \|ψ\|²" | "derivations of the Born rule from minimal axioms" — finds Gleason 1957 immediately |
| "a₀ = cH₀/(2π) is derived from coherence dynamics" | "a₀ has the form (constants of nature × dimensional combination)" | "MOND acceleration scale coincidences" — finds Milgrom 1983 immediately |
| "Γ = γ²(1−c) captures shared-environment decoherence" | "Two qubits coupled to a common bath with correlation coefficient c have correlated dephasing variance Γ = γ²(1−c)" | "correlated dephasing two-qubit DFS" — finds Palma-Suominen-Ekert 1996 immediately |
| "C(ρ) gives MOND-like galaxy rotation curves" | "There exists a function of one variable mapping baryon density (or acceleration) to a coherence factor in [0,1], with tanh-like saturation" | "MOND interpolation functions ν(g/a₀)" — finds Milgrom's relation immediately |

### Falsifiable prediction

If vocabulary asymmetry catches > 0 of equivalent newly-generated Synchronism claims as reparametrizations *during* the session — before external audit — then H1 and H3 are confirmed as load-bearing.

If vocabulary asymmetry catches at the same rate as baseline A2ACW, the structural cause is deeper (likely H2 / in-context sycophancy at training-time) and the architectural fix has to break the closed-loop a different way (different model families, different RLHF lineages, no shared context).

### Tractability

This is a single-session experimental protocol, less expensive than the temporal-asymmetry experiment because it requires no special model selection. Same model, two different role prompts. Run baseline A2ACW (sessions 1–3) and vocabulary-asymmetry A2ACW (sessions 4–6) on equivalent topics; compare prior-art-surface rate.

It is also *retrospectively testable* on the 6 demoted claims by replaying the original sessions with the modified CHALLENGER prompt.

---

## Implications for the Site

### Honest-assessment-level finding

The framework's principal generative methodology has a structural diagnosis that is sharper than the current site copy. The site currently says (`/research-philosophy`):

> *Two AI agents sharing a training distribution form a closed adversarial loop; they're a syntactic consistency checker, not a discovery engine.*

After this audit, the more accurate statement is:

> *Two AI agents sharing in-context vocabulary form a closed adversarial loop. Sharing training distribution is not the load-bearing problem (both agents have the prior art); sharing vocabulary is — the CHALLENGER role attacks intra-framework consistency, not cross-framework priority.*

This is a methodologically more useful diagnosis because it suggests a tractable fix (vocabulary asymmetry) where "shared training distribution" suggests no AI-only fix.

### A2ACW protocol-level finding

The CCH health metrics (AFR, CF, EVR, FDI) measure *quality of internal challenge*. They do not measure *coverage of external translation*. The 6-of-6 demotion record shows that high-quality internal challenge can run for thousands of sessions while a textbook reparametrization remains undiagnosed. A new metric is needed — call it **TPR (Translation Priority Rate): fraction of claims for which the CHALLENGER has produced an external-vocabulary translation with prior-art search**.

This is a concrete protocol contribution that follows from the audit, independent of whether vocabulary asymmetry experimentally succeeds.

---

## Action: Maintainer

### Site copy update (HIGH)

`/research-philosophy` A2ACW section, currently:

> *Two AI agents sharing a training distribution form a closed adversarial loop; they're a syntactic consistency checker, not a discovery engine.*

→ change to:

> *Two AI agents sharing in-context vocabulary form a closed adversarial loop. The 6-of-6 audited demotions had load-bearing prior art older than any plausible training cutoff (median year ~1996, range 1957–2010s) — both agents had the prior art in training and did not surface it during adversarial exchange. The closed-loop is therefore not a training-distribution-boundary problem but a salience-under-framework-vocabulary problem. Temporal asymmetry (Agent A cutoff N, Agent B cutoff N+5) would have caught 0 of 6 demotions; vocabulary asymmetry (CHALLENGER forbidden framework-native vocabulary, must translate before evaluating) is a more promising redesign and has not yet been tested.*

### `/handling-failure` (MEDIUM)

Add a row to the failure taxonomy table:

| Failure type | Definition | Example | Why it slips past A2ACW |
|--------------|------------|---------|-------------------------|
| Vocabulary-locked reparametrization | Claim is textbook physics under translation, but both agents are operating in framework-native vocabulary and the translation step never happens | Coherence-derived Born rule ≡ Gleason 1957; a₀ = cH₀/(2π) ≡ Milgrom 1983 dimensional combination | CHALLENGER attacks intra-framework consistency, not cross-vocabulary priority. The 6 demoted Validated badges are all of this type. |

### Optional: `/a2acw` page enhancement (LOW)

Add a "Known structural limits" section listing the closed-loop diagnosis (current) and the vocabulary-asymmetry follow-up experiment (proposed). This puts the framework's own self-correction on the page that documents its methodology.

---

## Action: Research (Synchronism repo)

### Back-annotation proposal (HIGH)

File `Research/proposals/a2acw_vocabulary_asymmetry_followup.md` containing:

1. The counterfactual audit (this finding's catch-rate table)
2. The H1/H2/H3 hypothesis ranking
3. The vocabulary-asymmetry experimental design (PRIMARY-NATIVE vs CHALLENGER-TRANSLATED)
4. The TPR (Translation Priority Rate) metric proposal as a CCH addition
5. Retrospective replay plan on the 6 demoted claims

This is a candidate negative-methodology preprint for the AI-for-science / Nature Methods scope. The temporal-asymmetry proposal is one tested branch; the vocabulary-asymmetry proposal is the empirically motivated successor.

---

## Open Threads

1. **Retrospective replay**: would replaying the original A2ACW sessions on the 6 demoted claims with a CHALLENGER-TRANSLATED prompt surface the prior art? This is the cheapest decisive test of H1. The original session transcripts should exist in the Synchronism research archive — running them through a modified-CHALLENGER replay is roughly 6 sessions of compute.

2. **Cross-framework replication**: vocabulary lock-in predicts a domain-general failure mode. Does the same vocabulary-asymmetry remedy improve catch-rates on other AI-driven research programs (drug-discovery LLM loops, policy analysis multi-agent setups)? If yes, the contribution generalizes beyond physics.

3. **The N=1995 corner case**: the audit shows a small temporal-asymmetry window (N=1995, N+5=2000) that would catch claim 5 (PSE 1996). Is there any practical setup where this matters? Probably not — but if the answer is "in a domain with rapid prior-art accumulation in a 5-year window," the temporal-asymmetry design could be a complement to vocabulary asymmetry, not a substitute.

4. **TPR as a published metric**: independent of whether vocabulary asymmetry works as an experimental remedy, the TPR metric (Translation Priority Rate) is a useful instrument for evaluating any AI adversarial collaboration on theoretical science. It is a one-paper deliverable.

5. **The framework as canary**: the 6/6 demotion record is, for AI-for-science methodology, a small but unusually well-documented dataset. Other AI research programs likely have similar reparametrization rates but lack the audit infrastructure to count them. The contribution of the Synchronism site to AI-methodology research is the audit infrastructure as much as the negative result. This finding adds: the audit infrastructure has now eliminated one candidate fix (temporal asymmetry) and identified a more promising one (vocabulary asymmetry).

---

## Verdict

The temporal-asymmetry remedy proposed in `a2acw_temporal_asymmetry_redesign.md` would catch 0 of 6 documented Validated→Reparametrization demotions for any plausible deployment configuration. The proposed remedy is structurally incapable of catching the failure mode the framework has documented.

The audit re-points the diagnosis: shared-vocabulary, not shared-training-distribution, is the load-bearing closed-loop mechanism. Vocabulary asymmetry — forbidding the CHALLENGER from framework-native vocabulary and forcing translation before evaluation — is the empirically motivated successor experiment. It is single-session tractable and retrospectively testable on the 6 demoted claims without new physics input.

The temporal-asymmetry proposal is now a falsified candidate, which is exactly what the proposal asked the audit to determine. That is the productive failure: a candidate fix eliminated, a sharper diagnosis surfaced, a new experiment scoped.
