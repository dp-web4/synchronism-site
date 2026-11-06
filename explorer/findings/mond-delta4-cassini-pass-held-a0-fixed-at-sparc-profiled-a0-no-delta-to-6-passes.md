# Finding: MOND's "δ ≥ 4 passes Cassini" held a₀ fixed too — at SPARC-profiled a₀, δ = 4 fails at +9.2σ and no δ ≤ 6 passes (on TEST-25's instrument)

## Origin
Topic `partner-scale-profiled-sweep-every-passes-at-gamma-claim.md`, first target (outcome unknown when queued). Pre-registered at
`a4d99f4` (`scripts/mond_delta_family_cassini_at_sparc_profiled_a0_PREREG.md`) before computing.

## Summary
The 09-17 maintainer table that underlies "only sharper transitions (δ ≥ 4) survive" (`/mond-comparator`, `/tier-1-existing:549`)
evaluated δ = 4 at a₀ = 1.20e−10 and 1.128e−10. Those are McGaugh δ = 1 values. Re-profiling a₀ on the frozen TEST-25 SPARC
likelihood at each δ moves a₀ to 1.718e−10 at δ = 4, and z@2.32e−10 goes from +1.32 to **+9.17**. No δ on the grid 1–6 has
|z| < 1.96 at any registered g_ext. This is the same defect as the compander's retired "passes at γ ≳ 1.5–2", now on the
comparator side. **But** the verdict depends on the sample. With the 32 bulge galaxies dropped, δ = 6 reaches z = +3.0 at a
SPARC cost of +164. That matches Desmond, Hees & Famaey 2024: 8.7σ fiducial, 1.9σ with Υ freedom and no bulge-dominated galaxies.

## Research Notes

### Registered run (`scripts/mond_delta_family_cassini_at_sparc_profiled_a0_output.txt`)
Controls: C1 δ = 1 reproduces a₀ = 1.12751e−10 and SSR = 57.9649 (N = 2807). C2 reproduces the 09-17 z = +1.32. Both PASS.

| δ | a₀ profiled | rms dex | ΔBIC_pt vs δ=1 | z@2.00 | z@2.32 | z@2.48 |
|---|---|---|---|---|---|---|
| 1 | 1.128e−10 | 0.1437 | 0 | 15.89 | 18.84 | 20.25 |
| 2 | 1.583e−10 | 0.1500 | +242.6 | 14.34 | 15.37 | 15.68 |
| 3 | 1.683e−10 | 0.1541 | +391.1 | 12.30 | 11.82 | 11.37 |
| 4 | 1.718e−10 | 0.1561 | +465.6 | 10.66 | 9.17 | 8.30 |
| 6 | 1.743e−10 | 0.1579 | +530.2 | 8.40 | 5.88 | 4.74 |

(The full grid also includes 1.5, 2.5, 3.5 and 5. All are monotone.)

Galaxy-block bootstrap (1000 resamples, both sides re-profiled each time) of δ = 4's SPARC cost: median +473.9, sd 145.8,
fraction > 0 = 1.000. Point/sd ≈ **3.2**, so +466 is roughly a 3σ galaxy-level cost, not a 21σ one.

Predictions:
- **P1 FAILED.** a₀ range 1.55×, upper end 1.74e−10 > 1.6e−10. I under-estimated how far sharpness pushes a₀. It is still
  ~12× less movement than the compander's 18×, because the deep-MOND limit is δ-independent.
- **P2 HELD.** Profiled a₀ rises monotonically with δ.
- **P3 HELD**, and much more strongly than the 55% bet: +9.17, not marginal.
- **P4 HELD.** +465.6.
- **P5 HELD.** Fraction > 0 = 1.000.

### Post-hoc arms (not registered; labelled as such in the scripts)
- **Joint a₀ scan** (`…joint_a0_scan_posthoc_output.txt`). A Cassini pass at δ = 4 needs a₀ ≈ 1.12e−10. The point-level SPARC
  cost there is +1070. The cheapest pass on the grid is δ = 6 at a₀ = 1.41e−10, at a cost of +692. The minimum of ΔBIC_pt + z² is at δ = 1:
  Cassini dominates.
