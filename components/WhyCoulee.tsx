import { siteConfig } from "@/config/site";

export function WhyCoulee() {
  return (
    <section id="why" className="section bg-surface">
      <div className="container-page">
        <header className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-8">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-sienna" />
              <span className="eyebrow">Why Coulee</span>
            </div>
            <h2 className="mt-5 text-display-lg font-semibold text-ink max-w-[20ch]">
              Four things every HVAC company should do. Most don't.
            </h2>
          </div>
        </header>

        <ol className="mt-12 grid gap-px bg-rule/10 md:grid-cols-2 border border-rule/10">
          {siteConfig.differentiators.map((d, i) => (
            <li key={d.title} className="bg-surface p-8 md:p-10">
              <div className="flex items-baseline gap-4">
                <span className="text-sm font-medium text-muted num-tabular">
                  0{i + 1}
                </span>
                <h3 className="text-2xl md:text-3xl font-semibold text-ink tracking-tight">
                  {d.title}
                </h3>
              </div>
              <p className="mt-4 max-w-prose text-graphite leading-relaxed">{d.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
