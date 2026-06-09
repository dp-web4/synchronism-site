# Finding: The Density-Compander No-Go Is a Worked Instance of Milgrom's Non-Locality Constraint — Not a Novel Theorem

**Date**: 2026-06-09
**Origin**: Topic `negative-results-as-deliverables.md` (seeded 2026-06-08 maintainer), prompted by 2026-06-09 visitor Pass 3 + Pass 4 both naming the "density-compander no-go" the project's most transferable, citable physics result and asking it be re-shelved as a standalone deliverable / arXiv note.
**Method**: Literature stress-test of the deliverable's two load-bearing claims *before* anyone drafts a preprint — (i) is Pass 4's scope ("any density-based emergent/entropic gravity mimic") correct, and (ii) is the no-go *novel*? Builds on `cluster-bridge-wrong-variable-not-one-scale.md` (2026-06-01) and `verlinde-compander-comparison.md` (2026-05-24).

## Summary

The convergent visitor consensus (4 personas + the seeded topic) is: "the density-compander no-go is a novel, citable contribution — promote it to a standalone result page / arXiv note." **Tested against the modified-gravity literature, that framing overclaims on two axes, and correcting both makes the deliverable honest and more useful.**

1. **It is not "density-based vs not" — it is *local* vs *non-local*.** Pass 4's framing ("any density-based emergent/entropic-gravity MOND mimic faces the same failure") is too broad. Verlinde, MOG, and even MOND's own surface-density relations are "density-based" colloquially but key on **non-local** quantities (enclosed mass `M_bar(<r)`, the acceleration field `∇Φ`, or column-integrated surface density `Σ`). They **escape** the no-go. The discriminating axis is the **locality of the state variable**, and C(ρ) is the rare ansatz keyed to a purely **local volumetric density** `ρ(r)`. That locality — not "one scale," not "density-based" loosely — is exactly why it fails.

2. **The core result is already established — it is Milgrom's non-locality constraint.** The statement "the MOND mass-discrepancy phenomenology cannot be reproduced by a purely local pointwise modification" is **not new**: Milgrom proved (MOND-as-modified-inertia, astro-ph/0510117) that any MOND-reproducing inertia must be *strongly non-local* ("a particle has been matters as well as where it is instantaneously"), and the empirical organizing variable of the discrepancy is **acceleration**, not local density (the RAR/MDAR, Lelli–McGaugh–Schombert 2016/2017, scatter ≲0.13 dex). The C(ρ) no-go is the **spatial-predictor cousin** of Milgrom's **temporal-predictor** theorem.

**Honest verdict: the deliverable is real but it is a *worked corollary of a known constraint plus a classification criterion*, not a novel physics theorem.** Re-shelving it as "our citable no-go" without citing Milgrom would reinvent a 2005 result and invite desk-rejection. Re-shelving it as "a quantified instance of Milgrom non-locality, applied to the contemporary 'information/entropy/coherence-density → gravity' wave, with a locality test that sorts which proposals it kills" is genuinely useful and honest. This is the same failure mode the loop keeps hitting (A-from-Jeans "5% match," DESI epistemic regression): a confident claim that doesn't survive checking. Re-execute, don't re-trust — including re-checking the *novelty* of a result before promoting it.

## The No-Go, Stated Precisely (so it can be checked)

Synchronism's gravitational closure is `g_eff = g_N / C(ρ)` with `C(ρ) = tanh(γ·ln(ρ/ρ_crit + 1))`, a function of **local volumetric density `ρ(r)`** (`equations.ts:6`, `:24`). The empirical target is the **Radial Acceleration Relation**:

> `g_obs = F(g_bar)`, with `g_bar(r) = G·M_bar(<r)/r²`, universal across systems, intrinsic scatter ≲0.13 dex (Lelli et al. 2017).

For C(ρ) to reproduce the RAR, we need

> `1/C(ρ(r)) = F(g_bar)/g_bar` for **all** systems simultaneously,

i.e. `C(ρ)` must be expressible as **one universal function of `g_bar` alone**. It cannot, because `ρ(r)` and `g_bar(r)` are not in universal one-to-one correspondence:

- **`g_bar` is non-local in `ρ`** — it is set by the *enclosed* mass `M_bar(<r) = ∫₀ʳ 4πr'²ρ(r')dr'`, not by `ρ(r)` at the point.
- **Cross-system (quantified, 2026-06-01):** at matched `g_bar`, a disk galaxy is ≈1.7 dex denser than Coma. A density-keyed predictor injects ~1.7 dex of spread where the RAR tolerates 0.13.
- **Within-system (quantified, 2026-06-01):** in Coma's flat β-model core `ρ`≈const while `g_bar` rises then falls (non-monotonic). A function of `ρ` is then nearly constant where the required discrepancy varies most. *No function of local density can produce a radially varying discrepancy in a flat-cored cluster.*

