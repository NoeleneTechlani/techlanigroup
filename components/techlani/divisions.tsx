import { ShieldCheck, Cpu, HeartHandshake } from 'lucide-react'
import { Reveal } from './reveal'

const DIVISIONS = [
  {
    id: 'safety',
    icon: ShieldCheck,
    name: 'Techlani Safety',
    description:
      'Digital safety systems, risk monitoring tools, cybersecurity awareness, and protective technology for families, organisations, and communities.',
  },
  {
    id: 'digital',
    icon: Cpu,
    name: 'Techlani Digital',
    description:
      'AI-powered customer experience tools, SME automation, enquiry systems, digital workflows, and operational technology.',
  },
  {
    id: 'philanthropy',
    icon: HeartHandshake,
    name: 'Techlani Philanthropy',
    description:
      'Technology-backed community initiatives supporting animal welfare, education, digital inclusion, and social impact.',
  },
]

export function Divisions() {
  return (
    <section id="divisions" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Our Divisions
          </p>
          <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-balance md:text-4xl">
            Three divisions, one mission.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {DIVISIONS.map((division, i) => (
            <Reveal key={division.id} delay={i * 120}>
              <article
                id={division.id}
                className="group relative h-full scroll-mt-24 overflow-hidden rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50"
              >
                <div
                  className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  aria-hidden="true"
                />
                <div className="flex size-12 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary">
                  <division.icon className="size-6" />
                </div>
                <h3 className="mt-6 font-heading text-xl font-semibold text-foreground">
                  {division.name}
                </h3>
                <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground">
                  {division.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
