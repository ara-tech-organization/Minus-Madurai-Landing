import logo from '../assets/logo.png'
import mapImg from '../assets/map.jpg'
import { sectionPath } from '../hooks'
import { ALT, CONTACT, MAP_LINK, BOOK_URL, NAV, SOCIALS, WHY_CHOOSE } from '../data'

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

export default function Closing({ goTo }) {
  return (
    <>
      <section className="section cta" aria-labelledby="choose-h">
        <div className="container cta__grid">
          <div>
            <p className="eyebrow reveal">The Minus promise</p>
            <h2 className="h2 reveal" id="choose-h" style={{ '--d': '60ms' }}>
              Why Choose <span className="muted">Minus Slimming Clinic, Madurai?</span>
            </h2>
            <div className="consult reveal" style={{ '--d': '120ms' }} role="img" aria-label={ALT.consultation} />
          </div>
          <div>
            <ul className="ticks">
              {WHY_CHOOSE.map((t, i) => (
                <li key={t} className="reveal" style={{ '--d': `${i * 70}ms` }}>
                  <span className="ticks__ic" aria-hidden="true">✓</span>{t}
                </li>
              ))}
            </ul>
            <a href={BOOK_URL} data-book className="btn btn--dark btn--pulse btn--block-sm reveal" style={{ '--d': '300ms' }}>
              Book Your Consultation at Minus Madurai <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer__grid">
          <div>
            <img className="footer__logo" src={logo} width="540" height="351" loading="lazy" alt="Minus — Slim down & Shape up, Madurai" />
            <p className="footer__text">Advanced body contouring and weight loss, consultation-first — at our KK Nagar branch, Madurai.</p>
            <ul className="socials" aria-label="Follow Minus Madurai">
              {SOCIALS.map((so) => (
                <li key={so.name}>
                  <a href={so.href} className="socials__link" target="_blank" rel="noopener noreferrer" aria-label={`Minus Madurai on ${so.name}`}>
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
          <a className="footer__map" href={MAP_LINK} target="_blank" rel="noopener noreferrer" aria-label="Open Minus Slimming Clinic Madurai in Google Maps">
            <img src={mapImg} width="900" height="420" loading="lazy" alt="Map showing Minus Slimming Clinic Madurai, KK Nagar" />
            <span className="map-pin" aria-hidden="true" />
            <span className="map-label">Minus Slimming Clinic – Madurai</span>
            <span className="map-open">Open in Google Maps <span aria-hidden="true">↗</span></span>
            <small className="map-attr">© OpenStreetMap contributors</small>
          </a>
        </div>
        <p className="footer__copy container">© {new Date().getFullYear()} Minus Slimming Clinic – Madurai. All rights reserved.</p>
      </footer>
    </>
  )
}
