import {
  ArrowRight,
  Check,
  Clock3,
  Code2,
  ExternalLink,
  Gauge,
  Layers3,
  Mail,
  MessageSquare,
  Palette,
  Search,
  ShieldCheck,
} from 'lucide-react'

const services = [
  {
    icon: Search,
    title: 'Strategy sprint',
    copy: 'Positioning, sitemap, conversion goals, and the message architecture behind every key page.',
  },
  {
    icon: Palette,
    title: 'Brand-led web design',
    copy: 'High-trust visual systems, landing pages, and responsive layouts that give the business a sharper voice.',
  },
  {
    icon: Code2,
    title: 'Fast builds',
    copy: 'Production-ready Next.js, Tailwind, Webflow, or Shopify sites with clean handoff docs and analytics wired in.',
  },
  {
    icon: Gauge,
    title: 'Launch optimization',
    copy: 'Performance, accessibility, SEO foundations, and practical experiments after the first release.',
  },
]

const projects = [
  {
    type: 'Concept study',
    name: 'Local Service Redesign',
    result: 'Lead path clarified',
    tone: 'Mobile-first service pages, proof blocks, and quote-request UX',
  },
  {
    type: 'Concept study',
    name: 'Booking App Sprint',
    result: 'MVP flow mapped',
    tone: 'Onboarding, scheduling, and confirmation states for a lean app',
  },
  {
    type: 'Concept study',
    name: 'Founder Launch Kit',
    result: 'Pitch-ready in 21 days',
    tone: 'Landing page, app prototype, and investor-friendly story arc',
  },
]

const plans = [
  {
    name: 'Launch',
    price: '$4.8k',
    detail: 'Focused site for a new offer or business refresh.',
    features: ['1-4 core pages', 'Responsive design', 'CMS-ready handoff'],
  },
  {
    name: 'Growth',
    price: '$8.5k',
    detail: 'A deeper site for teams that need clearer paths to revenue.',
    features: ['5-8 pages', 'Lead funnel design', 'Analytics and QA pass'],
  },
  {
    name: 'Partner',
    price: 'Custom',
    detail: 'Ongoing design, build, and optimization support.',
    features: ['Monthly roadmap', 'Experiment backlog', 'Priority build slots'],
  },
]

const shell =
  'mx-auto w-[min(1180px,calc(100%_-_40px))] max-[720px]:w-[min(calc(100%_-_28px),1180px)]'
