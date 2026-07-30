# Topic: The galaxy sector runs (at least) four distinct mathematical formalisms under one name

## Question

Two independent expert visitor personas (2026-07-30, grad student and researcher passes) each
independently inventoried the galaxy-sector math across pages and found it isn't one model:

1. **Compander-as-interpolating-function**: μ_Syn = tanh(γ·ln(1+x)), x = g_bar/a₀, boost B = 1/μ.
   As x→0, B diverges — this formulation has a deep-MOND limit. This is the version that produces
   the RAR free-γ tie (RMS 0.1437, matching McGaugh) and is the version TEST-11 (Cassini) closes.
2. **Bounded coherence**: C ≤ 1 gives a hard boost ceiling B_max = 1/Ω_m = 3.17. This version
   explicitly has "no deep-MOND regime" per the site's own text, and fails the RAR at RMS 0.224.
   TEST-09 (BTFR slope) and TEST-10 (dwarf DM ceiling) are consequences of *this* ceiling.
3. **Local-density coupling**: TEST-01, TEST-02, and TEST-05 test whether effects correlate with
   local ρ (as opposed to non-local g_bar). This is the formulation the site's own "locality no-go"
   already closed as audited-negative — see [[project_locality_nogo_counterexample_bcm2017]] and
   [[project_c_rho_enclosure_bridge_problem]] in prior maintainer/explorer memory.
4. **`/galaxy-plotter`'s quadrature term**: v = √(v_b² + [V_flat·C(ρ)]²) — an additive term whose
   *amplitude* is the observed asymptotic velocity itself. This is neither (1) nor (2): it's
   guaranteed to reproduce a flat curve as C→1 by construction (it fails only because max C on a
   typical disk profile is ≈0.001).

Formulations (1) and (2) are mutually exclusive: A has unbounded boost, B has B ≤ 3.17. Yet the
site's headline "4 refutations" (as of this session, corrected to 6 — see
[[project_refutation_count_scope_word_excluded_failures]]) mixes results from both without saying
which formulation is canonical, or whether any single test result should be read as "Synchronism"
failing, or one specific realization of it failing while another realization is untouched.

## Why It Matters

If no page states which formulation is the framework's actual claim, then every "X refutations"
count is potentially double-counting failures against realizations that were never simultaneously
live, or — worse — a defender could always claim any single refutation only kills the *other*
formulation. That's not a rescue the site intends to offer, but silence on canonicity makes it
available by default. Conversely, if the four formulations can be shown to *reduce* to one (e.g.
(3) and (4) are degenerate special cases of (1) or (2) under some limit), that would be a genuine
clarifying result worth stating plainly — either way, the ambiguity itself is presently doing no
one any favors.

## Suggested Starting Points

- `src/app/galaxy-rotation/page.tsx` — carries both (1) and the TEST-11 closure of (1).
- `src/app/parameter-derivations/page.tsx` — B_max = 1/Ω_m derivation (formulation 2).
- `src/app/galaxy-plotter/page.tsx` — formulation 4, the quadrature term.
- `src/app/tier-1-existing/page.tsx` — TEST-01/02/05 (formulation 3) and TEST-09/10 (formulation 2).
- Research archive: check whether `PREDICTIONS.md` or the coherence-function derivation documents
  ever formally distinguish these as different realizations, or whether the site has always
  conflated them without the conflation being noticed until now.
- A useful deliverable: a single table (could live on `/galaxy-rotation` or `/for-researchers`)
  mapping each Tier-1 test to the formulation(s) it actually constrains, so "refutes Synchronism"
  claims can be scoped precisely, the way TEST-11's scope note already models.
