/**
 * SITE CONFIG — single source of truth for all client-specific content.
 *
 * Swapping this template to a new HVAC client should require editing
 * ONLY this file (and replacing /public/og.svg + favicon if you want
 * the wordmark to match). All page sections read from siteConfig.
 *
 * See /config/README.md for the full schema and a 30-minute swap checklist.
 */

export type ServiceArea = {
  name: string;
  /** Optional: distance in km from primary city, used to subtly order/group */
  distanceKm?: number;
};

export type Service = {
  /** Short slug, used as anchor + key */
  slug: string;
  /** Display title — keep to 2–4 words */
  title: string;
  /** One-line promise; appears under the title */
  summary: string;
  /** Longer paragraph used in expanded views; 1–3 sentences */
  detail: string;
  /** 3–5 deliverables shown as a checklist */
  inclusions: string[];
  /** Editorial number — "01", "02", … used as ornament */
  index: string;
};

export type Differentiator = {
  title: string;
  body: string;
};

export type ProcessStep = {
  step: string;       // "01"
  title: string;      // "Book"
  body: string;       // one-sentence description
};

export type Testimonial = {
  quote: string;
  author: string;
  /** e.g., "Lethbridge, AB" */
  location: string;
  /** Service performed — optional context */
  service?: string;
  /** 1–5 */
  rating: number;
};

export type FAQItem = {
  question: string;
  answer: string;
};

export type TrustSignal = {
  label: string;
  /** Optional: tooltip or subtitle */
  detail?: string;
};

export type SiteConfig = {
  /** Brand */
  business: {
    name: string;
    /** Short legal name for footer / structured data */
    legalName: string;
    /** Wordmark text — usually same as name, but separable for stylization */
    wordmark: string;
    /** Tagline used in hero microcopy + OG */
    tagline: string;
    /** Year founded — used in trust microcopy only if you opt in */
    founded?: number;
  };

  /** Contact */
  contact: {
    phone: string;          // display format, e.g. "(403) 555-0100"
    phoneTel: string;       // tel: format, e.g. "+14035550100"
    email: string;
    /** Optional physical address block */
    address?: {
      street?: string;
      city: string;
      region: string;       // "AB"
      postal?: string;
      country: string;      // "Canada"
    };
  };

  /** Hours of operation — used in nav, footer, structured data */
  hours: {
    weekday: string;        // e.g. "Mon–Fri, 7am–7pm"
    saturday?: string;      // e.g. "Sat, 8am–4pm"
    sunday?: string;        // omit if closed
    emergency: string;      // e.g. "24/7 emergency service"
  };

  /** Communities served — order matters (primary city first) */
  serviceArea: ServiceArea[];

  /** Service catalog — exactly 6 recommended for the grid */
  services: Service[];

  /** "Why us" cards — exactly 4 recommended */
  differentiators: Differentiator[];

  /** Process steps — exactly 4 recommended */
  process: ProcessStep[];

  /** Pricing transparency block */
  pricing: {
    diagnosticFee: string;       // e.g. "$129"
    diagnosticNote: string;      // e.g. "Waived with any repair."
    financingHeadline: string;   // e.g. "0% financing for 12 months"
    financingDetail: string;     // e.g. "OAC, via Financeit."
  };

  /** Trust marquee — certifications & memberships */
  trustSignals: TrustSignal[];

  /** Featured testimonials — 3 recommended */
  testimonials: Testimonial[];

  /** Aggregate review badge — placeholder is fine for a demo */
  reviews: {
    rating: number;        // 4.9
    count: number;         // 500
    platform: string;      // "Google"
  };

  /** FAQ — 6 questions recommended */
  faq: FAQItem[];

  /** Social links — optional; omit any that don't apply */
  social?: {
    google?: string;
    facebook?: string;
    instagram?: string;
  };

  /** SEO */
  seo: {
    /** <title> for the landing page */
    title: string;
    /** <meta description> */
    description: string;
    /** Canonical URL (no trailing slash) */
    url: string;
    /** Used by OG/Twitter cards if no image override */
    ogTitle?: string;
    ogDescription?: string;
  };
};

// ─────────────────────────────────────────────────────────────────────────────
//  COULEE HVAC — placeholder demo content for Lethbridge, AB
// ─────────────────────────────────────────────────────────────────────────────

