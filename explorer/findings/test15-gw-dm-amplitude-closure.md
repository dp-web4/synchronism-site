# Finding: TEST-15 (GW–DM Column) Has No Derived Amplitude, and GW170817 Already Bounds It at Near-Maximal Coupling — Closure

## Origin

Topic queue: `gw170817-framework-constraint-engagement.md` (HIGH, seeded 2026-05-03)
— "Does Synchronism survive the GW speed constraint, and how?" Also today's visitor
Pass 4 (leading-edge researcher, 2026-05-26), who flagged TEST-15 as "the single most
genuinely novel claim on the site, and the only one that cleanly separates from GR,"
but with "no derived amplitude," and asked that the TEST-07 standard (derive an
amplitude or demote to not-falsifiable) be applied uniformly across Tiers 3–4.

## Summary

TEST-15 ("GW arrival time correlates with DM column density; GR predicts exactly
zero") is **not a discriminating test, and the framework's own archive already shows
why**. Three results, all from primary sources read this session:

1. **The amplitude is not derived — it is read off GW170817.** Session 59 §3.1 sets
   the only free parameter as "α ~ 10⁻¹⁵ (from GW170817 constraint)." The "prediction"
   fixes its coupling equal to the bound from the very experiment it claims to test.
   There is no independent amplitude and no derived floor (α could be 0). This is
   precisely the TEST-07 failure mode, in the framework's own words.

2. **The GW170817 bound is near-maximal, not "vacuous."** Session 59 §3.1's own number
   for the propagation path is `C_avg ≈ 0.1 (mostly decoherent)` → ⟨1−C⟩ ≈ 0.9. So
   GW170817 constrains `α × 0.9 < 10⁻¹⁵` → **α ≲ 1.1×10⁻¹⁵ at ~90% of maximal coupling.**
   The site's current best page (`/top-5-tests`) calls this constraint "passed
   vacuously" — that is wrong by the framework's own path-average.

3. **The only surviving regime is observationally identical to GR.** With α ≲ 10⁻¹⁵ and
   the maximum possible ⟨1−C⟩ ≈ 1, the largest signal in *any* future event is
   Δc/c ≲ 10⁻¹⁵, with no derived lower bound. The proposed "kill at 10⁻¹⁶ after 20+
   events" can only push the *upper* bound down — it can never confirm a positive
   floor. So TEST-15 is structurally unfalsifiable as a *positive* claim, and in its
   allowed range makes the same prediction as GR (Δc/c = 0 to within measurement).

Net: TEST-15 should be demoted from "VERY HIGH power — GR predicts exactly zero" to
the same status as TEST-07 — **exploratory, no derived amplitude, not currently
falsifiable as a positive prediction**. The honest unified verdict resolves a
three-way contradiction currently live on the site. The novel-discriminating-test
count stays at **0**.

## Research Notes

### 1. The site says three incompatible things about TEST-15

| Page | Current claim |
|---|---|
| `/tier-3-major` | "GW arrival time correlates with DM column density." **"power: VERY HIGH — GR predicts exactly zero correlation."** Kill: no correlation at 10⁻¹⁶ after 20+ events. |
| `/top-5-tests` | "GW170817 already constrains Synchronism to GR-equivalent at \|α\| < 3.0×10⁻¹⁵. … this constraint was passed **vacuously**. … **monitoring only** until a positive-signal prediction is added." |
| `/galaxy-rotation` | "Synchronism … preserves **c_GW = c by construction**, and **GW170817 does not apply**." — then an open-gap box: "the precise relationship between C(ρ) and the effective gravitational action … has never been written down." |

These cannot all be true. "VERY HIGH power, GR predicts zero" (a live novel test)
contradicts "passed vacuously, monitoring only" (no positive prediction) contradicts
"c_GW = c by construction, GW170817 does not apply" (no propagation effect at all). A
reader cannot tell whether TEST-15 is a flagship discriminator, a dead monitor, or a
non-claim.

### 2. The archive says two incompatible things — *and one session contradicts itself*

**Session 59 (`Session59_GW_Coherence_Theory.md`)** writes an explicit Case-1
propagation formula (Prediction 1, line 206):

```
c_g/c = 1 + α × (1 − ⟨C⟩_LOS)
```

and (§3.1, lines 145–152) estimates it for GW170817-type paths:

> For typical intergalactic medium:
> - C_avg ≈ 0.1 (mostly decoherent)
> - If α ~ 10⁻¹⁵ (from GW170817 constraint)
> - Δc_g/c ~ α × 0.9 ~ 10⁻¹⁵ ✓

Two things are explicit here. (a) The propagation path is **low-coherence**
(C_avg ≈ 0.1), so (1−C) ≈ 0.9 — *near-maximal* coupling, not the "high-coherence path"
sometimes invoked to evade the bound. (b) α is **not predicted** — it is set "from
GW170817 constraint." The "✓" is circular: the value was chosen to pass.

**Session 642 (`Session642_GW170817_Field_Or_Parameterization.md`)** then classifies
the framework as **"Case 3 — parameterization, not field theory; no Lagrangian, no
EOM; GW170817 does not directly falsify."** This is the position the
`/galaxy-rotation` page inherited ("c_GW = c by construction").

But Case 1 (Session 59's propagation formula exists, with α ≲ 10⁻¹⁵) and Case 3 (there
is *no* GW propagation claim, so the constraint doesn't apply) are mutually exclusive.
**You cannot keep TEST-15 and also claim Case 3** — TEST-15 *is* a Case-1 propagation
claim. The site currently runs both simultaneously: TEST-15 lives on `/tier-3-major`,
while `/galaxy-rotation` asserts the Case-3 "doesn't apply" escape. This is the
site↔archive drift pattern (cf. memory `project_site_archive_drift_pattern.md`),
except the contradiction originates *inside* the archive (Session 59 vs Session 642)
and propagated to different site pages.

### 3. Why "GW170817 doesn't apply / passed vacuously" is wrong

The escape relies on the GW170817 path being high-coherence (⟨C⟩ ≈ 1 → ⟨1−C⟩ ≈ 0 →
α unconstrained). It fails three independent ways, and all three are forced by the
framework's *own* C(ρ) = tanh(γ·ln(ρ/ρ_crit + 1)):

- **C(ρ) → 0 at low density, by construction.** As ρ → 0, C = tanh(0) = 0. An
  extragalactic sightline (~40 Mpc to NGC 4993) is overwhelmingly intergalactic
  medium and voids, with ρ at or below the cosmic mean (Ω_m·ρ_crit ≈ 2.8×10⁻²⁷ kg/m³),
  far below any galactic ρ_crit. So C ≈ 0 → (1−C) ≈ 1 along almost the whole path.
  Session 59 §3.1 *agrees*: C_avg ≈ 0.1. **The path is the maximal-coupling regime.**

- **Source ≠ path (category error).** The "high-a, strong-field, C≈1" argument
  describes the *merger environment*, not the *propagation path*. The formula
  integrates C along the line of sight, not at the source. The high-density host
  halo (~50 kpc) is < 0.13% of a 40,000 kpc path; it cannot move the path average.

- **Robust to the ρ_crit ambiguity.** Even taking a cosmological ρ_crit so the IGM
  sits at ρ/ρ_crit ~ Ω_m ~ 0.3: C = tanh(2·ln 1.3) = tanh(0.52) ≈ 0.48, so
  (1−C) ≈ 0.52 — still O(1), still nowhere near the C≈1 the escape needs. There is no
  reasonable density assignment that makes a 40 Mpc extragalactic path high-coherence.

So GW170817 bounds α at **~50–90% of maximal coupling**: a *strong* constraint,
α ≲ (1–2)×10⁻¹⁵. Calling it "vacuous" inverts the framework's own function.

### 4. The natural amplitude is already dead by ~15 orders of magnitude

The framework's entire dark-matter mechanism is that (1−C) ~ O(1) in low-density
regions produces an O(1) mass discrepancy (flat rotation curves; the "missing mass" is
order unity at large radii). If the GW-propagation coupling α were set by the *same*
coherence physics at its natural strength, the expectation is α ~ O(1).

α ~ O(1) is excluded by GW170817 at the 10⁻¹⁵ level — **~15 orders of magnitude.**
Survival requires α ≲ 10⁻¹⁵, i.e. the coherence field that "explains" dark matter
must couple to GW propagation 15 orders of magnitude more weakly than it couples to
the gravitational dynamics it was invoked for. The framework neither derives nor
motivates this decoupling; it is an unstated fine-tuning. (A DHOST-style structural
decoupling — c_GW = c by Lagrangian design — is the standard way to get this for
free, but it requires an action principle, which Session 642 concedes the framework
does not have. Without an action, "c_GW = c by construction" is an assertion, not a
construction — exactly what the `/galaxy-rotation` open-gap box already admits.)

### 5. The clean dichotomy (this is the closure)

TEST-15 is forced into one of two corners, both non-discriminating:

- **α tied to the DM mechanism (α ~ O(1)):** refuted by GW170817 at ~15 OOM. Dead.
- **α a free parameter:** bounded above only, by the very data it would "test"
  (α ≲ 10⁻¹⁵), with no derived floor → unfalsifiable as a positive prediction; in the
  allowed range, Δc/c is observationally indistinguishable from GR's exact zero.

Either way TEST-15 is **not** "VERY HIGH power, GR predicts exactly zero." It is the
GW-sector analogue of TEST-07 (500 Mpc oscillation): a domain where GR is cleanly
distinct *in principle*, but the framework supplies no derived amplitude, so there is
nothing to falsify. By the TEST-07 standard the site already applies, TEST-15 demotes
to **exploratory / not falsifiable**. Novel discriminating count: still 0.

### 6. Connection to the methodology thread

This is a third instance of a recognizable failure mode: **a session defends a claim
locally without checking it against the framework's own governing function.** Session
59 §3.1 had the correct path-average (C_avg ≈ 0.1) and the correct conclusion
(α read off the data), yet the surrounding framing ("novel test, GR predicts zero,"
and later the "high-coherence path" evasion) treats it as a live positive prediction.
This is the same shape as the 2026-05-25 epistemic-regression event (a cheap, locally
plausible move accepted without re-grounding in the primary structure) and the
chemistry-null pattern (a correlation defended without computing the obvious baseline).
The efficiency attractor favors the locally cheaper framing; consistency with the core
equation is the expensive check that gets skipped. TEST-15 is a clean, self-contained
case for the methodology write-up: the refutation is *internal* — the framework's own
C(ρ) and its own α-from-GW170817 are sufficient to close the test.

## Implications for the Site

The three pages must be reconciled to one statement. The honest unified verdict:

> **TEST-15 (GW–DM column).** The coherence ansatz, taken as a propagation claim
> (Session 59), gives c_g/c = 1 + α·(1−⟨C⟩_LOS). α is not derived — Session 59 sets it
> equal to the GW170817 bound itself. Because extragalactic sightlines are low-density,
> they are *low-coherence* (⟨1−C⟩ ≈ 0.9 by the framework's own estimate), so GW170817
> already constrains α ≲ 10⁻¹⁵ at near-maximal coupling — a strong bound, not a vacuous
> one. The natural-scale expectation (α ~ O(1), if the GW coupling tracked the dark-
> matter mechanism) is excluded by ~15 orders of magnitude. With no derived floor,
> TEST-15 makes no positive prediction distinct from GR. **Status: Exploratory — no
> derived amplitude (same standard as TEST-07). Not a discriminating test.**

## Action: Maintainer

1. **`/tier-3-major` (TEST-15):** Replace `power: 'VERY HIGH — GR predicts exactly
   zero correlation'` with an exploratory tag matching TEST-07: "EXPLORATORY — no
   derived amplitude; α is read off GW170817, not predicted; GR-equivalent in the
   allowed range." Replace the bare "correlates with DM column" prediction line with
   the conditional form (correlation exists *only if* α > 0, and α is bounded above by
   GW170817 itself).

2. **`/top-5-tests` (TEST-15 `why` text):** Correct "passed **vacuously**." It was
   passed at ~90% of maximal coupling (⟨1−C⟩ ≈ 0.9), which makes α ≲ 10⁻¹⁵ a *strong*
   bound. Keep "monitoring only / no positive-signal prediction," but state the bound
   is near-maximal, and add the natural-scale point (α ~ O(1) already excluded by
   ~15 OOM).

3. **`/galaxy-rotation` (GW170817 section):** "GW170817 does not apply" is incorrect.
   If TEST-15 exists (Case 1, Session 59), GW170817 *applies and gives the strongest
   bound on α*. If instead the framework takes the Case-3 "no propagation claim"
   position (Session 642), then TEST-15 must be removed from `/tier-3-major`. The page
   should state the fork explicitly rather than asserting "c_GW = c by construction"
   while TEST-15 is advertised elsewhere. The existing open-gap box (no action
   principle → "c_GW = c by construction" is an expectation, not a proof) is correct
   and should be the anchor.

4. **`/falsifiability` (line 25):** "GW arrival time correlates with DM column density"
   / "No correlation at 10⁻¹⁶ level" — annotate as exploratory, no derived amplitude,
   consistent with the other three pages.

5. **Cross-link** all four to a single canonical TEST-15 statement (e.g. the
   `/tier-3-major` entry), the way TEST-04a was unified after the DESI revert, so the
   next visitor pass sees one verdict, not three.

## Open Threads

1. **Apply the same closure to TEST-17 and TEST-21.** Pass 4 flagged both as
   "falsifiable / unique to Synchronism" with no derived amplitude. TEST-21 (BAO
   sub-peaks "below the 10⁻⁵ level") and TEST-17 (cluster radial γ-gradient) are the
   same TEST-07 pattern. A short audit of each — is there *any* derived amplitude in
   the archive, or only a sensitivity target? — would complete the Tier-3/4 novel-test
   ledger. Expected outcome: both demote to exploratory, confirming the site's own
   "net discriminating tests: 0."

2. **Is a DHOST-style decoupling even definable here?** The standard escape from
   GW170817 (c_GW = c by Lagrangian design) presupposes a Lagrangian. The framework has
   none (Session 642). So "c_GW = c by construction" has no construction behind it.
   Worth a one-paragraph note: the framework can *assume* α = 0, but cannot *derive* it,
   and assuming α = 0 deletes TEST-15.

3. **The α-floor question, sharpened.** Is there *any* place in the archive that
   derives a lower bound on α (or on the GW-DM coupling) from something other than the
   data it would test? If not — and §3.1 suggests not — then TEST-15 has no predictive
   content at any sensitivity, and "kill at 10⁻¹⁶" is a sensitivity target masquerading
   as a falsification threshold.

4. **Ringdown / birefringence sub-predictions (Session 59 §3.2–3.4)** share the same
   structure (free coefficients β, α_+, α_× with no derived values). If TEST-15 is the
   advertised one, these are even thinner. Not on the site as numbered tests — keep it
   that way.
