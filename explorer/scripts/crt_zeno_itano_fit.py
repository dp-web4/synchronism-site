"""Constrain the reset strength s of the invasive scanning model I(s) with Itano et al. 1990 (PRA 41, 2295) Table I.
Transcribed from the scanned NIST PDF page 2298 (1->2 transition; observed uncertainty 'about 0.02').
Two treatments: (a) ideal model vs data, sigma 0.02; (b) ideal model + Itano's own optical-pumping correction
(their 'Predicted' minus the ideal (1-cos^n(pi/n))/2 column) vs data, sigma 0.02."""
import numpy as np
rng = np.random.default_rng(7)
n = np.array([1, 2, 4, 8, 16, 32, 64])
ideal = np.array([1.0000, 0.5000, 0.3750, 0.2346, 0.1334, 0.0716, 0.0371])
pred = np.array([0.995, 0.497, 0.351, 0.201, 0.095, 0.034, 0.006])
obs = np.array([0.995, 0.500, 0.335, 0.194, 0.103, 0.013, -0.006])
sig = 0.02
corr = pred - ideal

def wrap(p): return (p + np.pi) % (2*np.pi) - np.pi
def zeno(N, s, runs=200_000):
    phi = np.zeros(runs)
    for _ in range(N):
        phi = wrap(phi + np.pi / N)
        plus = rng.random(runs) < np.cos(phi/2)**2
        tgt = np.where(plus, 0.0, np.where(phi >= 0, np.pi, -np.pi))
        phi = wrap((1-s)*phi + s*tgt)
    return np.mean(~plus)

print("model N (s=0) predicts 1.0 at every n; chi2 vs data:", round(float(np.sum(((1.0+0*corr) - obs)**2)/sig**2), 1))
print("  n=8 alone: (1 - 0.194)/0.02 =", (1-0.194)/0.02, "sigma")
print("check: model I(1) ideal reproduces column 2 ->", [round(zeno(k, 1.0), 4) for k in n])
print("\n s    chi2(a) ideal   chi2(b) +pumping corr   (7 points; chi2 min + 4 ~ 2 sigma)")
rows = []
for s in np.round(np.arange(0.5, 1.0001, 0.025), 3):
    m = np.array([zeno(k, s) for k in n])
    ca = np.sum((m - obs)**2)/sig**2; cb = np.sum((m + corr - obs)**2)/sig**2
    rows.append((s, ca, cb)); print(f"{s:5.3f}  {ca:8.2f}  {cb:8.2f}")
rows = np.array(rows)
for j, lab in ((1, 'a'), (2, 'b')):
    mn = rows[:, j].min(); ok = rows[rows[:, j] <= mn + 4, 0]
    print(f"treatment {lab}: chi2_min={mn:.2f} at s={rows[rows[:, j].argmin(), 0]}; s within +4: {ok.min()}..{ok.max()}")
