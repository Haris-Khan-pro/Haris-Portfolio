import { useEffect, useRef, Suspense, lazy } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { site } from '../data/site'
import { useReducedMotion } from '../hooks/useReducedMotion'
import { Button } from '../components/ui/Button'

// Lazy-load 3D scene to avoid blocking
const HeroScene = lazy(() =>
  import('../components/3d/HeroScene').then(m => ({ default: m.HeroScene }))
)

function ArrowDown() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <line x1="12" y1="5" x2="12" y2="19"/><polyline points="19 12 12 19 5 12"/>
    </svg>
  )
}

export function Hero() {
  const reduced = useReducedMotion()
  const contentRef = useRef()

  useGSAP(() => {
    if (reduced) return
    const ctx = gsap.context(() => {
      gsap.from('.hero-line', {
        y: 40,
        opacity: 0,
        duration: 0.9,
        stagger: 0.12,
        ease: 'power3.out',
        delay: 0.2,
      })
      gsap.from('.hero-meta', {
        y: 20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.08,
        ease: 'power2.out',
        delay: 0.7,
      })
    }, contentRef)
    return () => ctx.revert()
  }, [reduced])

  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      aria-label="Introduction"
      style={{
        position: 'relative',
        minHeight: '100svh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        paddingTop: '80px',
      }}
    >
      {/* 3D Background */}
      <Suspense fallback={null}>
        <HeroScene />
      </Suspense>

      {/* Gradient overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to right, rgba(7,7,14,0.92) 40%, rgba(7,7,14,0.3) 100%)',
        zIndex: 1,
        pointerEvents: 'none',
      }} aria-hidden="true" />
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '200px',
        background: 'linear-gradient(to top, var(--bg), transparent)',
        zIndex: 1,
        pointerEvents: 'none',
      }} aria-hidden="true" />

      {/* Content */}
      <div className="container" style={{ position: 'relative', zIndex: 2 }} ref={contentRef}>
        <div style={{ maxWidth: '640px' }}>
          {/* Status indicator */}
          <div
            className="hero-meta"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 14px',
              background: 'rgba(75,127,255,0.08)',
              border: '1px solid rgba(75,127,255,0.2)',
              borderRadius: '100px',
              marginBottom: '32px',
              fontSize: '0.78rem',
              fontFamily: 'var(--font-mono)',
              color: 'var(--accent-2)',
            }}
          >
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#4ade80', display: 'inline-block', animation: 'pulse 2s infinite' }} aria-hidden="true" />
            Open to opportunities — worldwide &amp; remote
          </div>

          {/* Main heading */}
          <div style={{ marginBottom: '24px', overflow: 'hidden' }}>
            <h1 style={{
              fontSize: 'clamp(2.4rem, 6vw, 4.2rem)',
              fontWeight: 700,
              letterSpacing: '-0.04em',
              lineHeight: 1.08,
              fontFamily: 'var(--font-display)',
            }}>
              <span className="hero-line" style={{ display: 'block' }}>Full-Stack</span>
              <span className="hero-line" style={{ display: 'block' }}>Developer.</span>
            </h1>
          </div>

          {/* Subheading */}
          <p
            className="hero-meta"
            style={{
              fontSize: 'clamp(1rem, 2.5vw, 1.15rem)',
              color: 'var(--text-2)',
              lineHeight: 1.7,
              marginBottom: '40px',
              maxWidth: '50ch',
            }}
          >
            I build complete web applications — frontend through to backend — 
            and cross-platform mobile apps with React Native and Expo.
            <span style={{ color: 'var(--text-3)', display: 'block', marginTop: '6px', fontSize: '0.9em' }}>
              BSCS Graduate · University of Haripur · Pakistan
            </span>
          </p>

          {/* CTAs */}
          <div className="hero-meta" style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', alignItems: 'center' }}>
            <button
              onClick={scrollToProjects}
              aria-label="View my projects"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px 24px',
                background: 'var(--accent)',
                color: '#fff',
                border: 'none',
                borderRadius: 'var(--radius)',
                fontSize: '0.875rem',
                fontWeight: 500,
                cursor: 'pointer',
                transition: 'all var(--transition)',
                fontFamily: 'var(--font-body)',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'var(--accent-2)'; e.currentTarget.style.transform = 'translateY(-1px)' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'var(--accent)'; e.currentTarget.style.transform = 'none' }}
            >
              View Projects
              <ArrowDown />
            </button>
            <button
              onClick={scrollToContact}
              aria-label="Contact me"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px 24px',
                background: 'transparent',
                color: 'var(--text-2)',
                border: '1px solid var(--border-2)',
                borderRadius: 'var(--radius)',
                fontSize: '0.875rem',
                fontWeight: 500,
                cursor: 'pointer',
                transition: 'all var(--transition)',
                fontFamily: 'var(--font-body)',
              }}
              onMouseEnter={e => { e.currentTarget.style.color = 'var(--text)'; e.currentTarget.style.borderColor = 'var(--text-3)' }}
              onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-2)'; e.currentTarget.style.borderColor = 'var(--border-2)' }}
            >
              Let's Work Together
            </button>
            <a
              href={site.links.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile (opens in new tab)"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '12px 18px',
                background: 'transparent',
                color: 'var(--text-3)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius)',
                fontSize: '0.875rem',
                fontWeight: 500,
                textDecoration: 'none',
                transition: 'all var(--transition)',
              }}
              onMouseEnter={e => { e.currentTarget.style.color = 'var(--text)'; e.currentTarget.style.borderColor = 'var(--border-2)' }}
              onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-3)'; e.currentTarget.style.borderColor = 'var(--border)' }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute',
        bottom: '32px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '6px',
        color: 'var(--text-3)',
        fontSize: '0.65rem',
        fontFamily: 'var(--font-mono)',
        letterSpacing: '0.1em',
        animation: reduced ? 'none' : 'bounce 2s infinite',
      }} aria-hidden="true">
        <span>SCROLL</span>
        <ArrowDown />
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(6px); }
        }
      `}</style>
    </section>
  )
}
