"use client";

import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
  useInView,
  animate,
} from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { ArrowRight, MoveRight, Quote, Sparkles } from "lucide-react";
import { ContactSection } from "@/components/sections/ContactSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import {
  agency,
  capabilities,
  caseStudies,
  differentiators,
  insights,
  metrics,
  processSteps,
  services,
  testimonials,
} from "@/lib/site-data";

/* ─── Shared animation config ─────────────────────────────────── */
const ease = [0.16, 1, 0.3, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

/** Generic scroll-triggered fade-up wrapper */
function FadeUp({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease, delay }}
    >
      {children}
    </motion.div>
  );
}

/* ─── Mouse parallax hook ──────────────────────────────────────── */
function useMouseParallax(factor: number) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 40, damping: 20 });
  const sy = useSpring(y, { stiffness: 40, damping: 20 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      x.set((e.clientX - cx) * factor);
      y.set((e.clientY - cy) * factor);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [factor, x, y]);

  return { x: sx, y: sy };
}

/* ─── Animated counter ─────────────────────────────────────────── */
function Counter({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView || !ref.current) return;
    const match = value.match(/^([\d.]+)(.*)$/);
    if (!match) return;
    const num = parseFloat(match[1]);
    const suffix = match[2];
    const node = ref.current;
    const controls = animate(0, num, {
      duration: 2.2,
      ease: "easeOut",
      onUpdate(v) {
        node.textContent = (Number.isInteger(num) ? Math.round(v) : v.toFixed(1)) + suffix;
      },
    });
    return controls.stop;
  }, [inView, value]);

  return <span ref={ref}>{value}</span>;
}


/* ─── Page ─────────────────────────────────────────────────────── */
export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <CapabilityStrip />
        <FeaturedWork />
        <Services />
        <Process />
        <Differentiators />
        <Metrics />
        <Testimonials />
        <Insights />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

