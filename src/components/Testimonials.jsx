import { useRef, useState } from 'react'
import { TESTIMONIALS, TESTIMONIALS_INTRO } from '../data'

export default function Testimonials() {
  const scroller = useRef(null)
  const [active, setActive] = useState(0)

  const go = (i) => {
    const el = scroller.current
    if (!el) return
    const n = Math.max(0, Math.min(TESTIMONIALS.length - 1, i))
    const card = el.children[n]
    el.scrollTo({ left: card.offsetLeft - el.offsetLeft, behavior: 'smooth' })
    setActive(n)
  }

  const onScroll = () => {
    const el = scroller.current
    const cards = Array.from(el.children)
    const x = el.scrollLeft + el.clientWidth / 2
    const idx = cards.findIndex((c) => c.offsetLeft - el.offsetLeft + c.clientWidth >= x)
    if (idx >= 0) setActive(idx)
  }

  return (
    <section className="section section--cream" id="testimonials">
      <div className="container">
        <header className="head">
          <p className="eyebrow reveal">Patient stories</p>
          <h2 className="h2 reveal" style={{ '--d': '60ms' }}>
            Patient <span className="muted">Testimonials</span>
          </h2>
          <p className="sub reveal" style={{ '--d': '120ms' }}>{TESTIMONIALS_INTRO}</p>
        </header>

        <div className="carousel reveal">
          <div className="carousel__track" ref={scroller} onScroll={onScroll} tabIndex={0} aria-label="Patient testimonials">
            {TESTIMONIALS.map((t) => (
              <figure className="quote" key={t.name}>
                <div className="quote__stars" aria-label="5 out of 5 stars">★★★★★</div>
                <blockquote>“{t.text}”</blockquote>
                <figcaption>
                  <span className="quote__avatar" aria-hidden="true">{t.name[0]}</span>
                  - {t.name}
                </figcaption>
              </figure>
            ))}
          </div>
          <div className="carousel__ctrl">
            <button type="button" className="round" onClick={() => go(active - 1)} disabled={active === 0} aria-label="Previous testimonial">←</button>
            <div className="dots">
              {TESTIMONIALS.map((t, i) => (
                <button
                  type="button"
                  key={t.name}
                  className={`dot${i === active ? ' dot--on' : ''}`}
                  onClick={() => go(i)}
                  aria-label={`Show testimonial ${i + 1}`}
                  aria-current={i === active}
                />
              ))}
            </div>
            <button type="button" className="round" onClick={() => go(active + 1)} disabled={active === TESTIMONIALS.length - 1} aria-label="Next testimonial">→</button>
          </div>
        </div>
      </div>
    </section>
  )
}
