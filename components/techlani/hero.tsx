import Image from 'next/image'
import { ArrowRight, ShieldCheck } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden pt-32 pb-20 md:pt-44 md:pb-28"
    >
      <Image
        src="/images/hero-network.png"
        alt=""
        fill
        priority
        className="object-cover object-right opacity-60"
      />
      <div className="absolute inset-0 -z-[1] bg-gradient-to-b from-background/70 via-background/85 to-background" />
      <div className="absolute inset-0 -z-[1] bg-gradient-to-r from-background via-background/60 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-border glass px-3 py-1.5 text-xs font-medium text-muted-foreground">
            <ShieldCheck className="size-3.5 text-primary" />
            Technology for safer systems
          </div>

          <h1 className="mt-6 font-heading text-4xl font-bold leading-[1.05] tracking-tight text-balance sm:text-5xl md:text-6xl lg:text-7xl">
            Technology for{' '}
            <span className="text-gradient-silver">Safer Systems.</span>
          </h1>

          <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            Techlani designs practical digital systems that improve safety,
            trust, and everyday operations for people, businesses, and
            communities.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#divisions"
              className={cn(
                buttonVariants({ variant: 'default' }),
                'group h-12 gap-2 px-6 text-sm',
              )}
            >
              Explore Our Divisions
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#concepts"
              className={cn(
                buttonVariants({ variant: 'outline' }),
                'h-12 px-6 text-sm',
              )}
            >
              View Concept Work
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
