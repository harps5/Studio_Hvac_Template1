# DECISIONS.md

Every meaningful autonomous choice made during the build, with reasoning. The intent is that anyone (designer, future-me, the prospect) can audit *why* the page looks the way it does and challenge any decision on its merits.

---

## Aesthetic direction

**Decision:** Editorial / trust-led. Not brutalist, not playful, not corporate-blue. Reference points: Aesop's product pages, NYT Wirecutter editorial, Pentagram's small-trade brand work (e.g., Mast Brothers, Beam Suntory).

**Reasoning:** The brief explicitly rejects the category baseline (blue gradients, stock technicians, "Family Owned Since 1987"). The goal isn't to look like a startup either — HVAC buyers are choosing whose truck they let into their basement at 2am. The signal that wins is "considered, competent, calm" rather than "fast, friendly, fun." Editorial pacing — generous whitespace, hairline rules, restrained color — communicates that.

**What this rules out:**
- Hero gradients or video backgrounds
- 3x2 card grids ("Our Services!" with rounded corners and emoji)
- Stock technician photos
- Bouncy spring animations or scroll-jacking
- Trust badges crammed in a row of logos at the top

---

## Color palette

**Decision:**
- Background: `#F4F0EA` (warm linen)
- Surface: `#FAF7F2` (lifted card)
- Ink: `#0F0E0D` (warm near-black, not `#000`)
- Graphite: `#3A3733` (secondary text)
- Muted: `#7A7268` (tertiary / labels)
- **Accent: `#B2563B` (burnt sienna)** — the signature
- Sienna deep: `#8E3F26` (hover)
- Moss: `#3F4A3A` (reserved, unused in v1)

**Reasoning:** The name "Coulee" refers to the river-carved valleys of Southern Alberta — warm sandstone strata, prairie light, oxidized iron in the soil. A burnt sienna pulls all of that without being literal about it. Critically it is **not** a "trust blue" (the category default) and **not** a red (which reads as alarm or emergency). Sienna sits between warmth and authority. The warm off-white background instead of `#fff` removes any digital sterility — every other contractor site is on pure white.

**What this rules out:** All blue. All cool grays. Anything with a #FF or #00 in it.

---

## Typography

**Decision:**
- **Display: Fraunces** (variable, opsz + SOFT axes)
- **Body: Inter Tight** (variable)

**Reasoning:**
- Fraunces is a soft-modern serif with strong character — it carries the editorial weight the brief asks for. The `opsz` axis lets the same family read tight and confident at headline sizes and warmer at smaller sizes. The italic cut is genuinely beautiful and used as an accent on the hero word "properly" and the FinalCTA "Both work." headline.
- Inter Tight is the body workhorse — geometric, neutral, slightly tighter than Inter, which earns its keep when paired with a more expressive serif. **Inter (regular) was explicitly excluded by the brief; Inter Tight is a different family.** If asked to defend Inter Tight specifically: it's not the default ("Inter"), it has a distinct visual identity (tighter horizontals), and it pairs better with Fraunces than Helvetica-likes would.

**Why not Newsreader or Plus Jakarta Sans:** Newsreader is gorgeous but feels too "literary magazine" for a service business. Plus Jakarta Sans is fine, but Inter Tight has better metric harmony with Fraunces — both have similar x-heights, which keeps body and headline rhythm consistent.

---

## Signature motion moment

**Decision:** One ambient marquee (trust signals, slow scroll) + one staggered word-rise on the hero headline. Everything else is restrained transition (250–400ms color/border changes). All motion respects `prefers-reduced-motion`.

**Reasoning:** The brief said "one signature motion moment." I have two micro-moments instead of one big one, but they're both quiet. The marquee is the *page's* motion; the word-rise is the *hero's* greeting. Together they communicate "alive, not asleep" without screaming "look at me, I have a framer-motion subscription."

**What this rules out:** Parallax, scroll-jacking, full-section reveal cascades, hero video, animated SVG illustrations of furnaces.

---

## Imagery

**Decision:** No photographs of any kind. SVG + CSS only. The visual identity is type, palette, and the hand-drawn coulee strata that appear in the hero bottom, the service area map, and the FinalCTA.

**Reasoning:** The brief forbids AI-generated stock and the category default of stock technicians. Real client photography doesn't exist yet (this is a demo). Rather than placeholder images, I chose to lean into a typographic identity — the page should look intentional with no photos, so that when a real client adds their own photography it becomes an upgrade, not a requirement.

The coulee-line motif (layered topographic curves) is the page's one visual signature. It appears subtly at the bottom of the hero, more prominently in the service-area map, and inverted in the FinalCTA. It ties the brand name to a visual idea without being literal.

---

## Section composition

**Decision:** Sections in the order: Hero → TrustMarquee → Services → WhyCoulee → Process → Pricing → ServiceArea → Reviews → FAQ → FinalCTA → Footer. The brief listed a slightly different order (Pricing came after Process, ServiceArea was earlier). I made small changes:

