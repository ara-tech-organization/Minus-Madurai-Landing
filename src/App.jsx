import { useCallback, useEffect, useState } from 'react'
import './App.css'
import { BASE, sectionPath, useBookingLinks, useReveal, useScrollSpy } from './hooks'
import { NAV } from './data'
import { LEGAL } from './legal'
import Header from './components/Header'
import Hero from './components/Hero'
import Welcome from './components/Welcome'
import WhyMadurai from './components/WhyMadurai'
import Testimonials from './components/Testimonials'
import Treatments from './components/Treatments'
import BeforeAfter from './components/BeforeAfter'
import Faq from './components/Faq'
import FinalCta from './components/FinalCta'
import Footer from './components/Footer'
import LegalPage from './components/LegalPage'
import ThankYou from './components/ThankYou'

const SECTION_IDS = NAV.map((n) => n.id)
const HOME_TITLE = 'Best Slimming Clinic in Madurai | MINUS Slimming Clinic'

/** "home" or a legal page key, read from the address bar (…/privacy-policy). */
function getRoute() {
  const p = window.location.pathname
  const rel = (p.startsWith(BASE) ? p.slice(BASE.length) : p.replace(/^\/+/, '')).replace(/\/+$/, '')
  return LEGAL[rel] || rel === 'thankyou' ? rel : 'home'
}

export default function App() {
  const [route, setRoute] = useState(getRoute)
  const isHome = route === 'home'

  useReveal(route)
  useBookingLinks()
  const { active, goTo } = useScrollSpy(SECTION_IDS, isHome)

  // browser back / forward between home and the legal pages
  useEffect(() => {
    const onPop = () => setRoute(getRoute())
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [])

  useEffect(() => {
    const title = route === 'thankyou' ? 'Thank You' : isHome ? null : LEGAL[route].title
    document.title = title ? `${title} | MINUS Slimming Clinic – Madurai` : HOME_TITLE
  }, [route, isHome])

  // the thank-you page should not appear in search results
  useEffect(() => {
    if (route !== 'thankyou') return
    const meta = document.createElement('meta')
    meta.name = 'robots'
    meta.content = 'noindex'
    document.head.appendChild(meta)
    return () => meta.remove()
  }, [route])

  // legal pages: glide to the top once the page has changed (smooth, not a jump)
  useEffect(() => {
    if (!isHome) window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [route, isHome])

  // open a legal page (or go home) without a full reload
  const navigate = useCallback((key) => {
    window.history.pushState(null, '', key === 'home' ? BASE : sectionPath(key))
    setRoute(key)
  }, [])

  // header / footer links: scroll on the home page, or return home at that section from a legal page
  const go = useCallback(
    (id) => {
      if (isHome) return goTo(id)
      window.history.pushState(null, '', sectionPath(id))
      setRoute('home') // the scroll-spy effect scrolls to the section named in the address bar
      window.scrollTo({ top: 0, behavior: 'instant' })
    },
    [isHome, goTo],
  )

  return (
    <>
      <Header active={isHome ? active : null} goTo={go} />
      {isHome ? (
        <>
          <main>
            <Hero onSubmitted={() => navigate('thankyou')} />
            <Welcome />
            <WhyMadurai />
            <Testimonials />
            <Treatments />
            <BeforeAfter />
            <Faq />
            <FinalCta />
          </main>
        </>
      ) : (
        route === 'thankyou' ? <ThankYou goTo={go} /> : <LegalPage pageKey={route} goTo={go} />
      )}
      <Footer goTo={go} navigate={navigate} />
    </>
  )
}
