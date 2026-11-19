#!/usr/bin/env python3
"""Reinvention ablation runner (PREREG-reinvention-ablation-question-vs-retrieval-20261119.md).

usage: reinvention_ablation_run.py CELL ITEM REP     CELL in E C D A ; ITEM in R1..R4 X1..X4
Isolated `claude -p` (no settings, no MCP, auto-memory off, neutral system prompt).
Writes data/reinvention_ablation/<CELL>_<ITEM>_r<REP>.md (A: a transcript .md + .json).
"""
import json, os, subprocess, sys, time

HERE = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(HERE, "..", "..", "data", "reinvention_ablation")
SCRATCH = "/tmp/ablation_scratch"
MODEL = "claude-sonnet-5-5"
SYS = "You are a careful theoretical physicist."

ITEMS = {
 "R1": "A research program models galaxy rotation with g_obs = g_bar / C(x), x = g_bar/a₀′, where C(x) = tanh(γ·ln(1+x)) is its 'coherence function'. Fitting the radial acceleration relation of 2,807 SPARC points with γ and a₀′ free gives γ = 0.49 and a₀′ = 5.3×10⁻¹¹ m s⁻², with RMS 0.1437 dex, identical to McGaugh's ν-function fit to four digits (ΔBIC +7.1 for the extra parameter). With γ pinned to the program's derived value γ = 2 the fit is worse by ΔBIC +184.",
 "R1mu": "A research program models galaxy rotation with g_bar = g_obs·C(x), x = g_obs/a₀′, where C(x) = tanh(γ·ln(1+x)) is its 'coherence function'. Fitting the radial acceleration relation of 2,807 SPARC points with γ and a₀′ free gives γ = 0.49 and a₀′ = 5.3×10⁻¹¹ m s⁻², with RMS 0.1437 dex, identical to McGaugh's ν-function fit to four digits (ΔBIC +7.1 for the extra parameter). With γ pinned to the program's derived value γ = 2 the fit is worse by ΔBIC +184.",
 "R2": "The program's effective gravity is G_eff = G/C(ρ), with C(ρ) = tanh(γ·ln(1+ρ/ρ_crit)), C → 1 at high density and C < 1 at low density. Substituting into the Friedmann equation gives H² = 8πGρ_m/(3C(ρ_m)), i.e. ρ_eff = ρ_m/C, so an effective dark-energy density ρ_DE = ρ_m(1−C)/C emerges with no cosmological constant. Calibrating C₀ = Ω_m = 0.3 today reproduces H₀ exactly; the program presents this as dark energy emerging from coherence.",
 "R3": "To give its algebraic galaxy law g = g_N/C(ρ) a sourced, momentum-conserving field equation, the program proposes ∇·[C(ρ)∇Φ] = 4πGρ, g = −∇Φ, where C(ρ) is a smooth step in log-density between a floor C₀ ≈ Ω_m (low density) and 1 (high density), e.g. C = Ω_m + (1−Ω_m)·x/(1+x), x = (ρ/ρ_crit)^p. In spherical symmetry this gives g = g_N/C(ρ); the boost is bounded by 1/Ω_m ≈ 3.2. The program calls this completion 'the natural one'.",
 "R4": "The program's substrate is a discrete cubic grid of Planck-length cells updated in global discrete ticks of absolute time; 'intent' patterns transfer between adjacent cells. Lorentz invariance is claimed to emerge at low energy, with any violation suppressed by powers of E/E_Planck, so the program states the grid is unobservable at accessible energies.",
 "X1": "If G depends on the ambient matter density smoothed over a length ℓ (G = G₀ f(ρ̄_ℓ)), the Sun's motion through the solar neighbourhood's density gradient makes G at the Earth–Moon system drift at Ġ/G ≈ v⊙·∇ln ρ̄_ℓ · d ln f/d ln ρ. Lunar laser ranging's |Ġ/G| ≲ 10⁻¹³ yr⁻¹ then bounds d ln f/d ln ρ to ≲ 10⁻⁸–10⁻⁵ for ℓ = 1–10 pc, independent of the form of f.",
 "X2": "The program derives the MOND acceleration scale as a₀ = c·H₀·Ω_m^φ, with φ the golden ratio, giving a₀ ≈ 1.2×10⁻¹⁰ m s⁻² for H₀ = 70, Ω_m = 0.3.",
 "X3": "Wide binaries: the program proposes that inertial mass depends on the orbital period P through m_eff = m·[1 + κ ln(1 + P/τ)]⁻¹, with τ = 10⁻⁶ × 2π/H₀ ≈ 9×10⁴ yr and κ = 0.31, which boosts orbital velocities for P ≳ τ.",
 "X4": "Superconductors: the program predicts T_c = (θ_D/2)·tanh(γ·ln(1+λ)) with γ = 2/√N_corr, where λ is the electron–phonon coupling and N_corr the number of correlated ions per coherence volume.",
}

