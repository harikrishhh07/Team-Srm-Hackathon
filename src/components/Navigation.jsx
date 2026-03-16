import { useState } from 'react'
import LogoImage from '../assets/Logo.jpg'
import './Navigation.css'

export default function Navigation({ scrollToSection, refs }) {
  const [isOpen, setIsOpen] = useState(false)

  const handleNavClick = (ref) => {
    scrollToSection(ref)
    setIsOpen(false)
  }

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo-wrapper">
          <img src={LogoImage} alt="Team SRM Hackathon Logo" className="nav-logo-image" />
          <span className="nav-title">Team SRM Hackathon</span>
        </div>
        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <button className="nav-link" onClick={() => handleNavClick(refs.homeRef)}>
              Home
            </button>
          </li>
          <li className="nav-item">
            <button className="nav-link" onClick={() => handleNavClick(refs.aboutRef)}>
              About
            </button>
          </li>
          <li className="nav-item">
            <button className="nav-link" onClick={() => handleNavClick(refs.domainsRef)}>
              Domains
            </button>
          </li>
          <li className="nav-item">
            <button className="nav-link" onClick={() => handleNavClick(refs.eventsRef)}>
              Events
            </button>
          </li>
          <li className="nav-item">
            <button className="nav-link" onClick={() => handleNavClick(refs.contactRef)}>
              Contact
            </button>
          </li>
        </ul>
        <button
          type="button"
          className={`hamburger ${isOpen ? 'active' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  )
}
