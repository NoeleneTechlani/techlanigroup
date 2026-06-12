import { Reveal } from './reveal'

const STEPS = [
  { n: '01', title: 'Diagnose the problem' },
  { n: '02', title: 'Design the system' },
  { n: '03', title: 'Build the prototype' },
  { n: '04', title: 'Deploy and improve' },
]

export function HowWeWork() {
  return (
    <section className="border-y border-border bg-card/40 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            How We Work
          </p>
          <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-balance md:text-4xl">
            A disciplined path from problem to working system.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, i) => (
            <Reveal key={step.n} delay={i * 100}>
              <div className="group h-full bg-card p-7 transition-colors hover:bg-secondary">
                <span className="font-heading text-3xl font-bold text-primary/40 transition-colors group-hover:text-primary">
                  {step.n}
                </span>
                <h3 className="mt-6 text-base font-semibold text-foreground">
                  {step.title}
                </h3>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
