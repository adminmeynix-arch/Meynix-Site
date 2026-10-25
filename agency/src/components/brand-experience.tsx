'use client';

import React, { useEffect, useRef, useState } from 'react';
import {
  ArrowUpRight,
  ArrowRight,
  Globe,
  Layers,
  Workflow,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Clock,
  Database,
  Send,
  CheckCheck,
  Brain,
  Pause,
  Play,
} from 'lucide-react';
import { WhatsAppIcon, InstagramIcon, FacebookIcon } from '@/components/social-marks';
import { whatsappUrl, instagramUrl, facebookUrl } from '@/config/site';

export function PlatformLogos({ asLinks = true }: { asLinks?: boolean }) {
  const chips = [
    { key: 'whatsapp', label: 'WhatsApp', title: 'WhatsApp Business', href: whatsappUrl, icon: <WhatsAppIcon size={16} /> },
    { key: 'instagram', label: 'Instagram', title: 'Instagram', href: instagramUrl, icon: <InstagramIcon size={16} /> },
    { key: 'facebook', label: 'Facebook', title: 'Facebook / Meta', href: facebookUrl, icon: <FacebookIcon size={16} /> },
  ];
  return (
    <div className="platform-logos-modern">
      {chips.map((c) => {
        const inner = (
          <>
            <span className="platform-icon-wrap">{c.icon}</span>
            <span className="platform-name">{c.label}</span>
          </>
        );
        return asLinks ? (
          <a key={c.key} href={c.href || '#'} target="_blank" rel="noopener noreferrer" className={`platform-chip ${c.key}`} title={c.title}>
            {inner}
          </a>
        ) : (
          <span key={c.key} className={`platform-chip ${c.key}`} title={c.title}>
            {inner}
          </span>
        );
      })}
    </div>
  );
}

type ChannelType = 'whatsapp' | 'instagram' | 'facebook';

interface Scenario {
  label: string;
  customer: string;
  handle: string;
  avatar: string;
  message: string;
  time: string;
  intent: string;
  item: string;
  qty: string;
  value: string;
  crm: string;
  ops: string;
  reply: string;
}

const channelOrder: ChannelType[] = ['whatsapp', 'instagram', 'facebook'];

const scenarios: Record<ChannelType, Scenario> = {
  whatsapp: {
    label: 'WhatsApp',
    customer: 'Aarav Patel',
    handle: '+91 98401 22419',
    avatar: 'A',
    message: 'Hi! We need 50 units of Model-X by Friday for our Bangalore warehouse. Can you confirm stock and send an invoice?',
    time: '10:42',
    intent: 'Urgent order + stock check',
    item: 'Model-X Industrial Unit',
    qty: '50 units',
    value: '₹1,85,000',
    crm: 'Lead “Aarav Patel” created · Stage: Quotation',
    ops: '84 units in stock · 50 reserved for Friday',
    reply: 'Hi Aarav, 50 units of Model-X are reserved for Friday. Your invoice #INV-492 is attached.',
  },
  instagram: {
    label: 'Instagram',
    customer: 'Studio Aurelia',
    handle: '@studio.aurelia',
    avatar: 'S',
    message: 'Loved your reel! Do you build client portals with role-based access for design agencies?',
    time: '11:15',
    intent: 'New project enquiry',
    item: 'Client portal for agencies',
    qty: '1 custom build',
    value: 'Warm lead',
    crm: 'Profile @studio.aurelia saved · Owner: Solutions team',
    ops: 'Scope template “Agency Portal” attached to lead',
    reply: 'Yes, we build exactly that! Would Thursday 3 PM work for a short walkthrough?',
  },
  facebook: {
    label: 'Facebook',
    customer: 'Apex Logistics',
    handle: 'Facebook Lead Ad',
    avatar: 'A',
    message: 'Looking to replace our dispatch spreadsheets with a live tracking app for 25 drivers.',
    time: 'Just now',
    intent: 'Fleet management software',
    item: 'Dispatch & tracking web app',
    qty: '25 drivers',
    value: 'High intent',
    crm: 'Ad lead captured instantly · Follow-up task created',
    ops: 'Dispatch module pre-configured with delivery proof',
    reply: 'Thanks Apex Logistics! Our engineer is reviewing your 25-driver setup and will call today.',
  },
};

