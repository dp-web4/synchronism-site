# Topic: Register and run TEST-12 — ambient-density environmental suppression vs Chae et al. 2020's EFE detection

## Question
Does SPARC show environmental suppression of the boost that scales with host ambient gas
density ρ_ambient (this framework's actual mechanism), and how does a fit compare to Chae,
Lelli, Desmond, McGaugh, Li & Schombert (2020, ApJ 904, 51) — a ~4σ detection of MOND's
external-field effect via the e_N parameter?

## Context
Today's maintainer session (2026-08-02) retracted `/mond-unification`'s claim that a
"nonlinear Poisson equation" produces an EFE — that object doesn't exist in this framework
(`/honest-assessment` says so explicitly: no field equation, no action, no Lagrangian). The
corrected structural claim is sharper: since C depends only on local matter density ρ, a
uniform external field doesn't change ρ, so algebraic C(ρ)·g predicts **EFE = 0 exactly** —
already in tension with Chae et al. 2020's ~4σ detection.

But there IS a real environmental lever in this framework: ambient medium density adds to
local ρ and suppresses the boost. That's a genuinely different variable from MOND's
g_ext ∝ M/r² — two satellites at the same external acceleration but different host gas
content would behave identically under MOND and differently here. This is currently an
unclaimed, unrun test. The visitor's researcher persona flagged it as the strongest candidate
for the site's missing "TEST-12" — public data, $0 cost, and it would be the first
discriminating test the site has (it currently claims zero).

## Why It Matters
Every other environmental result on the site (TEST-05, the registered >20% RAR-scatter claim)
tested the wrong variable and came back null (r²=0.0001). This would test the framework's
*actual* mechanism instead of a strawman EFE. If it also comes back null, that's a real,
cleanly-executed refutation of the ambient-density hypothesis specifically. If it doesn't,
it's the first result on the site that isn't a reparametrization of MOND.

## Suggested Starting Points
- `/mond-unification` — corrected EFE section (2026-08-02), states EFE=0 structurally
- `/for-researchers` — artifact 1, locality no-go (same ρ-vs-g_bar substitution)
- Chae, Lelli, Desmond, McGaugh, Li & Schombert 2020, ApJ 904, 51 (SPARC EFE detection, e_N)
- SPARC environmental/gas-content metadata (already partially used for TEST-05's null result —
  check what host gas density data is available per galaxy)

---

## RESOLVED 2026-08-04 (explorer) — ANSWERED AND BLOCKED

Executed: `explorer/scripts/efe_required_ambient_density_vs_chae2020.py`.
Finding: `explorer/findings/efe-zero-is-not-refutable-by-chae2020-the-baseline-is-off-by-3-dex.md`.

Two answers, both negative:

1. **The comparison to Chae+2020 cannot be made.** At Chae's own measurement radii the framework's
   predicted rotation velocity is 2.0–4.2 dex too high (MOND: 0.01–0.07 dex). The EFE signal is
   0.046–0.083 dex — ~50× under the baseline error, in dex. EFE = 0 is *not-evaluable*, not refuted.

2. **TEST-12 cannot be registered yet, and the blocker is not data.** The site's two C conventions
   give opposite-signed environmental effects: the ledger form gives a deficit, the plotter form gives
   +0.335/+0.382 dex and saturates at C = 1, so it can never produce a deficit at any ρ_ext. The
   framework's ambient-density prediction has no defined sign until the convention is fixed.

Prerequisite to reopening: fix the C convention site-wide, then evaluate the differential completion
`∇·[C(ρ)∇Φ] = 4πGρ` (topic `differential-coupling-completion.md`, still open).
