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
import './App.css'

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
    copy: 'Production-ready React, Webflow, or Shopify sites with clean handoff docs and analytics wired in.',
  },
  {
    icon: Gauge,
    title: 'Launch optimization',
    copy: 'Performance, accessibility, SEO foundations, and practical experiments after the first release.',
  },
]

const projects = [
  {
    type: 'SaaS relaunch',
    name: 'Northline Ops',
    result: '+42% demo requests',
    tone: 'Conversion-first dashboard storytelling',
  },
  {
    type: 'Local commerce',
    name: 'Mira Market',
    result: '2.1x mobile checkout starts',
    tone: 'Warm retail identity and product paths',
  },
  {
    type: 'Founder brand',
    name: 'Aster Labs',
    result: 'Launched in 21 days',
    tone: 'Editorial positioning with investor-ready polish',
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

function App() {
  return (
    <main>
      <header className="site-header" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="Jamsaq home">
          <span className="brand-mark">J</span>
          <span>
            <strong>Jamsaq</strong>
            <small>Web Design Agency</small>
          </span>
        </a>
        <nav className="nav-links" aria-label="Site sections">
          <a href="#services">Services</a>
          <a href="#work">Work</a>
          <a href="#pricing">Pricing</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="header-action" href="mailto:hello@jamsaq.studio">
          <Mail size={18} aria-hidden="true" />
          <span>Start a brief</span>
        </a>
      </header>

      <section className="hero-section" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Independent digital studio</p>
          <h1>Websites that make young brands look established.</h1>
          <p className="hero-lede">
            Jamsaq designs and builds sharp, fast websites for founders, local
            businesses, and service teams that need credibility before the next
            big conversation.
          </p>
          <div className="hero-actions" aria-label="Primary actions">
            <a className="primary-button" href="#contact">
              <MessageSquare size={19} aria-hidden="true" />
              <span>Plan my site</span>
            </a>
            <a className="secondary-button" href="#work">
              <span>View work</span>
              <ArrowRight size={19} aria-hidden="true" />
            </a>
          </div>
          <dl className="hero-stats" aria-label="Studio highlights">
            <div>
              <dt>21 days</dt>
              <dd>typical launch window</dd>
            </div>
            <div>
              <dt>92</dt>
              <dd>average Lighthouse score</dd>
            </div>
            <div>
              <dt>3x</dt>
              <dd>included review rounds</dd>
            </div>
          </dl>
        </div>

        <div className="studio-preview" aria-label="Website design preview">
          <div className="browser-bar">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="preview-canvas">
            <div className="mock-nav">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="mock-hero">
              <div>
                <span className="mock-label">Brand system</span>
                <strong>Launch page concept</strong>
                <p>Messaging, visual rhythm, and lead capture aligned.</p>
              </div>
              <div className="mock-device">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <div className="mock-grid">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </section>

      <section className="logo-strip" aria-label="Best fit clients">
        <span>Built for</span>
        <strong>Founders</strong>
        <strong>Studios</strong>
        <strong>Local Brands</strong>
        <strong>Consultants</strong>
      </section>

      <section className="section-shell" id="services">
        <div className="section-heading">
          <p className="eyebrow">Services</p>
          <h2>Everything needed to move from rough idea to polished launch.</h2>
        </div>
        <div className="service-grid">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <article className="service-card" key={service.title}>
                <span className="icon-box">
                  <Icon size={22} aria-hidden="true" />
                </span>
                <h3>{service.title}</h3>
                <p>{service.copy}</p>
              </article>
            )
          })}
        </div>
      </section>

      <section className="work-band" id="work">
        <div className="section-heading">
          <p className="eyebrow">Selected work</p>
          <h2>Clean stories, clear paths, and stronger reasons to click.</h2>
        </div>
        <div className="project-list">
          {projects.map((project) => (
            <article className="project-row" key={project.name}>
              <div>
                <span>{project.type}</span>
                <h3>{project.name}</h3>
                <p>{project.tone}</p>
              </div>
              <strong>{project.result}</strong>
              <ExternalLink size={20} aria-hidden="true" />
            </article>
          ))}
        </div>
      </section>

      <section className="process-section" aria-label="Project process">
        <div className="process-copy">
          <p className="eyebrow">Process</p>
          <h2>A calm sprint with visible decisions every week.</h2>
          <p>
            The project runs in short loops: clarify the offer, design the high
            impact pages, build the site, then tune the details that influence
            trust and conversion.
          </p>
        </div>
        <div className="timeline">
          <div>
            <span>01</span>
            <h3>Map</h3>
            <p>Audience, offer, content inventory, and launch goals.</p>
          </div>
          <div>
            <span>02</span>
            <h3>Shape</h3>
            <p>Visual direction, page system, copy flow, and interaction notes.</p>
          </div>
          <div>
            <span>03</span>
            <h3>Ship</h3>
            <p>Build, QA, analytics, training, and post-launch fixes.</p>
          </div>
        </div>
      </section>

      <section className="section-shell" id="pricing">
        <div className="section-heading">
          <p className="eyebrow">Pricing</p>
          <h2>Simple starting points, scoped around the job your site has to do.</h2>
        </div>
        <div className="pricing-grid">
          {plans.map((plan) => (
            <article className="price-card" key={plan.name}>
              <div>
                <h3>{plan.name}</h3>
                <strong>{plan.price}</strong>
                <p>{plan.detail}</p>
              </div>
              <ul>
                {plan.features.map((feature) => (
                  <li key={feature}>
                    <Check size={17} aria-hidden="true" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-copy">
          <p className="eyebrow">Start here</p>
          <h2>Tell Jamsaq what you are trying to launch.</h2>
          <div className="contact-notes">
            <p>
              <Clock3 size={18} aria-hidden="true" />
              Reply within one business day.
            </p>
            <p>
              <ShieldCheck size={18} aria-hidden="true" />
              No sales pressure, just a clear next step.
            </p>
            <p>
              <Layers3 size={18} aria-hidden="true" />
              Scope, timeline, and budget mapped before work starts.
            </p>
          </div>
        </div>
        <form className="lead-form">
          <label>
            Name
            <input type="text" name="name" placeholder="Your name" />
          </label>
          <label>
            Email
            <input type="email" name="email" placeholder="you@example.com" />
          </label>
          <label>
            Budget range
            <select name="budget" defaultValue="">
              <option value="" disabled>
                Select a range
              </option>
              <option>$4k-$7k</option>
              <option>$7k-$12k</option>
              <option>$12k+</option>
            </select>
          </label>
          <label>
            Project notes
            <textarea
              name="message"
              placeholder="What are you building, changing, or launching?"
              rows={5}
            ></textarea>
          </label>
          <button type="button">
            <Mail size={19} aria-hidden="true" />
            <span>Send project brief</span>
          </button>
        </form>
      </section>
    </main>
  )
}

export default App
