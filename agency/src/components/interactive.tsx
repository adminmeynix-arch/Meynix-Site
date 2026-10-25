'use client';

import Image from 'next/image';
import React, { useState, useRef } from 'react';
import {
  ArrowUpRight,
  Menu,
  X,
  Phone,
  Sparkles,
  Mail,
  Copy,
  Check,
  ArrowLeft,
  ShieldCheck,
} from 'lucide-react';
import { site, whatsappUrl, instagramUrl, facebookUrl } from '@/config/site';
import { services } from '@/config/services';
import { WhatsAppIcon, InstagramIcon, FacebookIcon } from '@/components/social-marks';

export function Navigation() {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);

  return (
    <header className="site-header-modern">
      <div className="header-inner">
        <a className="wordmark" href="/">
          <Image
            className="brand-lockup"
            src="/brand/meynix-3d.png"
            alt={site.name}
            width={2135}
            height={736}
            priority
          />
        </a>

        <button
          ref={toggle}
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="main-nav"
          aria-label="Toggle navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>

        <nav
          id="main-nav"
          className={open ? 'open' : ''}
          onKeyDown={(e) => {
            if (e.key === 'Escape') {
              setOpen(false);
              toggle.current?.focus();
            }
          }}
        >
          <details className="nav-details">
            <summary className="nav-summary">Capabilities</summary>
            <div className="dropdown">
              <div className="dropdown-grid">
                {services.map((s) => (
                  <a key={s.slug} href={`/${s.slug}/`} className="dropdown-item">
                    <strong>{s.title}</strong>
                    <span>{s.short}</span>
                  </a>
                ))}
              </div>
            </div>
          </details>

          <a href="/#solutions">Interactive Concepts</a>
          <a href="/industries/">Industries</a>
          <a href="/our-approach/">Our Process</a>

          {whatsappUrl && (
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-whatsapp-link"
              title="Chat with us directly on WhatsApp"
            >
              <WhatsAppIcon size={16} />
              <span>WhatsApp Quick Chat</span>
            </a>
          )}

          <a className="button small header-cta" href="/contact/">
            Discuss Your Project <ArrowUpRight size={15} />
          </a>
        </nav>
      </div>
    </header>
  );
}

const demos = [
  {
    name: 'Unified CRM & Leads',
    badge: 'Customer Intelligence',
    label: 'All WhatsApp, Instagram & Web Leads in One Place.',
    description: 'Every inquiry automatically logged with full conversation history, deal stage, and follow-up reminders.',
    columns: ['Inbound Inquiry', 'Active Negotiation', 'Won / Deployed'],
    items: [
      { title: 'WhatsApp Catalog Inbound', sub: 'Aarav Patel · 50x Model-X', tag: 'High Intent', tagClass: 'tag-emerald' },
      { title: 'Instagram Client Portal Lead', sub: 'Studio Aurelia · Custom Auth', tag: 'Quote Sent', tagClass: 'tag-amber' },
      { title: 'Logistics Fleet Dispatch', sub: 'Apex Logistics · 25 Drivers', tag: 'Contract Ready', tagClass: 'tag-blue' },
    ],
  },
  {
    name: 'Modular Business ERP',
    badge: 'Operations & Stock',
    label: 'Total Stock, Purchasing & Billing Visibility.',
    description: 'No bloated SAP or complex ERP setups. Just the exact modules your warehouse and office actually use.',
    columns: ['Pending Purchase Orders', 'Warehouse Production', 'Dispatched & Billed'],
    items: [
      { title: 'Raw Material PO #891', sub: 'Steel Barrels · ₹1,20,000', tag: 'Vendor Approved', tagClass: 'tag-emerald' },
      { title: 'Batch Assembly #22', sub: '120 Units in QC inspection', tag: 'In Progress', tagClass: 'tag-amber' },
      { title: 'GST E-Invoice #4092', sub: 'Auto-dispatched via WhatsApp', tag: 'Completed', tagClass: 'tag-blue' },
    ],
  },
  {
    name: 'Enterprise AI Assistant',
    badge: 'Private & Citation-Backed',
    label: 'Ask Plain Questions About Your Business Records.',
    description: 'Connects to your product catalogs, warranty policies, and accounting PDFs to answer customer & staff questions instantly.',
    columns: ['Verified Sources', 'Grounded Retrieval', 'Human-Approved Action'],
    items: [
      { title: 'Internal Price Book 2026', sub: '3,400 SKUs indexed in Vector DB', tag: 'Synchronized', tagClass: 'tag-emerald' },
      { title: 'Dealer Discount Query', sub: '“Max allowable discount for Tier 1”', tag: '99.4% Match', tagClass: 'tag-amber' },
      { title: 'Drafted Formal Quote', sub: 'Manager approval required before send', tag: 'Review Needed', tagClass: 'tag-orange' },
    ],
  },
  {
    name: 'Omnichannel Automation Hub',
    badge: 'Zapier-Free Native Pipelines',
    label: 'Make Systems Talk to Each Other Without Manual Entry.',
    description: 'When a deal closes, generate invoices, notify the warehouse team on Telegram/Slack, and text the customer automatically.',
    columns: ['Event Trigger', 'Automated Execution', 'Confirmation'],
    items: [
      { title: 'Facebook Ad Form Lead', sub: 'Captured in < 800ms', tag: 'Webhook 200 OK', tagClass: 'tag-emerald' },
      { title: 'Auto-Generate Quotation', sub: 'Custom branded PDF prepared', tag: 'Executed', tagClass: 'tag-amber' },
      { title: 'WhatsApp PDF Dispatch', sub: 'Sent to customer with tracking link', tag: 'Delivered', tagClass: 'tag-blue' },
    ],
  },
];

