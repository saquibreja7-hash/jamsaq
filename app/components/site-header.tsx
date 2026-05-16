import Link from 'next/link'
import { Mail } from 'lucide-react'

const shell =
  'mx-auto w-[min(1180px,calc(100%_-_40px))] max-[720px]:w-[min(calc(100%_-_28px),1180px)]'

const navItems = [
  { label: 'Services', href: '/#services' },
  { label: 'Work', href: '/#work' },
  { label: 'Pricing', href: '/#pricing' },
  { label: 'Ideas', href: '/surprise-ideas' },
  { label: 'Contact', href: '/#contact' },
]

export function SiteHeader() {
  return (
    <header
      className={`${shell} sticky top-0 z-20 flex items-center justify-between gap-6 border-b border-[var(--line)] bg-[rgba(250,249,245,0.92)] py-[18px] backdrop-blur-2xl max-[1040px]:flex-wrap max-[1040px]:items-stretch max-[720px]:pt-3`}
      aria-label="Primary navigation"
    >
      <Link className="flex min-w-[220px] items-center gap-3 text-inherit no-underline max-[1040px]:flex-1" href="/#top" aria-label="Jamsaq home">
        <span className="grid h-[42px] w-[42px] place-items-center rounded-lg bg-[var(--ink)] font-extrabold text-[var(--paper)] shadow-[6px_6px_0_var(--mint)]">
          J
        </span>
        <span>
          <strong className="block leading-none">Jamsaq</strong>
          <small className="mt-1 block text-[0.78rem] leading-none text-[var(--muted)]">Web Design Agency</small>
        </span>
      </Link>
      <nav
        className="flex items-center justify-center gap-2 rounded-lg border border-[var(--line)] bg-[rgba(255,255,255,0.72)] p-1.5 max-[1040px]:order-3 max-[1040px]:w-full max-[720px]:justify-between max-[720px]:overflow-x-auto"
        aria-label="Site sections"
      >
        {navItems.map((item) => (
          <Link
            className="rounded-md px-[13px] py-2.5 text-[0.92rem] text-[var(--muted)] no-underline hover:bg-[var(--white)] hover:text-[var(--ink)] focus-visible:bg-[var(--white)] focus-visible:text-[var(--ink)] max-[720px]:whitespace-nowrap"
            href={item.href}
            key={item.label}
          >
            {item.label}
          </Link>
        ))}
      </nav>
      <a
        className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-[var(--coral)] px-[15px] font-bold text-[var(--white)] no-underline shadow-[0_12px_28px_rgba(210,83,59,0.2)] max-[720px]:w-full"
        href="mailto:hello@jamsaq.studio"
      >
        <Mail size={18} aria-hidden="true" />
        <span>Start a brief</span>
      </a>
    </header>
  )
}
