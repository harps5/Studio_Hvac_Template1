import { siteConfig } from "@/config/site";

export function Reviews() {
  return (
    <section id="reviews" className="section bg-surface">
      <div className="container-page">
        <header className="grid grid-cols-12 gap-6 items-end">
          <div className="col-span-12 md:col-span-7">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-sienna" />
              <span className="eyebrow">In their words</span>
            </div>
            <h2 className="mt-6 font-display text-display-lg text-ink leading-tight max-w-[18ch]">
              The reviews keep saying the same three things.
            </h2>
          </div>
          <div className="col-span-12 md:col-span-5 md:text-right">
            <GoogleBadge />
          </div>
        </header>

        <div className="mt-16 grid gap-10 md:grid-cols-3">
          {siteConfig.testimonials.map((t, i) => (
            <figure key={i} className="flex flex-col">
              <Stars rating={t.rating} />
              <blockquote className="mt-5 font-display text-xl md:text-2xl leading-snug text-ink" style={{ fontVariationSettings: "'opsz' 32" }}>
                <span className="text-sienna">&ldquo;</span>
                {t.quote}
                <span className="text-sienna">&rdquo;</span>
              </blockquote>
              <figcaption className="mt-6 pt-4 border-t border-rule/10">
                <div className="text-ink">{t.author}</div>
                <div className="text-sm text-muted">
                  {t.location}
                  {t.service && <> · {t.service}</>}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function GoogleBadge() {
  const { rating, count, platform } = siteConfig.reviews;
  return (
    <div className="inline-flex items-center gap-3 rounded-full border border-rule/15 bg-linen px-5 py-3">
      <span className="font-display text-2xl text-ink" style={{ fontVariationSettings: "'opsz' 48" }}>
        {rating.toFixed(1)}
      </span>
      <Stars rating={Math.round(rating)} small />
      <span className="text-sm text-muted">
        {count}+ {platform} reviews
      </span>
    </div>
  );
}

function Stars({ rating, small = false }: { rating: number; small?: boolean }) {
  const size = small ? 12 : 14;
  return (
    <div className="flex gap-0.5" aria-label={`${rating} of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width={size}
          height={size}
          viewBox="0 0 14 14"
          aria-hidden
          className={i < rating ? "text-sienna" : "text-rule/20"}
        >
          <path
            d="M7 1l1.8 3.85 4.2.5-3.1 2.9.8 4.15L7 10.4l-3.7 2 .8-4.15L1 5.35l4.2-.5L7 1z"
            fill="currentColor"
          />
        </svg>
      ))}
    </div>
  );
}
