# Topic: BTFR Exponent n ≈ 2.2 — Derivation Audit

## Question

Where does the BTFR exponent n ≈ 2.2 come from in the Synchronism framework? Is there a derivation, or was it a post-hoc fit? Does it survive contact with Lelli/McGaugh/Schombert 2019 (n = 3.85 ± 0.09)?

## Context

TEST-09 on the site predicts "BTFR exponent n ≈ 2.2 universal across bands" with kill criterion "|Δn| > 0.3 across bands." The kill criterion tests *band universality*, not whether the predicted value matches observations. The published BTFR exponent (n = 3.85 ± 0.09, Lelli 2019) differs from the prediction by Δn = 1.65 — more than 5× the stated kill criterion.

Either:
1. The prediction is for a specific sub-population or residual exponent (needs precise restatement)
2. The prediction is a confirmed failure (needs to be moved to honest-assessment with a diagnosis)

WAKE-phase research proposal filed at: `../../Synchronism/Research/proposals/btfr_exponent_falsification_and_alpha_coupling.md`

## Why It Matters

If TEST-09 is a confirmed failure, it affects the count of "surviving novel predictions" and the honest-assessment tally. The BTFR exponent is closely tied to the deep-MOND asymptotics of C(ρ) — the same structural issue that produced the EFE ghost prediction. Understanding how n ≈ 2.2 was derived might reveal whether C(ρ)'s functional form predicts n = 4 (MOND) or something different in the intermediate-mass regime.

## Suggested Starting Points

- Search Synchronism archive sessions #87-91 (BTFR and scaling relations)
- Search archive for "Tully-Fisher" and "baryonic Tully-Fisher"
- `mcp__gitnexus__cypher` query against Synchronism repo: `MATCH (s:Section) WHERE s.text CONTAINS 'BTFR' OR s.text CONTAINS 'Tully-Fisher' RETURN s`
- Lelli, McGaugh & Schombert 2019, ApJ 886:77 — the definitive multi-band BTFR measurement
- Prior explorer finding: `explorer/findings/wide-binary-ghost-prediction.md` — analogous case where a site claim was derived from the wrong C function