export const siteConfig: SiteConfig = {
  business: {
    name: "Coulee HVAC",
    legalName: "Coulee HVAC Ltd.",
    wordmark: "Coulee",
    tagline:
      "Heating, cooling, and indoor air for Southern Alberta — done properly, priced clearly.",
    founded: 2009,
  },

  contact: {
    phone: "(403) 555-0100",
    phoneTel: "+14035550100",
    email: "service@couleehvac.ca",
    address: {
      city: "Lethbridge",
      region: "AB",
      country: "Canada",
    },
  },

  hours: {
    weekday: "Mon–Fri, 7am–7pm",
    saturday: "Sat, 8am–4pm",
    emergency: "24/7 emergency service",
  },

  serviceArea: [
    { name: "Lethbridge", distanceKm: 0 },
    { name: "Coaldale", distanceKm: 15 },
    { name: "Picture Butte", distanceKm: 28 },
    { name: "Taber", distanceKm: 50 },
    { name: "Raymond", distanceKm: 32 },
    { name: "Fort Macleod", distanceKm: 50 },
  ],

  services: [
    {
      slug: "furnace",
      index: "01",
      title: "Furnace install & repair",
      summary: "High-efficiency furnaces, sized and installed for Lethbridge winters.",
      detail:
        "We replace and service gas furnaces from 80% to 98% AFUE. Every install includes load calculation, combustion analysis, and a written commissioning report — not a sticker on the side.",
      inclusions: [
        "Manual J load calculation",
        "Combustion analysis on every install",
        "10-year parts, 2-year labour warranty",
        "Old equipment removal included",
      ],
    },
    {
      slug: "ac",
      index: "02",
      title: "Central air conditioning",
      summary: "Quiet, right-sized AC that keeps up with 35°C July afternoons.",
      detail:
        "Single-stage, two-stage, or inverter-driven systems matched to your home — not whatever's on the truck. We size with Manual J and verify airflow after install.",
      inclusions: [
        "Manual J + Manual D sizing",
        "Airflow verification post-install",
        "Refrigerant line flush on retrofits",
        "Smart thermostat included",
      ],
    },
    {
      slug: "heat-pump",
      index: "03",
      title: "Heat pump installation",
      summary: "Cold-climate heat pumps that work at –30°C. Rebates handled.",
      detail:
        "Cold-climate heat pumps are now viable in Southern Alberta. We design dual-fuel systems with your existing furnace as backup, and we file the federal and provincial rebate paperwork for you.",
      inclusions: [
        "Cold-climate rated equipment only",
        "Dual-fuel changeover design",
        "Rebate paperwork filed on your behalf",
        "12-year compressor warranty",
      ],
    },
    {
      slug: "tankless",
      index: "04",
      title: "Tankless water heaters",
      summary: "Endless hot water, half the gas, none of the standby loss.",
      detail:
        "Condensing tankless units with proper gas line sizing and venting. We pull permits, do the gas upgrade if needed, and commission the unit to manufacturer spec.",
      inclusions: [
        "Gas line resize where required",
        "Permits pulled and closed",
        "Hard-water bypass valves",
        "15-year heat exchanger warranty",
      ],
    },
    {
      slug: "iaq",
      index: "05",
      title: "Indoor air quality",
      summary: "HRV, ERV, media filtration — for new builds and tightened-up retrofits.",
      detail:
        "Tight houses need ventilation. We design HRV and ERV systems with dedicated ducting, balance them on commissioning, and pair them with MERV-13 media filtration that doesn't choke your furnace.",
      inclusions: [
        "HRV/ERV with dedicated ducting",
        "Balanced and commissioned on install",
        "MERV-13 media filtration",
        "Annual core cleaning reminder",
      ],
    },
    {
      slug: "emergency",
      index: "06",
      title: "24/7 emergency service",
      summary: "Same technicians who installed it. Answering the phone at 2am.",
      detail:
        "No-heat calls are answered by a Coulee technician — not a call centre. We carry inventory for every furnace we've installed in the last decade, so most no-heat calls are resolved on the first visit.",
      inclusions: [
        "Live tech dispatch, no call centre",
        "Most repairs resolved first visit",
        "Stocked parts for 10+ years of installs",
        "Flat after-hours surcharge, posted",
      ],
    },
  ],

  differentiators: [
    {
      title: "Pricing on the page",
      body:
        "The diagnostic fee is posted. The financing terms are posted. The trip charge is posted. We send a written estimate before any work begins — and we honour it.",
    },
    {
      title: "Red Seal technicians only",
      body:
        "Every technician on a Coulee truck is a Red Seal certified gasfitter or refrigeration mechanic. No apprentices sent solo, ever.",
    },
    {
      title: "Same-day service, most days",
      body:
        "Call before 10am on a weekday and we will be at your door before 5pm. If we can't, we will tell you when we book — not when we cancel.",
    },
    {
      title: "Written warranties, in plain English",
      body:
        "Two pages, not twenty. What's covered, what's not, who pays for what — laid out before you sign.",
    },
  ],

  process: [
    {
      step: "01",
      title: "Book",
      body: "Call or book online. Most appointments confirmed within the hour.",
    },
    {
      step: "02",
      title: "Diagnose",
      body: "A Red Seal tech arrives in the window quoted. Diagnostic fee is $129, waived with any repair.",
    },
    {
      step: "03",
      title: "Quote",
      body: "Written, itemized estimate. Options where they exist. No upsell theatre.",
    },
    {
      step: "04",
      title: "Complete",
      body: "Work performed, area cleaned, walkthrough done. Warranty in your inbox before we leave.",
    },
  ],

  pricing: {
    diagnosticFee: "$129",
    diagnosticNote: "Waived with any repair, big or small.",
    financingHeadline: "0% financing for 12 months",
    financingDetail: "On approved credit, via Financeit. Most installs qualify same-day.",
  },

  trustSignals: [
    { label: "Red Seal Certified", detail: "Every technician on every truck" },
    { label: "Lennox Premier Dealer", detail: "Top 1% of independent dealers" },
    { label: "TECA Member", detail: "Thermal Environmental Comfort Association" },
    { label: "BBB A+", detail: "Better Business Bureau accredited" },
    { label: "500+ Google reviews", detail: "4.9 average rating" },
  ],

  testimonials: [
    {
      quote:
        "Furnace died at 6am in February. They had a tech here by 9, a new high-efficiency unit installed by suppertime, and the price was exactly what they quoted on the phone. Nobody else even returned my call.",
      author: "Sarah M.",
      location: "Lethbridge, AB",
      service: "Furnace replacement",
      rating: 5,
    },
    {
      quote:
        "We got three quotes for a heat pump. Two were vague, one was honest. Coulee walked us through the dual-fuel design, filed the rebate paperwork, and the system has paid for itself faster than they said it would.",
      author: "David & Erin K.",
      location: "Coaldale, AB",
      service: "Heat pump installation",
      rating: 5,
    },
    {
      quote:
        "After years of dust and dry winters, the HRV they put in changed how the house feels. Quiet, balanced, no surprises on the invoice. This is how a trade should operate.",
      author: "Marlene T.",
      location: "Taber, AB",
      service: "HRV installation",
      rating: 5,
    },
  ],

  reviews: {
    rating: 4.9,
    count: 500,
    platform: "Google",
  },

  faq: [
    {
      question: "How much does a service call cost?",
      answer:
        "Our diagnostic fee is $129 and includes a full inspection plus a written estimate. If you proceed with the repair, the diagnostic fee is waived in full.",
    },
    {
      question: "How fast can you respond to a no-heat call?",
      answer:
        "Emergency calls go to a live Coulee technician, not a call centre. In Lethbridge we average a 90-minute on-site response for no-heat after-hours calls. Outlying communities add 30–60 minutes.",
    },
    {
      question: "What warranties do you offer on installs?",
      answer:
        "Furnaces: 10-year parts, 2-year labour. Air conditioners: 10-year parts, 2-year labour. Heat pumps: 12-year compressor, 10-year parts, 2-year labour. Tankless: 15-year heat exchanger. All in plain English on a two-page document.",
    },
    {
      question: "Do you offer financing?",
      answer:
        "Yes — 0% for 12 months on approved credit via Financeit. We can approve most installs the same day. Longer-term financing (60–120 months) is also available.",
    },
    {
      question: "What's your service area?",
      answer:
        "Lethbridge, Coaldale, Taber, Fort Macleod, Picture Butte, and Raymond. If you're outside that radius, call us — we routinely travel farther for installs and can usually accommodate.",
    },
    {
      question: "Which brands do you service?",
      answer:
        "We install Lennox primarily, with Bosch heat pumps and Navien tankless. We service all major brands — Carrier, Trane, Goodman, Rheem, Bryant, York, Daikin, Mitsubishi, and others. If it's in your house, we can work on it.",
    },
  ],

  social: {
    google: "https://google.com/maps",
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
  },

  seo: {
    title: "Coulee HVAC — Furnaces, AC & Heat Pumps in Lethbridge, AB",
    description:
      "Red Seal certified HVAC service in Lethbridge, Coaldale, Taber, Fort Macleod, Picture Butte, and Raymond. Transparent pricing, written warranties, 24/7 emergency service.",
    url: "https://couleehvac.ca",
    ogTitle: "Coulee HVAC — Done properly, priced clearly",
    ogDescription:
      "Furnace, AC, heat pump, and indoor air quality work for Southern Alberta. Same-day service. Written warranties. 0% financing.",
  },
};
