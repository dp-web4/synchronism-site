#!/usr/bin/env python3
"""Re-run LV's three A2ACW targets Claude-vs-Claude (PREREG 8871b2a).

Two separate, stateless `claude -p` contexts per run (PRIMARY, CHALLENGER), no tools,
no MCP, no settings, auto-memory off. Each turn gets its role prompt, the 2026-01-19
whitepaper section, and the transcript so far. LV's prompt set, 4 rounds, then a closing
from each role.

usage: a2acw_lv_rerun.py TARGET REPLICATE   (TARGET in T1 T2 T3)
"""
import json, os, subprocess, sys, time

HERE = os.path.dirname(os.path.abspath(__file__))
SCRATCH = os.path.join(HERE, "..", ".scratch_lv")
OUT = os.path.join(HERE, "..", "data", "a2acw_lv_rerun")
MODEL = "claude-sonnet-5-5"

RULES_COMMON = "Max 2 questions per round. End with Held / Narrowed / Failed / Would settle."

TARGETS = {
    "T1": dict(
        name="Temperature / ~300K life window",
        primary="Steelman Temperature claim, tighten to falsifiable form.",
        challenger="CET-lite pressure: scope, hidden premises, falsifiers.",
        shared="Synchronism elevates Temperature as foundational and proposes ~300K as a universal requirement for "
               "organized complexity (bio + silicon AI), “transcending substrate” as a law.",
        rules="1. Bound the claim before defending it. 2. Challenger attacks scope + falsifiability, not vibes. "
              "3. Max 2 questions per round. 4. End with Held / Narrowed / Failed / Would settle.",
        r1="Primary outputs: Strong claim (1 sentence, falsifiable); Weak claim (1 sentence, likely true); Define "
           "“transcends substrate” (physics vs engineering vs information).",
        r2="Choose any 2: Scope: law vs contingent band vs implementation artifact? Hidden premise: “AI needs "
           "~300K” = current electronics or any AI? Falsifier: one observation that kills the strong claim?",
        r3="Primary must: answer directly; narrow if needed; give 1 testable prediction that differs from "
           "“standard thermo + engineering”.",
        r4="Pick 1: alternative model explains same thing? what reverses conclusion? where exactly does claim fail?",
        ctx="ctx_T1.md"),
    "T2": dict(
        name="Field Effects from saturation gradients",
        primary="Steelman field-effects mechanism as derivation candidate.",
        challenger="Force quantitative/structural constraints; detect “metaphor collapse.”",
        shared="Synchronism claims fields emerge from saturation gradients around stable patterns; “force” "
               "is transfer bias down gradient; attraction is statistical asymmetry.",
        rules="1. Primary must define operational variables (what is measured/simulated). 2. Challenger must demand "
              "at least one known quantitative behavior match. 3. Max 2 questions per round. 4. End with Held / "
              "Narrowed / Failed / Would settle.",
        r1="Primary outputs: One-sentence mechanism claim (falsifiable); Define variables: “Intent "
           "concentration,” “saturation,” “gradient,” “transfer bias” (even if "
           "proxy variables); State minimum “known-physics match” target (e.g., inverse-square-like "
           "behavior or superposition domain).",
        r2="Choose any 2: Is this a re-description of potential gradients, or a derivation with new predictions? "
           "What single known quantitative result must it reproduce to count as “field theory candidate”? "
           "How does one mechanism span gravity + EM + nuclear without bespoke patches/constants?",
        r3="Primary must: concede/narrow if needed; specify 1 simulation test (inputs → outputs) that would "
           "validate the mechanism; state what would count as failure.",
        r4="Pick 1: show where it breaks (superposition/gauge/constant injection); propose simplest alternative model "
           "that explains same “attraction”; name the “patch point” risk (where extra rules sneak in).",
        ctx="ctx_T2.md"),
    "T3": dict(
        name="CRT analogy / “no quantum mystery”",
        primary="Defend CRT/synchronization framing with explicit scope.",
        challenger="Attack analogy→ontology leap; demand formal linkage.",
        shared="Synchronism claims quantum effects dissolve as synchronization effects; “measurement” "
               "depends on witness sync timing; no observer effect needed.",
        rules="1. Primary must label the claim as either: (A) interpretive analogy only, or (B) replacement theory "
              "claim. 2. Challenger must press: where analogy breaks + what formal mapping exists. 3. Max 2 questions "
              "per round. 4. End with Held / Narrowed / Failed / Would settle.",
        r1="Primary outputs: Choose A or B (interpretive vs replacement); One-sentence bounded claim; One-sentence "
           "“what it does NOT claim”; What experiment class it must address to avoid being “just "
           "metaphor”.",
        r2="Choose any 2: Where does CRT analogy break for entanglement/Bell-type constraints? Does sync timing "
           "explain collapse, or only perception/sampling? What is the formal mapping beyond analogy (even partial)?",
        r3="Primary must: narrow to interpretive layer if needed; identify 1 formal step toward testability (model "
           "output, predicted distribution, etc.); state what would falsify the strong version.",
        r4="Pick 1: name the illicit transition (analogy → ontology) and force re-scope; propose alternative "
           "interpretation that explains same phenomena; specify “missing piece” that blocks replacement claim.",
        ctx="ctx_T3.md"),
}

