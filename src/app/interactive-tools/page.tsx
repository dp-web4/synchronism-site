'use client';

import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';

type EpistemicStatus = 'core' | 'reparametrization' | 'speculative' | 'failed';

const statusStyle: Record<EpistemicStatus, { bg: string; color: string; label: string }> = {
  // Descriptive content grouping, NOT a validation verdict: marks tools that explain the
  // model's own machinery (equation, parameters) rather than present evidence for it.
  // Renamed from "Core Theory" 2026-06-12 — that label read as certification on a site
  // whose own audit counts 0 independently-derived parameters.
  core: { bg: 'rgba(56, 189, 248, 0.12)', color: '#38bdf8', label: 'Model Explainer' },
  reparametrization: { bg: 'rgba(245, 158, 11, 0.12)', color: '#f59e0b', label: 'Reparametrization' },
  speculative: { bg: 'rgba(239, 68, 68, 0.10)', color: '#f87171', label: 'Speculative' },
  failed: { bg: 'rgba(239, 68, 68, 0.10)', color: '#ef4444', label: 'Kill Criterion Triggered' },
};

const coreTools = [
  {
    title: 'Coherence Explorer',
    href: '/coherence-explorer',
    desc: 'Drag γ and ρ_crit sliders and watch the C(ρ) curve update live. See how the sparse/independent → dense/collective transition sharpens or flattens. Best first tool.',
    tags: ['Beginner'],
    epistemic: 'core' as EpistemicStatus,
  },
  {
    title: 'Galaxy Curve Plotter',
    href: '/galaxy-plotter',
    desc: 'Pick a SPARC galaxy. See four curves: Newtonian prediction (dashed), observed rotation (dots), Synchronism consistency check (violet, fitted to V_flat), and MOND (green). Synchronism and MOND nearly overlap — this is what a reparametrization looks like.',
    tags: ['Beginner'],
    epistemic: 'reparametrization' as EpistemicStatus,
  },
  {
    title: 'γ Calculator',
    href: '/gamma-calculator',
    desc: 'Input N_corr (number of correlated particles) and read off γ, the regime label, and what that means physically. Presets: gas, liquid, crystal, BCS superconductor, BEC.',
    tags: ['Intermediate'],
    epistemic: 'core' as EpistemicStatus,
  },
  {
    title: 'Phase Boundary Visualizer',
    href: '/phase-boundary-visualizer',
    desc: 'Drag the γ slider and see where familiar systems (ideal gas, water, BCS superconductor, galaxies) sit along the γ axis (transition sharpness). Note: the axis here is γ, not coherence C — coherence also depends on ρ. A full γ–ρ phase diagram is not yet implemented.',
    tags: ['Intermediate'],
    epistemic: 'core' as EpistemicStatus,
  },
  {
    title: 'Equation Anatomy',
    href: '/equation-walkthrough',
    desc: 'Step-by-step breakdown of C(ρ) = tanh(γ·ln(ρ/ρcrit + 1)). Each step shows one equation component, its physical motivation, and why the specific functional form was chosen (not derived).',
    tags: ['Conceptual'],
    epistemic: 'core' as EpistemicStatus,
  },
  {
    title: 'Chemistry Correlation Explorer',
    href: '/chemistry-correlation-explorer',
    desc: 'See how γ correlates with chemical properties across 1,703 phenomena. High r values (0.98+) reflect density-monotonicity, not Synchronism-specific physics — the tool shows the null model (2-parameter polynomial in Z) alongside the data, and the null matches or beats it.',
    tags: ['Advanced'],
    epistemic: 'reparametrization' as EpistemicStatus,
  },
];

const speculativeTools = [
  {
    title: 'Consciousness Threshold Demo',
    href: '/consciousness-demo',
    desc: 'Eight approaches to coherence-based consciousness all converge near C ≈ 0.50 — a geometric artifact: all eight share the tanh assumption and cluster at its inflection by construction. The threshold is untestable as stated: no calibration to EEG/fMRI/IIT data exists, and the one cited test (gnosis-research S63) measured a different variable. This tool illustrates a mathematical property of the sigmoid, not a finding about consciousness.',
    tags: ['Advanced'],
    epistemic: 'speculative' as EpistemicStatus,
  },
];

export default function InteractiveTools() {
  return (
    <>
      <Breadcrumbs currentPath="/interactive-tools" />
      <h1>Interactive Tools</h1>
      <p style={{ color: 'var(--color-text-secondary)', marginBottom: '0.75rem', maxWidth: '60ch' }}>
        All of Synchronism&apos;s interactive tools in one place. Each card shows an epistemic status
        badge so you know what you&apos;re looking at before you click in.
      </p>
      <p style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem', marginBottom: '1rem', maxWidth: '60ch' }}>
        <strong>Before the legend:</strong> this is a <em>content grouping</em>, not the site&apos;s validation
        badge taxonomy. &ldquo;Model Explainer&rdquo; means &ldquo;shows how the equation works,&rdquo; not a
        verdict on whether the equation is correct. &ldquo;Reparametrization&rdquo; and &ldquo;Speculative&rdquo;
        here match those two{' '}
        <Link href="/honest-assessment#validation-badge-definitions" style={{ color: 'var(--color-accent-blue)' }}>
          documented descriptive badges
        </Link>{' '}
        — no tool here is certified correct.
      </p>
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
                <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                  {tool.tags.map(tag => (
                    <span key={tag} style={{
                      fontSize: '0.75rem',
                      padding: '0.1rem 0.5rem',
                      borderRadius: '9999px',
                      background: 'rgba(139, 92, 246, 0.12)',
                      color: 'var(--color-accent-violet)',
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      <div style={{ marginTop: '2rem', padding: '1rem', borderRadius: '8px', background: 'rgba(56, 189, 248, 0.05)', border: '1px solid rgba(56, 189, 248, 0.15)', marginBottom: '2rem' }}>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem', margin: 0 }}>
          <strong>Where to start:</strong> Coherence Explorer (Model Explainer) → Galaxy Plotter (Reparametrization) → Honest Assessment.
          <span style={{ color: 'var(--color-text-muted)' }}> &ldquo;Model Explainer&rdquo; is a content grouping (tools that show how the equation works), not a validation badge — no tool here certifies the model as correct; see the badge definitions on the Honest Assessment.</span>
          The six tools above are grounded in the framework&apos;s core theory or known reparametrizations.
        </p>
      </div>

      <div style={{ borderTop: '2px solid rgba(239, 68, 68, 0.3)', paddingTop: '1.5rem', marginBottom: '1rem' }}>
        <h2 style={{ fontSize: '1rem', color: '#f87171', marginBottom: '0.25rem' }}>Speculative — Read Before Using</h2>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem', marginBottom: '1rem' }}>
          The tool below illustrates a speculative hypothesis with no empirical calibration.
          The convergence it displays is a mathematical property of the sigmoid, not an empirical finding about consciousness.
          Expert reviewers have flagged it as the site&apos;s largest credibility liability.
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
                  <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                    {tool.tags.map(tag => (
                      <span key={tag} style={{
                        fontSize: '0.75rem',
                        padding: '0.1rem 0.5rem',
                        borderRadius: '9999px',
                        background: 'rgba(139, 92, 246, 0.12)',
                        color: 'var(--color-accent-violet)',
                      }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