const eyebrow = 'mb-[18px] text-[0.79rem] font-extrabold uppercase text-[var(--teal)]'

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--paper)] text-[var(--ink)] [background-image:linear-gradient(90deg,rgba(28,30,34,0.06)_1px,transparent_1px),linear-gradient(180deg,rgba(28,30,34,0.05)_1px,transparent_1px)] [background-size:64px_64px] max-[720px]:[background-size:42px_42px]">
      <header
        className={`${shell} sticky top-0 z-20 flex items-center justify-between gap-6 border-b border-[var(--line)] bg-[rgba(250,249,245,0.92)] py-[18px] backdrop-blur-2xl max-[1040px]:flex-wrap max-[1040px]:items-stretch max-[720px]:pt-3`}
        aria-label="Primary navigation"
      >
        <a className="flex min-w-[220px] items-center gap-3 text-inherit no-underline max-[1040px]:flex-1" href="#top" aria-label="Jamsaq home">
          <span className="grid h-[42px] w-[42px] place-items-center rounded-lg bg-[var(--ink)] font-extrabold text-[var(--paper)] shadow-[6px_6px_0_var(--mint)]">
            J
          </span>
          <span>
            <strong className="block leading-none">Jamsaq</strong>
            <small className="mt-1 block text-[0.78rem] leading-none text-[var(--muted)]">Web Design Agency</small>
          </span>
        </a>
        <nav
          className="flex items-center justify-center gap-2 rounded-lg border border-[var(--line)] bg-[rgba(255,255,255,0.72)] p-1.5 max-[1040px]:order-3 max-[1040px]:w-full max-[720px]:justify-between max-[720px]:overflow-x-auto"
          aria-label="Site sections"
        >
          {['Services', 'Work', 'Pricing', 'Contact'].map((item) => (
            <a
              className="rounded-md px-[13px] py-2.5 text-[0.92rem] text-[var(--muted)] no-underline hover:bg-[var(--white)] hover:text-[var(--ink)] focus-visible:bg-[var(--white)] focus-visible:text-[var(--ink)] max-[720px]:whitespace-nowrap"
              href={`#${item.toLowerCase()}`}
              key={item}
            >
              {item}
            </a>
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

      <section
        className={`${shell} grid min-h-[calc(100vh-80px)] grid-cols-[minmax(0,1fr)_minmax(360px,520px)] items-center gap-14 py-16 max-[1040px]:min-h-0 max-[1040px]:grid-cols-1 max-[1040px]:pt-12 max-[720px]:gap-9`}
        id="top"
      >
        <div className="max-w-[680px]">
          <p className={eyebrow}>Independent digital studio</p>
          <h1 className="mb-6 max-w-[820px] text-[4.6rem] font-bold leading-[1.02] tracking-normal text-[var(--ink)] max-[1040px]:text-[3.4rem] max-[720px]:text-[2.55rem]">
            Websites that make young brands look established.
          </h1>
          <p className="max-w-[660px] text-[1.18rem] leading-[1.7] text-[var(--muted)] max-[720px]:text-[1.02rem]">
            Jamsaq designs and builds sharp, fast websites for founders, local businesses,
            and service teams that need credibility before the next big conversation.
          </p>
          <div className="mt-[34px] flex flex-wrap gap-3 max-[720px]:w-full" aria-label="Primary actions">
            <a className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-lg border border-[var(--ink)] bg-[var(--ink)] px-5 font-extrabold text-[var(--white)] no-underline shadow-[0_14px_32px_rgba(28,30,34,0.16)] transition hover:-translate-y-0.5 max-[720px]:w-full" href="#contact">
              <MessageSquare size={19} aria-hidden="true" />
              <span>Plan my site</span>
            </a>
            <a className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-lg border border-[var(--line-strong)] bg-[var(--white)] px-5 font-extrabold text-inherit no-underline transition hover:-translate-y-0.5 max-[720px]:w-full" href="#work">
              <span>View work</span>
              <ArrowRight size={19} aria-hidden="true" />
            </a>
          </div>
          <dl className="mt-[42px] grid max-w-[640px] grid-cols-3 gap-3.5 max-[720px]:grid-cols-1" aria-label="Studio highlights">
            {[
              ['21 days', 'typical launch window'],
              ['92', 'average Lighthouse score'],
              ['3x', 'included review rounds'],
            ].map(([stat, label]) => (
              <div className="rounded-lg border border-[var(--line)] bg-[rgba(255,255,255,0.72)] p-[18px]" key={stat}>
                <dt className="text-[1.55rem] font-black text-[var(--ink)]">{stat}</dt>
                <dd className="mt-1.5 text-[0.9rem] text-[var(--muted)]">{label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="min-h-[560px] overflow-hidden rounded-lg border border-[rgba(28,30,34,0.2)] bg-[var(--ink)] shadow-[26px_30px_0_var(--gold)] max-[1040px]:min-h-0 max-[720px]:shadow-[10px_10px_0_var(--gold)]" aria-label="Website design preview">
          <div className="flex h-[46px] items-center gap-2 bg-[#35383e] px-[18px]">
            <span className="h-2.5 w-2.5 rounded-full bg-[var(--coral)]"></span>
            <span className="h-2.5 w-2.5 rounded-full bg-[var(--gold)]"></span>
            <span className="h-2.5 w-2.5 rounded-full bg-[var(--mint)]"></span>
          </div>
          <div className="min-h-[514px] bg-[#24262b] p-6 text-[var(--white)] [background-image:linear-gradient(90deg,rgba(255,255,255,0.09)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.07)_1px,transparent_1px)] [background-size:44px_44px] max-[720px]:p-4">
            <div className="mb-7 grid grid-cols-[1.2fr_0.7fr_0.7fr] gap-3">
              <span className="min-h-4 rounded-md bg-[rgba(255,255,255,0.2)]"></span>
              <span className="min-h-4 rounded-md bg-[rgba(255,255,255,0.2)]"></span>
              <span className="min-h-4 rounded-md bg-[rgba(255,255,255,0.2)]"></span>
            </div>
            <div className="grid min-h-[310px] grid-cols-[1fr_154px] gap-6 rounded-lg bg-[var(--paper)] p-6 max-[720px]:grid-cols-1">
              <div>
                <span className="mb-5 inline-flex rounded-full bg-[var(--mint)] px-2.5 py-1.5 text-[0.75rem] font-extrabold text-[var(--ink)]">
                  Brand system
                </span>
                <strong className="block max-w-60 text-[2.2rem] leading-[1.02] text-[var(--ink)]">
                  Launch page concept
                </strong>
                <p className="mt-[18px] max-w-[230px] leading-[1.55] text-[var(--muted)]">
                  Messaging, visual rhythm, and lead capture aligned.
                </p>
              </div>
              <div className="self-stretch rounded-lg border border-[var(--line)] bg-[var(--white)] p-[18px] max-[720px]:min-h-[210px]">
                <span className="mb-3 block h-[126px] rounded-md bg-[var(--teal)]"></span>
                <span className="mb-3 block h-[42px] rounded-md bg-[var(--gold)]"></span>
                <span className="block h-[42px] rounded-md bg-[var(--coral)]"></span>
              </div>
            </div>
            <div className="mt-[22px] grid grid-cols-3 gap-3 max-[720px]:grid-cols-1">
              <span className="min-h-[76px] rounded-md bg-[rgba(255,255,255,0.2)]"></span>
              <span className="min-h-[76px] rounded-md bg-[rgba(255,255,255,0.2)]"></span>
              <span className="min-h-[76px] rounded-md bg-[rgba(255,255,255,0.2)]"></span>
            </div>
          </div>
        </div>
      </section>

      <section className={`${shell} grid grid-cols-[1fr_repeat(4,auto)] items-center gap-6 border-y border-[var(--line)] py-6 max-[720px]:grid-cols-1 max-[720px]:justify-items-start max-[720px]:gap-2.5`} aria-label="Best fit clients">
        <span className="font-bold text-[var(--muted)]">Built for</span>
        <strong>Founders</strong>
        <strong>Studios</strong>
        <strong>Local Brands</strong>
        <strong>Consultants</strong>
      </section>

      <section className={`${shell} py-24 max-[720px]:py-16`} id="services">
        <div className="mb-[34px] flex items-end justify-between gap-8 max-[720px]:block">
          <div>
            <p className={eyebrow}>Services</p>
            <h2 className="max-w-[760px] text-[2.7rem] font-bold leading-[1.02] text-[var(--ink)] max-[1040px]:text-[2.2rem] max-[720px]:text-[1.9rem]">
              Everything needed to move from rough idea to polished launch.
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-4 max-[1040px]:grid-cols-2 max-[720px]:grid-cols-1">
          {services.map((service, index) => {
            const Icon = service.icon
            const iconClass = [
              'bg-[var(--mint)] text-[var(--ink)]',
              'bg-[var(--gold)] text-[var(--ink)]',
              'bg-[var(--teal)] text-[var(--white)]',
              'bg-[var(--coral)] text-[var(--white)]',
            ][index]
            return (
              <article className="rounded-lg border border-[var(--line)] bg-[rgba(255,255,255,0.8)] p-6" key={service.title}>
                <span className={`mb-6 grid h-12 w-12 place-items-center rounded-lg ${iconClass}`}>
                  <Icon size={22} aria-hidden="true" />
                </span>
                <h3 className="mb-3 text-[1.3rem] font-bold leading-[1.02] text-[var(--ink)]">{service.title}</h3>
                <p className="leading-[1.65] text-[var(--muted)]">{service.copy}</p>
              </article>
            )
          })}
        </div>
      </section>

      <section className={`${shell} border-y border-[var(--line)] py-24 max-[720px]:py-16`} id="work">
        <div className="mb-[34px]">
          <p className={eyebrow}>Selected work</p>
          <h2 className="max-w-[760px] text-[2.7rem] font-bold leading-[1.02] text-[var(--ink)] max-[1040px]:text-[2.2rem] max-[720px]:text-[1.9rem]">
            Clean stories, clear paths, and stronger reasons to click.
          </h2>
        </div>
        <div className="grid gap-3">
          {projects.map((project) => (
            <article className="grid min-h-[118px] grid-cols-[1fr_auto_24px] items-center gap-6 rounded-lg border border-[var(--line)] bg-[var(--white)] px-6 py-5 max-[720px]:grid-cols-1 max-[720px]:gap-3" key={project.name}>
              <div>
                <span className="mb-2 block font-extrabold text-[var(--coral)]">{project.type}</span>
                <h3 className="mb-1.5 text-[1.3rem] font-bold leading-[1.02] text-[var(--ink)]">{project.name}</h3>
                <p className="leading-[1.65] text-[var(--muted)]">{project.tone}</p>
              </div>
              <strong className="text-[1.2rem] text-[var(--teal)]">{project.result}</strong>
              <ExternalLink size={20} aria-hidden="true" />
            </article>
          ))}
        </div>
      </section>

      <section className={`${shell} grid grid-cols-[0.8fr_1.2fr] items-start gap-12 py-24 max-[1040px]:grid-cols-1 max-[720px]:py-16`} aria-label="Project process">
        <div className="sticky top-[116px] max-[1040px]:static">
          <p className={eyebrow}>Process</p>
          <h2 className="mb-7 max-w-[760px] text-[2.7rem] font-bold leading-[1.02] text-[var(--ink)] max-[1040px]:text-[2.2rem] max-[720px]:text-[1.9rem]">
            A calm sprint with visible decisions every week.
          </h2>
          <p className="leading-[1.65] text-[var(--muted)]">
            The project runs in short loops: clarify the offer, design the high impact
            pages, build the site, then tune the details that influence trust and conversion.
          </p>
        </div>
        <div className="grid gap-3.5">
          {[
            ['01', 'Map', 'Audience, offer, content inventory, and launch goals.'],
            ['02', 'Shape', 'Visual direction, page system, copy flow, and interaction notes.'],
            ['03', 'Ship', 'Build, QA, analytics, training, and post-launch fixes.'],
          ].map(([step, title, copy]) => (
            <div className="grid grid-cols-[70px_150px_1fr] items-start gap-5 border-t border-[var(--line)] py-7 max-[720px]:grid-cols-1 max-[720px]:gap-2" key={step}>
              <span className="text-[1.6rem] font-black text-[var(--coral)]">{step}</span>
              <h3 className="text-[1.3rem] font-bold leading-[1.02] text-[var(--ink)]">{title}</h3>
              <p className="leading-[1.65] text-[var(--muted)]">{copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={`${shell} py-24 max-[720px]:py-16`} id="pricing">
        <div className="mb-[34px]">
          <p className={eyebrow}>Pricing</p>
          <h2 className="max-w-[760px] text-[2.7rem] font-bold leading-[1.02] text-[var(--ink)] max-[1040px]:text-[2.2rem] max-[720px]:text-[1.9rem]">
            Simple starting points, scoped around the job your site has to do.
          </h2>
        </div>
        <div className="grid grid-cols-3 gap-4 max-[1040px]:grid-cols-2 max-[720px]:grid-cols-1">
          {plans.map((plan) => (
            <article className="flex min-h-[328px] flex-col justify-between rounded-lg border border-[var(--line)] bg-[rgba(255,255,255,0.8)] p-6" key={plan.name}>
              <div>
                <h3 className="mb-3 text-[1.3rem] font-bold leading-[1.02] text-[var(--ink)]">{plan.name}</h3>
                <strong className="mb-4 block text-[2.2rem]">{plan.price}</strong>
                <p className="leading-[1.65] text-[var(--muted)]">{plan.detail}</p>
              </div>
              <ul className="mt-7 grid gap-3">
                {plan.features.map((feature) => (
                  <li className="flex items-center gap-2.5" key={feature}>
                    <Check className="shrink-0 text-[var(--teal)]" size={17} aria-hidden="true" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className={`${shell} grid grid-cols-[0.9fr_1.1fr] gap-14 pb-[120px] pt-24 max-[1040px]:grid-cols-1 max-[720px]:py-16`} id="contact">
        <div>
          <p className={eyebrow}>Start here</p>
          <h2 className="mb-7 max-w-[760px] text-[2.7rem] font-bold leading-[1.02] text-[var(--ink)] max-[1040px]:text-[2.2rem] max-[720px]:text-[1.9rem]">
            Tell Jamsaq what you are trying to launch.
          </h2>
          <div className="grid gap-3.5">
            {[
              [Clock3, 'Reply within one business day.'],
              [ShieldCheck, 'No sales pressure, just a clear next step.'],
              [Layers3, 'Scope, timeline, and budget mapped before work starts.'],
            ].map(([Icon, copy]) => {
              const NoteIcon = Icon as typeof Clock3
              return (
                <p className="flex items-center gap-2.5 leading-[1.65] text-[var(--muted)]" key={copy as string}>
                  <NoteIcon className="shrink-0 text-[var(--coral)]" size={18} aria-hidden="true" />
                  {copy as string}
                </p>
              )
            })}
          </div>
        </div>
        <form className="grid grid-cols-2 gap-4 rounded-lg border border-[var(--line)] bg-[var(--white)] p-6 shadow-[18px_18px_0_var(--mint)] max-[720px]:grid-cols-1 max-[720px]:p-[18px] max-[720px]:shadow-[10px_10px_0_var(--mint)]">
          <label className="grid gap-2 text-[0.9rem] font-extrabold text-[var(--ink)]">
            Name
            <input className="h-[50px] w-full min-w-0 rounded-lg border border-[var(--line-strong)] bg-[var(--paper)] px-3.5 text-[var(--ink)] outline-none focus:border-[var(--teal)] focus:shadow-[0_0_0_3px_rgba(42,126,118,0.15)]" type="text" name="name" placeholder="Your name" />
          </label>
          <label className="grid gap-2 text-[0.9rem] font-extrabold text-[var(--ink)]">
            Email
            <input className="h-[50px] w-full min-w-0 rounded-lg border border-[var(--line-strong)] bg-[var(--paper)] px-3.5 text-[var(--ink)] outline-none focus:border-[var(--teal)] focus:shadow-[0_0_0_3px_rgba(42,126,118,0.15)]" type="email" name="email" placeholder="you@example.com" />
          </label>
          <label className="grid gap-2 text-[0.9rem] font-extrabold text-[var(--ink)]">
            Budget range
            <select className="h-[50px] w-full min-w-0 rounded-lg border border-[var(--line-strong)] bg-[var(--paper)] px-3.5 text-[var(--ink)] outline-none focus:border-[var(--teal)] focus:shadow-[0_0_0_3px_rgba(42,126,118,0.15)]" name="budget" defaultValue="">
              <option value="" disabled>
                Select a range
              </option>
              <option>$4k-$7k</option>
              <option>$7k-$12k</option>
              <option>$12k+</option>
            </select>
          </label>
          <label className="col-span-full grid gap-2 text-[0.9rem] font-extrabold text-[var(--ink)]">
            Project notes
            <textarea
              className="w-full min-w-0 resize-y rounded-lg border border-[var(--line-strong)] bg-[var(--paper)] p-3.5 text-[var(--ink)] outline-none focus:border-[var(--teal)] focus:shadow-[0_0_0_3px_rgba(42,126,118,0.15)]"
              name="message"
              placeholder="What are you building, changing, or launching?"
              rows={5}
            ></textarea>
          </label>
          <button className="col-span-full inline-flex min-h-[52px] cursor-pointer items-center justify-center gap-2 rounded-lg border border-[var(--ink)] bg-[var(--ink)] px-5 font-extrabold text-[var(--white)] shadow-[0_14px_32px_rgba(28,30,34,0.16)] transition hover:-translate-y-0.5" type="button">
            <Mail size={19} aria-hidden="true" />
            <span>Send project brief</span>
          </button>
        </form>
      </section>
    </main>
  )
}
