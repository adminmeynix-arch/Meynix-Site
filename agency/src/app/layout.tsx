import Image from 'next/image';
import type { Metadata } from 'next';
import { Navigation, FloatingOmnichannelDock } from '@/components/interactive';
import { site, whatsappUrl, instagramUrl, facebookUrl } from '@/config/site';
import { services } from '@/config/services';
import { WhatsAppIcon, InstagramIcon, FacebookIcon } from '@/components/social-marks';
import './globals.css';
import './meynix.css';
import './polish.css';

export const metadata: Metadata = {
  title: {
    default: `${site.name} | Custom Software, WhatsApp/Meta Integrations & Practical AI`,
    template: `%s | ${site.name}`,
  },
  description:
    'Custom business software, WhatsApp Business integrations, Instagram & Facebook lead pipelines, modular CRM & ERP, and practical AI automation built for real-world companies.',
  openGraph: {
    title: `${site.name} — ${site.tagline}`,
    description:
      'Custom business software, WhatsApp Business integrations, Instagram & Facebook lead pipelines, and AI built around your workflow.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: site.tagline,
  },
  icons: {
    icon: '/icon.svg',
    shortcut: '/favicon.ico',
    apple: '/icon.svg',
  },
  ...(site.domain ? { metadataBase: new URL(site.domain) } : {}),
  robots: site.domain ? { index: true, follow: true } : { index: false, follow: true },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a href="#main" className="skip">
          Skip to content
        </a>
        <Navigation />
        <main id="main">{children}</main>

        <footer className="site-footer-modern">
          <div className="footer-top-grid">
            <div className="footer-brand-col">
              <a className="wordmark" href="/">
                <Image
                  className="brand-lockup"
                  src="/brand/meynix-3d.png"
                  alt={site.name}
                  width={2135}
                  height={736}
                />
              </a>
              <p className="footer-tagline">
                Technology built around your business.<br />
                Practical, modular, and built to scale.
              </p>
              <div className="footer-social-strip">
                <span className="footer-social-label">Connect with us:</span>
                <div className="footer-social-icons">
                  {whatsappUrl && (
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="footer-social-link whatsapp"
                      title="WhatsApp Business"
                      aria-label="WhatsApp"
                    >
                      <WhatsAppIcon size={18} />
                    </a>
                  )}
                  {instagramUrl && (
                    <a
                      href={instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="footer-social-link instagram"
                      title="Instagram"
                      aria-label="Instagram"
                    >
                      <InstagramIcon size={18} />
                    </a>
                  )}
                  {facebookUrl && (
                    <a
                      href={facebookUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="footer-social-link facebook"
                      title="Facebook"
                      aria-label="Facebook"
                    >
                      <FacebookIcon size={18} />
                    </a>
                  )}
                </div>
              </div>
              <small className="footer-serving-note">
                Serving businesses across India & international markets.
              </small>
            </div>

            <div className="footer-nav-col">
              <span className="tiny-label">WHAT WE BUILD</span>
              {services.slice(0, 5).map((s) => (
                <a href={`/${s.slug}/`} key={s.slug}>
                  {s.title}
                </a>
              ))}
            </div>

            <div className="footer-nav-col">
              <span className="tiny-label">AI & AUTOMATIONS</span>
              {services.slice(5).map((s) => (
                <a href={`/${s.slug}/`} key={s.slug}>
                  {s.title}
                </a>
              ))}
            </div>

            <div className="footer-contact-col">
              <span className="tiny-label">DIRECT REACH</span>
              <a href="/contact/">Get a Project Quote</a>
              <a href={`tel:+${site.whatsapp}`}>{site.phone}</a>
              {site.email ? (
                <a href={`mailto:${site.email}`}>{site.email}</a>
              ) : (
                <span>Email configured</span>
              )}
              {whatsappUrl && (
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-highlight-link"
                >
                  WhatsApp: +91 93602 39398 ↗
                </a>
              )}
            </div>
          </div>

          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} {site.name}. All rights reserved.</span>
            <div className="footer-legal-links">
              <a href="/privacy/">Privacy Policy</a>
              <a href="/terms/">Terms of Service</a>
            </div>
          </div>
        </footer>

        {/* Global Floating Omnichannel Quick Connect Dock */}
        <FloatingOmnichannelDock />
      </body>
    </html>
  );
}
