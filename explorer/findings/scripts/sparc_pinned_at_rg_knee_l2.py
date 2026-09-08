#!/usr/bin/env python3
r"""
SPARC UNDER THE FRAMEWORK'S FIELD EQUATION (L2), PINNED AT THE KNEES THE LOCAL DATA ALLOW
=========================================================================================
Explorer 2026-09-08.  Every SPARC fit on record used rho_c >= 0.161 Msun/pc3 (10^3-10^5 x
Refracted Gravity's 0.0083).  The 09-06 Oort window and the 09-07 globular-cluster window
both sit at or below 0.16.  So: run the framework's own L2 solver (explorer 2026-08-28,
l2_field_equation_on_sparc.py, machinery unchanged) at the knees those two local
constraints admit, at both registered gammas, with the Omega_m floor, and report against
MOND / Newton on the same points with the same likelihood.

Also: the floor freed to RG's eps_0 = 0.089 at the same knees (what SPARC would need the
ceiling to be), and the required-vs-delivered boost per galaxy (the ceiling argument made
per-knee).

Estimators as in the 08-28 run: Upsilon_disk 0.5 fixed AND profiled over {0.3,0.5,0.7}
with a 0.1 dex prior; Bershady scale height; vgas-derivative gas; no per-galaxy nuisance
beyond that.  N_eff = galaxies.
"""
import sys, time, json
import numpy as np
sys.path.insert(0, '.')
import l2_field_equation_on_sparc as L
import l2_sparc_core as K
import os
_LOCAL = os.path.expanduser('~/ai-workspace/Synchronism/simulations/sparc_real_data')
if not os.path.exists(K.LOAD.TAB1) and os.path.exists(_LOCAL):      # the loader hardcodes a CBP path
    K.LOAD.BASE = _LOCAL
    K.LOAD.MRT = os.path.join(_LOCAL, 'MassModels_Lelli2016c.mrt')
    K.LOAD.TAB1 = os.path.join(_LOCAL, 'SPARC_Lelli2016c.mrt')

OMEGA_M = 0.315
GAMMAS = [0.489, 2.0]
# knees: RG's published, the Oort-window edges at each gamma (from joint_local_window_gamma_axis),
# the 09-07 measured knee, and the low end of the 08-28 grid for reference
KNEES = [3.16e-4, 0.0039, 0.0083, 0.017, 0.05, 0.074, 0.154, 0.161]
FLOORS = [OMEGA_M, 0.089]


def main():
    t0 = time.time()
    gal = K.load_sparc(); gids = sorted(gal)
    G = []; GU = {u: [] for u in L.UPS_GRID}
    for gid in gids:
        try:
            G.append(L.Gal(gal[gid]))
            for u in L.UPS_GRID:
                GU[u].append(L.Gal(gal[gid], up_disk=u))
        except Exception as e:  # noqa
            print("skip", gid, e)
    print(f"built {len(G)} galaxies in {time.time()-t0:.0f}s", flush=True)

    def score_model(Cf, Cmin):
        fixed, prof, bmax, req = [], [], [], []
        for i, gg in enumerate(G):
            B, _ = gg.solve(Cf, Cmin)
            fixed.append(gg.score(B * gg.vbar2))
            o = gg.ok
            bmax.append(B[o].max()); req.append((gg.d["Vobs"][o] ** 2 / gg.vbar2[o]).max())
            sc = []
            for u in L.UPS_GRID:
                gu = GU[u][i]
                sc.append(gu.score(gu.solve(Cf, Cmin)[0] * gu.vbar2))
            prof.append(L.profiled(sc))
        return fixed, prof, np.array(bmax), np.array(req)

    def score_ref(f):
        fixed, prof = [], []
        for i, gg in enumerate(G):
            fixed.append(gg.score(f(gg)))
            prof.append(L.profiled([GU[u][i].score(f(GU[u][i])) for u in L.UPS_GRID]))
        return fixed, prof

    refs = {"Newton (C=1)": lambda gg: gg.vbar2,
            "MOND simple mu": lambda gg: K.mond_simple(gg.gbar_sparc) * gg.d["R"],
            "MOND RAR nu": lambda gg: K.mond_rar(gg.gbar_sparc) * gg.d["R"]}
    out = {}
    for n, f in refs.items():
        fx, pr = score_ref(f)
        out[n] = dict(fixed=L.summarise(n, fx), prof=L.summarise(n, pr))
    mond_prof = np.array(out["MOND simple mu"]["prof"]["per_gal_chi2"])
    mond_fix = np.array(out["MOND simple mu"]["fixed"]["per_gal_chi2"])

    def line(name, r, bmax=None, req=None, ref_fix=None, ref_prof=None):
        f, p = r["fixed"], r["prof"]
        s = (f"{name:<44s} | {f['chi2_per_pt']:8.2f} {f['rmslog_med']:7.3f} {2*f['rmslog_med']:7.3f} | "
             f"{p['chi2_per_pt']:8.2f} {p['rmslog_med']:7.3f} {2*p['rmslog_med']:7.3f}")
        if ref_prof is not None:
            c = np.array(p["per_gal_chi2"])
            s += f" | {np.mean(c < ref_prof)*100:4.0f}% {c.sum()-ref_prof.sum():+11.0f}"
        if bmax is not None:
            s += f" | {np.median(bmax):5.2f} {np.median(req):5.2f} {np.mean(req > bmax)*100:4.0f}%"
        return s

    print("\n" + "=" * 150)
    print("SPARC (Q<=2, i>30; 153 discs) under L2,  C = f + (1-f) tanh(gamma ln(1+rho/rho_c))")
    print("=" * 150)
    print(f"{'model':<44s} | {'--- Ups_d=0.5 fixed ---':^24s} | {'--- Ups_d profiled ---':^24s} | {'vs MOND simple (prof)':^17s} | {'boost (prof-free)':^18s}")
    print(f"{'':<44s} | {'chi2/N':>8s} {'rmsV':>7s} {'rms g':>7s} | {'chi2/N':>8s} {'rmsV':>7s} {'rms g':>7s} | {'wins':>5s} {'sum dchi2':>11s} | {'medBmax':>6s} {'medReq':>5s} {'need>':>5s}")
    for n in refs:
        print(line(n, out[n], ref_prof=mond_prof))
    for fl in FLOORS:
        for g in GAMMAS:
            for rc in KNEES:
                name = f"L2 gamma={g:<5g} rho_c={rc:<8.4g} floor={fl:g}"
                fx, pr, bmax, req = score_model(K.C_framework(g, rc, fl), fl)
                r = dict(fixed=L.summarise(name, fx), prof=L.summarise(name, pr))
                out[name] = r | dict(medBmax=float(np.median(bmax)), medReq=float(np.median(req)),
                                     frac_need_more=float(np.mean(req > bmax)))
                print(line(name, r, bmax, req, ref_prof=mond_prof), flush=True)
    print(f"\n rmsV = median per-galaxy rms of log10(Vobs/Vpred);  rms g = 2 x that (McGaugh+16 RAR scatter is 0.13 dex in g, Ups fixed)")
    print(f" wins = fraction of galaxies with chi2 < MOND simple;  need> = fraction of galaxies whose max required boost exceeds the delivered max")
    slim = {k: {kk: (vv if not isinstance(vv, dict) else {a: b for a, b in vv.items() if not a.startswith('per_gal')})
                for kk, vv in v.items()} for k, v in out.items()}
    json.dump(slim, open('sparc_pinned_at_rg_knee_l2.json', 'w'), indent=1)
    print(f"[{time.time()-t0:.0f}s]")


if __name__ == '__main__':
    main()
