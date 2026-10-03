import { useEffect, useRef, useState } from 'react'
import { FAQS } from '../data'

const EASE = 'cubic-bezier(0.22, 1, 0.36, 1)' // opening: quick start, soft landing
const EASE_CLOSE = 'cubic-bezier(0.65, 0, 0.35, 1)' // closing: gentle both ends

function FaqItem({ item, isOpen, onToggle, delay }) {
  const details = useRef(null)
  const panel = useRef(null)
  const firstRender = useRef(true)
  const [initiallyOpen] = useState(isOpen) // fixed after mount; later changes are animated below

  // Smoothly grow / shrink the answer instead of letting <details> snap open.
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false
      return
    }
    const d = details.current
    const p = panel.current
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    p.getAnimations().forEach((a) => a.cancel())

    if (isOpen) {
      d.open = true
      if (reduce) return
      const h = p.scrollHeight
      p.animate({ height: ['0px', `${h}px`], opacity: [0, 1] }, { duration: 520, easing: EASE })
    } else if (reduce) {
      d.open = false
    } else {
      const h = p.offsetHeight
      const anim = p.animate({ height: [`${h}px`, '0px'], opacity: [1, 0] }, { duration: 480, easing: EASE_CLOSE })
      anim.onfinish = () => {
        d.open = false
      }
    }
  }, [isOpen])

  return (
    <details
      ref={details}
      className="faq__item reveal"
      data-open={isOpen}
      open={initiallyOpen}
      style={{ '--d': `${delay}ms` }}
    >
      <summary
        onClick={(e) => {
          e.preventDefault()
          onToggle()
        }}
        aria-expanded={isOpen}
      >
        <h4 className="faq__q">{item.q}</h4>
        <span className="faq__icon" aria-hidden="true" />
      </summary>
      <div className="faq__panel" ref={panel}>
        <p className="faq__a">{item.a}</p>
      </div>
    </details>
  )
}

export default function Faq() {
  // each question opens and closes on its own; the first one starts open
  const [openSet, setOpenSet] = useState(() => new Set([0]))
  const toggle = (i) =>
    setOpenSet((prev) => {
      const next = new Set(prev)
      if (next.has(i)) next.delete(i)
      else next.add(i)
      return next
    })

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
            <FaqItem
              key={f.q}
              item={f}
              isOpen={openSet.has(i)}
              onToggle={() => toggle(i)}
              delay={i * 60}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
