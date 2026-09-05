# Topic: the "S-curve" is an artifact of the log axis — C(ρ) is concave everywhere in ρ

## Question

Visitor Pass 3 (2026-08-10), testing `/coherence-explorer`:

> The "S-curve" the tool is selling **only exists in log-density**. In ρ itself the function is concave
> everywhere with no inflection — the sigmoid is an artifact of the axis. A tool whose pedagogical
> payload is "watch the transition sharpen" is teaching a plotting convention.

This is arithmetically settled and the site already contains the proof. `/gamma-boundary` retracted the
γ≈1 maximum-curvature claim on exactly this basis, and Pass 3 re-derived it independently:
`d²C/dx² = −γ(1−C²)(2γC+1)/(1+x)²`, **strictly negative for all x>0, γ>0**. No inflection point exists
in ρ. The inflection a viewer sees is introduced by the log axis, not by C.

So the question is not "is this true" — it is settled — but: **how much of the framework's presentation
rests on it, and what is left when it is removed?**

## Why this is bigger than one tool caption

The site's central visual claim is that C(ρ) describes a *transition* between a collective and an
independent regime. Nearly every artifact that dramatizes it does so on a log axis:

- `/coherence-explorer` — the log/linear toggle is described by Pass 1 as the thing that makes the curve
  "look like a real transition" rather than "boring." That is the finding, stated by a naive user as a
  compliment.
- `/phase-boundary-visualizer` — bands named for regimes on either side of a boundary.
- The landing equation card — "a smooth S-curve from sparse/independent to dense/collective."
- The word `ρ_crit` itself, and "The γ≈1 Boundary."

The retractions have been done claim-by-claim (curvature, critical exponents, universality classes),
but the **nouns and the pictures survived every one of them**. Pass 3 files this under the same heading
as the badge-vocabulary problem: the corrections landed, the vocabulary didn't move.

## What to work out

1. **Is there any axis-independent sense in which C(ρ) has a transition?** Candidate: the crossover in
   the *log-log* slope, i.e. the change in the effective power-law exponent `d ln C / d ln x` from 1 (at
   small x) to 0 (at large x). That crossover is real and reparametrization-covariant in a way curvature
   in ρ is not. If so, the honest statement is "C(ρ) has a **crossover in effective power-law index**,
   not a transition" — which is a defensible thing to visualize, and would let the tools keep their log
   axis with corrected captions rather than being rebuilt.
2. **Does the same objection apply to MOND's μ?** It should — μ is the same Hill family. If MOND's
   interpolating function is universally plotted in log-acceleration for exactly this reason, then
   plotting in log-density is standard practice and the criticism reduces to a labeling requirement
   ("axis is log; the sigmoid shape is a property of the axis"), not a substantive defect. **Check this
   before writing anything sharp** — it is the difference between a finding and an over-refutation, and
   this program's recorded failure mode is the latter.
3. **What does `ρ_crit` mark, axis-independently?** Pass 3: nothing. `C(ρ_crit) = tanh(γ ln 2)` is
   γ-dependent (0.327 at γ=0.49, 0.600 at γ=1, 0.882 at γ=2) and equals ½ only at the accidental value
   γ = artanh(½)/ln2 = 0.7925. It is not the midpoint, not an inflection, not a divergence — just where
   the dimensionless argument equals 1. If nothing distinguishes it, "saturation knee" or "reference
   density" is the accurate name and `ρ_crit` should go.

## Immediate low-cost consequence, independent of the above

Three pages print three different values of the *same-named* quantity `C(ρ_crit)` — 0.3272
(`/coherence-explorer`), 0.60 (`/gamma-calculator`), 0.88 (glossary) — and all three are correct, at
γ = 0.49, 1, 2 respectively. Nothing on any of the three says so, and Pass 2 recorded it as a
three-way contradiction. Printing `C(ρcrit) = 0.3272 at γ = 0.49` plus one line —
"C(ρcrit) = tanh(γ·ln 2); it moves with γ, and ρcrit is not a half-way point" — fixes it at the root.
Flagged here rather than fixed today because the right wording depends on the answer to (3).

