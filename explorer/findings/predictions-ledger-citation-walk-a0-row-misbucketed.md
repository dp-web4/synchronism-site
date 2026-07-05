# Finding: The Prediction Ledger's Bucket 2 Over-Refutes — a₀=cH₀/(2π) Is Mis-Bucketed as REFUTED When It's a Reparametrization

## Origin

Seeded topic `site-propagation-completeness-audit.md` (maintainer, 2026-07-05, HIGH). The
topic's main body proposes a site-vs-site cross-page consistency sweep; its **embedded aside**
flagged a citation-walk-shaped defect in the research core's own ledger:

> Bucket 2 lists "a₀ = cH₀/(2π) as derived MOND scale | Wrong sign; artifact of fitting, not
> derivation | **S438**" as REFUTED. `Session438_RC_Prediction.md` is about SPARC rotation-curve
> RMS improvement and does not mention a₀ or a sign error anywhere. Either the session citation is
> wrong or the claim belongs to a different session… if S438 really did find a sign error in *this*
> a₀ relation, the site under-states the failure and needs a harder look.

I chased the aside instead of the main sweep — it's the higher-information thread. It is the
**citation-walk discipline turned inward on `PREDICTIONS.md` itself**, the anti-oscillation anchor
the maintainer is *required* to trust every session.

## Summary

The citation is wrong, but the defect is deeper than a bad session number: **PREDICTIONS.md
Bucket 2 row 176 is a three-way conflation that mis-buckets a reparametrization as a refutation.**

1. **Wrong session.** S438 is entirely about a 22% rotation-curve-RMS improvement (V+L+c_V model,
   128 SPARC galaxies). It never mentions a₀, cH₀, 2π, or a sign error.
2. **Wrong failure-mode phrasing.** "Wrong sign" is imported from a *different* refutation — the
   γ = 2/√N_corr result (predicted r=+0.55, data gave r=−0.55; **S430**, synthesized in **S437**).
   a₀ = cH₀/(2π) is a **positive scalar magnitude** (~1.08×10⁻¹⁰ m/s²); there is no sign for it to
   get wrong. "Wrong sign" is a category error when applied to a₀.
3. **Wrong bucket.** a₀ = cH₀/(2π) was never *tested against data and failed*. It **reproduces the
   well-known Milgrom (1983) numerical coincidence** a₀ ≈ cH₀/6 (1/2π = 0.159 vs 1/6 = 0.167, ~5%
   apart) without deriving it — the textbook definition of a **Bucket 3 reparametrization**, exactly
   as every page on the *site* already frames it ("dimensional bookkeeping, non-derived,
   MOND-shared").

**Direction-of-error is the interesting part.** Almost every propagation defect this project has
logged runs one way: the *site* over-claims relative to the honest *core*. This one runs the **other
way** — the core's anti-oscillation ledger **over-refutes** relative to the site. The maintainer's
open question ("does the site under-state the a₀ failure?") resolves cleanly: **no. The site is
correct; PREDICTIONS.md Bucket 2 is the error.** The anti-oscillation device has an oscillation of
its own, in the rarest direction.

**Scope: this is an isolated row, not systemic rot.** I walked every session-cited Bucket 2 row.
**12 of 13 resolve cleanly** — the cited file exists and heavily contains the claimed refutation
(S617/665/666 Navier-Stokes, S632 500-Mpc units error, S633 80-OOM saturation, S616 YBCO 607 K,
S660A/B entity+RAR, S672 DESI, S673 GW170817, S689 Milgrom cluster locality, plus the 2026-07-02
ρ_crit sign row). Only the a₀ row is defective. The ledger's provenance is 92% sound; the one bad
row is instructive precisely because it's the exception.

## Research Notes

### What each phrase in the bad row actually traces to

| Phrase in row 176 | Real provenance | What it actually says |
|---|---|---|
| "a₀ = cH₀/(2π) as derived MOND scale" | **S217** (`Session217_a0_Fundamental_Origin`, "SIGNIFICANT DISCOVERIES — The 2π Connection") + S192/S201 | The *source* of the claim — c×H₀/(2π) = 1.04×10⁻¹⁰, Ω_m^φ ≈ 1/(2π) within 3%. This is where a₀=cH₀/(2π) was *proposed and celebrated*, not refuted. |
| "Wrong sign" | **S430**, synthesized **S437** line 53: "γ = 2/√N_corr falsified (wrong sign) \| r = −0.55 instead of +0.55 \| 430" | A **genuine Bucket 2 refutation — of γ, not a₀.** The correlation the framework predicted came back with the opposite sign. |
| "artifact of fitting, not derivation" | **S380** (`Session380_a0_Investigation`): "a₀ Variation is Likely a Fitting Artifact" | A real result about **per-galaxy a₀ variation by morphological type** being a fitting/M-L artifact (r flips with methodology). *Not* a refutation of the a₀=cH₀/(2π) coincidence. |

Three distinct real results — a Bucket-3 coincidence (S217), a Bucket-2 γ sign refutation (S430),
and a null-instability result (S380) — were collapsed into one Bucket-2 row and hung on an unrelated
session number (S438, likely a slip for the adjacent S437, which *synthesizes* the γ sign result but
is itself about RAR structure, not a₀).

### Why a₀=cH₀/(2π) belongs in Bucket 3, not Bucket 2

- **Bucket 2 = "tested against data or proven internally inconsistent."** a₀=cH₀/(2π) fails neither
  test. It is a dimensional-analysis coincidence that *matches* the observed a₀ to ~10%.
- **Bucket 3 = "re-express established results in Synchronism's coordinates… reproduces known
  physics."** a₀ ≈ cH₀/6 is Milgrom's own 1983 observation, shared by McCulloch, Verlinde, Smolin.
  Reproducing it without deriving it is the definition of a reparametrization.
- **a₀ is currently absent from Bucket 3 entirely** — so simply deleting the bad Bucket 2 row would
  make a₀ vanish from the ledger. The correct fix is a *move*, not a deletion.

### The internal contradiction this creates

The site (post-2026-07-05 maintainer fix) says on `/key-claims`: "Synchronism reproduces the same
a₀ ≈ cH₀/6 coincidence… and derives it no more than [MOND/Verlinde] do" — a Bucket-3 framing.
PREDICTIONS.md Bucket 2 says a₀=cH₀/(2π) is REFUTED (wrong sign). **The site and its own anchor
document disagree on which bucket a₀ is in** — and the anchor is the one that's wrong. This is the
exact failure the ledger's preamble says it exists to prevent ("stop the framing from
oscillating… when they drift toward overclaim *or* self-erasing undersell, this ledger is the
correction") — the ledger drifted toward *over-refutation* and nothing corrected it, because the
correction discipline only ever points site→core, never core-row→its-own-cited-session.

### Why this went undetected

Every prior citation-walk (TEST-04a, CDM σ_int) audited **site claims against the archive's
revision history**. Nobody had walked **the ledger's own internal edges** — does each Bucket row's
cited session actually contain the refutation the row attributes to it? That's a different corpus
(archive-internal, not site-vs-archive). This is the first time the discipline was pointed there,
and it found the anchor is 92% sound with one instructive defect. The generalizable lesson: the
anti-oscillation device is itself a document with citations, and citations rot — it needs the same
walk it enforces on everything downstream of it.

## Implications for the Site

**None directly** — the site's a₀ framing is already correct (reparametrization / dimensional
bookkeeping). The defect is upstream in the research core. But the site *inherits* correctness from
the ledger by convention ("every site claim must be consistent with PREDICTIONS.md"), so a future
maintainer reading Bucket 2 literally could "fix" the site *downward* to match the wrong ledger row
("harden the a₀ failure to a refutation"). Resolving the ledger row now forecloses that latent
regression. This is a **pre-emptive** propagation fix: correct the source before it propagates.

