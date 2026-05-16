import type { Metadata } from 'next'
import Link from 'next/link'
import type { LucideIcon } from 'lucide-react'
import {
  ArrowRight,
  CalendarDays,
  Camera,
  Check,
  Gift,
  Heart,
  MapPin,
  Sparkles,
} from 'lucide-react'
import { SiteHeader } from '../components/site-header'

export const metadata: Metadata = {
  title: 'Surprise Ideas | Jamsaq Web Design Agency',
  description:
    'A premium surprise ideas page concept with spacious cards, detailed planning notes, and custom illustrated graphics.',
}

type Idea = {
  icon: LucideIcon
  title: string
  tag: string
  summary: string
  bestFor: string
  timing: string
  details: string[]
  palette: {
    base: string
    soft: string
    wave: string
    accent: string
    deep: string
  }
}

const shell =
  'mx-auto w-[min(1180px,calc(100%_-_40px))] max-[720px]:w-[min(calc(100%_-_28px),1180px)]'

const eyebrow = 'mb-[18px] text-[0.79rem] font-extrabold uppercase text-[var(--teal)]'

const ideas: Idea[] = [
  {
    icon: Sparkles,
    title: 'Private rooftop reveal',
    tag: 'Signature moment',
    summary:
      'A candlelit dinner setup with a handwritten note, skyline photos, and a soft reveal right before dessert.',
    bestFor: 'Anniversaries, proposals, milestone birthdays',
    timing: '2-3 hour setup',
    details: ['Mood-boarded tablescape', 'Printed menu and note card', 'Photo-ready reveal corner'],
    palette: {
      base: '#6bbfb4',
      soft: '#cce9dd',
      wave: '#f3f0da',
      accent: '#f7bf7f',
      deep: '#2f4f55',
    },
  },
  {
    icon: Heart,
    title: 'Memory lane trail',
    tag: 'Story-led',
    summary:
      'A guided route through meaningful places, ending with a keepsake box filled with photos and voice notes.',
    bestFor: 'Couples, close friends, family surprises',
    timing: 'Half-day experience',
    details: ['Map cards for each stop', 'Photo prompts', 'Final keepsake packaging'],
    palette: {
      base: '#f3a193',
      soft: '#ffe0cc',
      wave: '#f5eee1',
      accent: '#7086d1',
      deep: '#544f72',
    },
  },
  {
    icon: Gift,
    title: 'The layered gift box',
    tag: 'Tactile',
    summary:
      'A premium box experience where each layer reveals a small clue, sensory detail, or next destination.',
    bestFor: 'Birthdays, bridesmaids, partner gifts',
    timing: '1 week prep',
    details: ['Four reveal layers', 'Custom card inserts', 'Color-matched wrapping system'],
    palette: {
      base: '#f2cd83',
      soft: '#fff0c6',
      wave: '#f8f3e8',
      accent: '#62b7aa',
      deep: '#4d3e55',
    },
  },
  {
    icon: CalendarDays,
    title: 'Weekend escape card',
    tag: 'Travel-ready',
    summary:
      'A clean itinerary reveal with packing clues, hotel details, and one planned moment left intentionally blank.',
    bestFor: 'Mini vacations, honeymoon teasers, family trips',
    timing: '48-hour trip',
    details: ['Day-by-day reveal cards', 'Packing checklist', 'One flexible surprise slot'],
    palette: {
      base: '#8fb2dc',
      soft: '#d9e8f8',
      wave: '#f7f3df',
      accent: '#ed8f7d',
      deep: '#293a5d',
    },
  },
  {
    icon: Camera,
    title: 'Hidden photo session',
    tag: 'Keepsake',
    summary:
      'A planned outing that quietly becomes a short editorial-style shoot with a few prepared story props.',
    bestFor: 'Engagements, maternity, family milestones',
    timing: '90 minute session',
    details: ['Location scout', 'Outfit and prop notes', 'Print-ready image shortlist'],
    palette: {
      base: '#6bbfa4',
      soft: '#d7efe1',
      wave: '#f6e9d7',
      accent: '#5e66ac',
      deep: '#243f3f',
    },
  },
  {
    icon: MapPin,
    title: 'Five-stop city hunt',
    tag: 'Interactive',
    summary:
      'A clue-based city route with small rewards at each stop and a final reveal staged at the last location.',
    bestFor: 'Friend groups, team celebrations, adventurous couples',
    timing: '3-4 hour route',
    details: ['Route pacing', 'Clue cards', 'Vendor pickup notes'],
    palette: {
      base: '#7784d5',
      soft: '#dfe2ff',
      wave: '#f9ead9',
      accent: '#f0a07f',
      deep: '#323857',
    },
  },
]