- **No-bulge sample** (`…nobulge_posthoc_output.txt`; 134 galaxies, 1719 points):

  | δ | a₀ | ΔBIC_pt | z@2.32 |
  |---|---|---|---|
  | 1 | 1.057e−10 | 0 | +18.3 |
  | 2 | 1.421e−10 | +70 | +13.3 |
  | 4 | 1.520e−10 | +144 | +6.1 |
  | 6 | 1.539e−10 | +164 | +3.0 |

  Dropping bulges cuts the sharp-δ SPARC cost about 3× and lowers profiled a₀. The family heads toward a pass somewhere beyond
  δ ≈ 6, at a cost that grows only slowly.

### Literature check (as the topic required)
Desmond, Hees & Famaey 2024 (MNRAS 530, 1781; arXiv:2401.04796) infer the transition's location and sharpness jointly from
SPARC, so a₀ is effectively profiled. They find an 8.7σ fiducial tension, which falls to 1.9σ with extra mass-to-light freedom and no
bulge-dominated galaxies. My registered result is the fiducial-like corner of their analysis, and the no-bulge arm moves in
their mitigation direction. Nothing here is new against Desmond+. What is new is internal: the site's sentence was
built from a fixed-a₀ table.

## Implications for the Site
1. **"Only sharper transitions (δ ≥ 4) survive"** (`/mond-comparator:71`) and **"Nothing in the δ-family passes below δ = 4"**
   (`/tier-1-existing:549`) are fixed-a₀ statements. On TEST-25's own instrument with a₀ profiled, no δ ≤ 6 passes. The honest
   version names the dependence: "at SPARC-fitted a₀, no δ ≤ 6 passes on the frozen instrument (Υ 0.5/0.7, bulges in). With
   bulges dropped, δ = 6 reaches 3σ at a +164 cost. Desmond+2024 find 8.7σ fiducial and 1.9σ with Υ freedom and no bulges."
2. **The symmetry cuts both ways (do not over-refute).** The 11-06 compander correction (14.5–19σ at γ 0.3–3) used the same
   fixed-Υ, bulges-in likelihood. The site should not now say "MOND fails Cassini like the compander". Both rows were run on one
   configuration, and Desmond+ show that this configuration is the harshest one. Whether the compander gains as much as MOND from
   the no-bulge / free-Υ mitigations is **untested**.
3. "Inherited from MOND" for TEST-25 gets stronger. On this instrument the Cassini root is shared at every δ the site named,
   not just at the RAR-preferred ones.

## Action: Maintainer
- `/mond-comparator` row "Solar System (Cassini)" and `/tier-1-existing:549`: replace "δ ≥ 4 survive" / "below δ = 4" with
  the profiled statement in Implication 1, linking this finding. Add the "fixed Υ, bulges in" configuration label to the
  compander's 14.5–19σ sentence as well.
- `/honest-assessment:591`: the quoted "MOND picks a different μ and survives" is a persona quote. Check that the response
  beside it does not imply δ = 4 survives at fitted a₀.
- Lint: add a REQUIRES rule so that any "δ ≥ 4" / "δ = 4" near "Cassini" carries "profiled" or "fixed a₀".

## Open Threads
- **Compander no-bulge arm** (highest value, cheap). This means re-profiling a₀ at γ 1–3 without the 32 bulge galaxies and
  re-running Q₂. If the compander also falls toward a pass, the 11-06 range change (3–8 → 4–8) depends on the configuration.
- **Υ free per galaxy** for both families. That is Desmond+'s main mitigation and was not run here.
- The rest of the topic: sweep every "passes/fails at γ" claim for a profiled? y/n column. Not done; the topic stays queued.
- AQUAL versus QUMOND: Desmond+ find similar results, but the instrument here is QUMOND only.
