import { BackgroundGlow } from './components/layout/BackgroundGlow'
import { Navbar } from './components/layout/Navbar'
import { About } from './components/sections/About'
import { Contact } from './components/sections/Contact'
import { Hero } from './components/sections/Hero'
import { Portfolio } from './components/sections/Portfolio'

export default function App() {
  return (
    <>
      <BackgroundGlow />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Portfolio />
        <Contact />
      </main>
    </>
  )
}