function PhonePreview({
  title,
  cards,
  offset = false,
}: {
  title: string
  cards: Array<{ label: string; color: string }>
  offset?: boolean
}) {
  return (
    <div
      className={`rounded-[34px] border-[9px] border-[var(--ink)] bg-[var(--paper)] p-5 shadow-[18px_22px_0_rgba(28,30,34,0.12)] ${offset ? 'mt-16 max-[720px]:mt-0' : ''}`}
    >
      <div className="mb-6 flex items-center justify-between text-[0.76rem] font-bold text-[var(--ink)]">
        <span>9:41</span>
        <span className="h-4 w-20 rounded-b-2xl bg-[var(--ink)]"></span>
        <span>Skip</span>
      </div>
      <h2 className="mb-7 max-w-[210px] text-[2rem] font-black leading-[1.04] text-[var(--ink)]">{title}</h2>
      <div className="grid gap-3">
        {cards.map((card, index) => (
          <div
            className="relative min-h-[78px] overflow-hidden rounded-xl px-4 py-3 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.38)]"
            style={{ backgroundColor: card.color }}
            key={card.label}
          >
            <span className="relative z-10 block max-w-[150px] text-[0.95rem] font-extrabold text-[var(--ink)]">
              {card.label}
            </span>
            <span className="absolute -right-6 -top-8 h-24 w-24 rounded-full bg-[rgba(255,255,255,0.28)]"></span>
            <span className="absolute bottom-0 right-6 h-14 w-20 rounded-t-full bg-[rgba(28,30,34,0.12)]"></span>
            {index === cards.length - 1 ? (
              <span className="absolute bottom-3 right-4 grid h-10 w-10 place-items-center rounded-full bg-[var(--ink)] text-[var(--white)]">
                <ArrowRight size={18} aria-hidden="true" />
              </span>
            ) : null}
          </div>
        ))}
      </div>
      <div className="mt-6 flex items-center gap-2">
        <span className="h-1.5 flex-1 rounded-full bg-[var(--ink)]"></span>
        <span className="h-1.5 flex-1 rounded-full bg-[var(--line-strong)]"></span>
        <span className="h-1.5 flex-1 rounded-full bg-[var(--line-strong)]"></span>
      </div>
    </div>
  )
}

