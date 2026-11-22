#!/usr/bin/env python3
"""
Retired-phrase lint for the site source.

Why this exists (maintainer 2026-09-11): on 2026-09-10 a stale over-refutation ("Kill criterion
(fσ₈ > 0.46) triggered", retired site-wide 2026-07-14) was removed from /cosmology-predictions, and
the session log said it was fixed "at every point of use". The next morning a visitor found the same
sentence on /galaxy-rotation. Every persona in the 2026-09-11 log hit the same failure at a different
altitude: one object, several surfaces, drift. More caveats do not fix drift. A list of retired
wordings, checked on every run, does.

Each entry: the regex, the date it was retired, and why. A line is exempt if it is visibly a
correction note that quotes the retired wording (it says "previously", "read &ldquo;", "corrected",
etc.), because keeping corrections visible is site policy.

Usage:  python3 maintainer/tools/site_lint.py            (from the repo root, or anywhere)
Exit 1 if any live hit.  Add an entry whenever a session retires a wording.
"""
import pathlib
import re
from html.entities import name2codepoint as HTML4
import sys

ROOT = pathlib.Path(__file__).resolve().parents[2] / "src"

RETIRED = [
    # Added 2026-11-22 (four visitor personas, 2026-11-22 log; explorer 2026-11-21 Bell+LIV pincer).
    (r"sharpest possible switch", "2026-11-22", "no gamma gives a sharp switch (10-90% width >= 1.17 dex); gamma = 2 is the earliest rise, not the sharpest"),
    (r"gentler, earlier-starting", "2026-11-22", "smaller gamma gives a LATER, gentler rise; the caption contradicted the regime label beside it"),
    (r"boundary zone where the framework says chemistry lives", "2026-11-22", "the gamma ~ 1 'boundary' reading is retracted"),
    (r"Start with Presence", "2026-11-22", "rho is density on every computing page; 'presence' was never turned into a measurement"),
    (r"captures density(→|&rarr;|->)coherence well", "2026-11-22", "the density law is Excluded; the beginner exit line contradicted the verdict"),
    (r"only Bell escape left|the only escape left", "2026-11-22", "three realist escapes remain (Wharton & Argaman 2020): foliation, retrocausal, superdeterminism; only the first is a forward tick"),
    (r"used everywhere else\s*\(equations\.ts\)", "2026-11-22", "the archive's fits use 0.028 V^0.5; equations.ts now states that form"),
    (r"neither is a validation badge|nine validation badges|the component is still called a validation badge|site&apos;s validation\s+badge taxonomy", "2026-11-22", "renamed status badge 2026-11-16"),
    (r"BCS superconductors, BECs, superfluids — undergo transitions", "2026-11-22", "He-4's lambda transition has a broad critical region; 'sharpest in nature' holds for BCS only"),
    (r"The A2ACW negative result", "2026-11-22", "untested on the page's own evidence: uninformative control; same-vendor pair was the stricter one"),
    (r"bare local construction gives 1\.98 &le; 2\)", "2026-11-22", "read as if 1.85 were Bell's bound"),
    # Added 2026-11-21 (four visitor personas, 2026-11-21 log; explorer 2026-11-20 RG smoothing length).
    (r"crossed the pre-registered kill threshold|A pre-registered falsification threshold was crossed|A pre-registered numerical threshold has been crossed", "2026-11-21", "no registry test was pre-registered (before the data); Kill Criterion Triggered means a threshold REGISTERED before the run", True),
    (r"Is Dark Matter Incomplete Decoherence\?", "2026-11-21", "Key Claims title used the quantum word the landing says C is not; retitled (archive paper title kept as a quotation)"),
    (r"Kubo susceptibility \(stat-mech near criticality\)", "2026-11-21", "a linear-response function is not a bounded sigmoidal map, and 'near criticality' contradicts the no-critical-exponents point"),
    (r"refits one free &#x03C1;<sub>crit</sub> <em>per galaxy</em>|refits one free ρ_crit per galaxy", "2026-11-21", "the default 0.028 V^0.5 knee refits nothing; the defect is circularity (V_flat as input), not a free parameter"),
    (r"one has been seen since 2017", "2026-11-21", "only GW170817 itself has an EM counterpart; 'one since 2017' read as a second event"),
    (r"Saurabh &amp; Desmond \(2024\) all", "2026-11-21", "no locator; could not be sourced, likely a recall error"),
    (r"recoverable via resynchronization\)", "2026-11-21", "conflates reversible dephasing (T2*, echo) with irreversible entanglement decoherence (T2)"),
    (r"RG as published, with &epsilon; pointwise inside the divergence, is not tested|Refracted Gravity as published is not tested by this item", "2026-11-21", "RG as published smooths over a free D (M&D 2016 s2.2); for D >= 1 pc the algebraic LLR reading IS RG; the pointwise reading is the one its authors disclaim", True),
    (r"Crossover zone \(N_corr = 3–11\)", "2026-11-21", "the code assigns crossover for 0.6 < gamma <= 1.4, i.e. N_corr ~ 2-11"),
    # Added 2026-11-20 (four visitor personas, 2026-11-20 log; explorer 2026-11-19; maintainer Oort run).
    (r"bounds the quadrature boost", "2026-11-20", "quadrature bounds the added VELOCITY by V_flat; the boost 1 + (V_flat C/v_b)^2 is unbounded; the 3.17 cap is floored division only"),
    (r"galaxy edges need 4", "2026-11-20", "4x = 13.7/3.17 used the sample maximum; the faintest galaxies need roughly twice the cap after error and trials"),
    (r"which the\s+Oort limit can see|leaves room for a few tens of percent at most|excluded by the Oort limit at the published knee", "2026-11-20", "the absolute boost cancels against lab G (measured at the same smoothed density); Oort/K_z data see its change with height", True),
    (r"Refracted Gravity calibrations \(the pointwise, non-covariant reading\)", "2026-11-20", "the LLR item smooths over 1-10 pc; RG as published (pointwise epsilon inside the divergence) is not tested by it"),
    (r">Inside Bell&apos;s limit<", "2026-11-20", "a local substrate with S <= 2 is excluded by loophole-free Bell experiments (Hensen et al. 2015, S = 2.42 +- 0.20)"),
    (r"Kill Triggered \(Reframed 2026-07-02\)|Disfavored 2\.4σ on σ₈ \(a GR-conditioned statistic\); ~0\.9σ", "2026-11-20", "TEST-04a renders from TEST04A_BADGE / TEST04A_BADGE_LABEL in ledger.ts: untested, underpowered as registered", True),
    (r"sapos;", "2026-11-20", "botched apostrophe substitution", True),
    (r"floored published knee|framework&apos;s asserted\s+&#x03C1;", "2026-11-20", "0.029*V^2 is a units slip, not published or asserted; the archive writes 0.028*V^0.5"),
    (r"two dwarf spheroidals \(Draco, Crater II|two gas-free dwarf galaxies \(Draco, Crater II\)", "2026-11-20", "Crater II is observed disrupting (Limberg+2025, ~7 sigma gradient); the dSph leg rests on Draco", True),
    (r"B<sub>max</sub> &#8818; 14 is excluded|20\.3 is excluded at fiducial M/L", "2026-11-20", "13.7 is a sample maximum; dwarfs do not close 20.3 (2.5-2.8 sigma)", True),
    (r"the form this site has used; the archive", "2026-11-20", "lead with the archive's 0.028*V^0.5; 0.029*V^2 is the units slip", True),
    # Added 2026-11-19 (four visitor personas, 2026-11-19 log; explorer 2026-11-18): summary layers lagging the ledger.
    (r"4\.9(&sigma;|σ) each|boosts of about 100 and 60|(≈|&asymp;|about) 14\.7\b|up to B<sub>max</sub> &asymp; 14\.7", "2026-11-19", "dSph masses used Wolf's projected coefficient on the 3D radius (4/3 too high): Draco 4.5, Crater II 4.2 sigma; cap excluded to ~11"),
    (r"the pin refuted on the RAR", "2026-11-19", "the gamma = 2 pin is disfavoured at about 2 sigma (+184 by point at frozen Upsilon; ~+11 by galaxy; +2.7 with own Upsilon)", True),
    (r"refutes three separate ways", "2026-11-19", "one of the three legs (gamma = 2) is now ~2 sigma; say 'two excluded, one disfavoured'", True),
    (r"[Ii]t is not a sharpness|, not a sharpness:", "2026-11-19", "gamma IS the width below ~1 (13 dex at 0.046, 1.9 at 1/2); what no gamma gives is a SHARP switch (floor 1.17 dex)", True),
    (r"log-density argument is physically motivated", "2026-11-19", "/parameter-derivations: the log argument is chosen, no derivation", True),
    (r"In every <em>quantitative</em> test the framework has run", "2026-11-19", "the tests used three inputs: density (refuted), acceleration (= MOND), chemistry proxies", True),
    (r"Some predictions held up\. Others failed", "2026-11-19", "0 confirmed: say 'some fits to existing data held up; no new prediction confirmed'", True),
    (r"The novelty is in unification", "2026-11-19", "a reparametrization is not evidence; each sector is fitted separately, so no unification is shown", True),
    (r"TEST-10 needs B &#x2265; 13\.7|robust statistic is the\s+maximum", "2026-11-19", "13.7 is a sample maximum, not a bound; 3-sigma bound 7.5 (5.7 after trials), dSphs to 14.7", True),
    (r"1&times;10<sup>&minus;8</sup> to 1&times;10<sup>&minus;7</sup></strong>|10<sup>&minus;8</sup>&ndash;10<sup>&minus;7</sup> at 2&sigma;", "2026-11-19", "measured Gaia gradient: 1e-8 at 1 pc, 3-6e-6 at 10 pc (explorer 2026-11-18)", True),
    (r"still (five|six) orders\b", "2026-11-19", "smooth >=100 pc variant: ~5e-5, about four orders (explorer 2026-11-18)", True),
    (r"with ~95% accuracy", "2026-11-19", "Casarotto+2016: 100% on the 150-subject benchmark, ~95% sensitivity in MCS; two numbers", True),
    (r"is a <strong>dichotomy</strong>, not a single constraint", "2026-11-19", "three horns: trilemma", True),
    (r"Validation badge: (MRH|descriptive)|Validation Badge: |not a validation badge", "2026-11-19", "renamed status badge 2026-11-16", True),
    # Added 2026-11-18 (four visitor personas, 2026-11-18 log): gamma onset, width limit, LLR CL, DR4 companion rate, CDM ratio, consciousness wording.
    (r"how fast that\s+switch flips", "2026-11-18", "gamma sets where the switch starts to turn, not how fast it flips (three tools say so)", True),
    (r"stops near 1\.(17|2) dex|width saturates near 1\.17", "2026-11-18", "1.17 dex is the gamma -> infinity limit; the width is 1.50 at gamma = 1, 1.33 at 2, 1.20 at 10", True),
    (r"without narrowing it", "2026-11-18", "raising gamma above 1 narrows the width a little (1.50 -> 1.33 dex from 1 to 2)", True),
    (r"acts as a width only below about 1", "2026-11-18", "the width keeps falling above gamma = 1, by 0.33 dex to its limit", True),
    (r"favours MOND\s+and the acceleration-keyed version equally", "2026-11-18", "an anomaly gives this framework no support over MOND (equal likelihood ratio = zero support)"),
    (r"rate is measurable \(RV monitoring; DR4 epoch astrometry\)", "2026-11-18", "DR4 cannot measure the companion rate in the 36 S1 systems (explorer 2026-11-17); it can in the parent if the false-flag rate is pinned", True),
    (r"4&times;10<sup>&minus;9</sup> to 4&times;10<sup>&minus;8</sup>", "2026-11-18", "the LLR transferable bound divided the central value; at the 2-sigma edge it is 1e-8 to 1e-7"),
    (r"about\s+3&times; the internal 0\.085", "2026-11-18", "Desmond's 0.25 dex is log-mass scatter, the internal 0.085 a velocity-width residual: no ratio", True),
    (r"testable: 'Yes — \$150K", "2026-11-18", "the EEG row cannot be tested until C has a measurement protocol", True),
    (r"8-way convergence", "2026-11-18", "seven approaches; the Consciousness Demo's eighth row is hollow (no critical point)", True),
    (r"&#x03B3; is the sharpness exponent", "2026-11-18", "gamma is not a sharpness (GAMMA_GLOSS)", True),
    (r"<h2>The Dissolution</h2>|Mind-Body: Dissolved<", "2026-11-18", "the page itself says 'Dissolved' would overclaim; headings now say 'Proposed Dissolution'", True),
    (r"B<sub>max</sub> &#8818; 14 excluded by SPARC dwarfs&rdquo;\. The Failed", "2026-11-18", "13.7 is one disc's maximum, not a bound; the bound is ~7.5 at 3 sigma (5.7 after trials)", True),
    # Added 2026-11-17 (four visitor personas, 2026-11-17 log): knee law, gamma gloss, Bell row, stale counts.
    (r"site-wide working value", "2026-11-17", "A = 0.029 on V^2 is the units hybrid, not the working value; the archive's 0.028 V^0.5 is the plotter default (see /critical-density#knee-laws-in-use)", True),
    (r"the knee is unreachable, and no length", "2026-11-17", "'unreachable' holds only for the A V^2 law under the coarse-graining reading; 45/122 discs cross the archive knee", True),
    (r"two cosmological results emerge", "2026-11-17", "a0 and Sigma0 do not follow from rho_crit or C; they are dimensional coincidences quoted alongside", True),
    (r"curve is a flat 3\.17&times; boost in gravity \(1\.78&times; in speed\) of the\s+baryon line", "2026-11-17", "the flat 3.17x boost is the units-hybrid setting only; condition on the calibration"),
    (r"sags like the gray one", "2026-11-17", "at the default archive knee the violet curve is near-Newtonian in bright centres and capped outside"),
    (r"published density law \(\u03B3 = 2, \u03C1_crit = 0\.029|published density law \(γ = 2, ρ_crit = 0\.029", "2026-11-17", "0.029 V^2 is the units hybrid, not the published law", True),
    (r"real disc it barely changes gravity", "2026-11-17", "at the archive knee the density law gives the wrong shape, not 'barely changes'", True),
    (r"The steepness of the S-curve", "2026-11-17", "gamma is not a steepness/sharpness: it sets the low-density slope and how fast C closes on 1 (GAMMA_GLOSS)", True),
    (r"sharpness sign inverted", "2026-11-17", "gamma is not a sharpness; say what the formula ranks backwards", True),
    (r"0\.33 at the default (&#x03B3;|\u03B3|γ)\)", "2026-11-17", "the Coherence Explorer default gamma is 1, C(rho_crit) = 0.60", True),
    (r"on every construction that does not signal", "2026-11-17", "QM does not signal and reaches 2 sqrt 2; scope to the three constructions built here", True),
    (r"the 6 &ldquo;Validated&rdquo; plus 3|prior 6 &ldquo;Validated&rdquo; claims", "2026-11-17", "6 demoted claims, only 2 confirmed to have carried a Validated badge (/autonomous-research 2026-11-14)", True),
    (r"Validation taxonomy, kill criteria", "2026-11-17", "badges were renamed status badges 2026-11-16; tooltip promised a section that does not exist", True),
    (r"exponent \+0\.5 is 3\.6&sigma;", "2026-11-17", "(0.5 + 0.16)/0.19 = 3.5 sigma on the printed numbers", True),
    (r"Ice cubes have high coherence", "2026-11-17", "C is density-keyed and ice is less dense than water: C(ice) < C(water)", True),
    (r"21&#x03C3;</strong> away on the\s+measurement error alone|~21&#x03C3; off on the measurement error alone", "2026-11-17", "21 sigma includes the anchor's +-0.02; measurement alone at the low-side 0.051 is 23 sigma", True),
    # Added 2026-11-16 (four visitor personas, 2026-11-16 log).
    (r"Survives, differs, unresolved|survives, differs, unresolved;", "2026-11-16", "a0(z) = cH(z)/2pi differs from constant-a0 MOND but not from LCDM+baryons (Mayer+2023): 'survives; does not discriminate'", True),
    (r"the literal lock DIED", "2026-11-16", "the sign lock holds for the substituted mean-density background and is absent in the covariant completions; say which object", True),
    (r"C names three different functions", "2026-11-16", "C names at least four functions (C_rho, C_g, C_a, and the consciousness C = f(gamma, D, S))", True),
    (r"label=\"Phenomenological Ansatz", "2026-11-16", "the headline form was run and lost (Failed as a density law; Reparametrization when keyed on acceleration or mean density)", True),
    (r"differs from the paper on one input setting|reproduction of their public code differs", "2026-11-16", "no claims about Saad & Ting's code on public pages before the authors have seen them", True),
    (r"Validation badge definitions \(canonical", "2026-11-16", "heading renamed 'Status badge definitions': the text says they are not verdicts", True),
    (r"\(the Coherence Explorer default\)|Coherence Explorer defaults to &#x03B3; = 0\.49", "2026-11-16", "the Coherence Explorer opens at a display value gamma = 1; 0.49 is a button (acceleration-keyed fit)", True),
    (r"ρ_crit = A × V_flat² \(V_flat is the steady", "2026-11-16", "First Encounter teaches the archive's 0.028 x V_flat^0.5 (the plotter default); V^2 was the units hybrid", True),
    # Added 2026-11-15 (researcher + technical-writer personas; dSph run maintainer/scripts/cap6p39_vs_dsph.py, PREREG c7d729c).
    (r"[Ww]hat reaches 6\.39 is weak lensing|only (weak )?lensing reaches 6\.39|only weak lensing reaches", "2026-11-15", "gas-free dSphs (Draco, Crater II) exceed 6.39 at 4.9σ each at M/L = 4 with no light rule; use BOUNDED_BOOST_JOINT", True),
    (r"boosts of 30(–|&ndash;)100 under any stellar M/L", "2026-11-15", "at M/L = 4 Draco excludes caps only to ~18.5 (3σ local), 14.7 after trials; 20.3 is excluded at fiducial M/L only"),
    (r"= tested, did not hold|[Pp]rediction exists, no data yet", "2026-11-15", "badge wording is single-sourced in statusLabels.ts (badgeOneLiner); Untested = not yet run against data"),
    (r"Your next step\s+is the\{' '\}\s*<Link href=\"/glossary\"", "2026-11-15", "the Beginner Path ends at step 5; the Glossary is a reference, not a sixth step"),
    # Added 2026-11-12 (graduate + researcher personas; 2.15 = 1.20·E(1) recomputed; Hill form checked by hand).
    (r"cH\(z\)/2&#x03C0; on the same anchor|cH\(z\)/2π on the same anchor", "2026-11-12", "2.15 is McGaugh's 1.20 × E(1); the framework's own cH(z)/2π is 1.86 (~9.8σ on the measurement error)", True),
    (r"a\s*<strong> Hill coefficient</strong>|γ is a Hill coefficient", "2026-11-12", "C is a Hill function of exponent 2γ in 1 + x only; near zero C ≈ γx for every γ, so 'Hill coefficient' describes the tail"),
    (r"One reading DR4 can still kill is not counted failed", "2026-11-12", "the EFE-free corner is not a defined model until a rule says which acceleration enters C (Milgrom 2011 is the one written rule)"),
    # Added 2026-11-11 (visitor personas; each traced or recomputed before retiring).
    (r"expert review|expert-review point|independent expert reviews|four independent reviews", "2026-11-11", "every credited review was a simulated-visitor persona (AI); traced through git and the visitor logs of 07-18/23/24"),
    (r"how sudden the switch is|how sharp its S-curve is|= sharper, more abrupt snap", "2026-11-11", "γ sets how early C rises; it narrows the rise modestly up to γ ≈ 1 and no value makes it sudden"),
    (r"0\.489[^\n]{0,40}2(\.2)?% from|is 2(\.2)?% away", "2026-11-11", "0.489 ± 0.11 (0.43–0.95 with nuisances refit) is consistent with ½; a % of central values is not a distance"),
    (r"McGaugh et al\. 2016 measured value", "2026-11-11", "0.057 dex is Li, Lelli, McGaugh & Schombert 2018 (M/L, D, i fitted per galaxy), abstract read 2026-11-11"),
    (r"&gt; 5\.9 E<sub>Pl", "2026-11-11", "LHAASO abstract (arXiv:2402.06009): E_QG,1 > 10 E_Pl; 5.9 had no source on file"),
    (r"all three candidate (conventions|choices)", "2026-11-11", "lensing excludes the framework's own cap under either reading of light, the 6.39 cap only if hidden baryons < ~6×; use LENSING_LEG_ASSUMPTION"),
    (r"See the 6 Protocols", "2026-11-11", "the page's own badge says they are not protocols: 6 proposed tests, 2 run, 4 never run"),
    (r"8 \"independent\" approaches|eight &ldquo;independent&rdquo; approaches", "2026-11-11", "the Consciousness Demo has seven approaches; the eighth has nothing to measure"),
    (r"alive, disfavoured, not novel", "2026-11-11", "the EFE-free corner is not a defined model until the argument of C is specified; use EFE_FREE_CORNER_STATUS"),
    # Added 2026-11-09 (visitor personas; each checked before retiring).
    (r"Pin γ=2 → refuted|Fit γ → MOND", "2026-11-09", "every γ is a MOND μ; γ = 2 vs McGaugh selects among MOND's functions"),
    (r"matches no MOND function", "2026-11-09", "tanh(γx) has the right limits for a μ; it only leaves the simple-μ family"),
    (r"<strong>emergent scale</strong>|a&#x2080; would emerge from the coherence", "2026-11-09", "a₀ ≈ cH₀/2π is posited, not derived from C", True),
    (r"S ≤ 2 on every arm", "2026-11-09", "one arm reaches 2.67, with signaling"),
    (r"lists 11 because", "2026-11-09", "Tier 1 has 13 cards"),
    (r"by about 3σ and far above", "2026-11-09", "one point on a curve running 0 to +5.8σ across Chae's bin; a σ needs the bin's g_N distribution"),
    (r"closes the last possible EFE discriminator|no live model that both fits", "2026-11-09", "the algebraic EFE-free corner is alive and disfavoured; use EFE_FREE_CORNER_STATUS"),
    (r"catalog-registered", "2026-11-09", "TEST-26 is numbered, not registered"),
    # Added 2026-11-10 (visitor personas + explorer 11-09; each checked before retiring).
    (r"Boufourou 2026 lean|and Boufourou 2026 lean", "2026-11-10", "Boufourou 2026 is withdrawn by its author (input was Chae's Newtonian mock); not a DR3 result"),
    (r"adopt or compare with (that one|Boufourou)", "2026-11-10", "the withdrawn paper's DR4 protocol is not a candidate"),
    (r"γ-sharp|&#x03B3;-sharp", "2026-11-10", "γ is knee position above 1, not sharpness; the family has no sharp member"),
    (r"five\s+numbered artifacts", "2026-11-10", "For Researchers numbers six artifacts"),
    (r"6\.39 included, even with all cosmic baryons counted", "2026-11-10", "the lensing leg carries a deflection-rule condition and Brouwer's own ×10 allowance; use LENSING_LEG_ASSUMPTION"),
    (r"second, untested wiring of the same equation", "2026-11-10", "plain checkbox label: an alternative way of plugging C in"),
    (r"visitor persona(’|\')s check on 18 elements", "2026-11-10", "a data page does not cite an unnamed persona as a source; the T_c row is untraced"),
    (r"simple stand-in built from each galaxy", "2026-11-10", "the plotter's gray line is SPARC's mass model since 2026-11-10"),
    (r"0\.58–0\.59", "2026-11-09", "peak slope vs log-density at γ = 2 is at C = 0.601"),
    (r"the disagreement sits in that one modelling step", "2026-11-09", "the flip is a separation-error setting in S&T's code; the crux is the contaminant fraction", True),
    # --- retired 2026-11-08 (maintainer, visitor 11-08 + explorer 11-07). Literature and verdict sentences that failed against primary
    #     sources or newer runs: (i) a0 prefactor attributions (McCulloch 0.99 cH, Verlinde cH0/6, Smolin a_L/8.3; Milgrom 2008 cites 2 pi a0 ~ cH0);
    #     (ii) gamma as sharpness (10-90 width stops at 1.17 dex); (iii) stale sigma numbers; (iv) the sample maximum as a bound.
    (r"same geometric factor|standard geometric factor", "2026-11-08", "authors print different prefactors; see /mond-unification#a0-prefactors", False),
    (r"he wrote cH|Milgrom[^.]{0,40}cH(&#x2080;|\u2080|₀|<sub>0</sub>)/6", "2026-11-08", "no source locates /6 in Milgrom 1983; Sanders & McGaugh 2002 print /6, Milgrom 2008 cites 2 pi", False),
    (r"hair-trigger|sharp snap|sharp cliff", "2026-11-08", "no gamma gives a sharp switch; the 10-90 width stops at 1.17 dex", False),
    (r"excluded at &gt; 10σ|excluded at > 10σ by the globular", "2026-11-08", "the EFE-free corner is ~3 sigma disfavoured, conditional on the mass model (explorer 10-30)", False),
    (r"900× under|1,400× under", "2026-11-08", "ratio to a near-zero r2; quote the 95% upper limit (r2 ~ 0.03: about 3x and 6x)", False),
    (r"interval reaching 23", "2026-11-08", "23 is the full-N interval; the galaxy-level one is [1.4, 20.8]", False),
    (r"B(_max|<sub>max</sub>) ≲ 14", "2026-11-08", "13.7 is a sample maximum; caps to about 7.5 are excluded at 3 sigma per disc, about 5.7 after trials", False),
    (r"same 36 binaries[^.]{0,120}1\.12|γ = 1\.12 ± 0\.25", "2026-11-08", "Saad & Ting v2 abstract: gamma = 1.00 (+0.24/-0.19)", False),
    (r"positive control nobody has run", "2026-11-08", "the known-good arm exists; the unrun control is the post-cutoff arm", False),
    # --- retired 2026-11-07 (maintainer, visitor 11-07 HIGHs): summaries left behind by the 11-06 Cassini revision.
    #     (i) "three of the six stay" (floor is 4: TEST-10, environment, TEST-25, Bell/CHSH); (ii) the galaxy-level intersection
    #     "narrow, not empty" (it is empty with SPARC's a0; 13-18 sigma without bulges too, compander_cassini_nobulge_profiled_a0.py);
    #     (iii) "both kills are convention-dependent" (TEST-10 is not); (iv) MOND "only sharper transitions (delta >= 4) survive"
    #     (fixed-a0; explorer 11-06: no delta <= 6 passes at profiled a0); (v) "the ln is cosmetic"; (vi) "explain all observed variance".
    (r"three of the six stay|[Tt]hree of six stay", "2026-11-07", "the rule-independent floor is 4 rows: TEST-10, environment, TEST-25, Bell/CHSH", False),
    (r"intersection is narrow, not empty", "2026-11-07", "with SPARC's a0 refit at each gamma the intersection is empty at galaxy level too", False),
    (r"both kills are convention-dependent", "2026-11-07", "TEST-10 fires at every candidate ceiling; only TEST-09 is convention-dependent", False),
    (r"only sharper transitions \((δ|&delta;) ≥ 4\) survive", "2026-11-07", "delta >= 4 passed only with a0 fixed; at SPARC-profiled a0 no delta <= 6 passes", False),
    (r"the ln is cosmetic", "2026-11-07", "the ln sets the power-law tail that makes gamma = 1/2 equal MOND's simple mu", False),
    (r"explain all observed variance", "2026-11-07", "MOND + M/L explains the rotation-curve variance tested, not all variance (clusters, Cassini)", False),
    # --- retired 2026-11-06 (maintainer): (i) the count range 3-8 / floor of 3. TEST-25's galaxy-level reopening ("gamma ~ 1.5-1.7
    #     passes both") came from sparc_cassini_q2.py's preparatory scan holding a0 = 1.03e-10 fixed; with a0 profiled from SPARC at
    #     each gamma, Cassini fails at 14.5-19.3 sigma for gamma 0.3-3 (maintainer/scripts/cassini_q2_at_sparc_profiled_a0_high_gamma.py).
    #     (ii) "Cassini-passing gamma ~ 1.5-2" and "a Newtonian null fails every gamma <~ 3" (the latter read the 10-06 bracket's
    #     upper edge; quasi-linear QUMOND gives 1.03-1.09 at gamma 3, so it is precision-dependent). (iii) visitor 11-06: TEST-10 listed
    #     as convention-dependent; LIV "16-28 is the range ... actually yields"; gamma-boundary "Z-polynomial null matches".
    (r"(?<![\d.])3(&ndash;|–| to |\\u2013)8 under|between 3 and 8 depending|Three survive every rule|The floor of 3 is", "2026-11-06",
     "the range is 4 to 8: TEST-25 does not move (Cassini fails at every gamma 0.3-3 once a0 is profiled from SPARC)", False),
    (r"Cassini-passing (γ|&#x03B3;) (≈|&asymp;|≳|&#x2273;) 1\.5", "2026-11-06",
     "no gamma up to 3 passes Cassini with SPARC's a0 at each gamma; the 'passing' window held a0 fixed", False),
    (r"(Newtonian )?null fails (the acceleration-keyed compander at )?every (γ|&#x03B3;) (≲|&#x2272;) 3", "2026-11-06",
     "gamma = 3 predicts 1.03-1.09 (quasi-linear QUMOND); a null excludes only gamma whose boost exceeds 1 + 2 sigma", False),
    (r"Two of the six \(TEST-09, TEST-10\) were convention-dependent", "2026-11-06",
     "TEST-10 fires at every candidate ceiling (ledger.ts row #2); only TEST-09 is convention-dependent", False),
    (r"16&ndash;28 is the range the", "2026-11-06", "the LIV range is 15-27 orders (alpha/pi = 2.3e-3)", False),
    (r"Z-polynomial null matches", "2026-11-06", "the Z-null run on the real rows fails (2026-10-31)", False),
    # --- retired 2026-11-05 (maintainer, visitor tech-writer HIGH): the glossary printed "4-8 under rules on file" while every
    #     footer printed "3-8" (the range moved to 3-8 on 2026-10-24 when TEST-25 joined it).
    # (r"4(&ndash;|–|\\u2013)8 under rules on file", ...) REVERSED 2026-11-06: the range is 4-8 again (see the 2026-11-06 block).
    # --- retired 2026-11-04 (maintainer, draining explorer 2026-11-02): the density-keyed free fit (gamma 0.046) has a
    #     global knee at 4.4e-6 Msun/pc3 below every disc (log regime; gamma and rho_c separately identified, corr +0.89);
    #     boost ~ rho^-0.10 beats a constant boost by dBIC +945. "Switched off", "fixed A = 0.029" and "only gamma/A" for this
    #     fit are wrong (gamma/A-only holds for the fixed-A family). Glossary Kill-Criterion examples TEST-03 R2 = 0.14 and
    #     TEST-04a ~0.55 were reclassified (misattribution; underpowered). TEST-04a is not "FAILED" (underpowered as registered).
    (r"switch(es|ed)? (its own |the )?(density[- ]dependence|effect) off|density[- ]dependence switched off", "2026-11-04",
     "the density fit keeps a weak response (boost ~ rho^-0.10, +945 vs constant boost), not switched off", False),
    (r"0\.046[^\n]{0,120}fixed A = 0\.029", "2026-11-04",
     "the gamma = 0.046 fit has a free global knee at 4.4e-6 Msun/pc3, not fixed A = 0.029", False),
    (r"observed R\\u00b2 = 0\.14, criterion triggered|measures \\u2248 0\.55, criterion triggered", "2026-11-04",
     "both glossary examples were reclassified (TEST-03 misattributed; TEST-04a underpowered as registered)", False),
    (r"FAILED &mdash; disfavored 2\.4", "2026-11-04",
     "TEST-04a is Underpowered as Registered, not Failed", False),
    # --- retired 2026-11-02 (maintainer, draining explorer 2026-10-31 P0): the chemistry table's rows were 23 properties
    #     over different samples, mostly mis-cited. Electrical conductivity +0.955 is session #81 r = -0.414 "WRONG SIGN";
    #     "electronegativity r = 0.979" is chemical softness (#118) against 1/IE; chi vs 1/gamma_optical is 0.94-0.96 and
    #     gamma_optical = 13.6 eV / IE. The Z-null was run on the 10 recoverable rows and FAILS ("not run on the real data" retired).
    (r"lectronegativ[^\n]{0,60}0\.979|0\.979[^\n]{0,40}lectronegativ", "2026-11-02",
     "0.979 is chemical softness (#118); chi vs 1/gamma_optical (= IE/13.6 eV) is 0.94-0.96", False),
    (r"lectrical conductivity', r: 0\.955|lectrical conductivity[^\n]{0,30}\+?0\.955", "2026-11-02",
     "electrical conductivity is session #81 r = -0.414, WRONG SIGN (Failed)", False),
    (r"null has not been run on the real data|real-data null is not run|no null run on the real rows|Null Model RUN \(2026-05-10\)", "2026-11-02",
     "the Z-null was run on the 10 recoverable property rows (explorer 2026-10-31) and fails", False),
    # --- retired 2026-10-31 (maintainer): the 10-30 GC "row differences" scores. A paired difference of residuals between two
    #     laws cancels the observed slope (d_A - d_B = s_B - s_A); shuffling s_obs reproduces every number (explorer 2026-10-30).
    #     8 sigma / 4.4 sigma / 6.6 sigma / 10.6 sigma / 10.8 sigma were model separations. Data-facing: gamma=2 ~ Newton,
    #     Newton vs MOND+EFE sign flips with r_t, EFE-free rows ~3 sigma worse than Newton. The -0.057 is the Webb r_t.
    # 2026-10-31 chemistry: the polynomial-in-Z null (2026-05-10) was run on synthetic sqrt(Z)/log Z/Z^(1/3) curves, Z = 1-50,
    #     never on the chemistry rows; and "near-monotonic in Z" is false across the table (Lothar Meyer atomic-volume curve).
    (r"near-monotonic (in|functions of) (atomic number )?Z|polynomial in (atomic number )?Z matches|polynomial in atomic number matches|comparable r on density-monotonic rows|matches every r to within 0\.07|any monotone function of Z reaches", "2026-10-31",
     "the Z-polynomial null ran on synthetic curves, not the rows; the reason r is not evidence is the post-hoc theta_D proxy", False),
    (r"10\.6σ|10\.8σ|0\.147 ± 0\.014|0\.184 ± 0\.017", "2026-10-31",
     "GC paired differences cancel s_obs; the EFE-free corner is ~3 sigma disfavoured vs Newton (refit), not 10.6 sigma", False),
    (r"systematics floor every law|−0\.037 ± 0\.005|γ&nbsp;=&nbsp;2 by 4\.4σ|separated from both at 6\.6σ", "2026-10-31",
     "the -0.057 Newton offset is the catalogue (Webb+2013) tidal radius; the 8/4.4/6.6 sigma were model separations", False),
    (r"CLOSED BY GLOBULAR CLUSTERS|corner is closed by globular|closes the external-field-free corner|With the corner closed", "2026-10-31",
     "globular clusters disfavour the EFE-free corner at ~3 sigma, conditional on the mass model; not closed", False),
    # --- retired 2026-10-30 (maintainer): glossary "every executed test" uses density (galaxy kills keyed on acceleration;
    #     Equation Anatomy retired it 10-04, the glossary kept it); "six-step tour" (eight steps); Step 2 "critical density" title;
    #     alpha/pi ~ 1e-2 and "16-28 orders" (alpha/pi = 2.3e-3, gap 15-27); the TEST-09 sweep at 2 decimals (|dn| = 0.297 at 5.389,
    #     edge at B_max ~ 5.31, so "<~ 5.4" and "lands on it" were rounding artefacts; sigma-distances 3.4/2.6 used sigma = 0.12);
    #     the non-physicist summary's "far too much to be a fluke" (criterion margin ~1 sigma) and "slower growth ... disfavored"
    #     (mechanism withdrawn 2026-08-11); "kill fired 3.3 sigma" (3.3 sigma is prediction-data, not the criterion margin);
    #     the TEST-10 "M/L-free pair NGC 3741, ESO 444-G084" (ESO 444 is 1.65 sigma under its inclination; explorer 2026-10-29)
    (r"In every executed test: physical density|Every test on this site uses", "2026-10-30",
     "galaxy kills key C on acceleration; say 'every density-keyed test'", False),
    (r"six-step tour", "2026-10-30", "Equation Anatomy has eight steps; don't hard-code a count on another page", False),
    (r"Normalize by critical density", "2026-10-30", "rho_crit is a reference density, not a critical point", False),
    (r"16(&ndash;|–|-| to )28 (OOM|order)|&#x03B1;/&#x03C0;&nbsp;~&nbsp;10<sup>&#x2212;2</sup>|α/π&nbsp;~&nbsp;10<sup>(&#x2212;|−)2</sup>|O\(α/π\) ~ 10⁻²", "2026-10-30",
     "alpha/pi = 2.3e-3; against 1e-18..1e-30 the gap is 15-27 orders", False),
    (r"&#8818;(&nbsp;| )5\.4\b|≲ 5\.4\b|below about 5\.4|ceilings of 5\.4 and above", "2026-10-30",
     "TEST-09 class-exclusion edge is B_max ~ 5.31 (|dn| = 0.300); 5.389 gives 0.297", False),
    (r"\|(&Delta;|&#x0394;|Δ)n\|(&nbsp;| )=(&nbsp;| )0\.30(?!\d)|0\.30/0\.12|0\.41/0\.12|lands exactly on it|this lands on it", "2026-10-30",
     "unrounded sweep: |dn| = 0.406 / 0.297 / 0.260, sigma-distances 3.3 / 2.5 / 2.2", False),
    (r"by far too much to be a fluke|slower growth of cosmic structure\) is disfavored", "2026-10-30",
     "TEST-09 criterion crossed by ~1 sigma (3.3 sigma is prediction-data); the growth mechanism was withdrawn 2026-08-11", False),
    (r"kill fired (at )?3\.3σ|registered kill fired 3\.3", "2026-10-30",
     "3.3 sigma is the prediction-data separation; the kill line is crossed by ~1 sigma", False),
    (r"two gas-dominated dwarfs \(NGC 3741, ESO 444-G084|NGC 3741, ESO 444-G084, both gas-dominated", "2026-10-30",
     "with D/i/M/L propagated the robust trio is NGC 2915, NGC 3741, UGC 06667; ESO 444-G084 is 1.65 sigma; condition is the gas census", False),
    # --- retired 2026-10-29 (maintainer): "constant a0 excluded at any level (5 sigma)" (ambiguous: "level" meant normalisation,
    #     read as CI level; the bins are pixel-read and the exclusion is Ciocan's own apparent-a0 result); the bare "a0 derivation
    #     within 13%" bullet under a Failed card; Key Claims' declaratives under Failed/Speculative badges; the "Not: Just notation"
    #     heading that contradicted "MOND in different notation"; TEST-04a's "DISFAVORED 2.4 sigma" status on Decisive Tests
    #     (Tier 1 says Underpowered as Registered); the plotter's queued-Bessel note (implemented today); the "Two of them fired
    #     only under the site's choice of cap" sentence (true for TEST-09, false for TEST-10)
    (r"excluded by (Ciocan&apos;s bins|the bins) at any level|\(n = 0\) at any level|a&#x2080; growing <em>faster</em> than\s+H\(z\)\.", "2026-10-29",
     "ambiguous 'at any level' (normalisation, not CI level); state 'with the normalisation free', the bar convention and that it is Ciocan's own apparent-a0 result", False),
    (r"a&#x2080; derivation within 13%", "2026-10-29",
     "a0 = cH0/2pi is Milgrom's coincidence, not a derivation", False),
    (r"it&apos;s the coherence gradient at the\s+transition|are not mysterious\. They are synchronization phenomena", "2026-10-29",
     "mechanism stated as fact under a Failed/Speculative badge; write it as 'proposed'", False),
    (r"claim: 'Just notation'|claim: 'Just philosophy'", "2026-10-29",
     "list-of-disclaimers heading that reads as a defence; the fitted equations ARE notation", False),
    (r"DISFAVORED 2\.4σ on σ₈", "2026-10-29",
     "TEST-04a's state is Underpowered as Registered on every page; the 2.4 sigma is a GR-conditioned sigma8 statistic", False),
    (r"a Bessel-function implementation is queued", "2026-10-29",
     "the Freeman thin-disk curve was implemented 2026-10-29", False),
    (r"fired on galaxy rotation data only under the site&apos;s choice of cap", "2026-10-29",
     "TEST-10 fires under every candidate cap on rotation curves (2 galaxies M/L-unconditionally at 6.39); only TEST-09 is cap-dependent", False),
    # --- retired 2026-10-27 (maintainer): door #3 bound "15-30 orders" (nucleons via Borexino 11C make it 15-38, explorer
    #     2026-10-26); the /for-researchers lead's "BTFR-forced V^-2 excluded at ~10 sigma by the same measurement" (the 10 sigma is
    #     for the Jeans-construction knee estimator, not MOND's transition density: ledger 2026-10-14); a public-page process note
    #     that claimed the footer carried a qualifier it did not; the Key Claims legend's paraphrase of Speculative; a status baked
    #     into a learning-path title; the MRH "predicts specific decoherence patterns" sentence (no rate, basis or environment
    #     model); the DESI growth negative titled "Secondary" on the citable list (mechanism withdrawn 2026-08-11)
    (r"15(&ndash;|–|-)30 orders", "2026-10-27",
     "door #3 is excluded 15-38 orders below the natural rate once nucleons are included (Borexino 11C: D/D_Pl < 4e-39)"),
    (r"BTFR-forced V<sup>&minus;2</sup> is excluded at ~10&sigma; by the same measurement", "2026-10-27",
     "the ~10 sigma is for the Jeans-construction knee estimator; MOND's transition density is a different object (ledger 2026-10-14)"),
    (r"simulated-visitor passes\s+have now flagged the footer|the footer now carries the\s+qualifier", "2026-10-27",
     "process note claiming a footer qualifier that did not exist until 2026-10-27; keep process notes off reader-facing pages", True),
    (r"Speculative</Link> = not yet testable", "2026-10-27",
     "canonical wording: conceptual proposal without quantitative test (Honest Assessment)"),
    (r"Decisive Tests: Status \(none active\)", "2026-10-27", "a status baked into a title; the label is now 'Decisive Tests (none currently running)'"),
    (r"predicts specific decoherence patterns at the MRH boundary", "2026-10-27",
     "no rate, basis or environment model exists; the MRH page now says so (door #3 is a direction, excluded at its natural rate)", True),
    (r"Secondary: the DESI growth-suppression negative", "2026-10-27",
     "the mechanism behind fsigma8 = 0.418 was withdrawn 2026-08-11; not citable, kept as a power calculation"),
    # --- retired 2026-10-26 (maintainer): TEST-26 kill worded as "requires the crossing" (the sign lock also forbids thawing;
    #     a thawing-only DR3 would kill the family without firing that text); rho_crit as "the transition point"; C's endpoints
    #     as quantum (C -> 0) / classical (C -> 1), which is backwards against degeneracy (n lambda^3 >~ 1 at HIGH density)
    (r"requires (that|the|a)\s+(w = (&minus;|−)1\s+)?crossing|crossing holds and tied", "2026-10-26",
     "TEST-26 kill: DR3 excludes Lambda in the thawing or crossing direction (w0 > -1 with wa < 0, crossed or not)"),
    (r"V_flat\\u00B2: the transition point|The transition point, unique|transitions from quantum \(C", "2026-10-26",
     "rho_crit is a saturation knee / reference density, and C runs uncorrelated -> collective, not quantum -> classical"),
    (r"sharpness of the quantum-classical transition", "2026-10-26",
     "gamma = 2/sqrt(N_corr) is audited-negative and C's endpoints are not quantum/classical"),
    # --- retired 2026-10-24 (maintainer): count range 4-8 (TEST-25 galaxy-level delta omitted); galaxy-level +10.9 described as
    #     gamma=2 vs free gamma (it is vs McGaugh nu, equal k: the passage a persona's "+6.2" grew from); "fit improvement is zero";
    #     0.086 "CDM-consistency suspended" (explorer 2026-10-23: not a BTFR scatter at all)
    # (r"(?<![\d.])4(&ndash;|–| to )8 under", ...) REVERSED 2026-11-06: TEST-25's galaxy-level reopening came from a fixed-a0 scan.
    (r"compares\s+&#x03B3; = 2 with free &#x03B3;", "2026-10-24",
     "the galaxy-level +10.9 compares gamma=2 with McGaugh's nu (equal parameter counts): 166 x ln(RSS ratio)"),
    (r"the fit improvement is zero", "2026-10-24", "free gamma vs McGaugh: delta chi^2 = -0.84 (negligible, not zero)"),
    (r"CDM-consistency (verdict is )?suspended|verdict suspended 2026-10-09|CDM-consistency suspended", "2026-10-24",
     "0.086 is independent of V (shuffled-V 0.0870 vs 0.0864): not a BTFR scatter, so no CDM verdict (explorer 2026-10-23)"),
    # --- retired 2026-10-23 (maintainer): covariant RG "unchecked"/"what this framework lacks"; TEST-02 "~80x below";
    #     refutation defined as external-data-only; A2ACW 1.4% "upper bound"; landing quantum equivalence; gamma "sharpness" slider;
    #     0.446 as the gamma->inf limit; unhedged "5 independent roots"
    (r"which is exactly what this framework|covariant completion(&apos;s|'s| is)\s+(lunar-ranging status is )?unchecked", "2026-10-23",
     "covariant RG (Sanna+2023) is omega=-1 Brans-Dicke: Cassini gamma=0 (4e4 sigma), Nordtvedt eta=1, |Gdot/G| >= 0.99 H0; explorer 2026-10-22"),
    (r"80\s?(×|&times;)\s+below\s+(the\s+)?(Gaia|systematics)", "2026-10-23",
     "TEST-02's density branch is identically null (gamma_g = 1); 0.05-0.4% needs a knee no other page uses"),
    (r"executed on external data against a registered criterion", "2026-10-23",
     "the 6 includes the Bell/CHSH construction check; rule = stated failure condition, actually run, failed (glossary)"),
    (r"it is an upper bound on what|figure is therefore both an upper bound", "2026-10-23",
     "A2ACW calibration specificity 0/6: the filter removes real discoveries too, so the 1.4% bounds nothing until the post-cutoff arm"),
    (r"Born rule: equivalent to Zurek", "2026-10-23",
     "/measurement-without-observers is Speculative (no rate parameter) since 2026-10-22"),
    (r"<strong>Transition sharpness</strong>", "2026-10-23",
     "gamma sets the initial slope and saturation rate; at large gamma it relocates the knee (degenerate with rho_crit)"),
    (r"0\.446 as γ→∞", "2026-10-23", "the gamma->inf limit of max dC/dln x is 0.448 (max u sech^2 u)"),
    (r"(?<!most )(?<!at most )from 5 independent roots", "2026-10-23", "say 'at most 5 independent roots' (dp-gated recount)"),
    # --- retired 2026-10-22 (maintainer): unscoped density-keyed exclusion; unscoped "RG is not excluded"; "6 Testable Protocols"
    (r"already excluded twice|<strong>Refracted Gravity is not excluded:</strong>", "2026-10-22",
     "scope it: +2843 is the algebraic g = g_bar/C on this framework's permittivity; RG passes GCs but its disc calibrations fail dSphs (explorer 2026-10-21); see /test-catalog#what-excluded-covers"),
    (r"6 Testable Protocols", "2026-10-22",
     "the body calls them experiment classes, and the mechanism has no rate parameter (Speculative)"),
    # --- retired 2026-10-21 (maintainer): demoted-claims tally; A2ACW roles; Hubble-type p mislabelled as environment;
    #     unscoped "one distinct prediction"; 1,703 phrasings the 10-16 rule missed; forced-convergence RMS; w(0) at Omega_m 0.30
    (r"6 former (&ldquo;|\"|“|‘|&apos;)Validated", "2026-10-21",
     "only 2 of the 6 demoted claims are confirmed to have carried Validated (explorer 2026-10-20); say '6 demoted claims'"),
    (r"Model versions are not recorded|Which one is right has not been traced", "2026-10-21",
     "LV T3 records Sonnet 4.5; S662's 'human audit' traced and wrong (explorer 2026-10-20)"),
    (r"p-value for environment effect|significance of environment effect|environment-dependent scatter is real and statistically significant|The effect is real and statistically significant", "2026-10-21",
     "p = 5e-6 / R^2 = 0.14 is Hubble type vs RAR scatter (S376-378), structural per S381; environment run gives r^2 = 0.0001"),
    (r"in fact met its own registered criterion", "2026-10-21",
     "TEST-05's type leg was rejected by a morphology effect; its environment leg (the framework's prediction) is null"),
    (r"one genuinely distinct\s+external-field prediction|is the genuine discriminator", "2026-10-21",
     "refraction / ambient-density predictions live on the density-keyed branch already excluded by SPARC and LLR; untested, cannot move Bucket 0"),
    (r"1,703 chemical phenomena|across 1,703|from 1,703 phenomena|Explore 1,703 phenomena|1,703 phenomena include", "2026-10-21",
     "1,703 is a session counter; say ~1,700 chemistry sessions"),
    (r"root-mean-square spread about 0\.50 is|All fall within &#x00B1;0\.03 of 0\.50", "2026-10-21",
     "a spread around a midpoint fixed by definition is not agreement; dropped from /consciousness-demo"),
    (r"&minus;1\.24, not the", "2026-10-21",
     "w(0) at gamma = 2 is -1.256 at Omega_m = 0.315; -1.24 is the Omega_m = 0.30 value", True),
    # --- retired 2026-10-20 (maintainer): stale glossary fsigma8 (missed by the 10-10 sweep: lowercase \u00b1, rounded value);
    #     LambdaCDM fsigma8 mis-rounding; tanh(negative u); door-3 wording; environment-run IDs; landing step 6; Youden range
    (r"0\.55\d?\s*(±|&plusmn;|\\u00[bB]1)\s*0\.06", "2026-10-20",
     "LRG1 fsigma8 is 0.516 +0.057/-0.066 (QSO-row value retired 2026-10-10; the glossary kept it until 2026-10-20)"),
    (r"(ΛCDM|&Lambda;CDM|\\u039bCDM)[^.]{0,20}0\.474", "2026-10-20",
     "DESI DR1 Table 11 fiducial is 0.4733, i.e. 0.473"),
    (r"very negative u it returns", "2026-10-20",
     "tanh -> -1 as u -> -inf, and u = gamma ln(1+x) is never negative here"),
    (r"probably closed, not shown closed", "2026-10-20",
     "explorer 2026-10-19 computed the L3 striction term; the in-disc L3 door is closed by LLR"),
    (r"carried on\s+this site as", "2026-10-20",
     "the environment run is TEST-03s on this site (archive: S177 / TEST-08)"),
    (r"The registered TEST-08 gives", "2026-10-20",
     "site TEST-08 is the Freeman-law card; the environment run is TEST-03s"),
    (r"Glossary</Link> \(step 6\)", "2026-10-20",
     "the Glossary has been a companion, not a path step, since 2026-10-08"),
    (r"0-to-1 score", "2026-10-20",
     "Youden's J runs from -1 to 1; the site quotes negative J"),
    (r"47 genuine contributions", "2026-10-20",
     "the 47 are internal-consistency survivors, not discoveries"),
    (r"cheap prediction &mdash; <strong>γ = 2 for every resolved-member", "2026-10-20",
     "the ladder pre-check (explorer) found dSphs below every admissible knee and open clusters ambient-capped"),
    # --- retired 2026-10-19 (maintainer): taxonomy and badge drift; consciousness body vs header; measurement page
    (r"Failed — all \$\{EXECUTED_COUNT\}", "2026-10-19",
     "the Tier 1 badge covers only the tests whose kill fired; TEST-04a is underpowered as registered, not Failed"),
    (r"found to operate at exactly C", "2026-10-19",
     "Gnosis measured SNARC salience (0.640), not C; three numbers for one system, none of them C"),
    (r"<strong>Feasibility:</strong> High", "2026-10-19",
     "the EEG test needs an EEG-to-C calibration first; none exists"),
    (r"34 falsifiable predictions", "2026-10-19",
     "the 34 consciousness predictions inherit untestable-as-stated"),
    (r"is why measurements produce\s+definite outcomes", "2026-10-19",
     "irreversibility is decoherence; it does not select an outcome"),
    (r"squashes any number into the range 0", "2026-10-19",
     "tanh maps to (-1, +1); C lands in [0, 1) only because its input is non-negative"),
    # --- retired 2026-10-15 (maintainer): stale fragments next to their own corrections
    (r"Both derivations agree", "2026-10-15",
     "Session #91's Freeman route is the same relation (Σ₀ = a₀/2πG), not an independent derivation"),
    (r"underivable amplitude, or supersession|unmotivated amplitude, or supersession", "2026-10-15",
     "a replaced test is Superseded, not Withdrawn (one definition)"),
    (r"Blanchet (&amp;|&) Novak \(2011\) supplies", "2026-10-15",
     "B&N 2011 computed the prediction; the measured Q₂ = (3±3)e-27 is Hees, Folkner, Jacobson & Park 2014"),
    (r"robust empty intersection(?! \[empty only)", "2026-10-15",
     "empty only with SPARC points independent; at galaxy level the interval reaches γ ≈ 1.7 and the intersection is narrow"),
    (r"snaps rather than fading", "2026-10-15",
     "contradicts /first-encounter; tanh is gradual at γ ≈ ½"),
    (r"Session #89 derived &#x03A3;&#x2080; independently", "2026-10-15",
     "Σ₀ = a₀/(2πG) is the same number rewritten"),
    # --- retired 2026-10-14 (maintainer): effective-N not propagated; Jeans-knee 10σ read as anti-MOND; RG identity scope
    (r"MOND(&apos;|\\'|')s required V<sup>&minus;2</sup> at ~10", "2026-10-14",
     "the 10σ excludes a V⁻² law for the Jeans-construction knee, not MOND's transition density (V⁻² by construction under the BTFR)"),
    (r"separately excluded by SPARC alone|categorically rejected regardless", "2026-10-14",
     "γ = 2 is ΔBIC +184 with points independent, ≈ +11 by galaxy (1.6–2.2σ): disfavoured at the threshold, not excluded"),
    (r"permittivity identical to C<sub>&#x03A9;</sub> in closed form\. The Galaxy", "2026-10-14",
     "RG's ε equals the floored Hill C_Ω, not the headline tanh(γ ln(1+x)); they coincide only at γ = ½ with the knee doubled"),
    (r"kept here because this is its citable form", "2026-10-14",
     "a withdrawn magnitude (240×–300,000×) cannot be the citable form; cite the measured exponent −0.16 ± 0.19"),
    # --- retired 2026-10-13 (maintainer): internal-process language read as outside authority; TEST-25 channel; DESI hedge; demo stats
    (r"(pending|gates on|gated on|routed to|GATES ON)\s+(dp|DP)\b|\bdp(\\'|&apos;|')s call|dp-gated|dp-adopted", "2026-10-13",
     "bare 'dp' is never introduced on most pages; write 'the project lead' (glossary #dp keeps the handle)"),
    (r"visiting researcher|external-reviewer (pass|point)|external researcher review", "2026-10-13",
     "these were simulated visitor personas, not outside reviewers; say 'simulated-visitor ... persona' or 'simulated-reader review pass'"),
    (r"(?<![-\w])[Vv]isitor (researcher |graduate-physics |grad-student )?(persona|pass)\b", "2026-10-13",
     "persona attributions must say 'simulated-visitor' so they cannot read as external review"),
    (r"slow simple-μ return that Cassini excludes", "2026-10-13",
     "Cassini constrains the EFE-induced Q2, set near the Sun's MOND radius (~7,000 AU), not the high-g return tail (McGaugh's nu fails too)"),
    (r"should be re-verified against the\s+paper", "2026-10-13",
     "DESI DR2 (w0, wa) read from Table 5 of arXiv:2503.14738 v3 on 2026-10-13"),
    (r"8 approaches on 0\.499", "2026-10-13",
     "the 'phase transition (none exists)' row is excluded: 7 approaches, 0.501 +/- 0.010"),
    # --- retired 2026-10-12 (maintainer): Ciocan sigmas divided 95% CIs; A2ACW desk counterfactual read as a run; cH0/2pi "inside +/-5%"; TEST-04a badge; GW bound; tool-index drift
    # 2026-10-19: the 10-12 rule here retired "9.4σ/9.8σ" and so enforced a double conversion (the explorer's script
    # already used 1σ = 0.051/0.061). Inverted: the doubled values are now the retired ones. A lint can lock in an error.
    (r"~1[89]\s*(σ|&sigma;|&#x03C3;) low", "2026-10-19",
     "Ciocan level rows are 9.4σ / 9.8σ (1σ = 0.051 low side, anchor carried); ~19σ/~18σ converted the 95% CI twice"),
    (r"anchor-dominated", "2026-10-12",
     "the a0(z) slope is anchor-free (adding the anchor moves n by 0.05); the row is estimator-dominated"),
    (r"surveys disagree|disagree with each other by more than either", "2026-10-12",
     "RC100 (n = 0.0 +/- 0.5) is 1.4 sigma from Ciocan's bins; its error is too wide to test either"),
    (r"Result: (<strong>)?0 of 6", "2026-10-12",
     "the temporal-asymmetry 0/6 was a desk counterfactual, not a run"),
    (r"0 / 6 caught", "2026-10-12",
     "the temporal-asymmetry 0/6 was a desk counterfactual, not a run"),
    (r"The methodology finding is: AI-AI", "2026-10-12",
     "its support is observational and a desk counterfactual; the 'more capable agents' half is untested (post-cutoff arm unrun)"),
    (r"inside the (&plusmn;|±)5% the H", "2026-10-12",
     "cH0/2pi sits 3-12% below the fit's scale; closing 12% needs H0 ~ 76, above SH0ES"),
    (r"1\.5σ on Registered fσ₈", "2026-10-12",
     "1.5 sigma is prediction-to-data; the registered threshold is exceeded by ~0.9 sigma"),
    (r"\|α\| < 3\.0 × 10⁻¹⁵", "2026-10-12",
     "the GW170817 bound is asymmetric: -3e-15 < dc/c < +7e-16"),
    (r"Jump to First Encounter \(Step 2\)", "2026-10-12",
     "beginners read 'Step 2' as having skipped Step 1"),
    (r"1,703-phenomena table", "2026-10-12",
     "1,703 is a session counter; the explorer has 23 curated rows and the source table is unpublished"),
    # --- retired 2026-10-10 (maintainer): TEST-04a LRG1 ratio was DESI Table 9's QSO row; plotter "RAR-preferred" simple-nu; 35-min path total
    (r"1\.16\s*(±|&plusmn;|\\u00B1)\s*0\.13", "2026-10-10",
     "DESI DR1 Table 9 LRG1 ratio is 1.09 +0.12/-0.14; 1.16 +/- 0.12 is the QSO row (z = 1.49), carried as LRG1 since 2026-05-26"),
    (r"0\.550\s*(±|&plusmn;)\s*0\.062", "2026-10-10",
     "LRG1 fsigma8 is 0.4733 x 1.09 = 0.516 +0.057/-0.066, not 0.550 +/- 0.062"),
    (r"sits 2\.1(σ|&sigma;) (below|from) (LRG1|the data|the DESI)", "2026-10-10",
     "on the LRG1 row the prediction sits ~1.5 sigma from the data, not 2.1"),
    (r"the RAR-preferred choice", "2026-10-10",
     "the plotter's green curve is the simple-nu of Famaey & Binney 2005, not the RAR fit function (McGaugh's nu)"),
    (r"~35 min", "2026-10-10",
     "the five Beginner step times sum to 37 min"),
    # --- retired 2026-10-06 (maintainer): wide-binary "split"; lensing 1.71x; summary-box "decisive on real data"; QM-interpretation overreach
    (r"(each|whichever) outcome spares one (branch|realization)|leaves the (acceleration )?branch standing", "2026-10-06",
     "at the SPARC gamma the acceleration branch is already failed via TEST-25 (same QUMOND+EFE physics); DR4 is a one-parameter squeeze, not a split"),
    (r"1\.71\s*(×|&times;|x)", "2026-10-06",
     "the lensing kill of 1/Omega_b was read off a represented curve; on the published KiDS bins it is census-conditional; the dSphs carry the kill"),
    (r"Every decisive test it ran on real data", "2026-10-06",
     "row #3 (gamma=2 pin) is at threshold galaxy-level and row #6 is a construction check; say 'every test it executed'"),
    (r"\(Oort, LLR\)", "2026-10-06",
     "Oort is a knee-specific statement (published knee only); the TEST-02 density branch leads with 'identically null in the ratio; excluded by SPARC and LLR'"),
    (r"Every QM interpretation", "2026-10-06",
     "false of Many-Worlds, relational QM, Bohm, GRW/CSL, decoherence; state it as the framework's motivating wager"),
    # --- retired 2026-09-25 (maintainer): CHSH bound attributed to no-signaling; fixed-radius n -> 2 as universal; stale bottom line
    (r"every no-signaling construction built", "2026-09-25",
     "the CHSH S <= 2 bound comes from locality (factorisability), not no-signaling; quantum and PR boxes are no-signaling above 2"),
    (r"deep limit is n \u2192 2 \(verified numerically", "2026-09-25",
     "n -> 2 holds only at a common measurement radius; a Keplerian law gives n = 2/(1-alpha), 4 at fixed g_bar"),
    (r"best results come from\s+cosmology", "2026-09-25",
     "the ledger has the cosmology sector as LCDM where it lives and excluded where it differs"),
    (r"exclude[sd]? the (ceiling|cap) under every (convention|choice)\b", "2026-09-25",
     "lensing excludes all three Omega_m-based caps; the no-CDM 1/Omega_b = 20.3 cap passes at 1e-14 with allowances"),
    # --- retired 2026-09-24 (maintainer): meta-statements that drifted; cross-sector gamma; EFE direction; rho_crit restatement
    (r"independently pin the framework", "2026-09-24",
     "galaxy gamma=0.489 is acceleration-keyed, cosmology gamma is mean-density-keyed: two variables, not one parameter pinned twice"),
    (r"algebraic fact (with|&mdash;) two faces|algebraic fact with two faces", "2026-09-24",
     "same: one special point of the function family in two different variables"),
    (r"defend the ratio to the Newtonian residual", "2026-09-24",
     "Newton's residual is +0.021 +/- 0.027 under Plummer; quote residuals, not ratios"),
    (r"a transferable null in the literature&apos;s own units", "2026-09-24",
     "the GC window is L2-conditional (under L3 18/27 verdicts flip, no knee passes)"),
    (r"Three of those four labels are absent", "2026-09-24",
     "Kill Criterion Triggered / Failed / Ceiling Exceeded / Empty Intersection are all in the legend now"),
    (r"(on|over) highlighted\s+terms on any page", "2026-09-24",
     "hover terms are deployed on 2 pages, not all"),
    (r"Without the EFE the figure would be ~18%|is the EFE-free figure", "2026-09-24",
     "~18% in v = sqrt(1.4) is the EFE-INCLUDED QUMOND number; without the EFE the boost is several times larger"),
    (r"sign of the exponent is inverted|The exponent is inverted, the magnitude", "2026-09-24",
     "restated 2026-08-28: measured knee is velocity-independent; V^+2 is a wrong exponent (~11 sigma), 240-300,000x withdrawn"),
    (r"&#x03B3; \(gamma\) is the single parameter that determines", "2026-09-24",
     "gamma = 2/sqrt(N_corr) is refuted (wrong-sign correlation); state it as the proposal"),
    (r"The six tools above are grounded in", "2026-09-24",
     "three of the six are Audited-Negative on their own pages"),
    # --- retired 2026-09-19 (maintainer): pre-audit holdouts one click off the main path
    (r"2&#x03C0; factor arises from the spherical geometry", "2026-09-19",
     "the literal Hubble-sphere computation gives cH0/2, not cH0/2pi; no argument derives the 2pi"),
    (r"makes the Born rule necessary rather than", "2026-09-19",
     "Gleason's premises are non-contextuality + additivity, not coherence conservation; the page is a reparametrization"),
    (r"Quantum speedup = coherent parallelism", "2026-09-19",
     "the resource is interference, not parallel evaluation"),
    (r"The two formulations are equivalent\.", "2026-09-19",
     "xi(rho) is undefined; the forced equivalence holds for any exponent, so 1/phi carries no content"),
    (r"No dynamics, no governing equation", "2026-09-19",
     "false of MOND since AQUAL (1984) / QUMOND (2010)"),
    (r"Every (experiment|prediction) has an? (explicit )?kill criterion(?! field)", "2026-09-19",
     "measured 2026-09-18: 2 of 26 well-formed, 11 with no numeral, TEST-07 'not falsifiable as stated'"),
    (r"<strong>4 criteria cannot fire</strong>", "2026-09-19",
     "a count over 8 hand-picked examples; must carry its denominator"),
    (r"after 20\+ multi-messenger events", "2026-09-19",
     "the archive registration says 50+ events and states a 3-sigma sample size"),
    (r"no instrument has\s+yet been pointed at", "2026-09-19",
     "LIV searches have looked at absolute time for 20 years; artifact 2 is Audited-Negative"),
    # --- retired 2026-09-18 (maintainer): the TEST-09 ceiling sweep was executed; two C's disambiguated
    (r"registered sweep has not yet been executed", "2026-09-18",
     "the TEST-09 half was executed 2026-09-18 (which_C_carries_the_floor.py); the kill is convention-dependent"),
    (r"C\(&#x03C1;<sub>crit</sub>\)&nbsp;&#x2248;&nbsp;0\.88(?!.{0,120}(&#x03B3;|gamma|γ))", "2026-09-18",
     "every C(rho_crit) statement must carry its gamma: tanh(g*ln2) = 0.88 at g=2 but 0.33 at the SPARC-fitted 0.49"),
    (r"C\(ρ_crit\) = 0\.88, not 0\.5", "2026-09-18",
     "same: the 0.88 is the gamma=2 value and inherits the pin the RAR refuted at dBIC = +184"),
    (r"tags: \['Artifact Lesson'\]", "2026-09-18",
     "'Artifact Lesson' is an operational state, not a difficulty; it belongs in the Status slot, not Level"),
    (r"and a level tag so you know what you", "2026-09-18",
     "tool cards now carry three labelled slots (Kind / Level / Status), not two"),
    (r"Kill criterion \(fσ₈(&nbsp;|\s)*(&gt;|>)(&nbsp;|\s)*0\.46\) triggered", "2026-07-14",
     "registered fσ₈ criterion was met at ~1.5σ against a >3σ bar: underpowered, not triggered"),
    (r"\(TEST-03\) tripped its kill criterion", "2026-07-09",
     "TEST-03 was never run as registered; R² = 0.14 was a SPARC-scale morphology term"),
    (r"lack of instruments, not refutation", "2026-09-11",
     "contradicts the six executed refutations; both reasons are true (lost where testable, untested where not)"),
    (r"high coherence\s+at almost all densities", "2026-09-11",
     "wrong: low γ gives LOW C (γ = 0.01: C(10¹⁰ρ_crit) = 0.23)"),
    (r"There is no Tier 3", "2026-09-11", "the Test Roadmap has cost tiers 1–4; readiness is labelled separately"),
    (r"STRUCTURAL, not tuned", "2026-09-11",
     "the 1/Ω_m normalization is a choice; lead with B = 13.7 > both conventions"),
    (r"performs exactly at chance", "2026-09-11", "J = 0 on controls selected to trip prior art is a design degeneracy"),
    (r"Synchronism and MOND nearly overlap", "2026-09-11", "the plotter's real curve sits on the Newtonian line"),
    (r"TEST-08 / TEST-03s", "2026-09-11", "site TEST-08 is the Freeman-law card; the environment run is S177 / TEST-03s"),
    (r"Three parameters\. Every scale", "2026-09-11", "unhedged opener on a page two clicks after 'it did not hold'"),
    (r"13% Error", "2026-09-11", "a₀ offset is H₀-dependent (6–13%) and inside its systematic"),
    (r"Möbius transform of density", "2026-09-11", "in that passage x is an acceleration ratio"),
    (r"DESI DR3 \(2026-07", "2026-09-10", "there is no DESI DR3; DR2 full-shape is unpublished"),
    (r"No construction reaches the\s+Tsirelson bound \(2&radic;2 &asymp; 2\.83\) without signaling\.", "2026-09-11",
     "covers three constructions, not the substrate class (Toner–Bacon 2003 is untested here)"),
    # ---- 2026-09-14 (maintainer; visitor log 2026-09-14 + explorer findings 09-11 / 09-12)
    (r"never won", "2026-09-14", "fit-vs-selection slip: a nesting family is selected if the data land in its allowed region (archive 07-29)"),
    (r"It cannot win", "2026-09-14", "same slip on /for-researchers; archive corrected it 2026-07-29 (nested_submodel_fit_versus_selection.md)"),
    (r"The one equation fits galaxy rotation", "2026-09-14", "the density-keyed equation does not fit; only the acceleration-keyed, fitted-γ version does (= MOND)"),
    (r"\+ 1 theorem\b|1 theorem-level check|theorem executing as designed|A proof, not an experiment", "2026-09-14",
     "Bell bounds local models only; the nonlocal CHSH arms are construction nulls"),
    (r"Most Discriminating — Updated 2026-05-13", "2026-09-14", "stale subtitle on a page with 0 active discriminating tests"),
    (r"why the curve works across quantum to cosmic scales", "2026-09-14", "80-orders unification refuted (S633: saturates within ~1.6 decades)"),
    (r"passes across its (whole )?1σ range", "2026-09-14", "ambiguous; say RG's knee lies below the excluded window and is not excluded"),
    (r"The sector is background-only", "2026-09-14", "a locality-fork perturbation channel exists (archive 08-18, −0.22% fσ₈)"),
    (r"1</strong> untested \(a₀ ~ cH₀", "2026-09-14", "landing Key Claims tally listed a different set of claims than /key-claims"),
    (r"Not a discriminating test vs MOND", "2026-09-14", "TEST-20 is a ~255× lever, self-eliminating-or-tie, already measured (Chae+2021)"),
    (r"VERY HIGH — GR predicts exactly zero correlation", "2026-09-14", "TEST-15 kill (10⁻¹⁶) sits below the best bound ever achieved (~10⁻¹⁵)"),
    (r"Every Tier 2 and Tier 4", "2026-09-14", "the unrunnable rule is a predicate over all tiers, not a tier list"),
    (r"may be unrunnable rather than closed", "2026-09-14", "evolving floor executed on z ≥ 1.5 kinematics and refuted as a reading (explorer 09-11)"),
    (r"SPARC environment analysis \(TEST-03\)", "2026-09-14", "SPARC environment is TEST-01; TEST-03 is the ALFALFA TFR scatter test"),
    (r"no high-z\s+discriminator exists|closes\s+without data|No data was needed", "2026-09-14",
     "the 08-08 closure rested on an a₀(z) disfavored 08-01; executed and refuted 09-11"),
    (r"1\.09 for every|<= 1\.1 for every gamma|&lt;= 1\.1 for every gamma", "2026-09-14", "B_max(z=2) spans 1.002–1.201 over γ ∈ [0.3, 2]"),
    (r"environment-dependent scatter \(p = 5|environment dependence \(p = 5", "2026-09-14",
     "p = 5×10⁻⁶ belongs to the R² = 0.14 Hubble-type term, not the registered amplitude"),
    (r"0 (of 24 designed experiments |executed tests )?could select Synchronism|0 could select Synchronism", "2026-09-14",
     "TEST-09/10 could have selected the framework had the ceiling held; say '0 selected, none still unrun can'"),
    (r"structurally unable to <em>select</em>", "2026-09-14", "TEST-26 would select at γ ≠ ½ in its allowed quadrant; unlikely, not structural"),
    (r"Can only tie or refute", "2026-09-14", "TDG interval is nested, which is not a structural bar on selection"),
    (r"Freundlich et al\. 2022 and Paranjape &amp; Sheth 2022 offer", "2026-09-14", "Freundlich+2022 is a Coma-UDG no-EFE result, not a ΛCDM reading of Chae"),
    (r"positive control has never been run|better described as a false \*?discovery\*? rate|the four artifacts below", "2026-09-14",
     "A2ACW card rebuilt as current state + history; see /for-researchers#a2acw-open-question"),
    # ---- 2026-09-15 (maintainer; visitor log 2026-09-15 + explorer finding 09-14)
    (r"the same corner this sector", "2026-09-15",
     "under-refutation: on the local fluid reading P(k) pins |2γ−1| ≲ 1e-5; the DESI fit holds only for the mean-density reading"),
    (r"almost no perturbation theory", "2026-09-15", "one perturbation theory exists (fluid local horn) and it pins γ"),
    (r"derived from &#x03B3;</li>", "2026-09-15", "MRH-crossing-is-collapse is a restatement; the γ relation is audited-negative"),
    (r"x = g<sub>bar</sub>/a<sub>0</sub> &mdash;\s*the fit is keyed", "2026-09-15",
     "the compander rows solve g_bar = g_obs·μ(g_obs/a0′); keyed on g_bar the same function gives g_bar + 2a0, not MOND"),
    (r"registered kill fired 3\.3σ", "2026-09-15", "3.3σ is prediction–data separation; the registered |Δn| > 0.3 margin is ~1σ under V_flat"),
    (r"framework&apos;s (empirically )?preferred (&#x03B3;|γ)", "2026-09-15",
     "the framework registered γ = 2; γ ≈ ½ is what the galaxy data selected (= MOND)"),
    (r"fit galaxy rotation curves about equally well", "2026-09-15", "the plotter's own chart shows the framework curve failing"),
    (r"the boost ceiling, the Oort limit", "2026-09-15", "the Oort window does not close the density sector on a smoothed reading (09-09)"),
    # ---- 2026-09-16 (maintainer; visitor log 2026-09-16 — the 09-15 auditor fix landed on one page only)
    (r"(external |domain-)?expert\s+audit|a domain expert\s+examined|Expert reviewers have flagged", "2026-09-16",
     "the audit was by LLM agents, not an outside domain expert; canonical count 0 of 9"),
    (r"form failing on its own|the form fails on its own", "2026-09-16",
     "the 2.10× swap changed floor form and knee too; see maintainer/scripts/compander_form_isolation_controls*"),
    (r"SPARC and DESI both select|independently selects &#x03B3; = 0\.487|value both datasets choose", "2026-09-16",
     "γ ≈ ½ is where each sector reduces to MOND/Λ; SPARC σ(γ) = 0.11 — not cross-sector agreement on a constant"),
    (r"Refracted Gravity&apos;s (fitted|published) (knee )?\(?0\.0083\)?(?! M<sub>☉</sub>/pc³ \(its elliptical)", "2026-09-16",
     "0.0083 is RG's elliptical (E0) calibration, Cesare+2022; disc knees 7.4e-4 / 4.3e-3"),
    # ---- 2026-09-17 (maintainer; visitor log 2026-09-17: refutation-side physics + propagation)
    (r"Cassini-safe", "2026-09-17", "McGaugh's RAR ν fails Cassini Q₂ at +15.9–20.9σ on TEST-25's instrument; Q₂ is set near 7000 AU, not by the tail"),
    (r"picks a different (&micro;|µ|μ) and survives", "2026-09-17", "MOND's RAR-preferred IFs fail Cassini as hard as the compander; asymmetry withdrawn"),
    (r"EFE\s*(=|&nbsp;=&nbsp;)\s*0 is preserved exactly|preserves EFE = 0 exactly", "2026-09-17", "linearity gives superposition, not EFE = 0: refraction wherever ∇C ≠ 0"),
    (r"one-line completion[^.]{0,80}conserves\s+momentum|that conserves momentum and is linear", "2026-09-17", "∇·[C∇Φ] = 4πGρ conserves momentum only with striction (net self-force −∫|∇Φ|²∇C/8πG)"),
    (r"boost never turns on", "2026-09-17", "with g = g_N/C, C = γx ≪ 1 is the MAXIMAL boost"),
    (r"regardless of where the binary", "2026-09-17", "MOND's wide-binary prediction is the EFE, location-dependent"),
    (r"placing it in the C≈1 near-Newtonian regime", "2026-09-17", "at the published knee solar-neighbourhood ρ sits far below ρ_crit (C ≈ 3×10⁻⁵)"),
    (r"citable null result", "2026-09-17", "A2ACW is not citable as a null (J = 0 literal / 1.0 steelmanned; circular positive arm)"),
    (r"externally-audited|demoted on human audit", "2026-09-17", "the audits were by LLM agents"),
    (r"Gambini[–-]Pullin, <em>PRL</em>|Sudarsky[–-]Gambini", "2026-09-17", "CPSU = Collins, Perez, Sudarsky, Urrutia & Vucetich"),
    (r"with no human in the loop", "2026-09-17", "a human (dp) oversees direction and the ledger; say AI agents did the work"),
    (r"Net discriminating galaxy tests vs MOND|galaxy-scale discriminators vs MOND", "2026-09-17", "2 discriminated and both selected MOND; say '0 selected Synchronism over MOND'"),
    (r"sets cooperativity to zero", "2026-09-17", "γ ≈ 0.489 is the acceleration-keyed fit; the density-keyed law has its own ΔBIC +2843 result"),
    # ---- 2026-09-21 (maintainer; explorer finding 09-19 a0(z) + visitor logs 09-20/09-21)
    (r"branch \(A\) has been tested\s+and\s+disfavou?red", "2026-09-21",
     "superseded 2026-08-04 (anchor-dominated) and 2026-09-19 (TFR + 41-disc f_DM): non-discriminating; trend ratio not yet run"),
    (r"tests\s+and\s+disfavou?rs", "2026-09-21",
     "Milgrom 2017 puts ~4a0 in tension on six discs; H(z) scaling 'may help constrain', not excluded; 41 discs split by fit method"),
    (r"computed with the argument\s+g(<sub>bar</sub>|_bar)", "2026-09-21",
     "the SPARC fit is mu-form keyed on g_obs (verified in script 2026-09-08); the g_bar-division reading can't reach 0.1437 dex"),
    (r"most\s+rigorous\s+self-audit", "2026-09-21", "unmeasured superlative about the framework's own audit"),
    (r"misclassifies\s+every\s+known\s+positive", "2026-09-21", "overstatement; state the measured count with its denominator"),
    (r"Interactive Tools index grouping and\s+level\s+tag", "2026-09-21",
     "Artifact Lesson is not a level; the index carries it in its own Status slot (fixed 2026-09-18)"),
    (r"off-scale\s+left", "2026-09-21",
     "BCS gamma ~6e-4 is on-scale at the left edge of the linear 0-4 axis, indistinguishable from 0"),
    (r"Not by design\s*(—|&mdash;)\s*by observation", "2026-09-21",
     "First Encounter Part D: fitted γ clustering is not an unqualified observation; say fitted, not predicted"),
    (r"This is where phase transitions\s+happen", "2026-09-21",
     "tanh is smooth: the γ ≈ 1 band is a crossover, not a phase transition"),
    (r"r = 0\.982 correlation with coherence", "2026-09-21",
     "r is with fitted γ and a Z-polynomial null matches it; not a correlation with coherence"),
    (r"phenomena at the quantum-classical edge", "2026-09-21",
     "related-link blurb stated the γ ≈ 1 clustering with no fitted-not-predicted caveat"),
    (r"privileged-frame error", "2026-09-21",
     "collides with the framework's own preferred frame (absolute-time substrate); say observer-privilege"),
    (r"These are testable engineering claims", "2026-09-21",
     "contradicted the claim's own 'untestable as stated' badge"),
    (r"Every prediction has a falsification criterion", "2026-09-21",
     "refuted by the 2026-09-18 count (2 of 26 well-formed, 11 without a number)"),
    # ---- 2026-09-22 (maintainer; explorer finding 09-21 CRT-vs-LG/Zeno + visitor log 09-22 grad/researcher passes)
    (r"Nobody has yet set the claim\s+against", "2026-09-22",
     "Kochen-Specker was set against it: Peres-Mermin, 0/512 non-contextual assignments (2026-07-08, PREDICTIONS B1)"),
    (r"Leggett(&ndash;|–|-|\s)Garg[^.]{0,160}?(is|are) the kill test", "2026-09-22",
     "LG kills only the non-invasive reading; Zeno forces a full phase reset, which is the Lüders rule (standard QM)"),
    (r"not\s+metaphorical", "2026-09-22",
     "asserted the non-invasive CRT reading, refuted by the quantum Zeno effect (Itano 1990, 40σ at n = 8)"),
    (r"does not decide the Cassini\s+verdict", "2026-09-22",
     "inverted: the direct tail is ~1e5x the Cassini Q2 acceleration at Saturn and is ephemeris-disfavoured in the literature"),
    (r"cross-validated by an independent\s+free-Hill", "2026-09-22",
     "the Hill fit uses the same SPARC data; SPARC (x ≲ 10) does not constrain the asymptotic return exponent"),
    # ---- 2026-09-22 (maintainer): pages never edited since the 2026-02-21 initial commit
    (r"status=\"(validated|supported)\"", "2026-09-22",
     "deprecated badges (dp 2026-05-28); three live ones survived on pages the audit never reached"),
    (r"status: '(validated|supported)'", "2026-09-22",
     "data-array form of the deprecated badges (prediction-tracker carried 11 such rows); re-badge per PREDICTIONS.md"),
    (r"status=(\{['\"]|')(validated|supported)['\"]", "2026-09-22",
     "deprecated badges in brace/single-quote JSX form (the double-quote form is the rule above); in a legend, write the names as text"),
    (r"Derived from first principles", "2026-09-22",
     "a0 = cH0/2pi is Milgrom's 1983 coincidence restated (Bucket 3); the named calculation gives cH0/2"),
    (r"&larr; derived", "2026-09-22",
     "a0 = cH0/2pi is a reparametrization, not a derivation"),
    (r"Comparable fit \(γ = 2\)", "2026-09-22",
     "gamma = 2 loses to MOND by DeltaBIC +184 on SPARC"),
    (r"MOND rejected at 32", "2026-09-22",
     "unaudited Feb-2026 claim; the sigma_int test is underpowered as registered (~3x pipeline dependence)"),
    (r"empirical results stand\s+regardless", "2026-09-22",
     "the ALFALFA-SDSS test was never run as registered; sigma_int is pipeline-dependent"),
    (r"(0\.489|0&#x2080;?\.489) is exactly MOND|&gamma; = 0\.489 is exactly", "2026-09-23",
     "gamma = 1/2, not 0.489, is exactly the simple mu; 0.489 is SPARC's fitted offset from 1/2"),
    (r"0\.011 apart in", "2026-09-23",
     "both standard models sit at gamma = 1/2 (zero apart); 0.011 is a fit offset, not a model gap"),
    (r"a crossing of w(&nbsp;| )=(&nbsp;| )&minus;1 &mdash; in all four", "2026-09-23",
     "w0 > -1, wa < 0 is mostly thawing; a crossing needs w0 + wa < -1; the lock excludes thawing too"),
    (r"No algebraic chain from\s+C\(", "2026-09-23",
     "two couplings (division, RG field equation) now exist; the density law was fitted through them"),
    (r"cleaner kill: it fails as soon as the data prefer thawing", "2026-09-27",
     "the DE family contains Lambda at gamma = 1/2; its kill fires only when LCDM's does"),
    (r"one live falsifiable position", "2026-09-27",
     "the DE sign lock cannot be refuted without refuting LCDM; live but not discriminating"),
    (r"Coherence function fits within observational scatter", "2026-09-27",
     "fits only at free gamma ~ 0.49 (MOND simple mu); gamma = 2 refuted (dBIC +184)"),
    (r"Environment-dependent effects visible", "2026-09-27",
     "TEST-08 environment null: r^2 = 0.0001, N = 141"),
    (r"core result \((&#x03B3;|γ) (&#x2248;|≈) 1 clustering\) holds", "2026-09-27",
     "gamma ~ 1 is a Debye theta_D reparametrization; no N_corr procedure; Z-polynomial null matches"),
    (r"0\.0185 / &lang;compat", "2026-09-27",
     "B4 1/<C> holds only by construction (weight multiplier); reparametrization"),
    # --- retired 2026-09-29 (maintainer): gamma=2 pin scored at galaxy level (N_eff ~ 150 measured); TEST-02 status unified;
    #     1/Omega_b clears the dwarf cap on SPARC; Coherence Explorer "degeneracy" was a pan; protocols without a rate; Sigma_0 0.5%
    (r"conservative(:)?\s*(&ge;|≥|≈)\s*\+?33", "2026-09-29",
     "the 5.6x discount was a guess; galaxy-block bootstrap gives N_eff ~ 150 and dBIC ~ +11 for the gamma=2 pin"),
    (r"effective N\s*≈\s*500", "2026-09-29", "same: N_eff measured ~150, not assumed 500-1000"),
    (r"\+184 is decisive[^<]*\.", "2026-09-29", "decisive only under point independence; scored by galaxy it is at the threshold"),
    (r"no candidate cosmic ratio", "2026-09-29", "1/Omega_b = 20.3 clears the 13.7 dwarf cap on SPARC; it dies on lensing, one decade lower"),
    (r"degeneracy that makes\s+SPARC", "2026-09-29", "rho_crit is a pan, gamma a shape; both identified through the knee; the degeneracy is with MOND's mu"),
    (r"Six experimental protocols have been designed", "2026-09-29", "no rate parameter: experiment classes, not protocols"),
    (r"0\.5% match</strong>", "2026-09-29", "0.5% needs H0 ~ 70; the site-standard 67.4 gives 4%, and the target is uncertain 2x"),
    (r"Pending External Adjudication \(2026\)", "2026-09-29", "TEST-02 carries one status string on every surface (see the Tier 1 card name)"),
    # --- retired 2026-10-04 (maintainer): variants the 09-29 "conservative 33" rule missed by word order; cosmology table
    (r"(&#x2265;|≥)\s*\+?33\s*\(conservative|conservative threshold\s*(&#x2265;|≥)\s*33", "2026-10-04",
     "the 33 was a guessed discount; galaxy-block bootstrap gives ~+11"),
    (r"Post-hoc; kill triggered;", "2026-10-04", "TEST-04a's registered kill was not met (~1.5 sigma on f sigma_8, underpowered as registered)"),
    (r"is emergent, not fundamental", "2026-10-08",
     "a0 = cH0/2pi is a known numerical coincidence (Bucket 3), not shown to be emergent; the density equation has no a0"),
    # --- retired 2026-10-09 (maintainer): hard-coded path totals; TEST-26 win branch; TEST-03 "passing"; same-C; CDM-consistent
    (r"Beginner Path[^<\n]{0,20}Step \d of \d", "2026-10-09",
     "step totals are computed from lib/paths.ts (PathNav / beginnerLabel); hard-coded '1 of 6' sat on a 5-step path"),
    (r"not impossible by construction|wins only if\s+the data move", "2026-10-09",
     "TEST-26 has no framework-specific win branch: wCDM fits the locus to dchi2 <= 0.42 at DR3 (explorer 10-08)"),
    (r"already-passing result", "2026-10-09", "the 51% TFR result is an in-sample MOND-TFR fit (S593), not a framework prediction"),
    (r"same coherence value <strong>C\(&rho;\)</strong> used everywhere", "2026-10-09",
     "three C's: the galaxy fits use C_g/C_a, not C_rho; see Which C?"),
    (r"<strong>CDM-consistent</strong>|\(CDM-consistent[,)]|dex: CDM-consistent", "2026-10-09",
     "0.086 matches only the source session's own 0.085; Desmond 2017 abundance matching gives ~0.25 dex; verdict suspended"),
    (r"color: '#2ecc71' }}>CONFIRMED</td>", "2026-09-27",
     "no CONFIRMED status cells on the coupling experiment; B4 is a reparametrization"),
    # --- retired 2026-10-16 (maintainer): lead sentences that lagged their own badges; drifting referents
    (r"reframe generates\s+different ones", "2026-10-16",
     "no quantum-sector candidate differs from standard physics; /measurement-without-observers says No Differing Prediction"),
    (r"coherence function predicts where and why", "2026-10-16",
     "the galaxy transition scale is fitted (C_g = MOND's mu), not predicted"),
    (r"follows from Synchronism(&apos;|')s coherence function", "2026-10-16",
     "a0 = cH0/2pi is posited by dimensional analysis; C(rho) contains no a0"),
    (r"1,703 fitted (γ|&#x03B3;) values|1,703 phenomena validated|Chemical phenomena analyzed", "2026-10-16",
     "1,703 is a session counter (type = session - 137), not a census of phenomena or of fitted gamma values"),
    (r"14,435-object", "2026-10-16",
     "TEST-03 registered on the 14,585-galaxy cross-match; 14,435 is the post-cut sample that was run (for a morphology statistic)"),
    (r"step 5 of 6", "2026-10-16", "the Beginner Path has 5 steps"),
    (r"lab-data refutation|ephemeris, and laboratory data", "2026-10-16",
     "none of the six refutations is laboratory data; B1 is a simulation run"),
    (r"is consistent with CDM, not a constraint", "2026-10-16",
     "CDM verdict on sigma_int = 0.086 is suspended (Desmond 2017 ~0.25 dex)"),
    (r"specifically is not yet computed", "2026-10-16",
     "direct tail computed 2026-10-15: gamma >= 0.87 at 3 sigma on EPM2011"),
    (r"PCI\* = 0\.31,? Casali|\(PCI\* = 0\.31, Casali", "2026-10-16",
     "the PCI* = 0.31 cut-off is Casarotto et al. 2016; Casali et al. 2013 introduced PCI"),
    # --- retired 2026-10-18 (maintainer): retracted gamma ~ 1 boundary; self-critical headline overreach; overlapping tally
    (r"(boundary|regime boundary)(</em>)? where chemistry and (biology|collective)", "2026-10-18",
     "gamma ~ 1 boundary retracted on /gamma-boundary 2026-08-09; chemistry gammas were fitted near 1, nothing in C singles it out"),
    (r"every decisive\s+test it ran|failed every decisive test|lost every test it executed", "2026-10-18",
     "row #3 is at threshold at galaxy level and row #6 is a construction check; use the scoped 'no prediction that differs from MOND or LCDM survived'"),
    (r"3 state a significance at all", "2026-10-18",
     "overlapping flags summed to 17 of 26; use the disjoint 2 + 2 + 11 + 11 = 26"),
    (r"N<sub>corr</sub> can reach millions", "2026-10-18",
     "crystal example is N_corr = 10^24 on /gamma-parameter; no N_corr protocol exists"),
    (r"Synchronism makes no statement on H₀\. If", "2026-10-16",
     "a0 = cH0/2pi ties a0 to H0; say it offers no resolution of the tension"),
    # Added 2026-11-13 (graduate persona): C + ½xC′ is the AQUAL result of the acceleration-keyed action; the density-keyed
    #     action C(ρ)|∇Φ|² gives ∇·(C∇Φ) = 4πGρ plus striction.
    (r"C \+ &frac12;xC&prime;[^\n]{0,200}\n?[^\n]{0,120}C\(&rho;\)\|&nabla;&Phi;\|&sup2; as its kinetic term", "2026-11-13",
     "mu_eff = C + x C'/2 comes from the acceleration-keyed (AQUAL-type) action, not from C(rho)|grad Phi|^2", True),
    # Added 2026-11-13 (explorer 11-12): the ~10^4 solar boost is the V^2 units slip; the archive's 0.028 V^0.5 gives 2.7-10.5.
    (r"of order 10<sup>4</sup> in the\s+solar", "2026-11-13", "archive calibration 0.028·V^0.5 gives 2.7–10.5 in g at the Sun; 10^4 was the V² slip"),
    # Added 2026-11-13 (researcher persona): the in-house mock conversion of Saad & Ting's 1.00 is off the page until the authors see it.
    (r"maps to a true &#x03B3; of about 1\.3", "2026-11-13", "unverified conversion of named authors' result; keep it in the finding, not the page body"),
    # Added 2026-11-13 (researcher persona): the framework's own local substrate was run on CHSH (S = 1.85).
    (r"mostly untested picture of reality|as an ontology that is mostly untested", "2026-11-13",
     "the local substrate was run on Bell (S = 1.85 <= 2); only hidden-communication substrates are untested"),
    # Added 2026-11-13 (graduate persona): the 0.77 rho_crit/gamma asymptote is 13% / 7% low against the exact inflection.
    (r"15% low at &#x03B3; = 1 and 8% low", "2026-11-13", "13% / 7% against the exact inflection (0.889, 0.416 rho_crit)"),
    # --- retired 2026-11-14 (maintainer; explorer 11-13 + visitor 11-14 graduate/researcher personas)
    (r"crosses the coherence knee at the published calibration|at the published calibration no galaxy", "2026-11-14",
     "held only at the 0.029·V² units hybrid; at the archive's 0.028·V^0.5, 45/122 SPARC galaxies cross the knee"),
    (r"needs a boost ≥ 13\.7; fails under either floor", "2026-11-14",
     "13.7 is one disc's maximum; at Ω_m/Ω_b = 6.39 none exceed after the trials correction (BOUNDED_BOOST_JOINT)"),
    (r"Gaia can see that; a confirmed Newtonian null would exclude those knees", "2026-11-14",
     "a uniform density-keyed boost is absorbed into close-binary-calibrated masses (TEST-02 γ_g ≡ 1); only the Oort limit sees it"),
    (r"<span>Audited claims surviving:", "2026-11-14", "label the cell as LLM-audit verdicts from an uncalibrated instrument"),
    (r"the full 80-minute read", "2026-11-14", "Honest Assessment is ~30,000 words, ~2 hours"),
    (r">Genuine Contributions<|>Discovery Rate<", "2026-11-14", "47 / 1.4% are internal-consistency survivors, not discoveries (landing)"),
    (r"First working AI-to-AI adversarial peer review|First sustained autonomous AI research program", "2026-11-14",
     "unsurveyed priority claim; the audit's measured specificity is 0/6"),
]

