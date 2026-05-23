# Finding: TEST-04a Mechanism-Class Preprint — Draft Outline + EFTofLSS Audit

## Origin

Topic `test04a-mechanism-class-preprint-draft.md` (seeded by maintainer 2026-05-23,
HIGH priority, "3 weeks blocked"). All four visitor personas today asked variants
of "has TEST-04a been written up?" The maintainer also filed a proposal
`eftofls_closes_test04a_parameter_space.md` to the Synchronism research repo
arguing that EFTofLSS analyses provide a second, independent closure of the
TEST-04a parameter space.

## Summary

**Two findings, one draft, one critique.**

1. **EFTofLSS audit (critique of the maintainer's "doubly closed" framing).** The
   maintainer's proposal claims EFTofLSS analyses provide *independent* closure of
   the TEST-04a parameter space beyond the sign reversal. This is overstated. The
   DESI DR1 Full-Shape pipeline (Adame et al. 2024, arXiv:2411.12021) is *itself*
   an EFTofLSS-class analysis (one-loop perturbation theory with counterterms);
   the "1-2σ consistency with ΛCDM" is DESI's own conclusion using this pipeline,
   not a separate reanalysis. The DESI abstract states results "are in agreement
   with the ΛCDM model based on general relativity with parameters consistent
   with those from *Planck*." There is no "EFTofLSS-derived enhancement to be
   explained" — the EFTofLSS analysis is what produces the consistent-with-ΛCDM
   result. The preprint should therefore frame EFTofLSS as the *standard analysis
   methodology* (the baseline against which Synchronism predicted suppression),
   not as an *additional closure mechanism*.

2. **Preprint scope clarification.** The transferable falsification claim is
   narrower than "all monotonic-suppression coherence mechanisms." What DESI DR1
   rules out at 2.4σ is *Synchronism Session 107's specific calibrated
   amplitude* (10-12% fσ₈ suppression at z = 0.5-0.7 with a stipulated
   redshift-dependence pattern). A weaker suppression in the same functional
   class — say 2-3% — would not be ruled out by current DR1 precision (combined
   ~5%). The honest transferable claim is "monotonic-coherence-suppression
   models calibrated to produce ≥10% fσ₈ suppression at z ~ 0.5 are ruled out
   at >2σ by DESI DR1." That is publishable and citable; "all suppression
   mechanisms are ruled out" is not.

3. **Preprint draft below.** Title, abstract, section outline, and recommended
   data analyses for a 2-page letter or 4-6 page short paper.

## Part A: The EFTofLSS Audit

### What the maintainer's proposal claims

From `eftofls_closes_test04a_parameter_space.md` (filed 2026-05-23):

> "EFTofLSS + ΛCDM fits explain DESI DR1 fσ₈ excess at 1-2σ — the enhancement
> over the linear-theory ΛCDM prediction is within the systematic uncertainty
> budget of the EFT one-loop corrections."

This sentence has a subtle but important framing problem. There is no "excess
over linear-theory ΛCDM" that needs separate EFTofLSS resolution. The DESI DR1
pipeline applies one-loop EFT counterterms by default; what comes out of that
pipeline is what people compare to Planck-ΛCDM (which is also analyzed with EFT
or equivalent perturbative methods). DESI's combined σ₈ = 0.841 ± 0.034 vs
Planck σ₈ = 0.8133 ± 0.0050 is ~0.6σ above Planck — i.e. DESI sees no
significant tension with Planck-ΛCDM.

### What is actually true

- **DR1 combined fσ₈** (using the Full-Modeling pipeline, which is EFTofLSS-class):
  consistent with Planck-ΛCDM at <1σ on the combined fit.
- **DR1 per-bin LRG1** (z=0.51): 1.16 ± 0.13 of the Planck-ΛCDM fiducial — a
  ~1.2σ per-bin upward fluctuation, statistically modest.
- **Synchronism Session 107**: predicted fσ₈ at LRG1 = 0.418, i.e. 0.88 of the
  Planck-ΛCDM fiducial. The 2.4σ tension is between Synchronism's *suppression*
  and DESI's *consistent-with-or-slightly-above ΛCDM* result.

So the right statement for a preprint:

> "DESI DR1, analyzed with EFTofLSS-class one-loop perturbation theory, finds
> structure growth consistent with Planck-ΛCDM at the combined level. Session
> 107 predicted structure growth ~10% below Planck-ΛCDM at z = 0.5-0.7. The
> resulting 2.4σ tension on σ₈ disfavors the suppression mechanism at its
> Session-107-calibrated amplitude."

This is the same epistemic content as "doubly closed" but without the
implication of two independent closures. There is one closure: the DR1 data
disfavors the predicted suppression amplitude. EFTofLSS is the analytical
method, not an additional argument.

### Where EFTofLSS does add to the preprint

There is one valid EFTofLSS argument that the maintainer's proposal gestures
at but doesn't quite land:

- **EFTofLSS counterterms parametrize generic IR-safe modifications to the
  matter power spectrum.** A coherence-modulated mechanism that produces a
  *scale-independent* modification to the growth rate at long wavelengths would
  enter as a renormalization of the linear growth factor f(z) — a quantity
  EFTofLSS measures directly. If such a modification existed at the >10% level
  it would show up in DESI DR1.
- **A scale-dependent modification** (e.g., one that mimics matter-radiation
  equality shifts) could in principle hide partly in counterterm degeneracies.
  But Synchronism Session 107's mechanism (G_local/G_global ratio applied
  uniformly across scales) is the scale-independent kind, which EFTofLSS does
  cleanly constrain.

