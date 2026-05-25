import { siteConfig } from "@/config/site";

/**
 * Trust marquee — single ambient motion moment per page.
 * Pauses for reduced-motion users (handled in globals.css).
 */
export function TrustMarquee() {
  // Triple the list so the seamless loop (-50% translate) covers wide viewports
  const items = [
    ...siteConfig.trustSignals,
    ...siteConfig.trustSignals,
    ...siteConfig.trustSignals,
  ];
  return (
    <section
      aria-label="Certifications and memberships"
      className="border-y border-rule/10 bg-surface/60 py-10 overflow-hidden relative"
      style={{
        // Fade the marquee edges into the background — polished, not abrupt.
        WebkitMaskImage:
          "linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)",
        maskImage:
          "linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)",
      }}
    >
      <div className="flex w-max marquee-track gap-14 px-6">
        {items.map((t, i) => (
          <div key={`${t.label}-${i}`} className="flex items-center gap-3 whitespace-nowrap">
            <span className="h-1 w-1 rounded-full bg-sienna" aria-hidden />
            <span className="font-display text-lg md:text-xl text-ink" style={{ fontVariationSettings: "'opsz' 28" }}>
              {t.label}
            </span>
            {t.detail && (
              <span className="text-xs text-graphite">— {t.detail}</span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
