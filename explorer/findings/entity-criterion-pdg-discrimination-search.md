# Finding: Entity Criterion Γ < m — PDG-Wide Search for a Discriminating Example

## Origin
Topic: `entity-criterion-novel-discrimination.md` (seeded 2026-04-26 by maintainer from Pass 4 researcher finding). The honest-assessment page claims Γ < m is the "strongest candidate novel prediction surviving stress tests," with f₀(500)/σ as the example. Pass 4 noted this only sides with one of two existing camps on a known PDG controversy; the topic asks whether any other PDG state gives the criterion genuine discriminating power.

## Summary

**No PDG-listed state, mesonic or baryonic, has Γ ≥ m apart from f₀(500)/σ.** The closest runner-up — K₀*(700)/κ — sits at Γ/m ≈ 0.55–0.85 across all major dispersive analyses, never crossing 1. Above that, Γ/m falls off rapidly: every other listed resonance has Γ/m ≤ 0.4, and the overwhelming majority have Γ/m ≤ 0.1. Under the criterion *as literally stated* (Γ < m), the criterion is therefore a one-shot filter that flags exactly the state already debated for non-particle status.

**A second, sharper finding emerged from the audit:** the prose justification ("particles must complete at least one Compton oscillation before decaying") and the algebraic statement (Γ < m) disagree by a factor of 2π. One full Compton oscillation period is T = 2π/m, so "complete one period" should require Γ < m/(2π) ≈ 0.159 m, not Γ < m. Under this stronger (and more physically natural) reading the criterion would falsify against ~30 well-established PDG resonances (ρ(770), Δ(1232), Roper N(1440), all light tensor and vector excitations, many baryon resonances) — none of which the experimental community would surrender as "not particles." Neither threshold delivers the claimed novelty.

## Research Notes

### 1. The Site's Claim

`/honest-assessment` (line 241–249 of `src/app/honest-assessment/page.tsx`):

> Entity Criterion: Γ < m. From oscillation basis: particles must complete at least one Compton oscillation before decaying. Derivable from first principles; not derivable from QFT. The f₀(500)/sigma (Γ/m ≈ 1.16) is predicted "not a particle" — consistent with genuine PDG controversy. Strongest candidate novel prediction found across all 8 sessions.

Two falsifiable readings of "one Compton oscillation":
- **Reduced** (one radian of Compton phase): τ > 1/m ⟺ Γ < m. Matches the algebraic statement.
- **Full** (one full 2π cycle): τ > 2π/m ⟺ Γ < m/(2π) ≈ 0.159 m. Matches the prose more naturally.

The σ example (Γ/m ≈ 1.16, just over the line) only "lands borderline" under the reduced reading. The audit below treats both.

### 2. PDG-Wide Audit (Γ/m, current Review of Particle Physics 2024)

#### Light scalar nonet (the natural hunting ground per the topic)

| State        | M (MeV)        | Γ (MeV)        | Γ/M          | Mainstream interpretation |
|--------------|----------------|----------------|--------------|----------------------------|
| f₀(500)/σ    | 400–550 (449)  | 400–700 (550)  | **1.0–1.4**  | Genuinely contested: pole vs. ππ rescattering enhancement |
| K₀*(700)/κ   | 824 ± 30       | 478 ± 50       | 0.58         | Contested but mainstream lists it; dispersive analyses confirm pole |
| a₀(980)      | 980 ± 20       | 50–100         | 0.05–0.10    | Real entity; debate is qq̄ vs KK̄ molecule vs tetraquark |
| f₀(980)      | 990 ± 20       | 10–100         | 0.01–0.10    | Same — entity status not disputed |

**Reading at Γ < m**: only σ fails. κ does not.
**Reading at Γ < m/(2π)**: σ, κ, and possibly the high end of a₀/f₀ widths fail.

The σ-vs-κ asymmetry is real and physical: the σ pole sits below 2m_π in the chiral limit and its broad width reflects ππ unitarity bounds; the κ pole sits above 2m_K threshold but with a narrower kinematic phase space. They are the only light scalars in this peculiar borderline regime, and they are *the only PDG entries where Γ/m straddles or approaches 1*.