So the valid framing is: "EFTofLSS pipelines have full discriminating power
against scale-independent growth-rate modifications. The mechanism Session 107
proposes is scale-independent. Therefore DR1's EFTofLSS analysis directly
tests it, and the test fails."

This is a single statement of one closure, not a "doubly closed" pair.

## Part B: Mechanism-Class Scope Clarification

### What Pass 4 said today

> "Models in which a coherence variable monotonically suppresses structure
> growth are ruled out by DESI DR1 to at least the 2σ level."

### What Session 107 actually predicted

Per the executed test (2026-05-05), Session 107 predicted:

| z bin | fσ₈ predicted ratio (Sync/ΛCDM) | Mechanism amplitude |
|-------|---------------------------------|---------------------|
| BGS z=0.15 | 0.867 | −13.3% |
| LRG1 z=0.51 | 0.882 | −11.9% |
| LRG2 z=0.71 | 0.898 | −10.3% |
| LRG3 z=0.93 | 0.916 | −8.6% |
| ELG2 z=1.19 | 0.932 | −6.8% |
| QSO z=1.49 | 0.947 | −5.2% |

This is a specific calibrated amplitude with a specific redshift pattern. The
amplitude is set by the C_galactic/C_cosmic ratio in the Synchronism mechanism
(Session 107). At its calibrated values, the 10-12% suppression at z=0.5-0.7
is what the test compares.

### What DR1 actually rules out

DR1 measures fσ₈ at LRG1 to ~7% precision (0.55 ± 0.06 → relative error 11%
on the σ₈ inference). On the combined ratio it constrains amplitude to ~5%.

So:
- A 10-12% suppression at z=0.5-0.7: ruled out at >2σ. ✓
- A 3-5% suppression at z=0.5-0.7: marginally constrained at ~1σ. ?
- A 1-2% suppression at z=0.5-0.7: not constrained. ✗

The mechanism class "monotonic suppression at the C_galactic/C_cosmic-calibrated
amplitude" is ruled out. The broader class "any monotonic suppression of any
amplitude" is not ruled out, because the lower-amplitude tail is below the
DR1 precision floor.

### Honest transferable claim

> "Coherence-modulated growth-suppression mechanisms that produce ≳5% fσ₈
> suppression at z = 0.5-0.7 are disfavored at >2σ by DESI DR1. Mechanisms in
> this class that match Synchronism Session 107's specific calibration
> (C_galactic/C_cosmic computed at galaxy-scale ρ_crit) are disfavored more
> strongly because they over-predict the magnitude. Lower-amplitude variants
> remain testable with DR2 and DR3 statistics."

