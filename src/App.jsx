import './App.css'
import { useReveal, useScrollSpy } from './hooks'
import { NAV } from './data'
import Header from './components/Header'
import Hero from './components/Hero'
import Welcome from './components/Welcome'
import WhyMadurai from './components/WhyMadurai'
import Testimonials from './components/Testimonials'
import Treatments from './components/Treatments'
import BeforeAfter from './components/BeforeAfter'
import Closing from './components/Closing'

const SECTION_IDS = NAV.map((n) => n.id)

export default function App() {
  useReveal()
  const { active, goTo } = useScrollSpy(SECTION_IDS)
  return (
    <>
      <Header active={active} goTo={goTo} />
      <main>
        <Hero />
        <Welcome />
        <WhyMadurai />
        <Testimonials />
        <Treatments />
        <BeforeAfter />
      </main>
      <Closing goTo={goTo} />
    </>
  )
}
