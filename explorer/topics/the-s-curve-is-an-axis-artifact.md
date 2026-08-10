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
