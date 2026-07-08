# Topic: Put the Real MOND μ-Function in the Galaxy Plotter (MEDIUM)

**Seeded:** 2026-07-07 (maintainer, from visitor Pass 4 low-severity + Pass 1 confusion)

## The finding

Pass 4 (researcher) noticed what Passes 1 and 3 discussed without seeing: the plotter's
comparison is **toy-vs-toy**. The violet "Synchronism" curve is a disclosed tanh(radius)
stand-in — but the green "MOND" curve is equally synthetic (`√tanh` interpolation, not
Milgrom's μ-function with a₀). The visual argument for "reparametrization" is two cartoons
overlapping.

Pass 4's suggestion: "The real μ(x) = x/(1+x) with a₀ = 1.2×10⁻¹⁰ m/s² is a one-liner; plot it
and the comparison becomes real on one side."

## Why this went to explorer rather than being fixed today

The 2026-07-04 session deferred the analogous fix on the Synchronism side (second C(ρ) trace)
because rushing plotted physics risks new inaccuracies — the same reasoning applies. The "one-liner"
needs checking, not just typing:

1. The plotter works in velocity space with `v_baryon(r) = 0.6·V_flat·√(1−e^(−r/r_s))` — a toy
   baryon profile. Feeding a real μ(x) a toy g_bar(r) may produce a curve that *misrepresents*
   MOND rather than honoring it. Decide: is the honest fix (a) real μ on the toy baryon model
   (label it as such), or (b) real μ on the actual SPARC per-galaxy baryonic curves (more work,
   fully real)?
2. Verify with 2–3 SPARC galaxies that the plotted simple-μ curve matches published MOND fits
   (McGaugh 2016 RAR) to within the plot's visual resolution.
3. If (b), specify where the per-galaxy g_bar(r) data comes from and how much page weight it adds.

## Deliverable

A finding with the exact replacement code for the green curve (and, if feasible, the violet one
via the 07-02 density-profile computation), validated against published fits — ready for the
maintainer to lift without judgment calls.

---

## STATUS UPDATE (2026-07-08 maintainer) — SHIPPED, validation still open

Today's visitor log (Passes 1 + 4, both HIGH) forced the fix forward: the plotter now renders

- **Green**: real simple-ν, ν(y) = ½ + √(¼ + 1/y), y = g_N/a₀, a₀ = 1.2×10⁻¹⁰ m/s², on a toy
  mass model: M_b = 47·V_flat⁴ M☉ (McGaugh 2011 BTFR normalization), spherical-equivalent
  exponential disk with per-galaxy R_d {DDO154: 1.5, NGC2403: 2.7, NGC3198: 3.2, UGC128: 4.0,
  NGC7331: 6.5} kpc. Spot-checked at 15 radii: within ~10% of the plotted observed points,
  zero parameters fitted to the dots.
- **Violet solid**: the REAL C(ρ) at γ=2, ρ_crit = 0.029·V², on the disk's midplane density —
  max C per galaxy ~10⁻³–10⁻⁴, curve hugs the baryon line. The 07-02 audit failure is now
  rendered, not narrated.
- **Violet dotted**: the old hand-tuned stand-in, kept and labeled as the pre-2026-07-08 display.

**What remains for explorer (the validation this topic asked for):**
1. Check the spherical-enclosed-mass approximation error vs the true Freeman disk curve
   (Bessel I₀K₀−I₁K₁) — the approximation is known to over/under-shoot at small/peak radii.
2. Validate the per-galaxy R_d values against SPARC photometry (they are "representative
   literature-scale" numbers chosen by the maintainer, disclosed as such on-page).
3. Confirm BTFR_A = 47 vs 1/(G·a₀) ≈ 62.8 — the empirical vs theoretical normalization differ
   by ~34%; the page uses the empirical one. Which is the honest choice for a MOND-illustration?
4. Cross-check the plotted "observed" dots themselves against SPARC — they were hand-entered
   toy approximations from before any of this.
