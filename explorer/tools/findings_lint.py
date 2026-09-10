#!/usr/bin/env python3
r"""
findings_lint — a mechanical check for the explorer track's characteristic error.

Motivation (topic `findings-lint-placeholder-and-gamma-tagging.md`, maintainer 2026-09-09):
four published errors in three days share one shape — a conclusion written from a narrative
rather than from the artifact the run produced.  Exhortation has been tried and failed
(the warning "read the registration before executing it" was written the morning before the
error it was meant to prevent).  So: a check that runs in seconds and fails loudly.

Rules
-----
R1 PLACEHOLDER  (error)  An unbackticked ALL_CAPS_UNDERSCORE token, or TODO/TBD/XXX/FIXME/
                PLACEHOLDER/FILLME, anywhere in prose.  Backticked tokens are deliberate code
                references and pass.  Catches `GAMMA2_ROWS` in a results table and
                `SOWHAT_PLACEHOLDER` at the bottom of a session log.

R2 UNTAGGED WINDOW (error)  A *range* of densities/accelerations quoted without the parameter
                that produced it in the same cell or sentence.  A window is only a window at a
                stated gamma (and floor); the 09-07 error was a gamma=2 window compared against
                a gamma=0.489 exclusion band.  Scope: density ranges (M_sun/pc^3, g/cm^3).

R3 UNGROUNDED TABLE  (report) Every numeric token in a markdown table in a finding should be
                greppable in the artifact the finding cites.  Turns the finding into a *view* of
                the run rather than a retelling of it.  Reported as coverage, not a hard fail,
                because derived ratios legitimately do not appear in the artifact.

Usage
-----
  python3 tools/findings_lint.py                       # lint findings/ and logs/
  python3 tools/findings_lint.py path.md [...]         # lint specific files
  python3 tools/findings_lint.py --rule R3 --verbose   # one rule, show every hit
Exit status 1 if any error-class rule fires.
"""
import os
import re
import sys
import glob

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)                       # explorer/

# ------------------------------------------------------------------ masking helpers
FENCE = re.compile(r"^\s*```")
INLINE_CODE = re.compile(r"`[^`]*`")
LINK_TARGET = re.compile(r"\]\([^)]*\)")


def strip_code(line):
    """Blank out inline code spans and link targets so backticked identifiers pass R1."""
    line = INLINE_CODE.sub(lambda m: " " * len(m.group(0)), line)
    return LINK_TARGET.sub(lambda m: " " * len(m.group(0)), line)


def iter_prose(path):
    """Yield (lineno, raw, masked) for lines outside fenced code blocks."""
    infence = False
    with open(path, encoding="utf-8") as fh:
        for i, raw in enumerate(fh, 1):
            if FENCE.match(raw):
                infence = not infence
                continue
            if infence:
                continue
            yield i, raw.rstrip("\n"), strip_code(raw.rstrip("\n"))


# ------------------------------------------------------------------ R1 placeholder
WORD_SENTINEL = re.compile(r"\b(TODO|TBD|XXX|FIXME|PLACEHOLDER|FILLME|LOREM)\b")
# A placeholder is *wordy* on both sides of the underscore.  Physics subscripts (E_QG, M_HI,
# R_GC, W_P20, D_LCDM) have a 1-2 character stem and are the dominant false positive; requiring
# >=3 characters each side drops them without losing GAMMA2_ROWS / SOWHAT_PLACEHOLDER.
SCREAM = re.compile(r"\b[A-Z][A-Z0-9]{2,}_[A-Z0-9]{2,}[A-Z0-9_]*\b(?!\.(?:md|py|txt|json|sh|ts|tsx))")
# all-caps-underscore tokens that are real, frequently-cited artifacts rather than placeholders
R1_ALLOW = {
    "SESSION_FOCUS", "SESSION_PRIMER", "SESSION_MAP", "MEMORY_MD",
    "PREDICTIONS_MD", "CLAUDE_MD", "README_MD",
    "OPEN_QUESTION", "SYMBOL_MAP", "GAMMA_UNIFICATION", "COHERENCE_MODEL",
}


