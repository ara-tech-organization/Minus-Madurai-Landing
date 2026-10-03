import { LEGAL } from '../legal'
import { sectionPath } from '../hooks'

export default function LegalPage({ pageKey, goTo }) {
  const doc = LEGAL[pageKey]
  return (
    <main className="legal page-enter">
      <header className="legal__hero">
        <div className="container">
          <a
            href={sectionPath('top')}
            className="legal__back reveal"
            onClick={(e) => {
              e.preventDefault()
              goTo('top')
            }}
          >
            <span aria-hidden="true">←</span> Back to home
          </a>
          <p className="eyebrow eyebrow--light reveal" style={{ '--d': '60ms' }}>Minus Slimming Clinic – Madurai</p>
          <h1 className="legal__title reveal" style={{ '--d': '120ms' }}>{doc.title}</h1>
          <p className="legal__updated reveal" style={{ '--d': '180ms' }}>Last updated: {doc.updated}</p>
        </div>
      </header>

      <article className="legal__body">
        <div className="container legal__wrap">
          <p className="legal__intro reveal">{doc.intro}</p>
          {doc.sections.map((s, i) => (
            <section key={s.h} className="legal__section reveal" style={{ '--d': `${(i % 3) * 70}ms` }}>
              <h2>{s.h}</h2>
              {s.p?.map((t) => <p key={t}>{t}</p>)}
              {s.list && (
                <ul>
                  {s.list.map((li) => <li key={li}>{li}</li>)}
                </ul>
              )}
            </section>
          ))}
        </div>
      </article>
    </main>
  )
}
