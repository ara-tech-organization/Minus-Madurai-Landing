import { FAQS } from '../data'

export default function Faq() {
  return (
    <section className="section section--dark" id="faqs" aria-labelledby="faq-h">
      <div className="container">
        <header className="head">
          <p className="eyebrow eyebrow--light reveal">Good to know</p>
          <h2 className="h2 h2--light reveal" id="faq-h" style={{ '--d': '60ms' }}>
            Frequently Asked <span className="muted">Questions (FAQs)</span>
          </h2>
        </header>

        <div className="faq">
          {FAQS.map((f, i) => (
            <details className="faq__item reveal" key={f.q} name="faq" open={i === 0} style={{ '--d': `${i * 60}ms` }}>
              <summary>
                <h4 className="faq__q">{f.q}</h4>
                <span className="faq__icon" aria-hidden="true" />
              </summary>
              <p className="faq__a">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
