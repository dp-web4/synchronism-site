import Link from 'next/link';
import { BADGES, OPERATIONAL_STATES, LIFECYCLE_VERBS } from '@/lib/statusLabels';

// One map of every label system on the site (added 2026-10-21).
// A technical-writer persona counted five label systems kept apart only by ~22 "not a badge /
// not a verdict / not a level" disclaimers, with no page listing them side by side.
// Membership is rendered from statusLabels.ts so this table cannot drift from the badges.

const cell: React.CSSProperties = { padding: '0.4rem 0.5rem', verticalAlign: 'top', borderTop: '1px solid rgba(148,163,184,0.2)' };

export default function LabelMap() {
  const mrh = BADGES.filter(b => b.family === 'mrh').map(b => b.name).join(', ');
  const desc = BADGES.filter(b => b.family === 'descriptive').map(b => b.name).join(', ');
  const rows: { system: string; answers: string; where: string; members: string }[] = [
    { system: 'Validation badge: MRH-relationship', answers: 'Where does this claim sit in the research inventory?', where: 'Coloured pill under a page title or on a claim', members: mrh },
    { system: 'Validation badge: descriptive', answers: 'What happened when it met data?', where: 'Coloured pill under a page title or on a claim', members: desc },
    { system: 'Deprecated badge', answers: 'Nothing new; kept so old text still reads', where: 'Only in history notes and legends', members: 'Validated, Strongly Supported' },
    { system: 'Operational state', answers: 'What did this test do, or what happened to it?', where: 'Test cards (Tier 1, Test Catalog), next to the badge', members: OPERATIONAL_STATES.join(', ') },
    { system: 'Lifecycle verb', answers: 'What is the history of this row?', where: 'Inside status text and revision notes', members: LIFECYCLE_VERBS.join(', ') },
    { system: 'Descriptor / qualifier', answers: 'A caveat on a badge, not a verdict', where: 'In brackets after a badge or result', members: 'Post-diction, Caveat, Underpowered as Registered' },
    { system: 'Tool Kind', answers: 'What sort of interactive tool is this?', where: 'Interactive Tools hub cards', members: 'Model Explainer, Chemistry Data, Consciousness' },
    { system: 'Tool Level', answers: 'How much background does it assume?', where: 'Interactive Tools hub cards', members: 'Beginner, Intermediate, Advanced' },
  ];
  return (
    <div id="label-map" style={{ marginBottom: '2rem', scrollMarginTop: '5rem' }}>
      <h2 style={{ fontSize: '1.1rem' }}>How to read labels on this site</h2>
      <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>
        The site uses eight kinds of label. Only the first two are verdicts on a claim. If a label is not in the first two
        rows, it is not a badge. Full definitions:{' '}
        <Link href="/honest-assessment#validation-badge-definitions" style={{ color: 'var(--color-accent-blue)' }}>badges</Link>,{' '}
        <Link href="/honest-assessment#operational-states" style={{ color: 'var(--color-accent-blue)' }}>operational states</Link>,{' '}
        <Link href="/honest-assessment#status-lifecycle-verbs" style={{ color: 'var(--color-accent-blue)' }}>lifecycle verbs</Link>,{' '}
        <Link href="/interactive-tools" style={{ color: 'var(--color-accent-blue)' }}>tool Kind and Level</Link>.
      </p>
      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.82rem', color: 'var(--color-text-secondary)' }}>
          <thead>
            <tr style={{ textAlign: 'left' }}>
              <th style={cell}>Label system</th><th style={cell}>Question it answers</th><th style={cell}>Where you see it</th><th style={cell}>Members</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(r => (
              <tr key={r.system}>
                <td style={cell}><strong>{r.system}</strong></td><td style={cell}>{r.answers}</td><td style={cell}>{r.where}</td><td style={cell}>{r.members}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
