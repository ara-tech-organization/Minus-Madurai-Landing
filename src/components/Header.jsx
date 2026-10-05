import { useState } from 'react'
import logo from '../assets/logo.png'
import { BOOK_URL, NAV } from '../data'
import { sectionPath, useScrolled } from '../hooks'

export default function Header({ active, goTo }) {
  const [open, setOpen] = useState(false)
  const scrolled = useScrolled()

  const go = (id) => (e) => {
    e.preventDefault()
    setOpen(false)
    goTo(id)
  }

  return (
    <header className={`header${scrolled ? ' header--solid' : ''}${open ? ' header--open' : ''}`}>
      <div className="container header__bar">
        <a href={sectionPath('top')} className="brand" aria-label="MINUS Slimming Clinic Madurai — home" onClick={go('top')}>
          <img className="brand__logo" src={logo} width="540" height="351" alt="MINUS — Slim down & Shape up, Madurai" />
        </a>

        <nav className="nav" id="primary-nav" aria-label="Primary">
          <ul className="nav__links">
            {NAV.map((n) => (
              <li key={n.id}>
                <a
                  href={sectionPath(n.id)}
                  className={`nav__link${active === n.id ? ' is-active' : ''}`}
                  aria-current={active === n.id ? 'true' : undefined}
                  onClick={go(n.id)}
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
          <a href={BOOK_URL} data-book className="btn btn--amber nav__cta" onClick={() => setOpen(false)}>
            Book a Consultation
          </a>
        </nav>

        <a href={BOOK_URL} data-book className="btn btn--amber btn--sm header__cta">
          Book a Consultation
        </a>

        <button
          type="button"
          className="burger"
          aria-expanded={open}
          aria-controls="primary-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}