#### Higher scalar mesons (glueball-candidate region)

| State        | M (MeV)  | Γ (MeV) | Γ/M  |
|--------------|----------|---------|------|
| f₀(1370)     | 1370     | 200–500 | 0.15–0.36 |
| f₀(1500)     | 1506     | 109     | 0.07 |
| f₀(1710)     | 1733     | 137     | 0.08 |
| f₀(2020)     | 1992     | 442     | 0.22 |

None approach Γ/m = 1. Even f₀(1370) at the upper end of its quoted Γ stays well below.

#### Vector & tensor mesons

| State        | M       | Γ       | Γ/M  |
|--------------|---------|---------|------|
| ρ(770)       | 775     | 149     | 0.19 |
| ω(782)       | 783     | 8.7     | 0.011 |
| φ(1020)      | 1019    | 4.2     | 0.004 |
| ρ(1450)      | 1465    | 400     | 0.27 |
| ρ(1700)      | 1720    | 250     | 0.15 |
| f₂(1270)     | 1275    | 187     | 0.15 |
| f₂(1950)     | 1944    | 472     | 0.24 |
| ρ₃(1690)     | 1689    | 161     | 0.095 |

#### Baryon resonances (~30 listed)

Sample: Δ(1232) Γ/M = 0.095, N(1440) Roper Γ/M = 0.24, N(1535) Γ/M = 0.10, N(1650) Γ/M = 0.076, N(1700) Γ/M = 0.118, Δ(1620) Γ/M = 0.087, Δ(1700) Γ/M = 0.18, Δ(1900) Γ/M = 0.108, Δ(2000) Γ/M = 0.16, N(1900) Γ/M = 0.13. **Maximum across the entire baryon sector: Roper at 0.24.** None approach 1.

#### Charm and bottom (exotic candidates included)

| State        | M       | Γ       | Γ/M  |
|--------------|---------|---------|------|
| ψ(3770)      | 3773.7  | 27.2    | 0.007 |
| ψ(4040)      | 4040    | 80      | 0.020 |
| ψ(4160)      | 4191    | 70      | 0.017 |
| ψ(4415)      | 4421    | 62      | 0.014 |
| X(3872) χc1  | 3872    | < 1.19  | < 3×10⁻⁴ |
| Y(4260)      | 4220    | 50–100  | 0.012–0.024 |
| Tcc(3875)+   | 3875    | 0.4     | 10⁻⁴ |
| Zc(3900)±    | 3886    | 28.2    | 0.007 |
| Pc(4380)+    | 4380    | 205     | 0.047 |
| Zb(10610)    | 10607   | 18.4    | 0.0017 |
| Zb(10650)    | 10653   | 11.5    | 0.0011 |

Every single exotic charm/bottom candidate — molecules, tetraquarks, pentaquarks, hybrids — sits *deep* in entity territory under either reading of the criterion. The criterion has nothing to say about the open exotic interpretation debates (qq̄ vs molecule vs tetraquark vs hybrid), because those debates concern *composition*, not *existence as a phase-space entity*.

#### Exotic light mesons (manifestly non-qq̄)

| State        | M       | Γ       | Γ/M  |
|--------------|---------|---------|------|
| π₁(1400)     | 1354    | 330     | 0.24 |
| π₁(1600)     | 1660    | 240     | 0.14 |

Both are genuinely exotic (J^PC = 1⁻⁺ forbidden in pure qq̄), both clear entities under the criterion. The criterion has no opinion on the exotic question.

### 3. So — Does the Criterion Ever Discriminate?

**Under Γ < m**: the criterion fails exactly one PDG entry (σ). On every other state, mesonic or baryonic, light or heavy, ordinary or exotic, the criterion agrees with mainstream PDG inclusion. The σ call is a minority position on a *known* controversy. The expected outcome of the topic search — "find a state where Γ < m makes a call no one has made" — is null.

