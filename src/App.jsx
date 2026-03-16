import { useRef } from 'react'
import Navigation from './components/Navigation'
import BlueCursor from './components/BlueCursor'
import ScrollProgress from './components/ScrollProgress'
import Home from './pages/Home'
import About from './pages/About'
import Domains from './pages/Domains'
import Events from './pages/Events'
import Contact from './pages/Contact'
import './App.css'

function App() {
  const homeRef = useRef(null)
  const aboutRef = useRef(null)
  const domainsRef = useRef(null)
  const eventsRef = useRef(null)
  const contactRef = useRef(null)

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="app-container">
      <BlueCursor />
      <Navigation
        scrollToSection={scrollToSection}
        refs={{ homeRef, aboutRef, domainsRef, eventsRef, contactRef }}
      />

      <section ref={homeRef} className="app-section">
        <Home />
      </section>

      <section ref={aboutRef} className="app-section">
        <About />
      </section>

      <section ref={domainsRef} className="app-section">
        <Domains />
      </section>

      <section ref={eventsRef} className="app-section">
        <Events />
      </section>

      <section ref={contactRef} className="app-section">
        <Contact />
      </section>

      <ScrollProgress />
    </div>
  )
}

export default App
