# Finding: The BTFR n ≈ 2.2 Prediction Audit — Category Error + Failed-Prediction Relabel

## Origin

Today's visitor log (2026-04-20), Pass 4 (leading-edge researcher): flagged TEST-09 "BTFR
exponent n ≈ 2.2 universal across bands" as a **17σ contradiction with Lelli, McGaugh
& Schombert 2019** (measured n = 3.85 ± 0.09 on SPARC). The researcher called it "dead on
arrival" and noted a reviewer would stop at this entry.

Open thread flagged on 2026-04-19 in `validated-badge-violates-own-definition.md`:
*"The BTFR n ≈ 2.2 item deserves its own audit."* This finding closes that thread.

## Summary

**n ≈ 2.2 is not defensible as a BTFR prediction.** The claim originates in Session 48
(Beta Derivation Resolution, Synchronism research archive) from a relation `n = 3 - B/2`
with B = 1.62, giving n = 2.19. The derivation defends the discrepancy with observed
n ≈ 4 by asserting "the observed n ≈ 4 includes dark matter contribution" and "n ≈ 2.2
represents the baryonic component only." **This is a category error.** The Baryonic
Tully-Fisher Relation is, by definition, M_baryonic (stars + gas) against V_flat — dark
matter does not appear on the y-axis. Saying "observed BTFR is DM-contaminated" conflates
BTFR with dynamical-mass TFR. The framework's own Paper_Summary_Synchronism.md
separately lists BTFR as a **known limitation**: *"Predicted n = 2.75, observed n ≈ 4
(discrepancy of ~1.25)."* So the research archive itself contains two incompatible
positions — one defending n ≈ 2.2 as baryonic-only, the other admitting the whole
BTFR prediction failed. The site uses the former and classifies it as "Strongly Supported"
on `/prediction-tracker`. This is not a "Strongly Supported" claim; under the site's
own taxonomy it is either **Failed** (per Paper_Summary) or **Speculative** (since the
"baryonic-only" defense is not published and rests on a definitional error).

Additionally, the phrasing "universal across bands" on `/tier-1-existing` TEST-09
conflates BTFR (baryonic, by definition band-independent) with LTFR (luminosity-band TFR).
The kill criterion *"exponent varies by >0.3 across bands"* tests an empirical invariance
that already holds for BTFR trivially (no bands enter) and for LTFR is already known to
fail at ~0.7 between B and K (Verheijen 2001). Either way the prediction as stated on the
site is testable against existing data and flagged dead on arrival.

---

## 1. The site's current claim (live + source audit)

**`/tier-1-existing` TEST-09** (src/app/tier-1-existing/page.tsx:82–89):

```
id: 'TEST-09'
name: 'BTFR Exponent Universality'
data: 'Multi-band TFR datasets'
cost: '$0'
time: '3 months'
prediction: 'BTFR exponent n ≈ 2.2 universal across bands'
kill: 'Exponent varies by >0.3 across bands'
```

**`/prediction-tracker`** (src/app/prediction-tracker/page.tsx:16):

```
{ domain: 'Cosmology', name: 'BTFR exponent n ≈ 2.2', status: 'supported' }
```

The Pass 4 visitor on 2026-04-20 read this as a published, supported prediction with a
stated numerical value. That is a reasonable reading of the page.

## 2. What the BTFR actually is

**Definition (McGaugh 2000; Lelli, McGaugh & Schombert 2019 for SPARC canonical values):**

```
M_baryonic = A · V_flat^n
```

where `M_baryonic = M_stellar + M_gas` is computed from photometry (stellar M/L) plus HI
21-cm gas mass, and V_flat is the asymptotic rotation-curve velocity. **There is no
dark-matter term on either side of this equation.** The y-axis is baryons alone. The
x-axis is an observed kinematic.

**Measured slope (Lelli+2019, SPARC V_flat sample):** n = 3.85 ± 0.09 (gas-rich
subsample). With gas+stellar nuisance systematics: 3.5 ≤ n ≤ 4.1 depending on V
definition (V_flat vs V_max vs W_50). MOND deep-asymptote prediction: n = 4 exactly.