This is more honest and more precise than the Pass-4-suggested universal
ruling-out. It still constitutes a publishable transferable result.

### Why it still matters

The result is non-trivial because the suppression-class amplitude in
Session 107 was *derived* (not free) from the framework's calibration to
galaxy-scale physics (ρ_crit = A·V_flat²). Any modified-gravity or
modified-matter framework that *predicts* a 10%-class fσ₈ suppression from
its galaxy-scale parameters faces the same wall. This is genuinely useful
for the modified-gravity community: it constrains the coupling between
galactic-scale and cosmic-scale modifications.

## Part C: Preprint Draft

### Title (working)

**"A pre-registered, AI-executed test of coherence-modulated growth
suppression: DESI DR1 sign-reverses the prediction"**

Alternative title (more conservative):
**"Sign-reversed falsification of a calibrated growth-suppression mechanism
in the DESI DR1 full-shape data"**

Title commentary: the AI-executed-test angle is genuinely novel for the
methodology-paper audience (cs.AI / cs.LG cross-list); the sign-reversal angle
is the physics novelty. The AI angle should probably appear in the abstract
even if not the title.

### Abstract (~200 words)

> Synchronism Session 107 (Dec 2025) predicted, prior to the public release of
> DESI DR2, a 10-12% suppression of the linear growth rate fσ₈ at z = 0.5-0.7
> relative to Planck-ΛCDM. The prediction was calibrated by a galaxy-scale
> coherence ratio (C_galactic/C_cosmic) derived from the framework's prior
> commitments to a critical density ρ_crit = A·V_flat² with A ≈ 0.029. A
> pre-registered falsification ladder ("fσ₈(z=0.5) > 0.45 → ΛCDM favored")
> was committed to the public repository before DR2.
>
> We compare this prediction against DESI DR1 (Adame et al. 2024, arXiv:2411.12021)
> full-shape galaxy clustering. The DR1 measurement of fσ₈/(fσ₈)^Planck at LRG1
> (z=0.51) is 1.16 ± 0.13 — *above* Planck-ΛCDM, not below. The combined σ₈ =
> 0.841 ± 0.034 versus the predicted σ₈(z=0) = 0.76 disagrees at 2.4σ. Every
> individual LRG bin and the combined fit exceed the framework's own
> ΛCDM-favored threshold.
>
> This is a sign reversal, not an amplitude mismatch. No retuning of free
> parameters repairs a sign error: the suppression mechanism's redshift pattern
> (largest at low z, monotonically shrinking) is the *opposite* of the DR1
> pattern. We discuss the scope of this falsification — it rules out
> calibrated-amplitude monotonic-suppression mechanisms in the
> coherence-modulation class at ≥2σ — and the methodological implications
> for AI-executed pre-registered tests.

Notes on the abstract:
- The "pre-registered" framing requires the git-timestamp of Session 107 to
  precede the relevant DR1/DR2 data release. **Need to verify:** the existing
  finding notes Session 107 was committed Dec 2025; DESI DR1 was public April
  2024. This is *not* prospective for DR1 — Session 107 came after DR1 was
  public. So "pre-registered relative to DR2" is the honest framing.
- A footnote on the AI-executed angle goes in the methods, not the abstract.

### Section outline (4-6 pages)

**1. Introduction (~0.5 pp)**
- The unification claim: Synchronism's C(ρ) = tanh(γ·ln(ρ/ρ_crit + 1)) as
  a coherence parametrization spanning quantum and cosmological scales.
- The cosmological prediction: at large-scale low-density environments,
  C_cosmic < C_galactic, producing an effective growth-rate suppression
  G_eff/G_GR = C_local/C_cosmic.
- The pre-registered test: Session 107's fσ₈ falsification ladder, committed
  to the public repository in Dec 2025, intended for DESI DR2/Y3 application.

**2. The Prediction (~1 pp)**
- Per-bin predictions from Session 107 (Table 1: reproduce the 6-bin table
  with z, fσ₈ predicted, fσ₈ ΛCDM, percent difference, forecast significance).
- The mechanism: monotonic suppression accumulating with cosmic time → largest
  at low z, shrinking at high z.
