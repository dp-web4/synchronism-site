import sys, json, time
sys.path.insert(0, "/home/dp/ai-workspace/synchronism-site/explorer/findings/scripts")
import collins_on_a_lattice_hypercubic_control as c
out = []
for m, ns in ((0.125, (48, 72)), (0.0625, (96, 144)), (0.03125, (192,))):
    for xi in (2.0, 0.5):
        for n in ns:
            t = time.time(); A, B = c.run(m, xi, n)
            r = dict(m=m, xi=xi, n=n, A=A, B=B, dc2=B - A, sec=round(time.time() - t))
            print(json.dumps(r), flush=True); out.append(r)
json.dump(out, open("/home/dp/ai-workspace/synchronism-site/explorer/findings/scripts/collins_small_m.json", "w"), indent=1)
