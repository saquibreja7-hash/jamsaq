"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import { agency, navItems } from "@/lib/site-data";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/8 bg-white/90 text-[#111111] backdrop-blur-xl dark:border-white/10 dark:bg-black/85 dark:text-white">
      <div className="mx-auto flex min-h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#" className="group flex items-center gap-3" aria-label={`${agency.name} home`}>
          <span className="grid size-10 place-items-center rounded-full bg-lime-300 text-sm font-bold text-black transition-transform group-hover:rotate-6">
            jq
          </span>
          <span className="text-lg font-semibold tracking-tight">{agency.shortName}</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-stone-500 transition hover:text-[#111111] dark:text-white/65 dark:hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <a
            href="#work"
            className="rounded-full border border-black/12 px-5 py-2.5 text-sm font-semibold text-stone-600 transition hover:border-black/25 hover:text-black dark:border-white/15 dark:text-white/75 dark:hover:border-white/35 dark:hover:text-white"
          >
            View work
          </a>
          <a
            href="#contact"
            className="rounded-full bg-lime-300 px-5 py-2.5 text-sm font-bold text-black transition hover:bg-lime-200"
          >
            Start a project
          </a>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="grid size-11 place-items-center rounded-full border border-black/12 text-[#111111] dark:border-white/15 dark:text-white"
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-black/8 bg-white px-5 py-5 dark:border-white/10 dark:bg-black md:hidden">
          <nav className="grid gap-2" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3 text-base font-semibold text-stone-600 transition hover:bg-black/[0.04] hover:text-black dark:text-white/75 dark:hover:bg-white/[0.06] dark:hover:text-white"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-lime-300 px-5 py-3 text-center text-sm font-bold text-black"
            >
              Start a project
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