def rule_R1(path, lines):
    hits = []
    for i, raw, masked in lines:
        for m in WORD_SENTINEL.finditer(masked):
            hits.append((i, m.group(0), raw.strip()[:110]))
        for m in SCREAM.finditer(masked):
            if m.group(0) in R1_ALLOW:
                continue
            hits.append((i, m.group(0), raw.strip()[:110]))
    return hits


# ------------------------------------------------------------------ R2 untagged window
NUM = r"\d+(?:\.\d+)?(?:[eE][-+]?\d+)?"
DENS_UNIT = r"(?:M[_☉o]?(?:sun)?\s*/\s*pc\s*\^?3|M☉/pc³|Msun/pc3|g\s*/?\s*cm\s*\^?\s*-?3|g·?cm⁻³|g/cm³)"
# a range: two numbers joined by a dash / en-dash / "to", within ~30 chars of a density unit
RANGE = re.compile(r"(%s)\s*(?:[-–—]|to)\s*(%s)" % (NUM, NUM))
DENS = re.compile(DENS_UNIT)
GAMMA_TAG = re.compile(r"(γ|gamma|\\gamma)", re.I)
# only ranges that are *parameter windows* need a gamma; an observed density range does not.
KNEE_WORD = re.compile(r"(ρ_?c\b|rho_?c\b|ρ_crit|rho_crit|knee|window|envelope|exclusion|excluded|allowed|admits?)", re.I)


def _cells(raw):
    """Split a markdown table row into cells; non-table lines split into sentences."""
    if raw.count("|") >= 2:
        return [c for c in raw.split("|")]
    return re.split(r"(?<=[.;])\s+", raw)


def rule_R2(path, lines):
    hits = []
    for i, raw, masked in lines:
        if not DENS.search(masked):
            continue
        for cell in _cells(masked):
            if not DENS.search(cell):
                continue
            if not RANGE.search(cell):
                continue
            if not KNEE_WORD.search(cell):
                continue
            if GAMMA_TAG.search(cell):
                continue
            hits.append((i, cell.strip()[:90], raw.strip()[:110]))
    return hits


# ------------------------------------------------------------------ R3 ungrounded table
ARTIFACT = re.compile(r"([A-Za-z0-9_./-]+_output\.txt|[A-Za-z0-9_./-]+\.json|[A-Za-z0-9_./-]+\.py)")
TABLE_NUM = re.compile(r"(?<![\w.])(\d+(?:\.\d+)?(?:[eE][-+]?\d+)?)(?![\w])")


def _artifact_text(path, lines):
    """Concatenate every artifact the file names that exists under explorer/."""
    names, text = set(), []
    for _, raw, _m in lines:
        for m in ARTIFACT.finditer(raw):
            names.add(os.path.basename(m.group(1)))
    for n in sorted(names):
        for cand in glob.glob(os.path.join(ROOT, "**", n), recursive=True):
            try:
                text.append(open(cand, encoding="utf-8", errors="ignore").read())
            except OSError:
                pass
        # a .py named alone usually has a sibling _output.txt
        if n.endswith(".py"):
            for cand in glob.glob(os.path.join(ROOT, "**", n[:-3] + "_output.txt"), recursive=True):
                try:
                    text.append(open(cand, encoding="utf-8", errors="ignore").read())
                except OSError:
                    pass
    return names, "\n".join(text)


def _variants(tok):
    """Formatting-tolerant spellings of a number as it might appear in an artifact."""
    out = {tok}
    try:
        v = float(tok)
    except ValueError:
        return out
    out.add(("%g" % v))
    out.add(("%.1f" % v)); out.add(("%.2f" % v)); out.add(("%.3f" % v))
    if v == int(v):
        out.add(str(int(v)))
    if "." in tok:
        out.add(tok.rstrip("0").rstrip("."))
    return {o for o in out if o}


def rule_R3(path, lines):
    names, art = _artifact_text(path, lines)
    if not art:
        return [], (0, 0, names)
    missing, total = [], 0
    for i, raw, masked in lines:
        if raw.count("|") < 2 or set(raw.strip()) <= set("|-: "):
            continue
        for m in TABLE_NUM.finditer(strip_code(raw)):
            tok = m.group(1)
            if len(tok.rstrip("0").replace(".", "")) <= 1:      # 0, 1, 2, 10, 100 — uninformative
                continue
            total += 1
            if not any(v in art for v in _variants(tok)):
                missing.append((i, tok, raw.strip()[:110]))
    return missing, (total - len(missing), total, names)


