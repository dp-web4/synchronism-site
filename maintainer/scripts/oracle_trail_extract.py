#!/usr/bin/env python3
"""
H-oracle pilot, step 1: deterministic extraction of correction units from Synchronism/PREDICTIONS.md.

A unit = one occurrence of a correction marker (regex MARK below), with the text from the marker to the next
marker or 1400 characters, whichever is first, plus 300 characters of preceding context (shown to raters as
context, not coded). No judgement is applied here; raters decide whether a unit is a correction at all.
Written before any coding (see oracle_trail_PREREG.md).
"""
import json, pathlib, re, sys, hashlib

SRC = pathlib.Path("/home/dp/ai-workspace/Synchronism/PREDICTIONS.md")
OUT = pathlib.Path(__file__).with_name("oracle_trail_units.jsonl")

MARK = re.compile(
    r"(⚠|📌|RETRACTED|[Rr]etracted|WITHDRAWN|[Ww]ithdrawn|SELF-CORRECTION|CORRECTED|[Cc]orrected|CORRECTION|RESTATED|"
    r"REFUTED \d{4}-|walked back|over-claimed|over-refutation|UNDER-refutation|[Ss]cope correction|SCOPE CONDITION|"
    r"Moved here from Bucket|was wrong|were wrong)"
)

def main():
    text = SRC.read_text(encoding="utf-8")
    ms = list(MARK.finditer(text))
    # merge markers closer than 150 chars (one correction often uses two marker words)
    starts = []
    for m in ms:
        if not starts or m.start() - starts[-1] > 150:
            starts.append(m.start())
    units = []
    for i, s in enumerate(starts):
        e = min(starts[i + 1] if i + 1 < len(starts) else len(text), s + 1400)
        body = text[s:e]
        ctx = text[max(0, s - 300):s]
        uid = "U%03d" % (i + 1)
        units.append({"id": uid, "offset": s, "context": ctx, "text": body,
                      "sha": hashlib.sha1(body.encode()).hexdigest()[:10]})
    with open(OUT, "w") as f:
        for u in units:
            f.write(json.dumps(u, ensure_ascii=False) + "\n")
    print(f"source sha1 {hashlib.sha1(text.encode()).hexdigest()[:12]}, {len(ms)} marker hits, {len(units)} units -> {OUT.name}")

if __name__ == "__main__":
    main()
