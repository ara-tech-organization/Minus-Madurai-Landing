import { WELCOME } from '../data'

export default function Welcome() {
  return (
    <section className="section section--light" id="welcome">
      <div className="container welcome">
        <p className="eyebrow reveal">About the clinic</p>
        <h2 className="h2 reveal" style={{ '--d': '60ms' }}>
          Welcome to <span className="muted">MINUS, Madurai</span>
        </h2>
        {WELCOME.map((p, i) => {
          // keep the last four words together so the sentence never ends on a short stray line
          const words = p.split(' ')
          return (
            <p key={i} className="lead reveal" style={{ '--d': `${120 + i * 80}ms` }}>
              {words.slice(0, -4).join(' ')} <span className="nowrap">{words.slice(-4).join(' ')}</span>
            </p>
          )
        })}
      </div>
    </section>
  )
}
