import { useRef, useState } from 'react'
import { ALT, TREATMENTS, TREATMENTS_NOTE } from '../data'

export default function Treatments() {
  const [tab, setTab] = useState(0)
  const refs = useRef([])

  const onKey = (e) => {
    const n = TREATMENTS.length
    let next = null
    if (e.key === 'ArrowRight') next = (tab + 1) % n
    if (e.key === 'ArrowLeft') next = (tab - 1 + n) % n
    if (next === null) return
    e.preventDefault()
    setTab(next)
    refs.current[next]?.focus()
  }

  return (
    <section className="section section--dark" id="treatments">
      <div className="container">
        <header className="head">
          <p className="eyebrow eyebrow--light reveal">Treatment menu</p>
          <h2 className="h2 h2--light reveal" style={{ '--d': '60ms' }}>
            Our Treatments <span className="muted">in Madurai</span>
          </h2>
          <div className="collage reveal" style={{ '--d': '120ms' }} role="img" aria-label={ALT.collage}>
            <span>Non-surgical</span><i /><span>Minimally invasive</span><i /><span>Surgical</span>
          </div>
        </header>

        <div className="tabs reveal" role="tablist" aria-label="Treatment categories" onKeyDown={onKey} style={{ '--i': tab, '--n': TREATMENTS.length }}>
          <span className="tabs__ind" aria-hidden="true" />
          {TREATMENTS.map((t, i) => (
            <button
              key={t.id}
              ref={(el) => (refs.current[i] = el)}
              role="tab"
              type="button"
              id={`tab-${t.id}`}
              aria-selected={tab === i}
              aria-controls={`panel-${t.id}`}
              tabIndex={tab === i ? 0 : -1}
              className="tabs__btn"
              onClick={() => setTab(i)}
            >
              <span className="tabs__long">{t.short}</span>
              <span className="tabs__count">{t.items.length}</span>
            </button>
          ))}
        </div>

        {TREATMENTS.map((t, ti) => (
          <div key={t.id} role="tabpanel" id={`panel-${t.id}`} aria-labelledby={`tab-${t.id}`} className="panel" hidden={tab !== ti}>
            <h3 className="panel__title">{t.label}</h3>
            <ul className="cards">
              {t.items.map(([name, desc], i) => (
                <li className="card" key={name} style={{ '--d': `${i * 50}ms` }}>
                  <span className="card__no">{String(i + 1).padStart(2, '0')}</span>
                  <h4 className="card__title">{name}</h4>
                  <p className="card__desc">{desc}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <p className="note reveal">{TREATMENTS_NOTE}</p>
      </div>
    </section>
  )
}
