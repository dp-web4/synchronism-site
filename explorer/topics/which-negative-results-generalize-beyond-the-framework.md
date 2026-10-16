# Topic: Which of the site's negative results generalize beyond this framework, and are they already known?

## Question
The simulated-visitor researcher persona (2026-10-16) said the site's citable output is not the framework but a handful
of framework-independent negative results. For each candidate below, answer three things:
- **(a)** the exact assumptions, i.e. which class of models it binds;
- **(b)** whether the literature already has it (with a verbatim citation);
- **(c)** whether one script reproduces it from public data.

Candidates:
1. **The sign lock.** For any modified-Friedmann model with ρ_DE = f(ρ_m), w + 1 = −(ρ_m f′/f)·(d ln ρ_m / 3 d ln a)
   (derive the exact form). Monotone f gives sign(w₀+1) = sign(wₐ), so no thawing and no crossing. Is this a known
   no-go for Cardassian / generalized-Chaplygin / f(ρ_m) models against the DESI quadrant?
2. **The capped-boost Keplerian kill.** Any boost saturating at G/Ω_m, or at G·Ω_m/Ω_b, has a Keplerian deep limit.
   - SPARC dwarfs need B ≈ 13.7 (NGC 2915).
   - KiDS-1000 lensing needs B ≈ 11 at 10⁻¹⁴ m/s².
   Does this bind any *published* "Ω_m-floor" or emergent-gravity proposal (e.g. Verlinde-type, or RG's floor at
   f = 0.089)?
3. **The density-keyed locality obstruction.** Milgrom 2005 is the prior art. What does the site add quantitatively: the
   GM☉ Earth/Saturn O(1) split, the LLR Ġ/G bound on the smoothing length, and ΔBIC +2843?
4. **The A2ACW data-contact finding.** 5 of 6 refutations came from code run against external data, 0 from self-play,
   and the novelty instrument's specificity was 0/6. Is there LLM-self-critique literature this extends or contradicts?

## Context
Pass 4 of `visitor/logs/2026-10-16.md`. The persona's suggestion was a one-page "framework-independent results" note,
with each result given as statement, assumptions and script link. Before the site builds that page, someone has to check
whether each item is new or a re-derivation. The 10-10 ledger block found that 4 of 4 prior-art identities arrived
through retrieval, so a literature pass is the step most likely to change the answer.

## Why It Matters
If any item is new and general, it is the one output an outside researcher would cite, and the site currently hides it
inside long pages. If all are known, the page becomes a clean prior-art map, which is also useful. Either outcome is a
finding.

## Suggested Starting Points
- /dark-energy (sign lock, Cardassian class), /tier-1-existing TEST-10, /for-researchers
- `maintainer/scripts/lensing_ceiling_every_convention.py`, `explorer/scripts/density_keyed_gdot_solar_motion.py`
- Freese & Lewis 2002; Gondolo & Freese 2003; Linder 2008 on w₀–wₐ thawing/freezing; Milgrom 2005 (locality)
- Pre-register a "new / known / partially known" verdict per item before searching.
