import { SiteHeader } from '@/components/techlani/site-header'
import { Hero } from '@/components/techlani/hero'
import { TrustStrip } from '@/components/techlani/trust-strip'
import { About } from '@/components/techlani/about'
import { Divisions } from '@/components/techlani/divisions'
import { Concepts } from '@/components/techlani/concepts'
import { HowWeWork } from '@/components/techlani/how-we-work'
import { WhyTechlani } from '@/components/techlani/why-techlani'
import { Contact } from '@/components/techlani/contact'
import { SiteFooter } from '@/components/techlani/site-footer'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <TrustStrip />
        <About />
        <Divisions />
        <Concepts />
        <HowWeWork />
        <WhyTechlani />
        <Contact />
      </main>
      <SiteFooter />
    </>
  )
}
