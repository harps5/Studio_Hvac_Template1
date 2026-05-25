"use client";

import { useEffect, useState } from "react";
import { siteConfig } from "@/config/site";
import { Wordmark } from "./Wordmark";

const links = [
  { href: "#services", label: "Services" },
  { href: "#why", label: "Why Coulee" },
  { href: "#pricing", label: "Pricing" },
  { href: "#service-area", label: "Service area" },
  { href: "#faq", label: "FAQ" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ease-editorial ${
        scrolled
          ? "bg-linen/85 backdrop-blur-md border-b border-rule/10"
          : "bg-transparent"
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between md:h-20">
        <a href="#top" className="flex items-center" aria-label={`${siteConfig.business.name} — home`}>
          <Wordmark />
        </a>

        <nav className="hidden md:flex items-center gap-9" aria-label="Primary">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-graphite hover:text-ink transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href={`tel:${siteConfig.contact.phoneTel}`}
            className="text-sm font-medium text-ink hover:text-sienna transition-colors"
          >
            {siteConfig.contact.phone}
          </a>
          <a href="#book" className="btn-primary px-5 py-2.5 text-sm">
            Book service
          </a>
        </div>

        <button
          type="button"
          className="md:hidden flex h-10 w-10 items-center justify-center text-ink"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Toggle menu</span>
          <div className="relative h-3 w-6">
            <span
              className={`absolute left-0 top-0 h-px w-6 bg-ink transition-transform duration-300 ${
                open ? "translate-y-[6px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[6px] h-px w-6 bg-ink transition-transform duration-300 ${
                open ? "-rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-500 ease-editorial ${
          open ? "max-h-[640px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="container-page pb-8 pt-2">
          <nav className="flex flex-col divide-y divide-rule/10" aria-label="Mobile">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-4 text-lg text-ink"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <div className="mt-6 flex flex-col gap-3">
            <a href={`tel:${siteConfig.contact.phoneTel}`} className="btn-secondary w-full">
              Call {siteConfig.contact.phone}
            </a>
            <a href="#book" onClick={() => setOpen(false)} className="btn-primary w-full">
              Book service
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
