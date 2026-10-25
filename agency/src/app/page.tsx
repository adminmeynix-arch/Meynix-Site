import {
  BusinessFlow,
  StartingPoints,
  SocialConnections,
  ClaudeSection,
} from '@/components/brand-experience';
import {
  ArrowUpRight,
  ArrowRight,
  Check,
  Zap,
  Sparkles,
} from 'lucide-react';
import { Process, CTA } from '@/components/sections';
import { Showcase } from '@/components/interactive';
import { industries } from '@/config/services';
import { site, whatsappUrl } from '@/config/site';
import { WhatsAppIcon } from '@/components/social-marks';

export const metadata = {
  title: 'Meynix | Custom Software, WhatsApp Integrations & Practical AI for Business',
  description:
    'Custom software, WhatsApp Business integrations, Instagram & Facebook lead pipelines, modular CRM & ERP, and intelligent AI automation built for real-world companies.',
  alternates: site.domain ? { canonical: site.domain } : undefined,
};

export default function Home() {
  return (
    <>
      {/* High-Impact Hero Section */}
      <section className="hero-modern">
        <div className="hero-content">
          <div className="hero-pill-badge">
            <span className="dot-pulse" />
            <span>MEYNIX // CUSTOM BUSINESS SOFTWARE & PRACTICAL AI</span>
          </div>

          <h1>
            Your business.<br />
            Your customers.<br />
            <em>Software that actually fits.</em>
          </h1>

          <p className="hero-lead">
            Stop losing leads across scattered WhatsApp chats, messy Excel spreadsheets, and expensive off-the-shelf software. We build unified custom applications, CRM, ERP, and AI integrations that work the way your team does.
          </p>

          <p className="hero-subtext">
            Practical, modular, and built without paying for bloated features or per-user monthly licensing fees.
          </p>

          <div className="hero-actions-group">
            <a className="button hero-primary-btn" href="/contact/">
              <span>Start Your Solution</span>
              <ArrowUpRight size={18} />
            </a>

            {whatsappUrl && (
              <a
                className="button hero-whatsapp-btn"
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon size={18} />
                <span>Chat on WhatsApp</span>
              </a>
            )}

            <a className="hero-plain-link" href="/services/">
              <span>Explore All Capabilities</span>
              <ArrowRight size={16} />
            </a>
          </div>

          <div className="hero-trust-indicators">
            <div className="trust-item">
              <Check size={14} className="trust-check" />
              <span>Direct WhatsApp & Social Integration</span>
            </div>
            <div className="trust-item">
              <Check size={14} className="trust-check" />
              <span>Full Code & Data Ownership</span>
            </div>
            <div className="trust-item">
              <Check size={14} className="trust-check" />
              <span>Transparent Stage-Wise Pricing</span>
            </div>
          </div>
        </div>

        {/* Hero Interactive Omnichannel Demonstration */}
        <div className="hero-visual-slot">
          <BusinessFlow />
        </div>
      </section>

      {/* Modern Dynamic Ticker / Value Strip */}
      <div className="value-strip-modern">
        <div className="strip-item highlight">
          <Zap size={14} />
          <span>ZERO PER-SEAT SAAS TRAPS</span>
        </div>
        <div className="strip-item">
          <span>WhatsApp Business & Meta API</span>
        </div>
        <div className="strip-item">
          <span>Custom CRM & Lead Pipelines</span>
        </div>
        <div className="strip-item">
          <span>Lightweight Modular ERP</span>
        </div>
        <div className="strip-item">
          <span>Claude & Verified AI Systems</span>
        </div>
        <div className="strip-item">
          <span>Built for India & Global Scale</span>
        </div>
      </div>

      {/* Starting Points Section */}
      <StartingPoints />

      {/* Dedicated Social Connections Section (WhatsApp, Instagram, Facebook) */}
      <SocialConnections />

      {/* Practical AI & Claude Section */}
      <ClaudeSection />

      {/* Interactive Solution Concepts Showcase */}
      <section id="solutions" className="solutions-section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">
              <span className="dot" /> 03 / TANGIBLE ARCHITECTURE CONCEPTS
            </span>
            <h2>
              See how your operations<br />
              <em>look and feel.</em>
            </h2>
          </div>
          <p>
            Explore 4 core architectural starting points. Each system is custom-tailored to your exact business rules, inventory, and workflows—not rigid off-the-shelf software.
          </p>
        </div>
        <Showcase />
      </section>

      {/* Smart Budget & Modular Expansion Philosophy */}
      <section className="budget-section-modern">
        <div className="budget-left">
          <span className="eyebrow-light">
            <Sparkles size={14} /> SMART STARTS · MEANINGFUL ROI
          </span>
          <h2>
            Big ideas shouldn’t require a<br />
            <em>fortune in enterprise software.</em>
          </h2>
          <p>
            Growing businesses deserve tools just as powerful as Fortune 500 companies. Instead of spending lakhs on complex ERPs you only use 10% of, we build targeted, high-performance modules that solve your biggest operational headaches first.
          </p>
          <div className="budget-action">
            <a className="button budget-btn" href="/contact/">
              Tell Us What Your Business Needs <ArrowUpRight size={18} />
            </a>
          </div>
        </div>

        <div className="budget-cards-grid">
          {[
            [
              '01',
              'Start with Core Essentials',
              'Eliminate the #1 bottleneck first (e.g. lost WhatsApp leads or stock tracking) before expanding.',
            ],
            [
              '02',
              'Pay Only For What You Use',
              'Own your solution outright. No recurring monthly per-user licensing fees eating into your margins.',
            ],
            [
              '03',
              'Expand As Revenue Grows',
              'Our clean modular architecture lets you add billing, AI agents, or distributor portals at any time.',
            ],
          ].map(([n, t, d]) => (
            <article key={n} className="budget-card">
              <span className="budget-num">{n}</span>
              <div>
                <h3>{t}</h3>
                <p>{d}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Plain-English Problem vs Solution Grid */}
      <section className="problems-section-modern">
        <div className="section-head-center">
          <span className="eyebrow">
            <span className="dot" /> 04 / REAL-WORLD PAIN POINTS
          </span>
          <h2>
            Familiar business headaches.<br />
            <em>Engineered solutions.</em>
          </h2>
          <p>
            Here is how Meynix replaces manual chaos with smooth, reliable software.
          </p>
        </div>

        <div className="problems-grid-modern">
          {[
            [
              'Inquiries Lost in Personal WhatsApps',
              'Connect WhatsApp Business API directly to a shared team dashboard with automatic lead capture.',
            ],
            [
              'Messy Excel Sheets for Stock & Orders',
              'A fast, mobile-friendly inventory & order tracker with live barcode scanning and PDF invoicing.',
            ],
            [
              'Staff Wasting Hours on Repetitive Work',
              'Automate dispatch alerts, payment reminders, and status notifications with zero manual copying.',
            ],
            [
              'Software That Doesn’t Match Your Rules',
              'We write the software around your exact pricing tiers, dealer margins, and workflow stages.',
            ],
            [
              'Knowledge Trapped in Binders & PDFs',
              'Private AI search trained on your catalogs and SOPs that answers staff questions with page citations.',
            ],
            [
              'Expensive Legacy Enterprise ERPs',
              'A lightweight, custom web application with zero per-user subscription fees that runs on any phone or laptop.',
            ],
          ].map(([t, d]) => (
            <article key={t} className="problem-card-modern">
              <div className="problem-check-icon">
                <Check size={18} />
              </div>
              <div className="problem-content">
                <h3>{t}</h3>
                <p>{d}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Industries Served */}
      <section className="industries-section-modern">
        <div className="section-heading">
          <div>
            <span className="eyebrow">
              <span className="dot" /> TAILORED FOR LOCAL & GLOBAL MARKETS
            </span>
            <h2>
              Engineered for the people<br />
              <em>building real businesses.</em>
            </h2>
          </div>
          <p>
            Whether you run a high-volume wholesale distribution warehouse, a retail chain, or a professional service firm, we build the exact digital engine you need.
          </p>
        </div>

        <div className="industry-pill-grid">
          {industries.map((v) => (
            <a key={v} href="/industries/" className="industry-pill">
              <span>{v}</span>
              <ArrowUpRight size={16} />
            </a>
          ))}
        </div>
      </section>

      {/* Our Approach / Process */}
      <section className="approach-section-modern">
        <div className="section-heading">
          <div>
            <span className="eyebrow">
              <span className="dot" /> 05 / HOW WE WORK
            </span>
            <h2>
              Transparent milestones.<br />
              <em>No technical jargon.</em>
            </h2>
          </div>
          <a href="/our-approach/" className="plain-link">
            Read Our Engineering Philosophy <ArrowUpRight size={17} />
          </a>
        </div>

        <Process />

        <div className="values-badge-strip">
          {[
            'Business-First Problem Solving',
            'Direct WhatsApp & Meta Integrations',
            'Full Source Code & IP Ownership',
            'Modular & Easily Scalable',
            'Zero Unnecessary Dependencies',
            'Security & Privacy by Design',
            'Clear Scope & Fixed Deadlines',
            'Dedicated Ongoing Support',
          ].map((v) => (
            <span key={v} className="value-chip">
              <Check size={13} className="value-check" />
              {v}
            </span>
          ))}
        </div>
      </section>

      {/* Final Call to Action */}
      <CTA />
    </>
  );
}