# ------------------------------------------------------------------ R4 missing artifact
PY_CITE = re.compile(r"([A-Za-z0-9_./-]+\.py)")
_HAVE = None
_OUTS = None


def _index():
    global _HAVE, _OUTS
    if _HAVE is None:
        _HAVE = {os.path.basename(p): p
                 for p in glob.glob(os.path.join(ROOT, "**", "*.py"), recursive=True)}
        _OUTS = {os.path.basename(p)
                 for p in glob.glob(os.path.join(ROOT, "**", "*_output.txt"), recursive=True)}
    return _HAVE, _OUTS


def rule_R4(path, lines):
    """A finding cites a script that exists but saved no `<script>_output.txt` beside it.
    This is the sharp end of R3: without the artifact the finding's numbers exist only in the
    finding, and nothing can check them but a re-run."""
    have, outs = _index()
    hits, seen = [], set()
    for i, raw, _m in lines:
        for m in PY_CITE.finditer(raw):
            b = os.path.basename(m.group(1))
            if b in seen or b not in have:
                continue
            if b[:-3] + "_output.txt" in outs:
                continue
            try:                                              # library modules are not runs
                if "__main__" not in open(have[b], encoding="utf-8", errors="ignore").read():
                    continue
            except OSError:
                pass
            seen.add(b)
            hits.append((i, b, os.path.relpath(have[b], ROOT)))
    return hits


# ------------------------------------------------------------------ R5 ceiling breach
# The floored galaxy-sector law C = Omega_m + (1-Omega_m)tanh(...) has C >= Omega_m = 0.315,
# so it CANNOT produce a boost above 1/Omega_m = 3.17 in g, or a velocity excess above
# 1/sqrt(Omega_m) - 1 = 78.2%.  Any larger figure is necessarily the UNFLOORED variant, and
# must say so.  Added 2026-09-10 after the 09-10 TEST-02 table published +1.8e4% as "the
# framework's published calibration" two days after src/lib/equations.ts was annotated with
# exactly this caution.  This is the only rule here anchored to a physical bound rather than
# to a formatting habit, which is why it can be strict.
B_CEIL, V_CEIL = 3.17, 78.2
FORM_TAG = re.compile(r"unfloor|bare|floorless|no[- ]floor|without the floor|C\s*→\s*0|"
                      r"diverg|vacuum|AQUAL|tanh-only|unregulated|"
                      r"no form tag|untagged|more likely|odds", re.I)
DENS_CTX = re.compile(r"C\(.?rho|C\(ρ|rho_crit|ρ_crit|knee|coheren|boost|Omega_m|Ω_m", re.I)
# a percentage only counts if the line says it is an EXCESS, not a share of a sample
EXCESS_CTX = re.compile(r"excess|deviation|enhanc|boost|anomal|discrepan|velocity|accel", re.I)
SHARE_CTX = re.compile(r"%\s*(?:of|des)\b|per ?cent of", re.I)
SPREAD_CTX = re.compile(r"vari|span|range|scatter|spread|across the sample|×\s*1[0-9]", re.I)
PCT_NUM = re.compile(r"([0-9][0-9,.]*)\s*(?:×|x)?\s*10\s*(?:\^|\*\*)?\s*([+-]?\d+)?\s*%")
PLAIN_PCT = re.compile(r"([0-9][0-9,.]*)\s*%")
SUPER = str.maketrans("⁰¹²³⁴⁵⁶⁷⁸⁹⁻", "0123456789-")
EXP_PCT = re.compile(r"([0-9][0-9,.]*)\s*(?:×|x)\s*10([⁰¹²³⁴⁵⁶⁷⁸⁹⁻]+)\s*%")
BOOST_X = re.compile(r"(?:boost|factor|B_max|B\s*=)\D{0,24}?([0-9][0-9,.]*)\s*(?:×|x)"
                     r"(?!\s*(?:larger|smaller|the |greater|above|below|more))", re.I)


def _val(mant, exp):
    try:
        v = float(mant.replace(",", ""))
    except ValueError:
        return None
    if exp:
        try:
            v *= 10.0 ** int(str(exp).translate(SUPER))
        except ValueError:
            return None
    return v


