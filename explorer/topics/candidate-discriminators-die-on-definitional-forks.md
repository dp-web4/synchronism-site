# Topic: Every candidate discriminator dies on an unmade definitional choice — is that the program's actual result?

**Seeded**: 2026-08-08 (maintainer)
**Priority**: P0
**Source**: visitor log 2026-08-08 Pass 4 (Leading-Edge Researcher), plus the maintainer closure of its #1 item
**Status of the seed itself**: the specific test proposed today is CLOSED (see below). The topic is
the pattern it completes, not the test.

---

## What happened today

An expert visitor pass found a real inconsistency — the site evolves `a₀` to `cH(z)/2π` but freezes
`Ω_m` in `B_max = 1/Ω_m`, with no stated rule — and proposed the resulting epoch dependence
`f_DM,max(z) = 1 − Ω_m(z)` as *"the only genuinely discriminating prediction I found on the entire
site,"* runnable today on published high-z kinematics.

It was closed in ten minutes of arithmetic, **without data**, and shipped to
`/parameter-derivations` item 8 and `/tier-1-existing`:

- **Ω_m/Ω_b reading**: baryons and total matter are both dust ⇒ `Ω_b(z)/Ω_m(z) = Ω_b,0/Ω_m,0`
  *identically at every z*. Ceiling = 6.39 always. Nothing to measure.
- **1/Ω_m(z) reading**: `B_max(z) = E(z)²/[Ω_m,0(1+z)³]` falls (3.17 → 1.27 at z=1 → 1.08 at z=2)
  while the *same* `E(z)` makes `a₀(z)` rise (3.03× at z=2). Since the galaxy sector *is* deep-MOND
  at γ=1/2, required boost is `√(a₀(z)/g_bar)`, so the ceiling permits MOND only where
  `g_bar > Ω_m(z)²·a₀(z)` — i.e. `> 0.86 a₀` by z=2. **The evolving ceiling forbids precisely the
  MOND regime the evolving a₀ widens.** Internal contradiction, not a prediction.

⇒ The ceiling must be frozen; frozen, it has no epoch dependence; no discriminator exists either way.
Back-annotation: `Research/proposals/boost_ceiling_epoch_fork_closes_the_last_candidate_discriminator_20260808.md`.

## The actual topic

That is now the **third consecutive** candidate discriminator to die on an unmade definitional
choice, decidable with no new data:

| # | Candidate | Died on | Date |
|---|-----------|---------|------|
| 1 | EFE = 0 | three live readings of C's argument (ρ / g_bar / \|∇Φ\|) give opposite-signed EFE | 2026-08-07 |
| 2 | Boost ceiling / TEST-10 headline | 1/Ω_m vs Ω_m/Ω_b — median passes under one, fails under the other | 2026-07-27/28 |
| 3 | Ceiling epoch / high-z f_DM | one reading identically flat, the other self-contradictory | 2026-08-08 |

**The question for the explorer**: is "0 discriminating tests" a statement about *data* at all, or is
it a statement about *specification*? The working hypothesis worth attacking:

> This framework's discriminating content is not limited by observation. It is limited by the fact
> that its central objects are underspecified enough that each candidate test forks before it can be
> registered. All three closures above were arithmetic on already-published numbers.

If that holds, it is a sharper and more citable program-level result than "0 confirmed predictions,"
because it is a claim about the *class* of theory, not about this theory's luck. It also predicts
its own future: candidate #4 will fork too, and the fork will be findable a priori.

### Concrete work

1. **Test the hypothesis retrospectively.** Walk every candidate discriminator ever proposed on this
   site (TEST-01…11, TEST-04a, the TDG interval, a₀(z), EFE=0, the epoch ceiling) and classify each
   as *died on data* / *died on a definitional fork* / *never had power*. If the fork column
   dominates, the hypothesis is supported. If it's a 50/50 split, it's a narrative, not a result.
   — Guardrail: this is a *census*, and every census on this site has drifted. Generate it from the
   ledger, don't hand-type it.
2. **Is the forking itself a diagnosis?** A theory whose predictions fork under readings of its own
   symbols is under-determined in a specific, nameable way: it has no action. Every fork above
   traces to the absence of a Lagrangian — with one, the coupling, the argument of C, and the
   epoch-dependence would all be fixed simultaneously rather than chosen page by page. Check whether
   that is *the* common cause or just a suggestive one. If it is, "no Lagrangian" stops being an
   honest-assessment bullet and becomes the mechanism generating the whole ledger.
3. **Registration gate.** Propose a concrete rule: no candidate gets a TEST-ID until it names
   (a) which reading of C, (b) at which epoch, (c) which force law its prediction is evaluated under.
   Two of the three closures above would have been caught at registration. Does this over-block?
   Run it against the existing 11 and count how many survive.

### Guardrails

- **Do not bump the refutation count.** Nothing was refuted today; a candidate was removed. Count
  stays 6 (3–4 independent roots).
- Branch (ii)'s self-contradiction argues for *freezing the ceiling*. It is not a seventh failure.
- Do **not** cite the high-z f_DM literature (Genzel+2017, Lang+2017, Price+2021, RC100) as support
  for the closure — it is closed on internal grounds and needs no data. Note separately that low
  f_DM at high z is *also* the ΛCDM expectation for baryon-dominated discs, so even had branch (ii)
  survived, the a₀(z) failure mode (ΛCDM-degenerate, see 2026-08-01) was the live risk.
- Before writing any new derivation, `grep Synchronism/Research/` for a prior one. Three of the last
  five "new" findings had existing explanations on file.

---

## Second, smaller seed: the chemistry table's effective N

Also from today (Pass 3, medium, **not shipped** — needs a real regrouping, not a caveat):
the top six rows of `/chemistry-correlation-explorer` are *one elastic quantity wearing six hats* —
`v_s = √(B/ρ)`, `θ_D ∝ v_s n^{1/3}`, phonon `κ ∝ C_v v_s ℓ`. Sound velocity (+0.982), bulk modulus
(+0.967), Young's (+0.912), shear (+0.901), Debye temperature (+0.948), phonon-limited thermal
conductivity (+0.961) are not six independent confirmations. The page says mechanisms are shared but
never quantifies the collapse, so the *visual* impression is 23 independent tests.

Estimate the effective number of independent axes (the visitor's read: ~4–5, not 23 and certainly
not 1,703), group the table by mechanism, and check whether the documented polynomial-in-Z null then
explains essentially all of what's left. This interacts with the already-banked finding that the
displayed +0.982 uses the orientation the page itself disowns — fixing the grouping without fixing
the sign would leave the strongest-looking row still doing the persuading.
