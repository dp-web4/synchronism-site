#!/usr/bin/env python3
"""Blind coder for the LV re-run (PREREG 8871b2a).

A clean `claude -p` context assigns HELD / NARROWED / FAILED / NOT-ADDRESSED to each neutral
proposition, without seeing LV's labels. Sources:
  LV          -> LV's own run log (positive control; must recover >= 18/22 of LV's labels)
  T?_r?_P     -> 4-round transcript + PRIMARY closing (the run verdict)
  T?_r?_C     -> 4-round transcript + CHALLENGER closing (secondary)

usage: a2acw_lv_code.py all
"""
import json, os, re, subprocess, sys
from concurrent.futures import ThreadPoolExecutor

HERE = os.path.dirname(os.path.abspath(__file__))
SCRATCH = os.path.join(HERE, "..", ".scratch_lv")
RUNS = os.path.join(HERE, "..", "data", "a2acw_lv_rerun")
MODEL = "claude-sonnet-5-5"

ITEMS = {
 "T1": [("a", "~300 K (in absolute kelvin) is a universal, substrate-independent requirement for organized complexity", "F"),
        ("b", "For thermally driven substrates, organized complexity peaks at an intermediate dimensionless ratio kT/E_barrier", "H"),
        ("c", "Known complex systems (wet biology and current silicon) cluster near 300 K because of this intermediate-regime balance", "H"),
        ("d", "The claim applies to any AI / any compute substrate, including cryogenic, photonic or reversible ones", "N"),
        ("e", "Hierarchical organization co-tunes the barrier landscape and so narrows the optimum (mechanism)", "F"),
        ("f", "Synchronism's temperature prediction is distinct from what standard statistical mechanics + engineering already predict", "F"),
        ("g", "Synchronism supplies a principled rule for aggregating multiple barriers into an effective barrier", "F"),
        ("h", "Thermally driven substrates empirically converge on similar normalized (dimensionless) thermal regimes", "H")],
 "T2": [("a", "Far-field inverse-square behaviour follows from the mechanism (derived rather than assumed)", "H"),
        ("b", "An equivalence principle (test-object response independent of its own charge/size) follows from the microdynamics in the weak-field regime", "H"),
        ("c", "That equivalence also holds in the strong / saturated (clamped) regime", "N"),
        ("d", "The saturation radius is fixed by independently measurable pattern parameters, not fitted (not a free softening knob)", "H"),
        ("e", "A constrained (ceiling/obstacle) formulation yields a monopole deficit (effective charge less than total) for overlapping sources", "H"),
        ("f", "The deficit coefficient is analytically derivable as a specific number (e.g. 1.7 +/- 0.15)", "F"),
        ("g", "The mechanism makes predictions distinct from a classical scalar potential / potential-gradient description", "N"),
        ("h", "The coupling constant (k1) transfers unchanged across different sources", "N"),
        ("i", "A concrete, falsifiable simulation test suite with quantitative tolerances is specified", "H")],
 "T3": [("a", "Synchronism's synchronization/CRT account is a replacement theory for quantum mechanics", "F"),
        ("b", "As an interpretive framework, block universe + synchronization timing is coherent", "H"),
        ("c", "A formal derivation of Bell correlations (-cos theta, Tsirelson bound) from synchronization postulates exists", "F"),
        ("d", "The framework specifies precisely which Bell assumption it violates and what replaces factorization", "F"),
        ("e", "It offers a valuable reframing of the measurement problem without an observer effect", "H")],
}
HEADLINE_LV = {"T1": "N", "T2": "H", "T3": "N"}
LV_LOG = {"T1": "A2.RL.T1.S.1.19.26.txt", "T2": "A2.RL.T2.S.1.20.26.txt", "T3": "A2.RL.T3.S.1.20.26.txt"}

SYS = ("You are a careful coder of adversarial-debate records. You will be given a debate record about one claim and a "
       "list of propositions. For each proposition decide the verdict the record reaches about it:\n"
       "H = HELD: the record treats it as surviving essentially as stated (affirmed, defended successfully).\n"
       "N = NARROWED: it survives only with a scope restriction, regime limit or weakening.\n"
       "F = FAILED: the record judges it unsupported, overreaching, refuted, retracted or not delivered.\n"
       "X = NOT-ADDRESSED: the record does not reach a verdict on it.\n"
       "Also give the record's HEADLINE verdict on the target claim as a whole (H/N/F).\n"
       "Code what the record concludes, not your own opinion. Reply with JSON only: "
       "{\"items\": {\"a\": \"H|N|F|X\", ...}, \"headline\": \"H|N|F\"}")


def coder(tid, record):
    props = "\n".join(f"{k}. {txt}" for k, txt, _ in ITEMS[tid])
    user = f"=== DEBATE RECORD ===\n{record}\n\n=== PROPOSITIONS ===\n{props}\n\nReturn the JSON."
    env = dict(os.environ, CLAUDE_CODE_DISABLE_AUTO_MEMORY="1")
    for _ in range(3):
        p = subprocess.run(["claude", "-p", user, "--model", MODEL, "--setting-sources", "", "--tools", "",
                            "--strict-mcp-config", "--no-session-persistence", "--settings",
                            '{"autoMemoryEnabled": false}', "--system-prompt", SYS],
                           capture_output=True, text=True, timeout=540, env=env, cwd=SCRATCH)
        m = re.search(r"\{.*\}", p.stdout, re.S)
        if m:
            try:
                return json.loads(m.group(0))
            except json.JSONDecodeError:
                pass
    raise RuntimeError(p.stdout[-1000:] + p.stderr[-1000:])


def run_record(tid, rep, closer):
    d = os.path.join(RUNS, f"{tid}_r{rep}")
    tr = json.load(open(os.path.join(d, "transcript.json")))
    body = "\n\n".join(f"--- Round {i+1} ({x['role']}) ---\n{x['text']}" for i, x in enumerate(tr[:4]))
    close = tr[4] if closer == "P" else tr[5]
    return body + f"\n\n--- CLOSING ({close['role']}) ---\n{close['text']}"


def main():
    jobs = []
    for tid in ITEMS:
        jobs.append((f"LV_{tid}", tid, open(os.path.join(SCRATCH, LV_LOG[tid]), encoding="utf-8").read()))
        for rep in ("1", "2"):
            for closer in ("P", "C"):
                jobs.append((f"{tid}_r{rep}_{closer}", tid, run_record(tid, rep, closer)))
    with ThreadPoolExecutor(8) as ex:
        res = dict(zip([j[0] for j in jobs], ex.map(lambda j: coder(j[1], j[2]), jobs)))
    out = {"codes": res, "lv_labels": {t: {k: l for k, _, l in ITEMS[t]} for t in ITEMS}, "lv_headline": HEADLINE_LV}
    json.dump(out, open(os.path.join(RUNS, "codes.json"), "w"), indent=1)
    print(json.dumps(res, indent=1))


if __name__ == "__main__":
    main()