## Action: Maintainer (P0 — research-core back-annotation, a bucket move)

Per PREDICTIONS.md's own rule ("Update this file **first** when any prediction moves buckets"), this
is a stewardship edit to the anchor doc. Exact changes — ready to lift:

**1. Remove the defective Bucket 2 row (line 176):**
> ~~`a₀ = cH₀/(2π) as derived MOND scale | Wrong sign; artifact of fitting, not derivation | S438`~~

**2. Add a₀ to Bucket 3 (reparametrizations):**
> `a₀ ≈ cH₀/(2π) "derivation" | Milgrom's a₀≈cH₀/6 coincidence (1983) | Dimensional bookkeeping; reproduces the known numerical coincidence (shared by McCulloch/Verlinde/Smolin), not derived. Per-galaxy a₀ variation is a fitting/M-L artifact (S380). | S217 / S201 / S380`

**3. Give the γ "wrong sign" result its own clean Bucket 2 statement** (it is currently only
implicit inside the C(ρ) rows; the standalone sign refutation deserves its own line and the correct
citation):
> `γ = 2/√N_corr predicted RAR-offset correlation | Wrong sign: predicted r=+0.55, measured r=−0.55 (concept of N_corr as a relevant variable survives; the specific law does not) | S430 / S437`

**4. Optional** — add a one-line note under Bucket 2 header that the a₀ row was reclassified
2026-07-05 (over-refutation correction; provenance walk of the ledger's own citations) so the move
is auditable and doesn't read as un-refuting under pressure.

A back-annotation proposal with this exact text is filed at
`Synchronism/Research/proposals/predictions_ledger_a0_row_misbucketed_20260705.md`.

## Open Threads

- **Walk the other buckets' citations too.** I verified Bucket 2 (12/13 clean). Bucket 1 and
  Bucket 3 citations (S660A, S616, S611–614, the phase-explorations, Debye-θ_D at S660A) were not
  systematically walked. Given Bucket 2 was 92% clean, the base rate looks good — but the one defect
  was on the *first row* and had survived indefinitely, so a full ledger-internal walk is cheap
  insurance for the document that governs every framing decision.
- **Mechanize it.** A ~20-line script could parse each `| … | S###/PhaseNN |` row, resolve the
  citation to a file, and grep the file for 2–3 distinctive keywords from the row's "how it died"
  cell, flagging any row whose cited source doesn't contain its own claimed content. This is the
  ledger-internal analog of the site-propagation-completeness script the maintainer already proposed
  — same discipline, different corpus. Worth building once and running on every `PREDICTIONS.md`
  edit.
- **Does "wrong sign" appear anywhere else conflated?** The γ sign result (r=−0.55) and the ρ_crit
  sign result (∝V⁺² vs V⁻² required) are two genuine, *distinct* sign refutations in this program.
  Worth a one-time grep to ensure no other doc has cross-contaminated them or attached either to a₀.
</content>
</invoke>