**Under Γ < m/(2π)** (the prose reading): the criterion would disqualify ρ(770), Δ(1232), all Roper-region baryon resonances, π₁(1400), f₀(1370), ρ(1450), and roughly thirty other PDG states. Mainstream physics treats every one of these as a particle in the operational sense (cross-section, branching ratios, partial-wave analyses, lattice masses). Under this reading the criterion is *prolifically* discriminating, but the discriminations are *experimentally falsified* — these resonances are catalogued, identified, and routinely produced in experiments. So the prose-reading version is not "novel" but "wrong."

**The criterion is squeezed between two impotent regimes**: one threshold position where it flags exactly the state already contested (yielding zero new physics), and a stronger physically-motivated threshold position where it fails against universally accepted particles.

### 4. Why σ Is Unique — and Why That Doesn't Help

Quantum chromodynamics gives σ its anomalous Γ/m for a reason: the σ pole sits below 2m_π, its decay is governed by Adler-zero suppression and unitarity-saturating ππ rescattering, and dispersive (Roy-Steiner) analyses give M ≈ 449 MeV with Γ ≈ 550 MeV (Caprini-Colangelo-Leutwyler 2006; García-Martín-Kaminski-Peláez-Yndurain 2011). These features are intrinsic to chiral dynamics in the I = 0, J = 0 channel — they are not generic features of "broad resonances." In every other channel Γ scales with available phase space and quark mass spectra in ways that keep Γ/m below ~0.4.

That means σ is not a "borderline case demonstrating a general criterion." It is a chiral-dynamics anomaly that any criterion of the form Γ < α·m (with α ~ 1) will single out, regardless of the criterion's underlying motivation. This is why the criterion's "success" on σ doesn't generalize: there is no second case to generalize to.

### 5. The Two-Camps Question

The topic flagged this from Pass 4: σ has both a particle-camp and a non-particle-camp interpretation in PDG-adjacent literature. To be precise:

- **Mainstream Particle Data Group** lists f₀(500) as a meson with quoted (broad) parameters. That is *the* canonical particle-camp position.
- **Dispersion-theoretic camp** (Pelaez 2016 review; Caprini et al.; Colangelo et al.) treats the σ as a real T-matrix pole — i.e., a *physical* entity even if not a "particle in the conventional sense" — and consistently lists pole parameters.
- **Threshold-enhancement camp** (older literature, some lattice / sum-rule treatments) treats σ as a kinematic ππ rescattering effect with no genuine pole.

The non-particle-camp interpretation is currently a *minority* position. Synchronism's Γ < m criterion sides with this minority. So the Pass 4 framing was correct: the prediction picks an existing side, and not the majority side, on a known controversy.

What the criterion does *not* do — even at its best — is provide a predicate that could discriminate against mainstream PDG inclusion in some new case. There is no second case.

### 6. What Would Have Been a Genuine Discriminator?

A genuinely novel entity-status criterion would have one or more of:

- A composition-sensitive predicate that says, e.g., "qq̄-like ⟹ entity, KK̄-molecule ⟹ not-entity," with an experimentally checkable consequence (different production patterns, different mass-spectrum behavior under chiral extrapolation, etc.). Synchronism's Γ < m is composition-blind.
- A predicate that connects entity-status to in-medium behavior — e.g., predicting which resonances "dissolve" into the QCD medium at finite temperature/density, where lattice and heavy-ion data exist. Γ < m alone gives no in-medium prediction.
- A predicate giving a numerical *threshold* (mass or Γ) that lattice or fit could test, instead of an inequality with one borderline case.

Any of these would have been a falsifiable extension. Γ < m, as currently stated, has none of them.

## Implications for the Site

The honest-assessment page is currently the *one* place on the site where the framework's "best surviving novel prediction" claim is made. The audit above shows the claim is not supported by the PDG inventory at either of the two natural readings of the criterion. Specifically:

1. **The "novel prediction" framing overstates what the criterion does.** It picks the minority side on σ and is silent on every other PDG controversy. There is no inventory of further test cases because the inventory is empty.
2. **The prose justification ("complete one Compton oscillation") and the algebraic statement (Γ < m) disagree by 2π.** This is a real inconsistency, not a notational one — under the prose reading the criterion is falsified by ~30 PDG states. The site should pick one and defend it. The "one radian" reading is mathematically what's used; the prose should match.
3. **"Strongest candidate novel prediction surviving stress tests" cannot survive this audit.** The honest descent path is: relabel as "consistent with the dispersive / non-particle interpretation of σ" with a Reparametrization or Speculative badge, and remove the "novel prediction" framing.

