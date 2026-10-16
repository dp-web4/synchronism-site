# Finding: none of the four candidate "framework-independent negative results" is both new and general. The DE sign lock binds no class at background level, and the locality no-go was refuted as a universal statement in July

## Origin
Topic `which-negative-results-generalize-beyond-the-framework.md` (maintainer 2026-10-16, from visitor Pass 4).
PREREG `explorer/scripts/negative_results_generalize_PREREG.md`, commit `e8adcd8`, written before any search or run.
Script: `findings/scripts/monotone_f_rho_m_class_vs_desi_dr2.py` (+ `_output.txt`). It imports the 2026-08-12 DESI DR2
likelihood unchanged.

## Summary
A simulated-visitor researcher persona proposed that the site's citable output is a handful of framework-independent
negative results. I checked all four candidates for their assumptions, prior art and reproducibility. **None is both
new and class-general.**

1. **The sign lock** (sign(w₀+1) = sign(wₐ)) is a property of the framework's particular f, not of the class
   ρ_DE = f(ρ_m).
   - At background level that class is **vacuous**. ρ_m(a) is strictly monotone, so every dark-energy history ρ_DE(a)
     is f(ρ_m) for some f. "Monotone f never crosses w = −1" therefore just restates "a non-crossing history does not
     cross".
   - A generic monotone, non-crossing member (f = F(1 − e^(−ρ_m/ρ*))) has local (w₀, wₐ) = (−0.80, −1.12). That is
     inside DESI's quadrant, and on the same likelihood it recovers 61% of CPL's Δχ² (−6.66 vs −10.96).
2. **The locality no-go** was already refuted as a universal claim by the archive's own 2026-07-27 literature walk.
   Burrage, Copeland & Millington (2017) reproduce the SPARC RAR with a scalar keyed on local ρ(r).
3. **The capped-boost kill** is a one-line reading of known data: the missing-baryons trend (McGaugh+2010) plus the
   lensing RAR. It binds only models that impose a cap, and Verlinde's emergent gravity does not.
4. **The A2ACW 5/6** matches the known direction of the LLM self-correction literature (Huang+2023), at n = 6.

The page the persona wanted should be built as the topic's fallback, **a prior-art map**. It should not be built as a
list of new no-gos.

## Research Notes

### Candidate 1: the sign lock

**(a) Assumptions, derived exactly.** Take ρ_DE = f(ρ_m), matter separately conserved (ρ_m ∝ a⁻³), flat. Continuity
gives:

    1 + w = ε(ρ_m) ≡ d ln f / d ln ρ_m,        wₐ ≡ −dw/da|₀ = 3 dε/d ln ρ_m |₀

So sign(wₐ) is the sign of how the elasticity **changes** with density, not the sign of ε. The topic's
"monotone f ⇒ sign(w₀+1) = sign(wₐ)" is false. The lock holds only when |ε| grows toward the past, which is
Caldwell–Linder freezing toward Λ. The framework's f is in that sub-class, because w runs from −2γ to −1.

**Vacuity.** ρ_m(a) is a bijection, so f ≡ ρ_DE ∘ ρ_m⁻¹ exists for any ρ_DE(a). f is monotone iff ρ_DE(a) is
monotone, which holds iff 1 + w never changes sign. So "ρ_DE is an algebraic function of ρ_m" places no constraint at
all on H(z). Every background is an f(ρ_m) model. This is a special case of Kunz's dark degeneracy (Phys. Rev. D 80,
123001 (2009), arXiv:astro-ph/0702615). His abstract: "Because of this degeneracy, Omega_m cannot be measured."
**No class-level background no-go can exist for ρ_DE = f(ρ_m).** Only perturbations carry class content. On the
local-fluid reading, that content is already known: Sandvik, Tegmark, Zaldarriaga & Waga 2004 (PRD 69, 123524), and
Amarzguioui, Elgarøy & Multamäki 2005. The site already cites these, and the explorer applied them on 2026-09-14
(|2γ−1| ≲ 10⁻⁵).

**Numerical check (section 1 of the output).** ρ_m0 = 0.3, f₀ = 0.7.

| f | w₀ | wₐ | lock holds? | crosses? |
|---|---|---|---|---|
| framework tanh-log γ = 0.3 (control) | −0.837 | +0.236 | yes | no |
| framework γ = 0.8 (control) | −1.112 | −0.268 | yes | no |
| saturating, x₀ = 2.9 | −0.831 | −1.048 | **no** | no |
| L − b/ρ_m | −0.857 | −0.490 | **no** | no |
| L + Kρ_m^(−½) | −1.100 | +0.120 | **no** | no |

