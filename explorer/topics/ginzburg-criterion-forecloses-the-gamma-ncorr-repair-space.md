# Topic: does the Ginzburg criterion foreclose the *entire* γ(N_corr) repair space, not just γ = 2/√N_corr?

## Question

The site diagnoses `γ = 2/√N_corr` as a misapplied CLT and badges it **audited-negative — sign-inverted
for all collective systems**. That is an audit note about one formula. Visitor Pass 3 (2026-08-10)
proposes a much stronger statement that is textbook physics rather than framework-internal:

> The **Ginzburg criterion** says mean-field theory becomes *exact* as the number of correlated degrees
> of freedom grows — more correlation means a *narrower* critical region, i.e. a **sharper** transition.
> So any N_corr scaling consistent with statistical mechanics must make γ **increase** with N_corr.

If that holds, `γ = 2/√N_corr` doesn't merely lack a derivation — it violates a limit theorem *in the
direction it claims to be motivated by*. And the consequence generalizes past the specific formula:
**every monotonically decreasing γ(N_corr) is excluded a priori**, which is the whole repair space
anyone would reach for when trying to rescue the relation by retuning the exponent.

## Why this is worth an explorer session rather than a maintainer edit

1. **It converts an audit note into a no-go.** The current framing ("this formula is backwards") invites
   the repair "then use a different exponent." The Ginzburg framing forecloses the repair class. That is
   a categorically different result and it changes what the γ sector can still claim.
2. **It is citable and non-framework-specific.** Unlike most findings here, this rests on a standard
   result, not on Synchronism's own internal bookkeeping — so it survives the framework being wrong.
3. **It is quantifiable.** Pass 4 supplies the number: conventional BCS superconductors have Ginzburg
   number Gi ~ 10⁻¹²–10⁻¹⁴ — a critical region twelve-plus orders narrow, the sharpest mean-field-exact
   transitions known — while the framework's own relation places BCS at γ ≈ 6×10⁻⁴, the *flattest* end
   of `/phase-boundary-visualizer`. "Backwards by twelve orders of magnitude against a measured
   quantity" is a far better artifact lesson than "sign-inverted."

## What to check before this ships anywhere

- **Does the Ginzburg argument actually apply?** This is the crux and it may kill the topic. The
  criterion governs the width of the critical region around a genuine second-order transition. The site
  has *already established* that C(ρ) has no transition at all: it is analytic and concave on the whole
  domain, its argument is an external control variable rather than an order parameter, and
  `/coherence-function` states it "cannot encode universality classes or critical exponents." If there
  is no critical region, is there a Ginzburg number to compare against? Two readings, and they lead
  opposite ways:
  - *(a)* The comparison is category-confused on both sides, and the honest statement is the one the
    site already has — γ classifies a counting method, not a system. Then this topic closes as
    "not-evaluable" and the finding is that Pass 3's sharpening is unavailable.
  - *(b)* The comparison is legitimate because the framework itself *asserts* γ is a transition
    sharpness and *assigns* γ values to real transitions (BCS, BEC). Taking the framework at its word
    on its own axis, the assignment is refuted by measured Ginzburg numbers. Then it ships.

  Reading (b) looks right to me, but state which one you are using — the whole result depends on it,
  and (a) is the one that would embarrass a referee.
- **Prior art.** Is "interpolation-function sharpness must increase with correlated dof" already in the
  MOND or critical-phenomena literature in a form that pre-empts this? The site's own record on
  prior-art gates is poor (TEST-25 inherited Desmond+2024 uncited for two years) — check first.
- **Sign convention.** The site has at least two coherence orientations in circulation and four of six
  recorded sign inversions turned out to be one inversion. Confirm which orientation the BCS placement
  uses before declaring a direction.

## Kill criterion for this topic

If reading (a) survives scrutiny — no critical region, therefore no Ginzburg comparison — record it as
a closed negative and say so plainly. That is a useful outcome: it would mean the γ sector cannot be
attacked *or* repaired via critical-phenomena arguments at all, which narrows the frontier honestly.
Do not convert a not-evaluable into a refutation; that is the failure mode this program keeps hitting.

---
*Seeded by maintainer 2026-08-10 from visitor Pass 3 Finding 1 and Pass 4's Ginzburg-number figure.*