export function Showcase() {
  const [active, setActive] = useState(0);
  const d = demos[active];

  return (
    <div className="showcase-modern">
      <div className="tabs-modern" role="tablist" aria-label="Solution concepts">
        {demos.map((v, i) => (
          <button
            key={v.name}
            id={`tab-${i}`}
            role="tab"
            aria-selected={i === active}
            aria-controls="demo-panel"
            tabIndex={active === i ? 0 : -1}
            className={`tab-btn-modern ${active === i ? 'active' : ''}`}
            onClick={() => setActive(i)}
            onKeyDown={(e) => {
              if (['ArrowRight', 'ArrowLeft', 'Home', 'End'].includes(e.key)) {
                e.preventDefault();
                const n =
                  e.key === 'Home'
                    ? 0
                    : e.key === 'End'
                    ? 3
                    : (i + (e.key === 'ArrowRight' ? 1 : 3)) % 4;
                setActive(n);
                document.getElementById(`tab-${n}`)?.focus();
              }
            }}
          >
            <span className="tab-badge-mini">{v.badge}</span>
            <span className="tab-name-title">{v.name}</span>
          </button>
        ))}
      </div>

      <div
        id="demo-panel"
        role="tabpanel"
        aria-labelledby={`tab-${active}`}
        className="demo-canvas-modern"
      >
        <div className="demo-canvas-header">
          <div>
            <span className="canvas-mono-eyebrow">MEYNIX SYSTEM DEMO // {d.name.toUpperCase()}</span>
            <h3>{d.label}</h3>
            <p className="canvas-desc">{d.description}</p>
          </div>
          <span className="sample-data-badge">
            <span className="pulse-dot green" /> Live Architecture Simulation
          </span>
        </div>

        <div className="kanban-modern">
          {d.columns.map((col, i) => {
            const item = d.items[i];
            return (
              <div key={col} className="kanban-col">
                <div className="kanban-col-head">
                  <span className="kanban-dot" />
                  <strong>{col}</strong>
                  <span className="kanban-counter">0{i + 1}</span>
                </div>

                <div className="kanban-card">
                  <div className="card-top-row">
                    <span className="tiny-label">ACTIVE PIPELINE RECORD</span>
                    <span className={`status-pill ${item.tagClass}`}>{item.tag}</span>
                  </div>
                  <h4>{item.title}</h4>
                  <p>{item.sub}</p>
                  <div className="card-footer-metric">
                    <span className="metric-tag">System Sync: Live</span>
                    <span className="metric-icon">✓</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export function FloatingOmnichannelDock() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <aside className="floating-dock-container" aria-label="Instant communication channels">
      {/* Expanded Quick-Contact Card */}
      {isOpen && (
        <div className="floating-dock-menu">
          <div className="dock-menu-header">
            <div className="dock-header-text">
              <strong>Connect with Meynix</strong>
              <small>Choose your preferred channel</small>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="dock-close-btn"
              aria-label="Close contact menu"
            >
              <X size={16} />
            </button>
          </div>

          <div className="dock-links-list">
            {whatsappUrl && (
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="dock-item whatsapp"
              >
                <div className="dock-icon whatsapp-bg">
                  <WhatsAppIcon size={20} />
                </div>
                <div className="dock-item-info">
                  <strong>WhatsApp Business</strong>
                  <span>Instant response & project chat</span>
                </div>
                <ArrowUpRight size={16} className="dock-arrow" />
              </a>
            )}

            {instagramUrl && (
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="dock-item instagram"
              >
                <div className="dock-icon instagram-bg">
                  <InstagramIcon size={20} />
                </div>
                <div className="dock-item-info">
                  <strong>Instagram Direct</strong>
                  <span>Follow portfolio & DM us</span>
                </div>
                <ArrowUpRight size={16} className="dock-arrow" />
              </a>
            )}

            {facebookUrl && (
              <a
                href={facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="dock-item facebook"
              >
                <div className="dock-icon facebook-bg">
                  <FacebookIcon size={20} />
                </div>
                <div className="dock-item-info">
                  <strong>Facebook / Meta</strong>
                  <span>Company updates & messenger</span>
                </div>
                <ArrowUpRight size={16} className="dock-arrow" />
              </a>
            )}

            <a href={`tel:+${site.whatsapp}`} className="dock-item phone">
              <div className="dock-icon phone-bg">
                <Phone size={18} />
              </div>
              <div className="dock-item-info">
                <strong>Direct Call</strong>
                <span>{site.phone}</span>
              </div>
              <ArrowUpRight size={16} className="dock-arrow" />
            </a>
          </div>

          <div className="dock-footer-note">
            <span>⚡ Typical response time: under 30 minutes</span>
          </div>
        </div>
      )}

      {/* Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`floating-dock-trigger ${isOpen ? 'active' : ''}`}
        aria-label="Open contact channels menu"
        aria-expanded={isOpen}
      >
        <span className="dock-trigger-badge">
          <WhatsAppIcon size={20} />
        </span>
        <span className="dock-trigger-label">
          {isOpen ? 'Close' : 'Chat & Connect'}
        </span>
        <span className="dock-trigger-ping" />
      </button>
    </aside>
  );
}

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    business: '',
    email: '',
    phone: '',
    solution: 'WhatsApp, Instagram & Meta Integrations',
    budget: '',
    description: '',
    contactMethod: 'WhatsApp',
    consent: true,
  });

  const [quoteRef, setQuoteRef] = useState('');
  const [quoteDate, setQuoteDate] = useState('');
  const [isReviewing, setIsReviewing] = useState(false);
  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const previewRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Generate quotation reference code and timestamp
    const generatedRef = `MYX-QT-${Math.floor(100000 + Math.random() * 900000)}`;
    const now = new Date();
    const formattedDate = now.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });

    setQuoteRef(generatedRef);
    setQuoteDate(formattedDate);
    setIsReviewing(true);

    // Optional background endpoint dispatch if configured
    if (site.formEndpoint) {
      setIsSubmitting(true);
      try {
        await fetch(site.formEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ ...formData, quoteRef: generatedRef, date: formattedDate }),
          signal: AbortSignal.timeout(10000),
        });
      } catch {
        // Fallback silently to client preview
      } finally {
        setIsSubmitting(false);
      }
    }

    setTimeout(() => {
      previewRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 80);
  };

  const cleanPhone = site.whatsapp ? site.whatsapp.replace(/\D/g, '') : '919360239398';

  const formattedQuotationText = `📋 *MEYNIX PROJECT QUOTATION INQUIRY*
*Quotation Ref:* #${quoteRef || 'MYX-QT-PENDING'}
*Date:* ${quoteDate || 'Current'}

👤 *Client Name:* ${formData.name || 'Not provided'}
🏢 *Company / Business:* ${formData.business || 'Individual / Private Client'}
📞 *Phone / WhatsApp:* ${formData.phone || 'Not provided'}
✉️ *Email:* ${formData.email || 'Not provided'}

🎯 *Target Solution:* ${formData.solution}
💰 *Estimated Budget:* ${formData.budget || 'Flexible / Scoped on Discovery'}
⚡ *Preferred Contact Channel:* ${formData.contactMethod}

📝 *Project Scope & Workflows to Solve:*
${formData.description}

----------------------------------------
_Generated via Meynix Official Quotation System. Please reply with project feasibility, cost range & estimated timeline._`;

  const whatsappQuoteUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(formattedQuotationText)}`;
  const mailtoQuoteUrl = `mailto:${site.email || 'meynix.official@gmail.com'}?subject=${encodeURIComponent(
    `Project Quotation Inquiry [${quoteRef || 'NEW'}] - ${formData.name || 'Client'}`
  )}&body=${encodeURIComponent(formattedQuotationText)}`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(formattedQuotationText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
    }
  };

  if (isReviewing) {
    return (
      <div ref={previewRef} className="quotation-preview-container">
        <div className="quotation-card">
          <div className="quote-status-bar">
            <span className="quote-live-pill">
              <span className="pulse-dot"></span>
              QUOTATION READY TO SEND
            </span>
            <span className="quote-ref-badge">REF: #{quoteRef}</span>
          </div>

          <div className="quote-doc-header">
            <div>
              <span className="quote-eyebrow">PREVIEW OF YOUR PROJECT BRIEF</span>
              <h3 className="quote-title">Custom Software & AI Project Quotation</h3>
              <p className="quote-date">
                Prepared for <strong>{formData.name}</strong> · {quoteDate}
              </p>
            </div>
            <div className="quote-agency-seal">
              <strong>MEYNIX</strong>
              <span>Verified Studio Scope</span>
            </div>
          </div>

          <div className="quote-specs-grid">
            <div className="quote-spec-item">
              <span className="spec-label">CLIENT NAME</span>
              <span className="spec-value">{formData.name}</span>
            </div>
            <div className="quote-spec-item">
              <span className="spec-label">ORGANIZATION</span>
              <span className="spec-value">{formData.business || 'Private Client'}</span>
            </div>
            <div className="quote-spec-item">
              <span className="spec-label">PHONE / WHATSAPP</span>
              <span className="spec-value">{formData.phone || 'Not provided'}</span>
            </div>
            <div className="quote-spec-item">
              <span className="spec-label">BUSINESS EMAIL</span>
              <span className="spec-value">{formData.email}</span>
            </div>
            <div className="quote-spec-item full-span">
              <span className="spec-label">DESIRED SOLUTION</span>
              <span className="spec-value highlight-value">{formData.solution}</span>
            </div>
            <div className="quote-spec-item">
              <span className="spec-label">ESTIMATED BUDGET</span>
              <span className="spec-value budget-highlight">{formData.budget || 'Scope-dependent'}</span>
            </div>
            <div className="quote-spec-item">
              <span className="spec-label">PREFERRED CHANNEL</span>
              <span className="spec-value">{formData.contactMethod}</span>
            </div>
          </div>

          <div className="quote-scope-box">
            <span className="spec-label">PROJECT SCOPE & WORKFLOW REQUIREMENTS</span>
            <p className="quote-scope-text">{formData.description}</p>
          </div>

          <div className="quote-actions-banner">
            <div className="quote-actions-head">
              <Sparkles size={16} className="sparkle-icon" />
              <strong>Send this quotation directly to our engineering team:</strong>
            </div>

            <div className="quote-primary-actions">
              <a
                href={whatsappQuoteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="quote-wa-btn"
                id="send-whatsapp-quotation-btn"
              >
                <div className="quote-btn-icon">
                  <WhatsAppIcon size={22} />
                </div>
                <div className="quote-btn-text">
                  <span className="quote-btn-main">Send Quotation on WhatsApp ↗</span>
                  <span className="quote-btn-sub">Instant direct response from +91 93602 39398</span>
                </div>
              </a>

              <a
                href={mailtoQuoteUrl}
                className="quote-email-btn"
                id="send-email-quotation-btn"
              >
                <div className="quote-btn-icon">
                  <Mail size={20} />
                </div>
                <div className="quote-btn-text">
                  <span className="quote-btn-main">Send via Official Email</span>
                  <span className="quote-btn-sub">{site.email}</span>
                </div>
              </a>
            </div>

            <div className="quote-secondary-actions">
              <button
                type="button"
                onClick={handleCopy}
                className="quote-copy-btn"
                title="Copy entire quotation summary to clipboard"
              >
                {copied ? <Check size={16} /> : <Copy size={16} />}
                <span>{copied ? 'Quotation Copied to Clipboard!' : 'Copy Quotation Text'}</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setIsReviewing(false);
                  setTimeout(() => {
                    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }, 80);
                }}
                className="quote-back-btn"
              >
                <ArrowLeft size={16} />
                <span>Edit Details</span>
              </button>
            </div>
          </div>

          <div className="quote-card-footer">
            <ShieldCheck size={15} />
            <span>
              Direct transmission to Meynix engineering. No spam. You will receive an initial feasibility reply within 1–2 hours.
            </span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form
      ref={formRef}
      className="modern-contact-form"
      onSubmit={handleFormSubmit}
    >
      <div className="form-head">
        <span className="form-eyebrow">DIRECT INQUIRY & QUOTATION</span>
        <h3>Tell us about your project</h3>
        <p>Fill out the details below to generate and preview your official project quotation.</p>
      </div>

      <div className="form-grid">
        <label>
          Your Full Name *
          <input
            name="name"
            required
            autoComplete="name"
            maxLength={100}
            placeholder="e.g. Rahul Sharma"
            value={formData.name}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Company / Business Name <small>(optional)</small>
          <input
            name="business"
            autoComplete="organization"
            maxLength={150}
            placeholder="e.g. Apex Logistics"
            value={formData.business}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Business Email *
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="rahul@company.com"
            value={formData.email}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Phone or WhatsApp Number <small>(recommended)</small>
          <input
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="+91 98400 12345"
            value={formData.phone}
            onChange={handleInputChange}
          />
        </label>
        <label>
          What do you need built?
          <select
            name="solution"
            value={formData.solution}
            onChange={handleInputChange}
          >
            {[
              'WhatsApp, Instagram & Meta Integrations',
              'Custom CRM & Sales Pipeline',
              'Modular ERP & Operations Software',
              'Claude & Practical AI Automation',
              'High-Converting Business Website',
              'Custom Web Application / Portal',
              'Document Search & Internal AI Assistant',
              'Other / Not Sure Yet',
            ].map((v) => (
              <option key={v} value={v}>
                {v}
              </option>
            ))}
          </select>
        </label>
        <label>
          Estimated Budget Range <small>(optional)</small>
          <input
            name="budget"
            placeholder="e.g. 8k, ₹50k–₹2L, or $1,500"
            value={formData.budget}
            onChange={handleInputChange}
          />
        </label>
      </div>

      <label className="textarea-label">
        What problems or workflows would you like to solve? *
        <textarea
          name="description"
          required
          minLength={10}
          maxLength={5000}
          rows={5}
          placeholder="Describe your current process, where time gets wasted, or the features you want built..."
          value={formData.description}
          onChange={handleInputChange}
        />
      </label>

      <label className="preferred-method-label">
        Preferred Way to Hear From Us
        <select
          name="contactMethod"
          value={formData.contactMethod}
          onChange={handleInputChange}
        >
          <option value="WhatsApp">WhatsApp (Fastest response)</option>
          <option value="Email">Email</option>
          <option value="Phone Call">Phone Call</option>
        </select>
      </label>

      <label className="consent-check">
        <input
          type="checkbox"
          required
          name="consent"
          checked={formData.consent}
          onChange={handleInputChange}
        />
        <span>
          I agree to be contacted regarding this project inquiry in accordance with the{' '}
          <a href="/privacy/" target="_blank" rel="noopener noreferrer">
            privacy policy
          </a>.
        </span>
      </label>

      <button
        type="submit"
        className="button submit-btn quote-submit-action"
        disabled={isSubmitting}
        id="preview-quotation-submit-btn"
      >
        <span>Preview & Send Quotation</span>
        <ArrowUpRight size={18} />
      </button>

      <div className="form-footer-guarantee">
        <ShieldCheck size={16} />
        <span>Submitting generates an instant formatted quotation brief with direct 1-click WhatsApp & Email dispatch.</span>
      </div>
    </form>
  );
}
