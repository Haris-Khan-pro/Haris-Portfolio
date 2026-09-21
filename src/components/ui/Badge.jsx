export function Badge({ children, variant = 'default' }) {
  const styles = {
    default: { background: 'var(--accent-subtle)', color: 'var(--accent-2)', border: '1px solid rgba(75,127,255,0.2)' },
    outline: { background: 'transparent', color: 'var(--text-3)', border: '1px solid var(--border)' },
    success: { background: 'rgba(61,139,94,0.1)', color: '#5BAD7A', border: '1px solid rgba(61,139,94,0.2)' },
  }
  return (
    <span style={{
      display: 'inline-flex',
      alignItems: 'center',
      padding: '3px 10px',
      fontSize: '0.7rem',
      fontFamily: 'var(--font-mono)',
      borderRadius: '100px',
      whiteSpace: 'nowrap',
      lineHeight: 1.6,
      ...styles[variant],
    }}>{children}</span>
  )
}
