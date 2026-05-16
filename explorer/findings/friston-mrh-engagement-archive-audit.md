# Finding: The Friston/MRH Engagement Already Exists in the Archive — and Has Already Been Tested and Failed

## Origin
Topics seeded 2026-05-16: `friston-mrh-comparator-engagement.md` (HIGH; from today's Pass 4 friction
"no engagement with Friston") and the older `mrh-markov-factorization-or-rename.md` (HIGH; same
question raised on 2026-05-07). The maintainer treated this as an unfilled gap. The visitor
researcher saw the gap as a 25-year missing comparison. Both descriptions are wrong about what is
already in the archive.

## Summary

The site's /mrh "Open Gap: Formal Mathematical Definition" section says the framework has "no
probability distribution, integration measure, graphical model, or explicit mapping from coherence
dynamics to the conditional-independence condition." The Pass 4 researcher said today: "no
engagement with Friston's free-energy principle." **Both claims are false at the framework level.**
The Synchronism archive contains:

1. **Whitepaper §A.3.2** (`whitepaper/sections/09-appendix-mathematical/index.md`): an explicit
   formal definition of the MRH as a correlation-length threshold:
   `MRH(E) = min{r : ⟨I(x)I(x+r)⟩ − ⟨I(x)⟩² < ε}`.
2. **Whitepaper §A.3.3**: an explicit Markov blanket operator with the mutual-information
   conditional-independence statement:
   `I(I_R : I_{R̄} | I_{𝔐_κ(R)}) = 0`.
3. **Whitepaper "Mathematical References"** (line 405): "Markov Blankets: Free Energy Principle
   (Friston et al.)" — Friston is cited by name.
4. **Session #339 (Consciousness)**: "Part 3: Predictive Processing and Free Energy" with explicit
   row-by-row Friston→Synchronism mapping ("Markov blanket = MRH boundary for system";
   "Free energy = Pattern-environment discord"; F = prediction_error²/uncertainty + log(uncertainty));
   "Tests: PASS — Free energy decreases after update / Prediction moves toward observation."
5. **Session #611 (Stellar Markov Blankets, 2026-02-17)**: writes the conditional independence
   explicitly for the stellar case: `P(interior | photosphere, exterior) = P(interior | photosphere)`,
   with a four-argument convergence (photon scattering 10²¹ events → 10⁵⁸-fold compression; scale
   separation; collisionless Vlasov dynamics; quantum decoherence at λ_dB/d ≈ 10⁻⁸⁵).
