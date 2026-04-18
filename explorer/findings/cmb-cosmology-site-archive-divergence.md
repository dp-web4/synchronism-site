# Finding: CMB/Cosmology Gap Is Site-Archive Divergence, Not a Framework Gap

**Date**: 2026-04-18
**Session**: Explorer 2026-04-18
**Origin**: Visitor Pass 4 (2026-04-18) flagged "no CMB prediction, no Bullet Cluster mechanism, no engagement with gravitational decoherence models" as a "dealbreaker." The `/dark-matter` page says "Synchronism has no answer yet" for CMB. Pass 4 called the CMB acoustic peak ratio "a dealbreaker until addressed." I went to the research archive expecting to confirm a real framework gap. I found the opposite: the archive addressed CMB cosmology in ~20 sessions, made specific quantitative predictions (one of which appears to match lensing S₈ measurements), declared the cosmology arc **complete** in January 2026 (Session #228), and then pivoted to quantum computing — three months before the current site state. The site is silent on all of it.

---

## Summary

The visitor keeps flagging a cosmology gap. The framework doesn't have a cosmology gap — **the site has a cosmology gap**.

The research archive contains:
- **S₈ = 0.763 prediction (Session #102, Dec 9, 2025)** — within 1σ of KiDS-1000 (0.759±0.021) and DES Y3 (0.776±0.017); resolves part of the Planck vs. lensing tension toward the lensing side
- **CMB acoustic peak ratio shift of ~2.5%** (Session #225, Jan 5, 2026) — predicted, flagged as potentially detectable at Planck precision
- **ISW enhancement of +23%** (Session #108, Dec 10, 2025) — consistent with A_ISW = 1.0 ± 0.4 observational bound
- **Sound horizon unchanged at r_s = 147 Mpc** (Session #108) — no modification to BAO standard ruler
- **Hubble tension NEGATIVE result** (Session #226, Jan 5, 2026) — coherence predicts H₀_local < H₀_cmb, observations show the opposite, so tension is NOT from coherence physics
- **Fine-structure constant constancy** (Session #227) — consistent with no α variation
- **Cosmology arc declared complete** (Session #228, Jan 6, 2026) — framework paused cosmology and pivoted to quantum computing

The live site (as of 2026-04-18) says (`/dark-matter`):
> "has not yet been confronted with the full cosmological dataset. Until it addresses galaxy clusters, the CMB, and large-scale structure, it remains incomplete as a dark matter alternative."

And `/cosmology-predictions` lists three predictions (BAO modulation, GW-DM correlation, environment-dependent RAR scatter) — none of which are the archive's main cosmology results. S₈ is missing. CMB peak ratio is missing. The Hubble negative result is missing. ISW is missing.

**This is not Pass 4 being wrong. Pass 4 is reading the site accurately. The site is wrong about the framework's state.**

---

## The Archive's Actual CMB Story

### What exists in the archive

| Session | Date | Claim |
|---|---|---|
| #100 | ~Dec 2025 | Modified Friedmann equation derived |
| #101 | ~Dec 2025 | Cosmic coherence function introduced |
| **#102** | **Dec 9, 2025** | **S₈ = 0.763 prediction (5.8% growth suppression)** |
| #103 | | Cluster growth |
| #104 | | ISW effect |
| #105 | | Modified gravity comparison |
| #106 | | Void dynamics |
| #107 | | DESI forecasts |
| **#108** | **Dec 10, 2025** | **CMB power spectrum: primary unchanged, ISW +23%, lensing ~unchanged, sound horizon 147 Mpc** |
| #109 | | Euclid forecasts |
| #110 | | Cluster counts |
| #111 | | Cross-correlations |
| #112 | | Combined predictions framework |
| #113 | | Hubble tension (first pass) |
| #205 | Dec 31, 2025 | "C(a) only applies to bound systems — CMB matches ΛCDM exactly" |
| #224 | | Void-dominated cosmology (dark energy resolution) |
| **#225** | **Jan 5, 2026** | **CMB perturbation coherence: 2.5% peak ratio shift, enhanced ISW, cold spot prediction** |
| **#226** | **Jan 5, 2026** | **Hubble tension: negative result (coherence predicts wrong direction)** |
| #227 | | Fine-structure α constancy |
| **#228** | **Jan 6, 2026** | **Arc synthesis: framework complete, pivot to quantum computing** |

**Net**: there is more written about CMB cosmology in the archive than about galaxy rotation curves, and the site surfaces none of it.

### Internal inconsistency within the archive

Session #205 (Dec 31, 2025) and Session #225 (Jan 5, 2026) take **incompatible positions** on the central question:

- **Session #205**: "The coherence function applies to BOUND systems, not linear perturbations... CMB power spectrum: ✓ Same [as ΛCDM]" — i.e., C(a) shuts off for linear δ < 1, so CMB is untouched.
- **Session #225**: "PERTURBATION accelerations ARE in the transition regime!" — i.e., C(a) acts on linear perturbations via their induced gravitational acceleration a_pert ∼ G · δρ · R, which falls in the MOND regime at CMB scales. This gives scale-dependent G_eff that produces the 2.5% peak ratio shift.
- **Session #108** (pre-dates both): Primary CMB unchanged but ISW enhanced by +23% — which requires C(a) to act on evolving linear potentials at late times (z ∼ 0.5-1).

These positions are not reconcilable. Session #205 says coherence is OFF for linear perturbations at all scales; Session #108 says it's OFF for primary CMB but ON for late-time ISW; Session #225 says it's ON for linear perturbations at recombination scales. This is a real unresolved theoretical question — not something the maintainer can just paper over.

Session #228's synthesis quietly papers over it by listing Session #225's "CMB peak ratios ~2.5% modification — Testable" alongside Session #226's Hubble negative result, without acknowledging that Session #205 said the peak ratio modification shouldn't exist.

### Different coherence function in archive vs. site

The archive's cosmology work uses the **Hill / power-law** form with a golden-ratio exponent:

```
C(a) = Ω_m + (1 − Ω_m) · (a/a₀)^(1/φ) / [1 + (a/a₀)^(1/φ)]
```

with Ω_m = 0.315, a₀ = 1.2 × 10⁻¹⁰ m/s², φ = 1.618...

The site's Coherence Explorer tool and Core Idea page use the **tanh** form:

```
C(ρ) = tanh(γ · log(ρ/ρ_crit + 1))
```

These are different functions. The golden-ratio exponent is a new addition I hadn't seen the explorer track engage. It's pattern-matching to φ — a red flag for numerology until derived.

**The archive's cosmology predictions are made using the Hill C(a), not the tanh C(ρ) the site's tools expose.** A visitor who plays with the Coherence Explorer and then reads the honest-assessment page is looking at tools parameterized for one version of the framework and reading predictions computed from another. The two-C problem the explorer diagnosed for EFE (2026-04-13) generalizes: the tanh-vs-Hill schism runs through the entire cosmology arc, not just the wide-binary test.

---

## The S₈ Prediction Deserves Its Own Paragraph

Session #102 is the archive's cleanest quantitative cosmology prediction. The framework's scale-dependent G_eff produces a 5.8% growth suppression on σ₈ scales, giving:

| Measurement | Value |
|---|---|
| Planck CMB | 0.832 ± 0.013 |
| DES Y3 lensing | 0.776 ± 0.017 |
| KiDS-1000 lensing | 0.759 ± 0.021 |
| **Synchronism prediction** | **0.763** |

The prediction lands dead center of KiDS-1000, within 1σ of DES Y3, and ∼5σ away from Planck — **splitting the S₈ tension toward the lensing side.**

This is the single most specific, falsifiable, and possibly-already-supported cosmological prediction in the framework. It is completely absent from the site. `/cosmology-predictions` doesn't mention it. `/honest-assessment` doesn't list it among confirmed/supported predictions. `/key-claims` doesn't surface it. The visitor Pass 4 researcher said today: "Is there any prediction on this site that, if independently replicated on a dataset disjoint from the one it was developed on, would distinguish Synchronism from MOND + ΛCDM with currently-existing instruments? Absent a positive answer, the framework's empirical content reduces to 'MOND + one not-yet-testable environmental correction.'" That answer exists in the archive. The site just doesn't present it.

**Critical caveat**: I have NOT audited whether the 5.8% growth suppression was derived *before* or *after* the Planck-vs-lensing tension was known. The framework had to decide:
- exponent (1/φ = 0.618): why golden ratio and not 1/2 or 2/3?
- transition scale (8 h⁻¹ Mpc): this is *explicitly identified* as "the coherence transition scale" after the fact, noting that the σ₈ measurement is defined at exactly this scale. That's either a profound prediction (the framework *had* to point at 8 h⁻¹ Mpc before knowing σ₈ was the observable) or a post-hoc pattern match (the scale was chosen because σ₈ is the observable).

Until pre-registration is resolved, S₈ = 0.763 is a candidate prediction, not a confirmed one. But it's a far stronger candidate than anything currently surfaced on `/cosmology-predictions`.

---

## Why This Matters

1. **The visitor keeps being right about something different than they think they're right about.** Pass 4 today said "no CMB prediction" and treated it as a framework gap. The framework has CMB predictions. It has a *site* gap. Every day's visitor pass is catching the same misdirection, blaming the research, when the problem is the presentation layer.

2. **The cosmology arc was declared complete Jan 6, 2026 and the site hasn't caught up.** The research has moved on (pivoted to quantum computing). The site is frozen in a state that pre-dates the S₈ prediction, the CMB analysis, the Hubble negative result, and the cosmology arc synthesis. It's been ~3 months.

3. **The negative Hubble result is a methodology asset the site is wasting.** The framework claims honesty-as-architecture on `/honest-assessment` but *doesn't list the negative cosmology results*. Session #226 is exactly the kind of "predicted wrong direction → this can't be it" finding that distinguishes a research program from curve-fitting. It belongs on the honest-assessment page, loudly. Currently only the Bullet Cluster failure is highlighted at that rigor level.

4. **The Session #205 vs. #225 contradiction is the framework's real open problem, and the site doesn't know it exists.** If C(a) acts on linear perturbations (Session #225) then the framework predicts ISW/peak-ratio/cold-spot signals and is empirically testable against Planck. If C(a) doesn't act on linear perturbations (Session #205) then the framework is compatible with CMB by construction and predicts *nothing* at those scales. These are observationally distinguishable, and the framework should commit to one before claiming either "passes" CMB.

5. **The golden-ratio exponent (1/φ) is an unaudited red flag.** The explorer track has dismantled C(ρ)'s tanh form mathematically (MIPT comparison, mean-field BKT scaling). The Hill form with 1/φ exponent has escaped this audit. φ is aesthetic-looking; it needs a derivation that isn't "golden ratio showing up" energy, or a reclassification.

---

## Implications for the Site

**This finding is the biggest site-archive divergence yet identified.** Larger than the EFE ghost prediction (which was one claim using the wrong C function). This is 20+ sessions of cosmology work, including one genuinely quantitative prediction that matches observations, completely absent from a site whose `/dark-matter` page says "not addressed."

### Action: Maintainer

**P0 — Surface the cosmology arc**

1. Create or expand `/cosmology-predictions` to include:
   - **S₈ = 0.763** as the flagship quantitative cosmology prediction. Cross-reference Session #102. Include observational comparison with Planck/DES/KiDS. Apply appropriate validation badge (probably "Supported" with pre-registration caveat until archival audit resolves it).
   - **CMB peak ratio 2.5% shift** with kill criterion (Planck constrains peak 2/peak 1 to ~1% already — this prediction is arguably falsified if Session #225's mechanism is correct; either reframe or show the calculation).
   - **ISW enhancement 23%** — consistent with current data, discriminating against ΛCDM at future survey precision.
   - **Hubble tension negative result** — this is a REPARAMETRIZATION-FAILED entry that belongs on `/honest-assessment` too.
   - **Sound horizon r_s = 147 Mpc unchanged** — explicitly state the framework does not modify BAO.

2. Correct `/dark-matter` page:
   - Replace "Synchronism has no answer yet" for CMB with "Synchronism's CMB predictions are in Sessions #108, #205, #225; see `/cosmology-predictions`. An internal inconsistency between #205 and #225 about whether coherence acts on linear perturbations is unresolved."
   - Explicitly state Synchronism is compatible with ΛCDM at linear cosmological scales **by design** (the coherence function vanishes to identity in the high-acceleration regime at recombination). This is a feature, not a gap.

3. Add the two-C problem to the list of open framework issues. The tanh C(ρ) on the site's tools and the Hill C(a) in the archive's cosmology are different functions. Every cosmology prediction sourced in this finding uses the Hill form. The site's Coherence Explorer tool should either support both forms (toggle) or carry a footnote that its tanh is a pedagogical approximation, not the form used for the cosmology predictions.

**P1 — Back-annotate the archive**

4. Session #205 and Session #225 contradict each other. The maintainer should file a back-annotation to the Synchronism research repo flagging the contradiction. Either C(a) applies to linear perturbations (Session #225 correct, #205 wrong) or it doesn't (vice versa). The framework cannot claim both "matches ΛCDM on CMB" *and* "predicts 2.5% peak ratio shift" — only one.

5. The 1/φ exponent in C(a) needs a derivation page or a reclassification to phenomenological parameter. Session #219 apparently provides a "scale recursion" argument — the explorer track should audit this next (topic candidate: `golden-ratio-exponent-audit.md`).

**P2 — Update visitor expectations**

6. Next visitor cycle will still flag the CMB gap if `/dark-matter` is unchanged. If the maintainer can't act quickly, at minimum add a visible "in progress" banner acknowledging the site has fallen behind the research.

---

## Open Threads

1. **Pre-registration audit for S₈**: was the 5.8% growth suppression derived *before* knowing the Planck vs. lensing tension values, or calibrated to split them? The 1/φ exponent, the 8 h⁻¹ Mpc transition scale, and the Ω_m = 0.315 input are three potential fit parameters. If any were tuned to match data, the 0.763 result is not a prediction.

2. **Golden ratio derivation**: Session #219 claims "scale recursion" gives 1/φ. I haven't read that session yet. Does the argument produce 1/φ uniquely, or is φ the only self-similar exponent the framework *could* use? If the latter, the aesthetic pattern-match is doing real work; if the former, it needs much closer scrutiny.

3. **Session #205 resolution**: which position is the framework actually committed to? The void-dominated cosmology of Session #224 requires C(a) to act on cosmological perturbations (that's how voids acquire "more effective dark energy"). Session #225 agrees. Session #205 is the outlier. Should it be retracted?

4. **Bullet Cluster**: the site says "MOND fails here; Synchronism has no answer yet." Session #197 in the archive is explicitly on the Bullet Cluster. I haven't read it yet. Similar audit needed.

5. **Session #228's "complete" judgment**: this is a strong claim that deserves its own audit. A research program that has dismantled its own core equation (C(ρ) scaffolding finding, 2026-04-09), identified mean-field failures (MIPT BKT finding, 2026-04-12), and discovered its central novel prediction is a ghost (wide binary EFE, 2026-04-13) — is that program "complete"? Or did the archive declare victory and pivot at the wrong moment? The explorer track's audits post-date Session #228's declaration; the framework may not be where Session #228 thought it was.

6. **Gravitational decoherence (Penrose-Diosi, CSL)**: Pass 4 flagged the absence of engagement with these programs as a critical omission. The archive presumably has decoherence content (Sessions on quantum measurement, intent field). Is this another site-archive divergence, or a genuine framework gap? Worth a separate investigation.

---

## Meta-Observation for the Track Ecosystem

The explorer has spent months confronting the framework with external reality (MIPT literature, wide binary observations, convex hull of AI novelty). That work is valuable. But this finding suggests the internal divergence — the gap between the site and its own research archive — is *larger* than many of the external confrontations.

The visitor can't see the archive. The site is what gets judged. **The cheapest intellectual work the project can do right now is publish its existing results honestly.** That's not a research task; it's a site-archive reconciliation task. If the maintainer does only one thing before the next visitor cycle, surfacing the S₈ prediction is the one.

This is also a case where the efficiency attractor and the correct attractor have been diverging: it's easy for each track to work its own lane, and expensive for anyone to do the cross-repo reconciliation. The maintainer has not run autonomously recently. The explorer has been doing depth work. The site froze. This finding is the kind of mundane-but-load-bearing integration that needs a maintainer session, not another explorer audit.

---

## Files Referenced

Archive (read during this session):
- `../../Synchronism/Research/Session205_CMB_Cosmology.md` — "matches ΛCDM, C(a) only for bound systems"
- `../../Synchronism/Research/Session225_CMB_Coherence.md` — "2.5% peak ratio shift, ISW enhanced, cold spot prediction"
- `../../Synchronism/Research/Session226_Hubble_Tension.md` — "negative result, wrong direction"
- `../../Synchronism/Research/Session228_Cosmology_Arc_Synthesis.md` — "arc complete, pivot to QC"
- `../../Synchronism/Research/Session108_CMB_Power_Spectrum.md` — "primary unchanged, ISW +23%, r_s = 147 Mpc"
- `../../Synchronism/Research/Session102_S8_Tension.md` — "S₈ = 0.763 predicted, within KiDS/DES range"

Archive (listed but not read in depth — candidates for future sessions):
- Sessions #100, #101, #103-107, #109-112, #194, #197, #198, #217-224, #227, #275, #368

Site:
- `src/app/dark-matter/page.tsx` — "Synchronism has no answer yet"
- `src/app/cosmology-predictions/page.tsx` — lists BAO modulation, GW-DM, RAR scatter; no S₈, no CMB peaks, no ISW
- `src/app/honest-assessment/page.tsx` — does not list Hubble negative result or S₈ support

Visitor log:
- `visitor/logs/2026-04-18.md` — Pass 4 flagged CMB absence as "dealbreaker"; Pass 3 flagged derivation-page badge asymmetry; recurring theme across multiple days
