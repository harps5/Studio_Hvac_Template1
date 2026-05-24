import { siteConfig } from "@/config/site";

export function Pricing() {
  return (
    <section id="pricing" className="section">
      <div className="container-page">
        <header>
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-sienna" />
            <span className="eyebrow">Pricing, posted</span>
          </div>
          <h2 className="mt-6 font-display text-display-lg text-ink leading-tight max-w-[20ch]">
            The price is on the page. That's the point.
          </h2>
        </header>

        <div className="mt-16 grid gap-px bg-rule/10 md:grid-cols-2 border border-rule/10">
          {/* Diagnostic */}
          <article className="bg-surface p-8 md:p-12">
            <span className="label-meta">Diagnostic visit</span>
            <p className="mt-4 font-display text-ink" style={{ fontSize: "clamp(3rem, 6vw, 4.5rem)", lineHeight: 1, fontVariationSettings: "'opsz' 96" }}>
              {siteConfig.pricing.diagnosticFee}
            </p>
            <p className="mt-4 text-graphite leading-relaxed max-w-prose">
              Includes a full inspection, written estimate, and combustion or
              refrigerant readings where applicable. {siteConfig.pricing.diagnosticNote}
            </p>
            <a href="#book" className="mt-8 inline-flex link-editorial">
              Book a diagnostic visit
            </a>
          </article>

          {/* Financing */}
          <article className="bg-surface p-8 md:p-12">
            <span className="label-meta">Financing</span>
            <p className="mt-4 font-display text-ink leading-tight" style={{ fontSize: "clamp(2rem, 4vw, 2.75rem)", fontVariationSettings: "'opsz' 72" }}>
              {siteConfig.pricing.financingHeadline}
            </p>
            <p className="mt-4 text-graphite leading-relaxed max-w-prose">
              {siteConfig.pricing.financingDetail} Longer-term plans available — ask
              your technician for the rate sheet.
            </p>
            <a href="#quote" className="mt-8 inline-flex link-editorial">
              Get a financed quote
            </a>
          </article>
        </div>

        <p className="mt-8 text-sm text-muted max-w-prose">
          No service charge for written estimates on new equipment. After-hours
          surcharge is posted and quoted before dispatch — never a surprise on the invoice.
        </p>
      </div>
    </section>
  );
}
