'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedConcepts from '@/components/RelatedConcepts';

const galaxies = [
  {
    name: 'DDO 154',
    rd: 1.5, // disk scale length, kpc (representative literature value — an observed input, not a fit)
    type: 'Dwarf irregular',
    vflat: 47,
    points: [
      [0.3, 10], [0.6, 18], [1.0, 25], [1.5, 32], [2.0, 37], [2.8, 41], [3.5, 44], [4.2, 46], [5.0, 47],
    ] as [number, number][],
  },
  {
    name: 'NGC 2403',
    rd: 2.7, // disk scale length, kpc (representative literature value — an observed input, not a fit)
    type: 'SAB(s)cd',
    vflat: 136,
    points: [
      [0.5, 40], [1.0, 70], [2.0, 100], [3.0, 118], [4.0, 127], [5.5, 132], [7.0, 134], [9.0, 135], [11.0, 136],
    ] as [number, number][],
  },
  {
    name: 'NGC 3198',
    rd: 3.2, // disk scale length, kpc (representative literature value — an observed input, not a fit)
    type: 'SB(rs)c',
    vflat: 150,
    points: [
      [1.0, 60], [2.0, 105], [4.0, 140], [6.0, 148], [8.0, 150], [10.0, 150], [13.0, 149], [16.0, 150], [20.0, 150],
    ] as [number, number][],
  },
  {
    name: 'UGC 128',
    rd: 4.0, // disk scale length, kpc (representative literature value — an observed input, not a fit)
    type: 'LSB dwarf',
    vflat: 55,
    points: [
      [1.0, 15], [2.0, 25], [4.0, 35], [6.0, 42], [8.0, 48], [10.0, 51], [13.0, 53], [16.0, 54], [18.0, 55],
    ] as [number, number][],
  },
  {
    name: 'NGC 7331',
    rd: 6.5, // disk scale length, kpc (representative literature value — an observed input, not a fit)
    type: 'SA(s)b',
    vflat: 250,
    points: [
      [1.0, 100], [2.0, 180], [4.0, 230], [6.0, 245], [8.0, 250], [10.0, 250], [13.0, 249], [16.0, 250], [20.0, 250],
    ] as [number, number][],
  },
];

const G_KPC = 4.301e-6; // G in kpc·(km/s)²/M☉
const A0_KPC = 3703;    // a₀ = 1.2×10⁻¹⁰ m/s² expressed in (km/s)²/kpc
const BTFR_A = 47;      // M_b = 47·V⁴ M☉ (McGaugh 2011 empirical BTFR normalization)
const H_Z = 0.3;        // toy disk scale height, kpc

// Baryonic mass from the baryonic Tully–Fisher relation — set by V_flat, not fitted.
function diskMass(vflat: number): number {
  return BTFR_A * Math.pow(vflat, 4);
}

function enclosedMassFrac(r: number, rd: number): number {
  const x = r / rd;
  return 1 - Math.exp(-x) * (1 + x);
}

function newtonianVel(r: number, vflat: number, rd: number): number {
  if (r <= 0) return 0;
  const M = diskMass(vflat) * enclosedMassFrac(r, rd);
  return Math.sqrt((G_KPC * M) / r);
}

// Real MOND simple interpolating function: g = ν(y)·g_N, ν(y) = ½ + √(¼ + 1/y), y = g_N/a₀
function mondVel(r: number, vflat: number, rd: number): number {
  if (r <= 0) return 0;
  const vb = newtonianVel(r, vflat, rd);
  if (vb <= 0) return 0;
  const gN = (vb * vb) / r;
  const y = gN / A0_KPC;
  const nu = 0.5 + Math.sqrt(0.25 + 1 / y);
  return vb * Math.sqrt(nu);
}

// Midplane density of the toy exponential disk, M☉/pc³
function midplaneDensity(r: number, vflat: number, rd: number): number {
  const sigma0 = diskMass(vflat) / (2 * Math.PI * rd * rd * 1e6); // M☉/pc²
  return (sigma0 * Math.exp(-r / rd)) / (2 * H_Z * 1000);
}

// The framework's actual coherence function, γ=2, ρ_crit = 0.029·V² (its asserted A·V² scaling)
function coherenceC(r: number, vflat: number, rd: number): number {
  const rhoCrit = 0.029 * vflat * vflat;
  const ratio = midplaneDensity(r, vflat, rd) / rhoCrit;
  return Math.tanh(2 * Math.log(ratio + 1));
}