const channelIcon: Record<ChannelType, React.ReactNode> = {
  whatsapp: <WhatsAppIcon size={15} />,
  instagram: <InstagramIcon size={15} />,
  facebook: <FacebookIcon size={15} />,
};

/* Timeline: 0 typing → 1 message → 2 understood → 3 CRM/ERP → 4 reply sent */
const STAGE_TIMES = [0, 1300, 2900, 4700, 6500];
const LOOP_END = 10500;

export function BusinessFlow() {
  const [channel, setChannel] = useState<ChannelType>('whatsapp');
  const [stage, setStage] = useState(0);
  const [playing, setPlaying] = useState(true);
  const s = scenarios[channel];
  const channelRef = useRef(channel);
  channelRef.current = channel;

  useEffect(() => {
    setStage(0);
    if (!playing) {
      setStage(4);
      return;
    }
    const timers: ReturnType<typeof setTimeout>[] = [];
    STAGE_TIMES.slice(1).forEach((t, i) => timers.push(setTimeout(() => setStage(i + 1), t)));
    timers.push(
      setTimeout(() => {
        const next = channelOrder[(channelOrder.indexOf(channelRef.current) + 1) % channelOrder.length];
        setChannel(next);
      }, LOOP_END)
    );
    return () => timers.forEach(clearTimeout);
  }, [channel, playing]);

  const stepState = (n: number) => (stage > n ? 'done' : stage === n ? 'active' : 'pending');

  return (
    <div className={`demo-hub ch-${channel}`}>
      <div className="demo-hub-top">
        <div className="demo-hub-title">
          <span className="demo-live"><span className="demo-live-dot" /> LIVE DEMO</span>
          <strong>From customer message to done — automatically</strong>
        </div>
        <div className="demo-controls">
          <div className="demo-tabs" role="tablist" aria-label="Choose a channel">
            {channelOrder.map((c) => (
              <button
                key={c}
                role="tab"
                aria-selected={channel === c}
                className={`demo-tab ${c} ${channel === c ? 'active' : ''}`}
                onClick={() => setChannel(c)}
              >
                {channelIcon[c]}
                <span>{scenarios[c].label}</span>
              </button>
            ))}
          </div>
          <button
            className="demo-play"
            onClick={() => setPlaying((p) => !p)}
            aria-label={playing ? 'Pause demo' : 'Play demo'}
            title={playing ? 'Pause' : 'Play'}
          >
            {playing ? <Pause size={14} /> : <Play size={14} />}
          </button>
        </div>
      </div>

      <div className="demo-stage">
        {/* Phone */}
        <div className="demo-phone" aria-label="Customer conversation">
          <div className="demo-phone-bar">
            <span className="demo-avatar">{s.avatar}</span>
            <div className="demo-phone-id">
              <strong>{s.customer}</strong>
              <small>{stage === 0 ? 'typing…' : s.handle}</small>
            </div>
            <span className="demo-phone-ch">{channelIcon[channel]}</span>
          </div>
          <div className="demo-chat">
            {stage === 0 && (
              <div className="demo-bubble in typing" aria-hidden="true">
                <span /><span /><span />
              </div>
            )}
            {stage >= 1 && (
              <div className="demo-bubble in pop">
                <p>{s.message}</p>
                <em>{s.time}</em>
              </div>
            )}
            {stage >= 4 && (
              <div className="demo-bubble out pop">
                <p>{s.reply}</p>
                <em>Sent <CheckCheck size={12} /></em>
              </div>
            )}
          </div>
        </div>

        {/* Timeline */}
        <ol className="demo-steps">
          <li className={`demo-step ${stepState(2)}`}>
            <span className="demo-step-icon"><Brain size={16} /></span>
            <div className="demo-step-body">
              <strong>1 · Meynix understands it</strong>
              <div className="demo-chips">
                <span>{s.intent}</span>
                <span>{s.item}</span>
                <span>{s.qty}</span>
                <span className="hot">{s.value}</span>
              </div>
            </div>
          </li>
          <li className={`demo-step ${stepState(3)}`}>
            <span className="demo-step-icon"><Database size={16} /></span>
            <div className="demo-step-body">
              <strong>2 · Your systems update</strong>
              <ul>
                <li><CheckCircle2 size={13} /> CRM: {s.crm}</li>
                <li><CheckCircle2 size={13} /> Stock &amp; ops: {s.ops}</li>
              </ul>
            </div>
          </li>
          <li className={`demo-step ${stepState(4)}`}>
            <span className="demo-step-icon"><Send size={16} /></span>
            <div className="demo-step-body">
              <strong>3 · Reply goes out</strong>
              <p>Drafted instantly. <span className="demo-approve"><ShieldCheck size={12} /> Your team approves first</span></p>
            </div>
          </li>
        </ol>
      </div>

      <div className="demo-hub-foot">
        <span><Clock size={14} /> Saves 10–20 hours a week of copy-paste</span>
        <a href="/social-integrations/">See social integrations <ArrowRight size={14} /></a>
      </div>
    </div>
  );
}

