import { Cpu, ShieldCheck, Layers } from 'lucide-react'
import { Reveal } from './reveal'

const ITEMS = [
  { icon: ShieldCheck, label: 'Safety-led technology' },
  { icon: Cpu, label: 'Practical AI integration' },
  { icon: Layers, label: 'Systems built for real-world use' },
]

export function TrustStrip() {
  return (
    <section className="border-y border-border bg-card/40">
      <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-border px-6 sm:grid-cols-3 sm:divide-x sm:divide-y-0 lg:px-8">
        {ITEMS.map((item, i) => (
          <Reveal
            key={item.label}
            delay={i * 100}
            className="flex items-center gap-3 py-6 sm:justify-center sm:px-6"
          >
            <item.icon className="size-5 shrink-0 text-primary" />
            <span className="text-sm font-medium text-foreground">
              {item.label}
            </span>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
