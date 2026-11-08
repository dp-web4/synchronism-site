#!/usr/bin/env python3
"""Check that in-site links of the form /page#fragment point at an id that exists on that page.

Added 2026-10-16 after a technical-writer visitor persona found /honest-assessment#h0-tension and
#test04a dropping readers at the top of the site's longest page. Static check only: an id counts if
the literal string id="frag", id='frag', id: 'frag' or id={`...`} prefix appears in the page's
directory (page.tsx plus any co-located component), or in a shared component the page imports.
Dynamic ids (glossary slugs, card ids built from data) are reported as UNVERIFIED, not broken.
Usage: python3 maintainer/tools/fragment_check.py
"""
import pathlib
import re

SRC = pathlib.Path(__file__).resolve().parents[2] / "src"
APP = SRC / "app"
LINK = re.compile(r"""href=["'{`]+(/[a-z0-9\-/]*)#([A-Za-z0-9_\-]+)""")
DYNAMIC_PAGES = {"/glossary"}  # ids generated from lib/terms.ts


def page_text(route):
    d = APP / route.strip("/") if route != "/" else APP
    texts = []
    if d.is_dir():
        for p in d.glob("*.tsx"):
            texts.append(p.read_text(encoding="utf-8"))
    return "\n".join(texts)


def has_id(text, frag):
    pats = [f'id="{frag}"', f"id='{frag}'", f"id: '{frag}'", f'id: "{frag}"', f"id={{'{frag}'}}"]
    return any(p in text for p in pats)


def glossary_ids():
    """Ids the glossary generates from lib/terms.ts: raw term, slug alias (mirrors glossarySlug in app/glossary/page.tsx), letter groups."""
    raw = (SRC / "lib" / "terms.ts").read_text(encoding="utf-8")
    ids = {"start-with-ten"}
    for t in re.findall(r"^\s*term: '(.*)',\s*$", raw, re.M):
        t = re.sub(r"\\u([0-9a-fA-F]{4})", lambda m: chr(int(m.group(1), 16)), t).replace("\\'", "'")
        ids.add(t)
        s = t
        for a, b in [("Δ", "delta "), ("₀", "0"), ("′", " prime"), ("γ", "gamma "), ("η", "eta "), ("ξ", "xi "), ("ρ", "rho ")]:
            s = s.replace(a, b)
        ids.add(re.sub(r"[^a-z0-9]+", "-", s.lower()).strip("-"))
    return ids


ROUTE = re.compile(r"""(?:href=["'{`]+|learnMore: ')(/[a-z0-9\-/]*)["'#`}]""")


def main():
    broken, unverified, ok = [], [], 0
    gloss = glossary_ids()
    # Added 2026-11-08: a technical-writer persona found two 404 learnMore targets and #which-c-which pointing at nothing;
    # both classes passed this script. Routes are now checked, and glossary fragments resolved instead of skipped.
    for f in sorted(list(SRC.rglob("*.tsx")) + [SRC / "lib" / "terms.ts"]):
        for n, line in enumerate(f.read_text(encoding="utf-8").splitlines(), 1):
            for route in ROUTE.findall(line):
                r = route.rstrip("/")
                if r and not (APP / r.strip("/")).is_dir():
                    print(f"NO ROUTE {f.relative_to(SRC.parent)}:{n}: {route}")
    shared = "\n".join(p.read_text(encoding="utf-8") for p in (SRC / "components").rglob("*.tsx"))
    for f in sorted(SRC.rglob("*.tsx")):
        for n, line in enumerate(f.read_text(encoding="utf-8").splitlines(), 1):
            for route, frag in LINK.findall(line):
                if route in DYNAMIC_PAGES:
                    if frag in gloss or frag.startswith("letter-") or has_id(shared, frag) or has_id(page_text(route), frag):
                        ok += 1
                    else:
                        broken.append((f, n, route, frag))
                    continue
                text = page_text(route)
                if not text:
                    continue
                if has_id(text, frag) or has_id(shared, frag):
                    ok += 1
                else:
                    broken.append((f, n, route, frag))
    for f, n, route, frag in broken:
        print(f"BROKEN {f.relative_to(SRC.parent)}:{n}: {route}#{frag}")
    print(f"\n{ok} ok, {len(broken)} broken, {len(unverified)} unverified (dynamic-id pages)")


if __name__ == "__main__":
    main()
