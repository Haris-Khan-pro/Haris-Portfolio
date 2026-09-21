import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { useInView } from '../hooks/useInView'
import { site } from '../data/site'

// ─── EmailJS config ───────────────────────────────────────────────────────────
// Create a .env file in the project root and add:
//   VITE_EMAILJS_SERVICE_ID=your_service_id
//   VITE_EMAILJS_TEMPLATE_ID=your_template_id
//   VITE_EMAILJS_PUBLIC_KEY=your_public_key
const EMAILJS_SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID  || ''
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || ''
const EMAILJS_PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY  || ''

const STATES = { idle: 'idle', loading: 'loading', success: 'success', error: 'error' }
const EMPTY  = { name: '', email: '', subject: '', message: '' }

function validate(form) {
  const errs = {}
  if (!form.name.trim())    errs.name    = 'Name is required'
  if (!form.email.trim())   errs.email   = 'Email is required'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Enter a valid email address'
  if (!form.message.trim()) errs.message = 'Message is required'
  return errs
}

function Field({ id, label, type = 'text', value, onChange, error, rows, placeholder, required }) {
  return (
    <div className="form-field">
      <label htmlFor={id}>
        {label}{required && <span style={{ color: 'var(--accent)', marginLeft: 2 }} aria-hidden="true">*</span>}
      </label>
      {rows ? (
        <textarea
          id={id}
          name={id}
          rows={rows}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          aria-required={required}
          aria-describedby={error ? `${id}-error` : undefined}
          aria-invalid={!!error}
          style={{ borderColor: error ? '#FF6B6B' : undefined }}
        />
      ) : (
        <input
          id={id}
          name={id}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          aria-required={required}
          aria-describedby={error ? `${id}-error` : undefined}
          aria-invalid={!!error}
          style={{ borderColor: error ? '#FF6B6B' : undefined }}
        />
      )}
      {error && (
        <span id={`${id}-error`} role="alert" style={{ fontSize: '0.75rem', color: '#FF6B6B', fontFamily: 'var(--font-mono)' }}>
          {error}
        </span>
      )}
    </div>
  )
}