/* ─── Hero ─────────────────────────────────────────────────────── */
function Hero() {
  const { scrollY } = useScroll();
  const contentY = useTransform(scrollY, [0, 600], [0, -50]);

  const mouse1 = useMouseParallax(0.022);
  const mouse2 = useMouseParallax(-0.016);
  const mouse3 = useMouseParallax(0.03);

  return (
    <section className="relative flex min-h-[92vh] items-center overflow-hidden bg-[#fafaf8] px-5 py-24 dark:bg-black sm:px-8">
      {/* Dot-grid texture */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 [background-image:radial-gradient(circle,#11111112_1px,transparent_1px)] [background-size:28px_28px] dark:[background-image:radial-gradient(circle,#ffffff09_1px,transparent_1px)]"
      />

      {/* Gradient orbs — more vivid */}
      <motion.div
        style={{ x: mouse1.x, y: mouse1.y }}
        aria-hidden
        className="pointer-events-none absolute right-[-8%] top-[-12%] h-[760px] w-[760px] rounded-full bg-lime-300/25 blur-[130px] dark:bg-lime-300/12"
      />
      <motion.div
        style={{ x: mouse2.x, y: mouse2.y }}
        aria-hidden
        className="pointer-events-none absolute -bottom-40 left-[-6%] h-[560px] w-[560px] rounded-full bg-lime-200/20 blur-[110px] dark:bg-lime-300/8"
      />

      <motion.div style={{ y: contentY }} className="relative mx-auto w-full max-w-7xl">
        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">

          {/* ── LEFT: Content ── */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease }}
              className="mb-10 inline-flex items-center gap-2.5 rounded-full border border-lime-500/25 bg-lime-50 px-4 py-2 dark:border-lime-300/20 dark:bg-lime-300/[0.08]"
            >
              <span className="relative flex size-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime-500 opacity-60" />
                <span className="relative inline-flex size-2 rounded-full bg-lime-500 dark:bg-lime-300" />
              </span>
              <span className="text-xs font-semibold text-lime-700 dark:text-lime-300">
                Available for new projects
              </span>
            </motion.div>

            {/* Headline — slide in line by line */}
            <h1 className="text-[clamp(3.4rem,7.5vw,7.5rem)] font-bold leading-[0.87] tracking-tighter text-[#111111] dark:text-white">
              {(["Websites", "that"] as const).map((word, i) => (
                <motion.span
                  key={word}
                  className="block"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.13, duration: 0.7, ease }}
                >
                  {word}
                </motion.span>
              ))}
              {/* "convert." with animated lime underline */}
              <motion.span
                className="relative block"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.32, duration: 0.7, ease }}
              >
                convert.
                <motion.span
                  aria-hidden
                  className="absolute -bottom-1 left-0 h-[10px] rounded-sm bg-lime-300 dark:bg-lime-400"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  style={{ originX: 0 }}
                  transition={{ delay: 0.95, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                />
              </motion.span>
            </h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.7, ease }}
              className="mt-10 max-w-[42ch] text-lg leading-8 text-stone-500 dark:text-white/48"
            >
              Strategy-led web design and development for brands that need clarity, credibility, and growth.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.7, ease }}
              className="mt-10 flex flex-wrap gap-3"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.04, boxShadow: "0 14px 36px -6px rgba(163,230,53,0.45)" }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 rounded-full bg-lime-300 px-8 py-4 text-sm font-bold text-black"
              >
                Start a project <ArrowRight size={16} />
              </motion.a>
              <motion.a
                href="#work"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 rounded-full border border-black/15 px-8 py-4 text-sm font-semibold text-stone-600 hover:border-black/30 hover:text-black dark:border-white/18 dark:text-white/60 dark:hover:border-white/35 dark:hover:text-white"
              >
                View work <MoveRight size={16} />
              </motion.a>
            </motion.div>

            {/* Social proof strip */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.78, duration: 0.7, ease }}
              className="mt-14 flex flex-wrap items-center gap-5 border-t border-black/8 pt-8 dark:border-white/10"
            >
              {/* Avatar stack */}
              <div className="flex -space-x-2.5">
                {(["AM", "PS", "KN", "RV"] as const).map((init, i) => (
                  <span
                    key={init}
                    className="grid size-9 place-items-center rounded-full border-2 border-[#fafaf8] text-[10px] font-bold text-white dark:border-black"
                    style={{ backgroundColor: ["#8b9eb0", "#9eb08b", "#b08b9e", "#8bb0b0"][i] }}
                  >
                    {init}
                  </span>
                ))}
              </div>
              <div>
                <p className="text-sm font-semibold text-[#111111] dark:text-white">12+ brands launched</p>
                <p className="text-xs text-stone-400 dark:text-white/35">India · UAE · Remote</p>
              </div>
              <div className="ml-auto hidden gap-7 sm:flex">
                {[{ value: "21", label: "avg. days" }, { value: "3×", label: "inquiry lift" }].map((stat) => (
                  <div key={stat.label} className="text-right">
                    <p className="text-2xl font-bold tracking-tight text-[#111111] dark:text-white">{stat.value}</p>
                    <p className="text-xs text-stone-400 dark:text-white/35">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* ── RIGHT: Visual ── */}
          <div className="relative hidden lg:block">
            {/* Browser mockup */}
            <motion.div
              style={{ x: mouse1.x, y: mouse1.y }}
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 1, ease }}
              className="relative z-10 overflow-hidden rounded-2xl border border-black/8 bg-white shadow-[0_40px_100px_-20px_rgba(0,0,0,0.2)] dark:border-white/10 dark:bg-[#111]"
            >
              {/* Browser chrome */}
              <div className="flex items-center gap-1.5 border-b border-black/8 bg-[#f4f4f2] px-4 py-3.5 dark:border-white/8 dark:bg-[#1c1c1c]">
                <span className="size-2.5 rounded-full bg-[#ff5f57]" />
                <span className="size-2.5 rounded-full bg-[#febc2e]" />
                <span className="size-2.5 rounded-full bg-[#28c840]" />
                <div className="mx-4 flex-1 rounded-md bg-white/80 px-3 py-1.5 text-[11px] text-stone-400 dark:bg-white/8 dark:text-white/30">
                  striderunning.co
                </div>
              </div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={caseStudies[0].image}
                alt="Stride Running Co. website preview"
                className="aspect-[4/3] w-full object-cover"
              />
            </motion.div>

            {/* Floating metric card */}
            <motion.div
              style={{ x: mouse2.x, y: mouse2.y }}
              initial={{ opacity: 0, scale: 0.75, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7, ease }}
              className="absolute -bottom-8 -left-10 z-20 rounded-2xl border border-black/8 bg-white px-5 py-4 shadow-2xl dark:border-white/10 dark:bg-[#111]"
            >
              <p className="text-2xl font-bold tracking-tight text-lime-600 dark:text-lime-400">+84%</p>
              <p className="mt-0.5 text-xs font-medium text-stone-400 dark:text-white/35">conversion lift</p>
              <p className="mt-1 text-[10px] text-stone-300 dark:text-white/20">Stride Running Co.</p>
            </motion.div>

            {/* Floating launch chip */}
            <motion.div
              style={{ x: mouse3.x, y: mouse3.y }}
              initial={{ opacity: 0, scale: 0.75, y: -30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.7, ease }}
              className="absolute -right-6 -top-6 z-20 rounded-2xl bg-lime-300 px-4 py-3 shadow-xl dark:bg-lime-400"
            >
              <p className="text-sm font-bold text-black">22-day launch ✓</p>
              <p className="text-[11px] text-black/55 mt-0.5">Bloom Botanics</p>
            </motion.div>
          </div>

        </div>
      </motion.div>
    </section>
  );
}

