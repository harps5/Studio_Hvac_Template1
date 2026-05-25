import { siteConfig } from "@/config/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-linen border-t border-rule/10">
      <div className="container-page py-14 md:py-16">
        <div className="grid grid-cols-12 gap-10">
          {/* Brand */}
          <div className="col-span-12 md:col-span-4">
            <div className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-ink">
              {siteConfig.business.wordmark}
            </div>
            <p className="mt-4 max-w-xs text-graphite leading-relaxed">
              {siteConfig.business.tagline}
            </p>
            <div className="mt-5 flex flex-col gap-1 text-sm text-graphite">
              <a href={`tel:${siteConfig.contact.phoneTel}`} className="hover:text-sienna transition-colors">
                {siteConfig.contact.phone}
              </a>
              <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-sienna transition-colors">
                {siteConfig.contact.email}
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="col-span-6 md:col-span-2">
            <h3 className="label-meta">Services</h3>
            <ul className="mt-4 space-y-2 text-sm text-graphite">
              {siteConfig.services.map((s) => (
                <li key={s.slug}>
                  <a href={`#${s.slug}`} className="hover:text-ink transition-colors">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service area */}
          <div className="col-span-6 md:col-span-2">
            <h3 className="label-meta">Service area</h3>
            <ul className="mt-4 space-y-2 text-sm text-graphite">
              {siteConfig.serviceArea.map((a) => (
                <li key={a.name}>{a.name}</li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div className="col-span-6 md:col-span-2">
            <h3 className="label-meta">Hours</h3>
            <ul className="mt-4 space-y-2 text-sm text-graphite">
              <li>{siteConfig.hours.weekday}</li>
              {siteConfig.hours.saturday && <li>{siteConfig.hours.saturday}</li>}
              {siteConfig.hours.sunday && <li>{siteConfig.hours.sunday}</li>}
              <li className="text-sienna pt-2">{siteConfig.hours.emergency}</li>
            </ul>
          </div>

          {/* Social */}
          <div className="col-span-6 md:col-span-2">
            <h3 className="label-meta">Follow</h3>
            <ul className="mt-4 space-y-2 text-sm text-graphite">
              {siteConfig.social?.google && (
                <li><a href={siteConfig.social.google} className="hover:text-ink transition-colors">Google</a></li>
              )}
              {siteConfig.social?.facebook && (
                <li><a href={siteConfig.social.facebook} className="hover:text-ink transition-colors">Facebook</a></li>
              )}
              {siteConfig.social?.instagram && (
                <li><a href={siteConfig.social.instagram} className="hover:text-ink transition-colors">Instagram</a></li>
              )}
            </ul>
          </div>
        </div>

        <hr className="my-10" />

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-xs text-muted">
          <p>
            &copy; {year} {siteConfig.business.legalName}. All rights reserved.
            {siteConfig.contact.address && (
              <> · {siteConfig.contact.address.city}, {siteConfig.contact.address.region}, {siteConfig.contact.address.country}</>
            )}
          </p>
          <p className="flex items-center gap-3">
            <a href="/privacy" className="hover:text-ink transition-colors">Privacy</a>
            <span aria-hidden>·</span>
            <a href="/terms" className="hover:text-ink transition-colors">Terms</a>
            <span aria-hidden className="hidden md:inline">·</span>
            <span className="hidden md:inline">A Birchmont Studio template</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