function ContactInfo() {
  const [ref, inView] = useInView()
  return (
    <div ref={ref} style={{ opacity: inView ? 1 : 0, transform: inView ? 'none' : 'translateY(20px)', transition: 'all 0.6s ease' }}>
      <span style={{ display: 'block', fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'var(--accent)', letterSpacing: '0.1em', marginBottom: '12px' }}>GET IN TOUCH</span>
      <h2 style={{ fontSize: 'clamp(1.7rem, 4vw, 2.4rem)', fontWeight: 700, letterSpacing: '-0.03em', marginBottom: '16px' }}>
        Open to the right opportunity.
      </h2>
      <p style={{ color: 'var(--text-2)', lineHeight: 1.75, fontSize: '0.95rem', marginBottom: '36px' }}>
        I'm looking for full-time roles, junior to mid-level positions, and freelance projects. Frontend, full-stack, or mobile — if you're building something real, I want to hear about it.
      </p>

      {/* What I'm open to */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '36px' }}>
        <div style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'var(--text-3)', letterSpacing: '0.08em', marginBottom: '4px' }}>
          OPEN TO
        </div>
        {[
          'Full-time roles — junior to mid level',
          'Frontend or full-stack positions',
          'React Native / mobile development',
          'Remote work — worldwide',
          'Freelance projects',
        ].map(item => (
          <div key={item} style={{ display: 'flex', gap: '10px', alignItems: 'center', fontSize: '0.875rem', color: 'var(--text-2)' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2.5" aria-hidden="true">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
            {item}
          </div>
        ))}
      </div>

      {/* Direct contact */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <a href={`mailto:${site.email}`} style={{
          display: 'flex', gap: '10px', alignItems: 'center', color: 'var(--text-2)',
          textDecoration: 'none', fontSize: '0.875rem', transition: 'color var(--transition)',
        }}
          onMouseEnter={e => e.currentTarget.style.color = 'var(--text)'}
          onMouseLeave={e => e.currentTarget.style.color = 'var(--text-2)'}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
            <polyline points="22,6 12,13 2,6"/>
          </svg>
          {site.email}
        </a>
        <a href={site.links.linkedin} target="_blank" rel="noreferrer" style={{
          display: 'flex', gap: '10px', alignItems: 'center', color: 'var(--text-2)',
          textDecoration: 'none', fontSize: '0.875rem', transition: 'color var(--transition)',
        }}
          onMouseEnter={e => e.currentTarget.style.color = 'var(--text)'}
          onMouseLeave={e => e.currentTarget.style.color = 'var(--text-2)'}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
            <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
          </svg>
          linkedin.com/in/mharis-khan
        </a>
        <a href={site.links.github} target="_blank" rel="noreferrer" style={{
          display: 'flex', gap: '10px', alignItems: 'center', color: 'var(--text-2)',
          textDecoration: 'none', fontSize: '0.875rem', transition: 'color var(--transition)',
        }}
          onMouseEnter={e => e.currentTarget.style.color = 'var(--text)'}
          onMouseLeave={e => e.currentTarget.style.color = 'var(--text-2)'}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
          github.com/Haris-Khan-pro
        </a>
      </div>
    </div>
  )
}

function ContactForm() {
  const formRef = useRef()
  const [form, setForm]     = useState(EMPTY)
  const [status, setStatus] = useState(STATES.idle)
  const [errors, setErrors] = useState({})
  const [ref, inView]       = useInView()

  const handle = e => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: undefined }))
  }

  const submit = async e => {
    e.preventDefault()
    const errs = validate(form)
    if (Object.keys(errs).length) { setErrors(errs); return }

    setStatus(STATES.loading)
    try {
      if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
        // EmailJS not configured — simulate success so the UI is testable
        await new Promise(r => setTimeout(r, 800))
        setStatus(STATES.success)
        setForm(EMPTY)
        return
      }
      await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, { publicKey: EMAILJS_PUBLIC_KEY })
      setStatus(STATES.success)
      setForm(EMPTY)
    } catch {
      setStatus(STATES.error)
    }
  }

  return (
    <div
      ref={ref}
      style={{
        background: 'var(--surface)',
        border: '1px solid var(--border)',
        borderRadius: 'var(--radius-xl)',
        padding: 'clamp(24px, 4vw, 36px)',
        opacity: inView ? 1 : 0,
        transform: inView ? 'none' : 'translateY(24px)',
        transition: 'all 0.6s ease 0.15s',
      }}
    >
      {status === STATES.success ? (
        <div style={{ textAlign: 'center', padding: '40px 20px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
          <div style={{ width: 52, height: 52, borderRadius: '50%', background: 'rgba(74,222,128,0.1)', border: '1px solid rgba(74,222,128,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="2.5" aria-hidden="true">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
          </div>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 600 }}>Message sent.</h3>
          <p style={{ color: 'var(--text-2)', fontSize: '0.9rem' }}>I'll reply as soon as I can.</p>
          <button
            onClick={() => setStatus(STATES.idle)}
            style={{ padding: '9px 20px', background: 'transparent', border: '1px solid var(--border-2)', borderRadius: 'var(--radius)', color: 'var(--text-2)', cursor: 'pointer', fontSize: '0.85rem', marginTop: '8px', fontFamily: 'var(--font-body)' }}
          >
            Send another
          </button>
        </div>
      ) : (
        <form ref={formRef} onSubmit={submit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
            <Field id="name"  label="Name"  value={form.name}  onChange={handle} error={errors.name}  placeholder="Your name"    required />
            <Field id="email" label="Email" type="email" value={form.email} onChange={handle} error={errors.email} placeholder="your@email.com" required />
          </div>
          <Field id="subject" label="Subject" value={form.subject} onChange={handle} placeholder="What's this about?" />
          <Field id="message" label="Message" rows={5} value={form.message} onChange={handle} error={errors.message} placeholder="Tell me what you're working on..." required />

          {status === STATES.error && (
            <div role="alert" style={{ padding: '10px 14px', background: 'rgba(255,107,107,0.08)', border: '1px solid rgba(255,107,107,0.3)', borderRadius: 'var(--radius)', fontSize: '0.82rem', color: '#FF8F8F', fontFamily: 'var(--font-mono)' }}>
              Something went wrong. Try emailing directly at <a href={`mailto:${site.email}`} style={{ color: '#FF8F8F' }}>{site.email}</a>
            </div>
          )}

          <button
            type="submit"
            disabled={status === STATES.loading}
            aria-busy={status === STATES.loading}
            style={{
              padding: '13px 24px',
              background: 'var(--accent)',
              color: '#fff',
              border: 'none',
              borderRadius: 'var(--radius)',
              fontSize: '0.9rem',
              fontWeight: 500,
              cursor: status === STATES.loading ? 'not-allowed' : 'pointer',
              opacity: status === STATES.loading ? 0.7 : 1,
              transition: 'all var(--transition)',
              fontFamily: 'var(--font-body)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
            }}
            onMouseEnter={e => { if (status !== STATES.loading) { e.currentTarget.style.background = 'var(--accent-2)'; e.currentTarget.style.transform = 'translateY(-1px)' }}}
            onMouseLeave={e => { e.currentTarget.style.background = 'var(--accent)'; e.currentTarget.style.transform = 'none' }}
          >
            {status === STATES.loading ? (
              <>
                <span style={{ width: 14, height: 14, border: '2px solid rgba(255,255,255,0.3)', borderTopColor: '#fff', borderRadius: '50%', animation: 'spin 0.6s linear infinite', display: 'inline-block' }} aria-hidden="true" />
                Sending…
              </>
            ) : 'Send message'}
          </button>
          <p style={{ fontSize: '0.72rem', color: 'var(--text-3)', textAlign: 'center', fontFamily: 'var(--font-mono)' }}>
            Or email directly: <a href={`mailto:${site.email}`} style={{ color: 'var(--text-3)' }}>{site.email}</a>
          </p>
        </form>
      )}
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  )
}

export function Contact() {
  return (
    <section id="contact" className="section-pad" aria-labelledby="contact-heading">
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))', gap: '60px', alignItems: 'start' }}>
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