/* ─── Capability strip ─────────────────────────────────────────── */
function CapabilityStrip() {
  const doubled = [...capabilities, ...capabilities];
  return (
    <section
      className="overflow-hidden border-y border-black/6 bg-white py-5 dark:border-white/8 dark:bg-black"
      aria-label="Capabilities"
    >
      <div className="motion-safe:animate-marquee flex min-w-max items-center">
        {doubled.map((item, index) => (
          <span key={`${item}-${index}`} className="flex items-center">
            <span className="whitespace-nowrap text-lg font-semibold text-black/25 dark:text-white/28 sm:text-2xl">
              {item}
            </span>
            <span aria-hidden className="mx-8 text-lime-500/50 dark:text-lime-300/35 sm:mx-10">
              ·
            </span>
          </span>
        ))}
      </div>
    </section>
  );
}

/* ─── Featured Work — Givingli-style Bento ─────────────────────── */
function FeaturedWork() {
  return (
    <section id="work" className="scroll-mt-24 bg-[#f0ede8] px-4 py-28 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <FadeUp className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Eyebrow dark label="Featured Work" />
            <h2 className="mt-3 text-4xl font-bold tracking-tighter text-black sm:text-5xl">
              Selected projects.
            </h2>
          </div>
          <p className="max-w-[28ch] text-sm leading-7 text-black/45 sm:text-right">
            Three recent engagements — strategy, design, and development.
          </p>
        </FadeUp>

        {/*
          Layout (md+):
          Col 1-5  : BentoLarge  (Stride)  — row-span-2, tall left card
          Col 6-9  : BentoStat +84%        — row 1
          Col 10-12: BentoStat 19 days     — row 1
          Col 6-9  : BentoMedium Meridian  — row 2
          Col 10-12: BentoStat 3×          — row 2
          Col 1-8  : BentoWide  Bloom      — row 3
          Col 9-12 : BentoCta              — row 3
        */}
        <div className="grid grid-cols-12 gap-3">
          <BentoLarge study={caseStudies[0]} />
          <BentoStat value="+84%" label="Conversion lift"  sub="Stride Running Co." variant="lime"  className="col-span-6 md:col-span-4" delay={0.07} />
          <BentoStat value="19"   label="Days to launch"   sub="Brief to live"       variant="dark"  className="col-span-6 md:col-span-3" delay={0.12} />
          <BentoMedium study={caseStudies[1]} className="col-span-6 md:col-span-4" delay={0.17} />
          <BentoStat value="3×"   label="Inquiry lift"     sub="Meridian Legal"      variant="sand"  className="col-span-6 md:col-span-3" delay={0.22} />
          <BentoWide study={caseStudies[2]} delay={0.27} />
          <BentoCta delay={0.32} />
        </div>
      </div>
    </section>
  );
}

