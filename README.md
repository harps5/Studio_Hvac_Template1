# Studio HVAC Template

A reusable Next.js 14 landing-page template for Birchmont Studio's HVAC outbound sales. Clone, swap one config file, deploy.

The demo build is **Coulee HVAC** — a placeholder business in Lethbridge, Alberta.

---

## What this is

A single-page, type-led marketing site engineered to look unmistakably better than the category baseline. Every piece of client-specific content lives in `/config/site.ts`; every page section reads from it. Swapping the site for a new HVAC prospect should take **under 30 minutes**.

- **Stack:** Next.js 14 (App Router), TypeScript, Tailwind CSS
- **Fonts:** Fraunces (display) + Inter Tight (body) via `next/font` — self-hosted, zero layout shift
- **Imagery:** No stock photos. SVG + CSS only. Hand-drawn coulee topography for ornament.
- **JS payload:** ~88 kB First Load (static)
- **Accessibility:** Skip link, focus rings, semantic landmarks, reduced-motion respected
- **SEO:** Metadata, OG, robots, sitemap, FAQPage + HVACBusiness JSON-LD

---

## Clone for a new prospect

```bash
# 1. Clone the repo, rename it for the new client
git clone <this-repo> prospect-name-hvac
cd prospect-name-hvac

# 2. Edit /config/site.ts — business name, phone, services, FAQ, etc.
#    Edit /config/README.md is the schema reference.

# 3. Replace /public/favicon.svg with the new wordmark initial
# 4. Update the wordmark text in /public/og.svg (search "Coulee")

# 5. Run locally
npm install
npm run dev    # http://localhost:3000

# 6. Deploy to Vercel (see below)
```

That's the entire swap. No template scattered across components; no copy hidden in JSX.

---

## What to customize (checklist)

In `/config/site.ts`:

- [ ] `business.name`, `business.legalName`, `business.wordmark`, `business.tagline`
- [ ] `contact.phone`, `contact.phoneTel`, `contact.email`, `contact.address`
- [ ] `hours.weekday`, `hours.saturday`, `hours.sunday` (optional)
- [ ] `serviceArea[]` — primary city first, with `distanceKm`
- [ ] `services[]` — six recommended; rewrite `inclusions` to match what they actually do
- [ ] `differentiators[]` — four "why us" statements
- [ ] `process[]` — usually leave alone unless their workflow differs
- [ ] `pricing.diagnosticFee`, `pricing.financingHeadline` — their real numbers
- [ ] `trustSignals[]` — their certifications (Red Seal, TECA, dealer status, BBB)
- [ ] `testimonials[]` — three featured reviews
- [ ] `reviews.rating`, `reviews.count`, `reviews.platform`
- [ ] `faq[]` — six questions
- [ ] `social` — only include platforms they actually use
- [ ] `seo.title`, `seo.description`, `seo.url` (and `ogTitle`/`ogDescription`)

In `/public/`:

- [ ] `favicon.svg` — change the initial letter and tweak colors if needed
- [ ] `og.svg` — change the wordmark text near the bottom-right

In `/components/Hero.tsx` (optional):

- [ ] Edit the 4-word headline array — only change if a strong client-specific phrase exists
- [ ] Edit the "Stat" trio (rating, response time, warranty) if their numbers differ

That's it. The map in `ServiceArea.tsx` is hand-placed for Southern Alberta — if a new client serves a totally different region, update the `placements` object in that file (see `DECISIONS.md` for why this is intentional).

---

## Deploy to Vercel

```bash
# Once
npm i -g vercel

# Push to GitHub, import in the Vercel dashboard, OR:
vercel --prod
```

No environment variables required for the demo build. If you wire the form to a CRM (HubSpot, Jobber, ServiceTitan), add the relevant API keys in the Vercel project settings and convert `FinalCTA.tsx` to a client component with a server action.

---

## Project structure

```
.
├── app/
│   ├── layout.tsx          # Root layout, fonts, metadata, JSON-LD
│   ├── page.tsx            # Single-page composition (one import per section)
│   ├── globals.css         # Tailwind + design tokens + signature animations
│   ├── robots.ts           # Generated from siteConfig.seo.url
│   └── sitemap.ts          # Single-URL sitemap
├── components/
│   ├── Nav.tsx             # Sticky, scrolled-state, mobile drawer
│   ├── Hero.tsx            # Type-led headline, word-rise animation, coulee SVG
│   ├── TrustMarquee.tsx    # Ambient marquee — the page's single motion moment
│   ├── Services.tsx        # Editorial list, expandable details (not cards)
│   ├── WhyCoulee.tsx       # 4-up differentiator grid with hairline rules
│   ├── Process.tsx         # 4 columns, vertical hairline dividers
│   ├── ServiceArea.tsx     # Hand-drawn SVG of Southern AB + community list
│   ├── Pricing.tsx         # Diagnostic + financing, large editorial numbers
│   ├── Reviews.tsx         # 3 testimonials + Google badge
│   ├── FAQ.tsx             # Disclosure pattern + FAQPage JSON-LD
│   ├── FinalCTA.tsx        # Split call / form on ink background
│   ├── Footer.tsx          # NAP, hours, service area, services, legal
│   └── Wordmark.tsx        # Typographic mark, no icon
├── config/
│   ├── site.ts             # ★ SINGLE SOURCE OF TRUTH for all content
│   └── README.md           # Schema reference + swap walkthrough
├── public/
│   ├── favicon.svg
│   └── og.svg              # Open Graph image — also pure SVG
├── tailwind.config.ts
├── DECISIONS.md            # Every autonomous design/architecture choice
├── AUDIT.md                # Design critique results
└── SUMMARY.md              # What was built + handoff notes
```

---

## Scripts

```bash
npm run dev        # Dev server (http://localhost:3000)
npm run build      # Production build
npm run start      # Serve the production build locally
npm run typecheck  # tsc --noEmit
```

---

## License

Internal Birchmont Studio template. Not for redistribution.
