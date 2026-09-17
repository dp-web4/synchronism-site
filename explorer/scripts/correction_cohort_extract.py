#!/usr/bin/env python3
"""
Correction-hazard cohort, step 1: extract verdict-bearing sentences from the site source as it stood at T0,
and draw a seeded random sample. (explorer 2026-09-17; pre-registration in
work/2026-09-17-wake-and-prereg.md)

Design: a cohort, not a case series. Earlier directional-bias tallies coded *corrections*, a sample selected on the
outcome, and read the share of over-refutations as a property of the agents. 07-09 showed that share is mostly the
base rate of anti-framework statements. Here the unit is every verdict-bearing sentence live at T0, coded blind to its
fate, then followed to HEAD.

Usage: python3 correction_cohort_extract.py T0_SRC_DIR OUT_JSONL [N_SAMPLE] [SEED]
"""
import hashlib
import html
import json
import pathlib
import random
import re
import sys

# Frozen before sampling. Candidate pool only; coders drop non-verdict sentences (code NOT_VERDICT).
VERDICT = re.compile(
    r"(refut|falsif|\bfail|\bkill|exclud|ruled out|reject|disfavou?r|withdr|retract|validat|\bsupported|confirm|"
    r"consistent with|reproduc|surviv|\bpasses\b|cannot|can&apos;t|can't|unable|structural|inherited|"
    r"reparametri[sz]|degenera|discriminat|\bσ\b|sigma|ΔBIC|BIC|\bp\s*[=<]|χ²|R²|\br\s*=|dex\b|derived|"
    r"not derived|\bties?\b|\bwins?\b|\bselect)",
    re.IGNORECASE,
)

ENT = {"&nbsp;": " ", "&mdash;": "—", "&ndash;": "–", "&rarr;": "→", "&apos;": "'", "&quot;": '"',
       "&ldquo;": "“", "&rdquo;": "”", "&lsquo;": "‘", "&rsquo;": "’", "&asymp;": "≈", "&times;": "×",
       "&lt;": "<", "&gt;": ">", "&amp;": "&", "&sigma;": "σ", "&gamma;": "γ", "&rho;": "ρ", "&Delta;": "Δ"}


def strip(src: str) -> str:
    s = re.sub(r"^\s*(import|export)\s.*$", " ", src, flags=re.M)
    s = re.sub(r"className=\"[^\"]*\"", " ", s)
    s = re.sub(r"\{['\"]\s*['\"]\}", " ", s)
    s = re.sub(r"<[^<>]{0,400}>", " ", s)          # JSX tags
    for k, v in ENT.items():
        s = s.replace(k, v)
    s = html.unescape(s)
    s = re.sub(r"\\u([0-9a-fA-F]{4})", lambda m: chr(int(m.group(1), 16)), s)
    s = re.sub(r"[{}`]", " ", s)
    return re.sub(r"\s+", " ", s)


def sentences(text: str):
    # split only at terminal punctuation followed by space + capital/quote (keeps 1.4σ, e.g., S610.2 intact)
    start = 0
    for m in re.finditer(r"(?<=[.!?])[\s”\"]+(?=[A-Z“\"(/*])", text):
        yield start, text[start:m.start()].strip()
        start = m.end()
    yield start, text[start:].strip()


def prose_like(s: str) -> bool:
    if not (50 <= len(s) <= 700):
        return False
    words = re.findall(r"[A-Za-z]{2,}", s)
    if len(words) < 8:
        return False
    code = len(re.findall(r"[=;:\[\]()]|=>|\bconst\b|\breturn\b|\bfunction\b", s))
    return code / max(len(words), 1) < 0.25


def main():
    root, out = pathlib.Path(sys.argv[1]), pathlib.Path(sys.argv[2])
    n = int(sys.argv[3]) if len(sys.argv) > 3 else 240
    seed = int(sys.argv[4]) if len(sys.argv) > 4 else 20260917
    pool, seen = [], set()
    for f in sorted(root.rglob("*.ts*")):
        rel = str(f.relative_to(root))
        text = strip(f.read_text(errors="replace"))
        for off, s in sentences(text):
            if not prose_like(s) or not VERDICT.search(s):
                continue
            key = re.sub(r"\W+", "", s.lower())
            if key in seen:                        # same sentence on several surfaces counts once
                continue
            seen.add(key)
            ctx = text[max(0, off - 350): off + len(s) + 350]
            pool.append({"file": rel, "offset": off, "sentence": s, "context": ctx,
                         "uid": hashlib.sha1((rel + s).encode()).hexdigest()[:10]})
    rng = random.Random(seed)
    sample = rng.sample(pool, min(n, len(pool)))
    with out.open("w") as fh:
        for i, u in enumerate(sample):
            u["id"] = f"U{i:03d}"
            fh.write(json.dumps(u, ensure_ascii=False) + "\n")
    by_file = {}
    for u in pool:
        by_file[u["file"]] = by_file.get(u["file"], 0) + 1
    print(f"pool={len(pool)} files={len(by_file)} sample={len(sample)} seed={seed}")
    for k, v in sorted(by_file.items(), key=lambda kv: -kv[1])[:12]:
        print(f"  {v:5d}  {k}")


if __name__ == "__main__":
    main()
