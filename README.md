# meld.hakancelik.dev

Marketing site for **Meld** — a minimalist tile-merge puzzle for iOS.

Static site served via GitHub Pages at <https://meld.hakancelik.dev>.

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

1. Push this directory to the repository's `main` branch.
2. In GitHub repo settings → Pages, set source to `main` / root.
3. The `CNAME` file points GitHub Pages at `meld.hakancelik.dev`.
   DNS: a `CNAME` record from `meld` → `<user>.github.io`.

## Assets

Screenshots and the app icon are copied from `../MeldApp/screenshots-generator/public/`.
Re-run the screenshot generator there and copy the updated PNGs into `assets/` if the app UI changes.

## Stack

- Plain HTML + CSS + a tiny vanilla JS file. No build step.
- Fonts via Google Fonts (Cormorant Garamond + Inter).
