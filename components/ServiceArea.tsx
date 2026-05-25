import { siteConfig } from "@/config/site";

/**
 * Service area — text-led, no map embed (load cost, privacy).
 * The map is a schematic — communities, distances, coverage ring.
 * Not picturesque, not topographic: it's a workmanlike diagram.
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
          <h2 className="mt-5 text-display-lg font-semibold text-ink max-w-[16ch]">
            We work where we live.
          </h2>
          <p className="mt-6 max-w-prose text-graphite text-lg leading-relaxed">
            Coulee runs a 50-kilometre radius around Lethbridge — that covers most
            of the chinook belt. Outside that? Call us. We travel for installs.
          </p>
          <a href={`tel:${siteConfig.contact.phoneTel}`} className="mt-7 inline-flex link-editorial">
            {siteConfig.contact.phone}
          </a>
        </header>

        <div className="col-span-12 md:col-span-7">
          <div className="relative aspect-[5/4] md:aspect-[6/5] w-full bg-linen border border-rule/10">
            <ServiceMapSVG communities={sorted} />
          </div>

          <ul className="mt-8 grid grid-cols-2 gap-y-3 gap-x-8 sm:grid-cols-3 border-t border-rule/10 pt-6">
            {sorted.map((c) => (
              <li key={c.name} className="flex items-baseline justify-between gap-3">
                <span className="text-base font-medium text-ink">{c.name}</span>
                {c.distanceKm !== undefined && (
                  <span className="label-meta num-tabular">
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
  type Placement = {
    x: number;
    y: number;
    labelAnchor?: "left" | "right" | "above" | "below";
  };
  const placements: Record<string, Placement> = {
    Lethbridge: { x: 50, y: 52, labelAnchor: "left" },
    Coaldale: { x: 62, y: 50, labelAnchor: "right" },
    "Picture Butte": { x: 47, y: 36, labelAnchor: "above" },
    Taber: { x: 80, y: 50, labelAnchor: "right" },
    Raymond: { x: 51, y: 68, labelAnchor: "below" },
    "Fort Macleod": { x: 21, y: 47, labelAnchor: "left" },
  };

  return (
    <svg viewBox="0 0 100 80" className="absolute inset-0 h-full w-full" aria-hidden>
      {/* Schematic grid — workmanlike, not picturesque */}
      {[10, 25, 40, 55, 70].map((y) => (
        <line key={`h${y}`} x1="0" y1={y} x2="100" y2={y} stroke="#141414" strokeOpacity={0.04} strokeWidth="0.15" />
      ))}
      {[20, 40, 60, 80].map((x) => (
        <line key={`v${x}`} x1={x} y1="0" x2={x} y2="80" stroke="#141414" strokeOpacity={0.04} strokeWidth="0.15" />
      ))}

      {/* Coverage radius — single solid faint ring */}
      <circle
        cx={placements.Lethbridge.x}
        cy={placements.Lethbridge.y}
        r="30"
        fill="#0F5938"
        fillOpacity={0.04}
        stroke="#0F5938"
        strokeOpacity={0.3}
        strokeWidth="0.2"
      />

      {/* Community dots + labels */}
      {communities.map((c) => {
        const p = placements[c.name];
        if (!p) return null;
        const isHQ = c.distanceKm === 0;
        const anchor = p.labelAnchor ?? "right";

        const labelProps =
          anchor === "left"
            ? { x: p.x - 1.6, y: p.y + 0.7, textAnchor: "end" as const }
            : anchor === "above"
            ? { x: p.x, y: p.y - 1.6, textAnchor: "middle" as const }
            : anchor === "below"
            ? { x: p.x, y: p.y + 3.2, textAnchor: "middle" as const }
            : { x: p.x + 1.6, y: p.y + 0.7, textAnchor: "start" as const };

        return (
          <g key={c.name}>
            <rect
              x={p.x - (isHQ ? 0.9 : 0.5)}
              y={p.y - (isHQ ? 0.9 : 0.5)}
              width={isHQ ? 1.8 : 1}
              height={isHQ ? 1.8 : 1}
              fill={isHQ ? "#0F5938" : "#141414"}
            />
            <text
              x={labelProps.x}
              y={labelProps.y}
              fontSize="2.1"
              fill="#141414"
              textAnchor={labelProps.textAnchor}
              fontFamily="var(--font-geist-sans), system-ui, sans-serif"
              fontWeight="500"
            >
              {c.name}
            </text>
          </g>
        );
      })}

      {/* Compass tick — workmanlike */}
      <g transform="translate(92, 6)">
        <line x1="0" y1="0" x2="0" y2="5" stroke="#141414" strokeWidth="0.25" />
        <text x="-1" y="-1" fontSize="1.8" fill="#141414" fontFamily="var(--font-geist-sans), system-ui, sans-serif" fontWeight="500">N</text>
      </g>

      {/* Scale bar */}
      <g transform="translate(6, 73)">
        <line x1="0" y1="0" x2="20" y2="0" stroke="#141414" strokeOpacity={0.5} strokeWidth="0.25" />
        <line x1="0" y1="-0.8" x2="0" y2="0.8" stroke="#141414" strokeOpacity={0.5} strokeWidth="0.25" />
        <line x1="20" y1="-0.8" x2="20" y2="0.8" stroke="#141414" strokeOpacity={0.5} strokeWidth="0.25" />
        <text x="22" y="0.9" fontSize="1.6" fill="#141414" fillOpacity={0.6} fontFamily="var(--font-geist-sans), system-ui, sans-serif">25 km</text>
      </g>
    </svg>
  );
}
