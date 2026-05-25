# AUDIT.md

Final design audit of the Coulee HVAC demo. Substituted for the `/impeccable audit` skill (not available in this environment — see [Note on tooling](#note-on-tooling) below). Scored against the same criteria that skill applies: hierarchy, typography, color, spacing, motion, interaction, accessibility, performance, and copy.

**Audit date:** 2026-05-24
**Audited build:** `dae974d` (post-polish)
**Lighthouse target:** 95+ across all four metrics

---

## Scoring rubric

Each criterion scored **1–5**, where:
- **5** — Exceeds the brief; would defend in a design crit
- **4** — Meets the brief cleanly
- **3** — Meets the brief but has visible compromises
- **2** — Misses the brief in one or two specific ways
- **1** — Fails the brief

| Criterion | Score | Notes |
|---|---|---|
| Hierarchy | **5** | Editorial pacing throughout. Sections begin with eyebrow → headline → optional intro, in that order. Display sizes scale with `clamp()`, never compete with body. The hero owns the page; nothing else challenges it. |
| Typography | **5** | Fraunces (variable, opsz + SOFT) for display, Inter Tight for body. Both deliberately *not* on the prohibited list. Optical-size and SOFT axes used per context (24/28/48/72/96/144 across the page). `text-wrap: balance` on headings. Tabular numerals on stats, prices, ratings. |
| Color | **5** | Warm linen background (never `#fff`), warm near-black ink (never `#000`), single signature accent (burnt sienna). No blue. No purple. No gradient backgrounds. Hover/pressed deepening preserved. |
| Spacing | **4** | `py-section` = `clamp(5rem, 10vw, 9rem)` gives genuine editorial breathing room. Header → content gap consistent at `mt-16`. **One compromise:** the trust-marquee `py-10` is slightly tight relative to the surrounding section padding on mobile, by design — it's intentionally a band, not a section. |
| Motion | **5** | One signature: staggered word-rise on hero headline (`120–450ms` delays, `900ms` ease-out cubic). One ambient: trust-marquee with edge-fade mask. Everything else is restrained color/border transitions (`200–500ms`). `prefers-reduced-motion` honoured on both. |
| Interaction | **4** | Primary/secondary CTAs visually distinct. Touch targets ≥44px on key actions. FAQ + Services use native `<details>` for zero-JS disclosure with proper keyboard support. **Minor:** the booking form is a labelled demo (no server action); documented and intentional, would be wired to CRM before launch. |
| Accessibility | **4** | Skip link, semantic landmarks (`<nav>`, `<main>`, `<footer>`), focus rings visible (sienna at 3px offset), reduced-motion honoured, form inputs have `sr-only` labels (placeholders alone fail WCAG), language declared, JSON-LD structured data present. **One known gap:** decorative emoji-style glyphs (`·`, `+`, `⁄`) rely on visual context for meaning — acceptable per WAI-ARIA inline graphics rules but worth a pass with a screen reader before prospect demos. |
| Performance | **5** | First Load JS: **88.5 kB** for the home route. Fully static (`○` prerendered) — no per-request work. Two web fonts via `next/font` (self-hosted, swap, zero CLS). Two SVGs in `/public` (~3 kB total). No third-party scripts, no map embeds, no analytics until you add them. Single client component (Nav). |
| Copy | **5** | The page sounds like a serious trade, not a contractor. Specific numbers (`$129`, `90 min`, `10 yr`), stated principles (not marketing claims), plain English warranties. The "Two ways in. Both work." final headline lands. Testimonials read like real Southern Alberta customers — long-but-specific, not punchy. |

**Composite: 42 / 45 = 93%.**

---

## Findings carried forward

These are knowingly accepted compromises documented in [DECISIONS.md](./DECISIONS.md). They are *not* defects:

1. **The map is hand-placed for Southern Alberta** — re-placing dots is required if a swap moves to a different region. Documented swap cost: 5–15 minutes.
2. **The booking form is a static demo** — wired to nothing. Visible "Demo form — wire to your CRM" copy under the submit button. Wiring is a per-client task.
3. **"Live after-hours dispatch" hero stat** — replaces an invented "90 min average response" number. Honest, but real clients should swap to their actual SLA.
4. **Trust-marquee text uses Fraunces, not small caps** — Fraunces doesn't ship a true small-caps cut. Acceptable per the editorial register; the marquee already reads as quiet ornament, not a logo bar.
5. **`#pricing` lives in the nav** but is not in the brief's spec for nav links — added on critique because it's a buyer's natural question. Trivially removable.

---

## What I would do next (out of scope for v1)

In rough priority order, were I given another day:

1. **Replace the demo form** with a real Server Action that POSTs to the prospect's CRM (Jobber, ServiceTitan, HubSpot). 2–3 hours of work per integration.
2. **Add a `next/image` static hero photograph** if the prospect provides one — a single, well-cropped image of a tech in branded uniform would warm the page without breaking the editorial register. The current type-led hero is the *correct* fallback when there is no asset.
3. **Wire `framer-motion` *only* if the prospect specifically asks** for richer scroll-revealed sections. The current restraint is a feature, not a gap.
4. **Add a `/services/[slug]` route** for SEO depth on each service. Each could be a 600–800-word editorial page that reuses the existing components. Two days of writing per page.
5. **Add an "in the field" gallery** — a single section with 4–6 real installs, captioned. Becomes the page's emotional anchor once real photography exists.
6. **Wire `@vercel/analytics`** for traffic visibility — add a single `<Analytics />` after the prospect signs.
7. **Set up `next/og` dynamic OG images** per section so social shares pick up specifics. Currently one static `og.svg`.

None of these are blockers for showing the demo to a prospect.

---

## Lighthouse expectations

I cannot run Lighthouse from this environment, but the build characteristics support the 95+ target:

| Metric | Predicted | Reason |
|---|---|---|
| Performance | **97–100** | 88.5 kB JS, zero render-blocking external scripts, two self-hosted fonts via `next/font`, zero image assets, no third-party embeds. |
| Accessibility | **95–100** | Skip link, focus-visible rings, semantic landmarks, sr-only labels on form, JSON-LD, color contrast verified (graphite/ink on linen ≥ 7:1, muted on linen ~4.6:1 used only for labels). |
| Best Practices | **100** | HTTPS-ready, no console errors, no deprecated APIs, no insecure resources. |
| SEO | **100** | Title + meta description, robots.txt + sitemap.xml, canonical, OG + Twitter cards, HVACBusiness + FAQPage JSON-LD, mobile viewport, lang declared. |

If a Lighthouse run after deploy comes in lower than 95 on any axis, the most likely culprit is Vercel's automatic security headers (rarely <100 on Best Practices) or a contrast warning on the muted text (~4.6:1 vs the 4.5 minimum, very borderline). Both are trivially fixable in a follow-up.

---

## Note on tooling

The brief asked for `/impeccable critique`, `/impeccable polish`, and `/impeccable audit` passes. That skill is **not present** in this environment's skill registry — I checked. Per the brief's standing instruction ("If you hit a question or ambiguity, make the most defensible choice, document it in DECISIONS.md with reasoning, and continue"), I substituted three rigorous manual passes against the same criteria that an editorial design reviewer would apply. The findings, fixes, and final score above are the result.

If `/impeccable` becomes available in a future session, running it against this build should agree on direction; the only place it might push harder is on the booking form (telling me to actually wire it). It would be right.
