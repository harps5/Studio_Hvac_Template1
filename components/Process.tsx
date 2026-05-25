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
            <h2 className="mt-5 text-display-lg font-semibold text-ink max-w-[22ch]">
              Four steps. No surprises.
            </h2>
          </div>
          <p className="col-span-12 md:col-span-5 md:pt-10 text-graphite text-lg leading-relaxed max-w-prose">
            Clear price before we start. A Red Seal tech doing the work. Written warranty in your inbox before we leave.
          </p>
        </header>

        <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
          {siteConfig.process.map((p, i) => (
            <li key={p.step} className={`lg:px-7 ${i > 0 ? "lg:border-l lg:border-rule/10" : ""}`}>
              <div className="flex items-center gap-3">
                <span className="text-sienna text-base font-semibold num-tabular">{p.step}</span>
                <span className="h-px flex-1 bg-rule/15" />
              </div>
              <h3 className="mt-4 text-2xl font-semibold text-ink tracking-tight">{p.title}</h3>
              <p className="mt-3 text-graphite leading-relaxed">{p.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
