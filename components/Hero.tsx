import { siteConfig } from "@/config/site";

/**
 * Hero — plain-spoken, type-led, with a real photo placeholder.
 * Left: pitch + CTAs + 3 stats. Right: portrait-shaped photo zone.
 *
 * REPLACE PHOTO BEFORE PROSPECT DEMO:
 *   /public/hero.jpg — 4:5 portrait, ~1200x1500
 *   Content: a Coulee technician at a customer's front door (or on a
 *   porch, or beside their truck). Daylight, branded uniform visible,
 *   warm and competent — NOT a stock-photo handshake, NOT a thumbs-up.
 *   Swap the .photo-zone div below for <Image src="/hero.jpg" .../>.
 */
export function Hero() {
  return (
    <section id="top" className="pt-28 md:pt-32 pb-20 md:pb-28">
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-end">
          {/* Left — pitch */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-sienna" />
              <span className="eyebrow">Lethbridge & area · Est. {siteConfig.business.founded}</span>
            </div>

            <h1 className="mt-6 text-display-xl text-ink font-bold">
              Heating and cooling. <span className="text-sienna">Done right.</span>
            </h1>

            <p className="mt-6 max-w-prose text-lg md:text-xl leading-relaxed text-graphite">
              Furnace, AC, heat pump, and hot water work for Lethbridge homes.
              Same-day service. Written warranties. 24/7 dispatch.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href={`tel:${siteConfig.contact.phoneTel}`} className="btn-primary">
                Call {siteConfig.contact.phone}
              </a>
              <a href="#book" className="btn-secondary">
                Book online
              </a>
            </div>

            <dl className="mt-10 grid grid-cols-3 gap-6 max-w-md">
              <Stat n={`${siteConfig.reviews.rating}★`} k={`${siteConfig.reviews.platform} rating`} />
              <Stat n="24/7" k="Emergency line" />
              <Stat n="10 yr" k="Parts warranty" />
            </dl>
          </div>

          {/* Right — photo placeholder */}
          <div className="lg:col-span-5">
            <div className="photo-zone aspect-[4/5] w-full">
              <div className="text-center px-6">
                <div className="label-meta">Photo placeholder</div>
                <p className="mt-3 text-sm text-graphite max-w-[24ch] mx-auto leading-snug">
                  Replace with a 4:5 portrait of a Coulee technician at a customer's
                  door. Daylight, branded uniform, no stock-photo handshake.
                </p>
                <p className="mt-3 text-xs text-muted">~1200 × 1500 · /public/hero.jpg</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ n, k }: { n: string; k: string }) {
  return (
    <div>
      <dt className="label-meta">{k}</dt>
      <dd className="mt-1 text-2xl md:text-3xl font-semibold text-ink num-tabular tracking-tight">
        {n}
      </dd>
    </div>
  );
}