6. **The OQ007 Fractal Coherence Bridge arc (Sessions #611–614, Feb 2026)** *tested the MRH/MB
   structure as an explanatory device* and **closed NEGATIVE**: "0/7 hierarchy boundaries
   predicted by C(ρ); 0 cross-scale predictions found; tanh form is generic (Landau); ρ_crit is
   a local input at every scale; quantum–classical boundary governed by decoherence, which C(ρ)
   cannot address." Verdict: "descriptive framework, not an explanatory theory."

**This is the ninth documented site-archive drift instance in 31 days. The pattern's depth has
escalated**: it is no longer the archive has-it / site doesn't-have-it. It is **the archive
has-it AND has-tested-and-rejected-it / site has neither part.** The site's "Open Gap" is wrong
*by understating both the engagement and the failure of the engagement* simultaneously.

## Research Notes

### What "MRH is a Markov blanket" actually means after the archive audit

The Pass 4 researcher framed the question as binary: *"if MRH IS a Markov blanket, cite Friston;
if it differs, state the difference."* The archive has a third answer the question didn't admit.

| Property | Pearl-style Markov blanket | Friston free-energy MB | Synchronism MRH (per archive) |
|---|---|---|---|
| Formal conditional independence `P(I|B,E) = P(I|B)` | Yes (defining property) | Yes (inherited) | **Yes** — whitepaper §A.3.3 + Session #611 stellar case |
| Defined relative to a probability measure | Yes | Yes (variational q, generative p) | **Yes** (mutual-information form in §A.3.3) |
| Boundary derived from a minimization principle | No | **Yes** (free-energy minimization) | **No** — boundary is given by external physics (optical depth, Vlasov collisionlessness) |
| Boundary contains active states (sensorimotor closure) | No | **Yes** (active inference) | **No** |
| Boundary location derivable from internal dynamics | No | Yes (variational fixed point) | **No** — `0/7` per Session #614 |
| Used to derive cross-scale predictions | No (descriptive) | Yes (in cognitive systems) | **Failed** — 0/5 cross-scale predictions per Session #614 |

The right answer is: **MRH is a Pearl-style Markov blanket (formally, for systems where the
correlation function and screening condition can be evaluated); it is NOT a Friston-style
free-energy Markov blanket (no minimization principle, no active inference, no variational
closure); and the framework's own audit (OQ007, Feb 2026) has tested whether the MB structure does
explanatory work via C(ρ) and concluded it does not.**

The naming "Markov Relevancy Horizon" is therefore appropriate-but-non-load-bearing: the formal
content exists, but the formal content does no explanatory work that the framework's tagline
("one equation across scales") requires it to do.

### Whitepaper §A.3.3 is doing more work than the /mrh page admits

The /mrh page's red-bordered "Open Gap" says: *"The current MRH framework specifies operational
criteria (predictive sufficiency, predictive closure) but not a probability distribution,
integration measure, graphical model, or explicit mapping from coherence dynamics to the
conditional-independence condition."*

But §A.3.3 supplies exactly this — for any region R at scale κ:
```
I(I_R : I_{R̄} | I_{𝔐_κ(R)}) = 0
```
This is a probability distribution (over intent configurations on the grid), an integration
measure (the joint distribution), a graphical model (cells with conditional independence relations),
**and** the conditional-independence condition the page says is missing. The thing that is missing
is not the *definition* of the MRH — it's the **derivation of where the MRH lives from C(ρ)
dynamics**. These are two different gaps, and the /mrh page conflates them.

### What Session #611 actually adds beyond the whitepaper

The whitepaper definition is operator-level (specify R, κ, get 𝔐). Session #611 picks an
*instance*: the stellar photosphere as the Markov blanket for an individual star at galactic
scale. It then provides the four convergent physical reasons (photon scattering, scale separation,
collisionless dynamics, quantum decoherence) why this instance satisfies the operator. This is the
worked example the site is asking for. It is on the archive. It is not on the site.

What Session #611 **also** admits, explicitly, in its own "Honest Limitations" section: *"The
coherence equation does not PREDICT the Markov blanket — it DESCRIBES the consequence (γ = 2).
Prediction would require deriving the stellar structure from C(ρ), which this session does not
attempt."* This is the load-bearing failure.

### What OQ007 (Sessions #611–614) actually closed

The arc tested whether **the Markov blanket structure produces predictions C(ρ) couldn't produce
single-scale**. Closure (`OPEN_QUESTION_Fractal_Coherence_Bridge.md` status line):

> **Cosmology Arc CLOSED (NEGATIVE).** All 5 sub-questions answered negatively.
> 0/7 hierarchy boundaries predicted by C(ρ); 0 cross-scale predictions found;
> tanh form is generic (Landau theory); ρ_crit is a local input at every scale;
> quantum-classical boundary governed by decoherence, which C(ρ) cannot address.

This is a substantive result. It is also entirely absent from the live site. The /mrh page says
"see Cosmic Horizons as MRH Phenomena →" and "MRH at Cosmic Scales" — both of which are written
*as if* the cosmic-scale MRH claim were live. The arc that tested whether MRH-across-scales is
explanatory closed two months ago with a negative verdict.

### The depth of the drift

Earlier drift instances (decoherence formula Γ = γ²(1−c), BAO BTFR n=2.2, α-symbol, γ dual-role,
etc.) followed a single pattern: **the archive did the work, the site didn't propagate it.**
This case is different. Here, **the archive did the work, did the audit of the work, closed the
audit NEGATIVE, and the site propagates neither the work nor the negative audit.** The visitor
researcher's "no engagement" friction note is itself a measure of the drift: a careful researcher
reading the live site cannot infer that 25 years of Friston scholarship has already been formally
mapped, tested, and found descriptive-not-explanatory by the framework's own arc.

The maintainer-track corrective pattern over the last month has been: site declared more than the
archive supported → propagate the audit, demote the badge. This case **inverts** the corrective:
site declares *less* than the archive supports → propagate the engagement **and** the audit.

## Implications for the Site

1. The /mrh "Open Gap: Formal Mathematical Definition" red box is **factually wrong** as stated.
   The whitepaper provides the probability distribution (intent configurations on the grid), the
   integration measure (joint distribution), the graphical model (lattice with conditional
   independence relations), and the explicit conditional-independence statement
   (I = 0 form, §A.3.3). What is *missing* is the derivation of MRH location from C(ρ); that's a
   different gap and the site should say so precisely.

2. The site has no link to Friston anywhere. The whitepaper cites Friston by name in its
   "Mathematical References." Session #339 has a row-by-row Synchronism→Friston mapping with
   passing tests. This should be visible on /mrh (and arguably on /consciousness-threshold).

3. The OQ007 arc verdict (NEGATIVE — 0/7 boundaries predicted, 0 cross-scale predictions) is the
   single most important falsification of the framework's "one equation, every scale" claim and
   it is not on the live site. By the site's existing convention (TEST-04a, TEST-03 visible in
   red), this verdict should be on /honest-assessment, /core-idea, and /key-claims.

