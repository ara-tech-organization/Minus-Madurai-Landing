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

const BASE = import.meta.env.BASE_URL // "/" locally, "/Minus-Madurai-Landing/" on GitHub Pages

/** Section id <-> clean path: "why" <-> "<base>why", "top" <-> "<base>" (legacy "#why" links still work). */
export const sectionPath = (id) => (id === 'top' ? BASE : `${BASE}${id}`)

function currentSection() {
  const path = window.location.pathname
  const rel = path.startsWith(BASE) ? path.slice(BASE.length) : path.replace(/^\/+/, '')
  return rel.replace(/\/+$/, '') || window.location.hash.slice(1)
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

/**
 * Every [data-book] link ("Book a Consultation") scrolls to the enquiry form in the hero,
 * highlights it and puts the cursor in the Name field.
 */
export function useBookingLinks() {
  useEffect(() => {
    const onClick = (e) => {
      const link = e.target.closest('a[data-book]')
      if (!link) return
      const form = document.getElementById('enquiry')
      if (!form) return
      e.preventDefault()
      const wide = window.matchMedia('(min-width: 1024px)').matches
      form.scrollIntoView({ behavior: 'smooth', block: wide ? 'center' : 'start' })
      form.classList.remove('is-called')
      void form.offsetWidth // restart the highlight animation on repeat clicks
      form.classList.add('is-called')
      window.setTimeout(() => {
        form.querySelector('input')?.focus({ preventScroll: true })
      }, 700)
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])
}