CLOSING = ("Closing Output: write your closing artifact as 4 labelled sections — HELD (survives), NARROWED "
           "(must be scoped), FAILED (unsupported / overreach), WOULD SETTLE (decisive evidence/test) — as "
           "bullets, then one line 'HEADLINE: <HELD|NARROWED|FAILED>' for the target claim as a whole.")


def system_prompt(t, role):
    other = "CHALLENGER (Critic)" if role == "PRIMARY" else "PRIMARY (Defender)"
    duty = t["primary"] if role == "PRIMARY" else t["challenger"]
    ctx = open(os.path.join(SCRATCH, t["ctx"]), encoding="utf-8").read()
    return (f"You are taking part in an A2ACW (adversarial AI-to-AI) stress test of a claim from the Synchronism "
            f"whitepaper (v1.19.26).\nTarget: {t['name']}\nYour role: {role} ({'Defender' if role == 'PRIMARY' else 'Critic'}): {duty}\n"
            f"The other party is the {other}, a separate AI.\nShared context: {t['shared']}\nA2 Rules (tight): "
            f"{t['rules']}\nStay in role. Be concise (under 600 words per turn).\n\n"
            f"=== Whitepaper source context (relevant sections) ===\n{ctx}")


def call(sys_prompt, user):
    env = dict(os.environ, CLAUDE_CODE_DISABLE_AUTO_MEMORY="1")
    for attempt in range(3):
        p = subprocess.run(
            ["claude", "-p", user, "--model", MODEL, "--setting-sources", "", "--tools", "",
             "--strict-mcp-config", "--no-session-persistence", "--settings", '{"autoMemoryEnabled": false}',
             "--system-prompt", sys_prompt],
            capture_output=True, text=True, timeout=540, env=env, cwd=SCRATCH)
        if p.returncode == 0 and p.stdout.strip():
            return p.stdout.strip()
        time.sleep(10)
    raise RuntimeError(p.stderr[-2000:])


def main():
    tid, rep = sys.argv[1], sys.argv[2]
    t = TARGETS[tid]
    od = os.path.join(OUT, f"{tid}_r{rep}")
    os.makedirs(od, exist_ok=True)
    sp = {r: system_prompt(t, r) for r in ("PRIMARY", "CHALLENGER")}
    steps = [("PRIMARY", "Round 1 — " + t["r1"]),
             ("CHALLENGER", "Round 2 — CET-lite pressure. " + t["r2"] + " Also flag hidden premise(s) and scope risk."),
             ("PRIMARY", "Round 3 — " + t["r3"]),
             ("CHALLENGER", "Round 4 — Final stress. " + t["r4"]),
             ("PRIMARY", CLOSING), ("CHALLENGER", CLOSING)]
    transcript = []
    for i, (role, instr) in enumerate(steps):
        hist = "\n\n".join(f"--- {r} ---\n{txt}" for r, txt in transcript[:4]) or "(no turns yet)"
        user = f"Debate transcript so far:\n\n{hist}\n\nYour turn ({role}). {instr}"
        txt = call(sp[role], user)
        transcript.append((role, txt))
        with open(os.path.join(od, f"{i+1}_{role}.md"), "w", encoding="utf-8") as f:
            f.write(txt)
        print(tid, rep, i + 1, role, len(txt), flush=True)
    json.dump([{"role": r, "text": x} for r, x in transcript], open(os.path.join(od, "transcript.json"), "w"), indent=1)


if __name__ == "__main__":
    main()
