import { useState } from 'react'
import { useInView } from '../hooks/useInView'
import { SectionTitle } from '../components/ui/SectionTitle'
import { featuredProjects } from '../data/projects'

function TechTag({ name }) {
  return (
    <span style={{
      padding: '2px 9px',
      fontSize: '0.68rem',
      fontFamily: 'var(--font-mono)',
      background: 'var(--surface-2)',
      color: 'var(--text-3)',
      border: '1px solid var(--border)',
      borderRadius: '4px',
      whiteSpace: 'nowrap',
    }}>{name}</span>
  )
}

function ExternalLinkIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
      <polyline points="15 3 21 3 21 9"/>
      <line x1="10" y1="14" x2="21" y2="3"/>
    </svg>
  )
}

function GitHubIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
  )
}

function ProjectCard({ project, index }) {
  const [ref, inView] = useInView()
  const [expanded, setExpanded] = useState(false)

  const isHikePlanner = project.id === 'hike-planner'

  return (
    <article
      ref={ref}
      style={{
        background: 'var(--surface)',
        border: `1px solid ${expanded ? 'rgba(75,127,255,0.3)' : 'var(--border)'}`,
        borderRadius: 'var(--radius-lg)',
        padding: 'clamp(20px, 4vw, 28px)',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        transition: 'all 0.3s ease',
        opacity: inView ? 1 : 0,
        transform: inView ? 'none' : 'translateY(24px)',
        transitionDelay: `${index * 0.1}s`,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Accent bar */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '2px',
        background: `linear-gradient(90deg, ${project.accentColor || 'var(--accent)'}, transparent)`,
      }} aria-hidden="true" />

      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '12px' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '0.68rem', fontFamily: 'var(--font-mono)', color: 'var(--text-3)', letterSpacing: '0.08em' }}>
              {project.type}
            </span>
            {isHikePlanner && (
              <span style={{ padding: '1px 8px', fontSize: '0.65rem', fontFamily: 'var(--font-mono)', background: 'rgba(61,139,94,0.1)', color: '#5BAD7A', border: '1px solid rgba(61,139,94,0.2)', borderRadius: '100px' }}>
                University FYP
              </span>
            )}
          </div>
          <h3 style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.35rem)', fontWeight: 700, letterSpacing: '-0.02em' }}>
            {project.title}
          </h3>
        </div>
        {/* Links */}
        <div style={{ display: 'flex', gap: '8px', flexShrink: 0 }}>
          {project.github && (
            <a href={project.github} target="_blank" rel="noreferrer" aria-label={`${project.title} GitHub repository`}
              style={{ padding: '7px', background: 'var(--surface-2)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', color: 'var(--text-3)', display: 'flex', alignItems: 'center', transition: 'color var(--transition)' }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--text)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--text-3)'}>
              <GitHubIcon />
            </a>
          )}
          {project.live && (
            <a href={project.live} target="_blank" rel="noreferrer" aria-label={`${project.title} live demo`}
              style={{ padding: '7px', background: 'var(--surface-2)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', color: 'var(--text-3)', display: 'flex', alignItems: 'center', transition: 'color var(--transition)' }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--text)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--text-3)'}>
              <ExternalLinkIcon />
            </a>
          )}
        </div>
      </div>

      {/* Description */}
      <p style={{ color: 'var(--text-2)', fontSize: '0.9rem', lineHeight: 1.7 }}>
        {project.shortDesc}
      </p>

      {/* Tech stack */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
        {project.tech.map(t => <TechTag key={t} name={t} />)}
      </div>

      {/* Status */}
      <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-3)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <span style={{ width: 5, height: 5, borderRadius: '50%', background: project.status.includes('Live') ? '#4ade80' : 'var(--accent)', display: 'inline-block' }} aria-hidden="true" />
          {project.status}
        </span>
        {project.teamSize === 2 && <span>Team · 2 people</span>}
      </div>

      {/* Expand/collapse details */}
      <button
        onClick={() => setExpanded(!expanded)}
        aria-expanded={expanded}
        aria-controls={`${project.id}-details`}
        style={{
          background: 'transparent',
          border: 'none',
          padding: '8px 0 0',
          color: 'var(--accent)',
          fontSize: '0.8rem',
          fontFamily: 'var(--font-mono)',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          borderTop: '1px solid var(--border)',
          marginTop: '4px',
          transition: 'color var(--transition)',
          textAlign: 'left',
        }}
        onMouseEnter={e => e.currentTarget.style.color = 'var(--accent-2)'}
        onMouseLeave={e => e.currentTarget.style.color = 'var(--accent)'}
      >
        {expanded ? '↑ Less detail' : '↓ More detail'}
      </button>

      {/* Expanded details */}
      {expanded && (
        <div id={`${project.id}-details`} style={{ display: 'flex', flexDirection: 'column', gap: '16px', borderTop: '1px solid var(--border)', paddingTop: '16px' }}>
          {project.role && (
            <div>
              <div style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'var(--text-3)', marginBottom: '6px' }}>ROLE</div>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-2)', lineHeight: 1.65 }}>{project.role}</p>
            </div>
          )}
          {project.features && (
            <div>
              <div style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'var(--text-3)', marginBottom: '6px' }}>KEY FEATURES</div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {project.features.map(f => (
                  <li key={f} style={{ display: 'flex', gap: '8px', fontSize: '0.87rem', color: 'var(--text-2)', alignItems: 'flex-start' }}>
                    <span style={{ color: 'var(--accent)', marginTop: '2px', flexShrink: 0 }}>→</span>{f}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {project.architecture && (
            <div>
              <div style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'var(--text-3)', marginBottom: '6px' }}>ARCHITECTURE</div>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-3)', fontFamily: 'var(--font-mono)', lineHeight: 1.6, background: 'var(--surface-2)', padding: '10px 12px', borderRadius: 'var(--radius)', border: '1px solid var(--border)' }}>
                {project.architecture}
              </p>
            </div>
          )}
          {project.highlight && (
            <div style={{ padding: '10px 12px', background: 'var(--accent-subtle)', border: '1px solid rgba(75,127,255,0.15)', borderRadius: 'var(--radius)', fontSize: '0.82rem', color: 'var(--accent-2)', fontFamily: 'var(--font-mono)' }}>
              ★ {project.highlight}
            </div>
          )}
        </div>
      )}
    </article>
  )
}

export function Projects() {
  return (
    <section id="projects" className="section-pad" aria-labelledby="projects-heading">
      <div className="container">
        <SectionTitle
          label="SELECTED WORK"
          title="What I've built"
          description="Real projects — not tutorials. Each one demonstrates a complete application with architecture decisions, technology integration, and deployment."
        />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 360px), 1fr))', gap: '20px' }}>
          {featuredProjects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
