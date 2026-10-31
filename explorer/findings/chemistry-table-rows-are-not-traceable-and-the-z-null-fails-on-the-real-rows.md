# Finding: The chemistry table's 23 rows are 23 properties with no shared sample, mostly mis-cited; the Z-null fails on every recoverable row

## Origin
Topic `chemistry-z-null-on-the-real-rows.md` (maintainer 2026-10-31, from the visitor's question "what are the 23
materials?"). PREREG `6a1c4b6`. Script `explorer/tools/chem_z_null_real_rows.py`. Outputs are in
`tools/chem_z_null_real_rows_registered_run_output.txt` (the registered run, which has a loader bug) and
`..._corrected_output.txt`.

## Summary
The question had a false premise. The 23 rows on /chemistry-correlation-explorer are **23 properties**, each a
correlation over a different material set from a different session (n = 19–33, Z = 3–82, compounds included in
several). No single "23-row sample" exists for a polynomial in Z to be fit to. On the 10 property rows I could
recover from the session scripts, the Z-null **fails everywhere**: |r(P, Z)| ≤ 0.53 and quadratic-in-Z R ≤ 0.51,
against framework r of 0.60–0.98. The 05-10 conclusion ("a Z-polynomial matches within 0.07") is **refuted on data**,
not just mis-described. The high r values come from the framework variable being a relabelled textbook quantity:
γ_phonon = 2T/θ_D (so r(P, 1/γ_ph) = r(P, θ_D) exactly) and γ_optical = 13.6 eV / IE (so "χ vs 1/γ_opt" is
χ vs ionization energy). The provenance audit found something larger: **most of the 16 high-r rows cite a session
about a different topic, and several r values belong to other properties**. One documented failure,
electrical conductivity at r = −0.414 ("WRONG SIGN", #81), is displayed as +0.955 "Coherence helps".

## Research Notes

### 1. Registered run vs corrected run (one deviation, disclosed)
The registered loader mapped `C_diamond` to Z = 6 but missed `C-d`, the key three scripts use. Diamond was therefore
dropped as a non-element from #109, #110 and #114. Diamond is an element and the PREREG covered it, so I corrected the
mapping and kept both outputs. Verdicts, corrected run (registered run in parentheses where it differs):

| Prediction | Result |
|---|---|
| P1: linear-Z \|r\| < 0.6 on ≥ 4/6; quadratic R < \|r_fw\| on ≥ 5/6 | **Held**: 6/6 and 6/6 (registered: 6/6 and 5/6; B failed) |
| P2: r(P, 1/γ_ph) = r(P, θ_D) | **Held** (algebraic; a code check, not a finding) |
| P3: shuffled p < 0.01 for every \|r_fw\| > 0.85 | **Held** (all p ≤ 1e-4) |
| P4: V_a has the lowest linear-Z \|r\| | **Refuted**: χ is lowest (0.032 vs V_a 0.117) |

### 2. Corrected table (element rows only)

| row | n | r_fw (variable) | r_θD | r_Z | R_quad(Z) | jackknife-min r_fw |
|---|---|---|---|---|---|---|
| #109 v_L | 23 | 0.980 (1/γ_ph) | 0.980 | −0.46 | 0.51 | 0.957 |
| #110 E | 24 | 0.922 (1/γ_ph) | 0.922 | −0.11 | 0.17 | **0.604** |
| #110 G | 24 | 0.942 (1/γ_ph) | 0.942 | −0.14 | 0.22 | **0.627** |
| #110 B | 24 | 0.709 (1/γ_ph) | 0.709 | 0.19 | 0.19 | **0.374** |
| #114 V_a | 26 | 0.956 (γ_ph) | −0.42 | 0.12 | 0.21 | 0.923 |
| #115 χ (Pauling) | 33 | 0.956 (1/γ_opt ∝ IE) | — | −0.03 | 0.26 | 0.947 |
| #118 softness | 33 | 0.979 (γ_opt ∝ 1/IE) | — | 0.17 | 0.28 | 0.972 |
| #118 EA | 33 | 0.595 (1/γ_opt) | — | 0.10 | 0.10 | 0.502 |
| #80 v_L (elements) | 19 | 0.982 (θ_D) | 0.982 | −0.44 | 0.49 | 0.957 |

Two things beyond the registration:
- **The elastic rows ride on diamond.** Remove one point and E falls 0.92 → 0.60, G 0.94 → 0.63, B 0.71 → 0.37.
  In the session's full set (with MgO and Al₂O₃), three hard materials carry the "EXCELLENT" label. The site's
  Young's (0.912) and Shear (0.901) rows inherit this.
- **The optical channel is IE.** γ_optical = IE_H/IE (`electron_affinity_coherence.py:80`). "χ vs 1/γ_optical" is
  Pauling χ vs IE, a textbook correlation that Mulliken's definition χ_M = (IE+EA)/2 builds in. Softness
  S = 1/(IE−EA) vs γ_opt ∝ 1/IE is near-identical because EA ≪ IE: the site's 0.979 is the same 1/IE twice.

### 3. Provenance of the site table (rows 1–16)
Session topics are from the script headers and `Research/Chemistry/Framework_Summary.md`. The research r is the one
the archive records for *that property*.

| Site row (r, session) | Cited session is actually | Archive r for this property | Status |
|---|---|---|---|
| Sound velocity 0.982 #47 | #47 material design | v_D vs θ_D 0.982 (#109); vs 1/γ identical | r right, session wrong; r is θ_D, not γ |
| Electronegativity 0.979 #62 | #62 superconductivity | χ vs 1/γ_opt 0.938 (#115) | **0.979 is softness S (#118)** |
| Bulk modulus 0.967 #55 | #55 molecular recognition | B vs 1/γ_ph 0.712 (#110) | **r not found for B** |
| Thermal conductivity 0.961 #70 | #70 SN1/SN2 kinetics | 0.804 (#65, tagged T); κ_metals 0.883 (#108) | **0.961 is redox E° (#72)** |
| Electrical conductivity 0.955 #68 | #68 diffusion | **σ vs γ_ph −0.414, "WRONG SIGN" (#81)** | **failure shown as success** |
| Debye temperature 0.948 #78 | #78 elastic moduli | by construction | 0.948 matches Tc #62 / Richard's rule #77 |
| Piezo d₃₃ 0.940 #110 | #110 elastic moduli | 0.940 (#93) | r right, session wrong |
| SC T_c 0.923 #95 | #95 electro-optic | 0.948 (#62) | both wrong |
| Young's 0.912 #58 | #58 fluorescence | 0.920 (#110), 0.925 (#78) | near; diamond-carried |
| Shear 0.901 #59 | (no #59 in summary) | 0.936 (#110) | near; diamond-carried |
| Refractive index 0.887 #85 | #85 polarizability | 0.986 Moss rule (#76) | r wrong |
| Seebeck 0.834 #92 | #92 glass thermal κ | not located | unverified |
| Specific heat 0.756 #80 | #80 sound speed | not located (0.965 is ΔC/Cₙ) | unverified |
| Thermal expansion 0.723 #83 | #83 Grüneisen | 0.940 (#79, α vs 1/T_m) | r wrong |
| Boiling point 0.681 #100 | #100 Fermi energy | not located | unverified |
| Melting point 0.470 #98 | #98 thermionic | 0.948 (#77, Richard's rule) | r wrong |

Of the seven low-r rows (17–23), five cite a session whose header matches the property (#82, #102, #105, #123,
#125). Two do not: RE anisotropy cites #130 (exciton) and thermionic emission cites #115 (electronegativity; thermionic
is #98). So the session matches 5/7 in the failure half and at most 0/16 in the success half (#83 Grüneisen ≈ thermal
expansion is the closest). The table dates from the site's initial commit
(`1e805d5`, 2026-02-21) and has never been regenerated from the archive. It looks like an LLM-compiled summary in
which property, r and session drifted apart.

## Implications for the Site
- The sentence "the polynomial-in-Z null was never run on the rows" is now out of date in a useful way. It **was**
  run on the recoverable rows, and it **fails**. The cheap explanation the site offered (a Z trend) is gone. What is
  left is stronger and simpler: γ_phonon *is* θ_D and γ_optical *is* IE, so every high r in those channels is a
  textbook correlation with θ_D or IE, renamed. The Reparametrization verdict survives on that ground, not on the
  Z-null's.
- The table should not keep r values that cannot be traced to a script. Electrical conductivity in particular has to
  show −0.414 / Failed. That also fixes the visitor's "opposite verdicts across pages" complaint for that row.
- The /electronegativity page's circularity story (entropy-ratio N_corr via bonding character) is not the mechanism
  that produced its number. The number is χ (or softness) against 1/IE.

## Action: Maintainer
- **P0, /chemistry-correlation-explorer**: replace the null-model status paragraph. New content: the Z-null on 10
  recoverable property rows fails (|r_Z| ≤ 0.53, quad R ≤ 0.51); r(P, 1/γ_ph) ≡ r(P, θ_D); γ_opt ≡ 13.6 eV/IE.
  Correct the electrical conductivity row to r = −0.414, Failed, #81. Mark rows whose r or session does not trace to
  the archive as "untraced", or drop them. The provenance table above is the checklist.
- **/gamma-boundary, /prediction-tracker, /electronegativity, landing, /why-synchronism**: "Electronegativity
  r = 0.979" becomes "χ vs 1/γ_optical r = 0.94–0.96, where 1/γ_optical ∝ ionization energy; the 0.979 is chemical
  softness against the same 1/IE". Retire "near-monotonic in Z" wherever it is the null's justification.
- **Elastic rows**: note "jackknife: r falls to ~0.6 without diamond".
- Lint candidates: `r = 0.979` next to "lectronegativ"; `0.955` next to "lectrical conductivity"; "monotonic in
  Z" / "near-monotonic in atomic number".

## Open Threads
- Rows 12, 13 and 15 (Seebeck, C_v, boiling) were not located. A `grep -rn` over `simulations/chemistry` for each
  r value would settle them.
- The /gamma-boundary table has its own copies of these r values. They need the same trace.
- Does the "1,703 chemistry sessions" counter on the landing page carry the same compilation drift?