- The falsification ladder: fσ₈(z=0.5) > 0.45 → ΛCDM favored; ∈ [0.42, 0.45]
  inconclusive; < 0.42 Synchronism favored.

**3. The Data (~1 pp)**
- DESI DR1 Full-Shape pipeline (EFTofLSS-class one-loop perturbation theory
  with counterterms). Adame et al. 2024.
- Per-bin ShapeFit and Full-Modeling results (Table 2: reproduce DR1
  measurements with Sync prediction overlaid, σ-tensions per bin).
- The DR1 combined σ₈ = 0.841 ± 0.034.

**4. Comparison and Sign Reversal (~1 pp)**
- The 2.4σ tension on σ₈.
- The redshift pattern: DR1 shows growth *at or above* ΛCDM at low-z, with the
  one Synchronism-on-target point (ELG2 at z=1.3) being the bin where
  Synchronism is supposed to *converge to ΛCDM* — the bullseye is anomalous,
  not confirming.
- Discussion: why no retuning repairs this. Branch 1 (C_galactic/C_cosmic > 1
  to flip sign) would still need to produce a redshift pattern that mirrors
  DR1's, which is opposite to the framework's mechanism direction.

**5. Scope of Falsification (~1 pp)**
- What this rules out: monotonic-coherence-suppression at the Session 107
  calibrated amplitude (10-12% at z=0.5-0.7).
- What it doesn't rule out: low-amplitude (1-3%) variants in the same class;
  scale-dependent variants; non-monotonic variants.
- Why the calibrated-amplitude statement is non-trivial: Session 107's amplitude
  was *derived* from galaxy-scale parameters, not fit. Frameworks that derive
  amplitude from sub-cosmological calibration face the same wall.

**6. Methodological Notes (~0.5 pp)**
- The test was executed by an AI agent (LLM) in a single session by table
  lookup against the DESI DR1 published tables. Reproducibility: the prediction
  table from Session 107 + the DR1 Tables 9 and 10 → comparison takes ~90 min.
- This is the first executed Tier-1 prediction in the framework's published
  history (47:0 ratio prior).
- The framework's own falsification criterion was crossed; the framework
  acknowledged the result as a refutation.

**7. Discussion (~0.5 pp)**
- For modified-gravity / coherence-modulation theories: a calibrated-amplitude
  fσ₈ suppression ≥10% at z = 0.5-0.7 is now disfavored at >2σ.
- For DR2: if central values stay where they are, this will tighten to 3-4σ on
  σ₈ alone.
- Honest framing: this is one specific prediction, decisively tested. The
  broader Synchronism program continues; this particular mechanism is closed.

### Letter format alternative (2 pp)

A 2-page letter would compress sections 1-5 and drop sections 6-7. PRL-style.
The methodological angle (AI-executed pre-registered test) is the value-add for
a methodology venue; a physics letter venue would emphasize sections 3-5.

**Recommendation:** target a methodology venue (Foundations of Physics, AI for
Science workshop tracks, or arXiv-only "AI-executed physics" position paper)
with the 4-6 page format. The transferable mechanism-class falsification is
the contribution; the AI-execution is the methodological hook.

### What additional analysis is needed

The existing finding (`desi-dr1-vs-session107-fsigma8.md`) has everything needed
for sections 1-5. Two analyses would strengthen the letter:

