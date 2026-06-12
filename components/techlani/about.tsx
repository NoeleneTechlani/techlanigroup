import { Reveal } from './reveal'

export function About() {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              About Techlani
            </p>
            <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-balance md:text-4xl">
              We build technology with purpose.
            </h2>
          </Reveal>
          <Reveal delay={120} className="lg:col-span-7">
            <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
              Techlani exists to create systems that reduce complexity, improve
              decision-making, and protect what matters. From digital safety
              platforms to SME automation and philanthropic initiatives, our
              work is grounded in practical impact.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