# Numbers that may appear only with their qualifier nearby (within CONTEXT_LINES lines either side).
# Added 2026-10-04: the 09-29 "every +184 passage" sweep missed 15+ lines (Test Roadmap B2, glossary, tracker);
# a retired-phrase list cannot catch an unqualified number, only a context requirement can.
CONTEXT_LINES = 3
REQUIRES = [
    # Added 2026-11-13 (explorer 11-12): ~3.5×10⁴ at the Sun exists only under the V² units slip, unfloored. Say so on the line.
    (r"3\.5(&times;|×)10(<sup>4</sup>|&#x2074;|⁴)", r"slip|V&sup2;|V²|0\.029|unfloored|Corrected|until 2026",
     "2026-11-13", "~3.5e4 solar boost is the 0.029·V² units slip (unfloored); the archive's 0.028·V^0.5 gives 2.7–10.5", 1),
    # Added 2026-11-08 (explorer 11-07): every in-house Cassini sigma is at pinned M/L; say so on the line.
    (r"14\.5(&ndash;|–)19", r"pinned|M/L", "2026-11-08", "in-house Cassini sigmas hold M/L pinned; about 10 sigma at gamma = 3 with Upsilon free at 0.1 dex", 0),
    # Added 2026-11-05 (explorer 2026-11-04): the density fit's boost ~ rho^-0.10 is g_bar leaking through rho (corr +0.84);
    #     at fixed g_bar the partial slope is +0.003 (CI -0.022..+0.027). Any surface quoting the response must say so, same line.
    (r"(&#x03C1;|\u03C1|ρ)(<sup>|\^)(&minus;|−|-)0\.10", r"g<sub>bar|g_bar|fixed g",
     "2026-11-05", "rho^-0.10 is the fit's response; say on the same line that it is g_bar's (partial +0.003 at fixed g_bar)", 0),
    # Added 2026-10-30: the EFE-free corner gamma ~ 0.87-0.95 is closed by the GC statistic (10.6 sigma vs MOND+EFE, pre-registered).
    (r"0\.87(&ndash;|–)0\.95", r"clos(ed|es)|globular|cluster|GC",
     "2026-10-30", "EFE-free corner gamma 0.87-0.95: name the globular-cluster result (~3 sigma disfavoured, mass-model conditional, 2026-10-31; not 'closed')"),
    # Added 2026-11-11: RG's published parameters were run on SPARC, not on the sample they were fitted to.
    (r"&chi;&sup2;/N = 188", r"not as a property|DiskMass fits",
     "2026-11-11", "RG at its published parameters: say it is this site's solver on another sample, with no reproduction of the published fits", 6),
    # Added 2026-11-07 (explorer 2026-11-06): MOND's delta = 4 Cassini pass held a0 fixed. Any delta = 4 / delta >= 4 near Cassini
    #     must say whether a0 was fixed or refit.
    (r"(δ|&delta;) (≥|=|&ge;) 4", r"refit|profiled|fixed|held",
     "2026-11-07", "delta = 4 and Cassini: say whether a0 was held fixed or refit to SPARC (at refit a0, delta = 4 fails at +9.2 sigma)", 0),
    # Added 2026-10-27: the footer read a bare "6 refutations executed" while /honest-assessment claimed it carried the qualifier.
    (r"<strong>6 refutations executed</strong>", r"4(&ndash;|–)8 under rules on file|under the current counting rule",
     "2026-10-27", "the footer/scoreboard count must carry its range (4-8 under rules on file since 2026-11-06) on the same surface", 3),
    # Added 2026-10-24 (explorer 2026-10-23 finding): 0.086 is the residual of an in-sample photometric mass model.
    (r"0\.086(?!\d)", r"not a BTFR scatter|independent of V|not a Tully",
     "2026-10-24", "0.086 dex: say it is not a BTFR scatter / independent of V on the same surface"),
    (r"Desmond[^\n]{0,300}0\.061|0\.061[^\n]{0,300}Desmond", r"log V",
     "2026-10-24", "Desmond 2017's 0.061 / 0.064 / 0.029 are in log V; 0.25 dex is log M_b", 0),
    (r"(BIC|&#x0394;BIC|&#x394;BIC|&Delta;BIC)\W{0,30}\+184(?!\d)",
     r"galaxy|N_eff|N<sub>eff|\+11|\+10\.9|independen|history|revision|sanity check|reproduced",
     "2026-10-04", "+184 treats 2,807 points as independent; with the galaxy as the unit it is ~+11 (1.6-2.2 sigma)"),
    # Added 2026-11-09: a₀′/γ's flatness and the 69–70.5 H₀ hold only with γ floating along the Υ valley (PREREG 5a95614).
    (r"1\.07(&ndash;|–|\\u2013)1\.09", r"float|only when|valley|pinned",
     "2026-11-09", "a₀′/γ stays flat only with γ free; at pinned γ = ½ a₀ moves 1.44 → 0.87", 3),
    # Added 2026-11-09: +184 / +10.9 / +11 freeze Υ = 0.5; with one global Υ per law they are +46 / +2.7.
    (r"\+184(?!\d)", r"\+46|frozen|Υ|&Upsilon;|history|revision|sanity check|reproduced|Corrected|until 20",
     "2026-11-09", "+184 holds Υ = 0.5 for both laws; print the own-Υ result (+46 by point, +2.7 by galaxy)", 3),
    (r"(V<sup>\+2</sup>|V\^\+2|V\u207A\u00B2)[^\n]{0,60}(excluded at|excluded)[^\n]{0,12}(~|about )?1[0-2](\.\d)?(&sigma;|&#x03C3;|\u03C3|σ)",
     r"galaxy|N&nbsp;=&nbsp;129|N = 129|bootstrap",
     "2026-10-07", "V^+2 exclusion: state the unit (one point per galaxy, N = 129, galaxy bootstrap) — researcher persona asked"),
    # Added 2026-10-08: the landing's refutation table showed TEST-09 "3.3σ" with no convention qualifier (researcher persona).
    (r"3\.35[^\n]{0,40}3\.75[^\n]{0,40}3\.3(σ|&sigma;|\u03C3)",
     r"convention|underived|derives|derived",
     "2026-10-08", "TEST-09 3.3σ holds at B_max = 1/Ω_m only (underived); does not fire at (Ω_m−Ω_b)/Ω_b or Ω_m/Ω_b", 0),
    # Same-line twin of the +184 rule for table rows (2026-10-08; the 3-line rule passed the landing row on a neighbour's word).
    (r"(BIC|&#x0394;BIC|&#x394;BIC|&Delta;BIC)\W{0,30}\+184 vs MOND",
     r"galaxy|N_eff|N<sub>eff|\+11|independen",
     "2026-10-08", "+184 in a table row: carry 'by point / ~+11 by galaxy' in the same row", 0),
    # Added 2026-10-08: the GC fork is open only under L2; under the action (L3) the registered point is excluded.
    (r"fork</Link>, not a kill|came back a fork|clusters are marginally consistent",
     r"L2|L3|algebraic|action",
     "2026-10-08", "GC fork is open only under L2; under L3 the registered γ = 2 point at the measured knee is excluded (2026-10-08)"),
]