**Against data (section 2).** Same likelihood as 2026-08-12: DESI DR2 BAO, Planck-18 distance priors and DES-Dovekie
(N = 1836). It reproduces the ΛCDM χ² of 1650.608 and the CPL χ² of 1639.648 exactly.

| model | k | Δχ² vs ΛCDM | ΔAIC | ΔBIC | CPL projection |
|---|---|---|---|---|---|
| w₀wₐ | 5 | −10.96 | −6.96 | +4.07 | (−0.82, −0.65) |
| saturating f, monotone, never crosses | 4 | **−6.66** | −4.66 | +0.86 | (−0.895, −0.23) |
| L + Kρ_m^n, monotone | 5 | −7.53 | −3.53 | +7.50 | (−0.856, −0.33) |
| framework family (08-12) | 4 | −0.30 | — | — | (−0.993, +0.02) |

The L + Kρ_m^n fit runs to the n bound (−8 after widening from −3): the data want a step-like late thaw. DESI's own
algebraic-thawing fit does the same: "our posterior hitting the prior bound p = 30" (arXiv:2503.14743 §VI A). That
paper's Table III, verbatim rows, gives Δχ²_MAP:

    Thaw. (Alg.)   −1.0 (−2.9)    −4.6 (−6.9)    −10.1 (−13.2)
    w0 wa          −6.8 (−10.7)   −13.5 (−17.4)  −17.2 (−21.0)

for +PantheonPlus / +Union3 / +DESY5. Thawing recovers 27%, 40% and 63% of CPL's improvement. My 61% on Dovekie sits
at DESY5's end, as expected (Dovekie is the DESY5 recalibration). The verdict from the same paper: "alternatives
lacking this feature are disfavored, they cannot yet be ruled out." On freezing: "Such dynamics are characterized by
wa > 0 and are not favored by observations."

**(b) Prior art.** The class-general content is known in every piece:
- background vacuity: Kunz 2009;
- no crossing without f′ = 0: a tautology, and DESI's thawing-vs-crossing comparison is its data test;
- freezing disfavoured: DESI DR2 extended analysis;
- perturbation-level kill on the fluid reading: Sandvik+2004.

What is framework-specific, and correct as written on /dark-energy ("What the substituted model predicts"), is that
**this** f is a freezing-direction elasticity that nests Λ. I checked the site text: it scopes the lock to "the
substituted model" and does not overclaim. The over-generalization is in the topic and the persona, not on the site.

**(c) One script from public data:** yes, `monotone_f_rho_m_class_vs_desi_dr2.py`. It fetches Dovekie from the DES
GitHub, and the BAO/CMB tables are inlined.

### Candidate 3: density-keyed locality (taken out of order because it is the sharper result)

The archive has already done this. It is `Synchronism/Research/proposals/locality_nogo_screening_literature_gate_20260727.md`,
which is pre-registered, executed, and read primary sources in full text. Its verdict:
- "The no-go's universal-quantifier form ('holds for any local-ρ MOND mimic') is **false**." The counterexample is
  Burrage, Copeland & Millington, PRD 95, 064050 (2017): an RAR on SPARC-153 from a scalar keyed on local ρ(r).
- "Gate: NOT CLEARED. Transferable null #1 cannot ship in its current form."
- The derivative-order screening taxonomy of Joyce, Jain, Khoury & Trodden (2015) already contains the site's triage
  lemma.

Today's topic re-proposes the locality no-go as a framework-independent candidate and names only Milgrom 2005 as prior
art. **The queue forgot an executed, negative literature gate eleven weeks after it ran.** The quantitative pieces
(GM☉ split, LLR smoothing length, ΔBIC +2843) bind the framework's density keying. They do not bind "local-ρ" as a
class.

### Candidate 2: the capped-boost Keplerian kill

**(a) Assumptions.** Any boost B = g_obs/g_bar ≤ B_max goes Keplerian once the data need B > B_max. The data need
B ≈ 13.7 in NGC 2915 and ≈ 11 in KiDS lensing at 10⁻¹⁴ m/s². A cap at Ω_m/Ω_b ≈ 6.4 therefore fails.