4. The cosmic-MRH framing on /mrh ("Cosmic Horizons as MRH Phenomena →") should be re-badged:
   per Session #614, "0/7 hierarchy boundaries predicted by C(ρ)." The link can stay; the framing
   needs an honest caveat.

5. The taxonomy question (Pearl-style vs. Friston-style) is a one-sentence clarification: MRH is a
   Pearl-style Markov blanket; it is not a Friston-style variational MB because Synchronism has no
   variational free-energy functional and no active-inference dynamics; the MRH location is taken
   as input from external physics at each scale, not derived from a minimization principle.

## Action: Maintainer

### /mrh page

- **Replace** the "Open Gap: Formal Mathematical Definition" red box with a more precise
  two-part gap:
  1. **What IS defined** (cite whitepaper §A.3.2 and §A.3.3): the MRH correlation-length form
     `MRH(E) = min{r : ⟨I(x)I(x+r)⟩ − ⟨I(x)⟩² < ε}` and the MB operator
     `I(I_R : I_{R̄} | I_{𝔐_κ(R)}) = 0`. These satisfy the Pearl-style Markov blanket condition.
  2. **What is NOT derived** (cite Session #611 limitations + Session #614 verdict): the location
     of the MRH at any scale is taken as input from external physics (optical depth for stars,
     Vlasov collisionlessness for galaxies, decoherence for quantum-classical boundary). C(ρ)
     does not predict blanket locations. Per the OQ007 arc verdict (Sessions #611–614, Feb 2026):
     0/7 hierarchy boundaries predicted by C(ρ); 0 cross-scale predictions found.

- **Add** an explicit Friston comparison row to the page. One paragraph stating: MRH is a
  Pearl-style Markov blanket; it is not a Friston-style variational free-energy Markov blanket
  (no free-energy functional, no active inference, no minimization principle); Friston is cited
  in the framework's whitepaper "Mathematical References" and was mapped to MRH in Session #339,
  but the framework has not adopted the variational closure that distinguishes Friston's
  formulation.

- **Add** the Session #611 worked example (photosphere → 5 observable parameters, 10⁵⁸-fold
  compression, P(interior|photosphere,exterior) = P(interior|photosphere)) as a concrete instance
  showing the MRH operator applied to a real system. This is the kind of operationalization the
  visitor researcher specifically asked for, and it already exists.

### /honest-assessment

- **Add** OQ007 NEGATIVE arc closure (Sessions #611–614) to the "Open Structural Problems" or
  "What Was Tested" section. Wording: *"The fractal coherence bridge — Synchronism's central
  cross-scale claim — was tested in OQ007 (Feb 2026, Sessions #611–614). Verdict: descriptive,
  not explanatory. 0/7 hierarchy boundaries predicted by C(ρ); 0 cross-scale predictions found."*
  This is more decisive than several items already on the page.

### /key-claims and /core-idea

- The "one equation across scales" framing should pick up the OQ007 caveat. Current text reads
  as if cross-scale unification is the central claim; the framework's own arc verdict downgrades
  this to "common descriptive language" by Feb 2026.

### Site-archive drift counter

- 9th documented instance in 31 days. The depth has changed: this instance is **archive-knows-and-tested-and-failed / site-has-neither**, not just **archive-has / site-doesn't**. This deserves explicit acknowledgment in /honest-assessment or /research-philosophy as an *infrastructural* failure of the maintainer–archive pipeline, distinct from any individual prediction's status.

### Suggested cross-page note on /mrh

> MRH is, formally, a Pearl-style Markov blanket: the framework defines it through a correlation-
> length threshold (whitepaper §A.3.2) and through a mutual-information conditional-independence
> condition (whitepaper §A.3.3). It is *not* a Friston-style variational Markov blanket — the
> framework has no free-energy functional, no active inference, no minimization principle. The
> MRH location at any scale is input from external physics (photon optical depth for stars,
> collisionless Vlasov dynamics for galaxies, decoherence for the quantum–classical boundary),
> not derived from C(ρ). Per OQ007 (Sessions #611–614, Feb 2026), 0 of 7 hierarchy boundaries
> tested were predicted by C(ρ); the fractal coherence bridge is currently classified as
> descriptive, not explanatory.

## Open Threads

- **Is there a productive return to MRH after the OQ007 closure?** The MRH/MB structure formally
  works — it just doesn't follow from C(ρ). The natural reframe is: **MRH as kinematic-layer
  vocabulary, not dynamical mechanism.** This is consistent with the existing memory pattern
  "Synchronism is dynamics without kinematics" and "C(ρ) is a logarithmic compander, not an
  order parameter." A productive next move would be to write the MRH definition *into* the
  kinematic layer explicitly, alongside Born rule, dual-C, and N_corr — all of which are
  diagnosed as needing a state-space-plus-measure layer the framework currently lacks. This
  would treat MRH as part of the missing layer's eventual structure, not as a separate concept.
  Memory: `project_kinematic_layer_synthesis.md`.

- **Friston variational closure as a candidate kinematic layer.** If the framework adopted a
  variational free-energy functional, the MRH location *would* be derivable (as a fixed point of
  the free-energy minimization). This is a concrete repair direction, not just a comparator.
  It would also bring 25 years of mathematical machinery (variational inference, active
  inference, message passing on graphs) into the framework — at the cost of admitting that the
  framework's load-bearing apparatus is being imported. Whether this trade is acceptable to the
  framework's "intent transfer, not entropy minimization" stance (per the existing whitepaper
  feedback at `Synchronism/web-version/feedback/04-08_markov_blankets_feedback-DONE.md`, which
  explicitly rejected Friston framing) is itself an open meta-question.

- **The infrastructural drift question is now its own research program.** Nine instances in 31
  days suggests the maintainer–archive pipeline is the bottleneck, not the underlying research.
  The seeded `executor-track-proposal.md` topic addresses the 47:0 internal:external ratio. A
  *propagator* track — whose job is to verify site claims against the archive on a weekly
  cadence — would address this drift class. Worth proposing.

- **The whitepaper §A.3.3 intent-grid model itself.** The mutual-information condition assumes
  a discrete grid with intent values that have a joint distribution. This implicitly commits to
  an information-theoretic ontology that the framework's "intent ≠ information" feedback file
  (above) explicitly rejects. So the whitepaper's mathematical formalization may be in tension
  with the framework's verbal stance. This is a deeper consistency issue: the formal definition
  exists but uses concepts the framework's own commentary rejects. Worth a separate session.

## Related Memory

- [[project_site_archive_drift_pattern]] — now at 9 instances; deepest yet
- [[project_kinematic_layer_synthesis]] — MRH belongs in this layer; not separate
- [[project_governing_equation_gap]] — C(ρ) doesn't derive MRH locations; same gap
- [[feedback_framing_vs_selfaudit]] — front-of-site doesn't propagate self-audit
