import { siteConfig } from "@/config/site";

/**
 * Services — editorial list, not a cookie-cutter card grid.
 * Each row is a small "feature" with index, title, summary, expandable detail.
 */
export function Services() {
  return (
    <section id="services" className="section">
      <div className="container-page">
        <SectionHead
          eyebrow="What we do"
          title="Six services. Done to one standard."
          intro="Whatever Coulee installs or services, the bar is the same: properly sized, properly commissioned, properly warrantied — and priced before we start."
        />

        <ul className="mt-16 divide-y divide-rule/10 border-y border-rule/10">
          {siteConfig.services.map((s) => (
            <li key={s.slug} id={s.slug} className="group">
              <details className="py-8 md:py-10">
                <summary className="grid grid-cols-12 items-baseline gap-6 cursor-pointer">
                  <span className="col-span-2 md:col-span-1 font-display text-muted text-base md:text-lg" style={{ fontVariationSettings: "'opsz' 24" }}>
                    {s.index}
                  </span>
                  <div className="col-span-10 md:col-span-6">
                    <h3 className="font-display text-display-md text-ink leading-tight">
                      {s.title}
                    </h3>
                  </div>
                  <p className="col-span-12 md:col-span-4 text-graphite text-base md:text-lg leading-snug md:pt-2">
                    {s.summary}
                  </p>
                  <span className="hidden md:flex col-span-1 justify-end pt-2" aria-hidden>
                    <PlusGlyph />
                  </span>
                </summary>

                <div className="mt-8 grid grid-cols-12 gap-6">
                  <div className="col-span-12 md:col-span-6 md:col-start-2">
                    <p className="text-graphite leading-relaxed max-w-prose">
                      {s.detail}
                    </p>
                  </div>
                  <ul className="col-span-12 md:col-span-4 md:col-start-8 space-y-3">
                    {s.inclusions.map((inc) => (
                      <li key={inc} className="flex items-start gap-3 text-sm text-ink">
                        <CheckGlyph />
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </details>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function SectionHead({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <header className="grid grid-cols-12 gap-6">
      <div className="col-span-12 md:col-span-5">
        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-sienna" />
          <span className="eyebrow">{eyebrow}</span>
        </div>
        <h2 className="mt-6 font-display text-display-lg text-ink leading-tight">
          {title}
        </h2>
      </div>
      {intro && (
        <p className="col-span-12 md:col-span-6 md:col-start-7 md:pt-12 text-graphite text-lg md:text-xl leading-relaxed max-w-prose">
          {intro}
        </p>
      )}
    </header>
  );
}

function PlusGlyph() {
  return (
    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-rule/15 text-ink transition-colors group-open:bg-ink group-open:text-surface">
      <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden className="transition-transform duration-300 group-open:rotate-45">
        <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    </span>
  );
}

function CheckGlyph() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" className="mt-1 shrink-0 text-sienna" aria-hidden>
      <path d="M2 7.5l3 3 7-7" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
