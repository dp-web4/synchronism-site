'use client';

import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import ValidationBadge from '@/components/ValidationBadge';
import type { ValidationStatus } from '@/lib/types';

// Kind = content grouping only. Renamed 2026-09-23 (visitor tech-writer pass): two of the
// three Kind names were badge names ("Reparametrization", "Speculative"), so a disclaimer had
// to say they were not badges. Kinds now use non-badge names, and each card shows the actual
// ValidationBadge(s) its own tool page carries (pageBadges), so the index and the page agree.
type EpistemicStatus = 'core' | 'chemistry' | 'consciousness';

const statusStyle: Record<EpistemicStatus, { bg: string; color: string; label: string }> = {
  // Descriptive content grouping, NOT a validation verdict: marks tools that explain the
  // model's own machinery (equation, parameters) rather than present evidence for it.
  // Renamed from "Core Theory" 2026-06-12 — that label read as certification on a site
  // whose own audit counts 0 independently-derived parameters.
  core: { bg: 'rgba(56, 189, 248, 0.12)', color: '#38bdf8', label: 'Model Explainer' },
  chemistry: { bg: 'rgba(245, 158, 11, 0.12)', color: '#f59e0b', label: 'Chemistry Data' },
  consciousness: { bg: 'rgba(239, 68, 68, 0.10)', color: '#f87171', label: 'Consciousness' },
  // 'failed' ("Kill Criterion Triggered") removed from this legend 2026-07-17: no tool card uses it,
  // and the canonical taxonomy classifies it as an operational state, not a badge.
};

const coreTools = [
  {
    title: 'Coherence Explorer',
    href: '/coherence-explorer',
    desc: 'Drag γ and ρ_crit sliders and watch the C(ρ) curve update live. See how the sparse/independent → dense/collective transition sharpens or flattens. Best first tool.',
    level: 'Beginner',
    epistemic: 'core' as EpistemicStatus,
  },
  {
    title: 'Galaxy Curve Plotter',
    href: '/galaxy-plotter',
    desc: 'Pick a SPARC galaxy and see the dark-matter problem: the gray Newtonian line (visible matter) sags below the observed dots. Violet = the framework\'s equation as published, which hugs the Newtonian line and never fills the gap (inert in the display\'s quadrature wiring; the ledger\'s division wiring, g_bar/C, fails the other way by over-boosting, ~10³× in g for a dwarf like DDO 154). Green = MOND\'s simple interpolating function. Dotted amber = a hand-tuned illustration, not computed from the theory.',
    level: 'Beginner',
    epistemic: 'core' as EpistemicStatus,
    pageBadges: ['failed', 'reparametrization'] as ValidationStatus[],
  },
  {
    title: 'γ Calculator',
    href: '/gamma-calculator',
    desc: 'Input N_corr (number of correlated particles) and read off γ = 2/√N_corr — then see why the formula is audited-negative: the most tightly correlated matter (BCS superconductors, BEC) gets the flattest curves, backwards from real condensed-matter physics. The galaxy preset also refutes the framework\'s own γ=2 assertion. Presets: ideal gas, liquid water, galaxy (SPARC best fit), enzyme site, ferromagnet, BEC, BCS superconductor.',
    level: 'Beginner',
    state: 'Artifact Lesson',
    epistemic: 'core' as EpistemicStatus,
    pageBadges: ['audited-negative'] as ValidationStatus[],
  },
  {
    title: 'Crossover Regime Visualizer',
    href: '/phase-boundary-visualizer',
    desc: '(Formerly "Phase Boundary Visualizer" — C(ρ) has no phase transition, only a smooth crossover.) Drag the γ slider and catch a refuted formula being wrong at every stop — the tool now teaches the audited sign inversion as its lesson (real BCS/BEC transitions are among nature\'s sharpest; the formula files them at the flat end). Each regime card carries a live reality-check line. Note: the axis here is γ, not coherence C.',
    level: 'Intermediate',
    state: 'Artifact Lesson',
    epistemic: 'core' as EpistemicStatus,
    pageBadges: ['audited-negative'] as ValidationStatus[],
  },
  {
    title: 'Equation Anatomy',
    href: '/equation-walkthrough',
    desc: 'Step-by-step breakdown of C(ρ) = tanh(γ·ln(ρ/ρcrit + 1)). Each step shows one equation component, its physical motivation, and why the specific functional form was chosen (not derived).',
    level: 'Beginner',
    epistemic: 'core' as EpistemicStatus,
    pageBadges: ['audited-negative'] as ValidationStatus[],
  },
  {
    title: 'Chemistry Correlation Explorer',
    href: '/chemistry-correlation-explorer',
    desc: 'See how γ correlates with chemical properties across 1,703 phenomena. High r values (0.98+) reflect density-monotonicity, not Synchronism-specific physics — the page states the null-model result (a 2-parameter polynomial in Z matches every r to within 0.07, sometimes better) at the head of the table; it has no per-row null column, and how γ was assigned per material is undocumented.',
    level: 'Advanced',
    epistemic: 'chemistry' as EpistemicStatus,
  },
];

