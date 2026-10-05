import { CONTACT, DIAGNOSIS } from '../data'
import { sectionPath } from '../hooks'

export default function ThankYou({ goTo }) {
  return (
    <main className="thanks page-enter">
      <div className="container thanks__inner">
        <div className="thanks__tick" aria-hidden="true">
          <svg viewBox="0 0 52 52" width="52" height="52" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
            <path className="thanks__check" d="M14 27l8 8 16-17" />
          </svg>
        </div>
        <p className="eyebrow eyebrow--light reveal">Enquiry received</p>
        <h1 className="thanks__title reveal" style={{ '--d': '80ms' }}>Thank you!</h1>
        <p className="thanks__text reveal" style={{ '--d': '140ms' }}>
          Our Madurai team will reach out shortly to schedule your consultation at MINUS Slimming Clinic, KK Nagar.
        </p>
        <div className="thanks__actions reveal" style={{ '--d': '220ms' }}>
          <a
            href={sectionPath('top')}
            className="btn btn--amber"
            onClick={(e) => {
              e.preventDefault()
              goTo('top')
            }}
          >
            Back to home
          </a>
          <a href={CONTACT.phoneHref} className="btn btn--ghost">Call Now</a>
          <a href={DIAGNOSIS.whatsapp} className="btn btn--ghost" target="_blank" rel="noopener noreferrer">WhatsApp Us</a>
        </div>
        <p className="thanks__note reveal" style={{ '--d': '300ms' }}>
          Prefer email? <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
        </p>
      </div>
    </main>
  )
}
