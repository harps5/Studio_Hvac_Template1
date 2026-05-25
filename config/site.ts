/**
 * SITE CONFIG — single source of truth for all client-specific content.
 *
 * Swapping this template to a new HVAC client should require editing
 * ONLY this file (plus replacing /public/hero.jpg, /public/favicon.svg,
 * and the wordmark text in /public/og.svg).
 *
 * See /config/README.md for the schema and a 30-minute swap checklist.
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
  step: string;
  title: string;
  body: string;
};

export type Testimonial = {
  quote: string;
  author: string;
  location: string;
  service?: string;
  rating: number;
};

export type FAQItem = {
  question: string;
  answer: string;
};

export type TrustSignal = {
  label: string;
  detail?: string;
};

export type SiteConfig = {
  business: {
    name: string;
    legalName: string;
    wordmark: string;
    tagline: string;
    founded?: number;
  };
  contact: {
    phone: string;
    phoneTel: string;
    email: string;
    address?: {
      street?: string;
      city: string;
      region: string;
      postal?: string;
      country: string;
    };
  };
  hours: {
    weekday: string;
    saturday?: string;
    sunday?: string;
    emergency: string;
  };
  serviceArea: ServiceArea[];
  services: Service[];
  differentiators: Differentiator[];
  process: ProcessStep[];
  pricing: {
    diagnosticFee: string;
    diagnosticNote: string;
    financingHeadline: string;
    financingDetail: string;
  };
  trustSignals: TrustSignal[];
  testimonials: Testimonial[];
  reviews: {
    rating: number;
    count: number;
    platform: string;
  };
  faq: FAQItem[];
  social?: {
    google?: string;
    facebook?: string;
    instagram?: string;
  };
  seo: {
    title: string;
    description: string;
    url: string;
    ogTitle?: string;
    ogDescription?: string;
  };
};

// ─────────────────────────────────────────────────────────────────────────────
//  COULEE HVAC — placeholder demo content for Lethbridge, AB
//  Tone: direct, plain-spoken. No "discerning homeowners." No "curated comfort."
// ─────────────────────────────────────────────────────────────────────────────

export const siteConfig: SiteConfig = {
  business: {
    name: "Coulee HVAC",
    legalName: "Coulee HVAC Ltd.",
    wordmark: "Coulee HVAC",
    tagline:
      "Heating, cooling, and hot water for Lethbridge homes. Done right, priced up front.",
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
      summary: "High-efficiency furnaces sized for Lethbridge winters.",
      detail:
        "We install and service gas furnaces from 80% to 98% efficient. Every install gets a heat-loss calculation and a combustion check — not a sticker on the side of the cabinet.",
      inclusions: [
        "Heat-loss calculation on every install",
        "Combustion check on every install",
        "10-year parts, 2-year labour warranty",
        "Old equipment removed and disposed",
      ],
    },
    {
      slug: "ac",
      index: "02",
      title: "Central air conditioning",
      summary: "Quiet AC that keeps up with 35°C July afternoons.",
      detail:
        "Single-stage, two-stage, or variable speed — sized to your home, not whatever's on the truck. We verify airflow after install and walk you through the thermostat before we leave.",
      inclusions: [
        "Sized by manual calculation",
        "Airflow verified after install",
        "Refrigerant lines flushed on retrofits",
        "Smart thermostat included",
      ],
    },
    {
      slug: "heat-pump",
      index: "03",
      title: "Heat pump installation",
      summary: "Cold-climate heat pumps that work down to -30°C. We file the rebates.",
      detail:
        "Cold-climate heat pumps now make sense for Southern Alberta. We design dual-fuel systems with your existing furnace as backup — and we file the federal and provincial rebate paperwork for you.",
      inclusions: [
        "Cold-climate rated equipment only",
        "Dual-fuel changeover design",
        "Rebate paperwork filed for you",
        "12-year compressor warranty",
      ],
    },
    {
      slug: "tankless",
      index: "04",
      title: "Tankless water heaters",
      summary: "Endless hot water. Lower gas bill. No standby loss.",
      detail:
        "Condensing tankless units with properly sized gas lines and venting. We pull permits, do the gas upgrade if needed, and commission the unit to manufacturer spec.",
      inclusions: [
        "Gas line resized where required",
        "Permits pulled and closed",
        "Hard-water bypass valves",
        "15-year heat exchanger warranty",
      ],
    },
    {
      slug: "iaq",
      index: "05",
      title: "Indoor air quality",
      summary: "HRV, ERV, and filtration for newer, tighter homes.",
      detail:
        "Tight houses need real ventilation. We install HRV and ERV systems with dedicated ducts, balance them on commissioning, and pair them with MERV-13 filters that don't kill your airflow.",
      inclusions: [
        "Dedicated HRV/ERV ducting",
        "Balanced and commissioned on install",
        "MERV-13 media filtration",
        "Annual core-cleaning reminder",
      ],
    },
    {
      slug: "emergency",
      index: "06",
      title: "24/7 emergency service",
      summary: "Same techs who installed it. Picking up the phone at 2am.",
      detail:
        "Call the after-hours line and you get a real Coulee tech — not a call centre. We carry stock for every furnace we've installed in the last ten years, so most no-heat calls are fixed on the first visit.",
      inclusions: [
        "Live tech dispatch — no call centre",
        "Most repairs fixed first visit",
        "Stocked parts for 10+ years of installs",
        "After-hours surcharge is posted, never a surprise",
      ],
    },
  ],

  differentiators: [
    {
      title: "Pricing on the page",
      body:
        "Diagnostic fee, financing terms, after-hours surcharge — all posted. You get a written quote before any work begins, and we honour it.",
    },
    {
      title: "Red Seal techs only",
      body:
        "Every tech on a Coulee truck is a Red Seal certified gasfitter or refrigeration mechanic. No apprentices sent out solo, ever.",
    },
    {
      title: "Same-day service, most days",
      body:
        "Call before 10am on a weekday and we're at your door before 5pm. If we can't be, we tell you when we book — not when we cancel.",
    },
    {
      title: "Warranties in plain English",
      body:
        "Two pages, not twenty. What's covered, what's not, who pays for what — laid out before you sign.",
    },
  ],

  process: [
    {
      step: "01",
      title: "Book",
      body: "Call or book online. Most appointments confirmed within an hour.",
    },
    {
      step: "02",
      title: "Diagnose",
      body: "Red Seal tech arrives in the window you booked. $129 diagnostic, waived with any repair.",
    },
    {
      step: "03",
      title: "Quote",
      body: "Written quote, line-by-line. Options where they exist. No upsell pressure.",
    },
    {
      step: "04",
      title: "Done",
      body: "Work completed, area cleaned, walkthrough done. Warranty in your inbox before we leave.",
    },
  ],

  pricing: {
    diagnosticFee: "$129",
    diagnosticNote: "Waived with any repair, big or small.",
    financingHeadline: "0% financing for 12 months",
    financingDetail: "On approved credit, via Financeit. Most installs approved the same day.",
  },

  trustSignals: [
    { label: "Red Seal Certified", detail: "Every tech, every truck" },
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
        "We got three quotes for a heat pump. Two were vague, one was honest. Coulee walked us through the dual-fuel design, filed the rebates, and the system has paid for itself faster than they said it would.",
      author: "David & Erin K.",
      location: "Coaldale, AB",
      service: "Heat pump installation",
      rating: 5,
    },
    {
      quote:
        "After years of dust and dry winters, the HRV they put in changed how the house feels. Quiet, balanced, no surprises on the invoice. They explain what they're doing and they clean up after themselves.",
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
        "Our diagnostic fee is $129. It includes a full inspection plus a written estimate. If you go ahead with the repair, the diagnostic fee is waived in full.",
    },
    {
      question: "How fast can you respond to a no-heat call?",
      answer:
        "After-hours calls go to a live Coulee tech, not a call centre. In Lethbridge we average a 90-minute on-site response for no-heat after-hours calls. Outlying communities add 30–60 minutes.",
    },
    {
      question: "What warranties do you offer on installs?",
      answer:
        "Furnaces: 10-year parts, 2-year labour. AC: 10-year parts, 2-year labour. Heat pumps: 12-year compressor, 10-year parts, 2-year labour. Tankless: 15-year heat exchanger. All on a two-page document, in plain English.",
    },
    {
      question: "Do you offer financing?",
      answer:
        "Yes — 0% for 12 months on approved credit via Financeit. We can approve most installs the same day. Longer-term financing (60–120 months) is also available.",
    },
    {
      question: "What's your service area?",
      answer:
        "Lethbridge, Coaldale, Taber, Fort Macleod, Picture Butte, and Raymond. Outside that radius, give us a call — we routinely travel further for installs and can usually accommodate.",
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
    ogTitle: "Coulee HVAC — Heating and cooling, done right",
    ogDescription:
      "Furnace, AC, heat pump, and hot water work for Lethbridge homes. Same-day service. Written warranties. 0% financing.",
  },
};