**Why the Session 48 defense does not work.** Session 48 claims *"observed n ≈ 4
includes dark matter; n ≈ 2.2 represents the baryonic component only."* But the observed
BTFR relates observed baryons to observed velocity. The only way to recover a different
"baryonic-only" slope would be to redefine the y-axis as something other than
M_baryonic — e.g., M_stellar alone (excluding gas), or M_baryonic-corrected-for-some-
DM-assumption. Session 48 does neither. The n = 2.2 value is a theoretical number from
coherence-threshold scaling that simply disagrees with the empirical baryonic-vs-velocity
measurement; it is not a prediction of a *different relation* that would observationally
replace the BTFR.

## 3. The archive contradicts itself

Three positions coexist in /mnt/c/exe/projects/ai-agents/Synchronism/Research:

| Source | Claim | Status |
|--------|-------|--------|
| **Session48_Beta_Derivation_Resolution.md:190** | n = 3 - B/2 = 2.19 as baryonic-only prediction | Defended as validation via reinterpretation |
| **Paper_Summary_Synchronism.md:138** | "BTFR Exponent: Predicted n = 2.75, observed n ≈ 4 (discrepancy of ~1.25)" | Known limitation, failed |
| **TheoryArc_Summary_185-194.md:95** and TheoryArc_Complete_185-198.md:102,110 | V ∝ M^0.25 (deep-MOND limit, n = 4); V ∝ M^0.35 intermediate (n ≈ 2.86); V ∝ M^0.5 massive (n = 2) | Regime-dependent — no single "universal" slope |

So the archive contains:
- An n = 2.75 prediction explicitly marked failed
- An n = 2.2 prediction defended via a category error
- A regime-dependent slope (2 to 4 depending on mass) that contradicts "universal"

The site's `/tier-1-existing` page picked the middle option (n = 2.2) and added a
phrasing ("universal across bands") that matches none of the archive derivations.

## 4. "Universal across bands" is a separate category error

"BTFR Exponent Universality" and "kill: exponent varies by >0.3 across bands" invokes
photometric bands. **The BTFR has no band dependence** because the y-axis uses baryonic
mass (stars + gas), not luminosity. Band dependence applies to the LTFR (Luminosity
Tully-Fisher):

- **Verheijen 2001, UMa cluster** — B-band n ≈ 3.5; K-band n ≈ 4.2; R, I intermediate.
  Bands span ~0.7 in slope (well above the 0.3 kill threshold).

So TEST-09 as written conflates two distinct relations:

| Relation | y-axis | Band-dependent? | Empirical n |
|---|---|---|---|
| BTFR | M_star + M_gas | No (baryonic mass independent of band) | ~3.85 |
| LTFR | L in a specific band | Yes | ~3.0–4.2 |

If the prediction is about LTFR universality, (a) call it LTFR, (b) it is already
falsified by Verheijen 2001 at the >0.3 kill threshold, (c) it belongs in Failed.

If the prediction is about BTFR, (a) "bands" doesn't enter, (b) the kill criterion is
vacuous (no variation possible), (c) the numerical value 2.2 contradicts Lelli+2019 at
~17σ and belongs in Failed.

Either way, "Strongly Supported" is not the right badge.

## 5. Under the site's own taxonomy

From `/research-philosophy` (per the 2026-04-19 `validated-badge-violates-own-definition`
finding):

| Badge | Applies if … | Fit for TEST-09 |
|---|---|---|
| Validated | Quantitative match, unique to framework | No — n = 2.2 doesn't match observed ~3.85 |
| Strongly Supported | Quantitative match, not unique | No — still no match |
| Untested | Falsifiable prediction not yet tested | No — already tested by Lelli+2019 |
| Speculative | Theoretical extension without a defined test | Plausible if "baryonic-only" is genuinely a different measurement — but Session 48 doesn't specify one |
| **Failed** | **Prediction tested and wrong** | **Yes** — this is the cleanest fit, and matches Paper_Summary's own framing |
| Reparametrization | Known result restated | No — no known result has slope 2.2 |

The correct badge is **Failed**, and this is consistent with the archive's own
Paper_Summary entry. Keeping it on the site as "Strongly Supported" under TEST-09
with a self-referential kill criterion is what Pass 4 correctly called "the test as
written is self-falsifying."

## 6. What actually happens at the mass scales where n=2.2 might be defensible

Mass regime matters. In the archive's `TheoryArc_Complete_185-198.md`:

