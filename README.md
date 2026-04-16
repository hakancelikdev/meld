# meld.hakancelik.dev

Marketing site for **Meld** — a minimalist tile-merge puzzle for iOS.

Static site served via GitHub Pages at <https://meld.hakancelik.dev>.
Deploys automatically on every push to `main` through the `Deploy to GitHub Pages` workflow.

## Pages

| Path              | Purpose                          |
| ----------------- | -------------------------------- |
| `/`               | Landing page — pitch + CTAs      |
| `/privacy.html`   | Privacy Policy                   |
| `/terms.html`     | Terms of Use                     |
| `/support.html`   | FAQ / support contact            |
| `/404.html`       | Custom not-found page            |

## Local preview

```bash
# Any static server works; example with Python:
python3 -m http.server 4321
# then open http://localhost:4321
```

## Deploying

The site is deployed by the workflow at `.github/workflows/deploy.yml`:

- Triggered by every push to `main` (and manually via `workflow_dispatch`).
- Uploads the repo root as a Pages artifact.
- Deploys via `actions/deploy-pages@v4`.

### One-time GitHub setup

1. Repo **Settings → Pages → Build and deployment → Source**: **GitHub Actions**.
2. **Settings → Pages → Custom domain**: `meld.hakancelik.dev` (picked up from `CNAME`).
3. DNS (Cloudflare → `hakancelik.dev` → DNS):

   | Type  | Name | Content                   | Proxy     |
   | ----- | ---- | ------------------------- | --------- |
   | CNAME | meld | `hakancelikdev.github.io` | DNS only  |

4. Once the Pages cert is provisioned, enable **Enforce HTTPS**.

## Assets

Screenshots and the app icon are copied from `../MeldApp/screenshots-generator/public/`.
Re-run the screenshot generator there and copy the updated PNGs into `assets/` if the app UI changes.

## Stack

- Plain HTML + CSS + a tiny vanilla JS file. No build step.
- Fonts via Google Fonts (Cormorant Garamond + Inter).