## Action: Maintainer

**1. Update `/honest-assessment` Entity Criterion card.** Replace the current text with:

> **Entity Criterion: Γ < m.** From oscillation basis: a particle's lifetime must exceed one reduced Compton time τ_C = ℏ/(mc²). Among all PDG entries, only f₀(500)/σ has Γ/m ≥ 1; the criterion therefore aligns with the dispersion-theoretic / "non-particle" interpretation of σ already held by some authors. **Status: not a novel prediction; consistent with one of two existing camps on a known PDG controversy.** Badge: `Reparametrization` (or `Speculative` if the underlying derivation is reclassified).
>
> *Note on prose vs. algebra:* "Complete at least one Compton oscillation" naively suggests Γ < m/(2π), which would falsify against ρ(770), Δ(1232), and ~30 other catalogued resonances. The intended reading is one radian of Compton phase (Γ < m), not one full cycle.

Badge change: `untested` → `reparametrization` (or remove the "novel prediction" framing and reposition under "What's Reparametrization, Not Novel").

**2. Propagate to `/top-5-tests`** if it still lists "entity criterion" as Tier 1 ready. If it does, downgrade to Speculative or remove.

**3. Back-annotate to research repo.** The entity criterion deserves a session in the Synchronism research archive that resolves the radian-vs-cycle ambiguity in the derivation. If the original derivation in fact gave Γ < m/(2π), the site is misquoting it; if it gave Γ < m, the prose ("one Compton oscillation") is misquoting the math. Either is a fixable inconsistency.

**4. Update SESSION_FOCUS.md** "open research gaps" memory: the entity criterion is no longer a candidate novel prediction. The current count of "novel predictions surviving stress tests" should be revised downward by one (toward zero, matching the honest-assessment top-line "0 confirmed predictions" claim).

## Open Threads

- **Compton-time variant criteria.** Are there reformulations of the entity criterion that *would* discriminate? Examples:
  - Γ vs. group-velocity coherence time across MRH (could connect to wavefunction extent rather than rest-frame oscillation)
  - Γ vs. hadronic formation time τ_form ~ 1 fm/c ≈ 200 MeV⁻¹ (this gives a fixed threshold ≈ 200 MeV, which actually does discriminate richly: σ, κ, f₀(1370), ρ(1450) all fail; ρ(770), ω(782), every J/ψ-like state survives)
  - The "formation time" version is an interesting alternative that might be what the framework's underlying intuition wants.
- **Composition predicates.** Could Synchronism's coherence machinery (γ, N_corr) say something about qq̄ vs molecule vs tetraquark? The exotic-meson interpretation problem is the genuine open question in light scalar spectroscopy, and a coherence-based predicate that distinguishes (say) f₀(980) as a KK̄ molecule from f₀(1370) as qq̄ would be both novel and testable. The audit above shows the entity criterion alone is silent on this.
- **In-medium dissolution.** Lattice QCD and heavy-ion experiments map which resonances dissolve at finite temperature. A modified entity criterion of the form "Γ_T(T) ≥ M*(T)" — where M*(T) is the in-medium mass — could discriminate sequences (charmonium suppression, χ_b survival, etc.) and is genuinely testable. The site does not currently engage with this.
- **σ uniqueness as physics, not test failure.** σ being the only PDG state with Γ/m ≥ 1 is a fact about QCD chiral dynamics, not about the criterion. A criterion that *only* lands on σ might be detecting a real chiral-symmetry signature — but the framework would need to explain *why* the σ is special, not merely flag it. The current statement does the latter.

## What This Closes

The original topic asked: "Find a PDG state where Γ < m makes a call no existing analysis has made." The audit answer is **no such state exists**. This is productive failure — it forecloses the rescue path Pass 4 implicitly suggested and converts the "novel prediction" claim into a false positive on the site. The site can now correct the labeling rather than continue to advertise a discrimination it doesn't have.
