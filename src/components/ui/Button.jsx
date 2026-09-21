export function Button({ children, variant = 'primary', href, onClick, type = 'button', disabled, style, icon }) {
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    padding: '11px 22px',
    fontFamily: 'var(--font-body)',
    fontSize: '0.875rem',
    fontWeight: 500,
    borderRadius: 'var(--radius)',
    border: 'none',
    cursor: disabled ? 'not-allowed' : 'pointer',
    transition: 'all var(--transition)',
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    opacity: disabled ? 0.5 : 1,
    ...style,
  }
  const variants = {
    primary: { background: 'var(--accent)', color: '#fff' },
    outline: { background: 'transparent', color: 'var(--text-2)', border: '1px solid var(--border-2)' },
    ghost: { background: 'transparent', color: 'var(--accent)', padding: '0' },
  }
  const props = { style: { ...base, ...variants[variant] }, onClick, type, disabled }
  const content = <>{icon && icon}{children}</>
  if (href) return <a href={href} style={{ ...base, ...variants[variant] }} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">{content}</a>
  return <button {...props}>{content}</button>
}
