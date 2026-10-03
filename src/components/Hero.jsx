import { CONTACT } from '../data'
import LeadForm from './LeadForm'

const STATS = [
  ['10', 'Non-invasive'],
  ['3', 'Minimally invasive'],
  ['4', 'Surgical'],
]

const CHIPS = ['Non-surgical', 'European-grade tech', 'Consultation-first']

export default function Hero({ onSubmitted }) {
  return (
    <section className="hero" id="top">
      <div className="hero__grid-bg" aria-hidden="true" />
      <div className="container hero__grid">
        <header className="hero__head">
          <p className="eyebrow eyebrow--light reveal">Slimming &amp; Body Contouring · KK Nagar, Madurai</p>
          <h1 className="hero__title reveal" style={{ '--d': '80ms' }}>
            <span className="hero__brand">Minus Slimming Clinic, Madurai:</span>{' '}
            <span className="hero__tagline">Advanced Body Contouring and Weight Loss, Without Guesswork</span>
          </h1>
          <ul className="hero__chips reveal" style={{ '--d': '140ms' }}>
            {CHIPS.map((c) => <li key={c}>{c}</li>)}
          </ul>
        </header>

        <div id="enquiry" className="hero__form reveal" style={{ '--d': '200ms' }}>
          <LeadForm onSubmitted={onSubmitted} />
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
