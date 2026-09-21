import { useInView } from '../hooks/useInView'
import { SectionTitle } from '../components/ui/SectionTitle'
import { journeyEntries } from '../data/journey'

function JourneyEntry({ entry, index }) {
  const [ref, inView] = useInView()
  return (
    <div
      ref={ref}
      className="timeline-entry"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'none' : 'translateX(-16px)',
        transition: `all 0.55s ease ${index * 0.1}s`,
      }}
    >
      <div className="timeline-dot" aria-hidden="true" />

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <span style={{
          fontSize: '0.72rem',
          fontFamily: 'var(--font-mono)',
          color: 'var(--accent)',
          letterSpacing: '0.1em',
        }}>{entry.year}</span>

        <h3 style={{ fontSize: 'clamp(1rem, 2.5vw, 1.2rem)', fontWeight: 600, letterSpacing: '-0.02em' }}>
          {entry.title}
        </h3>

        <p style={{ fontSize: '0.9rem', color: 'var(--text-2)', lineHeight: 1.7, maxWidth: '56ch' }}>
          {entry.description}
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '4px' }}>
          {entry.tags.map(tag => (
            <span key={tag} style={{
              padding: '2px 9px',
              fontSize: '0.68rem',
              fontFamily: 'var(--font-mono)',
              background: 'var(--surface-2)',
              color: 'var(--text-3)',
              border: '1px solid var(--border)',
              borderRadius: '4px',
            }}>{tag}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

export function Journey() {
  return (
    <section id="journey" className="section-pad" aria-labelledby="journey-heading">
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 480px), 1fr))', gap: '64px', alignItems: 'start' }}>

          {/* Left: heading */}
          <div>
            <SectionTitle
              label="DEVELOPMENT JOURNEY"
              title="How I got here"
              description="Four years of BSCS, five completed projects, and one complex university FYP. Every project pushed the technical bar higher than the last."
            />
          </div>

          {/* Right: timeline */}
          <div>
            {journeyEntries.map((entry, i) => (
              <JourneyEntry key={entry.year} entry={entry} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
