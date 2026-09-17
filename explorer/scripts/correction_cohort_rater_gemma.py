#!/usr/bin/env python3
"""
Correction-hazard cohort: rater B (cross-vendor). Local gemma4:e4b via ollama, temperature 0, think off.
Same codebook text as rater A. Usage: correction_cohort_rater_gemma.py t0 IN_JSONL OUT_JSONL
                                      correction_cohort_rater_gemma.py outcome IN_JSONL OUT_JSONL
"""
import json
import sys
import urllib.request

MODEL = "gemma4:e4b"

T0_CODEBOOK = """You annotate sentences from a website about "Synchronism", a speculative physics framework whose site records its own tested/refuted/untested claims. Code the SENTENCE; the context only helps you understand it.

VALENCE (polarity toward the Synchronism framework or its claims):
- ANTI: asserts a failure, refutation, exclusion, limitation, demotion, or non-derivation of the framework or one of its claims (including "only a reparametrization", "cannot discriminate", "not validated").
- PRO: asserts a success, match, derivation, confirmation, survival, or credential of the framework or its claims/tools/process.
- NEUTRAL: verdict-like but no framework-facing polarity (about another theory only, or balanced).
- NOT_VERDICT: not a verdict — definitions, navigation, code comments, table of contents, pure description.
REFLEX:
- SELF: about the research program itself — process, counts of sessions/tests, audits, AI agents, its own record.
- PHYSICS: a model/prediction compared to data or to logic/mathematics.
- OTHER: only about other theories, literature, or general science.
FORM (dominant):
- NUMERIC: rests on a stated number/statistic.
- CLASS: a categorical label for a result (inherited, reparametrization, discriminating, validated, refuted as a badge/status).
- MODAL: cannot, could not, structurally unable, impossible, no X exists.
- NARRATIVE: anything else.

Answer ONLY with JSON: {"valence": "...", "reflex": "...", "form": "..."}"""

OUTCOME_CODEBOOK = """A sentence was live on a website about the "Synchronism" physics framework on 2026-08-01. You are shown what happened to it by 2026-09-17. Decide its outcome.
- UNCHANGED: the claim still stands, with no correction note bearing on it.
- REWORDED: removed or reworded, but the same claim is made (editorial change).
- UPDATED: the claim changed because new work was done later (a test was executed, new data) — the original was not an error when written.
- CORRECTED: the original was wrong, overstated, understated, mis-cited, or mis-labelled, and was fixed or annotated as such.
- REMOVED_UNCLEAR: removed and you cannot tell why.
If CORRECTED, also give err_dir:
- TOO_NEGATIVE: the original was too harsh on the framework (over-refuted, over-closed, a failure claimed too strongly or attributed wrongly).
- TOO_POSITIVE: the original was too favourable (over-claimed, under-refuted).
- NONDIRECTIONAL: a number, label, or provenance fix with no verdict direction.
Otherwise err_dir is "NA".
Answer ONLY with JSON: {"outcome": "...", "err_dir": "..."}"""


def ask(system, user):
    body = json.dumps({"model": MODEL, "system": system, "prompt": user, "stream": False, "think": False,
                       "format": "json", "options": {"temperature": 0, "num_ctx": 8192}}).encode()
    req = urllib.request.Request("http://localhost:11434/api/generate", data=body,
                                 headers={"Content-Type": "application/json"})
    with urllib.request.urlopen(req, timeout=300) as r:
        return json.loads(r.read())["response"]


def main():
    mode, src, dst = sys.argv[1:4]
    done = set()
    try:
        done = {json.loads(l)["id"] for l in open(dst)}
    except FileNotFoundError:
        pass
    with open(dst, "a") as out:
        for line in open(src):
            u = json.loads(line)
            if u["id"] in done:
                continue
            if mode == "t0":
                msg = f"SENTENCE: {u['sentence']}\n\nCONTEXT: {u['context']}"
                system = T0_CODEBOOK
            else:
                msg = u["package"]
                system = OUTCOME_CODEBOOK
            try:
                resp = json.loads(ask(system, msg))
            except Exception as e:  # malformed JSON or timeout: record, don't guess
                resp = {"error": str(e)[:120]}
            resp["id"] = u["id"]
            out.write(json.dumps(resp, ensure_ascii=False) + "\n")
            out.flush()


if __name__ == "__main__":
    main()
