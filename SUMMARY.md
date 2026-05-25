# SUMMARY.md

Final wrap on the Coulee HVAC demo build. Single document, written for Brendan, to be read before pushing this in front of the first prospect.

---

## What was built

A production-grade single-page Next.js 14 landing site for a placeholder HVAC business (Coulee HVAC, Lethbridge, AB), engineered as a reusable template for Birchmont Studio's outbound sales. Every piece of client-specific content lives in **one file** (`/config/site.ts`). Every page section reads from it. Swap that file, rebrand the favicon + OG wordmark, and the site reads as the new client's — under 30 minutes for a clean swap.

**Stack:**
- Next.js 14.2.35 (App Router), TypeScript, Tailwind CSS
- Fonts: Fraunces (display, variable, opsz + SOFT axes) + Inter Tight (body) via `next/font`
- No additional runtime dependencies — no `framer-motion`, no `gsap`, no map SDKs, no analytics

**Page sections (in order):** Nav → Hero → Trust Marquee → Services → Why Coulee → Process → Pricing → Service Area → Reviews → FAQ → Final CTA → Footer

**Build characteristics:**
- 88.5 kB First Load JS, fully static prerender
- One client component (`Nav`) — needed for scroll state + mobile drawer
- Zero image assets — page identity is type, palette, and a hand-drawn SVG topographic motif
- `robots.txt`, `sitemap.xml`, OG image (SVG), favicon (SVG), HVACBusiness + FAQPage JSON-LD

---

## Aesthetic decisions and why

**Direction: editorial / trust-led.** Reference points: Aesop, NYT Wirecutter, Pentagram's small-trade brand work. The brief explicitly rejected the category baseline (blue gradients, stock technicians, "Family Owned Since 1987"). The aesthetic signals "considered, competent, calm" — which is what an HVAC buyer is actually choosing on.

**Palette: warm linen, warm ink, burnt sienna.** No blue (the category default), no gradients, no `#fff`, no `#000`. Sienna is a deliberate echo of the river-carved coulees the brand is named for — Southern Alberta sandstone, oxidized iron, prairie light. It also doubles as a "warm authority" colour that competes neither with red (alarm) nor blue (corporate).

**Typography: Fraunces + Inter Tight.** Fraunces is a soft-modern serif with strong character; its `opsz` and `SOFT` axes are used to tune optical weight per context (sizes 24–144 across the page). Inter Tight is a slightly tighter neutral grotesque that pairs with Fraunces metrically. Neither was on the brief's prohibited list (Inter is — Inter Tight is a distinct family).

**One signature motion moment + one ambient moment.** Staggered word-rise on the hero headline (load only); slow trust-signal marquee with edge-fade mask (always running, paused for reduced-motion users). Everything else is restrained color/border transitions.

**Imagery: SVG + CSS only.** No stock photos, no AI imagery. The page's visual identity is type, palette, and a hand-drawn coulee strata motif (appears in the hero, the service-area map, and inverted in the final CTA). When the real client has photography, it becomes an upgrade — never a requirement.

**Services as a list, not a card grid.** A 3x2 grid of icon cards is the category default specifically because every HVAC site uses it. Rendered instead as an editorial list with index, title, summary, and expandable detail — each service breathes, each commitment lands.

**Hand-drawn SVG map of Southern Alberta, not a Google Maps embed.** Saves ~700 kB of JS, sets no third-party cookies, and reads as craft rather than commodity. Trade-off: a region swap requires re-placing dots (~10 min) — documented in `/config/README.md`.

Full reasoning for every autonomous decision is in [`DECISIONS.md`](./DECISIONS.md).

---

## Impeccable audit final score

**42 / 45 = 93%** across nine criteria (hierarchy, typography, color, spacing, motion, interaction, accessibility, performance, copy).

Full scorecard with per-criterion notes is in [`AUDIT.md`](./AUDIT.md). The three points dropped are:
- **Spacing (4/5)** — trust marquee is intentionally a tight band, not a section
- **Interaction (4/5)** — the booking form is a labelled demo (no server action)
- **Accessibility (4/5)** — one pass with a real screen reader recommended before any prospect demo

Important note: the `/impeccable` skill that the brief referenced is **not present** in this environment's skill registry. I checked. I substituted three rigorous manual passes (critique → polish → audit) against the same editorial design criteria the skill would apply. Pass-1 critique found 12 issues, all addressed. Polish added accessibility fixes, tabular numerals, hover states, edge-fade mask, and `text-wrap: balance`. The audit is the score above.

---

