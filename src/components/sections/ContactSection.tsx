"use client";

import { Mail, MapPin, Phone, Send } from "lucide-react";
import { FormEvent, useState } from "react";
import { agency } from "@/lib/site-data";

export function ContactSection() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <section id="contact" className="bg-[#f4f1eb] px-5 py-32 dark:bg-black sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.44fr_0.56fr]">
        <div>
          <p className="mb-4 flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.28em] text-black/38 dark:text-white/38">
            <span aria-hidden className="h-px w-10 bg-black/25 dark:bg-white/20" />
            Start a project
          </p>
          <h2 className="text-4xl font-bold tracking-tighter text-[#111111] dark:text-white sm:text-5xl">
            Tell us what you want your website to do.
          </h2>
          <p className="mt-6 max-w-lg text-lg leading-8 text-stone-500 dark:text-white/55">
            Share your goals, timeline, and current website. We reply within one business day.
          </p>
          <div className="mt-10 grid gap-4 text-sm text-stone-500 dark:text-white/60">
            <a
              href={`mailto:${agency.email}`}
              className="flex items-center gap-3 transition hover:text-black dark:hover:text-white"
            >
              <Mail size={17} /> {agency.email}
            </a>
            <span className="flex items-center gap-3">
              <Phone size={17} /> {agency.phone}
            </span>
            <span className="flex items-center gap-3">
              <MapPin size={17} /> {agency.location}
            </span>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-black/8 bg-white p-5 dark:border-white/10 dark:bg-white/[0.05] sm:p-8"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Name" name="name" placeholder="Your name" />
            <Field label="Email" name="email" type="email" placeholder="you@example.com" />
            <Field label="Company" name="company" placeholder="Company name" />
            <label className="grid gap-2 text-sm font-semibold text-stone-600 dark:text-white/65">
              Project type
              <select
                name="projectType"
                className="h-12 rounded-xl border border-black/8 bg-[#fafaf8] px-4 text-[#111111] outline-none focus:border-lime-500 dark:border-white/10 dark:bg-black/50 dark:text-white dark:focus:border-lime-300"
              >
                <option>New website</option>
                <option>Website redesign</option>
                <option>Landing page</option>
                <option>Brand + website</option>
                <option>Maintenance</option>
              </select>
            </label>
            <label className="grid gap-2 text-sm font-semibold text-stone-600 dark:text-white/65">
              Budget range
              <select
                name="budget"
                className="h-12 rounded-xl border border-black/8 bg-[#fafaf8] px-4 text-[#111111] outline-none focus:border-lime-500 dark:border-white/10 dark:bg-black/50 dark:text-white dark:focus:border-lime-300"
              >
                <option>Need guidance</option>
                <option>Under ₹50k</option>
                <option>₹50k – ₹1L</option>
                <option>₹1L – ₹3L</option>
                <option>₹3L+</option>
              </select>
            </label>
            <Field label="Timeline" name="timeline" placeholder="e.g. 3–4 weeks" />
          </div>
          <label className="mt-4 grid gap-2 text-sm font-semibold text-stone-600 dark:text-white/65">
            Message
            <textarea
              name="message"
              rows={5}
              placeholder="Tell us about the project, pages, goals, and current challenges."
              className="rounded-xl border border-black/8 bg-[#fafaf8] px-4 py-3 text-[#111111] outline-none transition placeholder:text-stone-400 focus:border-lime-500 dark:border-white/10 dark:bg-black/50 dark:text-white dark:placeholder:text-white/30 dark:focus:border-lime-300"
            />
          </label>
          <button
            type="submit"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-lime-300 px-6 py-3 text-sm font-bold text-black transition hover:bg-lime-200"
          >
            Send inquiry <Send size={16} />
          </button>
          {sent && (
            <p className="mt-4 rounded-xl border border-lime-500/20 bg-lime-50 p-4 text-sm text-lime-800 dark:border-lime-300/20 dark:bg-lime-300/8 dark:text-lime-200">
              Thanks — we&apos;ll be in touch within one business day.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  placeholder,
  type = "text",
}: {
  label: string;
  name: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <label className="grid gap-2 text-sm font-semibold text-stone-600 dark:text-white/65">
      {label}
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className="h-12 rounded-xl border border-black/8 bg-[#fafaf8] px-4 text-[#111111] outline-none transition placeholder:text-stone-400 focus:border-lime-500 dark:border-white/10 dark:bg-black/50 dark:text-white dark:placeholder:text-white/30 dark:focus:border-lime-300"
      />
    </label>
  );
}
