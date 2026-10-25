# Deploy Meynix to Netlify

## Quick manual deployment

The verified static website is in `out/`. Sign in to Netlify, open https://app.netlify.com/drop and drag the `out` folder into the drop area. You can also use the prepared `meynix-netlify.zip` archive in the parent workspace. Upload only the exported site, not node_modules or .next.

After deploying, use the new project's Deploys page to upload future builds. Do not create a new Netlify project for every update.

## Automatic Git deployments

Push the agency source to your own Git repository and import it in Netlify. If agency is the repository root, leave Base directory empty. If the repository contains an agency subdirectory, set Base directory to agency. Build command: npm run build. Publish directory: out (relative to the base directory). The included netlify.toml supplies these build settings. Node 22 is selected. This project is a static Next.js export and does not need a Next.js server adapter.

## Domain and indexing

Once the final Netlify URL or custom domain is known, set NEXT_PUBLIC_SITE_URL to that HTTPS origin without a trailing slash, then rebuild. This enables canonical URLs, sitemap entries, and indexing. Until then the current export deliberately stays noindex. For manual deployment, put this variable in .env.local, run npm run build, and upload the new out folder. Environment variables added only in Netlify cannot alter an already-built manual upload.

## Contact form

Phone, WhatsApp, and email links work. The inquiry form remains in preview mode until NEXT_PUBLIC_FORM_ENDPOINT is configured and the site rebuilt. Netlify hosting alone does not connect this JSON submission adapter to Netlify Forms. Use a compatible endpoint or implement a separate Netlify Forms integration.

## Checks

Run npm run lint, npm run typecheck, npm run build, and node scripts/check-export.mjs before uploading source changes. Hosting headers live in public/_headers and are copied into out on each build. Netlify automatically uses the exported 404.html for missing pages; do not add an SPA catch-all redirect.
