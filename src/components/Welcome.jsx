import { WELCOME } from '../data'

export default function Welcome() {
  return (
    <section className="section section--light" id="welcome">
      <div className="container welcome">
        <p className="eyebrow reveal">About the clinic</p>
        <h2 className="h2 reveal" style={{ '--d': '60ms' }}>
          Welcome to <span className="muted">Minus, Madurai</span>
        </h2>
        {WELCOME.map((p, i) => (
          <p key={i} className="lead reveal" style={{ '--d': `${120 + i * 80}ms` }}>
            {p}
          </p>
        ))}
      </div>
    </section>
  )
}