1. **Reproduce a per-bin χ²** combining all 6 DR1 fσ₈ bins against the Sync
   prediction. (The existing finding does per-bin tension but not a combined χ²;
   the combined fit is currently quoted from DR1's table directly.)

2. **A 2D plot** showing fσ₈(z) for the DR1 measurements with ΛCDM and Sync
   curves overlaid, error bars per bin. This is the figure that sells the sign
   reversal at a glance.

Both can be done in ~30 minutes of pandas + matplotlib on the published tables;
no proprietary data needed.

### What is already in the repo

- `findings/desi-dr1-vs-session107-fsigma8.md`: the executed test
- `Synchronism/Research/proposals/session107_disfavored_by_desi_dr1.md`:
  the back-annotation
- `Synchronism/Research/Session107_DESI_Forecasts.md`: the predicted table
- `Synchronism/Research/proposals/test04a_mechanism_class_sign_failure.md`:
  Branch 1 / Branch 2 diagnosis
- `Synchronism/Research/proposals/test04a_mechanism_class_contribution.md`:
  the generalization framing
- `Synchronism/Research/proposals/eftofls_closes_test04a_parameter_space.md`:
  the doubly-closed framing (needs revision per this audit)

The preprint is largely an editorial reassembly of these documents into a
publication-format narrative.

### Defensibility as 2-page letter vs short paper

**2-page letter**: defensible. The core claim (calibrated amplitude refuted
at 2.4σ by DR1) is supported by the existing tables. A letter wouldn't have
room for the scope-of-falsification discussion or the AI-execution angle.

**4-6 page short paper**: stronger. Room for the scope-of-mechanism-class
discussion (what's ruled out, what isn't), the methodological angle
(AI-executed pre-registered test), and the DR2 forecast.

I recommend the short paper format. The mechanism-class scope and the
AI-execution angle are the genuinely novel contributions; cutting them for
the letter format loses the value-add.

## Part D: Important Caveats

### The pre-registration timing issue

Session 107 was committed in Dec 2025. DESI DR1 was publicly released in
April 2024. The test is therefore **not prospective relative to DR1** — it's
post-DR1-public for the data Session 107 predicts against. This was already
flagged in `Synchronism/Research/proposals/session107_preregistration_gap.md`
(filed 2026-05-07).

The honest framing in the preprint:
- For DR1: a *post-hoc consistency check against published data* (not a
  prospective falsification).
- For DR2: a *prospective falsification* — Session 107's predictions were
  committed before DR2 full-shape released.

The methodology angle then becomes: "even a post-hoc consistency check against
DR1 fails by sign reversal, before the prospective DR2 test runs." That is
*more* honest than the doubly-closed framing and still publishable.

### The "AI-executed" methodology angle vs. preprint scope

The site's broader argument is that the methodology is the contribution. But
the TEST-04a preprint is a *physics* paper (a mechanism-class falsification),
not a methodology paper. The AI-execution angle should be a brief methods note,
not the framing. The methodology paper (drafted from
`a2acw-methodology-paper-draft.md` topic) is a separate output.

Trying to make TEST-04a do double duty (physics + methodology) is the wrong
move; it would weaken both. Two preprints, one physics, one methodology.

## Implications for the Site

### Maintainer actions (HIGH priority)

1. **Revise the `eftofls_closes_test04a_parameter_space.md` proposal** in the
   Synchronism repo. The "doubly closed" framing should be replaced with
   "EFTofLSS is the standard analysis method DESI applies; the closure is one
   event (DR1 disfavors the prediction), not two." The proposal is half-right —
   EFTofLSS is the right framework to engage — but the framing implies an
   independent closure that doesn't exist.

2. **Update `/honest-assessment` TEST-04a card**: replace "doubly closed
   (sign reversal + EFTofLSS closure)" with "DESI DR1, analyzed with
   EFTofLSS-class methods, finds growth consistent with ΛCDM. Synchronism
   Session 107 predicted growth below ΛCDM. 2.4σ tension on combined σ₈,
   sign-reversed at LRG1." This is more accurate and shorter.

3. **Add the calibrated-amplitude qualifier to the mechanism-class scope.**
   On `/honest-assessment` and any front-of-site mention: "Coherence-modulated
   suppression at the Session 107-calibrated amplitude (≥10% at z = 0.5-0.7)
   is disfavored at >2σ. Lower-amplitude variants remain testable with future
   data." This pre-empts a referee asking "are you really ruling out *all* such
   mechanisms?"

### Maintainer actions (MEDIUM priority)

4. **The preprint draft above is the actionable output.** The maintainer should
   either commit it as a draft to a `papers/` directory in the Synchronism
   repo, or open it as a topic for the explorer to refine further.

5. **Build a 2D fσ₈(z) figure** with DR1 measurements, ΛCDM curve, Sync
   prediction curve, error bars per bin. This is the figure that sells the
   sign reversal at a glance and is needed for the preprint.

6. **Consider whether to publish.** The preprint is defensible. The decision
   to publish is the operator's. The explorer's job is to make the option
   exist; deciding whether to exercise it is upstream.

### Open question for the maintainer

**Should the preprint position itself as Synchronism work, or as
mechanism-class work?** Two framings:

- **Synchronism framing**: "Here is a prediction from a specific framework,
  decisively refuted." Niche audience. Honest. Low strategic priority.
- **Mechanism-class framing**: "Here is a constraint on a class of modified-
  gravity mechanisms, with one specific case study (Synchronism) executed."
  Broader audience (modified-gravity community). Slightly higher
  generalization risk. Higher strategic value.

The mechanism-class framing is what Pass 3 and Pass 4 today recommend. I
agree but the framing must be calibrated to the actual amplitude scope, not
"all such mechanisms."

## Action: Maintainer

### Immediate (next session)

- Revise the EFTofLSS proposal's "doubly closed" language per Part A above.
- Update `/honest-assessment` TEST-04a card per Part D above.
- Move this finding's preprint draft into a working `papers/test04a/` directory
  (or equivalent) so the draft is preserved across sessions.

### Soon (this week)

- Build the fσ₈(z) figure.
- Commit Session 107's prediction table to the repo as a CSV (it currently
  lives only in a session document).

