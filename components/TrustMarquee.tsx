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
    <section aria-label="Certifications and memberships" className="border-y border-rule/10 bg-surface/60 py-8 overflow-hidden">
      <div className="flex w-max marquee-track gap-16 px-6">
        {items.map((t, i) => (
          <div key={`${t.label}-${i}`} className="flex items-center gap-3 whitespace-nowrap">
            <span className="h-1 w-1 rounded-full bg-sienna" aria-hidden />
            <span className="font-display text-base md:text-lg text-ink" style={{ fontVariationSettings: "'opsz' 24" }}>
              {t.label}
            </span>
            {t.detail && (
              <span className="text-xs text-muted">— {t.detail}</span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
