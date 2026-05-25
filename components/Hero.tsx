import { siteConfig } from "@/config/site";

/**
 * Hero — editorial, type-led. No stock photography.
 * Signature motion: staggered word-rise on the headline.
 * Ambient texture: a subtle SVG coulee-line landscape at the bottom,
 * suggesting the river-valley geography the brand is named for.
 */
export function Hero() {
  const headline = ["Heating.", "Cooling.", "Done", "properly."];

  return (
    <section id="top" className="relative pt-28 md:pt-36 pb-24 md:pb-32 overflow-hidden">
      {/* Ambient backdrop — radial warmth from upper-right, very subtle */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 50% at 80% 0%, rgba(178, 86, 59, 0.08) 0%, rgba(244, 240, 234, 0) 70%)",
        }}
      />

      <div className="container-page">
        {/* Eyebrow — region + discipline */}
        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-sienna" />
          <span className="eyebrow">Southern Alberta · Est. {siteConfig.business.founded}</span>
        </div>

        {/* Headline */}
        <h1
          className="font-display text-display-xl mt-6 max-w-[16ch] text-ink word-rise"
          style={{ fontVariationSettings: "'opsz' 96, 'SOFT' 30" }}
        >
          {headline.map((w, i) => (
            <span
              key={i}
              style={{ animationDelay: `${120 + i * 110}ms` }}
              className={i === headline.length - 1 ? "italic text-sienna" : ""}
            >
              {w}
              {i < headline.length - 1 ? " " : ""}
            </span>
          ))}
        </h1>

        <div className="mt-10 grid gap-12 md:grid-cols-12 md:items-end">
          {/* Left: subhead */}
          <p className="md:col-span-6 max-w-prose text-lg md:text-xl leading-relaxed text-graphite">
            {siteConfig.business.tagline}
            <span className="block mt-3 text-base text-muted">
              Serving <span className="text-ink">{siteConfig.serviceArea[0].name}</span> and {siteConfig.serviceArea.length - 1} surrounding communities.
            </span>
          </p>

          {/* Right: actions + trust microcopy */}
          <div className="md:col-span-6 md:pl-8 md:border-l md:border-rule/10">
            <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
              <a href="#book" className="btn-primary">
                Book service
                <Arrow />
              </a>
              <a href="#quote" className="btn-secondary">
                Get a quote
              </a>
            </div>

            <dl className="mt-8 grid grid-cols-3 gap-6">
              <Stat n={siteConfig.reviews.rating.toString()} k={`${siteConfig.reviews.platform} rating`} />
              <Stat n="Live" k="After-hours dispatch" />
              <Stat n="10 yr" k="Parts warranty" />
            </dl>
          </div>
        </div>

        {/* Trust line — quiet, single line */}
        <div className="mt-16 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted">
          <span className="label-meta">Trusted by</span>
          {siteConfig.trustSignals.slice(0, 4).map((t, i) => (
            <span key={t.label} className="flex items-center gap-x-6">
              {i > 0 && <span className="h-1 w-1 rounded-full bg-rule/30" aria-hidden />}
              {t.label}
            </span>
          ))}
        </div>
      </div>

      {/* Coulee-line ornament — SVG, no images. Suggests valley topography. */}
      <CouleeLines />
    </section>
  );
}

function Stat({ n, k }: { n: string; k: string }) {
  return (
    <div>
      <dt className="label-meta">{k}</dt>
      <dd className="mt-1 font-display text-2xl md:text-3xl text-ink num-tabular" style={{ fontVariationSettings: "'opsz' 48" }}>
        {n}
      </dd>
    </div>
  );
}

function Arrow() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
      <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CouleeLines() {
  return (
    <svg
      aria-hidden
      className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-32 w-full md:h-48"
      viewBox="0 0 1440 200"
      preserveAspectRatio="none"
    >
      {/* Layered topographic lines suggesting coulee strata */}
      {[0, 18, 38, 60, 84, 110, 138, 168].map((y, i) => (
        <path
          key={i}
          d={`M0 ${y + 50} C 240 ${y + 30}, 480 ${y + 80}, 720 ${y + 40} S 1200 ${y + 95}, 1440 ${y + 45}`}
          fill="none"
          stroke="#1F1D1A"
          strokeOpacity={0.04 + i * 0.005}
          strokeWidth="1"
        />
      ))}
    </svg>
  );
}