// Real Synchronism curve: same architecture as the stand-in below, but with the
// actual C(ρ(r)) as the coherence factor instead of a hand-tuned tanh(radius)
function synchronismRealVel(r: number, vflat: number, rd: number): number {
  const vb = newtonianVel(r, vflat, rd);
  const c = coherenceC(r, vflat, rd);
  return Math.sqrt(vb * vb + Math.pow(vflat * c, 2));
}

// Hand-tuned stand-in shown on this page before 2026-07-08, kept for comparison
function synchronismVel(r: number, vflat: number): number {
  const rScale = 2.5;
  const baryon = vflat * Math.sqrt(1 - Math.exp(-r / rScale)) * 0.6;
  const coherence = vflat * Math.tanh(0.4 * r / rScale);
  return Math.sqrt(baryon * baryon + coherence * coherence);
}

export default function GalaxyPlotter() {
  const [selected, setSelected] = useState(0);
  const galaxy = galaxies[selected];

  const svgW = 600;
  const svgH = 350;
  const pad = { top: 20, right: 30, bottom: 50, left: 60 };
  const plotW = svgW - pad.left - pad.right;
  const plotH = svgH - pad.top - pad.bottom;

  const xMax = Math.max(...galaxy.points.map(p => p[0])) * 1.1;
  const yMax = Math.max(...galaxy.points.map(p => p[1])) * 1.3;

  const toX = (r: number) => pad.left + (r / xMax) * plotW;
  const toY = (v: number) => pad.top + (1 - v / yMax) * plotH;

  const modelPoints = useMemo(() => {
    const pts: { r: number; vNew: number; vSyn: number; vSynReal: number; vMond: number }[] = [];
    for (let i = 1; i <= 50; i++) {
      const r = (i / 50) * xMax;
      pts.push({
        r,
        vNew: newtonianVel(r, galaxy.vflat, galaxy.rd),
        vSyn: synchronismVel(r, galaxy.vflat),
        vSynReal: synchronismRealVel(r, galaxy.vflat, galaxy.rd),
        vMond: mondVel(r, galaxy.vflat, galaxy.rd),
      });
    }
    return pts;
  }, [galaxy, xMax]);

  const maxC = useMemo(() => {
    let m = 0;
    for (let i = 1; i <= 50; i++) {
      const r = (i / 50) * xMax;
      m = Math.max(m, coherenceC(r, galaxy.vflat, galaxy.rd));
    }
    return m;
  }, [galaxy, xMax]);

  return (
    <>
      <Breadcrumbs currentPath="/galaxy-plotter" />
      <h1>Galaxy Curve Plotter</h1>

      <section className="section content-width" style={{ marginTop: '1.5rem' }}>
        <div style={{ background: 'rgba(56,189,248,0.08)', border: '1px solid rgba(56,189,248,0.3)', borderRadius: '0.375rem', padding: '0.6rem 0.9rem', marginBottom: '1rem', fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>
          <strong style={{ color: 'var(--color-accent-blue)' }}>What this tool is for:</strong>{' '}
          seeing the dark-matter problem itself — pick a real galaxy and watch the gray line (what
          visible matter predicts) sag below the dots (what telescopes measure). That gap is the
          puzzle. As of 2026-07-08 this page also renders the framework&apos;s <em>actual</em> failure
          instead of narrating it: the solid violet curve is the real C(&#x03C1;) evaluated on a disk
          density profile — it hugs the baryon line and never fills the gap, because C never gets
          anywhere near its knee. The dotted amber curve is the hand-tuned stand-in this page used
          to show (recolored from violet 2026-07-23 so the theory and the illustration can&apos;t be
          confused). The green curve is now MOND&apos;s real simple-&#x03BD; interpolating function on a
          toy mass model whose only inputs (V<sub>flat</sub>, disk scale length) are observed
          quantities — nothing is fitted to the dots.{' '}
          <strong>Why a second (amber) curve?</strong> The dotted one is what a curve <em>would</em> need to
          look like to fit the data — drawn by hand, not computed. The solid one is what the equation
          actually produces. Showing both is the point: the gap between them <em>is</em> the failure.
        </div>
        <p>
          <strong>The dark matter puzzle in one picture:</strong> Physics predicts that galaxies
          should rotate more slowly at their outer edges (like planets in the solar system — the
          further out, the slower). They don&apos;t. The outer stars rotate just as fast as the inner
          ones. Something invisible is adding gravity. Most physicists call it dark matter &mdash;
          a proposed invisible substance that has never been directly detected; we infer it only
          from its gravitational pull (whether it&apos;s real stuff or a placeholder for missing
          physics is exactly what&apos;s being debated). MOND
          (Modified Newtonian Dynamics) explains the same curves by changing the gravity law.
          Synchronism offers a third interpretation: the coherence function C(ρ) mimics the extra
          gravity via density-dependent coupling. All three fit the observations; none is confirmed
          over the others by rotation curve data alone &mdash; though the fits are not on equal
          footing: MOND uses one global constant (a&#x2080;) for every galaxy, while the violet
          Synchronism curve refits &#x03C1;<sub>crit</sub> per galaxy.
        </p>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem', marginTop: '-0.5rem' }}>
          Select a SPARC galaxy. The plot shows five things: what visible matter predicts (dashed gray),
          what we observe (dots), what Synchronism&apos;s real equation gives (violet solid — it fails),
          the hand-tuned stand-in formerly shown (amber dotted — illustration only), and what MOND gives (green).
          Notice that the <em>stand-in</em> and MOND nearly overlap — the framework&apos;s own{' '}
          <a href="/honest-assessment" style={{ color: 'var(--color-accent-blue)' }}>Honest Assessment</a>{' '}
          labels this a <em>reparametrization</em> &mdash; plain words: the same curve wearing a
          different costume; fitting a known curve isn&apos;t discovering anything new.{' '}
          <strong>Plain verdict for casual readers:</strong> these curves look great but don&apos;t prove the idea &mdash;
          all three models (Synchronism, MOND, and NFW dark-matter halo) fit galaxy rotation curves about equally well.
          What matters is whether any makes a <em>different, testable prediction</em>, and the ensemble test
          (SPARC RAR, ΔBIC=+184) shows Synchronism collapses to MOND when γ is freed — curve-equivalence
          at fitted γ only, not theory-equivalence: the framework has no action, no Lagrangian, and no
          dynamics, so it inherits none of MOND&apos;s predictions beyond the fitted curve. See{' '}
          <a href="/honest-assessment#test-04a" style={{ color: 'var(--color-accent-blue)' }}>what the tests actually say →</a>
        </p>
        <div style={{
          background: 'rgba(245, 158, 11, 0.08)',
          border: '1px solid rgba(245, 158, 11, 0.25)',
          borderRadius: '0.375rem',
          padding: '0.6rem 0.9rem',
          marginBottom: '0.75rem',
          fontSize: '0.85rem',
          color: 'var(--color-text-muted)',
        }}>
          <strong style={{ color: '#f59e0b' }}>Parsimony note:</strong> MOND fits all 175 SPARC galaxies with a <em>single global</em> constant (a&#x2080;). Synchronism refits one free &#x03C1;<sub>crit</sub> <em>per galaxy</em> — an extra free parameter for each galaxy. By parsimony (BIC), the Synchronism per-galaxy fit is strictly dominated, not equivalent. Additionally, the scale A in &#x03C1;<sub>crit</sub> = A&middot;V<sub>flat</sub>&sup2; is itself{' '}
          <a href="/parameter-derivations" style={{ color: 'var(--color-accent-blue)' }}>Audited-Negative</a>{' '}
          (chain-of-custody failure: stated derivation gives A ≈ 4.6×10⁻⁵, 600× off the claimed 0.029 &mdash; the number outlived its computation). V<sub>flat</sub> is taken from existing SPARC/MOND fits, not independently predicted. See <a href="/parameter-derivations" style={{ color: 'var(--color-accent-blue)' }}>parameter derivations</a> for full accounting.
          <br /><br />
          <strong style={{ color: '#f59e0b' }}>γ note:</strong> the violet curve pins γ=2, which via γ=2/√N<sub>corr</sub> implies N<sub>corr</sub>=1 — stars treated as uncorrelated. No galaxy satisfies that; the data-preferred fit (γ≈0.49, ΔBIC=+7 vs +184 for γ=2) implies N<sub>corr</sub>≈17, still not a physical correlated-star count. See <a href="/galaxy-rotation" style={{ color: 'var(--color-accent-blue)' }}>Galaxy Rotation</a> for the full both-directions contradiction.
        </div>
        <div style={{
          background: 'rgba(239, 68, 68, 0.08)',
          border: '1px solid rgba(239, 68, 68, 0.3)',
          borderRadius: '0.375rem',
          padding: '0.6rem 0.9rem',
          marginBottom: '1rem',
          fontSize: '0.85rem',
          color: 'var(--color-text-muted)',
        }}>
          <strong style={{ color: '#ef4444' }}>Related environment result (corrected 2026-07-24):</strong> This card
          previously reported &ldquo;TEST-03: R&sup2; = 0.14 triggered as Failed against the 20% kill threshold.&rdquo;
          That statistic was never a valid TEST-03 measurement — archive tracing (2026-07-09) shows 0.14 is a
          Hubble-type/morphology term at SPARC scale (N &asymp; 171), not an environment-density result, and 0.14
          does not even exceed the 0.20 threshold it was said to fire. The registered environment test has since
          been run as registered (2026-07-14: SPARC RAR offsets vs Cosmicflows-4 ambient densities):
          <strong> r&sup2; = 0.0001</strong> against the framework&apos;s &gt;20% claim — the environment prediction
          is <strong>refuted by execution</strong>, not by the old conflated statistic.{' '}
          <a href="/tier-1-existing#TEST-05" style={{ color: 'var(--color-accent-blue)' }}>See Tier 1: TEST-03/TEST-05 for the full trace &rarr;</a>
        </div>

        <div style={{ background: 'rgba(239, 68, 68, 0.08)', border: '1px solid rgba(239, 68, 68, 0.35)', borderRadius: '0.375rem', padding: '0.75rem 0.9rem', marginBottom: '1rem', fontSize: '0.85rem' }}>
          <strong style={{ color: '#ef4444' }}>Why the stand-in misled (kept for the record):</strong> The dotted violet stand-in uses the same parametrization (&#x03B3;=2) that the RAR ensemble test <strong>rejected at ΔBIC=+184</strong>. It still overlaps MOND per-galaxy because &#x03C1;<sub>crit</sub> = A&middot;V<sub>flat</sub>&sup2; is <em>refit to each galaxy&apos;s own flat velocity</em> — that degree of freedom absorbs the shape mismatch one galaxy at a time. The ensemble RAR (all 2,807 SPARC data points — 175 galaxies — plotted together in acceleration space) is where &#x03B3;=2 dies: free-&#x03B3; converges to &#x03B3;&#x2248;0.49 with RMS identical to McGaugh-MOND to four digits. Per-galaxy shape recovery is not the same test as ensemble shape rejection.{' '}
          <strong>Cross-system failure (locality no-go):</strong> a single global ρ<sub>crit</sub>(V<sub>flat</sub>) — no per-galaxy refit — exposes a ~1.7 dex offset between the local volumetric density ρ(r) and the observed g<sub>bar</sub> that MOND tracks. That cross-system gap is the reason local-density frameworks fail where MOND succeeds; the per-galaxy overlap you see here hides it by refitting ρ<sub>crit</sub> independently for each galaxy.
        </div>
        <div style={{ background: 'rgba(56,189,248,0.07)', border: '1px solid rgba(56,189,248,0.2)', borderRadius: '0.375rem', padding: '0.6rem 0.9rem', marginBottom: '1rem', fontSize: '0.85rem' }}>
          <strong>Reading this plot:</strong>{' '}
          <span style={{ color: 'var(--color-text-secondary)' }}>
            In plain terms: the gray line sagging below the dots is the dark matter puzzle. The solid
            violet line — the framework&apos;s real equation — fails to fix it. The dotted amber line that
            used to be shown here was drawn to fit, not computed from the theory.
          </span>
          <ul style={{ margin: '0.4rem 0 0', color: 'var(--color-text-secondary)', paddingLeft: '1.2rem' }}>
            <li><strong>Dashed gray</strong> — Newtonian prediction using visible matter only (toy exponential disk). Drops off at the edges; this is the puzzle.</li>
            <li><strong>Dots</strong> — observed rotation velocities. Flat at large radius; doesn&apos;t drop like Newtonian says it should.</li>
            <li><strong>Violet solid</strong> — Synchronism&apos;s real C(&#x03C1;) at &#x03B3;=2 with the framework&apos;s asserted &#x03C1;<sub>crit</sub> = 0.029&middot;V&sup2;. The disk&apos;s density is thousands of times below &#x03C1;<sub>crit</sub>, so C stays near zero and the curve sits on the baryon line. <strong>This is the 2026-07-02 audit result, rendered.</strong> <em>Caveat (2026-08-05, revised same day):</em> that &ldquo;thousands of times below&rdquo; is <strong>conditional on A = 0.029</strong>, since &#x03C1;/&#x03C1;<sub>crit</sub> &#x221D; 1/A &mdash; at A = 4.6&times;10<sup>&minus;5</sup> the ratio for NGC 3198 is 0.60 and the curve would lift off the baryon line. But the 635&times; between them is a <strong>law swap, not a scale choice</strong>: universal A with &#x03C1;<sub>crit</sub> &#x221D; V&sup2; versus per-galaxy A &#x221D; R<sub>half</sub><sup>&minus;2</sup> with &#x03C1;<sub>crit</sub> &#x221D; V<sup>0.5</sup> &mdash; the two-law fork{' '}
            <Link href="/parameter-derivations" style={{ color: 'var(--color-accent-blue)' }}>parameter derivations</Link> item 1 has documented since 2026-06-07. An earlier version of this caveat attributed the gap to an unstated coarse-graining length &#x2113;; <strong>that is withdrawn</strong> &mdash; a self-consistent &#x2113; smooths &#x03C1; and &#x03C1;<sub>crit</sub> alike and <em>cancels</em>, leaving &#x03C1;/&#x03C1;<sub>crit</sub> &#x2272; 0.019&#x03B2;<sub>J</sub>&sup2; in every sector at every &#x2113;. This plot shows the framework under its own stated law.</li>
            <li><strong>Amber dotted</strong> — the hand-tuned tanh(radius) stand-in previously displayed. It fits because it was drawn to fit; no &#x03C1;, &#x03C1;<sub>crit</sub>, or &#x03B3; enters it. (Recolored from violet 2026-07-23: it is an illustration, not the theory.)</li>
            <li><strong>Green dashed</strong> — MOND&apos;s real simple-&#x03BD; function on a BTFR-assigned mass (one global a&#x2080;, zero per-galaxy knobs). It lands close to the dots — expect ~10% mismatches from the toy mass model, not from tuning.</li>
          </ul>
          <p style={{ margin: '0.6rem 0 0', fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>
            <strong>Which MOND, and why it matters (added 2026-07-29):</strong> the green curve here uses the simple-&#x03BD; family
            (&#x03BD; = &frac12; + &radic;(&frac14; + 1/y), power-law high-acceleration return) — the same family{' '}
            <Link href="/tier-1-existing#TEST-11" style={{ color: 'var(--color-accent-blue)' }}>TEST-11</Link>{' '}
            excludes at +17.7&ndash;18.0&sigma; against Cassini planetary ephemerides. The <Link href="/galaxy-rotation" style={{ color: 'var(--color-accent-blue)' }}>Galaxy Rotation</Link> page&apos;s
            RAR/&#x394;BIC test uses McGaugh&apos;s different exponential-return &#x03BD; = 1/(1&minus;e<sup>&minus;&radic;x</sup>), which is Cassini-safe. Both are called
            &ldquo;MOND&rdquo; on this site; they are not the same function, and only one of them survives the solar system.
          </p>
        </div>

        <div style={{ background: 'rgba(239, 68, 68, 0.08)', border: '1px solid rgba(239, 68, 68, 0.35)', borderRadius: '0.375rem', padding: '0.75rem 0.9rem', marginBottom: '1rem', fontSize: '0.85rem', color: 'var(--color-text-secondary)' }}>
          <strong style={{ color: '#ef4444' }}>The actual formulas plotted (disclosure, updated 2026-07-08):</strong>{' '}
          for a page badged Reparametrization, the formulas are the argument — so here they are, exactly as coded:
          <div style={{ fontFamily: 'monospace', fontSize: '0.8rem', margin: '0.5rem 0', padding: '0.5rem 0.75rem', background: 'rgba(0,0,0,0.25)', borderRadius: '4px', overflowX: 'auto' }}>
            Toy mass model: M_b = 47&middot;V_flat&#x2074; M&#x2609; (empirical BTFR, McGaugh 2011), exponential disk with each galaxy&apos;s observed scale length R_d, h = 0.3 kpc<br />
            Gray &ldquo;Newtonian&rdquo;: v_b(r) = &radic;(G&middot;M(&lt;r)/r), M(&lt;r) = M_disk&middot;[1 &minus; e^(&minus;r/R_d)(1+r/R_d)]<br />
            Violet SOLID &ldquo;Synchronism (real)&rdquo;: v(r) = &radic;(v_b&sup2; + [V_flat&middot;C(&#x03C1;(r))]&sup2;), C(&#x03C1;) = tanh(2&middot;ln(&#x03C1;/&#x03C1;<sub>crit</sub>+1)), &#x03C1;(r) = &#x03A3;(r)/2h, &#x03C1;<sub>crit</sub> = 0.029&middot;V_flat&sup2;<br />
            Amber DOTTED (old illustrative stand-in &mdash; what this page showed before 2026-07-08, kept for comparison): v(r) = &radic;(v_toy&sup2; + [V_flat&middot;tanh(0.4&middot;r/2.5)]&sup2;), v_toy = 0.6&middot;V_flat&middot;&radic;(1&minus;e^(&minus;r/2.5))<br />
            Green &ldquo;MOND&rdquo;: v(r) = v_b&middot;&radic;&#x03BD;(y), &#x03BD;(y) = &frac12; + &radic;(&frac14; + 1/y), y = g_N/a&#x2080;, g_N = v_b&sup2;/r (real simple-&#x03BD;)
          </div>
          The solid violet curve and the dotted one differ in exactly one ingredient: the coherence factor.
          The stand-in used tanh(<em>radius</em>) with hand-tuned constants; the real curve uses
          C(&#x03C1;) on the disk&apos;s density profile. With the framework&apos;s asserted
          &#x03C1;<sub>crit</sub> = 0.029&middot;V&sup2;, the disk midplane density sits orders of magnitude below
          &#x03C1;<sub>crit</sub> everywhere (the legend shows this galaxy&apos;s maximum C), so the boost never
          turns on and the real curve stays on the baryon line — the knee is never crossed, exactly as the
          2026-07-02 audit found by computation (its more charitable density estimates reach at most C &#x2248; 0.28;
          no estimate reaches the knee). What you see is the difference between a mechanism and a costume.
          The 2026-07-02 audit also showed the &#x03C1;<sub>crit</sub> = A&middot;V&sup2; scaling itself is
          sign-inverted: MOND-matching forces the knee density to <em>fall</em> as V<sup>&minus;2</sup>{' '}
          (BTFR envelope), while the framework makes it rise as V<sup>+2</sup> — see{' '}
          <a href="/parameter-derivations" style={{ color: 'var(--color-accent-blue)' }}>Parameter Derivations</a>.
          The stand-in is forced, not incidental: C(&#x03C1;) is a function of <em>local</em> density, while the
          rotation curve it needs to reproduce is organized by g<sub>bar</sub>, a <em>non-local</em>
          enclosed-mass acceleration — see the{' '}
          <a href="/honest-assessment#structural-tensions" style={{ color: 'var(--color-accent-blue)' }}>
            local-vs-non-local structural no-go
          </a>{' '}
          for why a pointwise density map cannot in general reproduce an acceleration-space relation without
          per-galaxy calibration.
          <p style={{ margin: '0.6rem 0 0' }}>
            <strong style={{ color: '#f59e0b' }}>Approximation note (added 2026-07-17, flagged by an
            expert reader):</strong> the gray Newtonian curve uses <em>spherical</em> enclosed mass for what is
            physically a thin exponential disk. The exact thin-disk result (Freeman 1970:
            v&sup2; = 4&pi;G&Sigma;&#x2080;R<sub>d</sub>&middot;y&sup2;[I&#x2080;K&#x2080; &minus; I&#x2081;K&#x2081;],
            modified Bessel functions) runs ~15&ndash;20% <em>higher</em> near the peak (r &#x2248; 2R<sub>d</sub>),
            so the plotted Newtonian baseline understates the baryonic prediction there and the visual
            &ldquo;dark matter gap&rdquo; — this page&apos;s pedagogical centerpiece — is modestly exaggerated near
            the peak. The gap itself is real and much larger than this correction at large radius (where the
            discrepancy actually lives), so no conclusion flips; a Bessel-function implementation is queued for a
            future pass rather than rushed here.
          </p>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
          {galaxies.map((g, i) => (
            <button
              key={g.name}
              onClick={() => setSelected(i)}
              style={{
                background: i === selected ? 'var(--color-accent-violet)' : 'var(--color-dark-surface)',
                color: i === selected ? '#fff' : 'var(--color-text-secondary)',
                border: '1px solid var(--color-dark-border)',
                borderRadius: '4px',
                padding: '0.3rem 0.75rem',
                cursor: 'pointer',
                fontSize: '0.85rem',
              }}
            >
              {g.name}
            </button>
          ))}
        </div>

        <div className="card" style={{ marginBottom: '1.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem', flexWrap: 'wrap', gap: '0.5rem' }}>
            <span style={{ color: 'var(--color-text-primary)', fontWeight: 'bold' }}>{galaxy.name}</span>
            <span style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>
              {galaxy.type}
            </span>
          </div>
          <div style={{ background: 'rgba(245,158,11,0.08)', borderRadius: '4px', padding: '0.4rem 0.6rem', marginBottom: '0.75rem', fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>
            <strong style={{ color: '#f59e0b' }}>V<sub>flat</sub> = {galaxy.vflat} km/s (calibrated input)</strong>
            {' '}— taken from SPARC/MOND fits for this galaxy. The violet curve is fitted to this value,
            not predicted from first principles. Any MOND-like shape that uses V<sub>flat</sub> as input
            will recover the flat portion of the curve by construction. See{' '}
            <a href="/honest-assessment" style={{ color: 'var(--color-accent-blue)' }}>Honest Assessment</a>.
          </div>

          <svg viewBox={`0 0 ${svgW} ${svgH}`} style={{ width: '100%', height: 'auto', display: 'block' }}>
            {/* Grid */}
            {[0, 0.25, 0.5, 0.75, 1.0].map(frac => {
              const y = pad.top + (1 - frac) * plotH;
              const v = (frac * yMax).toFixed(0);
              return (
                <g key={frac}>
                  <line x1={pad.left} y1={y} x2={pad.left + plotW} y2={y} stroke="rgba(255,255,255,0.06)" />
                  <text x={pad.left - 8} y={y + 4} textAnchor="end" fill="#6b7280" fontSize="9">{v}</text>
                </g>
              );
            })}

            {/* Axes */}
            <line x1={pad.left} y1={pad.top} x2={pad.left} y2={pad.top + plotH} stroke="#6b7280" />
            <line x1={pad.left} y1={pad.top + plotH} x2={pad.left + plotW} y2={pad.top + plotH} stroke="#6b7280" />
            <text x={pad.left + plotW / 2} y={svgH - 8} textAnchor="middle" fill="#9ca3af" fontSize="11">Radius (kpc)</text>
            <text x={14} y={pad.top + plotH / 2} textAnchor="middle" fill="#9ca3af" fontSize="11" transform={`rotate(-90,14,${pad.top + plotH / 2})`}>V (km/s)</text>

            {/* Newtonian curve (dashed gray) */}
            <path
              d={modelPoints.map((p, i) => `${i === 0 ? 'M' : 'L'}${toX(p.r).toFixed(1)},${toY(p.vNew).toFixed(1)}`).join(' ')}
              fill="none" stroke="#6b7280" strokeWidth="1.5" strokeDasharray="5 3"
            />

            {/* MOND curve (green dashed) — real simple-ν interpolating function */}
            <path
              d={modelPoints.map((p, i) => `${i === 0 ? 'M' : 'L'}${toX(p.r).toFixed(1)},${toY(p.vMond).toFixed(1)}`).join(' ')}
              fill="none" stroke="#22c55e" strokeWidth="1.5" strokeDasharray="6 3"
            />

            {/* Hand-tuned stand-in (amber dotted — recolored 2026-07-23; two violet curves were indistinguishable to casual readers) */}
            <path
              d={modelPoints.map((p, i) => `${i === 0 ? 'M' : 'L'}${toX(p.r).toFixed(1)},${toY(p.vSyn).toFixed(1)}`).join(' ')}
              fill="none" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="2 4" opacity="0.75"
            />

            {/* Real C(ρ) Synchronism curve (violet solid) — hugs the baryon line */}
            <path
              d={modelPoints.map((p, i) => `${i === 0 ? 'M' : 'L'}${toX(p.r).toFixed(1)},${toY(p.vSynReal).toFixed(1)}`).join(' ')}
              fill="none" stroke="#8b5cf6" strokeWidth="2.5"
            />

            {/* Observed data points (blue dots) */}
            {galaxy.points.map(([r, v], i) => (
              <circle key={i} cx={toX(r)} cy={toY(v)} r="4" fill="#38bdf8" />
            ))}

            {/* Legend */}
            <circle cx={pad.left + 20} cy={pad.top + 15} r="4" fill="#38bdf8" />
            <text x={pad.left + 30} y={pad.top + 19} fill="#38bdf8" fontSize="10">Observed</text>
            <line x1={pad.left + 20 - 8} y1={pad.top + 30} x2={pad.left + 20 + 8} y2={pad.top + 30} stroke="#8b5cf6" strokeWidth="2.5" />
            <text x={pad.left + 30} y={pad.top + 34} fill="#8b5cf6" fontSize="10">Synchronism &mdash; REAL C(&#x03C1;), &#x03B3;=2 (max C on this disk: {maxC.toFixed(3)} &mdash; boost never turns on)</text>
            <line x1={pad.left + 20 - 8} y1={pad.top + 45} x2={pad.left + 20 + 8} y2={pad.top + 45} stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="2 4" opacity="0.75" />
            <text x={pad.left + 30} y={pad.top + 49} fill="#f59e0b" fontSize="10" opacity="0.9">Illustration only — hand-tuned to fit, NOT computed from the theory</text>
            <line x1={pad.left + 20 - 8} y1={pad.top + 60} x2={pad.left + 20 + 8} y2={pad.top + 60} stroke="#22c55e" strokeWidth="1.5" strokeDasharray="4 2" />
            <text x={pad.left + 30} y={pad.top + 64} fill="#22c55e" fontSize="10">MOND (real simple-&#x03BD;, BTFR mass, no per-galaxy tuning)</text>
            <line x1={pad.left + 20 - 8} y1={pad.top + 75} x2={pad.left + 20 + 8} y2={pad.top + 75} stroke="#6b7280" strokeWidth="1.5" strokeDasharray="3 2" />
            <text x={pad.left + 30} y={pad.top + 79} fill="#6b7280" fontSize="10">Newtonian (baryons only, toy disk)</text>
          </svg>
        </div>

        <div className="card" style={{ marginBottom: '1.5rem' }}>
          <h3>What You&apos;re Seeing</h3>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
            The <span style={{ color: '#6b7280' }}>dashed line</span> is what rotation curves
            should look like with only visible matter (stars + gas). The
            <span style={{ color: '#38bdf8' }}> blue dots</span> are what we actually observe.
            The gap is the &ldquo;dark matter problem.&rdquo;
          </p>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', marginTop: '0.5rem' }}>
            The <span style={{ color: '#8b5cf6' }}>solid violet curve</span> is Synchronism&apos;s real
            C(&#x03C1;) evaluated on the disk&apos;s density profile &mdash; and it <strong>fails to fill the
            gap</strong>: the disk never gets dense enough for the coherence boost to turn on
            (this galaxy&apos;s maximum C is {maxC.toFixed(3)}; the knee needs C to approach 1). The{' '}
            <span style={{ color: '#f59e0b' }}>dotted amber curve</span> is the hand-tuned
            tanh(radius) stand-in this page displayed before 2026-07-08 &mdash; it fit because it was
            drawn to fit. Full disclosure of both formulas below the plot.
          </p>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', marginTop: '0.5rem' }}>
            The <span style={{ color: '#22c55e' }}>green dashed curve</span> is MOND (Modified
            Newtonian Dynamics) using its real simple-&#x03BD; interpolating function and the acceleration
            scale a&#x2080; &#x2248; 1.2&times;10&#x207B;&#xB9;&#x2070; m/s&sup2;, on a mass fixed by the baryonic
            Tully&ndash;Fisher relation &mdash; no per-galaxy tuning at all. The stand-in the framework needed
            to look like MOND is what the site labels a <em>reparametrization</em>; the real equation
            doesn&apos;t even manage the costume.
          </p>
        </div>

        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem' }}>
          Note: Curves shown are simplified models for illustration. Actual SPARC fits use
          full surface brightness profiles and mass-to-light ratios. See the research data for
          precise fits.
        </p>
      </section>

      <RelatedConcepts currentPath="/galaxy-plotter" />
    </>
  );
}
