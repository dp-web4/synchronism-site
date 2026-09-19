# PREREG — is the globular-cluster knee window conditioned on Newton through the catalogue mass?

**Registered 2026-09-19 (maintainer), before the control script exists.** Committed on its own.

## Where this comes from

Visitor log 2026-09-19, researcher persona: the GC outer-slope test (explorer 2026-09-07,
`explorer/findings/scripts/gc_slope_with_mond.py`) scores every gravity law against Baumgardt & Hilker
mass models that are N-body fits *to the same σ(r) profiles under Newtonian gravity*; "shape test, mass
normalization cannot enter" does not cover it; this "biases toward Newton in the direction that
manufactures exclusions."

This is a refutation-side claim from a persona. Per the 2026-09-17 finding (over-refutation share 1/20 →
9/24) it gets audited as hard as a pro-framework claim would, in both directions: it could be right (the
window is inflated) or wrong (the window is robust). Yesterday a well-argued persona refutation failed on
execution; that is not evidence about this one.

## What I read in the code before registering (exposure declaration)

- `gc_slope_with_mond.py` uses catalogue `M` with **no free mass scale**. The statistic is
  d log σ / d log r over the outer window. Under Newton σ ∝ √M so the slope is M-independent. Under MOND
  (g_N/a₀) and under the density law (ρ/ρ_c) the slope **does** depend on M. So "normalization cannot
  enter" is true of the Newtonian row only. The persona's mechanism is therefore real in form. Its
  *size* is unknown — that is what is registered here.
- The shape is an analytic King-like (`r_c`) or Plummer (`r_hm`) profile, not the N-body density itself.
  `r_hm` is a 3-D half-**mass** radius from the Newtonian N-body model; the catalogue also lists the
  projected half-**light** radius `r_hl`, which is closer to photometric.
- I have run the unmodified script once in a scratch directory (identity: −0.057 / −0.093 / −0.245 /
  −0.211 for Newton / MOND+EFE / MOND no-EFE / density knee 0.161 floored, King, 42 clusters). I have
  **not** run any variant with a rescaled mass or a swapped radius.

## Arms

**Identity control (must pass before anything else is read):** at f = 1 on the King model, tracer = all,
outer factor 3, reproduce −0.057, −0.093, −0.245, −0.211 to three decimals; N = 42.

**Arm A — self-consistent mass.** For each cluster and each law, fit one mass scale f (grid, log-spaced
0.03–3, χ² over all usable bins inside 0.98 r_t, isotropic Jeans through the same solver) so that *that
law's* σ_los(R) matches the observed profile. Then evaluate the outer slope at that f. Internal control:
the Newtonian row's slope residual must be unchanged (σ ∝ √f). Report mean f per law.

**Arm B — photometric scale radius.** Plummer with a = `r_hl` (for a Plummer sphere the projected
half-light radius equals a) instead of a = `r_hm`/1.30477, catalogue M. Baseline is the unmodified
Plummer run.

**Arm A×B** — both together, reported but not used for the verdict.

## Pre-fixed verdict rule (King model, Arm A; Arm B reported beside it)

Let R = |density-knee-0.161-floored residual| / |Newtonian residual|. Published: 3.7×. The site treats
MOND+EFE's 1.7× as "marginal".

- **Critique SUPPORTED** (window materially inflated by Newton-conditioning): R < 2.0 under Arm A.
- **Critique REFUTED** (window robust to it): R ≥ 3.0 under Arm A.
- **PARTIAL**: 2.0 ≤ R < 3.0.

Same rule applied to MOND-without-EFE (published 4.3×) as a second readout; no verdict hangs on it.

## My predictions (so the miss is scoreable)

1. Identity passes.
2. Density-law best-fit f lands in 0.35–0.8 (the boost is ≤ 3.17, and inner bins sit above the knee).
3. Ordering of the rows is unchanged under Arm A.
4. R moves by less than 30 % of itself under Arm A → verdict **REFUTED**.
5. Arm B moves R by less than 20 %.

## What this does NOT test

Potential escapers, anisotropy, the L3/striction reading (under which the window already does not
survive), the external-field refraction term. Those caveats stand on the site regardless of outcome. No
bucket moves on any branch; refutation count stays 6; Bucket 0 = 0.