This is ansatz-, parameter-, and scale-count-independent: it is a property of the **variable**, established without choosing how C maps to mass. (The earlier "one-scale-insufficiency" framing understates it by ~10⁴ and mis-attributes the residual to MOND; see `cluster-bridge-wrong-variable-not-one-scale.md`.)

## The Locality Classification (the transferable new content)

Sort "`X`-density → gravity" and MOND-mimic proposals by the **locality of the variable their modification keys on**. This is the test that decides whether the no-go bites:

| Framework | Modification keyed on | Local? | RAR-capable? |
|---|---|---|---|
| **Synchronism C(ρ)** | local volumetric density `ρ(r)` | **LOCAL** | **No — caught by the no-go** |
| Any "coherence / information / entropy *volumetric density* → gravity" keyed to `ρ(r)` | local `ρ(r)` | **LOCAL** | **No — caught** |
| MOND (AQUAL / modified gravity) | acceleration field `\|∇Φ\|/a₀` | non-local | Yes |
| MOND (modified inertia, Milgrom 2005) | full trajectory / time-non-local | non-local | Yes |
| Verlinde emergent gravity (2016) | enclosed baryonic mass `M_B(<r)` | non-local | Yes (then fails clusters by ~2×, a *different* failure) |
| MOG / Moffat | enclosed mass, running `G(r)` | non-local | Yes |
| Central-surface-density relation (Lelli+2016); universal halo `Σ` (Donato+2009) | column-integrated surface density `Σ` | non-local (LOS integral) | Yes |

**Two corrections to the consensus fall straight out of this table:**

- **Verlinde escapes** — it is "density-based" only colloquially; it keys on the *enclosed* `M_B(<r)`, a non-local quantity, so it can sit on the RAR (it then fails clusters for the *separate*, MOND-shared factor-~2 reason). Pass 4's "any density-based … mimic" sweeps Verlinde in incorrectly.
- **Even MOND's "surface-density" relations escape** — `Σ` is a *column integral*, not the local volumetric `ρ`. So "density" per se is not the discriminator; **pointwise locality** is.

The genuinely transferable statement is therefore a **classification criterion**, not a no-go unique to Synchronism:

> *A modified-gravity / emergent-gravity ansatz can reproduce the galactic Radial Acceleration Relation only if its modification keys on a **non-local** functional of the baryon distribution (enclosed mass, the acceleration field, trajectory history, or a column integral). Any ansatz whose modification is a function of the **local volumetric density** `ρ(r)` cannot — it injects cross-system and within-system `ρ↔g_bar` scatter that the 0.13-dex RAR forbids.* This is the spatial-predictor form of Milgrom's non-locality theorem.

That criterion is what a referee or a reader can *use*: it sorts the current wave of "information/entropy/coherence-density gravity" proposals into killed-on-arrival (local `ρ`) vs still-live (non-local) **before** any fitting.

## Novelty Audit (the reason to test before drafting a preprint)

| Claim in the proposed deliverable | Status in the literature |
|---|---|
| The galactic mass discrepancy is organized by **acceleration**, not local density | **Established** — RAR/MDAR, McGaugh 2004, Lelli–McGaugh–Schombert 2016, Lelli et al. 2017 ("One Law to Rule Them All", scatter ≲0.13 dex) |
| MOND phenomenology **cannot be reproduced by a purely local modification** | **Established** — Milgrom, "MOND as modified inertia" (astro-ph/0510117): the kinetic action *must* be strongly non-local; "non-local in the strong sense that it cannot even be a limit of a sequence of local, higher-derivative theories" |
| C(ρ) specifically, keyed to local `ρ(r)`, therefore cannot sit on the RAR | **New as a worked instance** (this project): quantified at ΔBIC=+184 (γ=2 rejected on SPARC RAR), 1.7-dex cross-system offset, within-cluster flat-ρ demonstration |
| **Locality** (not "density-based") is the axis that sorts which proposals are killed | **New as an explicit criterion** for the contemporary emergent-gravity wave, though implicit in the above |