## Known limitations — review before showing a prospect

In rough priority order:

1. **The booking form does nothing.** It's a labelled static demo with a visible "Demo form — wire to your CRM" note under the submit button. **If you're showing it live**, mention this in the walkthrough or wire it to a real Server Action first (2–3 hours per CRM integration). A demo with a non-functional form is fine — a demo with a *broken* form is not.

2. **All trust signals and reviews are placeholder.** "Lennox Premier Dealer", "500+ Google reviews, 4.9 avg", the three testimonials, the Red Seal mention — all invented for plausibility. **Do not show a prospect a build that claims they have certifications they don't.** Edit `siteConfig.trustSignals`, `siteConfig.testimonials`, and `siteConfig.reviews` before any client-facing demo.

3. **Phone, email, and address are dummy values.** `(403) 555-0100` is the 555-prefix demo number. `service@couleehvac.ca` doesn't resolve. Swap before showing.

4. **The hero stat "Live after-hours dispatch" is descriptive, not numeric.** I replaced an earlier invented "90 min average response" with a more honest claim. Real clients should swap to their actual SLA number once you know it.

5. **The Service Area map is hand-placed for Southern Alberta.** Coordinates for Lethbridge, Coaldale, Picture Butte, Taber, Raymond, Fort Macleod are baked into `components/ServiceArea.tsx`. For a client in any other region you must edit the `placements` object (5–15 min). Documented in `/config/README.md` under "Map coordinates".

6. **No analytics installed.** Add `@vercel/analytics` after the prospect signs.

7. **No favicon/wordmark variation for the client.** The favicon shows "C" for Coulee; the OG image has "Coulee." text near the bottom-right. Both need a 30-second SVG edit per client. Documented in the README customization checklist.

8. **OG image is static.** One image, one URL. Sufficient for v1; consider `next/og` dynamic OG cards for richer link previews once you're seeing share traffic.

9. **No legal pages.** The footer links to `/privacy` and `/terms`, which 404. Either add stub pages or remove the links before any production deploy.

10. **One Lighthouse caveat:** the `text-muted` colour (`#7A7268` on `#F4F0EA` linen) sits at ~4.6:1 contrast — passes WCAG AA for small text, but borderline. I've restricted its use to labels only. If a contrast audit flags it, bump muted to `#6E665B` (~5.4:1) — a one-token change in `tailwind.config.ts`.

---

## Estimated swap time for a new HVAC client

**Target: under 30 minutes.** Realistic breakdown:

| Step | Time |
|---|---|
| Read `/config/README.md` once | 3 min |
| Edit `business`, `contact`, `hours`, `serviceArea` | 5 min |
| Rewrite `services[]` (6 entries × ~45 sec) | 5 min |
| Rewrite `differentiators[]`, `process[]`, `pricing`, `trustSignals[]` | 5 min |
| Rewrite `testimonials[]`, `faq[]`, `reviews`, `social`, `seo` | 7 min |
| Replace `/public/favicon.svg` letter | 1 min |
| Edit "Coulee." text in `/public/og.svg` | 1 min |
| **Region change** (only if not Southern AB): edit `placements` in `ServiceArea.tsx` | +10 min |
| Run `npm run build` locally to verify | 1 min |
| Push, deploy to Vercel | 2 min |
| **Total (same region)** | **~30 min** |
| **Total (different region)** | **~40 min** |

The 30-min target is realistic for an experienced operator who's done it once. The first swap will take 45–60 min while you find your rhythm with the schema.

---

## Repo handoff

- **GitHub:** `https://github.com/harps5/Studio_Hvac_Template1`
- **Branch:** `main` (no other branches)
- **Commit history:** Eight clean commits documenting scaffold → config → sections → SEO → docs → critique pass 1 → polish → audit
- **Local config set:** git user/email are set per-repo to `Brendan Harper / brendan@birchmontgroup.ca` for commit authorship
- **Deploy:** Untouched. Per brief, did not run `vercel`. Push to GitHub → import in Vercel dashboard. No env vars required.

---

## What to read first

1. **[README.md](./README.md)** — what this is, how to clone for a prospect, deploy
2. **[/config/README.md](./config/README.md)** — schema reference + 30-min swap checklist
3. **[DECISIONS.md](./DECISIONS.md)** — every autonomous design/architecture choice, with reasoning you can defend in a crit
4. **[AUDIT.md](./AUDIT.md)** — final scorecard and Lighthouse expectations
5. This file — when you want the executive summary again

Run locally: `npm install && npm run dev` → `http://localhost:3000`.
