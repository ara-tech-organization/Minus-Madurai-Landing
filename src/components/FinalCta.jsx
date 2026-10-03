import { BOOK_URL, CONTACT, DIAGNOSIS } from '../data'

export default function FinalCta() {
  return (
    <section className="section diagnosis" aria-labelledby="diagnosis-h">
      <div className="container diagnosis__inner">
        <h2 className="h2 reveal" id="diagnosis-h">{DIAGNOSIS.title}</h2>
        <p className="diagnosis__text reveal" style={{ '--d': '80ms' }}>{DIAGNOSIS.text}</p>
        <div className="diagnosis__actions reveal" style={{ '--d': '160ms' }}>
          <a href={BOOK_URL} data-book className="btn btn--dark btn--pulse">Book Your Consultation</a>
          <a href={CONTACT.phoneHref} className="btn btn--outline">Call Now</a>
          <a href={DIAGNOSIS.whatsapp} className="btn btn--outline" target="_blank" rel="noopener noreferrer">WhatsApp Us</a>
        </div>
      </div>
    </section>
  )
}