function PremiumGraphic({ idea, index }: { idea: Idea; index: number }) {
  const Icon = idea.icon
  const isAlt = index % 2 === 1

  return (
    <div
      className="relative min-h-[265px] overflow-hidden rounded-2xl border border-[rgba(28,30,34,0.16)] p-5"
      style={{
        background: `linear-gradient(135deg, ${idea.palette.soft} 0%, ${idea.palette.base} 100%)`,
      }}
    >
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 420 260"
        role="img"
        aria-label={`${idea.title} illustration`}
        preserveAspectRatio="none"
      >
        <path
          d={isAlt ? 'M0 54 C96 18 158 106 246 70 C326 38 372 64 420 26 L420 260 L0 260 Z' : 'M0 142 C80 102 130 20 222 70 C302 114 354 78 420 42 L420 260 L0 260 Z'}
          fill={idea.palette.wave}
          opacity="0.88"
        />
        <circle cx="346" cy="70" r="58" fill="rgba(255,255,255,0.24)" />
        <circle cx="92" cy="214" r="76" fill="rgba(255,255,255,0.2)" />
        <rect x="52" y="154" width="218" height="52" rx="26" fill="rgba(255,255,255,0.42)" />
        <rect x="76" y="172" width="86" height="8" rx="4" fill={idea.palette.deep} opacity="0.28" />
        <rect x="76" y="188" width="142" height="8" rx="4" fill={idea.palette.deep} opacity="0.2" />
        <path
          d="M282 158 C310 128 358 134 372 176 C382 207 354 230 316 224 C278 218 254 188 282 158 Z"
          fill={idea.palette.accent}
          opacity="0.92"
        />
        <path
          d="M306 147 C318 126 348 128 356 154 C362 174 342 188 324 180 C306 172 296 162 306 147 Z"
          fill={idea.palette.deep}
          opacity="0.22"
        />
      </svg>
      <div className="relative z-10 flex h-full min-h-[225px] flex-col justify-between">
        <div className="flex items-center justify-between">
          <span className="rounded-full bg-[rgba(255,255,255,0.7)] px-3 py-1.5 text-[0.78rem] font-extrabold text-[var(--ink)] shadow-[0_10px_30px_rgba(28,30,34,0.08)]">
            {idea.tag}
          </span>
          <span className="grid h-12 w-12 place-items-center rounded-full bg-[var(--ink)] text-[var(--white)] shadow-[0_14px_24px_rgba(28,30,34,0.18)]">
            <Icon size={21} aria-hidden="true" />
          </span>
        </div>
        <div className="w-[76%] rounded-2xl border border-[rgba(255,255,255,0.56)] bg-[rgba(255,255,255,0.58)] p-4 shadow-[0_18px_40px_rgba(28,30,34,0.12)] backdrop-blur">
          <span className="mb-3 block h-2.5 w-20 rounded-full" style={{ backgroundColor: idea.palette.deep }}></span>
          <span className="mb-2 block h-2.5 w-36 rounded-full bg-[rgba(28,30,34,0.18)]"></span>
          <span className="block h-2.5 w-28 rounded-full bg-[rgba(28,30,34,0.12)]"></span>
        </div>
      </div>
    </div>
  )
}

