import { TechlaniMark } from './logo'

const LINKS = [
  { label: 'Safety', href: '#safety' },
  { label: 'Digital', href: '#digital' },
  { label: 'Philanthropy', href: '#philanthropy' },
  { label: 'Contact', href: '#contact' },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card/40">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-xs">
            <a href="#top" className="flex items-center gap-2.5">
              <TechlaniMark className="size-7" />
              <span className="font-heading text-lg font-bold tracking-[0.2em] text-foreground">
                TECHLANI
              </span>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Technology for safer systems.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-10 border-t border-border pt-6">
          <p className="text-xs text-muted-foreground">
            &copy; 2026 Techlani Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
