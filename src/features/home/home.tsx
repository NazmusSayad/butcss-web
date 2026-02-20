import { Background } from './components/background'
import { CallToAction } from './components/call-to-action'
import { Example } from './components/example'
import { Features } from './components/features'
import { Footer } from './components/footer'
import { Hero } from './components/hero'
import { HowItWorks } from './components/how-it-works'
import { Navbar } from './components/navbar'
import { Quickstart } from './components/quickstart'

export function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f6f1e9] text-[#16181c]">
      <Background />
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Example />
      <Quickstart />
      <CallToAction />
      <Footer />
    </main>
  )
}
