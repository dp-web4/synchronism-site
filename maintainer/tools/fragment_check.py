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


def main():
    broken, unverified, ok = [], [], 0
    shared = "\n".join(p.read_text(encoding="utf-8") for p in (SRC / "components").rglob("*.tsx"))
    for f in sorted(SRC.rglob("*.tsx")):
        for n, line in enumerate(f.read_text(encoding="utf-8").splitlines(), 1):
            for route, frag in LINK.findall(line):
                if route in DYNAMIC_PAGES:
                    unverified.append((f, n, route, frag))
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
