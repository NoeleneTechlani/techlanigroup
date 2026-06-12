import {
  ArrowRight,
  Boxes,
  Baby,
  Stethoscope,
  MessageSquare,
  ShieldAlert,
} from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Reveal } from './reveal'

const SMALL_CONCEPTS = [
  { icon: Baby, title: 'Childcare Parent Journey System' },
  { icon: Stethoscope, title: 'Veterinary Client Assistant' },
  { icon: MessageSquare, title: 'SME AI Enquiry Assistant' },
  { icon: ShieldAlert, title: 'Digital Safety Monitoring Tools' },
]

export function Concepts() {
  return (
    <section id="concepts" className="scroll-mt-20 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Featured Concept Work
          </p>
          <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-balance md:text-4xl">
            Concept systems built to solve real problems.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-5">
          <Reveal className="lg:col-span-3">
            <article className="relative h-full overflow-hidden rounded-2xl border border-border bg-card p-8 md:p-10">
              <div className="absolute -right-16 -top-16 size-48 rounded-full bg-primary/20 blur-3xl" />
              <div className="relative">
                <div className="flex size-12 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary">
                  <Boxes className="size-6" />
                </div>
                <h3 className="mt-6 font-heading text-2xl font-bold text-foreground md:text-3xl">
                  Self Storage Digital Assistant
                </h3>
                <p className="mt-4 max-w-xl text-pretty leading-relaxed text-muted-foreground">
                  A customer experience concept designed to help storage
                  customers choose the right unit, reduce uncertainty, and
                  generate better enquiries.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="#contact"
                    className={cn(buttonVariants(), 'group h-11 gap-2 px-6')}
                  >
                    View Demo
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </a>
                  <a
                    href="#contact"
                    className={cn(
                      buttonVariants({ variant: 'outline' }),
                      'h-11 px-6',
                    )}
                  >
                    Request a Concept
                  </a>
                </div>
              </div>
            </article>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:col-span-2">
            {SMALL_CONCEPTS.map((concept, i) => (
              <Reveal key={concept.title} delay={i * 100}>
                <article className="group flex h-full flex-col justify-between rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50">
                  <concept.icon className="size-6 text-primary" />
                  <h4 className="mt-8 text-sm font-semibold leading-snug text-foreground">
                    {concept.title}
                  </h4>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