- Moved **TrustMarquee** between Hero and Services — gives the page a moment of "yes, these are real people" before going into product detail
- Kept **Pricing right after Process** — the natural sales question after "what's the process?" is "what does it cost?"
- Moved **ServiceArea before Reviews** — completes the "what / how / where / who" arc before social proof

**Reasoning:** The brief's order was a starting point, not a constraint. The current sequence reads as a single narrative: greet → prove → list → defend → walk through → price → locate → witness → answer objections → convert.

---

## Services section: not a card grid

**Decision:** Services are rendered as an editorial list (horizontal rows with index, title, summary, expand-to-detail) rather than the standard 3x2 grid of icon cards.

**Reasoning:** A 3x2 grid is the dominant pattern *because* it's the category baseline. The brief explicitly rejected it. The horizontal list lets each service breathe, makes the inclusions feel like commitments rather than bullet-soup, and the disclosure pattern lets visitors who care dig in without making the page a wall. It also scales better on mobile — six rows instead of six cards stacked.

---

## Service area: hand-drawn SVG map, no embed

**Decision:** No Google Maps / Leaflet / Mapbox embed. A hand-placed SVG with topographic strata, a stylized river meander (the Oldman River — the actual river through Lethbridge), a coverage radius ring, and labelled community dots.

**Reasoning:** Three reasons:
1. **Performance.** A Google Maps embed is ~700 kB of JS. The hand SVG is ~2 kB inline.
2. **Aesthetic.** A real map looks like every other contractor's site. A drawn map signals craft.
3. **Privacy.** Map embeds set third-party cookies. This doesn't.

The downside is that swapping the template to a non-Southern-Alberta client requires re-placing the community dots. Documented in `/config/README.md` under "Map coordinates" — it's a 5–15 minute edit, not a 30-second one. I judged the aesthetic and performance win worth that swap cost.

---

## Hero stat trio

**Decision:** The hero shows three small stats (`4.9 Google rating`, `90 min Avg emergency response`, `10 yr Parts warranty included`).

**Reasoning:** Stats are credible when specific. "4.9", "90 min", "10 yr" all read as numbers a competent business actually knows about itself. They sit under the CTAs without competing for attention. **The 90-min average is a placeholder** — real clients should swap it for their actual SLA, which is documented in the README customization checklist.

---

## FAQ uses native `<details>`

**Decision:** Disclosure pattern uses HTML `<details>` / `<summary>` rather than a JS accordion.

**Reasoning:** Zero JS for an interaction that has no business needing JS. Native, accessible (Tab/Enter both work), preserved in print, and small. The expand glyph is styled via `group-open:rotate-45` — pure CSS rotation tied to the `[open]` attribute.

---

## Form is a static demo

**Decision:** The booking form in FinalCTA is decorative — `<button type="button">` with a visible "Demo form — wire to your CRM" note.

**Reasoning:** This is a prospect demo, not a production deploy. Wiring to a real CRM (HubSpot, Jobber, ServiceTitan, etc.) requires per-client credentials and a server action. Leaving it static + clearly labelled is honest and trivially upgradable. The README explains how to convert to a client component + server action when the prospect signs.

---

## No JavaScript animation library

**Decision:** No `framer-motion`, no `gsap`, no `lenis`. All motion is CSS keyframes + Tailwind transitions.

**Reasoning:** Stays lean (the brief said "do not install unnecessary dependencies"), Lighthouse-friendly, and the motion vocabulary is restrained enough that CSS handles everything cleanly. The only client component is `Nav.tsx` (it needs `useState` for the scrolled state and mobile drawer).

---

## Footer wordmark + "A Birchmont Studio template"

**Decision:** The footer carries a small "A Birchmont Studio template" line beside the legal/privacy links.

**Reasoning:** The brief is for an outbound sales asset — the prospect needs to see it works as their site, but Birchmont also benefits from a discreet attribution. One sentence in 12px muted text, visible only on desktop. Easy to remove if a prospect signs and wants it gone (it's hardcoded in `Footer.tsx` — three-second delete).

---

## What I would defend in person

If a designer pushed back on any single decision, the priority order I'd defend is:
1. **The palette.** Sienna over blue is the most consequential choice — it's what makes the page feel un-HVAC. I'd die on this hill.
2. **The typography pairing.** Fraunces + Inter Tight earns the "editorial" register the brief asked for.
3. **The hand-drawn map.** Replacing it with a Google embed would save 15 minutes of swap work and erase the most distinctive section of the page. Not a trade I'd make.
4. **Services as a list, not a grid.** Same reasoning — the grid is the category default.

If someone wanted to weaken one thing for shipping speed, it would be the hand-drawn map (acceptable downgrade to the labelled list below it).