const paths = [
  {
    icon: Globe,
    n: '01',
    title: 'Customer Channels & Portals',
    badge: 'Get & keep customers',
    text: 'Websites, customer portals and unified WhatsApp / Instagram communication that turn interest into paying customers.',
    links: [
      ['WhatsApp & Social Integrations', 'social-integrations'],
      ['Websites & Web Applications', 'websites'],
      ['Customer & Client Portals', 'custom-software'],
    ],
  },
  {
    icon: Layers,
    n: '02',
    title: 'Tailored Business Operations',
    badge: 'Stay in control',
    text: 'One digital command centre: track leads, stock, orders and field work without bloated SaaS fees.',
    links: [
      ['Custom CRM & Sales Automation', 'crm'],
      ['Modular ERP & Inventory', 'erp'],
      ['Custom Software Development', 'custom-software'],
    ],
  },
  {
    icon: Workflow,
    n: '03',
    title: 'Practical AI & Automation',
    badge: 'Work faster',
    text: 'Put AI to work on your real documents and workflows, with your team always in control.',
    links: [
      ['Claude-Connected Automation', 'claude-automation'],
      ['AI Applications & Document Search', 'ai-solutions'],
      ['Workflow Automation', 'automation'],
    ],
  },
];

export function StartingPoints() {
  return (
    <section className="starting-points" id="services">
      <div className="section-heading">
        <div>
          <span className="eyebrow"><span className="dot" /> SOFTWARE DESIGNED AROUND YOUR REALITY</span>
          <h2>What would you like to<br /><em>simplify and grow?</em></h2>
        </div>
        <p>You don’t need to be technical. Tell us what takes too much time and we’ll build the fix.</p>
      </div>

      <div className="path-grid">
        {paths.map(({ icon: Icon, n, title, badge, text, links }) => (
          <article className="path-card-elevated" key={n}>
            <div className="path-top">
              <div className="path-icon-box"><Icon size={24} /></div>
              <span className="path-num">{n}</span>
            </div>
            <span className="path-badge-pill">{badge}</span>
            <h3>{title}</h3>
            <p>{text}</p>
            <div className="path-links">
              {links.map(([label, url]) => (
                <a href={`/${url}/`} key={`${n}-${label}`} className="path-sublink">
                  <span>{label}</span>
                  <ArrowUpRight size={16} />
                </a>
              ))}
            </div>
          </article>
        ))}
      </div>

      <div className="all-services-row">
        <a className="all-services-btn" href="/services/">
          Browse all 10 capabilities <ArrowUpRight size={17} />
        </a>
      </div>
    </section>
  );
}

