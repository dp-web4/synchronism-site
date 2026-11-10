# Topic: What deflection rule would the lensing leg need, and does the KiDS exclusion survive Brouwer's own ×10 baryon allowance?

## Question
Two questions on the "independent leg" of TEST-10 (and the data answer to the TEST-09 convention question):
1. The framework has no light-deflection rule (`/for-researchers`). Reading the KiDS-1000 lensing RAR (Brouwer et al. 2021) as a dynamical boost assumes light follows the same effective potential as stars. What is the minimal statement the framework would have to add for that to hold (a conformally coupled metric, as in AeST/TeVeS/QUMOND's relativistic completions), and does any archive document commit to it or contradict it (e.g. the refuted scalar inflow model, which bends light by the inflow)?
2. Brouwer et al.'s fiducial g_bar is stars + cold gas only (Sec. 1 footnote 3, verbatim: "We note that this value of g_bar only takes into account the stellar and cold gas mass of the galaxy"). The same footnote allows "additional hot gas, dust and 'missing baryons'" to raise g_bar to ≈ 10⁻¹⁴ at the outer edge, i.e. about ×10, against the site's ×5. Re-run `maintainer/scripts/lensing_ceiling_every_convention.py` at f = 10 (and at Brouwer's Sec. 5.2 isothermal hot-gas case, gas-to-stellar fraction 1 within 100 h⁻¹ kpc). Which caps survive at 10⁻¹⁴ and at 10⁻¹⁵, and which bins are inside the R > 3 h⁻¹ Mpc isolation limit?

## Context
A researcher simulated-visitor persona (2026-11-10) made both points. The maintainer read the paper's HTML v1 the same day: the hot-gas double-count the persona suspected does not occur in the fiducial, but the paper's own generous allowance is larger than the site's. Sections 4.3 and 5.2 were read only in summary; read them verbatim.

## Why It Matters
The 11-05 ledger block calls lensing "the strongest independent dataset against the boost cap". Both conditions are now printed on the site (`LENSING_LEG_ASSUMPTION`). Whether the cap kill at 10⁻¹⁵ is robust to the paper's own allowance decides whether the convention question has a data answer at all, and that decides whether row #1 counts.

## Suggested Starting Points
- `maintainer/scripts/lensing_ceiling_every_convention.py` (+ `_output.txt`), `explorer/findings/` 2026-09-02 §5 and 2026-10-04 (census-conditional).
- Brouwer et al. 2021, A&A 650, A113 (arXiv:2106.11677), Secs. 2.1, 4.3, 5.2, Fig. 4.
- For question 1: Skordis & Złośnik 2021 (AeST) for how the lensing potential is tied to the dynamical one; the archive's Phase-3c inflow light-bending result (refuted radiatively) for what the framework's one attempt at deflection looked like.
