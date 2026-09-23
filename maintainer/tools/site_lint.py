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
import sys

ROOT = pathlib.Path(__file__).resolve().parents[2] / "src"

RETIRED = [
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
]

EXEMPT = re.compile(
    r"previously|until 2026|read &ldquo;|this (line|sentence|card|page|row) (read|said)|corrected|withdrawn|retired|"
    r"used to|was wrong|argued the threshold|reworded",
    re.IGNORECASE,
)


def main():
    hits = 0
    files = sorted(p for p in ROOT.rglob("*") if p.suffix in (".ts", ".tsx"))
    for path in files:
        text = path.read_text(encoding="utf-8")
        for pat, date, why in RETIRED:
            for m in re.finditer(pat, text):
                # Collapsed revision history (<details> … </details>) keeps retired wording verbatim by design
                # (added 2026-09-14, when the A2ACW card's history moved into one).
                if text.rfind("<details", 0, m.start()) > text.rfind("</details>", 0, m.start()):
                    continue
                start = text.rfind("\n", 0, m.start()) + 1
                end = text.find("\n", m.end())
                line = text[start:end if end != -1 else len(text)]
                if EXEMPT.search(line):
                    continue
                lineno = text.count("\n", 0, m.start()) + 1
                print(f"{path.relative_to(ROOT.parent)}:{lineno}: retired {date}: {m.group(0)!r}\n    -> {why}")
                hits += 1
    print(f"\n{hits} live retired phrase(s) across {len(files)} files, {len(RETIRED)} rules.")
    return 1 if hits else 0


if __name__ == "__main__":
    sys.exit(main())
