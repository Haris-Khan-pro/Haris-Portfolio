import { useInView } from '../hooks/useInView'
import { site } from '../data/site'

function StatItem({ value, label }) {
  const [ref, inView] = useInView()
  return (
    <div ref={ref} style={{ opacity: inView ? 1 : 0, transform: inView ? 'none' : 'translateY(16px)', transition: 'all 0.5s ease' }}>
      <div style={{ fontSize: 'clamp(1.8rem, 4vw, 2.4rem)', fontWeight: 700, fontFamily: 'var(--font-display)', color: 'var(--text)', letterSpacing: '-0.04em', lineHeight: 1 }}>{value}</div>
      <div style={{ fontSize: '0.82rem', color: 'var(--text-3)', marginTop: '6px', fontFamily: 'var(--font-mono)' }}>{label}</div>
    </div>
  )
}

export function About() {
  const [ref, inView] = useInView()
  return (
    <section id="about" className="section-pad" aria-label="About Haris Khan">
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '64px', alignItems: 'start' }}>
          
          {/* Left: Text */}
          <div ref={ref} style={{ opacity: inView ? 1 : 0, transform: inView ? 'none' : 'translateY(24px)', transition: 'all 0.6s ease' }}>
            <span style={{ display: 'inline-block', fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'var(--accent)', letterSpacing: '0.1em', marginBottom: '12px' }}>
              WHO I AM
            </span>
            <h2 style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)', fontWeight: 700, letterSpacing: '-0.03em', marginBottom: '20px' }}>
              Building things end to end.
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', color: 'var(--text-2)', lineHeight: 1.75, fontSize: '0.97rem' }}>
              <p>
                I'm Haris Khan — a Full-Stack Developer and BSCS graduate from the University of Haripur, Pakistan. I build complete applications: the frontend a user sees, the backend that powers it, the database that stores it, and the deployment that serves it.
              </p>
              <p>
                My approach to learning is through building real things. Every project in my portfolio represents a complete application — not a tutorial, not a course exercise. The Hike Planner FYP integrates five external APIs, an LLM pipeline, and a mobile frontend. Talkify has real-time WebSocket messaging and authentication. Dishly shows what React and animation libraries can produce at their best.
              </p>
              <p>
                I'm early-career with real project experience and a clear direction: full-stack web development and cross-platform mobile applications. I'm open to full-time roles, junior to mid positions, and freelance work worldwide.
              </p>
            </div>

            <div style={{ marginTop: '28px' }}>
              <div style={{ fontSize: '0.78rem', fontFamily: 'var(--font-mono)', color: 'var(--text-3)', marginBottom: '10px' }}>EDUCATION</div>
              <div style={{ padding: '14px 16px', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', display: 'flex', flexDirection: 'column', gap: '3px' }}>
                <div style={{ fontWeight: 600, fontSize: '0.92rem' }}>{site.education.degree}</div>
                <div style={{ color: 'var(--text-2)', fontSize: '0.85rem' }}>{site.education.institution}</div>
                <div style={{ color: 'var(--text-3)', fontSize: '0.8rem', fontFamily: 'var(--font-mono)' }}>Graduated {site.education.graduated}</div>
              </div>
            </div>

            {/* Profile photo placeholder */}
            <div style={{ marginTop: '24px', display: 'flex', gap: '12px' }}>
              <a href={site.links.github} target="_blank" rel="noreferrer" style={{ padding: '9px 18px', background: 'transparent', color: 'var(--text-2)', border: '1px solid var(--border-2)', borderRadius: 'var(--radius)', fontSize: '0.84rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px', transition: 'all var(--transition)' }}
                onMouseEnter={e => { e.currentTarget.style.color = 'var(--text)' }}
                onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-2)' }}>
                GitHub
              </a>
              <a href={site.links.linkedin} target="_blank" rel="noreferrer" style={{ padding: '9px 18px', background: 'transparent', color: 'var(--text-2)', border: '1px solid var(--border-2)', borderRadius: 'var(--radius)', fontSize: '0.84rem', textDecoration: 'none', transition: 'all var(--transition)' }}
                onMouseEnter={e => { e.currentTarget.style.color = 'var(--text)' }}
                onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-2)' }}>
                LinkedIn
              </a>
            </div>
          </div>

          {/* Right: Photo + Stats */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {/* Profile photo area */}
            <div style={{
              position: 'relative',
              borderRadius: 'var(--radius-xl)',
              overflow: 'hidden',
              border: '1px solid var(--border)',
              aspectRatio: '4/3',
              background: 'var(--surface)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              gap: '12px',
              color: 'var(--text-3)',
            }}>
              {/* Replace this div with an <img> tag when your photo is ready */}
              <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
              </svg>
              <span style={{ fontSize: '0.78rem', fontFamily: 'var(--font-mono)', textAlign: 'center', padding: '0 20px' }}>
                {/* PROFILE PHOTO PLACEHOLDER */}
                {/* Replace this element with: */}
                <img src="/images/haris-profile.jpg" alt="Haris Khan" style={{ width:'100%', height:'100%', objectFit:'cover' }} />
                Photo coming soon
              </span>
            </div>

            {/* Stats */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', padding: '24px', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)' }}>
              <StatItem value="5+" label="REAL PROJECTS" />
              <StatItem value="3" label="STACKS USED" />
              <StatItem value="7+" label="APIS INTEGRATED" />
              <StatItem value="2026" label="BSCS GRADUATE" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