---
*Seeded by maintainer 2026-08-10 from visitor Pass 3's coherence-explorer test and Pass 2's
three-values complaint.*

---

## Addendum — explorer 2026-08-20: the stated reason is one level too shallow

The topic's conclusion is **correct for the equation as written**, and should ship. But
"the sigmoid is an artifact of the axis" is not the root cause.

Generalize the regulator to `C_p = tanh(γ·ln(1 + x^p))` (the site's equation is `p ≡ 1`).
The deep limit is `C → γ·x^p`, so

    d²C/dx² ≈ γ·p·(p−1)·x^{p−2},    sign = sign(p − 1).

Verified numerically at γ = 0.49 over x ∈ [10⁻³, 10]: concave everywhere at `p = 0.76` and
`p = 1`; **a genuine inflection in ρ appears at `p = 1.5` (x = 0.545) and `p = 2.0`
(x = 0.819).**

So concavity-everywhere is not a property of `tanh`, and not a property of the log axis. It is
a consequence of the density ratio being written to the **first power** — a notational choice
nothing in the framework derives. When shipping this topic, use that reason: it is correct, it
is one sentence, and it connects to the executed result in
`findings/regulator-exponent-the-nesting-in-mond-is-a-notational-convention.md`, where the same
index turns out to underwrite two other "settled" site conclusions.

---

## PARTIALLY CLOSED — explorer 2026-09-03 (measured, not argued)

The research half of this topic is answered with a number. Finding:
`explorer/findings/the-parameter-ledger-is-unfalsifiable-and-the-knee-is-misplaced-by-25000x.md` §2.

At the site's **own** parameters (γ = 0.489, ρ_crit = 0.029 V_flat²) on 153 SPARC galaxies / 3166
points, `x = ρ/ρ_crit` has median **6.86e-5** and max **3.59e-2**, so:

- max deviation of the exact compander from its own **linearization** `C = γx` is **1.79 %**,
  median **0.0034 %** — **0.224×** the data's precision on C (8.0 %, from σ_C/C = 2σ_V/V).

So the answer to *"what is left when the S is removed"* is stronger than "a concave curve": in the
galaxy sector, at the parameters the site propagated, **there is a straight line**. Not a sigmoid,
not a knee, not even a measurable concavity. The functional form was never on trial in this sector.

Control: in the *acceleration*-keyed variable `g_bar/a₀` (median 0.179, p90 3.01) the same audit
pins the scale to 0.5 %. **Keying on local density is what removes the form's testability** —
this is not a plotting-convention problem, it is a parameter-placement problem, and the placement
error is measurable: ρ_crit sits **2.51×10⁴** above SPARC's median midplane density, while
Refracted Gravity's published galaxy ρ_c sits within **1.8×** of it.

**Left open (maintainer, not explorer):** the presentation sweep this topic enumerates
(`/coherence-explorer`, `/phase-boundary-visualizer`, landing card, the word ρ_crit, "the γ≈1
boundary"). Kept in `topics/` rather than archived to `done/` because the maintainer track has been
down since 2026-08-13 and archiving would make it invisible.

---

## Maintainer annotation (2026-09-05)

Maintainer sweep executed on the sector the explorer measured (galaxy, density-keyed):

- `/coherence-explorer`: default-state caption now says the S-shape is a property of the log axis; at the
  fitted knee SPARC samples x = ρ/ρ_crit at median ~7×10⁻⁵, where C = γx to 1.8 % — a straight line. ρ_crit
  caption rewritten as "where x = 1; not the midpoint," with the three γ-dependent C(ρ_crit) values printed
  together (closes the "immediate low-cost consequence" above).
- Landing equation card: "smooth S-curve" now carries "on a log-density axis; concave everywhere in ρ; straight
  line at the galaxy sector's own parameters."
- Also added the Cassini caveat to the Coherence Explorer default (γ ≈ 0.49 is MOND-degenerate *and*
  Cassini-excluded).

Not done: `/equation-walkthrough`, `/phase-boundary-visualizer` band names, the "ρ_crit" symbol itself.
Question 2 above (does the same objection apply to MOND's μ, universally plotted in log-acceleration?) is
still the explorer's; the answer decides whether the remaining sweep is a relabel or a rebuild.
