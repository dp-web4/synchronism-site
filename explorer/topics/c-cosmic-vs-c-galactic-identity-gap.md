# Topic: C_cosmic = Ω_m(z) — The Hidden Identity in Session 107

## Question

Session 107's simulation code defines `C_cosmic(z) = Ω_m · (1+z)³ / [Ω_m · (1+z)³ + Ω_Λ]`
— that is, the standard ΛCDM matter density parameter at redshift z. This is
*not* the framework's coherence equation `C(ρ) = tanh(γ ln(ρ/ρ_crit + 1))`.

Why does Ω_m(z) qualify as "cosmic coherence"? And what would the prediction
become if the framework's actual coherence equation were used for both
C_galactic and C_cosmic?

## Context

The 2026-05-09 explorer finding (`test04a-sign-error-actually-double-calibration.md`)
identified this hidden identity. The two functions C_galactic = tanh(...) and
C_cosmic = Ω_m(z) saturate at very different rates:
- C_galactic → 1 exponentially fast (gap to 1 is ~10⁻³ at z = 2)
- C_cosmic → 1 as 1 − O(1/(1+z)³) (gap to 1 is ~0.07 at z = 2)

This rate-mismatch is what creates the predicted growth suppression. **If the
*same* coherence equation were used for both with appropriate ρ values, the two
would track each other, and G_rat = C_cosmic/C_galactic would be exactly 1
at all z — no suppression at all.**

The mechanism's predictive content depends entirely on this asymmetric
identification.

## Why It Matters

This is a structural finding about the Synchronism cosmology arc. If the
framework's "one equation" coherence function is used consistently:
- C_cosmic(z) = tanh(2 · ln(ρ_cosmic/ρ_crit · (1+z)³ + 1))
- with ρ_cosmic ~ 10⁻⁵ ρ_crit (at present), C_cosmic ≈ 2×10⁻⁵ at z = 0
- the suppression would be ~10⁵ — clearly unphysical

So the framework cannot use its own coherence function for cosmic-scale C.
Instead, Session 107 silently substitutes the ΛCDM matter density parameter.
The "G_local/G_global = C_cosmic/C_galactic" formula is effectively:

    G_local/G_global = Ω_m(z) / tanh(2 · ln(ratio_0 · (1+z)³ + 1))

which is a *new equation*, not derived from the framework's coherence axioms.

The implications:
1. The "one equation" claim is broken at the cosmic scale (this is a fourth
   instance of the dual-C bridge problem — joining the chemistry/SPARC,
   tools, and consciousness instances)
2. The numerical prediction depends on the asymmetric saturation rates of
   two unrelated functions
3. The framework needs an explicit derivation: why Ω_m(z) is the right
   "cosmic coherence" and how the two functions relate

## Suggested Starting Points

- Session 107 code (`Synchronism/simulations/session107_desi_forecasts.py` lines 67-73):
  the `C_cosmic` definition is just Ω_m(z); there is no derivation
- Session 101 (referenced in Session 107 as the "cosmic coherence derivation"):
  read what it actually says about why Ω_m(z) = C_cosmic
- The framework's published "one equation" claim: where does it state which ρ
  to use at the cosmic scale, and does that match Session 107's ratio_0 = 0.177?
- Try: re-derive Session 107 using `C_cosmic = tanh(γ ln(ρ_cosmic/ρ_crit + 1))`
  with ρ_cosmic = mean cosmic ρ (~10⁻⁵ ρ_crit). What suppression do you get?
  If the answer is 10⁵× rather than 12%, the framework's actual coherence
  equation is incompatible with the cosmology arc.

## Recommended Test

Run the Session 107 growth integration with C_cosmic computed from the framework's
own equation (not Ω_m(z)). Compare the predicted fσ₈ to:
1. Session 107's published prediction (0.418 at z = 0.51)
2. ΛCDM (0.474 at z = 0.51)
3. DESI DR1 (0.454 ± 0.040 at z = 0.51)

If using the framework's actual coherence equation gives an unphysical suppression,
the cosmology arc is built on the silent substitution. Document this and suggest
which of three responses the framework should make:
- (a) derive why Ω_m(z) is the right C_cosmic
- (b) acknowledge that the framework has no coherence function for cosmic-scale ρ
- (c) revise the cosmology arc to use a different mechanism that doesn't depend on
  the C_galactic/C_cosmic ratio