function IdeaCard({ idea, index }: { idea: Idea; index: number }) {
  return (
    <article className="grid min-h-[620px] grid-rows-[auto_1fr] rounded-[26px] border-2 border-[rgba(28,30,34,0.12)] bg-[rgba(255,255,255,0.82)] p-4 shadow-[0_22px_60px_rgba(28,30,34,0.08)] max-[720px]:min-h-0 max-[720px]:p-3">
      <PremiumGraphic idea={idea} index={index} />
      <div className="flex flex-col justify-between gap-7 p-5 max-[720px]:p-4">
        <div>
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <span className="rounded-full border border-[var(--line)] bg-[var(--paper)] px-3 py-1.5 text-[0.78rem] font-extrabold uppercase text-[var(--teal)]">
              {idea.tag}
            </span>
            <span className="rounded-full border border-[var(--line)] bg-[var(--paper)] px-3 py-1.5 text-[0.78rem] font-bold text-[var(--muted)]">
              {idea.timing}
            </span>
          </div>
          <h2 className="mb-3 text-[1.65rem] font-black leading-[1.04] text-[var(--ink)] max-[720px]:text-[1.45rem]">
            {idea.title}
          </h2>
          <p className="text-[1rem] leading-[1.75] text-[var(--muted)]">{idea.summary}</p>
          <dl className="mt-6 grid gap-2.5 rounded-2xl border border-[var(--line)] bg-[var(--paper)] p-4">
            <div>
              <dt className="text-[0.75rem] font-extrabold uppercase text-[var(--teal)]">Best for</dt>
              <dd className="mt-1 leading-[1.55] text-[var(--ink)]">{idea.bestFor}</dd>
            </div>
          </dl>
        </div>
        <ul className="grid gap-3">
          {idea.details.map((detail) => (
            <li className="flex items-start gap-2.5 leading-[1.55]" key={detail}>
              <Check className="mt-0.5 shrink-0 text-[var(--teal)]" size={18} aria-hidden="true" />
              <span>{detail}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}

export default function SurpriseIdeasPage() {
  return (
    <main className="min-h-screen bg-[var(--paper)] text-[var(--ink)] [background-image:linear-gradient(90deg,rgba(28,30,34,0.055)_1px,transparent_1px),linear-gradient(180deg,rgba(28,30,34,0.045)_1px,transparent_1px)] [background-size:64px_64px] max-[720px]:[background-size:42px_42px]">
      <SiteHeader />

      <section
        className={`${shell} grid min-h-[calc(100vh-80px)] grid-cols-[minmax(0,0.95fr)_minmax(390px,1fr)] items-center gap-14 py-16 max-[1040px]:min-h-0 max-[1040px]:grid-cols-1 max-[720px]:gap-9 max-[720px]:py-12`}
        id="top"
      >
        <div className="max-w-[700px]">
          <p className={eyebrow}>Surprise ideas</p>
          <h1 className="mb-6 max-w-[820px] text-[4.35rem] font-black leading-[1.02] tracking-normal text-[var(--ink)] max-[1040px]:text-[3.25rem] max-[720px]:text-[2.45rem]">
            Planned moments that still feel personal.
          </h1>
          <p className="max-w-[650px] text-[1.16rem] leading-[1.75] text-[var(--muted)] max-[720px]:text-[1.02rem]">
            A curated set of celebration concepts with richer cards, softer color blocks,
            and original illustration panels inspired by premium mobile onboarding art.
          </p>
          <div className="mt-[34px] flex flex-wrap gap-3 max-[720px]:w-full">
            <a className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-lg border border-[var(--ink)] bg-[var(--ink)] px-5 font-extrabold text-[var(--white)] no-underline shadow-[0_14px_32px_rgba(28,30,34,0.16)] transition hover:-translate-y-0.5 max-[720px]:w-full" href="#ideas">
              <Sparkles size={19} aria-hidden="true" />
              <span>Explore ideas</span>
            </a>
            <Link className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-lg border border-[var(--line-strong)] bg-[var(--white)] px-5 font-extrabold text-inherit no-underline transition hover:-translate-y-0.5 max-[720px]:w-full" href="/#contact">
              <span>Plan one with us</span>
              <ArrowRight size={19} aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-5 max-[720px]:grid-cols-1" aria-label="Surprise idea preview">
          <PhonePreview
            title="Pick the mood."
            cards={[
              { label: 'Soft reveal', color: '#71bfb3' },
              { label: 'Adventure route', color: '#7486d1' },
              { label: 'Keepsake night', color: '#f0c77f' },
            ]}
          />
          <PhonePreview
            title="Choose the detail."
            cards={[
              { label: 'Handwritten notes', color: '#f3a193' },
              { label: 'Photo moments', color: '#8fb2dc' },
              { label: 'Final reveal', color: '#6bbfa4' },
            ]}
            offset
          />
        </div>
      </section>

      <section className={`${shell} border-y border-[var(--line)] py-8`} aria-label="Surprise planning pillars">
        <div className="grid grid-cols-4 gap-4 max-[1040px]:grid-cols-2 max-[720px]:grid-cols-1">
          {[
            ['Personal', 'Built around the person, not a generic checklist.'],
            ['Photogenic', 'Designed with clear moments worth remembering.'],
            ['Practical', 'Includes timing, setup needs, and handoff details.'],
            ['Premium', 'Uses color, story, and tactile details to feel considered.'],
          ].map(([title, copy]) => (
            <div className="rounded-2xl border border-[var(--line)] bg-[rgba(255,255,255,0.72)] p-5" key={title}>
              <strong className="block text-[1.05rem] text-[var(--ink)]">{title}</strong>
              <p className="mt-2 leading-[1.6] text-[var(--muted)]">{copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={`${shell} py-24 max-[720px]:py-16`} id="ideas">
        <div className="mb-12 flex items-end justify-between gap-8 max-[720px]:block">
          <div>
            <p className={eyebrow}>Curated concepts</p>
            <h2 className="max-w-[760px] text-[2.75rem] font-black leading-[1.04] text-[var(--ink)] max-[1040px]:text-[2.2rem] max-[720px]:text-[1.9rem]">
              Roomier cards with layered details and custom premium graphics.
            </h2>
          </div>
          <p className="max-w-[330px] leading-[1.65] text-[var(--muted)] max-[720px]:mt-4">
            Each idea pairs an emotional hook with the practical notes needed to make it real.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-7 max-[1040px]:grid-cols-1 max-[720px]:gap-5">
          {ideas.map((idea, index) => (
            <IdeaCard idea={idea} index={index} key={idea.title} />
          ))}
        </div>
      </section>
    </main>
  )
}
