import { siteConfig } from "@/config/site";

export function Process() {
  return (
    <section id="process" className="section">
      <div className="container-page">
        <header className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-7">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-sienna" />
              <span className="eyebrow">What to expect</span>
            </div>
            <h2 className="mt-6 font-display text-display-lg text-ink leading-tight max-w-[20ch]">
              Four steps. No theatre.
            </h2>
          </div>
          <p className="col-span-12 md:col-span-5 md:pt-12 text-graphite text-lg leading-relaxed max-w-prose">
            We've trimmed the process to what matters: a clear price before work begins, a Red Seal tech doing the work, and a written warranty when we leave.
          </p>
        </header>

        <ol className="mt-16 grid gap-10 md:grid-cols-4 md:gap-0">
          {siteConfig.process.map((p, i) => (
            <li
              key={p.step}
              className={`md:px-8 ${i > 0 ? "md:border-l md:border-rule/10" : ""}`}
            >
              <div className="flex items-center gap-3">
                <span className="font-display text-sienna text-2xl" style={{ fontVariationSettings: "'opsz' 48" }}>
                  {p.step}
                </span>
                <span className="h-px flex-1 bg-rule/15" />
              </div>
              <h3 className="mt-5 font-display text-2xl text-ink" style={{ fontVariationSettings: "'opsz' 48" }}>
                {p.title}
              </h3>
              <p className="mt-3 text-graphite leading-relaxed">{p.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
