import Link from 'next/link';
import { BADGES, OPERATIONAL_STATES, LIFECYCLE_VERBS, RETIRED_LABELS, CARD_STATES } from '@/lib/statusLabels';

// One map of every label system on the site (added 2026-10-21).
// A technical-writer persona counted five label systems kept apart only by ~22 "not a badge /
// not a verdict / not a level" disclaimers, with no page listing them side by side.
// Membership is rendered from statusLabels.ts so this table cannot drift from the badges.

const cell: React.CSSProperties = { padding: '0.4rem 0.5rem', verticalAlign: 'top', borderTop: '1px solid rgba(148,163,184,0.2)' };

export default function LabelMap() {
  const mrh = BADGES.filter(b => b.family === 'mrh').map(b => b.name).join(', ');
  const desc = BADGES.filter(b => b.family === 'descriptive').map(b => b.name).join(', ');
  const verdicts: { system: string; answers: string; where: string; members: string }[] = [
    { system: 'Status badge: MRH-relationship', answers: `Where does this claim sit relative to current research focus? (MRH = Markov Relevancy Horizon, borrowed by analogy; says nothing about physics)`, where: 'Coloured pill under a page title or on a claim', members: mrh },
    { system: 'Status badge: descriptive', answers: 'What happened when it met data?', where: 'Coloured pill under a page title or on a claim', members: desc },
    { system: 'Scoreboard word', answers: 'How did a whole piece of the framework fare against data? (a verdict on the piece, not on one page)', where: 'Landing page \u201cWhere each piece stands\u201d table and the scoreboard', members: 'Excluded, Excluded at its own cap, Excluded by Bell experiments, Is MOND, Is \u039B, Survives, No number to test, One joint requirement (open); outcome words such as Disfavoured are defined in the glossary' },
    { system: 'Ledger class', answers: 'What kind of refutation is a counted row? (a verdict on the row)', where: 'Beside the refutation count (landing, Honest Assessment, footer)', members: 'framework-specific (asserts framework content on data), inherited from MOND, unmeetable registration, construction check' },
  ];
  // 2026-11-26: operational states and lifecycle verbs were listed as two systems, but the card State slot
  // already draws from both, so they are shown as one; tool Kind and Level are one line of metadata;
  // retired labels moved to a fold (technical-writer pass: "target four systems a reader must learn").
  const metadata: { system: string; answers: string; where: string; members: string }[] = [
    { system: 'Test history (the State slot)', answers: 'What did this test do, or what happened to it?', where: 'Test cards (Tier 1, Test Roadmap), next to the badge, and inside status text', members: `${OPERATIONAL_STATES.join(', ')}; and the history verbs ${LIFECYCLE_VERBS.join(', ')}` },
    { system: 'Caveat in brackets', answers: 'A qualifier on a badge, not a verdict', where: 'In brackets after a badge or result', members: 'Post-diction, Caveat' },
    { system: 'Tool metadata', answers: 'What sort of tool, and how much background it assumes', where: 'Interactive Tools hub cards', members: 'Kind: Model Explainer, Chemistry Data, Consciousness. Level: Beginner, Intermediate, Advanced' },
  ];
  const table = (rows: typeof verdicts) => (
    <div style={{ overflowX: 'auto' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.82rem', color: 'var(--color-text-secondary)' }}>
        <thead>
          <tr style={{ textAlign: 'left' }}>
            <th style={cell}>Label</th><th style={cell}>Question it answers</th><th style={cell}>Where you see it</th><th style={cell}>Members</th>
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
  );
  return (
    <div id="label-map" style={{ marginBottom: '2rem', scrollMarginTop: '5rem' }}>
      <h2 style={{ fontSize: '1.1rem' }}>How to read labels on this site</h2>
      <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>
        <strong>Four kinds of label are verdicts, and they are the only ones you need</strong> (about twenty words in all, listed in the first table; everything after it is metadata). The two badge families judge one claim on a page;
        the scoreboard word judges a whole piece of the framework; the ledger class says what kind of refutation a counted row is. To ask
        &ldquo;did this part of the theory survive contact with data?&rdquo;, read the scoreboard word. Full definitions:{' '}
        <Link href="/honest-assessment#validation-badge-definitions" style={{ color: 'var(--color-accent-blue)' }}>badges</Link>,{' '}
        <Link href="/honest-assessment#operational-states" style={{ color: 'var(--color-accent-blue)' }}>test states</Link>,{' '}
        <Link href="/honest-assessment#status-lifecycle-verbs" style={{ color: 'var(--color-accent-blue)' }}>history verbs</Link>.
      </p>
      {table(verdicts)}
      <h3 style={{ fontSize: '0.95rem', marginTop: '1rem' }}>Not verdicts: metadata you can skim</h3>
      {table(metadata)}
      <details style={{ marginTop: '0.6rem', fontSize: '0.82rem', color: 'var(--color-text-muted)' }}>
        <summary style={{ cursor: 'pointer' }}>Old labels you may still meet in history notes</summary>
        <p style={{ margin: '0.4rem 0 0' }}>These are retired and mean nothing new; they are kept so older text still reads: {RETIRED_LABELS.map(r => r.name).join(', ')}.</p>
      </details>
      <h3 id="test-card-states" style={{ fontSize: '0.95rem', marginTop: '1.25rem', scrollMarginTop: '5rem' }}>Values that appear in a card&apos;s State slot</h3>
      <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>
        The &ldquo;State&rdquo; slot on a Tier 1 or Test Roadmap card draws from both operational states and lifecycle verbs. A card
        carries at most one badge and one State; a parenthesis after the State names a substitute run&apos;s state or what it is
        shared with.
      </p>
      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.82rem', color: 'var(--color-text-secondary)' }}>
          <tbody>
            {CARD_STATES.map(c => (
              <tr key={c.name}>
                <td style={cell}><strong>{c.name}</strong></td><td style={cell}>{c.kind}</td><td style={cell}>{c.oneLiner}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