def rule_R5(path, lines):
    """A velocity excess > 78.2% or a boost > 3.17x quoted in a density-law context with no
    'unfloored/bare' tag on the line.  Under the floored law those values are unreachable, so
    the figure is either the unfloored variant (say so) or wrong."""
    hits = []
    for i, raw, _m in lines:
        if not DENS_CTX.search(raw) or FORM_TAG.search(raw):
            continue
        pct_ok = EXCESS_CTX.search(raw) and not SHARE_CTX.search(raw)
        for m in (EXP_PCT.finditer(raw) if pct_ok else ()):
            v = _val(m.group(1), m.group(2))
            if v and v > V_CEIL:
                hits.append((i, m.group(0).strip(), raw.strip()[:110]))
        stripped = EXP_PCT.sub(" ", raw)
        for m in (PLAIN_PCT.finditer(stripped) if pct_ok else ()):
            v = _val(m.group(1), None)
            if v and v > V_CEIL:
                hits.append((i, m.group(0).strip(), raw.strip()[:110]))
        for m in (BOOST_X.finditer(raw) if not SPREAD_CTX.search(raw) else ()):
            v = _val(m.group(1), None)
            if v and v > B_CEIL:
                hits.append((i, m.group(0).strip(), raw.strip()[:110]))
    return hits


# ------------------------------------------------------------------ driver
RULES = {"R1": ("PLACEHOLDER", rule_R1, "error"),
         "R2": ("UNTAGGED WINDOW", rule_R2, "error"),
         "R4": ("NO SAVED ARTIFACT", rule_R4, "warn"),
         "R5": ("CEILING BREACH", rule_R5, "warn"),
         "R3": ("UNGROUNDED TABLE", rule_R3, "report")}


def main(argv):
    verbose = "--verbose" in argv
    argv = [a for a in argv if a != "--verbose"]
    only = None
    if "--rule" in argv:
        k = argv.index("--rule"); only = argv[k + 1]; argv = argv[:k] + argv[k + 2:]
    targets = [a for a in argv[1:] if not a.startswith("-")]
    if not targets:
        targets = sorted(glob.glob(os.path.join(ROOT, "findings", "*.md"))) + \
                  sorted(glob.glob(os.path.join(ROOT, "logs", "*.md")))

    nerr = 0
    tot = {k: 0 for k in RULES}
    files_hit = {k: set() for k in RULES}
    cov_ok = cov_tot = 0
    worst = []
    for path in targets:
        lines = list(iter_prose(path))
        rel = os.path.relpath(path, ROOT)
        for key, (label, fn, sev) in RULES.items():
            if only and key != only:
                continue
            if key == "R3":
                hits, (ok, total, names) = fn(path, lines)
                cov_ok += ok; cov_tot += total
                if total and len(hits):
                    worst.append((len(hits) / total, len(hits), total, rel, sorted(names)[:2]))
            else:
                hits = fn(path, lines)
            if not hits:
                continue
            tot[key] += len(hits); files_hit[key].add(rel)
            if sev == "error":
                nerr += len(hits)
            show = hits if verbose else hits[:4]
            print(f"\n{sev.upper():7s} {key} {label}  {rel}")
            for h in show:
                print(f"   line {h[0]:>5d}: {h[1]!r}")
                print(f"              | {h[2]}")
            if len(hits) > len(show):
                print(f"   ... {len(hits)-len(show)} more")

    print("\n" + "=" * 78)
    print(f"findings_lint: {len(targets)} files")
    for key, (label, _f, sev) in RULES.items():
        if only and key != only:
            continue
        print(f"  {key} {label:<18s} {sev:<7s} {tot[key]:5d} hits in {len(files_hit[key])} files")
    if cov_tot:
        print(f"  R3 coverage: {cov_ok}/{cov_tot} = {100*cov_ok/cov_tot:.1f}% of table numbers "
              f"found in the cited artifact")
        worst.sort(reverse=True)
        print("  least-grounded tables:")
        for frac, nmiss, total, rel, names in worst[:8]:
            print(f"    {100*frac:5.1f}% missing ({nmiss:3d}/{total:3d})  {rel}  <- {names}")
    print("=" * 78)
    return 1 if nerr else 0


if __name__ == "__main__":
    sys.exit(main(sys.argv))
