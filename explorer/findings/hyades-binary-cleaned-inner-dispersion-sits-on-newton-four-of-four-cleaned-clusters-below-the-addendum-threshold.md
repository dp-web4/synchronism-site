# Finding: The Hyades' binary-cleaned inner dispersion (0.21 ± 0.05 km/s inside ~5.5 pc) sits on Newton at 0.30 of the no-EFE prediction. All four clusters with cleaned values are now below the DR4 addendum's 0.65 threshold. No qualifying Praesepe value exists.

## Origin
Topic `open-cluster-binary-cleaned-dispersions-hyades-praesepe-inside-rh.md` (maintainer 11-12; archived).
PREREG `8d8070a` was committed before retrieval. One background retrieval agent (curl + pdftotext, verbatim locators) did
the search. The scoring is post-hoc: `scripts/hyades_torres2026_inner_posthoc.py` (+ `_output.txt`).

## Summary
**Torres, Stefanik & Latham 2026** (arXiv:2603.00229v2, ApJS, §12) give σ_LOS = **0.21 ± 0.05 km/s** for the Hyades
"inner region within about 5.5 pc (68 stars)". They describe it as roughly the half-mass radius. The value comes from 45
years of multi-epoch radial velocities with more than 100 orbits. Detected binaries are removed or replaced by
centre-of-mass velocities. Measurement errors, gravitational redshift and convective blueshift are corrected.

At the mid counted mass (314 M☉) and the same 5.5 pc aperture:
- the internal (no-EFE) reading predicts 0.705–0.715 km/s and Newton predicts 0.23;
- observed/predicted is **0.30**, and observed/Newton is **0.91**;
- the internal reading sits above the observation by **3.3σ with a 20% systematic**, or ~10σ on the random error alone;
- at either mass bound the ratio is 0.27–0.34, between 3.1σ and 3.5σ.

Their 75% completeness for P < 10⁴ d means unrecognised long-period binaries remain, and those can only inflate σ. So
0.21 is an upper estimate.

**Praesepe:** nothing meets all three criteria (binary-treated, error-deconvolved, radially restricted).
- Kalkayotl (Olivares+24) is deconvolved and inside r_tidal, but has no binary model.
- Healy+21 removed binaries but used the whole member list.
- Hobart+26 and Mermilliod & Mayor 1999 are uncleaned.

## Research Notes
**PREREG scoring:**
- A qualifying value exists for one of the two clusters. I gave ~40% for "either", so that is about as expected.
- My expected Hyades range was 0.25–0.40 km/s, i.e. obs/pred 0.40–0.64. The observation is 0.21, or 0.30. The range was
  refuted on the low side; the direction held.
- Nothing surprising on the "supports" side.

**The four clusters with binary-cleaned values, against the maintainer's DR4 addendum (11-12) rule:**

| cluster | cleaned σ | obs / internal reading (mid mass) | obs / Newton | source |
|---|---|---|---|---|
| Hyades | 0.21 ± 0.05 (inner 5.5 pc) | **0.30** | 0.91 | Torres+2026 §12 (today) |
| NGC 188 | 0.41 ± 0.04 | 0.34 | 0.88 | Geller+08 (binary correction borrowed from M67) |
| Pleiades | 0.48 ± 0.02 | 0.54 | 1.40 | Torres+21 PM ("may represent an upper limit") |
| M67 | 0.59 ± 0.065 | 0.63 | 1.44 | Geller+15 RV corrected |

NGC 188, Pleiades and M67 rows: `scripts/system_partition_rules_output.txt` §6 (11-11). The addendum says: "≤ 0.65 in at least four of the six kills it under the 2011 rule." Four of the six named clusters
are now at or below 0.65 on existing data.

Three caveats:
1. The addendum was written for DR4 epoch astrometry. Applying it to RV-era values is my extension, not the rule as written.
2. The thresholds were chosen after the DR3-era values were seen (the addendum says so).
3. M67 at 0.63 is close to the line, and two of the four cleaned values rest on borrowed or upper-limit binary
   treatments.

The Hyades value is the cleanest of the four. It is a multi-epoch RV census, not a proper-motion rms.

So the internal reading of the EFE-free corner, under the one written rule that defines it (Milgrom 2011
frequency-by-frequency modified inertia), is disfavoured on existing data. The Hyades alone place it at 3.3σ. The 11-11
registered kill ("largest published σ") still did not fire, because that form selected binary-contaminated
measurements, as 11-11 already recorded.

**What this does and does not move:**
- It does not move Bucket 0. Under the 2011 rule the corner is MOND as modified inertia with a γ.
- It does make the forward table's DR4 row for the corner largely redundant. If DR4's open-cluster dispersions agree
  with the RV-era cleaned values, the row's verdict is already in.
- The wide-binary leg of the same row is a different frequency window (ω_int/ω_ext 115–916 against the clusters'
  3.5–11.3). Under the 2011 toy, clusters can be Newtonian while 5–20 kAU binaries are boosted. **So the clusters do not
  close the binary leg.** They close the claim that "internal acceleration alone sets the boost". That was the corner's
  defining property before the frequency rule was attached.

**A flag the agent found in Huisjes & Hernandez 2026 (arXiv:2603.03522, "Most open clusters follow the RAR").** Their
dispersions are Hunt & Reffert's, which "do not weight the proper motions by their uncertainties". Hunt & Reffert
"attempted to correct for unresolved binaries … but found this to be impossible". This independently supports the 11-11
dispersion-floor control. It is not confirmed by the authors, who have not been contacted.

## Implications for the Site
`EFE_FREE_CORNER_STATUS` (ledger.ts) says "binary-cleaned measurements (Pleiades, M67, NGC 188) are 0.34–0.63 of that…
so the kill fixed in advance was not met". It can now add the Hyades at 0.30 (Torres+2026, inner 5.5 pc, 3.3σ with a 20%
systematic), and say that four of the six clusters named in the DR4 addendum already sit at or below its 0.65 line on
RV-era values.

## Action: Maintainer
- `EFE_FREE_CORNER_STATUS` and the DR4 reading key: add the Hyades row (numbers above, script
  `explorer/findings/scripts/hyades_torres2026_inner_posthoc_output.txt`). Add a dated addendum note to
  `wb_dr4_reading_key_PREREG.md`: "on pre-DR4 cleaned values 4/6 already ≤ 0.65 (explorer 11-12); the open-cluster leg
  is decided unless DR4 cleaned values differ; the wide-binary leg is a different frequency window and stays open."
  Whether that removes the corner's open-cluster DR4 row gates on the project lead.
- /wide-binaries or the corner's page: cite Torres+2026 §12 by section, with the arXiv version (v2).

## Open Threads
- Praesepe inside r_h with a binary model. Healy+21 Fig. 10 has radially binned dispersions, figure-only. The Kalkayotl
  member list combined with RUWE + multi-epoch RV rejection would be a small DR3 computation.
- α Per has no cleaned value (uncleaned 0.80 at 1.0 of the prediction).
- Torres+2026's outer-half value, 0.38 ± 0.05 > inner 0.21. Is that the tidal tail, the binary census thinning with
  radius, or a real rising profile? The no-EFE reading predicts a nearly flat profile and Newton a falling one, so a
  rise fits neither and is worth reading.
- Saved texts are in `/tmp/oc_disp_20261112/`, not persisted.
