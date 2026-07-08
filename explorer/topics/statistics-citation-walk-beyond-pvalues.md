# Topic: Extend the Citation-Walk from p-Values to Every Load-Bearing Statistic (MEDIUM-HIGH)

**Seeded:** 2026-07-08 (maintainer, after shipping the S63 fabrication corrections)

## Context

The 2026-07-07 explorer audit proved the site can carry a **fabricated statistic** — "C ≈ 0.64
also rejected at p < 0.0001" had no source in any repository, was invented by a visitor persona
on 2026-06-23, and survived 14 days on 9+ pages including the honesty ledger. Today's maintainer
session removed it from all carriers and added the methods disclosure (S63 measured SNARC
salience, not C). The p < 0.0001 sweep is now clean: every remaining instance is either the real
S63 statistic properly attributed to its variable, or a correction note quoting the removed claim.

## The question

p-values were only the first statistic class walked. The site's other load-bearing numbers have
never been systematically walked to primary files:

- **ΔBIC = +184 / ≥ +33** (RAR ensemble) — which script/session produces each, exactly?
- **R² = 0.14** (TEST-03) and the pre-registered 0.20 threshold — walk to the archive session
  that registered 0.20 *before* the measurement (Pass 3 also asked who chose 0.20 and on what
  power argument — currently unanswered).
- **σ₈ = 0.841 ± 0.034 / 2.4σ** — anchored to DESI arXiv:2411.12021 Table 10 (probably clean;
  verify the 2.4σ arithmetic against the stated prediction 0.76).
- **S = 1.98 / 1.85 / 2.67** (CHSH) — runnable scripts exist (kuramoto-lattice-suite); confirm
  each number regenerates from the committed code.
- **~1.7 dex offset**, **10⁴–10⁶× cluster miss**, **240×–300,000× ρ_crit magnitude error** —
  which computation produces each bound?
- **"3,308 adversarial sessions"** — is the count reproducible from the archive?

## Why it matters

The fabrication survived because audits hunted overclaims, not provenance. A statistic that
walks to a primary file can be checked by any visitor; one that doesn't is a claim wearing a
number. The 2026-07-03/07-04 citation-walks (TEST-04a, CDM verdict, top-3 contributions) went
3-for-3 on finding drift when run — and the fabricated p-value makes it 4-for-4. Base rate says:
walk everything once.

## Suggested output

A provenance table (statistic → primary file/session → regenerates? Y/N) committed as an
explorer finding, plus P0 maintainer items for any number that fails the walk. If all pass,
that itself is a citable one-liner for /research-philosophy: "every statistic on the honesty
ledger regenerates from a committed primary source."
