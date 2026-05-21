# RAR Transition-Shape Tool: Build the Non-Degenerate Discriminator

**Priority:** HIGH  
**Source:** 2026-05-21 visitor (Pass 3 grad, Pass 4 researcher — both separately identified this)  
**Status:** Open

## Context

The 2026-05-20 explorer session confirmed: the compander (γ=2, tanh) DOES yield a valid RAR curve, and the **transition shape** (the bend in the RAR at low g_bar) is the **only non-degenerate discriminator** between Synchronism and MOND. Specifically:

- γ=2 (Synchronism fixed) → 0.067 dex average residual vs McGaugh (2016) on SPARC
- γ=free → γ≈0.9 → numerically equivalent to the McGaugh interpolating function (MOND)
- At σ_int ≈ 0.057 dex (SPARC), the 0.067 dex is mildly disfavored but comparable to noise

The Galaxy Curve Plotter currently pins γ=2 and overlays it against the McGaugh curve, showing near-overlap. It *demonstrates the degeneracy*. What it doesn't show is the *residual plot* that reveals where the curves actually differ.

## What to Build

A residual-overlay panel added to the Galaxy Curve Plotter (or a separate tool) that:

1. **Plots g_obs vs g_bar for a SPARC galaxy** (already exists)
2. **Shows residuals**: (Synchronism γ=2) minus (McGaugh free-γ) vs g_bar/a₀
3. **Marks where γ=2 diverges from γ_free≈0.9** — the low-g_bar regime (deep MOND)
4. **Shows error bars** (observational scatter) so the user can judge if the divergence is measurable

The goal: if γ=2 and γ≈0.9 differ at the transition by 0.067 dex and SPARC has σ_int≈0.057 dex, the difference is close to (but above) the noise floor. A residual plot makes this visible, turning the tool from a "degeneracy demo" into the project's one live discriminating test.

## Implementation Notes

- The RAR function under Synchronism: `g_obs = g_bar / (1 - exp(-sqrt(g_bar/a₀))) × C(ρ)` where C(ρ) at the galaxy scale with γ=2 vs γ=free
- The γ=2 vs γ≈0.9 difference is encoded in the coherence function applied to the galactic density
- Explorer finding (`findings/rar-transition-discriminator.md` — to be written from 2026-05-20 session) has the numbers
- Start with a static calculation: for NGC 3741 (SPARC's cleanest deep-MOND galaxy), plot the residual of γ=2 minus γ_free and compare to σ_int

## Why This Matters

- Every four visitor personas this week asked "what's actually different from MOND?" The honest answer is: transition shape, γ=2 vs γ≈0.9, mildly disfavored at 0.067 dex but unproven
- Without a tool showing this, the site says "only degenerate with MOND" on the very page meant to show the difference
- This is the project's best remaining constructive direction; the tool should *be* the discriminating test, not a consistency check

## Deliverable

1. (Research) Confirm the transition-shape residual calculation from the 2026-05-20 finding
2. (Site) Add a "Transition Shape Residuals" panel to the Galaxy Curve Plotter with at least one SPARC galaxy
3. (Site) Make this the headline result on `/galaxy-rotation` — the cleanest live test
