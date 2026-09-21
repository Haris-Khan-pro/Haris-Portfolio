import { useInView } from '../hooks/useInView'
import { site } from '../data/site'

// ─── EASY TO UPDATE ──────────────────────────────────────────────────────────
// Edit src/data/site.js → currentlyBuilding to change what shows here.

function Card({ label, content, index }) {
  const [ref, inView] = useInView()
  return (
    <div
      ref={ref}
      style={{
        padding: '22px 24px',
        background: 'var(--surface)',
        border: '1px solid var(--border)',
        borderRadius: 'var(--radius-lg)',
        opacity: inView ? 1 : 0,
        transform: inView ? 'none' : 'translateY(16px)',
        transition: `all 0.5s ease ${index * 0.1}s`,
      }}
    >
      <div style={{ fontSize: '0.68rem', fontFamily: 'var(--font-mono)', color: 'var(--text-3)', letterSpacing: '0.1em', marginBottom: '10px' }}>
        {label}
      </div>
      {Array.isArray(content) ? (
        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px' }}>
          {content.map(item => (
            <li key={item} style={{ display: 'flex', gap: '8px', fontSize: '0.9rem', color: 'var(--text)', alignItems: 'center' }}>
              <span style={{ color: 'var(--accent)', fontSize: '0.7rem' }} aria-hidden="true">→</span>{item}
            </li>
          ))}
        </ul>
      ) : (
        <p style={{ fontSize: '0.9rem', color: 'var(--text)', lineHeight: 1.6 }}>{content}</p>
      )}
    </div>
  )
}

export function CurrentlyBuilding() {
  const { project, learning, next } = site.currentlyBuilding
  const [ref, inView] = useInView()

  return (
    <section id="currently" className="section-pad" aria-labelledby="currently-heading">
      <div className="container">
        <div
          ref={ref}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            marginBottom: '40px',
            opacity: inView ? 1 : 0,
            transform: inView ? 'none' : 'translateY(20px)',
            transition: 'all 0.6s ease',
          }}
        >
          <span style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'var(--accent)', letterSpacing: '0.1em' }}>
            WHAT'S NEXT
          </span>
          <h2 id="currently-heading" style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)', fontWeight: 700, letterSpacing: '-0.03em' }}>
            Currently building &amp; learning
          </h2>
          <p style={{ color: 'var(--text-2)', fontSize: '0.93rem', maxWidth: '52ch' }}>
            Updated regularly. This section reflects what I'm actively working on right now.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))', gap: '14px' }}>
          <Card label="BUILDING" content={project} index={0} />
          <Card label="LEARNING" content={learning} index={1} />
          <Card label="NEXT" content={next} index={2} />
        </div>
      </div>
    </section>
  )
}
