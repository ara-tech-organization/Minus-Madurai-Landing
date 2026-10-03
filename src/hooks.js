import { useCallback, useEffect, useRef, useState } from 'react'

/** Adds `.is-in` to every `.reveal` element as it enters the viewport. */
export function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('is-in'))
      return
    }
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-in')
            io.unobserve(e.target)
          }
        }),
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
}

export function useScrolled(offset = 24) {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > offset)
    on()
    window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [offset])
  return scrolled
}

/** Section id <-> clean path: "why" <-> "/why", "top" <-> "/" (legacy "#why" links still work). */
export const sectionPath = (id) => (id === 'top' ? '/' : `/${id}`)

function currentSection() {
  const fromPath = window.location.pathname.replace(/^\/+|\/+$/g, '')
  return fromPath || window.location.hash.slice(1)
}

function setPath(id) {
  window.history.replaceState(null, '', sectionPath(id) + window.location.search)
}

/**
 * Scroll-spy + deep links.
 * - highlights the section in view and keeps the address bar in sync (/why, /treatments …)
 * - opens straight at the section when the page is loaded on a section path such as /why (copy URL → paste in new tab)
 * - goTo(id) scrolls smoothly and locks the spy until the scroll settles
 */
export function useScrollSpy(ids) {
  const [active, setActive] = useState(() => {
    const h = currentSection()
    return ids.includes(h) ? h : ids[0]
  })
  const lockUntil = useRef(0)

  const goTo = useCallback((id) => {
    const el = document.getElementById(id)
    if (!el) return
    lockUntil.current = performance.now() + 1000
    setActive(id)
    setPath(id)
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [])

  useEffect(() => {
    const initial = currentSection()
    const target = ids.includes(initial) ? document.getElementById(initial) : null
    if (target) {
      lockUntil.current = performance.now() + 800
      target.scrollIntoView({ behavior: 'instant', block: 'start' })
    }

    const io = new IntersectionObserver(
      (entries) => {
        if (performance.now() < lockUntil.current) return
        const hit = entries.filter((e) => e.isIntersecting).pop()
        if (!hit) return
        setActive(hit.target.id)
        setPath(hit.target.id)
      },
      { rootMargin: '-40% 0px -55% 0px' },
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) io.observe(el)
    })
    return () => io.disconnect()
  }, [ids])

  return { active, goTo }
}
