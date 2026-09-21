import { useInView } from '../../hooks/useInView'

export function SectionTitle({ label, title, description, align = 'left' }) {
  const [ref, inView] = useInView()
  return (
    <div ref={ref} style={{
      textAlign: align,
      opacity: inView ? 1 : 0,
      transform: inView ? 'none' : 'translateY(20px)',
      transition: 'opacity 0.6s ease, transform 0.6s ease',
      marginBottom: '3.5rem',
    }}>
      {label && (
        <span style={{
          display: 'inline-block',
          fontSize: '0.72rem',
          fontFamily: 'var(--font-mono)',
          color: 'var(--accent)',
          letterSpacing: '0.1em',
          marginBottom: '10px',
        }}>{label}</span>
      )}
      <h2 style={{
        fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
        fontWeight: 700,
        letterSpacing: '-0.03em',
      }}>{title}</h2>
      {description && (
        <p style={{
          color: 'var(--text-2)',
          fontSize: '1rem',
          maxWidth: '52ch',
          marginTop: '10px',
          marginLeft: align === 'center' ? 'auto' : 0,
          marginRight: align === 'center' ? 'auto' : 0,
        }}>{description}</p>
      )}
    </div>
  )
}
