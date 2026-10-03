import { ALT, CONTACT } from '../data'
import LeadForm from './LeadForm'

// Drop a real photo at src/assets/hero.(jpg|jpeg|png|webp) and it replaces the placeholder art.
const found = import.meta.glob('../assets/hero.{jpg,jpeg,png,webp}', { eager: true, import: 'default' })
const heroImage = Object.values(found)[0]

const STATS = [
  ['10', 'Non-invasive'],
  ['3', 'Minimally invasive'],
  ['4', 'Surgical'],
]

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__grid-bg" aria-hidden="true" />
      <div className="container">
        <header className="hero__head">
          <p className="eyebrow eyebrow--light reveal">Slimming &amp; Body Contouring · KK Nagar, Madurai</p>
          <h1 className="hero__title reveal" style={{ '--d': '80ms' }}>
            <span className="hero__brand">Minus Slimming Clinic, Madurai:</span>{' '}
            <span className="hero__tagline">Advanced Body Contouring and Weight Loss, Without Guesswork</span>
          </h1>
        </header>

        <div className="hero__stage">
          <figure className="hero__visual reveal" style={{ '--d': '160ms' }}>
            {heroImage ? (
              <img src={heroImage} alt={ALT.hero} className="hero__photo" fetchPriority="high" />
            ) : (
              <div className="art" role="img" aria-label={ALT.hero}>
                <svg viewBox="0 0 240 320" aria-hidden="true">
                  <g fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="120" cy="52" r="26" strokeOpacity=".9" strokeWidth="1.5" />
                    <path strokeOpacity=".9" strokeWidth="1.5" d="M104 76c-30 6-52 20-54 52-1 24 8 40 12 62 3 18 0 38-2 70M136 76c30 6 52 20 54 52 1 24-8 40-12 62-3 18 0 38 2 70M84 190c14 10 58 10 72 0" />
                    <path className="art__dash" strokeOpacity=".4" strokeWidth="1" strokeDasharray="3 5" d="M40 130h160M44 190h152M60 250h120" />
                  </g>
                  <g fill="#fff">
                    <circle className="art__dot" cx="120" cy="130" r="4" />
                    <circle className="art__dot art__dot--2" cx="120" cy="190" r="4" />
                    <circle className="art__dot art__dot--3" cx="120" cy="250" r="4" />
                  </g>
                </svg>
                <span className="art__scan" aria-hidden="true" />
              </div>
            )}
            <span className="hero__tag">KK Nagar, Madurai</span>
            <ul className="hero__badges">
              <li>Non-surgical</li>
              <li>European-grade tech</li>
              <li>Consultation-first</li>
            </ul>
          </figure>

          <div id="enquiry" className="hero__form reveal" style={{ '--d': '240ms' }}>
            <LeadForm />
          </div>
        </div>

        <div className="hero__bar reveal" style={{ '--d': '300ms' }}>
          <ul className="hero__stats">
            {STATS.map(([n, l]) => (
              <li key={l}>
                <strong>{n}</strong>
                <span>{l}</span>
              </li>
            ))}
          </ul>
          <a className="hero__callbtn" href={CONTACT.phoneHref}>
            <span className="hero__callic" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" />
              </svg>
            </span>
            <span className="hero__calltxt">
              <small>Call the clinic</small>
              <b>{CONTACT.phone}</b>
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}
