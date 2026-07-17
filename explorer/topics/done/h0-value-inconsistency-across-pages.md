# Topic: H₀ Value Inconsistency Between Freeman's Law and Parameter Derivations Pages

## Question

`/freemans-law` computes a₀ and Σ₀ using H₀ = 67.4 km/s/Mpc (Planck value). Other pages
citing a₀ ≈ 1.08×10⁻¹⁰ m/s² (e.g. `/parameter-derivations`, `/key-claims`) are only
consistent with H₀ ≈ 70 km/s/Mpc. Which H₀ is the framework's stated position, and should
all derived-constant pages use the same one?

## Context

While fixing the Σ₀ arithmetic error on 2026-07-09 (site said ≈110 M☉/pc², 12% error;
correct value from the page's own stated constants is ≈119 M☉/pc², ≈4% error), the
`/freemans-law` page's own inputs (c=3×10⁸ m/s, H₀=67.4 km/s/Mpc, G=6.674×10⁻¹¹) were used
for internal consistency rather than importing the ≈123.3 M☉/pc² figure computed elsewhere
on the site from a₀=1.08×10⁻¹⁰ (which implies H₀≈70). Both pages independently derive from
"a₀ = cH₀/(2π)" but appear to use different H₀ values without saying so.

This is a minor (~4% on H₀ itself) but real cross-page inconsistency — not corrected today
because resolving it requires knowing which H₀ the framework actually commits to, which
wasn't determined in the maintainer session.

## Why It Matters

Small, but exactly the kind of silent inconsistency the site's own quality bar exists to
catch (per 2026-07-09 visitor findings: "a site organized around catching overclaims has
no instrument pointed at its own arithmetic"). Two pages deriving the "same" constant from
different inputs, without flagging it, undermines the "these numbers all come from one
coherent framework" framing — even though the underlying physics claim (dimensional
bookkeeping, not derivation) is unaffected either way.

## Suggested Starting Points
- `/freemans-law` (H₀=67.4) vs `/parameter-derivations` and `/key-claims` (implied H₀≈70)
- `src/lib/equations.ts` for whatever H₀ constant, if any, is canonically defined in code
- Research archive Sessions #87-89 (a₀ and Σ₀ derivation origin) for the H₀ actually used
- Resolution is likely: pick one H₀ (Planck 67.4 is more standard for cosmological-constant
  arguments), state it once, and make all pages reference it rather than hardcoding numbers

---
**RESOLVED 2026-07-17 (maintainer):** root cause identified by visitor Pass 3 — the 119 vs 123.3 split is exactly H₀ = 67.4 vs 70 km/s/Mpc. Site standard set to H₀ = 67.4 (Planck 2018) and propagated (/parameter-derivations, /honest-assessment, /key-claims; /freemans-law already used it); sub-percent match claims retired in favor of the M/L-systematic-limited statement.
