import { agency, navItems, services } from "@/lib/site-data";

export function Footer() {
  return (
    /* Footer stays dark in both themes — standard premium agency convention */
    <footer className="border-t border-white/8 bg-[#111111] px-5 py-14 text-white sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
        <div>
          <div className="mb-5 flex items-center gap-3">
            <span className="grid size-11 place-items-center rounded-full bg-lime-300 text-sm font-bold text-black">
              jq
            </span>
            <span className="text-xl font-semibold">{agency.name}</span>
          </div>
          <p className="max-w-sm text-sm leading-7 text-white/55">
            Strategy-led web design and development for brands that need clarity, credibility, and growth.
          </p>
        </div>
        <div>
          <h2 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-white/35">Navigation</h2>
          <div className="grid gap-3">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm text-white/60 transition hover:text-white">
                {item.label}
              </a>
            ))}
          </div>
        </div>
        <div>
          <h2 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-white/35">Services</h2>
          <div className="grid gap-3">
            {services.slice(0, 5).map((service) => (
              <a
                key={service.title}
                href="#services"
                className="text-sm text-white/60 transition hover:text-white"
              >
                {service.title}
              </a>
            ))}
          </div>
        </div>
        <div>
          <h2 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-white/35">Contact</h2>
          <div className="grid gap-3 text-sm text-white/60">
            <a href={`mailto:${agency.email}`} className="transition hover:text-white">
              {agency.email}
            </a>
            <span>{agency.phone}</span>
            <span>{agency.location}</span>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-3 border-t border-white/8 pt-6 text-sm text-white/35 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 {agency.name}. All rights reserved.</p>
        <p>Privacy policy · Built with Next.js and Tailwind CSS</p>
      </div>
    </footer>
  );
}
