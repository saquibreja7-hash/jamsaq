"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { faqs } from "@/lib/site-data";

export function FaqSection() {
  const [active, setActive] = useState(0);

  return (
    <section id="faq" className="bg-[#f4f1eb] px-5 py-32 text-black sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.42fr_0.58fr]">
        <div>
          <p className="mb-4 flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.28em] text-black/38">
            <span aria-hidden className="h-px w-10 bg-black/25" />
            FAQ
          </p>
          <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl">Useful answers before we begin.</h2>
        </div>
        <div className="divide-y divide-black/8 border-y border-black/8">
          {faqs.map((item, index) => {
            const isOpen = active === index;
            return (
              <article key={item.question}>
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-5 py-6 text-left text-base font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-black sm:text-lg"
                  aria-expanded={isOpen}
                  onClick={() => setActive(isOpen ? -1 : index)}
                >
                  {item.question}
                  <ChevronDown
                    className={`shrink-0 text-black/40 transition ${isOpen ? "rotate-180" : ""}`}
                    size={20}
                  />
                </button>
                {isOpen && <p className="pb-6 text-base leading-7 text-black/58">{item.answer}</p>}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
