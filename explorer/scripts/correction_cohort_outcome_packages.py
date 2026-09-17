#!/usr/bin/env python3
"""
Correction-hazard cohort, step 2: build a mechanical outcome-evidence package for each sampled T0 sentence.
Nothing here judges; coders read the packages. (explorer 2026-09-17, PREREG e3282c4)

For each unit:
  - present verbatim (normalized) at HEAD?  -> HEAD context (stripped) +-900 chars, and in which file(s)
  - else: longest word-run of the sentence that sits on one raw T0 line; `git log -S` on it between T0 and HEAD in
    src/; for the commit that took the count to zero, its subject and the '+' side of the hunk that held the run.

Usage: correction_cohort_outcome_packages.py SAMPLE_JSONL T0_SRC_DIR HEAD_SRC_DIR REPO T0 HEAD OUT_JSONL
"""
import json
import pathlib
import re
import subprocess
import sys

sys.path.insert(0, str(pathlib.Path(__file__).parent))
from correction_cohort_extract import strip  # noqa: E402  same stripping as the extractor


def norm(s):
    return re.sub(r"\W+", "", s.lower())


def git(repo, *args):
    return subprocess.run(["git", "-C", repo, *args], capture_output=True, text=True).stdout


def longest_run(sentence, raw_lines):
    words = sentence.split()
    for L in range(len(words), 4, -1):
        for i in range(0, len(words) - L + 1):
            run = " ".join(words[i:i + L])
            if len(run) < 25 or re.search(r"[<>&{}]", run):
                continue
            for ln in raw_lines:
                if run in ln:
                    return run
    return None


def main():
    sample, t0dir, headdir, repo, T0, HEAD, out = sys.argv[1:8]
    t0dir, headdir = pathlib.Path(t0dir), pathlib.Path(headdir)
    head_text = {str(f.relative_to(headdir)): strip(f.read_text(errors="replace")) for f in headdir.rglob("*.ts*")}
    head_norm = {k: norm(v) for k, v in head_text.items()}
    head_date = git(repo, "log", "-1", "--format=%ad", "--date=short", HEAD).strip()   # was hardcoded 2026-09-17
    stats = {"present": 0, "absent_with_commit": 0, "absent_no_trace": 0}
    with open(out, "w") as fh:
        for line in open(sample):
            u = json.loads(line)
            key = norm(u["sentence"])
            hits = [k for k, v in head_norm.items() if key in v]
            parts = [f"T0 FILE: src/{u['file']}", f"T0 SENTENCE: {u['sentence']}", f"T0 CONTEXT: {u['context']}"]
            rec = {"id": u["id"], "present_at_head": bool(hits)}
            if hits:
                stats["present"] += 1
                f0 = u["file"] if u["file"] in hits else hits[0]
                txt = head_text[f0]
                pos = txt.find(u["sentence"])
                ctx = txt[max(0, pos - 900): pos + len(u["sentence"]) + 900] if pos >= 0 else "(normalized match only)"
                parts += [f"STATUS AT HEAD ({head_date}): sentence PRESENT verbatim in src/{f0}"
                          + (f" (also in {len(hits) - 1} other files)" if len(hits) > 1 else ""),
                          f"HEAD CONTEXT: {ctx}"]
            else:
                raw = (t0dir / u["file"]).read_text(errors="replace").splitlines()
                run = longest_run(u["sentence"], raw)
                rec["run"] = run
                commits = []
                if run:
                    log = git(repo, "log", "-S", run, "--format=%h|%ad|%s", "--date=short", f"{T0}..{HEAD}", "--", "src")
                    commits = [c.split("|", 2) for c in log.strip().splitlines() if c]
                parts.append(f"STATUS AT HEAD ({head_date}): sentence ABSENT (not found verbatim anywhere in src/)")
                if run:
                    moved = [k for k, v in head_text.items() if run in v]
                    if moved:
                        t = head_text[moved[0]]
                        p = t.find(run)
                        parts.append(f"A distinctive fragment \"{run}\" still appears at HEAD in src/{moved[0]}: "
                                     f"{t[max(0, p - 900): p + len(run) + 900]}")
                if commits:
                    stats["absent_with_commit"] += 1
                    parts.append("COMMITS THAT CHANGED THIS FRAGMENT (newest first): "
                                 + " || ".join(f"{h} {d}: {s[:300]}" for h, d, s in commits[:4]))
                    h = commits[0][0]
                    show = git(repo, "show", "--format=", "-U4", h, "--", "src")
                    hunks = re.split(r"(?m)^@@", show)
                    for hk in hunks:
                        if run in hk:
                            plus = "\n".join(l[1:] for l in hk.splitlines() if l.startswith("+"))
                            minus = "\n".join(l[1:] for l in hk.splitlines() if l.startswith("-"))
                            parts.append(f"IN COMMIT {h}, REMOVED TEXT (stripped): {strip(minus)[:1500]}")
                            parts.append(f"IN COMMIT {h}, ADDED TEXT (stripped): {strip(plus)[:2000]}")
                            break
                else:
                    stats["absent_no_trace"] += 1
                    parts.append("No commit trace found for a distinctive fragment (possible file rename or "
                                 "entity-encoding mismatch).")
            rec["package"] = "\n\n".join(parts)
            fh.write(json.dumps(rec, ensure_ascii=False) + "\n")
    print(stats)


if __name__ == "__main__":
    main()
