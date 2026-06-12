'use client'

import { useState, type FormEvent } from 'react'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Reveal } from './reveal'

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="scroll-mt-20 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl border border-border bg-card">
          <div className="grid lg:grid-cols-2">
            <Reveal className="p-8 md:p-12">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                Contact
              </p>
              <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-balance md:text-4xl">
                Let&apos;s build a safer system.
              </h2>
              <p className="mt-5 max-w-md text-pretty leading-relaxed text-muted-foreground">
                Whether you need a safety platform, digital customer experience
                system, or practical AI integration, Techlani can help turn the
                idea into a working system.
              </p>
            </Reveal>

            <div className="border-t border-border bg-background/40 p-8 md:p-12 lg:border-l lg:border-t-0">
              {submitted ? (
                <div className="flex h-full min-h-56 flex-col items-center justify-center text-center">
                  <CheckCircle2 className="size-10 text-primary" />
                  <h3 className="mt-4 font-heading text-xl font-semibold text-foreground">
                    Enquiry received.
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Thank you. A member of the Techlani team will be in touch
                    shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="grid gap-5">
                  <Field
                    id="name"
                    label="Name"
                    type="text"
                    autoComplete="name"
                    placeholder="Your full name"
                  />
                  <Field
                    id="email"
                    label="Email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@organisation.com"
                  />
                  <Field
                    id="organisation"
                    label="Organisation"
                    type="text"
                    autoComplete="organization"
                    placeholder="Company or community group"
                  />
                  <div className="grid gap-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium text-foreground"
                    >
                      What do you need help with?
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      placeholder="Tell us about the problem you want to solve."
                      className="w-full resize-none rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/70 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>
                  <Button type="submit" size="lg" className="group mt-1 w-full">
                    Send Enquiry
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Field({
  id,
  label,
  ...props
}: {
  id: string
  label: string
} & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="grid gap-2">
      <label htmlFor={id} className="text-sm font-medium text-foreground">
        {label}
      </label>
      <input
        id={id}
        name={id}
        required
        {...props}
        className="w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/70 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
      />
    </div>
  )
}
