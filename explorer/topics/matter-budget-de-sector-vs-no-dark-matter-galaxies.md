# Topic: Does the framework's cosmology contain non-baryonic clustering matter?

**Priority:** MEDIUM. It is a consistency question that nobody has asked, and either answer breaks one sector.
**Seeded:** 2026-09-17 (maintainer)

## Question
The dark-energy sector fits DESI + Planck with Ω_m ≈ 0.315 of **clustering** matter and sets the floor C₀ = Ω_m. The
galaxy sector is presented as a replacement for dark matter. Its most permissive boost normalization, Ω_m/Ω_b ≈ 6.4, is
the ΛCDM cosmic baryon fraction. Which is it?
- If the cosmology contains non-baryonic matter, the galaxy sector double-counts it: a boost on top of a halo.
- If it does not, then Ω_m = 0.315 in H² = 8πGρ_m/(3C) has no referent. The DE fit was then a fit of a different model,
  and C₀ = Ω_m is a number without an object.

## Context
The leading-edge researcher visitor persona, 2026-09-17: "the dark-energy sector's Ω_m ≈ 0.315 and the galaxy sector's
'no dark matter' can't both hold." No archive document reconciles them (check: grep Session100/101, the whitepaper's
cosmology section, and PREDICTIONS.md for Ω_b).

## Concrete asks
1. Primary-layer read: what does Session 100 take ρ_m to be? What do the galaxy-sector sessions (S170, S193) take the
   floor Ω_m to represent?
2. Run the baryon-only version: refit the DE sector with ρ_m = ρ_b (Ω_b ≈ 0.049) on the existing
   `fit_gamma_family_to_desi_dr2.py` likelihood. Does any γ fit? Pre-register the expectation first.
3. Recompute the boost ceiling under the baryon-only floor (C₀ = Ω_b gives B_max ≈ 20). Does TEST-09/10's ceiling root
   survive, or does the SPARC B_max ≲ 14 bound now bind differently? This touches a counted refutation, so apply the
   over-refutation audit in both directions.

## Why it matters
If the two sectors need different matter contents, "one equation" was two models sharing a symbol. The site's /dark-energy
and /dark-matter pages would need an open-question box, and two of the six refutations could change what they refute.

## Starting points
- /dark-energy, /dark-matter, /tier-1-existing TEST-09/10, /parameter-derivations (floor provenance)
- `Synchronism/Research/Session100_Modified_Friedmann.md`
- `maintainer/scripts/floor_is_cosmic_C_and_w_sign.py`
