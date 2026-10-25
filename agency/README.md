# Business software agency website

Static Next.js App Router / TypeScript website with Tailwind and Lucide. All marketing pages export to `out/`. No database, authentication, tracking scripts, or server hosting required. Illustrative concepts are labeled and do not represent client results.

## Run and verify

Node 22+ recommended. Run `npm ci`, `npm run dev`. Production: `npm run lint`, `npm run typecheck`, `npm run build`. Deploy the contents of `out/` to static hosting with a custom 404 mapping to `404.html`. Routes use trailing slashes.

## Configuration

Central branding and contact configuration lives in `src/config/site.ts`; services live in `src/config/services.ts`. Set these public build-time environment variables in `.env.local` or the hosting build environment, then rebuild:

| Variable | Purpose |
| --- | --- |
| NEXT_PUBLIC_BRAND_NAME | Verified company brand; defaults to an explicit placeholder |
| NEXT_PUBLIC_SITE_URL | Absolute HTTPS canonical origin without trailing slash |
| NEXT_PUBLIC_CONTACT_EMAIL | Real inquiry email |
| NEXT_PUBLIC_WHATSAPP | International business number, digits including country code |
| NEXT_PUBLIC_FORM_ENDPOINT | HTTPS form provider or serverless JSON endpoint |

Never place secrets in these variables. With no domain the site is noindex and the sitemap is empty, preventing indexing of incomplete branding. Configuring the domain produces canonical URLs and a sitemap. Social metadata is generated per service page. Add approved social imagery and verified organization schema after the company identity is supplied. No fabricated organization data is emitted.

## Inquiry integration

The isolated ContactForm component POSTs JSON to the configured endpoint. Fields: name, business, email, phone, solution, budget, description, contactMethod, consent. Success requires an HTTP 2xx response; the service must only return success once an inquiry is accepted. Configure CORS for the production origin. Enforce server-side schema/length validation, rate limits, spam protection and consent recording in that service. Do not rely on browser validation. Add an appropriate challenge if needed at the integration layer. The form prevents concurrent submissions and times out after 20 seconds. No local storage is used. Without an endpoint, it explicitly says nothing is sent or saved.

## Before public launch

- Supply verified branding, contact details, domain, and any real social URLs.
- Connect and test the form provider, including failure and duplicate-request handling. Document its identity and data practices in the privacy policy.
- Have privacy and terms templates completed and reviewed, including legal identity, retention, processors, jurisdiction, and rights.
- Configure host security headers: HTTPS/HSTS after domain verification, X-Content-Type-Options: nosniff, Referrer-Policy: strict-origin-when-cross-origin, and Permissions-Policy restricting unused features. Create a CSP matching Next.js scripts/styles and the configured form origin; test before enforcement.
- Verify keyboard, touch, contrast, and responsive behavior in target browsers; measure Lighthouse and Core Web Vitals on the production host.
- Analytics are disabled by default. Add a consent-appropriate provider only when its requirements and privacy disclosures are known.

Next.js static export requires no runtime environment variables: changing public configuration requires a fresh build.

## Verification notes

Lint and standalone TypeScript checks passed during implementation. The npm audit on October 23, 2026 reported seven advisories in the Next.js/PostCSS and ESLint glob-processing dependency chains (six high, one moderate). These concern build/lint dependencies and should be resolved and re-audited before a public production release; do not process untrusted CSS or glob inputs with this toolchain. The static export has no Next.js server runtime. Browser automation could not initialize in the available environment, so responsive visual QA, keyboard interaction testing, contrast measurements, and Lighthouse scores remain unverified.

## Meynix branding update

Default brand: Meynix. Email: meynix.official@gmail.com. Phone/WhatsApp: +91 93602 39398. Public configuration can still override these defaults. Removed vendor-specific CRM references. Mobile layout includes stacked actions, 44px minimum input/navigation targets, and 16px form text on phones. No browser surface was available for visual verification in this session.

The logo in `public/brand/meynix-3d.png` was generated with the built-in image tool from option 4 of the supplied PDF. Prompt: preserve the orange circular emblem, internal white glyph, rounded lowercase meynix lettering and orange i dot; add restrained extrusion, soft bevels, studio highlights, orange enamel and graphite lettering on a transparent background. It is a 3D interpretation of the supplied artwork.

## Start from the parent workspace

From `Meynix Site`, run `npm run dev` (run, not rum). The parent package.json forwards to the agency project. Or run `cd agency` followed by `npm run dev`. Open the localhost URL printed by Next.js. If dependencies are missing, run `npm run setup` from the parent workspace.

Services now include Meta / social integrations and Claude-connected automation. These are scoped development services, not live social account connections on this marketing site.