/* ── Tile: Large left card (row-span-2) with floating browser mockup ── */
function BentoLarge({ study }: { study: (typeof caseStudies)[number] }) {
  return (
    <motion.article
      className="group relative col-span-12 min-h-[420px] overflow-hidden rounded-3xl bg-[#d6ecce] md:col-span-5 md:row-span-2"
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.06 }}
      transition={{ duration: 0.7, ease }}
    >
      {/* Floating browser mockup — tilted, fills upper-right */}
      <motion.div
        className="absolute right-[-6%] top-5 w-[68%] origin-top-right"
        initial={{ rotate: 8 }}
        whileInView={{ rotate: 6 }}
        whileHover={{ rotate: 2, scale: 1.03 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease }}
      >
        <div className="overflow-hidden rounded-2xl border border-black/10 shadow-[0_24px_64px_-12px_rgba(0,0,0,0.28)]">
          <div className="flex items-center gap-1.5 border-b border-black/8 bg-[#f4f4f2] px-3 py-2.5">
            <span className="size-2 rounded-full bg-[#ff5f57]" />
            <span className="size-2 rounded-full bg-[#febc2e]" />
            <span className="size-2 rounded-full bg-[#28c840]" />
            <div className="ml-3 flex-1 rounded bg-white/60 px-2 py-0.5 text-[9px] text-stone-400">
              striderunning.co
            </div>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={study.image} alt={study.title} className="w-full object-cover" />
        </div>
      </motion.div>

      {/* Floating metric pill near image */}
      <motion.span
        className="absolute right-[14%] top-[50%] rounded-full bg-lime-300 px-4 py-2 text-sm font-bold text-black shadow-lg"
        initial={{ rotate: 8, opacity: 0 }}
        whileInView={{ rotate: 6, opacity: 1 }}
        whileHover={{ rotate: 0, scale: 1.06 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.5, ease }}
      >
        {study.metric}
      </motion.span>

      {/* Gradient to protect bottom text */}
      <div className="absolute inset-x-0 bottom-0 h-52 bg-gradient-to-t from-[#d6ecce] via-[#d6ecce]/80 to-transparent" />

      {/* Text — bottom-left */}
      <div className="absolute bottom-0 left-0 right-0 z-10 p-7 sm:p-8">
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/40">{study.type}</span>
        <h3 className="mt-1.5 text-2xl font-bold tracking-tight text-black sm:text-[1.6rem]">{study.title}</h3>
        <p className="mt-2 line-clamp-2 max-w-[28ch] text-sm leading-6 text-black/58">{study.summary}</p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {study.tags.map((tag) => (
            <span key={tag} className="rounded-full bg-black/10 px-3 py-1 text-[11px] font-semibold text-black/55">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

/* ── Tile: Stat callout (number + label) ── */
function BentoStat({
  value, label, sub, variant, delay, className,
}: {
  value: string; label: string; sub: string;
  variant: "lime" | "dark" | "sand";
  delay: number; className: string;
}) {
  const v = {
    lime: { bg: "bg-lime-300",   text: "text-black", muted: "text-black/42" },
    dark: { bg: "bg-[#111111]",  text: "text-white", muted: "text-white/38" },
    sand: { bg: "bg-[#f5f0e0]",  text: "text-black", muted: "text-black/42" },
  }[variant];

  return (
    <motion.div
      className={`flex min-h-[200px] flex-col justify-between overflow-hidden rounded-3xl p-7 sm:p-8 ${v.bg} ${v.text} ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease, delay }}
      whileHover={{ scale: 1.02, transition: { duration: 0.25 } }}
    >
      <p className={`text-[10px] font-bold uppercase tracking-[0.22em] ${v.muted}`}>{label}</p>
      <div>
        <p className="text-[clamp(2.8rem,5.5vw,4rem)] font-bold leading-none tracking-tighter">{value}</p>
        <p className={`mt-2 text-xs font-medium ${v.muted}`}>{sub}</p>
      </div>
    </motion.div>
  );
}

/* ── Tile: Medium project card with tilted image ── */
function BentoMedium({
  study, delay, className,
}: {
  study: (typeof caseStudies)[number]; delay: number; className: string;
}) {
  return (
    <motion.article
      className={`group relative min-h-[260px] overflow-hidden rounded-3xl bg-[#eceaf6] ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, ease, delay }}
    >
      {/* Tilted project screenshot */}
      <motion.div
        className="absolute right-[-10%] top-3 w-[58%] origin-top-right"
        initial={{ rotate: -7 }}
        whileInView={{ rotate: -5 }}
        whileHover={{ rotate: -1, scale: 1.04 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={study.image}
          alt={study.title}
          className="w-full rounded-xl object-cover shadow-[0_16px_48px_-8px_rgba(0,0,0,0.22)]"
        />
      </motion.div>

      {/* Gradient */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#eceaf6] to-transparent" />

      {/* Text */}
      <div className="absolute bottom-0 left-0 right-0 z-10 p-6">
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/35">{study.type}</span>
        <h3 className="mt-1.5 text-lg font-bold tracking-tight text-black">{study.title}</h3>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {study.tags.map((tag) => (
            <span key={tag} className="rounded-full bg-black/8 px-2.5 py-0.5 text-[11px] font-semibold text-black/52">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

/* ── Tile: Wide bottom card with scattered floating images ── */
function BentoWide({ study, delay }: { study: (typeof caseStudies)[number]; delay: number }) {
  return (
    <motion.article
      className="group relative col-span-12 min-h-[280px] overflow-hidden rounded-3xl bg-[#111111] md:col-span-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.65, ease, delay }}
    >
      {/* Scattered images — right half */}
      <motion.div
        className="absolute right-8 top-4 w-40 origin-top-right"
        initial={{ rotate: 14 }}
        whileHover={{ rotate: 8, scale: 1.04 }}
        transition={{ duration: 0.5, ease }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={caseStudies[0].image} alt="" className="w-full rounded-xl shadow-2xl" />
      </motion.div>
      <motion.div
        className="absolute right-40 top-1 w-32 origin-top-right"
        initial={{ rotate: -8 }}
        whileHover={{ rotate: -3, scale: 1.04 }}
        transition={{ duration: 0.5, ease }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={caseStudies[1].image} alt="" className="w-full rounded-xl shadow-2xl" />
      </motion.div>
      <motion.div
        className="absolute right-20 top-24 w-36 origin-top-right"
        initial={{ rotate: 5 }}
        whileHover={{ rotate: 1, scale: 1.04 }}
        transition={{ duration: 0.5, ease }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={study.image} alt="" className="w-full rounded-xl shadow-2xl" />
      </motion.div>

      {/* Left gradient to protect text */}
      <div className="absolute inset-y-0 left-0 w-[52%] bg-gradient-to-r from-[#111111] via-[#111111]/95 to-transparent" />

      {/* Text — bottom-left */}
      <div className="absolute bottom-0 left-0 z-10 p-7 sm:p-8">
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/35">{study.type}</span>
        <h3 className="mt-1.5 text-2xl font-bold tracking-tight text-white sm:text-[1.6rem]">{study.title}</h3>
        <p className="mt-2 max-w-[28ch] text-sm leading-6 text-white/52">{study.summary}</p>
        <span className="mt-4 inline-block rounded-full bg-lime-300 px-3 py-1 text-xs font-bold text-black">
          {study.metric}
        </span>
      </div>
    </motion.article>
  );
}

/* ── Tile: CTA tile — bottom right ── */
function BentoCta({ delay }: { delay: number }) {
  return (
    <motion.div
      className="col-span-12 flex flex-col justify-between rounded-3xl bg-[#dceaf2] p-7 sm:p-8 md:col-span-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, ease, delay }}
    >
      <div>
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/40">Start a project</span>
        <h3 className="mt-3 text-2xl font-bold tracking-tight text-black sm:text-3xl">
          Ready to build?
        </h3>
        <p className="mt-3 text-sm leading-7 text-black/52">
          Share your goals — we reply within one business day with a plan and estimate.
        </p>
      </div>
      <div className="mt-8">
        <div className="mb-5 flex gap-6">
          {[{ v: "12+", l: "Websites" }, { v: "100%", l: "On-time" }, { v: "3×", l: "Avg. lift" }].map((s) => (
            <div key={s.l}>
              <p className="text-xl font-bold tracking-tight text-black">{s.v}</p>
              <p className="text-[11px] text-black/40">{s.l}</p>
            </div>
          ))}
        </div>
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="inline-flex items-center gap-2 rounded-full bg-black px-5 py-2.5 text-sm font-bold text-white"
        >
          Start a project <ArrowRight size={14} />
        </motion.a>
      </div>
    </motion.div>
  );
}

/* ─── Services ─────────────────────────────────────────────────── */
function Services() {
  return (
    <section id="services" className="scroll-mt-24 bg-[#0f0f0f]">
      {/* Header */}
      <div className="mx-auto max-w-7xl px-5 pb-14 pt-28 sm:px-8">
        <FadeUp className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-5 flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.28em] text-white/30">
              <span aria-hidden className="h-px w-10 bg-white/20" />
              Services
            </p>
            <h2 className="text-6xl font-bold tracking-tighter text-white sm:text-7xl">
              What we do.
            </h2>
          </div>
          <p className="max-w-[34ch] text-base leading-8 text-white/42">
            Eight services, each tied directly to a business outcome. No filler deliverables.
          </p>
        </FadeUp>
      </div>

      {/* Full-width bold list */}
      <div className="border-t border-white/8">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={service.title}
              className="group relative border-b border-white/8 transition-colors duration-300 hover:bg-white/[0.035]"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, ease, delay: index * 0.04 }}
            >
              {/* Animated lime left accent */}
              <motion.div
                className="absolute left-0 top-0 h-full w-[3px] origin-top bg-lime-400"
                initial={{ scaleY: 0 }}
                whileHover={{ scaleY: 1 }}
                transition={{ duration: 0.28, ease: "easeOut" }}
              />

              {/* Giant muted index — premium decorative element */}
              <span
                aria-hidden
                className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 select-none font-bold leading-none text-white/[0.04] sm:right-10"
                style={{ fontSize: "clamp(5rem, 10vw, 9rem)" }}
              >
                {String(index + 1).padStart(2, "0")}
              </span>

              <div className="relative mx-auto max-w-7xl px-5 py-9 sm:px-8 sm:py-11">
                <div className="flex items-start gap-6 sm:items-center sm:gap-10">

                  {/* Icon pill */}
                  <div className="grid size-[3.75rem] shrink-0 place-items-center rounded-2xl bg-white/8 ring-1 ring-white/10 transition-all duration-300 group-hover:bg-lime-300 group-hover:ring-lime-300">
                    <Icon
                      size={23}
                      className="transition-colors duration-300 text-white/55 group-hover:text-black"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    {/* Title + deliverables row */}
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-10">
                      <h3 className="text-3xl font-bold tracking-tight text-white sm:text-[2.25rem]">
                        {service.title}
                      </h3>
                      <div className="flex shrink-0 flex-wrap gap-2">
                        {service.deliverables.map((d) => (
                          <span
                            key={d}
                            className="rounded-full border border-white/12 px-3.5 py-1.5 text-xs font-semibold text-white/38 transition-colors group-hover:border-lime-400/40 group-hover:text-white/60"
                          >
                            {d}
                          </span>
                        ))}
                      </div>
                    </div>
                    {/* Description */}
                    <p className="mt-3 max-w-2xl text-base leading-8 text-white/45">
                      {service.summary}
                    </p>
                  </div>

                  {/* Arrow — slides on hover */}
                  <motion.div
                    className="hidden shrink-0 text-white/18 transition-colors group-hover:text-lime-400 sm:block"
                    animate={{ x: 0 }}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ArrowRight size={22} />
                  </motion.div>

                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

/* ─── Process ──────────────────────────────────────────────────── */
function Process() {
  return (
    <section id="process" className="scroll-mt-24 bg-[#f4f1eb] px-5 py-32 text-black sm:px-8">
      <div className="mx-auto max-w-7xl">
        <FadeUp className="mb-16 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Eyebrow dark label="Process" />
            <h2 className="mt-3 text-4xl font-bold tracking-tighter sm:text-5xl">
              Clear path from brief
              <br className="hidden sm:block" /> to launch.
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-7 text-black/48">
            Built to reduce uncertainty and keep every phase producing a useful deliverable.
          </p>
        </FadeUp>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((step, index) => (
            <motion.article
              key={step.title}
              className="rounded-2xl border border-black/10 bg-white p-7 sm:p-8"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease, delay: index * 0.08 }}
              whileHover={{ y: -4, boxShadow: "0 20px 40px rgba(0,0,0,0.08)" }}
            >
              <div className="mb-8 flex items-start justify-between">
                <span className="text-5xl font-bold leading-none text-black/10 sm:text-6xl">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="mt-1 rounded-full bg-lime-200 px-3 py-1 text-xs font-bold text-black">
                  {step.output}
                </span>
              </div>
              <h3 className="text-2xl font-bold tracking-tight">{step.title}</h3>
              <p className="mt-3 text-sm leading-7 text-black/52">{step.summary}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Differentiators ──────────────────────────────────────────── */
function Differentiators() {
  return (
    <section id="about" className="scroll-mt-24 bg-[#111111] px-5 py-32 text-white sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
        <FadeUp className="lg:sticky lg:top-28">
          <p className="mb-4 flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.28em] text-lime-300">
            <span aria-hidden className="h-px w-10 bg-lime-300" />
            Why jamsaq
          </p>
          <h2 className="mt-3 text-[clamp(2rem,4vw,3.2rem)] font-bold leading-[1.1] tracking-tighter">
            We make your website easier to understand, trust, and act on.
          </h2>
          <p className="mt-7 max-w-sm text-base leading-8 text-white/52">
            Strong websites aren't just pretty screens. They're structured systems: message, layout, proof, speed, and a
            clear next step.
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-lime-300 px-7 py-4 text-sm font-bold text-black transition-shadow hover:shadow-lg hover:shadow-lime-300/25"
          >
            Start a project <ArrowRight size={16} />
          </motion.a>
        </FadeUp>

        <div className="grid gap-4 sm:grid-cols-2">
          {differentiators.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-7"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease, delay: i * 0.1 }}
                whileHover={{ backgroundColor: "rgba(255,255,255,0.07)", borderColor: "rgba(255,255,255,0.18)" }}
              >
                <Icon className="mb-7 text-white/45" size={22} />
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/48">{item.summary}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─── Metrics ──────────────────────────────────────────────────── */
function Metrics() {
  return (
    <section className="bg-white px-5 py-24 dark:bg-black sm:px-8">
      <div className="mx-auto max-w-7xl">
        <FadeUp className="mb-12 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-stone-400 dark:text-white/35">
            By the numbers
          </p>
        </FadeUp>
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-black/8 dark:border-white/10 lg:grid-cols-4">
          {metrics.map((metric, i) => (
            <motion.div
              key={metric.label}
              className="flex flex-col items-center justify-center bg-white p-10 text-center dark:bg-black"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, ease, delay: i * 0.1 }}
            >
              <p className="text-5xl font-bold tracking-tighter text-[#111111] dark:text-white sm:text-6xl lg:text-7xl">
                <Counter value={metric.value} />
              </p>
              <p className="mt-3 text-xs font-semibold text-stone-400 dark:text-white/38">{metric.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Testimonials ─────────────────────────────────────────────── */
function Testimonials() {
  return (
    <section className="bg-[#f4f1eb] px-5 py-32 text-black sm:px-8">
      <div className="mx-auto max-w-7xl">
        <FadeUp className="mb-14">
          <Eyebrow dark label="Client Stories" />
          <h2 className="mt-3 text-4xl font-bold tracking-tighter sm:text-5xl">
            Heard from clients
            <br className="hidden sm:block" /> who launched with us.
          </h2>
        </FadeUp>
        <div className="grid gap-4 lg:grid-cols-3">
          {testimonials.map((item, i) => (
            <motion.article
              key={item.role}
              className="rounded-2xl border border-black/10 bg-white p-7 sm:p-8"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease, delay: i * 0.1 }}
              whileHover={{ y: -4, boxShadow: "0 20px 40px rgba(0,0,0,0.07)" }}
            >
              <Quote className="mb-8 text-black/12" size={30} />
              <p className="text-lg leading-8 text-black/70">{item.quote}</p>
              <div className="mt-8 flex items-center gap-3">
                <span className="grid size-9 shrink-0 place-items-center rounded-full bg-black text-xs font-bold text-white">
                  {item.avatar}
                </span>
                <div>
                  <p className="text-sm font-bold text-black">{item.name}</p>
                  <p className="text-xs text-black/45">{item.role}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Insights ─────────────────────────────────────────────────── */
function Insights() {
  return (
    <section className="bg-[#fafaf8] px-5 py-32 dark:bg-black sm:px-8">
      <div className="mx-auto max-w-7xl">
        <FadeUp className="mb-14 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Eyebrow label="Insights" />
            <h2 className="mt-3 text-4xl font-bold tracking-tighter text-[#111111] dark:text-white sm:text-5xl">
              Thinking out loud.
            </h2>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-sm font-semibold text-stone-400 transition hover:text-black dark:text-white/50 dark:hover:text-white"
          >
            Get notified <MoveRight size={16} />
          </a>
        </FadeUp>
        <div className="grid gap-4 lg:grid-cols-3">
          {insights.map((item, i) => (
            <motion.article
              key={item.title}
              className="group rounded-2xl border border-black/8 bg-white p-7 dark:border-white/10 dark:bg-white/[0.04]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease, delay: i * 0.1 }}
              whileHover={{ y: -4, borderColor: "rgba(0,0,0,0.14)", boxShadow: "0 16px 32px rgba(0,0,0,0.06)" }}
            >
              <div className="mb-14 flex items-center justify-between">
                <span className="rounded-full border border-black/10 px-3 py-1 text-xs font-semibold text-stone-500 dark:border-white/14 dark:text-white/50">
                  {item.category}
                </span>
                <Sparkles size={15} className="text-black/20 dark:text-white/22" />
              </div>
              <h3 className="text-xl font-bold leading-tight tracking-tight text-[#111111] dark:text-white sm:text-2xl">
                {item.title}
              </h3>
              <p className="mt-5 text-xs font-bold uppercase tracking-[0.2em] text-stone-400 dark:text-white/28">
                {item.status}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Eyebrow ──────────────────────────────────────────────────── */
function Eyebrow({ label, dark: onLight = false }: { label: string; dark?: boolean }) {
  if (onLight) {
    return (
      <p className="flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.28em] text-black/38">
        <span aria-hidden className="h-px w-10 bg-black/25" />
        {label}
      </p>
    );
  }
  return (
    <p className="flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.28em] text-lime-600 dark:text-lime-300">
      <span aria-hidden className="h-px w-10 bg-lime-500 dark:bg-lime-300" />
      {label}
    </p>
  );
}