### Open for the explorer

- The methodology paper (`a2acw-methodology-paper-draft.md` topic) should be
  drafted separately, with no overlap with the TEST-04a preprint.

## Open Threads

1. **Is the 2.4σ combined tension robust to QSO outlier removal?** The QSO bin
   at z=1.5 is +2.6σ above Sync; removing it would soften the combined tension
   modestly. The DR1 paper notes the eBOSS quasar sample tends to prefer
   slightly higher σ₈ than BOSS LRGs. A robustness check (LRG-only combined
   χ²) would strengthen the preprint.

2. **DR2 full-shape paper status.** The DR2 BAO paper is out (arXiv:2503.14738);
   the DR2 full-shape companion is in pipeline. When it appears, the test
   should be re-run. If central values stay where they are, the 2.4σ tightens
   toward 3.5-4σ.

3. **Branch 1 diagnosis status.** Has anyone computed C_galactic / C_cosmic
   numerically from the Synchronism framework's parameters? If C_galactic /
   C_cosmic > 1 (rather than < 1), the prediction sign-flips. This is open per
   the topic `test04a-sign-error-diagnosis.md`. The preprint's claim of "sign
   reversal" is robust if Branch 1 is empirically inconsistent; if Branch 1
   is consistent, the preprint should soften to "current parametrization
   sign-reversed; alternative parametrization undetermined."

4. **The pre-registration honesty story.** The post-hoc-vs-prospective framing
   for DR1 vs DR2 is delicate. Pass 3 today called TEST-04a "doubly post-hoc"
   (σ₈ calibrated in Session 102 to lensing tension, then propagated to DESI in
   Session 107). The preprint should engage with this — it's the most likely
   referee objection.

5. **EFTofLSS prior-art search.** Are there 2024-2025 papers that have already
   placed constraints on coherence-modulated growth suppression using DR1 full
   shape? A quick search to confirm we're not duplicating a result would
   strengthen the preprint's novelty claim.

## Citations Used / To Verify

- Adame et al. (DESI Collaboration), "DESI 2024 V: Full-Shape Galaxy Clustering
  from Galaxies and Quasars" (arXiv:2411.12021). Verified abstract: results
  consistent with ΛCDM.
- DESI DR2 BAO (arXiv:2503.14738). Cited but DR2 FS paper not yet located.
- Cabass, Simonović, Zaldarriaga et al. — generic EFTofLSS framework. Cited
  in the maintainer's proposal; not directly necessary for the preprint as
  long as the DR1 paper is the data citation.
- Synchronism Session 107 (private repo, Dec 2025). The pre-registered
  prediction document; needs to be a citable artifact (zenodo DOI?) before
  preprint submission.
- Planck 2018 σ₈ = 0.8133 ± 0.0050. Standard reference.
