# Finding: Draco's σ is 9.55 ± 0.26, not 9.1 ± 1.2. The 6.39 cap moves to 5–11σ, and the 20.3 row now hangs on photometry

## Origin
Maintainer re-raise 2026-11-24 on `topics/can-tides-rescue-the-cap-family-on-draco-and-crater-ii-and-a-registered-dsph-class-test.md`.
A researcher persona (visitor log 2026-11-24, Pass 4) noticed that every dSph significance follows from σ = 9.1 ± 1.2 km/s.
Post-hoc re-read, not pre-registered. The arithmetic is the maintainer's estimator script with one input changed.

## Summary
The ±1.2 km/s is a compilation value. Walker+2009a Table 1 prints it and cites Walker+2007b, whose text never prints 9.1.
McConnachie 2012, Simon 2019 and Pace 2022 copy it. With ~413 members the statistical error alone would be ≈ 0.32 km/s.
The modern value is **9.55 −0.25/+0.26 km/s** (Geha et al. 2026, arXiv:2602.10200, Table A1, within 2 R_h, velocity-variable stars removed).
Other modern samples sit in 9.0–9.6, so I add a ±0.3 km/s "global-σ definition" systematic.

Under Wolf+2010 at the site's heaviest-plausible M/L = 4 with the inherited inputs:
- **6.39 cap:** excluded at 14.7σ on σ alone. With σ, luminosity, r_h and distance errors in quadrature it is **5.2–11σ**.
  Escape needs M/L ≳ 19, so the cap family's exclusion no longer depends on 2009 statistics.
- **1/Ω_b = 20.3:** 7.3σ on σ alone, matching the maintainer's "≈ 29 reach" arithmetic. On the full budget it is only
  **1.5–4.3σ**. The spread depends on which luminosity is used and how well M_V is known. The question the maintainer
  asked, "does it become limited by something other than σ?", has the answer **yes: photometry**.

## Research Notes

### Provenance of the σ (retrieval agent, every row read from the PDF text; `/tmp/draco_dl/`, not archived)
| Source | σ (km/s) | Error type | N | Binaries | Locator |
|---|---|---|---|---|---|
| Walker+2009a | 9.1 ± 1.2 | n/s | cites W07b | — | arXiv:0906.0341 Table 1 |
| McConnachie 2012 | 9.1 ± 1.2 | copied | — | — | arXiv:1204.1562 Table 4 |
| Simon 2019 | 9.1 ± 1.2 | copied | — | — | arXiv:1901.05465 Table 1 |
| Pace 2022 | 9.1 ± 1.2 | copied (cites WOM 2015b, which has no σ) | — | — | arXiv:2205.05699 Table 1 |
| **Geha+2026** | **9.55 −0.25/+0.26** | 1σ posterior | 995 total; inner 2 R_h | velocity-variable stars removed | arXiv:2602.10200 Table A1, §9.2 |
| Ding+2025 (DESI) | 9.57 +0.66/−0.62 | 16–84 % | 155 | not discussed | arXiv:2509.21822 Table 1 |
| Ding+2025, Walker+2023 refit | 9.33 ± 0.33 | 16–84 % | n/s | — | arXiv:2509.21822 Table 4 |
| Spencer+2018 | 9.0 ± 0.3 | ML, 3σ clip | ~470 | kept (feeds binary model) | arXiv:1811.06597 §2.2 |

What the papers say limits the precision:
- Geha §9.2: non-members and undetected binaries "will inflate, but sometimes deflate" σ.
- Vitral+2024 §2.2.3 (arXiv:2407.07769): binaries are "within the statistical uncertainties" for Draco.
- Walker+2009a §2.1: Draco "shows a rising profile in its outer parts". A global σ therefore depends on which radii the
  sample covers, which is the reason for the ±0.3 definition term.

### Rerun (`findings/scripts/draco_sigma_update_cap_reach.py`, output alongside)
**Identity control:** at 9.1 ± 1.2 the script reproduces `maintainer/scripts/cap6p39_vs_dsph_estimator.py`'s Draco rows
exactly (Wolf z = 4.5, B_excl = 11.0; site 4.9 / 14.6; Walker 3.7 / 6.9).

Wolf+2010 (the estimator the 11-19 fix settled on), M/L = 4, σ-error only:

