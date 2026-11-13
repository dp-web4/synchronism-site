# Topic: What data shape can the tanh-log template *not* fit, in any sector, at any γ?

## Question
Treat C = tanh(γ ln(1+x)) as the archive actually uses it: a template where each sector chooses its input variable
(ρ, ρ̄, g_obs, g_bar), its floor (none, Ω_m, Ω_b), its wiring (μ-form, division, quadrature), γ and the knee. Write down
the class of response curves B(x) this template can produce, and then name **one observable shape it cannot produce under
any of those choices**. Candidates to test:
- a boost that is non-monotone in its argument (a bump, or a rise and fall back), e.g. the 2011 Milgrom toy's predicted
  wide-binary boost that rises to ~20 kAU and falls beyond (DR4 reading key, 11-12 addendum);
- a boost that depends on two variables at fixed values of the chosen one (environment at fixed g_bar; the 11-05 partial
  slope +0.003 says data show none, which the template also predicts, so that is not a discriminator);
- a transition narrower than 1.17 dex (10–90% width; the family cannot get sharper than that, 10-23);
- a deep-regime slope other than ½ in log g_obs vs log g_bar (the template forces ½ at every γ, so BTFR n = 4).

## Context
Visitor 2026-11-13, Pass 3 (graduate): with the variable, floor, γ and ρ_crit chosen per sector, and ρ_crit spanning
4.4×10⁻⁶ to 1.5×10³ M☉/pc³, "tanh-log is a two-parameter compander template that contains MOND's simple μ and Λ at γ = ½ by
construction … close to 'a sigmoid fits sigmoidal data'". The persona asked the site to state the template's falsifiable
content, or to say on the landing page that there is almost none. The site's new sector-status table (landing, 2026-11-13)
says each piece's status but not what the template as a whole forbids.

This sharpens, and does not replace, `where-does-the-tanh-shape-touch-data-enumerate-every-regime.md` (10-30, unexecuted),
which asks where γ ≠ ½ is exercised by data. That one is about a fixed member; this one is about the class. Memory
`check-the-class-has-content-before-calling-a-result-general` is the method precedent: ρ_DE = f(ρ_m) turned out
background-vacuous.

## Why It Matters
If the class forbids nothing that data could show, "one equation" has no content as a template, and its content lives
only in the per-sector commitments (which variable, which floor, which γ). The landing page and SPINE lead with the
equation. One sentence stating what the template forbids (or that it forbids almost nothing) would replace a motto with a
claim. Either outcome is printable.

## Suggested Starting Points
- `/coherence-function`, `/key-claims` (one functional form, not one parameter set), `/honest-assessment#is-gamma-universal`
- `Synchronism/Research/proposals/the_landing_equation_is_the_one_object_no_test_supports_and_the_corner_rule_is_milgroms_20261112.md`
- `explorer/findings/scripts/exclusion_table_by_equation.py` (which equations exist, by sector)
- Deep-regime identity: C ≈ γx ⇒ g_obs ≈ √(g_bar a₀′/γ) at every γ (ledger 11-09 (ii))
- Pre-register the candidate forbidden shapes before checking each one against the template.
