# 🚀 Deploying Meynix Site to Netlify

This repository is pre-configured for automated, zero-configuration deployment to Netlify.

---

## Method 1: Connect via GitHub (Recommended for automatic deployments)

1. Go to **[Netlify Dashboard](https://app.netlify.com/)** and log in.
2. Click **"Add new site"** → **"Import an existing project"**.
3. Choose **GitHub** and authorize access.
4. Select the repository: **`adminmeynix-arch/Meynix-Site`**.
5. Netlify will automatically detect the settings from `netlify.toml`:
   - **Base directory:** `agency` *(automatically detected from `netlify.toml`)*
   - **Build command:** `npm run build`
   - **Publish directory:** `out`
6. Click **"Deploy site"**.

Netlify will build all 24 static pages in ~15-20 seconds and provide your live URL (e.g. `https://meynix.netlify.app`).

---

## Method 2: Netlify CLI (Direct command-line deploy)

If you prefer deploying directly from your terminal:

```bash
# 1. Install Netlify CLI globally (if not installed)
npm install -g netlify-cli

# 2. Login to your Netlify account
ntl login

# 3. Deploy the pre-built out folder to production
cd agency
ntl deploy --prod --dir=out
```

---

## Pre-configured Optimizations in this Repository:
- **`output: 'export'`**: Static HTML generation (ultra-fast TTFB, global CDN delivery).
- **Security Headers**: HSTS, `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`.
- **Cache Optimization**: 1-year immutable caching for `/_next/static/*` assets.
- **Node.js 20 LTS**: Pinned environment for deterministic builds.
- **WhatsApp & Email Quotation Dispatch**: Fully functional on live static hosting without backend servers.