**Verdict:** the deep physics is Milgrom's (2005), restated empirically by McGaugh/Lelli. The project's original contribution is narrow and honest: **(a)** a clean, quantified demonstration that a specific, currently-promoted ansatz class (local-density "coherence/information" companders) is an instance of the non-locality obstruction, and **(b)** the locality test as a usable triage. That is a clarifying / referee-anticipation contribution — a good *section* in a review or methods note, **not** a standalone novel-theorem preprint. Presenting it as the latter would reinvent Milgrom.

## Implications for the Site

The seeded topic asked whether to build a standalone `/density-compander-no-go` page. **Yes — but framed as an instance-of-a-known-constraint, with Milgrom cited up top, not as an original no-go.** Concretely the page should:

1. Lead with the **established** result (RAR is acceleration-keyed; Milgrom: MOND needs non-locality), *then* present C(ρ) as the local-density instance. This inverts the current temptation to lead with "our no-go."
2. Carry the **locality classification table** as the centerpiece — it is the transferable, reusable artifact and it visibly *excludes* Verlinde/MOND/MOG, which prevents the over-broad "any density-based mimic" claim Pass 4 made.
3. State the novelty honestly in one line: *"The non-locality obstruction is Milgrom's (2005); our contribution is the quantified local-density instance and the locality triage for emergent-gravity density models."*

This keeps the site's honesty brand intact at exactly the moment it is most tempted to overclaim — when an external researcher has just told it "this is publishable."

## Action: Maintainer

**P1 — Build `/density-compander-no-go` (or a titled section in `/honest-assessment`) with the corrected frame:**
- Title it as a *result*, but the first sentence must attribute the core constraint to Milgrom (modified-inertia non-locality, astro-ph/0510117) and the acceleration-keying to Lelli–McGaugh–Schombert 2016/2017.
- Include the **locality classification table** verbatim (it is the deliverable).
- State the precise no-go: `C(ρ)` would have to be a universal function of `g_bar` alone; it cannot, because `g_bar` is non-local in `ρ` (1.7-dex cross-system offset; within-cluster flat-ρ).
- One-line novelty statement (above) so the page does not present a known constraint as original.

**P1 — Correct the over-broad claim wherever the "any density-based MOND mimic" phrasing appears** (`/honest-assessment` mechanism-class box; TEST-04a "what this rules out beyond Synchronism"):
- Replace "any density-based emergent/entropic-gravity mimic" → "any mimic keyed on the **local volumetric density** `ρ(r)`; non-local density variables (enclosed mass, surface density, the acceleration field) escape — e.g. Verlinde and MOND's surface-density relations are *not* ruled out by this."

**P2 — Add Milgrom non-locality + RAR-acceleration-keying to the glossary / references** so the no-go's lineage is visible (currently the site states the wrong-variable obstruction without naming its established parent result).

## Open Threads

1. **Does the A2ACW "0/6 specificity" deliverable survive the same novelty audit?** This finding only stress-tested Result #1 (physics). Result #2 (multi-agent LLM self-play = reparametrization detector) is the genuinely *more* novel of the two per Pass 4 — and precisely because it is less anchored in prior literature, it deserves the *same* "is it actually novel / is it overstated?" treatment before the A2ACW preprint cites it. The prior is that it, too, is narrower than the headline. Next session candidate.
2. **Within-disk `ρ↔g_bar` correlation is the reason the galaxy regime works at all** (2026-06-01 Open Thread 2, still open): quantifying that coincidental local correlation and its scatter would show exactly *how much* of the galaxy "success" is the wrong variable being temporarily rescued — the constructive sibling that would make the locality criterion fully self-contained.
3. **Is the locality criterion publishable on its own**, decoupled from Synchronism, as a one-page triage for the emergent-gravity literature? It may be more citable as "a locality test for X-density gravity proposals" than anything framed around the framework. That is the honest re-shelving Pass 4 actually wanted, one level more general than they stated.

## So What?

The explorer was handed a consensus — four expert personas and the maintainer agreeing "this no-go is a novel citable deliverable, promote it." Testing that consensus against the literature *before* it became a preprint shows it overclaims twice: the discriminating axis is **locality**, not "density-based" (so Verlinde and even MOND's surface-density relations are wrongly swept in), and the core obstruction is **Milgrom's 2005 non-locality result**, not original. The genuine, defensible contribution is smaller and sharper than advertised — a quantified local-density *instance* of a known constraint, plus a locality triage for the contemporary "coherence/information-density → gravity" wave. Catching this now is the loop's own lesson applied to itself: the failure mode is not bad physics, it is confident promotion of an unchecked claim, and the fix is to re-execute the check — here, the *novelty* check — rather than re-trust the consensus. The deliverable is still worth building; it is now honest enough to publish.
