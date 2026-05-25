import { siteConfig } from "@/config/site";

export function FAQ() {
  // JSON-LD for FAQ — schema.org/FAQPage
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: siteConfig.faq.map((q) => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: { "@type": "Answer", text: q.answer },
    })),
  };

  return (
    <section id="faq" className="section">
      <div className="container-page grid grid-cols-12 gap-10">
        <header className="col-span-12 md:col-span-4">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-sienna" />
            <span className="eyebrow">FAQ</span>
          </div>
          <h2 className="mt-6 font-display text-display-lg text-ink leading-tight">
            The questions everyone asks.
          </h2>
          <p className="mt-6 text-graphite leading-relaxed max-w-prose">
            Don't see yours? Call{" "}
            <a href={`tel:${siteConfig.contact.phoneTel}`} className="link-editorial">
              {siteConfig.contact.phone}
            </a>{" "}
            or email{" "}
            <a href={`mailto:${siteConfig.contact.email}`} className="link-editorial">
              {siteConfig.contact.email}
            </a>
            .
          </p>
        </header>

        <ul className="col-span-12 md:col-span-8 divide-y divide-rule/10 border-y border-rule/10">
          {siteConfig.faq.map((f, i) => (
            <li key={i} className="transition-colors duration-200 hover:bg-surface/40">
              <details className="group px-2 md:px-4 py-6 md:py-8">
                <summary className="flex items-baseline justify-between gap-6">
                  <h3 className="font-display text-xl md:text-2xl text-ink leading-snug" style={{ fontVariationSettings: "'opsz' 32" }}>
                    {f.question}
                  </h3>
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-rule/15 transition-colors group-open:bg-ink group-open:text-surface">
                    <svg width="10" height="10" viewBox="0 0 12 12" aria-hidden className="transition-transform duration-300 group-open:rotate-45">
                      <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-5 max-w-prose text-graphite leading-relaxed">
                  {f.answer}
                </p>
              </details>
            </li>
          ))}
        </ul>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </section>
  );
}
