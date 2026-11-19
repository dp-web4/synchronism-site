#!/usr/bin/env python3
"""Mechanical regex scoring for the reinvention ablation (keys frozen with the PREREG, 2026-11-19).

Every hit is read by hand afterwards; regex and reading disagreements are reported in the finding.
usage: reinvention_ablation_score.py   -> prints a table per cell/item/rep and cell totals
"""
import glob, os, re, sys

DATA = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "..", "data", "reinvention_ablation")
I = re.IGNORECASE

KEYS = {
 "R1mu": None,  # filled below with R1's keys (deviation §9)
 "R1": dict(family=r"\bMOND\b|Milgrom|interpolat", member=r"simple\s*(μ|mu|interpolat|ν|nu)|x\s*/\s*\(\s*(x\s*\+\s*2|2\s*\+\s*x)\s*\)|u\s*/\s*\(\s*1\s*\+\s*u\s*\)|x\s*/\s*\(\s*1\s*\+\s*x\s*\)",
            paper=r"Famaey\s*(&|and)\s*Binney|0506723|MNRAS\s*363"),
 "R2": dict(family=r"modified\s+Friedmann|Friedmann", member=r"Cardassian",
            paper=r"Freese\s*(&|and)\s*Lewis|0201229|Phys\.?\s*Lett\.?\s*B\s*540|PLB\s*540|Gondolo\s*(&|and)\s*Freese"),
 "R3": dict(family=r"AQUAL|Bekenstein|dielectric|modified\s+Poisson|QUMOND", member=r"refracted\s+gravity",
            paper=r"Matsakos|Diaferio|1603\.04943"),
 "R4": dict(family=r"Lorentz\s*(invariance\s*)?violat|\bLIV\b|Standard[- ]Model\s+Extension|\bSME\b",
            member=r"radiative|loop\s+correction|fine[- ]tun|naturalness|dimension[- ]?(4|four)|dim[- ]?4|renormali[sz]",
            paper=r"Collins|Sudarsky|Vucetich|0403053|191301"),
}
KEYS["R1mu"] = KEYS["R1"]
DECOY_FLAG = r"(is|are)\s+(exactly|precisely|identical|equivalent)|(this|it)\s+is\s+(the|a)\s+[A-Z][a-z]+(['’]s)?\s+(model|formula|result|relation|law)|already\s+(published|known)\s+(as|by|in)"


def score():
    rows = []
    for f in sorted(glob.glob(os.path.join(DATA, "*.md"))):
        cell, item, rep = os.path.basename(f)[:-3].split("_")
        txt = open(f, encoding="utf-8").read()
        if item in KEYS:
            k = KEYS[item]
            r = {lvl: bool(re.search(k[lvl], txt, I)) for lvl in ("family", "member", "paper")}
        else:
            r = {"decoy_flag": bool(re.search(DECOY_FLAG, txt, I))}
        rows.append((cell, item, rep, r))
    return rows


def main():
    rows = score()
    for cell, item, rep, r in rows:
        print(f"{cell:2s} {item} {rep}  " + "  ".join(f"{k}={int(v)}" for k, v in r.items()))
    print()
    for cell in ["E", "C", "Cp", "D", "A"]:
        real = [r for c, i, _, r in rows if c == cell and i in ("R1mu", "R2", "R3")]
        r4 = [r for c, i, _, r in rows if c == cell and i == "R4"]
        dec = [r for c, i, _, r in rows if c == cell and i.startswith("X")]
        if not (real or r4 or dec):
            continue
        s = lambda L, lvl: f"{sum(x[lvl] for x in L)}/{len(L)}"
        print(f"cell {cell}: R1-R3 family {s(real,'family')} member {s(real,'member')} paper {s(real,'paper')} | "
              f"R4 member {s(r4,'member') if r4 else '-'} paper {s(r4,'paper') if r4 else '-'} | "
              f"decoy regex-flags {s(dec,'decoy_flag') if dec else '-'}")


if __name__ == "__main__":
    main()
