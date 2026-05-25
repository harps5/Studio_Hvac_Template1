import { siteConfig } from "@/config/site";

export function Reviews() {
  return (
    <section id="reviews" className="section bg-surface">
      <div className="container-page">
        <header className="grid grid-cols-12 gap-6 items-end">
          <div className="col-span-12 md:col-span-7">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-sienna" />
              <span className="eyebrow">What customers say</span>
            </div>
            <h2 className="mt-5 text-display-lg font-semibold text-ink max-w-[22ch]">
              Reviews keep saying the same three things.
            </h2>
          </div>
          <div className="col-span-12 md:col-span-5 md:text-right">
            <GoogleBadge />
          </div>
        </header>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {siteConfig.testimonials.map((t, i) => (
            <figure key={i} className="flex flex-col bg-linen border border-rule/10 p-7">
              <Stars rating={t.rating} />
              <blockquote className="mt-5 text-base md:text-lg leading-relaxed text-ink">
                {t.quote}
              </blockquote>
              <figcaption className="mt-6 pt-5 border-t border-rule/10 flex items-center gap-3">
                <Avatar name={t.author} />
                <div>
                  <div className="text-ink font-medium">{t.author}</div>
                  <div className="text-sm text-muted">
                    {t.location}
                    {t.service && <> · {t.service}</>}
                  </div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * Reviewer avatar — placeholder for now. Initials on a soft surface.
 * Swap with <Image src=`/reviews/${slug}.jpg` /> when real photos exist.
 * Recommended: 96×96 jpg, daylight, neutral background, no group shots.
 */
function Avatar({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .map((p) => p[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
  return (
    <div
      className="h-10 w-10 shrink-0 rounded-full bg-ink/[0.07] border border-rule/10 flex items-center justify-center text-xs font-semibold text-graphite"
      aria-hidden
    >
      {initials}
    </div>
  );
}

function GoogleBadge() {
  const { rating, count, platform } = siteConfig.reviews;
  return (
    <div className="inline-flex items-center gap-3 rounded-md border border-rule/15 bg-linen px-4 py-2.5">
      <span className="text-2xl font-semibold text-ink num-tabular tracking-tight">
        {rating.toFixed(1)}
      </span>
      <Stars rating={Math.round(rating)} small />
      <span className="text-sm text-graphite num-tabular">
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
