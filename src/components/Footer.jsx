import logo from '../assets/logo.png'
import { sectionPath } from '../hooks'
import { CONTACT, MAP_EMBED, MAP_LINK, BOOK_URL, NAV, SOCIALS } from '../data'
import { LEGAL_LINKS } from '../legal'

const ICONS = {
  Instagram: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  ),
  Facebook: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
      <path d="M13.5 21v-7.5h2.6l.4-3h-3V8.6c0-.9.3-1.5 1.5-1.5h1.6V4.4c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4v2.2H7.8v3h2.6V21h3.1z" />
    </svg>
  ),
}

export default function Footer({ goTo, navigate }) {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div>
          <img className="footer__logo" src={logo} width="540" height="351" loading="lazy" alt="MINUS — Slim down & Shape up, Madurai" />
          <p className="footer__text">Advanced body contouring and weight loss, consultation-first — at our KK Nagar branch, Madurai.</p>
          <ul className="socials" aria-label="Follow MINUS Madurai">
            {SOCIALS.map((so) => (
              <li key={so.name}>
                <a href={so.href} className="socials__link" target="_blank" rel="noopener noreferrer" aria-label={`MINUS Madurai on ${so.name}`}>
                  {ICONS[so.name]}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <nav aria-label="Quick links">
          <p className="footer__h">Quick links</p>
          <ul className="footer__links">
            {NAV.map((n) => (
              <li key={n.id}>
                <a
                  href={sectionPath(n.id)}
                  onClick={(e) => {
                    e.preventDefault()
                    goTo(n.id)
                  }}
                >
                  {n.label}
                </a>
              </li>
            ))}
            <li><a href={BOOK_URL} data-book>Book a Consultation</a></li>
          </ul>
        </nav>
        <address className="footer__addr">
          <p className="footer__h">Visit us</p>
          <p>{CONTACT.address}</p>
        </address>
        <div>
          <p className="footer__h">Contact</p>
          <p><a href={CONTACT.phoneHref}>{CONTACT.phone}</a></p>
          <p><a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></p>
        </div>
        <div className="footer__map">
          <iframe
            title="MINUS Slimming Clinic Madurai on Google Maps"
            src={MAP_EMBED}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
          <a className="footer__maplink" href={MAP_LINK} target="_blank" rel="noopener noreferrer">
            Open in Google Maps <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>

      <div className="container footer__bottom">
        <p className="footer__copy">© {new Date().getFullYear()} MINUS Slimming Clinic – Madurai. All rights reserved.</p>
        <ul className="footer__legal" aria-label="Legal">
          {LEGAL_LINKS.map((l) => (
            <li key={l.key}>
              <a
                href={sectionPath(l.key)}
                onClick={(e) => {
                  e.preventDefault()
                  navigate(l.key)
                }}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
