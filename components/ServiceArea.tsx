import { siteConfig } from "@/config/site";

/**
 * Service area — text-led, no map embed (load cost, privacy, focus).
 * SVG topographic motif suggests the coulee landscape; communities
 * are an editorial list with distance from primary city.
 */
export function ServiceArea() {
  const sorted = [...siteConfig.serviceArea].sort(
    (a, b) => (a.distanceKm ?? 0) - (b.distanceKm ?? 0)
  );

  return (
    <section id="service-area" className="section bg-surface">
      <div className="container-page grid grid-cols-12 gap-10">
        <header className="col-span-12 md:col-span-5">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-sienna" />
            <span className="eyebrow">Service area</span>
          </div>
          <h2 className="mt-6 font-display text-display-lg text-ink leading-tight max-w-[16ch]">
            Built for the Oldman River valley.
          </h2>
          <p className="mt-6 max-w-prose text-graphite text-lg leading-relaxed">
            We work a 50-kilometre radius around Lethbridge, covering most of the
            communities the {sorted[0].name} chinook reaches. Outside that radius?
            Call us — we travel for installs.
          </p>
          <a href={`tel:${siteConfig.contact.phoneTel}`} className="mt-8 inline-flex link-editorial">
            {siteConfig.contact.phone}
          </a>
        </header>

        <div className="col-span-12 md:col-span-7">
          <div className="relative aspect-[5/4] md:aspect-[6/5] w-full">
            <ServiceMapSVG communities={sorted} />
          </div>

          <ul className="mt-10 grid grid-cols-2 gap-y-4 gap-x-8 sm:grid-cols-3 border-t border-rule/10 pt-8">
            {sorted.map((c) => (
              <li key={c.name} className="flex items-baseline justify-between gap-3">
                <span className="font-display text-lg text-ink" style={{ fontVariationSettings: "'opsz' 24" }}>
                  {c.name}
                </span>
                {c.distanceKm !== undefined && (
                  <span className="label-meta">
                    {c.distanceKm === 0 ? "HQ" : `${c.distanceKm} km`}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function ServiceMapSVG({
  communities,
}: {
  communities: { name: string; distanceKm?: number }[];
}) {
  // Hand-placed coordinates (relative) for the actual Southern AB layout.
  // Lethbridge at center; surrounding towns approximated relative to map bounds.
  const placements: Record<string, { x: number; y: number }> = {
    Lethbridge: { x: 50, y: 52 },
    Coaldale: { x: 60, y: 50 },
    "Picture Butte": { x: 47, y: 38 },
    Taber: { x: 78, y: 50 },
    Raymond: { x: 51, y: 67 },
    "Fort Macleod": { x: 23, y: 47 },
  };

  return (
    <svg viewBox="0 0 100 80" className="absolute inset-0 h-full w-full" aria-hidden>
      {/* Topographic strata — coulee motif */}
      {[10, 22, 34, 46, 58, 70].map((y, i) => (
        <path
          key={y}
          d={`M0 ${y} C 25 ${y - 4 + i}, 50 ${y + 5}, 75 ${y - 3}, 100 ${y + 2}`}
          fill="none"
          stroke="#1F1D1A"
          strokeOpacity={0.06}
          strokeWidth="0.25"
        />
      ))}

      {/* Oldman River — single hand-drawn meander */}
      <path
        d="M-2 60 Q 18 50, 30 55 T 55 50 T 78 56 T 110 48"
        fill="none"
        stroke="#B2563B"
        strokeOpacity={0.45}
        strokeWidth="0.4"
        strokeLinecap="round"
      />

      {/* Radius ring around Lethbridge — visual indication of coverage */}
      <circle
        cx={placements.Lethbridge.x}
        cy={placements.Lethbridge.y}
        r="32"
        fill="none"
        stroke="#1F1D1A"
        strokeOpacity={0.08}
        strokeDasharray="0.6 0.8"
        strokeWidth="0.18"
      />

      {/* Community dots + labels */}
      {communities.map((c) => {
        const p = placements[c.name];
        if (!p) return null;
        const isHQ = c.distanceKm === 0;
        return (
          <g key={c.name}>
            <circle
              cx={p.x}
              cy={p.y}
              r={isHQ ? 0.9 : 0.55}
              fill={isHQ ? "#B2563B" : "#0F0E0D"}
            />
            {isHQ && (
              <circle
                cx={p.x}
                cy={p.y}
                r={2}
                fill="none"
                stroke="#B2563B"
                strokeOpacity={0.35}
                strokeWidth="0.18"
              />
            )}
            <text
              x={p.x + 1.6}
              y={p.y + 0.5}
              fontSize="2"
              fill="#0F0E0D"
              fontFamily="var(--font-sans), sans-serif"
              fontWeight="500"
            >
              {c.name}
            </text>
          </g>
        );
      })}

      {/* Compass tick */}
      <g transform="translate(92, 6)">
        <line x1="0" y1="0" x2="0" y2="5" stroke="#0F0E0D" strokeWidth="0.2" />
        <text x="-1" y="-1" fontSize="1.8" fill="#0F0E0D" fontFamily="var(--font-sans), sans-serif">N</text>
      </g>
    </svg>
  );
}