- Deep-MOND limit (low-mass, low-acceleration): V ∝ M^0.25, i.e. n = 4. This is where
  the MOND a₀-interpolation function matches observations.
- Intermediate regime: V ∝ M^0.35, i.e. n ≈ 2.86. Not directly observed as a BTFR
  slope; Lelli+2019 does not report a strong break in the SPARC sample.
- High-mass (star-dominated): V ∝ M^0.5, i.e. n = 2. This is the behavior *within
  individual galaxies* at large radii if the gas-correction drops out — but it's not
  the cross-galaxy BTFR slope.

If the framework's prediction is specifically "n = 2.2 in the high-mass star-dominated
regime," then:
1. That is not what TEST-09 says — TEST-09 says "universal across bands."
2. The high-mass regime overlaps exactly with the galaxies where the BTFR is *best
   measured* (massive spirals), which is where observed n ≈ 3.85. So even in the regime
   where 2.2 should hold per the framework, the data says ~4.
3. This leaves no obvious subsample where n = 2.2 is empirically supported.

## 7. What a correct restatement would look like

Three options, ranked by honesty:

**Option A (most honest): reclassify as Failed.**
Move `BTFR exponent n ≈ 2.2` from Strongly Supported to Failed. Add to
`/honest-assessment` the note: *"Coherence-threshold scaling predicts n = 3 - B/2 ≈ 2.2
vs observed n = 3.85 ± 0.09 (Lelli+2019). Prior framework prediction of n = 2.75 was
also inconsistent. The 'baryonic vs dark matter' reinterpretation does not resolve the
discrepancy because BTFR's baryonic mass is measured directly and includes no dark
matter term."*

**Option B (moderately honest): demote to Speculative with explicit caveats.**
Relabel TEST-09 as: *"If the coherence-threshold derivation n = 3 - B/2 applies to a
yet-unmeasured 'pure baryonic dynamical' TFR distinct from the measured BTFR, predict
n ≈ 2.2 for that construct. This is not currently an operationally defined
measurement — pending a published protocol to separate the hypothesized
baryonic-only component from the standard BTFR."* Badge: Speculative.

**Option C (cosmetic): fix the phrasing only, keep the claim.**
Change "universal across bands" → "universal across mass ranges"; change the kill
criterion to "observed BTFR slope ≠ 2.2 at >3σ" (which already falsifies it per
Lelli+2019). This is just Option A with extra steps — it visibly self-kills.

Option A is the only one that leaves the taxonomy internally consistent with
`/honest-assessment`'s existing honesty culture.

## 8. Why this matters beyond TEST-09

TEST-09 is a concrete instance of the structural pattern Pass 4 diagnosed across the
site: **a predicted numerical value that disagrees with published data is filed as
"supported" by reinterpreting the data rather than revising the prediction.** The same
pattern appears (less cleanly) in:

- **Melting points off 53%** (`/honest-assessment`): honestly flagged, but the
  framework's response is "parameter identification is incomplete" rather than "the
  coherence equation gives the wrong answer for this class."
- **YBCO Tc = 607K predicted vs 93K observed** (Pass 4 2026-04-20): a 6.5× miss
  framed as an identification problem rather than a structural failure.
- **Critical exponents wrong by factor ~2** (`/phase-transitions`): the classical
  mean-field failure, honestly admitted but not connected to *other* failures that
  share the same mean-field origin.

What TEST-09 adds that is new: this is a case where the *observational* side is being
reinterpreted (observed n=4 "includes DM") to rescue a prediction, despite the
observation being definitionally baryonic. That is categorically different from
parameter-identification or mean-field-limitation excuses — it is a specific kind of
error that is worth naming and guarding against, because the same move could be made
on other tier-1 predictions if it isn't flagged.

A suggested name for this failure mode: **target reinterpretation** — when the prediction
resists falsification by redefining what the observation "really measures" instead of
revising the prediction. In philosophy of science this is the standard ad hoc
modification that Popper flagged as a marker of degenerating research programs. In the
site's own language, it would be worth adding to `/research-philosophy` as an
anti-pattern the project commits to avoiding.

---

## Implications for the Site

1. **TEST-09 as written is self-falsifying.** Either the value (n = 2.2) is wrong per
   Lelli+2019, or the "universal across bands" phrasing is wrong per BTFR's definition,
   or both. The kill criterion tests neither mode of failure.

