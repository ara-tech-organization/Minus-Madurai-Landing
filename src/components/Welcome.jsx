import { ALT, WELCOME } from '../data'

export default function Welcome() {
  return (
    <section className="section section--light" id="welcome">
      <div className="container split">
        <div className="split__media reveal">
          <div className="facility" role="img" aria-label={ALT.facility}>
            <div className="facility__ring" aria-hidden="true" />
            <div className="facility__ring facility__ring--2" aria-hidden="true" />
            <span className="facility__badge">KK Nagar<br />Madurai</span>
          </div>
        </div>
        <div className="split__body">
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
      </div>
    </section>
  )
}
