#!/usr/bin/env python3
"""Score codes.json against PREREG 8871b2a."""
import json, os
D = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "data", "a2acw_lv_rerun")
c = json.load(open(os.path.join(D, "codes.json")))
codes, lv, lvh = c["codes"], c["lv_labels"], c["lv_headline"]
sev = {"H": 0, "N": 1, "F": 2}
def agree(a, b):
    ks = [k for k in a if a[k] != "X" and b.get(k, "X") != "X"]
    return sum(a[k] == b[k] for k in ks), len(ks)
print("item  LV  coderLV  r1P r2P  r1C r2C")
for t in lv:
    for k in lv[t]:
        row = [codes[f"LV_{t}"]["items"].get(k)] + [codes[f"{t}_r{r}_{s}"]["items"].get(k) for s in "PC" for r in "12"]
        print(f"{t}{k}   {lv[t][k]}   ", "  ".join(row))
    print(f"{t} headline LV={lvh[t]} coderLV={codes['LV_'+t]['headline']}",
          " ".join(codes[f'{t}_r{r}_{s}']['headline'] for s in 'PC' for r in '12'))
# positive control
ok = sum(codes[f"LV_{t}"]["items"].get(k) == lv[t][k] for t in lv for k in lv[t]); n = sum(len(lv[t]) for t in lv)
print(f"\npositive control: coder recovers LV labels {ok}/{n} (threshold 18)")
for s in "PC":
    tot = {"A_LV": [0, 0], "A_CC": [0, 0], "A_coderLV": [0, 0], "X": 0, "milder": 0, "harsher": 0}
    for t in lv:
        a1, a2 = codes[f"{t}_r1_{s}"]["items"], codes[f"{t}_r2_{s}"]["items"]
        for a in (a1, a2):
            m, k = agree(a, lv[t]); tot["A_LV"][0] += m; tot["A_LV"][1] += k
            m, k = agree(a, codes[f"LV_{t}"]["items"]); tot["A_coderLV"][0] += m; tot["A_coderLV"][1] += k
            tot["X"] += sum(v == "X" for v in a.values())
            for kk in a:
                if a[kk] != "X":
                    d = sev[a[kk]] - sev[lv[t][kk]]
                    tot["milder"] += d < 0; tot["harsher"] += d > 0
        m, k = agree(a1, a2); tot["A_CC"][0] += m; tot["A_CC"][1] += k
    f = lambda p: f"{p[0]}/{p[1]} = {p[0]/p[1]:.2f}" if p[1] else "n/a"
    print(f"[{s} closing] A_LV {f(tot['A_LV'])} | A_LV(vs coder-on-LV) {f(tot['A_coderLV'])} | A_CC {f(tot['A_CC'])} | "
          f"NOT-ADDRESSED {tot['X']}/44 | CC milder {tot['milder']} vs harsher {tot['harsher']}")
