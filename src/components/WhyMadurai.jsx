import { CONTACT_URL, CONCERNS, WHY_MADURAI } from '../data'

export default function WhyMadurai() {
  const row1 = CONCERNS.slice(0, 4)
  const row2 = CONCERNS.slice(4)

  const track = (items, reverse) => (
    <div className={`marquee__row${reverse ? ' marquee__row--rev' : ''}`}>
      {[0, 1].map((k) => (
        <ul className="marquee__track" key={k}>
          {items.map((c) => (
            <li className="pill" key={c}>{c}</li>
          ))}
        </ul>
      ))}
    </div>
  )

  return (
    <>
      <section className="section section--dark why" id="why">
        <div className="container why__grid">
          <div className="why__intro">
            <p className="eyebrow eyebrow--light reveal">Our difference</p>
            <h2 className="h2 h2--light reveal" style={{ '--d': '60ms' }}>
              Why Madurai <span className="muted">Chooses Minus</span>
            </h2>
            <p className="why__count reveal" style={{ '--d': '120ms' }}>
              <strong>{String(WHY_MADURAI.length).padStart(2, '0')}</strong> reasons
            </p>
            <a href={CONTACT_URL} className="btn btn--amber reveal" style={{ '--d': '180ms' }}>
              Book a Consultation <span aria-hidden="true">→</span>
            </a>
          </div>

          <ol className="why__list">
            {WHY_MADURAI.map((t, i) => (
              <li key={t} className="why__row reveal" style={{ '--d': `${i * 70}ms` }}>
                <h3 className="why__title">{t}</h3>
                <span className="why__arrow" aria-hidden="true">→</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section--cream section--tight" aria-labelledby="concerns-h">
        <div className="container">
          <header className="head">
            <p className="eyebrow reveal">Find yourself here?</p>
            <h2 className="h2 reveal" id="concerns-h" style={{ '--d': '60ms' }}>
              Common <span className="muted">Concerns We Treat</span>
            </h2>
          </header>
        </div>
        <div className="marquee" aria-hidden="true">
          {track(row1, false)}
          {track(row2, true)}
        </div>
        <ul className="sr-only">
          {CONCERNS.map((c) => <li key={c}>{c}</li>)}
        </ul>
      </section>
    </>
  )
}