EXEMPT = re.compile(
    r"previously|until 2026|read &ldquo;|this (line|sentence|card|page|row) (read|said)|corrected|withdrawn|retired|"
    r"used to|was wrong|argued the threshold|reworded|corrects the|older notes that said|older wording|older text|moved from the status note|was &ldquo;",
    re.IGNORECASE,
)


EXEMPT_REACH = 250

HISTORY_SUMMARY = re.compile(r"revision|history|verbatim|as it read|previous|before today|earlier wording", re.IGNORECASE)


def in_history_details(text, pos):
    """True if pos sits inside an open <details> whose <summary> marks it as revision history.
    Narrowed 2026-10-08: every <details> was exempt, so live content in collapsible tables (the landing's
    'Which object each refutation tested') carried an unqualified +184 and 3.3σ past the lint."""
    open_at = text.rfind("<details", 0, pos)
    if open_at <= text.rfind("</details>", 0, pos):
        return False
    m = re.search(r"<summary[^>]*>(.*?)</summary>", text[open_at:open_at + 600], re.DOTALL)
    return bool(m and HISTORY_SUMMARY.search(m.group(1)))


def main():
    hits = 0
    files = sorted(p for p in ROOT.rglob("*") if p.suffix in (".ts", ".tsx"))
    for path in files:
        text = path.read_text(encoding="utf-8")
        for rule in RETIRED:
            # Optional 4th field `strict` (added 2026-10-21): skip the EXEMPT words. The w(0) = -1.24 sentence sat
            # beside "Corrected 2026-08-10", an older correction about something else, and that exempted it.
            pat, date, why = rule[:3]
            strict = len(rule) > 3 and rule[3]
            for m in re.finditer(pat, text):
                # Collapsed revision history (<details> … </details>) keeps retired wording verbatim by design
                # (added 2026-09-14, when the A2ACW card's history moved into one).
                if in_history_details(text, m.start()):
                    continue
                start = text.rfind("\n", 0, m.start()) + 1
                end = text.find("\n", m.end())
                line = text[start:end if end != -1 else len(text)]
                # Narrowed 2026-10-19: the whole line was the exemption scope, so a 900-character JSX badge line
                # containing "TEST-04 withdrawn" exempted a retired phrase 600 characters away. Long lines now use a
                # ±EXEMPT_REACH window around the match; short lines behave as before.
                lo = max(start, m.start() - EXEMPT_REACH)
                hi = min(len(text) if end == -1 else end, m.end() + EXEMPT_REACH)
                if not strict and EXEMPT.search(text[lo:hi]):
                    continue
                lineno = text.count("\n", 0, m.start()) + 1
                print(f"{path.relative_to(ROOT.parent)}:{lineno}: retired {date}: {m.group(0)!r}\n    -> {why}")
                hits += 1
        lines = text.split("\n")
        for rule in REQUIRES:
            # Optional 5th field: context window in lines (added 2026-10-08). One-row-per-line tables let a
            # qualifier word in a NEIGHBOURING row satisfy the rule ("Galaxy Rotation" two rows down passed an
            # unqualified +184), so table-row rules use 0 = same line only.
            pat, ctx, date, why = rule[:4]
            nctx = rule[4] if len(rule) > 4 else CONTEXT_LINES
            for m in re.finditer(pat, text):
                if in_history_details(text, m.start()):
                    continue
                lineno = text.count("\n", 0, m.start()) + 1
                window = "\n".join(lines[max(0, lineno - 1 - nctx):lineno + nctx])
                if re.search(ctx, window, re.IGNORECASE) or EXEMPT.search(lines[lineno - 1]):
                    continue
                print(f"{path.relative_to(ROOT.parent)}:{lineno}: unqualified ({date}): {m.group(0)!r}\n    -> {why}")
                hits += 1
        # Added 2026-11-19: JSX decodes only the HTML4 named entities (plus &apos;). An HTML5-only name such as
        # &lesssim; or &propto; is emitted as literal text ("|2γ−1| &lesssim; 10⁻⁵" showed 5× on /dark-energy).
        if path.suffix == ".tsx":
            for m in re.finditer(r"&([a-zA-Z][a-zA-Z0-9]*);", text):
                if m.group(1) not in HTML4 and m.group(1) != "apos":
                    lineno = text.count("\n", 0, m.start()) + 1
                    print(f"{path.relative_to(ROOT.parent)}:{lineno}: entity not decoded by JSX: {m.group(0)!r}\n    -> use the character or a numeric &#x....; reference")
                    hits += 1
    print(f"\n{hits} live retired phrase(s) across {len(files)} files, {len(RETIRED) + len(REQUIRES)} rules.")
    return 1 if hits else 0


if __name__ == "__main__":
    sys.exit(main())