**(b) Prior art.** A cap at the cosmic baryon fraction is equivalent to requiring that detected baryons be at least
about 1/B_max of the cosmic share. McGaugh, Schombert, de Blok & Zagursky 2010 (ApJ 708, L14, arXiv:0911.2700) report
that the detected baryon fraction falls monotonically below cosmic with decreasing mass, to under 1% in the smallest
dwarfs (search summary, not read in full). ΛCDM escapes because baryons can be expelled. A boost law acting on
detected baryons has no such escape, and that one step is the whole content of the kill.

Does it bind published models? Verlinde's apparent-DM relation gives g_D ∝ √(a₀ g_B) in the point-mass limit. That is
an unbounded boost, so it is **not** bound (Milgrom & Sanders arXiv:1612.09582 discuss its other problems). RG's floor
at f = 0.089 is bound, but that is the in-house result. I found no other published Ω_m-floor proposal in this pass.
This is a corpus-scoped null, not "none exists".

**Verdict: known as data; the kill is a one-line corollary that binds only cap-type models.**

### Candidate 4: A2ACW data contact

Huang et al. 2023, "Large Language Models Cannot Self-Correct Reasoning Yet" (ICLR 2024, arXiv:2310.01798), concludes
that intrinsic self-correction does not improve reasoning, and that valid external feedback such as code execution or
tools is what helps (search summary, not read in full). The site's "5 of 6 refutations came from code run against
external data, 0 from self-play" is the same direction, in a research rather than benchmark setting, at n = 6.
**Verdict: known in direction; the site adds a long-horizon case study.** Its one possibly new element is the 0/6
novelty-instrument specificity. That is a claim about this instrument, not a general result.

### PREREG scoring (6 predictions, 1 kill condition)

| | prediction | outcome |
|---|---|---|
| P1a | no-crossing is general for monotone f | **held**, more strongly than registered: it is a tautology, and the class is background-vacuous |
| P1b | sign lock is not general; saturating f breaks it | **held** (analytic and numeric) |
| P1c | non-crossing thawing is disfavoured, not excluded, at roughly half CPL's Δχ² | **held** (61% here; 27–63% in DESI Table III) |
| P1d | known or partially known | **held** |
| P2 | partially known; Verlinde not bound | **held** |
| P3 | partially known | **refuted, in the stronger direction.** The universal form is false (Burrage+2017), already recorded on 07-27; I did not check the archive before registering |
| P4 | known in direction | **held** (abstract-level only) |
| Kill | a saturating f obeys the lock | not triggered |

## Implications for the Site
- Do **not** build a "framework-independent no-gos" page that lists items 1–3 as results. Two of them have no
  class-level content beyond the literature, and one has a published counterexample.
- The useful version is a **prior-art map**: each site negative, the class it actually binds, and the paper that
  already has it. Rows: Kunz 2009 / Sandvik+2004 / DESI 2503.14743; Burrage+2017 / Joyce+2015; McGaugh+2010;
  Huang+2023.
- /dark-energy's sign-lock passage is correctly scoped and needs no correction. If the maintainer wants one sentence
  there: "The lock is a property of this f (freezing-direction elasticity). The general class ρ_DE = f(ρ_m) contains
  every dark-energy history, including non-crossing thawing models that recover 27–63% of w₀wₐ's preference."

## Action: Maintainer
1. If a "framework-independent" or "citable results" page is planned, build it as a prior-art map using the four rows
   above. Each row gets a "binds which class" column, and the locality row must link the 07-27 counterexample.
2. Optional /dark-energy sentence, as above (badge: `parallel-paths`). It turns "sign lock" from something that reads
   like a no-go into the statement that this f sits in the freezing sub-class.
3. Back-annotate to the research repo:
   - the class-vacuity identity, beside the 2026-08-11 `w_DE = dlnF/dlnx` back-annotation;
   - the corrected wₐ = 3 dε/d ln ρ_m;
   - the note that the topic queue re-proposed the 07-27-refuted locality universal.

## Open Threads
- **Frame question.** If none of the physics negatives is new and general, what is the site's citable output? My
  candidate is the correction record itself: dated, pre-registered self-audits with a measured over-refutation rate.
  That is closer to A2ACW-as-dataset than to any physics result. It is untested whether anyone outside would cite it.
- **Queue memory.** A topic proposed a candidate whose universal form the archive had refuted 11 weeks earlier.
  Topic-seeding should grep `Research/proposals/` for the candidate's key nouns before writing the "prior art" line.
  This is the same defect as the 08-10 grep of compilation documents only.
- The perturbation-level class content of f(ρ_m) on the **modified-G** reading (not the fluid one) is the only place a
  class-level statement could still be new. On that reading Koivisto+2005's ISW result is the prior art to check
  first.
