# Finding: The "Validated" Badge Violates the Site's Own Taxonomy Definition

## Origin

Topic queue: `validated-label-rename.md` (open). Triggered by Pass 4 visitor (2026-02-21 and
recurring): *"Validated conflated with novel prediction confirmed — misleading. The site's
biggest intellectual dishonesty, even if unintentional."* Pass 2 (2026-04-19) re-flagged the
same issue via a different door (homepage badges don't match `/research-philosophy` taxonomy).

## Summary

The site defines **Validated** = "Quantitative match to empirical data within stated error
bounds" and **Strongly Supported** = "Consistent with data but not uniquely predicted — other
frameworks give the same result." The distinction between the two *is* novelty. The
`/prediction-tracker` page then assigns the **Validated** badge to 8 claims, of which **7 are
explicitly reproduced by MOND, ΛCDM, or the known Milgrom relation** and should, by the site's
own definition, sit in **Strongly Supported** or **Reparametrization**. The rename discussion is
therefore downstream of a more concrete problem: the taxonomy already distinguishes "quantitative
fit" from "quantitative fit that is uniquely Synchronism's," but the prediction tracker ignores
the distinction. Fix the assignment before fixing the label.

---

## 1. What the taxonomy says (live-site audit, 2026-04-19)

Verbatim from `/research-philosophy`:

| Badge | Definition |
|-------|------------|
| **Validated** | "Quantitative match to empirical data within stated error bounds" |
| **Strongly Supported** | "Consistent with data but not uniquely predicted — other frameworks give the same result" |
| **Untested** | "Falsifiable prediction defined but not yet tested experimentally" |
| **Speculative** | "Theoretical extension without a defined test" |
| **Reparametrization** | "Reproduces known physics in different notation — no new content, but may offer notational clarity" |
| **Failed** | "Prediction tested and wrong. Kept visible as permanent record." |

**Note the explicit separator.** "Validated" and "Strongly Supported" share the "quantitative
match" criterion. The only text differentiating them is *novelty* — whether the same result
is reproduced by other frameworks. So *by the site's own definition*, the moment another
framework predicts the same number, the claim cannot be Validated; it must be Strongly
Supported (if it's empirically accurate) or Reparametrization (if it's notational).

## 2. What the prediction tracker actually does (live-site audit, 2026-04-19)

The eight **Validated** items on `/prediction-tracker`:

| # | Claim | Also predicted by |
|---|-------|-------------------|
| 1 | SPARC rotation curves (175 galaxies) | MOND (McGaugh-Lelli-Schombert 2016 RAR) |
| 2 | ALFALFA-SDSS TFR scatter (14,585 galaxies) | MOND (Tully-Fisher is a MOND prediction since 1983) |
| 3 | CDM σ_int = 0.086 dex | MOND (this is ~the observed RAR tightness) |
| 4 | a₀ = cH₀/(2π) derivation | Milgrom 1983; McCulloch 2007; Verlinde 2017; Smolin 2017 (site explicitly cites these) |
| 5 | Freeman's Law from ρ_crit | Empirical law; reproduced by MOND + any surface-brightness cutoff theory |
| 6 | Dwarf galaxy DM dominance | MOND (strongest regime) |
| 7 | BTFR exponent n ≈ 2.2 | MOND (exactly n=4 in deep-MOND; measured 2.2–4.0 depending on baryon definition) |
| 8 | Environment-dependent RAR scatter | **Possibly unique — see §3** |

**Items 1–7 fail the Validated definition** because each is "also predicted by other
frameworks," which the taxonomy says belongs in **Strongly Supported** (for consistent-but-not-
unique) or **Reparametrization** (for notational reproduction). Item 4 (a₀ = cH₀/(2π)) is the
clearest: `/mond-unification` itself says *"this relationship is not unique to Synchronism"*
and cites three other derivations. Yet the prediction tracker rates it Validated.

This is not subtle. The contradiction is between two pages on the same site, about the same
claim, using the same taxonomy.

## 3. The one claim that might legitimately be Validated

**Environment-dependent RAR scatter** (item 8). This is the only claim in the list that
differs in a testable way from MOND (which predicts zero environment dependence) and CDM
(which predicts 0.11–0.16 dex of scatter, environment-independent). `/cdm-discrimination`
reports p = 5×10⁻⁶ on SPARC+environment catalogs.

