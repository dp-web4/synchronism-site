# Finding: A-from-Jeans Fails the Decisive Test — and Fails Differently Than Anyone Thought

**Date:** 2026-06-07
**Explorer session**
**Script:** `explorer/scripts/a_from_jeans_chain_of_custody.py` (all numbers below reproduced from primary sources)

## Origin

Topic `a-from-jeans-r0-derivation-audit.md` (HIGH, seeded by maintainer 2026-06-07 from
visitor Pass 4). The visitor flagged that A = 4π/(β_J²·G·R₀²) ≈ 0.0294 — **the only surviving
first-principles claim in the framework** — uses **R₀ = 8 kpc, the Sun's galactocentric
radius**, inside a coefficient asserted universal across all galaxies. The decisive test:
re-derive A with a galaxy-intrinsic scale. If it only works with R₀ = 8 kpc, A joins a₀ and Σ₀
in the "dimensional coincidence" bucket and the framework has **zero** independently-derived
first-principles predictions.

## Summary

The decisive test comes back **negative**, but for a sharper reason than the visitor's "Milky
Way coincidence" framing. By reconstructing the original computation from the actual Session 66
*script* (not the markdown summary the site and the visitor were both working from), three
facts emerge:

1. **The "5% agreement" computation is for the wrong scaling law.** The only calculation that
   actually produces 0.0294 (Session 66's `session66_A_gap_investigation.py`) uses a
   genuinely **galaxy-intrinsic** length (R_half = R₀·V^0.75, with R₀ = 0.07 kpc/(km/s)^0.75 —
   a *fitted size-velocity slope*, not 8 kpc) and yields **ρ_crit ∝ V^0.5**. The framework
   everywhere uses **ρ_crit ∝ V²** (`equations.ts:23`). The one derivation that hits 5%
   underpins a law the framework does not use.

2. **The site's stated formula does not reproduce its own headline number.** The live site
   (and Session 644, the most recent audit) state A = 4π/(β_J²·G·R₀²) with β_J = 1, R₀ = 8 kpc.
   Computed honestly, those inputs give **A = 4.6×10⁻⁵**, which is **~600× away** from the
   empirical 0.028 — not 5%. The "5% agreement" was silently imported from the V^0.5 script,
   which used different inputs and a different exponent.

3. **The number 0.0294 has been detached from its computation for ~600 sessions.** No session in
   the chain (66 → 631 → 644 → site) ever re-ran A = 4π/(β_J²·G·R₀²) with the inputs it states.
   The Session 66 markdown "verification" itself needs an **unexplained 644× "unit conversion"**
   to get from its own arithmetic (4.57×10⁻⁵) to 0.0294.

**Verdict: A-from-Jeans is not an independent first-principles derivation under any reading.**
The framework has zero first-principles predictions with an independent derivation. This is the
clean terminal state the topic anticipated.

## Research Notes

### The actual derivation (Session 66 script, the only thing that yields 5%)

`simulations/session66_A_gap_investigation.py` computes, in galactic units
(G_gal = 4.30×10⁻⁶ (km/s)²·kpc/M_sun):

```
A = 4π / (α² · G_gal · R₀²) / 1e9      [kpc³ → pc³]
  with α = 4.5,  R₀ = 0.07 kpc/(km/s)^0.75
  = 4π · 0.00234
  = 0.02944           → vs empirical 0.028, ratio 1.051  ("5% agreement") ✓ reproduced
```

The structure is:
```
Jeans:    λ_J = α · R_half
size-vel: R_half = R₀ · V^0.75        (empirical scaling, R₀ is its slope)
⇒ ρ_crit = V² / (α² G R_half²) = V² / (α² G R₀² V^1.5) = V^0.5 / (α² G R₀²)
⇒ ρ_crit = A · V^0.5,   A = 1/(α² G R₀²)
```

Session 65 confirms this exponent explicitly (`Session65...:25`):
`ρ_crit = A × V^B = 0.028 × V^0.5 M_☉/pc³`, with B = 0.5 labeled "SEMI-DERIVED" and
A = 0.028 "CONSTRAINED" (empirical fit, ~10× pre-4π gap).

**So the empirical A = 0.028 is the coefficient of V^0.5.** It has units M_sun/pc³/(km/s)^0.5.
When the framework later adopted ρ_crit ∝ V² (`equations.ts`), it carried the *same number*
0.028/0.029 into a law where A has different units (M_sun/pc³/(km/s)²) — a dimensional
non-sequitur that has never been re-derived.

### Three fitted/chosen inputs, not one

The "5% agreement" rests on:
- **α = 4.5** — the Jeans-length-to-half-radius ratio, *fitted*, and Session 53 found it varies
  **1.3–4.5 by galaxy type**. (Session 631 separately confirmed the symbol "α" is fiducial,
  not the fine-structure constant — but missed that the script that produced 0.0294 used 4.5,
  not the markdown's 1.0.)
- **R₀ = 0.07 kpc/(km/s)^0.75** — the *fitted slope* of the size-velocity relation
  R_half = R₀·V^0.75. This is the quantity the site mislabels as "R₀ = 8 kpc, the Sun's
  galactocentric radius." They are not the same object; the script's R₀ is dimensionally a
  slope, not a length.
- **4π** — chosen *post-hoc* to close a ~12× gap. The script literally grid-searches a list of
  candidate constants near 12 (`4π, 12, 2π·2, π², (2π)²/π, ...`) and selects 4π because it is
  closest. The "Jeans surface-area" story is attached afterward.

### The decisive test, already answered inside the framework's own script

| Length scale used | velocity law | matches framework's V²? |
|---|---|---|
| galaxy-intrinsic R_half = R₀·V^0.75 (the actual derivation) | ρ_crit ∝ **V^0.5** | **no** |
| fixed length L = const | ρ_crit ∝ V² | yes, but L must be chosen by hand |

To get the framework's ρ_crit ∝ V² law you must remove the galaxy-intrinsic V-dependence of the
length, i.e. freeze R_half at a constant. The fixed length that reproduces the empirical 0.028
(β_J = 1, with 4π) is **L ≈ 0.32 kpc** — not 8 kpc, and not galaxy-intrinsic. With β_J also
free, that is **two knobs for one number**.

So the visitor's instinct was right (A is a calibration in derivation's clothing) but the
mechanism is sharper: the galaxy-intrinsic re-derivation the topic proposed was *already run* in
Session 66, and it produces the **wrong scaling exponent (0.5 vs 2)**. The "8 kpc" on the site is
not even the number used to get 5% — it is an artifact of a garbled markdown summary.

### Why nobody caught it: a number that outlived its computation

The propagation chain:
- **S65**: ρ_crit = 0.028·V^0.5, A constrained empirically. (exponent 0.5, explicit)
- **S66 script**: A = 0.0294 via α=4.5, R₀=0.07 slope, 4π — *for the V^0.5 law*.
- **S66 markdown**: retells it as "α=1.0, R₀=8 kpc," needs a phantom 644× "unit conversion" to
  reach 0.0294, and shows ρ_crit = A·V² in the summary (exponent silently flipped to 2).
- **S631**: reads the markdown, confirms α is fiducial (true), but never re-runs the arithmetic.
- **S644**: restates "β_J=1, R₀=8 kpc → 0.0294," correctly diagnoses calibration-vs-prediction —
  but on a formula whose stated inputs give 4.6×10⁻⁵, not 0.0294. Never recomputed.
- **Site**: ρ_crit = A·V², A = 4π/(β_J²GR₀²), β_J=1, R₀=8 kpc, "5% agreement."

This is the static/archival twin of the 2026-05-25 DESI epistemic-regression event. There, a
confident *correction* overwrote a verified result. Here, a headline *number* (0.0294) became
detached from the computation that produced it and propagated through 600 sessions and onto a
public page, while every subsequent "audit" restated the inputs without re-running them.
**Re-reading a derivation is not auditing it; re-running it is.** Both events share one fix:
artifact-execution, not artifact-trust.

## Implications for the Site

The current `/parameter-derivations` card (lines 96–125) is wrong in three ways:
- It presents "5% agreement" for ρ_crit = A·V² with β_J=1, R₀=8 kpc — inputs that give
  4.6×10⁻⁵, not 0.0294.
- The "⚠ Open question (2026-06-07)" box frames the issue as "is R₀=8 kpc Milky-Way-specific?"
  The real issue is that the 5%-achieving derivation uses a *galaxy-intrinsic* length and
  produces the *wrong velocity exponent* (0.5, not 2); the framework's V² law is not derived at
  all, and its coefficient is the V^0.5 number carried over with mismatched units.
- "Active-MRH — Derivation Under Scrutiny" is now too generous. The scrutiny is complete: the
  derivation does not produce the law it is cited to support.

## Action: Maintainer

1. **`/parameter-derivations` card 3 — replace the open-question box** with the closed result:
   > **Closed (2026-06-07):** The Session 66 computation that achieves "5% agreement" derives
   > ρ_crit ∝ V^0.5 using a *galaxy-intrinsic* length (R_half = R₀·V^0.75, R₀ a fitted
   > size-velocity slope) and a post-hoc-selected 4π. The framework's actual law is ρ_crit ∝ V²
   > (`equations.ts`), which this derivation does not produce. The site's stated inputs
   > (β_J=1, R₀=8 kpc) give A ≈ 4.6×10⁻⁵, ~600× from empirical 0.028; the "5% agreement" was
   > imported from the incompatible V^0.5 calculation. A from Jeans is a calibration, not an
   > independent derivation.
2. **Badge: `active-mrh` → `reparametrization`** (or `audited-negative`). Add to the
   honest-assessment failure/closure catalog: "A-from-Jeans: derivation produces ρ_crit ∝ V^0.5,
   not the framework's V²; coefficient is a V^0.5-law fit reused with mismatched units."
3. **Honest-assessment headline update:** the framework now has **zero** first-principles
   predictions with an independent derivation. Every dimensional quantity (a₀, Σ₀, R₀, Γ, A)
   traces to a known coincidence or a calibration. State this plainly — it is the clean terminal
   state of the physics audit, and a stronger, more honest position than "one derivation under
   scrutiny."
4. **Fix the V^0.5 vs V² inconsistency** wherever ρ_crit = A·V_flat² appears, OR document that
   the exponent and coefficient were changed without re-derivation.

## Open Threads

- **Does ρ_crit = 0.029·V_flat² even give sensible densities?** For V=150 km/s it yields
  ~650 M_sun/pc³ — far above galactic mean densities (~0.1). The coefficient may be carrying
  hidden unit baggage from the V^0.5 → V² switch. Worth a units audit of `criticalDensity()`.
- **Path C (Session 644):** the one route that could convert calibration → prediction is using
  an *independently measured* velocity dispersion σ (not V_flat) to get β_J, then testing
  whether ρ_crit = V²/(G β_J² R_half²) reproduces A = 0.028 across SPARC without circularity.
  This requires SPARC σ data; cost $0. It is the only remaining way A-from-Jeans could become a
  real prediction — but note it would predict the V^0.5 law, not V².
- **Methodology paper exhibit:** "the number that outlived its computation" is a clean,
  self-contained second case study (alongside the DESI regression) for the A2ACW methodology
  write-up's section on closed-loop audit failure modes.
