# Developer Atlas — Vue 3 + Vite

A calm, pastel-green portfolio with an illustrated interactive map, project cards, career timeline, skills, credentials, and contact details. The site is built with **Vue 3 + Vite** and deploys to **GitHub Pages** using GitHub Actions.

## Requirements

- Node.js 20.19+ or 22.12+ recommended
- npm

## Run locally

```bash
npm install
npm run dev
```

Vite will print a local URL, usually `http://localhost:5173`.

## Build and preview

```bash
npm run build
npm run preview
```

The production-ready static site is generated in `dist/`. GitHub Pages hosts that output; it does not need a Vue server running in production.

## Preserve your existing assets

Before deploying, copy the **contents of your existing portfolio's `assets/` folder** into `public/assets/` in this Vue project. For example:

```text
public/assets/
├── docs/Kubeshan-Govender-CV.pdf
├── images/profile.jpg
└── certs/
    ├── education/
    ├── ibm/
    ├── bpesa/
    ├── microsoft/
    └── other/
```

Keep file names, capitalization, spaces, and folder names unchanged. These assets are copied into `dist/assets/` at build time. If you do not copy the original assets, the site will still build, but your CV and certificate links will not have the files to open and the profile image will fall back.

## Deploy to GitHub Pages

1. Copy this project into the root of your portfolio repository.
2. Copy your existing assets into `public/assets/` as explained above.
3. Commit and push to your default branch (`main` or `master`; both are included in the workflow).
4. In the GitHub repository, open **Settings → Pages**.
5. Under **Build and deployment → Source**, choose **GitHub Actions**.
6. Open the **Actions** tab and wait for the `Deploy Vue portfolio to GitHub Pages` workflow to complete successfully.

The workflow automatically builds and publishes every push to `main`. `vite.config.js` uses `base: './'` to keep built asset paths relative, which makes the project portable to a repository Pages URL such as `https://<username>.github.io/<repository>/`.

## Project structure

```text
src/
├── App.vue                    # Main page, hero, experience, skills, credentials, contact
├── main.js                    # Vue app entry point
├── style.css                  # Pastel-green design system and responsive layout
└── components/
    ├── AtlasExplorer.vue      # Reactive map pins, filters, destination detail card
    └── ProjectShowcase.vue    # Data-driven project cards
public/assets/                 # Put the original CV, profile photo, and certificates here
.github/workflows/deploy.yml   # Builds and deploys to GitHub Pages
```

## Notes

- The navigation uses in-page anchors rather than client-side routing, so no SPA fallback configuration is needed.
- The contact email, GitHub links, CV path, and certificate paths are retained from the supplied portfolio.
- Do not commit private credentials or API keys to a public portfolio repository.