2. **The `/prediction-tracker` "Strongly Supported" status contradicts the archive's
   own `Paper_Summary_Synchronism.md` entry** which lists BTFR exponent as a known
   limitation with observed ≈ 4 vs predicted 2.75. This is the same *assignment*
   problem as the 2026-04-19 badge-violates-own-definition finding: the tracker isn't
   using the archive as its source of truth.

3. **The "observed includes dark matter" defense in Session 48 should be retracted
   from any public-facing material.** It relies on a category error about what the
   BTFR measures. The coherence-threshold derivation n = 3 - B/2 is mathematically
   fine as an internal relation of the framework, but it does not predict the empirical
   BTFR slope; any claim that it does should be clearly marked as disputed within the
   framework itself.

4. **The pattern deserves a name: "target reinterpretation."** Adding this to the
   site's philosophy/antipatterns would be a more durable fix than patching
   TEST-09 alone — because the same move can be made again.

## Action: Maintainer

- **`src/app/prediction-tracker/page.tsx:16`**: change
  `{ domain: 'Cosmology', name: 'BTFR exponent n ≈ 2.2', status: 'supported' }`
  to `status: 'failed'`. This matches `Paper_Summary_Synchronism.md:138`.
- **`src/app/tier-1-existing/page.tsx:82–89`**: remove TEST-09 from the Tier-1
  hub and move to `/honest-assessment` as a documented failure entry. Alternatively,
  rewrite the entry to (a) clarify what *distinct observable* n=2.2 would apply to, if
  any, and (b) use a kill criterion tied to a specific measurement, not self-referential
  band-consistency. The current formulation is not publishable as a test.
- **`src/app/honest-assessment/page.tsx`**: add to the failed-predictions list:
  *"BTFR exponent: coherence-threshold derivation gives n = 3 - B/2 ≈ 2.2; observed
  n ≈ 3.85 ± 0.09 (Lelli, McGaugh & Schombert 2019). The 'baryonic vs dark-matter
  reinterpretation' proposed in Session 48 is not supported because the BTFR is
  definitionally baryonic."*
- **`src/app/research-philosophy/page.tsx`**: add a short "Antipatterns" subsection
  naming **target reinterpretation** — defined as rescuing a prediction by redefining
  what the observation measures rather than revising the prediction. Commit to flagging
  future cases.
- **Back-annotation to the Synchronism research repo**: `Session48_Beta_Derivation_
  Resolution.md` lines 108–110 and 188–192 should be edited to reflect that the
  "baryonic-only" defense is retracted. A short note referencing this finding and
  Paper_Summary_Synchronism.md's existing failure entry is sufficient.

## Open Threads

- **Was n = 2.75 (Paper_Summary) or n = 2.2 (Session 48) the "official" prediction, and
  when did the site switch?** The git history on `src/app/tier-1-existing/page.tsx`
  and `prediction-tracker/page.tsx` would tell the story. If it was switched from
  n = 2.75 (failed) to n = 2.2 (supported) without a corresponding derivation change,
  that's a documentation trail worth preserving.

- **Do any other Tier-1 tests share the "target reinterpretation" pattern?** TEST-07
  (cluster oscillations) and TEST-10 (dwarf galaxy DM dominance, 98% observed) are
  candidates for similar review — the dwarf DM dominance is already in observed
  territory as framework-consistent, but the question is whether the 98% measurement
  was used to calibrate or to test.

- **Can a physically meaningful "pure baryonic dynamical TFR" be constructed that
  would observationally test n = 2.2?** If the coherence-threshold derivation is
  mathematically sound as a statement about some specific subsystem — e.g., only
  the stellar-disk component, with gas removed — then there may be an operationally
  defined observable that gives ~2.2. That would rescue the prediction as Speculative
  but testable. A referee would ask: specify the cut, run it on SPARC, report the
  slope. This is a concrete follow-up for the research side, not the site side.

- **The broader pattern of archive-vs-site drift.** This is the second finding in a
  week where the `/prediction-tracker` contradicts the research archive's own
  characterization of the same claim (first: a₀ = cH₀/(2π) "not unique" per archive,
  "Validated" per tracker; second: BTFR known-failure per archive, "Supported" per
  tracker). Worth a single sweep comparing every tracker entry to the archive's
  current characterization — this is a one-time audit that would correct multiple
  assignments at once.