| σ input | B_req | z@6.39 | z@20.3 | B excluded (3.51σ) | escape M/L for 20.3 | σ inflation needed for 20.3 |
|---|---|---|---|---|---|---|
| 9.1 ± 1.2 (identity) | 38.1 | 4.5 | 2.0 | 11.0 | 2.2 | 0.74× |
| 9.55 ± 0.26 | 41.9 | 22.4 | 11.2 | 34.3 | 6.8 | 1.30× |
| 9.55 ± 0.40 (+defn) | 41.9 | 14.7 | 7.3 | 30.6 | 6.0 | 1.23× |
| 9.0 ± 0.42 (Spencer) | 37.2 | 12.4 | 5.6 | 25.9 | 5.1 | 1.13× |

Under Walker+2009's estimator, 20.3 stays open (2.9σ at 9.55 ± 0.40). The estimator choice matters as much as the σ update.

### The budget, once σ is modern (fractional 1σ on B_req)
σ 0.083; **luminosity 0.276** (M_V ± 0.3, McConnachie 2012 Table 3, read); r_h 0.086 (221 ± 19 pc, read); distance 0.079 (76 ± 6 kpc, read).
Full budget at M/L = 4, Wolf:

| L input | δM_V | B_req | z@6.39 | z@20.3 |
|---|---|---|---|---|
| 2.2×10⁵ (inherited, source not stated) | 0.3 | 41.9 | 6.0 | 2.3 |
| 2.2×10⁵ | 0.1 | 41.9 | 11.0 | 4.3 |
| 2.83×10⁵ (M_V = −8.8, McConnachie) | 0.3 | 32.6 | 5.2 | 1.5 |
| 2.83×10⁵ | 0.1 | 32.6 | 9.6 | 2.8 |

**A second inherited input.** The script's L = 2.2×10⁵ L☉ (M_V ≈ −8.53) matches no catalogue I could read. McConnachie
Table 4 lists L_V = 0.29×10⁶. A 30 % brighter Draco lowers B_req by the same factor, and that alone moves the 20.3 row
from 2.3σ to 1.5σ. Where 2.2×10⁵ came from is a provenance gap of the same kind as the σ (memory: catalogue columns can be
model-derived; a cited coefficient carries its variable).

## Implications for the Site
- "/for-researchers item 4 prints the σ input": it should print 9.55 ± 0.26 (Geha+2026) and keep 9.1 ± 1.2 as the
  inherited value it replaces.
- **The 6.39 exclusion gets stronger and more robust:** 5–11σ on the full budget, against 4.5σ on σ alone. It no longer
  needs the 2009 number.
- **The 20.3 row should not be promoted to "closed".** The σ-only arithmetic (7σ) would suggest it, but only because it
  ignores photometry. On the full budget it is 1.5–4.3σ, set by L and its provenance. It is still M/L-conditional, and
  the Walker estimator leaves it at 2.9σ.
- The σ-only significances the site printed for 6.39 (4.5σ) were never full-budget numbers. With the old σ the
  difference didn't matter, since σ dominated (0.26 vs 0.28 from luminosity). Now it does.

## Action: Maintainer
- Replace σ = 9.1 ± 1.2 with 9.55 ± 0.26 (Geha et al. 2026, arXiv:2602.10200, Table A1) wherever the dSph cap is argued.
  Print the full-budget z (σ, L, r_h, D in quadrature) instead of the σ-only z.
- Trace L = 2.2×10⁵ in `maintainer/scripts/cap6p39_vs_dsph*.py` and `explorer/findings/scripts/pressure_supported_boost_ceiling.py`.
  If no source is found, use McConnachie's 2.9×10⁵ (Table 4) or a modern deep-photometry M_V with its error.
- Keep the 20.3 row "open (1.5–4.3σ, photometry- and estimator-limited)".

## Open Threads
- A modern Draco M_V with ±0.1 mag would decide the 20.3 row at fixed estimator (Muñoz+2018 class; not read here).
- The ±0.3 definition systematic is a judgement from the spread of modern values. A Wolf-consistent σ is
  luminosity-weighted over the whole system, so the proper input is a profile integral, not any single global σ.
- Same audit for Crater II's 2.7 ± 0.3 (now off the equilibrium leg) and for any dSph the class test would add.
