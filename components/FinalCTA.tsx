import { siteConfig } from "@/config/site";

export function FinalCTA() {
  return (
    <section id="book" className="section bg-ink text-surface relative overflow-hidden">
      {/* Coulee strata in ink — inverted version */}
      <svg
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40 w-full opacity-25"
        viewBox="0 0 1440 200"
        preserveAspectRatio="none"
      >
        {[0, 18, 38, 60, 84, 110].map((y, i) => (
          <path
            key={i}
            d={`M0 ${y + 60} C 240 ${y + 30}, 480 ${y + 90}, 720 ${y + 40} S 1200 ${y + 95}, 1440 ${y + 45}`}
            fill="none"
            stroke="#FAF7F2"
            strokeOpacity={0.08 + i * 0.01}
            strokeWidth="1"
          />
        ))}
      </svg>

      <div className="container-page relative">
        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-sienna" />
          <span className="eyebrow text-sienna">Ready when you are</span>
        </div>

        <h2 className="mt-6 font-display leading-[0.95] max-w-[16ch]" style={{ fontSize: "clamp(3rem, 7vw, 5.5rem)", fontVariationSettings: "'opsz' 96, 'SOFT' 30" }}>
          Two ways in.
          <br />
          <span className="italic text-sienna">Both work.</span>
        </h2>

        <div className="mt-16 grid gap-px bg-surface/10 md:grid-cols-2 border border-surface/10">
          {/* Call */}
          <a
            href={`tel:${siteConfig.contact.phoneTel}`}
            className="group bg-ink p-8 md:p-12 transition-colors hover:bg-siennaDeep"
          >
            <span className="label-meta text-surface/60">Call us</span>
            <p className="mt-4 font-display text-surface leading-tight" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontVariationSettings: "'opsz' 72" }}>
              {siteConfig.contact.phone}
            </p>
            <p className="mt-3 text-surface/70 max-w-prose">
              {siteConfig.hours.weekday}. {siteConfig.hours.saturday}.
              <br />
              {siteConfig.hours.emergency} — answered live.
            </p>
            <span className="mt-8 inline-flex items-center gap-2 text-surface text-sm group-hover:gap-3 transition-all">
              Dial now
              <ArrowLight />
            </span>
          </a>

          {/* Book online */}
          <div id="quote" className="bg-ink p-8 md:p-12">
            <span className="label-meta text-surface/60">Book online</span>
            <p className="mt-4 font-display text-surface leading-tight" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontVariationSettings: "'opsz' 72" }}>
              Send a request.
            </p>
            <p className="mt-3 text-surface/70 max-w-prose">
              Tell us what's going on and we'll confirm a window within the hour during business days.
            </p>
            <form
              className="mt-6 space-y-4"
              action="#book"
              method="get"
              aria-label="Book service request"
            >
              <div className="grid gap-3 sm:grid-cols-2">
                <input
                  className="w-full bg-transparent border-b border-surface/25 py-3 text-surface placeholder:text-surface/40 focus:border-sienna focus:outline-none"
                  placeholder="Name"
                  type="text"
                  name="name"
                  required
                  autoComplete="name"
                />
                <input
                  className="w-full bg-transparent border-b border-surface/25 py-3 text-surface placeholder:text-surface/40 focus:border-sienna focus:outline-none"
                  placeholder="Phone"
                  type="tel"
                  name="phone"
                  required
                  autoComplete="tel"
                />
              </div>
              <input
                className="w-full bg-transparent border-b border-surface/25 py-3 text-surface placeholder:text-surface/40 focus:border-sienna focus:outline-none"
                placeholder="What's going on? (e.g., furnace not igniting)"
                type="text"
                name="note"
              />
              <button type="button" className="btn-primary mt-4">
                Request a window
                <ArrowLight />
              </button>
              <p className="text-xs text-surface/40">
                Demo form — wire to your CRM (HubSpot, Jobber, ServiceTitan) before launch.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function ArrowLight() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
      <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
