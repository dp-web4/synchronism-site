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
]

EXEMPT = re.compile(
    r"previously|until 2026|read &ldquo;|this (line|sentence|card|page|row) (read|said)|corrected|withdrawn|retired|"
    r"used to|was wrong|argued the threshold",
    re.IGNORECASE,
)


def main():
    hits = 0
    files = sorted(p for p in ROOT.rglob("*") if p.suffix in (".ts", ".tsx"))
    for path in files:
        text = path.read_text(encoding="utf-8")
        for pat, date, why in RETIRED:
            for m in re.finditer(pat, text):
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