export function SocialConnections() {
  return (
    <section className="social-connections-section">
      <div className="social-story-wrapper">
        <div className="social-story-left">
          <span className="eyebrow"><span className="dot" /> WHERE YOUR CUSTOMERS ALREADY ARE</span>
          <h2>From everyday chats<br />to <em>real business results.</em></h2>
          <p className="social-lead-desc">
            Customers chat on WhatsApp, browse Instagram and click Facebook ads. We connect those conversations to your orders, invoices and CRM so nothing slips through.
          </p>

          <PlatformLogos />

          <div className="social-cta-box">
            <a className="button" href="/social-integrations/">
              Explore integrations <ArrowUpRight size={18} />
            </a>
            {whatsappUrl && (
              <a className="button whatsapp-btn" href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon size={18} /> Chat on WhatsApp
              </a>
            )}
          </div>
        </div>

        <div className="social-benefits-right">
          <div className="benefit-card">
            <div className="benefit-icon-badge whatsapp-bg"><WhatsAppIcon size={22} /></div>
            <div>
              <h3>WhatsApp Business</h3>
              <p>Order confirmations, shipping alerts, invoice PDFs and product catalogues sent right inside WhatsApp.</p>
            </div>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon-badge instagram-bg"><InstagramIcon size={22} /></div>
            <div>
              <h3>Instagram Lead Capture</h3>
              <p>Enquiries from Stories, Reels and DMs routed to the right sales person with full context.</p>
            </div>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon-badge facebook-bg"><FacebookIcon size={22} /></div>
            <div>
              <h3>Facebook &amp; Meta Ads</h3>
              <p>Click a lead ad and the details land on your team’s dashboard within seconds.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ClaudeSection() {
  return (
    <section className="claude-section-modern">
      <div className="claude-grid">
        <div className="claude-content">
          <span className="eyebrow-accent"><Sparkles size={14} /> PRACTICAL AI</span>
          <h2>Connect Claude &amp; AI.<br /><em>Move real work forward.</em></h2>
          <p>No science fiction. We connect AI like Anthropic Claude to your authorised files, catalogues and databases.</p>
          <ul className="claude-feature-bullets">
            <li><CheckCircle2 size={16} /><span><strong>Instant answers</strong> from invoices, contracts and price lists in plain language.</span></li>
            <li><CheckCircle2 size={16} /><span><strong>Grounded in your data</strong> with direct source references.</span></li>
            <li><CheckCircle2 size={16} /><span><strong>Human approval</strong> — AI drafts, your team clicks send.</span></li>
          </ul>
          <a className="button claude-btn" href="/claude-automation/">
            Explore Claude automation <ArrowUpRight size={18} />
          </a>
        </div>

        <div className="claude-visual-card">
          <div className="claude-card-top">
            <span className="claude-indicator"><span className="claude-spark" /> CLAUDE + MCP WORKFLOW</span>
            <span className="claude-badge">Private &amp; secure</span>
          </div>
          <blockquote className="claude-quote">
            “Check this week’s pending dealer orders, flag stock shortages and draft a follow-up for each dealer.”
          </blockquote>
          <div className="claude-flow-steps">
            <div className="claude-step-item"><span className="step-idx">1</span><span>Reads secure inventory &amp; dealer balances</span></div>
            <div className="claude-step-item"><span className="step-idx">2</span><span>Finds 2 delayed items and drafts notices</span></div>
            <div className="claude-step-item approved"><ShieldCheck size={16} /><span>Manager reviews and approves in one click</span></div>
          </div>
          <p className="claude-fineprint">Scoped to your permissions. Illustrative workflow.</p>
        </div>
      </div>
    </section>
  );
}
