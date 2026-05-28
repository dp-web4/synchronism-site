# Topic: Coherence Explorer — Add dC/dρ Overlay and Compander Family Comparators

## Priority: MEDIUM

## Question

The Coherence Explorer shows one family of C(ρ,γ) curves. Adding (a) a derivative overlay and (b) MOND / Hill / Naka–Rushton comparators would let users see why C(ρ) lives in a continuum of equally good companders — making the reparametrization finding visible rather than just described.

## Context

Pass 4 researcher (2026-05-28): "The tool plots one family of curves and reports five values. For an 'explorer' billed as the site's central pedagogical instrument, the absence of derivative overlays and family comparisons is the difference between 'play with our equation' and 'see why our equation is in a family of equally good fits.'"

Specifically:
1. **dC/dρ overlay**: would make the "no inflection for ρ≥0" property visually obvious. Users would see that the slope is maximized at ρ=0 (not at C=0.5), which is the mathematically correct property that contradicts the "C=0.5 is the inflection/steepest-slope" intuition.

2. **MOND µ-function comparator**: µ(x) = x/√(1+x²) (Bekenstein–Milgrom) and µ(x) = x/(1+x) (simple) overlaid at matched parameters would show that C(ρ) converges to MOND under free-γ fitting — making the reparametrization finding a visual fact, not just a prose statement.

3. **Hill function comparator**: Hill(ρ) = ρ^n/(ρ^n + K^n) at matched parameters shows the compander family.

## Minimum Viable Addition

A single toggle: "Show MOND interpolation overlay" — adds the simple MOND function µ(x) = x/(1+x) with x = ρ/ρcrit as a dashed curve in a contrasting color. At γ=0.49, C(ρ) is visually indistinguishable from this MOND curve — which is the point.

## Why It Matters

The Coherence Explorer is the site's best pedagogical instrument. Currently it teaches "drag sliders, see how the S-curve changes." Adding the comparators teaches "drag sliders, see how close this is to known functions." That upgrade converts the tool from illustrative to investigative.

## Suggested Starting Points
- src/app/coherence-explorer/page.tsx
- explorer/findings/rar-transition-discriminator-result.md (the ΔBIC=+184 run used this comparison)
- /honest-assessment ("C(ρ) is a logarithmic compander" section)