But Pass 4 (2026-02-21 and today) noted this is a **residual correlation**, not a rotation
curve theory — `/galaxy-rotation` admits 86% of RAR variance is unexplained by coherence.
Worse: environment in SPARC correlates with Hubble type, surface brightness, inclination, gas
content, and distance bias, any of which can induce spurious residual correlations. Without a
published null model and bootstrap-across-subtype breakdown, the p-value is untrustworthy.

**The honest placement for item 8 is probably Strongly Supported with "needs null model
disclosure" note**, not Validated, until the statistical protocol is published.

## 4. Why this matters: the "0 unique confirmed predictions" problem dissolves

`/honest-assessment` says: *"0 unique confirmed predictions"*. The prediction tracker says:
*"8 Validated."* Pass 2 (every visitor log) flags this as a contradiction.

It isn't actually a contradiction — it's an *assignment bug*. If the taxonomy's definition
is applied consistently, 7 of the 8 items move from Validated to Strongly Supported or
Reparametrization. The count becomes **1 Validated (with caveats)** / **14 Strongly Supported**,
which is *consistent* with "0 unique confirmed predictions" under a stricter reading of
"confirmed" (= survives null-model / preregistration) or "0–1 confirmed" under a looser reading.

The dissonance that prompted the topic queue was real, but the solution is not renaming the
badge. It's **fixing the assignment** so the prediction tracker and honest-assessment page
tell the same story.

## 5. Homepage non-canonical badges are a separate bug

Homepage (live audit, 2026-04-19) uses labels that don't exist in the taxonomy:

| Homepage label | Domain | Closest canonical badge |
|---------------|--------|------------------------|
| "89% Validated" | Chemistry | **Reparametrization** (Pass 3: this is r² on fitted substances, not predictive) or **Strongly Supported** |
| "1 untested with 8-way convergence" | General | **Untested** (the "8-way convergence" note is a commentary, not a badge) |
| "1 new ontology with testable consequences" | General | **Speculative** or a new "Framework" badge |
| "1 consistent with 14,760 galaxies" | Cosmology | **Strongly Supported** |

Each homepage label is a summary sentence masquerading as a badge. The fix is to either
(a) use only the six canonical badges on the homepage, with prose descriptions in body text,
or (b) add a seventh canonical badge for framework-level claims (see §6).

## 6. Minimal proposal (two independent changes)

These are separable; the first is high-impact and low-cost; the second is an addition.

### Change 1: Reclassify per the existing taxonomy

For each of the 8 current Validated predictions, apply the assignment rule:

```
IF (quantitative match to data) AND (no other framework predicts the same result):
    → Validated
ELSE IF (quantitative match to data) AND (other frameworks also predict it):
    → Strongly Supported
ELSE IF (reproduces a known result in different notation):
    → Reparametrization
```

Expected outcome: 1 Validated (with "needs null model" note), 6 Strongly Supported, 1
Reparametrization (a₀ = cH₀/(2π) is explicitly shared across 4+ derivations). This makes the
prediction tracker consistent with `/honest-assessment` and `/mond-unification` without adding
or removing content — only relabeling.

### Change 2: Add a "Confirmed" badge for the empty-but-honest category

The current taxonomy has no badge for "genuinely novel, tested, confirmed." The honest current
answer is that this set is empty. That's more compelling if it's *visible as a badge with zero
entries* than if the visitor has to infer emptiness. Proposed:

**Confirmed** — "Unique prediction of this framework, tested against data, confirmed.
(currently: 0 entries)"

This gives the site a visible aspirational slot, turns the honest assessment into a structural
feature of the tracker rather than a disclaimer page, and makes the eventual first Confirmed
entry — if TEST-02 or TEST-07 returns positive — a visibly meaningful badge transition.

### Optional: tooltip each badge in place

Pass 2's secondary suggestion: rather than requiring the reader to click through to
`/research-philosophy` to read the taxonomy, every badge on every page should be a tooltipped
or hover-defined span. The taxonomy text is short enough (one line each) to fit in a tooltip.
This is a component-level change in `ValidationBadge.tsx`; it closes the loop between badge
usage and badge definition without relying on cross-page navigation.

## 7. What a rename buys (and doesn't)

The topic framing — rename "Validated" to "Consistent" or "Reproduced" — would work if the
assignment were correct but the label was misleading. It isn't. The label is already
precisely defined; the assignment ignores the definition. Renaming without reclassifying
would just migrate the ambiguity to a different word: "Consistent" applied to 8 items of
which 7 are shared with other frameworks would be just as misleading as "Validated" is now.

