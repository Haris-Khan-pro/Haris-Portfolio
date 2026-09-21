import { useInView } from '../hooks/useInView'
import { SectionTitle } from '../components/ui/SectionTitle'
import { additionalProjects } from '../data/projects'

function MiniCard({ project, index }) {
  const [ref, inView] = useInView()

  return (
    <article
      ref={ref}
      style={{
        background: 'var(--surface)',
        border: '1px solid var(--border)',
        borderRadius: 'var(--radius-lg)',
        padding: '22px',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        transition: 'all 0.3s ease',
        opacity: inView ? 1 : 0,
        transform: inView ? 'none' : 'translateY(20px)',
        transitionDelay: `${index * 0.08}s`,
      }}
      onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--border-2)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
      onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = inView ? 'none' : 'translateY(20px)' }}
    >
      {/* Header row */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '10px' }}>
        <div>
          <div style={{ fontSize: '0.65rem', fontFamily: 'var(--font-mono)', color: 'var(--text-3)', marginBottom: '5px', letterSpacing: '0.06em' }}>
            {project.type}
          </div>
          <h3 style={{ fontSize: '1rem', fontWeight: 600, letterSpacing: '-0.02em' }}>
            {project.title}
          </h3>
        </div>
        <div style={{ display: 'flex', gap: '6px', flexShrink: 0 }}>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.title} source code`}
              style={{ color: 'var(--text-3)', display: 'flex', alignItems: 'center', transition: 'color var(--transition)' }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--text)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--text-3)'}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.title} live demo`}
              style={{ color: 'var(--text-3)', display: 'flex', alignItems: 'center', transition: 'color var(--transition)' }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--text)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--text-3)'}
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                <polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
              </svg>
            </a>
          )}
        </div>
      </div>

      {/* Description */}
      <p style={{ fontSize: '0.85rem', color: 'var(--text-2)', lineHeight: 1.65, flexGrow: 1 }}>
        {project.shortDesc}
      </p>

      {/* Key points */}
      {project.keyPoints && (
        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '4px' }}>
          {project.keyPoints.map(pt => (
            <li key={pt} style={{ fontSize: '0.8rem', color: 'var(--text-3)', display: 'flex', gap: '6px', alignItems: 'flex-start' }}>
              <span style={{ color: 'var(--accent)', flexShrink: 0, marginTop: '1px' }}>·</span>{pt}
            </li>
          ))}
        </ul>
      )}

      {/* Tech + status */}
      <div style={{ marginTop: 'auto', paddingTop: '12px', borderTop: '1px solid var(--border)', display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
          {project.tech.slice(0, 5).map(t => (
            <span key={t} style={{ padding: '2px 7px', fontSize: '0.65rem', fontFamily: 'var(--font-mono)', background: 'transparent', color: 'var(--text-3)', border: '1px solid var(--border)', borderRadius: '4px' }}>{t}</span>
          ))}
          {project.tech.length > 5 && <span style={{ padding: '2px 7px', fontSize: '0.65rem', fontFamily: 'var(--font-mono)', color: 'var(--text-3)' }}>+{project.tech.length - 5}</span>}
        </div>
        <span style={{ fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: 'var(--text-3)' }}>{project.status}</span>
      </div>
    </article>
  )
}

export function AdditionalProjects() {
  return (
    <section id="additional-projects" className="section-pad" aria-labelledby="additional-projects-heading">
      <div className="container">
        <SectionTitle
          label="MORE PROJECTS"
          title="Other things I've built"
          description="Projects that show specific skills or a narrower scope — API integrations, utilities, and frontend experiments."
        />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 1fr))', gap: '16px' }}>
          {additionalProjects.map((project, i) => (
            <MiniCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* Note about learning repos */}
        <div style={{
          marginTop: '40px',
          padding: '16px 20px',
          background: 'var(--surface)',
          border: '1px solid var(--border)',
          borderRadius: 'var(--radius)',
          display: 'flex',
          gap: '12px',
          alignItems: 'flex-start',
        }}>
          <span style={{ color: 'var(--text-3)', fontSize: '1rem', lineHeight: 1 }} aria-hidden="true">ℹ</span>
          <p style={{ fontSize: '0.82rem', color: 'var(--text-3)', lineHeight: 1.65, margin: 0 }}>
            GitHub also contains smaller practice repos — Digital Clock, Pro Calculator, basic HTML exercises — used during early learning. They are not listed here, but they are public and show where the journey started.
          </p>
        </div>
      </div>
    </section>
  )
}
