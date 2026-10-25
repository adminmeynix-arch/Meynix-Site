import { PlatformLogos } from '@/components/brand-experience';
import {
  ArrowUpRight,
  Globe,
  Code2,
  Users,
  Layers,
  Sparkles,
  FileSearch,
  Network,
  Workflow,
  MessageCircle,
  Bot,
  Check,
} from 'lucide-react';
import { services, steps } from '@/config/services';
import { whatsappUrl } from '@/config/site';
import { WhatsAppIcon } from '@/components/social-marks';

const icons = [
  MessageCircle,
  Bot,
  Globe,
  Code2,
  Users,
  Layers,
  Sparkles,
  FileSearch,
  Network,
  Workflow,
];

export function ServiceCards() {
  return (
    <div className="service-grid-elevated">
      {services.map((s, i) => {
        const Icon = icons[i] || Code2;
        return (
          <a className="service-card-modern" href={`/${s.slug}/`} key={s.slug}>
            <div className="card-top-bar">
              <div className="icon-wrapper">
                {s.slug === 'social-integrations' ? (
                  <div className="social-mini-icons">
                    <PlatformLogos asLinks={false} />
                  </div>
                ) : (
                  <Icon size={24} className="service-icon" />
                )}
              </div>
              <span className="mono-idx">0{i + 1}</span>
            </div>
            <h3>{s.title}</h3>
            <p>{s.description}</p>
            <div className="card-footer-action">
              <span className="explore-text">Explore Capability</span>
              <ArrowUpRight size={16} className="explore-arrow" />
            </div>
          </a>
        );
      })}
    </div>
  );
}

export function Process() {
  return (
    <div className="process-flow-modern">
      {steps.map(([title, text], i) => (
        <article key={title} className="process-step-card">
          <div className="step-header">
            <span className="step-num-highlight">0{i + 1}</span>
            <div className="step-accent-line" />
          </div>
          <h3>{title}</h3>
          <p>{text}</p>
        </article>
      ))}
    </div>
  );
}

export function CTA() {
  return (
    <section className="final-cta-modern">
      <div className="cta-inner-box">
        <span className="eyebrow-center">
          <Sparkles size={14} /> NO MORE INEFFICIENT WORKAROUNDS
        </span>
        <h2>
          Tell us your bottleneck.<br />
          <em>We’ll build the solution that fits.</em>
        </h2>
        <p>
          You don’t need an exhaustive technical brief. Tell us what is taking too much time, where your team is copying and pasting data, or what tool you wish existed.
        </p>

        <div className="cta-actions-row">
          <a className="button primary-cta" href="/contact/">
            Discuss Your Project <ArrowUpRight size={18} />
          </a>
          {whatsappUrl && (
            <a
              className="button whatsapp-cta-btn"
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon size={18} />
              <span>Direct WhatsApp Chat</span>
            </a>
          )}
        </div>

        <div className="cta-trust-strip">
          <span><Check size={14} /> Transparent milestones</span>
          <span><Check size={14} /> No vendor lock-in</span>
          <span><Check size={14} /> Direct developer access</span>
          <span><Check size={14} /> Tailored to your budget</span>
        </div>
      </div>
    </section>
  );
}

export function SystemVisual() {
  return (
    <div className="system-visual" aria-label="Illustrative connected business systems diagram">
      <div className="visual-caption">
        <span className="dot" /> CONNECTED BY DESIGN <span>FIG. 01</span>
      </div>
      <svg
        viewBox="0 0 500 410"
        role="img"
        aria-label="Your business connects with a website, CRM, ERP, workflow automation, and AI assistant"
      >
        <defs>
          <pattern id="grid" width="24" height="24" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="1" fill="#cbd5e1" />
          </pattern>
        </defs>
        <rect width="500" height="410" fill="url(#grid)" />
        <g stroke="#94a3b8" strokeWidth="1.5" fill="none">
          <path d="M250 205H115V85H180M250 205H385V85H320M250 205H80V315H170M250 205H420V315H330M250 205V350" />
          <circle cx="250" cy="205" r="95" strokeDasharray="4 7" />
        </g>
        <rect x="169" y="164" width="162" height="82" rx="12" fill="#FF5500" />
        <text x="250" y="199" textAnchor="middle" fill="white" fontSize="14" fontWeight="600">
          YOUR BUSINESS
        </text>
        <text x="250" y="221" textAnchor="middle" fill="#ffe5dc" fontSize="11">
          Unified Digital Core
        </text>
        {[
          [110, 50, '01 / WHATSAPP & WEB', 'Customer front-door'],
          [300, 50, '02 / CUSTOM CRM', 'Every conversation synced'],
          [30, 285, '03 / AUTOMATION', 'Zero manual entry'],
          [305, 285, '04 / MODULAR ERP', 'Live stock & billing'],
          [170, 345, '05 / AI ASSISTANT', 'Instant knowledge retrieval'],
        ].map(([x, y, t, sub]) => (
          <g key={t as string} transform={`translate(${x},${y})`}>
            <rect width="165" height="61" rx="8" fill="white" stroke="#e2e8f0" />
            <text x="14" y="25" fill="#0f172a" fontSize="10" fontWeight="700">
              {t}
            </text>
            <text x="14" y="43" fill="#64748b" fontSize="10">
              {sub}
            </text>
          </g>
        ))}
      </svg>
      <div className="visual-bottom">
        Built around your workflow <span>Live Architecture</span>
      </div>
    </div>
  );
}
