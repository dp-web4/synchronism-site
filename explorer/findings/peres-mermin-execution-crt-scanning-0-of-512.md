# Finding: Peres–Mermin Executed — 0/512 Non-Contextual Assignments; CRT Scanning Exclusion Is Now an Artifact, Not a Citation

## Origin

Topic `crt-scanning-contextuality-gap.md` (seeded 2026-07-06, escalated HIGH 2026-07-08 by
the maintainer after visitor Pass 4 independently sharpened it to "theorem-level exclusion,
not open problem"). This finding executes the one step the escalation named.

## Summary

The Kochen–Specker exclusion of the CRT temporal-scanning picture is now demonstrated by
execution: `Synchronism/simulations/kuramoto-lattice-suite/06_peres_mermin_contextuality.py`
derives the Peres–Mermin square's six product constraints from the nine two-qubit operators
at runtime and exhaustively checks all 2⁹ = 512 non-contextual value assignments. **Zero
satisfy all six constraints; the best any assignment achieves is 5 of 6**; the parity
argument (constraints require sign product −1, any assignment yields +1) confirms
numerically. Same artifact class as the CHSH triptych (scripts 02/05): the scanning model's
exclusion no longer rests on a theorem citation.

## Research Notes

**Why the scanning model is in scope of the theorem.** The CRT picture models superposition
as a fast deterministic cycle through definite states, sampled by the observer. At each
instant of the cycle, every observable has a definite value fixed by "where the scan is" —
independent of which *other* compatible observables are co-measured. That is the definition
of a non-contextual value assignment, the exact object Kochen–Specker excludes for
dim ≥ 3.

**What the script does that the citation didn't.**
1. Builds the nine PM observables (X⊗I, I⊗X, X⊗X / I⊗Z, Z⊗I, Z⊗Z / X⊗Z, Z⊗X, Y⊗Y) and
   *verifies* — rather than asserts — that each squares to identity, that each row and
   column is mutually commuting (hence co-measurable), and that the row products are +I,
   column 1–2 products +I, column 3 product −I.
2. Exhausts all 512 assignments v: {nine observables} → {±1}. Result: **0/512** satisfy
   all six derived constraints; max satisfiable = **5/6**.
3. Runs the 3-line parity proof numerically: each observable appears in exactly one row
   and one column, so the product of all six constraint left-hand sides is +1 for every
   assignment, while QM requires (+1)⁵·(−1) = −1.

**Why time-averaging can't rescue the scan.** Bell violations are statistical; a model
might hope to hide in averaging. The PM constraints are not statistical — each is
verifiable with certainty on *any* state by co-measuring one row or column (state-
independent contextuality). So a cycle whose every instant fails at least one constraint
fails observably: whichever context is measured, some cycle instants give the wrong
product, and QM says the right product occurs with probability 1. There is no cycle
schedule, however fast, that evades this.

**The 5/6 structure mirrors CHSH.** The classical bound in CHSH (S=2 of a possible 4)
and the PM bound (5 of 6 constraints) are the same phenomenon: non-contextual/local
value assignments can approximate but never complete the quantum constraint set. For the
site's pedagogy this is a nice symmetry — both artifacts show the ontology getting
*close* in a way that quantifies exactly what "just sampling timing" cannot buy.

**One ontology, two independent exclusions.** Script 02/05 (Bell/CHSH) needs two wings
and statistics; script 06 (KS) needs one lab and algebra. The 2026-07-06 explorer and
2026-07-08 visitor Pass 4 both argued these are the same non-contextual real-valued
ontology failing twice; with both now executed, the merged ledger entry proposed in
`Research/proposals/crt_scanning_ks_pbr_theorem_level_exclusion.md` (one entry, two
corollaries) has both corollaries as runnable artifacts.

**PBR scoped out.** The topic also named PBR. PBR constrains ψ-epistemic readings and
requires the preparation-independence postulate — a different argument class, not
executable as a finite exhaustion in the same way. The KS/PM execution is the decisive
one for the "definite value at every instant" content of the scanning picture; PBR
remains a correctly-worded caveat on the epistemic reading only.

## Implications for the Site

- `/two-reframes` was already reworded to "conditional theorem-level exclusion" this
  morning (maintainer, from Pass 4). The execution upgrades the honest wording one more
  notch: from "excluded by KS unless contextual" to "**demonstrated: 0/512 consistent
  assignments (runnable script, same suite as the CHSH triptych)**."
- The merged one-entry framing (Tsirelson + KS as corollaries of one ontology) can now
  cite two executed artifacts instead of one artifact + one citation.

## Action: Maintainer

- On `/two-reframes` (CRT scanning caveat box): add one sentence + link-out — "Executed
  2026-07-08: the Peres–Mermin square run against scanning-model value assignments gives
  0/512 consistent (best 5/6); see suite script 06." Mirror the way script 05's result is
  carried.
- `/for-researchers`: if the four "citable artifacts" list is kept, script 06 belongs
  beside Artifact 4 (CHSH triptych) as the algebraic half of the same exclusion — or
  fold both into one artifact entry per the merge proposal, pending dp's ledger decision.
- `/honest-assessment` Bell/CHSH ledger card: one line noting the KS companion result.

## Open Threads

- dp's ledger decision (merge Tsirelson + KS caveats into one PREDICTIONS.md entry) is
  still open — the proposal now has its execution gate closed, so the decision is purely
  editorial.
- Is there any *contextual* scanning construction in the literature worth citing as the
  contrast class (e.g., Spekkens's contextuality-by-default discussions)? A short
  literature check would let the site say "no contextual version exists" with a citation
  rather than as an unreferenced claim.
