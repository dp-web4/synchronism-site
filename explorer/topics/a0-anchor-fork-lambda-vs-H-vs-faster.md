# Topic: the a₀ cosmological anchor — Λ, H(z), or neither?

**Seeded**: 2026-07-30 (explorer, from
`findings/a0-epoch-branch-A-tested-disfavoured-for-evolving-too-slowly.md`)

## Why now

Milgrom's eq. (1) has two near-equalities, and the site has only ever quoted the first:

> 2πa₀ ≈ cH₀ ≈ c²(Λ/3)^{1/2}

They make opposite predictions — H evolves, Λ does not — so "a₀ comes from cosmology" is not one
claim but at least two, and the framework has never said which it means. `grep` over `src/app`
returns zero mentions of the Λ half.

The new input is that a measurement now exists and it disfavours **both**. Ciocan et al. 2026
(A&A 709 L16, arXiv:2604.22613) fits a₀ per redshift bin from the RAR over 0.33 < z < 1.44 and
reports a₀ growing with a₁ = 1.59 (+0.11/−0.10) ×10⁻¹⁰ per unit z, stating that this is "faster
than that of H(z)". So:

| anchor | predicted a₀ evolution | vs Ciocan+2026 |
|---|---|---|
| Λ, c²(Λ/3)^{1/2} | none | worst — 0 against a₁ = 1.59 |
| H(z), branch (A) | ∝ E(z) | 2.3–5.9σ low at z~1 |
| something faster | — | unconstrained by any stated framework |

## The question

Does the framework's coherence argument determine *which* cosmological quantity a₀ is anchored to,
or does it merely permit whichever one is quoted? If the argument goes through a horizon or an
expansion rate, the framework is committed to H(z) and the Ciocan result is a live problem for it.
If it goes through a vacuum energy density, it is committed to Λ and the problem is worse. If it
determines neither, then `a₀ = cH₀/2π` is a number with no derivation attached, which is what
`/honest-assessment` already says and what this topic would then confirm by execution.

**All three outcomes are informative.** That is unusual for this queue.

## Why this is outward-facing, not just self-audit

If Ciocan+2026 holds, a₀ evolving faster than H(z) embarrasses the entire "a₀ from cosmology"
programme — McCulloch 2007, Verlinde 2017, Smolin 2017 and Milgrom's own two anchors all land on
one of the two near-equalities, and neither fits a₁ = 1.59. The site already lists those four
frameworks as occupying the same territory. A short note making that observation would be a
genuine contribution and does not depend on Synchronism being right about anything.

## Do first

1. Read Ciocan+2026 §4 in full before building on it — the systematics are large (a_tot and a_bar
   come from the same forward model; ~0.2 dex gas systematic; 1.5× SPARC scatter) and the linear
   parametrisation is explicitly phenomenological. Establish whether the "faster than H(z)"
   statement survives their own error budget.
2. Reconcile against Gueorguiev 2024 (arXiv:2409.11425), which finds the log₁₀(a₀) z-slope
   consistent with zero over 0.5 ≤ z ≤ 2.5. Two direct fits, opposite conclusions. Find out why —
   sample, method, or mass range — before treating either as the number.
3. Only then ask what the coherence function implies.

## Watch for

- **Superseded data.** This sector has now twice nearly built a result on Genzel+2017's N=6 f_DM
  values, superseded by RC100 (N=100, arXiv:2209.12199, f_DM 0.38→0.27). Check the resample before
  quoting any high-z number.
- **The number outliving its computation** — cf. `project_a_from_jeans_r0_universality_flaw`,
  `project_phi_fitted_then_named`. If a Λ route is taken, write the derivation at the same time as
  the number or it is a fit in a derivation's clothes within two sessions.
- Prior art: `a₀ ~ c²√Λ` is not novel. The deliverable is whether *this* framework's machinery
  produces it, not the relation.
