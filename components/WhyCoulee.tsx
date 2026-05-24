import { siteConfig } from "@/config/site";

export function WhyCoulee() {
  return (
    <section id="why" className="section bg-surface">
      <div className="container-page">
        <header className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-7">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-sienna" />
              <span className="eyebrow">Why Coulee</span>
            </div>
            <h2 className="mt-6 font-display text-display-lg text-ink leading-tight max-w-[18ch]">
              The four things every HVAC company should do — and most don't.
            </h2>
          </div>
        </header>

        <ol className="mt-16 grid gap-px bg-rule/10 md:grid-cols-2 border border-rule/10">
          {siteConfig.differentiators.map((d, i) => (
            <li key={d.title} className="bg-surface p-8 md:p-12">
              <div className="flex items-baseline gap-4">
                <span className="font-display text-base text-muted" style={{ fontVariationSettings: "'opsz' 24" }}>
                  0{i + 1}
                </span>
                <h3 className="font-display text-2xl md:text-3xl text-ink leading-tight" style={{ fontVariationSettings: "'opsz' 48" }}>
                  {d.title}
                </h3>
              </div>
              <p className="mt-5 max-w-prose text-graphite leading-relaxed">
                {d.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
