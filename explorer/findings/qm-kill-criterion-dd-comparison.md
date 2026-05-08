# QM Kill Criterion vs DD Literature: The Criterion Is Logically Vacuous

## Origin

Topic from queue: `qm-kill-criterion-dd-specification.md` (seeded 2026-05-08 by maintainer).
Visitor Pass 4 (2026-05-08) explicitly flagged that the criterion does not engage VKL99,
UDD, CPMG, or CDD and therefore "cannot kill anything." Back-annotation proposal
`qm_kill_criterion_dd_gap.md` filed same day. This finding closes that gap.

## Summary

The Key Claims kill criterion ("design a noise environment where Synchronism's resync
outperforms isolation but standard decoherence theory predicts it doesn't") is **logically
unsatisfiable given the framework's own published commitments**. The dedicated
`/decoherence-mrh` page states explicitly: *"The decoherence timescales it predicts are the
same as standard theory (because the underlying physics is the same)."* If τ_D is identical
to standard theory by stipulation, then T₂ under any DD pulse protocol — derived from τ_D and
the pulse-sequence filter function — is also identical by construction. The kill criterion
asks for a regime where the two predictions disagree; the framework has explicitly disclaimed
the existence of such a regime. **The kill criterion is vacuous, not unfalsifiable-pending-
specification.** Specifying the bath, pulse sequence, and predicted T₂ ratio does not save it,
because every such specification will return Synchronism prediction = standard DD prediction
by the framework's own decoherence-mrh stipulation.

## Research Notes

### What the site says, in its own words

Three site pages, three different framings:

**`/decoherence-mrh`** (concedes calculational equivalence):
> "Synchronism's reframing of decoherence through the MRH is a conceptual contribution, not a
> calculational one. The decoherence timescales it predicts are the same as standard theory
> (because the underlying physics is the same). What it adds is a *principle* for where to
> draw the line — the MRH as a natural boundary rather than an arbitrary cutoff."

**`/key-claims` Claim #1** (advertises a kill criterion):
> "Design a noise environment where the synchronization model predicts resync outperforms
> isolation, but standard decoherence theory predicts it doesn't. Run both protocols on the
> same qubit platform. If isolation wins uniformly, the synchronization ontology adds nothing."

**`/quantum-predictions`** (Protocol #6 — QC Coherence Time):
> "T₂ should scale inversely with the rate of environmental N_corr coupling."

These three statements cannot all be true. If decoherence timescales equal standard theory
(decoherence-mrh), then the Protocol #6 prediction reduces to "T₂ scales inversely with
environmental coupling rate" — which is the trivial Bloch-Redfield result T₂⁻¹ ∝ Γ_φ. And
the Claim #1 kill criterion asks for a regime where Synchronism and standard theory predict
different T₂ — but decoherence-mrh has already foreclosed any such regime.

### The standard DD machinery, briefly

Dynamical decoupling protocols (Viola-Knill-Lloyd 1999; Carr-Purcell-Meiboom-Gill; Uhrig
2007; Khodjasteh-Lidar 2005) suppress dephasing by applying timed π-pulses that refocus the
qubit's phase. The decoherence under N pulses is computed exactly via the **filter function**
F_N(ω, τ): given the bath noise PSD S(ω), the dephasing rate is
∫ dω S(ω) F_N(ω, τ) / ω².

For 1/f^α noise (the dominant decoherence channel for superconducting qubits and many spin
systems), this gives T₂(CPMG, N) ∝ N^γ_e with γ_e = α/(α+1). Bluhm et al. measured
γ_e = 0.72 ± 0.01 for GaAs spin qubits, consistent with 1/f² (Bluhm 2011, PRL 108 086802).
For UDD with hard-cutoff baths, T₂ ∝ N^(N/(N+1)) — even better scaling.

The point: **the entire DD literature derives T₂ from a single object — the bath PSD S(ω) —
and the geometry of the pulse sequence**. There is no second prediction. If a framework
agrees on S(ω) (as Synchronism explicitly does on /decoherence-mrh), it agrees on every DD
T₂ for every protocol.

### Why "specifying the protocol" cannot rescue the criterion

The topic file asked: derive T₂ from MRH dynamics, compare to Bloch-Redfield + CPMG. If
they're identical → reparametrization. If not → specify the protocol.

But the framework has already foreclosed the second branch. Per /decoherence-mrh:

- τ_D ∝ 1/(rate of N_corr growth)  [framework's stated formula]
- "rate of N_corr growth" = environmental coupling = the same dephasing rate Γ_φ in Bloch-Redfield
- The decoherence timescales *are the same as standard theory* (verbatim quote)

Therefore: the framework's MRH-derived T₂ under DD = standard T₂ under DD, for any
specification of (system, bath, pulse sequence, N). Any "predicted ratio T₂(resync)/T₂(isolation)
that Synchronism gives = ratio that Bloch-Redfield + filter function gives. There is no
discriminating regime to find, because the framework has explicitly given up calculational
independence in exchange for "interpretive overlay."

### The deeper structural point

The "resync outperforms isolation" framing sounds like a falsifiable engineering prediction.
It is not. It is a vocabulary mapping:

| Synchronism phrase | Standard QIP equivalent |
|---|---|
| "isolation" | free evolution / passive Faraday cage |
| "resync" | π-pulse-induced phase refocusing |
| "phase desynchronization at MRH boundary" | dephasing under bath coupling |
| "rate of N_corr growth" | dephasing rate Γ_φ (= integral of bath PSD ⋅ filter function) |
| "synchronization ontology adds something" | DD beats no-DD, observed in every QIP lab since 2003 |

Each row is a **vocabulary translation** of an established 1958–2007 result. The translation
is internally consistent. It produces no new prediction, by the framework's own admission.

### What would make the criterion non-vacuous

For a real kill criterion, the framework would need to *explicitly contradict* /decoherence-mrh
and propose a non-standard MRH dynamics that produces a T₂ scaling different from Bloch-Redfield.
Concretely:

(i) A different scaling exponent — e.g., T₂(CPMG, N) ∝ N^β with β ≠ α/(α+1) for 1/f^α noise;
(ii) A bath-coupling regime where MRH-derived T₂ deviates from Bloch-Redfield by some
specific predicted factor (with quantitative threshold);
(iii) A novel pulse sequence whose MRH filter function differs from the standard DD filter function.

None of these has been derived in 3,308 sessions. None could be derived without first
retracting /decoherence-mrh's stipulation. The framework has chosen interpretive overlay over
calculational independence, and this choice is mutually exclusive with a falsifiable T₂
kill criterion.

### Why this is the same pattern as Born rule, MOND, chemistry

The structural diagnosis is becoming repetitive across audits:

- **Born rule** (`/born-rule`): "Reparametrization — reproduces |α|² via coherence conservation"
  — but the framework does not derive Born and does not flag it as open. Same shape: claim
  reproduces a standard result without independent calculational basis.
- **MOND a₀ = cH₀/(2π)**: "Strongly Supported" badge on a 1983 dimensional coincidence noted
  by Milgrom and rederived by McCulloch/Verlinde/Smolin. Same shape: claim reproduces a
  standard result.
- **Chemistry r=0.982**: Calibration set, template bias acknowledged, no blind out-of-sample
  test. Same shape: appears to predict, actually fits training data.
- **QM kill criterion**: Same shape — "predicts resync beats isolation" while explicitly
  stipulating identical decoherence rates. Reproduces DD literature in different vocabulary.

The pattern is: claim a prediction, then in the derivation page concede the framework's
calculational machinery is identical to the standard one. The "prediction" lives in the
vocabulary, not in the equations.

## Implications for the Site

### The verdict

The QM kill criterion is **vacuous** (logically unsatisfiable given the framework's own
commitments), not "unfalsifiable-pending-specification." It cannot be rescued by adding a
bath spectral density, pulse sequence, or predicted T₂ ratio, because the framework has
already stipulated identical decoherence timescales on /decoherence-mrh.

The honest classification: **Reparametrization of standard DD theory in MRH vocabulary.** The
QM claim itself reduces to a vocabulary swap with decoherence-as-N_corr-growth, which is
isomorphic to environmental-coupling-as-dephasing-rate.

### How the site framing should change

1. **Retire the resync/isolation kill criterion** on `/key-claims` Claim #1. As written, it is
   not falsifiable; as specified to be falsifiable, it would require retracting the
   /decoherence-mrh stipulation. Replace with:

   > "The QM-as-synchronization claim is currently a vocabulary reframing of standard
   > decoherence theory. The framework's own /decoherence-mrh page concedes that decoherence
   > timescales equal those of standard theory. A genuine kill criterion would require
   > deriving a T₂ scaling under DD that differs from the standard filter-function result —
   > something the framework has not attempted. Until such a derivation exists, the claim is
   > **Untested + foundationally incomplete** (Born rule gap, no independent T₂ prediction)."

2. **Update Claim #1's badge** from its current label to **Untested + Foundationally
   Incomplete**. The compound badge is honest: the framework has not derived Born, has not
   derived a T₂ scaling that differs from standard DD, and has explicitly stipulated
   calculational equivalence with standard decoherence theory.

3. **Update `/decoherence-mrh`'s "Honest Assessment" section** to make the calculational
   equivalence implication visible: *"This concession means any T₂ prediction under
   dynamical decoupling pulse sequences (CPMG, UDD, CDD) is identical to standard Bloch-
   Redfield + filter function predictions. The 'resync outperforms isolation' kill criterion
   on Key Claims is therefore vacuous as written — it asks for a regime that this page has
   already foreclosed."*

4. **Acknowledge the DD literature explicitly** somewhere on `/quantum-predictions` Protocol
   #6. The current text "T₂ should scale inversely with environmental N_corr coupling rate"
   reduces to standard Bloch-Redfield T₂⁻¹ ∝ Γ_φ. The protocol is therefore untested-but-
   trivial, not novel. A note: *"Engagement with the dynamical decoupling literature
   (Viola-Knill-Lloyd 1999, CPMG, UDD) is required before this protocol can be classified as
   a Synchronism-specific test."*

### Action: Maintainer

Three concrete site changes, in priority order:

- **`/key-claims` Claim #1** — Replace resync/isolation kill criterion with an honest
  acknowledgment that the framework's calculational machinery is identical to standard
  decoherence theory; downgrade badge to "Untested + Foundationally Incomplete."

- **`/decoherence-mrh`** — Add a paragraph in Honest Assessment noting that the calculational-
  equivalence stipulation forecloses any T₂ kill criterion under DD; cite VKL99 as the
  literature this prediction would have to engage.

- **`/quantum-predictions` Protocol #6** — Note that Bloch-Redfield + DD already provides
  the standard prediction; the framework needs to explicitly differ from this to qualify as
  a Synchronism-specific test.

## Open Threads

1. **Is there *any* MRH-specific prediction that escapes the calculational-equivalence
   stipulation?** /decoherence-mrh stipulates equality for *timescales*. But it adds the MRH
   *threshold* (γ ≈ 1.5) as a "principle for where to draw the line." Could the threshold
   give a discrete operational consequence (e.g., a sharp transition in some experimentally
   accessible quantity at γ = 1.5) that standard decoherence — which has no threshold — does
   not predict? Standard decoherence is a continuous decay; a true threshold (if it exists)
   would be a genuine difference. But the burden is on the framework to derive what
   experimental quantity exhibits this threshold — and that has not been done.

2. **Spatially correlated decoherence — the only viable route**. The 2026-04-12 finding
   (`novel8-mipt-upgrade-from-trivial-to-deep.md`) identified that *spatially* correlated
   noise changes MIPT information-protection universality (q^(-2/3) vs q^(-1/2)). This is
   a place where standard DD literature engages incompletely — DD is largely studied for
   single qubits in 1/f baths, not for many-qubit MIPT ensembles in spatially correlated
   baths. If the framework is to have a non-vacuous QM kill criterion, MIPT-correlated-noise
   is the most plausible regime. But the Key Claims criterion is single-qubit framed
   ("design a noise environment, run on the same qubit") and would have to be entirely
   restructured to engage this frontier.

3. **The Born rule open gap is the load-bearing issue.** Without Born, no quantum prediction
   the framework makes is operationally meaningful — probability statements are not
   defined. The DD kill criterion becomes vacuous *and* the framework cannot make any
   probability prediction in the usual sense. Engaging Zurek envariance, Carroll-Sebens
   self-locating uncertainty, or Deutsch-Wallace decision theory is the prerequisite for
   any genuine QM kill criterion. The site should foreground Born derivation as the central
   open question, not the resync/isolation framing.

4. **A2ACW blind spot — the DD literature is not in the corpus.** That two AI systems
   could spend 3,308 sessions advertising a "resync outperforms isolation" prediction without
   noting that this is the textbook description of every DD experiment since 2003 is a clean
   demonstration of the methodology gap the site itself acknowledges (Pass 4 2026-05-08:
   "an LLM-driven dialogue is unlikely to spontaneously surface the specific 2024–2025
   observational fronts that distinguish theories, because those fronts sit at the edge of the
   training distribution"). The DD literature is *not* edge-of-training — it is core
   physics. If A2ACW missed this, what else has it missed? This is fuel for the
   `a2acw-out-of-distribution-validation.md` topic.

## References

- Viola, Knill, Lloyd (1999). *Dynamical Decoupling of Open Quantum Systems*. PRL 82, 2417.
- Uhrig (2007). *Keeping a Quantum Bit Alive by Optimized π-Pulse Sequences*. PRL 98, 100504.
- Khodjasteh, Lidar (2005). *Fault-Tolerant Quantum Dynamical Decoupling*. PRL 95, 180501.
- Bluhm et al. (2011). *Scaling of Dynamical Decoupling for Spin Qubits*. PRL 108, 086802.
  (Empirical T₂ ∝ N^0.72 confirms filter-function prediction for 1/f² noise.)
- Synchronism site: `/decoherence-mrh`, `/key-claims`, `/quantum-predictions`
  (verbatim quotes above).
- Visitor Pass 4 (2026-05-08): identified the kill-criterion / DD gap.
- Synchronism research repo: `Research/proposals/qm_kill_criterion_dd_gap.md` (2026-05-08).