Renaming may still be useful in a second step (e.g., once reclassified, "Validated" could be
renamed "Novel & Confirmed" to make the novelty criterion explicit and irreversible). But
the first move is the assignment fix, because it's the assignment — not the word — that
contradicts the honest assessment.

---

## Implications for the Site

1. The `/prediction-tracker` assignment of 8 Validated badges contradicts the taxonomy on
   `/research-philosophy` in 7 of 8 cases. This is auditable against the site's own
   definitions — it is not a matter of interpretation.

2. The `/honest-assessment` claim of "0 unique confirmed predictions" is consistent with the
   *taxonomy definitions*, not with the *tracker assignments*. The tracker is the outlier.

3. Homepage non-canonical labels ("89% Validated", "1 consistent with 14,760 galaxies") are a
   separate layer of drift and require their own reconciliation pass. The underlying issue is
   identical: the canonical taxonomy exists, but pages reimplement it locally.

4. The topic queue's proposed rename addresses the symptom. The assignment fix addresses the
   cause. Both would be better than neither; the assignment fix alone is sufficient; the
   rename alone is not.

## Action: Maintainer

- **`/prediction-tracker`** (`src/app/prediction-tracker/page.tsx` or wherever predictions are
  enumerated): audit each prediction's badge against the `/research-philosophy` definition.
  Move 7 of 8 Validated items to Strongly Supported or Reparametrization per §2 table.
- **`/prediction-tracker`** `Environment-dependent RAR scatter` (item 8): add a note "pending
  null-model disclosure; Pass 4 flagged p-value unreliable without per-Hubble-type bootstrap."
  Optionally downgrade to Strongly Supported until the null model is published.
- **`src/components/ValidationBadge.tsx`**: add `title` attribute (native tooltip) with the
  one-line definition from `/research-philosophy`, so hover reveals the definition everywhere
  the badge appears.
- **Homepage** (`src/app/page.tsx`): replace non-canonical labels with canonical badges +
  prose. Map per §5 table. "89% Validated" is the most misleading and should be prioritized;
  Pass 3 and Pass 4 agree this is a goodness-of-fit on fitted substances (Reparametrization),
  not a predictive validation.
- **Optional (Change 2)**: add `confirmed` status to `lib/types.ts` ValidationStatus union,
  with badge styling in `ValidationBadge.tsx` and an entry on `/research-philosophy`. Display
  "(currently: 0 entries)" wherever the badge definition appears. This institutionalizes the
  honest assessment.

## Open Threads

- **Where did the tracker assignments come from?** If there's no promotion criterion (Pass 4
  critical: no methodology page), individual contributors may have been assigning badges by
  intuition rather than taxonomy. The assignment fix is a one-time cleanup; without a
  documented promotion rule, drift returns. This loops back to the missing methodology page.

- **Is "Strongly Supported" the right name for shared predictions?** The word "supported"
  still connotes "novel prediction supported by evidence." A reader who doesn't click through
  to the definition will still misread it. Candidate renames once reclassification is done:
  "Reproduces known result" (colder, explicit); "Consistent with established physics"
  (longer, honest); "Shared prediction" (short, precise). This is the *second* step, after
  the assignment fix.

- **The BTFR n ≈ 2.2 item deserves its own audit.** MOND predicts n = 4 in deep-MOND
  asymptote; observed n ≈ 3.5–4.0 for gas-rich samples, drops to ~2.2–2.8 for stellar-only
  Tully-Fisher. "n ≈ 2.2" as a validation depends on which baryonic mass proxy is used.
  Separate finding — note for explorer queue.

- **What is the population of items currently on the "Strongly Supported" list, and do they
  meet that definition?** Same audit run in reverse: are the 7 currently Supported items
  truly "consistent with data," or are they Untested dressed up? Pass 3 noted BAO 10⁻⁴ is
  below DESI DR2 sensitivity. "BAO coherence modulation" may need demotion from Supported to
  Untested.

- **Downstream coupling to the methodology page.** Pass 4 has now flagged the missing
  methodology page in five consecutive visitor logs. The badge-assignment problem is one
  observable symptom: without a documented promotion pipeline, badges drift. A methodology
  page describing *how* a claim gets promoted (and by whom, and with what evidence threshold)
  would make the taxonomy load-bearing rather than decorative.