const speculativeTools = [
  {
    title: 'Consciousness Threshold Demo',
    href: '/consciousness-demo',
    desc: 'Watch 8 "independent" approaches converge on C ≈ 0.50 — because they share one assumption. The convergence is geometric, not empirical: any approach keyed to the midpoint of a [0,1)-bounded range lands near 0.50 by construction. The threshold is untestable as stated (no calibration to EEG/fMRI/IIT/PCI* exists; the one cited test measured a different variable). An artifact lesson, not a finding about consciousness.',
    level: 'Beginner',
    state: 'Artifact Lesson',
    epistemic: 'consciousness' as EpistemicStatus,
    pageBadges: ['speculative'] as ValidationStatus[],
  },
];

export default function InteractiveTools() {
  return (
    <>
      <Breadcrumbs currentPath="/interactive-tools" />
      <h1>Interactive Tools</h1>
      <p style={{ color: 'var(--color-text-secondary)', marginBottom: '0.75rem', maxWidth: '60ch' }}>
        All of Synchronism&apos;s interactive tools in one place. Each card carries <strong>three
        separately-labelled slots</strong>, so you know what you&apos;re looking at before you click in:
        a <strong>Kind</strong> (top right &mdash; what sort of thing the tool is),
        a <strong>Level</strong> (the difficulty scale: Beginner / Intermediate / Advanced), and,
        where it applies, a <strong>Status</strong> (an operational state, square-cornered and amber,
        deliberately styled so it cannot be mistaken for a difficulty).
      </p>
      <p style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem', marginBottom: '1rem', maxWidth: '60ch' }}>
        <strong>Before the legend:</strong> this is a <em>content grouping</em>, not the site&apos;s validation
        badge taxonomy. &ldquo;Model Explainer&rdquo; means &ldquo;shows how the equation works,&rdquo; not a
        verdict on whether the equation is correct. &ldquo;Chemistry Data&rdquo; and &ldquo;Consciousness&rdquo;
        name the topic, nothing more. The verdict lives in a separate slot: where a tool&apos;s own page
        carries a{' '}
        <Link href="/honest-assessment#validation-badge-definitions" style={{ color: 'var(--color-accent-blue)' }}>
          validation badge
        </Link>, its card shows that same badge under &ldquo;Badge on its page&rdquo;
        — no tool here is certified correct. Level uses one scale and one scale only: Beginner /
        Intermediate / Advanced. <strong>Artifact Lesson</strong> is <em>not</em> a level — it is an
        operational state (the site&apos;s own term, per{' '}
        <Link href="/tier-1-existing" style={{ color: 'var(--color-accent-blue)' }}>Tier 1</Link>) marking a tool kept
        deliberately to demonstrate a documented failure (a sign inversion, a geometric convergence)
        rather than to teach a working relation. It now sits in its own Status slot.
      </p>
      <details style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem', marginBottom: '1rem', maxWidth: '60ch' }}>
        <summary style={{ cursor: 'pointer' }}>Revision notes (history; not the current claim)</summary>
        Until 2026-09-23 two Kind names were badge names,
        &ldquo;Reparametrization&rdquo; and &ldquo;Speculative&rdquo;.{' '}
        Scale unified 2026-07-23; a &ldquo;Conceptual&rdquo; tag previously mixed levels.{' '}
        <strong>Fixed 2026-09-18:</strong> until that day &ldquo;Artifact Lesson&rdquo; was rendered in the Level slot
        next to &ldquo;Beginner&rdquo; and &ldquo;Advanced&rdquo;, and two visitor personas misread it from opposite
        directions on the same day &mdash; one as a difficulty, one as a vocabulary collision. Three tools that had
        no level at all now carry one.
      </details>
      <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '2rem', fontSize: '0.8rem' }}>
        {Object.entries(statusStyle).map(([key, s]) => (
          <span key={key} style={{ padding: '0.15rem 0.6rem', borderRadius: '9999px', background: s.bg, color: s.color }}>
            {s.label}
          </span>
        ))}
      </div>

      <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}>
        {coreTools.map(tool => {
          const ep = statusStyle[tool.epistemic];
          return (
            <Link key={tool.href} href={tool.href} style={{ textDecoration: 'none' }}>
              <div className="card" style={{
                height: '100%',
                transition: 'border-color 0.2s ease, transform 0.1s ease',
                cursor: 'pointer',
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.4rem', gap: '0.5rem' }}>
                  <h3 style={{ margin: 0 }}>{tool.title}</h3>
                  <span style={{
                    fontSize: '0.7rem',
                    padding: '0.1rem 0.5rem',
                    borderRadius: '9999px',
                    background: ep.bg,
                    color: ep.color,
                    whiteSpace: 'nowrap',
                    flexShrink: 0,
                  }}>
                    {ep.label}
                  </span>
                </div>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '0.75rem' }}>
                  {tool.desc}
                </p>
                <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', alignItems: 'center' }}>
                  <span style={{
                    fontSize: '0.75rem',
                    padding: '0.1rem 0.5rem',
                    borderRadius: '9999px',
                    background: 'rgba(139, 92, 246, 0.12)',
                    color: 'var(--color-accent-violet)',
                  }}>
                    Level: {tool.level}
                  </span>
                  {'state' in tool && tool.state ? (
                    <span style={{
                      fontSize: '0.75rem',
                      padding: '0.1rem 0.5rem',
                      borderRadius: '2px',
                      border: '1px solid rgba(245, 158, 11, 0.5)',
                      background: 'rgba(245, 158, 11, 0.10)',
                      color: '#f59e0b',
                    }}>
                      Status: {tool.state}
                    </span>
                  ) : null}
                </div>
                {'pageBadges' in tool && tool.pageBadges ? (
                  <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', alignItems: 'center', marginTop: '0.5rem', fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>
                    Badge on its page:
                    {tool.pageBadges.map(b => <ValidationBadge key={b} status={b} />)}
                  </div>
                ) : null}
              </div>
            </Link>
          );
        })}
      </div>

      <div style={{ marginTop: '2rem', padding: '1rem', borderRadius: '8px', background: 'rgba(56, 189, 248, 0.05)', border: '1px solid rgba(56, 189, 248, 0.15)', marginBottom: '2rem' }}>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem', margin: 0 }}>
          <strong>Where to start:</strong> Coherence Explorer (Model Explainer) → Galaxy Plotter (Model Explainer) → Honest Assessment.
          <span style={{ color: 'var(--color-text-muted)' }}> &ldquo;Model Explainer&rdquo; is a content grouping (tools that show how the equation works), not a validation badge — no tool here certifies the model as correct; see the badge definitions on the Honest Assessment. Each tool page repeats its card label next to its own claim badges, with a one-line &ldquo;tool type / claim status&rdquo; caption (the Galaxy Plotter, for example, is a Model Explainer whose drawn equation is badged Failed and whose MOND-matching stand-in is badged Reparametrization).</span>
          The six tools above illustrate the framework&apos;s core equation and its known reparametrizations, including the parts that failed.
        </p>
      </div>

      <div style={{ borderTop: '2px solid rgba(239, 68, 68, 0.3)', paddingTop: '1.5rem', marginBottom: '1rem' }}>
        <h2 style={{ fontSize: '1rem', color: '#f87171', marginBottom: '0.25rem' }}>Consciousness — Read Before Using</h2>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem', marginBottom: '1rem' }}>
          The tool below illustrates a speculative hypothesis with no empirical calibration.
          The convergence it displays is a mathematical property of the sigmoid, not an empirical finding about consciousness.
          The site&apos;s own AI review passes have repeatedly flagged it as the site&apos;s largest credibility liability (no outside human reviewer has assessed it).
          It is included for completeness with full disclosure.
        </p>
        <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}>
          {speculativeTools.map(tool => {
            const ep = statusStyle[tool.epistemic];
            return (
              <Link key={tool.href} href={tool.href} style={{ textDecoration: 'none' }}>
                <div className="card" style={{
                  height: '100%',
                  border: '1px solid rgba(239, 68, 68, 0.3)',
                  transition: 'border-color 0.2s ease, transform 0.1s ease',
                  cursor: 'pointer',
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.4rem', gap: '0.5rem' }}>
                    <h3 style={{ margin: 0 }}>{tool.title}</h3>
                    <span style={{
                      fontSize: '0.7rem',
                      padding: '0.1rem 0.5rem',
                      borderRadius: '9999px',
                      background: ep.bg,
                      color: ep.color,
                      whiteSpace: 'nowrap',
                      flexShrink: 0,
                    }}>
                      {ep.label}
                    </span>
                  </div>
                  <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '0.75rem' }}>
                    {tool.desc}
                  </p>
                  <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', alignItems: 'center' }}>
                    <span style={{
                      fontSize: '0.75rem',
                      padding: '0.1rem 0.5rem',
                      borderRadius: '9999px',
                      background: 'rgba(139, 92, 246, 0.12)',
                      color: 'var(--color-accent-violet)',
                    }}>
                      Level: {tool.level}
                    </span>
                    {tool.state ? (
                      <span style={{
                        fontSize: '0.75rem',
                        padding: '0.1rem 0.5rem',
                        borderRadius: '2px',
                        border: '1px solid rgba(245, 158, 11, 0.5)',
                        background: 'rgba(245, 158, 11, 0.10)',
                        color: '#f59e0b',
                      }}>
                        Status: {tool.state}
                      </span>
                    ) : null}
                  </div>
                  {tool.pageBadges ? (
                    <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', alignItems: 'center', marginTop: '0.5rem', fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>
                      Badge on its page:
                      {tool.pageBadges.map(b => <ValidationBadge key={b} status={b} />)}
                    </div>
                  ) : null}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
