import type { Metadata, Viewport } from "next";
import { Fraunces, Inter_Tight } from "next/font/google";
import { siteConfig } from "@/config/site";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
  axes: ["opsz", "SOFT"],
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.seo.url),
  title: {
    default: siteConfig.seo.title,
    template: `%s — ${siteConfig.business.name}`,
  },
  description: siteConfig.seo.description,
  applicationName: siteConfig.business.name,
  authors: [{ name: siteConfig.business.legalName }],
  keywords: [
    "HVAC Lethbridge",
    "furnace repair Lethbridge",
    "AC installation Southern Alberta",
    "heat pump Lethbridge",
    "tankless water heater",
    "24/7 emergency furnace",
  ],
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: siteConfig.seo.url,
    title: siteConfig.seo.ogTitle ?? siteConfig.seo.title,
    description: siteConfig.seo.ogDescription ?? siteConfig.seo.description,
    siteName: siteConfig.business.name,
    images: [{ url: "/og.svg", width: 1200, height: 630, alt: siteConfig.business.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.seo.ogTitle ?? siteConfig.seo.title,
    description: siteConfig.seo.ogDescription ?? siteConfig.seo.description,
    images: ["/og.svg"],
  },
  alternates: { canonical: siteConfig.seo.url },
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#F4F0EA",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HVACBusiness",
  "name": siteConfig.business.name,
  "telephone": siteConfig.contact.phone,
  "email": siteConfig.contact.email,
  "url": siteConfig.seo.url,
  "address": {
    "@type": "PostalAddress",
    "addressLocality": siteConfig.contact.address?.city,
    "addressRegion": siteConfig.contact.address?.region,
    "addressCountry": siteConfig.contact.address?.country,
  },
  "areaServed": siteConfig.serviceArea.map((a) => a.name),
  "openingHours": [
    "Mo-Fr 07:00-19:00",
    "Sa 08:00-16:00",
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": siteConfig.reviews.rating,
    "reviewCount": siteConfig.reviews.count,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${interTight.variable}`}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-surface"
        >
          Skip to content
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
