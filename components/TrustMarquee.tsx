import { siteConfig } from "@/config/site";

/**
 * Trust marquee — credentials scroll. Sans, weight 500, no ornament between.
 * Items tripled for seamless -33.333% loop (see globals.css).
 */
export function TrustMarquee() {
  const items = [
    ...siteConfig.trustSignals,
    ...siteConfig.trustSignals,
    ...siteConfig.trustSignals,
  ];

  return (
    <section
      aria-label="Certifications and memberships"
      className="border-y border-rule/10 bg-surface/70 py-7 overflow-hidden relative"
      style={{
        WebkitMaskImage:
          "linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)",
        maskImage:
          "linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)",
      }}
    >
      <div className="flex w-max marquee-track gap-12 px-6">
        {items.map((t, i) => (
          <div key={`${t.label}-${i}`} className="flex items-center gap-2 whitespace-nowrap">
            <span className="text-base md:text-lg font-medium text-ink">{t.label}</span>
            {t.detail && <span className="text-xs text-muted">— {t.detail}</span>}
          </div>
        ))}
      </div>
    </section>
  );
}
