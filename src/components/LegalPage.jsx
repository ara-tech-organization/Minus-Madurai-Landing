import { LEGAL } from '../legal'
import { sectionPath } from '../hooks'

export default function LegalPage({ pageKey, goTo }) {
  const doc = LEGAL[pageKey]
  return (
    <main className="legal">
      <header className="legal__hero">
        <div className="container">
          <a
            href={sectionPath('top')}
            className="legal__back"
            onClick={(e) => {
              e.preventDefault()
              goTo('top')
            }}
          >
            <span aria-hidden="true">←</span> Back to home
          </a>
          <p className="eyebrow eyebrow--light">Minus Slimming Clinic – Madurai</p>
          <h1 className="legal__title">{doc.title}</h1>
          <p className="legal__updated">Last updated: {doc.updated}</p>
        </div>
      </header>

      <article className="legal__body">
        <div className="container legal__wrap">
          <p className="legal__intro">{doc.intro}</p>
          {doc.sections.map((s) => (
            <section key={s.h} className="legal__section">
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
