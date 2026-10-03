import { useCallback, useEffect, useRef, useState } from 'react'
import { ALT, BEFORE_AFTER, BEFORE_AFTER_INTRO } from '../data'

const AMPLITUDE = 38 // slider swings 12%–88%
const SPEED = 0.9 // radians per second (~7s per full sweep)
const RESUME_AFTER = 2500 // ms of no touching before auto-slide resumes

/** Phones / touch screens: sweep the slider back and forth while the card is on screen. */
function useAutoSlide(stageRef, pos, setPos) {
  const posRef = useRef(pos)
  const idleUntil = useRef(0)

  useEffect(() => {
    posRef.current = pos
  }, [pos])

  useEffect(() => {
    const el = stageRef.current
    const enabled =
      window.matchMedia('(max-width: 767px), (hover: none)').matches &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!el || !enabled) return

    let raf = 0
    let last = 0
    let phase = 0
    let visible = false

    const pause = () => { idleUntil.current = performance.now() + RESUME_AFTER }
    const tick = (now) => {
      raf = requestAnimationFrame(tick)
      const dt = Math.min((now - last) / 1000, 0.1)
      last = now
      if (!visible) return
      if (now < idleUntil.current) {
        // follow the user's position so auto-slide resumes without a jump
        phase = Math.asin(Math.max(-1, Math.min(1, (posRef.current - 50) / AMPLITUDE)))
        return
      }
      phase += dt * SPEED
      setPos(Math.round((50 + AMPLITUDE * Math.sin(phase)) * 10) / 10)
    }

    const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting }, { threshold: 0.4 })
    io.observe(el)
    last = performance.now()
    raf = requestAnimationFrame(tick)
    el.addEventListener('pointerdown', pause)
    el.addEventListener('pointermove', pause)
    el.addEventListener('focusin', pause)
    el.addEventListener('keydown', pause)

    return () => {
      cancelAnimationFrame(raf)
      io.disconnect()
      el.removeEventListener('pointerdown', pause)
      el.removeEventListener('pointermove', pause)
      el.removeEventListener('focusin', pause)
      el.removeEventListener('keydown', pause)
    }
  }, [stageRef, setPos])
}

function Compare({ item }) {
  const [pos, setPos] = useState(50)
  const stage = useRef(null)
  const { before, after, label } = item
  useAutoSlide(stage, pos, setPos)

  return (
    <figure className="ba">
      <div ref={stage} className="ba__stage" role="img" aria-label={`${ALT.beforeAfter} — ${label}`} style={{ '--pos': `${pos}%` }}>
        <div className="ba__layer ba__layer--before" style={before ? { backgroundImage: `url(${before})` } : undefined}>
          <span className="ba__tag">Before</span>
        </div>
        <div className="ba__layer ba__layer--after" style={after ? { backgroundImage: `url(${after})` } : undefined}>
          <span className="ba__tag ba__tag--after">After</span>
        </div>
        <span className="ba__handle" aria-hidden="true" />
        <input
          className="ba__range"
          type="range"
          min="0"
          max="100"
          value={pos}
          onChange={(e) => setPos(+e.target.value)}
          aria-label={`Compare before and after: ${label}`}
        />
      </div>
      <figcaption>{label}</figcaption>
    </figure>
  )
}

const CAROUSEL_EVERY = 4500 // ms between automatic card changes on phones
const CAROUSEL_HOLD = 8000 // ms the carousel waits after the user touches it or taps an arrow

export default function BeforeAfter() {
  const wrap = useRef(null)
  const track = useRef(null)
  const [active, setActive] = useState(0)
  const activeRef = useRef(0)
  const holdUntil = useRef(0)
  const total = BEFORE_AFTER.length

  useEffect(() => {
    activeRef.current = active
  }, [active])

  // Phones: one card per view; arrows / swipe / auto-advance all loop around.
  const go = useCallback((i) => {
    const el = track.current
    if (!el) return
    const n = (i + total) % total
    const card = el.children[n]
    el.scrollTo({ left: card.offsetLeft - (el.clientWidth - card.clientWidth) / 2, behavior: 'smooth' })
    activeRef.current = n
    setActive(n)
  }, [total])

  const step = (dir) => {
    holdUntil.current = performance.now() + CAROUSEL_HOLD
    go(activeRef.current + dir)
  }

  const onScroll = () => {
    const el = track.current
    const mid = el.scrollLeft + el.clientWidth / 2
    const idx = Array.from(el.children).findIndex((c) => c.offsetLeft + c.clientWidth >= mid)
    if (idx >= 0) {
      activeRef.current = idx
      setActive(idx)
    }
  }

  // Auto-advance while the gallery is on screen (phones only, respects reduced motion).
  useEffect(() => {
    const el = wrap.current
    const enabled =
      window.matchMedia('(max-width: 767px)').matches &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!el || !enabled) return
    let visible = false
    const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting }, { threshold: 0.5 })
    io.observe(el)
    const timer = setInterval(() => {
      if (visible && performance.now() > holdUntil.current) go(activeRef.current + 1)
    }, CAROUSEL_EVERY)
    return () => {
      io.disconnect()
      clearInterval(timer)
    }
  }, [go])

  return (
    <section className="section section--light" id="results">
      <div className="container">
        <header className="head">
          <p className="eyebrow reveal">Real journeys</p>
          <h2 className="h2 reveal" style={{ '--d': '60ms' }}>
            Before <span className="muted">&amp; After</span>
          </h2>
          <p className="sub reveal" style={{ '--d': '120ms' }}>{BEFORE_AFTER_INTRO}</p>
        </header>

        <div className="ba-wrap" ref={wrap}>
          <div
            className="ba-grid"
            ref={track}
            onScroll={onScroll}
            onPointerDown={() => { holdUntil.current = performance.now() + CAROUSEL_HOLD }}
          >
            {BEFORE_AFTER.map((item, i) => (
              <div className="ba-item reveal" key={item.id} style={{ '--d': `${(i % 3) * 80}ms` }}>
                <Compare item={item} />
              </div>
            ))}
          </div>

          <div className="ba-nav" aria-label="Before and after gallery controls">
            <button type="button" className="round" onClick={() => step(-1)} aria-label="Previous result">←</button>
            <span className="ba-nav__count" aria-live="polite">
              <strong>{String(active + 1).padStart(2, '0')}</strong> / {String(total).padStart(2, '0')}
            </span>
            <button type="button" className="round" onClick={() => step(1)} aria-label="Next result">→</button>
          </div>
        </div>
      </div>
    </section>
  )
}
