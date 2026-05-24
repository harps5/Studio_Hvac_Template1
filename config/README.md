# Config — `/config/site.ts`

This is the **single source of truth** for every piece of client-specific content on the site. If a page reads it, it lives here. If you need to change something for a new HVAC client, this is the first (and almost always only) file to edit.

The schema is fully typed in `site.ts` itself; this document is the human-readable companion.

---

## 30-minute swap checklist

Working top to bottom in `site.ts`:

1. **`business`** — name, legal name, wordmark, tagline, founding year (~3 min)
2. **`contact`** — phone (two formats), email, optional address (~2 min)
3. **`hours`** — three lines, plain English (~1 min)
4. **`serviceArea`** — primary city first, with `distanceKm` from primary (~3 min)
5. **`services`** — six items. Rewrite `summary`, `detail`, and `inclusions` for what they actually sell (~10 min)
6. **`differentiators`** — four "why us" cards (~3 min)
7. **`process`** — usually leave; tweak verbs if their workflow differs (~1 min)
8. **`pricing`** — their diagnostic fee, financing terms (~1 min)
9. **`trustSignals`** — their certifications and memberships (~2 min)
10. **`testimonials`** — three placeholder quotes; sub in real ones once collected (~2 min)
11. **`reviews`** — rating, count, platform (~30 sec)
12. **`faq`** — six questions, real answers (~5 min)
13. **`social`** — only platforms they actually post on (~1 min)
14. **`seo`** — title, description, canonical URL, OG copy (~2 min)

**Total: ~30 min** for a serious pass. A rushed pass can be done in 15.

---

## Schema reference

### `business`

```ts
{
  name: string;           // "Coulee HVAC"
  legalName: string;      // "Coulee HVAC Ltd." — used in footer + JSON-LD
  wordmark: string;       // Usually same as `name` but separable for stylization.
                          // For "Coulee HVAC" we render just "Coulee" in the wordmark.
  tagline: string;        // One sentence, ~120 chars. Appears in hero + metadata.
  founded?: number;       // 2009. Used in the hero eyebrow.
}
```

### `contact`

```ts
{
  phone: string;        // Display format: "(403) 555-0100"
  phoneTel: string;     // tel: format: "+14035550100" (no spaces, no parens)
  email: string;
  address?: {           // Optional, but improves local SEO
    street?: string;
    city: string;
    region: string;     // "AB"
    postal?: string;
    country: string;    // "Canada"
  };
}
```

### `hours`

```ts
{
  weekday: string;        // "Mon–Fri, 7am–7pm"  (en-dash, not hyphen)
  saturday?: string;      // "Sat, 8am–4pm"
  sunday?: string;        // Omit entirely if closed
  emergency: string;      // "24/7 emergency service"
}
```

### `serviceArea`

```ts
ServiceArea[] = [
  { name: "Lethbridge", distanceKm: 0 },      // 0 = HQ, shown with sienna dot
  { name: "Coaldale",    distanceKm: 15 },
  // ...
]
```

Order matters for the footer list (it follows array order). The map sorts by `distanceKm`. If you serve a region outside Southern Alberta, see [Map coordinates](#map-coordinates) below.

### `services`

Six recommended. Each item:

```ts
{
  slug: string;        // URL-safe key; used as anchor (#furnace, #ac, ...)
  index: string;       // "01"..."06" — editorial ornament
  title: string;       // 2–4 words. Goes in the display headline.
  summary: string;     // One line, ~80–120 chars. Appears collapsed.
  detail: string;      // 1–3 sentences. Appears expanded.
  inclusions: string[]; // 3–5 deliverables. Shown as checklist.
}
```

If a client offers fewer than 6 services, the section still works — but consider combining (e.g., "Furnace install & repair" + "Boiler service" become "Heating systems"). More than 6 strains the section's editorial rhythm.

### `differentiators`

Exactly **4** for the 2x2 grid. Each:

```ts
{ title: string; body: string; }
```

Titles should feel like a stated principle, not a marketing claim. Compare:
- ✅ "Pricing on the page" (principle)
- ❌ "Best prices in town!" (marketing)

### `process`

Exactly **4** for the column layout. Each:

```ts
{ step: string; title: string; body: string; }
```

`step` is the visible number ("01" through "04"). `title` is one verb. `body` is one sentence.

### `pricing`

```ts
{
  diagnosticFee: string;        // "$129" — shown as a giant editorial number
  diagnosticNote: string;       // "Waived with any repair."
  financingHeadline: string;    // "0% financing for 12 months"
  financingDetail: string;      // "OAC, via Financeit."
}
```

### `trustSignals`

```ts
TrustSignal[] = [
  { label: "Red Seal Certified", detail: "Every technician on every truck" },
  // ...
]
```

The trust marquee duplicates the array to create the seamless scroll. 4–6 items is the sweet spot.

### `testimonials`

3 recommended. Each:

```ts
{
  quote: string;       // 2–3 sentences. Don't shorten too aggressively;
                       // long-but-specific reads as more credible than punchy.
  author: string;      // "Sarah M." — first name + initial respects privacy
  location: string;    // "Lethbridge, AB"
  service?: string;    // "Furnace replacement" — optional context
  rating: number;      // 1–5; almost always 5.
}
```

### `reviews`

The aggregate badge in the Reviews section header.

```ts
{
  rating: number;     // 4.9
  count: number;      // 500
  platform: string;   // "Google"
}
```

### `faq`

Six recommended. Each:

```ts
{ question: string; answer: string; }
```

Answers feed FAQPage JSON-LD. Keep them informative — Google previews answers up to ~300 chars in featured snippets.

### `social`

All keys optional. Only include platforms the client actively posts on.

```ts
{
  google?: string;     // Google Business Profile URL
  facebook?: string;
  instagram?: string;
}
```

### `seo`

```ts
{
  title: string;             // <title>. Front-load the brand + region.
  description: string;       // 150–160 chars. Include primary city + services.
  url: string;               // Canonical, no trailing slash: "https://example.ca"
  ogTitle?: string;          // Defaults to `title` if omitted
  ogDescription?: string;    // Defaults to `description` if omitted
}
```

---

## Map coordinates

The Service Area section renders a hand-drawn topographic map of Southern Alberta with community dots placed at approximate relative coordinates. If a new client is in a different region (Calgary, Red Deer, Saskatoon, etc.), update the `placements` object inside `components/ServiceArea.tsx`:

```ts
const placements: Record<string, { x: number; y: number }> = {
  Lethbridge: { x: 50, y: 52 },   // x, y as percentages of the 100×80 viewBox
  // ...
};
```

For a truly different geography you may also want to redraw the river meander path and shift the radius ring. This is intentionally a hand-placed editorial map — not a Google Maps embed — because (a) it loads zero JS and (b) it reads as considered rather than generic. If you don't have 15 minutes to hand-place coordinates for a new region, the section degrades gracefully to the community list below the map.

---

## Things NOT in this config (by design)

- **Color palette and typography** — `tailwind.config.ts` and `app/globals.css`. If you change them per-client, you're rebranding, not just swapping content.
- **Page section order** — `app/page.tsx`. Section composition is a design decision per layout, not per client.
- **JSON-LD schema type** — `app/layout.tsx` hardcodes `HVACBusiness`. If you ever fork this template for a different vertical, change it there.
- **Copy on the form's placeholder text + the "demo form" note** — `components/FinalCTA.tsx`. Either wire the form to a real CRM or keep the demo note visible during prospecting.
