import { Navbar }             from './components/layout/Navbar'
import { Footer }             from './components/layout/Footer'
import { Hero }               from './sections/Hero'
import { About }              from './sections/About'
import { Projects }           from './sections/Projects'
import { Skills }             from './sections/Skills'
import { Journey }            from './sections/Journey'
import { AdditionalProjects } from './sections/AdditionalProjects'
import { GitHubCTA }          from './sections/GitHubCTA'
import { CurrentlyBuilding }  from './sections/CurrentlyBuilding'
import { Contact }            from './sections/Contact'

export default function App() {
  return (
    <>
      <a
        href="#main-content"
        style={{
          position: 'fixed',
          top: '-100px',
          left: '16px',
          zIndex: 9999,
          padding: '10px 20px',
          background: 'var(--accent)',
          color: '#fff',
          borderRadius: 'var(--radius)',
          fontSize: '0.875rem',
          fontWeight: 500,
          textDecoration: 'none',
          transition: 'top 0.2s',
        }}
        onFocus={e => { e.currentTarget.style.top = '16px' }}
        onBlur={e => { e.currentTarget.style.top = '-100px' }}
      >
        Skip to main content
      </a>

      <Navbar />

      <main id="main-content">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Journey />
        <AdditionalProjects />
        <GitHubCTA />
        <CurrentlyBuilding />
        <Contact />
      </main>

      <Footer />
    </>
  )
}
