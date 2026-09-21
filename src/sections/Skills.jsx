import { useInView } from '../hooks/useInView'
import { SectionTitle } from '../components/ui/SectionTitle'
import { skillGroups } from '../data/skills'

const levelColors = {
  strong:  { text: '#5BAD7A', bg: 'rgba(61,139,94,0.08)', border: 'rgba(61,139,94,0.2)' },
  working: { text: 'var(--accent-2)', bg: 'var(--accent-subtle)', border: 'rgba(75,127,255,0.2)' },
  learning:{ text: 'var(--text-3)', bg: 'transparent', border: 'var(--border)' },
}

function SkillGroup({ group, delay = 0 }) {
  const [ref, inView] = useInView()
  return (
    <div ref={ref} style={{
      opacity: inView ? 1 : 0,
      transform: inView ? 'none' : 'translateY(16px)',
      transition: `opacity 0.5s ease ${delay}s, transform 0.5s ease ${delay}s`,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
        <div style={{ width: '20px', height: '1px', background: 'var(--accent)', flexShrink: 0 }} aria-hidden="true" />
        <h3 style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'var(--text-3)', letterSpacing: '0.1em' }}>
          {group.category}
        </h3>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {group.skills.map(skill => {
          const colors = levelColors[skill.level]
          return (
            <div key={skill.name} style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '9px 0',
              borderBottom: '1px solid var(--border)',
              gap: '12px',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--accent)', flexShrink: 0 }} aria-hidden="true" />
                <span style={{ fontSize: '0.9rem', color: 'var(--text-2)' }}>{skill.name}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
                <span style={{ fontSize: '0.65rem', color: 'var(--text-3)', fontFamily: 'var(--font-mono)' }}>{skill.note}</span>
                <span style={{
                  padding: '1px 7px',
                  fontSize: '0.62rem',
                  fontFamily: 'var(--font-mono)',
                  borderRadius: '100px',
                  color: colors.text,
                  background: colors.bg,
                  border: `1px solid ${colors.border}`,
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em',
                }}>{skill.level}</span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export function Skills() {
  return (
    <section id="skills" className="section-pad" aria-labelledby="skills-heading" style={{ background: 'var(--surface)' }}>
      <div className="container">
        <SectionTitle
          label="TECHNICAL SKILLS"
          title="What I work with"
          description="Organised by category. Levels reflect actual project use — not self-assessed scores."
        />

        {/* Legend */}
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '48px' }}>
          {Object.entries(levelColors).map(([level, colors]) => (
            <span key={level} style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '0.7rem',
              fontFamily: 'var(--font-mono)',
              color: colors.text,
            }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: colors.text }} aria-hidden="true" />
              {level === 'strong' ? 'Strong practical use' : level === 'working' ? 'Working knowledge' : 'Currently learning'}
            </span>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '40px' }}>
          {skillGroups.map((group, i) => (
            <SkillGroup key={group.category} group={group} delay={i * 0.05} />
          ))}
        </div>
      </div>
    </section>
  )
}
