import { siteConfig } from "@/config/site";

export function FinalCTA() {
  return (
    <section id="book" className="section bg-ink text-surface">
      <div className="container-page">
        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-sienna" />
          <span className="eyebrow text-sienna">Get in touch</span>
        </div>

        <h2 className="mt-5 text-display-xl font-semibold leading-[1] max-w-[18ch]">
          Call us. Or book online.
        </h2>

        <div className="mt-12 grid gap-px bg-surface/10 md:grid-cols-2 border border-surface/10">
          {/* Call */}
          <a
            href={`tel:${siteConfig.contact.phoneTel}`}
            className="group bg-ink p-8 md:p-10 transition-colors hover:bg-siennaDeep"
          >
            <span className="label-meta text-surface/60">Call</span>
            <p
              className="mt-4 text-surface font-semibold tracking-tight num-tabular"
              style={{ fontSize: "clamp(1.875rem, 3.75vw, 2.75rem)", lineHeight: 1.05 }}
            >
              {siteConfig.contact.phone}
            </p>
            <p className="mt-3 text-surface/70 max-w-prose">
              {siteConfig.hours.weekday}. {siteConfig.hours.saturday}.
              <br />
              {siteConfig.hours.emergency} — answered by a real tech, not a call center.
            </p>
            <span className="mt-7 inline-flex items-center gap-2 text-surface text-sm group-hover:gap-3 transition-all">
              Dial now
              <ArrowLight />
            </span>
          </a>

          {/* Book online */}
          <div id="quote" className="bg-ink p-8 md:p-10">
            <span className="label-meta text-surface/60">Book online</span>
            <p
              className="mt-4 text-surface font-semibold tracking-tight"
              style={{ fontSize: "clamp(1.875rem, 3.75vw, 2.75rem)", lineHeight: 1.05 }}
            >
              Tell us what's wrong.
            </p>
            <p className="mt-3 text-surface/70 max-w-prose">
              We confirm a window within the hour during business days.
            </p>
            <form className="mt-6 space-y-4" action="#book" method="get" aria-label="Book service request">
              <div className="grid gap-3 sm:grid-cols-2">
                <label className="block">
                  <span className="sr-only">Your name</span>
                  <input
                    className="w-full bg-transparent border-b border-surface/25 py-3 text-surface placeholder:text-surface/40 focus:border-sienna focus:outline-none"
                    placeholder="Name"
                    type="text"
                    name="name"
                    required
                    autoComplete="name"
                  />
                </label>
                <label className="block">
                  <span className="sr-only">Phone number</span>
                  <input
                    className="w-full bg-transparent border-b border-surface/25 py-3 text-surface placeholder:text-surface/40 focus:border-sienna focus:outline-none"
                    placeholder="Phone"
                    type="tel"
                    name="phone"
                    required
                    autoComplete="tel"
                  />
                </label>
              </div>
              <label className="block">
                <span className="sr-only">What's going on</span>
                <input
                  className="w-full bg-transparent border-b border-surface/25 py-3 text-surface placeholder:text-surface/40 focus:border-sienna focus:outline-none"
                  placeholder="What's going on? (e.g., furnace not igniting)"
                  type="text"
                  name="note"
                />
              </label>
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
      <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