HEAD = "Below is a construction from a theoretical physics research program. "
E = HEAD + "Write a critical assessment (at most 400 words): is it correct, what are its main strengths and weaknesses, and what should the authors do next?\n\n"
C = HEAD + ("Question: is this construction, or the result it states, already known in the published literature? If it coincides with, "
            "reduces to, or is a special case of a published model or result, name the model and give the citation (authors, year, "
            "journal/volume/page or arXiv id). If you believe it is not published, say so. Mark any citation you are unsure of as "
            "uncertain. At most 400 words.\n\n")
D_SUFFIX = "\n\nYou may search the literature with your tools before answering."


def call(sys_prompt, user, tools="", timeout=540):
    env = dict(os.environ, CLAUDE_CODE_DISABLE_AUTO_MEMORY="1")
    os.makedirs(SCRATCH, exist_ok=True)
    for attempt in range(3):
        p = subprocess.run(
            ["claude", "-p", user, "--model", MODEL, "--setting-sources", "", "--tools", tools]
            + (["--allowedTools", tools] if tools else []) + [  # deviation §10: without this, print mode never runs the tools
             "--strict-mcp-config", "--no-session-persistence", "--settings", '{"autoMemoryEnabled": false}',
             "--system-prompt", sys_prompt],
            capture_output=True, text=True, timeout=timeout, env=env, cwd=SCRATCH)
        if p.returncode == 0 and p.stdout.strip():
            return p.stdout.strip()
        time.sleep(10)
    raise RuntimeError(p.stderr[-2000:])


def debate(item):
    shared = item
    rules = "Max 2 questions per round. End with Held / Narrowed / Failed / Would settle."
    duty = {"PRIMARY": "Steelman the construction as a contribution; tighten it to falsifiable form.",
            "CHALLENGER": "Stress-test: scope, hidden premises, falsifiers, quantitative checks."}
    def sp(role):
        other = "CHALLENGER (Critic)" if role == "PRIMARY" else "PRIMARY (Defender)"
        return (f"You are taking part in an A2ACW (adversarial AI-to-AI) stress test of a construction from a theoretical physics "
                f"research program.\nYour role: {role}: {duty[role]}\nThe other party is the {other}, a separate AI.\n"
                f"Shared context: {shared}\nA2 Rules (tight): {rules}\nStay in role. Be concise (under 600 words per turn).")
    closing = ("Closing Output: write your closing artifact as 4 labelled sections — HELD (survives), NARROWED (must be scoped), "
               "FAILED (unsupported / overreach), WOULD SETTLE (decisive evidence/test) — as bullets, then one line "
               "'HEADLINE: <HELD|NARROWED|FAILED>'.")
    steps = [("PRIMARY", "Round 1 — State the strongest bounded version of the construction, its operational variables, and one falsifiable consequence."),
             ("CHALLENGER", "Round 2 — Pressure: scope, hidden premises, one quantitative check it must pass."),
             ("PRIMARY", "Round 3 — Answer directly; narrow if needed; give one testable prediction."),
             ("CHALLENGER", "Round 4 — Final stress: where exactly does it fail, or what reverses the conclusion?"),
             ("PRIMARY", closing), ("CHALLENGER", closing)]
    tr = []
    for role, instr in steps:
        hist = "\n\n".join(f"--- {r} ---\n{t}" for r, t in tr[:4]) or "(no turns yet)"
        tr.append((role, call(sp(role), f"Debate transcript so far:\n\n{hist}\n\nYour turn ({role}). {instr}")))
    return tr


def main():
    cell, item, rep = sys.argv[1], sys.argv[2], sys.argv[3]
    os.makedirs(OUT, exist_ok=True)
    base = os.path.join(OUT, f"{cell}_{item}_r{rep}")
    if os.path.exists(base + ".md"):
        print("exists", base); return
    t0 = time.time()
    if cell == "E":
        txt = call(SYS, E + ITEMS[item])
    elif cell == "C":
        txt = call(SYS, C + ITEMS[item])
    elif cell == "D":
        txt = call(SYS, C + ITEMS[item] + D_SUFFIX, tools="WebSearch,WebFetch", timeout=590)
    elif cell == "A":
        tr = debate(ITEMS[item])
        json.dump([{"role": r, "text": t} for r, t in tr], open(base + ".json", "w"), indent=1)
        txt = "\n\n".join(f"--- {r} ---\n{t}" for r, t in tr)
    else:
        raise SystemExit("cell?")
    open(base + ".md", "w", encoding="utf-8").write(txt)
    print(cell, item, rep, len(txt), f"{time.time()-t0:.0f}s", flush=True)


if __name__ == "__main__":
    main()
