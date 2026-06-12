import { Check } from 'lucide-react'
import { Reveal } from './reveal'

const POINTS = [
  'We do not build technology for novelty.',
  'We build systems that solve practical problems.',
  'We combine safety thinking, AI, digital operations, and community impact.',
  'We help organisations become more resilient, responsive, and trusted.',
]

export function WhyTechlani() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-4">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Why Techlani
            </p>
            <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-balance md:text-4xl">
              Serious technology, built for trust.
            </h2>
          </Reveal>

          <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:col-span-8">
            {POINTS.map((point, i) => (
              <Reveal key={point} delay={i * 80}>
                <div className="flex h-full items-start gap-4 bg-card p-7">
                  <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-primary">
                    <Check className="size-4" />
                  </span>
                  <p className="text-pretty leading-relaxed text-foreground">
                    {point}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
